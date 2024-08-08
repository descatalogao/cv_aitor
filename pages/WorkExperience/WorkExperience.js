const positionTemplate = (array)=>{
    let newArray = array.map((element) => 
        `
        <h3>${element.position}</h3>
        <p>${element.company}</p>
        <p>${element.startDate}</p>
        <p>${element.endDate}</p>
        <p>${element.description}</p>
        `
    )
    return (newArray.join(""))
}

const WorkExperience = (data) => {
    return `
    <section id='WorkExperience'>
    <h2>Work Experience</h2>
    ${positionTemplate(data.workExperience)}
    </section>
    `
    }
    
    
    export default WorkExperience