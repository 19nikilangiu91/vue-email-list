// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Email's list",
        emailsNeeded: 10,
        emails: [],
      }
    },

  methods:{
    emailRandom(){
      for(i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result)=>{
        console.log(result.data.response);
        this.emails.push(result.data.response);
        });
      }
    }
  },
  mounted(){
    this.emailRandom();
  }

}).mount('#myApp')