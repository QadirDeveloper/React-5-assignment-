import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div>
       <div>
      <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
       </div>
      <div className="container">
        <div className="row" >
          <div className="col-3" >
              <p>
               Deliver to:
          
               </p>
          </div>
          <div className="col-3">
              <p>Current Location
              <b>Mohammadpur Bus Stand, Dhaka</b>
              </p>
          </div>

          <div className="col-3">
          <img src="https://www.clipartmax.com/png/middle/257-2572350_search-icon-search-icon-png-orange.png" width="20px" alt="not found" />Search Food
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-warning">login</button>
          </div>
      </div>
      </div>
      
    
    
    


       <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h2 style={{ color: 'white' }}> Are you starving?</h2>
              <p>Within a few clicks, find meals that are accessible near you</p>
              <button type="button" className="btn btn-warning">Delivery</button>
              <button type="button" className="btn btn-warning">Pickup</button>
              <input width="100px" type="text" />
              <button type="button" className="btn btn-warning">Find Food</button>
            </div>
            <div className="col-4">
              <img style={{ borderRadius: '50%', marginTop: '80px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvxSR0qamMt3jt85TuV0LlJeeX_JhavTYmlNPjLvAJH59u3Bc" alt="" />
            </div>
          </div>
        </div> 
        </div> 


  )
}
