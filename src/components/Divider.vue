<script>
    export default {
        props: ['title']
    }

</script>

<template>
    <div class=" container title__divider __title--primary fs-5 mb-5">
        <span class="fs-3">{{ title }}</span>
    </div>
</template>


<style>
    .title__divider {
        margin-top: 100px;
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

    .__title--primary {
            font-family: var(--primary-font);
            color: var(--shadow-color-font);
      }
</style>