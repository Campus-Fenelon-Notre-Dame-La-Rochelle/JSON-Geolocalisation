//Affichage des datas
console.table(datas);
let space = " "

var map = L.map('map').setView([46.1603, -1.1511], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'BTS SLAM SIO 2'
}).addTo(map);

//Parcourir le tableau

datas.forEach(
    (data) => {

        //1. L'id
        console.log("Voici l'id :" + data.fields.id)

        //2. L'adresse
        console.log("Voici l'adresse 🏠 :" + data.fields.adresse + space + data.fields.geo_point_2d[0]+ space + data.fields.geo_point_2d[1])

        //3. Coordonnées
        console.log("Voici les coordonées 🌐 :" + data.geometry.coordinates[0] + space + data.geometry.coordinates[1])



        L.marker([data.geometry.coordinates[1], data.geometry.coordinates[0]]).addTo(map)
        .bindPopup(data.fields.adresse + space + data.fields.obs);
        
    }
)

const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    shadowSize: [41, 41]
});

datapayss.forEach((datapays) => {

    // Marqueur rouge
    L.marker([datapays.geometry.coordinates[1], datapays.geometry.coordinates[0]], { icon: redIcon })
        .addTo(map)
        .bindPopup(datapays.fields.adresse + space + datapays.fields.obs);
});

// Création d'une icône pour un banc
const benchIcon = L.icon({
    iconUrl: 'https://www.fontes-art-dommartin.com/images/stories/virtuemart/product/A7_00357.png', // nouvelle image de banc
    iconSize: [32, 32],        // dimensions de l'icône (largeur, hauteur)
    iconAnchor: [16, 32],      // point de l'icône correspondant à la position sur la carte
    popupAnchor: [0, -32]      // position du popup par rapport à l'icône
});

databanc.forEach((banc) => {

    L.marker([banc.geometry.coordinates [1], banc.geometry.coordinates[0]], { icon: benchIcon })
        .addTo(map)
        .bindPopup("Banc numéro" + space + banc.fields.banc_nbre + space + "banc ID" + space +banc.fields.banc_id);
});

