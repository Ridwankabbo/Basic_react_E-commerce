import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
            <section className="flex justify-around items-center py-5  bg-orange-600 text-white font-bold">
                <div>
                    <h2 className="text-[50px]">E-commerce</h2>
                </div>
                <div className="flex gap-10">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                </div>
            </section>
        </>
    )
}