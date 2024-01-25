import profile from "../../assets/logo/dtalk-high-resolution-logo-white-transparent.png";
import { socket } from "../../helpers/socket";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);
  // const [user, setUser] = useState([]);

  // const fetchUser = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:3000/users");

  //     console.log(data, ">>>>>>>>>>");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/messages");

      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    socket.on("chat-message", (id) => {
      setId(id);
    });

    socket.on("receive-messsage", (payload) => {
      setChat((previousChats) => [...previousChats, payload]);
    });
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message-send", message);
    setMessage("");
  };

  console.log(chat, ">>>");

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
          <div>
            <img
              src={profile}
              alt="Profile"
              className="h-12 rounded-full w-[3rem] cursor-pointer transition-all duration-100 ease-out hover:scale-75"
            />
          </div>
          <hr className="w-8 border-2 border-slate-500 mx-auto rounded" />
          <img
            src={profile}
            alt="Profile"
            className="h-12 rounded-full w-[3rem] cursor-pointer transition-all duration-100 ease-out hover:scale-75"
          />
          <div className="rounded-full h-12 bg-[#000] hover:bg-green-900 transition duration-300 ease-in-out">
            <i
              className="fa-solid fa-plus fa-2xl flex justify-center mt-6"
              style={{ color: "#fff" }}></i>
          </div>
        </div>
        <div className="bg-[#7d85a0]">
          <h2 className="flex font-bold text-sm items-center justify-between text-white border-b border-slate-800 p-4 hover:bg-[#34373c] cursor-pointer">
            Official d'talk...
            <i
              className="fa-solid fa-chevron-down h-2 ml-12"
              style={{ color: "#ffffff" }}></i>
          </h2>
          {/* <div className="text-[#839297] flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
              <i
                className="fa-solid fa-chevron-down mr-2 cursor-pointer"
                style={{ color: "#8e9297" }}
              ></i>
              <h4 className="text-[#8e9297] font-semibold">Channels</h4>
              <i
                className="fa-solid fa-plus ml-auto cursor-pointer"
                style={{ color: "#8e9297" }}
              ></i>
            </div>
            <div className="flex flex-col space-y-2 px-2 mb-4">
              <h3 className="mb-2">channel</h3>
              <h3 className="mb-2">channel</h3>
              <h3 className="mb-2">channel</h3>
              <h3 className="mb-2">channel</h3>
            </div>
          </div>
          <div className="flex bg-[#292b2f] space-x-8 p-2 justify-between items-center">
            <div className="space-x-1 flex mb-2 mt-2">
              <img
                src={profile}
                alt="d'talk"
                className="h-10 rounded-full w-[3rem]"
              />
              <h4 className="text-white text-xs font-medium mt-2">
                <span className="text-[#b9bbbe] block">name id</span>
              </h4>
            </div>

            <div className="flex items-center space-x-3 ml-2">
              <div className="hover:bg-white rounded">
                <i
                  class="fa-solid fa-microphone"
                  style={{ color: "#b9bbbe" }}
                ></i>
              </div>
              <div className="hover:bg-white rounded">
                <i class="fa-solid fa-phone" style={{ color: "#b9bbbe" }}></i>
              </div>
              <div className="hover:bg-white rounded">
                <i class="fa-solid fa-gear" style={{ color: "#b9bbbe" }}></i>
              </div>
            </div>
          </div> */}
          <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Yoga</div>
              <span className="text-gray-500">Pick me at 9:00 Am</span>
            </div>
          </div>

          <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Stack.Com</div>
              <span className="text-gray-500">Lusi : Thanks Everyone</span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Arma Yoga</div>
              <span className="text-gray-500">
                Evan : some one can fix this
              </span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Javascript Indonesia</div>
              <span className="text-gray-500">
                Evan : some one can fix this
              </span>
            </div>
          </div>
        </div>
        <div className="w-full px-5 flex flex-col justify-between bg-gray-700">
          <div className="flex flex-col mt-5">
            <div className="text-white">
              Global Chat : {id} : {chat}
            </div>
            <div className="flex justify-end mb-4">
              {chats.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    <p className="text-white">{el.text}</p>
                  </div>
                );
              })}

              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>
          </div>
          <form onSubmit={sendMessage} className="py-5">
            <div>
              <input
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-4/5 bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
              <button
                type="submit"
                className="p-2 ml-10 rounded-full text-xs md:text-sm px-4 
            focus:outline-none bg-white text-black hover:bg-blue-100 
            hover:rounded-full hover:underline transition duration-200 
            ease-in-out font-medium hover:shadow-md">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
