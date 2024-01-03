import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Card from "./cards/Card";

interface CartItemsProps {
  // Define any props if needed
}

const CartItems: React.FC<CartItemsProps> = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 shadow-lg px-4 my-2 rounded-lg border-blue-500">
      <div className="-mt-20 ml-28">
      <Card/>
      </div>

      
    </div>
  );
};

export default CartItems;
