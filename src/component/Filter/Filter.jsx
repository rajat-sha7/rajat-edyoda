import React from 'react'
import '../Filter/Fiter.css'



const Filter = () => {

  return (
    <div className='catcontainer'>
   
    <div class="heading3"><h3>Trending Posts</h3></div>

    <div>
      
    <p class="filterText">  Filter by Category</p>

 </div>
    <div>
    <div class="option">
      <div class="categories activec">All</div>
      <div class="categories">Arttificial intelligence</div>
      <div class="categories">Cloud Computing</div>
      <div class="categories">DevOps</div>
      <div  class="categories">Programing Languages</div>
      <div  class="categories">Mobile Application Development</div>
      <div  class="categories">Technology And Tools</div>
      <div  class="categories">Get a Job in a Tech Company</div>
      <div  class="categories">Others</div>
    </div>



    </div>



   </div>

   
  )
}

export default Filter
