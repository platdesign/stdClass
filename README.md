#stdClass.js

Extendable base class.

##Install
1. Choose your favorite way to get FPDF.js
	- Bower: `bower install --save stdClass`
 	- [Download as Zip-Archive](https://github.com/platdesign/stdClass/archive/master.zip)
 	- `git clone https://github.com/platdesign/stdClass.git`
2. Embed it into your HTML
		
		<script src="vendor/stdClass/stdClass.js"></script>


##Example

	var Moveable = stdClass.extend({
		move:function(){ this._startMove(); }
	});
	
	var Car = Moveable.extend({
		_startMove:function(){ this.accelerate(); },
		accelerate:function(){}
	});
	
	

##License
This project is under the MIT license. Let me know if you'll use it. =)


##Contributors
This is a project by [Christian Blaschke](http://platdesign.de).	 
Get in touch: [mail@platdesign.de](mailto:mail@platdesign.de) or [@platdesign](https://twitter.com/platdesign)



