// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__24848__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26652 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_26652){
return (function (){
var _STAR_always_update_STAR_26653 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26653;
}});})(_STAR_always_update_STAR_26652))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26652;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args26654 = [];
var len__25923__auto___26657 = arguments.length;
var i__25924__auto___26658 = (0);
while(true){
if((i__25924__auto___26658 < len__25923__auto___26657)){
args26654.push((arguments[i__25924__auto___26658]));

var G__26659 = (i__25924__auto___26658 + (1));
i__25924__auto___26658 = G__26659;
continue;
} else {
}
break;
}

var G__26656 = args26654.length;
switch (G__26656) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26654.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__26665_26669 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26666_26670 = null;
var count__26667_26671 = (0);
var i__26668_26672 = (0);
while(true){
if((i__26668_26672 < count__26667_26671)){
var v_26673 = cljs.core._nth.call(null,chunk__26666_26670,i__26668_26672);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26673);

var G__26674 = seq__26665_26669;
var G__26675 = chunk__26666_26670;
var G__26676 = count__26667_26671;
var G__26677 = (i__26668_26672 + (1));
seq__26665_26669 = G__26674;
chunk__26666_26670 = G__26675;
count__26667_26671 = G__26676;
i__26668_26672 = G__26677;
continue;
} else {
var temp__4657__auto___26678 = cljs.core.seq.call(null,seq__26665_26669);
if(temp__4657__auto___26678){
var seq__26665_26679__$1 = temp__4657__auto___26678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26665_26679__$1)){
var c__25659__auto___26680 = cljs.core.chunk_first.call(null,seq__26665_26679__$1);
var G__26681 = cljs.core.chunk_rest.call(null,seq__26665_26679__$1);
var G__26682 = c__25659__auto___26680;
var G__26683 = cljs.core.count.call(null,c__25659__auto___26680);
var G__26684 = (0);
seq__26665_26669 = G__26681;
chunk__26666_26670 = G__26682;
count__26667_26671 = G__26683;
i__26668_26672 = G__26684;
continue;
} else {
var v_26685 = cljs.core.first.call(null,seq__26665_26679__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26685);

var G__26686 = cljs.core.next.call(null,seq__26665_26679__$1);
var G__26687 = null;
var G__26688 = (0);
var G__26689 = (0);
seq__26665_26669 = G__26686;
chunk__26666_26670 = G__26687;
count__26667_26671 = G__26688;
i__26668_26672 = G__26689;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1489628677092