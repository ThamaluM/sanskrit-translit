/* Written by Thamalu Maliththa Piyadigama */

// get the buttons by id
let sinhala = document.getElementById('sinhala')
let roman = document.getElementById('roman');
let off = document.getElementById('off');



//Sinhala
sinhala.onclick = () => {
  sinhala.style.backgroundColor = "coral";
  roman.style.backgroundColor = "burlywood";
  off.style.backgroundColor = "burlywood";
  chrome.tabs.executeScript({
    code: `dev2sin();`
  });
};

//Roman
roman.onclick = () => {
  sinhala.style.backgroundColor = "burlywood";
  roman.style.backgroundColor = "coral";
  off.style.backgroundColor = "burlywood";
  chrome.tabs.executeScript({
    code: `dev2rom();`
  });
};

// back to original
off.onclick = () => {
  sinhala.style.backgroundColor = "burlywood";
  roman.style.backgroundColor = "burlywood";
  off.style.backgroundColor = "coral";
  chrome.tabs.executeScript({
    code: `original();`
  });

};