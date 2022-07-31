// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use 
// the underscore functions within them. 

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var dafruit = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return dafruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var firstLetter = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return firstLetter;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var onlyCookies = _.filter(desserts, function(desert) {
    return desert.type === 'cookie';
  });
  return onlyCookies;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(memo, num) {
    currentPrice = num.price;
    currentPrice = currentPrice.substring(1);
    currentPrice = parseFloat(currentPrice);
    return memo + currentPrice;
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var desertCount = {};
  _.reduce(desserts, function(memo, num) { 
    if (memo !== undefined) {
      desertCount[memo.type] = 1;
    }
    var otherTypeCurrently = num.type;
    if (desertCount[otherTypeCurrently] === undefined) {
      desertCount[otherTypeCurrently] = 1;
    } else {
      desertCount[otherTypeCurrently]++;
    }
  });
  return desertCount;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var ninetiesMovies = [];
  _.reduce(movies, function(memo, num) {
    if (memo !== undefined) {
      if (memo.releaseYear >= 1990 && memo.releaseYear < 2000) {
        ninetiesMovies.push(memo);
      }
    }
    if (num.releaseYear >= 1990 && num.releaseYear < 2000) {
      ninetiesMovies.push(num.title);
    }
  });
  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var withinLimit = false;
  _.reduce(movies, function(memo, num) {
    if (memo !== undefined) {
      if (memo.runtime < timeLimit) {
        withinLimit = true;
      }
    }
    if (num.runtime < timeLimit) {
      withinLimit = true;
    }
  });
  return withinLimit;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var capped = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return capped;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(desert) {
    if (desert.ingredients.includes('flour')) {
      desert.glutenFree = false;
    } else {
      desert.glutenFree = true;
    }
  });
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
// 
/*
 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1', 
      salePrice: '$9.68'
    }
  ];
*/
//return the original array
//for each object, calculate sale price
//add saleprice property to object
//return array
var applyCoupon = function(groceries, coupon) {
  _.map(groceries, function(item) {
    currentPrice = item.price;
    currentPrice = currentPrice.substring(1);
    currentPrice = parseFloat(currentPrice);
    var salePrice = currentPrice * coupon;
    salePrice = salePrice.toFixed(2);
    var discounted = currentPrice - salePrice;
    discounted = discounted.toFixed(2);
    discounted = '$' + discounted;
    item.salePrice = discounted;
  });
  return groceries;
};