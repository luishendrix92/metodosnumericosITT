// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.appstate');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof gauss_seidel.appstate.error !== 'undefined'){
} else {
gauss_seidel.appstate.error = reagent.core.atom.call(null,0.1);
}
if(typeof gauss_seidel.appstate.solution !== 'undefined'){
} else {
gauss_seidel.appstate.solution = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof gauss_seidel.appstate.equations !== 'undefined'){
} else {
gauss_seidel.appstate.equations = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof gauss_seidel.appstate.modal_state !== 'undefined'){
} else {
gauss_seidel.appstate.modal_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"no-diag","no-diag",1086410180),false,new cljs.core.Keyword(null,"max-iters","max-iters",-804582329),false,new cljs.core.Keyword(null,"bad-format","bad-format",-1321579324),false,new cljs.core.Keyword(null,"checker","checker",413112880),false], null));
}

//# sourceMappingURL=appstate.js.map?rel=1490069871076