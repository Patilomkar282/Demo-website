import React from 'react';
import './left.css';
function Left(){
  return(
    <div className="body">
   <h1>Name</h1>
      
      <div className="label">
      <label><a href="">Home</a></label>
        <i class="fa-duotone fa-house-user"></i>
        
      <label><a href="">Section 1</a></label>
      <label><a href="">Section 2</a></label>
      <label><a href="">Section 3</a></label>
      <label><a href="">Section 4</a></label>
      <label><a href="">Section 5</a></label>
      <label><a href="">Section 6</a></label>
      <label><a href="">Section 7</a></label>
      <label><a href="">Section 8</a></label>
        
      <label><a href="">Documentation</a></label>
        <div class="vl"></div>
        <button>$0.90</button>
        <button className="btn">Buy SXYZ</button>
       
        
        
        </div>
      
    </div>
  )
}

export default Left;