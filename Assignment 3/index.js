var users = [
  { name: "Alex", lname: "Alter", address: "Alaska" },
  { name: "Peter", lname: "Whiteman", address: "Texas" },
  { name: "Steven", lname: "Hoopkins", address: "Texas" },
  { name: "John", lname: "Clover", address: "Calefornia" },
];

console.log(
  users.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  })
);
