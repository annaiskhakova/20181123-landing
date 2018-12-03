
const openMenu = document.querySelector ("#openMenu");
const closeMenu = document.querySelector ("#closeMenu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

openMenu.addEventListener("click", function(e) {
    e.preventDefault();

        nav.style.display = "flex";
        closeMenu.style.display = "flex";
        openMenu.style.display = "none";
      
 
});

closeMenu.addEventListener("click", function(e) {
  e.preventDefault();
      nav.style.display = "none";
      closeMenu.style.display = "none";
      openMenu.style.display = "flex";
});




///Аккордеон для team

const teamAcco = document.querySelector (".team-acco");

createAccordTeam(teamAcco);

function createAccordTeam(element) {
    const teamTarget = element.querySelectorAll(".team-acco__trigger");
    let activeContent;
    let activeHead;
   

    for (let i = 0; i < teamTarget.length; i++ ) {
        const teamHead = teamTarget[i];
      

        teamHead.addEventListener ('click', function() {
           
            if (activeContent) {
                activeContent.classList.remove('team-acco__content-active');  
            }      
           
            activeContent = teamHead.nextElementSibling;
            activeContent.classList.add('team-acco__content-active');
            
            if(activeHead) {
                activeHead.classList.remove('team-acco__trigger-active');  
            }
            activeHead = teamHead;
            activeHead.classList.add('team-acco__trigger-active');
            });

    }
}


///Аккордеон для menu

const menuAcco = document.querySelector (".menu__acco");

createAccordMenu(menuAcco);

function createAccordMenu(element) {
    const menuTarget = element.querySelectorAll (".menu-acco__visible");
    let activeContent;
    let activeHead;
    
    for (let i = 0; i < menuTarget.length; i++ ) {
        const menuHead = menuTarget[i];

       menuHead.addEventListener ('click', function() {
       

        if (activeContent) {
            activeContent.classList.remove('menu-acco__text-active');
            activeContent.textContent = '';  
            }      
            activeContent = menuHead.nextElementSibling;    
        activeContent.classList.add('menu-acco__text-active');
        activeContent.textContent = 'Речевой акт редуцирует диалектический характер. Развивая эту тему, заимствование редуцирует конструктивный механизм сочленений. Лирический субъект начинает диссонансный анжамбеман. Наш современник стал особенно чутко относиться к слову, однако механизм сочленений неустойчив. Модальность высказывания, как справедливо считает И.Гальперин, пространственно выбирает метр. Речевой акт редуцирует диалектический характер. Развивая эту тему.';
     

        if(activeHead) {
            activeHead.classList.remove('menu-acco__visible-active');
        }
        activeHead = menuHead;
        activeHead.classList.add('menu-acco__visible-active');
      
        });
     
        // menuHead.addEventListener("mouseout", function() {
        //             activeHead.classList.remove('menu-acco__visible-active');  
        //             activeContent.classList.remove('menu-acco__text-active');
        //             activeContent.textContent = '';  
        //             });
}
}




///Кнопка в слайдере
const slaiderMenu = document.querySelector (".slider__items");

createSliderItem(slaiderMenu);

function createSliderItem(element) {

const OpenSlaiderBTN = element.querySelectorAll("#slider-comp__btn");
let activeContent1;


for (let i = 0; i < OpenSlaiderBTN.length; i++ ) {
    const sBtn = OpenSlaiderBTN[i];
    
    
    sBtn.addEventListener("click", function() {

    if (sBtn.nextElementSibling.classList == "slider-comp__cont slider-comp__cont-active") {
    activeContent1.classList.remove('slider-comp__cont-active'); 
    }      
    else {
    activeContent1 = sBtn.nextElementSibling;
    activeContent1.classList.add('slider-comp__cont-active');
    }
    });

    sBtn.addEventListener("mouseout", function() {
        activeContent1.classList.remove('slider-comp__cont-active'); 
    });
}
}


//map
ymaps.ready(function () {
// var myMap = new ymaps.Map('map', {
//             center: [55.751574, 37.573856],
//             controls: ['zoomControl'],
//             zoom: 9
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         clusterer = new ymaps.Clusterer({
//             preset: 'islands#invertedNightClusterIcons',
//             clusterHideIconOnBalloonOpen: false,
//             geoObjectHideIconOnBalloonOpen: false
//         });

// });

var myMap = new ymaps.Map('map', {
    center: [59.93416159991021,30.32580739998837],
    zoom: 12
}, {
    searchControlProvider: 'yandex#search'
}),

// Создаём макет содержимого.
// MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
// ),

myPlacemark = new ymaps.Placemark([59.93974397970528,30.331460794753102], {
    hintContent: 'бургерная1',
    balloonContent: 'бургерная1'
}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-marker.svg',
    iconImageSize: [50, 60],
    iconImageOffset: [-5, -38]

}
);

myPlacemark1 = new ymaps.Placemark([59.89837280948496,30.335946705269627], {
    hintContent: 'бургерная1',
    balloonContent: 'бургерная1'
}, {
    iconLayout: 'default#image',
    iconImageSize: [50, 60],
    iconImageHref: './img/map-marker.svg',
    iconImageOffset: [-5, -38]

}
);

myPlacemark2 = new ymaps.Placemark([59.94222081313683,30.248579121326642], {
    hintContent: 'бургерная1',
    balloonContent: 'бургерная1'
}, {
    iconLayout: 'default#image',
    iconImageSize: [50, 60],
    iconImageHref: './img/map-marker.svg',
    iconImageOffset: [-5, -38]

}
);


myMap.geoObjects
.add(myPlacemark)
.add(myPlacemark1)
.add(myPlacemark2)
//.add(myPlacemarkWithContent);
});






/// Слайдер 
$('.items-slider').slick({
    infinite: true,
    autoPlay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    centerMode: true,
    dots: true
})



const myForm = document.querySelector('.form__container');   
const sendButton = document.querySelector('#form__button');

sendButton.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(myForm)) {
  const sendmail = {
      Name: myForm.elements.Name.value,
      Phone: myForm.elements.Phone.value,
      Comment: myForm.elements.Comment.value
  };
//   console.log(sendmail);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
      xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
      xhr.send(JSON.stringify(sendmail));
  
      xhr.addEventListener('load', () => {
        const template1 = document.querySelector("#overlayTemplate");
        // const overlayElement = fragment.querySelector(".response__overlay");
        // const contentElement = fragment.querySelector(".response__content");
        // const closeElement = fragment.querySelector(".response__close");
        console.log(template1);
        console.log(sendmail);
        template1.classList.add('response__overlay-active');
      
        const closeResponse = document.querySelector(".response__close");

        closeResponse.addEventListener('click', function() {
           template1.classList.remove('response__overlay-active');
        });




      
        });

    }

});

