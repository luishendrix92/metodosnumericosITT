// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.test');
goog.require('cljs.core');
gauss_seidel.test.isolate = (function gauss_seidel$test$isolate(equation,n,xs){
var indep = new cljs.core.Keyword(null,"indep","indep",884656315).cljs$core$IFn$_invoke$arity$1(equation);
var comps = new cljs.core.Keyword(null,"comps","comps",1108881715).cljs$core$IFn$_invoke$arity$1(equation);
var divisor = cljs.core.nth.call(null,comps,n);
var right_side = gauss_seidel.test.substitute.call(null,n,xs,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),gauss_seidel.test.remove_at.call(null,n,comps)));
return (cljs.core.reduce.call(null,cljs.core._PLUS_,indep,right_side) / divisor);
});
gauss_seidel.test.compute_xs = (function gauss_seidel$test$compute_xs(diagonal,xs){
var num_eqs = cljs.core.count.call(null,diagonal);
return new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (num_eqs){
return (function (p__27769,equation){
var map__27770 = p__27769;
var map__27770__$1 = ((((!((map__27770 == null)))?((((map__27770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27770):map__27770);
var result = map__27770__$1;
var n = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs__$1 = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
return cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"n","n",562130025),(n + (1)),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.assoc.call(null,gauss_seidel.test.isolate.call(null,equation,n,xs__$1),xs__$1,n));
});})(num_eqs))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),(0),new cljs.core.Keyword(null,"xs","xs",649443341),xs], null),diagonal));
});

//# sourceMappingURL=test.js.map?rel=1489684314213