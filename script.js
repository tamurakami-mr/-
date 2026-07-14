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