function validateForm(form) {
    let valid = true;
  
          if (!validateField(form.elements.Name)){
          valid = false;
          }
          if (!validateField(form.elements.Phone)){
          valid = false;
          }
          if (!validateField(form.elements.Comment)){
          valid = false;
          } 
          return valid;
    }
  
    function validateField(field) {
      

      if(!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
      } else {
        field.nextElementSibling.textContent = '';
          return true;
         }
        }
  



const Review = document.querySelector(".reviews");
const revButton = document.querySelectorAll(".reviews__btn");
const revBlock = document.querySelector(".reviews__block");
const revOverlay =  document.querySelector(".reviews__overlay")

for (let i = 0; i < revButton.length; i++ ) {
    const rBtn = revButton[i];
    
rBtn.addEventListener("click", function(e) {
e.preventDefault();


 revOverlay.classList.add('reviews__overlay-active');

 revOverlay.addEventListener("click", function(e) {
    e.preventDefault();
     revOverlay.classList.remove('reviews__overlay-active');
    });
 
});

}


/// wheel mouse
$(function() {

    var colorPoints = function (index) {
        $('#doc')
        .find('.points__li')
        .eq(index)
        .addClass('points__active')
        .siblings()
        .removeClass('points__active');
    }

    var generatePoints = function() {
        $('section').each(function() {
            var point = $('<li>', {
                attr: {
                    class: 'points__li'
                },
                html: '<div class="point__circle"></div>'
            })
            $('.points__ul').append(point);
        })
    };
    generatePoints();




    var moveSection = function(slideNum) {
        var

            section = $('section'),
            activeSection = section.filter('.active'),
            reqSection = section.eq(slideNum),
            reqIndex = reqSection.index(),
            list = $('#wheel'),
            duration = 800;




        if (reqSection.length) {
            list.animate({
                'top': -reqIndex * 100 + 'vh'
            }, duration, function() {
                activeSection.removeClass('active');
                reqSection.addClass('active');
            });
        }
    }


    $('.pointzero').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            section = $('section'),
            activeSection = section.filter('.active'),
            existedSection,
            edgeSection,
            reqSection;


        if ($this.hasClass('header-wheel__down')) {
            existedSection = activeSection.prev();
            edgeSection = section.last();
        }

        if ($this.hasClass('header-wheel__up')) {
            existedSection = activeSection.next();
            edgeSection = section.first();
        }

        reqSection = existedSection.length ? existedSection.index() : edgeSection.index()

        moveSection(reqSection);
    });

    $('body').on('click', '.points__li', function(i) {
        var $this = $(this),
            index = $this.index();

        moveSection(index);
        colorPoints(index);

    })

});

