
// Debug
//console.table(datas);
console.clear();



// Initialisation de la carte
var map = L.map('map').setView([46.160329, -1.151139], 13);

// Configuration de la map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'BTS SIO SLAM2 2025-2026'
}).addTo(map);

// Ajout d'un marker
//var marker = L.marker([46.160329, -1.151139]).addTo(map);


// Parcourir le tableau
// Doc: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
datas.forEach(
    (data) => {
        // 1. L'id
        console.log("Voici l'élément:" + data.fields.id)
        // 2. Adresse
        console.log ("🗺️ Adresse :");
        console.info (data.fields.obs + " " + data.fields.adresse);

        //3. Coordonnées
        console.log ("🗺️ Coordonnées :");
        console.log("Latitude: " + data.fields.geo_point_2d[0]);
        console.log("Longitude: " + data.fields.geo_point_2d[1]);

        // Marker
        L.marker(
            [data.fields.geo_point_2d[1], data.fields.geo_point_2d[0]]
        )
        // Popup
        .bindPopup("<b>Hello world!</b><br>I am a popup.")
        .addTo(map);
    }
)