const navbar = document.querySelector(".nav-links")
const navbarOffsetTop = navbar.offsetTop;
const items = document.querySelectorAll('.item');
const sections = document.querySelectorAll(".section")

const home = document.querySelector('.home');
const homeOffsetTop = home.offsetTop;

const aboutMe = document.querySelector('.about-me');
const aboutMeoffsetTop = aboutMe.offsetTop;

const portofolio = document.querySelector('.portofolio');
const portofolioOffsetTop = portofolio.offsetTop;

const contact = document.querySelector('.contact');
const contactOffsetTop = contact.offsetTop;


window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }


  sections.forEach((section, i)=>{
  	if (window.pageYOffset >= section.offsetTop -10) {
  		items.forEach((item)=>{
  			item.classList.remove("change");
  		})
	  	items[i].classList.add("change");
  	}


  })


}
