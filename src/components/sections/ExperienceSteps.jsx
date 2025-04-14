export default function ExperienceSteps({ title, description, image, svg, reverse }) {
    const containerStyle = {
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '50px',
      minHeight: '100vh',
      backgroundColor: '#fff',
    }
  
    const textStyle = {
      flex: 1,
      padding: '20px',
    }
  
    const imageStyle = {
      flex: 1,
      padding: '20px',
    }
  
    return (
      <section style={containerStyle}>
        <div style={textStyle}>
          <h2>{title}</h2>
          <p>{description}</p>
          {svg && <div>{svg}</div>}
        </div>
        <div style={imageStyle}>
          {image && <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />}
        </div>
      </section>
    )
  }
  