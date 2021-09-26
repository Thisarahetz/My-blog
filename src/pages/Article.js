import React,{useState,useEffect} from "react";
import articleContent from './Articale-content.js'
import Articles from "../componet/Articles"
import Comment from "../componet/Comment"
import AddCommetForm from "../componet/AddcommentForm"

const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find((article)=>article.name === name);
    
    const otherArticle = articleContent.filter((article=>article.name !== name));

    const [articleInfo,setArticleInfo] = useState({Comments:[]});

    useEffect(()=>{
        const fetchData = async() => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        };
        fetchData();
    },[name]);
    //if(!article) return <h1>Page not found</h1>;
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

            <Comment comments={articleInfo.Comments}/>
            <AddCommetForm articleName={name} setAritcleInfo={setArticleInfo} />
            <h1 className="sm:text-2x text-xl font-blod mt-4 mb-4 text-gray-900">
                <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticle}></Articles>
                </div>
                
            </h1>
        </>
     );
}
 
export default Article;