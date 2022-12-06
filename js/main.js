// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista.

const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Email's list",
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