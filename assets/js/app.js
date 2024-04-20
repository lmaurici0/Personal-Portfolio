const skilss = ["Full-Stack","Front-End", "Back-End"];
let index = 0;

function changeSkill() {
    const skill = `${skilss[index]}`;
    document.getElementById('spanDev').innerText = skill;
    index = (index + 1) % skilss.length;
}

setInterval(changeSkill, 3000);
