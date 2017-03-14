// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x60268_60269 = value;
x60268_60269.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x60273_60274 = value;
x60273_60274.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x60278_60279 = value;
x60278_60279.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24836__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24836__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60287 = arguments.length;
var i__25924__auto___60288 = (0);
while(true){
if((i__25924__auto___60288 < len__25923__auto___60287)){
args__25930__auto__.push((arguments[i__25924__auto___60288]));

var G__60289 = (i__25924__auto___60288 + (1));
i__25924__auto___60288 = G__60289;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__60283_60290 = cljs.core.seq.call(null,items);
var chunk__60284_60291 = null;
var count__60285_60292 = (0);
var i__60286_60293 = (0);
while(true){
if((i__60286_60293 < count__60285_60292)){
var item_60294 = cljs.core._nth.call(null,chunk__60284_60291,i__60286_60293);
if(cljs.core.some_QMARK_.call(null,item_60294)){
if(cljs.core.coll_QMARK_.call(null,item_60294)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_60294)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_60294));
}
} else {
}

var G__60295 = seq__60283_60290;
var G__60296 = chunk__60284_60291;
var G__60297 = count__60285_60292;
var G__60298 = (i__60286_60293 + (1));
seq__60283_60290 = G__60295;
chunk__60284_60291 = G__60296;
count__60285_60292 = G__60297;
i__60286_60293 = G__60298;
continue;
} else {
var temp__4657__auto___60299 = cljs.core.seq.call(null,seq__60283_60290);
if(temp__4657__auto___60299){
var seq__60283_60300__$1 = temp__4657__auto___60299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60283_60300__$1)){
var c__25659__auto___60301 = cljs.core.chunk_first.call(null,seq__60283_60300__$1);
var G__60302 = cljs.core.chunk_rest.call(null,seq__60283_60300__$1);
var G__60303 = c__25659__auto___60301;
var G__60304 = cljs.core.count.call(null,c__25659__auto___60301);
var G__60305 = (0);
seq__60283_60290 = G__60302;
chunk__60284_60291 = G__60303;
count__60285_60292 = G__60304;
i__60286_60293 = G__60305;
continue;
} else {
var item_60306 = cljs.core.first.call(null,seq__60283_60300__$1);
if(cljs.core.some_QMARK_.call(null,item_60306)){
if(cljs.core.coll_QMARK_.call(null,item_60306)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_60306)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_60306));
}
} else {
}

var G__60307 = cljs.core.next.call(null,seq__60283_60300__$1);
var G__60308 = null;
var G__60309 = (0);
var G__60310 = (0);
seq__60283_60290 = G__60307;
chunk__60284_60291 = G__60308;
count__60285_60292 = G__60309;
i__60286_60293 = G__60310;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq60282){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60282));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60318 = arguments.length;
var i__25924__auto___60319 = (0);
while(true){
if((i__25924__auto___60319 < len__25923__auto___60318)){
args__25930__auto__.push((arguments[i__25924__auto___60319]));

var G__60320 = (i__25924__auto___60319 + (1));
i__25924__auto___60319 = G__60320;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((2) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25931__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__60314_60321 = cljs.core.seq.call(null,children);
var chunk__60315_60322 = null;
var count__60316_60323 = (0);
var i__60317_60324 = (0);
while(true){
if((i__60317_60324 < count__60316_60323)){
var child_60325 = cljs.core._nth.call(null,chunk__60315_60322,i__60317_60324);
if(cljs.core.some_QMARK_.call(null,child_60325)){
if(cljs.core.coll_QMARK_.call(null,child_60325)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_60325))));
} else {
var temp__4655__auto___60326 = devtools.formatters.helpers.pref.call(null,child_60325);
if(cljs.core.truth_(temp__4655__auto___60326)){
var child_value_60327 = temp__4655__auto___60326;
template.push(child_value_60327);
} else {
}
}
} else {
}

var G__60328 = seq__60314_60321;
var G__60329 = chunk__60315_60322;
var G__60330 = count__60316_60323;
var G__60331 = (i__60317_60324 + (1));
seq__60314_60321 = G__60328;
chunk__60315_60322 = G__60329;
count__60316_60323 = G__60330;
i__60317_60324 = G__60331;
continue;
} else {
var temp__4657__auto___60332 = cljs.core.seq.call(null,seq__60314_60321);
if(temp__4657__auto___60332){
var seq__60314_60333__$1 = temp__4657__auto___60332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60314_60333__$1)){
var c__25659__auto___60334 = cljs.core.chunk_first.call(null,seq__60314_60333__$1);
var G__60335 = cljs.core.chunk_rest.call(null,seq__60314_60333__$1);
var G__60336 = c__25659__auto___60334;
var G__60337 = cljs.core.count.call(null,c__25659__auto___60334);
var G__60338 = (0);
seq__60314_60321 = G__60335;
chunk__60315_60322 = G__60336;
count__60316_60323 = G__60337;
i__60317_60324 = G__60338;
continue;
} else {
var child_60339 = cljs.core.first.call(null,seq__60314_60333__$1);
if(cljs.core.some_QMARK_.call(null,child_60339)){
if(cljs.core.coll_QMARK_.call(null,child_60339)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_60339))));
} else {
var temp__4655__auto___60340 = devtools.formatters.helpers.pref.call(null,child_60339);
if(cljs.core.truth_(temp__4655__auto___60340)){
var child_value_60341 = temp__4655__auto___60340;
template.push(child_value_60341);
} else {
}
}
} else {
}

