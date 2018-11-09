# React App
For the react app I made use of `create-react-app`

This guide will get you started
https://github.com/facebook/create-react-app/blob/master/README.md#getting-started

Steps
1. `npx create-react-app <appname>`
2. `cd <appname>`
3. `npm install --save @material-ui/core`
We will use material component to make our app look a little better. 
4. `npm start`
5. App will run in http://localhost:3000

We will change the boilerplate code now.
Stop the app from terminal, by using `ctrl-c` 

Replace the `App.js` code with the following
Code can also be found here [CODE](./src/App.js)

### App.js
```javascript
import React, {
  Component
} from 'react';
import request from 'request';
import _ from 'lodash';
import {Card,  CardContent, CardMedia, Typography} from '@material-ui/core';
import './App.css';

import secret from './secret.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      data: {}
    }
    this.startTimer = this.startTimer.bind(this)
  }
  startTimer() {
    console.log(secret);
    console.log(secret.DATA_RETRIEVE_URL);
    this.timer = setInterval(() => {
      var options = {
        url: secret.DATA_RETRIEVE_URL,
        method: 'POST',
        auth: {
          'user': secret.API_USER,
          'pass': secret.API_PASS
        }
      };

      var that = this;

      request(options, function (err, response, body) {
        if (err) {
          console.log("error getting data");
        } else {
          var val = JSON.parse(body);
          console.log(val.response.result.data)
          var arr = val.response.result.data;

          arr.forEach(element => {
            console.log(that);
            if (element.from in that.state.data) {
              var temp = that.state.data[element.from];
              if (!_.isEqual(temp, element)) {
                temp = { ...temp,
                  ...element
                }
                that.state.data[element.from] = temp;
              }
            } else {
              that.state.data[element.from] = element;
            }
          });
        }
      });
      this.setState({...that.state});
    }, 3000);
  }

  componentWillMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    var state = this.state;
    var data = Object.keys(state.data).map(function (key, index) {
      var name = ("name" in state.data[key])?(<CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Name : {state.data[key].name}
        </Typography>
      </CardContent>):null;
      var hobby = ("hobby" in state.data[key])?(<CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Hobby : {state.data[key].hobby}
        </Typography>
      </CardContent>):null;

      var image = ("img" in state.data[key])?(
      <CardMedia 
      style={styles.media}
      image={state.data[key].img}>
      </CardMedia>):null;

        return ( <Card style={styles.card}>
          {image}
          {name}
          {hobby}
        </Card>)
      });
      return ( <div className = "App">
        <header className = "App-header">
        <ul> {data} </ul> </header> 
        </div>
      );
    }
  }

  const styles = {
    card: {
      maxWidth: 600,
      marginBottom: 10,
    },
    media: {
      height: 300
    }
  };

  export default App;
  ```
If you look at the last import statement, you will see `import secret from './secret.json';`. But you wont see the file in the code repository. There is a `secret.template.json`. You need to find this data to and make your own `secret.json` file. 