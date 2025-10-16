import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Admin_Header";


export default function AdminLayout(){
    return(
        <>
            <nav>
                <AdminHeader/>
            </nav>
            <main>
                <Outlet/>
            </main>
            
        </>
    )
}