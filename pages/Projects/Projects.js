const projectTemplate = (array)=>{
    let newArray = array.map((element) => 
        `
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <a href=${element.link}>${element.linkAlt}</a>
        <a href=${element.preview}>${element.previewAlt}</a>
        `
    )
    return (newArray.join(""))
}

const Projects = (data) => {
    return `
    <section id='Projects'>
    <h2>Projects</h2>
    ${projectTemplate(data.projects)}
    </section>

    `
    }
    
    
    export default Projects