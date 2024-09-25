import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      server_url: 'https://d1z32plj7ieyo0.cloudfront.net',
      bucket_url: 'https://memorify-2024.s3.amazonaws.com',
      admin_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }
  },
  getters: { 
	  server_url(state) {
	  	return state.server_url;
	  },
	  
	  bucket_url(state) {
	  	return state.bucket_url;
	  },
	  
	  admin_key(state) {
	  	return state.admin_key;
	  },
  }
})

export default store;