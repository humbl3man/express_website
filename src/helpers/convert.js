function objToArray(obj) {
	'use strict';
	try {
		if (obj && typeof obj === 'object') {
			return Object.keys(obj).map(function(key) {
				return obj[key];
			});
		} else {
			throw new Error({
				name: 'Not Object',
				description: 'This is not an object!'
			});
		}
	} catch (error) {
		console.error(error.name, error.description);
	}
}

module.exports = {
	objToArray: objToArray
};