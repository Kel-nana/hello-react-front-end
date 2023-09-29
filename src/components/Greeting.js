import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from "../redux/reducer/messagesSlice";

const Greeting = () => {
  const { messages } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  console.log(messages);

  return (
    <>
      <h1 className="title">Random Greeting</h1>
      <div className="container">
        <p className="message">
          {messages.language}: {messages.greeting}
        </p>
      </div>
    </>
  );
};

export default Greeting;
