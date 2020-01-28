// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { busMallData } from '../data/product-data.js';
import { generateRandomProduct } from '../utils/choose-random-object.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    console.log(generateRandomProduct(busMallData));
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
