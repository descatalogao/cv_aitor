const template = (input)=>{
    let newArray = input.map(nombre => `<p>${nombre}<p>`)
    return newArray.join("")
}

const Education = (data)=> {
    return `
    <section id='Education'>
        <h2>Education</h2>
            <h3>Degree</h3>
            <p>${data.education.degree}</p>
            <h3>University</h3>
            <p>${data.education.university}</p>
            <h3>Graduation Year</h3>
            <p>${data.education.graduationYear}</p>
            <h3>Honors</h3>
            <p>${(data.education.honors)}</p>
            <h3>Relevant Courses</h3>
            <p>${template(data.education.relevantCourses)}</p>
    </section>
`

}

export default Education