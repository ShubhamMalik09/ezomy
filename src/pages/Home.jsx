import React, { useEffect } from 'react'
import { useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const API_URL= "https://fakestoreapi.com/products";

const Home = () => {
    const [posts,setPosts]= useState([]);
    const [loading,setLoading] = useState(false);
    async function fetchProductionData(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        }
        catch(e){
            console.log("");
            setPosts([]);
        }
        setLoading(false);

}

useEffect(()=>{
    fetchProductionData();
},[]);
  return (
    <div className=''>
        {
            loading ? (<Spinner/>) :
            (posts.length>0)?(
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 '>{
                posts.map((post)=>(
                    <Product key={post.id} post={post}/>
                ))}
            </div>):(
                <div className='flex justify-center items-center'>
                    <p>No data found</p>
                </div>
            )

        }
        <br/>
    </div>
  )
}

export default Home
