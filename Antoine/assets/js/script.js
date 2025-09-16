// Parcours du tableau datas 
// datas.forEach(
//     (data) => {
//         console.log(`Élément n°${data.fields.id}:`);
//         console.log(`  - 🐤 Adresse: ${data.fields.adresse}`);
//         console.log(`  - 🗺️ Coordonnées: lon ${data.fields.geo_point_2d[0]},  lat ${data.fields.geo_point_2d[1]}`);
//         console.log('_____________________________');
//     }
// );

// Initialisation de la carte centrée sur La Rochelle (ou autre coordonnée par défaut)
var map = L.map('map').setView([46.166667, -1.150000], 8); // Zoom 8 pour voir plus large
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 5,
    attribution: 'Carte BTS SIO2 SLAM'
}).addTo(map);

// Définition de l'icône colis
var redIcon = L.icon({
    iconUrl: 'assets/imgs/colis.png',
    iconSize: [20, 21],
});

// Accès à la liste des "features"
const features = datas[0].features;

// Ajout des marqueurs sur la carte
features.forEach((feature) => {
    const coords = feature.geometry.coordinates;
    const props = feature.properties;

    const marker = L.marker([coords[1], coords[0]], { icon: redIcon }).addTo(map);
    marker.bindPopup(`
        <strong>${props.localite || 'Localité inconnue'}</strong><br>
        Adresse: ${props.adresse || 'Non disponible'}<br>
        Téléphone: ${props.numero_de_telephone || 'Non disponible'}<br>
        <a href="https://www.google.com/maps/dir/${coords[1]},${coords[0]}" target="_blank">Itinéraire</a>
    `);
});
