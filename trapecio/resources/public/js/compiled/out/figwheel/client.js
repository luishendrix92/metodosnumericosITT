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
var args35050 = [];
var len__25923__auto___35053 = arguments.length;
var i__25924__auto___35054 = (0);
while(true){
if((i__25924__auto___35054 < len__25923__auto___35053)){
args35050.push((arguments[i__25924__auto___35054]));

var G__35055 = (i__25924__auto___35054 + (1));
i__25924__auto___35054 = G__35055;
continue;
} else {
}
break;
}

var G__35052 = args35050.length;
switch (G__35052) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35050.length)].join('')));

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
var len__25923__auto___35058 = arguments.length;
var i__25924__auto___35059 = (0);
while(true){
if((i__25924__auto___35059 < len__25923__auto___35058)){
args__25930__auto__.push((arguments[i__25924__auto___35059]));

var G__35060 = (i__25924__auto___35059 + (1));
i__25924__auto___35059 = G__35060;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35057){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35057));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35062 = arguments.length;
var i__25924__auto___35063 = (0);
while(true){
if((i__25924__auto___35063 < len__25923__auto___35062)){
args__25930__auto__.push((arguments[i__25924__auto___35063]));

var G__35064 = (i__25924__auto___35063 + (1));
i__25924__auto___35063 = G__35064;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35061){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35061));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35065){
var map__35068 = p__35065;
var map__35068__$1 = ((((!((map__35068 == null)))?((((map__35068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35068):map__35068);
var message = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27712__auto___35230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___35230,ch){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___35230,ch){
return (function (state_35199){
var state_val_35200 = (state_35199[(1)]);
if((state_val_35200 === (7))){
var inst_35195 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35201_35231 = state_35199__$1;
(statearr_35201_35231[(2)] = inst_35195);

(statearr_35201_35231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (1))){
var state_35199__$1 = state_35199;
var statearr_35202_35232 = state_35199__$1;
(statearr_35202_35232[(2)] = null);

(statearr_35202_35232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (4))){
var inst_35152 = (state_35199[(7)]);
var inst_35152__$1 = (state_35199[(2)]);
var state_35199__$1 = (function (){var statearr_35203 = state_35199;
(statearr_35203[(7)] = inst_35152__$1);

return statearr_35203;
})();
if(cljs.core.truth_(inst_35152__$1)){
var statearr_35204_35233 = state_35199__$1;
(statearr_35204_35233[(1)] = (5));

} else {
var statearr_35205_35234 = state_35199__$1;
(statearr_35205_35234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (15))){
var inst_35159 = (state_35199[(8)]);
var inst_35174 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35159);
var inst_35175 = cljs.core.first.call(null,inst_35174);
var inst_35176 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35175);
var inst_35177 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35176)].join('');
var inst_35178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35177);
var state_35199__$1 = state_35199;
var statearr_35206_35235 = state_35199__$1;
(statearr_35206_35235[(2)] = inst_35178);

(statearr_35206_35235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (13))){
var inst_35183 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35207_35236 = state_35199__$1;
(statearr_35207_35236[(2)] = inst_35183);

(statearr_35207_35236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (6))){
var state_35199__$1 = state_35199;
var statearr_35208_35237 = state_35199__$1;
(statearr_35208_35237[(2)] = null);

(statearr_35208_35237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (17))){
var inst_35181 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35209_35238 = state_35199__$1;
(statearr_35209_35238[(2)] = inst_35181);

(statearr_35209_35238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (3))){
var inst_35197 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35199__$1,inst_35197);
} else {
if((state_val_35200 === (12))){
var inst_35158 = (state_35199[(9)]);
var inst_35172 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35158,opts);
var state_35199__$1 = state_35199;
if(cljs.core.truth_(inst_35172)){
var statearr_35210_35239 = state_35199__$1;
(statearr_35210_35239[(1)] = (15));

} else {
var statearr_35211_35240 = state_35199__$1;
(statearr_35211_35240[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (2))){
var state_35199__$1 = state_35199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35199__$1,(4),ch);
} else {
if((state_val_35200 === (11))){
var inst_35159 = (state_35199[(8)]);
var inst_35164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35165 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35159);
var inst_35166 = cljs.core.async.timeout.call(null,(1000));
var inst_35167 = [inst_35165,inst_35166];
var inst_35168 = (new cljs.core.PersistentVector(null,2,(5),inst_35164,inst_35167,null));
var state_35199__$1 = state_35199;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35199__$1,(14),inst_35168);
} else {
if((state_val_35200 === (9))){
var inst_35159 = (state_35199[(8)]);
var inst_35185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35186 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35159);
var inst_35187 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35186);
var inst_35188 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35187)].join('');
var inst_35189 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35188);
var state_35199__$1 = (function (){var statearr_35212 = state_35199;
(statearr_35212[(10)] = inst_35185);

return statearr_35212;
})();
var statearr_35213_35241 = state_35199__$1;
(statearr_35213_35241[(2)] = inst_35189);

