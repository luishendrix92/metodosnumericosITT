// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.helpers');
goog.require('cljs.core');
gauss_seidel.helpers.remove_at = (function gauss_seidel$helpers$remove_at(n,coll){
return cljs.core.reverse.call(null,new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (a,b){
var map__27551 = a;
var map__27551__$1 = ((((!((map__27551 == null)))?((((map__27551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27551):map__27551);
var i = cljs.core.get.call(null,map__27551__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var res = cljs.core.get.call(null,map__27551__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(i + (1)),new cljs.core.Keyword(null,"res","res",-1395007879),((cljs.core._EQ_.call(null,i,n))?res:cljs.core.conj.call(null,res,b))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.List.EMPTY], null),coll)));
});
gauss_seidel.helpers.filled_range = (function gauss_seidel$helpers$filled_range(n,padding){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (_){
return padding;
}),cljs.core.range.call(null,n)));
});
gauss_seidel.helpers.zip = (function gauss_seidel$helpers$zip(coll1,coll2,zipper){
var G__27579 = coll1;
var vec__27581 = G__27579;
var seq__27582 = cljs.core.seq.call(null,vec__27581);
var first__27583 = cljs.core.first.call(null,seq__27582);
var seq__27582__$1 = cljs.core.next.call(null,seq__27582);
var h1 = first__27583;
var t1 = seq__27582__$1;
var G__27580 = coll2;
var vec__27584 = G__27580;
var seq__27585 = cljs.core.seq.call(null,vec__27584);
var first__27586 = cljs.core.first.call(null,seq__27585);
var seq__27585__$1 = cljs.core.next.call(null,seq__27585);
var h2 = first__27586;
var t2 = seq__27585__$1;
var zipped = cljs.core.PersistentVector.EMPTY;
var G__27579__$1 = G__27579;
var G__27580__$1 = G__27580;
var zipped__$1 = zipped;
while(true){
var vec__27587 = G__27579__$1;
var seq__27588 = cljs.core.seq.call(null,vec__27587);
var first__27589 = cljs.core.first.call(null,seq__27588);
var seq__27588__$1 = cljs.core.next.call(null,seq__27588);
var h1__$1 = first__27589;
var t1__$1 = seq__27588__$1;
var vec__27590 = G__27580__$1;
var seq__27591 = cljs.core.seq.call(null,vec__27590);
var first__27592 = cljs.core.first.call(null,seq__27591);
var seq__27591__$1 = cljs.core.next.call(null,seq__27591);
var h2__$1 = first__27592;
var t2__$1 = seq__27591__$1;
var zipped__$2 = zipped__$1;
if((cljs.core.seq.call(null,t1__$1)) && (cljs.core.seq.call(null,t2__$1))){
var G__27593 = t1__$1;
var G__27594 = t2__$1;
var G__27595 = cljs.core.conj.call(null,zipped__$2,zipper.call(null,h1__$1,h2__$1));
G__27579__$1 = G__27593;
G__27580__$1 = G__27594;
zipped__$1 = G__27595;
continue;
} else {
return cljs.core.conj.call(null,zipped__$2,zipper.call(null,h1__$1,h2__$1));
}
break;
}
});
gauss_seidel.helpers.map_index = (function gauss_seidel$helpers$map_index(mapper,coll){
return gauss_seidel.helpers.zip.call(null,coll,cljs.core.range.call(null,cljs.core.count.call(null,coll)),mapper);
});

//# sourceMappingURL=helpers.js.map?rel=1489681777625