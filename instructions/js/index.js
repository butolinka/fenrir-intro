const today = new Date();
const thisYear = today.getFullYear();
const footer= document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent= `\u00A9 Mariia ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'];
const skillsSection = document.querySelector('#skills');
const skillList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message')[0];
    messageForm.addEventListener ('submit', (e)=>{
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;


    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> 
    wrote: <span>${usersMessage} </span>`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', (e) => {
    const entry = removeButton.parentNode;
    entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});