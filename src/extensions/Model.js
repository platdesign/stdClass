(function(root, stdClass){

	if(!stdClass) {
		return console.error('stdClass is missing');
	}

	var extend = stdClass.helper.extend;

	stdClass.Model = stdClass.Events.extend({
		__model:true,
		idAttribute:'id',
		id:function(){
			return this.attrs[ this.idAttribute ] || null;
		},

		constructor:function(attrs, options) {
			attrs = attrs || {};
			this.options = extend({}, options || {});
			var defaults = this.defaults || {};

			this.attrs = extend({}, defaults, attrs);

			this.initialize.apply(this, arguments);
		},
		initialize:function(attrs, options){

		},
		fetch:function(){},
		save:function(){},
		destroy:function(){},

		set:function(attrs){
			extend(this.attrs, attrs);
		}
	});

}(window, stdClass));