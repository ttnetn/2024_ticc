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
        $('.mainTitleBox').find('.title').css('margin-bottom','3.1em');
    }
    // else{
    //     $('.mainTitleBox').find('.title').css('margin-bottom','-1em');
    // }

    // 寶弟頁籤
    // function tabFun() {
    // var activeClass = 'active'; //啟動的 class
    // var tabSet2 = $('.tabSet2'); //tab名稱

    // tabSet2.each(function () {
    // var _tabBtnBlock = $(this).find('.tabItems'); //頁籤按鈕區塊
    // var _tabBtn = _tabBtnBlock.find('button'); //頁籤按鈕
    // var _tabBtnLength = _tabBtn.length; //頁籤按鈕數量
    // var _tabContentBlock = $(this).find('.tabContentGroup'); //頁籤內容區塊
    // var _tabContent = _tabContentBlock.find('.tabContent'); //頁籤內容
    // _tabBtn.eq(0).addClass(activeClass); //第一個頁籤按鈕active
    // _tabContent.eq(0).show(); //第一個頁籤內容顯示

    // for (var i = 0; i < _tabBtnLength; i++) {
    // //綁定是哪一個頁籤
    // (function (i) {
    //     var _this = _tabBtn.eq(i); //綁定這一個頁籤按鈕
    //     var _thisContent = _tabContent.eq(i); //綁定這一個頁籤內容
    //     var _thisPrevItem = _tabContent.eq(i - 1); //綁定前一個頁籤按鈕
    //     var _itemAllA = _thisContent.find('[href], input'); //這一個頁籤內容所有a和input項目
    //     var _prevItemAllA = _thisPrevItem.find('[href], input'); //前一個頁籤內容所有a和input項目
    //     var _isFirstTab = i === 0; //如果是第一個頁籤
    //     var _isLastTab = i === _tabBtnLength - 1; //如果是最後一個頁籤
    //     var _itemFirstA = _itemAllA.eq(0); //頁籤內容第一個a或是input
    //     var _itemLastA = _itemAllA.eq(-1); //頁籤內容最後一個a或是input
    //     var _prevItemLastA = _prevItemAllA.eq(-1); //前一個頁籤的最後一個a或是input

    //     // _this頁籤觸發focus內容裡的第一個a
    //     _this.on('keydown', function (e) {
    //       //頁籤第幾個按鈕觸發時
    //       if (e.which === 9 && !e.shiftKey) {
    //         //e.which偵測按下哪個案件，9代表tab，shiftKey代表shift
    //         e.preventDefault();
    //         startTab(i); //啟動頁籤切換功能
    //         if (_itemAllA.length) {
    //           //type number = true，0是false
    //           _itemFirstA.focus(); //第一個a或是input focus
    //         } else {
    //           _tabBtn.eq(i + 1).focus(); //當內容沒有a或是input跳轉下一個tab
    //         }
    //       } else if (e.which === 9 && e.shiftKey && !_isFirstTab) {
    //         e.preventDefault();

    //         startTab(i - 1); //啟動頁籤切換功能

    //         if (_prevItemAllA.length) {
    //           _prevItemLastA.focus(); //前一個頁籤內容的最後一個a或是input focus
    //         } else {
    //           _tabBtn.eq(i - 1).focus(); //當內容沒有a或是input跳轉上一個tab
    //         }
    //       }
    //     });

    //     //當按下shift+tab且為該內容的第一個a或是input
    //     //將focus目標轉回tab頁籤上，呼叫上方功能startTab(i - 1);往前一個頁籤
    //     _itemFirstA.on('keydown', function (e) {
    //       console.log(i);
    //       if (e.which === 9 && e.shiftKey) {
    //         e.preventDefault();
    //         _tabBtn.eq(i).focus();
    //       }
    //     });

    //     //當按下shift+tab且為該內容的最後一個a或是input
    //     //focus到下一個頁籤
    //     _itemLastA.on('keydown', function (e) {
    //       if (e.which === 9 && !e.shiftKey && !_isLastTab) {
    //         e.preventDefault();
    //         _tabBtn.eq(i + 1).focus();
    //       }
    //     });
    //   })(i);

    //   //滑鼠點擊事件
    //   _tabBtn.on('click', function (e) {
    //     e.preventDefault();
    //     var _nowBtn = $(this).index();
    //     startTab(_nowBtn);
    //   });

    //   //切換tab
    //   function startTab(_now) {
    //     _tabBtn.eq(_now).addClass(activeClass).siblings().removeClass(activeClass);
    //     //頁籤按鈕增加指定class(active)，其他頁籤移除指定class
    //     _tabContent.eq(_now).show().siblings().hide();
    //     //顯示當下頁籤內，隱藏其他內容
    //   }
    // }
    // });
    // }
    // tabFun();


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
    // 英文版
    $('.functions .floor_EN').click(function(event) {
        if($(this).hasClass('H')){
            $(this).removeClass('H');
            $(this).text('Arranged by floor from low to high');
        }else{
            $(this).addClass('H');
            $(this).text('Arranged by floor from high to low');
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
    // $('.seatDisplay').find('.view').click(function(event) {
    //     $('.seatDisplay').find('.view').removeClass('act');
    //     $(this).addClass('act');
    //     $('.room_info').fadeIn();
    // });

    // 
    $('.lightbox').click(function(){
        $('.full_lightbox').fadeIn();
    });

    $('.full_lightbox').find('.close').click(function(event) {
        $('.full_lightbox').fadeOut();
    });

    // 樓層圖 動態sample
    $('.floorDemo').find('.area').hide();

    // 樓層圖開關
    $('.floormap-switch').click(function(event) {
        if($('.floorDemo').hasClass('show')){
            $('.floormap-switch').text('開啟樓層圖');
            $('.floorDemo').removeClass('show').hide();
        }else{
            $('.floormap-switch').text('關閉樓層圖');
            $('.floorDemo').addClass('show').show();
        }
    });

    // 101A
    $('.filter-list').find('._101A').mouseover(function(event) {
        $('.floorDemo').find('._101A').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._101A').mouseout(function(event) {
        $('.floorDemo').find('._101A').stop(true, true).fadeOut();
    });
    // 101B
    $('.filter-list').find('._101B').mouseover(function(event) {
        $('.floorDemo').find('._101B').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._101B').mouseout(function(event) {
        $('.floorDemo').find('._101B').stop(true, true).fadeOut();
    });
    // 101C
    $('.filter-list').find('._101C').mouseover(function(event) {
        $('.floorDemo').find('._101C').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._101C').mouseout(function(event) {
        $('.floorDemo').find('._101C').stop(true, true).fadeOut();
    });
    // 101D
    $('.filter-list').find('._101D').mouseover(function(event) {
        $('.floorDemo').find('._101D').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._101D').mouseout(function(event) {
        $('.floorDemo').find('._101D').stop(true, true).fadeOut();
    });
    // 101AB
    $('.filter-list').find('._101AB').mouseover(function(event) {
        $('.floorDemo').find('._101AB').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._101AB').mouseout(function(event) {
        $('.floorDemo').find('._101AB').stop(true, true).fadeOut();
    });
    // 101CD
    $('.filter-list').find('._101CD').mouseover(function(event) {
        $('.floorDemo').find('._101CD').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._101CD').mouseout(function(event) {
        $('.floorDemo').find('._101CD').stop(true, true).fadeOut();
    });
    // 101
    $('.filter-list').find('._101').mouseover(function(event) {
        $('.floorDemo').find('._101').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._101').mouseout(function(event) {
        $('.floorDemo').find('._101').stop(true, true).fadeOut();
    });
    // 102
    $('.filter-list').find('._102').mouseover(function(event) {
        $('.floorDemo').find('._102').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._102').mouseout(function(event) {
        $('.floorDemo').find('._102').stop(true, true).fadeOut();
    });
    // 103
    $('.filter-list').find('._103').mouseover(function(event) {
        $('.floorDemo').find('._103').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._103').mouseout(function(event) {
        $('.floorDemo').find('._103').stop(true, true).fadeOut();
    });
    // 105
    $('.filter-list').find('._105').mouseover(function(event) {
        $('.floorDemo').find('._105').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._105').mouseout(function(event) {
        $('.floorDemo').find('._105').stop(true, true).fadeOut();
    });
    // 106
    $('.filter-list').find('._106').mouseover(function(event) {
        $('.floorDemo').find('._106').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._106').mouseout(function(event) {
        $('.floorDemo').find('._106').stop(true, true).fadeOut();
    });
    // 1-vip-N
    $('.filter-list').find('._1-vip-N').mouseover(function(event) {
        $('.floorDemo').find('._1-vip-N').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._1-vip-N').mouseout(function(event) {
        $('.floorDemo').find('._1-vip-N').stop(true, true).fadeOut();
    });
    // 1-vip-S
    $('.filter-list').find('._1-vip-S').mouseover(function(event) {
        $('.floorDemo').find('._1-vip-S').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._1-vip-S').mouseout(function(event) {
        $('.floorDemo').find('._1-vip-S').stop(true, true).fadeOut();
    });

    // 201A
    $('.filter-list').find('._201A').mouseover(function(event) {
        $('.floorDemo').find('._201A').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201A').mouseout(function(event) {
        $('.floorDemo').find('._201A').stop(true, true).fadeOut();
    });
    // 201B
    $('.filter-list').find('._201B').mouseover(function(event) {
        $('.floorDemo').find('._201B').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201B').mouseout(function(event) {
        $('.floorDemo').find('._201B').stop(true, true).fadeOut();
    });
    // 201C
    $('.filter-list').find('._201C').mouseover(function(event) {
        $('.floorDemo').find('._201C').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201C').mouseout(function(event) {
        $('.floorDemo').find('._201C').stop(true, true).fadeOut();
    });
    // 201D
    $('.filter-list').find('._201D').mouseover(function(event) {
        $('.floorDemo').find('._201D').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201D').mouseout(function(event) {
        $('.floorDemo').find('._201D').stop(true, true).fadeOut();
    });
    // 201E
    $('.filter-list').find('._201E').mouseover(function(event) {
        $('.floorDemo').find('._201E').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201E').mouseout(function(event) {
        $('.floorDemo').find('._201E').stop(true, true).fadeOut();
    });
    // 201F
    $('.filter-list').find('._201F').mouseover(function(event) {
        $('.floorDemo').find('._201F').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201F').mouseout(function(event) {
        $('.floorDemo').find('._201F').stop(true, true).fadeOut();
    });
    // 201AB
    $('.filter-list').find('._201AB').mouseover(function(event) {
        $('.floorDemo').find('._201AB').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201AB').mouseout(function(event) {
        $('.floorDemo').find('._201AB').stop(true, true).fadeOut();
    });
    // 201BC
    $('.filter-list').find('._201BC').mouseover(function(event) {
        $('.floorDemo').find('._201BC').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201BC').mouseout(function(event) {
        $('.floorDemo').find('._201BC').stop(true, true).fadeOut();
    });
    // 201DE
    $('.filter-list').find('._201DE').mouseover(function(event) {
        $('.floorDemo').find('._201DE').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201DE').mouseout(function(event) {
        $('.floorDemo').find('._201DE').stop(true, true).fadeOut();
    });
    // 201EF
    $('.filter-list').find('._201EF').mouseover(function(event) {
        $('.floorDemo').find('._201EF').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201EF').mouseout(function(event) {
        $('.floorDemo').find('._201EF').stop(true, true).fadeOut();
    });
    // 201AF
    $('.filter-list').find('._201AF').mouseover(function(event) {
        $('.floorDemo').find('._201AF').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201AF').mouseout(function(event) {
        $('.floorDemo').find('._201AF').stop(true, true).fadeOut();
    });
    // 201ABC
    $('.filter-list').find('._201ABC').mouseover(function(event) {
        $('.floorDemo').find('._201ABC').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201ABC').mouseout(function(event) {
        $('.floorDemo').find('._201ABC').stop(true, true).fadeOut();
    });
    // 201DEF
    $('.filter-list').find('._201DEF').mouseover(function(event) {
        $('.floorDemo').find('._201DEF').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201DEF').mouseout(function(event) {
        $('.floorDemo').find('._201DEF').stop(true, true).fadeOut();
    });
    // 201ABEF
    $('.filter-list').find('._201ABEF').mouseover(function(event) {
        $('.floorDemo').find('._201ABEF').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201ABEF').mouseout(function(event) {
        $('.floorDemo').find('._201ABEF').stop(true, true).fadeOut();
    });
    // 201BCDE
    $('.filter-list').find('._201BCDE').mouseover(function(event) {
        $('.floorDemo').find('._201BCDE').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201BCDE').mouseout(function(event) {
        $('.floorDemo').find('._201BCDE').stop(true, true).fadeOut();
    });
    // 201
    $('.filter-list').find('._201').mouseover(function(event) {
        $('.floorDemo').find('._201').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._201').mouseout(function(event) {
        $('.floorDemo').find('._201').stop(true, true).fadeOut();
    });
    // 202B
    $('.filter-list').find('._202B').mouseover(function(event) {
        $('.floorDemo').find('._202B').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._202B').mouseout(function(event) {
        $('.floorDemo').find('._202B').stop(true, true).fadeOut();
    });
    // 202A
    $('.filter-list').find('._202A').mouseover(function(event) {
        $('.floorDemo').find('._202A').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._202A').mouseout(function(event) {
        $('.floorDemo').find('._202A').stop(true, true).fadeOut();
    });
    // 202
    $('.filter-list').find('._202').mouseover(function(event) {
        $('.floorDemo').find('._202').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._202').mouseout(function(event) {
        $('.floorDemo').find('._202').stop(true, true).fadeOut();
    });
    // 203A
    $('.filter-list').find('._203A').mouseover(function(event) {
        $('.floorDemo').find('._203A').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._203A').mouseout(function(event) {
        $('.floorDemo').find('._203A').stop(true, true).fadeOut();
    });
    // 203B
    $('.filter-list').find('._203B').mouseover(function(event) {
        $('.floorDemo').find('._203B').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._203B').mouseout(function(event) {
        $('.floorDemo').find('._203B').stop(true, true).fadeOut();
    });
    // 203
    $('.filter-list').find('._203').mouseover(function(event) {
        $('.floorDemo').find('._203').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._203').mouseout(function(event) {
        $('.floorDemo').find('._203').stop(true, true).fadeOut();
    });

    // 3-hall
    $('.filter-list').find('._3-hall').mouseover(function(event) {
        $('.floorDemo').find('._3-hall').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._3-hall').mouseout(function(event) {
        $('.floorDemo').find('._3-hall').stop(true, true).fadeOut();
    });
    // 3-party
    $('.filter-list').find('._3-party').mouseover(function(event) {
        $('.floorDemo').find('._3-party').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._3-party').mouseout(function(event) {
        $('.floorDemo').find('._3-party').stop(true, true).fadeOut();
    });
    // 3-S
    $('.filter-list').find('._3-S').mouseover(function(event) {
        $('.floorDemo').find('._3-S').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._3-S').mouseout(function(event) {
        $('.floorDemo').find('._3-S').stop(true, true).fadeOut();
    });
    // 3-N
    $('.filter-list').find('._3-N').mouseover(function(event) {
        $('.floorDemo').find('._3-N').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._3-N').mouseout(function(event) {
        $('.floorDemo').find('._3-N').stop(true, true).fadeOut();
    });

    // 401
    $('.filter-list').find('._401').mouseover(function(event) {
        $('.floorDemo').find('._401').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._401').mouseout(function(event) {
        $('.floorDemo').find('._401').stop(true, true).fadeOut();
    });
    // 401-Ya
    $('.filter-list').find('._401-Ya').mouseover(function(event) {
        $('.floorDemo').find('._401-Ya').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._401-Ya').mouseout(function(event) {
        $('.floorDemo').find('._401-Ya').stop(true, true).fadeOut();
    });
    // 401-Yuea
    $('.filter-list').find('._401-Yuea').mouseover(function(event) {
        $('.floorDemo').find('._401-Yuea').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._401-Yuea').mouseout(function(event) {
        $('.floorDemo').find('._401-Yuea').stop(true, true).fadeOut();
    });
    // 401-vip
    $('.filter-list').find('._401-vip').mouseover(function(event) {
        $('.floorDemo').find('._401-vip').stop(true, true).fadeIn();
    });
    $('.filter-list').find('._401-vip').mouseout(function(event) {
        $('.floorDemo').find('._401-vip').stop(true, true).fadeOut();
    });

    // 試算 count
    $('.count').click(function(event) {
        $('.rent_calc').find('.result').addClass('show');
        $('.rent_calc').find('.result').fadeIn();
    });

    // tooltip2
    $('.tooltip2').find('span').click(function(event) {
        if($(this).hasClass('act')){
            $('.tooltip2').find('span').removeClass('act');
            $(this).next('.content').removeClass('show');
        }else{
            $('.tooltip2').find('span').removeClass('act');
            $('.tooltip2').find('.content').removeClass('show');
            $(this).addClass('act');
            $(this).next('.content').addClass('show');
        }
    });


    // select 帶入勾選項
    $(function() {
        $("#item_1").CreateMultiCheckBox({ width: '100%', defaultText: '會議廳形式', height: '250px' });
        $("#item_2").CreateMultiCheckBox({ width: '100%', defaultText: '座椅形式', height: '250px' });
        $(".item_3").CreateMultiCheckBox({ width: '100%', defaultText: '請選擇場地', height: '250px' });
		$(".item_31").CreateMultiCheckBox({ width: '100%', defaultText: '請選擇場地', height: '250px' });
        $(".item_32").CreateMultiCheckBox({ width: '100%', defaultText: '請選擇場地', height: '250px' });
        $(".item_33").CreateMultiCheckBox({ width: '100%', defaultText: '請選擇場地', height: '250px' });
    })
    $(document).ready(function() {
        $(document).on("click", ".MultiCheckBox", function() {
            var detail = $(this).next();
            detail.show();
        });
        $(document).on("click", ".MultiCheckBoxDetailHeader input", function(e) {
            e.stopPropagation();
            var hc = $(this).prop("checked");
            $(this).closest(".MultiCheckBoxDetail").find(".MultiCheckBoxDetailBody input").prop("checked", hc);
            $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();
        });
        $(document).on("click", ".MultiCheckBoxDetailHeader", function(e) {
            var inp = $(this).find("input");
            var chk = inp.prop("checked");
            inp.prop("checked", !chk);
            $(this).closest(".MultiCheckBoxDetail").find(".MultiCheckBoxDetailBody input").prop("checked", !chk);
            $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();
        });
        $(document).on("click", ".MultiCheckBoxDetail .cont input", function(e) {
            e.stopPropagation();
            $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();
            var val = $(".MultiCheckBoxDetailBody input:checked").length == $(".MultiCheckBoxDetailBody input").length;
            $(".MultiCheckBoxDetailHeader input").prop("checked", val);
        });
        $(document).on("click", ".MultiCheckBoxDetail .cont", function(e) {
            var inp = $(this).find("input");
            var chk = inp.prop("checked");
            inp.prop("checked", !chk);
            var multiCheckBoxDetail = $(this).closest(".MultiCheckBoxDetail");
            var multiCheckBoxDetailBody = $(this).closest(".MultiCheckBoxDetailBody");
            multiCheckBoxDetail.next().UpdateSelect();
            var val = $(".MultiCheckBoxDetailBody input:checked").length == $(".MultiCheckBoxDetailBody input").length;
            $(".MultiCheckBoxDetailHeader input").prop("checked", val);
        });
        $(document).mouseup(function(e) {
            var container = $(".MultiCheckBoxDetail");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });
    });
    var defaultMultiCheckBoxOption = {
        width: "220px",
        defaultText: "Select Below",
        height: "200px"
    };
    jQuery.fn.extend({
        CreateMultiCheckBox: function(options) {
            var localOption = {};
            localOption.width = options != null && options.width != null && options.width != undefined ? options.width : defaultMultiCheckBoxOption.width;
            localOption.defaultText = options != null && options.defaultText != null && options.defaultText != undefined ? options.defaultText : defaultMultiCheckBoxOption.defaultText;
            localOption.height = options != null && options.height != null && options.height != undefined ? options.height : defaultMultiCheckBoxOption.height;
            this.hide();
            this.attr("multiple", "multiple");
            var divSel = $("<div class='MultiCheckBox'>" + localOption.defaultText + "<span class='k-icon k-i-arrow-60-down'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='sort-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' class='svg-inline--fa fa-sort-down fa-w-10 fa-2x'><path fill='currentColor' d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z' class=''></path></svg></span></div>").insertBefore(this);
            divSel.css({ width: localOption.width });
            var detail = $("<div class='MultiCheckBoxDetail'><div class='MultiCheckBoxDetailHeader'><input type='checkbox' class='mulinput' value='-1982' /><div>全部</div></div><div class='MultiCheckBoxDetailBody'></div></div>").insertAfter(divSel);
            detail.css({
                width: parseInt(options.width) + 10,
                "max-height": localOption.height
            });
            var multiCheckBoxDetailBody = detail.find(".MultiCheckBoxDetailBody");
            this.find("option").each(function() {
                var val = $(this).attr("value");
				var cid = $(this).attr("cid");
                var selectflg = $(this).attr("selected");
                if (val == undefined) val = "";
                if(selectflg == undefined) {
                    multiCheckBoxDetailBody.append("<div class='cont'><div><input type='checkbox' class='mulinput' id='" + cid + "' value='" + val + "' /></div><div>" + $(this).text() + "</div></div>");
                } else {
                    multiCheckBoxDetailBody.append("<div class='cont'><div><input type='checkbox' class='mulinput' id='" + cid + "' value='" + val + "' checked /></div><div>" + $(this).text() + "</div></div>");
                }
            });
            multiCheckBoxDetailBody.css("max-height", parseInt($(".MultiCheckBoxDetail").css("max-height")) - 28 + "px");
        },
        UpdateSelect: function() {
            var arr = [];
            this.prev().find(".mulinput:checked").each(function() {
                arr.push($(this).val());
            });
            this.val(arr);
        }
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
        },{
            breakpoint: 767,
            settings: {
                arrows: true,
                dots: false,
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
                slidesToScroll: 2
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // singleSlider
    $('.singleSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
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

    // roomSlider
    $('.roomSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                arrows: true
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });




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
        dots: false,
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