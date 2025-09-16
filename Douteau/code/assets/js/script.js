//vidage de la console
console.clear();

//initialisation de la carte
var map = L.map('map').setView([46.160329, -1.151139], 13);

//Configuration de la carte
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        layers : [placeHandicapes, wc],
        attribution: 'BTS SIO SLAM2 2025-2026'
    }).addTo(map);

//Parcours du tableau et affichage des points sur la carte
var placeHandicapes = L.layerGroup([]);
datasHandicapes.forEach(
        (parking)=>{
                //Marker
                var marker = L.marker([parking.fields.geo_point_2d[1], parking.fields.geo_point_2d[0]]).addTo(map);
                //Popup 
                marker.bindPopup(`<b>Adresse : ${parking.fields.adresse}.</b><br/><b>Observation : ${parking.fields.obs}</b>`);
                placeHandicapes.addLayer(marker);
        }
);

var wc = L.layerGroup([]);
datasWC.forEach(
        (data)=>{
                var marker = L.marker([data.fields.geo_point_2d[1], data.fields.geo_point_2d[0]]).addTo(map);
                marker.bindPopup(`<b>Emplacement : ${data.fields.emplacement}.</b><br/><b>Horaires : ${data.fields.horaires}.</b><br/><b>Surveillance : ${data.fields.surveillance}.</b>`);
                wc.addLayer(marker);
        }
);

var overlayMaps = {
        "Parking handicapés": placeHandicapes,
        "Toilettes public": wc
    };

var layerControl = L.control.layers(null, overlayMaps).addTo(map);