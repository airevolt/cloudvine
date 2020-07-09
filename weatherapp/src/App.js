import React from "react";
import logo from "./logo.svg";
import { Component } from "react";
import Map from "./components/map";
import "./App.css";
import Modal from "react-modal";
import axios from "axios";
import Head from "./components/header";
import PrimarySearchAppBar from "./components/menu";
import Daycards from "./components/daycards";
import SolidGameCardDemo from "./components/bettercards"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';


function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();

  var time = date + " " + month + " " + year;
  return time;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      modalState: false,
      currentWeather: {
        dt: 1594108800,
        temp: 297.43,
        feels_like: 299.35,
        pressure: 1013,
        humidity: 85,
        dew_point: 294.86,
        clouds: 60,
        wind_speed: 3.67,
        wind_deg: 258,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
      activity: "",
      snackbar: false,
      snackMessage: "",
      city: "",
      url: 'api.openweathermap.org/data/2.5/forecast?q=',
      url2: '&appid=34c01103eadb511b3a3632d5768a5ac3'
    };
    this.fetchWeather();
    this.handleActivity = this.handleActivity.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  async fetchWeather() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=16.31609&lon=-17.49041&exclude=minutely,hourly&appid=34c01103eadb511b3a3632d5768a5ac3"
    );
    const json = await response.json();
    this.setState({ forecast: this.state.forecast.concat(json.daily) });
  }

  handleActivity = (params) => {
    this.setState({ currentWeather: params, modalState: true });
  };

  changeHandler = (e) => {
    this.setState({ activity: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let submitPost = {
      weather: this.state.currentWeather.weather[0].description,
      date: this.state.currentWeather.dt,
      activity: this.state.activity,
    };
    let close = () => this.setState({snackbar: false});
    this.setState({ modalState: false});
    axios
      .post("http://localhost:5003/weather/", submitPost)
      .then((response) => {
        this.setState({snackbar: true, snackMessage: response.data.message})
        setTimeout(close, 2000)
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(submitPost);
  };


  render() {
    return (
      <div className="grid-container">
                  <PrimarySearchAppBar />

        <div className="grid-item">
        </div>
        <div className="grid-item">
            <SolidGameCardDemo weather={this.state.forecast}
          handleActivity={this.handleActivity}/>
        </div>
      

        <Modal isOpen={this.state.modalState} className="modal-content">
          <div style={{ display: "block" }}>
            <form onSubmit={this.submitHandler}>
              <div class="modal-header">
                <h2>Add Activity</h2>
              </div>
              <table>
                <tr></tr>
                <tr>
                  <td>
                    <label>Weather: </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="weather"
                      value={this.state.currentWeather.weather[0].description.toLocaleUpperCase()}
                      onChange={this.changeHandler}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Date: </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="date"
                      value={timeConverter(this.state.currentWeather.dt)}
                      onChange={this.changeHandler}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Activity </label>
                  </td>
                  <td>
                    <textarea
                      name="activity"
                      onChange={this.changeHandler}
                    ></textarea>
                  </td>
                </tr>
              </table>
              <button type="submit" className="addbutton">
                Add
              </button>
            </form>
          </div>
          <div>
            <button
              onClick={() => this.setState({ modalState: false })}
              className="closebutton"
            >
              Close
            </button>
          </div>
        </Modal>

        <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.snackbar}
        autoHideDuration={6000}
        message={this.state.snackMessage}
      />
    </div>

      </div>
    );
  }
}

export default App;
