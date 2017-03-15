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
var x38068_38069 = value;
x38068_38069.devtools$protocols$IGroup$ = true;


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
var x38073_38074 = value;
x38073_38074.devtools$protocols$ITemplate$ = true;


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
var x38078_38079 = value;
x38078_38079.devtools$protocols$ISurrogate$ = true;


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
var len__25923__auto___38087 = arguments.length;
var i__25924__auto___38088 = (0);
while(true){
if((i__25924__auto___38088 < len__25923__auto___38087)){
args__25930__auto__.push((arguments[i__25924__auto___38088]));

var G__38089 = (i__25924__auto___38088 + (1));
i__25924__auto___38088 = G__38089;
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
var seq__38083_38090 = cljs.core.seq.call(null,items);
var chunk__38084_38091 = null;
var count__38085_38092 = (0);
var i__38086_38093 = (0);
while(true){
if((i__38086_38093 < count__38085_38092)){
var item_38094 = cljs.core._nth.call(null,chunk__38084_38091,i__38086_38093);
if(cljs.core.some_QMARK_.call(null,item_38094)){
if(cljs.core.coll_QMARK_.call(null,item_38094)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38094)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38094));
}
} else {
}

var G__38095 = seq__38083_38090;
var G__38096 = chunk__38084_38091;
var G__38097 = count__38085_38092;
var G__38098 = (i__38086_38093 + (1));
seq__38083_38090 = G__38095;
chunk__38084_38091 = G__38096;
count__38085_38092 = G__38097;
i__38086_38093 = G__38098;
continue;
} else {
var temp__4657__auto___38099 = cljs.core.seq.call(null,seq__38083_38090);
if(temp__4657__auto___38099){
var seq__38083_38100__$1 = temp__4657__auto___38099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38083_38100__$1)){
var c__25659__auto___38101 = cljs.core.chunk_first.call(null,seq__38083_38100__$1);
var G__38102 = cljs.core.chunk_rest.call(null,seq__38083_38100__$1);
var G__38103 = c__25659__auto___38101;
var G__38104 = cljs.core.count.call(null,c__25659__auto___38101);
var G__38105 = (0);
seq__38083_38090 = G__38102;
chunk__38084_38091 = G__38103;
count__38085_38092 = G__38104;
i__38086_38093 = G__38105;
continue;
} else {
var item_38106 = cljs.core.first.call(null,seq__38083_38100__$1);
if(cljs.core.some_QMARK_.call(null,item_38106)){
if(cljs.core.coll_QMARK_.call(null,item_38106)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38106)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38106));
}
} else {
}

var G__38107 = cljs.core.next.call(null,seq__38083_38100__$1);
var G__38108 = null;
var G__38109 = (0);
var G__38110 = (0);
seq__38083_38090 = G__38107;
chunk__38084_38091 = G__38108;
count__38085_38092 = G__38109;
i__38086_38093 = G__38110;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38082){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38082));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38118 = arguments.length;
var i__25924__auto___38119 = (0);
while(true){
if((i__25924__auto___38119 < len__25923__auto___38118)){
args__25930__auto__.push((arguments[i__25924__auto___38119]));

var G__38120 = (i__25924__auto___38119 + (1));
i__25924__auto___38119 = G__38120;
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
var seq__38114_38121 = cljs.core.seq.call(null,children);
var chunk__38115_38122 = null;
var count__38116_38123 = (0);
var i__38117_38124 = (0);
while(true){
if((i__38117_38124 < count__38116_38123)){
var child_38125 = cljs.core._nth.call(null,chunk__38115_38122,i__38117_38124);
if(cljs.core.some_QMARK_.call(null,child_38125)){
if(cljs.core.coll_QMARK_.call(null,child_38125)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38125))));
} else {
var temp__4655__auto___38126 = devtools.formatters.helpers.pref.call(null,child_38125);
if(cljs.core.truth_(temp__4655__auto___38126)){
var child_value_38127 = temp__4655__auto___38126;
template.push(child_value_38127);
} else {
}
}
} else {
}

