import "./Main.css";
import AboutMe from "../../pages/AboutMe/AboutMe"
import Education from "../../pages/Education/Education"
import WorkExperience from "../../pages/WorkExperience/WorkExperience";
import Projects from "../../pages/Projects/Projects";

const Main = (data)=>{
    
return `
<main>
${AboutMe(data)}
${Education(data)}
${WorkExperience(data)}
${Projects(data)}
</main>
`
}
export default Main