// Basic example, logs messages received from sensors through the gateway.

const gateway = require('conectric-usb-gateway');
const vdc = require('@avimesa/virtual-device');

gateway.runGateway({
	onSensorMessage: (sensorMessage) => {

		//
		// TODO: Remove Hack
		//
		sensorMessage.sensorId = "cccc0000cccc0000000000000000" + sensorMessage.sensorId;
		//

		let cloudMessage = vdc.conectric(sensorMessage);

		//
		// TODO: Remove Hack
		//
		// Use short ID and temporary hack to get authentication key
		//
		let cloudObject = JSON.parse(cloudMessage);
		var deviceId = cloudObject.dev.dev_id;
		var authKey = temporaryHack(deviceId);

		//
		// Send request using Avimesa Virtual Device
		//
		vdc.sync(deviceId, authKey, cloudMessage, function(err, cloudResponse, errResp) {
			if(err){
				console.log("VDC Error: " + errResp);
			}
			else {
				let cloudResponseObj = JSON.parse(cloudResponse);
				if (cloudResponseObj.dev.dev_cmd) {
					console.log(`${deviceId} << Pending Command - ${cloudResponseObj.dev.dev_cmd.dev_cmd_id}`);
				} else {
					console.log(`${deviceId} << No command...`);
				}
			}
		});
	}
});

//
// TODO: Remove Hack
//
temporaryHack = function(deviceId){
	var map = {};
	map["0"] = "0";
	map["1"] = "1";
	return map[deviceId];
};