(statearr_35213_35241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (5))){
var inst_35152 = (state_35199[(7)]);
var inst_35154 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35155 = (new cljs.core.PersistentArrayMap(null,2,inst_35154,null));
var inst_35156 = (new cljs.core.PersistentHashSet(null,inst_35155,null));
var inst_35157 = figwheel.client.focus_msgs.call(null,inst_35156,inst_35152);
var inst_35158 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35157);
var inst_35159 = cljs.core.first.call(null,inst_35157);
var inst_35160 = figwheel.client.autoload_QMARK_.call(null);
var state_35199__$1 = (function (){var statearr_35214 = state_35199;
(statearr_35214[(8)] = inst_35159);

(statearr_35214[(9)] = inst_35158);

return statearr_35214;
})();
if(cljs.core.truth_(inst_35160)){
var statearr_35215_35242 = state_35199__$1;
(statearr_35215_35242[(1)] = (8));

} else {
var statearr_35216_35243 = state_35199__$1;
(statearr_35216_35243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (14))){
var inst_35170 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35217_35244 = state_35199__$1;
(statearr_35217_35244[(2)] = inst_35170);

(statearr_35217_35244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (16))){
var state_35199__$1 = state_35199;
var statearr_35218_35245 = state_35199__$1;
(statearr_35218_35245[(2)] = null);

(statearr_35218_35245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (10))){
var inst_35191 = (state_35199[(2)]);
var state_35199__$1 = (function (){var statearr_35219 = state_35199;
(statearr_35219[(11)] = inst_35191);

return statearr_35219;
})();
var statearr_35220_35246 = state_35199__$1;
(statearr_35220_35246[(2)] = null);

(statearr_35220_35246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (8))){
var inst_35158 = (state_35199[(9)]);
var inst_35162 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35158,opts);
var state_35199__$1 = state_35199;
if(cljs.core.truth_(inst_35162)){
var statearr_35221_35247 = state_35199__$1;
(statearr_35221_35247[(1)] = (11));

} else {
var statearr_35222_35248 = state_35199__$1;
(statearr_35222_35248[(1)] = (12));

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
});})(c__27712__auto___35230,ch))
;
return ((function (switch__27600__auto__,c__27712__auto___35230,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27601__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27601__auto____0 = (function (){
var statearr_35226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35226[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27601__auto__);

(statearr_35226[(1)] = (1));

return statearr_35226;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27601__auto____1 = (function (state_35199){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_35199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e35227){if((e35227 instanceof Object)){
var ex__27604__auto__ = e35227;
var statearr_35228_35249 = state_35199;
(statearr_35228_35249[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35250 = state_35199;
state_35199 = G__35250;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27601__auto__ = function(state_35199){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27601__auto____1.call(this,state_35199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27601__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27601__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___35230,ch))
})();
var state__27714__auto__ = (function (){var statearr_35229 = f__27713__auto__.call(null);
(statearr_35229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___35230);

return statearr_35229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___35230,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35251_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35251_SHARP_));
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
var base_path_35254 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35254){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35253){if((e35253 instanceof Error)){
var e = e35253;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35254], null));
} else {
var e = e35253;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35254))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35255){
var map__35264 = p__35255;
var map__35264__$1 = ((((!((map__35264 == null)))?((((map__35264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35264):map__35264);
var opts = map__35264__$1;
var build_id = cljs.core.get.call(null,map__35264__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35264,map__35264__$1,opts,build_id){
return (function (p__35266){
var vec__35267 = p__35266;
var seq__35268 = cljs.core.seq.call(null,vec__35267);
var first__35269 = cljs.core.first.call(null,seq__35268);
var seq__35268__$1 = cljs.core.next.call(null,seq__35268);
var map__35270 = first__35269;
var map__35270__$1 = ((((!((map__35270 == null)))?((((map__35270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35270):map__35270);
var msg = map__35270__$1;
var msg_name = cljs.core.get.call(null,map__35270__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35268__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35267,seq__35268,first__35269,seq__35268__$1,map__35270,map__35270__$1,msg,msg_name,_,map__35264,map__35264__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35267,seq__35268,first__35269,seq__35268__$1,map__35270,map__35270__$1,msg,msg_name,_,map__35264,map__35264__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35264,map__35264__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35278){
var vec__35279 = p__35278;
var seq__35280 = cljs.core.seq.call(null,vec__35279);
var first__35281 = cljs.core.first.call(null,seq__35280);
var seq__35280__$1 = cljs.core.next.call(null,seq__35280);
var map__35282 = first__35281;
var map__35282__$1 = ((((!((map__35282 == null)))?((((map__35282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35282):map__35282);
var msg = map__35282__$1;
var msg_name = cljs.core.get.call(null,map__35282__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35280__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35284){
var map__35296 = p__35284;
var map__35296__$1 = ((((!((map__35296 == null)))?((((map__35296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35296):map__35296);
var on_compile_warning = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35296,map__35296__$1,on_compile_warning,on_compile_fail){
return (function (p__35298){
var vec__35299 = p__35298;
var seq__35300 = cljs.core.seq.call(null,vec__35299);
var first__35301 = cljs.core.first.call(null,seq__35300);
var seq__35300__$1 = cljs.core.next.call(null,seq__35300);
var map__35302 = first__35301;
var map__35302__$1 = ((((!((map__35302 == null)))?((((map__35302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35302):map__35302);
var msg = map__35302__$1;
var msg_name = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35300__$1;
var pred__35304 = cljs.core._EQ_;
var expr__35305 = msg_name;
if(cljs.core.truth_(pred__35304.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35305))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35304.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35305))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35296,map__35296__$1,on_compile_warning,on_compile_fail))
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
var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__,msg_hist,msg_names,msg){
return (function (state_35533){
var state_val_35534 = (state_35533[(1)]);
if((state_val_35534 === (7))){
var inst_35453 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35453)){
var statearr_35535_35585 = state_35533__$1;
(statearr_35535_35585[(1)] = (8));

} else {
var statearr_35536_35586 = state_35533__$1;
(statearr_35536_35586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (20))){
var inst_35527 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35537_35587 = state_35533__$1;
(statearr_35537_35587[(2)] = inst_35527);

(statearr_35537_35587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (27))){
var inst_35523 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35538_35588 = state_35533__$1;
(statearr_35538_35588[(2)] = inst_35523);

(statearr_35538_35588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (1))){
var inst_35446 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35446)){
var statearr_35539_35589 = state_35533__$1;
(statearr_35539_35589[(1)] = (2));

} else {
var statearr_35540_35590 = state_35533__$1;
(statearr_35540_35590[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (24))){
var inst_35525 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35541_35591 = state_35533__$1;
(statearr_35541_35591[(2)] = inst_35525);

(statearr_35541_35591[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (4))){
var inst_35531 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35533__$1,inst_35531);
} else {
if((state_val_35534 === (15))){
var inst_35529 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35542_35592 = state_35533__$1;
(statearr_35542_35592[(2)] = inst_35529);

(statearr_35542_35592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (21))){
var inst_35482 = (state_35533[(2)]);
var inst_35483 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35484 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35483);
var state_35533__$1 = (function (){var statearr_35543 = state_35533;
(statearr_35543[(7)] = inst_35482);

return statearr_35543;
})();
var statearr_35544_35593 = state_35533__$1;
(statearr_35544_35593[(2)] = inst_35484);

(statearr_35544_35593[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (31))){
var inst_35512 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35512)){
var statearr_35545_35594 = state_35533__$1;
(statearr_35545_35594[(1)] = (34));

} else {
var statearr_35546_35595 = state_35533__$1;
(statearr_35546_35595[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (32))){
var inst_35521 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35547_35596 = state_35533__$1;
(statearr_35547_35596[(2)] = inst_35521);

(statearr_35547_35596[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (33))){
var inst_35508 = (state_35533[(2)]);
var inst_35509 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35510 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35509);
var state_35533__$1 = (function (){var statearr_35548 = state_35533;
(statearr_35548[(8)] = inst_35508);

return statearr_35548;
})();
var statearr_35549_35597 = state_35533__$1;
(statearr_35549_35597[(2)] = inst_35510);

(statearr_35549_35597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (13))){
var inst_35467 = figwheel.client.heads_up.clear.call(null);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(16),inst_35467);
} else {
if((state_val_35534 === (22))){
var inst_35488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35489 = figwheel.client.heads_up.append_warning_message.call(null,inst_35488);
var state_35533__$1 = state_35533;
var statearr_35550_35598 = state_35533__$1;
(statearr_35550_35598[(2)] = inst_35489);

(statearr_35550_35598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (36))){
var inst_35519 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35551_35599 = state_35533__$1;
(statearr_35551_35599[(2)] = inst_35519);

(statearr_35551_35599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (29))){
var inst_35499 = (state_35533[(2)]);
var inst_35500 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35501 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35500);
var state_35533__$1 = (function (){var statearr_35552 = state_35533;
(statearr_35552[(9)] = inst_35499);

return statearr_35552;
})();
var statearr_35553_35600 = state_35533__$1;
(statearr_35553_35600[(2)] = inst_35501);

(statearr_35553_35600[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (6))){
var inst_35448 = (state_35533[(10)]);
var state_35533__$1 = state_35533;
var statearr_35554_35601 = state_35533__$1;
(statearr_35554_35601[(2)] = inst_35448);

(statearr_35554_35601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (28))){
var inst_35495 = (state_35533[(2)]);
var inst_35496 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35497 = figwheel.client.heads_up.display_warning.call(null,inst_35496);
var state_35533__$1 = (function (){var statearr_35555 = state_35533;
(statearr_35555[(11)] = inst_35495);

return statearr_35555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(29),inst_35497);
} else {
if((state_val_35534 === (25))){
var inst_35493 = figwheel.client.heads_up.clear.call(null);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(28),inst_35493);
} else {
if((state_val_35534 === (34))){
var inst_35514 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(37),inst_35514);
} else {
if((state_val_35534 === (17))){
var inst_35473 = (state_35533[(2)]);
var inst_35474 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35475 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35474);
var state_35533__$1 = (function (){var statearr_35556 = state_35533;
(statearr_35556[(12)] = inst_35473);

return statearr_35556;
})();
var statearr_35557_35602 = state_35533__$1;
(statearr_35557_35602[(2)] = inst_35475);

(statearr_35557_35602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (3))){
var inst_35465 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35465)){
var statearr_35558_35603 = state_35533__$1;
(statearr_35558_35603[(1)] = (13));

} else {
var statearr_35559_35604 = state_35533__$1;
(statearr_35559_35604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (12))){
var inst_35461 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35560_35605 = state_35533__$1;
(statearr_35560_35605[(2)] = inst_35461);

(statearr_35560_35605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (2))){
var inst_35448 = (state_35533[(10)]);
var inst_35448__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35533__$1 = (function (){var statearr_35561 = state_35533;
(statearr_35561[(10)] = inst_35448__$1);

return statearr_35561;
})();
if(cljs.core.truth_(inst_35448__$1)){
var statearr_35562_35606 = state_35533__$1;
(statearr_35562_35606[(1)] = (5));

} else {
var statearr_35563_35607 = state_35533__$1;
(statearr_35563_35607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (23))){
var inst_35491 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35491)){
var statearr_35564_35608 = state_35533__$1;
(statearr_35564_35608[(1)] = (25));

} else {
var statearr_35565_35609 = state_35533__$1;
(statearr_35565_35609[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (35))){
var state_35533__$1 = state_35533;
var statearr_35566_35610 = state_35533__$1;
(statearr_35566_35610[(2)] = null);

(statearr_35566_35610[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (19))){
var inst_35486 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35486)){
var statearr_35567_35611 = state_35533__$1;
(statearr_35567_35611[(1)] = (22));

} else {
var statearr_35568_35612 = state_35533__$1;
(statearr_35568_35612[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (11))){
var inst_35457 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35569_35613 = state_35533__$1;
(statearr_35569_35613[(2)] = inst_35457);

(statearr_35569_35613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (9))){
var inst_35459 = figwheel.client.heads_up.clear.call(null);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(12),inst_35459);
} else {
if((state_val_35534 === (5))){
var inst_35450 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35533__$1 = state_35533;
var statearr_35570_35614 = state_35533__$1;
(statearr_35570_35614[(2)] = inst_35450);

(statearr_35570_35614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (14))){
var inst_35477 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35477)){
var statearr_35571_35615 = state_35533__$1;
(statearr_35571_35615[(1)] = (18));

} else {
var statearr_35572_35616 = state_35533__$1;
(statearr_35572_35616[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (26))){
var inst_35503 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35503)){
var statearr_35573_35617 = state_35533__$1;
(statearr_35573_35617[(1)] = (30));

} else {
var statearr_35574_35618 = state_35533__$1;
(statearr_35574_35618[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (16))){
var inst_35469 = (state_35533[(2)]);
var inst_35470 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35471 = figwheel.client.heads_up.display_exception.call(null,inst_35470);
var state_35533__$1 = (function (){var statearr_35575 = state_35533;
(statearr_35575[(13)] = inst_35469);

return statearr_35575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(17),inst_35471);
} else {
if((state_val_35534 === (30))){
var inst_35505 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35506 = figwheel.client.heads_up.display_warning.call(null,inst_35505);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(33),inst_35506);
} else {
if((state_val_35534 === (10))){
var inst_35463 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35576_35619 = state_35533__$1;
(statearr_35576_35619[(2)] = inst_35463);

(statearr_35576_35619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (18))){
var inst_35479 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35480 = figwheel.client.heads_up.display_exception.call(null,inst_35479);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(21),inst_35480);
} else {
if((state_val_35534 === (37))){
var inst_35516 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35577_35620 = state_35533__$1;
(statearr_35577_35620[(2)] = inst_35516);

(statearr_35577_35620[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (8))){
var inst_35455 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(11),inst_35455);
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
});})(c__27712__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27600__auto__,c__27712__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto____0 = (function (){
var statearr_35581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35581[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto__);

(statearr_35581[(1)] = (1));

return statearr_35581;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto____1 = (function (state_35533){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_35533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e35582){if((e35582 instanceof Object)){
var ex__27604__auto__ = e35582;
var statearr_35583_35621 = state_35533;
(statearr_35583_35621[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35622 = state_35533;
state_35533 = G__35622;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto__ = function(state_35533){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto____1.call(this,state_35533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__,msg_hist,msg_names,msg))
})();
var state__27714__auto__ = (function (){var statearr_35584 = f__27713__auto__.call(null);
(statearr_35584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_35584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__,msg_hist,msg_names,msg))
);

return c__27712__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27712__auto___35685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___35685,ch){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___35685,ch){
return (function (state_35668){
var state_val_35669 = (state_35668[(1)]);
if((state_val_35669 === (1))){
var state_35668__$1 = state_35668;
var statearr_35670_35686 = state_35668__$1;
(statearr_35670_35686[(2)] = null);

(statearr_35670_35686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (2))){
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35668__$1,(4),ch);
} else {
if((state_val_35669 === (3))){
var inst_35666 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35668__$1,inst_35666);
} else {
if((state_val_35669 === (4))){
var inst_35656 = (state_35668[(7)]);
var inst_35656__$1 = (state_35668[(2)]);
var state_35668__$1 = (function (){var statearr_35671 = state_35668;
(statearr_35671[(7)] = inst_35656__$1);

return statearr_35671;
})();
if(cljs.core.truth_(inst_35656__$1)){
var statearr_35672_35687 = state_35668__$1;
(statearr_35672_35687[(1)] = (5));

} else {
var statearr_35673_35688 = state_35668__$1;
(statearr_35673_35688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (5))){
var inst_35656 = (state_35668[(7)]);
var inst_35658 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35656);
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35668__$1,(8),inst_35658);
} else {
if((state_val_35669 === (6))){
var state_35668__$1 = state_35668;
var statearr_35674_35689 = state_35668__$1;
(statearr_35674_35689[(2)] = null);

(statearr_35674_35689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (7))){
var inst_35664 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
var statearr_35675_35690 = state_35668__$1;
(statearr_35675_35690[(2)] = inst_35664);

(statearr_35675_35690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35669 === (8))){
var inst_35660 = (state_35668[(2)]);
var state_35668__$1 = (function (){var statearr_35676 = state_35668;
(statearr_35676[(8)] = inst_35660);

return statearr_35676;
})();
var statearr_35677_35691 = state_35668__$1;
(statearr_35677_35691[(2)] = null);

(statearr_35677_35691[(1)] = (2));


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
});})(c__27712__auto___35685,ch))
;
return ((function (switch__27600__auto__,c__27712__auto___35685,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27601__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27601__auto____0 = (function (){
var statearr_35681 = [null,null,null,null,null,null,null,null,null];
(statearr_35681[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27601__auto__);

(statearr_35681[(1)] = (1));

return statearr_35681;
});
var figwheel$client$heads_up_plugin_$_state_machine__27601__auto____1 = (function (state_35668){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_35668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e35682){if((e35682 instanceof Object)){
var ex__27604__auto__ = e35682;
var statearr_35683_35692 = state_35668;
(statearr_35683_35692[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35693 = state_35668;
state_35668 = G__35693;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27601__auto__ = function(state_35668){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27601__auto____1.call(this,state_35668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27601__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27601__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___35685,ch))
})();
var state__27714__auto__ = (function (){var statearr_35684 = f__27713__auto__.call(null);
(statearr_35684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___35685);

return statearr_35684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___35685,ch))
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
var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__){
return (function (state_35714){
var state_val_35715 = (state_35714[(1)]);
if((state_val_35715 === (1))){
var inst_35709 = cljs.core.async.timeout.call(null,(3000));
var state_35714__$1 = state_35714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35714__$1,(2),inst_35709);
} else {
if((state_val_35715 === (2))){
var inst_35711 = (state_35714[(2)]);
var inst_35712 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35714__$1 = (function (){var statearr_35716 = state_35714;
(statearr_35716[(7)] = inst_35711);

return statearr_35716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35714__$1,inst_35712);
} else {
return null;
}
}
});})(c__27712__auto__))
;
return ((function (switch__27600__auto__,c__27712__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27601__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27601__auto____0 = (function (){
var statearr_35720 = [null,null,null,null,null,null,null,null];
(statearr_35720[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27601__auto__);

(statearr_35720[(1)] = (1));

return statearr_35720;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27601__auto____1 = (function (state_35714){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_35714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e35721){if((e35721 instanceof Object)){
var ex__27604__auto__ = e35721;
var statearr_35722_35724 = state_35714;
(statearr_35722_35724[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35725 = state_35714;
state_35714 = G__35725;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27601__auto__ = function(state_35714){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27601__auto____1.call(this,state_35714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27601__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27601__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__))
})();
var state__27714__auto__ = (function (){var statearr_35723 = f__27713__auto__.call(null);
(statearr_35723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_35723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__))
);

return c__27712__auto__;
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
var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35748){
var state_val_35749 = (state_35748[(1)]);
if((state_val_35749 === (1))){
var inst_35742 = cljs.core.async.timeout.call(null,(2000));
var state_35748__$1 = state_35748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35748__$1,(2),inst_35742);
} else {
if((state_val_35749 === (2))){
var inst_35744 = (state_35748[(2)]);
var inst_35745 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35746 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35745);
var state_35748__$1 = (function (){var statearr_35750 = state_35748;
(statearr_35750[(7)] = inst_35744);

return statearr_35750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35748__$1,inst_35746);
} else {
return null;
}
}
});})(c__27712__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27600__auto__,c__27712__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto____0 = (function (){
var statearr_35754 = [null,null,null,null,null,null,null,null];
(statearr_35754[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto__);

(statearr_35754[(1)] = (1));

return statearr_35754;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto____1 = (function (state_35748){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_35748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e35755){if((e35755 instanceof Object)){
var ex__27604__auto__ = e35755;
var statearr_35756_35758 = state_35748;
(statearr_35756_35758[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35759 = state_35748;
state_35748 = G__35759;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto__ = function(state_35748){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto____1.call(this,state_35748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27714__auto__ = (function (){var statearr_35757 = f__27713__auto__.call(null);
(statearr_35757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_35757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__,figwheel_version,temp__4657__auto__))
);

return c__27712__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35760){
var map__35764 = p__35760;
var map__35764__$1 = ((((!((map__35764 == null)))?((((map__35764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35764):map__35764);
var file = cljs.core.get.call(null,map__35764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35764__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35764__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35766 = "";
var G__35766__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35766),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35766);
var G__35766__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35766__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35766__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__35766__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35766__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35767){
var map__35774 = p__35767;
var map__35774__$1 = ((((!((map__35774 == null)))?((((map__35774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35774):map__35774);
var ed = map__35774__$1;
var formatted_exception = cljs.core.get.call(null,map__35774__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35774__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35774__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35776_35780 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35777_35781 = null;
var count__35778_35782 = (0);
var i__35779_35783 = (0);
while(true){
if((i__35779_35783 < count__35778_35782)){
var msg_35784 = cljs.core._nth.call(null,chunk__35777_35781,i__35779_35783);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35784);

var G__35785 = seq__35776_35780;
var G__35786 = chunk__35777_35781;
var G__35787 = count__35778_35782;
var G__35788 = (i__35779_35783 + (1));
seq__35776_35780 = G__35785;
chunk__35777_35781 = G__35786;
count__35778_35782 = G__35787;
i__35779_35783 = G__35788;
continue;
} else {
var temp__4657__auto___35789 = cljs.core.seq.call(null,seq__35776_35780);
if(temp__4657__auto___35789){
var seq__35776_35790__$1 = temp__4657__auto___35789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35776_35790__$1)){
var c__25659__auto___35791 = cljs.core.chunk_first.call(null,seq__35776_35790__$1);
var G__35792 = cljs.core.chunk_rest.call(null,seq__35776_35790__$1);
var G__35793 = c__25659__auto___35791;
var G__35794 = cljs.core.count.call(null,c__25659__auto___35791);
var G__35795 = (0);
seq__35776_35780 = G__35792;
chunk__35777_35781 = G__35793;
count__35778_35782 = G__35794;
i__35779_35783 = G__35795;
continue;
} else {
var msg_35796 = cljs.core.first.call(null,seq__35776_35790__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35796);

var G__35797 = cljs.core.next.call(null,seq__35776_35790__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35776_35780 = G__35797;
chunk__35777_35781 = G__35798;
count__35778_35782 = G__35799;
i__35779_35783 = G__35800;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35801){
var map__35804 = p__35801;
var map__35804__$1 = ((((!((map__35804 == null)))?((((map__35804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35804):map__35804);
var w = map__35804__$1;
var message = cljs.core.get.call(null,map__35804__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35816 = cljs.core.seq.call(null,plugins);
var chunk__35817 = null;
var count__35818 = (0);
var i__35819 = (0);
while(true){
if((i__35819 < count__35818)){
var vec__35820 = cljs.core._nth.call(null,chunk__35817,i__35819);
var k = cljs.core.nth.call(null,vec__35820,(0),null);
var plugin = cljs.core.nth.call(null,vec__35820,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35826 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35816,chunk__35817,count__35818,i__35819,pl_35826,vec__35820,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35826.call(null,msg_hist);
});})(seq__35816,chunk__35817,count__35818,i__35819,pl_35826,vec__35820,k,plugin))
);
} else {
}

var G__35827 = seq__35816;
var G__35828 = chunk__35817;
var G__35829 = count__35818;
var G__35830 = (i__35819 + (1));
seq__35816 = G__35827;
chunk__35817 = G__35828;
count__35818 = G__35829;
i__35819 = G__35830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35816);
if(temp__4657__auto__){
var seq__35816__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35816__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__35816__$1);
var G__35831 = cljs.core.chunk_rest.call(null,seq__35816__$1);
var G__35832 = c__25659__auto__;
var G__35833 = cljs.core.count.call(null,c__25659__auto__);
var G__35834 = (0);
seq__35816 = G__35831;
chunk__35817 = G__35832;
count__35818 = G__35833;
i__35819 = G__35834;
continue;
} else {
var vec__35823 = cljs.core.first.call(null,seq__35816__$1);
var k = cljs.core.nth.call(null,vec__35823,(0),null);
var plugin = cljs.core.nth.call(null,vec__35823,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35835 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35816,chunk__35817,count__35818,i__35819,pl_35835,vec__35823,k,plugin,seq__35816__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35835.call(null,msg_hist);
});})(seq__35816,chunk__35817,count__35818,i__35819,pl_35835,vec__35823,k,plugin,seq__35816__$1,temp__4657__auto__))
);
} else {
}

var G__35836 = cljs.core.next.call(null,seq__35816__$1);
var G__35837 = null;
var G__35838 = (0);
var G__35839 = (0);
seq__35816 = G__35836;
chunk__35817 = G__35837;
count__35818 = G__35838;
i__35819 = G__35839;
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
var args35840 = [];
var len__25923__auto___35847 = arguments.length;
var i__25924__auto___35848 = (0);
while(true){
if((i__25924__auto___35848 < len__25923__auto___35847)){
args35840.push((arguments[i__25924__auto___35848]));

var G__35849 = (i__25924__auto___35848 + (1));
i__25924__auto___35848 = G__35849;
continue;
} else {
}
break;
}

var G__35842 = args35840.length;
switch (G__35842) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35840.length)].join('')));

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

var seq__35843_35851 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35844_35852 = null;
var count__35845_35853 = (0);
var i__35846_35854 = (0);
while(true){
if((i__35846_35854 < count__35845_35853)){
var msg_35855 = cljs.core._nth.call(null,chunk__35844_35852,i__35846_35854);
figwheel.client.socket.handle_incoming_message.call(null,msg_35855);

var G__35856 = seq__35843_35851;
var G__35857 = chunk__35844_35852;
var G__35858 = count__35845_35853;
var G__35859 = (i__35846_35854 + (1));
seq__35843_35851 = G__35856;
chunk__35844_35852 = G__35857;
count__35845_35853 = G__35858;
i__35846_35854 = G__35859;
continue;
} else {
var temp__4657__auto___35860 = cljs.core.seq.call(null,seq__35843_35851);
if(temp__4657__auto___35860){
var seq__35843_35861__$1 = temp__4657__auto___35860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35843_35861__$1)){
var c__25659__auto___35862 = cljs.core.chunk_first.call(null,seq__35843_35861__$1);
var G__35863 = cljs.core.chunk_rest.call(null,seq__35843_35861__$1);
var G__35864 = c__25659__auto___35862;
var G__35865 = cljs.core.count.call(null,c__25659__auto___35862);
var G__35866 = (0);
seq__35843_35851 = G__35863;
chunk__35844_35852 = G__35864;
count__35845_35853 = G__35865;
i__35846_35854 = G__35866;
continue;
} else {
var msg_35867 = cljs.core.first.call(null,seq__35843_35861__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35867);

var G__35868 = cljs.core.next.call(null,seq__35843_35861__$1);
var G__35869 = null;
var G__35870 = (0);
var G__35871 = (0);
seq__35843_35851 = G__35868;
chunk__35844_35852 = G__35869;
count__35845_35853 = G__35870;
i__35846_35854 = G__35871;
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
var len__25923__auto___35876 = arguments.length;
var i__25924__auto___35877 = (0);
while(true){
if((i__25924__auto___35877 < len__25923__auto___35876)){
args__25930__auto__.push((arguments[i__25924__auto___35877]));

var G__35878 = (i__25924__auto___35877 + (1));
i__25924__auto___35877 = G__35878;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35873){
var map__35874 = p__35873;
var map__35874__$1 = ((((!((map__35874 == null)))?((((map__35874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35874):map__35874);
var opts = map__35874__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35872){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35872));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35880){if((e35880 instanceof Error)){
var e = e35880;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35880;

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
return (function (p__35884){
var map__35885 = p__35884;
var map__35885__$1 = ((((!((map__35885 == null)))?((((map__35885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35885):map__35885);
var msg_name = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491541650456