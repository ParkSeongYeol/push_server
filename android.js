var gcm = require('node-gcm');

// create a message with default values
var message = new gcm.Message();

// or with object values
var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        key1: 'æ»≥Á«œººø‰.',
        key2: 'saltfactory push demo'
    }
});

// read from file(line by line)
var curline = 0;
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('pushdata.txt');

lr.on('error', function (err) {
	// 'err' contains error object
});

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
	console.log(curline + ' ' + line);
	curline = curline + 1;
});

lr.on('end', function () {
	// All lines are read, file is closed now.
});

var server_access_key = 'XXXXX';
var sender = new gcm.Sender(server_access_key);
var registrationIds = [];

var registration_id = 'YYYY';
// At least one required
registrationIds.push(registration_id);

/**
 * Params: message-literal, registrationIds-array, No. of retries, callback-function
 **/
sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});