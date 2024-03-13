import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add,remove } from '../redux/slices/CartSlice';

const selected=true;
const Product = ({post}) => {
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart =()=>{
    dispatch(add(post));
    toast.success("item added to cart");
  }

  const removeFromCart =()=>{
    dispatch(remove(post.id));
    toast.error("item removed from cart");


  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-xl hover:shadow-2xl rounded-md gap-5 p-4 pb-0 mt-10 ml-5 border border-slate-300'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div>
        <img src={post.image} width="100" height="100"/>
      </div>
      <div className='flex justify-between gap-12 items-center'>
        <p className='text-green-600 font-semibold'>${post.price}</p>
      
      {
        cart.some((p)=> p.id==post.id) ? (<button onClick={removeFromCart} className='border text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] uppercase p-2 hover:text-white transition duration-200 hover:bg-gray-700'>
          Remove Item
        </button>):(
          <button onClick={addToCart} className='border text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] uppercase p-2 hover:bg-gray-700 hover:text-white transition duration-200'>
            Add to Cart
          </button>
        )
      }
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default Product
