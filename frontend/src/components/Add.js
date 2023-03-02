import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";
import { useState } from "react";

import Input from "./Input";
import Button from "./Button";

const addNew = async (rule) => {
    const response = await fetch("", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            title: rule.title,
            content: rule.content
        })
    })
}

export default function Add({ killer }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title || !title.length > 0) {
            alert("Please add a title")
            return;
        }

        if (!content || !content.length > 0) {
            alert("Please add content")
            return;
        }

        addNew({ title, content });

        setTitle("");
        setContent("");
    }

    return (
        <form className="container" method="POST" onSubmit={onSubmit}>
            <Input value={title} change={(e) => setTitle(e.target.value)} placeholder="Title" icon={<FaBeer></FaBeer>} type="text"></Input>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Rule Content"></textarea>

            <Button title="Submit Rule" type="submit"></Button>
        </form>
    )
}

Add.defaultProps = {
    killer: false
}

Add.propTypes = {
    killer: PropTypes.bool
}