/*
 * COPYRIGHT: This file and the source codes contained herein ("document") are
 * the property of Avimesa, Inc.  Copyright 2016-2019, Avimesa, Inc.
 *
 * LICENSE:  Avimesa, Inc. grants the RECIPIENT a worldwide, royalty free,
 * limited license to use the source codes in this document as specified
 * in the Avimesa Open License:  https://avimesa.com/openlicense.txt
 */

'use strict';

var fs = require('fs');
const native = require('./native');

function sync(deviceId, authKey, jsonMsg, respCb){

	if (jsonMsg !== null) {
		// Create a temporary file to use to pass as command line arg to native function
		const tempFile = `${(new Date).getTime()}.temp`;

		fs.writeFile(tempFile, jsonMsg, 'utf8', (err) => {
			if (err){
				console.log("VDC: Failed writing to temp file");
				cb(err,null);
				return;
			} else {
				// Invoke the native function
				native.avmsavdc(
					config.deviceCloud.IP_ADDRESS,
					config.deviceCloud.PORT,
					tempFile,
					deviceId,
					authKey,
					(err, stdout, stderr) => {
						respCb(err,stdout);

						// Delete temporary file
						fs.stat(tempFile, function (err, stats) {
							if (err) {
								console.log("VDC: Failed locating temp file to delete");
								return;
							}

							fs.unlink(tempFile,function(err){
								if(err) {
									console.log("VDC: Failed deleting temp file");
								}
							});
						});
					}
				);
			}
		});
	}
}

module.exports = sync;
