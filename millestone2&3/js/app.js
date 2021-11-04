Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",
  
  data: {
    inputTextMess : "",
    activeOpacity : null,
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
          },
          {
            message: "Hello. how are you?",
            time_mess : "04/11/2021",
            sent: false,
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
          },
          {
            message: "Si",
            time_mess : "04/11/2021",
            sent: false,
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
    chooseChat(chatToActivate, index) {
      this.activeChat = chatToActivate;
      this.activeOpacity = index;
    },
    addNewMess(){
      if(this.activeOpacity===null){
        return;
      }
      if (this.inputTextMess.trim() === "") {
        return;
      }
     this.users_list[this.activeOpacity].messages_list.push({
      message: this.inputTextMess,
      time_mess : "04/11/2021",
      sent: true,
     });
     this.answerOk();
     
    },
    answerOk(){
        setTimeout(() => {
          this.users_list[this.activeOpacity].messages_list.push({
            message: "Ok",
            time_mess : "04/11/2021",
            sent: false,
           });
        }, 1000);
    }
  },
  mounted() {
    const focusToInput = document.getElementById("inputFocusSendMess");
    focusToInput.focus();
  }
});


