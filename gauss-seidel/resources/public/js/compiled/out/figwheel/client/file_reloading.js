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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32358_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32358_SHARP_));
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
var seq__32363 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32364 = null;
var count__32365 = (0);
var i__32366 = (0);
while(true){
if((i__32366 < count__32365)){
var n = cljs.core._nth.call(null,chunk__32364,i__32366);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32367 = seq__32363;
var G__32368 = chunk__32364;
var G__32369 = count__32365;
var G__32370 = (i__32366 + (1));
seq__32363 = G__32367;
chunk__32364 = G__32368;
count__32365 = G__32369;
i__32366 = G__32370;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32363);
if(temp__4657__auto__){
var seq__32363__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32363__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__32363__$1);
var G__32371 = cljs.core.chunk_rest.call(null,seq__32363__$1);
var G__32372 = c__25659__auto__;
var G__32373 = cljs.core.count.call(null,c__25659__auto__);
var G__32374 = (0);
seq__32363 = G__32371;
chunk__32364 = G__32372;
count__32365 = G__32373;
i__32366 = G__32374;
continue;
} else {
var n = cljs.core.first.call(null,seq__32363__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32375 = cljs.core.next.call(null,seq__32363__$1);
var G__32376 = null;
var G__32377 = (0);
var G__32378 = (0);
seq__32363 = G__32375;
chunk__32364 = G__32376;
count__32365 = G__32377;
i__32366 = G__32378;
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

var seq__32429_32440 = cljs.core.seq.call(null,deps);
var chunk__32430_32441 = null;
var count__32431_32442 = (0);
var i__32432_32443 = (0);
while(true){
if((i__32432_32443 < count__32431_32442)){
var dep_32444 = cljs.core._nth.call(null,chunk__32430_32441,i__32432_32443);
topo_sort_helper_STAR_.call(null,dep_32444,(depth + (1)),state);

var G__32445 = seq__32429_32440;
var G__32446 = chunk__32430_32441;
var G__32447 = count__32431_32442;
var G__32448 = (i__32432_32443 + (1));
seq__32429_32440 = G__32445;
chunk__32430_32441 = G__32446;
count__32431_32442 = G__32447;
i__32432_32443 = G__32448;
continue;
} else {
var temp__4657__auto___32449 = cljs.core.seq.call(null,seq__32429_32440);
if(temp__4657__auto___32449){
var seq__32429_32450__$1 = temp__4657__auto___32449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32429_32450__$1)){
var c__25659__auto___32451 = cljs.core.chunk_first.call(null,seq__32429_32450__$1);
var G__32452 = cljs.core.chunk_rest.call(null,seq__32429_32450__$1);
var G__32453 = c__25659__auto___32451;
var G__32454 = cljs.core.count.call(null,c__25659__auto___32451);
var G__32455 = (0);
seq__32429_32440 = G__32452;
chunk__32430_32441 = G__32453;
count__32431_32442 = G__32454;
i__32432_32443 = G__32455;
continue;
} else {
var dep_32456 = cljs.core.first.call(null,seq__32429_32450__$1);
topo_sort_helper_STAR_.call(null,dep_32456,(depth + (1)),state);

var G__32457 = cljs.core.next.call(null,seq__32429_32450__$1);
var G__32458 = null;
var G__32459 = (0);
var G__32460 = (0);
seq__32429_32440 = G__32457;
chunk__32430_32441 = G__32458;
count__32431_32442 = G__32459;
i__32432_32443 = G__32460;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32433){
var vec__32437 = p__32433;
var seq__32438 = cljs.core.seq.call(null,vec__32437);
var first__32439 = cljs.core.first.call(null,seq__32438);
var seq__32438__$1 = cljs.core.next.call(null,seq__32438);
var x = first__32439;
var xs = seq__32438__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32437,seq__32438,first__32439,seq__32438__$1,x,xs,get_deps__$1){
return (function (p1__32379_SHARP_){
return clojure.set.difference.call(null,p1__32379_SHARP_,x);
});})(vec__32437,seq__32438,first__32439,seq__32438__$1,x,xs,get_deps__$1))
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
var seq__32473 = cljs.core.seq.call(null,provides);
var chunk__32474 = null;
var count__32475 = (0);
var i__32476 = (0);
while(true){
if((i__32476 < count__32475)){
var prov = cljs.core._nth.call(null,chunk__32474,i__32476);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32477_32485 = cljs.core.seq.call(null,requires);
var chunk__32478_32486 = null;
var count__32479_32487 = (0);
var i__32480_32488 = (0);
while(true){
if((i__32480_32488 < count__32479_32487)){
var req_32489 = cljs.core._nth.call(null,chunk__32478_32486,i__32480_32488);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32489,prov);

var G__32490 = seq__32477_32485;
var G__32491 = chunk__32478_32486;
var G__32492 = count__32479_32487;
var G__32493 = (i__32480_32488 + (1));
seq__32477_32485 = G__32490;
chunk__32478_32486 = G__32491;
count__32479_32487 = G__32492;
i__32480_32488 = G__32493;
continue;
} else {
var temp__4657__auto___32494 = cljs.core.seq.call(null,seq__32477_32485);
if(temp__4657__auto___32494){
var seq__32477_32495__$1 = temp__4657__auto___32494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32477_32495__$1)){
var c__25659__auto___32496 = cljs.core.chunk_first.call(null,seq__32477_32495__$1);
var G__32497 = cljs.core.chunk_rest.call(null,seq__32477_32495__$1);
var G__32498 = c__25659__auto___32496;
var G__32499 = cljs.core.count.call(null,c__25659__auto___32496);
var G__32500 = (0);
seq__32477_32485 = G__32497;
chunk__32478_32486 = G__32498;
count__32479_32487 = G__32499;
i__32480_32488 = G__32500;
continue;
} else {
var req_32501 = cljs.core.first.call(null,seq__32477_32495__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32501,prov);

var G__32502 = cljs.core.next.call(null,seq__32477_32495__$1);
var G__32503 = null;
var G__32504 = (0);
var G__32505 = (0);
seq__32477_32485 = G__32502;
chunk__32478_32486 = G__32503;
count__32479_32487 = G__32504;
i__32480_32488 = G__32505;
continue;
}
} else {
}
}
break;
}

