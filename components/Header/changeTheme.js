export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
      changeText();
      innerColor();
    });
  };
  
export const changeText = () => {
    const themeBtn = document.querySelector("#themeBtn");
    if (themeBtn.textContent === "🌙") {
      themeBtn.textContent = "☀️";
    } else {
      themeBtn.textContent = "🌙";
    }
    document.body.classList.toggle('dark');
};

export const innerColor = () =>{
    const root = document.querySelector(':root');
    if (document.body.classList == 'dark'){
        root.style.setProperty('--blue', '#929292');
        root.style.setProperty('--blue2', '#868686');
        root.style.setProperty('--white', '#000000');
        root.style.setProperty('--twhite', '#636363');
        root.style.setProperty('--title', '#000000');
        root.style.setProperty('--link', '#000000');
        root.style.setProperty('--highlight', '#ffffff');
    } else {
        root.style.setProperty('--blue', '#1c80e4');
        root.style.setProperty('--blue2', '#78b0ff');
        root.style.setProperty('--white', '#ffffff');
        root.style.setProperty('--twhite', '#ebe7e77f');
        root.style.setProperty('--title', '#ffffff');
        root.style.setProperty('--link', '#ffffff');
        root.style.setProperty('--highlight', '#7ce9ff');

    }
}


export default changeTheme