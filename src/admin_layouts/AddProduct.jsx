import React, { useState } from "react";

export default function AddProduct() {

    const API_URL = '';

    const [product_name, getProductName] = useState(null);
    const [product_description, getProductDescription] = useState(null);
    const [product_price, getProductPrice] = useState(null);
    const submit = document.getElementById('submit-btn');
    async function sendData(action, sheetName, dataObject){
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: action,
                    sheet: sheetName,
                    data: dataObject
                }),
            });

            const result = await response.json();
            if (result.status === 'success') {
                console.log(`${action} successfull`, result.message);

                return true;
            } else {
                throw new Error(result.message);
            }
        }
        catch (e) {
            console.error(`Error with ${action}:`, e);
            return false;
        }
    }

    async function createNewProduct(){
        getProductName(document.getElementById('product-name'));
        getProductDescription(document.getElementById('product-description'));
        getProductPrice(document.getElementById('product-price'));
        const product = {
            Name:product_name,
            Description : product_description,
            Price:product_price
        }

        await sendData('create', 'Products', product )

    }

    function checkSubmit() {
        getProductName(document.getElementById('product-name'));
        getProductDescription(document.getElementById('product-description'));
        getProductPrice(document.getElementById('product-price'));

        createNewProduct();
    }

    return (
        <>
            <section className="">

                <div className="flex flex-col items-center gap-7 py-5">
                    <input type="text" name="product-name" id="product-name" placeholder="Enter product name" className="px-7 py-3 rounded-xl bg-stone-100" />
                    <input type="text" name="product-description" id="product-description" placeholder="Enter product description" className="px-7 py-3 rounded-xl bg-stone-100" />
                    <input type="number" name="product-price" id="product-price" placeholder="Enter product price" className="px-7 py-3 rounded-xl bg-stone-100" />

                    <button onClick={checkSubmit} className="bg-green-600 py-2 px-7 rounded-2xl text-white text-xl">Add</button>
                </div>

            </section>
        </>
    )
}