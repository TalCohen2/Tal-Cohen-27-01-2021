const messagesDatabase = {}; // Messages DB declaration

module.exports = {
    addMessage: (messageData) => { // Adds messages to the messages DB
        messageData.messageId = +new Date();
        messagesDatabase[messageData.messageId] = messageData;
        return messageData.messageId;
    },
    getMessageById: (messageId) => { // Returns message by message ID
        return messagesDatabase[messageId];
    }
}