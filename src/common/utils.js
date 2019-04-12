import { Toast } from 'vant';


/**
 @method isAvailablePhone
 @param {Stirng} val 电话号码
 @return {Object} Promise
 @description 正则校验11位手机号码
 */
export const isAvailablePhone = val=> {
    let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    return new Promise((resolve, reject)=> {
           if(val == '' || val == undefined || val == null || (val.length > 0 && val.trim().length == 0)) {
            Toast('手机号码不能为空');
            reject();
            }else if(!reg.test(val)) {
                Toast('请输入正确的手机号码');
                reject();
            };
        resolve();
    })
};

/**
 *@method toPageTop
 *@description 回到body元素页面顶部
 */
export const toPageTop = ()=> {
let pageDistance = document.body.scrollTop || document.documentElement.scrollTop,
    step = pageDistance / 20;
    (function flow(){
        let timer;
        if(pageDistance > 0) {
            pageDistance -= step;
            scrollTo(0, pageDistance);
            timer = setTimeout(()=>{
                flow();
            },10)
        }else {
            clearTimeout(timer);
            timer = null;
        }
    })();
};


/**
 *@method toElementPageTop
 *@description 回到页面顶部
 *@param {Stirng} element 要回到指定元素的顶部
 */
export const toElementPageTop = (element)=> {
    let pageDistance = document.querySelector(element).scrollTop,
        step = pageDistance / 20;
        (function flow(){
            let timer;
            if(pageDistance > 0) {
                pageDistance -= step;
                document.querySelector(element).scrollTop = pageDistance;
                timer = setTimeout(()=>{
                    flow();
                },10)
            }else {
                clearTimeout(timer);
                timer = null;
            }
        })()
    };


