import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList(){


    // Replace this with your actual Web App URL
const API_URL = ''; 
const SHEET_NAME = 'Products'; // Or 'Orders', etc.

const [data, setData] = useState('');

async function readData() {
    try {
        const url = `${API_URL}?action=read&sheet=${SHEET_NAME}`; // <-- Ensure this is correct
        
        const response = await fetch(url, {
            method: 'GET',
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
            setData(result.data)
            return result.data;
        } else {
            // This is where your current error message is coming from:
            console.error('API Error:', result.message);
            throw new Error(result.message);
        }
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}
    return(
        <>
            <section className="grid grid-cols-6 gap-5 py-5 "> 
                <div className="bg-green-700 text-white flex flex-col gap-5 text-xl">
                    <Link to={'/electronic'} className="text-center py-3 border-b border-white">Electronic</Link>
                    <Link to={'/food'} className="text-center py-3 border-b border-white">Food</Link>
                    <Link to={'/software'} className="text-center py-3 border-b border-white">Softwares</Link>
                </div>
                <div className="col-span-5 bg-stone-100">

                </div>
            </section>
        </>
    )
}