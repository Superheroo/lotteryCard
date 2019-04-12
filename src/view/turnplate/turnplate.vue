<template>
    <main class="stimulate">
        <section class="theme">
            <aside class="turnplate">
                <img :src="img" alt="">
                <img src="@/assets/img/turnplate-start.png" alt="" @click="startTurnplate()">
            </aside>
            <article class="turnplate-person">
                <!-- <div>
                    您还有{{count}}次抽奖机会
                </div> -->
                <div v-if="isShowRecord">
                    中奖信息:{{message}}
                </div>
            </article>
        </section>

        <!-- 获奖弹窗 -->
        <section class="prize" v-if="prizeGifPop">
            <div class="prize-img">
                <img :src="prizeImg" alt="" >
                <img src="@/assets/img/close.png" alt="" @click="prizeGifPop = false">
            </div>
            <div class="prize-code">
                <div class="prize-get-code" style="margin-bottom: .3rem;margin-top: 1.5rem;" v-if="!isShowOnce"  @click="getAwardCode">
                     获取领奖码
                </div>
                <!-- <div class="prize-code-again" style="margin-top: 1.3rem;"  v-if="isShowOnce" @click="startTurnplate()">
                    再来一次
                </div> -->
            </div>
        </section>


        <section class="prize" v-if="prizeGifPopshuijihongbao">
            <div class="prize-img">
                <img :src="prizeImg" alt="" >
                <span class="money">666</span>
                <img src="@/assets/img/close.png" alt="" @click="prizeGifPopshuijihongbao = false">
            </div>
            <!-- <div class="prize-code">
                <div class="prize-get-code" style="margin-bottom: .3rem;margin-top: 1.5rem;" v-if="!isShowOnce"  @click="getAwardCode">
                     获取领奖码
                </div>
                <div class="prize-code-again" style="margin-top: 1.3rem;"  v-if="isShowOnce" @click="startTurnplate()">
                    再来一次
                </div>
            </div> -->
        </section>


        <!-- 领奖码弹窗 -->
        <section class="prize-code-pop" v-if="prizeCodePop">
            <div class="prize-code-box">
                <div class="prize-code-title">
                    领奖码
                </div>
                <div style="font-size: .24rem;color:#333;text-align:center;margin:.15rem 0 .1rem;font-weight: bold;">
                    您的领奖码为
                </div>
                <div class="prize-code-number">
                    {{awardCode}}
                </div>
                <div style="font-size: .22rem;color: #666;line-height:.33rem;">
                    领奖码作为您领取奖品的重要凭证，请妥善保管领奖码，切勿泄露。请于活动结束五个工作日后携带电池租户本人携带本人身份证前往原租赁电池门店核对领奖码后领取奖品。领奖日起一个月内未前往领取视为放弃。
                </div>
                <img src="@/assets/img/close.png" alt="" class="close-code-pop" @click="prizeCodePop = false">
            </div>
        </section>
    </main>
