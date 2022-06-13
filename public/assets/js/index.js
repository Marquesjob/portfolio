import projectsData from "../data/projectsData.js";

const projects__dinamic__row = document.querySelector('#projects__dinamic__row');

for (let i = 0; i < projectsData.length; i++) {
  let element = document.createElement('div');
  element.setAttribute('class', 'col');
  element.setAttribute('class', 'my-4');
  element.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-header bg-light">
        <h5 class="card-title __title--primary  m-0">${projectsData[i].title}</h5>
      </div>
      <img id="cardImg" src="${projectsData[i].previewImg}" class="border-0"></img>
      <div class="card-body">
        <p class="card-text __font">${projectsData[i].description}</p>
        <div class="input-group input-group-sm mb-3">
          <a id="projects__button__linkIcon" class="btn border-0 border-opacity-25 d-flex align-items-center" type="button">
            <img  id="projects__linkIcon" class="d-inline mx-2 svg-sizing icon-effects" src="./assets/svg/link-solid.svg" />
          </a>
          <input type="text" class="form-control fs-6 text-muted" value="${projectsData[i].linkView}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
          <a id="projects__button__gitIcon" class="btn border-0 border-opacity-25  d-flex align-items-center">
            <img id="projects__gitIcon" class="d-inline mx-2 svg-sizing" src="./assets/svg/github-grey.svg"/>
          </a>
          <input type="text" class="form-control fs-6 text-muted" value="${projectsData[i].linkRepo}" disabled>
        </div>
      </div>
    </div>`;
  projects__dinamic__row.appendChild(element);
}
