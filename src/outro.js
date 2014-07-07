// CommonJS, AMD, script tag
if ( typeof exports !== "undefined" ) {
	module.exports = Monad;
}
else if ( typeof define === "function" ) {
	define( function () {
		return Monad;
	} );
}
else {
	global.Monad = Monad;
}
} )( this );
