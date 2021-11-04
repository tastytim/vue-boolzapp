Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",
  data: {
    users_list: [
      {
        name: "Michele",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_1.jpg",
        messages_list: [
            {
                message : "Hello !",
                sent : true
            },
            {
                message : "Hello. how are you?",
                sent : false
            }
        ]
      },
      {
        name: "Fabio",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_2.jpg"
      },
      {
        name: "Samuele",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_3.jpg"
      },
      {
        name: "Luisa",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_6.jpg"
      },
      {
        name: "Tim",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_4.jpg"
      },
      {
        name: "Mario",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_5.jpg"
      },
      {
        name: "Marco",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_8.jpg"
      },
      
    ],
  },
});

console.dir(vueApp);
