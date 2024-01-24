import logo from "../../assets/logo/dtalk-high-resolution-logo-white-transparent.png";

export default function Hero() {
  return (
    <>
      <div className="bg-[#295de7] pb-8 md:pb-0 lg:pb-0">
        <div className="p-7 py-9 h-screen md:flex lg:flex relative">
          <div className="flex flex-col gap-6 md:max-w-full md:items-center lg:w-full lg:items-center">
            <h1 className="text-white text-5xl font-bold">
              Your Place to Talk
            </h1>
            <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
              Wheater you're part of a school club, gaming group, worldwide art
              community, or just a handful of friend that want to spend time
              together, d'talk make it easy to talk every day and hangout more
              often.
            </h2>
            <div className="flex flex-col md:flex-row lg:flex-row gap-6 items-start">
              <button className="bg-white w-[17rem] font-medium p-4 rounded-full text-lg hover:shadow-2xl hover:bg-slate-50 transition duration-200 ease-in-out md:w-72">
                <i
                  className="fa-solid fa-download mr-2"
                  style={{ color: "#000000" }}></i>
                Download for Mac
              </button>
              <button className="bg-slate-950 text-white font-medium p-4 rounded-full text-lg hover:shadow-2xl hover:bg-slate-900 transition duration-200 ease-in-out w-[17rem]">
                Open d'talk in your browser
              </button>
            </div>
            <div className="mt-16 flex items-center justify-center md:w-[50rem] md:justify-center">
              <img src={logo} alt="d'talk" className="w-[18rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
