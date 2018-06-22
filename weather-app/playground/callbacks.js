var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Ankush'
    };
    callback(user);
}

getUser(31, (userObject) => {
    console.log(userObject);
})