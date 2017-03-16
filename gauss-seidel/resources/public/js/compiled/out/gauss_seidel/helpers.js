// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.helpers');
goog.require('cljs.core');
gauss_seidel.helpers.remove_at = (function gauss_seidel$helpers$remove_at(n,coll){
return cljs.core.reverse.call(null,new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (a,b){
var map__29164 = a;
var map__29164__$1 = ((((!((map__29164 == null)))?((((map__29164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29164):map__29164);
var i = cljs.core.get.call(null,map__29164__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var res = cljs.core.get.call(null,map__29164__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(i + (1)),new cljs.core.Keyword(null,"res","res",-1395007879),((cljs.core._EQ_.call(null,i,n))?res:cljs.core.conj.call(null,res,b))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.List.EMPTY], null),coll)));
});
gauss_seidel.helpers.filled_range = (function gauss_seidel$helpers$filled_range(n,padding){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (_){
return padding;
}),cljs.core.range.call(null,n)));
});
gauss_seidel.helpers.zip = (function gauss_seidel$helpers$zip(coll1,coll2,zipper){
var G__29192 = coll1;
var vec__29194 = G__29192;
var seq__29195 = cljs.core.seq.call(null,vec__29194);
var first__29196 = cljs.core.first.call(null,seq__29195);
var seq__29195__$1 = cljs.core.next.call(null,seq__29195);
var h1 = first__29196;
var t1 = seq__29195__$1;
var G__29193 = coll2;
var vec__29197 = G__29193;
var seq__29198 = cljs.core.seq.call(null,vec__29197);
var first__29199 = cljs.core.first.call(null,seq__29198);
var seq__29198__$1 = cljs.core.next.call(null,seq__29198);
var h2 = first__29199;
var t2 = seq__29198__$1;
var zipped = cljs.core.PersistentVector.EMPTY;
var G__29192__$1 = G__29192;
var G__29193__$1 = G__29193;
var zipped__$1 = zipped;
while(true){
var vec__29200 = G__29192__$1;
var seq__29201 = cljs.core.seq.call(null,vec__29200);
var first__29202 = cljs.core.first.call(null,seq__29201);
var seq__29201__$1 = cljs.core.next.call(null,seq__29201);
var h1__$1 = first__29202;
var t1__$1 = seq__29201__$1;
var vec__29203 = G__29193__$1;
var seq__29204 = cljs.core.seq.call(null,vec__29203);
var first__29205 = cljs.core.first.call(null,seq__29204);
var seq__29204__$1 = cljs.core.next.call(null,seq__29204);
var h2__$1 = first__29205;
var t2__$1 = seq__29204__$1;
var zipped__$2 = zipped__$1;
if((cljs.core.seq.call(null,t1__$1)) && (cljs.core.seq.call(null,t2__$1))){
var G__29206 = t1__$1;
var G__29207 = t2__$1;
var G__29208 = cljs.core.conj.call(null,zipped__$2,zipper.call(null,h1__$1,h2__$1));
G__29192__$1 = G__29206;
G__29193__$1 = G__29207;
zipped__$1 = G__29208;
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
gauss_seidel.helpers.reduce_index = (function gauss_seidel$helpers$reduce_index(reducer,initial,coll){
var index = (0);
var G__29222 = coll;
var vec__29223 = G__29222;
var seq__29224 = cljs.core.seq.call(null,vec__29223);
var first__29225 = cljs.core.first.call(null,seq__29224);
var seq__29224__$1 = cljs.core.next.call(null,seq__29224);
var head = first__29225;
var tail = seq__29224__$1;
var reduced = initial;
var index__$1 = index;
var G__29222__$1 = G__29222;
var reduced__$1 = reduced;
while(true){
var index__$2 = index__$1;
var vec__29226 = G__29222__$1;
var seq__29227 = cljs.core.seq.call(null,vec__29226);
var first__29228 = cljs.core.first.call(null,seq__29227);
var seq__29227__$1 = cljs.core.next.call(null,seq__29227);
var head__$1 = first__29228;
var tail__$1 = seq__29227__$1;
var reduced__$2 = reduced__$1;
if(cljs.core.seq.call(null,tail__$1)){
var G__29229 = (index__$2 + (1));
var G__29230 = tail__$1;
var G__29231 = reducer.call(null,reduced__$2,head__$1,index__$2);
index__$1 = G__29229;
G__29222__$1 = G__29230;
reduced__$1 = G__29231;
continue;
} else {
return reducer.call(null,reduced__$2,head__$1,index__$2);
}
break;
}
});

//# sourceMappingURL=helpers.js.map?rel=1489688746902