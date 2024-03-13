 import React from 'react'
 import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { remove } from '../redux/slices/CartSlice';
 
 const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("item removed")
  }
   return (
     <div>
      <div>
        <div>
          <img src={item.image}/>
        </div>
        
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div>
              <FcDeleteDatabase onClick={removeFromCart}/>
            </div>
          </div>
        </div>
      </div>
       
     </div>
   )
 }
 
 export default CartItem
 