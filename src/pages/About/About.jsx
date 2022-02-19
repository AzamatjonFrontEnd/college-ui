import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import about from '../../assets/images/about.jpg';
import './About.css';

const About = () => {
  return (
      <div>
        <Navbar />
        <Banner page="About Us"/>
        <section class="about-us">
        <div class="row">
            <div class="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi necessitatibus, dicta quisquam et laborum nihil illo facere accusantium vel maiores tempora tenetur nesciunt quis unde, repellat ea quas? Voluptate maxime quaerat, non dolorum harum ex repellat totam sint? Repellat adipisci delectus, magnam sunt rerum sapiente animi veniam excepturi! Repellat adipisci delectus, magnam sunt rerum sapiente animi veniam excepturi! Repellat adipisci delectus, magnam sunt rerum sapiente animi veniam excepturi!</p>
                <a href="#" class="hero-btn red-btn">EXPLORE NOW</a>
            </div>
            <div class="about-col">
                <img src={about} alt="" />
            </div>
        </div>
        <div class="row">
            <div class="about-col">
                <img src={about} alt="" />
            </div>
            <div class="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi necessitatibus, dicta quisquam et laborum nihil illo facere accusantium vel maiores tempora tenetur nesciunt quis unde, repellat ea quas? Voluptate maxime quaerat, non dolorum harum ex repellat totam sint? Repellat adipisci delectus, magnam sunt rerum sapiente animi veniam excepturi! Repellat adipisci delectus, magnam sunt rerum sapiente animi veniam excepturi! Repellat adipisci delectus, magnam sunt rerum sapiente animi veniam excepturi!</p>
                <a href="#" class="hero-btn red-btn">EXPLORE NOW</a>
            </div>
        </div>
    </section>
        <Footer />
      </div>
  )
};

export default About;