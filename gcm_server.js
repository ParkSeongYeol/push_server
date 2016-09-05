var GCM = require('gcm').GCM;
var apiKey = '2번에서 적어둔 Server Key 값';
var gcm = new GCM(apiKey);
var message = {
 registration_id:'3번에 적어둔 Register ID 값',
 collapse_key: 'demo',
 'data.key1': 'GCM 테스트 중입니다.',
 'data.key2': '송군함대 화이팅~!'
};
gcm.send(message, function(err, messageId){
 if (err) {
  console.log("Something has gone wrong!");
 } else{
  console.log("Sent with message ID: ", messageId);
 }
}); 