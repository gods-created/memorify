<template>
    <div id="modal" class="modal d-block" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
           <form class="text-dark">
            <v-alert
              v-show="alert.state"
              class="m-2"
              :color="alert.color"
              :text="alert.text"
            ></v-alert>

            <v-text-field
              class="mb-2"
              type="text"
              v-model="form.user_fullname.value"
              :rules="form.user_fullname.rules"
              label="Ваш ПІБ"
              required
            ></v-text-field>

            <v-text-field
              class="mb-2"
              type="email"
              v-model="form.user_email.value"
              :rules="form.user_email.rules"
              label="Ваш EMAIL"
              required
            ></v-text-field>
            
            <v-text-field
              class="mb-2"
              type="phone"
              v-model="form.user_phone.value"
              :rules="form.user_phone.rules"
              label="Ваш НОМЕР ТЕЛЕФОНУ"
              @input="edit_phone_input"
              required
            ></v-text-field>
            
            <v-text-field
              class="mb-2"
              type="text"
              v-model="form.dead_fullname.value"
              :rules="form.dead_fullname.rules"
              label="Повне ПІБ померлого"
              required
            ></v-text-field>
            
            <v-select
              class="mb-2"
              v-model="form.dead_gender.value"
              :items="form.dead_gender.values"
              label="Гендер померлого для підбіру голоса"
              required
            ></v-select>
            
            <v-textarea
              class="mb-2"
              v-model="form.text_for_video.value"
              :rules="form.text_for_video.rules"
              label="Текст для відео, що промовлятиме померлий"
              required
            >
            </v-textarea>
            
            <v-textarea
              class="mb-2"
              v-model="form.dead_biography.value"
              :rules="form.dead_biography.rules"
              label="Повна біографія померлого"
              required
            >
            </v-textarea>
            
            <v-file-input
              v-model="form.image_for_video.files"
              label="Зображення померлого, яке буде оживлено"
            ></v-file-input>
            
            <v-file-input
              label="Зображення померлого із життя"
              v-model="form.dead_images.files"
              multiple
            ></v-file-input>
            
           </form>
          </div>
          <div class="modal-footer">
            <v-btn color="#0ed754" :loading="button.loading" :disabled="button.disabled" @click.prevent="send_form">Відправити</v-btn>
            <v-btn color="#fa2f2f" :disabled="button.disabled" @click="edit_modal_state">Закрити</v-btn>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import validator from 'validator';
  import send_form_process from '@/mixins/index.js';
  
  export default {
    name: 'ModalWindowVue',
    mixins: [
        send_form_process
    ],
    data() {
        return {
            alert: {
              state: false,
              color: 'danger',
              text: ''
            },
            
            button: {
              loading: false,
              disabled: false
            },
            
            form: {
              user_fullname: {
                value: '',
                rules: [
                  v => !!v || 'Поле не повинно бути пустим!',
                ],
              },
              user_email: {
                value: '',
                rules: [
                  v => validator.isEmail(v) || 'Електронна адреса невалідна!',
                ],
              },
              user_phone: {
                value: '+380',
                rules: [
                  v => !!v || 'Поле не повинно бути пустим!',
                  v => v.replaceAll(' ', '').length == 13 || 'Номер телефону невалідний!'
                ],
              },
              dead_fullname: {
                value: '',
                rules: [
                  v => !!v || 'Поле не повинно бути пустим!',
                ],
              },
              dead_gender: {
                value: 'чоловік',
                values: ['чоловік', 'жінка']
              },
              
              text_for_video: {
                value: '',
                rules: [
                  v => !!v || 'Поле не повинно бути пустим!',
                  v => v.length < 450 || 'Максимальна кількість символів 450!',
                ],
              },
              
              dead_biography: {
                value: '',
                rules: [
                  v => !!v || 'Поле не повинно бути пустим!',
                ],
              },
              
              image_for_video: {
                files: []
              },
              dead_images: {
                files: []
              },
            },
        }
    },
    methods: {
        edit_modal_state() {
            return this.$emit('edit_modal_state');
        },
        
        edit_phone_input() {
            const phone = this.form.user_phone.value;
            
            if (phone.length < 4) {
                this.form.user_phone.value = '+380';
            }   else {
                this.form.user_phone.value = '+380' + phone.slice(4).replace(/\D/g, '');
            }
        },
        
        async send_form() {
            const alert_state = this.alert;
            const button_state = this.button;
            
            alert_state.state = false;
            button_state.disabled = true;
            button_state.loading = true;
            
            let customer = {};
            const form = this.form;
            const image_for_video = form.image_for_video.files;
            const dead_images = form.dead_images.files;
            
            customer.user_fullname = form.user_fullname.value;
            customer.user_email = form.user_email.value;
            customer.user_phone = form.user_phone.value;
            customer.dead_fullname = form.dead_fullname.value;
            customer.dead_gender = form.dead_gender.value;
            customer.text_for_video = form.text_for_video.value;
            customer.dead_biography = form.dead_biography.value;
            
            let { status, err_description } = await this.send_form_process(customer, image_for_video, dead_images);
            err_description.includes('422') ? err_description = 'Некоректно заповнена форма!' : false;
            
            status === 'success' ? alert_state.color = 'success' : alert_state.color = 'danger';
            status === 'success' ? alert_state.text = 'Форма успішно відправлена менеджеру. Чекайте дзвінка в найближчий час!' : alert_state.text = err_description;
            alert_state.state = true;
            
            button_state.disabled = false;
            button_state.loading = false;

            document.getElementById('modal').scrollTo(0, 0)
            return;
        },
    }
  }
</script>
