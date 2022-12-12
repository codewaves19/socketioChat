import "./App.css";
import io from "socket.io-client";
// eslint-disable-next-line
const socket = io.connect("http://localhost:3001");

function App() {
    const sendMessage = () => {
        //console.log("Message is Sent");
        // install socket io client version from terminal "npm add socket.io-client"
        //socket.emit(); // send to backend and then it will send message to frontend.

    };
  return (
    <div className="App">
        <input placeholder="Message" />
        <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
