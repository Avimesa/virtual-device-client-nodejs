'use strict';

var fs = require('fs');
const { exec } = require('child_process');

const DC_HOSTNAME = 'devclserv001.avimesa.com';
const DC_PORT = 36360;

function avmsavdc(hostname,port,jsonFile,deviceId,authKey,cb){

	const cmd = `avmsavdc -s ${hostname} -p ${port} -j ${jsonFile} -i ${deviceId} -a ${authKey}`;
	exec(cmd, (err, stdout, stderr) => {
		if (cb) {
			cb(err, stdout, stderr);
		}
	});
}

exports.sync = function(deviceId, authKey, jsonMsg, respCb){

	if (jsonMsg !== null) {
		// Create a temporary file to use to pass as command line arg to native function
		const tempFile = `${(new Date).getTime()}.temp`;

		fs.writeFile(tempFile, jsonMsg, 'utf8', (err) => {
			if (err){
				cb(err,null,"VDC: Failed writing to temp file");
			} else {
				// Invoke the native function
				avmsavdc(
					DC_HOSTNAME,
					DC_PORT,
					tempFile,
					deviceId,
					authKey,
					(err, stdout, stderr) => {

						// Delete temporary file - async...
						fs.stat(tempFile, function (err, stats) {
							if (err) {
								console.log('VDC: Failed locating temp file to delete');
								return;
							}

							fs.unlink(tempFile,function(err){
								if(err) {
									console.log('VDC: Failed deleting temp file');
								}
								return;
							});
						});

						respCb(err,stdout,stderr);
					}
				);
			}
		});
	}
};
