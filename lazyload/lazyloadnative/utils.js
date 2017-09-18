/**
 * Created by 茜宝 on 2016/12/1.
 */
var utils = {
    win: function (attr, val) {
        if (typeof val !== 'undefined') { // scrollTop scrollLeft
            document.documentElement[attr] = val;
            document.body[attr] = val;
            return;
        }
        return document.documentElement[attr] || document.body[attr];
    },
        //该元素的外边框距离父级的偏移量
    offset: function (element) {
        var l = null;
        var t = null;
        l += element.offsetLeft;
        t += element.offsetTop;
        var parent = element.offsetParent;
        while (parent) {
            if (window.navigator.userAgent.indexOf('MSIE 8') == -1) {
                l += parent.clientLeft;
                t += parent.clientTop;
            }
            l += parent.offsetLeft;
            t += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {left: l, top: t};
    },
    //将类数组转化为数组
    listToArray: function (likeAry) {
        try {
            return Array.prototype.slice.call(likeAry, 0);
        } catch (e) {
            var ary = [];
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
            return ary;
        }
    },

    jsonParse: function (jsonStr) {
        return 'JSON' in window ? JSON.parse(jsonStr) : eval("(" + jsonStr + ")");
    },
    //获取随机数
    getRandom: function (n, m) {
        n = Number(n);
        m = Number(m);
        if (isNaN(n) || isNaN(m)) {
            return Math.random();
        }
        if (n > m) {
            var temp = n;
            n = m;
            m = temp;
            temp = null;
        }
        return Math.round(Math.random() * (m - n) + n);
    },
    //获取元素生效的样式
    getCss : function (ele,attr){
        var val = null;
        if(window.getComputedStyle){
            val =  window.getComputedStyle(ele,null)[attr];
        }else{ // for ie6-8
            if(attr == 'opacity'){
                val = ele.currentStyle.filter; // alpha(opacity=50.5)
                var reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val = reg.test(val) ? reg.exec(val)[1]/100 : 1;
            }else{
                val = ele.currentStyle[attr];
            }
        }
        // 200px -59.45px  0.9 ....   block
        var reg = /^-?\d+(\.\d+)?(px|pt|em|rem|deg)?$/;
        if(reg.test(val)){
            val = parseFloat(val);
        }
        return val;
    },
    setCss: function (ele,attr,val) {
        if(attr=='opacity'){
            ele.style.opacity=val;
            ele.style.filter='alpha(opacity='+val*100+')';
            return;
        }
        if(attr=='float'){
            ele.style.cssFloat=val;
            ele.style.styleFloat=val;
            return;
        }
        var reg = /^(width|height|left|top|right|bottom|(margin|padding)(Left|Right|Top|Bottom)?)$/;
        if(reg.test(attr)){
            if(!isNaN(val)){
                val += 'px';
            }
        }
        ele.style[attr]=val;
    }
};
// clientWidth, clientHeight, offsetWidth, offsetHeight
// clientLeft, clientTop
// offsetWidth-clientWidth-clientLeft
// scrollWidth scrollHeight scrollTop scrollLeft
