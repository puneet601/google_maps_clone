mapboxgl.accessToken = 'pk.eyJ1IjoicHVuZWV0NjAxIiwiYSI6ImNraGQwOHExdjAxNXAzNG9rNnJtczI2bGcifQ._NRlRGMMZyhfZ2cP7KwCNA';
navigator.geolocation.getCurrentPosition(sucessLocation,errorLocation,{
    enableHighAccuracy:true
})
function sucessLocation(position){
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation() {
    setupMap([30.516459, 76.659210]);
}
function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:14
      });
      const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
 
})

map.addControl(directions, 'top-left');
}
