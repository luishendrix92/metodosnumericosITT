// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.modals');
goog.require('cljs.core');
goog.require('gauss_seidel.solver');
goog.require('gauss_seidel.appstate');
goog.require('gauss_seidel.events');
goog.require('gauss_seidel.parser');
goog.require('clojure.string');
goog.require('reagent.core');
gauss_seidel.modals.round_sol = (function gauss_seidel$modals$round_sol(xs){
return cljs.core.map.call(null,(function (p1__28892_SHARP_){
return p1__28892_SHARP_.toFixed((5));
}),xs);
});
gauss_seidel.modals.eq_tag = (function gauss_seidel$modals$eq_tag(eq,chosen){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tag is-info is-medium eq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,chosen,gauss_seidel.parser.parse_eq.call(null,eq));
})], null),eq], null);
});
gauss_seidel.modals.no_diag = (function gauss_seidel$modals$no_diag(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal is-active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-background"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-head"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-title"], null),"No diagonal found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.events.close_modal.call(null,new cljs.core.Keyword(null,"no-diag","no-diag",1086410180))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the Gauss-Seidel method to work, you need to make sure your equations form a dominant diagonal. For example, if you were to have the following equation system:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"2x + 3y = 23"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"5x - 2y = 12"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can observe that if you interchange their order, the first term in the first equation (5x) has the greatest coefficient. In the same way, the second term in the second equation (3y) also has the greatest coefficient. If your equations don't follow this rule, or if you have n terms in your equations but your system doesn't have exactly n equations, clear your system and start again!"], null)], null)], null)], null);
});
gauss_seidel.modals.bad_format = (function gauss_seidel$modals$bad_format(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal is-active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-background"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-head"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-title"], null),"Bad equation format"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.events.close_modal.call(null,new cljs.core.Keyword(null,"bad-format","bad-format",-1321579324))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The equation you wrote doesn't match the adequate format, this may cause the app to malfunction. The correct format that the app accepts is two or more terms, an equal sign and a positve or negative number (decimal or whole). A term consists of a sign (+-), a whole or decimal number and a letter; bear in mind that if the sign of the first term is +, the format isn't correct since it's not necessary to specify it unless it was a negative number."], null)], null)], null)], null);
});
gauss_seidel.modals.checker = (function gauss_seidel$modals$checker(){
var sol = cljs.core.nth.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,gauss_seidel.appstate.solution)),(1));
var chosen = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (sol,chosen){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal is-active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-background"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-head"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-title"], null),"Check solution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.events.close_modal.call(null,new cljs.core.Keyword(null,"checker","checker",413112880))], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Solution (rounded to 5 decimals): "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),clojure.string.join.call(null,", ",gauss_seidel.modals.round_sol.call(null,sol))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In which equation do you want to check this solution?"], null),(function (){var iter__25628__auto__ = ((function (sol,chosen){
return (function gauss_seidel$modals$checker_$_iter__28897(s__28898){
return (new cljs.core.LazySeq(null,((function (sol,chosen){
return (function (){
var s__28898__$1 = s__28898;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28898__$1);
if(temp__4657__auto__){
var s__28898__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28898__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__28898__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__28900 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__28899 = (0);
while(true){
if((i__28899 < size__25627__auto__)){
var eq = cljs.core._nth.call(null,c__25626__auto__,i__28899);
cljs.core.chunk_append.call(null,b__28900,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.modals.eq_tag,eq,chosen], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),eq], null)));

var G__28901 = (i__28899 + (1));
i__28899 = G__28901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28900),gauss_seidel$modals$checker_$_iter__28897.call(null,cljs.core.chunk_rest.call(null,s__28898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28900),null);
}
} else {
var eq = cljs.core.first.call(null,s__28898__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.modals.eq_tag,eq,chosen], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),eq], null)),gauss_seidel$modals$checker_$_iter__28897.call(null,cljs.core.rest.call(null,s__28898__$2)));
}
} else {
return null;
}
break;
}
});})(sol,chosen))
,null,null));
});})(sol,chosen))
;
return iter__25628__auto__.call(null,cljs.core.deref.call(null,gauss_seidel.appstate.equations));
})(),((cljs.core.seq.call(null,cljs.core.deref.call(null,chosen)))?(function (){var expected = new cljs.core.Keyword(null,"indep","indep",884656315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chosen));
var result = cljs.core.reduce.call(null,cljs.core._PLUS_,gauss_seidel.solver.substitute.call(null,sol,new cljs.core.Keyword(null,"comps","comps",1108881715).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chosen))));
var expected__$1 = new cljs.core.Keyword(null,"indep","indep",884656315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chosen));
var diff = (expected__$1 - result);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comparison"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str("Expected: "),cljs.core.str(expected__$1)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str("Obtained: "),cljs.core.str(result)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Difference: ",diff], null)], null);
})():null)], null)], null)], null);
});
;})(sol,chosen))
});
gauss_seidel.modals.max_iters = (function gauss_seidel$modals$max_iters(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal is-active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-background"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-head"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-title"], null),"Maximum iterations reached"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.events.close_modal.call(null,new cljs.core.Keyword(null,"max-iters","max-iters",-804582329))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-card-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("The maximum amount of iterations ("),cljs.core.str((gauss_seidel.solver.MAX_ITERATIONS + (2))),cljs.core.str(") was reached due to one of the following reasons:")].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"The system doesn't have a solution."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Due to floating point number issues, once the real solution is reached, it keeps alternating around 3 different (yet very very close) solutions. In this case, the last solution is valid."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"The error was set to negative, please change it to 0 or more."], null)], null)], null)], null)], null);
});

//# sourceMappingURL=modals.js.map?rel=1490080806277