import React from "react";
import Article from "./Article";

function ArticleList (props) {
    
    
    return (
        <main>
            {props.post.map(article => (<Article 
                key = {article.id}
                title = {article.title}
                date = {article.date}
                preview = {article.preview}
                time = {article.minutes}
            />))}
        </main>
    )
}

export default ArticleList;