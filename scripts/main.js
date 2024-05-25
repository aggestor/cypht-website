 $(document).ready(function(){
  $(window).scroll(function() {
    let hT = $('#services').offset().top,
        hH = $('#services').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
       $('nav').addClass('apply_bg')
    }else{
      $('nav').removeClass('apply_bg')
    }
 });
   $('.home_install_btn').click(()=>{
    $('.version_picker').slideToggle()
    $('#install_btn_icon').toggleClass('rotate_180')
   })
   $('.home_install_btn').hover(()=>{
    $('.version_picker').slideToggle()
    $('#install_btn_icon').toggleClass('rotate_180')
   })
   async function setMobileSupport($data){
    $data.addClass('mobile_support')
    return $data
   }
   $('#navbarToggler').click(function(){
    if($(this).hasClass('shown')){
        $(this).removeClass('shown')
        setMobileSupport($('#navbarSupportedContent')).then(d=>d.slideDown(300))
        $(this).html(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 fill-slate-50 stroke-slate-50 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      
      `)
      }else{
        $(this).addClass('shown')
        $('#navbarSupportedContent').slideUp(300)
        $(this).html(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 fill-slate-50 stroke-slate-50">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>      
      `)
    }
   })
})