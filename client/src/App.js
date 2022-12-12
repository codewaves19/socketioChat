import "./App.css";
import io from "socket.io-client";
import { useEffect } from 'react';
// eslint-disable-next-line
const socket = io.connect("http://localhost:3001");

function App() {
    const sendMessage = () => {
        //console.log("Message is Sent");
        // install socket io client version from terminal "npm add socket.io-client"
        socket.emit("send_message", {message: "hello"}); // send to backend and then it will send message to frontend.

    };
    // useEffect will work when ever socket io get data message
     useEffect(() => {
        socket.on("recieve_message", (data) => {
            alert(data.message);
        })
     }, [socket])

  return (
    <div className="App">
        <input placeholder="Message" />
        <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
