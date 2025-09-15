//inititialisation de la carte
var map = L.map('map').setView([-21.1258,55.5256], 11);

//Config
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

datas.forEach(
    (data) => {
        if (data.location != null) {
        //Ajout des marqueurs
        L.marker([data.location.lat, data.location.lon]).addTo(map)
        .bindPopup("<b> Nom : </b>" + data.nom + 
            "</br><b>Durée : </b>" + data.duree_minutes_total + " min</br>" +
            "<b>Zone : </b>" + data.zone_translations_item_nom +
            "</br><b>Sentier ouvert :</b>" + data.is_ouvert)
        .openPopup();
    }
    }
);