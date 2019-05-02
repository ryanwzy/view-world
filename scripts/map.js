
var panorama;
function initialize() {
  // Set up Street View and initially set it visible. Register the
  // custom panorama provider function. Set the StreetView to display
  // the custom panorama 'reception' which we check for below.
   panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'), {
      position: {lat: 37.869260, lng: -122.254811},
      pov: {heading: 165, pitch: 0},
      zoom: 1,
      visible: true,
      streetViewControl: false 
    });
  // panorama.registerPanoProvider(getCustomPanorama);
}
