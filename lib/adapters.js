const units = require('./units');
const Models = require('./models');

exports.conectric = function(sensorMessage){

	if (sensorMessage){
		let cloudMessage = new Models.Message(sensorMessage.sensorId, sensorMessage.timestamp);
		cloudMessage.dev.dev_data.bat = sensorMessage.payload.battery;

		if(sensorMessage.type === 'motion'){
			let motionChannel = new Models.Channel(0);
			motionChannel.addChannelData(new Models.ChannelData(0,
				sensorMessage.payload.motion === true ? 1 : 0,
				units.eAVI_ENG_UNIT_MOTION));
			cloudMessage.dev.addChannel(motionChannel);
		}
		else if(sensorMessage.type === 'tempHumidity'){
			let tempChannel = new Models.Channel(0);
			tempChannel.addChannelData(new Models.ChannelData(0,
				sensorMessage.payload.temperature,
				sensorMessage.payload.temperatureUnit === 'C' ? units.eAVI_ENG_UNIT_C : units.eAVI_ENG_UNIT_F));
			cloudMessage.dev.addChannel(tempChannel);

			let humidityChannel = new Models.Channel(1);
			humidityChannel.addChannelData(new Models.ChannelData(0,
				sensorMessage.payload.humidity,
				units.eAVI_ENG_UNIT_REL_HUM));
			cloudMessage.dev.addChannel(humidityChannel);
		}
		else if(sensorMessage.type === 'switch'){
			let switchChannel = new Models.Channel(0);
			switchChannel.addChannelData(new Models.ChannelData(0,
				sensorMessage.payload.switch === true ? 1 : 0,
				units.eAVI_ENG_UNIT_OPEN_CLOSED));
			cloudMessage.dev.addChannel(switchChannel);
		}else {
			throw new Error("Unkown sensor type");
		}

		return JSON.stringify(cloudMessage);
	}
/*
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
*/
	return null;
};