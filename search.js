// Let min = 1 and max = nn.
// Guess the average of max and min, rounded down (so that it is an integer).
// If you guessed the number, stop. You found it!
// If the guess was too low, set min to be one larger than the guess.
// If the guess was too high, set max to be one smaller than the guess.
// Go back to step 2.

// search only works on sorted arrays.

// Here's the pseudocode for binary search, modified for searching in an array. The inputs are the array, which we call array; 
// the number n of elements in array; and target, the number being searched for. The output is the index in array of target:
// Let min = 0 and max = n-1.
// Compute guess as the average of max and min, rounded down (so that it is an integer).
// If array[guess] equals target, then stop. You found it! Return guess.
// If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// Otherwise, the guess was too high. Set max = guess - 1.
// Go back to step 2.


//var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function searchPrimes(array, n, target) {
    var min = 0;
    var max = n - 1;

    while (array[guess] !== target && max > min) {
        var guess = Math.round((min + max) / 2);

        if (array[guess] < target) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
    }
    if (array[guess] === target) {
        return "index of target: " + guess
    } else {
        return "index of target: " + -1;
    }
}

//console.log(searchPrimes(primes, 25, 10))

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
    while (max >= min) {
        guess = Math.floor( (min + max)/2 ) ;
        if (array[guess] === targetValue) {
             return guess;
        } else if (array[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);