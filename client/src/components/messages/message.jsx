import { socket } from "../../helpers/socket";
import { useState, useEffect } from "react";

export default function Message({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatList, setChatList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send-chat", messageData);

      setChatList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive-chat", (data) => {
      setChatList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="border border-blue-800 outline outline-2 outline-blue-900">
      <div>
        <p>Live Chat</p>
      </div>
      <div className="h-72 border border-slate-700">
        {chatList.map((el, i) => {
          return (
            <div key={i} className={username === el.author ? "you" : "other"}>
              <div className="message-content">
                <h1>{el.message}</h1>
              </div>
              <div className="message-meta">
                <p>{el.author}</p>
                <p>{el.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border border-cyan-600">
        <input
          type="text"
          placeholder="Hello..."
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button className="bg-blue-300 p-2 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
