function trouverTopUtilisateur(utilisateurs, seuil) {
  const utilisateursAvecTotal = utilisateurs
    .map(utilisateur => {
      const total = calculerTotal(utilisateur.scores, seuil);
      return total > 0 ? { nom: utilisateur.nom, total } : null;
    })
    .filter(u => u !== null);

  utilisateursAvecTotal.sort((a, b) => b.total - a.total);

  const top = utilisateursAvecTotal[0] ? utilisateursAvecTotal[0].nom : null;

  console.log("Top :", top);

  return top;
}

function calculerTotal(scores, seuil) {
  let somme = 0;
  for (const score of scores) {
    if (score >= seuil) {
      somme += score;
    }
  }
  return somme;
}

const utilisateurs = [
  { nom: "Alice", scores: [50, 120, 300] },
  { nom: "Bob", scores: [90, 40, 60] },
  { nom: "Charlie", scores: [500, 20] },
];

const seuil = 100;

trouverTopUtilisateur(utilisateurs, seuil);
