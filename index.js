function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(() => console.log("hello"))

function returnsANamedFunction() {
  const named = function fn() {
    console.log('HELLO');
  }
  return named;
}
const greet = returnsANamedFunction()();

function returnsAnAnonymousFunction() {
    return () => console.log("hello");
}