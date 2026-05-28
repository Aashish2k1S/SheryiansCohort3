// Remove the `password` property from the object.
// ```jsx
const account = {
  username: "john",
  password: "12345"
}
// ```

console.log(account);

delete account.password;
console.log(account);