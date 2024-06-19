var t=this&&this.__awaiter||function(t,e,r,a){return new(r||(r=Promise))((function(n,i){function o(t){try{c(a.next(t))}catch(t){i(t)}}function s(t){try{c(a.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((a=a.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,a,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,a&&(n=2&s[0]?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,a=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],a=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var a,n=0,i=e.length;n<i;n++)!a&&n in e||(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@libs/fetch"),n=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=require("dayjs"),c=function(t,e){return new RegExp(e.join("|")).test(t)},u=new(function(){function u(t){var e;this.parseData=function(t){var e,r=(0,s.default)(),a=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",n=parseInt(a,10);if(!a)return t;if(c(t,["detik","segundo","second","วินาที"]))r.subtract(n,"second");else if(c(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))r.subtract(n,"minute");else if(c(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))r.subtract(n,"hours");else if(c(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))r.subtract(n,"days");else if(c(t,["week","semana"]))r.subtract(n,"week");else if(c(t,["month","mes"]))r.subtract(n,"month");else{if(!c(t,["year","año"]))return t;r.subtract(n,"year")}return r.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var r=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+r),this.options=t.options,this.filters=t.filters}return u.prototype.translateDragontea=function(t){if("dragontea"===this.id){var e=(0,n.load)(t.html()||""),a=e.html()||"";a=(a=a.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),t.html(a),t.find(":not(:has(*))").each((function(t,a){var n,i=e(a),o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),s="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),c=i.text().normalize("NFD").split(""),u=r([],c,!0).map((function(t){var e=t.normalize("NFC"),r=o.indexOf(e);return-1!==r?s[r]+t.slice(e.length):t})).join("");i.html((null===(n=i.html())||void 0===n?void 0:n.replace(i.text(),u).replace("\n","<br>"))||"")}))}return t},u.prototype.getHostname=function(t){var e=(t=t.split("/")[2]).split(".");return e.pop(),e.join(".")},u.prototype.getCheerio=function(r,i){return t(this,void 0,void 0,(function(){var t,o,s,c;return e(this,(function(e){switch(e.label){case 0:return[4,(0,a.fetchApi)(r)];case 1:if(!(t=e.sent()).ok&&1!=i)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return s=n.load,[4,t.text()];case 2:if(o=s.apply(void 0,[e.sent()]),c=o("title").text().trim(),this.getHostname(r)!=this.getHostname(t.url)||"Bot Verification"==c||"You are being redirected..."==c||"Un instant..."==c||"Just a moment..."==c||"Redirecting..."==c)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},u.prototype.parseNovels=function(t){var e=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(r,a){var n=t(a).find(".post-title").text().trim(),i=t(a).find(".post-title").find("a").attr("href")||"";if(n&&i){var o=t(a).find("img"),s={name:n,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset"),path:i.replace(/https?:\/\/.*?\//,"/")};e.push(s)}})),e},u.prototype.popularNovels=function(r,a){return t(this,arguments,void 0,(function(t,r){var a,n,i,o,s,c,u=r.filters,l=r.showLatestNovels;return e(this,(function(e){switch(e.label){case 0:for(n in a=this.site+"/page/"+t+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),l&&(a+="&m_orderby=latest"),u)if("object"==typeof u[n].value)for(i=0,o=u[n].value;i<o.length;i++)s=o[i],a+="&".concat(n,"=").concat(s);else u[n].value&&(a+="&".concat(n,"=").concat(u[n].value));return[4,this.getCheerio(a,!1)];case 1:return c=e.sent(),[2,this.parseNovels(c)]}}))}))},u.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,c,u,l,h,p,f,d,m,v=this;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return(t=e.sent())(".manga-title-badges, #manga-title span").remove(),(c={path:r,name:t(".post-title h1").text().trim()||t("#manga-title h1").text()}).cover=t(".summary_image > a > img").attr("data-lazy-src")||t(".summary_image > a > img").attr("data-src")||t(".summary_image > a > img").attr("src")||i.defaultCover,t(".post-content_item, .post-content").each((function(){var e=t(this).find("h5").text().trim(),r=t(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":c.genres=r;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":c.author=r;break;case"Status":case"Estado":c.status=r.includes("OnGoing")||r.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),t("div.summary__content .code-block,script").remove(),u=t("div.summary__content")||t("#tab-manga-about")||t('.post-content_item h5:contains("Summary")').next(),c.summary=this.translateDragontea(u).text().trim(),l=[],h="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,a.fetchApi)(this.site+r+"ajax/chapters/",{method:"POST"}).then((function(t){return t.text()}))]:[3,3];case 2:return h=e.sent(),[3,5];case 3:return p=t(".rating-post-id").attr("value")||t("#manga-chapters-holder").attr("data-id")||"",(f=new FormData).append("action","manga_get_chapters"),f.append("manga",p),[4,(0,a.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:f}).then((function(t){return t.text()}))];case 4:h=e.sent(),e.label=5;case 5:return"0"!==h&&(t=(0,n.load)(h)),d=t(".wp-manga-chapter").length,t(".wp-manga-chapter").each((function(e,r){var a=t(r).find("a").text().trim(),n=t(r).find("span.chapter-release-date").text().trim();n=n?v.parseData(n):(0,s.default)().format("LL");var i=t(r).find("a").attr("href")||"";l.push({name:a,path:i.replace(/https?:\/\/.*?\//,"/"),releaseTime:n||null,chapterNumber:d-e})})),c.chapters=l.reverse(),[2,c]}}))}))},u.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return t=e.sent(),a=t(".text-left")||t(".text-right")||t(".entry-content")||t(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&a.find('span[style*="opacity: 0; position: fixed;"]').remove(),a.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(a).html()||""]}}))}))},u.prototype.searchNovels=function(r,a){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/page/"+a+"/?s="+r+"&post_type=wp-manga",[4,this.getCheerio(t,!0)];case 1:return n=e.sent(),[2,this.parseNovels(n)]}}))}))},u}())({id:"novelmultiverse",sourceSite:"https://www.novelmultiverse.com/",sourceName:"NovelMultiverse"});exports.default=u;