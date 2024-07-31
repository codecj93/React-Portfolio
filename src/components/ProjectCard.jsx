function ProjectCard({ project }) {
    return (
        <div id={project.id}>
            <h1>{project.title}</h1>
            <p>
                {project.description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img id="weatherpic" src={project.image} alt="Weather app" />
            </a>
        </div>
    )
}

export default ProjectCard;