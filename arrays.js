// remove duplicates from an array
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uniqueValues = values.filter((value, index, array) => array.indexOf(value) === index);
console.log(uniqueValues);

// simple search in an array
const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'Steven', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let findUser = users.filter(it => it.name.includes("ven"));
console.log(findUser);

// check if user has admin rights
const hasAdmin = users.some(user => user.group === 'admin');
const listAdmin = users.filter(user => user.group === 'admin');
console.log(hasAdmin);
console.log(listAdmin);

// flatten a nested array
const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((a, b) => a.concat(b), []);
console.log(flat);

// create an object that contains the frequency of the specified key
const users2 = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
const groupByAge = users2.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
    return acc;
}, {});
console.log(groupByAge);

// indexing an array of objects
const uTable = users2.reduce((acc, it) => (acc[it.id] = it, acc), {});
console.log(uTable);

//extract the unique keys from an array for the given key of each item in the array
const listOfUserGroups = [...new Set(users2.map(it => it.group))];
console.log(listOfUserGroups);

// object key-value map reversal
const cities = {
  Lyon: "France",
  Paris: "France",
  Berlin: "Germany"
}
let countries = Object.keys(cities).reduce((acc, key) => {
  let country = cities[key];
  acc[country] = acc[country] || [];
  acc[country].push(key);
  return acc;
}, {});
console.log(countries);

// create an array of Farenheit values from an array of Celsius values
const celsius = [-15, -5, 0, 10, 39.2, 36.5, 37.3, 37.8];
const farenheit = celsius.map(it => it * 1.8 + 32);
console.log(farenheit);

// print a table of users as a readable string only with specified keys
const users3 = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

const table = users.map(({id, age, group}) => `${id} - ${age} - ${group}`).join('\n');
console.log(table);
