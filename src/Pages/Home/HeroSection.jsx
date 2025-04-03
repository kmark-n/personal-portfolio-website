export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mark</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Developer</span>{" "}
            <br/>
            Machine Learning
            <br />
            Enthuthiast
          </h1>
          <p className="hero--section-description">
            I am currently an IT major who's not only passionate about <br/>
            software engineering but also i have a great desire to solve <br/>
            complex problems through technology.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/my_image.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
