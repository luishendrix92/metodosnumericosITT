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
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(100)),Math.abs),gauss_seidel.helpers.zip.call(null,curr_xs,prev_xs,(function (p1__30127_SHARP_,p2__30128_SHARP_){
return ((p1__30127_SHARP_ - p2__30128_SHARP_) / p1__30127_SHARP_);
})));
});
gauss_seidel.solver.substitute = (function gauss_seidel$solver$substitute(xs,right_side){
return gauss_seidel.helpers.zip.call(null,right_side,xs,cljs.core._STAR_);
});
gauss_seidel.solver.isolate = (function gauss_seidel$solver$isolate(equation,n,xs){
var indep = new cljs.core.Keyword(null,"indep","indep",884656315).cljs$core$IFn$_invoke$arity$1(equation);
var comps = new cljs.core.Keyword(null,"comps","comps",1108881715).cljs$core$IFn$_invoke$arity$1(equation);
var divisor = cljs.core.nth.call(null,comps,n);
var right_side = gauss_seidel.solver.substitute.call(null,gauss_seidel.helpers.remove_at.call(null,n,xs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),gauss_seidel.helpers.remove_at.call(null,n,comps)));
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
var xs = gauss_seidel.helpers.filled_range.call(null,cljs.core.count.call(null,diagonal),(0));
var errs = gauss_seidel.helpers.filled_range.call(null,cljs.core.count.call(null,diagonal),"N/A");
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
var G__30129 = new_xs;
var G__30130 = new_errs;
var G__30131 = new_table;
var G__30132 = (i + (1));
xs = G__30129;
errs = G__30130;
table = G__30131;
i = G__30132;
continue;
} else {
return new_table;
}
break;
}
});

//# sourceMappingURL=solver.js.map?rel=1489693368997