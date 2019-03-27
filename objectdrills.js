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
      return `${this.firstName}${this.lastName}`;
    }
  };
  return person;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo; 
  delete obj.bar;
  return obj;
}


(function testKeyDeleter() {
  var obj = keyDeleter({
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  });

  if (typeof obj !== 'object') {
    console.error('ERROR: `keyDeleter` must be return an object');
    return false;
  }
  ['foo', 'bar'].forEach(function(key) {
    if (key in obj) {
      console.error('`keyDeleter` did not delete the key for ' + key);
      return false;
    }
  });
  ['bizz', 'bang'].forEach(function(key) {
    if (!(key in obj && obj[key] === key)) {
      console.error('`keyDeleter` is deleting keys other than `foo` and `bar`');
      return false;
    }
  });
  console.log('SUCCESS: `keyDeleter` works correctly!');
})();







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