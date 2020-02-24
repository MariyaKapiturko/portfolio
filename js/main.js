$(function() {

  // фильтрация работ 
  // ======================
  let = filter = $("[data-filter]"); // сохраняем переменные с атрибутом data-filter
  
  filter.on("click", function(event) {
    event.preventDefault(); // убираем обычное поведение ссылки (event)
    
    let category = $(this).data("filter"); // при клике получаем дата атрибут, на который кликнули
    
    if (category == "all") { // показываем все работы для категории all
      $("[data-category]").removeClass("hide");
    } else {
      $("[data-category]").each(function() { // проходим по всем элементам, у которых есть атрибут data-category
        let workCategory = $(this).data("category"); // скрываем элемент, если не подходит по значению с category
        
        if (workCategory != category) {
          $(this).addClass("hide"); // добавляем класс hide элементам, которые не подходят к категории
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  // модальные окна
  // ======================
  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");
  modalCall.on("click", function(event) {
    event.preventDefault(); // убираем обычное поведение ссылки (event)
    
    let $this = $(this); // сохраняем переменную в саму кнопку, по которой кликнули
    let modalId = $this.data('modal'); // в modalId сохраняем значение атрибута data-modal
    
    $(modalId).addClass('show'); // добавляем класс show к классу modal 
    $("body").addClass('no-scroll'); // добавляем класс no-scroll к body

    setTimeout(function() { // задержка для анимации     
          $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
          }); // ищем в модальном окне элемент с классом modal__dialog и поменять css свойство
    }, 200);
  });

  modalClose.on("click", function(event) {
    event.preventDefault(); // убираем обычное поведение ссылки (event)
    
    let $this = $(this); // сохраняем переменную в саму кнопку, по которой кликнули
    let modalParent = $this.parents('.modal'); // в modalParent получаем родительский элемент с классом modal

    modalParent.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function() { // задержка для анимации     
      modalParent.removeClass('show'); // добавляем класс show
      $("body").removeClass('no-scroll');
    }, 200);

    
  });

  $(".modal").on("click", function(event) {  // закрытие окна по маске
    let $this = $(this);
    $this.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function() { // задержка для анимации     
      $this.removeClass('show');
      $("body").removeClass('no-scroll'); 
    }, 200);
  });

  $(".modal__dialog").on("click", function(event) { 
    event.stopPropagation();
  });

});