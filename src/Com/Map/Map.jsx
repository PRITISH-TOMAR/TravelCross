import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper,Typography, paperClasses, useMediaQuery } from '@mui/material'
import Rating from '@mui/material/Rating';
// import mapStyles from '.././mapStyles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PlaceIcon from '@mui/icons-material/Place';

import './map.css'
const Map = ({setCoordinates, setBounds, coordinates, places}) => {

  const matches = useMediaQuery('(min-width:600px)');
  
  return (
    <>

      <div className="map-con">
       < GoogleMapReact
       bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
       defaultCenter={coordinates}
       center={coordinates}
       defaultZoom={11}
       margin={[100,50,50,50]}
       options={''}
       onChange={(e)=>{
          console.log(e);
          setCoordinates({lat:e.center.lat,lng:e.center.lng});
          
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
       }
      }

       >       
           
          
       

       </GoogleMapReact >
      </div>


    </>
  )
}

export default Map
