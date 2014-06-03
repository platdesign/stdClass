(function (root, factory) {

	var moduleName = 'stdClass';

	if (typeof define === 'function' && define.amd) {
		define([moduleName], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root[moduleName] = factory();
	}

}(this, function () {


	var extend = function(obj) {
		var sources = Array.prototype.slice.call(arguments, 1);
		for(var s in sources) {
			var source = sources[s];
			for (var prop in source) {
				obj[prop] = source[prop];
			}
		}
	    return obj;
	};


	var stdClass = function(){};

		stdClass.extend = function(protoProps, staticProps) {
			var parent = this;
			var child;

			// The constructor function for the new subclass is either defined by you
			// (the "constructor" property in your `extend` definition), or defaulted
			// by us to simply call the parent's constructor.
			if (protoProps && Object.prototype.hasOwnProperty.call(protoProps, 'constructor')) {
				child = protoProps.constructor;
			} else {
				child = function(){ return parent.apply(this, arguments); };
			}


			// Add static properties to the constructor function, if supplied.
			extend(child, parent, staticProps);

			// Set the prototype chain to inherit from `parent`, without calling
			// `parent`'s constructor function.
			var Surrogate = function(){ this.constructor = child; };
			Surrogate.prototype = parent.prototype;
			child.prototype = new Surrogate();

			// Add prototype properties (instance properties) to the subclass,
			// if supplied.
			if (protoProps) extend(child.prototype, protoProps);
				
			// Set a convenience property in case the parent's prototype is needed
			// later.
			child.__super__ = parent.prototype;
			return child;
		};
		stdClass.helper = {
			extend:extend
		};
	return stdClass;
}));
