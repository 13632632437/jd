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
    logoA.style.backgroundPosition = "0 0"
  }, 1000)
}
// 轮播图部分js
let index = 0;
// 获取元素
let swiperList = $("#swiper>ul>li");
setInterval(function () {
  if (index > swiperList.length) index = 0;
  // eq根据下标筛选元素 - fadeIn淡入显示 - siblings他的兄弟元素 - fadeOut淡出 - （2000）淡入淡出动画的时长
  swiperList.eq(index).fadeIn(2000).siblings().fadeOut(2000);
  index++;
}, 3000)