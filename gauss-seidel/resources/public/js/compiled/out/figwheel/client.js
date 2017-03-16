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
var args35114 = [];
var len__25923__auto___35117 = arguments.length;
var i__25924__auto___35118 = (0);
while(true){
if((i__25924__auto___35118 < len__25923__auto___35117)){
args35114.push((arguments[i__25924__auto___35118]));

var G__35119 = (i__25924__auto___35118 + (1));
i__25924__auto___35118 = G__35119;
continue;
} else {
}
break;
}

var G__35116 = args35114.length;
switch (G__35116) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35114.length)].join('')));

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
var len__25923__auto___35122 = arguments.length;
var i__25924__auto___35123 = (0);
while(true){
if((i__25924__auto___35123 < len__25923__auto___35122)){
args__25930__auto__.push((arguments[i__25924__auto___35123]));

var G__35124 = (i__25924__auto___35123 + (1));
i__25924__auto___35123 = G__35124;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35121){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35121));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35126 = arguments.length;
var i__25924__auto___35127 = (0);
while(true){
if((i__25924__auto___35127 < len__25923__auto___35126)){
args__25930__auto__.push((arguments[i__25924__auto___35127]));

var G__35128 = (i__25924__auto___35127 + (1));
i__25924__auto___35127 = G__35128;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35125){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35125));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35129){
var map__35132 = p__35129;
var map__35132__$1 = ((((!((map__35132 == null)))?((((map__35132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35132):map__35132);
var message = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27776__auto___35294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___35294,ch){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___35294,ch){
return (function (state_35263){
var state_val_35264 = (state_35263[(1)]);
if((state_val_35264 === (7))){
var inst_35259 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
var statearr_35265_35295 = state_35263__$1;
(statearr_35265_35295[(2)] = inst_35259);

(statearr_35265_35295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (1))){
var state_35263__$1 = state_35263;
var statearr_35266_35296 = state_35263__$1;
(statearr_35266_35296[(2)] = null);

(statearr_35266_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (4))){
var inst_35216 = (state_35263[(7)]);
var inst_35216__$1 = (state_35263[(2)]);
var state_35263__$1 = (function (){var statearr_35267 = state_35263;
(statearr_35267[(7)] = inst_35216__$1);

return statearr_35267;
})();
if(cljs.core.truth_(inst_35216__$1)){
var statearr_35268_35297 = state_35263__$1;
(statearr_35268_35297[(1)] = (5));

} else {
var statearr_35269_35298 = state_35263__$1;
(statearr_35269_35298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (15))){
var inst_35223 = (state_35263[(8)]);
var inst_35238 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35223);
var inst_35239 = cljs.core.first.call(null,inst_35238);
var inst_35240 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35239);
var inst_35241 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35240)].join('');
var inst_35242 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35241);
var state_35263__$1 = state_35263;
var statearr_35270_35299 = state_35263__$1;
(statearr_35270_35299[(2)] = inst_35242);

(statearr_35270_35299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (13))){
var inst_35247 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
var statearr_35271_35300 = state_35263__$1;
(statearr_35271_35300[(2)] = inst_35247);

(statearr_35271_35300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (6))){
var state_35263__$1 = state_35263;
var statearr_35272_35301 = state_35263__$1;
(statearr_35272_35301[(2)] = null);

(statearr_35272_35301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (17))){
var inst_35245 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
var statearr_35273_35302 = state_35263__$1;
(statearr_35273_35302[(2)] = inst_35245);

(statearr_35273_35302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (3))){
var inst_35261 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35263__$1,inst_35261);
} else {
if((state_val_35264 === (12))){
var inst_35222 = (state_35263[(9)]);
var inst_35236 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35222,opts);
var state_35263__$1 = state_35263;
if(cljs.core.truth_(inst_35236)){
var statearr_35274_35303 = state_35263__$1;
(statearr_35274_35303[(1)] = (15));

} else {
var statearr_35275_35304 = state_35263__$1;
(statearr_35275_35304[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (2))){
var state_35263__$1 = state_35263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35263__$1,(4),ch);
} else {
if((state_val_35264 === (11))){
var inst_35223 = (state_35263[(8)]);
var inst_35228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35229 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35223);
var inst_35230 = cljs.core.async.timeout.call(null,(1000));
var inst_35231 = [inst_35229,inst_35230];
var inst_35232 = (new cljs.core.PersistentVector(null,2,(5),inst_35228,inst_35231,null));
var state_35263__$1 = state_35263;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35263__$1,(14),inst_35232);
} else {
if((state_val_35264 === (9))){
var inst_35223 = (state_35263[(8)]);
var inst_35249 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35250 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35223);
var inst_35251 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35250);
var inst_35252 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35251)].join('');
var inst_35253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35252);
var state_35263__$1 = (function (){var statearr_35276 = state_35263;
(statearr_35276[(10)] = inst_35249);

return statearr_35276;
})();
var statearr_35277_35305 = state_35263__$1;
(statearr_35277_35305[(2)] = inst_35253);

