import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      setLatestMessage(message.data);
      console.log("Recieved: ", message.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return <div>Connecting to Socket Server...</div>;
  }
  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => {
          socket.send(message);
          setMessage("");
        }}
      >
        Send
      </button>
      {latestMessage}
    </>
  );
}

export default App;
