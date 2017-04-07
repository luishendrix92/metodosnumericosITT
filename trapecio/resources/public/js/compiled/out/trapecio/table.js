// Compiled by ClojureScript 1.9.229 {}
goog.provide('trapecio.table');
goog.require('cljs.core');
trapecio.table.table = (function trapecio$table$table(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane","div.pane",24297878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-striped","table.table-striped",1771641783),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"i"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"f(x",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"i"], null),") evaluated"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Ef(x",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"i"], null),")"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__25628__auto__ = (function trapecio$table$table_$_iter__39570(s__39571){
return (new cljs.core.LazySeq(null,(function (){
var s__39571__$1 = s__39571;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39571__$1);
if(temp__4657__auto__){
var s__39571__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39571__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__39571__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__39573 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__39572 = (0);
while(true){
if((i__39572 < size__25627__auto__)){
var vec__39580 = cljs.core._nth.call(null,c__25626__auto__,i__39572);
var i = cljs.core.nth.call(null,vec__39580,(0),null);
var fxi = cljs.core.nth.call(null,vec__39580,(1),null);
cljs.core.chunk_append.call(null,b__39573,((cljs.core.odd_QMARK_.call(null,i))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),fxi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new cljs.core.Keyword(null,"real-integral","real-integral",-313552774).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) - fxi)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)):null));

var G__39586 = (i__39572 + (1));
i__39572 = G__39586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39573),trapecio$table$table_$_iter__39570.call(null,cljs.core.chunk_rest.call(null,s__39571__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39573),null);
}
} else {
var vec__39583 = cljs.core.first.call(null,s__39571__$2);
var i = cljs.core.nth.call(null,vec__39583,(0),null);
var fxi = cljs.core.nth.call(null,vec__39583,(1),null);
return cljs.core.cons.call(null,((cljs.core.odd_QMARK_.call(null,i))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),fxi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new cljs.core.Keyword(null,"real-integral","real-integral",-313552774).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) - fxi)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)):null),trapecio$table$table_$_iter__39570.call(null,cljs.core.rest.call(null,s__39571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
})()], null)], null)], null);
});

//# sourceMappingURL=table.js.map?rel=1491542502438