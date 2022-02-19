import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import library from "../../assets/images/library.png";
import basketball from "../../assets/images/basketball.png";
import cafeteria from "../../assets/images/cafeteria.png";

const Course = () => {
  return (
    <div>
      <Navbar />
      <Banner page="Our Courses" />
      <section class="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="row">
          <div class="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda adipisci atque voluptatem sapiente aliquam. Maxime minus
              sunt dolores aperiam repellendus recusandae minima dicta sed,
              reiciendis et!
            </p>
          </div>
          <div class="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda adipisci atque voluptatem sapiente aliquam. Maxime minus
              sunt dolores aperiam repellendus recusandae minima dicta sed,
              reiciendis et!
            </p>
          </div>
          <div class="course-col">
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
      <section class="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="row">
          <div class="facilities-col">
            <img src={library} />
            <h3>World Class Library</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              reprehenderit? Aut, sit.
            </p>
          </div>
          <div class="facilities-col">
            <img src={basketball} />
            <h3>Largest Play Ground</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              reprehenderit? Aut, sit.
            </p>
          </div>
          <div class="facilities-col">
            <img src={cafeteria} />
            <h3>Tasty and Healthy Food</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              reprehenderit? Aut, sit.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Course;
