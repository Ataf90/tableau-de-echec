console.log("Script chargé !");
let maTable = document.createElement("table");
document.body.appendChild(maTable);

// Génération des lignes de ma table
for (let lignes = 1; lignes <= 10; lignes++) {
  let maLigne = document.createElement("tr");
  maTable.appendChild(maLigne);
  console.log("numéro de lignes/de table : ", lignes);
  for (let cellules = 1; cellules <= 10; cellules++) {
    let maCellule = document.createElement("td");
    maCellule.textContent = (cellules * lignes).toString();
    maLigne.appendChild(maCellule);
    console.log("numéro de cellule/multiplicateur : ", lignes);
  }
}
