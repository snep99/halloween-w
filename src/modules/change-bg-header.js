let scrollpos = window.scrollY
  const header = document.getElementById("header")
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add("bg-header")
  const remove_class_on_scroll = () => header.classList.remove("bg-header")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos > 60) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })