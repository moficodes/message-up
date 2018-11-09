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

We need to find the url and api key for our react app to call this functions. 

1. Go to the retrieve-data function
2. Go to endpoints
3. Make note of the url
4. Click on API-KEY
5. Copy the Key
6. The key is a : separated value, First part of it is the username, second is password. Make a note of that. We will need that for out react app.

[Step 4 : React App](./React-App.md)
