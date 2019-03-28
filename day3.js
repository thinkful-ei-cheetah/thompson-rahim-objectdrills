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
console.log('\n');

let cypher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(coded) {
  let codedWords = coded.split(" ");
  let decoding = [];
 // let legend= Object.keys(cypher);
 // for (j in legend) {
    codedWords.forEach(word => {
      let firstLetter = word.charAt(0);
      let secretLetterIndex= cypher[firstLetter];
      if (secretLetterIndex) {
    //    console.log(`${word},  first: ${firstLetter}, secretIndex: ${secretLetterIndex}`)
        decoding.push( word.charAt(secretLetterIndex) );
     //   console.log(decoding);
      }
      else decoding.push(' ');
    }
    );

  // for (let i = 0; i < codedWords.length; i++) {
    // cypher.hasOwnProperty(codedWords[i].charAt(0));
    // const firstLetter = codedWords[i].charAt(0);
    // const secretLetter = cypher.codedWords[i].charAt(0);
  
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
  return decoding.join("");
}
const coded = "craft block argon meter bells brown croon droop";
console.log(decode(coded));




function createCharacter( Name , Nickname ,Race , Origin , Attack , Defense ) {
  let character = {
  Name,
  Nickname,
  Race,
  Origin,
  Attack,
  Defense,
  describe: function() {
    console.log(`${this.Name} is a ${this.Race} from ${this.Origin}.`);
  },
  evaluateFight: function(character){
    console.log(`Your opponent takes ${this.Attack-character.Defense} damage 
         and you receive ${character.Attack-this.Defense} damage`);

  }
};
return character;
}
let characters= [
  createCharacter('Gandalf the White','gandalf','Wizard','Middle Earth', 10,  6 ),
  createCharacter('Bilbo Baggins' ,'bilbo','Hobbit','The Shire',2 , 1  ),
  createCharacter('Frodo Baggins','frodo','Hobbit','The Shire', 3  , 2  ),
  createCharacter('Aragorn son of Arathorn','aragorn', 'Man' , 'Dunnedain' , 6  , 8  ),
  createCharacter('Legolas', 'legolas' ,'Elf', 'Woodland Realm', 8 , 5 ),
]

characters.push( createCharacter('Arwen Undomiel','arwen','Half-Elf', 'Rivendell', 4, 9) );

function getFighter(search){
  let found = characters.find(character => character.Nickname == search);
  if (found) {
      found.describe();
    }
    else console.log('Lost in the Shire!');
  return found;
}
let search= 'aragorn'
let first = getFighter(search);
let hobbits= characters.filter(character => character.Race == "Hobbit");
let strong= characters.filter(character => character.Attack > 5);

search= 'legolas';
let next = getFighter(search);
next.evaluateFight(first);

// console.log(hobbits);
// console.log(strong);



