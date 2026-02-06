export const VideoCallPage = () => {
  return (
    <>
      {/* Top Header Section */}
      <div
        className="flex flex-wrap  justify-between items-center gap-4 "
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-[#7186FF] to-[#FE7587] pb-4">
          Video Call
        </h2>
      </div>
      {/* Divider */}
      <div className="h-px w-full bg-white  mb-6"></div>
      {/* Video Call Container */}

      <div className="w-full h-full bg-[#0F0E13] border border-white/5 rounded-3xl flex items-center justify-center  shadow-2xl shadow-slate-300/20">
        <div className="flex flex-col items-center gap-12">
          <span className="text-5xl font-semibold text-gray-200">Lesson</span>

          <button className=" font-semibold w-44 h-12 py-3 px-14 border-2 border-[#7286FF] rounded-full flex items-center justify-center gap-2 sm:gap-3 cursor-pointer  hover:bg-[#7286FF]   hover:transition-all">
            Join
          </button>
        </div>
      </div>
    </>
  );
};
