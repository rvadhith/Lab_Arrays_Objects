// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers (number_1, number_2) {
  if(number_1 > number_2){
    return number_1;
  }
  else if(number_1 < number_2) {
    return number_2;
  }
  else{
    return number_1;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord (words) {
  var word_length = words.length;
  if(word_length == 0){
    return null;
  }
  else{
    for(var i = 1; i < word_length; i++){
      var greatest_so_far = words[0];
      if(words[i].length > words[0].length){
        greatest_so_far = words[i];
      }
      return greatest_so_far; 
    }
  }  
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var sum = 0;
function netPrice(numbers) {
  for(var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
var sum = 0;

function midPointOfLevels(numbers) {
  for(var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum/numbers.length;
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

var sum = 0;
function averageWordLength(words) {
  var word_length = words.length;
  if(word_length == 0){
    return null;
  }
  else{  
  for(var i = 0; i < word_length; i++){
    sum = sum + words[i].length;
  }
  return sum/word_length;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(words) {
  var word_length = words.length;
  if(word_length == 0){
    return null;
  }
  else {
    let unique = [];
    for(var i = 0; i < words.length; i++){
      if(unique.indexOf(words[i]) === -1){
        unique.push(words[i]);
      }
    }
    return unique;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(words, word) {
  var word_length = words.length;
  if(word_length == 0){
    return null;
  }
  else {
    for(var i = 0; i < words.length; i++){
      if(words[i] === word){
        return true;
      }
    }
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(words, word) {
  var word_length = words.length;
  var repetition_count = 0;
  if(word_length == 0){
    return 0;
  }
  else {
    for(var i = 0; i < words.length; i++){
      if(words[i] === word){
        repetition_count = repetition_count + 1;
      }
    }
  }
  return repetition_count;
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
