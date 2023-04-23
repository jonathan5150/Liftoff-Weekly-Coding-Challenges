function minMax(arr) {
	const array = [];
	array.push(Math.min.apply(Math, arr));
	array.push(Math.max.apply(Math, arr));
	return array;
}
