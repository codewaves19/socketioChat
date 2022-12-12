# socketioChat
# Express

# Step1: Create Client and Server folders.
# Step 2: SocketioChat\server> npm init 
# Step 3: SocketioChat\client> npx create-react-app ./
# Step 3: SocketioChat\server> index.js
# Step 4: on terminal "node index.js" will give "server is running" then ctrl c to exit
# Step 5: Inorder to let server run continously.. edit package.json and add scripts;
# Step 6: On terminal npm start to run server
# Step 7: install socket io client version from terminal
npm add socket.io-client
# Step 8: Frontend or client react app, 
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");


    