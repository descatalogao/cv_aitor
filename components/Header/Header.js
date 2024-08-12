import "./Header.css";

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
    //   document.body.classList.toggle("light");
      changeText();
    });
  };
  
export const changeText = () => {
    const themeBtn = document.querySelector("#themeBtn");
    if (themeBtn.textContent = "🌙") {
      themeBtn.textContent = "☀️";
    } else {
      themeBtn.textContent = "🌙";
    }
  };


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
<h1 id="themeBtn">🌙</h1>
</header>
`
}


export default Header

