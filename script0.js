var APIKEY = "f362c6e85b331c3ac5294e0e6f5f3eff13285084f6f3413f03908eb47795c260";

document.getElementById("searchSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	const value = document.getElementById("searchInput").value;
	if (value === "")
		return;
	console.log(value);


	const url = "https://serpapi.com/search.json?engine=google_scholar&q=" + value + "&api_key=" + APIKEY;
	console.log(url);
	fetch(url)
		
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			//console.log(json);


			let results = "";
			//results += '<h2>Search results for ' + json.search_parameters.query_displayed + "</h2>";


			/*for (let i=0; i < json.organic_results.length; i++) {
				results += '<h2>' + json.organic_results[i].position + '</h2>';


			}*/
			results += "RESULTS!!!!"

			document.getElementById("searchResults").innerHTML = results;

		});
			/*
			results += '<h2>' + json.main.temp + " &deg;F</h2>";
			results += "<p>"
			for (let i=0; i < json.weather.length; i++) {
				results += json.weather[i].description
				if (i !== json.weather.length - 1)
					results += ", "
			}
			results += "</p>";

			results += "<p>Feels like: " + json.main.feels_like + " &deg;F </p>";
			results += "<p>Low: " + json.main.temp_min + " &deg;F </p>";
			results += "<p>High: " + json.main.temp_max + " &deg;F </p>";
			results += "<p>Pressure: " + json.main.pressure + " </p>";
			results += "<p>Humidity: " + json.main.humidity + " &percnt;</p>";


			document.getElementById("weatherResults").innerHTML = results;

		});

	const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=" + APIKEY;
	fetch(url2)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			//console.log(json);

			let forecast = "";
			forecast += "<div class='forecast_grid'>";

			forecast += "<div class='forecast_item'> <h2> <p> </p> </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 12:00:00 am  </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 3:00:00 am </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 6:00:00 am </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 9:00:00 am </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 12:00:00 pm  </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 3:00:00 pm </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 6:00:00 pm </h2> </div>"
			forecast += "<div class='forecast_item'> <h2> 9:00:00 pm </h2> </div>"


			for (let i=0; i < json.list.length; i++) {

				if (i === 0 ){
					day = moment(json.list[i].dt_txt).format('MMMM Do YYYY');
					forecast += "<div class='forecast_item'> <h2>" + day + " </h2> </div>";

				}
				if (i !== 0) {
					day_check = moment(json.list[i].dt_txt).format('MMMM Do YYYY');
					if (day_check === day){
					}
					else {
						day = day_check;
						forecast += "<div class='forecast_item'> <h2>" + day +"</h2> </div>";

					}
				}


				if (i === 0 && (moment(json.list[i].dt_txt).format('h:mm:ss a') === '12:00:00 am')){
				}

				if (i === 0 && (moment(json.list[i].dt_txt).format('h:mm:ss a') === '3:00:00 am')){
					forecast += "<div class='forecast_item'> <h2> <p> </p> </h2> </div>"
				}

				if (i === 0 && (moment(json.list[i].dt_txt).format('h:mm:ss a') === '6:00:00 am')){
					forecast += "<div class='forecast_item'> <h2> <p> </p> </h2> </div>"
					forecast += "<div class='forecast_item'> <h2> <p> </p> </h2> </div>"
				}

				if (i === 0 && (moment(json.list[i].dt_txt).format('h:mm:ss a') === '9:00:00 am')){
					forecast += "<div class='forecast_item'> <h2> <p> </p> </h2> </div>"
					forecast += "<div class='forecast_item'> <h2> <p> </p> </h2> </div>"
					forecast += "<div class='forecast_item'> <h2> <p> </p> </h2> </div>"
				}

				forecast += "<div class='forecast_item'>";
				forecast += "<p>Temperature: " + json.list[i].main.temp + " &deg;F</p>";
				forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';

				forecast += "<p>Feels like: " + json.list[i].main.feels_like + " &deg;F</p>";

				forecast += "<p>Low: " + json.list[i].main.temp_min + " &deg;F</p>";

				forecast += "<p>High: " + json.list[i].main.temp_max + " &deg;F</p>";

				forecast += "<p>Pressure: " + json.list[i].main.pressure + "</p>";
				forecast += "<p>Humidity: " + json.list[i].main.humidity + " &percnt;</p>";

				forecast += "<p>Wind speed: " + json.list[i].wind.speed + " mph</p>";
				forecast += "<p>Chance of Rain: " + json.list[i].pop + " &percnt;</p>";


				forecast += "</div>";
			}
			forecast += "</div>";
			document.getElementById("forecastResults").innerHTML = forecast;

		});*/

});
