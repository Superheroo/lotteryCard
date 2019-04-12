import axios from '@/common/api.req';
import Vue from 'vue'
export const getUrlKey = (name,url) => {
    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(url)||[,""])[1].replace(/\+/g,'%20'))||null;
}
export const getIsJoinByToKen = (token) => {
    return axios.request({
        url: '/api/app/operation/activity/winprize/leaseWinPrizeRecord/isJoinPrize?token='+token,
        method: 'GET',
      });
}
export const winPrize = (token) => {
    return axios.request({
        url: '/api/app/operation/activity/winprize/leaseWinPrizeRecord/winPrize?token='+token,
        method: 'POST',
      });
}
export const getWinPrizeRecordByToKen = (token) => {
    return axios.request({
        url: '/api/app/operation/activity/winprize/leaseWinPrizeRecord/winPrizeRecordByUser?token='+token,
        method: 'GET',
      });
}