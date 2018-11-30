
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
var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            controls: ['zoomControl'],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
        clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedNightClusterIcons',
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false
        });

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
        console.log( template1);
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

for (let i = 0; i < revButton.length; i++ ) {
    const rBtn = revButton[i];
    
rBtn.addEventListener("click", function(e) {
e.preventDefault();
const revOverlay = revBlock.nextElementSibling;

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