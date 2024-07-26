export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img  class="abt_me_img" src="./img/about_me.png" alt="About Me"/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm Hamdhan, a year 2 Computer Engineering student at the National University of Singapore. I'm an aspiringg software engineer and avid tech enthusiast.
            I'm also a foodie and love scoping out new and interesting places to try food. To balance my interests out and not gain too many calories, I also enjoy hiking and long distance running!
          </p>
          <p className="hero--section-description">
            I am currenly interested in bettering my skills in software development and am building projects that will enable me to sharpen my existing skills and shape new ones as well.
          </p>
        </div>
      </div>
    </section>
  );
}