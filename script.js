function updateTime() {
    const now = new Date(); 
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('real-time').textContent = hours + ':' + minutes;
}

updateTime();

setInterval(updateTime, 1000);

const areaSelect = document.getElementById('area-select');
const mapFrame = document.getElementById('map-frame');

if (areaSelect && mapFrame) {
    areaSelect.addEventListener('change',() => {
        mapFrame.src = areaSelect.value;
    });
}

const images = [
  "cameraroll/C01.JPG",
  "cameraroll/C02.JPG",
  "cameraroll/C03.JPG",
  "cameraroll/C04.JPG",
  "cameraroll/C05.JPG",
  "cameraroll/C06.JPG",
  "cameraroll/C07.JPG",
  "cameraroll/C08.JPG",
  "cameraroll/C09.JPG",
  "cameraroll/C10.JPG",
  "cameraroll/C11.JPG",
];

let currentIndex = 0;

const slideImage = document.getElementById('slideshow');

setInterval(function() {

slideImage.style.opacity = 0;
  
setTimeout(function() {

currentIndex = currentIndex + 1;
  
if (currentIndex >= images.length) {
    currentIndex = 0;
}

slideImage.src = images[currentIndex];

slideImage.style.opacity = 1;

},500);

}, 4000);