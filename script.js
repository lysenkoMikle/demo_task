{
  fetch("https://ipapi.co/json/")
    .then((d) => d.json())
    .then((d) => (document.querySelector("#ip").innerHTML = d.ip));
}

{
  const warningClose = document.querySelector(".warning_close");
  const warning = document.querySelector(".warning");

  warningClose.addEventListener("click", () => {
    warning.classList.add("close");
  });
}

{
  let burger = function () {
    const burgerBtn = document.querySelector(".nav__burger");
    const burgerMenu = document.querySelector(".nav_menu");
    const body = document.querySelector("body");

    burgerBtn.addEventListener("click", function () {
      if (!burgerBtn.classList.contains("active_Burger")) {
        burgerBtn.classList.add("active_Burger");
        burgerMenu.classList.add("active_Burger");
        body.classList.add("notOverflow");
      } else {
        burgerBtn.classList.remove("active_Burger");
        burgerMenu.classList.remove("active_Burger");
        body.classList.remove("notOverflow");
      }
    });
  };

  burger();
}

{
  //   const signUp = document.querySelectorAll(".sign_up_items");
  //   const btn = document.querySelectorAll(".subscr_btn");
  //   signUp.forEach(function (item) {
  //     item.addEventListener("click", function () {
  //       let currentItem = item;
  //       let currentBtn = this.btn;
  //       if (!currentItem.classList.contains("active")) {
  //         signUp.forEach(function (item) {
  //           item.classList.remove("active");
  //         });
  //         btn.forEach(function (item) {
  //           item.classList.remove("btn_secondary");
  //         });
  //         currentItem.classList.add("active");
  //         btn.forEach(function (currentBtn) {
  //           currentBtn.classList.add("active");
  //         });
  //         // btn.classList.add("active");
  //       }
  //     });
  //   });
}
