// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34611){
var map__34636 = p__34611;
var map__34636__$1 = ((((!((map__34636 == null)))?((((map__34636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34636):map__34636);
var m = map__34636__$1;
var n = cljs.core.get.call(null,map__34636__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34638_34660 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34639_34661 = null;
var count__34640_34662 = (0);
var i__34641_34663 = (0);
while(true){
if((i__34641_34663 < count__34640_34662)){
var f_34664 = cljs.core._nth.call(null,chunk__34639_34661,i__34641_34663);
cljs.core.println.call(null,"  ",f_34664);

var G__34665 = seq__34638_34660;
var G__34666 = chunk__34639_34661;
var G__34667 = count__34640_34662;
var G__34668 = (i__34641_34663 + (1));
seq__34638_34660 = G__34665;
chunk__34639_34661 = G__34666;
count__34640_34662 = G__34667;
i__34641_34663 = G__34668;
continue;
} else {
var temp__4657__auto___34669 = cljs.core.seq.call(null,seq__34638_34660);
if(temp__4657__auto___34669){
var seq__34638_34670__$1 = temp__4657__auto___34669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34638_34670__$1)){
var c__25659__auto___34671 = cljs.core.chunk_first.call(null,seq__34638_34670__$1);
var G__34672 = cljs.core.chunk_rest.call(null,seq__34638_34670__$1);
var G__34673 = c__25659__auto___34671;
var G__34674 = cljs.core.count.call(null,c__25659__auto___34671);
var G__34675 = (0);
seq__34638_34660 = G__34672;
chunk__34639_34661 = G__34673;
count__34640_34662 = G__34674;
i__34641_34663 = G__34675;
continue;
} else {
var f_34676 = cljs.core.first.call(null,seq__34638_34670__$1);
cljs.core.println.call(null,"  ",f_34676);

var G__34677 = cljs.core.next.call(null,seq__34638_34670__$1);
var G__34678 = null;
var G__34679 = (0);
var G__34680 = (0);
seq__34638_34660 = G__34677;
chunk__34639_34661 = G__34678;
count__34640_34662 = G__34679;
i__34641_34663 = G__34680;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34681 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34681);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34681)))?cljs.core.second.call(null,arglists_34681):arglists_34681));
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
var seq__34642_34682 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34643_34683 = null;
var count__34644_34684 = (0);
var i__34645_34685 = (0);
while(true){
if((i__34645_34685 < count__34644_34684)){
var vec__34646_34686 = cljs.core._nth.call(null,chunk__34643_34683,i__34645_34685);
var name_34687 = cljs.core.nth.call(null,vec__34646_34686,(0),null);
var map__34649_34688 = cljs.core.nth.call(null,vec__34646_34686,(1),null);
var map__34649_34689__$1 = ((((!((map__34649_34688 == null)))?((((map__34649_34688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34649_34688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34649_34688):map__34649_34688);
var doc_34690 = cljs.core.get.call(null,map__34649_34689__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34691 = cljs.core.get.call(null,map__34649_34689__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34687);

cljs.core.println.call(null," ",arglists_34691);

if(cljs.core.truth_(doc_34690)){
cljs.core.println.call(null," ",doc_34690);
} else {
}

var G__34692 = seq__34642_34682;
var G__34693 = chunk__34643_34683;
var G__34694 = count__34644_34684;
var G__34695 = (i__34645_34685 + (1));
seq__34642_34682 = G__34692;
chunk__34643_34683 = G__34693;
count__34644_34684 = G__34694;
i__34645_34685 = G__34695;
continue;
} else {
var temp__4657__auto___34696 = cljs.core.seq.call(null,seq__34642_34682);
if(temp__4657__auto___34696){
var seq__34642_34697__$1 = temp__4657__auto___34696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34642_34697__$1)){
var c__25659__auto___34698 = cljs.core.chunk_first.call(null,seq__34642_34697__$1);
var G__34699 = cljs.core.chunk_rest.call(null,seq__34642_34697__$1);
var G__34700 = c__25659__auto___34698;
var G__34701 = cljs.core.count.call(null,c__25659__auto___34698);
var G__34702 = (0);
seq__34642_34682 = G__34699;
chunk__34643_34683 = G__34700;
count__34644_34684 = G__34701;
i__34645_34685 = G__34702;
continue;
} else {
var vec__34651_34703 = cljs.core.first.call(null,seq__34642_34697__$1);
var name_34704 = cljs.core.nth.call(null,vec__34651_34703,(0),null);
var map__34654_34705 = cljs.core.nth.call(null,vec__34651_34703,(1),null);
var map__34654_34706__$1 = ((((!((map__34654_34705 == null)))?((((map__34654_34705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34654_34705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34654_34705):map__34654_34705);
var doc_34707 = cljs.core.get.call(null,map__34654_34706__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34708 = cljs.core.get.call(null,map__34654_34706__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34704);

cljs.core.println.call(null," ",arglists_34708);

if(cljs.core.truth_(doc_34707)){
cljs.core.println.call(null," ",doc_34707);
} else {
}

var G__34709 = cljs.core.next.call(null,seq__34642_34697__$1);
var G__34710 = null;
var G__34711 = (0);
var G__34712 = (0);
seq__34642_34682 = G__34709;
chunk__34643_34683 = G__34710;
count__34644_34684 = G__34711;
i__34645_34685 = G__34712;
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

var seq__34656 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34657 = null;
var count__34658 = (0);
var i__34659 = (0);
while(true){
if((i__34659 < count__34658)){
var role = cljs.core._nth.call(null,chunk__34657,i__34659);
var temp__4657__auto___34713__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34713__$1)){
var spec_34714 = temp__4657__auto___34713__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34714));
} else {
}

var G__34715 = seq__34656;
var G__34716 = chunk__34657;
var G__34717 = count__34658;
var G__34718 = (i__34659 + (1));
seq__34656 = G__34715;
chunk__34657 = G__34716;
count__34658 = G__34717;
i__34659 = G__34718;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34656);
if(temp__4657__auto____$1){
var seq__34656__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34656__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34656__$1);
var G__34719 = cljs.core.chunk_rest.call(null,seq__34656__$1);
var G__34720 = c__25659__auto__;
var G__34721 = cljs.core.count.call(null,c__25659__auto__);
var G__34722 = (0);
seq__34656 = G__34719;
chunk__34657 = G__34720;
count__34658 = G__34721;
i__34659 = G__34722;
continue;
} else {
var role = cljs.core.first.call(null,seq__34656__$1);
var temp__4657__auto___34723__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34723__$2)){
var spec_34724 = temp__4657__auto___34723__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34724));
} else {
}

var G__34725 = cljs.core.next.call(null,seq__34656__$1);
var G__34726 = null;
var G__34727 = (0);
var G__34728 = (0);
seq__34656 = G__34725;
chunk__34657 = G__34726;
count__34658 = G__34727;
i__34659 = G__34728;
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

//# sourceMappingURL=repl.js.map?rel=1491541649438