function analyserProduits(produits, seuilPrix) {
  let sommePrix = 0;
  let nbProduits = 0;
  const compteurCategorie = {};

  for (const produit of produits) {
    if (produit.p > seuilPrix) {
      sommePrix += produit.p;
      nbProduits++;

      if (!compteurCategorie[produit.c]) {
        compteurCategorie[produit.c] = 1;
      } else {
        compteurCategorie[produit.c]++;
      }
    }
  }

  const moyennePrix = nbProduits > 0 ? sommePrix / nbProduits : 0;

  let categorieTop = null;
  let maxOccurences = 0;
  for (const categorie in compteurCategorie) {
    if (compteurCategorie[categorie] > maxOccurences) {
      maxOccurences = compteurCategorie[categorie];
      categorieTop = categorie;
    }
  }

  console.log(
    "Moyenne des prix :", 
    moyennePrix.toFixed(2), 
    "Catégorie la plus fréquente :", 
    categorieTop
  );
}

analyserProduits([
  { p: 50, c: "tech" },
  { p: 120, c: "clothes" },
  { p: 300, c: "tech" },
  { p: 90, c: "home" },
  { p: 500, c: "tech" },
], 100);
