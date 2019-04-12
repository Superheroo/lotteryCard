<template>
  <div id="lottery">
    <p class="title">每单抽手气红包</p>
    <div class="redPacket_box">
      <p class="LotteryNumber">
        拥有
        <span>88</span>次手气红包
      </p>
      <p class="win100">100%中奖</p>
      <div class="redPacket">
        <div @click="DrawLottery()"></div>
        <div @click="DrawLottery()"></div>
        <div @click="DrawLottery()"></div>
        <div @click="DrawLottery()"></div>
      </div>
      <button class="setBtn">重置红包</button>
      <div class="randomRedPacket">
        <p>
          随机获得
          <span>18.8、38.8、88.8、188.8</span>元红包
        </p>
        <p>请在活动结束前使用完您的翻牌次数</p>
      </div>
    </div>
    <div class="getRedPacket_box">
      <div class="getRetPacket">
        已获得红包
        <span>188.8元</span>
      </div>
      <div class="winnerRecord" v-for="item in 10">
        <div class="winnerRecord_left">您于2019年4月11日21：12：12完成抽奖</div>
        <div class="winnerRecord_right">
          抽到红包
          <span>18.8元</span>
        </div>
      </div>
    </div>

    <div class="activity_box">
      <p class="hdxz">活动细则</p>
      <div class="hdxz_content">
        <p class="activity_time">
          活动时间：
          <span>2019.4.15-2019.4.30</span>
        </p>
        <p>1.活动期间，门店每单租赁完成即可参与一次“手气红包”抽奖；</p>
        <p>2.点击任意红包图，抽取“手气红包”，奖金随机，最高可获188.8元；</p>
        <p>3.奖金即刻入账Hi小草个人账户；</p>
        <p>4.本活动最终解释权归Hi小草所有。</p>
      </div>
    </div>
    <!-- 获奖弹窗 -->
    <section class="prize" v-if="prizeGifPop">
      <div class="prize-img">
        <img class="wa" :src="WA" alt>
          <img id="prize" class=" animated zoomIn" :src="thirty_eight" alt>
        <img src="@/assets/img/close.png" alt @click="prizeGifPop = false">
      </div>
    </section>
  </div>
</template>
<script>
import prizesuijihongbao from "@/assets/img/prize-suijihongbao.png";
import wa from "@/assets/img/wa.png";
import yuan18 from "@/assets/img/18text.png";
import yuan38 from "@/assets/img/38text.png";
import yuan88 from "@/assets/img/88text.png";
import yuan188 from "@/assets/img/188text.png";
import { setTimeout } from "timers";
export default {
  name: "lottery",
  data() {
    return {
      prizeCodePop: false,
      prizeGifPop: false,
      prizeImg: prizesuijihongbao,
      eighteen: yuan18,
      thirty_eight: yuan38,
      eighty_eight: yuan88,
      hundred_eighty_eight: yuan188,
      WA: wa,
      isShowOnce: false //显示是否再来一次，
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 关闭中奖窗口
    getAwardCode() {
      this.prizeCodePop = true;
    },
    // 抽奖
    DrawLottery() {
      // const prize = document.querySelector("#prize");
      // console.log(prize)
      this.prizeGifPop = true;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "./lottery.scss";
</style>
