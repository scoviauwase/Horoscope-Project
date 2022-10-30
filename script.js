// let ourDate = new Date("2021-04-08");
// console.log(ourDate);
let scanned;

let inputDate = document.getElementById("inputed");
let findButton = document.getElementById("findBtn");
let result = document.getElementById("horoscopeContents");
let found;
inputDate.addEventListener("change", function () {
  found = inputDate.value.split("-")[1] + "-" +inputDate.value.split("-")[2];
  // console.log(found);
  scanned = new Date(found);
  // console.log(scanned);
});
findButton.addEventListener("click", function () {
  if (scanned >= new Date("03-21") && scanned <= new Date("04-19")) {
    console.log('Your horoscope is "Aries"');
    result.innerText = 'Your horoscope is Found to be"Arias" ';
  }
  if (scanned >= new Date("04-20") && scanned <= new Date("05-20")) {
    console.log('Your horoscope is "Taurus"');
    result.innerText = 'Your horoscope is Found to be "Taurus"';
  }
  if (scanned >= new Date("05-21") && scanned <= new Date("06-20")) {
    console.log('Your horoscope is "Gemini"');
    result.innerText = 'Your horoscope is Found to be "Gemini" ';
  }
  if (scanned >= new Date("06-21") && scanned <= new Date("07-22")) {
    console.log('Your horoscope is "Cancer"');
    result.innerText = 'Your horoscope is Found to be "Cancer"';
  }
  if (scanned >= new Date("07-23") && scanned <= new Date("08-22")) {
    console.log('Your horoscope is "Leo"');
    result.innerText = 'Your horoscope is Found to be "Leo" ';
  }
  if (scanned >= new Date("08-23") && scanned <= new Date("09-22")) {
    console.log('Your horoscope is "Virgo"');
    result.innerText = 'Your horoscope is Found to be "Virgo" ';
  }
  if (scanned >= new Date("09-23") && scanned <= new Date("10-22")) {
    console.log('Your horoscope is "Libra"');
    result.innerText = 'Your horoscope is Found to be "Libra"';
  }
  if (scanned >= new Date("10-23") && scanned <= new Date("11-21")) {
    console.log('Your horoscope is "Scorpio"');
    result.innerText = 'Your horoscope is Found to be "Scorpio"';
  }
  if (scanned >= new Date("11-22") && scanned <= new Date("12-21")) {
    console.log('Your horoscope is "Sagittarius"');
    result.innerText = 'Your horoscope is Found to be "Sagittarius"';
  }
  if (scanned >= new Date("12-22") && scanned <= new Date("01-19")) {
    console.log('Your horoscope is "Capricon"');
    result.innerText = 'Your horoscope is Found to be "Capricon"';
  }
  if (scanned >= new Date("01-20") && scanned <= new Date("02-18")) {
    console.log('Your horoscope is "Aquarius"');
    result.innerText = 'Your horoscope is Found to be "Aquarius"';
  }
  if (scanned >= new Date("02-19") && scanned <= new Date("03-20")) {
    console.log('Your horoscope is "Pisces"');
    result.innerText = 'Your horoscope is Found to be "Pisces"';
  }
});