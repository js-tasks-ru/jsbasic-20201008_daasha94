/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
 
 function sumSalary(obj) {
  let sum = 0;
  for (let key in obj) {
	  if (typeof obj[key] == 'number') {
		  sum += obj[key];
        }
     }
  return sum;
}	 
