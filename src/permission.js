import router from './router'
import store from './stores'
import Nprogress from './nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth' 


router.beforeEach((to,from,next) => {
  Nprogress.start()
  next()
})

router.afterEach(() => {
  Nprogress.done()
})