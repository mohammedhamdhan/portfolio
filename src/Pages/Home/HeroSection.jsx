import GitHubButton from 'react-github-button';
<script src="https://kit.fontawesome.com/10e461e153.js" crossorigin="anonymous"></script>

const githubLogoUrl = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
const linkedinLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png';

 
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey! My name is Hamdhan :)</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">
              Full Stack
            </span>{" "}
            <br />
            Developer
          </h1>
          <p className="Hero-section-description">
            With a passion for tech, AI and Software Engineering!
            <br />
            Aspiring to be the best version of myself and contribute as much as possible :)
          </p>
        </div>
        <div className='logo'>
          <a className='git'href="https://github.com/mohammedhamdhan/" target='blank' rel="noopener noreferrer"><img src={githubLogoUrl} alt="GitHub Logo" style={{ width: '30px', height: '30px' }} /></a>
          <a className='linked' href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogoUrl} alt="LinkedIn Logo" style={{ width: '25px', height: '26px' }} />
          </a>
        </div>
      </div>
      <div className='hero-section-img'>
        <img src="./img/hero_img.png" alt="Hero Section"/>
      </div>
    </section>
  );
}