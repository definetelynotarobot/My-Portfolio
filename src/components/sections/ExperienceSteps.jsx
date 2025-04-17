import './styles/ExperienceSteps.css'
export default function ExperienceSteps({ title, description, image, svg, reverse }) {
    return (
      <section className={`experience-section ${reverse ? 'reverse' : ''}`} data-aos="fade-up">
        <div className="experience-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
  
        <div className="experience-svg">
          {svg}
          {image && <img src={image} alt={title} className="experience-image" />}
        </div>
      </section>
    )
  }

  