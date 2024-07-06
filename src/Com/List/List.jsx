import React, { useState } from 'react'
import {  Grid, Typography, InputLabel, MenuItem, FormControl ,Select } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import PlaceDet from '../PlaceDet/PlaceDet'
import './list.css'
const List = ({places , type, setType, rating,setRating, isLoading}) => {

  return (
    <div className='list-con'>
    
      <FormControl className='form'>
       
       <Select value={type} onChange={(e)=>setType(e.target.value)}>
       <MenuItem value="hotels">Hotels</MenuItem>
       <MenuItem value="restaurants">Restaurants</MenuItem>
       <MenuItem value="attractions">Attractions</MenuItem>


       </Select>
      </FormControl>


      <FormControl className='form'>
     <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
     <MenuItem value={5} >All</MenuItem>
     <MenuItem value={3}>Above 3.0</MenuItem>
     <MenuItem value={4}>Above 4.0 </MenuItem>
     <MenuItem value={4.5}>Above 4.5</MenuItem>


     </Select>
    </FormControl>

      {isLoading ? (
        <div >
          <br/>
          <CircularProgress size="3rem"  />
        </div>
      ) : (
        <>
       

      <Grid container spacing={3} className='list' >
        {
          places?.map((place,i)=>   (
            <Grid item key={i} xs={12} >
              <PlaceDet place={place} />
            </Grid>
          ))
          }
      </Grid>
     
      </>
      )}
      </div>  
  )
}

export default List
