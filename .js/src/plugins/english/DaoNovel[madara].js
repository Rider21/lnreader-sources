var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function i(e){try{s(n.next(e))}catch(e){r(e)}}function o(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,l,r,i={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;r&&(r=0,o[0]&&(i=0)),i;)try{if(a=1,n&&(l=2&o[0]?n.return:o[0]?n.throw||((l=n.return)&&l.call(n),0):n.next)&&!(l=l.call(n,o[1])).done)return l;switch(n=0,l&&(o=[2&o[0],l.value]),o[0]){case 0:case 1:l=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(l=i.trys,(l=l.length>0&&l[l.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){i.label=o[1];break}if(6===o[0]&&i.label<l[1]){i.label=l[1],l=o;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(o);break}l[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{a=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var n,l=0,r=t.length;l<r;l++)!n&&l in t||(n||(n=Array.prototype.slice.call(t,0,l)),n[l]=t[l]);return e.concat(n||Array.prototype.slice.call(t))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var l=require("@libs/fetch"),r=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=n(require("dayjs")),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function n(e){var t;this.parseData=function(e){var t,a=(0,s.default)(),n=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",l=parseInt(n,10);if(!n)return e;if(u(e,["detik","segundo","second","วินาที"]))a.subtract(l,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a.subtract(l,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a.subtract(l,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a.subtract(l,"days");else if(u(e,["week","semana"]))a.subtract(l,"week");else if(u(e,["month","mes"]))a.subtract(l,"month");else{if(!u(e,["year","año"]))return e;a.subtract(l,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(1+a),this.options=e.options,this.filters=e.filters}return n.prototype.translateDragontea=function(e){if("dragontea"===this.id){var t=(0,r.load)(e.html()||""),n=t.html()||"";n=(n=n.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),e.html(n),e.find(":not(:has(*))").each((function(e,n){var l,r=t(n),i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),s=r.text().normalize("NFD").split(""),u=a([],s,!0).map((function(e){var t=e.normalize("NFC"),a=i.indexOf(t);return-1!==a?o[a]+e.slice(t.length):e})).join("");r.html((null===(l=r.html())||void 0===l?void 0:l.replace(r.text(),u).replace("\n","<br>"))||"")}))}return e},n.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},n.prototype.getCheerio=function(a,n){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=n)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=r.load,[4,e.text()];case 2:if(i=o.apply(void 0,[t.sent()]),s=i("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},n.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,n){var l=e(n).find(".post-title").text().trim(),r=e(n).find(".post-title").find("a").attr("href")||"";if(l&&r){var i=e(n).find("img"),o={name:l,cover:i.attr("data-src")||i.attr("src")||i.attr("data-lazy-srcset"),path:r.replace(/https?:\/\/.*?\//,"/")};t.push(o)}})),t},n.prototype.popularNovels=function(a,n){return e(this,arguments,void 0,(function(e,a){var n,l,r,i,o,s,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(l in n=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(n+="&m_orderby=latest"),u)if("object"==typeof u[l].value)for(r=0,i=u[l].value;r<i.length;r++)o=i[r],n+="&".concat(l,"=").concat(o);else u[l].value&&(n+="&".concat(l,"=").concat(u[l].value));return[4,this.getCheerio(n,!1)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},n.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,n,u,c,h,p,v,d,m,b=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(n={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content").text().trim();switch(t){case"Genre(s)":case"Género(s)":case"التصنيفات":n.genres=a;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":n.author=a;break;case"Status":case"Estado":n.status=a.includes("OnGoing")||a.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),e("div.summary__content .code-block,script").remove(),u=e("div.summary__content")||e("#tab-manga-about")||e('.post-content_item h5:contains("Summary")').next(),n.summary=this.translateDragontea(u).text().trim(),c=[],h="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,l.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return h=t.sent(),[3,5];case 3:return p=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(v=new FormData).append("action","manga_get_chapters"),v.append("manga",p),[4,(0,l.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:v}).then((function(e){return e.text()}))];case 4:h=t.sent(),t.label=5;case 5:return"0"!==h&&(e=(0,r.load)(h)),d=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var n=e(a).find("a").text().trim(),l=e(a).find("span.chapter-release-date").text().trim();l=l?b.parseData(l):(0,s.default)().format("LL");var r=e(a).find("a").attr("href")||"";c.push({name:n,path:r.replace(/https?:\/\/.*?\//,"/"),releaseTime:l||null,chapterNumber:d-t})})),n.chapters=c.reverse(),[2,n]}}))}))},n.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),n=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&n.find('span[style*="opacity: 0; position: fixed;"]').remove(),n.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(n).html()||""]}}))}))},n.prototype.searchNovels=function(a,n){return e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+n+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return l=t.sent(),[2,this.parseNovels(l)]}}))}))},n}())({id:"daonovel",sourceSite:"https://daonovel.co/",sourceName:"DaoNovel",options:{useNewChapterEndpoint:!0,versionIncrements:1},filters:{filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Drama",value:"drama-genre"},{label:"Ecchi",value:"ecchi"},{label:"Fantasy",value:"fantasy"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harems-novel"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Isekai",value:"isekai"},{label:"Josei",value:"josei"},{label:"LGBT+",value:"lgbt"},{label:"Magical Realism",value:"magical-realism"},{label:"Manhwa",value:"manhwa"},{label:"Martial Arts",value:"martial-arts-genre"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"Psychological",value:"psychological"},{label:"Reincarnation",value:"reincarnation"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shoujo",value:"shoujo-genre"},{label:"Shoujo Ai",value:"shoujo-ai"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"Teen",value:"teen"},{label:"Thriller",value:"thriller"},{label:"Tragedy",value:"tragedy"},{label:"Video Games",value:"video-games"},{label:"Webcomics",value:"webcomics"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"Yuri",value:"yuri"}]},op:{type:"Switch",label:"having all selected genres",value:!1},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}}});exports.default=c;