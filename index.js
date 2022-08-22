// # Recursion

// #### Write a function which can reverse string
// * Write a JavaScript function that reverse a string.
// Sample Data and output:
// Example reverse("hello world")
// Expected Output: dlrow olleh

const string = "hello world";

function reverse(str) {
  if (str.length === 0) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse(string)); // return dlrow olleh
console.log(reverse("ojijo anna"));
