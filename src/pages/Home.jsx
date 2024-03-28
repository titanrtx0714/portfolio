import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/RobelResume.pdf"
import SGCartoon from "../assets/myavatar.jpg"
import { FaGithub, FaTelegram } from "react-icons/fa"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://github.com/titanrtx0714",
      icon: <FaGithub />,
    },
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
            Robel
            <span className="text-primary" style={{paddingLeft: '2vw'}}>Lager</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Impossible is nothing!
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <a href="mailto:titanrtx0714@gmail.com" className='home-mail'>
              titanrtx0714@gmail.com
            </a>
          </div>
        </div>
        <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={SGCartoon}
            alt="Robel Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div>
      </div>

      <p className="lead mb-4">
      - Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code. 
      <br />
      - To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
