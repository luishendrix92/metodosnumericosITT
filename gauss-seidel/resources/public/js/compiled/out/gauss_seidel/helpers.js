// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.helpers');
goog.require('cljs.core');
gauss_seidel.helpers.add = (function gauss_seidel$helpers$add(x,coll){
return cljs.core.conj.call(null,coll,x);
});
gauss_seidel.helpers.without_nth = (function gauss_seidel$helpers$without_nth(n,coll){
return cljs.core.reverse.call(null,new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (a,b){
var map__27422 = a;
var map__27422__$1 = ((((!((map__27422 == null)))?((((map__27422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27422):map__27422);
var i = cljs.core.get.call(null,map__27422__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var res = cljs.core.get.call(null,map__27422__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(i + (1)),new cljs.core.Keyword(null,"res","res",-1395007879),((cljs.core._EQ_.call(null,i,n))?res:cljs.core.conj.call(null,res,b))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.List.EMPTY], null),coll)));
});
gauss_seidel.helpers.filled_range = (function gauss_seidel$helpers$filled_range(n,padding){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (_){
return padding;
}),cljs.core.range.call(null,n)));
});
gauss_seidel.helpers.zip = (function gauss_seidel$helpers$zip(coll1,coll2,zipper){
var G__27450 = coll1;
var vec__27452 = G__27450;
var seq__27453 = cljs.core.seq.call(null,vec__27452);
var first__27454 = cljs.core.first.call(null,seq__27453);
var seq__27453__$1 = cljs.core.next.call(null,seq__27453);
var h1 = first__27454;
var t1 = seq__27453__$1;
var G__27451 = coll2;
var vec__27455 = G__27451;
var seq__27456 = cljs.core.seq.call(null,vec__27455);
var first__27457 = cljs.core.first.call(null,seq__27456);
var seq__27456__$1 = cljs.core.next.call(null,seq__27456);
var h2 = first__27457;
var t2 = seq__27456__$1;
var zipped = cljs.core.PersistentVector.EMPTY;
var G__27450__$1 = G__27450;
var G__27451__$1 = G__27451;
var zipped__$1 = zipped;
while(true){
var vec__27458 = G__27450__$1;
var seq__27459 = cljs.core.seq.call(null,vec__27458);
var first__27460 = cljs.core.first.call(null,seq__27459);
var seq__27459__$1 = cljs.core.next.call(null,seq__27459);
var h1__$1 = first__27460;
var t1__$1 = seq__27459__$1;
var vec__27461 = G__27451__$1;
var seq__27462 = cljs.core.seq.call(null,vec__27461);
var first__27463 = cljs.core.first.call(null,seq__27462);
var seq__27462__$1 = cljs.core.next.call(null,seq__27462);
var h2__$1 = first__27463;
var t2__$1 = seq__27462__$1;
var zipped__$2 = zipped__$1;
if((cljs.core.seq.call(null,t1__$1)) && (cljs.core.seq.call(null,t2__$1))){
var G__27464 = t1__$1;
var G__27465 = t2__$1;
var G__27466 = cljs.core.conj.call(null,zipped__$2,zipper.call(null,h1__$1,h2__$1));
G__27450__$1 = G__27464;
G__27451__$1 = G__27465;
zipped__$1 = G__27466;
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

//# sourceMappingURL=helpers.js.map?rel=1489559447347