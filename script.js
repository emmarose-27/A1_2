var map = L.map('map').setView([37.7612887808995, -122.4326410508401], 11);

// load a tile layer
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(map);

//load GeoJSON from an external file
$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson",function(data){
  var crimeIcon = L.icon({
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8V6tCzEs7nLWREM6LKSKqx0zCEkHH5nfJ2g&usqp=CAU',
      iconSize: [50,40]
    });
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data,{
      pointToLayer: function(feature,latlng){
	    return L.marker(latlng,{icon: crimeIcon});
      }
    }).addTo(map);
});
