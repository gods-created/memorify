<template>
    <div class="position-fixed bottom-0 end-0 mb-3 me-3 border border-light">
      <v-btn class="py-2" @click="up">
        <v-icon color="light" icon="mdi-arrow-up" size="large"></v-icon>
      </v-btn>
    </div>
</template>

<script>
  export default {
    name: 'UpButtonView',
    methods: {
        up() {
            return window.scrollTo(0, 0);
        },
    }
  }
</script>
