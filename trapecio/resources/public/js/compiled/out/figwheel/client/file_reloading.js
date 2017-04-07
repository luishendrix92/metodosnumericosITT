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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32294_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32294_SHARP_));
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
var seq__32299 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32300 = null;
var count__32301 = (0);
var i__32302 = (0);
while(true){
if((i__32302 < count__32301)){
var n = cljs.core._nth.call(null,chunk__32300,i__32302);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32303 = seq__32299;
var G__32304 = chunk__32300;
var G__32305 = count__32301;
var G__32306 = (i__32302 + (1));
seq__32299 = G__32303;
chunk__32300 = G__32304;
count__32301 = G__32305;
i__32302 = G__32306;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32299);
if(temp__4657__auto__){
var seq__32299__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32299__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__32299__$1);
var G__32307 = cljs.core.chunk_rest.call(null,seq__32299__$1);
var G__32308 = c__25659__auto__;
var G__32309 = cljs.core.count.call(null,c__25659__auto__);
var G__32310 = (0);
seq__32299 = G__32307;
chunk__32300 = G__32308;
count__32301 = G__32309;
i__32302 = G__32310;
continue;
} else {
var n = cljs.core.first.call(null,seq__32299__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32311 = cljs.core.next.call(null,seq__32299__$1);
var G__32312 = null;
var G__32313 = (0);
var G__32314 = (0);
seq__32299 = G__32311;
chunk__32300 = G__32312;
count__32301 = G__32313;
i__32302 = G__32314;
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

var seq__32365_32376 = cljs.core.seq.call(null,deps);
var chunk__32366_32377 = null;
var count__32367_32378 = (0);
var i__32368_32379 = (0);
while(true){
if((i__32368_32379 < count__32367_32378)){
var dep_32380 = cljs.core._nth.call(null,chunk__32366_32377,i__32368_32379);
topo_sort_helper_STAR_.call(null,dep_32380,(depth + (1)),state);

var G__32381 = seq__32365_32376;
var G__32382 = chunk__32366_32377;
var G__32383 = count__32367_32378;
var G__32384 = (i__32368_32379 + (1));
seq__32365_32376 = G__32381;
chunk__32366_32377 = G__32382;
count__32367_32378 = G__32383;
i__32368_32379 = G__32384;
continue;
} else {
var temp__4657__auto___32385 = cljs.core.seq.call(null,seq__32365_32376);
if(temp__4657__auto___32385){
var seq__32365_32386__$1 = temp__4657__auto___32385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32365_32386__$1)){
var c__25659__auto___32387 = cljs.core.chunk_first.call(null,seq__32365_32386__$1);
var G__32388 = cljs.core.chunk_rest.call(null,seq__32365_32386__$1);
var G__32389 = c__25659__auto___32387;
var G__32390 = cljs.core.count.call(null,c__25659__auto___32387);
var G__32391 = (0);
seq__32365_32376 = G__32388;
chunk__32366_32377 = G__32389;
count__32367_32378 = G__32390;
i__32368_32379 = G__32391;
continue;
} else {
var dep_32392 = cljs.core.first.call(null,seq__32365_32386__$1);
topo_sort_helper_STAR_.call(null,dep_32392,(depth + (1)),state);

var G__32393 = cljs.core.next.call(null,seq__32365_32386__$1);
var G__32394 = null;
var G__32395 = (0);
var G__32396 = (0);
seq__32365_32376 = G__32393;
chunk__32366_32377 = G__32394;
count__32367_32378 = G__32395;
i__32368_32379 = G__32396;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32369){
var vec__32373 = p__32369;
var seq__32374 = cljs.core.seq.call(null,vec__32373);
var first__32375 = cljs.core.first.call(null,seq__32374);
var seq__32374__$1 = cljs.core.next.call(null,seq__32374);
var x = first__32375;
var xs = seq__32374__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32373,seq__32374,first__32375,seq__32374__$1,x,xs,get_deps__$1){
return (function (p1__32315_SHARP_){
return clojure.set.difference.call(null,p1__32315_SHARP_,x);
});})(vec__32373,seq__32374,first__32375,seq__32374__$1,x,xs,get_deps__$1))
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
var seq__32409 = cljs.core.seq.call(null,provides);
var chunk__32410 = null;
var count__32411 = (0);
var i__32412 = (0);
while(true){
if((i__32412 < count__32411)){
var prov = cljs.core._nth.call(null,chunk__32410,i__32412);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32413_32421 = cljs.core.seq.call(null,requires);
var chunk__32414_32422 = null;
var count__32415_32423 = (0);
var i__32416_32424 = (0);
while(true){
if((i__32416_32424 < count__32415_32423)){
var req_32425 = cljs.core._nth.call(null,chunk__32414_32422,i__32416_32424);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32425,prov);

var G__32426 = seq__32413_32421;
var G__32427 = chunk__32414_32422;
var G__32428 = count__32415_32423;
var G__32429 = (i__32416_32424 + (1));
seq__32413_32421 = G__32426;
chunk__32414_32422 = G__32427;
count__32415_32423 = G__32428;
i__32416_32424 = G__32429;
continue;
} else {
var temp__4657__auto___32430 = cljs.core.seq.call(null,seq__32413_32421);
if(temp__4657__auto___32430){
var seq__32413_32431__$1 = temp__4657__auto___32430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32413_32431__$1)){
var c__25659__auto___32432 = cljs.core.chunk_first.call(null,seq__32413_32431__$1);
var G__32433 = cljs.core.chunk_rest.call(null,seq__32413_32431__$1);
var G__32434 = c__25659__auto___32432;
var G__32435 = cljs.core.count.call(null,c__25659__auto___32432);
var G__32436 = (0);
seq__32413_32421 = G__32433;
chunk__32414_32422 = G__32434;
count__32415_32423 = G__32435;
i__32416_32424 = G__32436;
continue;
} else {
var req_32437 = cljs.core.first.call(null,seq__32413_32431__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32437,prov);

var G__32438 = cljs.core.next.call(null,seq__32413_32431__$1);
var G__32439 = null;
var G__32440 = (0);
var G__32441 = (0);
seq__32413_32421 = G__32438;
chunk__32414_32422 = G__32439;
count__32415_32423 = G__32440;
i__32416_32424 = G__32441;
continue;
}
} else {
}
}
break;
}

