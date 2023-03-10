const map = L.map('map').setView([0, 0], 3);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=zXb1yRYoVISXWjweI8kt', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

let marker = 0;

// setInterval(function(){
//     map.setZoom(0);
//     setTimeout(function(){
//         map.setZoom(1);
//     }, 2000);
// }, 4000);

// SECOND API
const APIURL = 'https://geo.ipify.org/api/v2/country?apiKey=at_XASNFiAcElJRfQU5IWqdAX0uXsDCE&ipAddress';
const IPContainer = document.querySelector('.ipAdress__container');
const ipTrackerbxContainer = document.querySelector('.ipAdress__trackerbx');
const input = document.getElementById('ipadress');
const form = document.getElementById('form');


IPContainer.addEventListener('load', getIPAdress);

function getIPAdress() {
    fetch (`https://geo.ipify.org/api/v2/country,city?apiKey=at_XASNFiAcElJRfQU5IWqdAX0uXsDCE&ipAddress`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.ip)
        // console.log(data.domains)
        console.log(data.location.country)
        console.log(data.location.timezone)

       const lat = data.location.lat;
       console.log(lat)

       const lng = data.location.lng;
       console.log(lng)
       let marker = L.marker([lat, lng]).addTo(map);
        const trackerbx = document.createElement('div');
        trackerbx.classList.add('ipAdress__trackerbxx');
        trackerbx.innerHTML = `
        <div class="ipAdress__trackerbx---2">
                <h3 class="ipAdress__trackerbx-heading">IP ADDRESS</h3>
                <p class="ipAdress__trackerbx-para">${data.ip}</p>
         </div>

         <div class="ipAdress__trackerbx2 ">
                <h3 class="ipAdress__trackerbx-heading">LOCATION</h3>
                <p class="ipAdress__trackerbx-para">${data.location.country}</p>
         </div>

         <div class="ipAdress__trackerbx2">
                <h3 class="ipAdress__trackerbx-heading">TIMEZONE</h3>
                <p class="ipAdress__trackerbx-para">${data.location.timezone}</p>
          </div>

          <div class="ipAdress__trackerbx--2">
                <h3 class="ipAdress__trackerbx-heading">ISP</h3>
                <p class="ipAdress__trackerbx-para">${data.isp}</p>
          </div>     
        `
        ipTrackerbxContainer.appendChild(trackerbx)
    })
}
getIPAdress()

form.addEventListener('onsearch', (e) => {
    e.preventDefault();
    const inputTerm = input.value;
    console.log(input.value)

    if(inputTerm && inputTerm !== '') {
        trackerbx.innerHTML = `
        <div class="ipAdress__trackerbx---2">
                <h3 class="ipAdress__trackerbx-heading">IP ADDRESS</h3>
                <p class="ipAdress__trackerbx-para">${data.ip}</p>
         </div>

         <div class="ipAdress__trackerbx2 ">
                <h3 class="ipAdress__trackerbx-heading">LOCATION</h3>
                <p class="ipAdress__trackerbx-para">${data.location.country}</p>
         </div>

         <div class="ipAdress__trackerbx2">
                <h3 class="ipAdress__trackerbx-heading">TIMEZONE</h3>
                <p class="ipAdress__trackerbx-para">${data.location.timezone}</p>
          </div>

          <div class="ipAdress__trackerbx--2">
                <h3 class="ipAdress__trackerbx-heading">ISP</h3>
                <p class="ipAdress__trackerbx-para">${data.isp}</p>
          </div>     
        `
        ipTrackerbxContainer.appendChild(trackerbx)
       input.value = '';
    }else{
        window.location.reload();
    }
})


    