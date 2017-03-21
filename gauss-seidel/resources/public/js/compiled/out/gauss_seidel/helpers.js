// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.helpers');
goog.require('cljs.core');
gauss_seidel.helpers.without = (function gauss_seidel$helpers$without(n,coll){
return new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (a,b){
var map__31354 = a;
var map__31354__$1 = ((((!((map__31354 == null)))?((((map__31354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31354):map__31354);
var i = cljs.core.get.call(null,map__31354__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var res = cljs.core.get.call(null,map__31354__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(i + (1)),new cljs.core.Keyword(null,"res","res",-1395007879),((cljs.core._EQ_.call(null,i,n))?res:cljs.core.conj.call(null,res,b))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.PersistentVector.EMPTY], null),coll));
});
gauss_seidel.helpers.reduce_index = (function gauss_seidel$helpers$reduce_index(reducer,initial,coll){
var index = (0);
var G__31369 = coll;
var vec__31370 = G__31369;
var seq__31371 = cljs.core.seq.call(null,vec__31370);
var first__31372 = cljs.core.first.call(null,seq__31371);
var seq__31371__$1 = cljs.core.next.call(null,seq__31371);
var head = first__31372;
var tail = seq__31371__$1;
var reduced = initial;
var index__$1 = index;
var G__31369__$1 = G__31369;
var reduced__$1 = reduced;
while(true){
var index__$2 = index__$1;
var vec__31373 = G__31369__$1;
var seq__31374 = cljs.core.seq.call(null,vec__31373);
var first__31375 = cljs.core.first.call(null,seq__31374);
var seq__31374__$1 = cljs.core.next.call(null,seq__31374);
var head__$1 = first__31375;
var tail__$1 = seq__31374__$1;
var reduced__$2 = reduced__$1;
if(cljs.core.seq.call(null,tail__$1)){
var G__31376 = (index__$2 + (1));
var G__31377 = tail__$1;
var G__31378 = reducer.call(null,reduced__$2,head__$1,index__$2);
index__$1 = G__31376;
G__31369__$1 = G__31377;
reduced__$1 = G__31378;
continue;
} else {
return reducer.call(null,reduced__$2,head__$1,index__$2);
}
break;
}
});

//# sourceMappingURL=helpers.js.map?rel=1489739341225