$(document).ready(function(){
    let burger = $('.burger')
    let menu_wrapper = $('.menu_wrapper')
    let body = $('body')
    let body_cont = $('.body_container')
    let menu_link = $('.menu_link')
    burger.click(function(){
        menu_wrapper.toggleClass('menu_open')
        burger.toggleClass('transform_rotate')
        body.toggleClass('overflow_hidden')
        body_cont.toggleClass('d-none')
    
    })
    menu_link.click(function(){
        menu_wrapper.toggleClass('menu_open')
        burger.toggleClass('transform_rotate')
        body.toggleClass('overflow_hidden')
        body_cont.toggleClass('d-none')
    
    })
    

let infotmation = $('.infotmation')
let info_wrapper = $('.info_wrapper')
let plus_icon = $('.plus_icon')
infotmation.click(function(){
    info_wrapper.toggleClass('links_show')
    plus_icon.toggleClass('rotate_close')
})

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.35] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animation');
      
      for (let elm of elements) {
        observer.observe(elm);
      }


      $('.slider').slick({
        infinite: true,
        arrows:false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
});

