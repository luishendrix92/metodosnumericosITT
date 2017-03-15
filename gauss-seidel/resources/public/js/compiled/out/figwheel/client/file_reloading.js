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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31726_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31726_SHARP_));
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
var seq__31731 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31732 = null;
var count__31733 = (0);
var i__31734 = (0);
while(true){
if((i__31734 < count__31733)){
var n = cljs.core._nth.call(null,chunk__31732,i__31734);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31735 = seq__31731;
var G__31736 = chunk__31732;
var G__31737 = count__31733;
var G__31738 = (i__31734 + (1));
seq__31731 = G__31735;
chunk__31732 = G__31736;
count__31733 = G__31737;
i__31734 = G__31738;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31731);
if(temp__4657__auto__){
var seq__31731__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31731__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__31731__$1);
var G__31739 = cljs.core.chunk_rest.call(null,seq__31731__$1);
var G__31740 = c__25659__auto__;
var G__31741 = cljs.core.count.call(null,c__25659__auto__);
var G__31742 = (0);
seq__31731 = G__31739;
chunk__31732 = G__31740;
count__31733 = G__31741;
i__31734 = G__31742;
continue;
} else {
var n = cljs.core.first.call(null,seq__31731__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31743 = cljs.core.next.call(null,seq__31731__$1);
var G__31744 = null;
var G__31745 = (0);
var G__31746 = (0);
seq__31731 = G__31743;
chunk__31732 = G__31744;
count__31733 = G__31745;
i__31734 = G__31746;
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

var seq__31797_31808 = cljs.core.seq.call(null,deps);
var chunk__31798_31809 = null;
var count__31799_31810 = (0);
var i__31800_31811 = (0);
while(true){
if((i__31800_31811 < count__31799_31810)){
var dep_31812 = cljs.core._nth.call(null,chunk__31798_31809,i__31800_31811);
topo_sort_helper_STAR_.call(null,dep_31812,(depth + (1)),state);

var G__31813 = seq__31797_31808;
var G__31814 = chunk__31798_31809;
var G__31815 = count__31799_31810;
var G__31816 = (i__31800_31811 + (1));
seq__31797_31808 = G__31813;
chunk__31798_31809 = G__31814;
count__31799_31810 = G__31815;
i__31800_31811 = G__31816;
continue;
} else {
var temp__4657__auto___31817 = cljs.core.seq.call(null,seq__31797_31808);
if(temp__4657__auto___31817){
var seq__31797_31818__$1 = temp__4657__auto___31817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31797_31818__$1)){
var c__25659__auto___31819 = cljs.core.chunk_first.call(null,seq__31797_31818__$1);
var G__31820 = cljs.core.chunk_rest.call(null,seq__31797_31818__$1);
var G__31821 = c__25659__auto___31819;
var G__31822 = cljs.core.count.call(null,c__25659__auto___31819);
var G__31823 = (0);
seq__31797_31808 = G__31820;
chunk__31798_31809 = G__31821;
count__31799_31810 = G__31822;
i__31800_31811 = G__31823;
continue;
} else {
var dep_31824 = cljs.core.first.call(null,seq__31797_31818__$1);
topo_sort_helper_STAR_.call(null,dep_31824,(depth + (1)),state);

var G__31825 = cljs.core.next.call(null,seq__31797_31818__$1);
var G__31826 = null;
var G__31827 = (0);
var G__31828 = (0);
seq__31797_31808 = G__31825;
chunk__31798_31809 = G__31826;
count__31799_31810 = G__31827;
i__31800_31811 = G__31828;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31801){
var vec__31805 = p__31801;
var seq__31806 = cljs.core.seq.call(null,vec__31805);
var first__31807 = cljs.core.first.call(null,seq__31806);
var seq__31806__$1 = cljs.core.next.call(null,seq__31806);
var x = first__31807;
var xs = seq__31806__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31805,seq__31806,first__31807,seq__31806__$1,x,xs,get_deps__$1){
return (function (p1__31747_SHARP_){
return clojure.set.difference.call(null,p1__31747_SHARP_,x);
});})(vec__31805,seq__31806,first__31807,seq__31806__$1,x,xs,get_deps__$1))
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
var seq__31841 = cljs.core.seq.call(null,provides);
var chunk__31842 = null;
var count__31843 = (0);
var i__31844 = (0);
while(true){
if((i__31844 < count__31843)){
var prov = cljs.core._nth.call(null,chunk__31842,i__31844);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31845_31853 = cljs.core.seq.call(null,requires);
var chunk__31846_31854 = null;
var count__31847_31855 = (0);
var i__31848_31856 = (0);
while(true){
if((i__31848_31856 < count__31847_31855)){
var req_31857 = cljs.core._nth.call(null,chunk__31846_31854,i__31848_31856);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31857,prov);

var G__31858 = seq__31845_31853;
var G__31859 = chunk__31846_31854;
var G__31860 = count__31847_31855;
var G__31861 = (i__31848_31856 + (1));
seq__31845_31853 = G__31858;
chunk__31846_31854 = G__31859;
count__31847_31855 = G__31860;
i__31848_31856 = G__31861;
continue;
} else {
var temp__4657__auto___31862 = cljs.core.seq.call(null,seq__31845_31853);
if(temp__4657__auto___31862){
var seq__31845_31863__$1 = temp__4657__auto___31862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31845_31863__$1)){
var c__25659__auto___31864 = cljs.core.chunk_first.call(null,seq__31845_31863__$1);
var G__31865 = cljs.core.chunk_rest.call(null,seq__31845_31863__$1);
var G__31866 = c__25659__auto___31864;
var G__31867 = cljs.core.count.call(null,c__25659__auto___31864);
var G__31868 = (0);
seq__31845_31853 = G__31865;
chunk__31846_31854 = G__31866;
count__31847_31855 = G__31867;
i__31848_31856 = G__31868;
continue;
} else {
var req_31869 = cljs.core.first.call(null,seq__31845_31863__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31869,prov);

var G__31870 = cljs.core.next.call(null,seq__31845_31863__$1);
var G__31871 = null;
var G__31872 = (0);
var G__31873 = (0);
seq__31845_31853 = G__31870;
chunk__31846_31854 = G__31871;
count__31847_31855 = G__31872;
i__31848_31856 = G__31873;
continue;
}
} else {
}
}
break;
}

