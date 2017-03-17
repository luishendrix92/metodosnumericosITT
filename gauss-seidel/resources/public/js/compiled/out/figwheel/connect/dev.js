// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('gauss_seidel.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27641__delegate = function (x){
if(cljs.core.truth_(gauss_seidel.core.on_js_reload)){
return cljs.core.apply.call(null,gauss_seidel.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'gauss-seidel.core/on-js-reload' is missing");
}
};
var G__27641 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27642__i = 0, G__27642__a = new Array(arguments.length -  0);
while (G__27642__i < G__27642__a.length) {G__27642__a[G__27642__i] = arguments[G__27642__i + 0]; ++G__27642__i;}
  x = new cljs.core.IndexedSeq(G__27642__a,0);
} 
return G__27641__delegate.call(this,x);};
G__27641.cljs$lang$maxFixedArity = 0;
G__27641.cljs$lang$applyTo = (function (arglist__27643){
var x = cljs.core.seq(arglist__27643);
return G__27641__delegate(x);
});
G__27641.cljs$core$IFn$_invoke$arity$variadic = G__27641__delegate;
return G__27641;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1489721267639