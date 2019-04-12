import Vue from 'vue';
import Router from 'vue-router';
import store from './store'

Vue.use(Router);

Router.prototype.goBack = function() {
  this.isBack = true;
  window.history.go(-1);
};


const routes = [
  {
    path:'/',
    name: 'lottery',
    component: () => import('@/view/lottery/lottery'),
    meta: {
      title:'手气红包'
    }
  },
  {
    path:'/openLottery',
    name: 'openLottery',
    component: () => import('@/view/openLottery/openLottery'),
    meta: {
      title:'手气红包'
    }
  },
  // {
  //   path:'/',
  //   name: 'lottery',
  //   component: () => import('@/view/lottery/lottery'),
  //   meta: {
  //     title:'手气红包'
  //   }
  // },
  // {
  //   path:'/',
  //   name: 'turnplate',
  //   component: () => import('@/view/turnplate/turnplate'),
  // }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ 
  routes 
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  let  pageType = to.meta.pageType;
  let pageSite = to.meta.pageSite;

  if(pageType !== '') {
    store.commit('changeChildPage', pageType);
  }
  if (title) {
    // document.title = title;
    store.commit('changeTitle', title)
  }
  if(pageSite !== '') {
    store.commit('changeMainPage', pageSite)
  }
  next();
});

export {
  router
};
