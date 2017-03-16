// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.solver');
goog.require('cljs.core');
goog.require('gauss_seidel.system');
goog.require('gauss_seidel.helpers');
gauss_seidel.solver.acceptable_error_QMARK_ = (function gauss_seidel$solver$acceptable_error_QMARK_(tolerance){
return (function (err){
return (err <= tolerance);
});
});
gauss_seidel.solver.substitute = (function gauss_seidel$solver$substitute(n,xs,right_side){
return gauss_seidel.helpers.zip.call(null,right_side,gauss_seidel.helpers.remove_at.call(null,n,xs),cljs.core._STAR_);
});
gauss_seidel.solver.compute_errs = (function gauss_seidel$solver$compute_errs(prev_xs,curr_xs){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(100)),Math.abs),gauss_seidel.helpers.zip.call(null,curr_xs,prev_xs,(function (p1__27670_SHARP_,p2__27671_SHARP_){
return ((p1__27670_SHARP_ - p2__27671_SHARP_) / p1__27670_SHARP_);
})));
});
gauss_seidel.solver.isolate = (function gauss_seidel$solver$isolate(equation,n,xs){
var indep = new cljs.core.Keyword(null,"indep","indep",884656315).cljs$core$IFn$_invoke$arity$1(equation);
var comps = new cljs.core.Keyword(null,"comps","comps",1108881715).cljs$core$IFn$_invoke$arity$1(equation);
var divisor = cljs.core.nth.call(null,comps,n);
var right_side = gauss_seidel.solver.substitute.call(null,n,xs,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),gauss_seidel.helpers.remove_at.call(null,n,comps)));
return (cljs.core.reduce.call(null,cljs.core._PLUS_,indep,right_side) / divisor);
});
gauss_seidel.solver.compute_xs = (function gauss_seidel$solver$compute_xs(diagonal,xs){
return gauss_seidel.helpers.map_index.call(null,(function (p1__27672_SHARP_,p2__27673_SHARP_){
return gauss_seidel.solver.isolate.call(null,p1__27672_SHARP_,p2__27673_SHARP_,xs);
}),diagonal);
});
gauss_seidel.solver.solve_system = (function gauss_seidel$solver$solve_system(tolerance,diagonal){
var xs = gauss_seidel.helpers.filled_range.call(null,cljs.core.count.call(null,diagonal),(0));
var errs = gauss_seidel.helpers.filled_range.call(null,cljs.core.count.call(null,diagonal),"N/A");
var table = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),xs,errs], null)], null);
var i = (0);
while(true){
var new_xs = gauss_seidel.solver.compute_xs.call(null,diagonal,xs);
var new_errs = gauss_seidel.solver.compute_errs.call(null,xs,new_xs);
var row = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),new_xs,new_errs], null);
var new_table = cljs.core.conj.call(null,table,row);
if(cljs.core.not.call(null,cljs.core.some.call(null,gauss_seidel.solver.acceptable_error_QMARK_.call(null,tolerance),new_errs))){
var G__27674 = new_xs;
var G__27675 = new_errs;
var G__27676 = new_table;
var G__27677 = (i + (1));
xs = G__27674;
errs = G__27675;
table = G__27676;
i = G__27677;
continue;
} else {
return new_table;
}
break;
}
});

//# sourceMappingURL=solver.js.map?rel=1489682390206