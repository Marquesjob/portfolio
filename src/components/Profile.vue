

<template>

      <div id="profile__picture" class="transition  d-flex justify-content-center
          align-content-center mb-3">
            <img src="../assets/img/me.jpg" class="transition img-thumbnail rounded-circle mx-4
            border border-3 border-light" alt="...">
      </div>

      <div id="profile__name" class="transition d-flex justify-content-center mb-2">
            <div id="name">
                  <h2 class="__title--primary text-center fw-bold fs-4 d-block m-0">Patrick Belfort</h2>
            </div>
      </div>

      <div id="profile__job" class="transition d-flex justify-content-center mb-2">
            <div>
                  <h3 class="__title--secondary text-center d-block">Web Developer</h3>
            </div>
      </div>

      <div id="profile__icons" class="transition d-flex justify-content-center">
            <a href="https://www.instagram.com/0/0" target="_blank" class="mx-2">
                  <Iconinstagram id="Iconinstagram" />
            </a>
            <a href="https://www.linkedin.com/in/patrick-belfort-91253b200/" target="_blank" class="mx-2">
                  <Iconlinkedin id="Iconlinkedin" />
            </a>
            <a href="https://github.com/Marquesjob" target="_blank" class="mx-2">
                  <Icongithub id="Icongithub" />
            </a>
      </div>

      <div id="profile__description" class="row g-4 pt-5 row-cols-1 row-cols-lg-3 text-center justify-content-center">
            <div id="profile__description__about" class="col px-5">
                  <div class="d-inline-flex align-items-center
                  justify-content-center mb-3">
                        <h2 class="__title--primary fs-5">Sobre mim</h2>
                  </div>
                  <p class="__font fw-light">
                        24 anos, nascido na zona norte do Rio de Janeiro.
                        Iniciei os meus estudos no mundo do desenvolvimento com 22 anos,
                        quando ainda trabalhava numa loja de <strong class="fw-bold">informática.</strong>
                        Dividia meu tempo entre o trabalho e os estudos.
                        Hoje me encontro totalmente focado em evoluir as
                        minhas skills como desenvolvedor, para isso, busco
                        a minha primeira experiência dentro de uma empresa,
                        tendo flexibilidade em aprender novas <strong class="fw-bold">tecnologias</strong>,
                        dando preferência ao <strong class="fw-bold">Home-Office</strong>
                        e analisando
                        propostas para locais distantes de onde resido.
                  </p>
            </div>
            <div id="profile__description__career" class="col px-5">
                  <div class="d-inline-flex align-items-center
                  justify-content-center fs-5 mb-3">
                        <h2 class="__title--primary fs-5">Carreira</h2>
                  </div>
                  <p class="__font fw-light">
                        Iniciei meus estudos fazendo aulas online
                        através dos cursos gratuítos do <strong class="fw-bold">Gustavo
                              Guanabara</strong>
                        onde tive a oportunidade de aprender sobre <strong class="fw-bold">HTML</strong>,
                        <strong class="fw-bold">CSS</strong> e <strong class="fw-bold">Javascript.</strong>
                        Fiz outros cursos na <strong class="fw-bold">Alura, </strong><strong
                              class="fw-bold">Udemy</strong>, <strong class="fw-bold">DIO</strong>
                        e na <strong class="fw-bold">Rocketseat</strong> todos com foco
                        em Front-end. Atualmente me encontro estudando Front-End,
                        pensando em ser Full-Stack a longo prazo pois, em
                        segundo plano estudo <strong class="fw-bold">Node.JS</strong> e
                        <strong class="fw-bold">DB</strong>.
                        possuo 2 experiências como FreeLancer Front-End utilizando
                        tecnologias
                        como <strong class="fw-bold"> Angular</strong> e <strong class="fw-bold">Ionic</strong><br />
                        (para saber mais sobre as experiências, baixe o curriculo).
                  </p>
            </div>
      </div>

      <div class="profile__buttons">
            <a style="text-decoration: none;" :href="doc.loc"
                  class="d-grid gap-2 col-12 col-sm-6 col-md-4 col-lg-4 mt-5 mx-auto"
                  download>
                  <button id="profile__button__download"  class="btn btn-light border-0" type="submit">
                        <p class="__font fs-6 p-0 m-0">{{ doc.title }}</p>
                  </button>
            </a>
            <a href=" https://wa.me/552199228610" target="_blank"
                  class=" d-grid gap-2 col-12 col-sm-6 col-md-4 col-lg-4 mt-2 mx-auto ">
                  <button id="profile__button__wpp" class="btn btn-light border-0" type="button">
                        <Iconwhatsapp id="Iconwhatsapp" />
                  </button>
            </a>
      </div>

</template>

<script>

import Iconinstagram from "./icons/Iconinstagram.vue";
import Iconlinkedin from "./icons/Iconlinkedin.vue";
import Icongithub from "./icons/Icongithub.vue";
import Iconwhatsapp from "./icons/Iconwhatsapp.vue";


export default {

      data () {
           return {
                   doc: {title: 'Baixar Curriculo', loc: '/curriculo.pdf'}
           }
      },

      components: {
            Iconinstagram,
            Iconlinkedin,
            Icongithub,
            Iconwhatsapp,
      },

      methods: {
            
      }
}

</script>

<style>

img {
      width: 150px !important;
}
.__title--primary {
      font-family: var(--primary-font);
      color: var(--shadow-color-font);
}

.__title--secondary {
      font-family: var(--primary-font);
      color: var(--light-color-font);
      font-size: 13px;
      font-weight: bold;
}

.__title--terciary {
      font-family: var(--primary-font);
      color: var(--shadow-color-font);
}

.__font {
      font-family: var(--primary-font);
}


.profile__icons__item {
      color: var(--light-color-font);
}


#Iconinstagram,
#Icongithub,
#Iconlinkedin {
      color: var(--shadow-color-font);
}

#Iconinstagram:hover,
#Icongithub:hover,
#Iconlinkedin:hover {
      color: var(--shadow-color-max);
      transition: all 0.3s ease;
}

#Iconwhatsapp {
      fill: rgb(36, 36, 36);
}

#profile__button__download:hover,
#profile__button__wpp:hover {
      background-color: var(--light-link-efect);
      transition: all 0.5s ease;
}
</style>