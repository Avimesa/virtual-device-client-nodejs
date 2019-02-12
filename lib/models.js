'use strict';

const units = require('./units');

exports.fromConectric = function(msg){

	var avmsaJson = {
		"api_maj":0,"api_min":10,"dts":0,
		"dev":{
			"dev_id":"00000000000000000000000000000000",
			"dev_data":
				{"dev_type":256,"fw":0,"hw_rev":0,"bat":0,"rssi":0,"temp":-273,"dev_sts":0},
			"chans":[
				{"ch_idx":0,"ch_data":[{"data_idx":0,"units":units.eAVI_ENG_UNIT_UNKNOWN,"val":0.0}]},
				{"ch_idx":1,"ch_data":[{"data_idx":0,"units":units.eAVI_ENG_UNIT_UNKNOWN,"val":0.0}]}
			]
		}
	};

	if (msg.type = "tempHumidity") {

		avmsaJson.dts = msg.timestamp;
		avmsaJson.dev.dev_id = `cccc0000cccc0000000000000000${msg.sensorId}`;
		avmsaJson.dev.dev_data.bat = msg.payload.battery;

		avmsaJson.dev.chans[0].ch_data[0].data_idx = 0;
		avmsaJson.dev.chans[0].ch_data[0].val = msg.payload.temperature;

		if (msg.payload.temperatureUnit === 'C'){
			avmsaJson.dev.chans[0].ch_data[0].units = units.eAVI_ENG_UNIT_C;
		} else{
			avmsaJson.dev.chans[0].ch_data[0].units = units.eAVI_ENG_UNIT_F;
		}

		avmsaJson.dev.chans[1].ch_data[0].data_idx = 0;
		avmsaJson.dev.chans[1].ch_data[0].val = msg.payload.humidity;
		avmsaJson.dev.chans[1].ch_data[0].units = units.eAVI_ENG_UNIT_REL_HUM;

		return avmsaJson;
	}

	return null;
};
