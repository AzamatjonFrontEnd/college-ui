import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import london from "../../assets/images/london.png";
import newyork from "../../assets/images/newyork.png";
import washington from "../../assets/images/washington.png";
import library from "../../assets/images/library.png";
import basketball from "../../assets/images/basketball.png";
import cafeteria from "../../assets/images/cafeteria.png";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="header">
        <div className="text-box">
          <h1>World's Biggest University</h1>
          <p>
            Making website is now one of the easiest thing in the world. You
            just need to learn HTML, CSS, <br /> JavaScript and you are good to
            go.
          </p>
          <a className="hero-btn">Visit Us To know More</a>
        </div>
      </section>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda adipisci atque voluptatem sapiente aliquam. Maxime minus
              sunt dolores aperiam repellendus recusandae minima dicta sed,
              reiciendis et!
            </p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda adipisci atque voluptatem sapiente aliquam. Maxime minus
              sunt dolores aperiam repellendus recusandae minima dicta sed,
              reiciendis et!
            </p>
          </div>
          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda adipisci atque voluptatem sapiente aliquam. Maxime minus
              sunt dolores aperiam repellendus recusandae minima dicta sed,
              reiciendis et!
            </p>
          </div>
        </div>
      </section>
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="campus-col">
            <img src={london} />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={newyork} />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={washington} />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="facilities-col">
            <img src={library} />
            <h3>World Class Library</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              reprehenderit? Aut, sit.
            </p>
          </div>
          <div className="facilities-col">
            <img src={basketball} />
            <h3>Largest Play Ground</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              reprehenderit? Aut, sit.
            </p>
          </div>
          <div className="facilities-col">
            <img src={cafeteria} />
            <h3>Tasty and Healthy Food</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              reprehenderit? Aut, sit.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h1>What Our Students Says</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="testimonial-col">
            <img src={user1} />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo velit deleniti cupiditate magnam corporis, doloremque
                tenetur facilis? Laborum temporibus obcaecati amet deleniti quas
                dolores.
              </p>
              <h3>Christine Berkley</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={user2} />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo velit deleniti cupiditate magnam corporis, doloremque
                tenetur facilis? Laborum temporibus obcaecati amet deleniti quas
                dolores.
              </p>
              <h3>David Byer</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <h1>
          Enroll For Our Various Online Courses <br /> Anywhere From The World
        </h1>
        <a href="#" className="hero-btn">
          CONTACT US
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