//one page scroll
class Slider {
  constructor(data) {
    this._length = data.length;
    this._curSlide = 0;
  }

  get length() {
    return this._length;
  }

  get curSlide() {
    return this._curSlide;
  }

  set curSlide(curSlide) {
    this._curSlide = curSlide;
    this.setCurSlideHandler(this);
  }

  nextSlide() {
    if (this.curSlide < this.length - 1) {
      this.curSlide++;
      this.slideHandler(this);
    }

    return this.curElement;
  }

  prevSlide() {
    if (this.curSlide) {
      this.curSlide--;
      this.slideHandler(this);
    }

    return this.curSlide;
  }

  slideTo(num) {
    this.curSlide = num;
    this.slideHandler(this);
  }

  slideHandler(slider) {
    return slider;
  }

  setCurSlideHandler(slider) {
    return slider;
  }
}

const initOnePageScroll = () => {
  const UP_KEY_CODE = 38;
  const DOWN_KEY_CODE = 40;

  const wrapper = $('.wrapper');
  const content = wrapper.find('.maincontent');
  const sections = content.find('.section');
  const count = sections.length;
  const links = content.find('a[data-section]');
  const switcher = $('.section-switch');
  const switches = switcher.find('.section-switch__item');
  const offsets = sections.map((index, section) => $(section).offset().top);
  const duration = +content.css('transition-duration').slice(0, -1) * 1000;
  const arrowDown = $('.banner__arrow');

  const slider = new Slider({
    length: sections.length
  });

  const makeItemActive = (items, className, index) => {
    items
      .eq(index)
      .addClass(`${className}--active`)
      .siblings()
      .removeClass(`${className}--active`);
  };

  slider.setCurSlideHandler = function() {
    makeItemActive(sections, 'section', this.curSlide);
    makeItemActive(switches, 'section-switch__item', this.curSlide);
  };

  const performTransition = index => {
    if ($(window).height() >= 750) {
      content.css('transform', 'translateY(' + -100 * index + '%)');
    } else {
      const offset = sections.eq(index).offset().top;

      $('html').animate(
        {
          scrollTop: sections.eq(index).offset().top
        },
        1000
      );
    }
  };

  slider.slideHandler = function() {
    performTransition(this.curSlide);
  };

  const translateHandler = evt => {
    const deltaY = evt.originalEvent.deltaY;
    const direction = deltaY > 0 ? 'down' : 'up';
    const transitionendHandler = () => {
      wrapper.on('wheel', translateHandler);
      content.off('transitionend', transitionendHandler);
    };

    switch (direction) {
      case 'down': {
        if (slider.curSlide !== slider.length - 1) {
          wrapper.off('wheel', translateHandler);
          content.on('transitionend', transitionendHandler);
        }
        slider.nextSlide();
        break;
      }
      case 'up': {
        if (slider.curSlide) {
          wrapper.off('wheel', translateHandler);
          content.on('transitionend', transitionendHandler);
        }
        slider.prevSlide();
      }
    }
  };

  const keydownHandler = evt => {
    const transitionendHandler = () => {
      $(document).on('keydown', keydownHandler);
      content.off('transitionend', transitionendHandler);
    };

    switch (evt.keyCode) {
      case DOWN_KEY_CODE: {
        if (slider.curSlide !== slider.length - 1) {
          $(document).off('keydown', keydownHandler);
          content.on('transitionend', transitionendHandler);
        }
        slider.nextSlide();
        break;
      }
      case UP_KEY_CODE: {
        if (slider.curSlide) {
          $(document).off('keydown', keydownHandler);
          content.on('transitionend', transitionendHandler);
        }
        slider.prevSlide();
      }
    }
  };

  const scrollHandler = () => {
    const scrollTop = $('html').scrollTop();
    let index = 0;

    for (let i = 1; i < offsets.length; i++) {
      if (scrollTop - offsets[i] >= 0) {
        index = i;
      } else {
        break;
      }
    }

    slider.curSlide = index;
  };

  if ($(window).height() >= 750) {
    wrapper.on('wheel', translateHandler);
    wrapper.on('touchmove', evt => evt.preventDefault());
    $(document).on('keydown', keydownHandler);
  } else {
    $(document).on('scroll', scrollHandler);
  }

  if ($(window).width() <= 768) {
    const BASE_DELTA_Y = 50;
    let startY;
    const touchEndHandler = evt => {
      const deltaY = +evt.originalEvent.changedTouches[0].clientY - startY;
      let direction;

      if (deltaY > BASE_DELTA_Y) {
        direction = 'up';
      } else if (deltaY < -BASE_DELTA_Y) {
        direction = 'down';
      } else {
        return;
      }

      const transitionendHandler = () => {
        $(window).on('touchend', touchEndHandler);
        content.off('transitionend', transitionendHandler);
      };

      switch (direction) {
        case 'down': {
          if (slider.curSlide !== slider.length - 1) {
            $(window).off('touchend', touchEndHandler);
            content.on('transitionend', transitionendHandler);
          }
          slider.nextSlide();
          break;
        }
        case 'up': {
          if (slider.curSlide) {
            $(window).off('touchend', touchEndHandler);
            content.on('transitionend', transitionendHandler);
          }
          slider.prevSlide();
        }
      }
    };

    $(window).on('touchstart', evt => {
      startY = +evt.originalEvent.changedTouches[0].clientY;
    });

    $(window).on('touchend', touchEndHandler);
  }

  const clickLinkHandler = evt => {
    evt.preventDefault();

    slider.slideTo(parseInt($(evt.target).attr('data-section'), 10));

    if ($(window).height() >= 750) {
      links.off('click', clickLinkHandler);

      const transitionendHandler = () => {
        links.on('click', clickLinkHandler);
        content.off('transitionend', transitionendHandler);
      };

      content.on('transitionend', transitionendHandler);
    }
  };
  const clickSwitchHandler = evt => {
    evt.preventDefault();

    slider.slideTo($(evt.target).index());

    if ($(window).height() >= 750) {
      switches.off('click', clickSwitchHandler);

      const transitionendHandler = () => {
        switches.on('click', clickSwitchHandler);
        content.off('transitionend', transitionendHandler);
      };

      content.on('transitionend', transitionendHandler);
    }
  };

  links.on('click', clickLinkHandler);
  switches.on('click', clickSwitchHandler);
  arrowDown.on('click', () => slider.slideTo(1));

  if ($(window).height() >= 750) {
    wrapper.addClass('wrapper--active');
  }
};

export default initOnePageScroll;
