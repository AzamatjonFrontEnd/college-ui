import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Banner page="Contact Us" />
      <section class="contact-us">
        <div class="row">
            <div class="contact-col">
                <div>
                    <i class="fa fa-home"></i>
                    <span>
                        <h5>XYZ Road, ABC Building</h5>
                        <p>Bangalore, Karnataka, IN</p>
                    </span>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <span>
                        <h5>+1 0123456789</h5>
                        <p>Monday to saturday, 10AM to 6PM</p>
                    </span>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <span>
                        <h5>info@gmail.com</h5>
                        <p>Email us your query</p>
                    </span>
                </div>
            </div>
            <div class="contact-col">
                <form>
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                    <input type="text" name="email" placeholder="Enter Email Address" required />
                    <input type="text" name="subject" placeholder="Enter Your Subject" required />
                    <textarea rows="8" name="message" placeholder="Message"></textarea>
                    <button type="submit" class="hero-btn red-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
      <Footer />
    </div>
  );
};

export default Contact;