var G__38128 = seq__38114_38121;
var G__38129 = chunk__38115_38122;
var G__38130 = count__38116_38123;
var G__38131 = (i__38117_38124 + (1));
seq__38114_38121 = G__38128;
chunk__38115_38122 = G__38129;
count__38116_38123 = G__38130;
i__38117_38124 = G__38131;
continue;
} else {
var temp__4657__auto___38132 = cljs.core.seq.call(null,seq__38114_38121);
if(temp__4657__auto___38132){
var seq__38114_38133__$1 = temp__4657__auto___38132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38114_38133__$1)){
var c__25659__auto___38134 = cljs.core.chunk_first.call(null,seq__38114_38133__$1);
var G__38135 = cljs.core.chunk_rest.call(null,seq__38114_38133__$1);
var G__38136 = c__25659__auto___38134;
var G__38137 = cljs.core.count.call(null,c__25659__auto___38134);
var G__38138 = (0);
seq__38114_38121 = G__38135;
chunk__38115_38122 = G__38136;
count__38116_38123 = G__38137;
i__38117_38124 = G__38138;
continue;
} else {
var child_38139 = cljs.core.first.call(null,seq__38114_38133__$1);
if(cljs.core.some_QMARK_.call(null,child_38139)){
if(cljs.core.coll_QMARK_.call(null,child_38139)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38139))));
} else {
var temp__4655__auto___38140 = devtools.formatters.helpers.pref.call(null,child_38139);
if(cljs.core.truth_(temp__4655__auto___38140)){
var child_value_38141 = temp__4655__auto___38140;
template.push(child_value_38141);
} else {
}
}
} else {
}

var G__38142 = cljs.core.next.call(null,seq__38114_38133__$1);
var G__38143 = null;
var G__38144 = (0);
var G__38145 = (0);
seq__38114_38121 = G__38142;
chunk__38115_38122 = G__38143;
count__38116_38123 = G__38144;
i__38117_38124 = G__38145;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38111){
var G__38112 = cljs.core.first.call(null,seq38111);
var seq38111__$1 = cljs.core.next.call(null,seq38111);
var G__38113 = cljs.core.first.call(null,seq38111__$1);
var seq38111__$2 = cljs.core.next.call(null,seq38111__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38112,G__38113,seq38111__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38148 = arguments.length;
var i__25924__auto___38149 = (0);
while(true){
if((i__25924__auto___38149 < len__25923__auto___38148)){
args__25930__auto__.push((arguments[i__25924__auto___38149]));

var G__38150 = (i__25924__auto___38149 + (1));
i__25924__auto___38149 = G__38150;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38146){
var G__38147 = cljs.core.first.call(null,seq38146);
var seq38146__$1 = cljs.core.next.call(null,seq38146);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38147,seq38146__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38153 = arguments.length;
var i__25924__auto___38154 = (0);
while(true){
if((i__25924__auto___38154 < len__25923__auto___38153)){
args__25930__auto__.push((arguments[i__25924__auto___38154]));

var G__38155 = (i__25924__auto___38154 + (1));
i__25924__auto___38154 = G__38155;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38151){
var G__38152 = cljs.core.first.call(null,seq38151);
var seq38151__$1 = cljs.core.next.call(null,seq38151);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38152,seq38151__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args38156 = [];
var len__25923__auto___38161 = arguments.length;
var i__25924__auto___38162 = (0);
while(true){
if((i__25924__auto___38162 < len__25923__auto___38161)){
args38156.push((arguments[i__25924__auto___38162]));

var G__38163 = (i__25924__auto___38162 + (1));
i__25924__auto___38162 = G__38163;
continue;
} else {
}
break;
}

var G__38158 = args38156.length;
switch (G__38158) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38156.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38160 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24848__auto__ = start_index;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return (0);
}
})()};
return obj38160;
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
var len__25923__auto___38171 = arguments.length;
var i__25924__auto___38172 = (0);
while(true){
if((i__25924__auto___38172 < len__25923__auto___38171)){
args__25930__auto__.push((arguments[i__25924__auto___38172]));

var G__38173 = (i__25924__auto___38172 + (1));
i__25924__auto___38172 = G__38173;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38167){
var vec__38168 = p__38167;
var state_override_fn = cljs.core.nth.call(null,vec__38168,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38165){
var G__38166 = cljs.core.first.call(null,seq38165);
var seq38165__$1 = cljs.core.next.call(null,seq38165);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38166,seq38165__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38177_38180 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38178_38181 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38177_38180,_STAR_print_fn_STAR_38178_38181,sb__25834__auto__){
return (function (x__25835__auto__){
return sb__25834__auto__.append(x__25835__auto__);
});})(_STAR_print_newline_STAR_38177_38180,_STAR_print_fn_STAR_38178_38181,sb__25834__auto__))
;

try{var _STAR_print_level_STAR_38179_38182 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38179_38182;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38178_38181;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38177_38180;
}
return [cljs.core.str(sb__25834__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38184 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38184;
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
var G__38186 = name;
switch (G__38186) {
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
var vec__38191 = tag;
var html_tag = cljs.core.nth.call(null,vec__38191,(0),null);
var style = cljs.core.nth.call(null,vec__38191,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38195 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38195;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38198 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38199 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38199;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38198;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38200 = initial_value;
var G__38201 = value.call(null);
initial_value = G__38200;
value = G__38201;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38202 = initial_value;
var G__38203 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38202;
value = G__38203;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38204 = initial_value;
var G__38205 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38204;
value = G__38205;
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

//# sourceMappingURL=templating.js.map?rel=1489514039518