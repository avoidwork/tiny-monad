# tiny-monad

**tiny-monad** is a Monad factory to help get you started working with Monads. `Monad()` takes an optional `modifier` Function to run when instantiating instances, which receives `monad` & `value` as it's parameters. What's a Monad? Well, it's this pattern that makes composing Functions / behaviors really easy, and it works well with Functional Reactive Programming for creating UIs, etc..

[![build status](https://secure.travis-ci.org/avoidwork/tiny-monad.png)](http://travis-ci.org/avoidwork/tiny-monad)

## API

### bind
#### Method
Binds a Function to the Monad and executes it

	param  {Function} fn Function to bind
	return {Object}      Monad

**Example**

```javascript
var x = Monad();

x('Hello World').bind(alert);
```

### lift
#### Method

Lifts a non-monadic function into the Monad

	param  {String} name Name of Function
	param  {String} fn   Function to 'lift'
	return {Object}      Monad

**Example**

```javascript
var alertify = Monad().lift('alert', alert),
    instance = alertify('Hello World!');

instance.alert();
```

### method
#### Method

Adds a function to the Monad prototype

	param  {String} name Name of Function
	param  {String} fn   Function
	return {Object}      Monad

**Example**

```javascript
var alertify = Monad().method('alert', alert),
    instance = alertify('Hello World!');

instance.alert();
```

## License
Copyright (c) 2014 Jason Mulligan  
Licensed under the BSD-3 license.
