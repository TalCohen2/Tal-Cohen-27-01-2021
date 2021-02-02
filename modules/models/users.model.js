const usersDataObj = {}; // Users DB declaration

module.exports = {
    addUser: (id, hash) => { // Adds users by id
        usersDataObj[id] = {
            sent: [],
            received: [],
            hash: hash
        }
    },

    checkUser: (id) => { // Checks if user ID exist
        return usersDataObj[id] ? true : false;
    },

    addMessageReference: (senderId, receiverId, messageId) => { // Adds message ID as a reference to the user by user ID
        if (!usersDataObj[senderId] || !usersDataObj[receiverId]) {
            return false;
        }
        usersDataObj[senderId].sent.push(messageId);
        usersDataObj[receiverId].received.push(messageId);
        return true;
    },

    deleteMessageReference: (messageId, userId, status) => { // Deletes message reference from the user by message ID and user ID
        let messageIndex = usersDataObj[userId][status].indexOf(messageId);
        if (messageIndex == -1) {
            return false;
        }
        usersDataObj[userId][status].splice(messageIndex, 1);
        return true;
    },

    getUserData: (uId) => { // Returns user data by user ID
        return usersDataObj[uId];
    }
}