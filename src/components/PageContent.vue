<template>
    <v-header>
        <v-app-bar>
            <template v-slot:prepend>
              <img :src="logo" class="logo img-fluid" width="50" @click="update_page" />
            </template>
            
            <v-app-bar-title>Memorify</v-app-bar-title>
            
            <template v-slot:append>
              <span class="mx-2">
                {{ customer.dead_fullname.substring(0, 16) }}
              </span>
            </template>
        </v-app-bar>
    </v-header>
    
    <v-content>
    
        <v-section class="container">
            <div class="d-flex flex-column flex-md-row mx-3 gap-3 align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-center w-100 position-static pt-0 mx-0 rounded-3 shadow overflow-hidden">
                    <video class="img-fluid w-100" controls style="height:300px;max-height:300px;">
                        <source
                            :src="customer.video_source"
                            type="video/mp4" />
                    </video>
              </div>

              <div class="d-flex align-items-center justify-content-center position-static pt-0 mx-0 rounded-3 shadow overflow-hidden">
                <p class="fs-1 m-0 text-center">
                    {{ customer.dead_fullname }}
                </p>
              </div>
            </div>
        </v-section>
        
        <v-section class="container">
            <div class="mx-3">
                <div class="col-lg-10 px-0">
                    {{ biography_state.text }}
                </div>
                <v-btn @click.prevent="edit_biography_state_text" color="primary" class="mt-3">{{ biography_state.button_text }}</v-btn>
            </div>
        </v-section>
        
        <v-section class="container">
            <div class="d-flex flex-column flex-md-row mx-3 gap-3 align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-center w-100 position-static mx-0 rounded-3 shadow overflow-hidden border border-1 p-3">
                    <v-carousel style="height:519px;" hide-delimiters>
                      <v-carousel-item
                        v-for="(img, i) in customer.dead_images_filenames" :key="i"
                        :src="img"
                      ></v-carousel-item>
                    </v-carousel>
              </div>

              <div class="d-flex align-items-center justify-content-center position-static pt-0 mx-0 rounded-3 shadow overflow-hidden bg-light">
                <img
                    :src="customer.qrcode_source" class="img-fluid" />
              </div>
            </div>
        </v-section>
        
    </v-content>
    
    <v-footer>
        <div class="container" id="contacts">
            <footer class="py-3">
                <p class="text-center text-light m-0">© {{ current_year }}, ФОП А. Шевцова
                    <img :src="logo" class="logo img-fluid bi mx-2" width="40" height="32" @click="update_page" />
                </p>
            </footer>
        </div>
    </v-footer>
</template>

<script>
  export default {
    name: 'PageContentView',
    props: {
        customer: Object,
        logo: Object
    },
    data() {
        return {
            current_year: new Date().getFullYear(),
            biography_state: {
                state: true,
                button_text: '',
                text: ''
            }
        }
    },
    created() {
        const customer = this.customer;
        const s3_bucket = `${this.$store.getters.bucket_url}/${customer.user_id}`;
        
        if (customer.page !== 'TRUE') {
            return this.$router.push({name: 'dashboard'})
        }
        
        const dead_images_filenames = customer.dead_images_filenames;
        
        if (typeof dead_images_filenames === 'string') {
            customer.dead_images_filenames = JSON.parse(dead_images_filenames);
        }
        
        if (Array.isArray(customer.dead_images_filenames)) {
            customer.dead_images_filenames = customer.dead_images_filenames.map(item =>
                `${s3_bucket}/${item}`
            );
        }
        
        customer.video_source = `${s3_bucket}/${customer.video_source}`
        customer.qrcode_source = `${s3_bucket}/${customer.qrcode_source}`
        this.edit_biography_state_text();
    },
    methods: {
        update_page() {
            return this.$emit('update_page');
        },
        
        edit_biography_state_text() {
            const biography_state = this.biography_state;
            const state = biography_state.state;
            const dead_biography = this.customer.dead_biography;
            
            if (state) {
                biography_state.button_text = 'Більше ...';
                biography_state.text = `${dead_biography.substring(0, Math.round((dead_biography.length / 2)))} ...`;
            } else {
                biography_state.button_text = 'Менше ...';
                biography_state.text = dead_biography;
            }
            
            biography_state.state = !state;
            return;
        }
    }
  }
</script>
