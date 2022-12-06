const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Email's list",
        emails: [],
      }
    },

  methods:{
    
  },

  mounted(){
    for(i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result)=>{
        console.log(result.data.response);
        this.emails.push(result.data.response);
        });
      }
    }
}).mount('#myApp')