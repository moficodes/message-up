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
    this.loadData = this.loadData.bind(this);
  }
  startTimer() {
    this.timer = setInterval(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
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
        var arr = val.response.result.data;

        arr.forEach(element => {
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
  }

  componentWillMount() {
    this.loadData();
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