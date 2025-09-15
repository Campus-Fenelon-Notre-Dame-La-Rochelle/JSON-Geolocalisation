//Initialisation de la carte
var map = L.map('map').setView([46.160329, -1.151139], 12);

//Configuration de la carte
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Projet aménagement',
}).addTo(map);

//Ajout d'un marqueur
//var marker1 = L.marker([46.160329, -1.151139]).addTo(map);
//Ajout d'un marqueur vert
//var green_icon = L.icon({iconURL:'green_icon.png',});

datas_WC.forEach(
    (data) =>{
        //1. L'id
        console.log("Voici l'id 🫡 :  " + data.fields.id1);

        //2. L'adresse
        console.log("Voici l'emplacement 🌍 :  " + data.fields.emplacement);
        
        //3. La géolocalisation
        console.log("Voici la latitude 🏳️ : " + data.fields.geo_point_2d[0] + " Voici la longitude 🏴 :  " + data.fields.geo_point_2d[1]);

        //4. Affichage des marqueurs
        L.marker([data.fields.geo_point_2d[1], data.fields.geo_point_2d[0]])
        
        //5. Description des marqueurs
        .bindPopup(data.fields.emplacement + " " + data.fields.mode + " " + data.fields.horaires).openPopup()
        .addTo(map);
    }
);