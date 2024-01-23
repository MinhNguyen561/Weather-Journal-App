/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth() + 1 + '.'+  d.getFullYear();


const ZipCode = document.querySelector('.zip input')
const button = document.querySelector('.feel button')
const feeling = document.querySelector('.feel textarea')

const api = '&appid=82328b3addcd3f984da6c1e74cf4c7c9'
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&zip='

async function getdata(zip){
    const response = await fetch(url + zip + api)
    var data = await response.json();

    console.log(data)

    document.querySelector('#date').innerHTML = 'Date: ' + newDate
    document.querySelector('#temp').innerHTML = 'Temperature: ' + data.main.temp + ' °C'
    document.querySelector('#countr').innerHTML = 'Location: ' + data.sys.country
    document.querySelector('#content').innerHTML = 'Your Feeling: ' + feeling.value

    
}

// Adding event listener to the button
button.addEventListener('click', () =>{
    getdata(ZipCode.value)
})

