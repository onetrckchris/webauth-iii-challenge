const db = require('../data/db-config');

module.exports = {
    getUsers,
    register,
    login
};

function getUsers() {
    return db('users')
        .select('users.username', 'users.department');
};

function register(user) {
    return db('users')
        .insert(user);
};

function login(username) {
    return db('users')
        .where({ username })
        .first()
}