var G__32506 = seq__32473;
var G__32507 = chunk__32474;
var G__32508 = count__32475;
var G__32509 = (i__32476 + (1));
seq__32473 = G__32506;
chunk__32474 = G__32507;
count__32475 = G__32508;
i__32476 = G__32509;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32473);
if(temp__4657__auto__){
var seq__32473__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32473__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__32473__$1);
var G__32510 = cljs.core.chunk_rest.call(null,seq__32473__$1);
var G__32511 = c__25659__auto__;
var G__32512 = cljs.core.count.call(null,c__25659__auto__);
var G__32513 = (0);
seq__32473 = G__32510;
chunk__32474 = G__32511;
count__32475 = G__32512;
i__32476 = G__32513;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32473__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32481_32514 = cljs.core.seq.call(null,requires);
var chunk__32482_32515 = null;
var count__32483_32516 = (0);
var i__32484_32517 = (0);
while(true){
if((i__32484_32517 < count__32483_32516)){
var req_32518 = cljs.core._nth.call(null,chunk__32482_32515,i__32484_32517);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32518,prov);

var G__32519 = seq__32481_32514;
var G__32520 = chunk__32482_32515;
var G__32521 = count__32483_32516;
var G__32522 = (i__32484_32517 + (1));
seq__32481_32514 = G__32519;
chunk__32482_32515 = G__32520;
count__32483_32516 = G__32521;
i__32484_32517 = G__32522;
continue;
} else {
var temp__4657__auto___32523__$1 = cljs.core.seq.call(null,seq__32481_32514);
if(temp__4657__auto___32523__$1){
var seq__32481_32524__$1 = temp__4657__auto___32523__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32481_32524__$1)){
var c__25659__auto___32525 = cljs.core.chunk_first.call(null,seq__32481_32524__$1);
var G__32526 = cljs.core.chunk_rest.call(null,seq__32481_32524__$1);
var G__32527 = c__25659__auto___32525;
var G__32528 = cljs.core.count.call(null,c__25659__auto___32525);
var G__32529 = (0);
seq__32481_32514 = G__32526;
chunk__32482_32515 = G__32527;
count__32483_32516 = G__32528;
i__32484_32517 = G__32529;
continue;
} else {
var req_32530 = cljs.core.first.call(null,seq__32481_32524__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32530,prov);

var G__32531 = cljs.core.next.call(null,seq__32481_32524__$1);
var G__32532 = null;
var G__32533 = (0);
var G__32534 = (0);
seq__32481_32514 = G__32531;
chunk__32482_32515 = G__32532;
count__32483_32516 = G__32533;
i__32484_32517 = G__32534;
continue;
}
} else {
}
}
break;
}

