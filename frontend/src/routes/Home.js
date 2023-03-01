import React, { useEffect, useState } from "react";

export default function Home() {
    const [rules, setRules] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:1337/");

        setRules([await response.json()]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="h-screen">
            <div className="container mx-auto py-10 h-full text-white">
                <h1 className="text-5xl text-center underline text-white">Rules</h1>
                {rules.map((data) => {
                    return(
                        <div style={{ color: "blueviolet", backgroundColor: "black" }}>{rules.title}</div>
                    )
                })}
            </div>
        </div>
    );
}

//{Object.keys(rules["killer"]).map(function(key) { return <div>Key: {key}, Value: {rules["killer"][key]}</div>; })}

/*
{rules.length > 0 && rules.survivor &&
    rules["survivor"].forEach(function(item, index) {
        return <div>{JSON.stringify(item)}</div>
    })
}
*/