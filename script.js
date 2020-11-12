mapboxgl.accessToken = 'pk.eyJ1IjoibG5hbG1laWRhIiwiYSI6ImNraGU1M2ttaDBscWgzMG8yZnQ2bXZ2cnUifQ.X1IeCYJFYh3KBoHhXZ1XYg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { 
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position);
    setUpMap([position.coords.longitude, position.coords.latitude])
};

function errorLocation() {
    setUpMap([-2.24, 53.48])
};

function setUpMap(center) {
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: center,
    zoom:16
}); 

const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/cycling'
  });
    
  map.addControl(directions, 'top-left');

}


