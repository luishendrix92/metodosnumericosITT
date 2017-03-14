// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25511__auto__ = (((value == null))?null:value);
var m__25512__auto__ = (devtools.format._header[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,value);
} else {
var m__25512__auto____$1 = (devtools.format._header["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25511__auto__ = (((value == null))?null:value);
var m__25512__auto__ = (devtools.format._has_body[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,value);
} else {
var m__25512__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25511__auto__ = (((value == null))?null:value);
var m__25512__auto__ = (devtools.format._body[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,value);
} else {
var m__25512__auto____$1 = (devtools.format._body["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37670__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37670__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37670__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37670__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37670__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37671__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37670__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37671__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37670__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25930__auto__ = [];
var len__25923__auto___59979 = arguments.length;
var i__25924__auto___59980 = (0);
while(true){
if((i__25924__auto___59980 < len__25923__auto___59979)){
args__25930__auto__.push((arguments[i__25924__auto___59980]));

var G__59981 = (i__25924__auto___59980 + (1));
i__25924__auto___59980 = G__59981;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq59978){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59978));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___59983 = arguments.length;
var i__25924__auto___59984 = (0);
while(true){
if((i__25924__auto___59984 < len__25923__auto___59983)){
args__25930__auto__.push((arguments[i__25924__auto___59984]));

var G__59985 = (i__25924__auto___59984 + (1));
i__25924__auto___59984 = G__59985;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq59982){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59982));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25930__auto__ = [];
var len__25923__auto___59987 = arguments.length;
var i__25924__auto___59988 = (0);
while(true){
if((i__25924__auto___59988 < len__25923__auto___59987)){
args__25930__auto__.push((arguments[i__25924__auto___59988]));

var G__59989 = (i__25924__auto___59988 + (1));
i__25924__auto___59988 = G__59989;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq59986){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59986));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25930__auto__ = [];
var len__25923__auto___59991 = arguments.length;
var i__25924__auto___59992 = (0);
while(true){
if((i__25924__auto___59992 < len__25923__auto___59991)){
args__25930__auto__.push((arguments[i__25924__auto___59992]));

var G__59993 = (i__25924__auto___59992 + (1));
i__25924__auto___59992 = G__59993;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq59990){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59990));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___59995 = arguments.length;
var i__25924__auto___59996 = (0);
while(true){
if((i__25924__auto___59996 < len__25923__auto___59995)){
args__25930__auto__.push((arguments[i__25924__auto___59996]));

var G__59997 = (i__25924__auto___59996 + (1));
i__25924__auto___59996 = G__59997;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq59994){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59994));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25930__auto__ = [];
var len__25923__auto___59999 = arguments.length;
var i__25924__auto___60000 = (0);
while(true){
if((i__25924__auto___60000 < len__25923__auto___59999)){
args__25930__auto__.push((arguments[i__25924__auto___60000]));

var G__60001 = (i__25924__auto___60000 + (1));
i__25924__auto___60000 = G__60001;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq59998){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59998));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60003 = arguments.length;
var i__25924__auto___60004 = (0);
while(true){
if((i__25924__auto___60004 < len__25923__auto___60003)){
args__25930__auto__.push((arguments[i__25924__auto___60004]));

var G__60005 = (i__25924__auto___60004 + (1));
i__25924__auto___60004 = G__60005;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq60002){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60002));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60013 = arguments.length;
var i__25924__auto___60014 = (0);
while(true){
if((i__25924__auto___60014 < len__25923__auto___60013)){
args__25930__auto__.push((arguments[i__25924__auto___60014]));

var G__60015 = (i__25924__auto___60014 + (1));
i__25924__auto___60014 = G__60015;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__60009){
var vec__60010 = p__60009;
var state_override = cljs.core.nth.call(null,vec__60010,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__60010,state_override){
return (function (p1__60006_SHARP_){
return cljs.core.merge.call(null,p1__60006_SHARP_,state_override);
});})(vec__60010,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq60007){
var G__60008 = cljs.core.first.call(null,seq60007);
var seq60007__$1 = cljs.core.next.call(null,seq60007);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__60008,seq60007__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60017 = arguments.length;
var i__25924__auto___60018 = (0);
while(true){
if((i__25924__auto___60018 < len__25923__auto___60017)){
args__25930__auto__.push((arguments[i__25924__auto___60018]));

var G__60019 = (i__25924__auto___60018 + (1));
i__25924__auto___60018 = G__60019;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq60016){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60016));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60022 = arguments.length;
var i__25924__auto___60023 = (0);
while(true){
if((i__25924__auto___60023 < len__25923__auto___60022)){
args__25930__auto__.push((arguments[i__25924__auto___60023]));

var G__60024 = (i__25924__auto___60023 + (1));
i__25924__auto___60023 = G__60024;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq60020){
var G__60021 = cljs.core.first.call(null,seq60020);
var seq60020__$1 = cljs.core.next.call(null,seq60020);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__60021,seq60020__$1);
});


//# sourceMappingURL=format.js.map?rel=1489464079460