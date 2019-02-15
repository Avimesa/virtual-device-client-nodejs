'use strict';

const vdc = require('../../');

const deviceId = '00000000000000000000000000000000';
const authKey = '00000000000000000000000000000000';
const dts = Math.floor(new Date() / 1000);
const message = new vdc.Message(deviceId,dts);
const ch0 = new vdc.Channel(0);
ch0.addChannelData(new vdc.ChannelData(0, 1.0, vdc.eAVI_ENG_UNIT_AMPS_DC));
message.dev.addChannel(ch0);
const ch1 = new vdc.Channel(1);
ch1.addChannelData(new vdc.ChannelData(0, 110.0, vdc.eAVI_ENG_UNIT_AMPS_AC));
message.dev.addChannel(ch1);

const cloudMessage = message.getMessage();

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
