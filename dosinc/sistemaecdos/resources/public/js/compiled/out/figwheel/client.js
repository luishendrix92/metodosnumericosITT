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
var args57135 = [];
var len__25923__auto___57138 = arguments.length;
var i__25924__auto___57139 = (0);
while(true){
if((i__25924__auto___57139 < len__25923__auto___57138)){
args57135.push((arguments[i__25924__auto___57139]));

var G__57140 = (i__25924__auto___57139 + (1));
i__25924__auto___57139 = G__57140;
continue;
} else {
}
break;
}

var G__57137 = args57135.length;
switch (G__57137) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57135.length)].join('')));

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
var len__25923__auto___57143 = arguments.length;
var i__25924__auto___57144 = (0);
while(true){
if((i__25924__auto___57144 < len__25923__auto___57143)){
args__25930__auto__.push((arguments[i__25924__auto___57144]));

var G__57145 = (i__25924__auto___57144 + (1));
i__25924__auto___57144 = G__57145;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq57142){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57142));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___57147 = arguments.length;
var i__25924__auto___57148 = (0);
while(true){
if((i__25924__auto___57148 < len__25923__auto___57147)){
args__25930__auto__.push((arguments[i__25924__auto___57148]));

var G__57149 = (i__25924__auto___57148 + (1));
i__25924__auto___57148 = G__57149;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq57146){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57146));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__57150){
var map__57153 = p__57150;
var map__57153__$1 = ((((!((map__57153 == null)))?((((map__57153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57153):map__57153);
var message = cljs.core.get.call(null,map__57153__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__57153__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27022__auto___57315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___57315,ch){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___57315,ch){
return (function (state_57284){
var state_val_57285 = (state_57284[(1)]);
if((state_val_57285 === (7))){
var inst_57280 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57286_57316 = state_57284__$1;
(statearr_57286_57316[(2)] = inst_57280);

(statearr_57286_57316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (1))){
var state_57284__$1 = state_57284;
var statearr_57287_57317 = state_57284__$1;
(statearr_57287_57317[(2)] = null);

(statearr_57287_57317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (4))){
var inst_57237 = (state_57284[(7)]);
var inst_57237__$1 = (state_57284[(2)]);
var state_57284__$1 = (function (){var statearr_57288 = state_57284;
(statearr_57288[(7)] = inst_57237__$1);

return statearr_57288;
})();
if(cljs.core.truth_(inst_57237__$1)){
var statearr_57289_57318 = state_57284__$1;
(statearr_57289_57318[(1)] = (5));

} else {
var statearr_57290_57319 = state_57284__$1;
(statearr_57290_57319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (15))){
var inst_57244 = (state_57284[(8)]);
var inst_57259 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_57244);
var inst_57260 = cljs.core.first.call(null,inst_57259);
var inst_57261 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_57260);
var inst_57262 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_57261)].join('');
var inst_57263 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_57262);
var state_57284__$1 = state_57284;
var statearr_57291_57320 = state_57284__$1;
(statearr_57291_57320[(2)] = inst_57263);

(statearr_57291_57320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (13))){
var inst_57268 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57292_57321 = state_57284__$1;
(statearr_57292_57321[(2)] = inst_57268);

(statearr_57292_57321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (6))){
var state_57284__$1 = state_57284;
var statearr_57293_57322 = state_57284__$1;
(statearr_57293_57322[(2)] = null);

(statearr_57293_57322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (17))){
var inst_57266 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57294_57323 = state_57284__$1;
(statearr_57294_57323[(2)] = inst_57266);

(statearr_57294_57323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (3))){
var inst_57282 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57284__$1,inst_57282);
} else {
if((state_val_57285 === (12))){
var inst_57243 = (state_57284[(9)]);
var inst_57257 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_57243,opts);
var state_57284__$1 = state_57284;
if(cljs.core.truth_(inst_57257)){
var statearr_57295_57324 = state_57284__$1;
(statearr_57295_57324[(1)] = (15));

} else {
var statearr_57296_57325 = state_57284__$1;
(statearr_57296_57325[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (2))){
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57284__$1,(4),ch);
} else {
if((state_val_57285 === (11))){
var inst_57244 = (state_57284[(8)]);
var inst_57249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57250 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_57244);
var inst_57251 = cljs.core.async.timeout.call(null,(1000));
var inst_57252 = [inst_57250,inst_57251];
var inst_57253 = (new cljs.core.PersistentVector(null,2,(5),inst_57249,inst_57252,null));
var state_57284__$1 = state_57284;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57284__$1,(14),inst_57253);
} else {
if((state_val_57285 === (9))){
var inst_57244 = (state_57284[(8)]);
var inst_57270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_57271 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_57244);
var inst_57272 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_57271);
var inst_57273 = [cljs.core.str("Not loading: "),cljs.core.str(inst_57272)].join('');
var inst_57274 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_57273);
var state_57284__$1 = (function (){var statearr_57297 = state_57284;
(statearr_57297[(10)] = inst_57270);

return statearr_57297;
})();
var statearr_57298_57326 = state_57284__$1;
(statearr_57298_57326[(2)] = inst_57274);

(statearr_57298_57326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (5))){
var inst_57237 = (state_57284[(7)]);
var inst_57239 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_57240 = (new cljs.core.PersistentArrayMap(null,2,inst_57239,null));
var inst_57241 = (new cljs.core.PersistentHashSet(null,inst_57240,null));
var inst_57242 = figwheel.client.focus_msgs.call(null,inst_57241,inst_57237);
var inst_57243 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_57242);
var inst_57244 = cljs.core.first.call(null,inst_57242);
var inst_57245 = figwheel.client.autoload_QMARK_.call(null);
var state_57284__$1 = (function (){var statearr_57299 = state_57284;
(statearr_57299[(9)] = inst_57243);

(statearr_57299[(8)] = inst_57244);

return statearr_57299;
})();
if(cljs.core.truth_(inst_57245)){
var statearr_57300_57327 = state_57284__$1;
(statearr_57300_57327[(1)] = (8));

} else {
var statearr_57301_57328 = state_57284__$1;
(statearr_57301_57328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (14))){
var inst_57255 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57302_57329 = state_57284__$1;
(statearr_57302_57329[(2)] = inst_57255);

(statearr_57302_57329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (16))){
var state_57284__$1 = state_57284;
var statearr_57303_57330 = state_57284__$1;
(statearr_57303_57330[(2)] = null);

(statearr_57303_57330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (10))){
var inst_57276 = (state_57284[(2)]);
var state_57284__$1 = (function (){var statearr_57304 = state_57284;
(statearr_57304[(11)] = inst_57276);

return statearr_57304;
})();
var statearr_57305_57331 = state_57284__$1;
(statearr_57305_57331[(2)] = null);

(statearr_57305_57331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (8))){
var inst_57243 = (state_57284[(9)]);
var inst_57247 = figwheel.client.reload_file_state_QMARK_.call(null,inst_57243,opts);
var state_57284__$1 = state_57284;
if(cljs.core.truth_(inst_57247)){
var statearr_57306_57332 = state_57284__$1;
(statearr_57306_57332[(1)] = (11));

} else {
var statearr_57307_57333 = state_57284__$1;
(statearr_57307_57333[(1)] = (12));

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
});})(c__27022__auto___57315,ch))
;
return ((function (switch__26910__auto__,c__27022__auto___57315,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____0 = (function (){
var statearr_57311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57311[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__);

(statearr_57311[(1)] = (1));

return statearr_57311;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____1 = (function (state_57284){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_57284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e57312){if((e57312 instanceof Object)){
var ex__26914__auto__ = e57312;
var statearr_57313_57334 = state_57284;
(statearr_57313_57334[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57335 = state_57284;
state_57284 = G__57335;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__ = function(state_57284){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____1.call(this,state_57284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26911__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___57315,ch))
})();
var state__27024__auto__ = (function (){var statearr_57314 = f__27023__auto__.call(null);
(statearr_57314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___57315);

return statearr_57314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___57315,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__57336_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__57336_SHARP_));
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
var base_path_57339 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_57339){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e57338){if((e57338 instanceof Error)){
var e = e57338;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_57339], null));
} else {
var e = e57338;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_57339))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__57340){
var map__57349 = p__57340;
var map__57349__$1 = ((((!((map__57349 == null)))?((((map__57349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57349):map__57349);
var opts = map__57349__$1;
var build_id = cljs.core.get.call(null,map__57349__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__57349,map__57349__$1,opts,build_id){
return (function (p__57351){
var vec__57352 = p__57351;
var seq__57353 = cljs.core.seq.call(null,vec__57352);
var first__57354 = cljs.core.first.call(null,seq__57353);
var seq__57353__$1 = cljs.core.next.call(null,seq__57353);
var map__57355 = first__57354;
var map__57355__$1 = ((((!((map__57355 == null)))?((((map__57355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57355):map__57355);
var msg = map__57355__$1;
var msg_name = cljs.core.get.call(null,map__57355__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57353__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__57352,seq__57353,first__57354,seq__57353__$1,map__57355,map__57355__$1,msg,msg_name,_,map__57349,map__57349__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__57352,seq__57353,first__57354,seq__57353__$1,map__57355,map__57355__$1,msg,msg_name,_,map__57349,map__57349__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__57349,map__57349__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__57363){
var vec__57364 = p__57363;
var seq__57365 = cljs.core.seq.call(null,vec__57364);
var first__57366 = cljs.core.first.call(null,seq__57365);
var seq__57365__$1 = cljs.core.next.call(null,seq__57365);
var map__57367 = first__57366;
var map__57367__$1 = ((((!((map__57367 == null)))?((((map__57367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57367):map__57367);
var msg = map__57367__$1;
var msg_name = cljs.core.get.call(null,map__57367__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57365__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__57369){
var map__57381 = p__57369;
var map__57381__$1 = ((((!((map__57381 == null)))?((((map__57381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57381):map__57381);
var on_compile_warning = cljs.core.get.call(null,map__57381__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__57381__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__57381,map__57381__$1,on_compile_warning,on_compile_fail){
return (function (p__57383){
var vec__57384 = p__57383;
var seq__57385 = cljs.core.seq.call(null,vec__57384);
var first__57386 = cljs.core.first.call(null,seq__57385);
var seq__57385__$1 = cljs.core.next.call(null,seq__57385);
var map__57387 = first__57386;
var map__57387__$1 = ((((!((map__57387 == null)))?((((map__57387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57387):map__57387);
var msg = map__57387__$1;
var msg_name = cljs.core.get.call(null,map__57387__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57385__$1;
var pred__57389 = cljs.core._EQ_;
var expr__57390 = msg_name;
if(cljs.core.truth_(pred__57389.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__57390))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__57389.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__57390))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__57381,map__57381__$1,on_compile_warning,on_compile_fail))
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
return (function (state_57618){
var state_val_57619 = (state_57618[(1)]);
if((state_val_57619 === (7))){
var inst_57538 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57538)){
var statearr_57620_57670 = state_57618__$1;
(statearr_57620_57670[(1)] = (8));

} else {
var statearr_57621_57671 = state_57618__$1;
(statearr_57621_57671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (20))){
var inst_57612 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57622_57672 = state_57618__$1;
(statearr_57622_57672[(2)] = inst_57612);

(statearr_57622_57672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (27))){
var inst_57608 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57623_57673 = state_57618__$1;
(statearr_57623_57673[(2)] = inst_57608);

(statearr_57623_57673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (1))){
var inst_57531 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57531)){
var statearr_57624_57674 = state_57618__$1;
(statearr_57624_57674[(1)] = (2));

} else {
var statearr_57625_57675 = state_57618__$1;
(statearr_57625_57675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (24))){
var inst_57610 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57626_57676 = state_57618__$1;
(statearr_57626_57676[(2)] = inst_57610);

(statearr_57626_57676[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (4))){
var inst_57616 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57618__$1,inst_57616);
} else {
if((state_val_57619 === (15))){
var inst_57614 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57627_57677 = state_57618__$1;
(statearr_57627_57677[(2)] = inst_57614);

(statearr_57627_57677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (21))){
var inst_57567 = (state_57618[(2)]);
var inst_57568 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57569 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57568);
var state_57618__$1 = (function (){var statearr_57628 = state_57618;
(statearr_57628[(7)] = inst_57567);

return statearr_57628;
})();
var statearr_57629_57678 = state_57618__$1;
(statearr_57629_57678[(2)] = inst_57569);

(statearr_57629_57678[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (31))){
var inst_57597 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57597)){
var statearr_57630_57679 = state_57618__$1;
(statearr_57630_57679[(1)] = (34));

} else {
var statearr_57631_57680 = state_57618__$1;
(statearr_57631_57680[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (32))){
var inst_57606 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57632_57681 = state_57618__$1;
(statearr_57632_57681[(2)] = inst_57606);

(statearr_57632_57681[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (33))){
var inst_57593 = (state_57618[(2)]);
var inst_57594 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57595 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57594);
var state_57618__$1 = (function (){var statearr_57633 = state_57618;
(statearr_57633[(8)] = inst_57593);

return statearr_57633;
})();
var statearr_57634_57682 = state_57618__$1;
(statearr_57634_57682[(2)] = inst_57595);

(statearr_57634_57682[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (13))){
var inst_57552 = figwheel.client.heads_up.clear.call(null);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(16),inst_57552);
} else {
if((state_val_57619 === (22))){
var inst_57573 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57574 = figwheel.client.heads_up.append_warning_message.call(null,inst_57573);
var state_57618__$1 = state_57618;
var statearr_57635_57683 = state_57618__$1;
(statearr_57635_57683[(2)] = inst_57574);

(statearr_57635_57683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (36))){
var inst_57604 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57636_57684 = state_57618__$1;
(statearr_57636_57684[(2)] = inst_57604);

(statearr_57636_57684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (29))){
var inst_57584 = (state_57618[(2)]);
var inst_57585 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57586 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57585);
var state_57618__$1 = (function (){var statearr_57637 = state_57618;
(statearr_57637[(9)] = inst_57584);

return statearr_57637;
})();
var statearr_57638_57685 = state_57618__$1;
(statearr_57638_57685[(2)] = inst_57586);

(statearr_57638_57685[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (6))){
var inst_57533 = (state_57618[(10)]);
var state_57618__$1 = state_57618;
var statearr_57639_57686 = state_57618__$1;
(statearr_57639_57686[(2)] = inst_57533);

(statearr_57639_57686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (28))){
var inst_57580 = (state_57618[(2)]);
var inst_57581 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57582 = figwheel.client.heads_up.display_warning.call(null,inst_57581);
var state_57618__$1 = (function (){var statearr_57640 = state_57618;
(statearr_57640[(11)] = inst_57580);

return statearr_57640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(29),inst_57582);
} else {
if((state_val_57619 === (25))){
var inst_57578 = figwheel.client.heads_up.clear.call(null);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(28),inst_57578);
} else {
if((state_val_57619 === (34))){
var inst_57599 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(37),inst_57599);
} else {
if((state_val_57619 === (17))){
var inst_57558 = (state_57618[(2)]);
var inst_57559 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57560 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57559);
var state_57618__$1 = (function (){var statearr_57641 = state_57618;
(statearr_57641[(12)] = inst_57558);

return statearr_57641;
})();
var statearr_57642_57687 = state_57618__$1;
(statearr_57642_57687[(2)] = inst_57560);

(statearr_57642_57687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (3))){
var inst_57550 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57550)){
var statearr_57643_57688 = state_57618__$1;
(statearr_57643_57688[(1)] = (13));

} else {
var statearr_57644_57689 = state_57618__$1;
(statearr_57644_57689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (12))){
var inst_57546 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57645_57690 = state_57618__$1;
(statearr_57645_57690[(2)] = inst_57546);

(statearr_57645_57690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (2))){
var inst_57533 = (state_57618[(10)]);
var inst_57533__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_57618__$1 = (function (){var statearr_57646 = state_57618;
(statearr_57646[(10)] = inst_57533__$1);

return statearr_57646;
})();
if(cljs.core.truth_(inst_57533__$1)){
var statearr_57647_57691 = state_57618__$1;
(statearr_57647_57691[(1)] = (5));

} else {
var statearr_57648_57692 = state_57618__$1;
(statearr_57648_57692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (23))){
var inst_57576 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57576)){
var statearr_57649_57693 = state_57618__$1;
(statearr_57649_57693[(1)] = (25));

} else {
var statearr_57650_57694 = state_57618__$1;
(statearr_57650_57694[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (35))){
var state_57618__$1 = state_57618;
var statearr_57651_57695 = state_57618__$1;
(statearr_57651_57695[(2)] = null);

(statearr_57651_57695[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (19))){
var inst_57571 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57571)){
var statearr_57652_57696 = state_57618__$1;
(statearr_57652_57696[(1)] = (22));

} else {
var statearr_57653_57697 = state_57618__$1;
(statearr_57653_57697[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (11))){
var inst_57542 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57654_57698 = state_57618__$1;
(statearr_57654_57698[(2)] = inst_57542);

(statearr_57654_57698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (9))){
var inst_57544 = figwheel.client.heads_up.clear.call(null);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(12),inst_57544);
} else {
if((state_val_57619 === (5))){
var inst_57535 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_57618__$1 = state_57618;
var statearr_57655_57699 = state_57618__$1;
(statearr_57655_57699[(2)] = inst_57535);

(statearr_57655_57699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (14))){
var inst_57562 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57562)){
var statearr_57656_57700 = state_57618__$1;
(statearr_57656_57700[(1)] = (18));

} else {
var statearr_57657_57701 = state_57618__$1;
(statearr_57657_57701[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (26))){
var inst_57588 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_57618__$1 = state_57618;
if(cljs.core.truth_(inst_57588)){
var statearr_57658_57702 = state_57618__$1;
(statearr_57658_57702[(1)] = (30));

} else {
var statearr_57659_57703 = state_57618__$1;
(statearr_57659_57703[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (16))){
var inst_57554 = (state_57618[(2)]);
var inst_57555 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57556 = figwheel.client.heads_up.display_exception.call(null,inst_57555);
var state_57618__$1 = (function (){var statearr_57660 = state_57618;
(statearr_57660[(13)] = inst_57554);

return statearr_57660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(17),inst_57556);
} else {
if((state_val_57619 === (30))){
var inst_57590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57591 = figwheel.client.heads_up.display_warning.call(null,inst_57590);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(33),inst_57591);
} else {
if((state_val_57619 === (10))){
var inst_57548 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57661_57704 = state_57618__$1;
(statearr_57661_57704[(2)] = inst_57548);

(statearr_57661_57704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (18))){
var inst_57564 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57565 = figwheel.client.heads_up.display_exception.call(null,inst_57564);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(21),inst_57565);
} else {
if((state_val_57619 === (37))){
var inst_57601 = (state_57618[(2)]);
var state_57618__$1 = state_57618;
var statearr_57662_57705 = state_57618__$1;
(statearr_57662_57705[(2)] = inst_57601);

(statearr_57662_57705[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57619 === (8))){
var inst_57540 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57618__$1 = state_57618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57618__$1,(11),inst_57540);
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
var statearr_57666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57666[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__);

(statearr_57666[(1)] = (1));

return statearr_57666;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____1 = (function (state_57618){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_57618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e57667){if((e57667 instanceof Object)){
var ex__26914__auto__ = e57667;
var statearr_57668_57706 = state_57618;
(statearr_57668_57706[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57707 = state_57618;
state_57618 = G__57707;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__ = function(state_57618){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____1.call(this,state_57618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,msg_hist,msg_names,msg))
})();
var state__27024__auto__ = (function (){var statearr_57669 = f__27023__auto__.call(null);
(statearr_57669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_57669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__,msg_hist,msg_names,msg))
);

return c__27022__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27022__auto___57770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___57770,ch){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___57770,ch){
return (function (state_57753){
var state_val_57754 = (state_57753[(1)]);
if((state_val_57754 === (1))){
var state_57753__$1 = state_57753;
var statearr_57755_57771 = state_57753__$1;
(statearr_57755_57771[(2)] = null);

(statearr_57755_57771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57754 === (2))){
var state_57753__$1 = state_57753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57753__$1,(4),ch);
} else {
if((state_val_57754 === (3))){
var inst_57751 = (state_57753[(2)]);
var state_57753__$1 = state_57753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57753__$1,inst_57751);
} else {
if((state_val_57754 === (4))){
var inst_57741 = (state_57753[(7)]);
var inst_57741__$1 = (state_57753[(2)]);
var state_57753__$1 = (function (){var statearr_57756 = state_57753;
(statearr_57756[(7)] = inst_57741__$1);

return statearr_57756;
})();
if(cljs.core.truth_(inst_57741__$1)){
var statearr_57757_57772 = state_57753__$1;
(statearr_57757_57772[(1)] = (5));

} else {
var statearr_57758_57773 = state_57753__$1;
(statearr_57758_57773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57754 === (5))){
var inst_57741 = (state_57753[(7)]);
var inst_57743 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_57741);
var state_57753__$1 = state_57753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57753__$1,(8),inst_57743);
} else {
if((state_val_57754 === (6))){
var state_57753__$1 = state_57753;
var statearr_57759_57774 = state_57753__$1;
(statearr_57759_57774[(2)] = null);

(statearr_57759_57774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57754 === (7))){
var inst_57749 = (state_57753[(2)]);
var state_57753__$1 = state_57753;
var statearr_57760_57775 = state_57753__$1;
(statearr_57760_57775[(2)] = inst_57749);

(statearr_57760_57775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57754 === (8))){
var inst_57745 = (state_57753[(2)]);
var state_57753__$1 = (function (){var statearr_57761 = state_57753;
(statearr_57761[(8)] = inst_57745);

return statearr_57761;
})();
var statearr_57762_57776 = state_57753__$1;
(statearr_57762_57776[(2)] = null);

(statearr_57762_57776[(1)] = (2));


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
});})(c__27022__auto___57770,ch))
;
return ((function (switch__26910__auto__,c__27022__auto___57770,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26911__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26911__auto____0 = (function (){
var statearr_57766 = [null,null,null,null,null,null,null,null,null];
(statearr_57766[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26911__auto__);

(statearr_57766[(1)] = (1));

return statearr_57766;
});
var figwheel$client$heads_up_plugin_$_state_machine__26911__auto____1 = (function (state_57753){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_57753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e57767){if((e57767 instanceof Object)){
var ex__26914__auto__ = e57767;
var statearr_57768_57777 = state_57753;
(statearr_57768_57777[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57778 = state_57753;
state_57753 = G__57778;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26911__auto__ = function(state_57753){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26911__auto____1.call(this,state_57753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26911__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26911__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___57770,ch))
})();
var state__27024__auto__ = (function (){var statearr_57769 = f__27023__auto__.call(null);
(statearr_57769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___57770);

return statearr_57769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___57770,ch))
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
return (function (state_57799){
var state_val_57800 = (state_57799[(1)]);
if((state_val_57800 === (1))){
var inst_57794 = cljs.core.async.timeout.call(null,(3000));
var state_57799__$1 = state_57799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57799__$1,(2),inst_57794);
} else {
if((state_val_57800 === (2))){
var inst_57796 = (state_57799[(2)]);
var inst_57797 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_57799__$1 = (function (){var statearr_57801 = state_57799;
(statearr_57801[(7)] = inst_57796);

return statearr_57801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57799__$1,inst_57797);
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
var statearr_57805 = [null,null,null,null,null,null,null,null];
(statearr_57805[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__);

(statearr_57805[(1)] = (1));

return statearr_57805;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____1 = (function (state_57799){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_57799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e57806){if((e57806 instanceof Object)){
var ex__26914__auto__ = e57806;
var statearr_57807_57809 = state_57799;
(statearr_57807_57809[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57810 = state_57799;
state_57799 = G__57810;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__ = function(state_57799){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____1.call(this,state_57799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26911__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_57808 = f__27023__auto__.call(null);
(statearr_57808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_57808;
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
return (function (state_57833){
var state_val_57834 = (state_57833[(1)]);
if((state_val_57834 === (1))){
var inst_57827 = cljs.core.async.timeout.call(null,(2000));
var state_57833__$1 = state_57833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57833__$1,(2),inst_57827);
} else {
if((state_val_57834 === (2))){
var inst_57829 = (state_57833[(2)]);
var inst_57830 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_57831 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_57830);
var state_57833__$1 = (function (){var statearr_57835 = state_57833;
(statearr_57835[(7)] = inst_57829);

return statearr_57835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57833__$1,inst_57831);
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
var statearr_57839 = [null,null,null,null,null,null,null,null];
(statearr_57839[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__);

(statearr_57839[(1)] = (1));

return statearr_57839;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____1 = (function (state_57833){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_57833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e57840){if((e57840 instanceof Object)){
var ex__26914__auto__ = e57840;
var statearr_57841_57843 = state_57833;
(statearr_57841_57843[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57844 = state_57833;
state_57833 = G__57844;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__ = function(state_57833){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____1.call(this,state_57833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27024__auto__ = (function (){var statearr_57842 = f__27023__auto__.call(null);
(statearr_57842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_57842;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57845){
var map__57849 = p__57845;
var map__57849__$1 = ((((!((map__57849 == null)))?((((map__57849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57849):map__57849);
var file = cljs.core.get.call(null,map__57849__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__57849__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57849__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__57851 = "";
var G__57851__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__57851),cljs.core.str("file "),cljs.core.str(file)].join(''):G__57851);
var G__57851__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__57851__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__57851__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__57851__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__57851__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57852){
var map__57859 = p__57852;
var map__57859__$1 = ((((!((map__57859 == null)))?((((map__57859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57859):map__57859);
var ed = map__57859__$1;
var formatted_exception = cljs.core.get.call(null,map__57859__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__57859__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__57859__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__57861_57865 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__57862_57866 = null;
var count__57863_57867 = (0);
var i__57864_57868 = (0);
while(true){
if((i__57864_57868 < count__57863_57867)){
var msg_57869 = cljs.core._nth.call(null,chunk__57862_57866,i__57864_57868);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57869);

var G__57870 = seq__57861_57865;
var G__57871 = chunk__57862_57866;
var G__57872 = count__57863_57867;
var G__57873 = (i__57864_57868 + (1));
seq__57861_57865 = G__57870;
chunk__57862_57866 = G__57871;
count__57863_57867 = G__57872;
i__57864_57868 = G__57873;
continue;
} else {
var temp__4657__auto___57874 = cljs.core.seq.call(null,seq__57861_57865);
if(temp__4657__auto___57874){
var seq__57861_57875__$1 = temp__4657__auto___57874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57861_57875__$1)){
var c__25659__auto___57876 = cljs.core.chunk_first.call(null,seq__57861_57875__$1);
var G__57877 = cljs.core.chunk_rest.call(null,seq__57861_57875__$1);
var G__57878 = c__25659__auto___57876;
var G__57879 = cljs.core.count.call(null,c__25659__auto___57876);
var G__57880 = (0);
seq__57861_57865 = G__57877;
chunk__57862_57866 = G__57878;
count__57863_57867 = G__57879;
i__57864_57868 = G__57880;
continue;
} else {
var msg_57881 = cljs.core.first.call(null,seq__57861_57875__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57881);

var G__57882 = cljs.core.next.call(null,seq__57861_57875__$1);
var G__57883 = null;
var G__57884 = (0);
var G__57885 = (0);
seq__57861_57865 = G__57882;
chunk__57862_57866 = G__57883;
count__57863_57867 = G__57884;
i__57864_57868 = G__57885;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__57886){
var map__57889 = p__57886;
var map__57889__$1 = ((((!((map__57889 == null)))?((((map__57889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57889):map__57889);
var w = map__57889__$1;
var message = cljs.core.get.call(null,map__57889__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__57901 = cljs.core.seq.call(null,plugins);
var chunk__57902 = null;
var count__57903 = (0);
var i__57904 = (0);
while(true){
if((i__57904 < count__57903)){
var vec__57905 = cljs.core._nth.call(null,chunk__57902,i__57904);
var k = cljs.core.nth.call(null,vec__57905,(0),null);
var plugin = cljs.core.nth.call(null,vec__57905,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57911 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57901,chunk__57902,count__57903,i__57904,pl_57911,vec__57905,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57911.call(null,msg_hist);
});})(seq__57901,chunk__57902,count__57903,i__57904,pl_57911,vec__57905,k,plugin))
);
} else {
}

var G__57912 = seq__57901;
var G__57913 = chunk__57902;
var G__57914 = count__57903;
var G__57915 = (i__57904 + (1));
seq__57901 = G__57912;
chunk__57902 = G__57913;
count__57903 = G__57914;
i__57904 = G__57915;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57901);
if(temp__4657__auto__){
var seq__57901__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57901__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__57901__$1);
var G__57916 = cljs.core.chunk_rest.call(null,seq__57901__$1);
var G__57917 = c__25659__auto__;
var G__57918 = cljs.core.count.call(null,c__25659__auto__);
var G__57919 = (0);
seq__57901 = G__57916;
chunk__57902 = G__57917;
count__57903 = G__57918;
i__57904 = G__57919;
continue;
} else {
var vec__57908 = cljs.core.first.call(null,seq__57901__$1);
var k = cljs.core.nth.call(null,vec__57908,(0),null);
var plugin = cljs.core.nth.call(null,vec__57908,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57920 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57901,chunk__57902,count__57903,i__57904,pl_57920,vec__57908,k,plugin,seq__57901__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57920.call(null,msg_hist);
});})(seq__57901,chunk__57902,count__57903,i__57904,pl_57920,vec__57908,k,plugin,seq__57901__$1,temp__4657__auto__))
);
} else {
}

var G__57921 = cljs.core.next.call(null,seq__57901__$1);
var G__57922 = null;
var G__57923 = (0);
var G__57924 = (0);
seq__57901 = G__57921;
chunk__57902 = G__57922;
count__57903 = G__57923;
i__57904 = G__57924;
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
var args57925 = [];
var len__25923__auto___57932 = arguments.length;
var i__25924__auto___57933 = (0);
while(true){
if((i__25924__auto___57933 < len__25923__auto___57932)){
args57925.push((arguments[i__25924__auto___57933]));

var G__57934 = (i__25924__auto___57933 + (1));
i__25924__auto___57933 = G__57934;
continue;
} else {
}
break;
}

var G__57927 = args57925.length;
switch (G__57927) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57925.length)].join('')));

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

var seq__57928_57936 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57929_57937 = null;
var count__57930_57938 = (0);
var i__57931_57939 = (0);
while(true){
if((i__57931_57939 < count__57930_57938)){
var msg_57940 = cljs.core._nth.call(null,chunk__57929_57937,i__57931_57939);
figwheel.client.socket.handle_incoming_message.call(null,msg_57940);

var G__57941 = seq__57928_57936;
var G__57942 = chunk__57929_57937;
var G__57943 = count__57930_57938;
var G__57944 = (i__57931_57939 + (1));
seq__57928_57936 = G__57941;
chunk__57929_57937 = G__57942;
count__57930_57938 = G__57943;
i__57931_57939 = G__57944;
continue;
} else {
var temp__4657__auto___57945 = cljs.core.seq.call(null,seq__57928_57936);
if(temp__4657__auto___57945){
var seq__57928_57946__$1 = temp__4657__auto___57945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57928_57946__$1)){
var c__25659__auto___57947 = cljs.core.chunk_first.call(null,seq__57928_57946__$1);
var G__57948 = cljs.core.chunk_rest.call(null,seq__57928_57946__$1);
var G__57949 = c__25659__auto___57947;
var G__57950 = cljs.core.count.call(null,c__25659__auto___57947);
var G__57951 = (0);
seq__57928_57936 = G__57948;
chunk__57929_57937 = G__57949;
count__57930_57938 = G__57950;
i__57931_57939 = G__57951;
continue;
} else {
var msg_57952 = cljs.core.first.call(null,seq__57928_57946__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57952);

var G__57953 = cljs.core.next.call(null,seq__57928_57946__$1);
var G__57954 = null;
var G__57955 = (0);
var G__57956 = (0);
seq__57928_57936 = G__57953;
chunk__57929_57937 = G__57954;
count__57930_57938 = G__57955;
i__57931_57939 = G__57956;
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
var len__25923__auto___57961 = arguments.length;
var i__25924__auto___57962 = (0);
while(true){
if((i__25924__auto___57962 < len__25923__auto___57961)){
args__25930__auto__.push((arguments[i__25924__auto___57962]));

var G__57963 = (i__25924__auto___57962 + (1));
i__25924__auto___57962 = G__57963;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57958){
var map__57959 = p__57958;
var map__57959__$1 = ((((!((map__57959 == null)))?((((map__57959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57959):map__57959);
var opts = map__57959__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57957){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57957));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57965){if((e57965 instanceof Error)){
var e = e57965;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57965;

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
return (function (p__57969){
var map__57970 = p__57969;
var map__57970__$1 = ((((!((map__57970 == null)))?((((map__57970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57970):map__57970);
var msg_name = cljs.core.get.call(null,map__57970__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489464075627