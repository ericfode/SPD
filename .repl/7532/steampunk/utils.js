// Compiled by ClojureScript 0.0-2234
goog.provide('steampunk.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.ui.IdGenerator');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
steampunk.utils.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
steampunk.utils.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
steampunk.utils.end_edit = (function end_edit(data,edit_key,text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
om.core.transact_BANG_.call(null,data,edit_key,(function (_){return text;
}),new cljs.core.Keyword(null,"update","update",4470025275));
if(cljs.core.truth_(cb))
{return cb.call(null,text);
} else
{return null;
}
});
steampunk.utils.update_user = (function (){var method_table__9522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9526__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("update-user",((function (method_table__9522__auto__,prefer_table__9523__auto__,method_cache__9524__auto__,cached_hierarchy__9525__auto__,hierarchy__9526__auto__){
return (function (k,_){return k;
});})(method_table__9522__auto__,prefer_table__9523__auto__,method_cache__9524__auto__,cached_hierarchy__9525__auto__,hierarchy__9526__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9526__auto__,method_table__9522__auto__,prefer_table__9523__auto__,method_cache__9524__auto__,cached_hierarchy__9525__auto__));
})();
cljs.core._add_method.call(null,steampunk.utils.update_user,new cljs.core.Keyword(null,"extra","extra",1110869890),(function (k,m){return Hull.api("/me","put",{"extra": m}).then((function (p1__22027_SHARP_){return cljs.core.print.call(null,"server response:",p1__22027_SHARP_);
}));
}));
steampunk.utils.update_extra = (function update_extra(m){cljs.core.print.call(null,m);
return Hull.api("/me","put",{"extra": cljs.core.clj__GT_js.call(null,m)}).then((function (p1__22028_SHARP_){return cljs.core.print.call(null,"server response:",p1__22028_SHARP_);
}));
});
steampunk.utils.handle_login = (function handle_login(app){return Hull.login("facebook").then((function (p1__22029_SHARP_){return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"user","user",1017503549),(function (_){return clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,p1__22029_SHARP_));
}),new cljs.core.Keyword(null,"update","update",4470025275));
}),(function (p1__22030_SHARP_){return cljs.core.print.call(null,p1__22030_SHARP_);
}));
});
steampunk.utils.handle_logout = (function handle_logout(app){return Hull.logout().then((function (){return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"user","user",1017503549),(function (_){return null;
}));
}));
});
