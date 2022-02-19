import React,{useState,useEffect} from 'react';
import './middle.css';
function Middle(){
  const [items,setItems]=useState()
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
    .then(response=>response.json())
    .then(data=>setItems(data))
    .catch(err=>console.log(err))
  },[])
 console.log(items);
return(
    <div className="body">
      <div className="first">
    <h5>Section</h5>
    <h6>Lorem ipsum is the simply dummy text of printing and typesetting industry 
      <br></br>
     <button>Tutorial</button>
    </h6>
      
      </div>
      <div className="second">
      <h4>Your rewards</h4>
        <h2>$0.26231428</h2>
         <button id="bttn">Custom link</button>
       <button>$40 AVAX</button>
         <button>$10 BNB</button>
         <button>$210 BTC</button>
      </div>
      <div className="dot">
<div className="third">
<h3>12.5% of free</h3>
  <h5>your referal link for XYZ</h5>
  <h5>http://unityexchange.design</h5>
  </div>
<div className="forth">

<h3>12.5% of free</h3>
  <h5>your referal link for XYZ</h5>
  <h5>http://unityexchange.design</h5>

</div>
        </div>
      <div className="five">
      <a href="">First tab</a>
         <a href="">Second tab</a>
        <div className="head" >
          
          <table>
  <tr>
    <th>Asset</th>
    <th>Amount</th>
    <th>User Account</th>
    <th>Referral Earning</th>
  </tr>
  
</table>
           
 <div class="bl"></div>
</div>
 </div>
</div>
  )
}
export default Middle;