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
        <div className="bg-[#2f3136]">
          <h2 className="flex font-bold text-sm items-center justify-between text-white border-b border-slate-800 p-4 hover:bg-[#34373c] cursor-pointer">
            Official d'talk...
            <i
              className="fa-solid fa-chevron-down h-2 ml-12"
              style={{ color: "#ffffff" }}></i>
          </h2>
          <div className="text-[#839297] flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
              <i
                className="fa-solid fa-chevron-down mr-2 cursor-pointer"
                style={{ color: "#8e9297" }}></i>
              <h4 className="text-[#8e9297] font-semibold">Channels</h4>
              <i
                className="fa-solid fa-plus ml-auto cursor-pointer"
                style={{ color: "#8e9297" }}></i>
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
                  style={{ color: "#b9bbbe" }}></i>
              </div>
              <div className="hover:bg-white rounded">
                <i class="fa-solid fa-phone" style={{ color: "#b9bbbe" }}></i>
              </div>
              <div className="hover:bg-white rounded">
                <i class="fa-solid fa-gear" style={{ color: "#b9bbbe" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
