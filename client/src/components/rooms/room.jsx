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
    <div class="container h-full p-10">
      {!showChat ? (
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <h1 className="text-black">Join A Chat</h1>
          <input
            className="ml-2 text-black"
            type="text"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="ml-2 text-black"
            placeholder="Room Number"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button className="bg-blue-300 p-2 rounded ml-4" onClick={joinRoom}>
            Join
          </button>
        </div>
      ) : (
        <Message socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
