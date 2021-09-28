const express = require("express");
const app = express();
const socket = require("socket.io");

const cors = require("cors");
const { get_Current_User, user_Disconnect, join_User } = require("./dummyuser");

app.use(express());

const port = 8000;

app.use(cors());

var server = app.listen(
    port,
    console.log(
        `Server is running on the port no: ${(port)} `

    )
);

const io = socket(server);

//initializing the socket io connection 
io.on("connection", (socket) => {
    //for a new user 
    socket.on("joinRoom", ({ username, }) => {
        //* create user
        const p_user = join_User(socket.id, username);
        console.log(socket.id, "=id");
        socket.join(p_user.room);

        //display a welcome message to the user who have joined a room
        socket.emit("message", {
            userId: p_user.id,
            username: p_user.username,
            text: `Welcome ${p_user.username}`,
        });

        //displays a joined message to all other users except that particular user
        socket.broadcast.to(p_user.room).emit("message", {
            userId: p_user.id,
            username: p_user.username,
            text: `${p_user.username} has joined the chat`,
        });
    });

    //user sending message
    socket.on("chat", (text) => {
        // message sent
        const p_user = get_Current_User(socket.id);

        io.to(p_user.room).emit("message", {
            userId: p_user.id,
            username: p_user.username,
            text: text,
        });
    });


    socket.on("disconnect", () => {
        //the user is deleted from array of users and a left room message displayed
        const p_user = user_Disconnect(socket.id);

        if (p_user) {
            io.to(p_user.room).emit("message", {
                userId: p_user.id,
                username: p_user.username,
                text: `${p_user.username} has left the chat`,
            });
        }
    });
});