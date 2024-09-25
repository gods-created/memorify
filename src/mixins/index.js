import axios from 'axios';

export default {
	data() {
		return {
			server_url: this.$store.getters.server_url,
			response_json: {
				'status': 'error',
				'err_description': ''
			},
		}	
	},
	
	methods: {
		update_page() {
			return window.location.reload();	
		},
		
		async create_page_process(user_id) {
			var response_json = { ...this.response_json };
						
			try {
				const headers = {
					'Authorization': `Bearer ${this.$store.getters.admin_key}`,
				};
			
				const request = await axios.get(this.server_url + `/api/admin/customers/create_page/${user_id}`, { headers });
				const data = await request.data;
				response_json = { ...data }; 
				
			} catch (error) {
				response_json.err_description = error.message;
			}
			
			return response_json;
		},
		
		async get_customers_process() {
			var response_json = { ...this.response_json };
						
			try {
				const headers = {
					'Authorization': `Bearer ${this.$store.getters.admin_key}`,
				};
				
				const request = await axios.get(this.server_url + '/api/admin/customers', { headers });
				const {status, err_description, customers} = await request.data;
				
				response_json.status = status;
				if (status === 'error') {
					response_json.err_description = err_description;
				} else {
					response_json.customers = customers;
					
				}
				
			} catch (error) {
				response_json.err_description = error.message;
			}
			
			return response_json;
		},
		
		async get_page_process(user_id) {
			var response_json = { ...this.response_json };
						
			try {
				const request = await axios.get(this.server_url + `/api/customer/${user_id}`);
				const {status, err_description, customer} = await request.data;
				
				response_json.status = status;
				if (status === 'error') {
					response_json.err_description = err_description;
				} else {
					response_json.customer = customer;
					
				}
				
			} catch (error) {
				response_json.err_description = error.message;
			}
			
			return response_json;
		},
		
		async send_form_process(customer, image_for_video, dead_images) {
			var response_json = { ...this.response_json };
			
			const formData = new FormData();
			formData.append('customer', JSON.stringify(customer));
			formData.append('image_for_video', image_for_video);
			
			dead_images.forEach((file, index) => {
				formData.append('dead_images', file);
			});
			
			try {
				const request = await axios.post(this.server_url + '/api/customer', formData);
				const response = await request.data;
				if (response.detail !== undefined) {
					response_json.err_description = response.detail[0].input;
				} else {
					if (response.status === 'error') {
						response_json.err_description = response.err_description;
					} else {
						response_json.status = 'success';
					}
				}
				
			} catch (error) {
				response_json.err_description = error.message;
			}
			
			return response_json;
		},
	}
}

