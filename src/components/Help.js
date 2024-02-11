import React, { useState } from "react";
import useHelp from "../hooks/useHelp";
import useSupport from "../hooks/useSupport";
import HelpQuestions from "./HelpQuestions";

const Help = () => {
  const [query, setQuery] = useState("");
  const [Active, setActive] = useState(0);

  const help = useHelp();
  const support = useSupport(query);

  const handleIssue = (type, i) => {
    setQuery(type);
    setActive(i);
  };

  return (
    <div className="w-full px-28 py-8 relative top-20 mb-20 bg-[#37718e]">
      <h2 className="text-white font-bold text-3xl mb-2">Help & Support</h2>
      <p className="text-white text-sm">
        Let's take a step ahead and help you better.
      </p>
      <div className="w-full bg-white mt-8 flex p-5">
        <div className="w-2/12 bg-[#edf1f7] py-4">
          {help?.issueTypes?.data.map((x, i) => (
            <div
              className={`ml-5 py-6 px-5 font-bold text-[#535665] cursor-pointer ${
                Active === i ? "bg-white" : "hover:text-black"
              }`}
              onClick={() => handleIssue(x.type, i)}
            >
              {x.title}
            </div>
          ))}
        </div>
        <div className="w-10/12 min-h-[80vh] pt-9 pl-12 bg-white">
          {support?.issues?.data?.map((x, i) => (
            <HelpQuestions data={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
