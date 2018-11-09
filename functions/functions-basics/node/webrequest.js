var requests = require('request')
function main(params){
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return new Promise(function(resolve, reject){
    requests.get(url, function(err, resp, body){
      if(err){
        reject({err: "Can not get data"});
      } else{
        resolve(JSON.parse(body));
      }
    })
  });
}