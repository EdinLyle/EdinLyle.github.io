//时间和日期显示的部分获取的id值
const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
//网页加载部分获取的id值
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

//对于网页部分的时间的设计部分
// 获取整年，
const currentYear = new Date().getFullYear();
//创建新年对象，并指定新年为1月1日。即在今年2023年的基础上+1年，然后准点
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// 设置背景的年份
year.innerText = currentYear + 1;

// 更新倒计时时间
function updateCountdown() {
  const currentTime = new Date(); //获取旧的年份
  const diff = newYearTime - currentTime;  //这里计算得到的是毫秒值

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // 将数值添加到文档对象模型中
  //使用了三元运算符
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h; 
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

//网页加载部分的动画
// 在倒计时开始之前显示旋转图标
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// 每秒执行一次操作
setInterval(updateCountdown, 1000); //设置每秒调用一次倒计时
