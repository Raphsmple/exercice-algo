function calculateAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  const sum = scores.reduce((acc, val) => acc + val, 0);
  return sum / scores.length;
}

function evaluate(players) {
  const activePlayersWithAvg = players
    .filter(player => player.isActive)
    .map(player => ({
      name: player.name,
      average: calculateAverage(player.levelScores)
    }));

  activePlayersWithAvg.sort((a, b) => b.average - a.average);

  activePlayersWithAvg.forEach((player, index) => {
    player.rank = index + 1;
  });

  const lookup = {};
  activePlayersWithAvg.forEach(p => {
    lookup[p.name] = { average: p.average, rank: p.rank };
  });

  return players.map(p => ({
    name: p.name,
    average: lookup[p.name] ? lookup[p.name].average : null,
    rank: lookup[p.name] ? lookup[p.name].rank : null,
    active: p.isActive
  }));
}

const players = [
  { name: "Alice", isActive: true, levelScores: [50, 60, 80] },
  { name: "Bob", isActive: false, levelScores: [90, 95, 100] },
  { name: "Charlie", isActive: true, levelScores: [100] },
  { name: "Dylan", isActive: true, levelScores: [] },
];

console.log(evaluate(players));
