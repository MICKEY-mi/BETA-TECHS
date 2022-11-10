import emailjs from 'emailjs-com';
import React from 'react'
import './History.css';
import './reducer';
import { Link } from 'react-router-dom';
import client1 from "./clients/client1.webp";
import client2 from "./clients/client2.webp";
import client3 from "./clients/client3.webp";
import client4 from "./clients/client4.webp";
import {UseStateValue} from "./StateProvider";

function History() {
    const [{basket, user }, dispatch] = UseStateValue();

    
      

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_t76jnol','template_hdkwucg',e.target, 'zozF20U2SZWw5Z47D').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));

    alert(`thank you  for your message`);
  }
  
    const useremailRender = () =>{
        if(user){
            return user.email;
        }
        else{
            return 'Guest';
        }
       }


  return (
<div>

    <div className='foot'>
    <div className='history'>
        
        <div className='history_left'>
        <div>
            <h3>{useremailRender()}</h3>
            <h4>
            123 Prayagraj
            </h4>
            <h4 className='history_address'>
            (207001),U.P
            </h4>

        </div>
        <section id="client-section">
        <h1 class="h-primary center">Our Clients</h1>
        <div id="clients">
            <div class="client-items">
                <img src={client1} alt="our clients" />
            </div>
            <div class="client-items">
                <img src={client2} alt="our clients" />
            </div>
            <div class="client-items">
                <img src={client3} alt="our clients" />
            </div>
            <div class="client-items">
                <img src={client4} alt="our clients" />
            </div>
        </div>
    </section>

    
    <section id="contact">
        <h3 class="h-primary center">Contact Us</h3>
        <div id="contact-box">
            
        
            <form onSubmit={sendEmail}>
                
                <div className='name' class="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                </div>
                <div className='email' class="form-group">
                    <label for="name">Email: </label>
                    <input type="email" name="useremail" id="email" placeholder="Enter your email" />
                </div>
                <div className='message' class="form-group">
                    <label for="name">Message: </label>
                    <textarea name="message" id="message" cols="30" rows="10" />
                    <input type='submit' value='Send'/>
                </div>
                
            </form>
        </div>
    </section>
    
    
        </div>
    </div>
    </div>
    <footer>
        <div class="center">
            Copyright &copy; www.beta-techs.com. All rights reserved!
        </div>
    </footer>
    </div>    
  )
}

export default History
