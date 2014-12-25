(function ($) {
    $(function () {
        var hash = window.location.hash;
        var index;
        var hash_page = $(hash+'_page');
        if(hash && hash_page[0]){
            index = hash_page.index();
        }

        /*单页面动画*/
        if($("body").width() > 991){

            var scroll_index = 0,
                section = $("section");
            section.eq(0).nextAll().find(".animated").hide();

            $(".main").onepage({
                container:"section",
                afterMove: function (index) {

                    var current = section.eq(index);

                    current.find(".animated").slideDown("fast");
                    if (index > scroll_index) {
                        current.prev().find(".animated").hide();
                    } else {
                        current.next().find(".animated").hide();
                    }
                    scroll_index = index;
                },
                defaultPage: index
            });
        }
        /*图片弹出框*/
        $("#img_gallery_modal").on("hidden.bs.modal",function(){
            $(this).removeData("bs.modal");
        });

    });

})(jQuery);
