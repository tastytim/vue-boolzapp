Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",
  data: {
    users_list: [
      {
        name: "Michele",
        timesent: "04/10/2021 09:00:00",
        avatar : "img/avatar_1.jpg"
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
        avatar : "img/avatar_4.jpg"
      },
      
    ],
  },
});

console.dir(vueApp);