var G__32535 = cljs.core.next.call(null,seq__32473__$1);
var G__32536 = null;
var G__32537 = (0);
var G__32538 = (0);
seq__32473 = G__32535;
chunk__32474 = G__32536;
count__32475 = G__32537;
i__32476 = G__32538;
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
var seq__32543_32547 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32544_32548 = null;
var count__32545_32549 = (0);
var i__32546_32550 = (0);
while(true){
if((i__32546_32550 < count__32545_32549)){
var ns_32551 = cljs.core._nth.call(null,chunk__32544_32548,i__32546_32550);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32551);

var G__32552 = seq__32543_32547;
var G__32553 = chunk__32544_32548;
var G__32554 = count__32545_32549;
var G__32555 = (i__32546_32550 + (1));
seq__32543_32547 = G__32552;
chunk__32544_32548 = G__32553;
count__32545_32549 = G__32554;
i__32546_32550 = G__32555;
continue;
} else {
var temp__4657__auto___32556 = cljs.core.seq.call(null,seq__32543_32547);
if(temp__4657__auto___32556){
var seq__32543_32557__$1 = temp__4657__auto___32556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32543_32557__$1)){
var c__25659__auto___32558 = cljs.core.chunk_first.call(null,seq__32543_32557__$1);
var G__32559 = cljs.core.chunk_rest.call(null,seq__32543_32557__$1);
var G__32560 = c__25659__auto___32558;
var G__32561 = cljs.core.count.call(null,c__25659__auto___32558);
var G__32562 = (0);
seq__32543_32547 = G__32559;
chunk__32544_32548 = G__32560;
count__32545_32549 = G__32561;
i__32546_32550 = G__32562;
continue;
} else {
var ns_32563 = cljs.core.first.call(null,seq__32543_32557__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32563);

var G__32564 = cljs.core.next.call(null,seq__32543_32557__$1);
var G__32565 = null;
var G__32566 = (0);
var G__32567 = (0);
seq__32543_32547 = G__32564;
chunk__32544_32548 = G__32565;
count__32545_32549 = G__32566;
i__32546_32550 = G__32567;
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
var G__32568__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32569__i = 0, G__32569__a = new Array(arguments.length -  0);
while (G__32569__i < G__32569__a.length) {G__32569__a[G__32569__i] = arguments[G__32569__i + 0]; ++G__32569__i;}
  args = new cljs.core.IndexedSeq(G__32569__a,0);
} 
return G__32568__delegate.call(this,args);};
G__32568.cljs$lang$maxFixedArity = 0;
G__32568.cljs$lang$applyTo = (function (arglist__32570){
var args = cljs.core.seq(arglist__32570);
return G__32568__delegate(args);
});
G__32568.cljs$core$IFn$_invoke$arity$variadic = G__32568__delegate;
return G__32568;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32571 = cljs.core._EQ_;
var expr__32572 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32571.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32572))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__32571,expr__32572){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__32571,expr__32572))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__32571,expr__32572){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32574){if((e32574 instanceof Error)){
var e = e32574;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32574;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__32571,expr__32572))
} else {
if(cljs.core.truth_(pred__32571.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32572))){
return ((function (pred__32571,expr__32572){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32571,expr__32572){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32571,expr__32572))
);

return deferred.addErrback(((function (deferred,pred__32571,expr__32572){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32571,expr__32572))
);
});
;})(pred__32571,expr__32572))
} else {
if(cljs.core.truth_(pred__32571.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32572))){
return ((function (pred__32571,expr__32572){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32575){if((e32575 instanceof Error)){
var e = e32575;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32575;

}
}})());
});
;})(pred__32571,expr__32572))
} else {
return ((function (pred__32571,expr__32572){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32571,expr__32572))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32576,callback){
var map__32579 = p__32576;
var map__32579__$1 = ((((!((map__32579 == null)))?((((map__32579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32579):map__32579);
var file_msg = map__32579__$1;
var request_url = cljs.core.get.call(null,map__32579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32579,map__32579__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32579,map__32579__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__){
return (function (state_32603){
var state_val_32604 = (state_32603[(1)]);
if((state_val_32604 === (7))){
var inst_32599 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32605_32625 = state_32603__$1;
(statearr_32605_32625[(2)] = inst_32599);

(statearr_32605_32625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (1))){
var state_32603__$1 = state_32603;
var statearr_32606_32626 = state_32603__$1;
(statearr_32606_32626[(2)] = null);

(statearr_32606_32626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (4))){
var inst_32583 = (state_32603[(7)]);
var inst_32583__$1 = (state_32603[(2)]);
var state_32603__$1 = (function (){var statearr_32607 = state_32603;
(statearr_32607[(7)] = inst_32583__$1);

return statearr_32607;
})();
if(cljs.core.truth_(inst_32583__$1)){
var statearr_32608_32627 = state_32603__$1;
(statearr_32608_32627[(1)] = (5));

} else {
var statearr_32609_32628 = state_32603__$1;
(statearr_32609_32628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (6))){
var state_32603__$1 = state_32603;
var statearr_32610_32629 = state_32603__$1;
(statearr_32610_32629[(2)] = null);

(statearr_32610_32629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (3))){
var inst_32601 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32603__$1,inst_32601);
} else {
if((state_val_32604 === (2))){
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32603__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32604 === (11))){
var inst_32595 = (state_32603[(2)]);
var state_32603__$1 = (function (){var statearr_32611 = state_32603;
(statearr_32611[(8)] = inst_32595);

return statearr_32611;
})();
var statearr_32612_32630 = state_32603__$1;
(statearr_32612_32630[(2)] = null);

(statearr_32612_32630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (9))){
var inst_32589 = (state_32603[(9)]);
var inst_32587 = (state_32603[(10)]);
var inst_32591 = inst_32589.call(null,inst_32587);
var state_32603__$1 = state_32603;
var statearr_32613_32631 = state_32603__$1;
(statearr_32613_32631[(2)] = inst_32591);

(statearr_32613_32631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (5))){
var inst_32583 = (state_32603[(7)]);
var inst_32585 = figwheel.client.file_reloading.blocking_load.call(null,inst_32583);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32603__$1,(8),inst_32585);
} else {
if((state_val_32604 === (10))){
var inst_32587 = (state_32603[(10)]);
var inst_32593 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32587);
var state_32603__$1 = state_32603;
var statearr_32614_32632 = state_32603__$1;
(statearr_32614_32632[(2)] = inst_32593);

(statearr_32614_32632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (8))){
var inst_32589 = (state_32603[(9)]);
var inst_32583 = (state_32603[(7)]);
var inst_32587 = (state_32603[(2)]);
var inst_32588 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32589__$1 = cljs.core.get.call(null,inst_32588,inst_32583);
var state_32603__$1 = (function (){var statearr_32615 = state_32603;
(statearr_32615[(9)] = inst_32589__$1);

(statearr_32615[(10)] = inst_32587);

return statearr_32615;
})();
if(cljs.core.truth_(inst_32589__$1)){
var statearr_32616_32633 = state_32603__$1;
(statearr_32616_32633[(1)] = (9));

} else {
var statearr_32617_32634 = state_32603__$1;
(statearr_32617_32634[(1)] = (10));

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
});})(c__27776__auto__))
;
return ((function (switch__27664__auto__,c__27776__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27665__auto__ = null;
var figwheel$client$file_reloading$state_machine__27665__auto____0 = (function (){
var statearr_32621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32621[(0)] = figwheel$client$file_reloading$state_machine__27665__auto__);

(statearr_32621[(1)] = (1));

return statearr_32621;
});
var figwheel$client$file_reloading$state_machine__27665__auto____1 = (function (state_32603){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_32603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e32622){if((e32622 instanceof Object)){
var ex__27668__auto__ = e32622;
var statearr_32623_32635 = state_32603;
(statearr_32623_32635[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32636 = state_32603;
state_32603 = G__32636;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27665__auto__ = function(state_32603){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27665__auto____1.call(this,state_32603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27665__auto____0;
figwheel$client$file_reloading$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27665__auto____1;
return figwheel$client$file_reloading$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__))
})();
var state__27778__auto__ = (function (){var statearr_32624 = f__27777__auto__.call(null);
(statearr_32624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_32624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__))
);

return c__27776__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32637,callback){
var map__32640 = p__32637;
var map__32640__$1 = ((((!((map__32640 == null)))?((((map__32640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32640):map__32640);
var file_msg = map__32640__$1;
var namespace = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32640,map__32640__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32640,map__32640__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32642){
var map__32645 = p__32642;
var map__32645__$1 = ((((!((map__32645 == null)))?((((map__32645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32645):map__32645);
var file_msg = map__32645__$1;
var namespace = cljs.core.get.call(null,map__32645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32647){
var map__32650 = p__32647;
var map__32650__$1 = ((((!((map__32650 == null)))?((((map__32650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32650):map__32650);
var file_msg = map__32650__$1;
var namespace = cljs.core.get.call(null,map__32650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32652,callback){
var map__32655 = p__32652;
var map__32655__$1 = ((((!((map__32655 == null)))?((((map__32655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32655):map__32655);
var file_msg = map__32655__$1;
var request_url = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27776__auto___32759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___32759,out){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___32759,out){
return (function (state_32741){
var state_val_32742 = (state_32741[(1)]);
if((state_val_32742 === (1))){
var inst_32715 = cljs.core.seq.call(null,files);
var inst_32716 = cljs.core.first.call(null,inst_32715);
var inst_32717 = cljs.core.next.call(null,inst_32715);
var inst_32718 = files;
var state_32741__$1 = (function (){var statearr_32743 = state_32741;
(statearr_32743[(7)] = inst_32716);

(statearr_32743[(8)] = inst_32718);

(statearr_32743[(9)] = inst_32717);

return statearr_32743;
})();
var statearr_32744_32760 = state_32741__$1;
(statearr_32744_32760[(2)] = null);

(statearr_32744_32760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (2))){
var inst_32718 = (state_32741[(8)]);
var inst_32724 = (state_32741[(10)]);
var inst_32723 = cljs.core.seq.call(null,inst_32718);
var inst_32724__$1 = cljs.core.first.call(null,inst_32723);
var inst_32725 = cljs.core.next.call(null,inst_32723);
var inst_32726 = (inst_32724__$1 == null);
var inst_32727 = cljs.core.not.call(null,inst_32726);
var state_32741__$1 = (function (){var statearr_32745 = state_32741;
(statearr_32745[(11)] = inst_32725);

(statearr_32745[(10)] = inst_32724__$1);

return statearr_32745;
})();
if(inst_32727){
var statearr_32746_32761 = state_32741__$1;
(statearr_32746_32761[(1)] = (4));

} else {
var statearr_32747_32762 = state_32741__$1;
(statearr_32747_32762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (3))){
var inst_32739 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32741__$1,inst_32739);
} else {
if((state_val_32742 === (4))){
var inst_32724 = (state_32741[(10)]);
var inst_32729 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32724);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32741__$1,(7),inst_32729);
} else {
if((state_val_32742 === (5))){
var inst_32735 = cljs.core.async.close_BANG_.call(null,out);
var state_32741__$1 = state_32741;
var statearr_32748_32763 = state_32741__$1;
(statearr_32748_32763[(2)] = inst_32735);

(statearr_32748_32763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (6))){
var inst_32737 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32749_32764 = state_32741__$1;
(statearr_32749_32764[(2)] = inst_32737);

(statearr_32749_32764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (7))){
var inst_32725 = (state_32741[(11)]);
var inst_32731 = (state_32741[(2)]);
var inst_32732 = cljs.core.async.put_BANG_.call(null,out,inst_32731);
var inst_32718 = inst_32725;
var state_32741__$1 = (function (){var statearr_32750 = state_32741;
(statearr_32750[(8)] = inst_32718);

(statearr_32750[(12)] = inst_32732);

return statearr_32750;
})();
var statearr_32751_32765 = state_32741__$1;
(statearr_32751_32765[(2)] = null);

(statearr_32751_32765[(1)] = (2));


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
});})(c__27776__auto___32759,out))
;
return ((function (switch__27664__auto__,c__27776__auto___32759,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto____0 = (function (){
var statearr_32755 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32755[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto__);

(statearr_32755[(1)] = (1));

return statearr_32755;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto____1 = (function (state_32741){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_32741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e32756){if((e32756 instanceof Object)){
var ex__27668__auto__ = e32756;
var statearr_32757_32766 = state_32741;
(statearr_32757_32766[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32767 = state_32741;
state_32741 = G__32767;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto__ = function(state_32741){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto____1.call(this,state_32741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___32759,out))
})();
var state__27778__auto__ = (function (){var statearr_32758 = f__27777__auto__.call(null);
(statearr_32758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___32759);

return statearr_32758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___32759,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32768,opts){
var map__32772 = p__32768;
var map__32772__$1 = ((((!((map__32772 == null)))?((((map__32772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32772):map__32772);
var eval_body__$1 = cljs.core.get.call(null,map__32772__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32772__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32774){var e = e32774;
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
return (function (p1__32775_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32775_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32784){
var vec__32785 = p__32784;
var k = cljs.core.nth.call(null,vec__32785,(0),null);
var v = cljs.core.nth.call(null,vec__32785,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32788){
var vec__32789 = p__32788;
var k = cljs.core.nth.call(null,vec__32789,(0),null);
var v = cljs.core.nth.call(null,vec__32789,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32795,p__32796){
var map__33043 = p__32795;
var map__33043__$1 = ((((!((map__33043 == null)))?((((map__33043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33043):map__33043);
var opts = map__33043__$1;
var before_jsload = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33044 = p__32796;
var map__33044__$1 = ((((!((map__33044 == null)))?((((map__33044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33044):map__33044);
var msg = map__33044__$1;
var files = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33197){
var state_val_33198 = (state_33197[(1)]);
if((state_val_33198 === (7))){
var inst_33061 = (state_33197[(7)]);
var inst_33060 = (state_33197[(8)]);
var inst_33059 = (state_33197[(9)]);
var inst_33058 = (state_33197[(10)]);
var inst_33066 = cljs.core._nth.call(null,inst_33059,inst_33061);
var inst_33067 = figwheel.client.file_reloading.eval_body.call(null,inst_33066,opts);
var inst_33068 = (inst_33061 + (1));
var tmp33199 = inst_33060;
var tmp33200 = inst_33059;
var tmp33201 = inst_33058;
var inst_33058__$1 = tmp33201;
var inst_33059__$1 = tmp33200;
var inst_33060__$1 = tmp33199;
var inst_33061__$1 = inst_33068;
var state_33197__$1 = (function (){var statearr_33202 = state_33197;
(statearr_33202[(7)] = inst_33061__$1);

(statearr_33202[(11)] = inst_33067);

(statearr_33202[(8)] = inst_33060__$1);

(statearr_33202[(9)] = inst_33059__$1);

(statearr_33202[(10)] = inst_33058__$1);

return statearr_33202;
})();
var statearr_33203_33289 = state_33197__$1;
(statearr_33203_33289[(2)] = null);

(statearr_33203_33289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (20))){
var inst_33101 = (state_33197[(12)]);
var inst_33109 = figwheel.client.file_reloading.sort_files.call(null,inst_33101);
var state_33197__$1 = state_33197;
var statearr_33204_33290 = state_33197__$1;
(statearr_33204_33290[(2)] = inst_33109);

(statearr_33204_33290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (27))){
var state_33197__$1 = state_33197;
var statearr_33205_33291 = state_33197__$1;
(statearr_33205_33291[(2)] = null);

(statearr_33205_33291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (1))){
var inst_33050 = (state_33197[(13)]);
var inst_33047 = before_jsload.call(null,files);
var inst_33048 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33049 = (function (){return ((function (inst_33050,inst_33047,inst_33048,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32792_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32792_SHARP_);
});
;})(inst_33050,inst_33047,inst_33048,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33050__$1 = cljs.core.filter.call(null,inst_33049,files);
var inst_33051 = cljs.core.not_empty.call(null,inst_33050__$1);
var state_33197__$1 = (function (){var statearr_33206 = state_33197;
(statearr_33206[(13)] = inst_33050__$1);

(statearr_33206[(14)] = inst_33048);

(statearr_33206[(15)] = inst_33047);

return statearr_33206;
})();
if(cljs.core.truth_(inst_33051)){
var statearr_33207_33292 = state_33197__$1;
(statearr_33207_33292[(1)] = (2));

} else {
var statearr_33208_33293 = state_33197__$1;
(statearr_33208_33293[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (24))){
var state_33197__$1 = state_33197;
var statearr_33209_33294 = state_33197__$1;
(statearr_33209_33294[(2)] = null);

(statearr_33209_33294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (39))){
var inst_33151 = (state_33197[(16)]);
var state_33197__$1 = state_33197;
var statearr_33210_33295 = state_33197__$1;
(statearr_33210_33295[(2)] = inst_33151);

(statearr_33210_33295[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (46))){
var inst_33192 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
var statearr_33211_33296 = state_33197__$1;
(statearr_33211_33296[(2)] = inst_33192);

(statearr_33211_33296[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (4))){
var inst_33095 = (state_33197[(2)]);
var inst_33096 = cljs.core.List.EMPTY;
var inst_33097 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33096);
var inst_33098 = (function (){return ((function (inst_33095,inst_33096,inst_33097,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32793_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32793_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32793_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32793_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_33095,inst_33096,inst_33097,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33099 = cljs.core.filter.call(null,inst_33098,files);
var inst_33100 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33101 = cljs.core.concat.call(null,inst_33099,inst_33100);
var state_33197__$1 = (function (){var statearr_33212 = state_33197;
(statearr_33212[(17)] = inst_33095);

(statearr_33212[(12)] = inst_33101);

(statearr_33212[(18)] = inst_33097);

return statearr_33212;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33213_33297 = state_33197__$1;
(statearr_33213_33297[(1)] = (16));

} else {
var statearr_33214_33298 = state_33197__$1;
(statearr_33214_33298[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (15))){
var inst_33085 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
var statearr_33215_33299 = state_33197__$1;
(statearr_33215_33299[(2)] = inst_33085);

(statearr_33215_33299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (21))){
var inst_33111 = (state_33197[(19)]);
var inst_33111__$1 = (state_33197[(2)]);
var inst_33112 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33111__$1);
var state_33197__$1 = (function (){var statearr_33216 = state_33197;
(statearr_33216[(19)] = inst_33111__$1);

return statearr_33216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33197__$1,(22),inst_33112);
} else {
if((state_val_33198 === (31))){
var inst_33195 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33197__$1,inst_33195);
} else {
if((state_val_33198 === (32))){
var inst_33151 = (state_33197[(16)]);
var inst_33156 = inst_33151.cljs$lang$protocol_mask$partition0$;
var inst_33157 = (inst_33156 & (64));
var inst_33158 = inst_33151.cljs$core$ISeq$;
var inst_33159 = (inst_33157) || (inst_33158);
var state_33197__$1 = state_33197;
if(cljs.core.truth_(inst_33159)){
var statearr_33217_33300 = state_33197__$1;
(statearr_33217_33300[(1)] = (35));

} else {
var statearr_33218_33301 = state_33197__$1;
(statearr_33218_33301[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (40))){
var inst_33172 = (state_33197[(20)]);
var inst_33171 = (state_33197[(2)]);
var inst_33172__$1 = cljs.core.get.call(null,inst_33171,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33173 = cljs.core.get.call(null,inst_33171,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33174 = cljs.core.not_empty.call(null,inst_33172__$1);
var state_33197__$1 = (function (){var statearr_33219 = state_33197;
(statearr_33219[(21)] = inst_33173);

(statearr_33219[(20)] = inst_33172__$1);

return statearr_33219;
})();
if(cljs.core.truth_(inst_33174)){
var statearr_33220_33302 = state_33197__$1;
(statearr_33220_33302[(1)] = (41));

} else {
var statearr_33221_33303 = state_33197__$1;
(statearr_33221_33303[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (33))){
var state_33197__$1 = state_33197;
var statearr_33222_33304 = state_33197__$1;
(statearr_33222_33304[(2)] = false);

(statearr_33222_33304[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (13))){
var inst_33071 = (state_33197[(22)]);
var inst_33075 = cljs.core.chunk_first.call(null,inst_33071);
var inst_33076 = cljs.core.chunk_rest.call(null,inst_33071);
var inst_33077 = cljs.core.count.call(null,inst_33075);
var inst_33058 = inst_33076;
var inst_33059 = inst_33075;
var inst_33060 = inst_33077;
var inst_33061 = (0);
var state_33197__$1 = (function (){var statearr_33223 = state_33197;
(statearr_33223[(7)] = inst_33061);

(statearr_33223[(8)] = inst_33060);

(statearr_33223[(9)] = inst_33059);

(statearr_33223[(10)] = inst_33058);

return statearr_33223;
})();
var statearr_33224_33305 = state_33197__$1;
(statearr_33224_33305[(2)] = null);

(statearr_33224_33305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (22))){
var inst_33114 = (state_33197[(23)]);
var inst_33119 = (state_33197[(24)]);
var inst_33115 = (state_33197[(25)]);
var inst_33111 = (state_33197[(19)]);
var inst_33114__$1 = (state_33197[(2)]);
var inst_33115__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33114__$1);
var inst_33116 = (function (){var all_files = inst_33111;
var res_SINGLEQUOTE_ = inst_33114__$1;
var res = inst_33115__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33114,inst_33119,inst_33115,inst_33111,inst_33114__$1,inst_33115__$1,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32794_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32794_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33114,inst_33119,inst_33115,inst_33111,inst_33114__$1,inst_33115__$1,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33117 = cljs.core.filter.call(null,inst_33116,inst_33114__$1);
var inst_33118 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33119__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33118);
var inst_33120 = cljs.core.not_empty.call(null,inst_33119__$1);
var state_33197__$1 = (function (){var statearr_33225 = state_33197;
(statearr_33225[(26)] = inst_33117);

(statearr_33225[(23)] = inst_33114__$1);

(statearr_33225[(24)] = inst_33119__$1);

(statearr_33225[(25)] = inst_33115__$1);

return statearr_33225;
})();
if(cljs.core.truth_(inst_33120)){
var statearr_33226_33306 = state_33197__$1;
(statearr_33226_33306[(1)] = (23));

} else {
var statearr_33227_33307 = state_33197__$1;
(statearr_33227_33307[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (36))){
var state_33197__$1 = state_33197;
var statearr_33228_33308 = state_33197__$1;
(statearr_33228_33308[(2)] = false);

(statearr_33228_33308[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (41))){
var inst_33172 = (state_33197[(20)]);
var inst_33176 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33177 = cljs.core.map.call(null,inst_33176,inst_33172);
var inst_33178 = cljs.core.pr_str.call(null,inst_33177);
var inst_33179 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33178)].join('');
var inst_33180 = figwheel.client.utils.log.call(null,inst_33179);
var state_33197__$1 = state_33197;
var statearr_33229_33309 = state_33197__$1;
(statearr_33229_33309[(2)] = inst_33180);

(statearr_33229_33309[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (43))){
var inst_33173 = (state_33197[(21)]);
var inst_33183 = (state_33197[(2)]);
var inst_33184 = cljs.core.not_empty.call(null,inst_33173);
var state_33197__$1 = (function (){var statearr_33230 = state_33197;
(statearr_33230[(27)] = inst_33183);

return statearr_33230;
})();
if(cljs.core.truth_(inst_33184)){
var statearr_33231_33310 = state_33197__$1;
(statearr_33231_33310[(1)] = (44));

} else {
var statearr_33232_33311 = state_33197__$1;
(statearr_33232_33311[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (29))){
var inst_33117 = (state_33197[(26)]);
var inst_33114 = (state_33197[(23)]);
var inst_33119 = (state_33197[(24)]);
var inst_33115 = (state_33197[(25)]);
var inst_33111 = (state_33197[(19)]);
var inst_33151 = (state_33197[(16)]);
var inst_33147 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33150 = (function (){var all_files = inst_33111;
var res_SINGLEQUOTE_ = inst_33114;
var res = inst_33115;
var files_not_loaded = inst_33117;
var dependencies_that_loaded = inst_33119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33151,inst_33147,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33149){
var map__33233 = p__33149;
var map__33233__$1 = ((((!((map__33233 == null)))?((((map__33233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33233):map__33233);
var namespace = cljs.core.get.call(null,map__33233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33151,inst_33147,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33151__$1 = cljs.core.group_by.call(null,inst_33150,inst_33117);
var inst_33153 = (inst_33151__$1 == null);
var inst_33154 = cljs.core.not.call(null,inst_33153);
var state_33197__$1 = (function (){var statearr_33235 = state_33197;
(statearr_33235[(16)] = inst_33151__$1);

(statearr_33235[(28)] = inst_33147);

return statearr_33235;
})();
if(inst_33154){
var statearr_33236_33312 = state_33197__$1;
(statearr_33236_33312[(1)] = (32));

} else {
var statearr_33237_33313 = state_33197__$1;
(statearr_33237_33313[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (44))){
var inst_33173 = (state_33197[(21)]);
var inst_33186 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33173);
var inst_33187 = cljs.core.pr_str.call(null,inst_33186);
var inst_33188 = [cljs.core.str("not required: "),cljs.core.str(inst_33187)].join('');
var inst_33189 = figwheel.client.utils.log.call(null,inst_33188);
var state_33197__$1 = state_33197;
var statearr_33238_33314 = state_33197__$1;
(statearr_33238_33314[(2)] = inst_33189);

(statearr_33238_33314[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (6))){
var inst_33092 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
var statearr_33239_33315 = state_33197__$1;
(statearr_33239_33315[(2)] = inst_33092);

(statearr_33239_33315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (28))){
var inst_33117 = (state_33197[(26)]);
var inst_33144 = (state_33197[(2)]);
var inst_33145 = cljs.core.not_empty.call(null,inst_33117);
var state_33197__$1 = (function (){var statearr_33240 = state_33197;
(statearr_33240[(29)] = inst_33144);

return statearr_33240;
})();
if(cljs.core.truth_(inst_33145)){
var statearr_33241_33316 = state_33197__$1;
(statearr_33241_33316[(1)] = (29));

} else {
var statearr_33242_33317 = state_33197__$1;
(statearr_33242_33317[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (25))){
var inst_33115 = (state_33197[(25)]);
var inst_33131 = (state_33197[(2)]);
var inst_33132 = cljs.core.not_empty.call(null,inst_33115);
var state_33197__$1 = (function (){var statearr_33243 = state_33197;
(statearr_33243[(30)] = inst_33131);

return statearr_33243;
})();
if(cljs.core.truth_(inst_33132)){
var statearr_33244_33318 = state_33197__$1;
(statearr_33244_33318[(1)] = (26));

} else {
var statearr_33245_33319 = state_33197__$1;
(statearr_33245_33319[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (34))){
var inst_33166 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
if(cljs.core.truth_(inst_33166)){
var statearr_33246_33320 = state_33197__$1;
(statearr_33246_33320[(1)] = (38));

} else {
var statearr_33247_33321 = state_33197__$1;
(statearr_33247_33321[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (17))){
var state_33197__$1 = state_33197;
var statearr_33248_33322 = state_33197__$1;
(statearr_33248_33322[(2)] = recompile_dependents);

(statearr_33248_33322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (3))){
var state_33197__$1 = state_33197;
var statearr_33249_33323 = state_33197__$1;
(statearr_33249_33323[(2)] = null);

(statearr_33249_33323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (12))){
var inst_33088 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
var statearr_33250_33324 = state_33197__$1;
(statearr_33250_33324[(2)] = inst_33088);

(statearr_33250_33324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (2))){
var inst_33050 = (state_33197[(13)]);
var inst_33057 = cljs.core.seq.call(null,inst_33050);
var inst_33058 = inst_33057;
var inst_33059 = null;
var inst_33060 = (0);
var inst_33061 = (0);
var state_33197__$1 = (function (){var statearr_33251 = state_33197;
(statearr_33251[(7)] = inst_33061);

(statearr_33251[(8)] = inst_33060);

(statearr_33251[(9)] = inst_33059);

(statearr_33251[(10)] = inst_33058);

return statearr_33251;
})();
var statearr_33252_33325 = state_33197__$1;
(statearr_33252_33325[(2)] = null);

(statearr_33252_33325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (23))){
var inst_33117 = (state_33197[(26)]);
var inst_33114 = (state_33197[(23)]);
var inst_33119 = (state_33197[(24)]);
var inst_33115 = (state_33197[(25)]);
var inst_33111 = (state_33197[(19)]);
var inst_33122 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33124 = (function (){var all_files = inst_33111;
var res_SINGLEQUOTE_ = inst_33114;
var res = inst_33115;
var files_not_loaded = inst_33117;
var dependencies_that_loaded = inst_33119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33122,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33123){
var map__33253 = p__33123;
var map__33253__$1 = ((((!((map__33253 == null)))?((((map__33253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33253):map__33253);
var request_url = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33122,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33125 = cljs.core.reverse.call(null,inst_33119);
var inst_33126 = cljs.core.map.call(null,inst_33124,inst_33125);
var inst_33127 = cljs.core.pr_str.call(null,inst_33126);
var inst_33128 = figwheel.client.utils.log.call(null,inst_33127);
var state_33197__$1 = (function (){var statearr_33255 = state_33197;
(statearr_33255[(31)] = inst_33122);

return statearr_33255;
})();
var statearr_33256_33326 = state_33197__$1;
(statearr_33256_33326[(2)] = inst_33128);

(statearr_33256_33326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (35))){
var state_33197__$1 = state_33197;
var statearr_33257_33327 = state_33197__$1;
(statearr_33257_33327[(2)] = true);

(statearr_33257_33327[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (19))){
var inst_33101 = (state_33197[(12)]);
var inst_33107 = figwheel.client.file_reloading.expand_files.call(null,inst_33101);
var state_33197__$1 = state_33197;
var statearr_33258_33328 = state_33197__$1;
(statearr_33258_33328[(2)] = inst_33107);

(statearr_33258_33328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (11))){
var state_33197__$1 = state_33197;
var statearr_33259_33329 = state_33197__$1;
(statearr_33259_33329[(2)] = null);

(statearr_33259_33329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (9))){
var inst_33090 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
var statearr_33260_33330 = state_33197__$1;
(statearr_33260_33330[(2)] = inst_33090);

(statearr_33260_33330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (5))){
var inst_33061 = (state_33197[(7)]);
var inst_33060 = (state_33197[(8)]);
var inst_33063 = (inst_33061 < inst_33060);
var inst_33064 = inst_33063;
var state_33197__$1 = state_33197;
if(cljs.core.truth_(inst_33064)){
var statearr_33261_33331 = state_33197__$1;
(statearr_33261_33331[(1)] = (7));

} else {
var statearr_33262_33332 = state_33197__$1;
(statearr_33262_33332[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (14))){
var inst_33071 = (state_33197[(22)]);
var inst_33080 = cljs.core.first.call(null,inst_33071);
var inst_33081 = figwheel.client.file_reloading.eval_body.call(null,inst_33080,opts);
var inst_33082 = cljs.core.next.call(null,inst_33071);
var inst_33058 = inst_33082;
var inst_33059 = null;
var inst_33060 = (0);
var inst_33061 = (0);
var state_33197__$1 = (function (){var statearr_33263 = state_33197;
(statearr_33263[(7)] = inst_33061);

(statearr_33263[(32)] = inst_33081);

(statearr_33263[(8)] = inst_33060);

(statearr_33263[(9)] = inst_33059);

(statearr_33263[(10)] = inst_33058);

return statearr_33263;
})();
var statearr_33264_33333 = state_33197__$1;
(statearr_33264_33333[(2)] = null);

(statearr_33264_33333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (45))){
var state_33197__$1 = state_33197;
var statearr_33265_33334 = state_33197__$1;
(statearr_33265_33334[(2)] = null);

(statearr_33265_33334[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (26))){
var inst_33117 = (state_33197[(26)]);
var inst_33114 = (state_33197[(23)]);
var inst_33119 = (state_33197[(24)]);
var inst_33115 = (state_33197[(25)]);
var inst_33111 = (state_33197[(19)]);
var inst_33134 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33136 = (function (){var all_files = inst_33111;
var res_SINGLEQUOTE_ = inst_33114;
var res = inst_33115;
var files_not_loaded = inst_33117;
var dependencies_that_loaded = inst_33119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33134,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33135){
var map__33266 = p__33135;
var map__33266__$1 = ((((!((map__33266 == null)))?((((map__33266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33266):map__33266);
var namespace = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33134,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33137 = cljs.core.map.call(null,inst_33136,inst_33115);
var inst_33138 = cljs.core.pr_str.call(null,inst_33137);
var inst_33139 = figwheel.client.utils.log.call(null,inst_33138);
var inst_33140 = (function (){var all_files = inst_33111;
var res_SINGLEQUOTE_ = inst_33114;
var res = inst_33115;
var files_not_loaded = inst_33117;
var dependencies_that_loaded = inst_33119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33134,inst_33136,inst_33137,inst_33138,inst_33139,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33117,inst_33114,inst_33119,inst_33115,inst_33111,inst_33134,inst_33136,inst_33137,inst_33138,inst_33139,state_val_33198,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33141 = setTimeout(inst_33140,(10));
var state_33197__$1 = (function (){var statearr_33268 = state_33197;
(statearr_33268[(33)] = inst_33134);

(statearr_33268[(34)] = inst_33139);

return statearr_33268;
})();
var statearr_33269_33335 = state_33197__$1;
(statearr_33269_33335[(2)] = inst_33141);

(statearr_33269_33335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (16))){
var state_33197__$1 = state_33197;
var statearr_33270_33336 = state_33197__$1;
(statearr_33270_33336[(2)] = reload_dependents);

(statearr_33270_33336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (38))){
var inst_33151 = (state_33197[(16)]);
var inst_33168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33151);
var state_33197__$1 = state_33197;
var statearr_33271_33337 = state_33197__$1;
(statearr_33271_33337[(2)] = inst_33168);

(statearr_33271_33337[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (30))){
var state_33197__$1 = state_33197;
var statearr_33272_33338 = state_33197__$1;
(statearr_33272_33338[(2)] = null);

(statearr_33272_33338[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (10))){
var inst_33071 = (state_33197[(22)]);
var inst_33073 = cljs.core.chunked_seq_QMARK_.call(null,inst_33071);
var state_33197__$1 = state_33197;
if(inst_33073){
var statearr_33273_33339 = state_33197__$1;
(statearr_33273_33339[(1)] = (13));

} else {
var statearr_33274_33340 = state_33197__$1;
(statearr_33274_33340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (18))){
var inst_33105 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
if(cljs.core.truth_(inst_33105)){
var statearr_33275_33341 = state_33197__$1;
(statearr_33275_33341[(1)] = (19));

} else {
var statearr_33276_33342 = state_33197__$1;
(statearr_33276_33342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (42))){
var state_33197__$1 = state_33197;
var statearr_33277_33343 = state_33197__$1;
(statearr_33277_33343[(2)] = null);

(statearr_33277_33343[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (37))){
var inst_33163 = (state_33197[(2)]);
var state_33197__$1 = state_33197;
var statearr_33278_33344 = state_33197__$1;
(statearr_33278_33344[(2)] = inst_33163);

(statearr_33278_33344[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33198 === (8))){
var inst_33071 = (state_33197[(22)]);
var inst_33058 = (state_33197[(10)]);
var inst_33071__$1 = cljs.core.seq.call(null,inst_33058);
var state_33197__$1 = (function (){var statearr_33279 = state_33197;
(statearr_33279[(22)] = inst_33071__$1);

return statearr_33279;
})();
if(inst_33071__$1){
var statearr_33280_33345 = state_33197__$1;
(statearr_33280_33345[(1)] = (10));

} else {
var statearr_33281_33346 = state_33197__$1;
(statearr_33281_33346[(1)] = (11));

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
});})(c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27664__auto__,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto____0 = (function (){
var statearr_33285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33285[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto__);

(statearr_33285[(1)] = (1));

return statearr_33285;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto____1 = (function (state_33197){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_33197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e33286){if((e33286 instanceof Object)){
var ex__27668__auto__ = e33286;
var statearr_33287_33347 = state_33197;
(statearr_33287_33347[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33348 = state_33197;
state_33197 = G__33348;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto__ = function(state_33197){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto____1.call(this,state_33197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27778__auto__ = (function (){var statearr_33288 = f__27777__auto__.call(null);
(statearr_33288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_33288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__,map__33043,map__33043__$1,opts,before_jsload,on_jsload,reload_dependents,map__33044,map__33044__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27776__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33351,link){
var map__33354 = p__33351;
var map__33354__$1 = ((((!((map__33354 == null)))?((((map__33354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33354):map__33354);
var file = cljs.core.get.call(null,map__33354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33354,map__33354__$1,file){
return (function (p1__33349_SHARP_,p2__33350_SHARP_){
if(cljs.core._EQ_.call(null,p1__33349_SHARP_,p2__33350_SHARP_)){
return p1__33349_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33354,map__33354__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33360){
var map__33361 = p__33360;
var map__33361__$1 = ((((!((map__33361 == null)))?((((map__33361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33361):map__33361);
var match_length = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33356_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33356_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33363_SHARP_,p2__33364_SHARP_){
return cljs.core.assoc.call(null,p1__33363_SHARP_,cljs.core.get.call(null,p2__33364_SHARP_,key),p2__33364_SHARP_);
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
var loaded_f_datas_33365 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33365);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33365);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33366,p__33367){
var map__33372 = p__33366;
var map__33372__$1 = ((((!((map__33372 == null)))?((((map__33372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33372):map__33372);
var on_cssload = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33373 = p__33367;
var map__33373__$1 = ((((!((map__33373 == null)))?((((map__33373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33373):map__33373);
var files_msg = map__33373__$1;
var files = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1489628688898