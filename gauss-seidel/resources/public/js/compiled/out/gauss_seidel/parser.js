// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.parser');
goog.require('cljs.core');
goog.require('clojure.string');
gauss_seidel.parser.comp_pattern = /(\-?\d+(?:\.\d+)?)[a-zA-Z]/;
gauss_seidel.parser.indep_pattern = /=(\-?\d+(?:\.\d+)?)$/;
gauss_seidel.parser.whitespace = /\s+/;
gauss_seidel.parser.parse_eq = (function gauss_seidel$parser$parse_eq(eq_str){
var str_clean = clojure.string.replace.call(null,eq_str,gauss_seidel.parser.whitespace,"");
var indep = cljs.core.re_find.call(null,gauss_seidel.parser.indep_pattern,str_clean);
var vec__30192 = cljs.core.map.call(null,cljs.core.comp.call(null,parseFloat,cljs.core.last),cljs.core.cons.call(null,indep,cljs.core.re_seq.call(null,gauss_seidel.parser.comp_pattern,str_clean)));
var seq__30193 = cljs.core.seq.call(null,vec__30192);
var first__30194 = cljs.core.first.call(null,seq__30193);
var seq__30193__$1 = cljs.core.next.call(null,seq__30193);
var c = first__30194;
var xn = seq__30193__$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comps","comps",1108881715),xn,new cljs.core.Keyword(null,"indep","indep",884656315),c], null);
});

//# sourceMappingURL=parser.js.map?rel=1489693394171