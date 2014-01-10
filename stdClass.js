(function(window){
	
	var extend = function(obj) {
		each(slice.call(arguments, 1), function(source) {
			if (source) {
				for (var prop in source) {
					obj[prop] = source[prop];
				}
			}
		});
		return obj;
	};
	
	
	var stdClass = function(){};
	
		stdClass.extend = function(protoProps, staticProps) {
	
			/* Borrowed from Backbone.js */

			var parent = this;
			var child;

			// The constructor function for the new subclass is either defined by you
			// (the "constructor" property in your `extend` definition), or defaulted
			// by us to simply call the parent's constructor.
			if (protoProps && _.has(protoProps, 'constructor')) {
				child = protoProps.constructor;
			} else {
				child = function(){ return parent.apply(this, arguments); };
			}

			// Add static properties to the constructor function, if supplied.
			_.extend(child, parent, staticProps);

			// Set the prototype chain to inherit from `parent`, without calling
			// `parent`'s constructor function.
			var Surrogate = function(){ this.constructor = child; };
			Surrogate.prototype = parent.prototype;
			child.prototype = new Surrogate;
  		
			// Add prototype properties (instance properties) to the subclass,
			// if supplied.
			if (protoProps) _.extend(child.prototype, protoProps);
  		
			// Set a convenience property in case the parent's prototype is needed
			// later.
			child.__super__ = parent.prototype;
  		
			return child;
		};
	
	
		
		window.stdClass = stdClass.extend({
			on:function(eventname, closure){
				var events = this.events || (this.events = {});
				var event = events[eventname] || (events[eventname] = []);
				event.push(closure);
			},
			trigger:function(eventname) {
				var events = this.events || (this.events = {});
				var event = events[eventname] || (events[eventname] = []);
				
				var args = [].splice.call(arguments,0);
				var newArgs = args.splice(1,1);
				
				for(i in event) {
					var closure = event[i];
					closure.apply(this, newArgs);
				}
			}
		});
	
		
	
})(window);

