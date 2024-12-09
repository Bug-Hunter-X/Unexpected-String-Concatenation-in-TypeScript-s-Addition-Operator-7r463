function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // This will compile without error, but will result in unexpected behavior at runtime
console.log(result); // Output: "helloworld"