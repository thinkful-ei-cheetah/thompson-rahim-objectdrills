function createMyObject() {
  return {
    foo: "bar",
    answerToUniverse: 42,
    "olly olly": "oxen free",
    sayHello() {
      return "hello";
    }
  };
}

function updateObject(obj) {
  let foo = "foo",
    bar = "bar";
  bizz = "bizz";
  bang = "bang";
  Object.assign(obj, { foo, bar, bizz, bang });
  return obj;
}

function personMaker() {
  var person = {
    firstName: "Paul",
    lastName: "Jones",
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

const sampleObj = {
  foo: "foo",
  bar: "bar",
  bizz: "bizz",
  bang: "bang"
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentsReport(data) {
  // your code here
  let newArray = [];
  data.forEach(function(data) {
    newArray.push(`${data.name}: ${data.grade}`);
  });
  console.log(newArray);
  return newArray;
}

function enrollInSummerSchool(students) {
  for (report in students) {
    students[report].status = "In Summer school";
  }
  return students;
}

function findById(items, idNum) {
  for (const prop in items) {
    if (items[prop].id === idNum) {
      return items[prop];
    }
  }
}


function validateKeys(object, expectedKeys){
// console.log( ( Object.keys(object), expectedKeys) ) ;
  let keys = ( Object.keys(object) );
 // console.log(`keys: ${typeof key}`);
 if (expectedKeys.length === keys.length){   //same length?
        for (i in expectedKeys) {
        let index = (keys.findIndex(key => expectedKeys[i] === key ) );   //gets key location
        let found = (index != -1);    //checks if in keys
        if (!found){         //breaks if not
          return false;    
          }
        }               //end of loop
        
        return true;     
      }
      else
  return false;
}

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

function testIt() {
  const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };

  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };

  const objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused',
  };

  const objectD = {
    foo: 2,
    bar: 'Jane Doe',
    bizz: 34,
    bang: 'Chicago',
  };

  const expectedKeys = ['id', 'name', 'age', 'city'];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error('FAILURE: validateKeys should return a boolean value');
    return;
  }

  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return true but returned false:
      Object: ${JSON.stringify(objectA)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectB)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectC, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectC)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectD, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectD)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  console.log('SUCCESS: validateKeys is working');
}

testIt();


/*
// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: "bar" },
  { id: 28, foo: "bizz" },
  { id: 19, foo: "bazz" }
];


//

function testIt() {
  const testData = [
    { id: 1, foo: "bar" },
    { id: 2, foo: "bizz" },
    { id: 3, bang: "boo" }
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === "object")) {
    console.error("`findById` must return an object");
    return;
  }
  if (result.id !== 3) {
    console.error(
      "Asked for item with id of `3` but got back one with id of " + result.id
    );
    return;
  }
  if (result.bang !== "boo") {
    console.error(
      "Expected all key/value pairs from target object to be returned"
    );
    return;
  }
  console.log("SUCCESS: `findByid` is working");
}

testIt();

/*
const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];



function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology',
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics',
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science',
    },
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
        _student.course === student.course &&
        _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school": ' +
        JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}

testIt();



/* From here down, you are not expected to 
   understand.... for now :)  
   
   Nothing to see here!
   


(function testKeyDeleter() {
  var obj = keyDeleter({
    foo: "foo",
    bar: "bar",
    bizz: "bizz",
    bang: "bang"
  });

  if (typeof obj !== "object") {
    console.error("ERROR: `keyDeleter` must be return an object");
    return false;
  }
  ["foo", "bar"].forEach(function(key) {
    if (key in obj) {
      console.error("`keyDeleter` did not delete the key for " + key);
      return false;
    }
  });
  ["bizz", "bang"].forEach(function(key) {
    if (!(key in obj && obj[key] === key)) {
      console.error("`keyDeleter` is deleting keys other than `foo` and `bar`");
      return false;
    }
  });
  console.log("SUCCESS: `keyDeleter` works correctly!");
})();

----------------------------------------------------------------

// Data tests

function testIt() {
  const testData = [
    { name: "Jane Doe", grade: "A" },
    { name: "John Dough", grade: "B" },
    { name: "Jill Do", grade: "A" }
  ];

  const expectations = ["Jane Doe: A", "John Dough: B", "Jill Do: A"];

  const results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error("FAILURE: `makeStudentsReport` must return an array");
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      "FAILURE: test data had length of " +
        testData.length +
        " but `makeStudentsReport` returned array of length " +
        results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error(
        "FAILURE: `makeStudentsReport` is not " + "producing expected strings"
      );
      return;
    }
  }
  console.log("SUCCESS: `makeStudentsReport` is working");
}

testIt();

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   


(function testUpdateObject() {
  var oldObj = {
    cats: "cats",
    dogs: "dogs"
  };
  var newObj = updateObject(oldObj);
  if (typeof newObj !== "object") {
    console.error("ERROR: `createMyObject` must return an object");
    return false;
  }
  ["foo", "bar", "bizz", "bang"].forEach(function(key) {
    if (!(key in newObj)) {
      console.error(
        "ERROR: `" + key + "` not in object returned by `updateObject`"
      );
      return false;
    }
  });
  ["foo", "bar", "bizz", "bang"].forEach(function(key) {
    if (newObj[key] !== key) {
      console.error(
        "ERROR: `" + key + '` should be "' + key + '" but was ' + newObj[key]
      );
      return false;
    }
  });
  if (!(newObj.cats === "cats" && newObj.dogs === "dogs")) {
    console.error(
      "ERROR: your function doesn't preserve existing key/value pairs"
    );
    return false;
  }
  console.log("SUCCESS: `updateObject` works correctly!");
})();

*/

(function testPersonMaker() {
  var person = personMaker();
  if (typeof person !== "object") {
    console.error("ERROR: `personMaker` must return an object");
    return false;
  }
  if (typeof person.fullName !== "function") {
    console.error("ERROR: `fullName` must be a method");
    return false;
  }
  if (person.fullName() !== "Paul Jones") {
    console.error(
      'ERROR: The value for `fullName` should be "Paul Jones" but was ' +
        person.fullName()
    );
    return false;
  }
  person.firstName = "Lisa";
  person.lastName = "Simpson";
  if (person.fullName() !== "Lisa Simpson") {
    console.error(
      "`personMaker` is not using self reference correctly. " +
        'When firstName set to "Lisa" and lastName set to "Simpson", ' +
        'should return "Lisa Simpson" but returned ' +
        person.fullName()
    );
  }
  console.log("SUCCESS: `updateObject` works correctly!");
})();
