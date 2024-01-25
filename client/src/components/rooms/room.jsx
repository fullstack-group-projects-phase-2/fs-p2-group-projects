import { useState } from "react";
import { socket } from "../../helpers/socket";
import Message from "../messages/message";

export default function Room() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join-room", room);
      setShowChat(true);
    }
  };

  return (
    <div>
      {!showChat ? (
        <div>
          <h1>Join A Chat</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room Number"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button className="bg-blue-300 p-2 rounded" onClick={joinRoom}>
            Join
          </button>
        </div>
      ) : (
        <Message socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
