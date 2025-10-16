import React from "react";

export default function AddProduct(){

    return(
        <>
            <section className="">

                <form action="" className="flex flex-col items-center gap-7 py-5">
                    <input type="text" name="product-name" id="product-name" placeholder="Enter product name" className="px-7 py-3 rounded-xl bg-stone-100" />
                    <input type="text" name="product-description" id="product-description" placeholder="Enter product description" className="px-7 py-3 rounded-xl bg-stone-100" />
                    <input type="number" name="product-price" id="product-price" placeholder="Enter product price" className="px-7 py-3 rounded-xl bg-stone-100" />

                    <button type="submit" className="bg-green-600 py-2 px-7 rounded-2xl text-white text-xl">Add</button>
                </form>

            </section>
        </>
    )
}