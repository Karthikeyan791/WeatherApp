window.addEventListener('load',()=>{
    var apiKey='uMy3bQ1USl9p1gQryutJGeXDI0cJWvyF';
    var lat,long;
    var country,locationKey,timeZone,locationName;

 navigator.geolocation.getCurrentPosition((position)=>{
   lat=position['coords']['latitude'];
   long=position['coords']['longitude'];
   console.log(lat+" "+long);
   var geopositionUrl=`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`;
   console.log(geopositionUrl);
   axios.get(geopositionUrl)
   .then((response)=>{
    console.log(response);
    country=response.data.Country.EnglishName;
    locationKey=response.data.Key;
    timeZone=response.data.TimeZone;
    locationName=response.data.LocalizedName;
    console.log('Country='+country);
    console.log('LocationKey='+locationKey);
    console.log('TimeZone='+timeZone);
    console.log('LocationName='+locationName);
    getWeatherData(apiKey,locationKey);


   })
   })
})

function getWeatherData(apiKey,locationKey){
  var weatherUrl=`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apiKey=${apiKey}`;
  console.log(weatherUrl);
 axios.get(weatherUrl).then((response)=>{
    console.log(response);
  })
}
/*

*/

 