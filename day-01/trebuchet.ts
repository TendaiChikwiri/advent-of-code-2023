const file = Deno.readTextFileSync("./input.txt");
const reg = /\D/g;

function parseCalibration() {
  const lines = file.split("\n");
  const total = lines.reduce((a, c) => {
    const value = getValue(c);
    return a + parseInt(`${value.at(0)}${value.at(-1)}`);
  }, 0);
  return total
}

function getValue(line: string) {
  return line.replace(reg, "");
}

console.log(parseCalibration())
