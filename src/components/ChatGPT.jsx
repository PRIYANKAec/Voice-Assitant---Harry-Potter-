import React, { useState } from "react";
import axios from "axios";

const API_KEY = GPT_KEY;
const SEARCH_ENGINE_ID =SEO_ID;

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  // const HTTP = "http://localhost:3000/chat";
   const HTTP = API_LINK

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`${HTTP}&q=${prompt}`)
      .then((res) => {
        // Extract the relevant information from the response
        const firstResult = res.data.items[0].snippet;
        setResponse(firstResult);
      })
      .catch((error) => {
        console.log(error);
      });

    // setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      {" "}
      {/* <h1 className="title text-center text-darkGreen">ChatGPT API</h1> */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
         {/* <a href="">Link</a>  */}
          <label htmlFor="">Ask questions</label>
          <input
            className="promptBox"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>{" "}
         <button className="btn btn-accept w-100" type="submit">
          Go
        </button>
      </form>
      <div className="answerBox  
      mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Ask me anything..."}
        </p>
      </div>
    </div>
  );
}
