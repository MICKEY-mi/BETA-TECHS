import React from 'react'
import "./Home.css"

import Bg1 from './backgroundimages/bg1.webp';
import Product from './Product';
import product1 from './images/product1.webp';
import product2 from './images/product2.webp';
import product3 from './products/product3.webp';
import product4 from './products/product4.jpeg';
import product5 from './products/product5.png';
import product6 from './products/product6.jpg';
import product7 from './products/product7.jpeg';
import product8 from './products/product8.png';


function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className= 'home_image'
                 src={Bg1} alt="prime" />
                 
                <div className="home_row">
                    <Product 
                    id='1'
                    title='SpiderMAN-The empire of dark (Extended Version) ' 
                    price= {19.99} 
                    image= {product1}  
                    rating={3} />    
                    
                    <Product
                    id='2'
                    title="Vastramay-Men's Sherwani set"
                    price= {29.99} 
                    image= {product2}  
                    rating={4}  />
                 </div>

                 <div className="home_row">
                 <Product 
                    id='3'
                    title='Dell Inspiron-3511 Laptop '
                    price= {799.99} 
                    image= {product3}  
                    rating={5}  />

                <Product 
                    id='4'
                    title='boAt-Airdopes 141 Wireless'
                      
                    price= {21.75} 
                    image= {product4}  
                    rating={5}  />

                <Product 
                    id='5'
                    title='Apple iPhone 12(64GB)-Black '
                      
                    price= {786.25} 
                    image= {product5}  
                    rating={4}  />
                 </div>
                 
                 <div className="home_row">
                 
                 <Product 
                    id='6'
                    title='SQ(Genius)-Complete Cricket kit'
                      
                    price= {50.69} 
                    image= {product6}  
                    rating={4}  />
                    
                    <Product
                    id='7'
                    title='Redmi 80cm(32inches) Android Smart LED TV '
                      
                    price= {189.29} 
                    image= {product7}  
                    rating={1}  />
                    
                    <Product
                    id='8'
                    title='Symactive:Nylon Shuttlecock (set of 10)'
                      
                    price= {4.99} 
                    image= {product8}  
                    rating={2}  />
                 </div>
            </div>
        </div>
    );
}

export default Home;
