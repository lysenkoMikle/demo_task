// ------IP FIND----------
{
	fetch("https://ipapi.co/json/")
		.then((d) => d.json())
		.then((d) => (document.querySelector("#ip").innerHTML = d.ip));
}
// --------WARNING MASSAGE---------
{
	const warningClose = document.querySelector(".warning_close");
	const warning = document.querySelector(".warning");

	warningClose.addEventListener("click", () => {
		warning.classList.add("close");
	});
}
// ------BUDGER MENU-----------
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
