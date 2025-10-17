const players = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

function genererMatchs(liste) {
  let joueurs = [...liste];

  for (let i = joueurs.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = joueurs[i];
    joueurs[i] = joueurs[j];
    joueurs[j] = temp;
  }

  let matchs = [];

  let impair = joueurs.length % 2 !== 0;

  for (let i = 0; i < joueurs.length - 1; i += 2) {
    matchs.push([joueurs[i], joueurs[i + 1]]);
  }

  if (impair) {
    matchs.push({ exempt: joueurs[joueurs.length - 1] });
  }

  return matchs;
}

console.log(genererMatchs(players));
