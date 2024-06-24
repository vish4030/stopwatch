let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let itv; // Declare itv outside the function

const stopWatch = (start, stop, reset) => {
  if (start) {
    console.log("Starting stopwatch...");
    itv = setInterval(() => {
      sec = sec + 1;
      if (sec == 60) { min = min + 1; sec = 0; }
      if (min == 60) { hr = hr + 1; min = 0; }
      updateTimeDisplay();
    }, 1);
  } else if (stop) {
    console.log("Stopping stopwatch...");
    clearInterval(itv);
  } else if (reset) {
    console.log("Resetting stopwatch...");
    clearInterval(itv);
    hr = 0;
    min = 0;
    sec = 0;
    updateTimeDisplay();
  }
};



const updateTimeDisplay = () => {
    const formattedTime = `<span><b>HH</b>${pad(hr)}</span> <span><b>MM</b>${pad(min)}</span> <span><b>SS</b>${pad(sec)}</span> `;
    document.getElementById("stopwatch").innerHTML = formattedTime;
  };

const pad = (num) => {
    return num.toString().padStart(2, "0");
};
