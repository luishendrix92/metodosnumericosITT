// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.core');
goog.require('cljs.core');
goog.require('gauss_seidel.parser');
goog.require('gauss_seidel.system');
goog.require('gauss_seidel.solver');
goog.require('gauss_seidel.helpers');
cljs.core.enable_console_print_BANG_.call(null);
gauss_seidel.core.samples = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3x - 0.1y - 0.2z = 7.85","0.3x - 0.2y + 10z = 71.4","0.1x + 7y - 0.3z = -19.3"], null);
gauss_seidel.core.diago = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comps","comps",1108881715),cljs.core.list((3),-0.1,-0.2),new cljs.core.Keyword(null,"indep","indep",884656315),7.85], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comps","comps",1108881715),cljs.core.list(0.1,(7),-0.3),new cljs.core.Keyword(null,"indep","indep",884656315),-19.3], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comps","comps",1108881715),cljs.core.list(0.3,-0.2,(10)),new cljs.core.Keyword(null,"indep","indep",884656315),71.4], null)], null);
cljs.core.println.call(null,gauss_seidel.solver.solve_system.call(null,0.01,gauss_seidel.system.make_diagonal.call(null,cljs.core.map.call(null,gauss_seidel.parser.parse_eq,gauss_seidel.core.samples))));

//# sourceMappingURL=core.js.map?rel=1489562936067