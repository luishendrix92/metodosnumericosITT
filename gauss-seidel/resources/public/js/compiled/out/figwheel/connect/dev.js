// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('gauss_seidel.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27636__delegate = function (x){
if(cljs.core.truth_(gauss_seidel.core.on_js_reload)){
return cljs.core.apply.call(null,gauss_seidel.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'gauss-seidel.core/on-js-reload' is missing");
}
};
var G__27636 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27637__i = 0, G__27637__a = new Array(arguments.length -  0);
while (G__27637__i < G__27637__a.length) {G__27637__a[G__27637__i] = arguments[G__27637__i + 0]; ++G__27637__i;}
  x = new cljs.core.IndexedSeq(G__27637__a,0);
} 
return G__27636__delegate.call(this,x);};
G__27636.cljs$lang$maxFixedArity = 0;
G__27636.cljs$lang$applyTo = (function (arglist__27638){
var x = cljs.core.seq(arglist__27638);
return G__27636__delegate(x);
});
G__27636.cljs$core$IFn$_invoke$arity$variadic = G__27636__delegate;
return G__27636;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1489562936200