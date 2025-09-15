//vidage de la console
console.clear();

//initialisation de la carte
var map = L.map('map').setView([46.160329, -1.151139], 13);

//Configuration de la carte
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'BTS SIO SLAM2 2025-2026'
    }).addTo(map);

//Parcours du tableau et affichage des points sur la carte
datas.forEach(
        (data)=>{
                /*//id
                console.log(`Voici l'élément n° ${data.fields.id}` );
                //adresse
                console.log(`Voici son adresse ${data.fields.adresse}`);
                //coordonées
                console.log(`Voici ces coordonnées : latitude : ${data.fields.geo_point_2d[1]} , longitude : ${data.fields.geo_point_2d[0]}`);
                console.log('-------------------------');*/

                //Marker
                var marker = L.marker([data.fields.geo_point_2d[1], data.fields.geo_point_2d[0]]).addTo(map);
                
                //Popup 
                marker.bindPopup(`<b>Adresse : ${data.fields.adresse}.</b><br/><b>Observation : ${data.fields.obs}</b>`)
        }
);