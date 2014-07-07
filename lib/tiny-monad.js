/**
 * tiny-monad
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-monad/master/LICENSE>
 * @link https://github.com/avoidwork/tiny-monad
 * @module tiny-monad
 * @version 0.1.1
 */
( function ( global ) {
"use strict";

/**
 * Monad factory
 *
 * @method Monad
 */
function Monad ( modifier ) {
	var proto = Object.create( null );

	/**
	 * Monad constructor
	 *
	 * @method unit
	 * @param  {Mixed} value Initial value of Monad
	 * @return {Object}      Monad
	 */
	function unit ( value ) {
		var monad = Object.create( proto );

		monad.bind = function () {
			var args = [].slice.call( arguments || [] ),
			    fn   = args.shift();

			return fn.apply( undefined, [value].concat( args ) );
		};

		if ( typeof modifier == "function" ) {
			modifier( monad, value );
		}

		return monad;
	}

	/**
	 * Lifts a non-monadic function into the Monad
	 *
	 * @method lift
	 * @param  {String}   name Name of method
	 * @param  {Function} fn   Function
	 * @return {Object}        Monad
	 */
	unit.lift = function ( name, fn ) {
		unit.method( name, function () {
			var args = [].slice.call( args || [] );

			return unit( this.bind.apply( this, [fn].concat( args ) ) );
		} );

		return unit;
	};

	/**
	 * Adds a function to the Monad prototype
	 *
	 * @method method
	 * @param  {String}   name Name of method
	 * @param  {Function} fn   Function
	 * @return {Object}        Monad
	 */
	unit.method = function ( name, fn ) {
		proto[name] = fn;

		return unit;
	};

	return unit;
}

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
