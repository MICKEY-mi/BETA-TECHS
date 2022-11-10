import React from 'react'
import "./Gpass1.css"
import { Link } from 'react-router-dom';

function Gpass1() {

    function alertcreater0(){
        alert("Your free trail has been activated");
    }
    function alertcreater1(){
        alert("Your Subsciption has been activated! enjoy the day ");
    }
    function alertcreater2(){
        alert("Your Subsciption has been activated! enjoy the day with Entertainment");
    }

  return (
    <div>
        <section className="pricing py-5">
  <div className="container">
    <div className="row">

      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span class="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>👨‍💻Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>🤩5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>🎶Ads on Music</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>🚫0 Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <button onClick={alertcreater0} className="btn btn-primary text-uppercase">Get</button>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span class="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>👨‍💻5 Users</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>🤩50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>🎶Unlimited Music</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>💼Full Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
            <button onClick={alertcreater1} className="btn btn-primary text-uppercase">Get</button>
            </div>
          </div>
        </div>
      </div>
     
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>👨‍💻Unlimited Users</strong>
              </li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>🤩150GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>🎵Unlimited Music and 🎞️Entertainment</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>💼Full Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
            <button onClick={alertcreater2} className="btn btn-primary text-uppercase">Get</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Link to="/">
  <div className='orders__btn'>
    <button className='btn'>Home</button>
    </div>
    </Link>
</section>

    </div>
  )
}

export default Gpass1