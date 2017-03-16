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
var G__26087__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26088__i = 0, G__26088__a = new Array(arguments.length -  0);
while (G__26088__i < G__26088__a.length) {G__26088__a[G__26088__i] = arguments[G__26088__i + 0]; ++G__26088__i;}
  args = new cljs.core.IndexedSeq(G__26088__a,0);
} 
return G__26087__delegate.call(this,args);};
G__26087.cljs$lang$maxFixedArity = 0;
G__26087.cljs$lang$applyTo = (function (arglist__26089){
var args = cljs.core.seq(arglist__26089);
return G__26087__delegate(args);
});
G__26087.cljs$core$IFn$_invoke$arity$variadic = G__26087__delegate;
return G__26087;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26090__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26091__i = 0, G__26091__a = new Array(arguments.length -  0);
while (G__26091__i < G__26091__a.length) {G__26091__a[G__26091__i] = arguments[G__26091__i + 0]; ++G__26091__i;}
  args = new cljs.core.IndexedSeq(G__26091__a,0);
} 
return G__26090__delegate.call(this,args);};
G__26090.cljs$lang$maxFixedArity = 0;
G__26090.cljs$lang$applyTo = (function (arglist__26092){
var args = cljs.core.seq(arglist__26092);
return G__26090__delegate(args);
});
G__26090.cljs$core$IFn$_invoke$arity$variadic = G__26090__delegate;
return G__26090;
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

//# sourceMappingURL=debug.js.map?rel=1489628672734