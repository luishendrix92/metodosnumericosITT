// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34061){
var map__34086 = p__34061;
var map__34086__$1 = ((((!((map__34086 == null)))?((((map__34086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34086):map__34086);
var m = map__34086__$1;
var n = cljs.core.get.call(null,map__34086__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34088_34110 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34089_34111 = null;
var count__34090_34112 = (0);
var i__34091_34113 = (0);
while(true){
if((i__34091_34113 < count__34090_34112)){
var f_34114 = cljs.core._nth.call(null,chunk__34089_34111,i__34091_34113);
cljs.core.println.call(null,"  ",f_34114);

var G__34115 = seq__34088_34110;
var G__34116 = chunk__34089_34111;
var G__34117 = count__34090_34112;
var G__34118 = (i__34091_34113 + (1));
seq__34088_34110 = G__34115;
chunk__34089_34111 = G__34116;
count__34090_34112 = G__34117;
i__34091_34113 = G__34118;
continue;
} else {
var temp__4657__auto___34119 = cljs.core.seq.call(null,seq__34088_34110);
if(temp__4657__auto___34119){
var seq__34088_34120__$1 = temp__4657__auto___34119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34088_34120__$1)){
var c__25659__auto___34121 = cljs.core.chunk_first.call(null,seq__34088_34120__$1);
var G__34122 = cljs.core.chunk_rest.call(null,seq__34088_34120__$1);
var G__34123 = c__25659__auto___34121;
var G__34124 = cljs.core.count.call(null,c__25659__auto___34121);
var G__34125 = (0);
seq__34088_34110 = G__34122;
chunk__34089_34111 = G__34123;
count__34090_34112 = G__34124;
i__34091_34113 = G__34125;
continue;
} else {
var f_34126 = cljs.core.first.call(null,seq__34088_34120__$1);
cljs.core.println.call(null,"  ",f_34126);

var G__34127 = cljs.core.next.call(null,seq__34088_34120__$1);
var G__34128 = null;
var G__34129 = (0);
var G__34130 = (0);
seq__34088_34110 = G__34127;
chunk__34089_34111 = G__34128;
count__34090_34112 = G__34129;
i__34091_34113 = G__34130;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34131 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34131);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34131)))?cljs.core.second.call(null,arglists_34131):arglists_34131));
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
var seq__34092_34132 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34093_34133 = null;
var count__34094_34134 = (0);
var i__34095_34135 = (0);
while(true){
if((i__34095_34135 < count__34094_34134)){
var vec__34096_34136 = cljs.core._nth.call(null,chunk__34093_34133,i__34095_34135);
var name_34137 = cljs.core.nth.call(null,vec__34096_34136,(0),null);
var map__34099_34138 = cljs.core.nth.call(null,vec__34096_34136,(1),null);
var map__34099_34139__$1 = ((((!((map__34099_34138 == null)))?((((map__34099_34138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34099_34138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34099_34138):map__34099_34138);
var doc_34140 = cljs.core.get.call(null,map__34099_34139__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34141 = cljs.core.get.call(null,map__34099_34139__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34137);

cljs.core.println.call(null," ",arglists_34141);

if(cljs.core.truth_(doc_34140)){
cljs.core.println.call(null," ",doc_34140);
} else {
}

var G__34142 = seq__34092_34132;
var G__34143 = chunk__34093_34133;
var G__34144 = count__34094_34134;
var G__34145 = (i__34095_34135 + (1));
seq__34092_34132 = G__34142;
chunk__34093_34133 = G__34143;
count__34094_34134 = G__34144;
i__34095_34135 = G__34145;
continue;
} else {
var temp__4657__auto___34146 = cljs.core.seq.call(null,seq__34092_34132);
if(temp__4657__auto___34146){
var seq__34092_34147__$1 = temp__4657__auto___34146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34092_34147__$1)){
var c__25659__auto___34148 = cljs.core.chunk_first.call(null,seq__34092_34147__$1);
var G__34149 = cljs.core.chunk_rest.call(null,seq__34092_34147__$1);
var G__34150 = c__25659__auto___34148;
var G__34151 = cljs.core.count.call(null,c__25659__auto___34148);
var G__34152 = (0);
seq__34092_34132 = G__34149;
chunk__34093_34133 = G__34150;
count__34094_34134 = G__34151;
i__34095_34135 = G__34152;
continue;
} else {
var vec__34101_34153 = cljs.core.first.call(null,seq__34092_34147__$1);
var name_34154 = cljs.core.nth.call(null,vec__34101_34153,(0),null);
var map__34104_34155 = cljs.core.nth.call(null,vec__34101_34153,(1),null);
var map__34104_34156__$1 = ((((!((map__34104_34155 == null)))?((((map__34104_34155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34104_34155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34104_34155):map__34104_34155);
var doc_34157 = cljs.core.get.call(null,map__34104_34156__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34158 = cljs.core.get.call(null,map__34104_34156__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34154);

cljs.core.println.call(null," ",arglists_34158);

if(cljs.core.truth_(doc_34157)){
cljs.core.println.call(null," ",doc_34157);
} else {
}

var G__34159 = cljs.core.next.call(null,seq__34092_34147__$1);
var G__34160 = null;
var G__34161 = (0);
var G__34162 = (0);
seq__34092_34132 = G__34159;
chunk__34093_34133 = G__34160;
count__34094_34134 = G__34161;
i__34095_34135 = G__34162;
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

var seq__34106 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34107 = null;
var count__34108 = (0);
var i__34109 = (0);
while(true){
if((i__34109 < count__34108)){
var role = cljs.core._nth.call(null,chunk__34107,i__34109);
var temp__4657__auto___34163__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34163__$1)){
var spec_34164 = temp__4657__auto___34163__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34164));
} else {
}

var G__34165 = seq__34106;
var G__34166 = chunk__34107;
var G__34167 = count__34108;
var G__34168 = (i__34109 + (1));
seq__34106 = G__34165;
chunk__34107 = G__34166;
count__34108 = G__34167;
i__34109 = G__34168;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34106);
if(temp__4657__auto____$1){
var seq__34106__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34106__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34106__$1);
var G__34169 = cljs.core.chunk_rest.call(null,seq__34106__$1);
var G__34170 = c__25659__auto__;
var G__34171 = cljs.core.count.call(null,c__25659__auto__);
var G__34172 = (0);
seq__34106 = G__34169;
chunk__34107 = G__34170;
count__34108 = G__34171;
i__34109 = G__34172;
continue;
} else {
var role = cljs.core.first.call(null,seq__34106__$1);
var temp__4657__auto___34173__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34173__$2)){
var spec_34174 = temp__4657__auto___34173__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34174));
} else {
}

var G__34175 = cljs.core.next.call(null,seq__34106__$1);
var G__34176 = null;
var G__34177 = (0);
var G__34178 = (0);
seq__34106 = G__34175;
chunk__34107 = G__34176;
count__34108 = G__34177;
i__34109 = G__34178;
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

//# sourceMappingURL=repl.js.map?rel=1489514033570