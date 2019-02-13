const assert = require('assert');
const adpater = require('../lib/adapters');
const units = require('../lib/units');


describe('adapters', function() {

	describe('#conectric()', function() {

		it('should error on bad device ID', function() {
			let sensorMessage = {
				"type": "motion",
				"payload": {
					"battery": 2.8,
					"motion": true
				},
				"timestamp": 1518757698977,
				"sensorId": "02A2",
				"sequenceNumber": 12
			};

			try{
				var cloudMessage = adpater.conectric(sensorMessage);
				assert.fail('Should throw error');
			}catch(e){
			}
		});


		it('should translate a "motion" message', function() {
			let sensorMessage = {
				"type":"motion",
				"payload":{
					"battery":3.3,
					"motion":true
				},
				"timestamp":1550011057,
				"sensorId":"1c371c371c371c371c371c371c371c37",
				"sequenceNumber":198};

			var cloudMessage = adpater.conectric(sensorMessage);
			assert.notEqual(cloudMessage, null);
			let msgObject = JSON.parse(cloudMessage);

			assert.equal(msgObject.dev.dev_id, sensorMessage.sensorId);
			assert.equal(msgObject.dts, sensorMessage.timestamp);
			assert.equal(msgObject.dev.chans[0].ch_data[0].val, 1);
			assert.equal(msgObject.dev.chans[0].ch_data[0].units, units.eAVI_ENG_UNIT_MOTION);
		});


		it('should translate a "tempHumidity" message', function(){
			let sensorMessage = {
				"type": "tempHumidity",
				"payload": {
					"battery": 3,
					"temperature": 73.33,
					"temperatureUnit": "F",
					"humidity": 60.65
				},
				"timestamp": 1518746385455,
				"sensorId": "a946a946a946a946a946a946a946a946",
				"sequenceNumber": 1
			};

			var cloudMessage = adpater.conectric(sensorMessage);
			assert.notEqual(cloudMessage, null);
			let msgObject = JSON.parse(cloudMessage);

			assert.equal(msgObject.dev.dev_id, sensorMessage.sensorId);
			assert.equal(msgObject.dts, sensorMessage.timestamp);
			assert.equal(msgObject.dev.chans[0].ch_data[0].val, 73.33);
			assert.equal(msgObject.dev.chans[0].ch_data[0].units, units.eAVI_ENG_UNIT_F);
			assert.equal(msgObject.dev.chans[1].ch_data[0].val, 60.65);
			assert.equal(msgObject.dev.chans[1].ch_data[0].units, units.eAVI_ENG_UNIT_REL_HUM);
		});


		it('should translate a "switch" message', function(){
			let sensorMessage = {
				"type": "switch",
					"payload": {
					"battery": 3,
						"switch": false
				},
				"timestamp": 1518757698977,
					"sensorId": "02190219021902190219021902190219",
					"sequenceNumber": 0
			};

			var cloudMessage = adpater.conectric(sensorMessage);
			assert.notEqual(cloudMessage, null);
			let msgObject = JSON.parse(cloudMessage);

			assert.equal(msgObject.dev.dev_id, sensorMessage.sensorId);
			assert.equal(msgObject.dts, sensorMessage.timestamp);
			assert.equal(msgObject.dev.chans[0].ch_data[0].val, 0);
			assert.equal(msgObject.dev.chans[0].ch_data[0].units, units.eAVI_ENG_UNIT_OPEN_CLOSED);
		});
	});

});