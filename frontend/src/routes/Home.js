import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import RuleEntry from "../components/RuleEntry";

export default function Home() {
    const [rules, setRules] = useState({}); // State is immutable! "setRule" function overrides old data and passes it down!

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:1337/", {
                method: "GET",
                headers: new Headers({
                    "Accept": "application/json"
                })
            });
    
            if (response.ok) {
                const data = await response.json();
                setRules(data);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="h-screen">
            <div className="container mx-auto py-10 h-full text-white">
                <h1 className="text-5xl text-center underline text-white">Rules</h1>
                <Button title="Test"></Button>
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="col-span-1">
                        {rules.killer !== undefined && rules.killer.map((rule) => {
                            return(
                                <div style={{ color: "black", backgroundColor: "white" }}>
                                    <RuleEntry title={rule.title} content={rule.content} killer={rule.killer}></RuleEntry>
                                </div>
                            )
                        })}
                    </div>
                    <div class="col-span-1">
                        {rules.survivor !== undefined && rules.survivor.map((rule) => {
                            return(
                                <div style={{ color: "black", backgroundColor: "white" }}>
                                    <RuleEntry title={rule.title} content={rule.content} killer={rule.killer}></RuleEntry>
                                </div>
                            )
                        })}
                    </div>
                </div>
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