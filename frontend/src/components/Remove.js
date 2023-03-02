import { useState } from "react";
import Button from "./Button";

export default function Remove({ id }) {
    async function deleteRule(id) {
        const response = await fetch("http://localhost:1337/remove", {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                id
            })
        })
    }

    return (
        <div>
            <Button title="Remove Rule" click={() => deleteRule(id)}></Button>
        </div>
    )
}