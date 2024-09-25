<template>
    <div class="container admin-panel h-100">
        <v-alert v-show="alert.show" :color="alert.color" :text="alert.text" style="max-height:56px;"></v-alert>
        <v-header>
            <div class="px-4 py-5 text-center bg-light">
                <img class="d-block mx-auto mb-4 img-fluid" :src="logo" alt="logo" width="72" height="57">
                <h1 class="display-5 fw-bold text-body-emphasis">Адмін панель Memorify</h1>
                <div class="col-lg-6 mx-auto text-dark">
                  <p class="lead mb-4">Використовуй цю панель для створення персональних сторінок по замовленню.</p>
                  
                  <div class="form">
                     <v-text-field
                        class="mb-2"
                        type="text"
                        v-model="form.user_id.value"
                        :rules="form.user_id.rules"
                        label="ID замовника"
                      ></v-text-field>
                      
                      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <v-btn :loading="form.button.state" :disabled="form.button.state" @click.prevent="create_page">
                            Створити
                        </v-btn>
                      </div>
                  </div>
                </div>
            </div>
        </v-header>
        
        <div class="flex-grow-1 table-block">
            <div class="text-center">
                <v-table>
                    <thead>
                      <tr>
                        <th class="text-center">Айді замовника</th>
                        <th class="text-center">Наявність робочої сторінки</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="customer in paginatedCustomers" :key="customer.user_id">
                        <td @click.prevent="copy_to_form(customer.user_id, customer.page)" style="cursor:pointer;">
                            <span>
                                <v-tooltip
                                    activator="parent"
                                    location="start"
                                >Скопіювати у форму</v-tooltip>
                                {{ customer.user_id }}
                            </span>
                        </td>
                        <td>{{ customer.page ? customer.page : 'FALSE' }}</td>
                      </tr>
                    </tbody>
                </v-table>
            </div>
        </div>
        
        <footer class="footer bg-dark">
            <v-pagination
              v-model="page"
              :length="Math.ceil(customers.length / 3)"
              next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left"
            ></v-pagination>
        </footer>
    </div>
</template>

<script>
import Logo from '@/assets/logo.png';
import get_customers_process from '@/mixins/index.js';
import create_page_process from '@/mixins/index.js';

export default {
    name: 'AdminView',
    props: {
        admin_key: String
    },
    mixins: [
        get_customers_process,
        create_page_process
    ],
    data() {
        return {
            customers: [],
            page: 1,
            logo: Logo,
            form: {
                button: {
                    state: false,
                },
                user_id: {
                    value: '',
                    rules: [
                        v => !!v || 'Поле не повинно бути пустим!'
                    ]
                },
                page_status: 'FALSE'
            },
            alert: {
                show: false,
                color: '',
                text: '',
            },
        }
    },
    computed: {
        paginatedCustomers() {
            const start = (this.page - 1) * 3;
            return this.customers.slice(start, start + 3);
        }
    },
    async created() {
        const store_key = this.$store.getters.admin_key;
        if (store_key !== this.admin_key) {
            this.$router.push({ name: 'dashboard' });
        }
        
        await this.get_customers();
    },
    methods: {
        async get_customers() {
            window.scrollTo(0, 0)
            
            const alert = this.alert;
            const { status, err_description, customers } = await this.get_customers_process();
            if (status === 'error') {
                alert.text = err_description;
                alert.show = true;
                alert.color = 'danger'
            } else {
                this.customers = customers;
            }
        },
        
        async create_page() {
            window.scrollTo(0, 0)
            
            const alert = this.alert;
            alert.show = false;
            
            const { button, user_id, page_status } = this.form;
            const user_id_value = user_id.value;
            
            if (!user_id_value.trim()) {
                return;
            }
            
            if (page_status === 'TRUE') {
                alert.text = 'Сторінка вже створена!';
                alert.show = true;
                alert.color = 'info'
                return;
            }
            
            var alert_color = null;
            try {
                button.state = true;
                const { status, err_description, message } = await this.create_page_process(user_id_value);
                const alert_message = status === 'error' ? err_description : message;
                alert_color = status === 'error' ? 'danger' : 'success';
                
                alert.text = alert_message;
            } catch (error) {
                alert_color = 'danger';
                alert.text = error.message;
            } finally {
                alert.show = true;
                alert.color = alert_color;
                button.state = false;
                
                if (alert_color === 'success') {
                    await this.get_customers();
                }
            }
        },
        
        copy_to_form(user_id, page_status) {
            const form = this.form;
            
            form.user_id.value = user_id;
            form.page_status = page_status;
            return;
        }
    }
}
</script>
