'use strict';

const vdc = require('../../');

// A Device ID and Authentication Key can be generated at app.avimesa.com
const deviceId = '';
const authKey = '';

if(!deviceId || !authKey){
	throw 'Please enter a valid deviceID and authKey'
}

// Get a timestamp to use for this message
const dts = Math.floor(new Date() / 1000);

// Build up a message for this Device ID
const message = new vdc.Message(deviceId,dts);

// Let's add a DC Amperage reading for channel 0
const ch0 = new vdc.Channel(0);
ch0.addChannelData(new vdc.ChannelData(0, 1.0, vdc.eAVI_ENG_UNIT_AMPS_DC));
message.dev.addChannel(ch0);

// Let's add a DC Amperage reading for channel 1
const ch1 = new vdc.Channel(1);
ch1.addChannelData(new vdc.ChannelData(0, 110.0, vdc.eAVI_ENG_UNIT_AMPS_AC));
message.dev.addChannel(ch1);

// Get the message to send to the Cloud
const cloudMessage = message.getMessage();

// And Send it
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
