(function(root, stdClass){

	if(!stdClass) {
		return console.error('stdClass is missing');
	}

	var extend = stdClass.helper.extend;

	stdClass.Collection = stdClass.Events.extend({
		Model: stdClass.Model,
		constructor:function(data, options){
			var args = arguments;
				args.options = options || {};
				data = data || [];

				var instance =  stdClass.Collection.createInstance.call(this);

				instance.initialize.apply(instance, arguments);

				return instance;
		},
		initialize:function(data, options){},

		add:function(data, options) {

			if( typeof data === 'Array' ) {
				for( var n in data ) {
					this.add(data[n]);
				}
			} else if( typeof data === 'object' ) {
				var addModel;
				if( data.__model === true ) {
					addModel = data;
				} else {
					addModel = new this.Model(data);
				}
				var existing = this.get( addModel.id() );
				if( existing ) {
					existing.set( addModel.attrs );
				} else {
					addModel.collection = this;
					this.push(addModel);
				}
			}

		},
		get:function(id){
			for( var i = 0, length = this.length; i < length; i++ ) {
				var el = this[i];
				if( el.id() === id ) {
					return el;
				}
			}
		},
		filter:function(fn) {

		},
		where:function(attrs){

		}

	},{
		createInstance:function(){
			var instance = Object.create( Array.prototype );

				instance = (Array.apply( instance, arguments ) || instance);
				
			extend(instance, this);
			return instance;
		}
	});


}(window, stdClass));