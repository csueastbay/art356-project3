var weather;
//api value from the json url
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
//city value from the json url
var city = 'San Francisco';
//apikey value from the json url
var apiKey= '&appid=30fca972f2c59b104e617b40bc0c5702'
var units = '&units=imperial';
var data1,data2,data3,data4,data5;
let thermometer,winds,clouds;
let forecast = "";
let high = "";
let low = "";
let sun;
let moon;



var input;
function setup()
  {
  createCanvas (600,600);
  thermometer = loadImage('images/thermometer.png');
  winds = loadImage('images/winds.png');
  clouds = loadImage('images/clouds.png');
//button input from html to use
var button= select('#submit');
button.mousePressed(weatherAsk);
//give variable input the value of any api city id
  input = select('#city')
  moon = loadImage('images/moon.png')
  sun = loadImage('images/sun.png')
y=550;
y2=550;
x=width;
x2=width;




  }
//forecast = url.weather[0].description;
function weatherAsk ()
{
  //url value equals to the url setup
  var url = api + input.value() + apiKey + units;
  loadJSON(url,gotData);
  //forecast = url.weather[].description;
}



 function gotData(data)
 {
   //give weather function the value of data
   weather = data;
//parse weather forecast description from live url
forecast = weather.weather[0].description;
high = weather.main.temp_max;
low = weather.main.temp_min;
 }
function draw()
{



  background (255,242,75);
  fill(0);
text('ColormeWeather',225,20)
textSize(20);
//image(sun,x,y,50,50)
//image(moon,x2,y2,50,50)
//ellipse(x,y,50,50)
//y = y + random (-1,1);
//x = x -2;
//y2 = y2 + random (1,2);
//x2 = x2 -2;
if (x<0)
{
  x=width;
}


  if (weather)
  {
//parse data for text variables:data1,data2,data3
    data1 = weather.main.temp;
    text(data1 + '°F',75,160);


    data2 = weather.main.humidity;
    text(data2 + '%',285,165);

    data3 = weather.wind.speed;
    text(data3 + 'mph',480,165);

    data4 = weather.clouds.all;
    text(data4,260,375);





//display the weather forecast description
    text("Forecast: " + forecast,200,540);

    text("Low: " + low,120, 190)
    text("High: " + high,10,190)

image(thermometer,65,200,thermometer.width/4,thermometer.height/7);

  if (data1 > 60.0)
  {
    fill(255,0,0);
  }
  else (data1 < 60.0)
  {
    fill (0,0,255);
  }






    //parse data for value sizes of ellipse {changes as the api updates}
    ellipse (100,100,weather.main.temp,weather.main.temp);
    text('temperature',50,50);

    fill(0,102,0);
    ellipse (300,100,weather.main.humidity,weather.main.humidity);
    text('humidity level',240,50);

image(winds,430,200,winds.width/5,winds.height/7);

    fill(0,0,255);
    ellipse (500,100,weather.wind.speed,weather.wind.speed);
    text('wind speed',440,50);


image(clouds,180,400,clouds.width/5,clouds.height/7);


    fill(182,182,182);
    //parse data for value sizes of rectangle{changes as the api updates}
    ellipse (273,310,weather.clouds.all,weather.clouds.all);
    text('clouds',250,260);


    image(sun,x,y,50,50)
    image(moon,x2,y2,50,50)
    //ellipse(x,y,50,50)
    y = y + random (-1,1);
    x = x -2;

    y2 = y2 + random (1,2);
    x2 = x2 -2;

  }

}
