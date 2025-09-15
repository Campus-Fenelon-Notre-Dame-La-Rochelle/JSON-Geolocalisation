
// Affichage des données dans la console
//console.table(datas);



// Initialisation de la carte
var map = L.map('map').setView([46.160329, -1.151139], 13);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

// Ajout d'un calque OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    layers: [banc, parking],
    attribution: 'BTS Sio Slam2 - TP Carte Handicap'
}).addTo(map);

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};



// Ajout d'une icône personnalisée
var parkingIcon = L.icon({
    iconUrl: 'pp.png',
    //shadowUrl: 'iconeParkingombre.png',

    iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Parcours du tableau
var parking = L.layerGroup([]);
datas.forEach(
    (data) => {
        let adresse = data.fields.adresse;
        let obs = data.fields.obs;
        let longitude = data.fields.geo_point_2d[1];
        let latitude = data.fields.geo_point_2d[0];
        var marker = L.marker([longitude,latitude]).addTo(map);
        marker.bindPopup("<br>"+adresse+"</br> \n "+obs).openPopup();
        parking.addLayer(marker);
    }
);

var banc = L.layerGroup([]);
bancs.forEach(
    (data) => {
        let banc_id = data.fields.banc_id;
        let banc_nbre = data.fields.banc_nbre;
        let longitude = data.fields.coordinates[1];
        let latitude = data.fields.coordinates[0];
        var marker = L.marker([longitude,latitude]).addTo(map);
        marker.bindPopup("<br>"+banc_id+"</br> \n "+banc_nbre).openPopup();
        banc.addLayer(marker);
    }
    
);

var overlayMaps = {
    "Banc": banc,
    "Parking": parking
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);



