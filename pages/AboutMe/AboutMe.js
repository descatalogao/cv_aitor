
const AboutMe = (data) => {
return `
    <section id='AboutMe'>
    <h2>About Me</h2>
            <img src=${data.avatar}/>
            <p>${data.aboutMe}</p>
            <p>${data.address}</p>
            <a href="mailto:${data.email}">Contact me</a>
    </section>
`

}

export default AboutMe