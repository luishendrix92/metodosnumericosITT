// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56696){
var map__56721 = p__56696;
var map__56721__$1 = ((((!((map__56721 == null)))?((((map__56721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56721):map__56721);
var m = map__56721__$1;
var n = cljs.core.get.call(null,map__56721__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__56721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56723_56745 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56724_56746 = null;
var count__56725_56747 = (0);
var i__56726_56748 = (0);
while(true){
if((i__56726_56748 < count__56725_56747)){
var f_56749 = cljs.core._nth.call(null,chunk__56724_56746,i__56726_56748);
cljs.core.println.call(null,"  ",f_56749);

var G__56750 = seq__56723_56745;
var G__56751 = chunk__56724_56746;
var G__56752 = count__56725_56747;
var G__56753 = (i__56726_56748 + (1));
seq__56723_56745 = G__56750;
chunk__56724_56746 = G__56751;
count__56725_56747 = G__56752;
i__56726_56748 = G__56753;
continue;
} else {
var temp__4657__auto___56754 = cljs.core.seq.call(null,seq__56723_56745);
if(temp__4657__auto___56754){
var seq__56723_56755__$1 = temp__4657__auto___56754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56723_56755__$1)){
var c__25659__auto___56756 = cljs.core.chunk_first.call(null,seq__56723_56755__$1);
var G__56757 = cljs.core.chunk_rest.call(null,seq__56723_56755__$1);
var G__56758 = c__25659__auto___56756;
var G__56759 = cljs.core.count.call(null,c__25659__auto___56756);
var G__56760 = (0);
seq__56723_56745 = G__56757;
chunk__56724_56746 = G__56758;
count__56725_56747 = G__56759;
i__56726_56748 = G__56760;
continue;
} else {
var f_56761 = cljs.core.first.call(null,seq__56723_56755__$1);
cljs.core.println.call(null,"  ",f_56761);

var G__56762 = cljs.core.next.call(null,seq__56723_56755__$1);
var G__56763 = null;
var G__56764 = (0);
var G__56765 = (0);
seq__56723_56745 = G__56762;
chunk__56724_56746 = G__56763;
count__56725_56747 = G__56764;
i__56726_56748 = G__56765;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56766 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56766);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_56766)))?cljs.core.second.call(null,arglists_56766):arglists_56766));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56727_56767 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56728_56768 = null;
var count__56729_56769 = (0);
var i__56730_56770 = (0);
while(true){
if((i__56730_56770 < count__56729_56769)){
var vec__56731_56771 = cljs.core._nth.call(null,chunk__56728_56768,i__56730_56770);
var name_56772 = cljs.core.nth.call(null,vec__56731_56771,(0),null);
var map__56734_56773 = cljs.core.nth.call(null,vec__56731_56771,(1),null);
var map__56734_56774__$1 = ((((!((map__56734_56773 == null)))?((((map__56734_56773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56734_56773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56734_56773):map__56734_56773);
var doc_56775 = cljs.core.get.call(null,map__56734_56774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56776 = cljs.core.get.call(null,map__56734_56774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56772);

cljs.core.println.call(null," ",arglists_56776);

if(cljs.core.truth_(doc_56775)){
cljs.core.println.call(null," ",doc_56775);
} else {
}

var G__56777 = seq__56727_56767;
var G__56778 = chunk__56728_56768;
var G__56779 = count__56729_56769;
var G__56780 = (i__56730_56770 + (1));
seq__56727_56767 = G__56777;
chunk__56728_56768 = G__56778;
count__56729_56769 = G__56779;
i__56730_56770 = G__56780;
continue;
} else {
var temp__4657__auto___56781 = cljs.core.seq.call(null,seq__56727_56767);
if(temp__4657__auto___56781){
var seq__56727_56782__$1 = temp__4657__auto___56781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56727_56782__$1)){
var c__25659__auto___56783 = cljs.core.chunk_first.call(null,seq__56727_56782__$1);
var G__56784 = cljs.core.chunk_rest.call(null,seq__56727_56782__$1);
var G__56785 = c__25659__auto___56783;
var G__56786 = cljs.core.count.call(null,c__25659__auto___56783);
var G__56787 = (0);
seq__56727_56767 = G__56784;
chunk__56728_56768 = G__56785;
count__56729_56769 = G__56786;
i__56730_56770 = G__56787;
continue;
} else {
var vec__56736_56788 = cljs.core.first.call(null,seq__56727_56782__$1);
var name_56789 = cljs.core.nth.call(null,vec__56736_56788,(0),null);
var map__56739_56790 = cljs.core.nth.call(null,vec__56736_56788,(1),null);
var map__56739_56791__$1 = ((((!((map__56739_56790 == null)))?((((map__56739_56790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56739_56790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56739_56790):map__56739_56790);
var doc_56792 = cljs.core.get.call(null,map__56739_56791__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56793 = cljs.core.get.call(null,map__56739_56791__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56789);

cljs.core.println.call(null," ",arglists_56793);

if(cljs.core.truth_(doc_56792)){
cljs.core.println.call(null," ",doc_56792);
} else {
}

var G__56794 = cljs.core.next.call(null,seq__56727_56782__$1);
var G__56795 = null;
var G__56796 = (0);
var G__56797 = (0);
seq__56727_56767 = G__56794;
chunk__56728_56768 = G__56795;
count__56729_56769 = G__56796;
i__56730_56770 = G__56797;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__56741 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56742 = null;
var count__56743 = (0);
var i__56744 = (0);
while(true){
if((i__56744 < count__56743)){
var role = cljs.core._nth.call(null,chunk__56742,i__56744);
var temp__4657__auto___56798__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___56798__$1)){
var spec_56799 = temp__4657__auto___56798__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_56799));
} else {
}

var G__56800 = seq__56741;
var G__56801 = chunk__56742;
var G__56802 = count__56743;
var G__56803 = (i__56744 + (1));
seq__56741 = G__56800;
chunk__56742 = G__56801;
count__56743 = G__56802;
i__56744 = G__56803;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__56741);
if(temp__4657__auto____$1){
var seq__56741__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56741__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__56741__$1);
var G__56804 = cljs.core.chunk_rest.call(null,seq__56741__$1);
var G__56805 = c__25659__auto__;
var G__56806 = cljs.core.count.call(null,c__25659__auto__);
var G__56807 = (0);
seq__56741 = G__56804;
chunk__56742 = G__56805;
count__56743 = G__56806;
i__56744 = G__56807;
continue;
} else {
var role = cljs.core.first.call(null,seq__56741__$1);
var temp__4657__auto___56808__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___56808__$2)){
var spec_56809 = temp__4657__auto___56808__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_56809));
} else {
}

var G__56810 = cljs.core.next.call(null,seq__56741__$1);
var G__56811 = null;
var G__56812 = (0);
var G__56813 = (0);
seq__56741 = G__56810;
chunk__56742 = G__56811;
count__56743 = G__56812;
i__56744 = G__56813;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489464074692