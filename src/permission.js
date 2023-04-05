import router from "./router";
import { getToken } from "./utils/auth";


const whiteList = ['/login', '/register']
router.beforeEach((to,from,next) => {
  console.log('token的值',getToken());
  console.log('to.path',to.path);
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    }else{
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
