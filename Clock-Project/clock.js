let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function updateClock() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // Rotation formulas
  let hRotation = 30 * h + m / 2;   // 360/12 = 30 degree per hour
  let mRotation = 6 * m;            // 360/60 = 6 degree per minute
  let sRotation = 6 * s;            // 360/60 = 6 degree per second

  // Apply to hands
  hour.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
