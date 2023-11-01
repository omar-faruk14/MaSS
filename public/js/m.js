
var map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        
        var userMarker = L.marker([lat, lon]).addTo(map);
        userMarker.bindPopup("Your Location").openPopup();

        userMarker.bindPopup(`
        <div class="custom-marker">
        <h2>Omar Location</h2>
        <p id="latitude">Latitude: <span id="latValue">${lat}</span></p>
        <p id="longitude">Longitude: <span id="lonValue">${lon}</span></p>
        <button id="show-info">Show Additional Info</button>
    </div>
        `);

        userMarker.on('click', function () {
            userMarker.openPopup();
        });

        map.setView([lat, lon], 13);
    });
}


var otherMarker = L.marker([latitude, longitude]).addTo(map); 
otherMarker.bindPopup("Information about this point").openPopup();
