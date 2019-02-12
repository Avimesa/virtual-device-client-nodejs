// Basic example, logs messages received from sensors through the gateway.

const gateway = require('conectric-usb-gateway');
const vdc = require('@avimesa/virtual-device');

gateway.runGateway({
	onSensorMessage: (sensorMessage) => {
		//
		// Massage Conectric message into Avimesa
		//
		var avmsaModel = vdc.fromConectric(sensorMessage);
		var jsonMsg = JSON.stringify(avmsaModel);

		//
		// Use short ID and temporary hack to get authentication key
		//
		var deviceId = avmsaModel.dev.dev_id;
		var authKey = temporaryHack(deviceId);

		console.log(`${deviceId} >>`);

		//
		// Send request using Avimesa Virtual Device
		//

		vdc.sync(deviceId,
			authKey,
			jsonMsg,
			function (err, jsonResp, errResp) {
				//
				// Handle Response
				//
				var resp = JSON.parse(jsonResp);
				if(resp.dev.dev_cmd){
					console.log(`${deviceId} << Pending Command - ${resp.dev.dev_cmd.dev_cmd_id}`);
				} else {
					console.log(`${deviceId} << No command...`);
				}
			}
		);
	}
});

temporaryHack = function(deviceId){
	var map = {};
	map["cccc0000cccc00000000000000001708"] = "fa73786445d148e9b3fb061a0e401d6c";
	map["cccc0000cccc000000000000000020ae"] = "0f6535da825244e8b6d19658f68903b7";
	return map[deviceId];
};
