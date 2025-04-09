export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mark</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color" style={{ fontsize: '2rem'}}>
              Software Developer
            </span>{" "}
            <span style={{ color: '#000' }}>|</span>{" "}
            <span style={{ fontSize: '2rem' }}>
              Machine Learning Enthusiast
            </span> 
          </h1>
          <p className="hero--section-description">
            I’m driven by a passion for harnessing technology to tackle real-world problems through AI and software development. 
            With expertise in web, mobile, and AI-powered applications, I specialize in crafting solutions that make a difference. 
            Ready to collaborate? Let’s create something extraordinary together!
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="/img/me.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
