export interface Message { // represents the message data structure
    subject: string;
    message: string;
    receiverId: number;
    senderId?: number;
    creationDate?: Date;
    messageId?: number;
}