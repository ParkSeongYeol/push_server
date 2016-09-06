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