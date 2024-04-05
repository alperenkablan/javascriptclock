let fullName = prompt("Lutfen Adinizi Giriniz: ")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${fullName}`

function startTime() {
    var dayNames = ["Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + dayNames[today.getDay()];
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }