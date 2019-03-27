const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return this.water / this.flour;
  }
};

console.log(`${loaf.flour} ${loaf.water}`);
console.log(loaf.hydration());
