window.onscroll = () => {
  toggleTopButton();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTopButton() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    document.querySelector(".back-to-top").classList.remove("d-none");
  } else {
    document.querySelector(".back-to-top").classList.add("d-none");
  }
}