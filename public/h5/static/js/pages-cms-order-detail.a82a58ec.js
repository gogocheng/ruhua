(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-order-detail"],{"0ada":function(t,i,e){"use strict";var s=e("20f9"),a=e.n(s);a.a},"20f9":function(t,i,e){var s=e("411f");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("6df96c06",s,!0,{sourceMap:!1,shadowMode:!1})},"411f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".detail .tit[data-v-b47d3d50]{padding:15px 10px;border-bottom:1px solid #eef0ef;font-size:16px}.detail .tag-e .goods[data-v-b47d3d50]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;background-color:#fff;padding:10px;box-sizing:border-box;background-color:#fafafa;border-bottom:1px solid #eef0ef}.detail .tag-e .goods img[data-v-b47d3d50]{width:%?160?%;height:%?160?%}.detail .tag-e .goods_02[data-v-b47d3d50]{width:80%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?160?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?10?%;padding-left:%?20?%}.detail .tag-e .goods_title[data-v-b47d3d50]{height:60px;overflow:hidden;line-height:20px;font-weight:600}.detail .tag-e .good_p[data-v-b47d3d50]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.detail .tag-e .good_p .good_price[data-v-b47d3d50]{color:#f04e42;font-weight:600}.detail .list[data-v-b47d3d50]{padding:0 10px;font-size:15px}.detail .list .list_01[data-v-b47d3d50]{border-bottom:1px solid #eef0ef;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:15px 3px}.detail .list .list_01 .list_01_r[data-v-b47d3d50]{color:#959796}",""])},7596:function(t,i,e){"use strict";var s,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"detail"},[e("v-uni-view",{staticClass:"tit"},[t._v("订单编号："+t._s(t.order.order_num))]),e("v-uni-view",{staticClass:"tag-e"},[e("v-uni-view",{staticClass:"goods "},[e("v-uni-view",[e("img",{attrs:{src:t.order.goods_picture}})]),e("v-uni-view",{staticClass:"goods_02"},[e("v-uni-view",{staticClass:"goods_title"},[t._v(t._s(t.order.message))]),e("v-uni-view",{staticClass:"good_p"},[e("v-uni-view",{staticClass:"good_price"},[t._v("¥"+t._s(t.order.goods_money))]),e("v-uni-view",{staticClass:"i"},[t._v("x "+t._s(t.order.num))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"list_01"},[e("v-uni-view",{staticClass:"list_01_l"},[t._v("下单时间")]),e("v-uni-view",{staticClass:"list_01_r"},[t._v(t._s(t.order.pay_time))])],1),e("v-uni-view",{staticClass:"list_01"},[e("v-uni-view",{staticClass:"list_01_l"},[t._v("总金额")]),e("v-uni-view",{staticClass:"list_01_r"},[t._v(t._s(t.order.order_money))])],1),e("v-uni-view",{staticClass:"list_01"},[e("v-uni-view",{staticClass:"list_01_l"},[t._v("收货地址")]),e("v-uni-view",{staticClass:"list_01_r"},[t._v(t._s(t.order.receiver_address))])],1)],1)],1)},o=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return s})},"9eca":function(t,i,e){"use strict";e.r(i);var s=e("7596"),a=e("b8cb");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("0ada");var d,n=e("f0c5"),r=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"b47d3d50",null,!1,s["a"],d);i["default"]=r.exports},b8cb:function(t,i,e){"use strict";e.r(i);var s=e("ec3f"),a=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);i["default"]=a.a},ec3f:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{id:"",order:""}},onLoad:function(t){this.id=t.id,this.get_order()},methods:{get_order:function(){var t=this;this.$api.http.post("shop/get_one_order",{id:this.id}).then(function(i){t.order=i})}},onPullDownRefresh:function(){this.get_order(),setTimeout(function(){uni.stopPullDownRefresh()},2e3)}};i.default=s}}]);