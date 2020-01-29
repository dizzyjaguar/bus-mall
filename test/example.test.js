// IMPORT MODULES under test here:
// import example from '../src/example.js';
import productsArray from '../data/product-data.js';
import generate3Products from '../utils/generate-3-items.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    console.log(generate3Products(productsArray));
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
