Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",
  data: {
    inputSearchText : "",
    inputTextMess : "",
    activeUser : null,
    activeChat: {
      name: "",
      timesent : "",
      avatar : "",
      messages_list : []
    },
    users_list: [
      {
        name: "Michele",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_1.jpg",
        messages_list: [
          {
            message: "Hello !",
            time_mess : "04/11/2021",
            sent: true,
            visible : false,
          },
          {
            message: "Hello. how are you?",
            time_mess : "04/11/2021",
            sent: false,
            visible : false,
          },
        ],
      },
      {
        name: "Fabio",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_2.jpg",
        messages_list: [
          {
            message: "Ciao , Hai portato il cane fuori !",
            time_mess : "04/11/2021",
            sent: true,
            visible : false,
          },
          {
            message: "Si",
            time_mess : "04/11/2021",
            sent: false,
            visible : false,
          },
        ],
      },
      {
        name: "Samuele",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_3.jpg",
        messages_list: []
      },
      {
        name: "Luisa",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_6.jpg",
        messages_list: []
      },
      {
        name: "Tim",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_4.jpg",
        messages_list: []
      },
      {
        name: "Mario",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_5.jpg",
        messages_list: []
        
      },
      {
        name: "Marco",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_8.jpg",
        messages_list: []
      },
    ],
  },
  methods: {
    // FINESTRA DI CHAT MESSAGGI VUOTA ALL'INIZIO
    chooseChat(chatToActivate, index) {
      this.activeChat = chatToActivate;
      this.activeUser = index;
      this.inputTextMess ="";
    },

    // AGGIUNGO MESSAGGIO
    addNewMess(){
      if(this.activeUser===null){
        return;
      }
      if (this.inputTextMess.trim() === "") {
        return;
      }
     this.users_list[this.activeUser].messages_list.push({
       
      message: this.inputTextMess,
      time_mess : this.getNow(),
      sent: true,
     });
     this.answerOk();
     this.activeChat.timesent = this.getLastTime(this.activeChat.messages_list);
     this.inputTextMess = "";
    },
    // RISPOSTA AUTOMATICA
    answerOk(){
        setTimeout(() => {
          this.users_list[this.activeUser].messages_list.push({
            message: "Ok",
            time_mess : this.getNow(),
            sent: false,
           });
        }, 1000);
    },
    // ORARIO
    // https://stackoverflow.com/questions/57249466/getting-current-time-and-date-in-vue-js
    getNow() {
      const today = new Date();
      const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      return dateTime;
    },

    // getNow() {
    //   return day.js().format("DD/MM/YYYY HH:mm:ss");
    // },
// TIRO FUORI ULTIMO MESSAGGIO
    getLastMess(messages){
      if(messages.length === 0){
        return "";
      }else{
        return messages[messages.length-1].message;
      }
    },
    // TIRO FUORI ULTIMO ORARIO
    getLastTime(messages){
      if(messages.length === 0){
        return "";
      }else{
        console.log(messages[messages.length-1].timesent)
        return messages[messages.length-1].time_mess;
      }
    },
    // IL MOUSE SOPRA ATTIVA ARROW
    overmouse(){
      this.overMouseActive = !this.overMouseActive;
    },
    // CLICK MI APRE IL WINDOW
    showWindow(i){
      this.activeChat.messages_list[i].visible = !this.activeChat.messages_list[i].visible;
    },
    // ELIMINO MESSAGGIO
    deletThisMessage(i){
      this.activeChat.messages_list.splice(i, 1);
    }
  },
  // CI SONO SOLO I FOCUS INPUT
  mounted() {
    const focusToInput = document.getElementById("inputFocusSendMess");
    focusToInput.focus();
    const focusToSearchInput = document.getElementById("search-input");
    focusToSearchInput.focus();
  },
  // RICEVO ARRAY FILTRATO CON I NOMI DI UTENTI
  // https://stackoverflow.com/questions/52558770/vuejs-search-filter
  computed: {
    filteredList() {
      return this.users_list.filter(user => {
        return user.name.toLowerCase().includes(this.inputSearchText.toLowerCase().trim())
      })
    }
  }
});


