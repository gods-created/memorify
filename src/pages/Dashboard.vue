<template>
  <HeaderView :logo="logo" @update_page="update_page" @edit_modal_state="edit_modal_state" />
  <ContentView @edit_modal_state="edit_modal_state" />
  <FooterView :logo="logo" @update_page="update_page" />
  <UpButtonView />
  
  <ModalWindowVue v-if="modal" @edit_modal_state="edit_modal_state" />
</template>

<script>
  import HeaderView from '@/components/Header.vue';
  import ContentView from '@/components/Content.vue';
  import FooterView from '@/components/Footer.vue';
  import UpButtonView from '@/components/layouts/UpButton.vue'
  import ModalWindowVue from '@/components/layouts/ModalWindow.vue'
  import Logo from '@/assets/logo.png';
  import update_page from '@/mixins/index.js';
  
  export default {
    name: 'DashboardView',
    data() {
        return {
            logo: Logo,
            modal: false,
        }
    },
    mixins: [
        update_page,
    ],
    components: {
        HeaderView,
        ContentView,
        FooterView,
        UpButtonView,
        ModalWindowVue,
    },
    methods: {
        edit_modal_state() {
            return this.modal = !this.modal;
        }
    }
  }
</script>
