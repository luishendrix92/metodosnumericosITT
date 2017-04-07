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
var o__38221__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38221__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38221__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38221__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38220__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38220__auto__,"make_template");
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
var o__38221__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38221__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38221__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38221__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38220__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38220__auto__,"make_group");
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
var o__38221__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38221__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38221__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38221__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38220__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38220__auto__,"make_reference");
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
var o__38221__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38221__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38221__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38221__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38220__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38220__auto__,"make_surrogate");
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
var o__38221__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38221__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38221__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38221__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38220__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38220__auto__,"render_markup");
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
var o__38221__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38221__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38221__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38221__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38220__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38220__auto__,"_LT_header_GT_");
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
var o__38221__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38221__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38221__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38221__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38220__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38220__auto__,"_LT_standard_body_GT_");
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
var len__25923__auto___38295 = arguments.length;
var i__25924__auto___38296 = (0);
while(true){
if((i__25924__auto___38296 < len__25923__auto___38295)){
args__25930__auto__.push((arguments[i__25924__auto___38296]));

var G__38297 = (i__25924__auto___38296 + (1));
i__25924__auto___38296 = G__38297;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38294){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38294));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38299 = arguments.length;
var i__25924__auto___38300 = (0);
while(true){
if((i__25924__auto___38300 < len__25923__auto___38299)){
args__25930__auto__.push((arguments[i__25924__auto___38300]));

var G__38301 = (i__25924__auto___38300 + (1));
i__25924__auto___38300 = G__38301;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq38298){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38298));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38303 = arguments.length;
var i__25924__auto___38304 = (0);
while(true){
if((i__25924__auto___38304 < len__25923__auto___38303)){
args__25930__auto__.push((arguments[i__25924__auto___38304]));

var G__38305 = (i__25924__auto___38304 + (1));
i__25924__auto___38304 = G__38305;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq38302){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38302));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38307 = arguments.length;
var i__25924__auto___38308 = (0);
while(true){
if((i__25924__auto___38308 < len__25923__auto___38307)){
args__25930__auto__.push((arguments[i__25924__auto___38308]));

var G__38309 = (i__25924__auto___38308 + (1));
i__25924__auto___38308 = G__38309;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38306){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38306));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38311 = arguments.length;
var i__25924__auto___38312 = (0);
while(true){
if((i__25924__auto___38312 < len__25923__auto___38311)){
args__25930__auto__.push((arguments[i__25924__auto___38312]));

var G__38313 = (i__25924__auto___38312 + (1));
i__25924__auto___38312 = G__38313;
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

devtools.format.template.cljs$lang$applyTo = (function (seq38310){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38310));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38315 = arguments.length;
var i__25924__auto___38316 = (0);
while(true){
if((i__25924__auto___38316 < len__25923__auto___38315)){
args__25930__auto__.push((arguments[i__25924__auto___38316]));

var G__38317 = (i__25924__auto___38316 + (1));
i__25924__auto___38316 = G__38317;
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

devtools.format.group.cljs$lang$applyTo = (function (seq38314){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38314));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38319 = arguments.length;
var i__25924__auto___38320 = (0);
while(true){
if((i__25924__auto___38320 < len__25923__auto___38319)){
args__25930__auto__.push((arguments[i__25924__auto___38320]));

var G__38321 = (i__25924__auto___38320 + (1));
i__25924__auto___38320 = G__38321;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38318){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38318));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38329 = arguments.length;
var i__25924__auto___38330 = (0);
while(true){
if((i__25924__auto___38330 < len__25923__auto___38329)){
args__25930__auto__.push((arguments[i__25924__auto___38330]));

var G__38331 = (i__25924__auto___38330 + (1));
i__25924__auto___38330 = G__38331;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38325){
var vec__38326 = p__38325;
var state_override = cljs.core.nth.call(null,vec__38326,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38326,state_override){
return (function (p1__38322_SHARP_){
return cljs.core.merge.call(null,p1__38322_SHARP_,state_override);
});})(vec__38326,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38323){
var G__38324 = cljs.core.first.call(null,seq38323);
var seq38323__$1 = cljs.core.next.call(null,seq38323);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38324,seq38323__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38333 = arguments.length;
var i__25924__auto___38334 = (0);
while(true){
if((i__25924__auto___38334 < len__25923__auto___38333)){
args__25930__auto__.push((arguments[i__25924__auto___38334]));

var G__38335 = (i__25924__auto___38334 + (1));
i__25924__auto___38334 = G__38335;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq38332){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38332));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38338 = arguments.length;
var i__25924__auto___38339 = (0);
while(true){
if((i__25924__auto___38339 < len__25923__auto___38338)){
args__25930__auto__.push((arguments[i__25924__auto___38339]));

var G__38340 = (i__25924__auto___38339 + (1));
i__25924__auto___38339 = G__38340;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38336){
var G__38337 = cljs.core.first.call(null,seq38336);
var seq38336__$1 = cljs.core.next.call(null,seq38336);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38337,seq38336__$1);
});


//# sourceMappingURL=format.js.map?rel=1491541655853