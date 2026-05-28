// Check whether this property exists:
// ```jsx
// "user.address.city"
// ```

// inside an object dynamically.
// Hint:
// Use:
// ```jsx
// split(".")
// ```

const user = {
    name: "Anubhav",
    address: {
        //city: "Bhopal",
        pincode: 462001
    }
}

const prop = "user.address.city";
console.log(user?.address?.city ? true : false);
