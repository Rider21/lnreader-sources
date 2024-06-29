var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@libs/fetch"),n=require("@libs/filterInputs"),r=require("@libs/novelStatus"),o=new(function(){function n(e){var t,a=this;this.resolveUrl=function(e){return a.site+"/"+e},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/hotnovelpub/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite,this.apiSite=e.sourceSite.replace("://","://api."),this.version="1.0.1",this.filters=e.filters,this.lang=(null===(t=e.options)||void 0===t?void 0:t.lang)||"en"}return n.prototype.popularNovels=function(n,r){return e(this,arguments,void 0,(function(e,n){var r,o,i,l,s,u,c=this,h=n.filters,p=n.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:return r=this.apiSite+"/books/",r+=p?"new":(null===(l=null==h?void 0:h.sort)||void 0===l?void 0:l.value)||"hot",(null===(s=null==h?void 0:h.category)||void 0===s?void 0:s.value)&&(r=this.apiSite+"/category/"+h.category.value),r+="/?page="+(e-1)+"&limit=20",[4,(0,a.fetchApi)(r,{headers:{lang:this.lang}}).then((function(e){return e.json()}))];case 1:return o=t.sent(),i=[],o.status&&(null===(u=o.data.books.data)||void 0===u?void 0:u.length)&&o.data.books.data.forEach((function(e){return i.push({name:e.name,cover:c.site+e.image,path:e.slug})})),[2,i]}}))}))},n.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,o,i,l,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/book/"+n,{headers:{lang:this.lang}}).then((function(e){return e.json()}))];case 1:return e=t.sent(),o={name:e.data.book.name,path:n,cover:this.site+e.data.book.image,summary:e.data.book.authorize.description,author:e.data.book.authorize.name,status:"updating"===e.data.book.status?r.NovelStatus.Ongoing:r.NovelStatus.Completed},(null===(l=e.data.tags.tags_name)||void 0===l?void 0:l.length)&&(o.genres=e.data.tags.tags_name.join(",")),(null===(s=e.data.chapters)||void 0===s?void 0:s.length)&&(i=[],e.data.chapters.forEach((function(e,t){return i.push({name:e.title,path:e.slug,releaseTime:void 0,chapterNumber:(e.index||t)+1})})),o.chapters=i),[2,o]}}))}))},n.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,r,o,i;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.resolveUrl(n)).then((function(e){return e.text()}))];case 1:return e=t.sent(),(r=(null===(i=e.match(/<div id="content-item" ([\s\S]*?)<\/div>/g))||void 0===i?void 0:i[0])||"")?[4,(0,a.fetchApi)(this.site+"/server/getContent?slug="+n)]:[3,4];case 2:return[4,t.sent().json()];case 3:(o=t.sent()).data&&(r+=o.data.map((function(e){return"<p>"+e+"</p>"})).join("").replace(/\n/g,"</p><p>").replace(/\s/g," ")),t.label=4;case 4:return[2,r.replace(/\.copy right hot novel pub/g,"")]}}))}))},n.prototype.searchNovels=function(n){return e(this,void 0,void 0,(function(){var e,r,o;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/search",{headers:{"Content-Type":"application/json;charset=utf-8",Referer:this.site,Origin:this.site,lang:this.lang},method:"POST",body:JSON.stringify({key_search:n})}).then((function(e){return e.json()}))];case 1:return e=t.sent(),r=[],e.status&&(null===(o=e.data.books)||void 0===o?void 0:o.length)&&e.data.books.forEach((function(e){return r.push({name:e.name,path:e.slug})})),[2,r]}}))}))},n}())({id:"hotnovelpub",sourceSite:"https://hotnovelpub.com",sourceName:"HotNovelPub",filters:{sort:{type:n.FilterTypes.Picker,label:"Order",value:"hot",options:[{label:"Hot story",value:"hot"},{label:"New story",value:"new"},{label:"Full story",value:"full"}]},category:{type:n.FilterTypes.Picker,label:"Category",value:"",options:[{label:"NONE",value:""},{label:"Adult Romance",value:"adult-romance"},{label:"Fantasy",value:"fantasy"},{label:"LGBTQ+",value:"lgbtq"},{label:"Mystery",value:"mystery"},{label:"New Adult",value:"new-adult"},{label:"Paranormal",value:"paranormal"},{label:"Romance",value:"romance"},{label:"Steamy Stories",value:"steamy-stories"},{label:"Urban",value:"urban"},{label:"Werewolf/Vampire",value:"werewolfvampire"}]}}});exports.default=o;