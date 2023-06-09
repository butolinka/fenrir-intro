let today = new Date();
let thisYear = today.getFullYear();
const footer= document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent= `\u00A9 Mariia ${thisYear}`;
footer.appendChild(copyright);

let skills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'];
let skillsSection = document.querySelector('#skills');
let skillList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    console.log(skill);
    skillList.appendChild(skill);
}