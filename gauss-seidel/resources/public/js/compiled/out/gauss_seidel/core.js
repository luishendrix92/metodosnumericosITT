// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.core');
goog.require('cljs.core');
goog.require('gauss_seidel.modals');
goog.require('gauss_seidel.appstate');
goog.require('gauss_seidel.sidebar');
goog.require('gauss_seidel.table');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
gauss_seidel.core.app = (function gauss_seidel$core$app(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"columns"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"no-diag","no-diag",1086410180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.appstate.modal_state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.modals.no_diag], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"checker","checker",413112880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.appstate.modal_state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.modals.checker], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"max-iters","max-iters",-804582329).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.appstate.modal_state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.modals.max_iters], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"bad-format","bad-format",-1321579324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.appstate.modal_state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.modals.bad_format], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.sidebar.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.table.table], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1490107293565