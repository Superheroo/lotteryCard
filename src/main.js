import './common/rem';
import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import animate from 'animate.css'
// import 'vant/lib/vant-css/index.css';
// import 'vant/lib/vant-css/icon-local.css';
//引入基本模板
let echarts = require('echarts/lib/echarts')

// 引入饼状图组件
require('echarts/lib/chart/pie'),
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
Vue.prototype.$echarts = echarts //引入组件
Vue.use(animate)
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Row,
  NumberKeyboard,
  Field,
  Button,
  Loading,
  DatetimePicker,
  Popup,
  Picker,
  PullRefresh,
  Uploader,
  Area
} from 'vant';
Vue.use(Tag);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Swipe);
Vue.use(Toast);
Vue.use(SwipeItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionBigBtn);
Vue.use(GoodsActionMiniBtn);
Vue.use(Row);
Vue.use(NumberKeyboard);
Vue.use(Field);
Vue.use(Button);
Vue.use(Loading);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(PullRefresh);
Vue.use(Uploader);
Vue.use(Area);
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
