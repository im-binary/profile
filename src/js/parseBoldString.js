export function parseBoldString(str) {
  const arr = [];
  const tokens = str.split("*");
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "" && tokens[i + 2] === "") {
      arr.push(`**${tokens[i + 1]}`);
      i = i + 2;
      continue;
    }

    arr.push(tokens[i]);
  }

  return arr;
}
