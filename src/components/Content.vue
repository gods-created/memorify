<template>
    <div id="aboutUs" class="container px-2 pb-2">
        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 pt-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-light">Ми пропонуємо Вам зберегти вічну пам'ять про Ваших рідних та зробити її доступною назавжди!</h2>
            <p class="text-light">Завдяки нашій платформі, Ви зможете не тільки зберегти важливі моменти, а й візуалізувати їх через AI-технології, створюючи живі спогади, які будуть поруч у будь-який час.</p>
            <v-btn color="light" class="text-dark" @click="edit_modal_state">Надіслати заявку</v-btn>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-light bg-gradient fs-4 rounded-3 border-bottom border-light">
                  <svg class="bi" width="1em" height="1em">
                    
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-light">Ексклюзивний сервіс, якому немає рівних на ринку.</h4>
                <p class="text-light">Наш сервіс вирізняється своєю унікальністю та інноваційністю, пропонуючи рішення, які ви не знайдете більше ніде.</p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-light bg-gradient fs-4 rounded-3 border-bottom border-light">
                  <svg class="bi" width="1em" height="1em">
                    
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-light">Легкий доступ до веб-сторінки через сканування QR-коду.</h4>
                <p class="text-light">Отримайте миттєвий доступ до контенту, просто відсканувавши QR-код. Це зручно і швидко, без необхідності вводити адреси вручну.</p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-light bg-gradient fs-4 rounded-3 border-bottom border-light">
                  <svg class="bi" width="1em" height="1em">
                    
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-light">Можливість розміщення в будь-якому місці.</h4>
                <p class="text-light">Наш сервіс безкоштовно виготує для вас 3 наліпки с QR-кодом для їх розміщення в будь-якому місці, що забезпечить максимальну зручність у доступі.</p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-light bg-gradient fs-4 rounded-3 border-bottom border-light">
                  <svg class="bi" width="1em" height="1em">
                    
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-light">Індивідуальна участь.</h4>
                <p class="text-light">Bи маєте можливість особисто брати участь у створенні сторінкі.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <div class="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <video controls style="height:400px; max-height:400px;">
                                <source
                                    src="https://memorify-2024.s3.amazonaws.com/a61542a6-c36e-4df7-92ae-47cb5f8a8dc8/video.mp4"
                                    type="video/mp4" />
                            </video>
                        </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <video controls style="height:400px; max-height:400px;">
                                <source
                                    src="https://memorify-2024.s3.amazonaws.com/presentation.mp4"
                                    type="video/mp4" />
                            </video>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="aboutService" class="container px-2 pb-2">
        <div class="aboutService-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal text-light">Що включають наші послуги?</h1>
        </div>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Розробка сторінки</h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mt-3">
                  <li>Змонтоване відео за допомогою ШІ</li>
                  <li>Деталізований життєпис</li>
                  <li>Добірка фото з важливих моментів життя</li>
                  <li>QR-код для доступу</li>
                </ul>
                <v-btn color="dark" class="w-100 text-light text-none" @click="edit_modal_state">Надіслати заявку</v-btn>
              </div>
            </div>
          </div>
          
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Оживлення фотографії</h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mt-3">
                  <li>Фотографія і текст для промови від вас</li>
                  <li>Вибір ідеального голосу</li>
                  <li>Автоматизований монтаж за допомогою ШІ</li>
                  <li>Готове відео на 45 секунд</li>
                </ul>
                <v-btn color="dark" class="w-100 text-light text-none" @click="edit_modal_state">Надіслати заявку</v-btn>
              </div>
            </div>
          </div>
          
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Формування доступу</h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mt-3">
                  <li>Зберігання відомостей у базі даніх</li>
                  <li>Надання відкритого доступу в мережі</li>
                  <li>Генерація QR-коду за URL</li>
                  <li>Виготовлення наліпок для вас</li>
                </ul>
                <v-btn color="dark" class="w-100 text-light text-none" @click="edit_modal_state">Надіслати заявку</v-btn>
              </div>
            </div>
          </div>
        </div>
        
        <div class="p-4 p-md-3 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div class="col-lg-12 px-0">
              <h1 class="display-4 text-center">Де можна розмістити qr код?</h1>
              <div class="my-3">
                <div class="row g-4 row-cols-1">
                  <div class="feature col d-flex justify-start">
                    <img class="img-fluid" width="800px" :src="why_qr_1" />
                  </div>
                  <div class="feature col d-flex justify-end">
                    <img class="img-fluid" width="800px" :src="why_qr_2" />
                  </div>
                  <div class="feature col d-flex justify-start">
                    <img class="img-fluid" width="800px" :src="why_qr_3" />
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    
    <div id="price">
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-4 shadow">
                  <div class="modal-body p-5 text-dark">
                    <h3 class="fw-bold mb-0 text-center">Простий прайс для кожного</h3>

                    <ul class="d-grid gap-4 my-5 list-unstyled small">
                      <li class="d-flex gap-4">
                        <v-icon color="warning" icon="mdi-account" size="large"></v-icon>
                        <div>
                          <h5 class="mb-0">Для всіх одні й ті ж можливості</h5>
                        </div>
                      </li>
                      <li class="d-flex gap-4">
                        <v-icon color="warning" icon="mdi-alert-circle" size="large"></v-icon>
                        <div>
                          <h5 class="mb-0">Неймовірна увага до побажань кожного</h5>
                        </div>
                      </li>
                      <li class="d-flex gap-4">
                        <v-icon color="warning" icon="mdi-check-circle" size="large" ></v-icon>
                        <div>
                          <h5 class="mb-0">Підтримка проєктів на постійній основі 24/7</h5>
                        </div>
                      </li>
                    </ul>
                    <hr />
                    
                    <div class="d-flex align-center justify-end">
                        <p class="m-0 fs-3">1000 <span class=fw-bold>₴</span></p>
                    </div>
                    
                    <v-btn color="dark" size="x-large" class="w-100 text-light mt-5" @click="edit_modal_state">Надіслати заявку</v-btn>
                  </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="howWork" class="container py-3 my-3">
        <div class="mb-3 d-flex align-center justify-center">
            <h2>Етапи співпраці</h2>
        </div>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="48%" y="50%" fill="#eceeef" dy=".3em" dx="-.7em">Крок 1</text></svg>
                <div class="card-body">
                  <p class="card-text">Тисніть кнопку "Надіслати заявку", заповнюйте форму з усіма необхідними полями і чекайте дзвінка від менеджера.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="48%" y="50%" fill="#eceeef" dy=".3em" dx="-.7em">Крок 2</text></svg>
                <div class="card-body">
                  <p class="card-text">Після погодження деталей з менеджером, розробники протягом однієї добі створюють сторінку з тими даними, що ви відправили.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="48%" y="50%" fill="#eceeef" dy=".3em" dx="-.7em">Крок 3</text></svg>
                <div class="card-body">
                  <p class="card-text">Після, створена сторінка отримує свою дійсну URL-адресу і QR-код до неї для швидкого доступу до ресурсу.</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="48%" y="50%" fill="#eceeef" dy=".3em" dx="-.7em">Крок 4</text></svg>
                <div class="card-body">
                  <p class="card-text">Ви отримуєте дзвінок від менеджера, який дає вам URL сторінки для перегляду. На цьому етапі ви можете внести коригування.</p>
                </div>
              </div>
            </div>
            
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="48%" y="50%" fill="#eceeef" dy=".3em" dx="-.7em">Крок 5</text></svg>
                <div class="card-body">
                  <p class="card-text">Далі ви зазначаєте якого розміру вам потрібні наліпки з QR. Ми готуєм їх і відправляємо до вас. Ціна на наліпки і доставку дорівнює <span class="fw-bold">0</span>.</p>
                </div>
              </div>
            </div>
            
           <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="48%" y="50%" fill="#eceeef" dy=".3em" dx="-.7em">Крок 6</text></svg>
                <div class="card-body">
                  <p class="card-text">Ми підтримуємо існування сторінки і будемо раді вашим дзвінкам, і зверненням, якщо щось піде не так.</p>
                </div>
              </div>
            </div>
      </div>
    </div>
    
    <div class="container" id="contacts">
        <div class="row gap-3 border rounded p-3">
            <div class="col-12 d-flex align-center justify-center">
              <div class="row g-0 border-start border-end overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static text-center">
                  <p class="mb-2">
                    <span class="fw-bold">Телефон: </span><br />
                    <span>+380508871099</span>
                  </p>
                  <p class="mb-2">
                    <span class="fw-bold">Пошта: </span><br />
                    <span>memorifyua@gmail.com</span>
                  </p>
                  <p class="mb-2">
                    <span class="fw-bold">Адреса: </span><br />
                    <span>м. Дніпро</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 w-100">
              <div class="row g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                <div class="col d-flex flex-column position-static">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338660.7581797777!2d34.37654443603503!3d48.46061289627564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe303fd08468f%3A0xa1cf3d5f2c11aba!2z0JTQvdC10L_RgCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1727367577173!5m2!1sru!2sua" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
  import WHY_QR_1 from '@/assets/why_qr/1.png';
  import WHY_QR_2 from '@/assets/why_qr/2.png';
  import WHY_QR_3 from '@/assets/why_qr/3.png';
  
  export default {
    name: 'ContentView',
    data() {
        return {
            why_qr_1: WHY_QR_1,
            why_qr_2: WHY_QR_2,
            why_qr_3: WHY_QR_3,
        }
    },
    methods: {
        edit_modal_state() {
            return this.$emit('edit_modal_state');
        },
    }
  }
</script>
