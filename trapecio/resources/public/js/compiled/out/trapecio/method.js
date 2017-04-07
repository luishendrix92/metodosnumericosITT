// Compiled by ClojureScript 1.9.229 {}
goog.provide('trapecio.method');
goog.require('cljs.core');
trapecio.method.original_func = (function trapecio$method$original_func(x){
return (((((0.2 + ((25) * x)) + ((-200) * Math.pow(x,(2)))) + ((675) * Math.pow(x,(3)))) + ((-900) * Math.pow(x,(4)))) + ((400) * Math.pow(x,(5))));
});
trapecio.method.integrated_func = (function trapecio$method$integrated_func(x){
return ((((((0.2 * x) + ((25) * (Math.pow(x,(2)) / (2)))) + ((-200) * (Math.pow(x,(3)) / (3)))) + ((675) * (Math.pow(x,(4)) / (4)))) + ((-900) * (Math.pow(x,(5)) / (5)))) + ((400) * (Math.pow(x,(6)) / (6))));
});
trapecio.method.eval_integral = (function trapecio$method$eval_integral(integral,a,b){
return (integral.call(null,b) - integral.call(null,a));
});
trapecio.method.solve_integral = (function trapecio$method$solve_integral(a,b,n){
var f = trapecio.method.original_func;
var h = ((b - a) / n);
var real = trapecio.method.eval_integral.call(null,trapecio.method.integrated_func,a,b);
var segments = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,f,cljs.core.partial.call(null,cljs.core._PLUS_,a),cljs.core.partial.call(null,cljs.core._STAR_,h)),cljs.core.range.call(null,(0),(n + (1)))));
var first_sg = cljs.core.first.call(null,segments);
var last_sg = cljs.core.peek.call(null,segments);
var sum_segs = ((cljs.core.reduce.call(null,cljs.core._PLUS_,segments) - first_sg) - last_sg);
var solution = ((b - a) * (((first_sg + ((2) * sum_segs)) + last_sg) / ((2) * n)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),(real - solution),new cljs.core.Keyword(null,"real-integral","real-integral",-313552774),real,new cljs.core.Keyword(null,"integral","integral",-1457739723),solution,new cljs.core.Keyword(null,"segments","segments",1937535949),segments], null);
});

//# sourceMappingURL=method.js.map?rel=1491543898817