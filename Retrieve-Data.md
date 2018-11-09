# Retieve Data Function

Follow the steps from [Create Data Function](./Create-Data.md). 

The code for this function is here [CODE](./functions/retrieve-data)

### retrieve.js
```javascript
var Cloudant = require('@cloudant/cloudant');

function retrieve(params) {
  var username = params.username;
  var password = params.password;
  var cloudant = Cloudant({account:username, password:password});

  var database = cloudant.db.use('workshop');
  console.log("v0.0.2");
  return new Promise(function(resolve, reject){
    database.find({
      "selector": {
         "time": {
           "$gt": null
         }
      },
      "sort": [
        {
           "time": "asc"
        }
      ],
      "fields": [
         "from",
         "time",
         "img",
         "name",
         "hobby"
      ],
      limit: 250,
   }, function(err, result){
      if(err){
        console.log("Nothing was found");
        reject(err);
      } else {
        console.log("Data was found");
        resolve({data: result.docs});
      }
   });
  });
}

exports.main = retrieve;
```

