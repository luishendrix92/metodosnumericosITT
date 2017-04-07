// Compiled by ClojureScript 1.9.229 {}
goog.provide('trapecio.core');
goog.require('cljs.core');
goog.require('trapecio.sidebar');
goog.require('trapecio.results');
goog.require('trapecio.table');
goog.require('reagent.core');
trapecio.core.app = (function trapecio$core$app(){
var state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane-group","div.pane-group",1738824197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trapecio.sidebar.sidebar,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trapecio.results.results_pane,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trapecio.table.table,state], null)], null);
});
;})(state))
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trapecio.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1491543899366