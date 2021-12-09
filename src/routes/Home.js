import React from "react";
import React, { useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onsubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
  };
  return (
    <div>
      <form onsubmit={onsubmit}>
        <input
          value={nwett}
          onChange={onchage}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
