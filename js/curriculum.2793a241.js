(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],d=0,g=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&g.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={curriculum:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/techcourse/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([2,"chunk-vendors","chunk-common"]),n()})({"08a4":function(t,e,n){t.exports=n.p+"img/onboard.26c7d793.jpg"},2:function(t,e,n){t.exports=n("4c42")},"4c42":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("402c"),i=n("e26c"),s=(n("a1a3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("PageBanner",{attrs:{pageBanner:t.pageBanner}}),n("v-sheet",{staticClass:"mx-auto lh-1-8",class:t.smAndUp?"sheet-padding":"pa-4 mt-12",attrs:{"max-width":"600"}},[n("h1",{staticClass:"mb-4 text-center font-hanna font-weight-regular"},[t._v("5단계의 커리큘럼과 문화")]),n("p",{staticClass:"text-center mt-2"},[t._v(" 우아한테크코스는 기술적인 교육과정뿐만 아니라 소프트 스킬도 중요하게 생각하고 있습니다. "),t.smAndUp?n("br"):t._e(),t._v(" 그래서 5단계의 레벨 동안 웹 백엔드, 웹 프론트엔드 및 모바일 안드로이드 과정뿐만 아니라, "),t.smAndUp?n("br"):t._e(),t._v(" 말하기와 글쓰기를 같이 진행하고 있습니다. ")])]),n("v-sheet",{staticClass:"mx-auto mb-12 pb-12 lh-1-8",attrs:{"max-width":"960"}},[n("v-tabs",{attrs:{color:"cyan",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e){return n("v-tab",{key:e._id},[t._v(" "+t._s(e.title)+" ")])})),1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.curriculums,(function(e){return n("v-tab-item",{key:e._id},[n("v-row",t._l(e.courses,(function(a,r){return n("v-col",{key:a._id,attrs:{cols:"12"}},[t.smAndUp?n("v-card",{staticClass:"pt-4 ma-4",attrs:{flat:""}},[n("div",{staticClass:"d-flex"},[n("v-avatar",{staticClass:"ma-6",attrs:{size:"100",tile:""}},[n("v-img",{staticClass:"mx-auto",attrs:{src:a.imageUrl}})],1),n("div",{staticClass:"px-8 py-4"},[n("h2",{staticClass:"font-hanna font-weight-regular"},[t._v(t._s(r===e.courses.length-1?"":r+". ")+t._s(a.title))]),n("p",{staticClass:"mt-4",domProps:{innerHTML:t._s(a.contents)}})])],1)]):n("v-card",{staticClass:"card-elevation pt-4 ma-4",attrs:{"max-width":"480"}},[n("v-img",{staticClass:"mx-auto",attrs:{src:a.imageUrl,width:"100"}}),n("div",{staticClass:"px-8 py-4"},[n("h2",{staticClass:"font-hanna font-weight-regular"},[t._v(t._s(r===e.courses.length-1?"":r+". ")+t._s(a.title))]),n("p",{staticClass:"mt-4",domProps:{innerHTML:t._s(a.contents)}})])],1)],1)})),1)],1)})),1)],1)],1)}),c=[],o=n("d56f"),l=n("ebad"),u=n("8dee"),d=n.n(u),g=n("f817"),b={_id:d.a.generate(),imageUrl:n("551c"),title:"테코톡/글쓰기/레벨 인터뷰",contents:'✅ 현장에서 필요한 말하기, 글쓰기 능력을 향상하기 위해 진행하는 우아한테크코스만의 문화입니다. <br/>\n<div>🔗<a\n      href="https://www.youtube.com/playlist?list=PLgXGHBqgT2TvpJ_p9L_yZKPifgdBOzdVH"\n      target="_blank"\n      class="v-btn v-btn--flat v-btn--text theme--light v-size--default"\n      ><span class="v-btn__content"\n        ><i aria-hidden="true" class="v-icon notranslate mr-1 mdi mdi-youtube theme--light"></i>\n        [테코톡] 유튜브 채널\n      </span></a\n    >\n    <br />\n    🔗<a\n      href="https://techblog.woowahan.com"\n      target="_blank"\n      class="v-btn v-btn--flat v-btn--text theme--light v-size--default"\n      ><span class="v-btn__content"\n        ><i aria-hidden="true" class="v-icon notranslate mr-1 mdi mdi-github theme--light"></i>\n        [글쓰기] 우아한테크코스 이야기\n      </span></a>\n    </div>\n    '},p={name:"CurriculumPage",mixins:[g["a"]],components:{Layout:l["a"],PageBanner:o["a"]},data:function(){return{tab:null,tabs:[{_id:d.a.generate(),title:"모바일 안드로이드"},{_id:d.a.generate(),title:"웹 프론트엔드"},{_id:d.a.generate(),title:"웹 백엔드"}],pageBanner:{imageUrl:n("a0e7"),title:"교육과정 안내",subtitle:"우아한테크코스는 총 5단계의 레벨로 이루어져 있습니다."},curriculums:[{_id:d.a.generate(),title:"모바일 안드로이드",courses:[{_id:d.a.generate(),imageUrl:n("08a4"),title:"온보딩",contents:"✅ 우아한테크코스가 다루는 주제에 대해 이해도를 높이고 소프트 스킬을 증진하기 위한 활동을 합니다."},{_id:d.a.generate(),imageUrl:n("0251"),title:"프로그래밍 기본",contents:"\n✅ 코틀린 프로그래밍 언어에 대한 기본 문법을 익혀 프로그래밍합니다.<br/>\n✅ 읽기 좋은 코드를 구현하는 것이 왜 중요한지와 코드를 개선해 읽기 좋은 코드로 변경해 보는 경험을 합니다."},{_id:d.a.generate(),imageUrl:n("e75d"),title:"모바일 프로그래밍",contents:"\n✅ 안드로이드 프레임워크를 기반으로 아키텍처를 설계하고 모바일 애플리케이션을 개발하는 경험을 합니다.<br/>\n✅ 안드로이드에서 UI를 그리는 과정을 이해합니다.<br/>\n✅ 모바일 안드로이드 애플리케이션에서 고려해야 할 테스트의 범위와 종류에 대해 알아봅니다.<br/>\n✅ 서버와 통신하고 안드로이드에서 데이터를 관리하는 방법을 학습합니다."},{_id:d.a.generate(),imageUrl:n("66cd"),title:"팀 프로젝트",contents:"\n✅ 개발 프로세스 기반으로 프로젝트를 진행, 협업하는 경험을 합니다.<br/>\n✅ 서비스를 기획, 구현, 배포해 실사용자가 사용하도록 개발하는 경험을 합니다."},{_id:d.a.generate(),imageUrl:n("c3ef"),title:"모바일 프로그래밍 심화, 팀 프로젝트",contents:"\n✅ 팀 프로젝트로 진행한 결과물을 유지 보수하며 서비스를 운영하는 경험을 합니다.<br/>\n✅ 레거시 코드를 점진적으로 리팩터링하고 애플리케이션 설계 역량을 높입니다.<br/>\n✅ 의존성 주입, 비동기 프로그래밍 및 선언형 UI에 대해 학습합니다.<br/>\n✅ 실제 모바일 애플리케이션을 운영하면서 발생할 수 있는 다양한 경우를 다룹니다."},{_id:d.a.generate(),imageUrl:n("7a1d"),title:"개인 학습, 취업 준비",contents:"\n✅ 레벨1 ~ 레벨4 과정에서 부족한 부분에 대한 개인별 추가 학습을 합니다.<br/>\n✅ 이력서 작성, 레벨 인터뷰를 통해 취업 준비를 합니다.<br/>\n✅ 리쿠르팅 데이를 통해 기업과 만남의 시간을 가집니다."},b]},{_id:d.a.generate(),title:"웹 프론트엔드",courses:[{_id:d.a.generate(),imageUrl:n("08a4"),title:"온보딩",contents:"✅ 우아한테크코스가 다루는 주제에 대해 이해도를 높이고 소프트 스킬을 증진하기 위한 활동을 합니다."},{_id:d.a.generate(),imageUrl:n("0251"),title:"프로그래밍 기본",contents:"\n✅ 프론트엔드의 기본이 되는 HTML, CSS, JavaScript에 대한 기본 문법을 익혀 프로그래밍합니다. <br/>\n✅ 구현한 코드에 대해 E2E 테스트를 작성하고 읽기 좋은 코드로 리팩터링합니다."},{_id:d.a.generate(),imageUrl:n("92d7"),title:"웹 프로그래밍",contents:"\n✅ React 기반의 프론트엔드 웹 애플리케이션을 제작합니다.<br/>\n✅ 재사용할 수 있는 컴포넌트를 고민하고 설계합니다.<br/>\n✅ 상태 관리 라이브러리를 활용하며 상태 관리의 필요성에 대해 이해합니다.<br/>\n✅ 프론트엔드 웹 애플리케이션에서 고려해야 할 테스트 범위와 종류에 대해 학습합니다."},{_id:d.a.generate(),imageUrl:n("66cd"),title:"팀 프로젝트",contents:"\n✅ 개발 프로세스 기반으로 프로젝트를 진행, 협업하는 경험을 합니다.<br/>\n✅ 서비스를 기획, 구현, 배포해 실사용자가 사용하도록 개발하는 경험을 합니다."},{_id:d.a.generate(),imageUrl:n("c3ef"),title:"웹 프로그래밍 심화, 팀 프로젝트",contents:"\n✅ 팀 프로젝트로 진행한 결과물을 유지 보수하며 서비스를 운영하는 경험을 합니다.<br/>\n✅ 레거시 코드를 점진적으로 리팩터링하고 애플리케이션 설계 역량을 높입니다.<br/>\n✅ 브라우저의 동작 원리와 네트워크에 대해 이해하고 프론트엔드 웹 애플리케이션의 성능을 최적화합니다.<br/>\n✅ 웹 표준과 웹 접근성을 준수하고 시맨틱 마크업을 위해 중요한 요소들을 이해하고 구현합니다.<br/>\n✅ 프론트엔드 웹 애플리케이션의 유형에 따른 배포 전략을 이해합니다.<br/>\n✅ JavaScript만으로 프레임워크와 라이브러리를 직접 구현하며 그 동작 원리를 탐구합니다.<br/>"},{_id:d.a.generate(),imageUrl:n("7a1d"),title:"개인 학습, 취업 준비",contents:"\n✅ 레벨1 ~ 레벨4 과정에서 부족한 부분에 대한 개인별 추가 학습합니다.<br/>\n✅ 이력서 작성, 레벨 인터뷰를 통해 취업 준비를 합니다.<br/>\n✅ 리쿠르팅 데이를 통해 기업과 만남의 시간을 가집니다."},b]},{_id:d.a.generate(),title:"웹 백엔드",courses:[{_id:d.a.generate(),imageUrl:n("08a4"),title:"온보딩",contents:"✅ 우아한테크코스가 다루는 주제에 대해 이해도를 높이고 소프트 스킬을 증진하기 위한 활동을 합니다."},{_id:d.a.generate(),imageUrl:n("0251"),title:"프로그래밍 기본",contents:"✅ 자바 프로그래밍 언어에 대한 기본 문법을 익혀 프로그래밍을 합니다. <br/>\n✅ 읽기 좋은 코드를 구현하는 것이 왜 중요한지와 코드를 개선해 읽기 좋은 코드로 변경해 보는 경험을 합니다."},{_id:d.a.generate(),imageUrl:n("92d7"),title:"웹 프로그래밍",contents:"✅ 스프링 프레임워크 기반으로 웹 애플리케이션을 개발하는 경험을 합니다.<br/>\n✅ TDD, ATDD 기반으로 웹 애플리케이션을 개발하고 리팩터링하는 경험을 합니다.<br/>\n✅ 웹 프론트엔드에 대한 기본 역량을 쌓고 데이터베이스 설계하는 경험을 합니다."},{_id:d.a.generate(),imageUrl:n("66cd"),title:"팀 프로젝트",contents:"✅ 개발 프로세스 기반으로 프로젝트 진행, 협업하는 경험을 합니다. <br/>\n✅ 서비스를 기획, 구현, 배포해 실사용자가 사용하도록 개발하는 경험을 합니다."},{_id:d.a.generate(),imageUrl:n("c3ef"),title:"웹 프로그래밍 심화, 팀 프로젝트",contents:"\n✅ 레거시 코드를 리팩터링하면서 안정적으로 서비스를 운영해 보는 경험을 합니다.<br/>\n✅ 대용량 서비스를 위한 시스템 아키텍처 설계, 데이터 처리 경험을 합니다. <br/>\n✅ 웹 백엔드 개발자가 알아야할 최소한의 컴퓨터 사이언스 지식을 학습합니다. <br/>\n"},{_id:d.a.generate(),imageUrl:n("7a1d"),title:"개인 학습, 취업 준비",contents:"\n✅ 레벨1 ~ 레벨4 과정에서 부족한 부분에 대한 개인별 추가 학습을 합니다.<br/>\n✅ 이력서 작성, 레벨 인터뷰를 통해 취업 준비를 합니다.<br/>\n✅ 리쿠르팅 데이를 통해 기업과 만남의 시간을 가집니다."},b]}]}}},m=p,f=(n("f6e2"),n("2877")),v=n("6544"),_=n.n(v),h=n("8212"),x=n("b0af"),y=n("62ad"),U=n("adda"),w=n("0fd9"),C=n("8dd9"),j=n("71a3"),P=n("c671"),T=n("fe57"),O=n("aac8"),k=Object(f["a"])(m,s,c,!1,null,"c522022a",null),V=k.exports;_()(k,{VAvatar:h["a"],VCard:x["a"],VCol:y["a"],VImg:U["a"],VRow:w["a"],VSheet:C["a"],VTab:j["a"],VTabItem:P["a"],VTabs:T["a"],VTabsItems:O["a"]}),a["a"].config.productionTip=!1,new a["a"]({vuetify:r["a"],router:i["a"],render:function(t){return t(V)}}).$mount("#app")},"551c":function(t,e,n){t.exports=n.p+"img/techtalk.2b92d085.jpg"},"5f74":function(t,e,n){},"66cd":function(t,e,n){t.exports=n.p+"img/team.2676b31d.jpg"},"7a1d":function(t,e,n){t.exports=n.p+"img/memo.4d7460aa.png"},"92d7":function(t,e,n){t.exports=n.p+"img/webprogramming.a54888ce.jpg"},a0e7:function(t,e,n){t.exports=n.p+"img/curriculum_banner.91eb5152.jpg"},c3ef:function(t,e,n){t.exports=n.p+"img/refactoring.8e01a02b.jpg"},e75d:function(t,e,n){t.exports=n.p+"img/mobileprogramming.773733a1.png"},f6e2:function(t,e,n){"use strict";var a=n("5f74"),r=n.n(a);r.a}});
//# sourceMappingURL=curriculum.2793a241.js.map