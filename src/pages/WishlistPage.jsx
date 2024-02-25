import { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WishlistPage = () => {
  const counterSelector = useSelector((store) => store.counter);
  const messageSelector = useSelector((store) => store.message);

  const [wishlistInput, setWishlistInput] = useState("");
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchWishlistItems = async () => {
    try {
      const response = await axiosInstance.get("/wishlist-items");

      setWishlistItems(response.data);
    } catch (error) {
      // console.log(error);
      toast.error("Server error, please wait for a moment");
    }
  };

  const addWishlist = async () => {
    try {
      await axiosInstance.post("/wishlist-items", {
        name: wishlistInput,
      });

      fetchWishlistItems();
      setWishlistInput("");

      toast.success("You have added an item");
    } catch (error) {
      // console.log(error);
      toast.error("Server error, please wait for a moment");
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input
          value={wishlistInput}
          onChange={(event) => {
            // if (event.target.value.length < 5) {
            setWishlistInput(event.target.value);
            // }
          }}
          label="Wishlist Item"
          color="secondary"
        />
        <Button onClick={addWishlist} color="primary">
          Add
        </Button>
      </div>

      <ul className="list-decimal list-inside text-center">
        {wishlistItems.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <Link to="/auth/sign-up">Sign up now!</Link>
      <br />
      <Link to="/">Back Home</Link>
      <p className="text-center text-2xl font-semibold">
        Global count: {counterSelector.count}
      </p>
      <p className="text-center text-2xl font-semibold">
        Global message: {messageSelector}
      </p>
    </>
  );
};

export default WishlistPage;
