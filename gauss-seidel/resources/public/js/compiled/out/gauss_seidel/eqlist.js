// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.eqlist');
goog.require('cljs.core');
goog.require('gauss_seidel.appstate');
goog.require('gauss_seidel.events');
gauss_seidel.eqlist.equation_list = (function gauss_seidel$eqlist$equation_list(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card eq-list"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header-title"], null),"Equation List"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-content"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"welcome"], null),"The following equations will go through a solving-attempt process, bear in mind that the equation system may or may not have a solution:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function gauss_seidel$eqlist$equation_list_$_iter__28011(s__28012){
return (new cljs.core.LazySeq(null,(function (){
var s__28012__$1 = s__28012;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28012__$1);
if(temp__4657__auto__){
var s__28012__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28012__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__28012__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__28014 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__28013 = (0);
while(true){
if((i__28013 < size__25627__auto__)){
var equation = cljs.core._nth.call(null,c__25626__auto__,i__28013);
cljs.core.chunk_append.call(null,b__28014,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),equation], null),equation], null));

var G__28015 = (i__28013 + (1));
i__28013 = G__28015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28014),gauss_seidel$eqlist$equation_list_$_iter__28011.call(null,cljs.core.chunk_rest.call(null,s__28012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28014),null);
}
} else {
var equation = cljs.core.first.call(null,s__28012__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),equation], null),equation], null),gauss_seidel$eqlist$equation_list_$_iter__28011.call(null,cljs.core.rest.call(null,s__28012__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,cljs.core.deref.call(null,gauss_seidel.appstate.equations));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.events.show_solution], null),"Solve"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.events.open_modal.call(null,new cljs.core.Keyword(null,"checker","checker",413112880))], null),"Check"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.events.clear], null),"Clear"], null)], null)], null);
});

//# sourceMappingURL=eqlist.js.map?rel=1490075237526