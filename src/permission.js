import router from "./router";
import { getToken } from "./utils/auth";


// if (to.path === '/login') {
//   next('/')
// }else{
//   next()
// }

const whiteList = ['/login', '/register']
router.beforeEach((to,from,next) => {
  console.log('to');
  console.log(to);
  if (getToken()) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // next('/login')
      next(`/login?redirect=${to.fullPath}`)
      
    }
  }
})
