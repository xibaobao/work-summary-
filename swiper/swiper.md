###swiper文档
var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,                                 //自动播放
    pagination: '.swiper-pagination',       		//设置分页器
    initialSlide: 2,                                //设定初始化时slide的索引。
    loop: true,                                     //设置为true 则开启loop模式。loop模式：会在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换。
    threshold: 100,                                 //拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
    loopAdditionalSlides: 1,                 	 	//loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
    observer: true,                                 //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,                      		//修改swiper的父元素时，自动初始化swiper
})