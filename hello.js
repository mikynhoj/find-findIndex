/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function removeUser(usersArray, username) {
  const index = usersArray.findIndex(function(val){
      return val.username == username; 
  })
  if(index === -1){
      return; 
  }
  return usersArray.splice(index,1)[0];
}

console.log(removeUser(users, 'akagen'));