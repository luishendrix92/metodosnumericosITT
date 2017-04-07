// Compiled by ClojureScript 1.9.229 {}
goog.provide('trapecio.sidebar');
goog.require('cljs.core');
goog.require('trapecio.method');
trapecio.sidebar.parse_val = (function trapecio$sidebar$parse_val(query){
return parseFloat(document.querySelector(query).value);
});
trapecio.sidebar.update_state = (function trapecio$sidebar$update_state(state){
return (function (event){
var start = trapecio.sidebar.parse_val.call(null,".a");
var end = trapecio.sidebar.parse_val.call(null,".b");
var n_seg = trapecio.sidebar.parse_val.call(null,".n");
return cljs.core.reset_BANG_.call(null,state,trapecio.method.solve_integral.call(null,start,end,n_seg));
});
});
trapecio.sidebar.put_defaults = (function trapecio$sidebar$put_defaults(event){
document.querySelector(".a").value = "0";

document.querySelector(".b").value = "0.8";

return document.querySelector(".n").value = "2";
});
trapecio.sidebar.sidebar = (function trapecio$sidebar$sidebar(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane-sm.sidebar","div.pane-sm.sidebar",908082288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Number of segments"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.n","input.form-control.n",1029899646),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"2",new cljs.core.Keyword(null,"max","max",61366548),"1000",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"From 2 to 1000"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start (a)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.a","input.form-control.a",1527560659),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First x axis value"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"End (b)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.b","input.form-control.b",-2091479545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Last x axis value"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-form.btn-default","button.btn.btn-form.btn-default",-1997823501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),trapecio.sidebar.put_defaults], null),"Defaults"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-form.btn-primary","button.btn.btn-form.btn-primary",-1166548466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),trapecio.sidebar.update_state.call(null,state)], null),"Integrate"], null)], null)], null);
});

//# sourceMappingURL=sidebar.js.map?rel=1491543898993