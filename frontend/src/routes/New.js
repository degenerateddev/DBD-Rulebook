import React from "react";

export default function New() {
    return (
        <div class="h-screen">
            <div class="container mx-auto py-10 h-full">
                <h1 class="text-5xl text-center underline">Add a new rule</h1>
                <div class="grid gap-20 grid-cols-1 md:grid-cols-2 mt-10 h-full">
                    <div id="survivor" class="col-span-1 rounded-lg bg-gray-800 hover:bg-gray-600 hover:scale-105 duration-150 p-5">
                        <h2 class="text-4xl">Survivor Rule</h2>
                    </div>
                    <div id="killer" class="h-full col-span-1 rounded-lg bg-gray-800 hover:bg-gray-600 hover:scale-105 duration-150 p-5">
                        <h2 class="text-4xl">Killer Rule</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}