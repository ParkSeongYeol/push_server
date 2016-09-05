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

----------------------------------------------------------
var gcm = require('node-gcm');


// or with object values
var message = new gcm.Message({
     collapseKey: 'demo',
     delayWhileIdle: true,
     timeToLive: 3,
     data: {
          lecture_id:"notice",
          title:"제목입니다",
          desc: "설명입니다",
          param1: '첫번째파람',
          param2: '두번째파람'
     }
});

var server_access_key = '/*안드로이드 개발자가 넘겨준 서버키*/';
var sender = new gcm.Sender(server_access_key);
var registrationIds = [ ];     // 여기에 pushid 문자열을 넣는다.

registrationIds = ['/*안드로이드 단말기에서 나온 푸시 아이디*/'];

/*
for (var i=0; i<push_ids.length; i++) {
     registrationIds.push(push_ids[i]);
}
*/

// 푸시를 날린다!
sender.send(message, registrationIds, 4, function (err, result) {
     // 여기서 푸시 성공 및 실패한 결과를 준다. 재귀로 다시 푸시를 날려볼 수도 있다.
     console.log(result); 
});