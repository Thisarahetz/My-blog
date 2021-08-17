import React from "react";
import articleContent from './Articale-content.js'
import Articles from "../componet/Articles"

const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find((article)=>article.name === name);
    if(!article) return <h1>Page not found</h1>;
    const otherArticle = articleContent.filter((article=>article.name !== name));
    
    return ( 
        <>
            <h1 className="sm:text-4xl text-2xl font-blod mt-6 mb-6 text-gray-900">
                {article.title}
            </h1>
            {
                 article.content.map((paragraph,index)=>(
                     <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                     {paragraph} 
                     </p>                          
                 ))}
            <h1 className="sm:text-2x text-xl font-blod mt-4 mb-4 text-gray-900">
                <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticle}></Articles>
                </div>
                
            </h1>
        </>
     );
}
 
export default Article;