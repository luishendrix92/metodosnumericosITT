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
var x38618_38619 = value;
x38618_38619.devtools$protocols$IGroup$ = true;


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
var x38623_38624 = value;
x38623_38624.devtools$protocols$ITemplate$ = true;


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
var x38628_38629 = value;
x38628_38629.devtools$protocols$ISurrogate$ = true;


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
var len__25923__auto___38637 = arguments.length;
var i__25924__auto___38638 = (0);
while(true){
if((i__25924__auto___38638 < len__25923__auto___38637)){
args__25930__auto__.push((arguments[i__25924__auto___38638]));

var G__38639 = (i__25924__auto___38638 + (1));
i__25924__auto___38638 = G__38639;
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
var seq__38633_38640 = cljs.core.seq.call(null,items);
var chunk__38634_38641 = null;
var count__38635_38642 = (0);
var i__38636_38643 = (0);
while(true){
if((i__38636_38643 < count__38635_38642)){
var item_38644 = cljs.core._nth.call(null,chunk__38634_38641,i__38636_38643);
if(cljs.core.some_QMARK_.call(null,item_38644)){
if(cljs.core.coll_QMARK_.call(null,item_38644)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38644)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38644));
}
} else {
}

var G__38645 = seq__38633_38640;
var G__38646 = chunk__38634_38641;
var G__38647 = count__38635_38642;
var G__38648 = (i__38636_38643 + (1));
seq__38633_38640 = G__38645;
chunk__38634_38641 = G__38646;
count__38635_38642 = G__38647;
i__38636_38643 = G__38648;
continue;
} else {
var temp__4657__auto___38649 = cljs.core.seq.call(null,seq__38633_38640);
if(temp__4657__auto___38649){
var seq__38633_38650__$1 = temp__4657__auto___38649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38633_38650__$1)){
var c__25659__auto___38651 = cljs.core.chunk_first.call(null,seq__38633_38650__$1);
var G__38652 = cljs.core.chunk_rest.call(null,seq__38633_38650__$1);
var G__38653 = c__25659__auto___38651;
var G__38654 = cljs.core.count.call(null,c__25659__auto___38651);
var G__38655 = (0);
seq__38633_38640 = G__38652;
chunk__38634_38641 = G__38653;
count__38635_38642 = G__38654;
i__38636_38643 = G__38655;
continue;
} else {
var item_38656 = cljs.core.first.call(null,seq__38633_38650__$1);
if(cljs.core.some_QMARK_.call(null,item_38656)){
if(cljs.core.coll_QMARK_.call(null,item_38656)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38656)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38656));
}
} else {
}

var G__38657 = cljs.core.next.call(null,seq__38633_38650__$1);
var G__38658 = null;
var G__38659 = (0);
var G__38660 = (0);
seq__38633_38640 = G__38657;
chunk__38634_38641 = G__38658;
count__38635_38642 = G__38659;
i__38636_38643 = G__38660;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38632){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38632));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38668 = arguments.length;
var i__25924__auto___38669 = (0);
while(true){
if((i__25924__auto___38669 < len__25923__auto___38668)){
args__25930__auto__.push((arguments[i__25924__auto___38669]));

var G__38670 = (i__25924__auto___38669 + (1));
i__25924__auto___38669 = G__38670;
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
var seq__38664_38671 = cljs.core.seq.call(null,children);
var chunk__38665_38672 = null;
var count__38666_38673 = (0);
var i__38667_38674 = (0);
while(true){
if((i__38667_38674 < count__38666_38673)){
var child_38675 = cljs.core._nth.call(null,chunk__38665_38672,i__38667_38674);
if(cljs.core.some_QMARK_.call(null,child_38675)){
if(cljs.core.coll_QMARK_.call(null,child_38675)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38675))));
} else {
var temp__4655__auto___38676 = devtools.formatters.helpers.pref.call(null,child_38675);
if(cljs.core.truth_(temp__4655__auto___38676)){
var child_value_38677 = temp__4655__auto___38676;
template.push(child_value_38677);
} else {
}
}
} else {
}

