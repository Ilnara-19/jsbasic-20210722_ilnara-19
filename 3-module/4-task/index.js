
function showSalary(users, age) {
  let str = [];
  let strNew;
 
  for (let i = 0; i < users.length; i++) {
 
    if (users[i].age <= age) {
      str.push(`${users[i].name}, ${users[i].balance}`);
    }
  }

  strNew = str.join('\n'); 
  return strNew;
}

