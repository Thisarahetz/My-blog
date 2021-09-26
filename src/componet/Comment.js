import React from "react";

const Comment = ({comments}) => {
    return (
         <>
         <h3 className="sm:test-2xl text-xl font-bold mt-6 mb-6">Comment</h3>
         {comments.map((comment,index)=>(
             <div key={index}>
                 <h4 className="">{comment.username}</h4>
                 <p className="">{comment.text}</p>
             </div>
         ))}
         </>
    
     );
}
 
export default Comment;