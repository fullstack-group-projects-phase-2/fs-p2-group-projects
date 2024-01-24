import profile from "../../assets/logo/dtalk-high-resolution-logo-white-transparent.png";

export default function Dashboard() {
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
          <hr className="w-8 border-2 border-white mx-auto rounded" />
          <img
            src={profile}
            alt="Profile"
            className="h-12 rounded-full w-[3rem] cursor-pointer transition-all duration-100 ease-out hover:scale-75"
          />
          <div className="rounded-full h-12 bg-[#000] hover:bg-green-900 transition duration-300 ease-in-out">
            <i
              className="fa-solid fa-plus fa-2xl flex justify-center mt-6"
              style={{ color: "#fff" }}
            ></i>
          </div>
        </div>
        <div className="bg-[#07051bd3]">
          <h2 className="flex font-bold text-sm items-center justify-between text-white border-b border-slate-800 p-4 hover:bg-[#34373c] cursor-pointer">
            Official d'talk...
            <i
              className="fa-solid fa-chevron-down h-2 ml-12"
              style={{ color: "#ffffff" }}
            ></i>
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
              <div className="ml-2  text-bs text-white  font-semibold ">
                Yoga
              </div>
              <span className="ml-2 text-white text-xs">
                Pick me at 9:00 Am
              </span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/otT2199XwI8/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>

            <div className="w-full">
              <div className="ml-2  text-bs text-white  font-semibold ">
                Judi Online
              </div>
              <span className="ml-2 text-white">Hi Sam, Welcome</span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2 ">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="ml-2  text-bs text-white  font-semibold ">
                Stack.Com
              </div>
              <span className="ml-2 text-white">Lusi : Thanks Everyone</span>
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
              <div className="ml-2  text-bs text-white  font-semibold ">
                Arma Yoga
              </div>
              <span className="ml-2 text-white">
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
              <div className="ml-2  text-bs text-white  font-semibold ">
                Javascript Indonesia
              </div>
              <span className="ml-2 text-white">
                Evan : some one can fix this
              </span>
            </div>
          </div>
        </div>
        <div className="w-full px-5 flex flex-col justify-between bg-gray-700">
          <div className="flex flex-col mt-5">
            <div className="flex justify-end mb-4">
              <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                Welcome to group everyone !
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>
            <div className="flex justify-start mb-4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
              <div className="ml-2 py-3 px-4 font-serif subpixel-antialiased text-justify bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                at praesentium, aut ullam delectus odio error sit rem.
                Architecto nulla doloribus laborum illo rem enim dolor odio
                saepe, consequatur quas?
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div>
                <div className="mr-2 py-3 px-4 font-mono  bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam, repudiandae ajsdjasbdkasdna.
                </div>

                <div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, reiciendis!
                </div>
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>
            <div className="flex justify-start mb-4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
              <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                happy holiday guys!
              </div>
            </div>
          </div>
          <form className="py-5">
            <div>
              <input
                className="w-5/6 ml-20  bg-gray-300 py-2 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
              <button className="ml-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
