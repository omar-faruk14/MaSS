
var map = L.map('map').setView([0, 0], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup("Your Location").openPopup();
        map.setView([lat, lon], 13);
    });
}
