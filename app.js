const input=document.querySelector('.search input');
const btn=document.querySelector('.search button')
const apiurl='https://api.openweathermap.org/data/2.5/weather?&units=metric'
const apiid='da9847163bb6892640b680cf73d86b11'

async function GetTemp(city){
    const response=await fetch(apiurl+`&q=${city}`+`&appid=${apiid}`);
    const data=await response.json();
    console.log(data);

    if(response.status=='404')
    {
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{
        const place=document.querySelector('.city');
    place.innerHTML = data.name;

    const temperature=document.querySelector('.temp')
    temperature.innerHTML=Math.floor(data.main.temp)+`°C`;

    const humid=document.querySelector('.humidity')
    humid.innerHTML=data.main.humidity+'%';

    const wspeed=document.querySelector('.wind')
    wspeed.innerHTML=Math.floor(data.wind.speed)+`km/hr`;

    const icon=document.querySelector('.weather-icon')

    if(data.weather[0].main==='Haze')
        icon.src='haze.png'
    else if(data.weather[0].main==='Clouds')
        icon.src='clouds.png'
    else if(data.weather[0].main==='Clear')
        icon.src='clear.png'
    else if(data.weather[0].main==='Rain')
        icon.src='rain.png'
    else if(data.weather[0].main==='Snow')
        icon.src='snow.png'
    else if(data.weather[0].main==='Drizzle')
        icon.src='drizzle.png'
    else if(data.weather[0].main==='Mist')
        icon.src='mist.png'

    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';
    }

    
}

btn.addEventListener('click',()=>{
    const place=input.value;
    GetTemp(place);
})