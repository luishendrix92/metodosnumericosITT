// Compiled by ClojureScript 1.9.229 {}
goog.provide('gauss_seidel.core');
goog.require('cljs.core');
goog.require('gauss_seidel.parser');
goog.require('gauss_seidel.system');
cljs.core.enable_console_print_BANG_.call(null);
gauss_seidel.core.samples = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3x - 0.1y - 0.2z = 7.85","0.3x - 0.2y + 10z = 71.4","0.1x + 7y - 0.3z = -19.3"], null);
cljs.core.println.call(null,gauss_seidel.system.make_diagonal.call(null,cljs.core.map.call(null,gauss_seidel.parser.parse_eq,gauss_seidel.core.samples)));

//# sourceMappingURL=core.js.map?rel=1489525248430