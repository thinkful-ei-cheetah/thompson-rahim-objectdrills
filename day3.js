const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water / this.flour) * 100;
  }
};

console.log(`${loaf.flour} ${loaf.water}`);
console.log(loaf.hydration());

const loafer = {
  foo: "go",
  bar: "stop",
  fum: "halt",
  quux: "run",
  spam: "walk"
};

for (let prop in loafer) {
  console.log(`${prop} : ${loafer[prop]}`);
}
