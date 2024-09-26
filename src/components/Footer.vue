<template>
    <div class="container">
        <footer class="py-3">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="#aboutUs" class="nav-link px-2 text-light">Про нас</a></li>
              <li class="nav-item"><a href="#aboutService" class="nav-link px-2 text-light">Щодо послуги</a></li>
              <li class="nav-item"><a href="#price" class="nav-link px-2 text-light">Ціна</a></li>
              <li class="nav-item"><a href="#howWork" class="nav-link px-2 text-light">Як працює</a></li>
              <li class="nav-item"><a href="#contacts" class="nav-link px-2 text-light">Контакти</a></li>
            </ul>

            <p class="text-center text-light m-0">© {{ current_year }}, ФОП А. Шевцова
                <img :src="logo" class="logo img-fluid bi mx-2" width="40" height="32" @click="update_page" />
            </p>
        </footer>
    </div>
</template>

<script>
  export default {
    name: 'FooterView',
    props: {
        logo: Object
    },
    data() {
        return {
            current_year: new Date().getFullYear(),
        }
    },
    methods: {
        update_page() {
            return this.$emit('update_page');
        },
    }
  }
</script>
