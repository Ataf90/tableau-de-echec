console.log("Script chargé !");
let maTable = document.createElement("table");

document.body.appendChild(maTable);
// je crée ma cellule est vide
let maCellule = "";

// crée une tableau qui compris tous les characters
let alphaList = ["A", "B", "C", "D", "E", "F", "G", "H"];

// function doLigne(lignes, maLignes) {}
for (let lignes = 0; lignes <= 8; lignes++) {
  let maLigne = document.createElement("tr");
  maTable.appendChild(maLigne);
  // console.log("numéro de lignes/de table : ", lignes);
  for (let cellules = 0; cellules <= 8; cellules++) {
    // crreate un element nommer : "td"
    maCellule = document.createElement("td");
    // maCellule.textContent = (cellules * lignes).toString();
    // condition pour crée les lignes
    if (cellules == 0 && lignes >= 1) {
      maCellule.textContent = lignes;
    } else {
      (lignes % 2 == 1 && cellules % 2 == 1) || // impaire
      (lignes % 2 == 0 && cellules % 2 == 0) // paire
        ? (maCellule.style.backgroundColor = "black")
        : (maCellule.style.backgroundColor = "white");
    }
    //pour ajouter alphapete dans mon table table et suprimer le column
    if ((lignes == 0 && cellules >= 1) || lignes == 0) {
      maCellule.style.backgroundColor = "";
      maCellule.textContent = alphaList[cellules - 1];
    }
    maLigne.appendChild(maCellule);
    // console.log("numéro de cellule/multiplicateur : ", lignes);
  }
}
