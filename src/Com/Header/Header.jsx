import React from 'react'
import { AppBar, Toolbar,Typography,InputBase,Box } from '@mui/material'
import Autocomplete from "react-google-autocomplete"
import SearchIcon from '@mui/icons-material/Search';
import '../style.css'
// import useStyles from './styles'
const Header = ({ onPlaceChanged, onLoad }) => {
    // const classes= useStyles();
    
  return (
    <div> 
   <AppBar position="static">
    <Toolbar className="tool">
      <Box display="flex" className='head'>
    <Typography variant='h5' className="title1">
      Travel Cross  </Typography>
      
      <Typography variant='h6' className="title">
     Hotels, Restaurants and Attractions! </Typography>
      </Box>
     <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} placeholder='Explore the Globe ' className='search'  />
           
  
    </Toolbar>
   </AppBar>
    </div>
  )
}

export default Header