(statearr_35277_35305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (5))){
var inst_35216 = (state_35263[(7)]);
var inst_35218 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35219 = (new cljs.core.PersistentArrayMap(null,2,inst_35218,null));
var inst_35220 = (new cljs.core.PersistentHashSet(null,inst_35219,null));
var inst_35221 = figwheel.client.focus_msgs.call(null,inst_35220,inst_35216);
var inst_35222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35221);
var inst_35223 = cljs.core.first.call(null,inst_35221);
var inst_35224 = figwheel.client.autoload_QMARK_.call(null);
var state_35263__$1 = (function (){var statearr_35278 = state_35263;
(statearr_35278[(8)] = inst_35223);

(statearr_35278[(9)] = inst_35222);

return statearr_35278;
})();
if(cljs.core.truth_(inst_35224)){
var statearr_35279_35306 = state_35263__$1;
(statearr_35279_35306[(1)] = (8));

} else {
var statearr_35280_35307 = state_35263__$1;
(statearr_35280_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (14))){
var inst_35234 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
var statearr_35281_35308 = state_35263__$1;
(statearr_35281_35308[(2)] = inst_35234);

(statearr_35281_35308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (16))){
var state_35263__$1 = state_35263;
var statearr_35282_35309 = state_35263__$1;
(statearr_35282_35309[(2)] = null);

(statearr_35282_35309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (10))){
var inst_35255 = (state_35263[(2)]);
var state_35263__$1 = (function (){var statearr_35283 = state_35263;
(statearr_35283[(11)] = inst_35255);

return statearr_35283;
})();
var statearr_35284_35310 = state_35263__$1;
(statearr_35284_35310[(2)] = null);

(statearr_35284_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35264 === (8))){
var inst_35222 = (state_35263[(9)]);
var inst_35226 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35222,opts);
var state_35263__$1 = state_35263;
if(cljs.core.truth_(inst_35226)){
var statearr_35285_35311 = state_35263__$1;
(statearr_35285_35311[(1)] = (11));

} else {
var statearr_35286_35312 = state_35263__$1;
(statearr_35286_35312[(1)] = (12));

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
});})(c__27776__auto___35294,ch))
;
return ((function (switch__27664__auto__,c__27776__auto___35294,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27665__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27665__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35290[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27665__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27665__auto____1 = (function (state_35263){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_35263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__27668__auto__ = e35291;
var statearr_35292_35313 = state_35263;
(statearr_35292_35313[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35314 = state_35263;
state_35263 = G__35314;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27665__auto__ = function(state_35263){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27665__auto____1.call(this,state_35263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27665__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27665__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___35294,ch))
})();
var state__27778__auto__ = (function (){var statearr_35293 = f__27777__auto__.call(null);
(statearr_35293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___35294);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___35294,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35315_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35315_SHARP_));
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
var base_path_35318 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35318){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35317){if((e35317 instanceof Error)){
var e = e35317;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35318], null));
} else {
var e = e35317;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35318))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35319){
var map__35328 = p__35319;
var map__35328__$1 = ((((!((map__35328 == null)))?((((map__35328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35328):map__35328);
var opts = map__35328__$1;
var build_id = cljs.core.get.call(null,map__35328__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35328,map__35328__$1,opts,build_id){
return (function (p__35330){
var vec__35331 = p__35330;
var seq__35332 = cljs.core.seq.call(null,vec__35331);
var first__35333 = cljs.core.first.call(null,seq__35332);
var seq__35332__$1 = cljs.core.next.call(null,seq__35332);
var map__35334 = first__35333;
var map__35334__$1 = ((((!((map__35334 == null)))?((((map__35334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35334):map__35334);
var msg = map__35334__$1;
var msg_name = cljs.core.get.call(null,map__35334__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35332__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35331,seq__35332,first__35333,seq__35332__$1,map__35334,map__35334__$1,msg,msg_name,_,map__35328,map__35328__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35331,seq__35332,first__35333,seq__35332__$1,map__35334,map__35334__$1,msg,msg_name,_,map__35328,map__35328__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35328,map__35328__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35342){
var vec__35343 = p__35342;
var seq__35344 = cljs.core.seq.call(null,vec__35343);
var first__35345 = cljs.core.first.call(null,seq__35344);
var seq__35344__$1 = cljs.core.next.call(null,seq__35344);
var map__35346 = first__35345;
var map__35346__$1 = ((((!((map__35346 == null)))?((((map__35346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346):map__35346);
var msg = map__35346__$1;
var msg_name = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35344__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35348){
var map__35360 = p__35348;
var map__35360__$1 = ((((!((map__35360 == null)))?((((map__35360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35360):map__35360);
var on_compile_warning = cljs.core.get.call(null,map__35360__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35360__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35360,map__35360__$1,on_compile_warning,on_compile_fail){
return (function (p__35362){
var vec__35363 = p__35362;
var seq__35364 = cljs.core.seq.call(null,vec__35363);
var first__35365 = cljs.core.first.call(null,seq__35364);
var seq__35364__$1 = cljs.core.next.call(null,seq__35364);
var map__35366 = first__35365;
var map__35366__$1 = ((((!((map__35366 == null)))?((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var msg = map__35366__$1;
var msg_name = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35364__$1;
var pred__35368 = cljs.core._EQ_;
var expr__35369 = msg_name;
if(cljs.core.truth_(pred__35368.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35369))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35368.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35369))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35360,map__35360__$1,on_compile_warning,on_compile_fail))
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
var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__,msg_hist,msg_names,msg){
return (function (state_35597){
var state_val_35598 = (state_35597[(1)]);
if((state_val_35598 === (7))){
var inst_35517 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35517)){
var statearr_35599_35649 = state_35597__$1;
(statearr_35599_35649[(1)] = (8));

} else {
var statearr_35600_35650 = state_35597__$1;
(statearr_35600_35650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (20))){
var inst_35591 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35601_35651 = state_35597__$1;
(statearr_35601_35651[(2)] = inst_35591);

(statearr_35601_35651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (27))){
var inst_35587 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35602_35652 = state_35597__$1;
(statearr_35602_35652[(2)] = inst_35587);

(statearr_35602_35652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (1))){
var inst_35510 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35510)){
var statearr_35603_35653 = state_35597__$1;
(statearr_35603_35653[(1)] = (2));

} else {
var statearr_35604_35654 = state_35597__$1;
(statearr_35604_35654[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (24))){
var inst_35589 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35605_35655 = state_35597__$1;
(statearr_35605_35655[(2)] = inst_35589);

(statearr_35605_35655[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (4))){
var inst_35595 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35597__$1,inst_35595);
} else {
if((state_val_35598 === (15))){
var inst_35593 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35606_35656 = state_35597__$1;
(statearr_35606_35656[(2)] = inst_35593);

(statearr_35606_35656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (21))){
var inst_35546 = (state_35597[(2)]);
var inst_35547 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35548 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35547);
var state_35597__$1 = (function (){var statearr_35607 = state_35597;
(statearr_35607[(7)] = inst_35546);

return statearr_35607;
})();
var statearr_35608_35657 = state_35597__$1;
(statearr_35608_35657[(2)] = inst_35548);

(statearr_35608_35657[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (31))){
var inst_35576 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35576)){
var statearr_35609_35658 = state_35597__$1;
(statearr_35609_35658[(1)] = (34));

} else {
var statearr_35610_35659 = state_35597__$1;
(statearr_35610_35659[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (32))){
var inst_35585 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35611_35660 = state_35597__$1;
(statearr_35611_35660[(2)] = inst_35585);

(statearr_35611_35660[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (33))){
var inst_35572 = (state_35597[(2)]);
var inst_35573 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35574 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35573);
var state_35597__$1 = (function (){var statearr_35612 = state_35597;
(statearr_35612[(8)] = inst_35572);

return statearr_35612;
})();
var statearr_35613_35661 = state_35597__$1;
(statearr_35613_35661[(2)] = inst_35574);

(statearr_35613_35661[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (13))){
var inst_35531 = figwheel.client.heads_up.clear.call(null);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(16),inst_35531);
} else {
if((state_val_35598 === (22))){
var inst_35552 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35553 = figwheel.client.heads_up.append_warning_message.call(null,inst_35552);
var state_35597__$1 = state_35597;
var statearr_35614_35662 = state_35597__$1;
(statearr_35614_35662[(2)] = inst_35553);

(statearr_35614_35662[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (36))){
var inst_35583 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35615_35663 = state_35597__$1;
(statearr_35615_35663[(2)] = inst_35583);

(statearr_35615_35663[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (29))){
var inst_35563 = (state_35597[(2)]);
var inst_35564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35565 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35564);
var state_35597__$1 = (function (){var statearr_35616 = state_35597;
(statearr_35616[(9)] = inst_35563);

return statearr_35616;
})();
var statearr_35617_35664 = state_35597__$1;
(statearr_35617_35664[(2)] = inst_35565);

(statearr_35617_35664[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (6))){
var inst_35512 = (state_35597[(10)]);
var state_35597__$1 = state_35597;
var statearr_35618_35665 = state_35597__$1;
(statearr_35618_35665[(2)] = inst_35512);

(statearr_35618_35665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (28))){
var inst_35559 = (state_35597[(2)]);
var inst_35560 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35561 = figwheel.client.heads_up.display_warning.call(null,inst_35560);
var state_35597__$1 = (function (){var statearr_35619 = state_35597;
(statearr_35619[(11)] = inst_35559);

return statearr_35619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(29),inst_35561);
} else {
if((state_val_35598 === (25))){
var inst_35557 = figwheel.client.heads_up.clear.call(null);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(28),inst_35557);
} else {
if((state_val_35598 === (34))){
var inst_35578 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(37),inst_35578);
} else {
if((state_val_35598 === (17))){
var inst_35537 = (state_35597[(2)]);
var inst_35538 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35538);
var state_35597__$1 = (function (){var statearr_35620 = state_35597;
(statearr_35620[(12)] = inst_35537);

return statearr_35620;
})();
var statearr_35621_35666 = state_35597__$1;
(statearr_35621_35666[(2)] = inst_35539);

(statearr_35621_35666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (3))){
var inst_35529 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35529)){
var statearr_35622_35667 = state_35597__$1;
(statearr_35622_35667[(1)] = (13));

} else {
var statearr_35623_35668 = state_35597__$1;
(statearr_35623_35668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (12))){
var inst_35525 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35624_35669 = state_35597__$1;
(statearr_35624_35669[(2)] = inst_35525);

(statearr_35624_35669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (2))){
var inst_35512 = (state_35597[(10)]);
var inst_35512__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35597__$1 = (function (){var statearr_35625 = state_35597;
(statearr_35625[(10)] = inst_35512__$1);

return statearr_35625;
})();
if(cljs.core.truth_(inst_35512__$1)){
var statearr_35626_35670 = state_35597__$1;
(statearr_35626_35670[(1)] = (5));

} else {
var statearr_35627_35671 = state_35597__$1;
(statearr_35627_35671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (23))){
var inst_35555 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35555)){
var statearr_35628_35672 = state_35597__$1;
(statearr_35628_35672[(1)] = (25));

} else {
var statearr_35629_35673 = state_35597__$1;
(statearr_35629_35673[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (35))){
var state_35597__$1 = state_35597;
var statearr_35630_35674 = state_35597__$1;
(statearr_35630_35674[(2)] = null);

(statearr_35630_35674[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (19))){
var inst_35550 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35550)){
var statearr_35631_35675 = state_35597__$1;
(statearr_35631_35675[(1)] = (22));

} else {
var statearr_35632_35676 = state_35597__$1;
(statearr_35632_35676[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (11))){
var inst_35521 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35633_35677 = state_35597__$1;
(statearr_35633_35677[(2)] = inst_35521);

(statearr_35633_35677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (9))){
var inst_35523 = figwheel.client.heads_up.clear.call(null);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(12),inst_35523);
} else {
if((state_val_35598 === (5))){
var inst_35514 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35597__$1 = state_35597;
var statearr_35634_35678 = state_35597__$1;
(statearr_35634_35678[(2)] = inst_35514);

(statearr_35634_35678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (14))){
var inst_35541 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35541)){
var statearr_35635_35679 = state_35597__$1;
(statearr_35635_35679[(1)] = (18));

} else {
var statearr_35636_35680 = state_35597__$1;
(statearr_35636_35680[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (26))){
var inst_35567 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35597__$1 = state_35597;
if(cljs.core.truth_(inst_35567)){
var statearr_35637_35681 = state_35597__$1;
(statearr_35637_35681[(1)] = (30));

} else {
var statearr_35638_35682 = state_35597__$1;
(statearr_35638_35682[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (16))){
var inst_35533 = (state_35597[(2)]);
var inst_35534 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35535 = figwheel.client.heads_up.display_exception.call(null,inst_35534);
var state_35597__$1 = (function (){var statearr_35639 = state_35597;
(statearr_35639[(13)] = inst_35533);

return statearr_35639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(17),inst_35535);
} else {
if((state_val_35598 === (30))){
var inst_35569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35570 = figwheel.client.heads_up.display_warning.call(null,inst_35569);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(33),inst_35570);
} else {
if((state_val_35598 === (10))){
var inst_35527 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35640_35683 = state_35597__$1;
(statearr_35640_35683[(2)] = inst_35527);

(statearr_35640_35683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (18))){
var inst_35543 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35544 = figwheel.client.heads_up.display_exception.call(null,inst_35543);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(21),inst_35544);
} else {
if((state_val_35598 === (37))){
var inst_35580 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35641_35684 = state_35597__$1;
(statearr_35641_35684[(2)] = inst_35580);

(statearr_35641_35684[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (8))){
var inst_35519 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(11),inst_35519);
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
});})(c__27776__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27664__auto__,c__27776__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto____0 = (function (){
var statearr_35645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35645[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto__);

(statearr_35645[(1)] = (1));

return statearr_35645;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto____1 = (function (state_35597){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_35597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e35646){if((e35646 instanceof Object)){
var ex__27668__auto__ = e35646;
var statearr_35647_35685 = state_35597;
(statearr_35647_35685[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35686 = state_35597;
state_35597 = G__35686;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto__ = function(state_35597){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto____1.call(this,state_35597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__,msg_hist,msg_names,msg))
})();
var state__27778__auto__ = (function (){var statearr_35648 = f__27777__auto__.call(null);
(statearr_35648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_35648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__,msg_hist,msg_names,msg))
);

return c__27776__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27776__auto___35749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___35749,ch){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___35749,ch){
return (function (state_35732){
var state_val_35733 = (state_35732[(1)]);
if((state_val_35733 === (1))){
var state_35732__$1 = state_35732;
var statearr_35734_35750 = state_35732__$1;
(statearr_35734_35750[(2)] = null);

(statearr_35734_35750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35733 === (2))){
var state_35732__$1 = state_35732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35732__$1,(4),ch);
} else {
if((state_val_35733 === (3))){
var inst_35730 = (state_35732[(2)]);
var state_35732__$1 = state_35732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35732__$1,inst_35730);
} else {
if((state_val_35733 === (4))){
var inst_35720 = (state_35732[(7)]);
var inst_35720__$1 = (state_35732[(2)]);
var state_35732__$1 = (function (){var statearr_35735 = state_35732;
(statearr_35735[(7)] = inst_35720__$1);

return statearr_35735;
})();
if(cljs.core.truth_(inst_35720__$1)){
var statearr_35736_35751 = state_35732__$1;
(statearr_35736_35751[(1)] = (5));

} else {
var statearr_35737_35752 = state_35732__$1;
(statearr_35737_35752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35733 === (5))){
var inst_35720 = (state_35732[(7)]);
var inst_35722 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35720);
var state_35732__$1 = state_35732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35732__$1,(8),inst_35722);
} else {
if((state_val_35733 === (6))){
var state_35732__$1 = state_35732;
var statearr_35738_35753 = state_35732__$1;
(statearr_35738_35753[(2)] = null);

(statearr_35738_35753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35733 === (7))){
var inst_35728 = (state_35732[(2)]);
var state_35732__$1 = state_35732;
var statearr_35739_35754 = state_35732__$1;
(statearr_35739_35754[(2)] = inst_35728);

(statearr_35739_35754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35733 === (8))){
var inst_35724 = (state_35732[(2)]);
var state_35732__$1 = (function (){var statearr_35740 = state_35732;
(statearr_35740[(8)] = inst_35724);

return statearr_35740;
})();
var statearr_35741_35755 = state_35732__$1;
(statearr_35741_35755[(2)] = null);

(statearr_35741_35755[(1)] = (2));


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
});})(c__27776__auto___35749,ch))
;
return ((function (switch__27664__auto__,c__27776__auto___35749,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27665__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27665__auto____0 = (function (){
var statearr_35745 = [null,null,null,null,null,null,null,null,null];
(statearr_35745[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27665__auto__);

(statearr_35745[(1)] = (1));

return statearr_35745;
});
var figwheel$client$heads_up_plugin_$_state_machine__27665__auto____1 = (function (state_35732){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_35732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e35746){if((e35746 instanceof Object)){
var ex__27668__auto__ = e35746;
var statearr_35747_35756 = state_35732;
(statearr_35747_35756[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35757 = state_35732;
state_35732 = G__35757;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27665__auto__ = function(state_35732){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27665__auto____1.call(this,state_35732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27665__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27665__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___35749,ch))
})();
var state__27778__auto__ = (function (){var statearr_35748 = f__27777__auto__.call(null);
(statearr_35748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___35749);

return statearr_35748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___35749,ch))
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
var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__){
return (function (state_35778){
var state_val_35779 = (state_35778[(1)]);
if((state_val_35779 === (1))){
var inst_35773 = cljs.core.async.timeout.call(null,(3000));
var state_35778__$1 = state_35778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35778__$1,(2),inst_35773);
} else {
if((state_val_35779 === (2))){
var inst_35775 = (state_35778[(2)]);
var inst_35776 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35778__$1 = (function (){var statearr_35780 = state_35778;
(statearr_35780[(7)] = inst_35775);

return statearr_35780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35778__$1,inst_35776);
} else {
return null;
}
}
});})(c__27776__auto__))
;
return ((function (switch__27664__auto__,c__27776__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27665__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27665__auto____0 = (function (){
var statearr_35784 = [null,null,null,null,null,null,null,null];
(statearr_35784[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27665__auto__);

(statearr_35784[(1)] = (1));

return statearr_35784;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27665__auto____1 = (function (state_35778){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_35778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e35785){if((e35785 instanceof Object)){
var ex__27668__auto__ = e35785;
var statearr_35786_35788 = state_35778;
(statearr_35786_35788[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35789 = state_35778;
state_35778 = G__35789;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27665__auto__ = function(state_35778){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27665__auto____1.call(this,state_35778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27665__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27665__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__))
})();
var state__27778__auto__ = (function (){var statearr_35787 = f__27777__auto__.call(null);
(statearr_35787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_35787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__))
);

return c__27776__auto__;
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
var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35812){
var state_val_35813 = (state_35812[(1)]);
if((state_val_35813 === (1))){
var inst_35806 = cljs.core.async.timeout.call(null,(2000));
var state_35812__$1 = state_35812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35812__$1,(2),inst_35806);
} else {
if((state_val_35813 === (2))){
var inst_35808 = (state_35812[(2)]);
var inst_35809 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35810 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35809);
var state_35812__$1 = (function (){var statearr_35814 = state_35812;
(statearr_35814[(7)] = inst_35808);

return statearr_35814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35812__$1,inst_35810);
} else {
return null;
}
}
});})(c__27776__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27664__auto__,c__27776__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto____0 = (function (){
var statearr_35818 = [null,null,null,null,null,null,null,null];
(statearr_35818[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto__);

(statearr_35818[(1)] = (1));

return statearr_35818;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto____1 = (function (state_35812){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_35812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e35819){if((e35819 instanceof Object)){
var ex__27668__auto__ = e35819;
var statearr_35820_35822 = state_35812;
(statearr_35820_35822[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35823 = state_35812;
state_35812 = G__35823;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto__ = function(state_35812){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto____1.call(this,state_35812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27778__auto__ = (function (){var statearr_35821 = f__27777__auto__.call(null);
(statearr_35821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_35821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__,figwheel_version,temp__4657__auto__))
);

return c__27776__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35824){
var map__35828 = p__35824;
var map__35828__$1 = ((((!((map__35828 == null)))?((((map__35828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35828):map__35828);
var file = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35830 = "";
var G__35830__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35830),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35830);
var G__35830__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35830__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35830__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__35830__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35830__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35831){
var map__35838 = p__35831;
var map__35838__$1 = ((((!((map__35838 == null)))?((((map__35838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35838):map__35838);
var ed = map__35838__$1;
var formatted_exception = cljs.core.get.call(null,map__35838__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35838__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35838__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35840_35844 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35841_35845 = null;
var count__35842_35846 = (0);
var i__35843_35847 = (0);
while(true){
if((i__35843_35847 < count__35842_35846)){
var msg_35848 = cljs.core._nth.call(null,chunk__35841_35845,i__35843_35847);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35848);

var G__35849 = seq__35840_35844;
var G__35850 = chunk__35841_35845;
var G__35851 = count__35842_35846;
var G__35852 = (i__35843_35847 + (1));
seq__35840_35844 = G__35849;
chunk__35841_35845 = G__35850;
count__35842_35846 = G__35851;
i__35843_35847 = G__35852;
continue;
} else {
var temp__4657__auto___35853 = cljs.core.seq.call(null,seq__35840_35844);
if(temp__4657__auto___35853){
var seq__35840_35854__$1 = temp__4657__auto___35853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35840_35854__$1)){
var c__25659__auto___35855 = cljs.core.chunk_first.call(null,seq__35840_35854__$1);
var G__35856 = cljs.core.chunk_rest.call(null,seq__35840_35854__$1);
var G__35857 = c__25659__auto___35855;
var G__35858 = cljs.core.count.call(null,c__25659__auto___35855);
var G__35859 = (0);
seq__35840_35844 = G__35856;
chunk__35841_35845 = G__35857;
count__35842_35846 = G__35858;
i__35843_35847 = G__35859;
continue;
} else {
var msg_35860 = cljs.core.first.call(null,seq__35840_35854__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35860);

var G__35861 = cljs.core.next.call(null,seq__35840_35854__$1);
var G__35862 = null;
var G__35863 = (0);
var G__35864 = (0);
seq__35840_35844 = G__35861;
chunk__35841_35845 = G__35862;
count__35842_35846 = G__35863;
i__35843_35847 = G__35864;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35865){
var map__35868 = p__35865;
var map__35868__$1 = ((((!((map__35868 == null)))?((((map__35868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35868):map__35868);
var w = map__35868__$1;
var message = cljs.core.get.call(null,map__35868__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35880 = cljs.core.seq.call(null,plugins);
var chunk__35881 = null;
var count__35882 = (0);
var i__35883 = (0);
while(true){
if((i__35883 < count__35882)){
var vec__35884 = cljs.core._nth.call(null,chunk__35881,i__35883);
var k = cljs.core.nth.call(null,vec__35884,(0),null);
var plugin = cljs.core.nth.call(null,vec__35884,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35890 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35880,chunk__35881,count__35882,i__35883,pl_35890,vec__35884,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35890.call(null,msg_hist);
});})(seq__35880,chunk__35881,count__35882,i__35883,pl_35890,vec__35884,k,plugin))
);
} else {
}

var G__35891 = seq__35880;
var G__35892 = chunk__35881;
var G__35893 = count__35882;
var G__35894 = (i__35883 + (1));
seq__35880 = G__35891;
chunk__35881 = G__35892;
count__35882 = G__35893;
i__35883 = G__35894;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35880);
if(temp__4657__auto__){
var seq__35880__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35880__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__35880__$1);
var G__35895 = cljs.core.chunk_rest.call(null,seq__35880__$1);
var G__35896 = c__25659__auto__;
var G__35897 = cljs.core.count.call(null,c__25659__auto__);
var G__35898 = (0);
seq__35880 = G__35895;
chunk__35881 = G__35896;
count__35882 = G__35897;
i__35883 = G__35898;
continue;
} else {
var vec__35887 = cljs.core.first.call(null,seq__35880__$1);
var k = cljs.core.nth.call(null,vec__35887,(0),null);
var plugin = cljs.core.nth.call(null,vec__35887,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35899 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35880,chunk__35881,count__35882,i__35883,pl_35899,vec__35887,k,plugin,seq__35880__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35899.call(null,msg_hist);
});})(seq__35880,chunk__35881,count__35882,i__35883,pl_35899,vec__35887,k,plugin,seq__35880__$1,temp__4657__auto__))
);
} else {
}

var G__35900 = cljs.core.next.call(null,seq__35880__$1);
var G__35901 = null;
var G__35902 = (0);
var G__35903 = (0);
seq__35880 = G__35900;
chunk__35881 = G__35901;
count__35882 = G__35902;
i__35883 = G__35903;
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
var args35904 = [];
var len__25923__auto___35911 = arguments.length;
var i__25924__auto___35912 = (0);
while(true){
if((i__25924__auto___35912 < len__25923__auto___35911)){
args35904.push((arguments[i__25924__auto___35912]));

var G__35913 = (i__25924__auto___35912 + (1));
i__25924__auto___35912 = G__35913;
continue;
} else {
}
break;
}

var G__35906 = args35904.length;
switch (G__35906) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35904.length)].join('')));

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

var seq__35907_35915 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35908_35916 = null;
var count__35909_35917 = (0);
var i__35910_35918 = (0);
while(true){
if((i__35910_35918 < count__35909_35917)){
var msg_35919 = cljs.core._nth.call(null,chunk__35908_35916,i__35910_35918);
figwheel.client.socket.handle_incoming_message.call(null,msg_35919);

var G__35920 = seq__35907_35915;
var G__35921 = chunk__35908_35916;
var G__35922 = count__35909_35917;
var G__35923 = (i__35910_35918 + (1));
seq__35907_35915 = G__35920;
chunk__35908_35916 = G__35921;
count__35909_35917 = G__35922;
i__35910_35918 = G__35923;
continue;
} else {
var temp__4657__auto___35924 = cljs.core.seq.call(null,seq__35907_35915);
if(temp__4657__auto___35924){
var seq__35907_35925__$1 = temp__4657__auto___35924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35907_35925__$1)){
var c__25659__auto___35926 = cljs.core.chunk_first.call(null,seq__35907_35925__$1);
var G__35927 = cljs.core.chunk_rest.call(null,seq__35907_35925__$1);
var G__35928 = c__25659__auto___35926;
var G__35929 = cljs.core.count.call(null,c__25659__auto___35926);
var G__35930 = (0);
seq__35907_35915 = G__35927;
chunk__35908_35916 = G__35928;
count__35909_35917 = G__35929;
i__35910_35918 = G__35930;
continue;
} else {
var msg_35931 = cljs.core.first.call(null,seq__35907_35925__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35931);

var G__35932 = cljs.core.next.call(null,seq__35907_35925__$1);
var G__35933 = null;
var G__35934 = (0);
var G__35935 = (0);
seq__35907_35915 = G__35932;
chunk__35908_35916 = G__35933;
count__35909_35917 = G__35934;
i__35910_35918 = G__35935;
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
var len__25923__auto___35940 = arguments.length;
var i__25924__auto___35941 = (0);
while(true){
if((i__25924__auto___35941 < len__25923__auto___35940)){
args__25930__auto__.push((arguments[i__25924__auto___35941]));

var G__35942 = (i__25924__auto___35941 + (1));
i__25924__auto___35941 = G__35942;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35937){
var map__35938 = p__35937;
var map__35938__$1 = ((((!((map__35938 == null)))?((((map__35938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35938):map__35938);
var opts = map__35938__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35936){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35936));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35944){if((e35944 instanceof Error)){
var e = e35944;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35944;

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
return (function (p__35948){
var map__35949 = p__35948;
var map__35949__$1 = ((((!((map__35949 == null)))?((((map__35949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35949):map__35949);
var msg_name = cljs.core.get.call(null,map__35949__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489628693539