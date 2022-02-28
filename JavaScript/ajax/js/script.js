const btn = document.getElementById("ajaxBtn");

btn.addEventListener("click", laden);

function laden() {
  let ajaxObjekt = new XMLHttpRequest();
  ajaxObjekt.onreadystatechange = ausgeben;
  ajaxObjekt.open("GET", "spritpreise.txt", "enforcement.json", true);
  ajaxObjekt.send();

  //   console.log(ajaxObjekt);
}

function ausgeben() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("preise_ausgabe").innerHTML = this.responseText;
  }
}

// https://api.fda.gov/food/enforcement.json?limit=10
