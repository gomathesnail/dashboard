module.exports = new function() {
	this.RandomNumberGenerator = new function() {
		// Returns a random integer between min (included) and max (included)
		// Using Math.round() will give you a non-uniform distribution!
		this.getRandomIntInclusive = function(min, max) {
			var result = Math.floor(Math.random() * (max - min + 1)) + min;
			// Show which number is generated
			//console.log(result);
			return result;
		};

		// // Takes an array as an argument, and returns a random index value from that array.
		// randomItemFromArray: function(inputArray) {
		//     lengthOfArray = inputArray.length;
		//     return inputArray[this.getRandomIntInclusive(0, (inputArray.length - 1))]
		// },

		// Takes an array, and returns a random index number from that array
		this.randomNumberFromArrayLength = function(inputArray) {
			return this.getRandomIntInclusive(0, (inputArray.length - 1))
		};
	};

	// generate random numbers for a tables properties
	this.roll = function(tableData) {
		var properties = [];
		// Loop over the properties of the table
		for (var propertyIndex = 0; propertyIndex < tableData.properties.length; propertyIndex++) {

			// Generate a random index of a property value and save it as generatedValueIndex
			var generatedValueIndex = this.RandomNumberGenerator.randomNumberFromArrayLength(tableData.properties[propertyIndex].values);

			// Check if the value has options
			if (tableData.properties[propertyIndex].values[generatedValueIndex].options.length > 0) {
				// Generate a random index from the array of options
				var generatedOptionIndex = this.RandomNumberGenerator.randomNumberFromArrayLength(tableData.properties[propertyIndex].values[generatedValueIndex].options);
				
				// Save the generated value index to properties
				properties.push({
					prefix: tableData.properties[propertyIndex].prefix,
					value: tableData.properties[propertyIndex].values[generatedValueIndex].value,
					option: tableData.properties[propertyIndex].values[generatedValueIndex].options[generatedOptionIndex].value
				});
			}
			else {
				// Save the generated value index to properties
				properties.push({
					prefix: tableData.properties[propertyIndex].prefix,
					value: tableData.properties[propertyIndex].values[generatedValueIndex].value,
					option: null
				});
			}
		};

		return {
			name: tableData.name,
			properties: properties
		};
	};
};