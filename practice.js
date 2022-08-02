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
  fruits = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  fruits = _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  desserts = _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(currentTotal, addition) {
    addition = addition.price;
    addition = addition.slice(1);
    addition = parseFloat(addition);
    return currentTotal + addition;
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertTypes = _.reduce(desserts, function(categories, currentDessert) {
    currentDessert = currentDessert.type;
    categories[currentDessert] = (categories[currentDessert] || 0) + 1;
    return categories;
  }, {});
  return dessertTypes;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var ninetiesMovies = _.reduce(movies, function(movieList, currentMovie) {
    if (currentMovie.releaseYear >= 1990 && currentMovie.releaseYear < 2000) {
      movieList.push(currentMovie.title);
    }
    return movieList;
  }, []);
  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var inTime = _.reduce(movies, function(limit, currentMovie) {
    if (currentMovie.runtime < timeLimit) {
      limit = true;
    }
    return limit;
  }, false);
  return inTime;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var upStyle = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return upStyle;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var gluten = _.map(desserts, function(dessert) {
    if (_.each(dessert.ingredients, function(ingredient) { return ingredient !== 'flour'; })) {
      dessert.glutenFree = true;
      return dessert;
    } else {
      dessert.glutenFree = false;
      return dessert;
    }
  });
  return gluten;
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
var applyCoupon = function(groceries, coupon) {
  var discounted = _.map(groceries, function(grocery) {
    var startingPrice = grocery.price;
    startingPrice = startingPrice.slice(1);
    startingPrice = parseFloat(startingPrice);
    var discountedPrice = '$' + (startingPrice - (startingPrice * coupon)).toFixed(2);
    grocery.salePrice = discountedPrice;
    return grocery;
  });
  return discounted;
};