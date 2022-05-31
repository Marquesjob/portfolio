const mostrar_skills = document.querySelector('#dinamic-content-skills');
const mostrar_projetos = document.querySelector('#dinamic-content-projects');

const botao_projetos = document.querySelector('#projetos');
const botao_skill = document.querySelector('#skills');

mostrar_projetos.hidden = true;

let status_do_botao_projeto =  false; 
let status_do_botao_skill = mostrar_skills.hidden;


botao_skill.addEventListener('click', () => {
    if(status_do_botao_projeto == false){
        mostrar_projetos.hidden = true;
        mostrar_skills.hidden = false;
    } else {      
        console.error('Algo está errado')
    }
});

botao_projetos.addEventListener('click', () => {
    if(status_do_botao_skill == false){
        mostrar_skills.hidden = true;
        mostrar_projetos.hidden = false;
    } else {       
        console.error('Algo está errado')
    }
});

 condicao ? valorSeTrue : valorSeFalse;