module.exports = function(dest, src) {
	for (var a in src.prototype) {
		dest.prototype[a] = src.prototype[a];
	}
};
