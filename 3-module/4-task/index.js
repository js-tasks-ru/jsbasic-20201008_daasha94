/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let res = [];
  for (let i=0; i<users.length; i++){
    if (users[i].age <= age)
    {
      res.push(`${users[i].name}, ${users[i].balance}`);      
    }
    
  }  
return (res.join('\n'));
}