/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(',').join(' ').split(' ');
  let arr2 = [];

   for (let i=0; i<arr.length; i++) {
     if (!isNaN(arr[i])) {
         arr2.push(arr[i]); 
     }   
   }
 let result = {
	 min: Math.min.apply(null, arr2),
	 max: Math.max.apply(null, arr2)
 }

return result;
}
