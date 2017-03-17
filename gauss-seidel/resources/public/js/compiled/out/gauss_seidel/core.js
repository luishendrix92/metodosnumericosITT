// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.core');
goog.require('cljs.core');
goog.require('gauss_seidel.sidebar');
goog.require('gauss_seidel.table');
goog.require('gauss_seidel.modals');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
gauss_seidel.core.app = (function gauss_seidel$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"columns"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.modals.no_diag], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.sidebar.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.table.table], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1489728899154