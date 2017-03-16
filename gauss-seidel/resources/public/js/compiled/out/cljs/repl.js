// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34675){
var map__34700 = p__34675;
var map__34700__$1 = ((((!((map__34700 == null)))?((((map__34700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34700):map__34700);
var m = map__34700__$1;
var n = cljs.core.get.call(null,map__34700__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34700__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34702_34724 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34703_34725 = null;
var count__34704_34726 = (0);
var i__34705_34727 = (0);
while(true){
if((i__34705_34727 < count__34704_34726)){
var f_34728 = cljs.core._nth.call(null,chunk__34703_34725,i__34705_34727);
cljs.core.println.call(null,"  ",f_34728);

var G__34729 = seq__34702_34724;
var G__34730 = chunk__34703_34725;
var G__34731 = count__34704_34726;
var G__34732 = (i__34705_34727 + (1));
seq__34702_34724 = G__34729;
chunk__34703_34725 = G__34730;
count__34704_34726 = G__34731;
i__34705_34727 = G__34732;
continue;
} else {
var temp__4657__auto___34733 = cljs.core.seq.call(null,seq__34702_34724);
if(temp__4657__auto___34733){
var seq__34702_34734__$1 = temp__4657__auto___34733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34702_34734__$1)){
var c__25659__auto___34735 = cljs.core.chunk_first.call(null,seq__34702_34734__$1);
var G__34736 = cljs.core.chunk_rest.call(null,seq__34702_34734__$1);
var G__34737 = c__25659__auto___34735;
var G__34738 = cljs.core.count.call(null,c__25659__auto___34735);
var G__34739 = (0);
seq__34702_34724 = G__34736;
chunk__34703_34725 = G__34737;
count__34704_34726 = G__34738;
i__34705_34727 = G__34739;
continue;
} else {
var f_34740 = cljs.core.first.call(null,seq__34702_34734__$1);
cljs.core.println.call(null,"  ",f_34740);

var G__34741 = cljs.core.next.call(null,seq__34702_34734__$1);
var G__34742 = null;
var G__34743 = (0);
var G__34744 = (0);
seq__34702_34724 = G__34741;
chunk__34703_34725 = G__34742;
count__34704_34726 = G__34743;
i__34705_34727 = G__34744;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34745 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34745);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34745)))?cljs.core.second.call(null,arglists_34745):arglists_34745));
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
var seq__34706_34746 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34707_34747 = null;
var count__34708_34748 = (0);
var i__34709_34749 = (0);
while(true){
if((i__34709_34749 < count__34708_34748)){
var vec__34710_34750 = cljs.core._nth.call(null,chunk__34707_34747,i__34709_34749);
var name_34751 = cljs.core.nth.call(null,vec__34710_34750,(0),null);
var map__34713_34752 = cljs.core.nth.call(null,vec__34710_34750,(1),null);
var map__34713_34753__$1 = ((((!((map__34713_34752 == null)))?((((map__34713_34752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34713_34752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34713_34752):map__34713_34752);
var doc_34754 = cljs.core.get.call(null,map__34713_34753__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34755 = cljs.core.get.call(null,map__34713_34753__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34751);

cljs.core.println.call(null," ",arglists_34755);

if(cljs.core.truth_(doc_34754)){
cljs.core.println.call(null," ",doc_34754);
} else {
}

var G__34756 = seq__34706_34746;
var G__34757 = chunk__34707_34747;
var G__34758 = count__34708_34748;
var G__34759 = (i__34709_34749 + (1));
seq__34706_34746 = G__34756;
chunk__34707_34747 = G__34757;
count__34708_34748 = G__34758;
i__34709_34749 = G__34759;
continue;
} else {
var temp__4657__auto___34760 = cljs.core.seq.call(null,seq__34706_34746);
if(temp__4657__auto___34760){
var seq__34706_34761__$1 = temp__4657__auto___34760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34706_34761__$1)){
var c__25659__auto___34762 = cljs.core.chunk_first.call(null,seq__34706_34761__$1);
var G__34763 = cljs.core.chunk_rest.call(null,seq__34706_34761__$1);
var G__34764 = c__25659__auto___34762;
var G__34765 = cljs.core.count.call(null,c__25659__auto___34762);
var G__34766 = (0);
seq__34706_34746 = G__34763;
chunk__34707_34747 = G__34764;
count__34708_34748 = G__34765;
i__34709_34749 = G__34766;
continue;
} else {
var vec__34715_34767 = cljs.core.first.call(null,seq__34706_34761__$1);
var name_34768 = cljs.core.nth.call(null,vec__34715_34767,(0),null);
var map__34718_34769 = cljs.core.nth.call(null,vec__34715_34767,(1),null);
var map__34718_34770__$1 = ((((!((map__34718_34769 == null)))?((((map__34718_34769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34718_34769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34718_34769):map__34718_34769);
var doc_34771 = cljs.core.get.call(null,map__34718_34770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34772 = cljs.core.get.call(null,map__34718_34770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34768);

cljs.core.println.call(null," ",arglists_34772);

if(cljs.core.truth_(doc_34771)){
cljs.core.println.call(null," ",doc_34771);
} else {
}

var G__34773 = cljs.core.next.call(null,seq__34706_34761__$1);
var G__34774 = null;
var G__34775 = (0);
var G__34776 = (0);
seq__34706_34746 = G__34773;
chunk__34707_34747 = G__34774;
count__34708_34748 = G__34775;
i__34709_34749 = G__34776;
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

var seq__34720 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34721 = null;
var count__34722 = (0);
var i__34723 = (0);
while(true){
if((i__34723 < count__34722)){
var role = cljs.core._nth.call(null,chunk__34721,i__34723);
var temp__4657__auto___34777__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34777__$1)){
var spec_34778 = temp__4657__auto___34777__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34778));
} else {
}

var G__34779 = seq__34720;
var G__34780 = chunk__34721;
var G__34781 = count__34722;
var G__34782 = (i__34723 + (1));
seq__34720 = G__34779;
chunk__34721 = G__34780;
count__34722 = G__34781;
i__34723 = G__34782;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34720);
if(temp__4657__auto____$1){
var seq__34720__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34720__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34720__$1);
var G__34783 = cljs.core.chunk_rest.call(null,seq__34720__$1);
var G__34784 = c__25659__auto__;
var G__34785 = cljs.core.count.call(null,c__25659__auto__);
var G__34786 = (0);
seq__34720 = G__34783;
chunk__34721 = G__34784;
count__34722 = G__34785;
i__34723 = G__34786;
continue;
} else {
var role = cljs.core.first.call(null,seq__34720__$1);
var temp__4657__auto___34787__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34787__$2)){
var spec_34788 = temp__4657__auto___34787__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34788));
} else {
}

var G__34789 = cljs.core.next.call(null,seq__34720__$1);
var G__34790 = null;
var G__34791 = (0);
var G__34792 = (0);
seq__34720 = G__34789;
chunk__34721 = G__34790;
count__34722 = G__34791;
i__34723 = G__34792;
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

//# sourceMappingURL=repl.js.map?rel=1489628692391