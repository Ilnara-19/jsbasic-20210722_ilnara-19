let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30};
let masha = { name: 'Маша', age: 28};

let users = [vasya, petya, masha];


function namify(users) {
  let arr = [];
  for (let i = 0; i < users.length; i++) {
    arr.push(users[i].name);
  }

  return arr;
}

let names = namify(users);

console.log(names);