!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/js/",i(i.s=8)}([function(t,e,i){"use strict";var n=i(2),s=i.n(n),o=i(3),r=i.n(o)()(s.a);r.push([t.i,"#app-content-systemtagsfilter .select2-container{width:30%;margin-left:10px}#app-sidebar .app-sidebar-header__action .tag-label{cursor:pointer;padding:13px 0;display:flex;color:var(--color-text-light);position:relative;margin-top:-20px}\n","",{"version":3,"sources":["webpack://./apps/systemtags/src/css/systemtagsfilelist.scss"],"names":[],"mappings":"AASA,iDACC,SAAU,CACV,gBAAiB,CACjB,oDAGA,cAAe,CACf,cAAe,CACf,YAAa,CACb,6BAA8B,CAC9B,iBAAkB,CAClB,gBAAiB","sourcesContent":["/*\n * Copyright (c) 2016\n *\n * This file is licensed under the Affero General Public License version 3\n * or later.\n *\n * See the COPYING-README file.\n *\n */\n#app-content-systemtagsfilter .select2-container {\n\twidth: 30%;\n\tmargin-left: 10px;\n}\n\n#app-sidebar .app-sidebar-header__action .tag-label {\n\tcursor: pointer;\n\tpadding: 13px 0;\n\tdisplay: flex;\n\tcolor: var(--color-text-light);\n\tposition: relative;\n\tmargin-top: -20px;\n}\n"],"sourceRoot":""}]),e.a=r},function(t,e,i){"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),r=[];function a(t){for(var e=-1,i=0;i<r.length;i++)if(r[i].identifier===t){e=i;break}return e}function l(t,e){for(var i={},n=[],s=0;s<t.length;s++){var o=t[s],l=e.base?o[0]+e.base:o[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var d=a(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(r[d].references++,r[d].updater(f)):r.push({identifier:u,updater:m(f,e),references:1}),n.push(u)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function p(t,e,i){var n=i.css,s=i.media,o=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,g=0;function m(t,e){var i,n,s;if(e.singleton){var o=g++;i=h||(h=c(e)),n=f.bind(null,i,o,!1),s=f.bind(null,i,o,!0)}else i=c(e),n=p.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var s=a(i[n]);r[s].references--}for(var o=l(t,e),c=0;c<i.length;c++){var u=a(i[c]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=o}}}},function(t,e,i){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,s=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);n=!0);}catch(t){s=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}t.exports=function(t){var e=n(t,4),i=e[1],s=e[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),l=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([a]).join("\n")}return[i].join("\n")}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(s[r]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);n&&s[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},function(e,i){OCA.SystemTags||(OCA.SystemTags={}),OCA.SystemTags.App={initFileList:function(e){return this._fileList||(this._fileList=new OCA.SystemTags.FileList(e,{id:"systemtags",fileActions:this._createFileActions(),config:OCA.Files.App.getFilesConfig(),shown:!0}),this._fileList.appName=t("systemtags","Tags")),this._fileList},removeFileList:function(){this._fileList&&this._fileList.$fileList.empty()},_createFileActions:function(){var t=new OCA.Files.FileActions;return t.registerDefaultActions(),t.merge(OCA.Files.fileActions),this._globalActionsInitialized||(this._onActionsUpdated=_.bind(this._onActionsUpdated,this),OCA.Files.fileActions.on("setDefault.app-systemtags",this._onActionsUpdated),OCA.Files.fileActions.on("registerAction.app-systemtags",this._onActionsUpdated),this._globalActionsInitialized=!0),t.register("dir","Open",OC.PERMISSION_READ,"",(function(t,e){OCA.Files.App.setActiveView("files",{silent:!0}),OCA.Files.App.fileList.changeDirectory(OC.joinPaths(e.$file.attr("data-path"),t),!0,!0)})),t.setDefault("dir","Open"),t},_onActionsUpdated:function(t){this._fileList&&(t.action?this._fileList.fileActions.registerAction(t.action):t.defaultAction&&this._fileList.fileActions.setDefault(t.defaultAction.mime,t.defaultAction.name))},destroy:function(){OCA.Files.fileActions.off("setDefault.app-systemtags",this._onActionsUpdated),OCA.Files.fileActions.off("registerAction.app-systemtags",this._onActionsUpdated),this.removeFileList(),this._fileList=null,delete this._globalActionsInitialized}},window.addEventListener("DOMContentLoaded",(function(){$("#app-content-systemtagsfilter").on("show",(function(t){OCA.SystemTags.App.initFileList($(t.target))})),$("#app-content-systemtagsfilter").on("hide",(function(){OCA.SystemTags.App.removeFileList()}))}))},function(e,i){var n;(n=function(t,e){this.initialize(t,e)}).prototype=_.extend({},OCA.Files.FileList.prototype,{id:"systemtagsfilter",appName:t("systemtags","Tagged files"),_systemTagIds:[],_lastUsedTags:[],_clientSideSort:!0,_allowSelection:!1,_filterField:null,initialize:function(t,e){if(OCA.Files.FileList.prototype.initialize.apply(this,arguments),!this.initialized){e&&e.systemTagIds&&(this._systemTagIds=e.systemTagIds),OC.Plugins.attach("OCA.SystemTags.FileList",this);var i=this.$el.find("#controls").empty();_.defer(_.bind(this._getLastUsedTags,this)),this._initFilterField(i)}},destroy:function(){this.$filterField.remove(),OCA.Files.FileList.prototype.destroy.apply(this,arguments)},_getLastUsedTags:function(){var t=this;$.ajax({type:"GET",url:OC.generateUrl("/apps/systemtags/lastused"),success:function(e){t._lastUsedTags=e}})},_initFilterField:function(e){var i=this;return this.$filterField=$('<input type="hidden" name="tags"/>'),e.append(this.$filterField),this.$filterField.select2({placeholder:t("systemtags","Select tags to filter by"),allowClear:!1,multiple:!0,toggleSelect:!0,separator:",",query:_.bind(this._queryTagsAutocomplete,this),id:function(t){return t.id},initSelection:function(t,e){var i=$(t).val().trim();if(i){var n=i.split(","),s=[];OC.SystemTags.collection.fetch({success:function(){_.each(n,(function(t){var e=OC.SystemTags.collection.get(t);_.isUndefined(e)||s.push(e.toJSON())})),e(s)}})}else e([])},formatResult:function(t){return OC.SystemTags.getDescriptiveTag(t)},formatSelection:function(t){return OC.SystemTags.getDescriptiveTag(t)[0].outerHTML},sortResults:function(t){return t.sort((function(t,e){var n=i._lastUsedTags.indexOf(t.id),s=i._lastUsedTags.indexOf(e.id);return n!==s?-1===s?-1:-1===n?1:n<s?-1:1:OC.Util.naturalSortCompare(t.name,e.name)})),t},escapeMarkup:function(t){return t},formatNoMatches:function(){return t("systemtags","No tags found")}}),this.$filterField.on("change",_.bind(this._onTagsChanged,this)),this.$filterField},_queryTagsAutocomplete:function(t){OC.SystemTags.collection.fetch({success:function(){var e=OC.SystemTags.collection.filterByName(t.term);t.callback({results:_.invoke(e,"toJSON")})}})},_onUrlChanged:function(t){if(t.dir){var e=_.filter(t.dir.split("/"),(function(t){return""!==t.trim()}));this.$filterField.select2("val",e||[]),this._systemTagIds=e,this.reload()}},_onTagsChanged:function(t){var e=$(t.target).val().trim();this._systemTagIds=""!==e?e.split(","):[],this.$el.trigger($.Event("changeDirectory",{dir:this._systemTagIds.join("/")})),this.reload()},updateEmptyContent:function(){var e=this.getCurrentDirectory();"/"===e?(this._systemTagIds.length?this.$el.find("#emptycontent").html('<div class="icon-systemtags"></div><h2>'+t("systemtags","No files found for the selected tags")+"</h2>"):this.$el.find("#emptycontent").html('<div class="icon-systemtags"></div><h2>'+t("systemtags","Please select tags to filter by")+"</h2>"),this.$el.find("#emptycontent").toggleClass("hidden",!this.isEmpty),this.$el.find("#filestable thead th").toggleClass("hidden",this.isEmpty)):OCA.Files.FileList.prototype.updateEmptyContent.apply(this,arguments)},getDirectoryPermissions:function(){return OC.PERMISSION_READ|OC.PERMISSION_DELETE},updateStorageStatistics:function(){},reload:function(){if(this._setCurrentDir("/",!1),!this._systemTagIds.length)return this.updateEmptyContent(),this.setFiles([]),$.Deferred().resolve();this._selectedFiles={},this._selectionSummary.clear(),this._currentFileModel&&this._currentFileModel.off(),this._currentFileModel=null,this.$el.find(".select-all").prop("checked",!1),this.showMask(),this._reloadCall=this.filesClient.getFilteredFiles({systemTagIds:this._systemTagIds},{properties:this._getWebdavProperties()}),this._detailsView&&this._updateDetailsView(null);var t=this.reloadCallback.bind(this);return this._reloadCall.then(t,t)},reloadCallback:function(t,e){return e&&e.unshift({}),OCA.Files.FileList.prototype.reloadCallback.call(this,t,e)}}),OCA.SystemTags.FileList=n},function(t,e){OCA.SystemTags=_.extend({},OCA.SystemTags),OCA.SystemTags||(OCA.SystemTags={}),OCA.SystemTags.FilesPlugin={ignoreLists:["trashbin","files.public"],attach:function(t){if(!(this.ignoreLists.indexOf(t.id)>=0||OCA.SystemTags.View)){var e=new OCA.SystemTags.SystemTagsInfoView;t.registerDetailView(e),OCA.SystemTags.View=e}}},OC.Plugins.register("OCA.Files.FileList",OCA.SystemTags.FilesPlugin)},function(t,e){!function(t){function e(t){var e=t.toJSON();return OC.isUserAdmin()||e.canAssign||(e.locked=!0),e}var i=t.Files.DetailFileInfoView.extend({_rendered:!1,className:"systemTagsInfoView",name:"systemTags",id:"systemTagsInfoView",_inputView:null,initialize:function(t){var i=this;t=t||{},this._inputView=new OC.SystemTags.SystemTagsInputField({multiple:!0,allowActions:!0,allowCreate:!0,isAdmin:OC.isUserAdmin(),initSelection:function(t,n){n(i.selectedTagsCollection.map(e))}}),this.selectedTagsCollection=new OC.SystemTags.SystemTagsMappingCollection([],{objectType:"files"}),this._inputView.collection.on("change:name",this._onTagRenamedGlobally,this),this._inputView.collection.on("remove",this._onTagDeletedGlobally,this),this._inputView.on("select",this._onSelectTag,this),this._inputView.on("deselect",this._onDeselectTag,this)},_onSelectTag:function(t){this.selectedTagsCollection.create(t.toJSON())},_onDeselectTag:function(t){this.selectedTagsCollection.get(t).destroy()},_onTagRenamedGlobally:function(t){var e=this.selectedTagsCollection.get(t.id);e&&e.set(t.toJSON())},_onTagDeletedGlobally:function(t){this.selectedTagsCollection.remove(t)},setFileInfo:function(t){var i=this;this._rendered||this.render(),t&&(this.selectedTagsCollection.setObjectId(t.id),this.selectedTagsCollection.fetch({success:function(t){t.fetched=!0;var n=t.map(e);i._inputView.setData(n),n.length>0&&i.show()}})),this.hide()},render:function(){this.$el.append(this._inputView.$el),this._inputView.render()},isVisible:function(){return!this.$el.hasClass("hidden")},show:function(){this.$el.removeClass("hidden")},hide:function(){this.$el.addClass("hidden")},toggle:function(){this.$el.toggleClass("hidden")},openDropdown:function(){this.$el.find(".systemTagsInputField").select2("open")},remove:function(){this._inputView.remove()}});t.SystemTags.SystemTagsInfoView=i}(OCA)},function(t,e,i){"use strict";i.r(e);i(4),i(5),i(6),i(7);var n=i(1),s=i.n(n),o=i(0),r={insert:"head",singleton:!1};s()(o.a,r),o.a.locals;window.OCA.SystemTags=OCA.SystemTags}]);
//# sourceMappingURL=systemtags.js.map