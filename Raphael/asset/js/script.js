console.table(datas);

//initialisation de la map
var map = L.map('map').setView([48.8566, 2.3522], 13);

//configuration de la map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">marchés couverts Paris</a>'
}).addTo(map);

var customIcon = L.icon({
    iconUrl: 'asset/photo/lagrossekatia.png',
    iconSize: [60, 60],     // 👈 taille de l’image en pixels
    iconAnchor: [30, 60],   // 👈 le point d’ancrage (milieu bas de l’image)
    popupAnchor: [0, -60]   // 👈 le popup sort au-dessus de l’image
});

datas.forEach(data => {

    //placement des curseurs aux données de géolocalisation des marchés
    var marker = L.marker([data.geo_point_2d.lat, data.geo_point_2d.lon], { icon: customIcon }).addTo(map)

    //ajout d'infos complémentaires des marchés
    marker.bindPopup("<b>" + data.nom_court + "</b> <br> Les jours de marché sont : " + data.jours_tenue).openPopup();
    
}); 