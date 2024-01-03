import CartItems from '@/components/CartItems';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface CartProps {
  // Define any props if needed
}

const Cart: React.FC<CartProps> = () => {
  return (
    <div className='w-full'>
      <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto`}>
        <div className='text-center py-4 max-w-[800px] mx-auto mt-10 md:mt-0 '>
          <div className='text-5xl p-4 text-center font-bold from-slate-600 via-white to-slate-600 bg-gradient-to-r bg-clip-text text-transparent'>
            Your Cart
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-12 py-10 '>
          <div className='flex-[1] items-center '>
            <div className='text-2xl py-4 text-center font-bold from-slate-600 via-white to-slate-600 bg-gradient-to-r bg-clip-text text-transparent '>
              Cart Items
            </div>
            <CartItems />
          </div>

          <div className='flex-[1] '>
            <div className='text-2xl p-4 text-center font-bold from-slate-600 via-white to-slate-600 bg-gradient-to-r bg-clip-text text-transparent'>
              Summary
            </div>
            <div className=' p-5 my-5 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl shadow-lg  transition-all duration-700 hover:scale-110  '>
              <div className='flex justify-between '>
                <div className='uppercase text-base md:text-lg font-medium text-black '>Subtotal</div>
                <div className='text-base md:text-lg font-medium text-black '>&#8377; 12 328.34</div>
              </div>
              <div className='text-sm md:text-base py-5 border-t-2 mt-5'>
                This is the subtotal price of your order, including the duties and
                taxes.
                
              </div>
            </div>
            <button className='w-full py-4 rounded-full bg-red-500 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-95'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
