import React from 'react'
import { Box, Typography, Button,Cards,CardMedia, CardContent,CardActions , Chip, Card } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Rating from '@mui/material/Rating';
// import {demores} from '../demores.jpg'

const PlaceDet = ({place}) => {
  // console.log(place.name);
  return (
    <Card elevation={6} className='list2'>
<CardMedia
style={{height :400}}

image={ place.photo? place.photo.images.large.url:" https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
}
title={place.name}

/>
<CardContent>
  <Typography gutterBottom variant='h5'>{place.name}</Typography>
  <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>

  <Box display="flex" justifyContent="space-between">
  <Typography variant='subtitle'>Price</Typography>
  <Typography gutterBottom variant='subtitle'>{place.price_level ? place.price_level : " $$" }</Typography>
  </Box>
  <Box display="flex" justifyContent="space-between">
  <Typography variant='subtitle'>Ranking</Typography>
  <Typography gutterBottom variant='subtitle'>{place.ranking}</Typography>
  </Box>

  {
    place?.cuisine?. map(({name})=>(
      <Chip key={name} size="small" label={name}/>

    ))
  }
  {
    place?.address &&(
     <Typography gutterBottom variant="body2" color="textSecondary"> <LocationOnOutlined className='icon' />{place.address}</Typography>

    )
  }
  {
    place?.phone &&(
     <Typography gutterBottom variant="body2" color="textSecondary"> <LocalPhoneRoundedIcon className='icon'/>{place.phone}</Typography>

    )
  }


  <CardActions>
<Button size='small' color='primary' onClick={()=>window.open(place.web_url, "_blank")}> Trip Advisor</Button>
<Button size='small' color='primary' onClick={()=>window.open(place.website, "_blank")}> Website</Button>

  </CardActions>
</CardContent>



    </Card>
  )
}

export default PlaceDet
