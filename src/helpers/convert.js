function objToArray(obj) {
	'use strict';
	try {
		if (obj && typeof obj === 'object') {
			return Object.keys(obj).map(function(key) {
				return obj[key];
			});
		} else {
			throw new TypeError({
				message: 'This is not an object!'
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

module.exports = {
	objToArray: objToArray
};
