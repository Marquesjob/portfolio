import projectsData from "../data/projectsData.js";

const projects__dinamic__row = document.getElementById('projects__dinamic__row');


for(let i = 0; i < projectsData.length; i++){
    let element = document.createElement('div');
    element.setAttribute('class', 'col');
    element.setAttribute('class', 'my-4');
    element.innerHTML = `
    <div class="card shadow-sm">
      <img src="${projectsData[i].previewImg}"></img>
      <div class="card-body">
        <h5 class="card-title __title--primary fw-bold">${projectsData[i].title}</h5>
        <p class="card-text __font">${projectsData[i].description}</p>
        <div class="input-group input-group-sm mb-3">
          <button class="btn border border-opacity-25 d-flex align-items-center" type="button"><embed
              class="d-inline mx-2 svg-sizing icon-effects" src="./assets/svg/link-solid.svg" /></button>
          <input type="text" class="form-control fs-6 text-muted" aria-label="Example text with button addon"
            aria-describedby="button-addon1" value="${projectsData[i].linkView}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
          <button class="btn border border-opacity-25  d-flex align-items-center" type="button"><embed
              class="d-inline mx-2 svg-sizing icon-effects" src="./assets/svg/github-grey.svg" /></button>
          <input type="text" class="form-control fs-6 text-muted" value="${projectsData[i].linkRepo}" disabled>
        </div>
      </div>
    </div>`;
    projects__dinamic__row.appendChild(element);
    console.log(element);
}
