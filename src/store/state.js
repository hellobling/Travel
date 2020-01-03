let defaultCity = '上海'
// 如果用户禁止了本地存储功能或者使用隐身模式，浏览器就直接抛出异常网页就无法运行,用try catch
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
