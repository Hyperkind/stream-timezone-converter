const localTime = moment().format('llll');
const translatedTime = moment().tz('Pacific/Honolulu').format('llll');

let pageLocalTime = document.querySelector('.localtime');
let pageTranslatedTime = document.querySelector('.translatedTime');

console.log(localTime);
console.log(translatedTime);

function timeUpdate () {
    pageLocalTime.innerHTML = localTime;
    pageTranslatedTime.innerHTML = translatedTime;
}
timeUpdate();
