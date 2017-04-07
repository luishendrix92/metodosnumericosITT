// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('trapecio.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39602__delegate = function (x){
if(cljs.core.truth_(trapecio.core.on_js_reload)){
return cljs.core.apply.call(null,trapecio.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'trapecio.core/on-js-reload' is missing");
}
};
var G__39602 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39603__i = 0, G__39603__a = new Array(arguments.length -  0);
while (G__39603__i < G__39603__a.length) {G__39603__a[G__39603__i] = arguments[G__39603__i + 0]; ++G__39603__i;}
  x = new cljs.core.IndexedSeq(G__39603__a,0);
} 
return G__39602__delegate.call(this,x);};
G__39602.cljs$lang$maxFixedArity = 0;
G__39602.cljs$lang$applyTo = (function (arglist__39604){
var x = cljs.core.seq(arglist__39604);
return G__39602__delegate(x);
});
G__39602.cljs$core$IFn$_invoke$arity$variadic = G__39602__delegate;
return G__39602;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1491543899635