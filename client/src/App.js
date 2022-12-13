import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from 'react';
// eslint-disable-next-line
const socket = io.connect("http://localhost:3001");

function App() {
    const [ room, setRoom ] = useState("");
    const [ message, setMessage ] = useState(""); // to read message typed by user
    const [ messageReceived, setMessageReceived ] = useState("");

    const sendMessage = () => {
        //console.log("Message is Sent");
        // install socket io client version from terminal "npm add socket.io-client"
        if (message !== "") {
            socket.emit("send_message", {message, room}); // send to backend and then it will send message to frontend.
        }

    };
    const joinRoom = (data) => {
        //console.log("Message is Sent");
        // install socket io client version from terminal "npm add socket.io-client"
        if (room !== "") {
            socket.emit("join_room", data); // send to backend and then it will send message to frontend.
        }

    };
    // useEffect will work when ever socket io get data message
     useEffect(() => {
        socket.on("recieve_message", (data) => {
            //alert(data.message);
            setMessageReceived(data.message);
        })
     }, [socket])

  return (
    <div className="App">
        <input placeholder="Room number..." onChange = {(event) => {
             setRoom(event.target.value);
        }}/>
        <button onClick={joinRoom}>Join Room</button>
        <input placeholder="Message" onChange = {(event) => {
             setMessage(event.target.value);
        }}/>
        <button onClick={sendMessage}>Send Message</button>
        <h1>Received Message:</h1>
        {messageReceived}
    </div>
  );
}

export default App;
