window.addEventListener('load', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 自动轮播图初始化
        autoplay: {
            delay: 10000,
            // 是否当你触摸滑动后禁止自动轮播图 
            disableOnInteraction: false, //不禁止
            // disableOnInteraction: true,// 禁止
        },
    })
    //设置定时器
    var spans = document.querySelectorAll('.time-miaosha span:not(:nth-child(3n))');
    var timer = 2 * 60 * 60;
    clock();
    function clock(){
    var hour = Math.floor(timer / 3600);
    var mintle = Math.floor(timer % 3600 / 60);
    var miao = timer % 3600 % 60
    spans[0].innerHTML = Math.floor(hour / 10);
    spans[1].innerHTML = hour % 10;
    spans[2].innerHTML = Math.floor(mintle / 10);
    spans[3].innerHTML = mintle % 10;
    spans[4].innerHTML = Math.floor(miao / 10);
    spans[5].innerHTML = miao % 10;
}
var timeID = setInterval(function () {
    clock();
    timer--;
    if (timer < 0) {
        clearInterval(timeID)
    }
}, 1000)

})