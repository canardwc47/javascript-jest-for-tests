/* EXAMPLE OF AN API REQUEST */

/*
let longitude = 44.83; // Bordeaux longitude
let latitude = -0.57; // Bordeaux latitude
let api_key = '891fcaaa0f613df11046ed15bd1a4607'; // Teacher's API Key
let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`; // API URL

const getWeather = () => {
  axios.get(api_url)
  .then((response)=>console.log(response.data.main.temp - 273.15))
  .catch((err)=> console.log(err))
}
getWeather();
*/




export const fetchData = async () => {
  const api_url = 'https://jsonplaceholder.typicode.com/posts/1'; // URL fictive pour les tests

  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
    return null;
  }
};
  
 // script.js
import { fetchData } from './ex4';

async function displayData() {
  const data = await fetchData();
  if (data) {
    const displayElement = document.getElementById('data-display');
    displayElement.textContent = JSON.stringify(data);
  } else {
    console.log('No data to display');
  }
}

document.addEventListener('DOMContentLoaded', displayData);