var myCenter = new google.maps.LatLng(45.112629, 14.850351);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("map"),mapProp);
var marker = new google.maps.Marker({position:myCenter,});
marker.setMap(map);
/*info window on click*/
var infowindow = new google.maps.InfoWindow({
  content:"Vila Daca"
  });


google.maps.event.addListener(marker, 'click', function () {
    map.panTo(marker.getPosition());
    infowindow.open(map,marker);
});
}

google.maps.event.addDomListener(window, 'load', initialize);
