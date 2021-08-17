import React from 'react';
import { Link } from "react-router-dom";

const Article = ({articles}) => {
    return ( 
        <>
            
             {
                 articles.map((article, index) => (
                     <div key={index} className="p-4 md:w-1/2">
                         <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                             <Link to={`/article/${article.name}`}>
                                 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt='blog'/>
                             </Link>
                             <div className="p-6">
                                 <Link key={index} to={`/article/${article.name}`}>
                                     <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                                         {article.title}
                                     </h3>
                                 </Link>
                                 <p className="leading-relaxed md-3">{article.content[0].substring(0,115)}...</p>
                             </div>
                         </div>
                    </div>
                 ))}
        
        </>
     );
}
 
export default Article;