var G__60342 = cljs.core.next.call(null,seq__60314_60333__$1);
var G__60343 = null;
var G__60344 = (0);
var G__60345 = (0);
seq__60314_60321 = G__60342;
chunk__60315_60322 = G__60343;
count__60316_60323 = G__60344;
i__60317_60324 = G__60345;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq60311){
var G__60312 = cljs.core.first.call(null,seq60311);
var seq60311__$1 = cljs.core.next.call(null,seq60311);
var G__60313 = cljs.core.first.call(null,seq60311__$1);
var seq60311__$2 = cljs.core.next.call(null,seq60311__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__60312,G__60313,seq60311__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60348 = arguments.length;
var i__25924__auto___60349 = (0);
while(true){
if((i__25924__auto___60349 < len__25923__auto___60348)){
args__25930__auto__.push((arguments[i__25924__auto___60349]));

var G__60350 = (i__25924__auto___60349 + (1));
i__25924__auto___60349 = G__60350;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq60346){
var G__60347 = cljs.core.first.call(null,seq60346);
var seq60346__$1 = cljs.core.next.call(null,seq60346);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60347,seq60346__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60353 = arguments.length;
var i__25924__auto___60354 = (0);
while(true){
if((i__25924__auto___60354 < len__25923__auto___60353)){
args__25930__auto__.push((arguments[i__25924__auto___60354]));

var G__60355 = (i__25924__auto___60354 + (1));
i__25924__auto___60354 = G__60355;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq60351){
var G__60352 = cljs.core.first.call(null,seq60351);
var seq60351__$1 = cljs.core.next.call(null,seq60351);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60352,seq60351__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args60356 = [];
var len__25923__auto___60361 = arguments.length;
var i__25924__auto___60362 = (0);
while(true){
if((i__25924__auto___60362 < len__25923__auto___60361)){
args60356.push((arguments[i__25924__auto___60362]));

var G__60363 = (i__25924__auto___60362 + (1));
i__25924__auto___60362 = G__60363;
continue;
} else {
}
break;
}

var G__60358 = args60356.length;
switch (G__60358) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60356.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj60360 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24848__auto__ = start_index;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return (0);
}
})()};
return obj60360;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25930__auto__ = [];
var len__25923__auto___60371 = arguments.length;
var i__25924__auto___60372 = (0);
while(true){
if((i__25924__auto___60372 < len__25923__auto___60371)){
args__25930__auto__.push((arguments[i__25924__auto___60372]));

var G__60373 = (i__25924__auto___60372 + (1));
i__25924__auto___60372 = G__60373;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__60367){
var vec__60368 = p__60367;
var state_override_fn = cljs.core.nth.call(null,vec__60368,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq60365){
var G__60366 = cljs.core.first.call(null,seq60365);
var seq60365__$1 = cljs.core.next.call(null,seq60365);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__60366,seq60365__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_60377_60380 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_60378_60381 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_60377_60380,_STAR_print_fn_STAR_60378_60381,sb__25834__auto__){
return (function (x__25835__auto__){
return sb__25834__auto__.append(x__25835__auto__);
});})(_STAR_print_newline_STAR_60377_60380,_STAR_print_fn_STAR_60378_60381,sb__25834__auto__))
;

try{var _STAR_print_level_STAR_60379_60382 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_60379_60382;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_60378_60381;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_60377_60380;
}
return [cljs.core.str(sb__25834__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_60384 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_60384;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__60386 = name;
switch (G__60386) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__60391 = tag;
var html_tag = cljs.core.nth.call(null,vec__60391,(0),null);
var style = cljs.core.nth.call(null,vec__60391,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_60395 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_60395;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_60398 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_60399 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_60399;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_60398;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__60400 = initial_value;
var G__60401 = value.call(null);
initial_value = G__60400;
value = G__60401;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__60402 = initial_value;
var G__60403 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__60402;
value = G__60403;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__60404 = initial_value;
var G__60405 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__60404;
value = G__60405;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1489464080358