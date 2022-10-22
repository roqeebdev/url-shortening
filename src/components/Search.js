import { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Search = () => {
  const [userInput, setuserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [responses, setResponses] = useState("");
  const [active, setActive] = useState(false);

  function handleUserInput(e) {
    setuserInput(e.target.value);
  }

  const handleClick = () => { 
    setActive(!active);
  };
  const fetchData = async () => {
    console.log({ userInput });
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setResponses(response.data);

      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className=" bg-origin-padding relative container mx-auto p-5 flex bg-searchBack  bg-cover rounded-lg bg-darkViolet">
        <div className="input flex flex-col w-full p-2 rounded-xl gap-2 md:flex-row md:space-x-7 md:justify-between md:p-10">
          <div className="flex flex-col md:w-9/12">
            <input
              className="rounded-md w-full py-2.5 bg-white px-3 focus:outline focus:outline-4 focus:outline-cyan focus:-outline-offset-4 md:h-16 md:mb-0 md:text-xl md:px-7"
              type="search"
              name="input url"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Shorten a link here..."
            ></input>
          </div>
          <button
            className="bg-cyan text-white py-2.5 px-2 rounded-md md:w-3/12 md:h-16 md:text-xl"
            onClick={() => {
              fetchData();
            }}
          >
            Shorten It!
          </button>
        </div>
      </div>
      {responses.ok === true && (
        <div className="grid grid-col-3 gap-2 relative container mx-auto m-3 items-center rounded-lg bg-white md:grid-cols-3">
          <div className="font-medium text-lg ">
            {responses.result.original_link}
          </div>

          <div className="">
            <div className="font-medium text-lg">
              {responses.result.full_short_link}
            </div>
          </div>
          <CopyToClipboard text={shortenedLink}>
            <button
              className="bg-cyan text-white py-2 px-3 mx-8 m-2 rounded-lg md: justify-end"
              onClick={handleClick}
            >
              {active ? "Copied" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

export default Search;
