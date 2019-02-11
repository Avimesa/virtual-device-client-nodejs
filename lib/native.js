/*
 * COPYRIGHT: This file and the source codes contained herein ("document") are
 * the property of Avimesa, Inc.  Copyright 2016-2019, Avimesa, Inc.
 *
 * LICENSE:  Avimesa, Inc. grants the RECIPIENT a worldwide, royalty free,
 * limited license to use the source codes in this document as specified
 * in the Avimesa Open License:  https://avimesa.com/openlicense.txt
 */

'use strict';

const exec = require('child_process');

function avmsavdc(hostname,port,jsonFile,deviceId,authKey,cb){

	const cmd = `avmsavdc -s ${hostname} -p ${port} -j ${jsonFile} -i ${deviceId} -a ${authKey}`;
	exec(cmd, (err, stdout, stderr) => {
		if (cb) {
			cb(err, stdout, stderr);
		}
	});
}

module.exports = avmsavdc;
