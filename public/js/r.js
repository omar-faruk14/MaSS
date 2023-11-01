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
        map.setView([lat, lon], 13);
    });
}

var otherMarker = L.marker([36.66134, 138.18768]).addTo(map);
otherMarker.bindPopup(`
    <div class="custom-marker">
        <h2>Zenkoji</h2>
        <p>Zenkoji is a famous Buddhist temple located in Nagano, Japan.</p>
        <p>Latitude: 36.66134</p>
        <p>Longitude: 138.18768</p>
    </div>
`).openPopup();

map.setView([36.66134, 138.18768], 13);


var otherMarker = L.marker([36.66566, 138.17999]).addTo(map);
otherMarker.bindPopup(`
    <div class="custom-marker">
        <h2>R & E DXCenter</h2>
        <p>Engineers make Innovation</p>
        <p>Latitude: 36.66134</p>
        <p>Longitude: 138.18768</p>
    </div>
`).openPopup();

map.setView([36.66566, 138.17999], 13);
