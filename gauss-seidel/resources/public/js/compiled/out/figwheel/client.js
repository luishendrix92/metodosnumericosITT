// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34500 = [];
var len__25923__auto___34503 = arguments.length;
var i__25924__auto___34504 = (0);
while(true){
if((i__25924__auto___34504 < len__25923__auto___34503)){
args34500.push((arguments[i__25924__auto___34504]));

var G__34505 = (i__25924__auto___34504 + (1));
i__25924__auto___34504 = G__34505;
continue;
} else {
}
break;
}

var G__34502 = args34500.length;
switch (G__34502) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34500.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34508 = arguments.length;
var i__25924__auto___34509 = (0);
while(true){
if((i__25924__auto___34509 < len__25923__auto___34508)){
args__25930__auto__.push((arguments[i__25924__auto___34509]));

var G__34510 = (i__25924__auto___34509 + (1));
i__25924__auto___34509 = G__34510;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34507){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34507));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34512 = arguments.length;
var i__25924__auto___34513 = (0);
while(true){
if((i__25924__auto___34513 < len__25923__auto___34512)){
args__25930__auto__.push((arguments[i__25924__auto___34513]));

var G__34514 = (i__25924__auto___34513 + (1));
i__25924__auto___34513 = G__34514;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34511){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34511));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34515){
var map__34518 = p__34515;
var map__34518__$1 = ((((!((map__34518 == null)))?((((map__34518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34518):map__34518);
var message = cljs.core.get.call(null,map__34518__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34518__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24848__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24836__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24836__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24836__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27022__auto___34680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___34680,ch){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___34680,ch){
return (function (state_34649){
var state_val_34650 = (state_34649[(1)]);
if((state_val_34650 === (7))){
var inst_34645 = (state_34649[(2)]);
var state_34649__$1 = state_34649;
var statearr_34651_34681 = state_34649__$1;
(statearr_34651_34681[(2)] = inst_34645);

(statearr_34651_34681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (1))){
var state_34649__$1 = state_34649;
var statearr_34652_34682 = state_34649__$1;
(statearr_34652_34682[(2)] = null);

(statearr_34652_34682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (4))){
var inst_34602 = (state_34649[(7)]);
var inst_34602__$1 = (state_34649[(2)]);
var state_34649__$1 = (function (){var statearr_34653 = state_34649;
(statearr_34653[(7)] = inst_34602__$1);

return statearr_34653;
})();
if(cljs.core.truth_(inst_34602__$1)){
var statearr_34654_34683 = state_34649__$1;
(statearr_34654_34683[(1)] = (5));

} else {
var statearr_34655_34684 = state_34649__$1;
(statearr_34655_34684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (15))){
var inst_34609 = (state_34649[(8)]);
var inst_34624 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34609);
var inst_34625 = cljs.core.first.call(null,inst_34624);
var inst_34626 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34625);
var inst_34627 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34626)].join('');
var inst_34628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34627);
var state_34649__$1 = state_34649;
var statearr_34656_34685 = state_34649__$1;
(statearr_34656_34685[(2)] = inst_34628);

(statearr_34656_34685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (13))){
var inst_34633 = (state_34649[(2)]);
var state_34649__$1 = state_34649;
var statearr_34657_34686 = state_34649__$1;
(statearr_34657_34686[(2)] = inst_34633);

(statearr_34657_34686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (6))){
var state_34649__$1 = state_34649;
var statearr_34658_34687 = state_34649__$1;
(statearr_34658_34687[(2)] = null);

(statearr_34658_34687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (17))){
var inst_34631 = (state_34649[(2)]);
var state_34649__$1 = state_34649;
var statearr_34659_34688 = state_34649__$1;
(statearr_34659_34688[(2)] = inst_34631);

(statearr_34659_34688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (3))){
var inst_34647 = (state_34649[(2)]);
var state_34649__$1 = state_34649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34649__$1,inst_34647);
} else {
if((state_val_34650 === (12))){
var inst_34608 = (state_34649[(9)]);
var inst_34622 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34608,opts);
var state_34649__$1 = state_34649;
if(cljs.core.truth_(inst_34622)){
var statearr_34660_34689 = state_34649__$1;
(statearr_34660_34689[(1)] = (15));

} else {
var statearr_34661_34690 = state_34649__$1;
(statearr_34661_34690[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (2))){
var state_34649__$1 = state_34649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34649__$1,(4),ch);
} else {
if((state_val_34650 === (11))){
var inst_34609 = (state_34649[(8)]);
var inst_34614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34615 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34609);
var inst_34616 = cljs.core.async.timeout.call(null,(1000));
var inst_34617 = [inst_34615,inst_34616];
var inst_34618 = (new cljs.core.PersistentVector(null,2,(5),inst_34614,inst_34617,null));
var state_34649__$1 = state_34649;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34649__$1,(14),inst_34618);
} else {
if((state_val_34650 === (9))){
var inst_34609 = (state_34649[(8)]);
var inst_34635 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34636 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34609);
var inst_34637 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34636);
var inst_34638 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34637)].join('');
var inst_34639 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34638);
var state_34649__$1 = (function (){var statearr_34662 = state_34649;
(statearr_34662[(10)] = inst_34635);

return statearr_34662;
})();
var statearr_34663_34691 = state_34649__$1;
(statearr_34663_34691[(2)] = inst_34639);

(statearr_34663_34691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (5))){
var inst_34602 = (state_34649[(7)]);
var inst_34604 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34605 = (new cljs.core.PersistentArrayMap(null,2,inst_34604,null));
var inst_34606 = (new cljs.core.PersistentHashSet(null,inst_34605,null));
var inst_34607 = figwheel.client.focus_msgs.call(null,inst_34606,inst_34602);
var inst_34608 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34607);
var inst_34609 = cljs.core.first.call(null,inst_34607);
var inst_34610 = figwheel.client.autoload_QMARK_.call(null);
var state_34649__$1 = (function (){var statearr_34664 = state_34649;
(statearr_34664[(9)] = inst_34608);

(statearr_34664[(8)] = inst_34609);

return statearr_34664;
})();
if(cljs.core.truth_(inst_34610)){
var statearr_34665_34692 = state_34649__$1;
(statearr_34665_34692[(1)] = (8));

} else {
var statearr_34666_34693 = state_34649__$1;
(statearr_34666_34693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (14))){
var inst_34620 = (state_34649[(2)]);
var state_34649__$1 = state_34649;
var statearr_34667_34694 = state_34649__$1;
(statearr_34667_34694[(2)] = inst_34620);

(statearr_34667_34694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (16))){
var state_34649__$1 = state_34649;
var statearr_34668_34695 = state_34649__$1;
(statearr_34668_34695[(2)] = null);

(statearr_34668_34695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (10))){
var inst_34641 = (state_34649[(2)]);
var state_34649__$1 = (function (){var statearr_34669 = state_34649;
(statearr_34669[(11)] = inst_34641);

return statearr_34669;
})();
var statearr_34670_34696 = state_34649__$1;
(statearr_34670_34696[(2)] = null);

(statearr_34670_34696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34650 === (8))){
var inst_34608 = (state_34649[(9)]);
var inst_34612 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34608,opts);
var state_34649__$1 = state_34649;
if(cljs.core.truth_(inst_34612)){
var statearr_34671_34697 = state_34649__$1;
(statearr_34671_34697[(1)] = (11));

} else {
var statearr_34672_34698 = state_34649__$1;
(statearr_34672_34698[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27022__auto___34680,ch))
;
return ((function (switch__26910__auto__,c__27022__auto___34680,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____0 = (function (){
var statearr_34676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34676[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__);

(statearr_34676[(1)] = (1));

return statearr_34676;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____1 = (function (state_34649){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_34649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e34677){if((e34677 instanceof Object)){
var ex__26914__auto__ = e34677;
var statearr_34678_34699 = state_34649;
(statearr_34678_34699[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34700 = state_34649;
state_34649 = G__34700;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__ = function(state_34649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____1.call(this,state_34649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___34680,ch))
})();
var state__27024__auto__ = (function (){var statearr_34679 = f__27023__auto__.call(null);
(statearr_34679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___34680);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___34680,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34701_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34701_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34704 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34704){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34703){if((e34703 instanceof Error)){
var e = e34703;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34704], null));
} else {
var e = e34703;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34704))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34705){
var map__34714 = p__34705;
var map__34714__$1 = ((((!((map__34714 == null)))?((((map__34714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34714):map__34714);
var opts = map__34714__$1;
var build_id = cljs.core.get.call(null,map__34714__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34714,map__34714__$1,opts,build_id){
return (function (p__34716){
var vec__34717 = p__34716;
var seq__34718 = cljs.core.seq.call(null,vec__34717);
var first__34719 = cljs.core.first.call(null,seq__34718);
var seq__34718__$1 = cljs.core.next.call(null,seq__34718);
var map__34720 = first__34719;
var map__34720__$1 = ((((!((map__34720 == null)))?((((map__34720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34720):map__34720);
var msg = map__34720__$1;
var msg_name = cljs.core.get.call(null,map__34720__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34718__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34717,seq__34718,first__34719,seq__34718__$1,map__34720,map__34720__$1,msg,msg_name,_,map__34714,map__34714__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34717,seq__34718,first__34719,seq__34718__$1,map__34720,map__34720__$1,msg,msg_name,_,map__34714,map__34714__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34714,map__34714__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34728){
var vec__34729 = p__34728;
var seq__34730 = cljs.core.seq.call(null,vec__34729);
var first__34731 = cljs.core.first.call(null,seq__34730);
var seq__34730__$1 = cljs.core.next.call(null,seq__34730);
var map__34732 = first__34731;
var map__34732__$1 = ((((!((map__34732 == null)))?((((map__34732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34732):map__34732);
var msg = map__34732__$1;
var msg_name = cljs.core.get.call(null,map__34732__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34730__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34734){
var map__34746 = p__34734;
var map__34746__$1 = ((((!((map__34746 == null)))?((((map__34746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34746):map__34746);
var on_compile_warning = cljs.core.get.call(null,map__34746__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34746__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34746,map__34746__$1,on_compile_warning,on_compile_fail){
return (function (p__34748){
var vec__34749 = p__34748;
var seq__34750 = cljs.core.seq.call(null,vec__34749);
var first__34751 = cljs.core.first.call(null,seq__34750);
var seq__34750__$1 = cljs.core.next.call(null,seq__34750);
var map__34752 = first__34751;
var map__34752__$1 = ((((!((map__34752 == null)))?((((map__34752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34752):map__34752);
var msg = map__34752__$1;
var msg_name = cljs.core.get.call(null,map__34752__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34750__$1;
var pred__34754 = cljs.core._EQ_;
var expr__34755 = msg_name;
if(cljs.core.truth_(pred__34754.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34755))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34754.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34755))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34746,map__34746__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__,msg_hist,msg_names,msg){
return (function (state_34983){
var state_val_34984 = (state_34983[(1)]);
if((state_val_34984 === (7))){
var inst_34903 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34903)){
var statearr_34985_35035 = state_34983__$1;
(statearr_34985_35035[(1)] = (8));

} else {
var statearr_34986_35036 = state_34983__$1;
(statearr_34986_35036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (20))){
var inst_34977 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34987_35037 = state_34983__$1;
(statearr_34987_35037[(2)] = inst_34977);

(statearr_34987_35037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (27))){
var inst_34973 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34988_35038 = state_34983__$1;
(statearr_34988_35038[(2)] = inst_34973);

(statearr_34988_35038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (1))){
var inst_34896 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34896)){
var statearr_34989_35039 = state_34983__$1;
(statearr_34989_35039[(1)] = (2));

} else {
var statearr_34990_35040 = state_34983__$1;
(statearr_34990_35040[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (24))){
var inst_34975 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34991_35041 = state_34983__$1;
(statearr_34991_35041[(2)] = inst_34975);

(statearr_34991_35041[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (4))){
var inst_34981 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34983__$1,inst_34981);
} else {
if((state_val_34984 === (15))){
var inst_34979 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34992_35042 = state_34983__$1;
(statearr_34992_35042[(2)] = inst_34979);

(statearr_34992_35042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (21))){
var inst_34932 = (state_34983[(2)]);
var inst_34933 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34934 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34933);
var state_34983__$1 = (function (){var statearr_34993 = state_34983;
(statearr_34993[(7)] = inst_34932);

return statearr_34993;
})();
var statearr_34994_35043 = state_34983__$1;
(statearr_34994_35043[(2)] = inst_34934);

(statearr_34994_35043[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (31))){
var inst_34962 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34962)){
var statearr_34995_35044 = state_34983__$1;
(statearr_34995_35044[(1)] = (34));

} else {
var statearr_34996_35045 = state_34983__$1;
(statearr_34996_35045[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (32))){
var inst_34971 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34997_35046 = state_34983__$1;
(statearr_34997_35046[(2)] = inst_34971);

(statearr_34997_35046[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (33))){
var inst_34958 = (state_34983[(2)]);
var inst_34959 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34960 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34959);
var state_34983__$1 = (function (){var statearr_34998 = state_34983;
(statearr_34998[(8)] = inst_34958);

return statearr_34998;
})();
var statearr_34999_35047 = state_34983__$1;
(statearr_34999_35047[(2)] = inst_34960);

(statearr_34999_35047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (13))){
var inst_34917 = figwheel.client.heads_up.clear.call(null);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(16),inst_34917);
} else {
if((state_val_34984 === (22))){
var inst_34938 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34939 = figwheel.client.heads_up.append_warning_message.call(null,inst_34938);
var state_34983__$1 = state_34983;
var statearr_35000_35048 = state_34983__$1;
(statearr_35000_35048[(2)] = inst_34939);

(statearr_35000_35048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (36))){
var inst_34969 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_35001_35049 = state_34983__$1;
(statearr_35001_35049[(2)] = inst_34969);

(statearr_35001_35049[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (29))){
var inst_34949 = (state_34983[(2)]);
var inst_34950 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34951 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34950);
var state_34983__$1 = (function (){var statearr_35002 = state_34983;
(statearr_35002[(9)] = inst_34949);

return statearr_35002;
})();
var statearr_35003_35050 = state_34983__$1;
(statearr_35003_35050[(2)] = inst_34951);

(statearr_35003_35050[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (6))){
var inst_34898 = (state_34983[(10)]);
var state_34983__$1 = state_34983;
var statearr_35004_35051 = state_34983__$1;
(statearr_35004_35051[(2)] = inst_34898);

(statearr_35004_35051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (28))){
var inst_34945 = (state_34983[(2)]);
var inst_34946 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34947 = figwheel.client.heads_up.display_warning.call(null,inst_34946);
var state_34983__$1 = (function (){var statearr_35005 = state_34983;
(statearr_35005[(11)] = inst_34945);

return statearr_35005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(29),inst_34947);
} else {
if((state_val_34984 === (25))){
var inst_34943 = figwheel.client.heads_up.clear.call(null);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(28),inst_34943);
} else {
if((state_val_34984 === (34))){
var inst_34964 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(37),inst_34964);
} else {
if((state_val_34984 === (17))){
var inst_34923 = (state_34983[(2)]);
var inst_34924 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34925 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34924);
var state_34983__$1 = (function (){var statearr_35006 = state_34983;
(statearr_35006[(12)] = inst_34923);

return statearr_35006;
})();
var statearr_35007_35052 = state_34983__$1;
(statearr_35007_35052[(2)] = inst_34925);

(statearr_35007_35052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (3))){
var inst_34915 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34915)){
var statearr_35008_35053 = state_34983__$1;
(statearr_35008_35053[(1)] = (13));

} else {
var statearr_35009_35054 = state_34983__$1;
(statearr_35009_35054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (12))){
var inst_34911 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_35010_35055 = state_34983__$1;
(statearr_35010_35055[(2)] = inst_34911);

(statearr_35010_35055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (2))){
var inst_34898 = (state_34983[(10)]);
var inst_34898__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34983__$1 = (function (){var statearr_35011 = state_34983;
(statearr_35011[(10)] = inst_34898__$1);

return statearr_35011;
})();
if(cljs.core.truth_(inst_34898__$1)){
var statearr_35012_35056 = state_34983__$1;
(statearr_35012_35056[(1)] = (5));

} else {
var statearr_35013_35057 = state_34983__$1;
(statearr_35013_35057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (23))){
var inst_34941 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34941)){
var statearr_35014_35058 = state_34983__$1;
(statearr_35014_35058[(1)] = (25));

} else {
var statearr_35015_35059 = state_34983__$1;
(statearr_35015_35059[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (35))){
var state_34983__$1 = state_34983;
var statearr_35016_35060 = state_34983__$1;
(statearr_35016_35060[(2)] = null);

(statearr_35016_35060[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (19))){
var inst_34936 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34936)){
var statearr_35017_35061 = state_34983__$1;
(statearr_35017_35061[(1)] = (22));

} else {
var statearr_35018_35062 = state_34983__$1;
(statearr_35018_35062[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (11))){
var inst_34907 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_35019_35063 = state_34983__$1;
(statearr_35019_35063[(2)] = inst_34907);

(statearr_35019_35063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (9))){
var inst_34909 = figwheel.client.heads_up.clear.call(null);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(12),inst_34909);
} else {
if((state_val_34984 === (5))){
var inst_34900 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34983__$1 = state_34983;
var statearr_35020_35064 = state_34983__$1;
(statearr_35020_35064[(2)] = inst_34900);

(statearr_35020_35064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (14))){
var inst_34927 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34927)){
var statearr_35021_35065 = state_34983__$1;
(statearr_35021_35065[(1)] = (18));

} else {
var statearr_35022_35066 = state_34983__$1;
(statearr_35022_35066[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (26))){
var inst_34953 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34953)){
var statearr_35023_35067 = state_34983__$1;
(statearr_35023_35067[(1)] = (30));

} else {
var statearr_35024_35068 = state_34983__$1;
(statearr_35024_35068[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (16))){
var inst_34919 = (state_34983[(2)]);
var inst_34920 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34921 = figwheel.client.heads_up.display_exception.call(null,inst_34920);
var state_34983__$1 = (function (){var statearr_35025 = state_34983;
(statearr_35025[(13)] = inst_34919);

return statearr_35025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(17),inst_34921);
} else {
if((state_val_34984 === (30))){
var inst_34955 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34956 = figwheel.client.heads_up.display_warning.call(null,inst_34955);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(33),inst_34956);
} else {
if((state_val_34984 === (10))){
var inst_34913 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_35026_35069 = state_34983__$1;
(statearr_35026_35069[(2)] = inst_34913);

(statearr_35026_35069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (18))){
var inst_34929 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34930 = figwheel.client.heads_up.display_exception.call(null,inst_34929);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(21),inst_34930);
} else {
if((state_val_34984 === (37))){
var inst_34966 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_35027_35070 = state_34983__$1;
(statearr_35027_35070[(2)] = inst_34966);

(statearr_35027_35070[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (8))){
var inst_34905 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(11),inst_34905);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27022__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26910__auto__,c__27022__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____0 = (function (){
var statearr_35031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35031[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__);

(statearr_35031[(1)] = (1));

return statearr_35031;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____1 = (function (state_34983){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_34983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e35032){if((e35032 instanceof Object)){
var ex__26914__auto__ = e35032;
var statearr_35033_35071 = state_34983;
(statearr_35033_35071[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35072 = state_34983;
state_34983 = G__35072;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__ = function(state_34983){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____1.call(this,state_34983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,msg_hist,msg_names,msg))
})();
var state__27024__auto__ = (function (){var statearr_35034 = f__27023__auto__.call(null);
(statearr_35034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_35034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__,msg_hist,msg_names,msg))
);

return c__27022__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27022__auto___35135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___35135,ch){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___35135,ch){
return (function (state_35118){
var state_val_35119 = (state_35118[(1)]);
if((state_val_35119 === (1))){
var state_35118__$1 = state_35118;
var statearr_35120_35136 = state_35118__$1;
(statearr_35120_35136[(2)] = null);

(statearr_35120_35136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (2))){
var state_35118__$1 = state_35118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35118__$1,(4),ch);
} else {
if((state_val_35119 === (3))){
var inst_35116 = (state_35118[(2)]);
var state_35118__$1 = state_35118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35118__$1,inst_35116);
} else {
if((state_val_35119 === (4))){
var inst_35106 = (state_35118[(7)]);
var inst_35106__$1 = (state_35118[(2)]);
var state_35118__$1 = (function (){var statearr_35121 = state_35118;
(statearr_35121[(7)] = inst_35106__$1);

return statearr_35121;
})();
if(cljs.core.truth_(inst_35106__$1)){
var statearr_35122_35137 = state_35118__$1;
(statearr_35122_35137[(1)] = (5));

} else {
var statearr_35123_35138 = state_35118__$1;
(statearr_35123_35138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (5))){
var inst_35106 = (state_35118[(7)]);
var inst_35108 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35106);
var state_35118__$1 = state_35118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35118__$1,(8),inst_35108);
} else {
if((state_val_35119 === (6))){
var state_35118__$1 = state_35118;
var statearr_35124_35139 = state_35118__$1;
(statearr_35124_35139[(2)] = null);

(statearr_35124_35139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (7))){
var inst_35114 = (state_35118[(2)]);
var state_35118__$1 = state_35118;
var statearr_35125_35140 = state_35118__$1;
(statearr_35125_35140[(2)] = inst_35114);

(statearr_35125_35140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (8))){
var inst_35110 = (state_35118[(2)]);
var state_35118__$1 = (function (){var statearr_35126 = state_35118;
(statearr_35126[(8)] = inst_35110);

return statearr_35126;
})();
var statearr_35127_35141 = state_35118__$1;
(statearr_35127_35141[(2)] = null);

(statearr_35127_35141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27022__auto___35135,ch))
;
return ((function (switch__26910__auto__,c__27022__auto___35135,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26911__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26911__auto____0 = (function (){
var statearr_35131 = [null,null,null,null,null,null,null,null,null];
(statearr_35131[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26911__auto__);

(statearr_35131[(1)] = (1));

return statearr_35131;
});
var figwheel$client$heads_up_plugin_$_state_machine__26911__auto____1 = (function (state_35118){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_35118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e35132){if((e35132 instanceof Object)){
var ex__26914__auto__ = e35132;
var statearr_35133_35142 = state_35118;
(statearr_35133_35142[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35143 = state_35118;
state_35118 = G__35143;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26911__auto__ = function(state_35118){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26911__auto____1.call(this,state_35118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26911__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26911__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___35135,ch))
})();
var state__27024__auto__ = (function (){var statearr_35134 = f__27023__auto__.call(null);
(statearr_35134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___35135);

return statearr_35134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___35135,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__){
return (function (state_35164){
var state_val_35165 = (state_35164[(1)]);
if((state_val_35165 === (1))){
var inst_35159 = cljs.core.async.timeout.call(null,(3000));
var state_35164__$1 = state_35164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35164__$1,(2),inst_35159);
} else {
if((state_val_35165 === (2))){
var inst_35161 = (state_35164[(2)]);
var inst_35162 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35164__$1 = (function (){var statearr_35166 = state_35164;
(statearr_35166[(7)] = inst_35161);

return statearr_35166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35164__$1,inst_35162);
} else {
return null;
}
}
});})(c__27022__auto__))
;
return ((function (switch__26910__auto__,c__27022__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____0 = (function (){
var statearr_35170 = [null,null,null,null,null,null,null,null];
(statearr_35170[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__);

(statearr_35170[(1)] = (1));

return statearr_35170;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____1 = (function (state_35164){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_35164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e35171){if((e35171 instanceof Object)){
var ex__26914__auto__ = e35171;
var statearr_35172_35174 = state_35164;
(statearr_35172_35174[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35175 = state_35164;
state_35164 = G__35175;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__ = function(state_35164){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____1.call(this,state_35164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_35173 = f__27023__auto__.call(null);
(statearr_35173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_35173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__))
);

return c__27022__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35198){
var state_val_35199 = (state_35198[(1)]);
if((state_val_35199 === (1))){
var inst_35192 = cljs.core.async.timeout.call(null,(2000));
var state_35198__$1 = state_35198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35198__$1,(2),inst_35192);
} else {
if((state_val_35199 === (2))){
var inst_35194 = (state_35198[(2)]);
var inst_35195 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35196 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35195);
var state_35198__$1 = (function (){var statearr_35200 = state_35198;
(statearr_35200[(7)] = inst_35194);

return statearr_35200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35198__$1,inst_35196);
} else {
return null;
}
}
});})(c__27022__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26910__auto__,c__27022__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____0 = (function (){
var statearr_35204 = [null,null,null,null,null,null,null,null];
(statearr_35204[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__);

(statearr_35204[(1)] = (1));

return statearr_35204;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____1 = (function (state_35198){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_35198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e35205){if((e35205 instanceof Object)){
var ex__26914__auto__ = e35205;
var statearr_35206_35208 = state_35198;
(statearr_35206_35208[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35209 = state_35198;
state_35198 = G__35209;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__ = function(state_35198){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____1.call(this,state_35198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27024__auto__ = (function (){var statearr_35207 = f__27023__auto__.call(null);
(statearr_35207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_35207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__,figwheel_version,temp__4657__auto__))
);

return c__27022__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35210){
var map__35214 = p__35210;
var map__35214__$1 = ((((!((map__35214 == null)))?((((map__35214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35214):map__35214);
var file = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35216 = "";
var G__35216__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35216),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35216);
var G__35216__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35216__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35216__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__35216__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35216__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35217){
var map__35224 = p__35217;
var map__35224__$1 = ((((!((map__35224 == null)))?((((map__35224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35224):map__35224);
var ed = map__35224__$1;
var formatted_exception = cljs.core.get.call(null,map__35224__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35224__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35224__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35226_35230 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35227_35231 = null;
var count__35228_35232 = (0);
var i__35229_35233 = (0);
while(true){
if((i__35229_35233 < count__35228_35232)){
var msg_35234 = cljs.core._nth.call(null,chunk__35227_35231,i__35229_35233);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35234);

var G__35235 = seq__35226_35230;
var G__35236 = chunk__35227_35231;
var G__35237 = count__35228_35232;
var G__35238 = (i__35229_35233 + (1));
seq__35226_35230 = G__35235;
chunk__35227_35231 = G__35236;
count__35228_35232 = G__35237;
i__35229_35233 = G__35238;
continue;
} else {
var temp__4657__auto___35239 = cljs.core.seq.call(null,seq__35226_35230);
if(temp__4657__auto___35239){
var seq__35226_35240__$1 = temp__4657__auto___35239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35226_35240__$1)){
var c__25659__auto___35241 = cljs.core.chunk_first.call(null,seq__35226_35240__$1);
var G__35242 = cljs.core.chunk_rest.call(null,seq__35226_35240__$1);
var G__35243 = c__25659__auto___35241;
var G__35244 = cljs.core.count.call(null,c__25659__auto___35241);
var G__35245 = (0);
seq__35226_35230 = G__35242;
chunk__35227_35231 = G__35243;
count__35228_35232 = G__35244;
i__35229_35233 = G__35245;
continue;
} else {
var msg_35246 = cljs.core.first.call(null,seq__35226_35240__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35246);

var G__35247 = cljs.core.next.call(null,seq__35226_35240__$1);
var G__35248 = null;
var G__35249 = (0);
var G__35250 = (0);
seq__35226_35230 = G__35247;
chunk__35227_35231 = G__35248;
count__35228_35232 = G__35249;
i__35229_35233 = G__35250;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35251){
var map__35254 = p__35251;
var map__35254__$1 = ((((!((map__35254 == null)))?((((map__35254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35254):map__35254);
var w = map__35254__$1;
var message = cljs.core.get.call(null,map__35254__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24836__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24836__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35266 = cljs.core.seq.call(null,plugins);
var chunk__35267 = null;
var count__35268 = (0);
var i__35269 = (0);
while(true){
if((i__35269 < count__35268)){
var vec__35270 = cljs.core._nth.call(null,chunk__35267,i__35269);
var k = cljs.core.nth.call(null,vec__35270,(0),null);
var plugin = cljs.core.nth.call(null,vec__35270,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35276 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35266,chunk__35267,count__35268,i__35269,pl_35276,vec__35270,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35276.call(null,msg_hist);
});})(seq__35266,chunk__35267,count__35268,i__35269,pl_35276,vec__35270,k,plugin))
);
} else {
}

var G__35277 = seq__35266;
var G__35278 = chunk__35267;
var G__35279 = count__35268;
var G__35280 = (i__35269 + (1));
seq__35266 = G__35277;
chunk__35267 = G__35278;
count__35268 = G__35279;
i__35269 = G__35280;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35266);
if(temp__4657__auto__){
var seq__35266__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35266__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__35266__$1);
var G__35281 = cljs.core.chunk_rest.call(null,seq__35266__$1);
var G__35282 = c__25659__auto__;
var G__35283 = cljs.core.count.call(null,c__25659__auto__);
var G__35284 = (0);
seq__35266 = G__35281;
chunk__35267 = G__35282;
count__35268 = G__35283;
i__35269 = G__35284;
continue;
} else {
var vec__35273 = cljs.core.first.call(null,seq__35266__$1);
var k = cljs.core.nth.call(null,vec__35273,(0),null);
var plugin = cljs.core.nth.call(null,vec__35273,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35285 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35266,chunk__35267,count__35268,i__35269,pl_35285,vec__35273,k,plugin,seq__35266__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35285.call(null,msg_hist);
});})(seq__35266,chunk__35267,count__35268,i__35269,pl_35285,vec__35273,k,plugin,seq__35266__$1,temp__4657__auto__))
);
} else {
}

var G__35286 = cljs.core.next.call(null,seq__35266__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__35266 = G__35286;
chunk__35267 = G__35287;
count__35268 = G__35288;
i__35269 = G__35289;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35290 = [];
var len__25923__auto___35297 = arguments.length;
var i__25924__auto___35298 = (0);
while(true){
if((i__25924__auto___35298 < len__25923__auto___35297)){
args35290.push((arguments[i__25924__auto___35298]));

var G__35299 = (i__25924__auto___35298 + (1));
i__25924__auto___35298 = G__35299;
continue;
} else {
}
break;
}

var G__35292 = args35290.length;
switch (G__35292) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35290.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35293_35301 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35294_35302 = null;
var count__35295_35303 = (0);
var i__35296_35304 = (0);
while(true){
if((i__35296_35304 < count__35295_35303)){
var msg_35305 = cljs.core._nth.call(null,chunk__35294_35302,i__35296_35304);
figwheel.client.socket.handle_incoming_message.call(null,msg_35305);

var G__35306 = seq__35293_35301;
var G__35307 = chunk__35294_35302;
var G__35308 = count__35295_35303;
var G__35309 = (i__35296_35304 + (1));
seq__35293_35301 = G__35306;
chunk__35294_35302 = G__35307;
count__35295_35303 = G__35308;
i__35296_35304 = G__35309;
continue;
} else {
var temp__4657__auto___35310 = cljs.core.seq.call(null,seq__35293_35301);
if(temp__4657__auto___35310){
var seq__35293_35311__$1 = temp__4657__auto___35310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35293_35311__$1)){
var c__25659__auto___35312 = cljs.core.chunk_first.call(null,seq__35293_35311__$1);
var G__35313 = cljs.core.chunk_rest.call(null,seq__35293_35311__$1);
var G__35314 = c__25659__auto___35312;
var G__35315 = cljs.core.count.call(null,c__25659__auto___35312);
var G__35316 = (0);
seq__35293_35301 = G__35313;
chunk__35294_35302 = G__35314;
count__35295_35303 = G__35315;
i__35296_35304 = G__35316;
continue;
} else {
var msg_35317 = cljs.core.first.call(null,seq__35293_35311__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35317);

var G__35318 = cljs.core.next.call(null,seq__35293_35311__$1);
var G__35319 = null;
var G__35320 = (0);
var G__35321 = (0);
seq__35293_35301 = G__35318;
chunk__35294_35302 = G__35319;
count__35295_35303 = G__35320;
i__35296_35304 = G__35321;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35326 = arguments.length;
var i__25924__auto___35327 = (0);
while(true){
if((i__25924__auto___35327 < len__25923__auto___35326)){
args__25930__auto__.push((arguments[i__25924__auto___35327]));

var G__35328 = (i__25924__auto___35327 + (1));
i__25924__auto___35327 = G__35328;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35323){
var map__35324 = p__35323;
var map__35324__$1 = ((((!((map__35324 == null)))?((((map__35324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35324):map__35324);
var opts = map__35324__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35322){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35322));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35330){if((e35330 instanceof Error)){
var e = e35330;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35330;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35334){
var map__35335 = p__35334;
var map__35335__$1 = ((((!((map__35335 == null)))?((((map__35335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35335):map__35335);
var msg_name = cljs.core.get.call(null,map__35335__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489514034510