var G__38678 = seq__38664_38671;
var G__38679 = chunk__38665_38672;
var G__38680 = count__38666_38673;
var G__38681 = (i__38667_38674 + (1));
seq__38664_38671 = G__38678;
chunk__38665_38672 = G__38679;
count__38666_38673 = G__38680;
i__38667_38674 = G__38681;
continue;
} else {
var temp__4657__auto___38682 = cljs.core.seq.call(null,seq__38664_38671);
if(temp__4657__auto___38682){
var seq__38664_38683__$1 = temp__4657__auto___38682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38664_38683__$1)){
var c__25659__auto___38684 = cljs.core.chunk_first.call(null,seq__38664_38683__$1);
var G__38685 = cljs.core.chunk_rest.call(null,seq__38664_38683__$1);
var G__38686 = c__25659__auto___38684;
var G__38687 = cljs.core.count.call(null,c__25659__auto___38684);
var G__38688 = (0);
seq__38664_38671 = G__38685;
chunk__38665_38672 = G__38686;
count__38666_38673 = G__38687;
i__38667_38674 = G__38688;
continue;
} else {
var child_38689 = cljs.core.first.call(null,seq__38664_38683__$1);
if(cljs.core.some_QMARK_.call(null,child_38689)){
if(cljs.core.coll_QMARK_.call(null,child_38689)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38689))));
} else {
var temp__4655__auto___38690 = devtools.formatters.helpers.pref.call(null,child_38689);
if(cljs.core.truth_(temp__4655__auto___38690)){
var child_value_38691 = temp__4655__auto___38690;
template.push(child_value_38691);
} else {
}
}
} else {
}

var G__38692 = cljs.core.next.call(null,seq__38664_38683__$1);
var G__38693 = null;
var G__38694 = (0);
var G__38695 = (0);
seq__38664_38671 = G__38692;
chunk__38665_38672 = G__38693;
count__38666_38673 = G__38694;
i__38667_38674 = G__38695;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38661){
var G__38662 = cljs.core.first.call(null,seq38661);
var seq38661__$1 = cljs.core.next.call(null,seq38661);
var G__38663 = cljs.core.first.call(null,seq38661__$1);
var seq38661__$2 = cljs.core.next.call(null,seq38661__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38662,G__38663,seq38661__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38698 = arguments.length;
var i__25924__auto___38699 = (0);
while(true){
if((i__25924__auto___38699 < len__25923__auto___38698)){
args__25930__auto__.push((arguments[i__25924__auto___38699]));

var G__38700 = (i__25924__auto___38699 + (1));
i__25924__auto___38699 = G__38700;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38696){
var G__38697 = cljs.core.first.call(null,seq38696);
var seq38696__$1 = cljs.core.next.call(null,seq38696);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38697,seq38696__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38703 = arguments.length;
var i__25924__auto___38704 = (0);
while(true){
if((i__25924__auto___38704 < len__25923__auto___38703)){
args__25930__auto__.push((arguments[i__25924__auto___38704]));

var G__38705 = (i__25924__auto___38704 + (1));
i__25924__auto___38704 = G__38705;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38701){
var G__38702 = cljs.core.first.call(null,seq38701);
var seq38701__$1 = cljs.core.next.call(null,seq38701);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38702,seq38701__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args38706 = [];
var len__25923__auto___38711 = arguments.length;
var i__25924__auto___38712 = (0);
while(true){
if((i__25924__auto___38712 < len__25923__auto___38711)){
args38706.push((arguments[i__25924__auto___38712]));

var G__38713 = (i__25924__auto___38712 + (1));
i__25924__auto___38712 = G__38713;
continue;
} else {
}
break;
}

var G__38708 = args38706.length;
switch (G__38708) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38706.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38710 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24848__auto__ = start_index;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return (0);
}
})()};
return obj38710;
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
var len__25923__auto___38721 = arguments.length;
var i__25924__auto___38722 = (0);
while(true){
if((i__25924__auto___38722 < len__25923__auto___38721)){
args__25930__auto__.push((arguments[i__25924__auto___38722]));

var G__38723 = (i__25924__auto___38722 + (1));
i__25924__auto___38722 = G__38723;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38717){
var vec__38718 = p__38717;
var state_override_fn = cljs.core.nth.call(null,vec__38718,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38715){
var G__38716 = cljs.core.first.call(null,seq38715);
var seq38715__$1 = cljs.core.next.call(null,seq38715);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38716,seq38715__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38727_38730 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38728_38731 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38727_38730,_STAR_print_fn_STAR_38728_38731,sb__25834__auto__){
return (function (x__25835__auto__){
return sb__25834__auto__.append(x__25835__auto__);
});})(_STAR_print_newline_STAR_38727_38730,_STAR_print_fn_STAR_38728_38731,sb__25834__auto__))
;

try{var _STAR_print_level_STAR_38729_38732 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38729_38732;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38728_38731;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38727_38730;
}
return [cljs.core.str(sb__25834__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38734 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38734;
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
var G__38736 = name;
switch (G__38736) {
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
var vec__38741 = tag;
var html_tag = cljs.core.nth.call(null,vec__38741,(0),null);
var style = cljs.core.nth.call(null,vec__38741,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38745 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38745;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38748 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38749 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38749;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38748;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38750 = initial_value;
var G__38751 = value.call(null);
initial_value = G__38750;
value = G__38751;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38752 = initial_value;
var G__38753 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38752;
value = G__38753;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38754 = initial_value;
var G__38755 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38754;
value = G__38755;
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

//# sourceMappingURL=templating.js.map?rel=1491541656832