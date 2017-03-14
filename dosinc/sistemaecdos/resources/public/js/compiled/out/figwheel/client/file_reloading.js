// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24848__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24848__auto__){
return or__24848__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24848__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54644_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54644_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__54649 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54650 = null;
var count__54651 = (0);
var i__54652 = (0);
while(true){
if((i__54652 < count__54651)){
var n = cljs.core._nth.call(null,chunk__54650,i__54652);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54653 = seq__54649;
var G__54654 = chunk__54650;
var G__54655 = count__54651;
var G__54656 = (i__54652 + (1));
seq__54649 = G__54653;
chunk__54650 = G__54654;
count__54651 = G__54655;
i__54652 = G__54656;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54649);
if(temp__4657__auto__){
var seq__54649__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54649__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__54649__$1);
var G__54657 = cljs.core.chunk_rest.call(null,seq__54649__$1);
var G__54658 = c__25659__auto__;
var G__54659 = cljs.core.count.call(null,c__25659__auto__);
var G__54660 = (0);
seq__54649 = G__54657;
chunk__54650 = G__54658;
count__54651 = G__54659;
i__54652 = G__54660;
continue;
} else {
var n = cljs.core.first.call(null,seq__54649__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54661 = cljs.core.next.call(null,seq__54649__$1);
var G__54662 = null;
var G__54663 = (0);
var G__54664 = (0);
seq__54649 = G__54661;
chunk__54650 = G__54662;
count__54651 = G__54663;
i__54652 = G__54664;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__54715_54726 = cljs.core.seq.call(null,deps);
var chunk__54716_54727 = null;
var count__54717_54728 = (0);
var i__54718_54729 = (0);
while(true){
if((i__54718_54729 < count__54717_54728)){
var dep_54730 = cljs.core._nth.call(null,chunk__54716_54727,i__54718_54729);
topo_sort_helper_STAR_.call(null,dep_54730,(depth + (1)),state);

var G__54731 = seq__54715_54726;
var G__54732 = chunk__54716_54727;
var G__54733 = count__54717_54728;
var G__54734 = (i__54718_54729 + (1));
seq__54715_54726 = G__54731;
chunk__54716_54727 = G__54732;
count__54717_54728 = G__54733;
i__54718_54729 = G__54734;
continue;
} else {
var temp__4657__auto___54735 = cljs.core.seq.call(null,seq__54715_54726);
if(temp__4657__auto___54735){
var seq__54715_54736__$1 = temp__4657__auto___54735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54715_54736__$1)){
var c__25659__auto___54737 = cljs.core.chunk_first.call(null,seq__54715_54736__$1);
var G__54738 = cljs.core.chunk_rest.call(null,seq__54715_54736__$1);
var G__54739 = c__25659__auto___54737;
var G__54740 = cljs.core.count.call(null,c__25659__auto___54737);
var G__54741 = (0);
seq__54715_54726 = G__54738;
chunk__54716_54727 = G__54739;
count__54717_54728 = G__54740;
i__54718_54729 = G__54741;
continue;
} else {
var dep_54742 = cljs.core.first.call(null,seq__54715_54736__$1);
topo_sort_helper_STAR_.call(null,dep_54742,(depth + (1)),state);

var G__54743 = cljs.core.next.call(null,seq__54715_54736__$1);
var G__54744 = null;
var G__54745 = (0);
var G__54746 = (0);
seq__54715_54726 = G__54743;
chunk__54716_54727 = G__54744;
count__54717_54728 = G__54745;
i__54718_54729 = G__54746;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54719){
var vec__54723 = p__54719;
var seq__54724 = cljs.core.seq.call(null,vec__54723);
var first__54725 = cljs.core.first.call(null,seq__54724);
var seq__54724__$1 = cljs.core.next.call(null,seq__54724);
var x = first__54725;
var xs = seq__54724__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54723,seq__54724,first__54725,seq__54724__$1,x,xs,get_deps__$1){
return (function (p1__54665_SHARP_){
return clojure.set.difference.call(null,p1__54665_SHARP_,x);
});})(vec__54723,seq__54724,first__54725,seq__54724__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__54759 = cljs.core.seq.call(null,provides);
var chunk__54760 = null;
var count__54761 = (0);
var i__54762 = (0);
while(true){
if((i__54762 < count__54761)){
var prov = cljs.core._nth.call(null,chunk__54760,i__54762);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54763_54771 = cljs.core.seq.call(null,requires);
var chunk__54764_54772 = null;
var count__54765_54773 = (0);
var i__54766_54774 = (0);
while(true){
if((i__54766_54774 < count__54765_54773)){
var req_54775 = cljs.core._nth.call(null,chunk__54764_54772,i__54766_54774);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54775,prov);

var G__54776 = seq__54763_54771;
var G__54777 = chunk__54764_54772;
var G__54778 = count__54765_54773;
var G__54779 = (i__54766_54774 + (1));
seq__54763_54771 = G__54776;
chunk__54764_54772 = G__54777;
count__54765_54773 = G__54778;
i__54766_54774 = G__54779;
continue;
} else {
var temp__4657__auto___54780 = cljs.core.seq.call(null,seq__54763_54771);
if(temp__4657__auto___54780){
var seq__54763_54781__$1 = temp__4657__auto___54780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54763_54781__$1)){
var c__25659__auto___54782 = cljs.core.chunk_first.call(null,seq__54763_54781__$1);
var G__54783 = cljs.core.chunk_rest.call(null,seq__54763_54781__$1);
var G__54784 = c__25659__auto___54782;
var G__54785 = cljs.core.count.call(null,c__25659__auto___54782);
var G__54786 = (0);
seq__54763_54771 = G__54783;
chunk__54764_54772 = G__54784;
count__54765_54773 = G__54785;
i__54766_54774 = G__54786;
continue;
} else {
var req_54787 = cljs.core.first.call(null,seq__54763_54781__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54787,prov);

var G__54788 = cljs.core.next.call(null,seq__54763_54781__$1);
var G__54789 = null;
var G__54790 = (0);
var G__54791 = (0);
seq__54763_54771 = G__54788;
chunk__54764_54772 = G__54789;
count__54765_54773 = G__54790;
i__54766_54774 = G__54791;
continue;
}
} else {
}
}
break;
}

var G__54792 = seq__54759;
var G__54793 = chunk__54760;
var G__54794 = count__54761;
var G__54795 = (i__54762 + (1));
seq__54759 = G__54792;
chunk__54760 = G__54793;
count__54761 = G__54794;
i__54762 = G__54795;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54759);
if(temp__4657__auto__){
var seq__54759__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54759__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__54759__$1);
var G__54796 = cljs.core.chunk_rest.call(null,seq__54759__$1);
var G__54797 = c__25659__auto__;
var G__54798 = cljs.core.count.call(null,c__25659__auto__);
var G__54799 = (0);
seq__54759 = G__54796;
chunk__54760 = G__54797;
count__54761 = G__54798;
i__54762 = G__54799;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54759__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54767_54800 = cljs.core.seq.call(null,requires);
var chunk__54768_54801 = null;
var count__54769_54802 = (0);
var i__54770_54803 = (0);
while(true){
if((i__54770_54803 < count__54769_54802)){
var req_54804 = cljs.core._nth.call(null,chunk__54768_54801,i__54770_54803);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54804,prov);

var G__54805 = seq__54767_54800;
var G__54806 = chunk__54768_54801;
var G__54807 = count__54769_54802;
var G__54808 = (i__54770_54803 + (1));
seq__54767_54800 = G__54805;
chunk__54768_54801 = G__54806;
count__54769_54802 = G__54807;
i__54770_54803 = G__54808;
continue;
} else {
var temp__4657__auto___54809__$1 = cljs.core.seq.call(null,seq__54767_54800);
if(temp__4657__auto___54809__$1){
var seq__54767_54810__$1 = temp__4657__auto___54809__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54767_54810__$1)){
var c__25659__auto___54811 = cljs.core.chunk_first.call(null,seq__54767_54810__$1);
var G__54812 = cljs.core.chunk_rest.call(null,seq__54767_54810__$1);
var G__54813 = c__25659__auto___54811;
var G__54814 = cljs.core.count.call(null,c__25659__auto___54811);
var G__54815 = (0);
seq__54767_54800 = G__54812;
chunk__54768_54801 = G__54813;
count__54769_54802 = G__54814;
i__54770_54803 = G__54815;
continue;
} else {
var req_54816 = cljs.core.first.call(null,seq__54767_54810__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54816,prov);

var G__54817 = cljs.core.next.call(null,seq__54767_54810__$1);
var G__54818 = null;
var G__54819 = (0);
var G__54820 = (0);
seq__54767_54800 = G__54817;
chunk__54768_54801 = G__54818;
count__54769_54802 = G__54819;
i__54770_54803 = G__54820;
continue;
}
} else {
}
}
break;
}

