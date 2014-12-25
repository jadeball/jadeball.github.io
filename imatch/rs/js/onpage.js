/*单页面*/
(function ($) {
    $.fn.onepage = function (options) {
        return this.each(function () {

            var defaults = {
                container: "section",
                time: 500,
                beforeMove: null,
                afterMove: null,
                defaultPage:null
            };

            var settings = $.extend(defaults, options || {}),
                $this = $(this),
                childs = $this.children(settings.container),
                index = childs.size(),
                sw = true;

            function init() {
                $("html,body").css({"height": "100%", "width": "100%", "overflow": "hidden"});
                $this.addClass("onepage-container");
                childs.addClass("onepage");

                var pagenation = '<ul class="onepage-pagination">';
                for (var i = 0; i < index; i++) {
                    pagenation += '<li><a data-index="' + i + '" href="#"></a></li>'
                    childs.eq(i).css("top", (100 * i) + "%");
                }
                pagenation += '</ul>';

                $(pagenation).appendTo("body")
                    .find("a").eq(0).addClass("active");
                childs.eq(0).addClass("active");

                $this.mousewheel(function (event) {
                    if (event.deltaY > 0) {
                        moveUp();
                    } else {
                        moveDown();
                    }
                });

                $(".onepage-pagination").on("click", "a", function (e) {
                    var i = $(this).attr("data-index");
                    moveTo(i);
                    e.preventDefault();
                });

                $(document).on("keyup",function(e){
                    if(e.keyCode == 32 || e.keyCode == 40){
                        moveDown();
                    }else if(e.keyCode == 38){
                        moveUp();
                    }
                });

                if(settings.defaultPage){
                    moveTo(settings.defaultPage);
                }

            }

            function moveTo(i) {

                if (sw) {
                    sw = false;

                    if (typeof settings.beforeMove == "function") {
                        settings.beforeMove(i);
                    }

                    childs.eq(i).addClass("active").siblings().removeClass("active");
                    $(".onepage-pagination").find("a").removeClass("active")
                        .eq(i).addClass("active");

                    $this.animate({"top": (-100 * i + "%")}, settings.time, function () {
                        setTimeout(function () {
                            sw = true;
                        }, 500);
                        if (typeof settings.afterMove == "function") {
                            settings.afterMove(i);
                        }
                    });

                }
                return false;
            }

            function moveUp() {
                var curr = childs.filter(".active");
                var i = childs.index(curr) - 1;
                if (i >= 0) {
                    moveTo(i);
                }
            }

            function moveDown() {
                var curr = childs.filter(".active");
                var i = childs.index(curr) + 1;
                if (i <= (index - 1)) {
                    moveTo(i);
                }
            }


            init();

        });
    }
})(jQuery);