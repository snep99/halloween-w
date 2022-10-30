
let scrollpos = window.scrollY
  const scrollUp = document.getElementById("scroll-up")
  const scroll_height = header.offsetHeight

  const add_class_on_scroll = () => scrollUp.classList.add("show-scroll")
  const remove_class_on_scroll = () => scrollUp.classList.remove("show-scroll")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos > 370) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })