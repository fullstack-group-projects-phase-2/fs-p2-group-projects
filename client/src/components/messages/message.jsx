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
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 ">
      <div className="container h-full p-10">
        <div>
          <p className="text-white">Live Chat</p>
        </div>
        <div className="h-72 border border-slate-700">
          {chatList.map((el, i) => {
            return (
              <div key={i} className={username === el.author ? "you" : "other"}>
                <div className="message-content">
                  <h1 className="text-white">{el.message}</h1>
                </div>
                <div className="message-meta text-white">
                  <p>{el.author}</p>
                  <p>{el.time}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <input
            type="text"
            placeholder="Hello..."
            className="p-2 w-5/6"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button
            className="bg-blue-300 p-2 ml-2 rounded"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
