// Vars
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const restartBtn = document.getElementById("restart");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const millsecondes = document.getElementById("millsecondes");

// Events
startBtn.addEventListener("click", start);
restartBtn.addEventListener("click", restart);

// functions

function start() {
  const myInterval = setInterval(() => {
    let mill = +millsecondes.innerHTML;
    mill+=10;

    // Mill
    if (mill < 10) millsecondes.innerHTML = `00${mill}`;
    else if (mill < 100) millsecondes.innerHTML = `0${mill}`;
    else if (mill < 1000) millsecondes.innerHTML = `${mill}`;
    else {
      millsecondes.innerHTML = "000";
      let s = +secondes.innerHTML;
      s++;
      // Secondes
      if (s < 10) secondes.innerHTML = `0${s}`;
      else if (s < 60) secondes.innerHTML = `${s}`;
      else {
        secondes.innerHTML = "00";
        let m = +minutes.innerHTML;
        m++;
        // Minutes
        if (m < 10) minutes.innerHTML = `0${m}`;
        else if (m < 60) minutes.innerHTML = `${m}`;
        else {
          minutes.innerHTML = "00";
          let h = +hours.innerHTML;
          h++;
          // Hours
          if (h < 10) hours.innerHTML = `0${h}`;
          else if (h < 60) hours.innerHTML = `${h}`;
          else hours.innerHTML = "00";
        }
      }
    }
  }, 10);

  stopBtn.addEventListener("click", () => {
    stop(myInterval);
  });
}

function restart() {
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  secondes.innerHTML = "00";
  millsecondes.innerHTML = "000";
  start();
}

function stop(interval) {
  clearInterval(interval);
}
