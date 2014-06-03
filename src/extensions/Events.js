(function(root, stdClass){

	if(!stdClass) {
		return console.error('stdClass is missing');
	}

	stdClass.Events = stdClass.extend({
		on:function(eventname, closure){
			var events = this.events || (this.events = {});
			var event = events[eventname] || (events[eventname] = []);
			event.push(closure);
			return this;
		},
		trigger:function(eventname) {
			var events = this.events || (this.events = {});
			var event = events[eventname] || (events[eventname] = []);
			
			var args = [].splice.call(arguments,0);
			var newArgs = args.splice(1,1);
			
			for(var i in event) {
				var closure = event[i];
				closure.apply(this, newArgs);
			}
			return this;
		}
	});

}(window, stdClass));