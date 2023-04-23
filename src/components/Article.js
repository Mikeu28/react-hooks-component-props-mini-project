import React from "react";

function Article (props) {
    let coffeeTime = null

    if (props.time < 30) {
        const emojiTime = Math.ceil(props.time / 5)
        coffeeTime = "☕".repeat(emojiTime)
    }

    if (props.time >= 30) {
        const emojiTime = Math.ceil(props.time / 10)
        coffeeTime = "🍱".repeat(emojiTime)
    }
    
    return (
        <article>
            <h3>
                {props.title}
            </h3>
            <small>
                {props.date}
            </small>
            <p>
                {props.preview}
            </p>
            <p>
                {coffeeTime + props.time + "mins read"} 
            </p>
        </article>
    )
};

export default Article;