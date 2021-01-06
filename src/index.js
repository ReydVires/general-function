/**
 * Shuffle an assign array using fisher yates algorithm
 * @param {unknown[]} array 
 */
export function shuffle (array) {
	if (!Array.isArray(array)) return;
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

/**
 * Sorting an assign array of number
 * @param {number[]} array 
 * @param {boolean} [descending] 
 */
export function sortArrayOfNumber (array, descending) {
	if (isArrayOfNumber(array)) array.sort((a, b) => (descending) ? (b-a) : (a-b));
}

/**
 * Sorting an assign array of string
 * @param {string[]} array 
 * @param {boolean} [descending] 
 */
export function sortArrayOfString (array, descending) {
	if (!isArrayOfString(array)) return;
	array.sort();
	if (descending) array.reverse();
}

/**
 * Sorting an assign array of object
 * @param {object[]} array 
 * @param {string} property
 * @param {boolean} [descending] 
 */
export function sortArrayOfObject (array, property, descending) {
	if (!isArrayOfObject(array)) return;
	array.sort((a, b) => {
		const value = a[property];
		const type = typeof value;
		if (type === "string") {
			return value.localeCompare(b[property]);
		}
		else if (type === "number") {
			return (value - b[property]);
		}
	});
	if (descending) array.reverse();
}

/**
 * Check if an array of number
 * @param {unknown[]} array 
 */
export function isArrayOfNumber (array) {
	if (!Array.isArray(array)) return false;
	return array.every((v) => typeof v === "number");
}

/**
 * Check if an array of string
 * @param {unknown[]} array 
 */
export function isArrayOfString (array) {
	if (!Array.isArray(array)) return false;
	return array.every((v) => typeof v === "string");
}

/**
 * Check if an array of object
 * @param {unknown[]} array 
 */
export function isArrayOfObject (array) {
	if (!Array.isArray(array)) return false;
	return array.every((v) => typeof v === "object");
}