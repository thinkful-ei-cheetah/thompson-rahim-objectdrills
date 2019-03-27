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

const Hobbit = {
  height: "short",
  feet: "smelly",
  meals: [
    "breakfast",
    "second breakfast",
    "elevenses",
    "lunch",
    "afternoon tea",
    "dinner",
    "supper"
  ]
};
//console.log(Hobbit.meals[3]);

const Friends = [
  { name: "Rahim", jobTitle: "Cable cutter" },
  { name: "Chris", jobTitle: "Booty grabber", boss: "Nobody" },
  { name: "Tom", jobTitle: "Power peeper", boss: "Babes" },
  { name: "Steve", jobTitle: "Yes man", boss: "Rahim" }
];
for (i in Friends) {
  if (Friends[i].boss) {
    console.log(
      `${Friends[i].jobTitle} ${Friends[i].name} reports to ${Friends[i].boss}`
    );
  } else
    console.log(
      `${Friends[i].jobTitle} ${Friends[i].name} doesn't report to anybody.`
    );

  //console.log(`${Friends[i].name} is a professional ${Friends[i].jobTitle}`);
}

function decode(coded) {
  const codedWords = coded.split(" ");
  let decodedWord = [];

  let cypher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  for (let j = 0; j < cypher.length; j++) {
    cypher[j];
  }

  for (let i = 0; i < codedWords.length; i++) {
    // cypher.hasOwnProperty(codedWords[i].charAt(0));

    const firstLetter = codedWords[i].charAt(0);
    const secretLetter = cypher.codedWords[i].charAt(0);
  }
  // for (let i = 0; i < newWord.length; i++) {
  //   switch (newWord[i].charAt(0)) {
  //     case "a":
  //       decodedWord.push(newWord[i].charAt(1));
  //       break;
  //     case "b":
  //       decodedWord.push(newWord[i].charAt(2));
  //       break;
  //     case "c":
  //       decodedWord.push(newWord[i].charAt(3));
  //       break;
  //     case "d":
  //       decodedWord.push(newWord[i].charAt(4));
  //       break;
  //     default:
  //       decodedWord.push(" ");
  //       break;
  //   }
  // }
  return decodedWord.join("");
}
const coded = "craft block argon meter bells brown croon droop";
console.log(decode(coded));
