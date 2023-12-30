
function getOlderUserArray(users) {
    if (users.length === 0) {
        return null; 
    }

    var olderUser = users.reduce(function(prevUser, currentUser) {
        return prevUser.age > currentUser.age ? prevUser : currentUser;
    });

    return olderUser.name;
}

let allUsers = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];


let result = getOlderUserArray(allUsers);


console.log(result);
