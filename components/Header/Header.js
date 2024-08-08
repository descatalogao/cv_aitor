import "./Header.css";




const Header = (data)=>{
return `
<header class='sticky'>
<h1>${data.name}</h1>
<ul>
    <a href='#AboutMe'>About Me</a>
    <a href='#Education'>Education</a>
    <a href='#WorkExperience'>Work Experience</a>
    <a href='#Projects'>Projects</a>
</ul>
</header>


`

}


export default Header

