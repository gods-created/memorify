<template>
    <v-alert color="danger" class="position-fixed w-100" v-show="alert.state" :text="alert.text"></v-alert>
    <div class="d-flex justify-content-center align-items-center h-100 w-100">
      <div class="spinner-border" role="status" style="width: 7rem; height: 7rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="m-0 mx-3 fs-4">Memorify</p>
    </div>
</template>

<script>
  export default {
    name: 'LoaderView',
    props: {
        alert: Object
    }
  }
</script>
