$(document).ready(function() {
  $(function() {
    $('.about-us__slider-list').slick({
      nextArrow: '<button class="about-us__slider-btn about-us__slider-btn--next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
      prevArrow: '<button class="about-us__slider-btn about-us__slider-btn--prev"><svg class="about-us__slider-arrow" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  });

  $('.address__tab').on('click', function(e) {
    e.preventDefault();
    $('.address__tab').removeClass('address__tab--active');
    $('.address__item-wrapper').removeClass('address__item-wrapper--active');

    $(this).addClass('address__tab--active');
    $($(this).attr('href')).addClass('address__item-wrapper--active');
  });

  $('.menu__tab').on('click', function(e) {
    e.preventDefault();
    $('.menu__tab').removeClass('menu__tab--active');
    $('.menu__box').removeClass('menu__box--active');

    $(this).addClass('menu__tab--active');
    $($(this).attr('href')).addClass('menu__box--active');
  });
  
  $('.header__order-btn').on('click', function() {
    $('.popup').addClass('popup--active');
  });

  $('.menu__order-btn').on('click', function() {
    $('.popup').addClass('popup--active');
  });

  $('.popup__area').on('click', function() {
    $('.popup').removeClass('popup--active');
  });

  $('.popup__close').on('click', function() {
    $('.popup').removeClass('popup--active');
  });

  $('#fullpage').fullpage({
    bigSectionsDestination: 'top',
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: false,
    sectionSelector: '.page-section',
    responsiveWidth: 768,
    normalScrollElements: '.address__tabs-wrapper, .menu__tabs-wrapper, .address__list, .about-us__text-inner, .address__map, #map, .popup__content',
    fixedElements: '.header, .popup, .fixed-crossbrowser-background',
    menu: '#header-navigation',
    anchors: ['top', 'about-us', 'menu', 'discount', 'address', 'connection'],
    afterLoad: function(origin, destination, direction){
      var loadedSection = this;
      var mainMenu = document.querySelector('.main-menu__list');
      var menuButton = document.querySelector('.main-menu__btn');
      var orderButton = document.querySelector('.header__order-btn');
      var orderTel = document.querySelector('.header__order-tel');

      if(destination.anchor == 'address'){
        $('.address__mode').addClass('wow animate__animated animate__fadeInRight')
      }
      if(destination.anchor == 'menu'){
        $('.menu__aside').addClass('wow animate__animated animate__fadeInRight')
      }
      if(destination.anchor == 'discount'){
        $('.discount__item').addClass('wow animate__animated animate__fadeInRight');
        $('.discount__item--1').css('animation-delay', '.2s');
        $('.discount__item--2').css('animation-delay', '1.2s');
        $('.discount__item--3').css('animation-delay', '2s');
        $('.discount__item--4').css('animation-delay', '2.7s');
      }

      if(destination.anchor != 'top') {
        mainMenu.classList.add('main-menu__list--inner');
        orderButton.classList.add('header__order-btn--inner');
        orderTel.classList.add('header__order-tel--inner');
        menuButton.classList.add('main-menu__btn--inner');
        
      } else {
        mainMenu.classList.remove('main-menu__list--inner');
        orderButton.classList.remove('header__order-btn--inner');
        orderTel.classList.remove('header__order-tel--inner');
        menuButton.classList.remove('main-menu__btn--inner');
      }
    },
  });

  $('.popup__order-cakelist').styler();

  
  $('.main-menu__btn').on('click', function() {
    $('.main-menu__btn').toggleClass('main-menu__btn--active');
    $('.main-menu').toggleClass('main-menu--active');
    $('.main-menu__list').toggleClass('main-menu__list--active');
  });

  $('.main-menu__item-link').on('click', function() {
    $('.main-menu__btn').removeClass('main-menu__btn--active');
    $('.main-menu').removeClass('main-menu--active');
    $('.main-menu__list').removeClass('main-menu__list--active');
  });

  $('.header__logo').on('click', function() {
    $('.main-menu__btn').removeClass('main-menu__btn--active');
    $('.main-menu').removeClass('main-menu--active');
    $('.main-menu__list').removeClass('main-menu__list--active');
  });

  $(function() {
    if($('.page-section--inner')) {
      $('.header__order').addClass('header__order--notactive');
    }
  });
});
