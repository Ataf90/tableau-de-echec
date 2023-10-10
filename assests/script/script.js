console.log("Script chargé !");
let maTable = document.createElement("table");

document.body.appendChild(maTable);
// je crée ma cellule est vide
let maCellule = " ";

// Génération des lignes de ma table
// crée une tableau
let alphalist = ["A", "B", "C", "D", "E", "F", "G", "H"];
// crée un ligne pour insert row dans la function insertRow

// function doLigne(lignes, maLignes) {}
for (let lignes = 0; lignes <= 8; lignes++) {
  let maLigne = document.createElement("tr");
  maTable.appendChild(maLigne);
  // console.log("numéro de lignes/de table : ", lignes);
  for (let cellules = 0; cellules <= 8; cellules++) {
    // crreate un element nommer : "td"
    maCellule = document.createElement("td");
    // maCellule.textContent = (cellules * lignes).toString();
    if (cellules == 0 && lignes >= 1) {
      maCellule.textContent = lignes;
    } else {
      (lignes % 2 == 1 && cellules % 2 == 1) ||
      (lignes % 2 == 0 && cellules % 2 == 0)
        ? (maCellule.style.backgroundColor = "black")
        : (maCellule.style.backgroundColor = "white");
    }
    if (lignes == 0) maCellule.style.backgroundColor = "";
    // suprimer le column
    //
    if (lignes == 0 && cellules >= 1) {
      maCellule.textContent = alphalist[cellules - 1];
    }
    maLigne.appendChild(maCellule);
    // console.log("numéro de cellule/multiplicateur : ", lignes);
  }
}
