'use strict';

$(function() {
  google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var coord, coord_marker, zoom_map;
        if(device.mobile() || device.tablet()){
          coord = {lat: 52.974318, lng: 36.058766};
          coord_marker = {lat: 52.974208, lng: 36.058997}; 
          zoom_map = 17;

        }else{
          coord = {lat: 52.974166, lng: 36.055625};
          coord_marker = {lat: 52.974208, lng: 36.058997}; 
          zoom_map = 18;
        }

        var mapOptions = {
            zoom: zoom_map,
            center: new google.maps.LatLng(coord.lat, coord.lng),
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType": "landscape","elementType": "geometry.stroke","stylers": [{"color": "#666666"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
             
        };
        var mapElement = document.getElementById('map-google');
        var map = new google.maps.Map(mapElement, mapOptions);
        var image = 'img/default/icon-map.png';
        var marker = new google.maps.Marker({
        position: coord_marker,
        map: map,
        icon: image
    });
    }   
});