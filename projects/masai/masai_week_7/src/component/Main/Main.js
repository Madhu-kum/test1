import React from 'react';
// import '../../App.css';  
import './main.css';

export default class Main extends React.Component{
    render() {
  return (
    <div>
        
     <img width="500px" src="https://zerodha.com/static/images/landing.png"></img>
        <h1 style={{fontsize:"100px", fontStyle:"bold"}}> Invest in everything</h1>
        <h3 className="zerodhaHeadThree">Online platform to invest in stocks, derivatives, mutual funds, and more </h3>
        <button style={{background:"blue" , width:"150px" , height:"50px", color:"white", margin:"40px", fontSize:"20px", borderRadius:"15px"}}  >Sign up now</button><br/>

        <img width="500px" height="300px" className="bodyImage" src="https://zerodha.com/static/images/largest-broker.svg"></img>
        

        <table className="headThree">
            <th> <h2 className="parag">Largest stock broker in India</h2></th>
            <tr> <p className="parag">1.5+ million Zerodha clients contribute to over 15% of all retail order <br/> volumes in India                   daily by trading and investing in: </p><br/>
            </tr>
            <tr className="headThree tableData">
                <td>
                    <li className=" tableData">Futures and Options</li><br/>
                </td>
                <td>
                    <li className=" tableData">Stocks & IPOs</li><br/>
                </td>
            </tr>
            <tr>
                <td>
                    <li className=" tableData">Commodity derivatives</li><br/>
                </td>
                <td>
                    <li className=" tableData">Direct mutual funds</li><br/>
                </td>
            </tr>
            <tr>
                <td>
                    <li className=" tableData">Commodity derivatives</li><br/>
                </td>
                <td>
                    <li className=" tableData">Bonds and Govt. Securities</li><br/>
                </td>
            </tr>
        </table>
        
       <p className="zerodhaHead">The Zerodha Universe</p>
       <p className="zerodhaHeadThree">A whole ecosystem of modern investment apps</p>
       <p  className="zerodhaHeadThree">tailored to specific needs, built from the ground up </p>

       <img src="https://zerodha.com/static/images/ecosystem.png" ></img>

       <a className="anc" href="#" >Explore our products</a>

       <table className="zerodhaTable">
        <tr>
        <td className="tableData">
        <p className="zerodhaThree" style={{color:"black" , marginLeft:"-280px"}}>Unbeatable pricing</p>
        <p className="zerodhaThree">We pioneered the concept of discount broking and price </p> 
        <p className="zerodhaThree">transparency in India. Flat fees and no hidden charges. </p>
        <a className="anchorLink" href="#"> See pricing </a>
        </td>
        <td>
            <div className="tableTwo">
                <p style={{fontSize:"50px"}}>₹0</p>
                <p>Free equity delivery and </p>
                <p>direct mutual funds</p>
            </div>
        </td>

        <td>
        <div className="tableTwo">
                <p style={{fontSize:"50px", marginBottom:"50px"}}>₹20</p>
                <p>Intraday and F&O</p>
            </div>
        </td>
        </tr>
        </table>

        <img width="500px" height="300px" className="bodyImageTwo" src="https://zerodha.com/static/images/index-education.svg"></img>

        <p className="headThree ">
           <h1 className="versity">Free and open market education</h1>  
           
           <p className="versity">Varsity, the largest online stock market education book in the world
           <br/>covering everything from the basics to advanced trading. </p><br/>

           <a className="versity " href="#"> Varsity </a><br/>
           
           <p className="versity">Trading Q&A, the most active trading and investment community in<br/>India for all your market related queries.  </p><br/><br/>

         <a className="versity" href="#"> TradingQ&A  </a><br/>
        </p>
        <br/>

        <p className="open">Open a Zerodha account</p>
        <p className="zerodhaHeadThree"> Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades. </p>
        <button style={{background:"blue" , width:"150px" , height:"50px", color:"white", margin:"40px", fontSize:"20px", borderRadius:"15px"}}  >Sign up now</button><br/>
        
    </div>
    
  )
}
}