import './App.css';
import Header from './Com/Header/Header';
import Map from './Com/Map/Map';
import List from './Com/List/List'
import {getPlacesData} from './api/Index';
import PlaceDet from './Com/PlaceDet/PlaceDet';
import { CssBaseline, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
          const [places,setPlaces]= useState([]);
          const [type, setType]=useState('restaurants')
            const[coordinates,setCoordinates]=useState({lat:0,lng:0})
            const [isLoading, setIsLoading] = useState(false);
            const [rating, setRating] = useState(5);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  // const [weatherData, setWeatherData] = useState([]);
  


            const[bounds,setBounds]=useState({})




useEffect(() => {
  const filtered = places?.filter((place) => Number(place.rating) >= rating);

  setFilteredPlaces(filtered);
}, [rating]);

  useEffect(()=>{
    setIsLoading(true);
    // // getWeatherData(coordinates.lat, coordinates.lng)
    // .then((data) => setWeatherData(data));

    getPlacesData( type,  bounds.sw, bounds.ne)
    .then((data)=>{
    
      // console.log(data);
      setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating(5);
          setIsLoading(false);
    })

  },[coordinates, bounds, type]);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    
      setCoordinates({lat:latitude,lng:longitude})
    
    })
    },[]);
    
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };




  return (
   <>
   <CssBaseline/>
   <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
   <Grid container spacing={1} style={{width: "100%"}}>
  
    <Grid item xs={12} md={8}>
      <Map 
      setCoordinates={setCoordinates} 
      setBounds={setBounds}
    coordinates={coordinates} 
    places={filteredPlaces.length ? filteredPlaces : places}
    // weatherData={weatherData}

    /></Grid>
      <Grid item xs={12} md={4} className='list' >
      <List 
                places={filteredPlaces.length ? filteredPlaces : places}

      type={type}
      
      setType={setType}
      isLoading={isLoading}
      rating={rating}
      setRating={setRating}
      /></Grid>
   </Grid>
  
   {/* <PlaceDet/> */}
   
   </>
  );
}

export default App;
