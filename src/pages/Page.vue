<template>
    <LoaderView :alert="alert" v-if="loader" />
    <PageContentView @update_page="update_page" :logo="logo" :customer="customer" v-if="!loader" />
</template>

<script>
  import Logo from '@/assets/logo.png';
  import LoaderView from '@/components/layouts/Loader.vue';
  import PageContentView from '@/components/PageContent.vue'
  import get_page_process from '@/mixins/index.js';
  import update_page from '@/mixins/index.js';
  
  export default {
    name: 'PageView',
    props: {
        id: String
    },
    mixins: [
        get_page_process,
        update_page
    ],
    data() {
        return {
            loader: true,
            logo: Logo,
            alert: {
                state: false,
                text: ''
            },
            customer: {}
        }
    },
    async created() {
        const {status, err_description, customer} = await this.get_page_process(this.id);
        if (status == 'error') {
            this.edit_alert_state(err_description);
        } else {
           this.customer = customer;
           this.loader = false;
        }
    },
    components: {
        LoaderView,
        PageContentView,
    },
    methods: {
        edit_alert_state(text) {
            this.alert.text = text;
            this.alert.state = !this.alert.state;
            return;
        }
    }
  }
</script>
