// Compiled by ClojureScript 0.0-2234
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core.IDisplayName = (function (){var obj18490 = {};return obj18490;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.display_name[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.display_name["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj18492 = {};return obj18492;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.init_state[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.init_state["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj18494 = {};return obj18494;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.should_update[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.should_update["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj18496 = {};return obj18496;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.will_mount[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.will_mount["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj18498 = {};return obj18498;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.did_mount[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.did_mount["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj18500 = {};return obj18500;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.will_unmount[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.will_unmount["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj18502 = {};return obj18502;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.will_update[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.will_update["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj18504 = {};return obj18504;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.did_update[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.did_update["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj18506 = {};return obj18506;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.will_receive_props[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.will_receive_props["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj18508 = {};return obj18508;
})();
om.core.render = (function render(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.render[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.render["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj18510 = {};return obj18510;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core.render_state[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core.render_state["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj18512 = {};return obj18512;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj18514 = {};return obj18514;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._get_state[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._get_state["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._get_state[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._get_state["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj18516 = {};return obj18516;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._get_render_state[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._get_render_state["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._get_render_state[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._get_render_state["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj18518 = {};return obj18518;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___2 = (function (this$,val){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$2(this$,val);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val);
}
});
var _set_state_BANG___3 = (function (this$,ks,val){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,ks,val);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val);
}
});
_set_state_BANG_ = function(this$,ks,val){
switch(arguments.length){
case 2:
return _set_state_BANG___2.call(this,this$,ks);
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = _set_state_BANG___2;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj18520 = {};return obj18520;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._get_queue[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._get_queue["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__8644__auto__ = this$;if(and__8644__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__8644__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__9283__auto__ = (((this$ == null))?null:this$);return (function (){var or__8656__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj18522 = {};return obj18522;
})();
om.core._value = (function _value(x){if((function (){var and__8644__auto__ = x;if(and__8644__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__8644__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__9283__auto__ = (((x == null))?null:x);return (function (){var or__8656__auto__ = (om.core._value[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._value["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj18524 = {};return obj18524;
})();
om.core._path = (function _path(cursor){if((function (){var and__8644__auto__ = cursor;if(and__8644__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__8644__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__9283__auto__ = (((cursor == null))?null:cursor);return (function (){var or__8656__auto__ = (om.core._path[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._path["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__8644__auto__ = cursor;if(and__8644__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__8644__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__9283__auto__ = (((cursor == null))?null:cursor);return (function (){var or__8656__auto__ = (om.core._state[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._state["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj18526 = {};return obj18526;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__8644__auto__ = value;if(and__8644__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__8644__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__9283__auto__ = (((value == null))?null:value);return (function (){var or__8656__auto__ = (om.core._to_cursor[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._to_cursor["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__8644__auto__ = value;if(and__8644__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__8644__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__9283__auto__ = (((value == null))?null:value);return (function (){var or__8656__auto__ = (om.core._to_cursor[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._to_cursor["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj18528 = {};return obj18528;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__8644__auto__ = cursor;if(and__8644__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__8644__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__9283__auto__ = (((cursor == null))?null:cursor);return (function (){var or__8656__auto__ = (om.core._derive[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._derive["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj18530 = {};return obj18530;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__8644__auto__ = cursor;if(and__8644__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__8644__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__9283__auto__ = (((cursor == null))?null:cursor);return (function (){var or__8656__auto__ = (om.core._transact_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._transact_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj18532 = {};return obj18532;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__8644__auto__ = x;if(and__8644__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__8644__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__9283__auto__ = (((x == null))?null:x);return (function (){var or__8656__auto__ = (om.core._listen_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._listen_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__8644__auto__ = x;if(and__8644__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__9283__auto__ = (((x == null))?null:x);return (function (){var or__8656__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__8644__auto__ = x;if(and__8644__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__8644__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__9283__auto__ = (((x == null))?null:x);return (function (){var or__8656__auto__ = (om.core._notify_BANG_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (om.core._notify_BANG_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__18534 = state;if(G__18534)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18534.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__18534.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__18534);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__18534);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f):null)));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",3145885106)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"old-value","old-value",1451216317),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",3626601078),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1449001181),old_state,new cljs.core.Keyword(null,"new-state","new-state",3624385942),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",1014018828),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__18536 = x;if(G__18536)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18536.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__18536.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__18536);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_18538 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18538;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__18540 = state;(G__18540["__om_prev_state"] = (state["__om_state"]));
(G__18540["__om_state"] = pending_state);
(G__18540["__om_pending_state"] = null);
return G__18540;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__8656__auto__ = props;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__8656__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",2122862542),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",3877103209),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",2087784617),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",3257856604)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18541 = c;if(G__18541)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18541.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__18541.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18541);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__18541);
}
})())
{var state_18568 = this$.state;var _STAR_read_enabled_STAR_18542_18569 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__8656__auto__ = (state_18568["__om_prev_state"]);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return (state_18568["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18542_18569;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18543 = c;if(G__18543)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18543.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__18543.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18543);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__18543);
}
})())
{var _STAR_read_enabled_STAR_18544 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18544;
}} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18545 = c;if(G__18545)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18545.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__18545.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__18545);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__18545);
}
})())
{var _STAR_read_enabled_STAR_18546 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18546;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_18547 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__18548 = c;if(G__18548)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18548.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__18548.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__18548);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__18548);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{if(cljs.core.not_EQ_.call(null,om.core._value.call(null,(props["__om_cursor"])),om.core._value.call(null,(next_props["__om_cursor"]))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18547;
}}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_read_enabled_STAR_18549 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__18550 = c;if(G__18550)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18550.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__18550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__18550);
}
})())
{var _STAR_parent_STAR_18551 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_18552 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_18553 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render.call(null,c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18553;
om.core._STAR_state_STAR_ = _STAR_state_STAR_18552;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_18551;
}} else
{if((function (){var G__18554 = c;if(G__18554)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18554.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__18554.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18554);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__18554);
}
})())
{var _STAR_parent_STAR_18555 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_18556 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_18557 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18557;
om.core._STAR_state_STAR_ = _STAR_state_STAR_18556;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_18555;
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18549;
}}),(function (next_props,next_state){var this$ = this;var c_18570 = om.core.children.call(null,this$);if((function (){var G__18558 = c_18570;if(G__18558)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18558.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__18558.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18558);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__18558);
}
})())
{var state_18571 = this$.state;var _STAR_read_enabled_STAR_18559_18572 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_18570,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18559_18572;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__8656__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",2663181321).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",2663181321)),(((function (){var G__18560 = c;if(G__18560)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18560.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__18560.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18560);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__18560);
}
})())?(function (){var _STAR_read_enabled_STAR_18561 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18561;
}})():null)), "__om_id": (function (){var or__8656__auto__ = id;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18562 = c;if(G__18562)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18562.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__18562.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__18562);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__18562);
}
})())
{var _STAR_read_enabled_STAR_18563 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18563;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__18564 = c;if(G__18564)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18564.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__18564.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__18564);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__18564);
}
})())
{var _STAR_read_enabled_STAR_18565 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18565;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_18573 = om.core.children.call(null,this$);if((function (){var G__18566 = c_18573;if(G__18566)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18566.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__18566.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18566);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__18566);
}
})())
{var _STAR_read_enabled_STAR_18567_18574 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_18573);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18567_18574;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x18578 = obj;x18578.om$core$IGetState$ = true;
x18578.om$core$IGetState$_get_state$arity$1 = ((function (x18578){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__8656__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return (state["__om_state"]);
}
});})(x18578))
;
x18578.om$core$IGetState$_get_state$arity$2 = ((function (x18578){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x18578))
;
x18578.om$core$IGetRenderState$ = true;
x18578.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x18578){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x18578))
;
x18578.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x18578){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x18578))
;
x18578.om$core$ISetState$ = true;
x18578.om$core$ISetState$_set_state_BANG_$arity$2 = ((function (x18578){
return (function (this$,val){var this$__$1 = this;var _STAR_read_enabled_STAR_18579 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;(this$__$1.state["__om_pending_state"] = val);
return om.core._queue_render_BANG_.call(null,(props["__om_app_state"]),this$__$1);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18579;
}});})(x18578))
;
x18578.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x18578){
return (function (this$,ks,val){var this$__$1 = this;var _STAR_read_enabled_STAR_18580 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
return om.core._queue_render_BANG_.call(null,(props["__om_app_state"]),this$__$1);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18580;
}});})(x18578))
;
return x18578;
});
om.core.Pure = React.createClass(om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods)));
om.core.pure = (function pure(obj){return (new om.core.Pure(obj));
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.call(null,self__.value,k,not_found);if(!(cljs.core._EQ_.call(null,v,not_found)))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__18582){var vec__18583 = p__18582;var k = cljs.core.nth.call(null,vec__18583,0,null);var v = cljs.core.nth.call(null,vec__18583,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__18584 = null;
var G__18584__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__18584__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__18584 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18584__2.call(this,self__,k);
case 3:
return G__18584__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__18584;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args18581){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18581)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__18586 = null;
var G__18586__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__18586__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__18586 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18586__2.call(this,self__,k);
case 3:
return G__18586__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__18586;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args18585){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18585)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x18588 = cljs.core.clone.call(null,val);x18588.cljs$core$IEquiv$ = true;
x18588.cljs$core$IEquiv$_equiv$arity$2 = ((function (x18588){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x18588))
;
x18588.om$core$ITransact$ = true;
x18588.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18588){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x18588))
;
x18588.om$core$ICursor$ = true;
x18588.om$core$ICursor$_path$arity$1 = ((function (x18588){
return (function (_){var ___$1 = this;return path;
});})(x18588))
;
x18588.om$core$ICursor$_state$arity$1 = ((function (x18588){
return (function (_){var ___$1 = this;return state;
});})(x18588))
;
x18588.cljs$core$IDeref$ = true;
x18588.cljs$core$IDeref$_deref$arity$1 = ((function (x18588){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x18588))
;
return x18588;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__18591 = val;if(G__18591)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18591.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__18591.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__18591);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__18591);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__18592 = val;if(G__18592)
{var bit__9306__auto__ = (G__18592.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__9306__auto__) || (G__18592.cljs$core$ICloneable$))
{return true;
} else
{if((!G__18592.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__18592);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__18592);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__18597 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__18598 = null;var count__18599 = 0;var i__18600 = 0;while(true){
if((i__18600 < count__18599))
{var f = cljs.core._nth.call(null,chunk__18598,i__18600);f.call(null);
{
var G__18601 = seq__18597;
var G__18602 = chunk__18598;
var G__18603 = count__18599;
var G__18604 = (i__18600 + 1);
seq__18597 = G__18601;
chunk__18598 = G__18602;
count__18599 = G__18603;
i__18600 = G__18604;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18597);if(temp__4126__auto__)
{var seq__18597__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18597__$1))
{var c__9412__auto__ = cljs.core.chunk_first.call(null,seq__18597__$1);{
var G__18605 = cljs.core.chunk_rest.call(null,seq__18597__$1);
var G__18606 = c__9412__auto__;
var G__18607 = cljs.core.count.call(null,c__9412__auto__);
var G__18608 = 0;
seq__18597 = G__18605;
chunk__18598 = G__18606;
count__18599 = G__18607;
i__18600 = G__18608;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__18597__$1);f.call(null);
{
var G__18609 = cljs.core.next.call(null,seq__18597__$1);
var G__18610 = null;
var G__18611 = 0;
var G__18612 = 0;
seq__18597 = G__18609;
chunk__18598 = G__18610;
count__18599 = G__18611;
i__18600 = G__18612;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"ctor","ctor",1016968582),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null,new cljs.core.Keyword(null,"instrument","instrument",2409387865),null,new cljs.core.Keyword(null,"react-key","react-key",4184082563),null,new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"init-state","init-state",4479067398),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),null,new cljs.core.Keyword(null,"shared","shared",4405305303),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))));
}
if((m == null))
{var shared = (function (){var or__8656__auto__ = new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__8656__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1016968582).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return om.core.pure;
}
})();var pure__17098__auto__ = ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_18617 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18617;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor});pure__17098__auto__.constructor = goog.getUid(f);
return pure__17098__auto__;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__18618 = m;var map__18618__$1 = ((cljs.core.seq_QMARK_.call(null,map__18618))?cljs.core.apply.call(null,cljs.core.hash_map,map__18618):map__18618);var opts = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var init_state = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"init-state","init-state",4479067398));var state = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"state","state",1123661827));var key = cljs.core.get.call(null,map__18618__$1,new cljs.core.Keyword(null,"key","key",1014010321));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",1013907514));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",4184082563)));var shared = (function (){var or__8656__auto__ = new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__8656__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1016968582).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return om.core.pure;
}
})();var pure__17098__auto__ = ctor.call(null,{"__om_shared": shared, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__18618,map__18618__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_18619 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18619;
}});})(map__18618,map__18618__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__18618,map__18618__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_18620 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$,opts);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18620;
}});})(map__18618,map__18618__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state});pure__17098__auto__.constructor = goog.getUid(f);
return pure__17098__auto__;
} else
{return null;
}
}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :ctor       - a function that invokes a React component constructor
* that will back the Om component, defaults to pure.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_18622 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._STAR_instrument_STAR_.call(null,f,cursor,m);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_18622;
}})();if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",2667619603)))
{return om.core.build_STAR_.call(null,f,cursor,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__18631 = state;if(G__18631)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__18631.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__18631.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__18631);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__18631);
}
})())
{} else
{var listeners_18639 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_18640 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x18632_18641 = state;x18632_18641.om$core$IRenderQueue$ = true;
x18632_18641.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x18632_18641,listeners_18639,render_queue_18640){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_18640);
});})(x18632_18641,listeners_18639,render_queue_18640))
;
x18632_18641.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x18632_18641,listeners_18639,render_queue_18640){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_18640),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_18640,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x18632_18641,listeners_18639,render_queue_18640))
;
x18632_18641.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x18632_18641,listeners_18639,render_queue_18640){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_18640,cljs.core.empty);
});})(x18632_18641,listeners_18639,render_queue_18640))
;
x18632_18641.om$core$INotify$ = true;
x18632_18641.om$core$INotify$_listen_BANG_$arity$3 = ((function (x18632_18641,listeners_18639,render_queue_18640){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_18639,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x18632_18641,listeners_18639,render_queue_18640))
;
x18632_18641.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x18632_18641,listeners_18639,render_queue_18640){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_18639,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x18632_18641,listeners_18639,render_queue_18640))
;
x18632_18641.om$core$INotify$_notify_BANG_$arity$3 = ((function (x18632_18641,listeners_18639,render_queue_18640){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;if((tx_listen == null))
{} else
{var seq__18633_18642 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_18639));var chunk__18634_18643 = null;var count__18635_18644 = 0;var i__18636_18645 = 0;while(true){
if((i__18636_18645 < count__18635_18644))
{var vec__18637_18646 = cljs.core._nth.call(null,chunk__18634_18643,i__18636_18645);var __18647 = cljs.core.nth.call(null,vec__18637_18646,0,null);var f_18648 = cljs.core.nth.call(null,vec__18637_18646,1,null);f_18648.call(null,tx_data,root_cursor);
{
var G__18649 = seq__18633_18642;
var G__18650 = chunk__18634_18643;
var G__18651 = count__18635_18644;
var G__18652 = (i__18636_18645 + 1);
seq__18633_18642 = G__18649;
chunk__18634_18643 = G__18650;
count__18635_18644 = G__18651;
i__18636_18645 = G__18652;
continue;
}
} else
{var temp__4126__auto___18653 = cljs.core.seq.call(null,seq__18633_18642);if(temp__4126__auto___18653)
{var seq__18633_18654__$1 = temp__4126__auto___18653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18633_18654__$1))
{var c__9412__auto___18655 = cljs.core.chunk_first.call(null,seq__18633_18654__$1);{
var G__18656 = cljs.core.chunk_rest.call(null,seq__18633_18654__$1);
var G__18657 = c__9412__auto___18655;
var G__18658 = cljs.core.count.call(null,c__9412__auto___18655);
var G__18659 = 0;
seq__18633_18642 = G__18656;
chunk__18634_18643 = G__18657;
count__18635_18644 = G__18658;
i__18636_18645 = G__18659;
continue;
}
} else
{var vec__18638_18660 = cljs.core.first.call(null,seq__18633_18654__$1);var __18661 = cljs.core.nth.call(null,vec__18638_18660,0,null);var f_18662 = cljs.core.nth.call(null,vec__18638_18660,1,null);f_18662.call(null,tx_data,root_cursor);
{
var G__18663 = cljs.core.next.call(null,seq__18633_18654__$1);
var G__18664 = null;
var G__18665 = 0;
var G__18666 = 0;
seq__18633_18642 = G__18663;
chunk__18634_18643 = G__18664;
count__18635_18644 = G__18665;
i__18636_18645 = G__18666;
continue;
}
}
} else
{}
}
break;
}
}
return this$__$1;
});})(x18632_18641,listeners_18639,render_queue_18640))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__18667){var map__18682 = p__18667;var map__18682__$1 = ((cljs.core.seq_QMARK_.call(null,map__18682))?cljs.core.apply.call(null,cljs.core.hash_map,map__18682):map__18682);var options = map__18682__$1;var instrument = cljs.core.get.call(null,map__18682__$1,new cljs.core.Keyword(null,"instrument","instrument",2409387865));var path = cljs.core.get.call(null,map__18682__$1,new cljs.core.Keyword(null,"path","path",1017337751));var tx_listen = cljs.core.get.call(null,map__18682__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114));var target = cljs.core.get.call(null,map__18682__$1,new cljs.core.Keyword(null,"target","target",4427965699));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"target","target",1773529930,null))))))));
}
var roots_SINGLEQUOTE__18696 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__18696,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__18696,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__18683 = value;if(G__18683)
{var bit__9306__auto__ = (G__18683.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__9306__auto__) || (G__18683.cljs$core$IAtom$))
{return true;
} else
{if((!G__18683.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__18683);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__18683);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),new cljs.core.Keyword(null,"path","path",1017337751));var rootf = ((function (watch_key,state,state__$1,m,map__18682,map__18682__$1,options,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = (((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path));om.dom.render.call(null,(function (){var _STAR_instrument_STAR_18690 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_18691 = om.core._STAR_state_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_18691;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18690;
}})(),target);
var queue = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue))
{return null;
} else
{var seq__18692_18697 = cljs.core.seq.call(null,queue);var chunk__18693_18698 = null;var count__18694_18699 = 0;var i__18695_18700 = 0;while(true){
if((i__18695_18700 < count__18694_18699))
{var c_18701 = cljs.core._nth.call(null,chunk__18693_18698,i__18695_18700);c_18701.forceUpdate();
{
var G__18702 = seq__18692_18697;
var G__18703 = chunk__18693_18698;
var G__18704 = count__18694_18699;
var G__18705 = (i__18695_18700 + 1);
seq__18692_18697 = G__18702;
chunk__18693_18698 = G__18703;
count__18694_18699 = G__18704;
i__18695_18700 = G__18705;
continue;
}
} else
{var temp__4126__auto___18706 = cljs.core.seq.call(null,seq__18692_18697);if(temp__4126__auto___18706)
{var seq__18692_18707__$1 = temp__4126__auto___18706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18692_18707__$1))
{var c__9412__auto___18708 = cljs.core.chunk_first.call(null,seq__18692_18707__$1);{
var G__18709 = cljs.core.chunk_rest.call(null,seq__18692_18707__$1);
var G__18710 = c__9412__auto___18708;
var G__18711 = cljs.core.count.call(null,c__9412__auto___18708);
var G__18712 = 0;
seq__18692_18697 = G__18709;
chunk__18693_18698 = G__18710;
count__18694_18699 = G__18711;
i__18695_18700 = G__18712;
continue;
}
} else
{var c_18713 = cljs.core.first.call(null,seq__18692_18707__$1);c_18713.forceUpdate();
{
var G__18714 = cljs.core.next.call(null,seq__18692_18707__$1);
var G__18715 = null;
var G__18716 = 0;
var G__18717 = 0;
seq__18692_18697 = G__18714;
chunk__18693_18698 = G__18715;
count__18694_18699 = G__18716;
i__18695_18700 = G__18717;
continue;
}
}
} else
{}
}
break;
}
return om.core._empty_queue_BANG_.call(null,state__$1);
}
});})(watch_key,state,state__$1,m,map__18682,map__18682__$1,options,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__18682,map__18682__$1,options,instrument,path,tx_listen,target){
return (function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
});})(watch_key,state,state__$1,m,rootf,map__18682,map__18682__$1,options,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__18682,map__18682__$1,options,instrument,path,tx_listen,target){
return (function (){cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,m,rootf,map__18682,map__18682__$1,options,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):null)));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});
