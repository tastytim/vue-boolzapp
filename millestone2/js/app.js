Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",
  
  data: {
    activeOpacity : null,
    activeChat: {
      name: "",
      timesent : "",
      avatar : "",
      message_list : []
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
      },
      {
        name: "Luisa",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_6.jpg",
      },
      {
        name: "Tim",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_4.jpg",
      },
      {
        name: "Mario",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_5.jpg",
      },
      {
        name: "Marco",
        timesent: "04/10/2021 09:00:00",
        avatar: "img/avatar_8.jpg",
      },
    ],
  },
  methods: {
    chooseChat(chatToActivate, index) {
      this.activeChat = chatToActivate;
      this.activeOpacity = index;
    },
  },
});

console.dir(vueApp);
