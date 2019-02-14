const units = require('./units');
const Models = require('./models');

/**
 * Get an Avimesa Cloud Message from a Conectric Sensor Message
 * @param {object} sensorMessage - Conectric sensor message
 * @returns {object} cloudMessage - Avimesa Cloud message
 */
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
			throw new Error("Unknown sensor type");
		}

		return JSON.stringify(cloudMessage);
	} else {
		throw new Error("Missing sensorMessage");
	}
};