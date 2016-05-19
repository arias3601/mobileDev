//Happy Path
var xmlhttp = new XMLHttpRequest();
var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var response = JSON.parse(xmlhttp.responseText);
        console.log(response);
        document.getElementById("HTitle").innerHTML = response.query.results.channel.title;
        document.getElementById("Htime").innerHTML = response.query.results.channel.lastBuildDate;
        document.getElementById("Hwind").innerHTML = "Current wind chill: " + response.query.results.channel.wind.chill + "F Wind speed: " + response.query.results.channel.wind.speed + "mph";
        document.getElementById("Hrise").innerHTML = "Sunrise time: " + response.query.results.channel.astronomy.sunrise;
        document.getElementById("Hset").innerHTML = "Sunset time: " + response.query.results.channel.astronomy.sunset;
        document.getElementById("Htemp").innerHTML = "Current temperature: " + response.query.results.channel.item.condition.temp;
        document.getElementById("Hcondition").innerHTML = "Current Weather Conditions: " + response.query.results.channel.item.condition.text;

    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