var G__32442 = seq__32409;
var G__32443 = chunk__32410;
var G__32444 = count__32411;
var G__32445 = (i__32412 + (1));
seq__32409 = G__32442;
chunk__32410 = G__32443;
count__32411 = G__32444;
i__32412 = G__32445;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32409);
if(temp__4657__auto__){
var seq__32409__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32409__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__32409__$1);
var G__32446 = cljs.core.chunk_rest.call(null,seq__32409__$1);
var G__32447 = c__25659__auto__;
var G__32448 = cljs.core.count.call(null,c__25659__auto__);
var G__32449 = (0);
seq__32409 = G__32446;
chunk__32410 = G__32447;
count__32411 = G__32448;
i__32412 = G__32449;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32409__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32417_32450 = cljs.core.seq.call(null,requires);
var chunk__32418_32451 = null;
var count__32419_32452 = (0);
var i__32420_32453 = (0);
while(true){
if((i__32420_32453 < count__32419_32452)){
var req_32454 = cljs.core._nth.call(null,chunk__32418_32451,i__32420_32453);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32454,prov);

var G__32455 = seq__32417_32450;
var G__32456 = chunk__32418_32451;
var G__32457 = count__32419_32452;
var G__32458 = (i__32420_32453 + (1));
seq__32417_32450 = G__32455;
chunk__32418_32451 = G__32456;
count__32419_32452 = G__32457;
i__32420_32453 = G__32458;
continue;
} else {
var temp__4657__auto___32459__$1 = cljs.core.seq.call(null,seq__32417_32450);
if(temp__4657__auto___32459__$1){
var seq__32417_32460__$1 = temp__4657__auto___32459__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32417_32460__$1)){
var c__25659__auto___32461 = cljs.core.chunk_first.call(null,seq__32417_32460__$1);
var G__32462 = cljs.core.chunk_rest.call(null,seq__32417_32460__$1);
var G__32463 = c__25659__auto___32461;
var G__32464 = cljs.core.count.call(null,c__25659__auto___32461);
var G__32465 = (0);
seq__32417_32450 = G__32462;
chunk__32418_32451 = G__32463;
count__32419_32452 = G__32464;
i__32420_32453 = G__32465;
continue;
} else {
var req_32466 = cljs.core.first.call(null,seq__32417_32460__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32466,prov);

var G__32467 = cljs.core.next.call(null,seq__32417_32460__$1);
var G__32468 = null;
var G__32469 = (0);
var G__32470 = (0);
seq__32417_32450 = G__32467;
chunk__32418_32451 = G__32468;
count__32419_32452 = G__32469;
i__32420_32453 = G__32470;
continue;
}
} else {
}
}
break;
}

