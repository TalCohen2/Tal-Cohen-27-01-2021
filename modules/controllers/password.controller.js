const bcrypt = require("bcrypt"); // bcrypt library import.

module.exports = {
    hash: (plainTextPwd) => { // creates hash from plainTextPwd.
        return bcrypt.hash(plainTextPwd, 10);
    },
    verify: (plainTextPwd, hash) => { // verifies if the plainTextPwd equals to the hash before salting.
        return bcrypt.compare(plainTextPwd, hash);
    }
}