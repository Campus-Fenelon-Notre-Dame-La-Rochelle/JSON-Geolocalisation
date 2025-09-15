//Initialisation de la carte
var map = L.map('map').setView([46.160329, -1.151139], 12);

//Configuration de la carte
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Projet aménagement',
}).addTo(map);

//Ajout d'un marqueur
//var marker1 = L.marker([46.160329, -1.151139]).addTo(map);

datas_banc.forEach(
    (data) =>{
        //1. L'id
        console.log("Voici l'id 🫡 :  " + data.fields.banc_id);

        //2. Le nombre de bancs
        console.log("Voici le nombre de bancs 🌍 :  " + data.fields.banc_nbre);
        
        //3. La géolocalisation
        console.log("Voici la latitude 🏳️ : " + data.fields.coordinates[0] + " Voici la longitude 🏴 :  " + data.fields.coordinates[1]);

        //4. Affichage des marqueurs
        L.marker([data.fields.coordinates[1], data.fields.coordinates[0]])
        
        //5. Description des marqueurs
        .bindPopup(data.fields.banc_nbre).openPopup()
        .addTo(map);
    }
);