const input = "a3b2c4a1";

function analyse(str) {
  let decompressed = "";
  const freq = {};

  for (let i = 0; i < str.length; i += 2) {
    decompressed += str[i].repeat(Number(str[i + 1]));
  }

    for (let ch of decompressed) {
      if (freq[ch]) {
        freq[ch]++;
      } else {
        freq[ch] = 1;
      }
    }

  let mostFrequent = Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);

  return {
    decompressed,
    mostFrequent,
    uniqueLetters: Object.keys(freq).length
  };
}

console.log(analyse(input));
