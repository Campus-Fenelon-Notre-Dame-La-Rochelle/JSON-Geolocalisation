// nettoyer la console
console.clear()


// parcour du tableau


var map = L.map('map').setView([46.160329, -1.151139], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: 'BTS SIO SLAM2'
        }).addTo(map);


datas.forEach(
    (data) => {
        // affichage de l'Id
        console.log("Voici l'Id ​🗿​: " + data.fields.id)

        // affichage de l'adresse'
        console.log("Voici l'adresse 😼​: " + data.fields.adresse)

        // affichage de la latitude
        console.log("Voici la latitude📍: " + data.geometry.coordinates[0])

        // affichage de la longitude
        console.log("Voici la longitude📍: " + data.geometry.coordinates[1])

        var marker = L.marker([data.geometry.coordinates[1], data.geometry.coordinates[0]]).addTo(map);

    
    }
)

// Définir une icône personnalisée
const veloIcon = L.icon({
    iconUrl: 'assets/image/velo.jpg',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng([data.geometry.coordinates[1], data.geometry.coordinates[0]])
        .setContent(datas.fields.station_nom)
        .openOn(map);
}

