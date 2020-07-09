import React, { Component } from 'react'
import styled from 'styled-components'
import "./component.css"
import Modal from 'react-modal'



function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();

    var time = date + ' ' + month + ' ' + year;
    return time;
  }

  async function getActivities(){
      
  }

  
export class Dayholder extends Component {
    
    render() {
        
        const days = this.props.weather.map((day) =>
        <td>
        <div className="weatherdiv" onClick={()=> this.props.handleActivity(day)}>
            <a>{day.weather[0].description} </a>
               <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
        <a>{timeConverter(day.dt)}</a>
        </div>
        </td>
        )
        return (
        <div className="weatherholder">
            <table>
                <tr>
                    {days}
                </tr>
            </table>
        </div>
        )
    }
}

export default Dayholder
