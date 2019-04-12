<template>
    <main class="stimulate">
        <section class="theme">
            <div class="theme-text">
                <img src="@/assets/img/theme-text.png" alt="" class="theme-text-img">
                <div style="margin-bottom:.3rem;">
                    <span class="activity-time-text">活动时间：</span>
                    <span class="activity-time">1月28日-2月28日</span>
                </div>
                 <div class="theme-top-step">
                    <img src="@/assets/img/theme-step.png" alt="" class="step-img">
                    <div class="theme-top-champion">
                        一等奖（10名）
                    </div>
                    <div class="theme-top-second">
                        二等奖(100名）
                    </div>
                    <div class="theme-top-omg">
                        三等奖（1000名）
                    </div>
                    <!-- 冠军销售数量 -->
                    <div class="theme-top-champion-num">
                        华为P20手机
                    </div>
                        <!-- 亚军销售数量 -->
                    <div class="theme-top-second-num">
                       小米电饭煲
                    </div>
                    <!-- 季军销售数量 -->
                    <div class="theme-top-omg-num">
                        Hi小草抱枕
                    </div>
                </div>
            </div>
        </section>
        <section class="sell-rolue">
            <div class="sell-rolue-description">
                <div class="sell-description-title">
                    活动细则
                </div>
                <div class="sell-description-text">
                （一）新租送保险 壕礼大派送
                </div>
                <div style="margin-bottom: .2rem;">
                    1. 活动期间，凡门店租赁Hi小草智能云电池的用户即可参与“百万壕礼新春大派送”活动；
                    2.租赁完成，用户即可参与“幸运大转盘”抽奖，并免费获得Hi小草“电池盗抢险”一份，一年以内电池被盗包赔； 
                </div>
                 <div class="sell-description-text">
                （二）续租送保险 壕礼大派送
                </div>
                <div style="margin-bottom:.2rem;">
                    1.活动期间，所有Hi小草老用户完成电池续租即可参与“百万壕礼新春大派送”活动；
                    2.打开微信公众号“Hi小草电池租赁”，点击“我要租赁”—“个人中心”—“我要续租”完成续租；
                    3.续租完成，用户即可参与“幸运大转盘”抽奖，并免费获得Hi小草“电池盗抢险”一份，一年以内电池被盗包赔（48V12A、60V12A用户除外）；
                </div>
                <div>
                    注：所有获奖新老用户凭中奖码和身份证原件，于活动结束后7个工作内至Hi小草电池租赁门店领取奖品；
                    Hi小草“以旧换新0租金”活动自2019年2月20日起正式取消；
                    本活动最终解释权归Hi小草所有。
                </div>
                <img src="@/assets/img/denglong.png" alt="" style="width:2.59rem;height:.89rem;position:absolute;bottom:-.5rem;left:50%;transform:translateX(-50%);">
            </div>
        </section>
    </main>
</template>
<script>
import areaList from './area'

export default {
    name:'merchants',
    data() {
        return {
            joinName:'',
            joinPhone:'',
            population:'',
            message:'',
            elementHight:'',
            bodyHeight:'',
            isShow: true,
            show: false,
            areaList:areaList,
            province:'-省-',
            city:'-市-',
            area:'-区-'
        }
    },
    watch: {
        elementHight(val) {
           if(val < this.bodyHeight) {
               this.isShow = false;
               return;
           }
           this.isShow = true;
        }
    },
    mounted() {
        // this.$nextTick(function() {
        //      setTimeout(()=> {
        //         this.elementHight = document.body.scrollHeight;
        //         this.bodyHeight = this.elementHight;
        //          window.addEventListener('resize', ()=> {
        //             this.elementHight = document.getElementById('merchants').clientHeight;
        //         }) 
        //      },50)
        // })
      
    },
    methods:{
        cancel() {
            this.show = false;
        },
        confirm(val) {
            this.province = val[0].name;
            this.city = val[1].name;
            this.area = val[2].name;
            this.show = false;
            // console.log(val);
        }
    }
}
</script>


<style lang="scss" scoped>
    @import './merchants.scss';
</style>
