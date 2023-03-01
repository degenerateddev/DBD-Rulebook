import React from "react";
import Anchor from "./Anchor";
import Icon from "./Icon";
import Lightswitch from "./Lightswitch";

let show = false;

function Menu() {
    if (show === true) {
        document.getElementById("navbar-default").classList.add("hidden");
        show = false;
    } else {
        document.getElementById("navbar-default").classList.remove("hidden");
        show = true;
    }
}

export default function Navbar() {
    return (
        <nav class="sticky top-0 bg-stone-900 z-50">
            <div class="flex flex-wrap justify-between items-center mx-auto border-b-gray-200 border-b-2 py-5">
                <Icon></Icon>

                <button onClick={Menu} data-collapse-toggle="navbar-default" type="button" class="md:hidden inline-flex items-center p-2 ml-3 mr-2 my-2 text-sm text-gray-500 rounded-lg focus:outline-none hover:bg-zinc-200" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                
                <div class="w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col items-center p-4 mt-4 border-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-center">
                        <li><Anchor to="/killer" title="Killer"></Anchor></li>
                        <li><Anchor to="/survivor" title="Survivor"></Anchor></li>
                        <li><Anchor to="/new" title="New"></Anchor></li>
                        <li><Lightswitch /></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}