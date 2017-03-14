// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('sistemaecdos.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__61873__delegate = function (x){
if(cljs.core.truth_(sistemaecdos.core.on_js_reload)){
return cljs.core.apply.call(null,sistemaecdos.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sistemaecdos.core/on-js-reload' is missing");
}
};
var G__61873 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__61874__i = 0, G__61874__a = new Array(arguments.length -  0);
while (G__61874__i < G__61874__a.length) {G__61874__a[G__61874__i] = arguments[G__61874__i + 0]; ++G__61874__i;}
  x = new cljs.core.IndexedSeq(G__61874__a,0);
} 
return G__61873__delegate.call(this,x);};
G__61873.cljs$lang$maxFixedArity = 0;
G__61873.cljs$lang$applyTo = (function (arglist__61875){
var x = cljs.core.seq(arglist__61875);
return G__61873__delegate(x);
});
G__61873.cljs$core$IFn$_invoke$arity$variadic = G__61873__delegate;
return G__61873;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1489472407570