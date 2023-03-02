import React from "react";
import Add from "../components/Add";


export default function New() {
    return (
        <div className="h-screen">
            <div className="container mx-auto py-10 h-full">
                <h1 className="text-5xl text-center underline">Add a new rule</h1>
                <div className="grid gap-20 grid-cols-1 md:grid-cols-2 mt-10 h-full">
                    <div id="survivor" className="col-span-1 rounded-lg bg-gray-800 hover:bg-gray-600 hover:scale-105 duration-150 p-5">
                        <h2 className="text-4xl">Survivor Rule</h2>
                        <Add></Add>
                    </div>
                    <div id="killer" className="h-full col-span-1 rounded-lg bg-gray-800 hover:bg-gray-600 hover:scale-105 duration-150 p-5">
                        <h2 className="text-4xl">Killer Rule</h2>
                        <Add killer={true}></Add>
                    </div>
                </div>
            </div>
        </div>
    );
}