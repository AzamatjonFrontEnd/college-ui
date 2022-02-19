import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import certificate from "../../assets/images/certificate.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Banner page="Blog" />
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img src={certificate} />
            <h2>Our Certificate & Online Programs For 2021</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam soluta blanditiis numquam impedit facere provident
              voluptatem esse excepturi saepe minus praesentium, libero
              voluptate quod rerum dignissimos suscipit! Quas, quaerat
              voluptatem. Nulla neque ab enim officia, quisquam harum. Facilis
              inventore assumenda corporis et.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ipsum quam culpa voluptate recusandae fuga. Aliquam itaque
              veritatis reprehenderit fugit ullam incidunt accusantium dolores
              deleniti quae commodi natus officia at magnam excepturi quia in,
              consequatur vitae impedit aspernatur optio pariatur quaerat!
              Veniam ipsa nulla ad, quia quo eius iste numquam necessitatibus
              perferendis odit natus? Numquam assumenda temporibus modi hic
              officiis aut placeat velit dignissimos consequatur, dolores ab
              odit. Tempore commodi totam dolores quidem quaerat numquam
              obcaecati iure earum officiis quasi asperiores dolorem, voluptatum
              magni vel! Possimus ducimus error fuga, quia ipsam iusto eligendi
              velit tempore fugiat eos quae saepe consequuntur, vitae ratione.
              Minus autem tenetur deleniti veniam aut molestias voluptas eos
              suscipit culpa.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              rem ipsa veritatis ipsam nam magnam consequuntur explicabo natus.
              Velit laborum aliquid ipsum corporis saepe facere? Architecto
              aliquam culpa commodi sapiente harum aliquid eos officia. Maxime
              qui id iure dolor veritatis iste quam velit voluptatem temporibus,
              optio accusamus sit ea fuga ipsam reprehenderit quis quos enim
              laborum tenetur vitae dolore quisquam odio nesciunt placeat.
              Magni, beatae incidunt odio quas, laboriosam quos, rerum unde
              excepturi animi eos quod?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium beatae tenetur ratione? Modi corrupti consequatur eos,
              nostrum animi ex debitis et ducimus enim quia atque voluptas
              magnam aperiam libero saepe esse. Consectetur animi voluptas
              perferendis doloremque odio laborum incidunt repudiandae maiores
              totam qui culpa ratione dignissimos, possimus deleniti dolorum.
              Nulla!
            </p>
            <div className="comment-box">
              <h3>Leave a comment</h3>
              <form className="comment-form">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <button type="submit" className="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics</span>
              <span>21</span>
            </div>
            <div>
              <span>Data Science</span>
              <span>28</span>
            </div>
            <div>
              <span>Machine Learning</span>
              <span>15</span>
            </div>
            <div>
              <span>Computer Science</span>
              <span>34</span>
            </div>
            <div>
              <span>AutoCAD</span>
              <span>42</span>
            </div>
            <div>
              <span>Journalism</span>
              <span>22</span>
            </div>
            <div>
              <span>Commerce</span>
              <span>30</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
