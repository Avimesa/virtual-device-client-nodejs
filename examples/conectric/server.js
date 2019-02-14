// Basic example, logs messages received from sensors through the gateway.

const gateway = require('conectric-usb-gateway');
const vdc = require('@avimesa/virtual-device');

gateway.runGateway({
	onSensorMessage: (sensorMessage) => {

		//
		// TODO: Hack
		//
		sensorMessage.sensorId = "cccc0000cccc0000000000000000" + sensorMessage.sensorId;

		let cloudMessage = vdc.conectric(sensorMessage);

		//
		// TODO: HACK
		//
		// Use short ID and temporary hack to get authentication key
		//
		let cloudObject = JSON.parse(cloudMessage);
		var deviceId = cloudObject.dev.dev_id;
		var authKey = temporaryHack(deviceId);

		//
		// Send request using Avimesa Virtual Device
		//

		vdc.sync(deviceId,
			authKey,
			cloudMessage,
			function (err, jsonResp, errResp) {
				//
				// Handle Response
				//

				// TODO: err is always true?

				if(errResp){
					console.log("err: " + errResp);
				}
				else {
					var resp = JSON.parse(jsonResp);
					if (resp.dev.dev_cmd) {
						console.log(`${deviceId} << Pending Command - ${resp.dev.dev_cmd.dev_cmd_id}`);
					} else {
						console.log(`${deviceId} << No command...`);
					}
				}
			}
		);
	}
});

//
// TODO: HACK
//
temporaryHack = function(deviceId){
	var map = {};
	map["cccc0000cccc00000000000000001708"] = "fa73786445d148e9b3fb061a0e401d6c";
	map["cccc0000cccc000000000000000020ae"] = "0f6535da825244e8b6d19658f68903b7";
	return map[deviceId];
};
