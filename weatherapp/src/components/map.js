import React, { Component } from 'react'
import './css/jquery-position-picker.css';



export class Map extends Component {
    render() {
        return (
            <div>
     <script src="js/jquery-1.7.2.min.js"></script>
     <script src="js/OpenLayers.js"></script>
     <script src="js/jquery-position-picker.debug.js"></script>

     <fieldset class="gllpLatlonPicker">
        <div class="gllpMap"></div>
        <br/>
        <input type="hidden" class="gllpLatitude"/>
        <input type="hidden" class="gllpLongitude"/>
        <input type="hidden" class="gllpZoom"/>
        <input type="hidden" class="gllpLocationName"/>
    </fieldset>
            </div>
        )
    }
}

export default Map
