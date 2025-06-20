const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(() => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');
}

let allChats = [{
    from: "sai",
    to: "anvesh",
    msg: "Come to game",
    createdAt: new Date()
},
{
    from: "anvesh",
    to: "suraj",
    msg: "Bot ra Unga",
    createdAt: new Date()
},
{
    from: "pranav",
    to: "demon",
    msg: "you are waste player man",
    createdAt: new Date()
},
{
    from: "rupesh",
    to: "gopi",
    msg: "all the best",
    createdAt: new Date()
},
{
    from: "anvesh",
    to: "gowtam",
    msg: "CEO bolthey public",
    createdAt: new Date()
}
];

Chat.insertMany(allChats);