var G__31874 = seq__31841;
var G__31875 = chunk__31842;
var G__31876 = count__31843;
var G__31877 = (i__31844 + (1));
seq__31841 = G__31874;
chunk__31842 = G__31875;
count__31843 = G__31876;
i__31844 = G__31877;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31841);
if(temp__4657__auto__){
var seq__31841__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31841__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__31841__$1);
var G__31878 = cljs.core.chunk_rest.call(null,seq__31841__$1);
var G__31879 = c__25659__auto__;
var G__31880 = cljs.core.count.call(null,c__25659__auto__);
var G__31881 = (0);
seq__31841 = G__31878;
chunk__31842 = G__31879;
count__31843 = G__31880;
i__31844 = G__31881;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31841__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31849_31882 = cljs.core.seq.call(null,requires);
var chunk__31850_31883 = null;
var count__31851_31884 = (0);
var i__31852_31885 = (0);
while(true){
if((i__31852_31885 < count__31851_31884)){
var req_31886 = cljs.core._nth.call(null,chunk__31850_31883,i__31852_31885);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31886,prov);

var G__31887 = seq__31849_31882;
var G__31888 = chunk__31850_31883;
var G__31889 = count__31851_31884;
var G__31890 = (i__31852_31885 + (1));
seq__31849_31882 = G__31887;
chunk__31850_31883 = G__31888;
count__31851_31884 = G__31889;
i__31852_31885 = G__31890;
continue;
} else {
var temp__4657__auto___31891__$1 = cljs.core.seq.call(null,seq__31849_31882);
if(temp__4657__auto___31891__$1){
var seq__31849_31892__$1 = temp__4657__auto___31891__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31849_31892__$1)){
var c__25659__auto___31893 = cljs.core.chunk_first.call(null,seq__31849_31892__$1);
var G__31894 = cljs.core.chunk_rest.call(null,seq__31849_31892__$1);
var G__31895 = c__25659__auto___31893;
var G__31896 = cljs.core.count.call(null,c__25659__auto___31893);
var G__31897 = (0);
seq__31849_31882 = G__31894;
chunk__31850_31883 = G__31895;
count__31851_31884 = G__31896;
i__31852_31885 = G__31897;
continue;
} else {
var req_31898 = cljs.core.first.call(null,seq__31849_31892__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31898,prov);

var G__31899 = cljs.core.next.call(null,seq__31849_31892__$1);
var G__31900 = null;
var G__31901 = (0);
var G__31902 = (0);
seq__31849_31882 = G__31899;
chunk__31850_31883 = G__31900;
count__31851_31884 = G__31901;
i__31852_31885 = G__31902;
continue;
}
} else {
}
}
break;
}

