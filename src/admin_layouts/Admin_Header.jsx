import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader(){
    
    return(
        <>
            <section className=" text-white">
                <div className="flex justify-around items-center bg-green-700 p-5">
                    <Link to={'/admin'} className="text-5xl font-bold">E-commerce</Link>
                    <a href="" className="bg-red-700 px-5 py-3 rounded-xl text-xl">logout</a>
                </div>
                <div className="flex flex-row-reverse">
                    <Link to={'add-product'}  className="bg-blue-700 px-5 py-3 rounded-xl" id="submit-btn">Add product</Link>
                    
                </div>
            </section>
        </>
    )
}