var G__32471 = cljs.core.next.call(null,seq__32409__$1);
var G__32472 = null;
var G__32473 = (0);
var G__32474 = (0);
seq__32409 = G__32471;
chunk__32410 = G__32472;
count__32411 = G__32473;
i__32412 = G__32474;
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
var seq__32479_32483 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32480_32484 = null;
var count__32481_32485 = (0);
var i__32482_32486 = (0);
while(true){
if((i__32482_32486 < count__32481_32485)){
var ns_32487 = cljs.core._nth.call(null,chunk__32480_32484,i__32482_32486);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32487);

var G__32488 = seq__32479_32483;
var G__32489 = chunk__32480_32484;
var G__32490 = count__32481_32485;
var G__32491 = (i__32482_32486 + (1));
seq__32479_32483 = G__32488;
chunk__32480_32484 = G__32489;
count__32481_32485 = G__32490;
i__32482_32486 = G__32491;
continue;
} else {
var temp__4657__auto___32492 = cljs.core.seq.call(null,seq__32479_32483);
if(temp__4657__auto___32492){
var seq__32479_32493__$1 = temp__4657__auto___32492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32479_32493__$1)){
var c__25659__auto___32494 = cljs.core.chunk_first.call(null,seq__32479_32493__$1);
var G__32495 = cljs.core.chunk_rest.call(null,seq__32479_32493__$1);
var G__32496 = c__25659__auto___32494;
var G__32497 = cljs.core.count.call(null,c__25659__auto___32494);
var G__32498 = (0);
seq__32479_32483 = G__32495;
chunk__32480_32484 = G__32496;
count__32481_32485 = G__32497;
i__32482_32486 = G__32498;
continue;
} else {
var ns_32499 = cljs.core.first.call(null,seq__32479_32493__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32499);

var G__32500 = cljs.core.next.call(null,seq__32479_32493__$1);
var G__32501 = null;
var G__32502 = (0);
var G__32503 = (0);
seq__32479_32483 = G__32500;
chunk__32480_32484 = G__32501;
count__32481_32485 = G__32502;
i__32482_32486 = G__32503;
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
var G__32504__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32505__i = 0, G__32505__a = new Array(arguments.length -  0);
while (G__32505__i < G__32505__a.length) {G__32505__a[G__32505__i] = arguments[G__32505__i + 0]; ++G__32505__i;}
  args = new cljs.core.IndexedSeq(G__32505__a,0);
} 
return G__32504__delegate.call(this,args);};
G__32504.cljs$lang$maxFixedArity = 0;
G__32504.cljs$lang$applyTo = (function (arglist__32506){
var args = cljs.core.seq(arglist__32506);
return G__32504__delegate(args);
});
G__32504.cljs$core$IFn$_invoke$arity$variadic = G__32504__delegate;
return G__32504;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32507 = cljs.core._EQ_;
var expr__32508 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32507.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32508))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__32507,expr__32508){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__32507,expr__32508))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__32507,expr__32508){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32510){if((e32510 instanceof Error)){
var e = e32510;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32510;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__32507,expr__32508))
} else {
if(cljs.core.truth_(pred__32507.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32508))){
return ((function (pred__32507,expr__32508){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32507,expr__32508){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32507,expr__32508))
);

return deferred.addErrback(((function (deferred,pred__32507,expr__32508){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32507,expr__32508))
);
});
;})(pred__32507,expr__32508))
} else {
if(cljs.core.truth_(pred__32507.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32508))){
return ((function (pred__32507,expr__32508){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32511){if((e32511 instanceof Error)){
var e = e32511;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32511;

}
}})());
});
;})(pred__32507,expr__32508))
} else {
return ((function (pred__32507,expr__32508){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32507,expr__32508))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32512,callback){
var map__32515 = p__32512;
var map__32515__$1 = ((((!((map__32515 == null)))?((((map__32515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32515):map__32515);
var file_msg = map__32515__$1;
var request_url = cljs.core.get.call(null,map__32515__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32515,map__32515__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32515,map__32515__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__){
return (function (state_32539){
var state_val_32540 = (state_32539[(1)]);
if((state_val_32540 === (7))){
var inst_32535 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32541_32561 = state_32539__$1;
(statearr_32541_32561[(2)] = inst_32535);

(statearr_32541_32561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (1))){
var state_32539__$1 = state_32539;
var statearr_32542_32562 = state_32539__$1;
(statearr_32542_32562[(2)] = null);

(statearr_32542_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (4))){
var inst_32519 = (state_32539[(7)]);
var inst_32519__$1 = (state_32539[(2)]);
var state_32539__$1 = (function (){var statearr_32543 = state_32539;
(statearr_32543[(7)] = inst_32519__$1);

return statearr_32543;
})();
if(cljs.core.truth_(inst_32519__$1)){
var statearr_32544_32563 = state_32539__$1;
(statearr_32544_32563[(1)] = (5));

} else {
var statearr_32545_32564 = state_32539__$1;
(statearr_32545_32564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (6))){
var state_32539__$1 = state_32539;
var statearr_32546_32565 = state_32539__$1;
(statearr_32546_32565[(2)] = null);

(statearr_32546_32565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (3))){
var inst_32537 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32539__$1,inst_32537);
} else {
if((state_val_32540 === (2))){
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32539__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32540 === (11))){
var inst_32531 = (state_32539[(2)]);
var state_32539__$1 = (function (){var statearr_32547 = state_32539;
(statearr_32547[(8)] = inst_32531);

return statearr_32547;
})();
var statearr_32548_32566 = state_32539__$1;
(statearr_32548_32566[(2)] = null);

(statearr_32548_32566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (9))){
var inst_32523 = (state_32539[(9)]);
var inst_32525 = (state_32539[(10)]);
var inst_32527 = inst_32525.call(null,inst_32523);
var state_32539__$1 = state_32539;
var statearr_32549_32567 = state_32539__$1;
(statearr_32549_32567[(2)] = inst_32527);

(statearr_32549_32567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (5))){
var inst_32519 = (state_32539[(7)]);
var inst_32521 = figwheel.client.file_reloading.blocking_load.call(null,inst_32519);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32539__$1,(8),inst_32521);
} else {
if((state_val_32540 === (10))){
var inst_32523 = (state_32539[(9)]);
var inst_32529 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32523);
var state_32539__$1 = state_32539;
var statearr_32550_32568 = state_32539__$1;
(statearr_32550_32568[(2)] = inst_32529);

(statearr_32550_32568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (8))){
var inst_32519 = (state_32539[(7)]);
var inst_32525 = (state_32539[(10)]);
var inst_32523 = (state_32539[(2)]);
var inst_32524 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32525__$1 = cljs.core.get.call(null,inst_32524,inst_32519);
var state_32539__$1 = (function (){var statearr_32551 = state_32539;
(statearr_32551[(9)] = inst_32523);

(statearr_32551[(10)] = inst_32525__$1);

return statearr_32551;
})();
if(cljs.core.truth_(inst_32525__$1)){
var statearr_32552_32569 = state_32539__$1;
(statearr_32552_32569[(1)] = (9));

} else {
var statearr_32553_32570 = state_32539__$1;
(statearr_32553_32570[(1)] = (10));

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
});})(c__27712__auto__))
;
return ((function (switch__27600__auto__,c__27712__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27601__auto__ = null;
var figwheel$client$file_reloading$state_machine__27601__auto____0 = (function (){
var statearr_32557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32557[(0)] = figwheel$client$file_reloading$state_machine__27601__auto__);

(statearr_32557[(1)] = (1));

return statearr_32557;
});
var figwheel$client$file_reloading$state_machine__27601__auto____1 = (function (state_32539){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_32539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e32558){if((e32558 instanceof Object)){
var ex__27604__auto__ = e32558;
var statearr_32559_32571 = state_32539;
(statearr_32559_32571[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32572 = state_32539;
state_32539 = G__32572;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27601__auto__ = function(state_32539){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27601__auto____1.call(this,state_32539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27601__auto____0;
figwheel$client$file_reloading$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27601__auto____1;
return figwheel$client$file_reloading$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__))
})();
var state__27714__auto__ = (function (){var statearr_32560 = f__27713__auto__.call(null);
(statearr_32560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_32560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__))
);

return c__27712__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32573,callback){
var map__32576 = p__32573;
var map__32576__$1 = ((((!((map__32576 == null)))?((((map__32576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32576):map__32576);
var file_msg = map__32576__$1;
var namespace = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32576,map__32576__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32576,map__32576__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32578){
var map__32581 = p__32578;
var map__32581__$1 = ((((!((map__32581 == null)))?((((map__32581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32581):map__32581);
var file_msg = map__32581__$1;
var namespace = cljs.core.get.call(null,map__32581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32583){
var map__32586 = p__32583;
var map__32586__$1 = ((((!((map__32586 == null)))?((((map__32586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32586):map__32586);
var file_msg = map__32586__$1;
var namespace = cljs.core.get.call(null,map__32586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32588,callback){
var map__32591 = p__32588;
var map__32591__$1 = ((((!((map__32591 == null)))?((((map__32591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32591):map__32591);
var file_msg = map__32591__$1;
var request_url = cljs.core.get.call(null,map__32591__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32591__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27712__auto___32695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___32695,out){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___32695,out){
return (function (state_32677){
var state_val_32678 = (state_32677[(1)]);
if((state_val_32678 === (1))){
var inst_32651 = cljs.core.seq.call(null,files);
var inst_32652 = cljs.core.first.call(null,inst_32651);
var inst_32653 = cljs.core.next.call(null,inst_32651);
var inst_32654 = files;
var state_32677__$1 = (function (){var statearr_32679 = state_32677;
(statearr_32679[(7)] = inst_32654);

(statearr_32679[(8)] = inst_32652);

(statearr_32679[(9)] = inst_32653);

return statearr_32679;
})();
var statearr_32680_32696 = state_32677__$1;
(statearr_32680_32696[(2)] = null);

(statearr_32680_32696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (2))){
var inst_32654 = (state_32677[(7)]);
var inst_32660 = (state_32677[(10)]);
var inst_32659 = cljs.core.seq.call(null,inst_32654);
var inst_32660__$1 = cljs.core.first.call(null,inst_32659);
var inst_32661 = cljs.core.next.call(null,inst_32659);
var inst_32662 = (inst_32660__$1 == null);
var inst_32663 = cljs.core.not.call(null,inst_32662);
var state_32677__$1 = (function (){var statearr_32681 = state_32677;
(statearr_32681[(11)] = inst_32661);

(statearr_32681[(10)] = inst_32660__$1);

return statearr_32681;
})();
if(inst_32663){
var statearr_32682_32697 = state_32677__$1;
(statearr_32682_32697[(1)] = (4));

} else {
var statearr_32683_32698 = state_32677__$1;
(statearr_32683_32698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (3))){
var inst_32675 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32677__$1,inst_32675);
} else {
if((state_val_32678 === (4))){
var inst_32660 = (state_32677[(10)]);
var inst_32665 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32660);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32677__$1,(7),inst_32665);
} else {
if((state_val_32678 === (5))){
var inst_32671 = cljs.core.async.close_BANG_.call(null,out);
var state_32677__$1 = state_32677;
var statearr_32684_32699 = state_32677__$1;
(statearr_32684_32699[(2)] = inst_32671);

(statearr_32684_32699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (6))){
var inst_32673 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32685_32700 = state_32677__$1;
(statearr_32685_32700[(2)] = inst_32673);

(statearr_32685_32700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (7))){
var inst_32661 = (state_32677[(11)]);
var inst_32667 = (state_32677[(2)]);
var inst_32668 = cljs.core.async.put_BANG_.call(null,out,inst_32667);
var inst_32654 = inst_32661;
var state_32677__$1 = (function (){var statearr_32686 = state_32677;
(statearr_32686[(12)] = inst_32668);

(statearr_32686[(7)] = inst_32654);

return statearr_32686;
})();
var statearr_32687_32701 = state_32677__$1;
(statearr_32687_32701[(2)] = null);

(statearr_32687_32701[(1)] = (2));


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
});})(c__27712__auto___32695,out))
;
return ((function (switch__27600__auto__,c__27712__auto___32695,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto____0 = (function (){
var statearr_32691 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32691[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto__);

(statearr_32691[(1)] = (1));

return statearr_32691;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto____1 = (function (state_32677){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_32677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e32692){if((e32692 instanceof Object)){
var ex__27604__auto__ = e32692;
var statearr_32693_32702 = state_32677;
(statearr_32693_32702[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32703 = state_32677;
state_32677 = G__32703;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto__ = function(state_32677){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto____1.call(this,state_32677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___32695,out))
})();
var state__27714__auto__ = (function (){var statearr_32694 = f__27713__auto__.call(null);
(statearr_32694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___32695);

return statearr_32694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___32695,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32704,opts){
var map__32708 = p__32704;
var map__32708__$1 = ((((!((map__32708 == null)))?((((map__32708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32708):map__32708);
var eval_body__$1 = cljs.core.get.call(null,map__32708__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32710){var e = e32710;
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
return (function (p1__32711_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32711_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32720){
var vec__32721 = p__32720;
var k = cljs.core.nth.call(null,vec__32721,(0),null);
var v = cljs.core.nth.call(null,vec__32721,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32724){
var vec__32725 = p__32724;
var k = cljs.core.nth.call(null,vec__32725,(0),null);
var v = cljs.core.nth.call(null,vec__32725,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32731,p__32732){
var map__32979 = p__32731;
var map__32979__$1 = ((((!((map__32979 == null)))?((((map__32979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var opts = map__32979__$1;
var before_jsload = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32980 = p__32732;
var map__32980__$1 = ((((!((map__32980 == null)))?((((map__32980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32980):map__32980);
var msg = map__32980__$1;
var files = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33133){
var state_val_33134 = (state_33133[(1)]);
if((state_val_33134 === (7))){
var inst_32995 = (state_33133[(7)]);
var inst_32994 = (state_33133[(8)]);
var inst_32996 = (state_33133[(9)]);
var inst_32997 = (state_33133[(10)]);
var inst_33002 = cljs.core._nth.call(null,inst_32995,inst_32997);
var inst_33003 = figwheel.client.file_reloading.eval_body.call(null,inst_33002,opts);
var inst_33004 = (inst_32997 + (1));
var tmp33135 = inst_32995;
var tmp33136 = inst_32994;
var tmp33137 = inst_32996;
var inst_32994__$1 = tmp33136;
var inst_32995__$1 = tmp33135;
var inst_32996__$1 = tmp33137;
var inst_32997__$1 = inst_33004;
var state_33133__$1 = (function (){var statearr_33138 = state_33133;
(statearr_33138[(11)] = inst_33003);

(statearr_33138[(7)] = inst_32995__$1);

(statearr_33138[(8)] = inst_32994__$1);

(statearr_33138[(9)] = inst_32996__$1);

(statearr_33138[(10)] = inst_32997__$1);

return statearr_33138;
})();
var statearr_33139_33225 = state_33133__$1;
(statearr_33139_33225[(2)] = null);

(statearr_33139_33225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (20))){
var inst_33037 = (state_33133[(12)]);
var inst_33045 = figwheel.client.file_reloading.sort_files.call(null,inst_33037);
var state_33133__$1 = state_33133;
var statearr_33140_33226 = state_33133__$1;
(statearr_33140_33226[(2)] = inst_33045);

(statearr_33140_33226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (27))){
var state_33133__$1 = state_33133;
var statearr_33141_33227 = state_33133__$1;
(statearr_33141_33227[(2)] = null);

(statearr_33141_33227[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (1))){
var inst_32986 = (state_33133[(13)]);
var inst_32983 = before_jsload.call(null,files);
var inst_32984 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32985 = (function (){return ((function (inst_32986,inst_32983,inst_32984,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32728_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32728_SHARP_);
});
;})(inst_32986,inst_32983,inst_32984,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32986__$1 = cljs.core.filter.call(null,inst_32985,files);
var inst_32987 = cljs.core.not_empty.call(null,inst_32986__$1);
var state_33133__$1 = (function (){var statearr_33142 = state_33133;
(statearr_33142[(13)] = inst_32986__$1);

(statearr_33142[(14)] = inst_32984);

(statearr_33142[(15)] = inst_32983);

return statearr_33142;
})();
if(cljs.core.truth_(inst_32987)){
var statearr_33143_33228 = state_33133__$1;
(statearr_33143_33228[(1)] = (2));

} else {
var statearr_33144_33229 = state_33133__$1;
(statearr_33144_33229[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (24))){
var state_33133__$1 = state_33133;
var statearr_33145_33230 = state_33133__$1;
(statearr_33145_33230[(2)] = null);

(statearr_33145_33230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (39))){
var inst_33087 = (state_33133[(16)]);
var state_33133__$1 = state_33133;
var statearr_33146_33231 = state_33133__$1;
(statearr_33146_33231[(2)] = inst_33087);

(statearr_33146_33231[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (46))){
var inst_33128 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33147_33232 = state_33133__$1;
(statearr_33147_33232[(2)] = inst_33128);

(statearr_33147_33232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (4))){
var inst_33031 = (state_33133[(2)]);
var inst_33032 = cljs.core.List.EMPTY;
var inst_33033 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33032);
var inst_33034 = (function (){return ((function (inst_33031,inst_33032,inst_33033,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32729_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32729_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32729_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32729_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_33031,inst_33032,inst_33033,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33035 = cljs.core.filter.call(null,inst_33034,files);
var inst_33036 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33037 = cljs.core.concat.call(null,inst_33035,inst_33036);
var state_33133__$1 = (function (){var statearr_33148 = state_33133;
(statearr_33148[(17)] = inst_33031);

(statearr_33148[(18)] = inst_33033);

(statearr_33148[(12)] = inst_33037);

return statearr_33148;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33149_33233 = state_33133__$1;
(statearr_33149_33233[(1)] = (16));

} else {
var statearr_33150_33234 = state_33133__$1;
(statearr_33150_33234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (15))){
var inst_33021 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33151_33235 = state_33133__$1;
(statearr_33151_33235[(2)] = inst_33021);

(statearr_33151_33235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (21))){
var inst_33047 = (state_33133[(19)]);
var inst_33047__$1 = (state_33133[(2)]);
var inst_33048 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33047__$1);
var state_33133__$1 = (function (){var statearr_33152 = state_33133;
(statearr_33152[(19)] = inst_33047__$1);

return statearr_33152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33133__$1,(22),inst_33048);
} else {
if((state_val_33134 === (31))){
var inst_33131 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33133__$1,inst_33131);
} else {
if((state_val_33134 === (32))){
var inst_33087 = (state_33133[(16)]);
var inst_33092 = inst_33087.cljs$lang$protocol_mask$partition0$;
var inst_33093 = (inst_33092 & (64));
var inst_33094 = inst_33087.cljs$core$ISeq$;
var inst_33095 = (inst_33093) || (inst_33094);
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33095)){
var statearr_33153_33236 = state_33133__$1;
(statearr_33153_33236[(1)] = (35));

} else {
var statearr_33154_33237 = state_33133__$1;
(statearr_33154_33237[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (40))){
var inst_33108 = (state_33133[(20)]);
var inst_33107 = (state_33133[(2)]);
var inst_33108__$1 = cljs.core.get.call(null,inst_33107,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33109 = cljs.core.get.call(null,inst_33107,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33110 = cljs.core.not_empty.call(null,inst_33108__$1);
var state_33133__$1 = (function (){var statearr_33155 = state_33133;
(statearr_33155[(21)] = inst_33109);

(statearr_33155[(20)] = inst_33108__$1);

return statearr_33155;
})();
if(cljs.core.truth_(inst_33110)){
var statearr_33156_33238 = state_33133__$1;
(statearr_33156_33238[(1)] = (41));

} else {
var statearr_33157_33239 = state_33133__$1;
(statearr_33157_33239[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (33))){
var state_33133__$1 = state_33133;
var statearr_33158_33240 = state_33133__$1;
(statearr_33158_33240[(2)] = false);

(statearr_33158_33240[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (13))){
var inst_33007 = (state_33133[(22)]);
var inst_33011 = cljs.core.chunk_first.call(null,inst_33007);
var inst_33012 = cljs.core.chunk_rest.call(null,inst_33007);
var inst_33013 = cljs.core.count.call(null,inst_33011);
var inst_32994 = inst_33012;
var inst_32995 = inst_33011;
var inst_32996 = inst_33013;
var inst_32997 = (0);
var state_33133__$1 = (function (){var statearr_33159 = state_33133;
(statearr_33159[(7)] = inst_32995);

(statearr_33159[(8)] = inst_32994);

(statearr_33159[(9)] = inst_32996);

(statearr_33159[(10)] = inst_32997);

return statearr_33159;
})();
var statearr_33160_33241 = state_33133__$1;
(statearr_33160_33241[(2)] = null);

(statearr_33160_33241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (22))){
var inst_33050 = (state_33133[(23)]);
var inst_33051 = (state_33133[(24)]);
var inst_33055 = (state_33133[(25)]);
var inst_33047 = (state_33133[(19)]);
var inst_33050__$1 = (state_33133[(2)]);
var inst_33051__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33050__$1);
var inst_33052 = (function (){var all_files = inst_33047;
var res_SINGLEQUOTE_ = inst_33050__$1;
var res = inst_33051__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33050,inst_33051,inst_33055,inst_33047,inst_33050__$1,inst_33051__$1,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32730_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32730_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33050,inst_33051,inst_33055,inst_33047,inst_33050__$1,inst_33051__$1,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33053 = cljs.core.filter.call(null,inst_33052,inst_33050__$1);
var inst_33054 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33055__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33054);
var inst_33056 = cljs.core.not_empty.call(null,inst_33055__$1);
var state_33133__$1 = (function (){var statearr_33161 = state_33133;
(statearr_33161[(23)] = inst_33050__$1);

(statearr_33161[(24)] = inst_33051__$1);

(statearr_33161[(25)] = inst_33055__$1);

(statearr_33161[(26)] = inst_33053);

return statearr_33161;
})();
if(cljs.core.truth_(inst_33056)){
var statearr_33162_33242 = state_33133__$1;
(statearr_33162_33242[(1)] = (23));

} else {
var statearr_33163_33243 = state_33133__$1;
(statearr_33163_33243[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (36))){
var state_33133__$1 = state_33133;
var statearr_33164_33244 = state_33133__$1;
(statearr_33164_33244[(2)] = false);

(statearr_33164_33244[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (41))){
var inst_33108 = (state_33133[(20)]);
var inst_33112 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33113 = cljs.core.map.call(null,inst_33112,inst_33108);
var inst_33114 = cljs.core.pr_str.call(null,inst_33113);
var inst_33115 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33114)].join('');
var inst_33116 = figwheel.client.utils.log.call(null,inst_33115);
var state_33133__$1 = state_33133;
var statearr_33165_33245 = state_33133__$1;
(statearr_33165_33245[(2)] = inst_33116);

(statearr_33165_33245[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (43))){
var inst_33109 = (state_33133[(21)]);
var inst_33119 = (state_33133[(2)]);
var inst_33120 = cljs.core.not_empty.call(null,inst_33109);
var state_33133__$1 = (function (){var statearr_33166 = state_33133;
(statearr_33166[(27)] = inst_33119);

return statearr_33166;
})();
if(cljs.core.truth_(inst_33120)){
var statearr_33167_33246 = state_33133__$1;
(statearr_33167_33246[(1)] = (44));

} else {
var statearr_33168_33247 = state_33133__$1;
(statearr_33168_33247[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (29))){
var inst_33050 = (state_33133[(23)]);
var inst_33051 = (state_33133[(24)]);
var inst_33055 = (state_33133[(25)]);
var inst_33087 = (state_33133[(16)]);
var inst_33053 = (state_33133[(26)]);
var inst_33047 = (state_33133[(19)]);
var inst_33083 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33086 = (function (){var all_files = inst_33047;
var res_SINGLEQUOTE_ = inst_33050;
var res = inst_33051;
var files_not_loaded = inst_33053;
var dependencies_that_loaded = inst_33055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33087,inst_33053,inst_33047,inst_33083,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33085){
var map__33169 = p__33085;
var map__33169__$1 = ((((!((map__33169 == null)))?((((map__33169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33169):map__33169);
var namespace = cljs.core.get.call(null,map__33169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33087,inst_33053,inst_33047,inst_33083,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33087__$1 = cljs.core.group_by.call(null,inst_33086,inst_33053);
var inst_33089 = (inst_33087__$1 == null);
var inst_33090 = cljs.core.not.call(null,inst_33089);
var state_33133__$1 = (function (){var statearr_33171 = state_33133;
(statearr_33171[(28)] = inst_33083);

(statearr_33171[(16)] = inst_33087__$1);

return statearr_33171;
})();
if(inst_33090){
var statearr_33172_33248 = state_33133__$1;
(statearr_33172_33248[(1)] = (32));

} else {
var statearr_33173_33249 = state_33133__$1;
(statearr_33173_33249[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (44))){
var inst_33109 = (state_33133[(21)]);
var inst_33122 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33109);
var inst_33123 = cljs.core.pr_str.call(null,inst_33122);
var inst_33124 = [cljs.core.str("not required: "),cljs.core.str(inst_33123)].join('');
var inst_33125 = figwheel.client.utils.log.call(null,inst_33124);
var state_33133__$1 = state_33133;
var statearr_33174_33250 = state_33133__$1;
(statearr_33174_33250[(2)] = inst_33125);

(statearr_33174_33250[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (6))){
var inst_33028 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33175_33251 = state_33133__$1;
(statearr_33175_33251[(2)] = inst_33028);

(statearr_33175_33251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (28))){
var inst_33053 = (state_33133[(26)]);
var inst_33080 = (state_33133[(2)]);
var inst_33081 = cljs.core.not_empty.call(null,inst_33053);
var state_33133__$1 = (function (){var statearr_33176 = state_33133;
(statearr_33176[(29)] = inst_33080);

return statearr_33176;
})();
if(cljs.core.truth_(inst_33081)){
var statearr_33177_33252 = state_33133__$1;
(statearr_33177_33252[(1)] = (29));

} else {
var statearr_33178_33253 = state_33133__$1;
(statearr_33178_33253[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (25))){
var inst_33051 = (state_33133[(24)]);
var inst_33067 = (state_33133[(2)]);
var inst_33068 = cljs.core.not_empty.call(null,inst_33051);
var state_33133__$1 = (function (){var statearr_33179 = state_33133;
(statearr_33179[(30)] = inst_33067);

return statearr_33179;
})();
if(cljs.core.truth_(inst_33068)){
var statearr_33180_33254 = state_33133__$1;
(statearr_33180_33254[(1)] = (26));

} else {
var statearr_33181_33255 = state_33133__$1;
(statearr_33181_33255[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (34))){
var inst_33102 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33102)){
var statearr_33182_33256 = state_33133__$1;
(statearr_33182_33256[(1)] = (38));

} else {
var statearr_33183_33257 = state_33133__$1;
(statearr_33183_33257[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (17))){
var state_33133__$1 = state_33133;
var statearr_33184_33258 = state_33133__$1;
(statearr_33184_33258[(2)] = recompile_dependents);

(statearr_33184_33258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (3))){
var state_33133__$1 = state_33133;
var statearr_33185_33259 = state_33133__$1;
(statearr_33185_33259[(2)] = null);

(statearr_33185_33259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (12))){
var inst_33024 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33186_33260 = state_33133__$1;
(statearr_33186_33260[(2)] = inst_33024);

(statearr_33186_33260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (2))){
var inst_32986 = (state_33133[(13)]);
var inst_32993 = cljs.core.seq.call(null,inst_32986);
var inst_32994 = inst_32993;
var inst_32995 = null;
var inst_32996 = (0);
var inst_32997 = (0);
var state_33133__$1 = (function (){var statearr_33187 = state_33133;
(statearr_33187[(7)] = inst_32995);

(statearr_33187[(8)] = inst_32994);

(statearr_33187[(9)] = inst_32996);

(statearr_33187[(10)] = inst_32997);

return statearr_33187;
})();
var statearr_33188_33261 = state_33133__$1;
(statearr_33188_33261[(2)] = null);

(statearr_33188_33261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (23))){
var inst_33050 = (state_33133[(23)]);
var inst_33051 = (state_33133[(24)]);
var inst_33055 = (state_33133[(25)]);
var inst_33053 = (state_33133[(26)]);
var inst_33047 = (state_33133[(19)]);
var inst_33058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33060 = (function (){var all_files = inst_33047;
var res_SINGLEQUOTE_ = inst_33050;
var res = inst_33051;
var files_not_loaded = inst_33053;
var dependencies_that_loaded = inst_33055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33053,inst_33047,inst_33058,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33059){
var map__33189 = p__33059;
var map__33189__$1 = ((((!((map__33189 == null)))?((((map__33189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33189):map__33189);
var request_url = cljs.core.get.call(null,map__33189__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33053,inst_33047,inst_33058,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33061 = cljs.core.reverse.call(null,inst_33055);
var inst_33062 = cljs.core.map.call(null,inst_33060,inst_33061);
var inst_33063 = cljs.core.pr_str.call(null,inst_33062);
var inst_33064 = figwheel.client.utils.log.call(null,inst_33063);
var state_33133__$1 = (function (){var statearr_33191 = state_33133;
(statearr_33191[(31)] = inst_33058);

return statearr_33191;
})();
var statearr_33192_33262 = state_33133__$1;
(statearr_33192_33262[(2)] = inst_33064);

(statearr_33192_33262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (35))){
var state_33133__$1 = state_33133;
var statearr_33193_33263 = state_33133__$1;
(statearr_33193_33263[(2)] = true);

(statearr_33193_33263[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (19))){
var inst_33037 = (state_33133[(12)]);
var inst_33043 = figwheel.client.file_reloading.expand_files.call(null,inst_33037);
var state_33133__$1 = state_33133;
var statearr_33194_33264 = state_33133__$1;
(statearr_33194_33264[(2)] = inst_33043);

(statearr_33194_33264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (11))){
var state_33133__$1 = state_33133;
var statearr_33195_33265 = state_33133__$1;
(statearr_33195_33265[(2)] = null);

(statearr_33195_33265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (9))){
var inst_33026 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33196_33266 = state_33133__$1;
(statearr_33196_33266[(2)] = inst_33026);

(statearr_33196_33266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (5))){
var inst_32996 = (state_33133[(9)]);
var inst_32997 = (state_33133[(10)]);
var inst_32999 = (inst_32997 < inst_32996);
var inst_33000 = inst_32999;
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33000)){
var statearr_33197_33267 = state_33133__$1;
(statearr_33197_33267[(1)] = (7));

} else {
var statearr_33198_33268 = state_33133__$1;
(statearr_33198_33268[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (14))){
var inst_33007 = (state_33133[(22)]);
var inst_33016 = cljs.core.first.call(null,inst_33007);
var inst_33017 = figwheel.client.file_reloading.eval_body.call(null,inst_33016,opts);
var inst_33018 = cljs.core.next.call(null,inst_33007);
var inst_32994 = inst_33018;
var inst_32995 = null;
var inst_32996 = (0);
var inst_32997 = (0);
var state_33133__$1 = (function (){var statearr_33199 = state_33133;
(statearr_33199[(7)] = inst_32995);

(statearr_33199[(8)] = inst_32994);

(statearr_33199[(32)] = inst_33017);

(statearr_33199[(9)] = inst_32996);

(statearr_33199[(10)] = inst_32997);

return statearr_33199;
})();
var statearr_33200_33269 = state_33133__$1;
(statearr_33200_33269[(2)] = null);

(statearr_33200_33269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (45))){
var state_33133__$1 = state_33133;
var statearr_33201_33270 = state_33133__$1;
(statearr_33201_33270[(2)] = null);

(statearr_33201_33270[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (26))){
var inst_33050 = (state_33133[(23)]);
var inst_33051 = (state_33133[(24)]);
var inst_33055 = (state_33133[(25)]);
var inst_33053 = (state_33133[(26)]);
var inst_33047 = (state_33133[(19)]);
var inst_33070 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33072 = (function (){var all_files = inst_33047;
var res_SINGLEQUOTE_ = inst_33050;
var res = inst_33051;
var files_not_loaded = inst_33053;
var dependencies_that_loaded = inst_33055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33053,inst_33047,inst_33070,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33071){
var map__33202 = p__33071;
var map__33202__$1 = ((((!((map__33202 == null)))?((((map__33202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33202):map__33202);
var namespace = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33053,inst_33047,inst_33070,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33073 = cljs.core.map.call(null,inst_33072,inst_33051);
var inst_33074 = cljs.core.pr_str.call(null,inst_33073);
var inst_33075 = figwheel.client.utils.log.call(null,inst_33074);
var inst_33076 = (function (){var all_files = inst_33047;
var res_SINGLEQUOTE_ = inst_33050;
var res = inst_33051;
var files_not_loaded = inst_33053;
var dependencies_that_loaded = inst_33055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33053,inst_33047,inst_33070,inst_33072,inst_33073,inst_33074,inst_33075,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33050,inst_33051,inst_33055,inst_33053,inst_33047,inst_33070,inst_33072,inst_33073,inst_33074,inst_33075,state_val_33134,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33077 = setTimeout(inst_33076,(10));
var state_33133__$1 = (function (){var statearr_33204 = state_33133;
(statearr_33204[(33)] = inst_33070);

(statearr_33204[(34)] = inst_33075);

return statearr_33204;
})();
var statearr_33205_33271 = state_33133__$1;
(statearr_33205_33271[(2)] = inst_33077);

(statearr_33205_33271[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (16))){
var state_33133__$1 = state_33133;
var statearr_33206_33272 = state_33133__$1;
(statearr_33206_33272[(2)] = reload_dependents);

(statearr_33206_33272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (38))){
var inst_33087 = (state_33133[(16)]);
var inst_33104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33087);
var state_33133__$1 = state_33133;
var statearr_33207_33273 = state_33133__$1;
(statearr_33207_33273[(2)] = inst_33104);

(statearr_33207_33273[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (30))){
var state_33133__$1 = state_33133;
var statearr_33208_33274 = state_33133__$1;
(statearr_33208_33274[(2)] = null);

(statearr_33208_33274[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (10))){
var inst_33007 = (state_33133[(22)]);
var inst_33009 = cljs.core.chunked_seq_QMARK_.call(null,inst_33007);
var state_33133__$1 = state_33133;
if(inst_33009){
var statearr_33209_33275 = state_33133__$1;
(statearr_33209_33275[(1)] = (13));

} else {
var statearr_33210_33276 = state_33133__$1;
(statearr_33210_33276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (18))){
var inst_33041 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33041)){
var statearr_33211_33277 = state_33133__$1;
(statearr_33211_33277[(1)] = (19));

} else {
var statearr_33212_33278 = state_33133__$1;
(statearr_33212_33278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (42))){
var state_33133__$1 = state_33133;
var statearr_33213_33279 = state_33133__$1;
(statearr_33213_33279[(2)] = null);

(statearr_33213_33279[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (37))){
var inst_33099 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33214_33280 = state_33133__$1;
(statearr_33214_33280[(2)] = inst_33099);

(statearr_33214_33280[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (8))){
var inst_32994 = (state_33133[(8)]);
var inst_33007 = (state_33133[(22)]);
var inst_33007__$1 = cljs.core.seq.call(null,inst_32994);
var state_33133__$1 = (function (){var statearr_33215 = state_33133;
(statearr_33215[(22)] = inst_33007__$1);

return statearr_33215;
})();
if(inst_33007__$1){
var statearr_33216_33281 = state_33133__$1;
(statearr_33216_33281[(1)] = (10));

} else {
var statearr_33217_33282 = state_33133__$1;
(statearr_33217_33282[(1)] = (11));

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
});})(c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27600__auto__,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto____0 = (function (){
var statearr_33221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33221[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto__);

(statearr_33221[(1)] = (1));

return statearr_33221;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto____1 = (function (state_33133){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_33133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e33222){if((e33222 instanceof Object)){
var ex__27604__auto__ = e33222;
var statearr_33223_33283 = state_33133;
(statearr_33223_33283[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33284 = state_33133;
state_33133 = G__33284;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto__ = function(state_33133){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto____1.call(this,state_33133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27714__auto__ = (function (){var statearr_33224 = f__27713__auto__.call(null);
(statearr_33224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_33224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__,map__32979,map__32979__$1,opts,before_jsload,on_jsload,reload_dependents,map__32980,map__32980__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27712__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33287,link){
var map__33290 = p__33287;
var map__33290__$1 = ((((!((map__33290 == null)))?((((map__33290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33290):map__33290);
var file = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33290,map__33290__$1,file){
return (function (p1__33285_SHARP_,p2__33286_SHARP_){
if(cljs.core._EQ_.call(null,p1__33285_SHARP_,p2__33286_SHARP_)){
return p1__33285_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33290,map__33290__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33296){
var map__33297 = p__33296;
var map__33297__$1 = ((((!((map__33297 == null)))?((((map__33297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33297):map__33297);
var match_length = cljs.core.get.call(null,map__33297__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33297__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33292_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33292_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33299_SHARP_,p2__33300_SHARP_){
return cljs.core.assoc.call(null,p1__33299_SHARP_,cljs.core.get.call(null,p2__33300_SHARP_,key),p2__33300_SHARP_);
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
var loaded_f_datas_33301 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33301);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33301);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33302,p__33303){
var map__33308 = p__33302;
var map__33308__$1 = ((((!((map__33308 == null)))?((((map__33308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33308):map__33308);
var on_cssload = cljs.core.get.call(null,map__33308__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33309 = p__33303;
var map__33309__$1 = ((((!((map__33309 == null)))?((((map__33309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33309):map__33309);
var files_msg = map__33309__$1;
var files = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1491541646905