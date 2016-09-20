var gcm = require('node-gcm');

var registration_id = 'APA91bFWA9TUeXhzo-MTVr1uXuwZlnOq-t3f_Ng9r5CvfsxUl96doOs_qm_9PbXVPreHyLcYgnUjUxqmT1q_EJm5v1Bcm6mnpq6Sz3qpcN0RFSjBlewf1y1yM3TLS19HMbNxT_vKrZWB';
var fileReadDone = false;
var message;

/*
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
*/


// read from file(line by line)
/*
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('D:/pushdata.txt');


lr.on('error', function (err) {
	// 'err' contains error object
});

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
	
	if (curline = 0)
	{
		registration_id = line;	
	}
	else if (curline = 1)
	{
		var message = new gcm.Message
		(
			{
				collapseKey: 'demo',
				delayWhileIdle: true,
				timeToLive: 3,
				data:
				{
					key1: line,
					key2: 'saltfactory push demo'
				}
			}
		);
	}
	
	//console.log(curline + ' ' + line);
	curline = curline + 1;
});

lr.on('end', function () {
	// All lines are read, file is closed now.
	fileReadDone = true;
});
*/


var lineByLine = require('n-readlines');
var liner = new lineByLine('D:/pushdata.txt');

var curline = 0;
var line;
while (line = liner.next()) {
    //console.log('Line ' + lineNumber + ': ' + line.toString('ascii'));
	if (curline = 0)
	{
		registration_id = line;	
	}
	else if (curline = 1)
	{
		var message = new gcm.Message
		(
			{
				collapseKey: 'demo',
				delayWhileIdle: true,
				timeToLive: 3,
				data:
				{
					key1: line,
					key2: 'saltfactory push demo'
				}
			}
		);
	}
    curline++;
}

console.log('end of line reached');

var server_access_key = 'AIzaSyCLyKTKpOmGheXwUT9ba-JdGU74GqzVpG4';
var sender = new gcm.Sender(server_access_key);
var registrationIds = [];

// At least one required
registrationIds.push(registration_id);
console.log(registration_id);

/**
 * Params: message-literal, registrationIds-array, No. of retries, callback-function
 **/
sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});