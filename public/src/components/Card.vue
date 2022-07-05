<template>
    <div class="card shadow-sm">
        <div class="card-header border-0">
            <h5 class="card-title __title--primary  m-0">{{ title }}</h5>
        </div>
        <img class="cardimg border-0 p-5" src="./icons/Icondev.svg"/>
        <div class="card-body pt-0 mt-3">
            <div class="d-grid gap-2">
                <a v-bind:href="linkView" target="_blank" class="d-grid gap-2 mb-1">
                    <button class="border-0 btn btn-light  __font" type="button" id="demo__button">Demo</button></a>
            </div>
            <div>
                <a v-bind:href="linkRepo" target="_blank" class="d-grid gap-2 mt-1">
                    <button class="border-0 btn btn-light  __font" type="button" id="git__button">GitHub</button></a>
            </div>
            <div class="form-floating p-0 mt-3">
                <textarea class="form-control pt-2 fw-light border-0 " id="floatingTextarea2"
                    disabled>{{ description }}</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Icongithub from "./icons/Icongithub.vue";
export default {
    components: {
        Icongithub,
        },
    props: ['title', 'logo', 'linkRepo', 'linkView', 'description'],
}

</script>

<style>

.card-header {
    background-color: #f8f9fa !important; 
}
textarea {
    height: 8.0em !important;
}

a {
    text-decoration: none !important;
}

.form-control:disabled,
.form-control {
    background-color: #f8f9fa !important;
}

#demo__button:hover, #git__button:hover {
    background-color: var(--light-link-efect);
    transition: all 0.5s ease;
}

.cardimg {
    width: 295px !important;
    height: 290px !important;
    box-sizing: border-box;
    background: rgb(129, 138, 223);
    fill: #f8f9fa;
}

</style>