<script>
import Swiper from '@/components/Swiper.vue';

export default {
  components: {
    Swiper
  }
}
</script>
<template>
  <div class="container mx-auto projects__description row my-0">
    <div class="projects__description col-sm-12 col-lg-6 text-center mx-auto my-0  __font ">
      Todos os projetos contidos no portfólio estão no <strong>GitHub</strong> e hospedados no <strong>Firebase</strong>
      para a visualizaçao do conteúdo e do código.
      Você pode clicar nos <strong>botões</strong> para ser redirecionado ao <strong>Repositório</strong> do projeto ou
      para o <strong>site do projeto</strong> visualiza-lo <strong>;)</strong>
    </div>
  </div>
  <Swiper />
  <div class="container title__divider __title--primary fs-5 my-5"></div>
</template>
<style>
.title__divider {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title__divider::before,
.title__divider::after {
  content: '';
  position: relative;
  height: 1px;
  background: rgb(167, 167, 167);
  min-width: 50px;
  flex-grow: 1;
}

.title__divider span {
  color: rgb(51, 51, 51);
  padding: 0 15px;
}
</style>    