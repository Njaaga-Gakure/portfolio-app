const Projects = ({projects, title}) => {
    const customeTitle = title.split(' ')
    return (
        <section className="featured-projects">
          <h3 className="title"><span>{customeTitle[0]}</span> {customeTitle[1]}</h3>
        <div className="center-projects">
          {projects.map(({ id, image, title, url }) => {
            return (
              <article key={id} className="project">
                <img className="project-img" src={image} alt={title} />
                <div className="project-info">
                  <h5 className="project-title">{title}</h5>
                  <a className="project-btn text_small" href={url} target="_blank" rel="noreferrer">launch site</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    )
}
export default Projects