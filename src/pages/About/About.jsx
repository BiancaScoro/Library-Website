import React from 'react';
import './About.css';
import aboutImg from "../../components/assets/about-img.jpg";
import Header from '../../components/Header/Header';

const About = () => {
  return (
    <section className="about">
      <Header />
      <div className="about-container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="shelf" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-19 ls-1">About WR Library</h2>
            <p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, lorem at fringilla fermentum, odio erat maximus justo, sit amet imperdiet neque magna a diam. Aliquam vitae dolor et magna mattis semper. Nulla consectetur nec nibh quis suscipit. Maecenas porta risus at luctus fermentum. Vestibulum semper, velit eget dignissim pretium, justo purus congue velit, in dapibus sapien risus ac orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. In venenatis neque sem, at faucibus risus porttitor a. Fusce volutpat elit quis arcu hendrerit rutrum. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About