</template>
<script>
import huawei from "@/assets/img/turnplate-gif.png"
import zhuangpanGif from "@/assets/img/zhuangpanGif.gif"
import baozhen from "@/assets/img/baozhen@2x.png"
import dianfanbao from "@/assets/img/dianfanbao@2x.png"
import xiexie from "@/assets/img/xiexie@2x.png"
import prizeHuawei from "@/assets/img/prize-huawei.png"
import prizeMi from "@/assets/img/prize-mi.png"
import prizeBaozhen from "@/assets/img/prize-hixiaocao.png"
import prizeyusang from "@/assets/img/prize-yusang.png"
import prizeshuibei from "@/assets/img/prize-shuibei.png"
import prizeyaoshikou from "@/assets/img/prize-yaoshikou.png"
import prizehongbao from "@/assets/img/prize-hongbao.png"
import prizesuijihongbao from "@/assets/img/prize-suijihongbao.png"
import prizeNone from "@/assets/img/prize-none.png"
import { getIsJoinByToKen,getUrlKey,winPrize,getWinPrizeRecordByToKen } from "./turnplateApi"
export default {
    name:'turnplate',
    data() {
        return {
            prizeGifPopshuijihongbao:true,
            message:'',
            prizeCodePop:false,
            prizeGifPop:false,
            img:huawei,//"@/assets/img/prize-huawei.png"
            prizeImg:prizesuijihongbao,
            count:0,
            isShowOnce:false, //显示是否再来一次，
            tokenData:undefined,
            isJoin:false,  //是否有参加抽奖资格
            awardCode:'',  //获奖码
            isTurnplate:false, //是否点击了抽奖
            isShowRecord:false,
            isCanTurnplate : false,
        }
    },
    created(){
        this.getCode(window.location.href);
    },
    mounted() {
      
    },
    methods:{
        getWinPrizeRecord(){
            getWinPrizeRecordByToKen(this.tokenData).then(response =>{
                    let res  = response.data; 
                    if(res.code == "200"){
                        if(res.data.length == 0){
                            this.isShowRecord = false;
                            this.isCanTurnplate = true;
                            return;
                        }
                        this.isCanTurnplate = false;
                        this.isShowRecord = true;
                        let list = res.data[0];
                        let prizeTypLet = list.prizeType;
                        switch(prizeTypLet){
                            case "0" :
                                //未中奖
                                this.message = "啊哦~您没有中奖";
                            break;
                            case "1":
                                this.message = "恭喜您中一等奖啦！领奖码："+list.prizeNumber;
                            break;
                            case "2":
                                this.message = "恭喜您中二等奖啦！领奖码："+list.prizeNumber;
                            break;
                            case "3":
                                this.message = "恭喜您中三等奖啦！领奖码："+list.prizeNumber;
                            break;
                            case "4":
                                this.message = "恭喜您中四等奖啦！领奖码："+list.prizeNumber;
                            break;
                            case "5":
                                this.message = "恭喜您中五等奖啦！领奖码："+list.prizeNumber;
                            break;
                            case "6":
                                this.message = "恭喜您中六等奖啦！领奖码："+list.prizeNumber;
                            break;
                            case "7":
                                this.message = "恭喜您获得最高100元现金红包";
                            break;
                            case "8":
                                this.message = "恭喜您获得随机红包小额红包一个";
                            break;
                        }
                    }
            });
        },
        getCode(val){ //获取请求的token值
            let token = getUrlKey("token",val);
            if(token !== null ) {
                this.tokenData = token;
                this.getWinPrizeRecord();
                this.getIsJoin();
            }else {
                // this.code = code;
                this.$toast("请求出错，请稍后再试");
            }
        },
        getIsJoin(){
            getIsJoinByToKen(this.tokenData).then(response=>{
                let res = response.data;
                if(res.code == "200" &&res.data == "0"){  //没有抽奖机会的
                    this.isTurnplate = true;
                }else if(res.code == "200"&& res.data != "0"){ //有抽奖机会的
                    this.isTurnplate = false;
                    this.count = res.data;
                }else if(res.code ==  "800500"){
                    this.$toast(res.msg);
                }else {
                    this.$toast("服务器开小差，请联系客服");
                }
            });
        },
        startTurnplate(){
            //点击抽奖按钮
            //设置为git动画图  zhuangpanGif
            // if(this.isShowOnce&&this.count>0){
            //     this.img = zhuangpanGif;
            //     this.count = this.count - 1;
            //     if(this.count<=0){
            //         this.isTurnplate = true;
            //     }
            //     //没有中奖的再来一次
            //     this.prizeGifPop = false;
            //     setTimeout(()=>{
            //         this.img = xiexie;
            //         this.prizeImg = prizeNone;
            //         setTimeout(()=>{
            //             this.prizeGifPop = true;
            //         },500);
            //     },2000);
            // }else 
            if(this.canClickStart){
                return;
            }
            if (this.isTurnplate){
                if( this.isCanTurnplate){
                    this.$toast("您还不能参与抽奖，赶紧去完成租赁或续租来试试运气吧！");
                }else{
                    this.$toast("啊哦~您的抽奖次数已用完啦！");
                }
                return
            }
            else{ //进行抽奖
                this.canClickStart = true;
                this.img = zhuangpanGif;
                setTimeout(()=>{
                    winPrize(this.tokenData).then(response =>{
                        let res  = response.data; //console.log();
                        if(res.code == "200"){
                            this.isTurnplate = true;
                            this.getWinPrizeRecord();
                            let prizeTypLet = res.data.prizeType;
                            this.count = 0;
                            switch(prizeTypLet){
                                case "0" :
                                    //未中奖
                                    this.prizeImg = prizeNone;
                                    this.isShowOnce = true;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = xiexie;
                                    },500);
                                    // this.count = 2;
                                break;
                                case "1":
                                    this.prizeImg = prizeHuawei;
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = huawei;
                                    },500);
                                break;
                                case "2":
                                    this.prizeImg = prizeMi
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = dianfanbao;
                                    },500);
                                break;
                                case "3":
                                    this.prizeImg = prizeBaozhen
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = baozhen;
                                    },500);
                                break;
                                case "4":
                                    this.prizeImg = prizeyusang
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = baozhen;
                                    },500);
                                break;
                                case "5":
                                    this.prizeImg = prizeshuibei
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = baozhen;
                                    },500);
                                break;
                                case "6":
                                    this.prizeImg = prizeyaoshikou
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = baozhen;
                                    },500);
                                break;
                                case "7":
                                    this.prizeImg = prizehongbao
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = baozhen;
                                    },500);
                                break;
                                case "8":
                                    this.prizeImg = prizesuijihongbao
                                    this.isShowOnce = false;
                                    this.awardCode = res.data.prizeNumber;
                                    setTimeout(()=>{
                                        this.prizeGifPop = true;
                                        this.img = baozhen;
                                    },500);
                                break;
                            }
                        }else  if(res.code =="800500"){
                            this.$toast(res.msg);
                        }else {
                            this.$toast("服务器开小差，请联系客服");
                        }
                        this.canClickStart = false;
                    })
                },3000);
            }
        },
        getAwardCode(){
            this.prizeCodePop = true;
        }
    }
}
</script>


<style lang="scss" scoped>
    @import './turnplate.scss';
</style>
