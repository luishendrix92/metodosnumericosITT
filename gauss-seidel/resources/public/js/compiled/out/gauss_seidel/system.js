// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.system');
goog.require('cljs.core');
gauss_seidel.system.nth_is_max = (function gauss_seidel$system$nth_is_max(components,n){

return cljs.core._EQ_.call(null,cljs.core.nth.call(null,components,n),cljs.core.apply.call(null,cljs.core.max,components));
});
gauss_seidel.system.valid = (function gauss_seidel$system$valid(system,n){

var equations = cljs.core.map.call(null,new cljs.core.Keyword(null,"comps","comps",1108881715),system);
var or__24848__auto__ = cljs.core.some.call(null,((function (equations){
return (function (p1__27528_SHARP_){
if(cljs.core.truth_(gauss_seidel.system.nth_is_max.call(null,p1__27528_SHARP_,n))){
return p1__27528_SHARP_;
} else {
return null;
}
});})(equations))
,equations);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
}
});
gauss_seidel.system.make_diagonal = (function gauss_seidel$system$make_diagonal(system){

var n = (cljs.core.count.call(null,system) - (1));
var diagonal = cljs.core.List.EMPTY;
while(true){
var equation = gauss_seidel.system.valid.call(null,system,n);
var new_diagonal = cljs.core.conj.call(null,diagonal,equation);
if(cljs.core._EQ_.call(null,equation,new cljs.core.Keyword(null,"nothing","nothing",-1022703296))){
return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
} else {
if(cljs.core._EQ_.call(null,n,(0))){
return new_diagonal;
} else {
var G__27529 = (n - (1));
var G__27530 = new_diagonal;
n = G__27529;
diagonal = G__27530;
continue;

}
}
break;
}
});

//# sourceMappingURL=system.js.map?rel=1489525190519