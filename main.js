import data from "./data/data.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";

let newArray = data.education.relevantCourses.map(nombre => `<p>${nombre}<p>`)
console.log(newArray.join(""))


document.querySelector('#app').innerHTML=
`
${Header(data)}
${Main(data)}
${Footer(data)}
`
;


const AboutMe = document.querySelector('#AboutMe');
AboutMe.addEventListener('click', ()=>{

})