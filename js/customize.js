// 自行加入的JS請寫在這裡
$(function() {
    //sticky sidebar
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 720,
            bottomSpacing: 0,
            minWidth: 768,
            resizeSensor: true,
        });
    }

    if ($('.left_block').length) {
        $('.mainTitleBox').find('.title').css('margin-bottom','2em');
    }
    // else{
    //     $('.mainTitleBox').find('.title').css('margin-bottom','-1em');
    // }

    // 樓層高低切換
    $('.functions .floor').click(function(event) {
        if($(this).hasClass('H')){
            $(this).removeClass('H');
            $(this).text('按樓層由低到高排列');
        }else{
            $(this).addClass('H');
            $(this).text('按樓層由高到低排列');
        }
    });
    // 時間遠近切換
    $('.functions .timer').click(function(event) {
        if($(this).hasClass('F')){
            $(this).removeClass('F');
            $(this).text('時間由近到遠排列');
        }else{
            $(this).addClass('F');
            $(this).text('時間由遠到近排列');
        }
    });

    // 依地點檢視、會議室寬度
    function roomItemWidthSet() {
        var _roomItem = $('.room_list').find('.custom_room'),
            roomLength = _roomItem.length,
            mathValue= parseInt('100%'),
            roomItemWidth;

        roomItemWidth = ( mathValue / roomLength );
        _roomItem.width(roomItemWidth);
    }
    roomItemWidthSet();

    // 大會堂座位查詢
    $('.seatDisplay').find('.view').click(function(event) {
        $('.seatDisplay').find('.view').removeClass('act');
        $(this).addClass('act');
        $('.room_info').fadeIn();
    });

    // 
    $('.lightbox').click(function(){
        $('.full_lightbox').fadeIn();
    });

    $('.full_lightbox').find('.close').click(function(event) {
        $('.full_lightbox').fadeOut();
    });


    // 首頁 卡片輪播
    $('.cardSlider').slick({
        centerMode: true,
        centerPadding: '180px',
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },{
            breakpoint: 992,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    $('.date-slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });

    // singleSlider
    $('.singleSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1200,
        autoplay: false,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false,
        pauseOnFocus: false
    });

    // 內頁 篇幅三張
    $('.galleryslider').slick({
        centerMode: true,
        centerPadding: '180px',
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },{
            breakpoint: 575,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
    });

    // 靠北難用 calendar
    $('.Tbody .room').find('div').click(function(event) {
        $('.Tbody .room > div').removeClass('act');
        $(this).addClass('act');

        $('.room_info').fadeIn();
    });
    $('.room_info .close').click(function(event) {
        $('.Tbody .room > div').removeClass('act');
        $('.seatDisplay').find('.view').removeClass('act');
        $('.room_info').fadeOut();
    });

    // 場地選擇 opem / close
    $('.sites').click(function(event){
        $('.site_list').fadeIn();
    })

    $('.site_list').find('.close').click(function(event) {
        $('.site_list').fadeOut();
    });

    // modal設定
    $(function () {
        $("#modal1").hide();                                                      //先隱藏視窗
        $(".modal").after('<div class="modal_overlay"></div>');                   //新增透明底
        $(".modal").prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
        $(".modal_overlay").hide();                                               //隱藏透明底

        //按鈕動作
        $("#openModal").click(function (e) {
            $(".modal_overlay").fadeIn(100);
            $(".modal").fadeIn(100);
            $("body").addClass("noscroll");
            e.preventDefault();
        });
        //關閉function
        function closeModal() {
            $("#modal1").hide();
            $(".modal_overlay").hide();
            $("body").removeClass("noscroll");
        }
        //點選關閉按鈕及透明底都可關閉
        $(".modal_overlay").click(closeModal);
        $(".modal .close").click(closeModal);
    });

    // Search

    // 1）
    $('.search button.switch').click(function(){
        $(this).next('.form_grp').fadeToggle('600');
    });
    // $(document).on('touchend click', function(e) {
    //     var target = e.target;
    //     if (!$(target).is('.search button.switch')) {
    //         $('.search').find('.form_grp').hide();
    //     }
    // });

    // 2）
    // $('.search button.switch').find('.form_grp').hide();

    // var openSearch = $('.search').children('.switch');
    // openSearch.off().click(function(e) {
    //     $(this).next('.form_grp').stop(true, true).fadeToggle();
    //     e.preventDefault();
    // });
    // openSearch.keyup(function() {
    //     $(this).next('.form_grp').stop(true, true).fadeIn();
    // });
    // $('.search').find('.form_grp').focusout(function() {
    //     $('.search').find('.form_grp').fadeOut();
    // });
    // $(document).on('touchend click', function(e) {
    //     var target = e.target;
    //     if (!$(target).is('.search button.switch')) {
    //         $('.search').find('.form_grp').fadeOut();
    //     }
    // });


    // 首頁輪播
    // $('.mpSlider').slick({
    //     mobileFirst: true,
    //     dots: true,
    //     arrows: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     fade: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     customPaging: function(slider, i) {
    //         var title = $(slider.$slides[i]).find('img').attr('alt').trim();
    //         return $('<button type="button" aria-label="' + title + '"/>').text(title);
    //     }
    // });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // 
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });
});