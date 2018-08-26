import Vue from "vue/dist/vue.js";
import VcUsers from "./components/users.vue";

new Vue({
    el: ".container",

    components: {
        VcUsers
    },

    data: {
        title: "Usuarios"
    }    
});
