var map = L.map('map').setView([37.7612887808995, -122.4326410508401], 11);

// load a tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//load GeoJSON from an external file
$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson",function(data){
  var crimeIcon = L.icon({
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8V6tCzEs7nLWREM6LKSKqx0zCEkHH5nfJ2g&usqp=CAU',
      iconSize: [30,20]
    });
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data,{
      pointToLayer: function(feature,latlng){
	    return L.marker(latlng,{icon: crimeIcon});
      }
    }).addTo(map);
});