var G__54821 = cljs.core.next.call(null,seq__54759__$1);
var G__54822 = null;
var G__54823 = (0);
var G__54824 = (0);
seq__54759 = G__54821;
chunk__54760 = G__54822;
count__54761 = G__54823;
i__54762 = G__54824;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__54829_54833 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54830_54834 = null;
var count__54831_54835 = (0);
var i__54832_54836 = (0);
while(true){
if((i__54832_54836 < count__54831_54835)){
var ns_54837 = cljs.core._nth.call(null,chunk__54830_54834,i__54832_54836);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54837);

var G__54838 = seq__54829_54833;
var G__54839 = chunk__54830_54834;
var G__54840 = count__54831_54835;
var G__54841 = (i__54832_54836 + (1));
seq__54829_54833 = G__54838;
chunk__54830_54834 = G__54839;
count__54831_54835 = G__54840;
i__54832_54836 = G__54841;
continue;
} else {
var temp__4657__auto___54842 = cljs.core.seq.call(null,seq__54829_54833);
if(temp__4657__auto___54842){
var seq__54829_54843__$1 = temp__4657__auto___54842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54829_54843__$1)){
var c__25659__auto___54844 = cljs.core.chunk_first.call(null,seq__54829_54843__$1);
var G__54845 = cljs.core.chunk_rest.call(null,seq__54829_54843__$1);
var G__54846 = c__25659__auto___54844;
var G__54847 = cljs.core.count.call(null,c__25659__auto___54844);
var G__54848 = (0);
seq__54829_54833 = G__54845;
chunk__54830_54834 = G__54846;
count__54831_54835 = G__54847;
i__54832_54836 = G__54848;
continue;
} else {
var ns_54849 = cljs.core.first.call(null,seq__54829_54843__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54849);

var G__54850 = cljs.core.next.call(null,seq__54829_54843__$1);
var G__54851 = null;
var G__54852 = (0);
var G__54853 = (0);
seq__54829_54833 = G__54850;
chunk__54830_54834 = G__54851;
count__54831_54835 = G__54852;
i__54832_54836 = G__54853;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24848__auto__ = goog.require__;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__54854__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54855__i = 0, G__54855__a = new Array(arguments.length -  0);
while (G__54855__i < G__54855__a.length) {G__54855__a[G__54855__i] = arguments[G__54855__i + 0]; ++G__54855__i;}
  args = new cljs.core.IndexedSeq(G__54855__a,0);
} 
return G__54854__delegate.call(this,args);};
G__54854.cljs$lang$maxFixedArity = 0;
G__54854.cljs$lang$applyTo = (function (arglist__54856){
var args = cljs.core.seq(arglist__54856);
return G__54854__delegate(args);
});
G__54854.cljs$core$IFn$_invoke$arity$variadic = G__54854__delegate;
return G__54854;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54857 = cljs.core._EQ_;
var expr__54858 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54857.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__54858))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__54857,expr__54858){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__54857,expr__54858))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__54857,expr__54858){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e54860){if((e54860 instanceof Error)){
var e = e54860;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54860;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__54857,expr__54858))
} else {
if(cljs.core.truth_(pred__54857.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__54858))){
return ((function (pred__54857,expr__54858){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__54857,expr__54858){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__54857,expr__54858))
);

return deferred.addErrback(((function (deferred,pred__54857,expr__54858){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__54857,expr__54858))
);
});
;})(pred__54857,expr__54858))
} else {
if(cljs.core.truth_(pred__54857.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__54858))){
return ((function (pred__54857,expr__54858){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e54861){if((e54861 instanceof Error)){
var e = e54861;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54861;

}
}})());
});
;})(pred__54857,expr__54858))
} else {
return ((function (pred__54857,expr__54858){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__54857,expr__54858))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54862,callback){
var map__54865 = p__54862;
var map__54865__$1 = ((((!((map__54865 == null)))?((((map__54865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54865):map__54865);
var file_msg = map__54865__$1;
var request_url = cljs.core.get.call(null,map__54865__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__54865,map__54865__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54865,map__54865__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__){
return (function (state_54889){
var state_val_54890 = (state_54889[(1)]);
if((state_val_54890 === (7))){
var inst_54885 = (state_54889[(2)]);
var state_54889__$1 = state_54889;
var statearr_54891_54911 = state_54889__$1;
(statearr_54891_54911[(2)] = inst_54885);

(statearr_54891_54911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54890 === (1))){
var state_54889__$1 = state_54889;
var statearr_54892_54912 = state_54889__$1;
(statearr_54892_54912[(2)] = null);

(statearr_54892_54912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54890 === (4))){
var inst_54869 = (state_54889[(7)]);
var inst_54869__$1 = (state_54889[(2)]);
var state_54889__$1 = (function (){var statearr_54893 = state_54889;
(statearr_54893[(7)] = inst_54869__$1);

return statearr_54893;
})();
if(cljs.core.truth_(inst_54869__$1)){
var statearr_54894_54913 = state_54889__$1;
(statearr_54894_54913[(1)] = (5));

} else {
var statearr_54895_54914 = state_54889__$1;
(statearr_54895_54914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54890 === (6))){
var state_54889__$1 = state_54889;
var statearr_54896_54915 = state_54889__$1;
(statearr_54896_54915[(2)] = null);

(statearr_54896_54915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54890 === (3))){
var inst_54887 = (state_54889[(2)]);
var state_54889__$1 = state_54889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54889__$1,inst_54887);
} else {
if((state_val_54890 === (2))){
var state_54889__$1 = state_54889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54889__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54890 === (11))){
var inst_54881 = (state_54889[(2)]);
var state_54889__$1 = (function (){var statearr_54897 = state_54889;
(statearr_54897[(8)] = inst_54881);

return statearr_54897;
})();
var statearr_54898_54916 = state_54889__$1;
(statearr_54898_54916[(2)] = null);

(statearr_54898_54916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54890 === (9))){
var inst_54873 = (state_54889[(9)]);
var inst_54875 = (state_54889[(10)]);
var inst_54877 = inst_54875.call(null,inst_54873);
var state_54889__$1 = state_54889;
var statearr_54899_54917 = state_54889__$1;
(statearr_54899_54917[(2)] = inst_54877);

(statearr_54899_54917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54890 === (5))){
var inst_54869 = (state_54889[(7)]);
var inst_54871 = figwheel.client.file_reloading.blocking_load.call(null,inst_54869);
var state_54889__$1 = state_54889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54889__$1,(8),inst_54871);
} else {
if((state_val_54890 === (10))){
var inst_54873 = (state_54889[(9)]);
var inst_54879 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54873);
var state_54889__$1 = state_54889;
var statearr_54900_54918 = state_54889__$1;
(statearr_54900_54918[(2)] = inst_54879);

(statearr_54900_54918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54890 === (8))){
var inst_54869 = (state_54889[(7)]);
var inst_54875 = (state_54889[(10)]);
var inst_54873 = (state_54889[(2)]);
var inst_54874 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54875__$1 = cljs.core.get.call(null,inst_54874,inst_54869);
var state_54889__$1 = (function (){var statearr_54901 = state_54889;
(statearr_54901[(9)] = inst_54873);

(statearr_54901[(10)] = inst_54875__$1);

return statearr_54901;
})();
if(cljs.core.truth_(inst_54875__$1)){
var statearr_54902_54919 = state_54889__$1;
(statearr_54902_54919[(1)] = (9));

} else {
var statearr_54903_54920 = state_54889__$1;
(statearr_54903_54920[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27022__auto__))
;
return ((function (switch__26910__auto__,c__27022__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26911__auto__ = null;
var figwheel$client$file_reloading$state_machine__26911__auto____0 = (function (){
var statearr_54907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54907[(0)] = figwheel$client$file_reloading$state_machine__26911__auto__);

(statearr_54907[(1)] = (1));

return statearr_54907;
});
var figwheel$client$file_reloading$state_machine__26911__auto____1 = (function (state_54889){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_54889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e54908){if((e54908 instanceof Object)){
var ex__26914__auto__ = e54908;
var statearr_54909_54921 = state_54889;
(statearr_54909_54921[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54922 = state_54889;
state_54889 = G__54922;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26911__auto__ = function(state_54889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26911__auto____1.call(this,state_54889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26911__auto____0;
figwheel$client$file_reloading$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26911__auto____1;
return figwheel$client$file_reloading$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_54910 = f__27023__auto__.call(null);
(statearr_54910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_54910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__))
);

return c__27022__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54923,callback){
var map__54926 = p__54923;
var map__54926__$1 = ((((!((map__54926 == null)))?((((map__54926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54926):map__54926);
var file_msg = map__54926__$1;
var namespace = cljs.core.get.call(null,map__54926__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54926,map__54926__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__54926,map__54926__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__54928){
var map__54931 = p__54928;
var map__54931__$1 = ((((!((map__54931 == null)))?((((map__54931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54931):map__54931);
var file_msg = map__54931__$1;
var namespace = cljs.core.get.call(null,map__54931__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54933){
var map__54936 = p__54933;
var map__54936__$1 = ((((!((map__54936 == null)))?((((map__54936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54936):map__54936);
var file_msg = map__54936__$1;
var namespace = cljs.core.get.call(null,map__54936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24836__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24836__auto__){
var or__24848__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto____$1)){
return or__24848__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24836__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54938,callback){
var map__54941 = p__54938;
var map__54941__$1 = ((((!((map__54941 == null)))?((((map__54941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54941):map__54941);
var file_msg = map__54941__$1;
var request_url = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27022__auto___55045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___55045,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___55045,out){
return (function (state_55027){
var state_val_55028 = (state_55027[(1)]);
if((state_val_55028 === (1))){
var inst_55001 = cljs.core.seq.call(null,files);
var inst_55002 = cljs.core.first.call(null,inst_55001);
var inst_55003 = cljs.core.next.call(null,inst_55001);
var inst_55004 = files;
var state_55027__$1 = (function (){var statearr_55029 = state_55027;
(statearr_55029[(7)] = inst_55002);

(statearr_55029[(8)] = inst_55004);

(statearr_55029[(9)] = inst_55003);

return statearr_55029;
})();
var statearr_55030_55046 = state_55027__$1;
(statearr_55030_55046[(2)] = null);

(statearr_55030_55046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55028 === (2))){
var inst_55010 = (state_55027[(10)]);
var inst_55004 = (state_55027[(8)]);
var inst_55009 = cljs.core.seq.call(null,inst_55004);
var inst_55010__$1 = cljs.core.first.call(null,inst_55009);
var inst_55011 = cljs.core.next.call(null,inst_55009);
var inst_55012 = (inst_55010__$1 == null);
var inst_55013 = cljs.core.not.call(null,inst_55012);
var state_55027__$1 = (function (){var statearr_55031 = state_55027;
(statearr_55031[(10)] = inst_55010__$1);

(statearr_55031[(11)] = inst_55011);

return statearr_55031;
})();
if(inst_55013){
var statearr_55032_55047 = state_55027__$1;
(statearr_55032_55047[(1)] = (4));

} else {
var statearr_55033_55048 = state_55027__$1;
(statearr_55033_55048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55028 === (3))){
var inst_55025 = (state_55027[(2)]);
var state_55027__$1 = state_55027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55027__$1,inst_55025);
} else {
if((state_val_55028 === (4))){
var inst_55010 = (state_55027[(10)]);
var inst_55015 = figwheel.client.file_reloading.reload_js_file.call(null,inst_55010);
var state_55027__$1 = state_55027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55027__$1,(7),inst_55015);
} else {
if((state_val_55028 === (5))){
var inst_55021 = cljs.core.async.close_BANG_.call(null,out);
var state_55027__$1 = state_55027;
var statearr_55034_55049 = state_55027__$1;
(statearr_55034_55049[(2)] = inst_55021);

(statearr_55034_55049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55028 === (6))){
var inst_55023 = (state_55027[(2)]);
var state_55027__$1 = state_55027;
var statearr_55035_55050 = state_55027__$1;
(statearr_55035_55050[(2)] = inst_55023);

(statearr_55035_55050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55028 === (7))){
var inst_55011 = (state_55027[(11)]);
var inst_55017 = (state_55027[(2)]);
var inst_55018 = cljs.core.async.put_BANG_.call(null,out,inst_55017);
var inst_55004 = inst_55011;
var state_55027__$1 = (function (){var statearr_55036 = state_55027;
(statearr_55036[(12)] = inst_55018);

(statearr_55036[(8)] = inst_55004);

return statearr_55036;
})();
var statearr_55037_55051 = state_55027__$1;
(statearr_55037_55051[(2)] = null);

(statearr_55037_55051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27022__auto___55045,out))
;
return ((function (switch__26910__auto__,c__27022__auto___55045,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____0 = (function (){
var statearr_55041 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55041[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__);

(statearr_55041[(1)] = (1));

return statearr_55041;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____1 = (function (state_55027){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_55027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e55042){if((e55042 instanceof Object)){
var ex__26914__auto__ = e55042;
var statearr_55043_55052 = state_55027;
(statearr_55043_55052[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55053 = state_55027;
state_55027 = G__55053;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__ = function(state_55027){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____1.call(this,state_55027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___55045,out))
})();
var state__27024__auto__ = (function (){var statearr_55044 = f__27023__auto__.call(null);
(statearr_55044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___55045);

return statearr_55044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___55045,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__55054,opts){
var map__55058 = p__55054;
var map__55058__$1 = ((((!((map__55058 == null)))?((((map__55058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55058):map__55058);
var eval_body__$1 = cljs.core.get.call(null,map__55058__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__55058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24836__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24836__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24836__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e55060){var e = e55060;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__55061_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55061_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__55070){
var vec__55071 = p__55070;
var k = cljs.core.nth.call(null,vec__55071,(0),null);
var v = cljs.core.nth.call(null,vec__55071,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__55074){
var vec__55075 = p__55074;
var k = cljs.core.nth.call(null,vec__55075,(0),null);
var v = cljs.core.nth.call(null,vec__55075,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__55081,p__55082){
var map__55329 = p__55081;
var map__55329__$1 = ((((!((map__55329 == null)))?((((map__55329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55329):map__55329);
var opts = map__55329__$1;
var before_jsload = cljs.core.get.call(null,map__55329__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__55329__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__55329__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__55330 = p__55082;
var map__55330__$1 = ((((!((map__55330 == null)))?((((map__55330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55330):map__55330);
var msg = map__55330__$1;
var files = cljs.core.get.call(null,map__55330__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__55330__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__55330__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55483){
var state_val_55484 = (state_55483[(1)]);
if((state_val_55484 === (7))){
var inst_55345 = (state_55483[(7)]);
var inst_55346 = (state_55483[(8)]);
var inst_55347 = (state_55483[(9)]);
var inst_55344 = (state_55483[(10)]);
var inst_55352 = cljs.core._nth.call(null,inst_55345,inst_55347);
var inst_55353 = figwheel.client.file_reloading.eval_body.call(null,inst_55352,opts);
var inst_55354 = (inst_55347 + (1));
var tmp55485 = inst_55345;
var tmp55486 = inst_55346;
var tmp55487 = inst_55344;
var inst_55344__$1 = tmp55487;
var inst_55345__$1 = tmp55485;
var inst_55346__$1 = tmp55486;
var inst_55347__$1 = inst_55354;
var state_55483__$1 = (function (){var statearr_55488 = state_55483;
(statearr_55488[(7)] = inst_55345__$1);

(statearr_55488[(8)] = inst_55346__$1);

(statearr_55488[(9)] = inst_55347__$1);

(statearr_55488[(10)] = inst_55344__$1);

(statearr_55488[(11)] = inst_55353);

return statearr_55488;
})();
var statearr_55489_55575 = state_55483__$1;
(statearr_55489_55575[(2)] = null);

(statearr_55489_55575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (20))){
var inst_55387 = (state_55483[(12)]);
var inst_55395 = figwheel.client.file_reloading.sort_files.call(null,inst_55387);
var state_55483__$1 = state_55483;
var statearr_55490_55576 = state_55483__$1;
(statearr_55490_55576[(2)] = inst_55395);

(statearr_55490_55576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (27))){
var state_55483__$1 = state_55483;
var statearr_55491_55577 = state_55483__$1;
(statearr_55491_55577[(2)] = null);

(statearr_55491_55577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (1))){
var inst_55336 = (state_55483[(13)]);
var inst_55333 = before_jsload.call(null,files);
var inst_55334 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_55335 = (function (){return ((function (inst_55336,inst_55333,inst_55334,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55078_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55078_SHARP_);
});
;})(inst_55336,inst_55333,inst_55334,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55336__$1 = cljs.core.filter.call(null,inst_55335,files);
var inst_55337 = cljs.core.not_empty.call(null,inst_55336__$1);
var state_55483__$1 = (function (){var statearr_55492 = state_55483;
(statearr_55492[(13)] = inst_55336__$1);

(statearr_55492[(14)] = inst_55334);

(statearr_55492[(15)] = inst_55333);

return statearr_55492;
})();
if(cljs.core.truth_(inst_55337)){
var statearr_55493_55578 = state_55483__$1;
(statearr_55493_55578[(1)] = (2));

} else {
var statearr_55494_55579 = state_55483__$1;
(statearr_55494_55579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (24))){
var state_55483__$1 = state_55483;
var statearr_55495_55580 = state_55483__$1;
(statearr_55495_55580[(2)] = null);

(statearr_55495_55580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (39))){
var inst_55437 = (state_55483[(16)]);
var state_55483__$1 = state_55483;
var statearr_55496_55581 = state_55483__$1;
(statearr_55496_55581[(2)] = inst_55437);

(statearr_55496_55581[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (46))){
var inst_55478 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
var statearr_55497_55582 = state_55483__$1;
(statearr_55497_55582[(2)] = inst_55478);

(statearr_55497_55582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (4))){
var inst_55381 = (state_55483[(2)]);
var inst_55382 = cljs.core.List.EMPTY;
var inst_55383 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_55382);
var inst_55384 = (function (){return ((function (inst_55381,inst_55382,inst_55383,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55079_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55079_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55079_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__55079_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_55381,inst_55382,inst_55383,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55385 = cljs.core.filter.call(null,inst_55384,files);
var inst_55386 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_55387 = cljs.core.concat.call(null,inst_55385,inst_55386);
var state_55483__$1 = (function (){var statearr_55498 = state_55483;
(statearr_55498[(12)] = inst_55387);

(statearr_55498[(17)] = inst_55381);

(statearr_55498[(18)] = inst_55383);

return statearr_55498;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55499_55583 = state_55483__$1;
(statearr_55499_55583[(1)] = (16));

} else {
var statearr_55500_55584 = state_55483__$1;
(statearr_55500_55584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (15))){
var inst_55371 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
var statearr_55501_55585 = state_55483__$1;
(statearr_55501_55585[(2)] = inst_55371);

(statearr_55501_55585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (21))){
var inst_55397 = (state_55483[(19)]);
var inst_55397__$1 = (state_55483[(2)]);
var inst_55398 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_55397__$1);
var state_55483__$1 = (function (){var statearr_55502 = state_55483;
(statearr_55502[(19)] = inst_55397__$1);

return statearr_55502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55483__$1,(22),inst_55398);
} else {
if((state_val_55484 === (31))){
var inst_55481 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55483__$1,inst_55481);
} else {
if((state_val_55484 === (32))){
var inst_55437 = (state_55483[(16)]);
var inst_55442 = inst_55437.cljs$lang$protocol_mask$partition0$;
var inst_55443 = (inst_55442 & (64));
var inst_55444 = inst_55437.cljs$core$ISeq$;
var inst_55445 = (inst_55443) || (inst_55444);
var state_55483__$1 = state_55483;
if(cljs.core.truth_(inst_55445)){
var statearr_55503_55586 = state_55483__$1;
(statearr_55503_55586[(1)] = (35));

} else {
var statearr_55504_55587 = state_55483__$1;
(statearr_55504_55587[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (40))){
var inst_55458 = (state_55483[(20)]);
var inst_55457 = (state_55483[(2)]);
var inst_55458__$1 = cljs.core.get.call(null,inst_55457,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55459 = cljs.core.get.call(null,inst_55457,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55460 = cljs.core.not_empty.call(null,inst_55458__$1);
var state_55483__$1 = (function (){var statearr_55505 = state_55483;
(statearr_55505[(20)] = inst_55458__$1);

(statearr_55505[(21)] = inst_55459);

return statearr_55505;
})();
if(cljs.core.truth_(inst_55460)){
var statearr_55506_55588 = state_55483__$1;
(statearr_55506_55588[(1)] = (41));

} else {
var statearr_55507_55589 = state_55483__$1;
(statearr_55507_55589[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (33))){
var state_55483__$1 = state_55483;
var statearr_55508_55590 = state_55483__$1;
(statearr_55508_55590[(2)] = false);

(statearr_55508_55590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (13))){
var inst_55357 = (state_55483[(22)]);
var inst_55361 = cljs.core.chunk_first.call(null,inst_55357);
var inst_55362 = cljs.core.chunk_rest.call(null,inst_55357);
var inst_55363 = cljs.core.count.call(null,inst_55361);
var inst_55344 = inst_55362;
var inst_55345 = inst_55361;
var inst_55346 = inst_55363;
var inst_55347 = (0);
var state_55483__$1 = (function (){var statearr_55509 = state_55483;
(statearr_55509[(7)] = inst_55345);

(statearr_55509[(8)] = inst_55346);

(statearr_55509[(9)] = inst_55347);

(statearr_55509[(10)] = inst_55344);

return statearr_55509;
})();
var statearr_55510_55591 = state_55483__$1;
(statearr_55510_55591[(2)] = null);

(statearr_55510_55591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (22))){
var inst_55401 = (state_55483[(23)]);
var inst_55405 = (state_55483[(24)]);
var inst_55397 = (state_55483[(19)]);
var inst_55400 = (state_55483[(25)]);
var inst_55400__$1 = (state_55483[(2)]);
var inst_55401__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55400__$1);
var inst_55402 = (function (){var all_files = inst_55397;
var res_SINGLEQUOTE_ = inst_55400__$1;
var res = inst_55401__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_55401,inst_55405,inst_55397,inst_55400,inst_55400__$1,inst_55401__$1,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55080_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__55080_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_55401,inst_55405,inst_55397,inst_55400,inst_55400__$1,inst_55401__$1,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55403 = cljs.core.filter.call(null,inst_55402,inst_55400__$1);
var inst_55404 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55405__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55404);
var inst_55406 = cljs.core.not_empty.call(null,inst_55405__$1);
var state_55483__$1 = (function (){var statearr_55511 = state_55483;
(statearr_55511[(23)] = inst_55401__$1);

(statearr_55511[(24)] = inst_55405__$1);

(statearr_55511[(26)] = inst_55403);

(statearr_55511[(25)] = inst_55400__$1);

return statearr_55511;
})();
if(cljs.core.truth_(inst_55406)){
var statearr_55512_55592 = state_55483__$1;
(statearr_55512_55592[(1)] = (23));

} else {
var statearr_55513_55593 = state_55483__$1;
(statearr_55513_55593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (36))){
var state_55483__$1 = state_55483;
var statearr_55514_55594 = state_55483__$1;
(statearr_55514_55594[(2)] = false);

(statearr_55514_55594[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (41))){
var inst_55458 = (state_55483[(20)]);
var inst_55462 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55463 = cljs.core.map.call(null,inst_55462,inst_55458);
var inst_55464 = cljs.core.pr_str.call(null,inst_55463);
var inst_55465 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_55464)].join('');
var inst_55466 = figwheel.client.utils.log.call(null,inst_55465);
var state_55483__$1 = state_55483;
var statearr_55515_55595 = state_55483__$1;
(statearr_55515_55595[(2)] = inst_55466);

(statearr_55515_55595[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (43))){
var inst_55459 = (state_55483[(21)]);
var inst_55469 = (state_55483[(2)]);
var inst_55470 = cljs.core.not_empty.call(null,inst_55459);
var state_55483__$1 = (function (){var statearr_55516 = state_55483;
(statearr_55516[(27)] = inst_55469);

return statearr_55516;
})();
if(cljs.core.truth_(inst_55470)){
var statearr_55517_55596 = state_55483__$1;
(statearr_55517_55596[(1)] = (44));

} else {
var statearr_55518_55597 = state_55483__$1;
(statearr_55518_55597[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (29))){
var inst_55401 = (state_55483[(23)]);
var inst_55405 = (state_55483[(24)]);
var inst_55397 = (state_55483[(19)]);
var inst_55403 = (state_55483[(26)]);
var inst_55437 = (state_55483[(16)]);
var inst_55400 = (state_55483[(25)]);
var inst_55433 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55436 = (function (){var all_files = inst_55397;
var res_SINGLEQUOTE_ = inst_55400;
var res = inst_55401;
var files_not_loaded = inst_55403;
var dependencies_that_loaded = inst_55405;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55437,inst_55400,inst_55433,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55435){
var map__55519 = p__55435;
var map__55519__$1 = ((((!((map__55519 == null)))?((((map__55519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55519):map__55519);
var namespace = cljs.core.get.call(null,map__55519__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55437,inst_55400,inst_55433,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55437__$1 = cljs.core.group_by.call(null,inst_55436,inst_55403);
var inst_55439 = (inst_55437__$1 == null);
var inst_55440 = cljs.core.not.call(null,inst_55439);
var state_55483__$1 = (function (){var statearr_55521 = state_55483;
(statearr_55521[(28)] = inst_55433);

(statearr_55521[(16)] = inst_55437__$1);

return statearr_55521;
})();
if(inst_55440){
var statearr_55522_55598 = state_55483__$1;
(statearr_55522_55598[(1)] = (32));

} else {
var statearr_55523_55599 = state_55483__$1;
(statearr_55523_55599[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (44))){
var inst_55459 = (state_55483[(21)]);
var inst_55472 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55459);
var inst_55473 = cljs.core.pr_str.call(null,inst_55472);
var inst_55474 = [cljs.core.str("not required: "),cljs.core.str(inst_55473)].join('');
var inst_55475 = figwheel.client.utils.log.call(null,inst_55474);
var state_55483__$1 = state_55483;
var statearr_55524_55600 = state_55483__$1;
(statearr_55524_55600[(2)] = inst_55475);

(statearr_55524_55600[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (6))){
var inst_55378 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
var statearr_55525_55601 = state_55483__$1;
(statearr_55525_55601[(2)] = inst_55378);

(statearr_55525_55601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (28))){
var inst_55403 = (state_55483[(26)]);
var inst_55430 = (state_55483[(2)]);
var inst_55431 = cljs.core.not_empty.call(null,inst_55403);
var state_55483__$1 = (function (){var statearr_55526 = state_55483;
(statearr_55526[(29)] = inst_55430);

return statearr_55526;
})();
if(cljs.core.truth_(inst_55431)){
var statearr_55527_55602 = state_55483__$1;
(statearr_55527_55602[(1)] = (29));

} else {
var statearr_55528_55603 = state_55483__$1;
(statearr_55528_55603[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (25))){
var inst_55401 = (state_55483[(23)]);
var inst_55417 = (state_55483[(2)]);
var inst_55418 = cljs.core.not_empty.call(null,inst_55401);
var state_55483__$1 = (function (){var statearr_55529 = state_55483;
(statearr_55529[(30)] = inst_55417);

return statearr_55529;
})();
if(cljs.core.truth_(inst_55418)){
var statearr_55530_55604 = state_55483__$1;
(statearr_55530_55604[(1)] = (26));

} else {
var statearr_55531_55605 = state_55483__$1;
(statearr_55531_55605[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (34))){
var inst_55452 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
if(cljs.core.truth_(inst_55452)){
var statearr_55532_55606 = state_55483__$1;
(statearr_55532_55606[(1)] = (38));

} else {
var statearr_55533_55607 = state_55483__$1;
(statearr_55533_55607[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (17))){
var state_55483__$1 = state_55483;
var statearr_55534_55608 = state_55483__$1;
(statearr_55534_55608[(2)] = recompile_dependents);

(statearr_55534_55608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (3))){
var state_55483__$1 = state_55483;
var statearr_55535_55609 = state_55483__$1;
(statearr_55535_55609[(2)] = null);

(statearr_55535_55609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (12))){
var inst_55374 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
var statearr_55536_55610 = state_55483__$1;
(statearr_55536_55610[(2)] = inst_55374);

(statearr_55536_55610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (2))){
var inst_55336 = (state_55483[(13)]);
var inst_55343 = cljs.core.seq.call(null,inst_55336);
var inst_55344 = inst_55343;
var inst_55345 = null;
var inst_55346 = (0);
var inst_55347 = (0);
var state_55483__$1 = (function (){var statearr_55537 = state_55483;
(statearr_55537[(7)] = inst_55345);

(statearr_55537[(8)] = inst_55346);

(statearr_55537[(9)] = inst_55347);

(statearr_55537[(10)] = inst_55344);

return statearr_55537;
})();
var statearr_55538_55611 = state_55483__$1;
(statearr_55538_55611[(2)] = null);

(statearr_55538_55611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (23))){
var inst_55401 = (state_55483[(23)]);
var inst_55405 = (state_55483[(24)]);
var inst_55397 = (state_55483[(19)]);
var inst_55403 = (state_55483[(26)]);
var inst_55400 = (state_55483[(25)]);
var inst_55408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55410 = (function (){var all_files = inst_55397;
var res_SINGLEQUOTE_ = inst_55400;
var res = inst_55401;
var files_not_loaded = inst_55403;
var dependencies_that_loaded = inst_55405;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55400,inst_55408,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55409){
var map__55539 = p__55409;
var map__55539__$1 = ((((!((map__55539 == null)))?((((map__55539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55539):map__55539);
var request_url = cljs.core.get.call(null,map__55539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55400,inst_55408,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55411 = cljs.core.reverse.call(null,inst_55405);
var inst_55412 = cljs.core.map.call(null,inst_55410,inst_55411);
var inst_55413 = cljs.core.pr_str.call(null,inst_55412);
var inst_55414 = figwheel.client.utils.log.call(null,inst_55413);
var state_55483__$1 = (function (){var statearr_55541 = state_55483;
(statearr_55541[(31)] = inst_55408);

return statearr_55541;
})();
var statearr_55542_55612 = state_55483__$1;
(statearr_55542_55612[(2)] = inst_55414);

(statearr_55542_55612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (35))){
var state_55483__$1 = state_55483;
var statearr_55543_55613 = state_55483__$1;
(statearr_55543_55613[(2)] = true);

(statearr_55543_55613[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (19))){
var inst_55387 = (state_55483[(12)]);
var inst_55393 = figwheel.client.file_reloading.expand_files.call(null,inst_55387);
var state_55483__$1 = state_55483;
var statearr_55544_55614 = state_55483__$1;
(statearr_55544_55614[(2)] = inst_55393);

(statearr_55544_55614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (11))){
var state_55483__$1 = state_55483;
var statearr_55545_55615 = state_55483__$1;
(statearr_55545_55615[(2)] = null);

(statearr_55545_55615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (9))){
var inst_55376 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
var statearr_55546_55616 = state_55483__$1;
(statearr_55546_55616[(2)] = inst_55376);

(statearr_55546_55616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (5))){
var inst_55346 = (state_55483[(8)]);
var inst_55347 = (state_55483[(9)]);
var inst_55349 = (inst_55347 < inst_55346);
var inst_55350 = inst_55349;
var state_55483__$1 = state_55483;
if(cljs.core.truth_(inst_55350)){
var statearr_55547_55617 = state_55483__$1;
(statearr_55547_55617[(1)] = (7));

} else {
var statearr_55548_55618 = state_55483__$1;
(statearr_55548_55618[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (14))){
var inst_55357 = (state_55483[(22)]);
var inst_55366 = cljs.core.first.call(null,inst_55357);
var inst_55367 = figwheel.client.file_reloading.eval_body.call(null,inst_55366,opts);
var inst_55368 = cljs.core.next.call(null,inst_55357);
var inst_55344 = inst_55368;
var inst_55345 = null;
var inst_55346 = (0);
var inst_55347 = (0);
var state_55483__$1 = (function (){var statearr_55549 = state_55483;
(statearr_55549[(7)] = inst_55345);

(statearr_55549[(8)] = inst_55346);

(statearr_55549[(9)] = inst_55347);

(statearr_55549[(10)] = inst_55344);

(statearr_55549[(32)] = inst_55367);

return statearr_55549;
})();
var statearr_55550_55619 = state_55483__$1;
(statearr_55550_55619[(2)] = null);

(statearr_55550_55619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (45))){
var state_55483__$1 = state_55483;
var statearr_55551_55620 = state_55483__$1;
(statearr_55551_55620[(2)] = null);

(statearr_55551_55620[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (26))){
var inst_55401 = (state_55483[(23)]);
var inst_55405 = (state_55483[(24)]);
var inst_55397 = (state_55483[(19)]);
var inst_55403 = (state_55483[(26)]);
var inst_55400 = (state_55483[(25)]);
var inst_55420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55422 = (function (){var all_files = inst_55397;
var res_SINGLEQUOTE_ = inst_55400;
var res = inst_55401;
var files_not_loaded = inst_55403;
var dependencies_that_loaded = inst_55405;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55400,inst_55420,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55421){
var map__55552 = p__55421;
var map__55552__$1 = ((((!((map__55552 == null)))?((((map__55552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55552):map__55552);
var namespace = cljs.core.get.call(null,map__55552__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55552__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55400,inst_55420,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55423 = cljs.core.map.call(null,inst_55422,inst_55401);
var inst_55424 = cljs.core.pr_str.call(null,inst_55423);
var inst_55425 = figwheel.client.utils.log.call(null,inst_55424);
var inst_55426 = (function (){var all_files = inst_55397;
var res_SINGLEQUOTE_ = inst_55400;
var res = inst_55401;
var files_not_loaded = inst_55403;
var dependencies_that_loaded = inst_55405;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55400,inst_55420,inst_55422,inst_55423,inst_55424,inst_55425,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55401,inst_55405,inst_55397,inst_55403,inst_55400,inst_55420,inst_55422,inst_55423,inst_55424,inst_55425,state_val_55484,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55427 = setTimeout(inst_55426,(10));
var state_55483__$1 = (function (){var statearr_55554 = state_55483;
(statearr_55554[(33)] = inst_55420);

(statearr_55554[(34)] = inst_55425);

return statearr_55554;
})();
var statearr_55555_55621 = state_55483__$1;
(statearr_55555_55621[(2)] = inst_55427);

(statearr_55555_55621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (16))){
var state_55483__$1 = state_55483;
var statearr_55556_55622 = state_55483__$1;
(statearr_55556_55622[(2)] = reload_dependents);

(statearr_55556_55622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (38))){
var inst_55437 = (state_55483[(16)]);
var inst_55454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55437);
var state_55483__$1 = state_55483;
var statearr_55557_55623 = state_55483__$1;
(statearr_55557_55623[(2)] = inst_55454);

(statearr_55557_55623[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (30))){
var state_55483__$1 = state_55483;
var statearr_55558_55624 = state_55483__$1;
(statearr_55558_55624[(2)] = null);

(statearr_55558_55624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (10))){
var inst_55357 = (state_55483[(22)]);
var inst_55359 = cljs.core.chunked_seq_QMARK_.call(null,inst_55357);
var state_55483__$1 = state_55483;
if(inst_55359){
var statearr_55559_55625 = state_55483__$1;
(statearr_55559_55625[(1)] = (13));

} else {
var statearr_55560_55626 = state_55483__$1;
(statearr_55560_55626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (18))){
var inst_55391 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
if(cljs.core.truth_(inst_55391)){
var statearr_55561_55627 = state_55483__$1;
(statearr_55561_55627[(1)] = (19));

} else {
var statearr_55562_55628 = state_55483__$1;
(statearr_55562_55628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (42))){
var state_55483__$1 = state_55483;
var statearr_55563_55629 = state_55483__$1;
(statearr_55563_55629[(2)] = null);

(statearr_55563_55629[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (37))){
var inst_55449 = (state_55483[(2)]);
var state_55483__$1 = state_55483;
var statearr_55564_55630 = state_55483__$1;
(statearr_55564_55630[(2)] = inst_55449);

(statearr_55564_55630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55484 === (8))){
var inst_55357 = (state_55483[(22)]);
var inst_55344 = (state_55483[(10)]);
var inst_55357__$1 = cljs.core.seq.call(null,inst_55344);
var state_55483__$1 = (function (){var statearr_55565 = state_55483;
(statearr_55565[(22)] = inst_55357__$1);

return statearr_55565;
})();
if(inst_55357__$1){
var statearr_55566_55631 = state_55483__$1;
(statearr_55566_55631[(1)] = (10));

} else {
var statearr_55567_55632 = state_55483__$1;
(statearr_55567_55632[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26910__auto__,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____0 = (function (){
var statearr_55571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55571[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__);

(statearr_55571[(1)] = (1));

return statearr_55571;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____1 = (function (state_55483){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_55483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e55572){if((e55572 instanceof Object)){
var ex__26914__auto__ = e55572;
var statearr_55573_55633 = state_55483;
(statearr_55573_55633[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55634 = state_55483;
state_55483 = G__55634;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__ = function(state_55483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____1.call(this,state_55483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27024__auto__ = (function (){var statearr_55574 = f__27023__auto__.call(null);
(statearr_55574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_55574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__,map__55329,map__55329__$1,opts,before_jsload,on_jsload,reload_dependents,map__55330,map__55330__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27022__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55637,link){
var map__55640 = p__55637;
var map__55640__$1 = ((((!((map__55640 == null)))?((((map__55640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55640):map__55640);
var file = cljs.core.get.call(null,map__55640__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__55640,map__55640__$1,file){
return (function (p1__55635_SHARP_,p2__55636_SHARP_){
if(cljs.core._EQ_.call(null,p1__55635_SHARP_,p2__55636_SHARP_)){
return p1__55635_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__55640,map__55640__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55646){
var map__55647 = p__55646;
var map__55647__$1 = ((((!((map__55647 == null)))?((((map__55647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55647):map__55647);
var match_length = cljs.core.get.call(null,map__55647__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55647__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55642_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55642_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55649_SHARP_,p2__55650_SHARP_){
return cljs.core.assoc.call(null,p1__55649_SHARP_,cljs.core.get.call(null,p2__55650_SHARP_,key),p2__55650_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_55651 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_55651);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_55651);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55652,p__55653){
var map__55658 = p__55652;
var map__55658__$1 = ((((!((map__55658 == null)))?((((map__55658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55658):map__55658);
var on_cssload = cljs.core.get.call(null,map__55658__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__55659 = p__55653;
var map__55659__$1 = ((((!((map__55659 == null)))?((((map__55659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55659):map__55659);
var files_msg = map__55659__$1;
var files = cljs.core.get.call(null,map__55659__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489464072573