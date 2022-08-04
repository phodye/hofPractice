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
  var total = _.reduce(products, function(totalCost, item) {
    var currentCost = item.price;
    currentCost = currentCost.slice(1);
    currentCost = parseFloat(currentCost);
    return totalCost + currentCost;
  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertTypes = _.reduce(desserts, function(categoryCount, dessert) {
    categoryCount[dessert.type] = (categoryCount[dessert.type] || 0) + 1;
    return categoryCount;
  }, {});
  return dessertTypes;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  movies = _.reduce(movies, function(ninetiesTitles, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
      ninetiesTitles.push(movie.title);
    }
    return ninetiesTitles;
  }, []);
  return movies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var withinLimit = _.reduce(movies, function(limitCheck, movie) {
    if (movie.runtime < timeLimit) {
      limitCheck = true;
    }
    return limitCheck;
  }, false);
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
  fruits = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return fruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var glutenLog = _.map(desserts, function(dessert) {
    if (_.each(dessert.ingredients, function(ingredient) { return ingredient !== 'flour'; })) {
      dessert.glutenFree = true;
      return dessert;
    } else {
      dessert.glutenFree = false;
      return dessert;
    }
  });
  return glutenLog;
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
  var salesPrices = _.map(groceries, function(grocery) {
    var currentCost = grocery.price;
    currentCost = currentCost.slice(1);
    currentCost = parseFloat(currentCost);
    var salesCost = '$' + (currentCost - (currentCost * coupon).toFixed(2));
    grocery.salePrice = salesCost;
    return grocery;
  });
  return salesPrices;
};