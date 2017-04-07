// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26089__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26090__i = 0, G__26090__a = new Array(arguments.length -  0);
while (G__26090__i < G__26090__a.length) {G__26090__a[G__26090__i] = arguments[G__26090__i + 0]; ++G__26090__i;}
  args = new cljs.core.IndexedSeq(G__26090__a,0);
} 
return G__26089__delegate.call(this,args);};
G__26089.cljs$lang$maxFixedArity = 0;
G__26089.cljs$lang$applyTo = (function (arglist__26091){
var args = cljs.core.seq(arglist__26091);
return G__26089__delegate(args);
});
G__26089.cljs$core$IFn$_invoke$arity$variadic = G__26089__delegate;
return G__26089;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26092__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26093__i = 0, G__26093__a = new Array(arguments.length -  0);
while (G__26093__i < G__26093__a.length) {G__26093__a[G__26093__i] = arguments[G__26093__i + 0]; ++G__26093__i;}
  args = new cljs.core.IndexedSeq(G__26093__a,0);
} 
return G__26092__delegate.call(this,args);};
G__26092.cljs$lang$maxFixedArity = 0;
G__26092.cljs$lang$applyTo = (function (arglist__26094){
var args = cljs.core.seq(arglist__26094);
return G__26092__delegate(args);
});
G__26092.cljs$core$IFn$_invoke$arity$variadic = G__26092__delegate;
return G__26092;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1491541636189