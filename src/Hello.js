let hello = <h1>Hello, World!</h1>;

function HelloWorld(name) {
  return <h1>Hello, {name}!</h1>;
}

function sum(a, b) {
  return a + b;
}

let sumElement = <h2>{sum(2, 3)}</h2>;
