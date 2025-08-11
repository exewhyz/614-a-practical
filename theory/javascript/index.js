// const arr = [1, 2, 3, 4, "hello"];

// arr[10] = false;
// console.log(arr[7]);

// const obj = {
//   name: "Aniket",
//   age: 5,
//   address: {
//     city: "Chandigarh",
//     country: "India",
//   },
// };

// obj.age = 10;
// obj.email = "test@ex.com";
// delete obj.name;

// console.log(obj["address"]["city"]);

const arr1 = [1, 2, 3, 4, "hello"];

const obj1 = {
  name: "Aniket",
  age: 5,
  address: {
    city: "Chandigarh",
    country: "India",
  },
};

// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

for (let key in obj1) {
  console.log("OBJECT KEY:", key);
}

// for (let x of arr1) {
//   console.log("VALUE:", x);
// }
