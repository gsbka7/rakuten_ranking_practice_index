"use strict";(self["webpackChunkrakuten_ranking_practive"]=self["webpackChunkrakuten_ranking_practive"]||[]).push([[569],{5569:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var s=function(){var e=this,t=e._self._c;return t("div",e._l(e.items,(function(a,s){return t("div",{key:s,staticClass:"item"},[t("div",{staticClass:"rank"},[t("span",{staticClass:"num"},[e._v(e._s(a.Item.rank))]),t("span",{staticClass:"text"},[e._v("位")])]),t("img",{attrs:{src:a.Item.mediumImageUrls[0]["imageUrl"],alt:""}}),t("div",{staticClass:"info"},[t("a",{attrs:{href:a.Item.itemUrl,target:"_blank"}},[t("div",{staticClass:"item-name"},[e._v(e._s(a.Item.itemName))])]),t("div",{staticClass:"review"},[0!==a.Item.reviewCount?t("div",{staticClass:"start"},[t("div",{staticClass:"start-top"},[a.Item.reviewAverage>=0?t("span",[e._v("★")]):e._e(),a.Item.reviewAverage>=1.99?t("span",[e._v("★")]):e._e(),a.Item.reviewAverage>=2.99?t("span",[e._v("★")]):e._e(),a.Item.reviewAverage>=3.99?t("span",[e._v("★")]):e._e(),a.Item.reviewAverage>=4.99?t("span",[e._v("★")]):e._e()]),e._m(0,!0)]):e._e(),0!==a.Item.reviewCount?t("div",{staticClass:"count"},[e._v("レビュー("+e._s(a.Item.reviewCount)+"件)")]):e._e()]),t("a",{attrs:{href:a.Item.shopUrl,target:"_blank"}},[t("div",{staticClass:"shop-name"},[e._v(e._s(a.Item.shopName))])])]),t("div",{staticClass:"purchase"},[t("div",{staticClass:"price"},[e._v(e._s(a.Item.itemPrice)+"円")]),0==a.Item.postageFlag?t("div",{staticClass:"ship-fee"},[e._v("送料無料")]):e._e()])])})),0)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"start-bottom"},[t("span",[e._v("★")]),t("span",[e._v("★")]),t("span",[e._v("★")]),t("span",[e._v("★")]),t("span",[e._v("★")])])}];const r="https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&elements=itemName%2CitemPrice%2CitemUrl%2CmediumImageUrls%2Crank%2CshopName%2CshopUrl%2CreviewAverage%2CreviewCount%2CpostageFlag&period=realtime&page=4&applicationId=1048875198466164874";var n={name:"Rank60",data(){return{items:[]}},mounted(){this.getData()},methods:{getData(){this.$axios.get(r).then((e=>{console.log(e.data.Items),this.items=e.data.Items}))}}},v=n,m=a(1001),l=(0,m.Z)(v,s,i,!1,null,null,null),_=l.exports}}]);
//# sourceMappingURL=569.0d803315.js.map