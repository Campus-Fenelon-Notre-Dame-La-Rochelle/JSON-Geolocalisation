// Parcours du tableau datas 
// datas.forEach(
//     (data) => {
//         console.log(`Élément n°${data.fields.id}:`);
//         console.log(`  - 🐤 Adresse: ${data.fields.adresse}`);
//         console.log(`  - 🗺️ Coordonnées: lon ${data.fields.geo_point_2d[0]},  lat ${data.fields.geo_point_2d[1]}`);
//         console.log('_____________________________');
//     }
// );

// Initialisation de la carte centrée sur La Rochelle
var map = L.map('map').setView([46.166667, -1.150000], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 13,
    attribution: 'Carte BTS SIO2 SLAM'
}).addTo(map);


// Définition de l'icône rouge
var redIcon = L.icon({
    iconUrl: 'assets/imgs/red-icon.png',
    iconSize: [20, 21], 
});

// Ajout des marqueurs sur la carte
datas.forEach(
    (data) => {
        L.marker([data.fields.geo_point_2d[1], data.fields.geo_point_2d[0]], {icon: redIcon}).addTo(map)
        .bindPopup(`Adresse: ${data.fields.adresse} <br> <a href="https://www.google.com/maps/dir/${data.fields.geo_point_2d[1]},${data.fields.geo_point_2d[0]}" target="_blank">Itinéraire</a>`);
    }
);