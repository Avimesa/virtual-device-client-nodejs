'use strict';

const units = require('./units');

/** Class representing a Message. */
class Message {
	/**
	 * Create a Message
	 * @param {string} devId - 32 character, hex value as string
	 * @param {number} timestamp - timestamp
	 */
	constructor(devId,timestamp){
		this.api_maj = 0;
		this.api_min = 11;
		this.dts = timestamp;
		this.dev = new Device(devId);
	}
}

/** Class representing a Device part of Message. */
class Device {
	/**
	 * Create a Device
	 * @param {string} devId - 32 character, hex value as string
	 */
	constructor(devId){
		var regex = new RegExp('^[0-9a-fA-F]{32}');
		if (!regex.test(devId)){
			throw new Error('Invalid Device ID format');
		}

		// NOTE: ORDERING IS CRITICAL FOR DIALTONE PROTOCOL
		this.dev_id = devId;
		this.dev_data = new DeviceData();
		this.chans = [];
	}

	addChannel(channel){
		this.chans.push(channel);
	}
}

/** Class representing a DeviceData part of Message. */
class DeviceData {
	/**
	 * Create a Device Data
	 */
	constructor(){
		// NOTE: ORDERING IS CRITICAL FOR DIALTONE PROTOCOL
		this.dev_type = 0;
		this.fw = 0;
		this.hw_rev = 0;
		this.bat = 0;
		this.rssi = 0;
		this.temp = -273;
		this.dev_sts = 0;
	}
}

/** Class representing a Channel part of Message. */
class Channel {
	/**
	 * Create a Channel
	 * @param {number} index - channel index
	 */
	constructor(index){
		// NOTE: ORDERING IS CRITICAL FOR DIALTONE PROTOCOL
		this.ch_idx = index;
		this.ch_data = [];
	}

	addChannelData(datum){
		this.ch_data.push(datum);
	}
}

/** Class representing a Channel Datum of Message. */
class ChannelData {
	/**
	 * Create a Channel Datum
	 * @param {number} index - channel index
	 * @param {number} value - data value
	 * @param {number} units - units index
	 */
	constructor(index,value,units){
		// NOTE: ORDERING IS CRITICAL FOR DIALTONE PROTOCOL
		this.data_idx = index;
		this.units = units;
		this.val = value;
	}
}

module.exports = {
	Message,
	Device,
	DeviceData,
	Channel,
	ChannelData
};
