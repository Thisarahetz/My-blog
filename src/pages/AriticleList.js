import React from "react";

import Articles from "./Articale-content"
import ArticlesComponent from "../componet/Articles"

const AriticleList = () => {
    return ( 
        <>
        <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
          Articles
        </h1>
        <div className='container py-4 mx-auto'>
          <div className='flex flex-wrap -m-4'>

        <ArticlesComponent articles={Articles}></ArticlesComponent>

          </div>
          </div>
        
      </>
     );
}
 
export default AriticleList;