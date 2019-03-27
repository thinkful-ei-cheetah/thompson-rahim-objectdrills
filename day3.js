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

const Hobbit =  {height: 'short', feet: 'smelly', meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'] };
//console.log(Hobbit.meals[3]);

const Friends = [
  {name: 'Rahim', jobTitle: 'Cable cutter', },
  {name: 'Chris', jobTitle: 'Booty grabber', boss: 'Nobody'},
  {name: 'Tom', jobTitle: 'Power peeper', boss: 'Babes'},
  {name: 'Steve', jobTitle: 'Yes man', boss: 'Rahim'},
]
for (i in Friends){
  if (Friends[i].boss) {
  console.log(`${Friends[i].jobTitle} ${Friends[i].name} reports to ${Friends[i].boss}`);
  }
  else  console.log(`${Friends[i].jobTitle} ${Friends[i].name} doesn't report to anybody.`);
  
  //console.log(`${Friends[i].name} is a professional ${Friends[i].jobTitle}`);
}