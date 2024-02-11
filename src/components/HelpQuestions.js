import { useState } from "react";

const HelpQuestions = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full border-b border-[#d4d5d9]">
      <div
        onClick={() => setShow(!show)}
        className="w-full text-[#3d4152] flex gap-2 justify-between items-center text-left py-6 hover:text-orange-600"
      >
        <span className="text-lg">{data.title}</span>
        <span>🔽</span>
      </div>
      {show && (
        <div>
          <h5 className="text-[#fc8019] mr-5 cursor-pointer pb-5 inline-block font-semibold">
            {data?.hyperLinkText}
          </h5>
          {data?.options.length > 0 ? (
            <div className="pb-7">
              <button className="text-[#fc8019] h-10 border border-[#fc8019] px-4 font-bold text-sm">
                SEND AN EMAIL
              </button>
              <p className="mt-1 text-[#93959f] text-xs">
                {data?.options[0]?.waitTime}
              </p>
            </div>
          ) : (
            <div className="text-[#686b78] text-sm pr-12 pb-7 whitespace-pre-wrap">
              {data?.description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HelpQuestions;
