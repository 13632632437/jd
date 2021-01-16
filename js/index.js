let logoA = document.getElementById("logoA");
// 鼠标移入显示gif
logoA.onmouseenter = function () {
  // gif动画只执行一次，拼接个时间戳就没事了
  let time = Date.now();
  logoA.style.backgroundImage = 'url("./image/log-gif.gif?time=' + time + '")';
  // gif图大小不标准，移动了下
  logoA.style.backgroundPosition = "0 -30px";
}
// 鼠标移出还源，延长点的时间让gif动画结束
logoA.onmouseleave = function () {
  setTimeout(() => {
    logoA.style.backgroundImage = 'url("./image/ia_100000200.png")';
    logoA.style.backgroundPosition = "0 0";
  }, 1000)
}




// 轮播图部分js
let index = 0;
// 获取元素
let swiperList = $("#swiper>ul>li");
// 执行轮播图自动动画函数,并得到一个定时器
let timer = null;
timer = startSwiper();

// 鼠标移入轮播图应该停止自动播放
let swiper = $("#swiper");
// jquery绑定事件 鼠标移入事件
swiper.bind("mouseenter", function () {
  // 清除计时器即可停止自动播放
  clearInterval(timer);
})
// 鼠标移出自动播放
swiper.bind("mouseleave", function () {
  // 重新开始动画,生成新的定时器
  timer = startSwiper();
});

// 轮播图自动动画
function startSwiper () {
  return setInterval(function () {
    if (index > swiperList.length) index = 0;
    // eq根据下标筛选元素 - fadeIn淡入显示 - siblings他的兄弟元素 - fadeOut淡出 - （2000）淡入淡出动画的时长
    swiperList.eq(index).fadeIn(2000).siblings().fadeOut(2000);
    index++;
  }, 3000);
}