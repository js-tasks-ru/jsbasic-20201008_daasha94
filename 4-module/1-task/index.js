/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for(let i = 0; i<friends.length; i++)
  {
    ul.appendChild(document.createElement('li'));
    ul.children[i].append(friends[i].firstName + " " + friends[i].lastName);   
  } 
  return ul;
}