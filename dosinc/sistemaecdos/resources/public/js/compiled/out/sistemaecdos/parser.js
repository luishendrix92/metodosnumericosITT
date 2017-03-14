// Compiled by ClojureScript 1.9.229 {}
goog.provide('sistemaecdos.parser');
goog.require('cljs.core');
goog.require('clojure.string');
sistemaecdos.parser.whitespace = /\s+/;
sistemaecdos.parser.eq_pattern = /(\-?\d*)(?:x|a)([\+\-]?\d*)(?:y|b)=(\d+)/;
sistemaecdos.parser.parse_num = (function sistemaecdos$parser$parse_num(num_str){
var G__61861 = num_str;
switch (G__61861) {
case "":
return (1);

break;
case "+":
return (1);

break;
case "-":
return (-1);

break;
default:
return parseInt(num_str);

}
});
sistemaecdos.parser.parse_eq = (function sistemaecdos$parser$parse_eq(eq_str){
var str_clean = clojure.string.replace.call(null,eq_str,sistemaecdos.parser.whitespace,"");
var vec__61866 = cljs.core.map.call(null,sistemaecdos.parser.parse_num,cljs.core.first.call(null,cljs.core.re_seq.call(null,sistemaecdos.parser.eq_pattern,str_clean)));
var _ = cljs.core.nth.call(null,vec__61866,(0),null);
var x = cljs.core.nth.call(null,vec__61866,(1),null);
var y = cljs.core.nth.call(null,vec__61866,(2),null);
var c = cljs.core.nth.call(null,vec__61866,(3),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"c","c",-1763192079),c], null);
});

//# sourceMappingURL=parser.js.map?rel=1489472407383