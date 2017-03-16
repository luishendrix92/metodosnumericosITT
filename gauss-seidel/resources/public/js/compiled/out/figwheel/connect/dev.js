// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('gauss_seidel.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27729__delegate = function (x){
if(cljs.core.truth_(gauss_seidel.core.on_js_reload)){
return cljs.core.apply.call(null,gauss_seidel.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'gauss-seidel.core/on-js-reload' is missing");
}
};
var G__27729 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27730__i = 0, G__27730__a = new Array(arguments.length -  0);
while (G__27730__i < G__27730__a.length) {G__27730__a[G__27730__i] = arguments[G__27730__i + 0]; ++G__27730__i;}
  x = new cljs.core.IndexedSeq(G__27730__a,0);
} 
return G__27729__delegate.call(this,x);};
G__27729.cljs$lang$maxFixedArity = 0;
G__27729.cljs$lang$applyTo = (function (arglist__27731){
var x = cljs.core.seq(arglist__27731);
return G__27729__delegate(x);
});
G__27729.cljs$core$IFn$_invoke$arity$variadic = G__27729__delegate;
return G__27729;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1489682390764