import React from 'react';
import GoogleMapReact from "google-map-react"
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './Style.js'
const Map = ({setBound,coordinates,setCordinates}) => {
    const classes=useStyles();


    
    const isMobile=useMediaQuery('(min-width:600px');
    return (
        <div className={classes.mapContainer}>
        <GoogleMapReact 
        bootstrapURLKeys={{key:'AIzaSyDokEqIQ88kBKmrfCeqsw03LF8_ymKeVvc'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
            console.log(e)
            setCordinates({lat:e.center.lat,lng:e.center.lng})
            setBound({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }}
         onChildClick={''}
        >
        
        </GoogleMapReact>
        </div>
    );
};

export default Map;