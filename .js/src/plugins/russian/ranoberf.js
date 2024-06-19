var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function a(t){try{s(n.next(t))}catch(t){o(t)}}function l(t){try{s(n.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(s){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&l[0]?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=e.call(t,a)}catch(t){l=[6,t],n=0}finally{r=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/filterInputs"),n=require("@libs/defaultCover"),i=require("@libs/fetch"),o=require("@libs/novelStatus"),a=require("dayjs"),l=/<script id="__NEXT_DATA__" type="application\/json">(\{.*?\})<\/script>/,s=function(){function s(){this.id="RNRF",this.name="РанобэРФ",this.site="https://ранобэ.рф",this.version="1.0.1",this.icon="src/ru/ranoberf/icon.png",this.filters={sort:{label:"Сортировка",value:"popular",options:[{label:"Рейтинг",value:"popular"},{label:"Дате добавления",value:"new"},{label:"Дате обновления",value:"lastPublishedChapter"},{label:"Законченные",value:"completed"}],type:r.FilterTypes.Picker}}}return s.prototype.popularNovels=function(r,o){return t(this,arguments,void 0,(function(t,r){var o,a,s,u,c,p,h,v,f,d=this,b=r.showLatestNovels,m=r.filters;return e(this,(function(e){switch(e.label){case 0:return o=this.site+"/books?order=",o+=b?"lastPublishedChapter":(null===(p=null==m?void 0:m.sort)||void 0===p?void 0:p.value)||"popular",o+="&page="+t,[4,(0,i.fetchApi)(o).then((function(t){return t.text()}))];case 1:return a=e.sent(),s=[],(u=a.match(l))instanceof Array&&u[1]&&(c=JSON.parse(u[1]),null===(f=null===(v=null===(h=c.props.pageProps)||void 0===h?void 0:h.totalData)||void 0===v?void 0:v.items)||void 0===f||f.forEach((function(t){var e;return s.push({name:t.title,cover:(null===(e=null==t?void 0:t.verticalImage)||void 0===e?void 0:e.url)?d.site+t.verticalImage.url:n.defaultCover,path:"/"+t.slug})}))),[2,s]}}))}))},s.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,s,u,c,p,h,v,f;return e(this,(function(e){switch(e.label){case 0:return[4,(0,i.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:return t=e.sent(),s={path:r,name:""},(u=t.match(l))instanceof Array&&u[1]&&(c=JSON.parse(u[1]).props.pageProps.book,s.name=c.title,s.summary=c.description,s.cover=(null===(h=c.verticalImage)||void 0===h?void 0:h.url)?this.site+c.verticalImage.url:n.defaultCover,s.status=(null==c?void 0:c.additionalInfo.includes("Активен"))?o.NovelStatus.Ongoing:o.NovelStatus.Completed,c.author&&(s.author=c.author),(null===(v=c.genres)||void 0===v?void 0:v.length)&&(s.genres=null==c?void 0:c.genres.map((function(t){return t.title})).join(",")),(null===(f=c.chapters)||void 0===f?void 0:f.length)&&(p=[],c.chapters.forEach((function(t,e){t.isDonate&&!t.isUserPaid||p.push({name:t.title,path:t.url,releaseTime:(0,a.default)(t.publishedAt).format("LLL"),chapterNumber:c.chapters.length-e})})),s.chapters=p.reverse())),[2,s]}}))}))},s.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,n,o,a,s,u,c,p,h=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,i.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:return t=e.sent(),(n=t.match(l))instanceof Array&&n[1]?(o=(null===(p=null===(c=null===(u=null===(s=null===(a=JSON.parse(n[1]))||void 0===a?void 0:a.props)||void 0===s?void 0:s.pageProps)||void 0===u?void 0:u.chapter)||void 0===c?void 0:c.content)||void 0===p?void 0:p.text)||"").includes("<img")?[2,o.replace(/src="(.*?)"/g,(function(t,e){return e.startsWith("http")?'src="'.concat(e,'"'):'src="'.concat(h.site).concat(e,'"')}))]:[2,o]:[2,""]}}))}))},s.prototype.searchNovels=function(r){return t(this,void 0,void 0,(function(){var t,o,a,l=this;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"/v3/books?filter[or][0][title][like]=").concat(r,"&filter[or][1][titleEn][like]=").concat(r,"&filter[or][2][fullTitle][like]=").concat(r,"&filter[status][]=active&filter[status][]=abandoned&filter[status][]=completed&expand=verticalImage"),[4,(0,i.fetchApi)(t).then((function(t){return t.json()}))];case 1:return o=e.sent().items,a=[],o.forEach((function(t){var e;return a.push({name:t.title,cover:(null===(e=null==t?void 0:t.verticalImage)||void 0===e?void 0:e.url)?l.site+t.verticalImage.url:n.defaultCover,path:"/"+t.slug})})),[2,a]}}))}))},s}();exports.default=new s;