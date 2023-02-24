import React from "react";

export default function Answers(props) {
    return (
        <div>
            <p>{props.question}</p>
            <p>{props.answer}</p>
        </div>
    )
}