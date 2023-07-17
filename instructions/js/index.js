const today = new Date();
const thisYear = today.getFullYear();
const footer= document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent= `\u00A9 Mariia ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'API','GSAP'];
const skillsSection = document.querySelector('#skills');
const skillList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.classList.add('skillItem');
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
    newMessage.classList.add('messageList');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> 
    wrote: <span>${usersMessage} </span> <br>`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});


fetch('https://api.github.com/users/butolinka/repos')
.then(response =>response.json())
.then(data => githubRepositories(data))
.catch(error => alert("Error in loading data. Try again later.", error))
function githubRepositories(repositories){
    const projectSection = document.getElementById('projects');
    const progectList = projectSection.querySelector('ul');
    for(let i = 0; i < repositories.length; i+=1){
        const project = document.createElement('li');
        project.classList.add('project');
        const repositoryName = repositories[i].name;
        const capitilizeRepositoryName = repositoryName.charAt(0).toUpperCase() + repositoryName.slice(1);
        project.innerHTML='<a href="'+ repositories[i].html_url +'"target="_blank">' + capitilizeRepositoryName +'</a>';
        progectList.appendChild(project);
    }
}