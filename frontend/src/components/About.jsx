import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Plattery is more than just a place to eat; it's a sanctuary where memories are created and flavors mingle. 
             Every meal is a work of art, painstakingly prepared to arouse the senses and stimulate the palette.
             Every visit creates a lasting impact, and strangers become friends over shared meals here in our comfortable atmosphere. 
             Come experience Plattery, where each bite narrates a tale of culinary brilliance and devotion. 

            </p>
            <Link to={"/menuitems"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
