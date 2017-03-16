// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.core');
goog.require('cljs.core');
goog.require('gauss_seidel.parser');
goog.require('gauss_seidel.system');
goog.require('gauss_seidel.solver');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gauss_seidel.core.state !== 'undefined'){
} else {
gauss_seidel.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"equations","equations",1884238648),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032),0.01,new cljs.core.Keyword(null,"solution","solution",-1727231491),cljs.core.PersistentVector.EMPTY], null));
}
gauss_seidel.core.show_solution = (function gauss_seidel$core$show_solution(event){
var diagonal = gauss_seidel.system.make_diagonal.call(null,cljs.core.map.call(null,gauss_seidel.parser.parse_eq,new cljs.core.Keyword(null,"equations","equations",1884238648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.core.state))));
var G__29317 = (((diagonal instanceof cljs.core.Keyword))?diagonal.fqn:null);
switch (G__29317) {
case "nothing":
return alert("Couldn't assemble a correct diagonal from the equations you provided");

break;
default:
return cljs.core.swap_BANG_.call(null,gauss_seidel.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"solution","solution",-1727231491),gauss_seidel.solver.solve_system.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.core.state)),diagonal));

}
});
gauss_seidel.core.update_error = (function gauss_seidel$core$update_error(event){
var err = document.getElementById("err");
cljs.core.swap_BANG_.call(null,gauss_seidel.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),parseFloat(err.value));

return err.value = "";
});
gauss_seidel.core.add_equation = (function gauss_seidel$core$add_equation(event){
var eq = document.getElementById("eq");
cljs.core.swap_BANG_.call(null,gauss_seidel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"equations","equations",1884238648)], null),((function (eq){
return (function (p1__29319_SHARP_){
return cljs.core.conj.call(null,p1__29319_SHARP_,eq.value);
});})(eq))
);

