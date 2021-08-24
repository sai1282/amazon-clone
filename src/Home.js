import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12341341"
            title="The Lean Startup: How COnstant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish
                       Kitchen Mixer with K-beater, Dough Hook and 
                       Whisk, 5 litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71hIoWhVckL._AC_SL1500_.jpg"
            alt=""
          />
        </div>

        <div className="home_row">
          <Product 
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
          <Product 
              id="234445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.00}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg"
              alt=""/>
          <Product 
              id="3254354335"
              title="New Apple iPd Pro(12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              alt="" />
        </div>

        <div className="home_row">
          <Product 
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monito
              - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Home;
