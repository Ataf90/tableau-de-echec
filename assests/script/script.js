console.log("Script chargé !");
let maTable = document.createElement("table");
document.body.appendChild(maTable);

// Génération des lignes de ma table
for (let lignes = 1; lignes <= 8; lignes++) {
  let maLigne = document.createElement("tr");
  maTable.appendChild(maLigne);
  // console.log("numéro de lignes/de table : ", lignes);
  for (let cellules = 1; cellules <= 8; cellules++) {
    let maCellule = document.createElement("td");
    // maCellule.textContent = (cellules * lignes).toString();
    (cellules + lignes + 1) % 2 === 0
      ? (maCellule.style.backgroundColor = "white")
      : (maCellule.style.backgroundColor = "black");
    maLigne.appendChild(maCellule);
    // console.log("numéro de cellule/multiplicateur : ", lignes);
  }
}
