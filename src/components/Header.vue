<template>
    <v-app-bar>
        <template v-slot:prepend>
          <img :src="logo" class="logo img-fluid" width="50" @click="update_page" />
        </template>
        
        <v-app-bar-title>Memorify</v-app-bar-title>

        <v-btn class="text-none" color="#ffffff" variant="flat" @click="edit_modal_state">
          Надіслати заявку
        </v-btn>
    </v-app-bar>
    
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 border-bottom">
      <div class="col-lg-3 mb-2 mb-md-0">
        <!-- -->
      </div>

      <ul class="nav col-10 col-lg-auto justify-content-center rounded mb-md-0 bg-white">
        <li><a href="#aboutUs" class="nav-link px-2 text-dark fs-5">Про нас</a></li>
        <li><a href="#aboutService" class="nav-link px-2 text-dark fs-5">Щодо послуги</a></li>
        <li><a href="#price" class="nav-link px-2 text-dark fs-5">Ціна</a></li>
        <li><a href="#howWork" class="nav-link px-2 text-dark fs-5">Як працює</a></li>
        <li><a href="#contacts" class="nav-link px-2 text-dark fs-5">Контакти</a></li>
      </ul>

      <div class="col-lg-3 text-end">
        <!-- -->
      </div>
    </div>
</template>

<script>
  export default {
    name: 'HeaderView',
    props: {
        logo: Object
    },
    methods: {
        update_page() {
            return this.$emit('update_page');
        },
        edit_modal_state() {
            return this.$emit('edit_modal_state');
        }
    }
  }
</script>