var G__31903 = cljs.core.next.call(null,seq__31841__$1);
var G__31904 = null;
var G__31905 = (0);
var G__31906 = (0);
seq__31841 = G__31903;
chunk__31842 = G__31904;
count__31843 = G__31905;
i__31844 = G__31906;
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
var seq__31911_31915 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31912_31916 = null;
var count__31913_31917 = (0);
var i__31914_31918 = (0);
while(true){
if((i__31914_31918 < count__31913_31917)){
var ns_31919 = cljs.core._nth.call(null,chunk__31912_31916,i__31914_31918);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31919);

var G__31920 = seq__31911_31915;
var G__31921 = chunk__31912_31916;
var G__31922 = count__31913_31917;
var G__31923 = (i__31914_31918 + (1));
seq__31911_31915 = G__31920;
chunk__31912_31916 = G__31921;
count__31913_31917 = G__31922;
i__31914_31918 = G__31923;
continue;
} else {
var temp__4657__auto___31924 = cljs.core.seq.call(null,seq__31911_31915);
if(temp__4657__auto___31924){
var seq__31911_31925__$1 = temp__4657__auto___31924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31911_31925__$1)){
var c__25659__auto___31926 = cljs.core.chunk_first.call(null,seq__31911_31925__$1);
var G__31927 = cljs.core.chunk_rest.call(null,seq__31911_31925__$1);
var G__31928 = c__25659__auto___31926;
var G__31929 = cljs.core.count.call(null,c__25659__auto___31926);
var G__31930 = (0);
seq__31911_31915 = G__31927;
chunk__31912_31916 = G__31928;
count__31913_31917 = G__31929;
i__31914_31918 = G__31930;
continue;
} else {
var ns_31931 = cljs.core.first.call(null,seq__31911_31925__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31931);

var G__31932 = cljs.core.next.call(null,seq__31911_31925__$1);
var G__31933 = null;
var G__31934 = (0);
var G__31935 = (0);
seq__31911_31915 = G__31932;
chunk__31912_31916 = G__31933;
count__31913_31917 = G__31934;
i__31914_31918 = G__31935;
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
var G__31936__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31937__i = 0, G__31937__a = new Array(arguments.length -  0);
while (G__31937__i < G__31937__a.length) {G__31937__a[G__31937__i] = arguments[G__31937__i + 0]; ++G__31937__i;}
  args = new cljs.core.IndexedSeq(G__31937__a,0);
} 
return G__31936__delegate.call(this,args);};
G__31936.cljs$lang$maxFixedArity = 0;
G__31936.cljs$lang$applyTo = (function (arglist__31938){
var args = cljs.core.seq(arglist__31938);
return G__31936__delegate(args);
});
G__31936.cljs$core$IFn$_invoke$arity$variadic = G__31936__delegate;
return G__31936;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31939 = cljs.core._EQ_;
var expr__31940 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31939.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31940))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__31939,expr__31940){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__31939,expr__31940))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__31939,expr__31940){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31942){if((e31942 instanceof Error)){
var e = e31942;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31942;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__31939,expr__31940))
} else {
if(cljs.core.truth_(pred__31939.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31940))){
return ((function (pred__31939,expr__31940){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31939,expr__31940){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31939,expr__31940))
);

return deferred.addErrback(((function (deferred,pred__31939,expr__31940){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31939,expr__31940))
);
});
;})(pred__31939,expr__31940))
} else {
if(cljs.core.truth_(pred__31939.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31940))){
return ((function (pred__31939,expr__31940){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31943){if((e31943 instanceof Error)){
var e = e31943;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31943;

}
}})());
});
;})(pred__31939,expr__31940))
} else {
return ((function (pred__31939,expr__31940){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31939,expr__31940))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31944,callback){
var map__31947 = p__31944;
var map__31947__$1 = ((((!((map__31947 == null)))?((((map__31947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31947):map__31947);
var file_msg = map__31947__$1;
var request_url = cljs.core.get.call(null,map__31947__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31947,map__31947__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31947,map__31947__$1,file_msg,request_url))
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
return (function (state_31971){
var state_val_31972 = (state_31971[(1)]);
if((state_val_31972 === (7))){
var inst_31967 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_31973_31993 = state_31971__$1;
(statearr_31973_31993[(2)] = inst_31967);

(statearr_31973_31993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (1))){
var state_31971__$1 = state_31971;
var statearr_31974_31994 = state_31971__$1;
(statearr_31974_31994[(2)] = null);

(statearr_31974_31994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (4))){
var inst_31951 = (state_31971[(7)]);
var inst_31951__$1 = (state_31971[(2)]);
var state_31971__$1 = (function (){var statearr_31975 = state_31971;
(statearr_31975[(7)] = inst_31951__$1);

return statearr_31975;
})();
if(cljs.core.truth_(inst_31951__$1)){
var statearr_31976_31995 = state_31971__$1;
(statearr_31976_31995[(1)] = (5));

} else {
var statearr_31977_31996 = state_31971__$1;
(statearr_31977_31996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (6))){
var state_31971__$1 = state_31971;
var statearr_31978_31997 = state_31971__$1;
(statearr_31978_31997[(2)] = null);

(statearr_31978_31997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (3))){
var inst_31969 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31971__$1,inst_31969);
} else {
if((state_val_31972 === (2))){
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31971__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31972 === (11))){
var inst_31963 = (state_31971[(2)]);
var state_31971__$1 = (function (){var statearr_31979 = state_31971;
(statearr_31979[(8)] = inst_31963);

return statearr_31979;
})();
var statearr_31980_31998 = state_31971__$1;
(statearr_31980_31998[(2)] = null);

(statearr_31980_31998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (9))){
var inst_31955 = (state_31971[(9)]);
var inst_31957 = (state_31971[(10)]);
var inst_31959 = inst_31957.call(null,inst_31955);
var state_31971__$1 = state_31971;
var statearr_31981_31999 = state_31971__$1;
(statearr_31981_31999[(2)] = inst_31959);

(statearr_31981_31999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (5))){
var inst_31951 = (state_31971[(7)]);
var inst_31953 = figwheel.client.file_reloading.blocking_load.call(null,inst_31951);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31971__$1,(8),inst_31953);
} else {
if((state_val_31972 === (10))){
var inst_31955 = (state_31971[(9)]);
var inst_31961 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31955);
var state_31971__$1 = state_31971;
var statearr_31982_32000 = state_31971__$1;
(statearr_31982_32000[(2)] = inst_31961);

(statearr_31982_32000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (8))){
var inst_31957 = (state_31971[(10)]);
var inst_31951 = (state_31971[(7)]);
var inst_31955 = (state_31971[(2)]);
var inst_31956 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31957__$1 = cljs.core.get.call(null,inst_31956,inst_31951);
var state_31971__$1 = (function (){var statearr_31983 = state_31971;
(statearr_31983[(9)] = inst_31955);

(statearr_31983[(10)] = inst_31957__$1);

return statearr_31983;
})();
if(cljs.core.truth_(inst_31957__$1)){
var statearr_31984_32001 = state_31971__$1;
(statearr_31984_32001[(1)] = (9));

} else {
var statearr_31985_32002 = state_31971__$1;
(statearr_31985_32002[(1)] = (10));

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
var statearr_31989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31989[(0)] = figwheel$client$file_reloading$state_machine__26911__auto__);

(statearr_31989[(1)] = (1));

return statearr_31989;
});
var figwheel$client$file_reloading$state_machine__26911__auto____1 = (function (state_31971){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_31971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e31990){if((e31990 instanceof Object)){
var ex__26914__auto__ = e31990;
var statearr_31991_32003 = state_31971;
(statearr_31991_32003[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32004 = state_31971;
state_31971 = G__32004;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26911__auto__ = function(state_31971){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26911__auto____1.call(this,state_31971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26911__auto____0;
figwheel$client$file_reloading$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26911__auto____1;
return figwheel$client$file_reloading$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_31992 = f__27023__auto__.call(null);
(statearr_31992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_31992;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32005,callback){
var map__32008 = p__32005;
var map__32008__$1 = ((((!((map__32008 == null)))?((((map__32008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32008):map__32008);
var file_msg = map__32008__$1;
var namespace = cljs.core.get.call(null,map__32008__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32008,map__32008__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32008,map__32008__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32010){
var map__32013 = p__32010;
var map__32013__$1 = ((((!((map__32013 == null)))?((((map__32013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32013):map__32013);
var file_msg = map__32013__$1;
var namespace = cljs.core.get.call(null,map__32013__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32015){
var map__32018 = p__32015;
var map__32018__$1 = ((((!((map__32018 == null)))?((((map__32018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32018):map__32018);
var file_msg = map__32018__$1;
var namespace = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32020,callback){
var map__32023 = p__32020;
var map__32023__$1 = ((((!((map__32023 == null)))?((((map__32023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32023):map__32023);
var file_msg = map__32023__$1;
var request_url = cljs.core.get.call(null,map__32023__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32023__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27022__auto___32127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___32127,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___32127,out){
return (function (state_32109){
var state_val_32110 = (state_32109[(1)]);
if((state_val_32110 === (1))){
var inst_32083 = cljs.core.seq.call(null,files);
var inst_32084 = cljs.core.first.call(null,inst_32083);
var inst_32085 = cljs.core.next.call(null,inst_32083);
var inst_32086 = files;
var state_32109__$1 = (function (){var statearr_32111 = state_32109;
(statearr_32111[(7)] = inst_32084);

(statearr_32111[(8)] = inst_32086);

(statearr_32111[(9)] = inst_32085);

return statearr_32111;
})();
var statearr_32112_32128 = state_32109__$1;
(statearr_32112_32128[(2)] = null);

(statearr_32112_32128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (2))){
var inst_32086 = (state_32109[(8)]);
var inst_32092 = (state_32109[(10)]);
var inst_32091 = cljs.core.seq.call(null,inst_32086);
var inst_32092__$1 = cljs.core.first.call(null,inst_32091);
var inst_32093 = cljs.core.next.call(null,inst_32091);
var inst_32094 = (inst_32092__$1 == null);
var inst_32095 = cljs.core.not.call(null,inst_32094);
var state_32109__$1 = (function (){var statearr_32113 = state_32109;
(statearr_32113[(11)] = inst_32093);

(statearr_32113[(10)] = inst_32092__$1);

return statearr_32113;
})();
if(inst_32095){
var statearr_32114_32129 = state_32109__$1;
(statearr_32114_32129[(1)] = (4));

} else {
var statearr_32115_32130 = state_32109__$1;
(statearr_32115_32130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (3))){
var inst_32107 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32109__$1,inst_32107);
} else {
if((state_val_32110 === (4))){
var inst_32092 = (state_32109[(10)]);
var inst_32097 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32092);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32109__$1,(7),inst_32097);
} else {
if((state_val_32110 === (5))){
var inst_32103 = cljs.core.async.close_BANG_.call(null,out);
var state_32109__$1 = state_32109;
var statearr_32116_32131 = state_32109__$1;
(statearr_32116_32131[(2)] = inst_32103);

(statearr_32116_32131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (6))){
var inst_32105 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32117_32132 = state_32109__$1;
(statearr_32117_32132[(2)] = inst_32105);

(statearr_32117_32132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (7))){
var inst_32093 = (state_32109[(11)]);
var inst_32099 = (state_32109[(2)]);
var inst_32100 = cljs.core.async.put_BANG_.call(null,out,inst_32099);
var inst_32086 = inst_32093;
var state_32109__$1 = (function (){var statearr_32118 = state_32109;
(statearr_32118[(8)] = inst_32086);

(statearr_32118[(12)] = inst_32100);

return statearr_32118;
})();
var statearr_32119_32133 = state_32109__$1;
(statearr_32119_32133[(2)] = null);

(statearr_32119_32133[(1)] = (2));


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
});})(c__27022__auto___32127,out))
;
return ((function (switch__26910__auto__,c__27022__auto___32127,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____0 = (function (){
var statearr_32123 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32123[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__);

(statearr_32123[(1)] = (1));

return statearr_32123;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____1 = (function (state_32109){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_32109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e32124){if((e32124 instanceof Object)){
var ex__26914__auto__ = e32124;
var statearr_32125_32134 = state_32109;
(statearr_32125_32134[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_32109;
state_32109 = G__32135;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__ = function(state_32109){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____1.call(this,state_32109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___32127,out))
})();
var state__27024__auto__ = (function (){var statearr_32126 = f__27023__auto__.call(null);
(statearr_32126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___32127);

return statearr_32126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___32127,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32136,opts){
var map__32140 = p__32136;
var map__32140__$1 = ((((!((map__32140 == null)))?((((map__32140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32140):map__32140);
var eval_body__$1 = cljs.core.get.call(null,map__32140__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32140__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32142){var e = e32142;
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
return (function (p1__32143_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32143_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32152){
var vec__32153 = p__32152;
var k = cljs.core.nth.call(null,vec__32153,(0),null);
var v = cljs.core.nth.call(null,vec__32153,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32156){
var vec__32157 = p__32156;
var k = cljs.core.nth.call(null,vec__32157,(0),null);
var v = cljs.core.nth.call(null,vec__32157,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32163,p__32164){
var map__32411 = p__32163;
var map__32411__$1 = ((((!((map__32411 == null)))?((((map__32411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32411):map__32411);
var opts = map__32411__$1;
var before_jsload = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32412 = p__32164;
var map__32412__$1 = ((((!((map__32412 == null)))?((((map__32412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32412):map__32412);
var msg = map__32412__$1;
var files = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32565){
var state_val_32566 = (state_32565[(1)]);
if((state_val_32566 === (7))){
var inst_32426 = (state_32565[(7)]);
var inst_32428 = (state_32565[(8)]);
var inst_32427 = (state_32565[(9)]);
var inst_32429 = (state_32565[(10)]);
var inst_32434 = cljs.core._nth.call(null,inst_32427,inst_32429);
var inst_32435 = figwheel.client.file_reloading.eval_body.call(null,inst_32434,opts);
var inst_32436 = (inst_32429 + (1));
var tmp32567 = inst_32426;
var tmp32568 = inst_32428;
var tmp32569 = inst_32427;
var inst_32426__$1 = tmp32567;
var inst_32427__$1 = tmp32569;
var inst_32428__$1 = tmp32568;
var inst_32429__$1 = inst_32436;
var state_32565__$1 = (function (){var statearr_32570 = state_32565;
(statearr_32570[(7)] = inst_32426__$1);

(statearr_32570[(8)] = inst_32428__$1);

(statearr_32570[(9)] = inst_32427__$1);

(statearr_32570[(11)] = inst_32435);

(statearr_32570[(10)] = inst_32429__$1);

return statearr_32570;
})();
var statearr_32571_32657 = state_32565__$1;
(statearr_32571_32657[(2)] = null);

(statearr_32571_32657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (20))){
var inst_32469 = (state_32565[(12)]);
var inst_32477 = figwheel.client.file_reloading.sort_files.call(null,inst_32469);
var state_32565__$1 = state_32565;
var statearr_32572_32658 = state_32565__$1;
(statearr_32572_32658[(2)] = inst_32477);

(statearr_32572_32658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (27))){
var state_32565__$1 = state_32565;
var statearr_32573_32659 = state_32565__$1;
(statearr_32573_32659[(2)] = null);

(statearr_32573_32659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (1))){
var inst_32418 = (state_32565[(13)]);
var inst_32415 = before_jsload.call(null,files);
var inst_32416 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32417 = (function (){return ((function (inst_32418,inst_32415,inst_32416,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32160_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32160_SHARP_);
});
;})(inst_32418,inst_32415,inst_32416,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32418__$1 = cljs.core.filter.call(null,inst_32417,files);
var inst_32419 = cljs.core.not_empty.call(null,inst_32418__$1);
var state_32565__$1 = (function (){var statearr_32574 = state_32565;
(statearr_32574[(14)] = inst_32416);

(statearr_32574[(13)] = inst_32418__$1);

(statearr_32574[(15)] = inst_32415);

return statearr_32574;
})();
if(cljs.core.truth_(inst_32419)){
var statearr_32575_32660 = state_32565__$1;
(statearr_32575_32660[(1)] = (2));

} else {
var statearr_32576_32661 = state_32565__$1;
(statearr_32576_32661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (24))){
var state_32565__$1 = state_32565;
var statearr_32577_32662 = state_32565__$1;
(statearr_32577_32662[(2)] = null);

(statearr_32577_32662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (39))){
var inst_32519 = (state_32565[(16)]);
var state_32565__$1 = state_32565;
var statearr_32578_32663 = state_32565__$1;
(statearr_32578_32663[(2)] = inst_32519);

(statearr_32578_32663[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (46))){
var inst_32560 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32579_32664 = state_32565__$1;
(statearr_32579_32664[(2)] = inst_32560);

(statearr_32579_32664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (4))){
var inst_32463 = (state_32565[(2)]);
var inst_32464 = cljs.core.List.EMPTY;
var inst_32465 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32464);
var inst_32466 = (function (){return ((function (inst_32463,inst_32464,inst_32465,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32161_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32161_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32161_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32161_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_32463,inst_32464,inst_32465,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32467 = cljs.core.filter.call(null,inst_32466,files);
var inst_32468 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32469 = cljs.core.concat.call(null,inst_32467,inst_32468);
var state_32565__$1 = (function (){var statearr_32580 = state_32565;
(statearr_32580[(17)] = inst_32465);

(statearr_32580[(18)] = inst_32463);

(statearr_32580[(12)] = inst_32469);

return statearr_32580;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32581_32665 = state_32565__$1;
(statearr_32581_32665[(1)] = (16));

} else {
var statearr_32582_32666 = state_32565__$1;
(statearr_32582_32666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (15))){
var inst_32453 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32583_32667 = state_32565__$1;
(statearr_32583_32667[(2)] = inst_32453);

(statearr_32583_32667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (21))){
var inst_32479 = (state_32565[(19)]);
var inst_32479__$1 = (state_32565[(2)]);
var inst_32480 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32479__$1);
var state_32565__$1 = (function (){var statearr_32584 = state_32565;
(statearr_32584[(19)] = inst_32479__$1);

return statearr_32584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32565__$1,(22),inst_32480);
} else {
if((state_val_32566 === (31))){
var inst_32563 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32565__$1,inst_32563);
} else {
if((state_val_32566 === (32))){
var inst_32519 = (state_32565[(16)]);
var inst_32524 = inst_32519.cljs$lang$protocol_mask$partition0$;
var inst_32525 = (inst_32524 & (64));
var inst_32526 = inst_32519.cljs$core$ISeq$;
var inst_32527 = (inst_32525) || (inst_32526);
var state_32565__$1 = state_32565;
if(cljs.core.truth_(inst_32527)){
var statearr_32585_32668 = state_32565__$1;
(statearr_32585_32668[(1)] = (35));

} else {
var statearr_32586_32669 = state_32565__$1;
(statearr_32586_32669[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (40))){
var inst_32540 = (state_32565[(20)]);
var inst_32539 = (state_32565[(2)]);
var inst_32540__$1 = cljs.core.get.call(null,inst_32539,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32541 = cljs.core.get.call(null,inst_32539,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32542 = cljs.core.not_empty.call(null,inst_32540__$1);
var state_32565__$1 = (function (){var statearr_32587 = state_32565;
(statearr_32587[(20)] = inst_32540__$1);

(statearr_32587[(21)] = inst_32541);

return statearr_32587;
})();
if(cljs.core.truth_(inst_32542)){
var statearr_32588_32670 = state_32565__$1;
(statearr_32588_32670[(1)] = (41));

} else {
var statearr_32589_32671 = state_32565__$1;
(statearr_32589_32671[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (33))){
var state_32565__$1 = state_32565;
var statearr_32590_32672 = state_32565__$1;
(statearr_32590_32672[(2)] = false);

(statearr_32590_32672[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (13))){
var inst_32439 = (state_32565[(22)]);
var inst_32443 = cljs.core.chunk_first.call(null,inst_32439);
var inst_32444 = cljs.core.chunk_rest.call(null,inst_32439);
var inst_32445 = cljs.core.count.call(null,inst_32443);
var inst_32426 = inst_32444;
var inst_32427 = inst_32443;
var inst_32428 = inst_32445;
var inst_32429 = (0);
var state_32565__$1 = (function (){var statearr_32591 = state_32565;
(statearr_32591[(7)] = inst_32426);

(statearr_32591[(8)] = inst_32428);

(statearr_32591[(9)] = inst_32427);

(statearr_32591[(10)] = inst_32429);

return statearr_32591;
})();
var statearr_32592_32673 = state_32565__$1;
(statearr_32592_32673[(2)] = null);

(statearr_32592_32673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (22))){
var inst_32483 = (state_32565[(23)]);
var inst_32487 = (state_32565[(24)]);
var inst_32479 = (state_32565[(19)]);
var inst_32482 = (state_32565[(25)]);
var inst_32482__$1 = (state_32565[(2)]);
var inst_32483__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32482__$1);
var inst_32484 = (function (){var all_files = inst_32479;
var res_SINGLEQUOTE_ = inst_32482__$1;
var res = inst_32483__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32483,inst_32487,inst_32479,inst_32482,inst_32482__$1,inst_32483__$1,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32162_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32162_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32483,inst_32487,inst_32479,inst_32482,inst_32482__$1,inst_32483__$1,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32485 = cljs.core.filter.call(null,inst_32484,inst_32482__$1);
var inst_32486 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32487__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32486);
var inst_32488 = cljs.core.not_empty.call(null,inst_32487__$1);
var state_32565__$1 = (function (){var statearr_32593 = state_32565;
(statearr_32593[(26)] = inst_32485);

(statearr_32593[(23)] = inst_32483__$1);

(statearr_32593[(24)] = inst_32487__$1);

(statearr_32593[(25)] = inst_32482__$1);

return statearr_32593;
})();
if(cljs.core.truth_(inst_32488)){
var statearr_32594_32674 = state_32565__$1;
(statearr_32594_32674[(1)] = (23));

} else {
var statearr_32595_32675 = state_32565__$1;
(statearr_32595_32675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (36))){
var state_32565__$1 = state_32565;
var statearr_32596_32676 = state_32565__$1;
(statearr_32596_32676[(2)] = false);

(statearr_32596_32676[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (41))){
var inst_32540 = (state_32565[(20)]);
var inst_32544 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32545 = cljs.core.map.call(null,inst_32544,inst_32540);
var inst_32546 = cljs.core.pr_str.call(null,inst_32545);
var inst_32547 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32546)].join('');
var inst_32548 = figwheel.client.utils.log.call(null,inst_32547);
var state_32565__$1 = state_32565;
var statearr_32597_32677 = state_32565__$1;
(statearr_32597_32677[(2)] = inst_32548);

(statearr_32597_32677[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (43))){
var inst_32541 = (state_32565[(21)]);
var inst_32551 = (state_32565[(2)]);
var inst_32552 = cljs.core.not_empty.call(null,inst_32541);
var state_32565__$1 = (function (){var statearr_32598 = state_32565;
(statearr_32598[(27)] = inst_32551);

return statearr_32598;
})();
if(cljs.core.truth_(inst_32552)){
var statearr_32599_32678 = state_32565__$1;
(statearr_32599_32678[(1)] = (44));

} else {
var statearr_32600_32679 = state_32565__$1;
(statearr_32600_32679[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (29))){
var inst_32485 = (state_32565[(26)]);
var inst_32483 = (state_32565[(23)]);
var inst_32487 = (state_32565[(24)]);
var inst_32479 = (state_32565[(19)]);
var inst_32519 = (state_32565[(16)]);
var inst_32482 = (state_32565[(25)]);
var inst_32515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32518 = (function (){var all_files = inst_32479;
var res_SINGLEQUOTE_ = inst_32482;
var res = inst_32483;
var files_not_loaded = inst_32485;
var dependencies_that_loaded = inst_32487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32519,inst_32482,inst_32515,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32517){
var map__32601 = p__32517;
var map__32601__$1 = ((((!((map__32601 == null)))?((((map__32601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32601):map__32601);
var namespace = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32519,inst_32482,inst_32515,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32519__$1 = cljs.core.group_by.call(null,inst_32518,inst_32485);
var inst_32521 = (inst_32519__$1 == null);
var inst_32522 = cljs.core.not.call(null,inst_32521);
var state_32565__$1 = (function (){var statearr_32603 = state_32565;
(statearr_32603[(28)] = inst_32515);

(statearr_32603[(16)] = inst_32519__$1);

return statearr_32603;
})();
if(inst_32522){
var statearr_32604_32680 = state_32565__$1;
(statearr_32604_32680[(1)] = (32));

} else {
var statearr_32605_32681 = state_32565__$1;
(statearr_32605_32681[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (44))){
var inst_32541 = (state_32565[(21)]);
var inst_32554 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32541);
var inst_32555 = cljs.core.pr_str.call(null,inst_32554);
var inst_32556 = [cljs.core.str("not required: "),cljs.core.str(inst_32555)].join('');
var inst_32557 = figwheel.client.utils.log.call(null,inst_32556);
var state_32565__$1 = state_32565;
var statearr_32606_32682 = state_32565__$1;
(statearr_32606_32682[(2)] = inst_32557);

(statearr_32606_32682[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (6))){
var inst_32460 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32607_32683 = state_32565__$1;
(statearr_32607_32683[(2)] = inst_32460);

(statearr_32607_32683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (28))){
var inst_32485 = (state_32565[(26)]);
var inst_32512 = (state_32565[(2)]);
var inst_32513 = cljs.core.not_empty.call(null,inst_32485);
var state_32565__$1 = (function (){var statearr_32608 = state_32565;
(statearr_32608[(29)] = inst_32512);

return statearr_32608;
})();
if(cljs.core.truth_(inst_32513)){
var statearr_32609_32684 = state_32565__$1;
(statearr_32609_32684[(1)] = (29));

} else {
var statearr_32610_32685 = state_32565__$1;
(statearr_32610_32685[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (25))){
var inst_32483 = (state_32565[(23)]);
var inst_32499 = (state_32565[(2)]);
var inst_32500 = cljs.core.not_empty.call(null,inst_32483);
var state_32565__$1 = (function (){var statearr_32611 = state_32565;
(statearr_32611[(30)] = inst_32499);

return statearr_32611;
})();
if(cljs.core.truth_(inst_32500)){
var statearr_32612_32686 = state_32565__$1;
(statearr_32612_32686[(1)] = (26));

} else {
var statearr_32613_32687 = state_32565__$1;
(statearr_32613_32687[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (34))){
var inst_32534 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
if(cljs.core.truth_(inst_32534)){
var statearr_32614_32688 = state_32565__$1;
(statearr_32614_32688[(1)] = (38));

} else {
var statearr_32615_32689 = state_32565__$1;
(statearr_32615_32689[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (17))){
var state_32565__$1 = state_32565;
var statearr_32616_32690 = state_32565__$1;
(statearr_32616_32690[(2)] = recompile_dependents);

(statearr_32616_32690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (3))){
var state_32565__$1 = state_32565;
var statearr_32617_32691 = state_32565__$1;
(statearr_32617_32691[(2)] = null);

(statearr_32617_32691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (12))){
var inst_32456 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32618_32692 = state_32565__$1;
(statearr_32618_32692[(2)] = inst_32456);

(statearr_32618_32692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (2))){
var inst_32418 = (state_32565[(13)]);
var inst_32425 = cljs.core.seq.call(null,inst_32418);
var inst_32426 = inst_32425;
var inst_32427 = null;
var inst_32428 = (0);
var inst_32429 = (0);
var state_32565__$1 = (function (){var statearr_32619 = state_32565;
(statearr_32619[(7)] = inst_32426);

(statearr_32619[(8)] = inst_32428);

(statearr_32619[(9)] = inst_32427);

(statearr_32619[(10)] = inst_32429);

return statearr_32619;
})();
var statearr_32620_32693 = state_32565__$1;
(statearr_32620_32693[(2)] = null);

(statearr_32620_32693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (23))){
var inst_32485 = (state_32565[(26)]);
var inst_32483 = (state_32565[(23)]);
var inst_32487 = (state_32565[(24)]);
var inst_32479 = (state_32565[(19)]);
var inst_32482 = (state_32565[(25)]);
var inst_32490 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32492 = (function (){var all_files = inst_32479;
var res_SINGLEQUOTE_ = inst_32482;
var res = inst_32483;
var files_not_loaded = inst_32485;
var dependencies_that_loaded = inst_32487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32482,inst_32490,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32491){
var map__32621 = p__32491;
var map__32621__$1 = ((((!((map__32621 == null)))?((((map__32621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32621):map__32621);
var request_url = cljs.core.get.call(null,map__32621__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32482,inst_32490,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32493 = cljs.core.reverse.call(null,inst_32487);
var inst_32494 = cljs.core.map.call(null,inst_32492,inst_32493);
var inst_32495 = cljs.core.pr_str.call(null,inst_32494);
var inst_32496 = figwheel.client.utils.log.call(null,inst_32495);
var state_32565__$1 = (function (){var statearr_32623 = state_32565;
(statearr_32623[(31)] = inst_32490);

return statearr_32623;
})();
var statearr_32624_32694 = state_32565__$1;
(statearr_32624_32694[(2)] = inst_32496);

(statearr_32624_32694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (35))){
var state_32565__$1 = state_32565;
var statearr_32625_32695 = state_32565__$1;
(statearr_32625_32695[(2)] = true);

(statearr_32625_32695[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (19))){
var inst_32469 = (state_32565[(12)]);
var inst_32475 = figwheel.client.file_reloading.expand_files.call(null,inst_32469);
var state_32565__$1 = state_32565;
var statearr_32626_32696 = state_32565__$1;
(statearr_32626_32696[(2)] = inst_32475);

(statearr_32626_32696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (11))){
var state_32565__$1 = state_32565;
var statearr_32627_32697 = state_32565__$1;
(statearr_32627_32697[(2)] = null);

(statearr_32627_32697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (9))){
var inst_32458 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32628_32698 = state_32565__$1;
(statearr_32628_32698[(2)] = inst_32458);

(statearr_32628_32698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (5))){
var inst_32428 = (state_32565[(8)]);
var inst_32429 = (state_32565[(10)]);
var inst_32431 = (inst_32429 < inst_32428);
var inst_32432 = inst_32431;
var state_32565__$1 = state_32565;
if(cljs.core.truth_(inst_32432)){
var statearr_32629_32699 = state_32565__$1;
(statearr_32629_32699[(1)] = (7));

} else {
var statearr_32630_32700 = state_32565__$1;
(statearr_32630_32700[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (14))){
var inst_32439 = (state_32565[(22)]);
var inst_32448 = cljs.core.first.call(null,inst_32439);
var inst_32449 = figwheel.client.file_reloading.eval_body.call(null,inst_32448,opts);
var inst_32450 = cljs.core.next.call(null,inst_32439);
var inst_32426 = inst_32450;
var inst_32427 = null;
var inst_32428 = (0);
var inst_32429 = (0);
var state_32565__$1 = (function (){var statearr_32631 = state_32565;
(statearr_32631[(7)] = inst_32426);

(statearr_32631[(8)] = inst_32428);

(statearr_32631[(32)] = inst_32449);

(statearr_32631[(9)] = inst_32427);

(statearr_32631[(10)] = inst_32429);

return statearr_32631;
})();
var statearr_32632_32701 = state_32565__$1;
(statearr_32632_32701[(2)] = null);

(statearr_32632_32701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (45))){
var state_32565__$1 = state_32565;
var statearr_32633_32702 = state_32565__$1;
(statearr_32633_32702[(2)] = null);

(statearr_32633_32702[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (26))){
var inst_32485 = (state_32565[(26)]);
var inst_32483 = (state_32565[(23)]);
var inst_32487 = (state_32565[(24)]);
var inst_32479 = (state_32565[(19)]);
var inst_32482 = (state_32565[(25)]);
var inst_32502 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32504 = (function (){var all_files = inst_32479;
var res_SINGLEQUOTE_ = inst_32482;
var res = inst_32483;
var files_not_loaded = inst_32485;
var dependencies_that_loaded = inst_32487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32482,inst_32502,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32503){
var map__32634 = p__32503;
var map__32634__$1 = ((((!((map__32634 == null)))?((((map__32634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32634):map__32634);
var namespace = cljs.core.get.call(null,map__32634__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32482,inst_32502,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32505 = cljs.core.map.call(null,inst_32504,inst_32483);
var inst_32506 = cljs.core.pr_str.call(null,inst_32505);
var inst_32507 = figwheel.client.utils.log.call(null,inst_32506);
var inst_32508 = (function (){var all_files = inst_32479;
var res_SINGLEQUOTE_ = inst_32482;
var res = inst_32483;
var files_not_loaded = inst_32485;
var dependencies_that_loaded = inst_32487;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32482,inst_32502,inst_32504,inst_32505,inst_32506,inst_32507,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32483,inst_32487,inst_32479,inst_32482,inst_32502,inst_32504,inst_32505,inst_32506,inst_32507,state_val_32566,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32509 = setTimeout(inst_32508,(10));
var state_32565__$1 = (function (){var statearr_32636 = state_32565;
(statearr_32636[(33)] = inst_32502);

(statearr_32636[(34)] = inst_32507);

return statearr_32636;
})();
var statearr_32637_32703 = state_32565__$1;
(statearr_32637_32703[(2)] = inst_32509);

(statearr_32637_32703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (16))){
var state_32565__$1 = state_32565;
var statearr_32638_32704 = state_32565__$1;
(statearr_32638_32704[(2)] = reload_dependents);

(statearr_32638_32704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (38))){
var inst_32519 = (state_32565[(16)]);
var inst_32536 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32519);
var state_32565__$1 = state_32565;
var statearr_32639_32705 = state_32565__$1;
(statearr_32639_32705[(2)] = inst_32536);

(statearr_32639_32705[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (30))){
var state_32565__$1 = state_32565;
var statearr_32640_32706 = state_32565__$1;
(statearr_32640_32706[(2)] = null);

(statearr_32640_32706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (10))){
var inst_32439 = (state_32565[(22)]);
var inst_32441 = cljs.core.chunked_seq_QMARK_.call(null,inst_32439);
var state_32565__$1 = state_32565;
if(inst_32441){
var statearr_32641_32707 = state_32565__$1;
(statearr_32641_32707[(1)] = (13));

} else {
var statearr_32642_32708 = state_32565__$1;
(statearr_32642_32708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (18))){
var inst_32473 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
if(cljs.core.truth_(inst_32473)){
var statearr_32643_32709 = state_32565__$1;
(statearr_32643_32709[(1)] = (19));

} else {
var statearr_32644_32710 = state_32565__$1;
(statearr_32644_32710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (42))){
var state_32565__$1 = state_32565;
var statearr_32645_32711 = state_32565__$1;
(statearr_32645_32711[(2)] = null);

(statearr_32645_32711[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (37))){
var inst_32531 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32646_32712 = state_32565__$1;
(statearr_32646_32712[(2)] = inst_32531);

(statearr_32646_32712[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32566 === (8))){
var inst_32426 = (state_32565[(7)]);
var inst_32439 = (state_32565[(22)]);
var inst_32439__$1 = cljs.core.seq.call(null,inst_32426);
var state_32565__$1 = (function (){var statearr_32647 = state_32565;
(statearr_32647[(22)] = inst_32439__$1);

return statearr_32647;
})();
if(inst_32439__$1){
var statearr_32648_32713 = state_32565__$1;
(statearr_32648_32713[(1)] = (10));

} else {
var statearr_32649_32714 = state_32565__$1;
(statearr_32649_32714[(1)] = (11));

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
});})(c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26910__auto__,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____1 = (function (state_32565){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_32565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e32654){if((e32654 instanceof Object)){
var ex__26914__auto__ = e32654;
var statearr_32655_32715 = state_32565;
(statearr_32655_32715[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32716 = state_32565;
state_32565 = G__32716;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__ = function(state_32565){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____1.call(this,state_32565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27024__auto__ = (function (){var statearr_32656 = f__27023__auto__.call(null);
(statearr_32656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_32656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__,map__32411,map__32411__$1,opts,before_jsload,on_jsload,reload_dependents,map__32412,map__32412__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27022__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32719,link){
var map__32722 = p__32719;
var map__32722__$1 = ((((!((map__32722 == null)))?((((map__32722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32722):map__32722);
var file = cljs.core.get.call(null,map__32722__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32722,map__32722__$1,file){
return (function (p1__32717_SHARP_,p2__32718_SHARP_){
if(cljs.core._EQ_.call(null,p1__32717_SHARP_,p2__32718_SHARP_)){
return p1__32717_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32722,map__32722__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32728){
var map__32729 = p__32728;
var map__32729__$1 = ((((!((map__32729 == null)))?((((map__32729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32729):map__32729);
var match_length = cljs.core.get.call(null,map__32729__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32729__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32724_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32724_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32731_SHARP_,p2__32732_SHARP_){
return cljs.core.assoc.call(null,p1__32731_SHARP_,cljs.core.get.call(null,p2__32732_SHARP_,key),p2__32732_SHARP_);
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
var loaded_f_datas_32733 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32733);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32733);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32734,p__32735){
var map__32740 = p__32734;
var map__32740__$1 = ((((!((map__32740 == null)))?((((map__32740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32740):map__32740);
var on_cssload = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32741 = p__32735;
var map__32741__$1 = ((((!((map__32741 == null)))?((((map__32741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32741):map__32741);
var files_msg = map__32741__$1;
var files = cljs.core.get.call(null,map__32741__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1489514031306