return eq.value = "";
});
gauss_seidel.core.clear_system = (function gauss_seidel$core$clear_system(event){
return cljs.core.swap_BANG_.call(null,gauss_seidel.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"equations","equations",1884238648),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"solution","solution",-1727231491),cljs.core.PersistentVector.EMPTY);
});
gauss_seidel.core.row = (function gauss_seidel$core$row(p__29320){
var vec__29332 = p__29320;
var i = cljs.core.nth.call(null,vec__29332,(0),null);
var xs = cljs.core.nth.call(null,vec__29332,(1),null);
var errs = cljs.core.nth.call(null,vec__29332,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__25628__auto__ = ((function (vec__29332,i,xs,errs){
return (function gauss_seidel$core$row_$_iter__29335(s__29336){
return (new cljs.core.LazySeq(null,((function (vec__29332,i,xs,errs){
return (function (){
var s__29336__$1 = s__29336;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29336__$1);
if(temp__4657__auto__){
var s__29336__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29336__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__29336__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__29338 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__29337 = (0);
while(true){
if((i__29337 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__29337);
cljs.core.chunk_append.call(null,b__29338,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-cell"], null),x], null)], null));

var G__29343 = (i__29337 + (1));
i__29337 = G__29343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29338),gauss_seidel$core$row_$_iter__29335.call(null,cljs.core.chunk_rest.call(null,s__29336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29338),null);
}
} else {
var x = cljs.core.first.call(null,s__29336__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-cell"], null),x], null)], null),gauss_seidel$core$row_$_iter__29335.call(null,cljs.core.rest.call(null,s__29336__$2)));
}
} else {
return null;
}
break;
}
});})(vec__29332,i,xs,errs))
,null,null));
});})(vec__29332,i,xs,errs))
;
return iter__25628__auto__.call(null,xs);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__25628__auto__ = ((function (vec__29332,i,xs,errs){
return (function gauss_seidel$core$row_$_iter__29339(s__29340){
return (new cljs.core.LazySeq(null,((function (vec__29332,i,xs,errs){
return (function (){
var s__29340__$1 = s__29340;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29340__$1);
if(temp__4657__auto__){
var s__29340__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29340__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__29340__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__29342 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__29341 = (0);
while(true){
if((i__29341 < size__25627__auto__)){
var err = cljs.core._nth.call(null,c__25626__auto__,i__29341);
cljs.core.chunk_append.call(null,b__29342,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-cell"], null),err], null)], null));

var G__29344 = (i__29341 + (1));
i__29341 = G__29344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29342),gauss_seidel$core$row_$_iter__29339.call(null,cljs.core.chunk_rest.call(null,s__29340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29342),null);
}
} else {
var err = cljs.core.first.call(null,s__29340__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nested-cell"], null),err], null)], null),gauss_seidel$core$row_$_iter__29339.call(null,cljs.core.rest.call(null,s__29340__$2)));
}
} else {
return null;
}
break;
}
});})(vec__29332,i,xs,errs))
,null,null));
});})(vec__29332,i,xs,errs))
;
return iter__25628__auto__.call(null,errs);
})()], null)], null)], null)], null);
});
gauss_seidel.core.table = (function gauss_seidel$core$table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table is-striped"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__25628__auto__ = (function gauss_seidel$core$table_$_iter__29349(s__29350){
return (new cljs.core.LazySeq(null,(function (){
var s__29350__$1 = s__29350;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29350__$1);
if(temp__4657__auto__){
var s__29350__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29350__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__29350__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__29352 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__29351 = (0);
while(true){
if((i__29351 < size__25627__auto__)){
var col = cljs.core._nth.call(null,c__25626__auto__,i__29351);
cljs.core.chunk_append.call(null,b__29352,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col], null));

var G__29353 = (i__29351 + (1));
i__29351 = G__29353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29352),gauss_seidel$core$table_$_iter__29349.call(null,cljs.core.chunk_rest.call(null,s__29350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29352),null);
}
} else {
var col = cljs.core.first.call(null,s__29350__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col], null),gauss_seidel$core$table_$_iter__29349.call(null,cljs.core.rest.call(null,s__29350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Iteration","Values of x\u2099","Errors of x\u2099"], null));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,gauss_seidel.core.row,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.core.state)))], null)], null)], null);
});
gauss_seidel.core.equation_list = (function gauss_seidel$core$equation_list(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card eq-list"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header-title"], null),"Equation List"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-content"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"welcome"], null),"The following equations will go through a solving-attempt process, bear in mind that the equation system may or may not have a solution:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function gauss_seidel$core$equation_list_$_iter__29358(s__29359){
return (new cljs.core.LazySeq(null,(function (){
var s__29359__$1 = s__29359;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29359__$1);
if(temp__4657__auto__){
var s__29359__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29359__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__29359__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__29361 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__29360 = (0);
while(true){
if((i__29360 < size__25627__auto__)){
var equation = cljs.core._nth.call(null,c__25626__auto__,i__29360);
cljs.core.chunk_append.call(null,b__29361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),equation], null));

var G__29362 = (i__29360 + (1));
i__29360 = G__29362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29361),gauss_seidel$core$equation_list_$_iter__29358.call(null,cljs.core.chunk_rest.call(null,s__29359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29361),null);
}
} else {
var equation = cljs.core.first.call(null,s__29359__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),equation], null),gauss_seidel$core$equation_list_$_iter__29358.call(null,cljs.core.rest.call(null,s__29359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,new cljs.core.Keyword(null,"equations","equations",1884238648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.core.state)));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.core.show_solution], null),"Solve System"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.core.clear_system], null),"Clear System"], null)], null)], null);
});
gauss_seidel.core.sidebar = (function gauss_seidel$core$sidebar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-one-third"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field has-addons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type in a valid equation",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"id","id",-1388402092),"eq",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.core.add_equation], null),"Add to system"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"label"], null),[cljs.core.str("Current maximum error: "),cljs.core.str(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gauss_seidel.core.state)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field has-addons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type in a valid tolerance",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"id","id",-1388402092),"err",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),gauss_seidel.core.update_error], null),"Update"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.core.equation_list], null)], null);
});
gauss_seidel.core.app = (function gauss_seidel$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"columns"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.core.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.core.table], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gauss_seidel.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1489688761985