import { useEffect, useState } from "react";
import Heading from "./Heading";
import { Button } from "@nextui-org/react";

const Header = () => {
  const [message, setMessage] = useState("Hello World");

  // componentDidMount
  // useEffect(() => {
  //   alertUser();

  //   return () => {
  //     // componentWillUnmount
  //     alert("WILL UNMOUNT");
  //   };
  // }, []); // ARRAY HARUS KOSONG

  // // componentDidUpdate and componentDidMount
  // useEffect(() => {
  //   alert("DID UPDATE");
  // }, [message]); // array/list of dependencies

  const alertUser = () => {
    alert("DID MOUNT");
  };

  const changeMessage = () => {
    setMessage("State Changed");
  };

  return (
    <header
      style={{
        backgroundColor: "darkgray",
        padding: "8px",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <Heading />
      {/* <p>{message}</p>
      <Button onClick={changeMessage}>Change Message</Button> */}
    </header>
  );
};

export default Header;
