// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.solver');
goog.require('cljs.core');
goog.require('gauss_seidel.system');
goog.require('gauss_seidel.helpers');
gauss_seidel.solver.MAX_ITERATIONS = (498);
gauss_seidel.solver.acceptable_error_QMARK_ = (function gauss_seidel$solver$acceptable_error_QMARK_(tolerance){
return (function (err){
return (err <= tolerance);
});
});
gauss_seidel.solver.compute_errs = (function gauss_seidel$solver$compute_errs(prev_xs,curr_xs){
var divide = (function (p1__27994_SHARP_,p2__27995_SHARP_){
return ((p1__27994_SHARP_ - p2__27995_SHARP_) / p1__27994_SHARP_);
});
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(100)),Math.abs,divide),curr_xs,prev_xs);
});
gauss_seidel.solver.substitute = (function gauss_seidel$solver$substitute(xs,right_side){
return cljs.core.map.call(null,cljs.core._STAR_,right_side,xs);
});
gauss_seidel.solver.isolate = (function gauss_seidel$solver$isolate(equation,n,xs){
var indep = new cljs.core.Keyword(null,"indep","indep",884656315).cljs$core$IFn$_invoke$arity$1(equation);
var comps = new cljs.core.Keyword(null,"comps","comps",1108881715).cljs$core$IFn$_invoke$arity$1(equation);
var divisor = cljs.core.nth.call(null,comps,n);
var right_side = gauss_seidel.solver.substitute.call(null,gauss_seidel.helpers.without.call(null,n,xs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),gauss_seidel.helpers.without.call(null,n,comps)));
return (cljs.core.reduce.call(null,cljs.core._PLUS_,indep,right_side) / divisor);
});
gauss_seidel.solver.update_xs = (function gauss_seidel$solver$update_xs(xs,equation,n){
return cljs.core.assoc.call(null,xs,n,gauss_seidel.solver.isolate.call(null,equation,n,xs));
});
gauss_seidel.solver.compute_xs = (function gauss_seidel$solver$compute_xs(diagonal,xs){
var num_eqs = cljs.core.count.call(null,diagonal);
return gauss_seidel.helpers.reduce_index.call(null,gauss_seidel.solver.update_xs,xs,diagonal);
});
gauss_seidel.solver.solve_system = (function gauss_seidel$solver$solve_system(tolerance,diagonal){
var xs = cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,diagonal),(0)));
var errs = cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,diagonal),"N/A"));
var table = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),xs,errs], null)], null);
var i = (0);
while(true){
var new_xs = gauss_seidel.solver.compute_xs.call(null,diagonal,xs);
var new_errs = gauss_seidel.solver.compute_errs.call(null,xs,new_xs);
var row = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),new_xs,new_errs], null);
var new_table = cljs.core.conj.call(null,table,row);
if(cljs.core.not.call(null,(function (){var or__24848__auto__ = cljs.core.some.call(null,gauss_seidel.solver.acceptable_error_QMARK_.call(null,tolerance),new_errs);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core._EQ_.call(null,i,gauss_seidel.solver.MAX_ITERATIONS);
}
})())){
var G__27996 = new_xs;
var G__27997 = new_errs;
var G__27998 = new_table;
var G__27999 = (i + (1));
xs = G__27996;
errs = G__27997;
table = G__27998;
i = G__27999;
continue;
} else {
return new_table;
}
break;
}
});

//# sourceMappingURL=solver.js.map?rel=1490075237317