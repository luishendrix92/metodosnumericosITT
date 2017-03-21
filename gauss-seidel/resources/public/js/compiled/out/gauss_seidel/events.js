// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.events');
goog.require('cljs.core');
goog.require('gauss_seidel.parser');
goog.require('gauss_seidel.system');
goog.require('gauss_seidel.solver');
goog.require('gauss_seidel.appstate');
gauss_seidel.events.open_modal = (function gauss_seidel$events$open_modal(target_modal){
return (function (){
return cljs.core.swap_BANG_.call(null,gauss_seidel.appstate.modal_state,cljs.core.assoc,target_modal,true);
});
});
gauss_seidel.events.close_modal = (function gauss_seidel$events$close_modal(target_modal){
return (function (){
return cljs.core.swap_BANG_.call(null,gauss_seidel.appstate.modal_state,cljs.core.assoc,target_modal,false);
});
});
gauss_seidel.events.show_solution = (function gauss_seidel$events$show_solution(event){
var diagonal = gauss_seidel.system.make_diagonal.call(null,cljs.core.map.call(null,gauss_seidel.parser.parse_eq,cljs.core.deref.call(null,gauss_seidel.appstate.equations)));
var G__28003 = (((diagonal instanceof cljs.core.Keyword))?diagonal.fqn:null);
switch (G__28003) {
case "nothing":
return gauss_seidel.events.open_modal.call(null,new cljs.core.Keyword(null,"no-diag","no-diag",1086410180)).call(null);

break;
default:
cljs.core.reset_BANG_.call(null,gauss_seidel.appstate.solution,gauss_seidel.solver.solve_system.call(null,cljs.core.deref.call(null,gauss_seidel.appstate.error),diagonal));

if(cljs.core._EQ_.call(null,(cljs.core.first.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,gauss_seidel.appstate.solution))) - (1)),gauss_seidel.solver.MAX_ITERATIONS)){
return gauss_seidel.events.open_modal.call(null,new cljs.core.Keyword(null,"max-iters","max-iters",-804582329)).call(null);
} else {
return null;
}

}
});
gauss_seidel.events.update_error = (function gauss_seidel$events$update_error(event){
var err = document.getElementById("err");
cljs.core.reset_BANG_.call(null,gauss_seidel.appstate.error,parseFloat(err.value));

return err.value = "";
});
gauss_seidel.events.add_equation = (function gauss_seidel$events$add_equation(event){
var eq = document.getElementById("eq");
var eq_clean = clojure.string.replace.call(null,eq.value,gauss_seidel.parser.whitespace,"");
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,gauss_seidel.parser.eq_pattern,eq_clean))){
return gauss_seidel.events.open_modal.call(null,new cljs.core.Keyword(null,"bad-format","bad-format",-1321579324)).call(null);
} else {
cljs.core.swap_BANG_.call(null,gauss_seidel.appstate.equations,cljs.core.conj,eq.value);

return eq.value = "";
}
});
gauss_seidel.events.clear = (function gauss_seidel$events$clear(event){
cljs.core.reset_BANG_.call(null,gauss_seidel.appstate.solution,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,gauss_seidel.appstate.equations,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=events.js.map?rel=1490075237430