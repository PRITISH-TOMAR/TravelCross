/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lo', {
//         params: { lat, lon: lng },
//         headers: {
//           headers: {
//             'X-RapidAPI-Key': '4775913704msh672af4daa9e6006p105085jsn812fd0db515d',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//           }
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
