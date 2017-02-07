"use strict"

var practice = 'words';
// i can concatenate strings
// i can slice strings
// I can make all letters upper or lower case

var perfect = 'perfect ' + practice;
console.log(practice);
console.log(perfect);

for (var i = 0; i < perfect.length; i++) {
    console.log(perfect[i]);
}




// array

var threeThings = ['one', 'two', 'three'];
console.log(threeThings);

// Three things to do with arrays/
// 1. Loop arrays
// 2. Apply functional iterators
// 3. Index the arrays

console.log(threeThings[1]);

//Using your variable from #1 append another item to your array

threeThings.push('four');
console.log(threeThings);

for (var i = 0; i < threeThings.length; i++)[
    console.log(threeThings[i])
]

// Each item in the array is a string. MDN definition of string :: The String global object is a constructor for strings, or a sequence of characters.




// Objects


var drinks = {
    energy: 'Red Bull',
    soda: 'Coke',
    beer: 'Bud Light',
    beers: [{
        one: 'Bud Light Lime',
        two: 'Platinum'
    }]
};
console.log(drinks);



// List three things you know you can do with Objects
// 1. Create an Array of objects. Allowing you to acces the index of each object.
// 2. Create boolean statements. Allowing to carry out functions under certain conditions.
// 3. Use methods

// List some things you can do with your new property in the object.
// 1. Select the particular detail you want for the item in the variable. i.e. bud light > bud light lime.
// 2. Index the array to Fill pages up with content quickly by using iterators and handlebars to target them and use the template.
// 3.




// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


// var str = ('This website is for losers LOL!');
// var vowels = ('a', 'e', 'i', 'o', 'u');
//
// function disemvowel(str) {
//   return str;
//
// }
// console.log(str);
// console.log(vowels);

function disemvowel(str) {
    var strArray = str.split('');
    var strArrayNew = "";
    var vowels = 'aeiou'; //['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < strArray.length; i++) {  // ? truevalue : falsevalue
      if(vowels.indexOf(strArray[i].toLowerCase()) === -1){
        strArrayNew = strArrayNew + strArray[i];
      }

    }

      console.log(strArrayNew);
      return strArrayNew;
      console.log(strArray.length[i]);
};

console.assert(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!")

// var consonant = true
//
// for (var j = 0; j < vowels.length; j++){
//   if(strArray[i] == vowels[j]){
//     consonant = false;
//   }
// }
//
// if(consonant){
//   strArrayNew = strArrayNew + strArray[i];
// }




// Write a function complements(array, number)
// which returns true if any two numbers in
// the array sum to the number. hint :: nest a for loop.

function complements(array, number){

  for(var i=0 i<array.length; i++){
    var firstAddend = array[i];

    for(var j=0 j<array.length; j++)
    var secondAddend = array[j];
    var firstAddend + secondAddend;
    if(sum === number){
      return true;
    }
  }
  return false;
}

var odds = [1, 3, 5, 7, 9, 11];
var ints = [-11, 40, 17, -5, -1, -11, 2, 9];


console.assert( complements(odds, 4) === true )
console.assert( complements(odds, 1) === false )
console.assert( complements(ints, -22) === true )
console.assert( complements(ints, 16) === true )
console.assert( complements(ints, 40) === false )
