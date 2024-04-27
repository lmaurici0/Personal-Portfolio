const skilss = ["Full-Stack","Front-End", "Back-End"];
let index = 0;

function changeSkill() {
    const skill = `${skilss[index]}`;
    document.getElementById('spanDev').innerText = skill;
    index = (index + 1) % skilss.length;
}setInterval(changeSkill, 3000);

function sendMessage(){
    let phone = "55119830852555"
    let message = document.getElementById('messageInput').value;
    let url = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(message);
    window.open(url);
}
