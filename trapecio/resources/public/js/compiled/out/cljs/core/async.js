// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27757 = [];
var len__25923__auto___27763 = arguments.length;
var i__25924__auto___27764 = (0);
while(true){
if((i__25924__auto___27764 < len__25923__auto___27763)){
args27757.push((arguments[i__25924__auto___27764]));

var G__27765 = (i__25924__auto___27764 + (1));
i__25924__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var G__27759 = args27757.length;
switch (G__27759) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27757.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27760 = (function (f,blockable,meta27761){
this.f = f;
this.blockable = blockable;
this.meta27761 = meta27761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27762,meta27761__$1){
var self__ = this;
var _27762__$1 = this;
return (new cljs.core.async.t_cljs$core$async27760(self__.f,self__.blockable,meta27761__$1));
});

cljs.core.async.t_cljs$core$async27760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27762){
var self__ = this;
var _27762__$1 = this;
return self__.meta27761;
});

cljs.core.async.t_cljs$core$async27760.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27761","meta27761",1001273351,null)], null);
});

cljs.core.async.t_cljs$core$async27760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27760";

cljs.core.async.t_cljs$core$async27760.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27760");
});

cljs.core.async.__GT_t_cljs$core$async27760 = (function cljs$core$async$__GT_t_cljs$core$async27760(f__$1,blockable__$1,meta27761){
return (new cljs.core.async.t_cljs$core$async27760(f__$1,blockable__$1,meta27761));
});

}

return (new cljs.core.async.t_cljs$core$async27760(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27769 = [];
var len__25923__auto___27772 = arguments.length;
var i__25924__auto___27773 = (0);
while(true){
if((i__25924__auto___27773 < len__25923__auto___27772)){
args27769.push((arguments[i__25924__auto___27773]));

var G__27774 = (i__25924__auto___27773 + (1));
i__25924__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var G__27771 = args27769.length;
switch (G__27771) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27769.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27776 = [];
var len__25923__auto___27779 = arguments.length;
var i__25924__auto___27780 = (0);
while(true){
if((i__25924__auto___27780 < len__25923__auto___27779)){
args27776.push((arguments[i__25924__auto___27780]));

var G__27781 = (i__25924__auto___27780 + (1));
i__25924__auto___27780 = G__27781;
continue;
} else {
}
break;
}

var G__27778 = args27776.length;
switch (G__27778) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27776.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27783 = [];
var len__25923__auto___27786 = arguments.length;
var i__25924__auto___27787 = (0);
while(true){
if((i__25924__auto___27787 < len__25923__auto___27786)){
args27783.push((arguments[i__25924__auto___27787]));

var G__27788 = (i__25924__auto___27787 + (1));
i__25924__auto___27787 = G__27788;
continue;
} else {
}
break;
}

var G__27785 = args27783.length;
switch (G__27785) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27783.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27790 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27790);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27790,ret){
return (function (){
return fn1.call(null,val_27790);
});})(val_27790,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27791 = [];
var len__25923__auto___27794 = arguments.length;
var i__25924__auto___27795 = (0);
while(true){
if((i__25924__auto___27795 < len__25923__auto___27794)){
args27791.push((arguments[i__25924__auto___27795]));

var G__27796 = (i__25924__auto___27795 + (1));
i__25924__auto___27795 = G__27796;
continue;
} else {
}
break;
}

var G__27793 = args27791.length;
switch (G__27793) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27791.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25763__auto___27798 = n;
var x_27799 = (0);
while(true){
if((x_27799 < n__25763__auto___27798)){
(a[x_27799] = (0));

var G__27800 = (x_27799 + (1));
x_27799 = G__27800;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27801 = (i + (1));
i = G__27801;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27805 = (function (alt_flag,flag,meta27806){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27806 = meta27806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27807,meta27806__$1){
var self__ = this;
var _27807__$1 = this;
return (new cljs.core.async.t_cljs$core$async27805(self__.alt_flag,self__.flag,meta27806__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27807){
var self__ = this;
var _27807__$1 = this;
return self__.meta27806;
});})(flag))
;

cljs.core.async.t_cljs$core$async27805.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27805.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27805.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27806","meta27806",1338367866,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27805";

cljs.core.async.t_cljs$core$async27805.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27805");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27805 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27805(alt_flag__$1,flag__$1,meta27806){
return (new cljs.core.async.t_cljs$core$async27805(alt_flag__$1,flag__$1,meta27806));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27805(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27811 = (function (alt_handler,flag,cb,meta27812){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27812 = meta27812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27813,meta27812__$1){
var self__ = this;
var _27813__$1 = this;
return (new cljs.core.async.t_cljs$core$async27811(self__.alt_handler,self__.flag,self__.cb,meta27812__$1));
});

cljs.core.async.t_cljs$core$async27811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27813){
var self__ = this;
var _27813__$1 = this;
return self__.meta27812;
});

cljs.core.async.t_cljs$core$async27811.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27812","meta27812",-838787120,null)], null);
});

cljs.core.async.t_cljs$core$async27811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27811";

cljs.core.async.t_cljs$core$async27811.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27811");
});

cljs.core.async.__GT_t_cljs$core$async27811 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27811(alt_handler__$1,flag__$1,cb__$1,meta27812){
return (new cljs.core.async.t_cljs$core$async27811(alt_handler__$1,flag__$1,cb__$1,meta27812));
});

}

return (new cljs.core.async.t_cljs$core$async27811(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27814_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27814_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27815_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27815_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24848__auto__ = wport;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27816 = (i + (1));
i = G__27816;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24848__auto__ = ret;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24836__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___27822 = arguments.length;
var i__25924__auto___27823 = (0);
while(true){
if((i__25924__auto___27823 < len__25923__auto___27822)){
args__25930__auto__.push((arguments[i__25924__auto___27823]));

var G__27824 = (i__25924__auto___27823 + (1));
i__25924__auto___27823 = G__27824;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27819){
var map__27820 = p__27819;
var map__27820__$1 = ((((!((map__27820 == null)))?((((map__27820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27820):map__27820);
var opts = map__27820__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27817){
var G__27818 = cljs.core.first.call(null,seq27817);
var seq27817__$1 = cljs.core.next.call(null,seq27817);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27818,seq27817__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27825 = [];
var len__25923__auto___27875 = arguments.length;
var i__25924__auto___27876 = (0);
while(true){
if((i__25924__auto___27876 < len__25923__auto___27875)){
args27825.push((arguments[i__25924__auto___27876]));

var G__27877 = (i__25924__auto___27876 + (1));
i__25924__auto___27876 = G__27877;
continue;
} else {
}
break;
}

var G__27827 = args27825.length;
switch (G__27827) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27825.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27712__auto___27879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___27879){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___27879){
return (function (state_27851){
var state_val_27852 = (state_27851[(1)]);
if((state_val_27852 === (7))){
var inst_27847 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27853_27880 = state_27851__$1;
(statearr_27853_27880[(2)] = inst_27847);

(statearr_27853_27880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (1))){
var state_27851__$1 = state_27851;
var statearr_27854_27881 = state_27851__$1;
(statearr_27854_27881[(2)] = null);

(statearr_27854_27881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (4))){
var inst_27830 = (state_27851[(7)]);
var inst_27830__$1 = (state_27851[(2)]);
var inst_27831 = (inst_27830__$1 == null);
var state_27851__$1 = (function (){var statearr_27855 = state_27851;
(statearr_27855[(7)] = inst_27830__$1);

return statearr_27855;
})();
if(cljs.core.truth_(inst_27831)){
var statearr_27856_27882 = state_27851__$1;
(statearr_27856_27882[(1)] = (5));

} else {
var statearr_27857_27883 = state_27851__$1;
(statearr_27857_27883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (13))){
var state_27851__$1 = state_27851;
var statearr_27858_27884 = state_27851__$1;
(statearr_27858_27884[(2)] = null);

(statearr_27858_27884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (6))){
var inst_27830 = (state_27851[(7)]);
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27851__$1,(11),to,inst_27830);
} else {
if((state_val_27852 === (3))){
var inst_27849 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27851__$1,inst_27849);
} else {
if((state_val_27852 === (12))){
var state_27851__$1 = state_27851;
var statearr_27859_27885 = state_27851__$1;
(statearr_27859_27885[(2)] = null);

(statearr_27859_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (2))){
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27851__$1,(4),from);
} else {
if((state_val_27852 === (11))){
var inst_27840 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
if(cljs.core.truth_(inst_27840)){
var statearr_27860_27886 = state_27851__$1;
(statearr_27860_27886[(1)] = (12));

} else {
var statearr_27861_27887 = state_27851__$1;
(statearr_27861_27887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (9))){
var state_27851__$1 = state_27851;
var statearr_27862_27888 = state_27851__$1;
(statearr_27862_27888[(2)] = null);

(statearr_27862_27888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (5))){
var state_27851__$1 = state_27851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27863_27889 = state_27851__$1;
(statearr_27863_27889[(1)] = (8));

} else {
var statearr_27864_27890 = state_27851__$1;
(statearr_27864_27890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (14))){
var inst_27845 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27865_27891 = state_27851__$1;
(statearr_27865_27891[(2)] = inst_27845);

(statearr_27865_27891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (10))){
var inst_27837 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27866_27892 = state_27851__$1;
(statearr_27866_27892[(2)] = inst_27837);

(statearr_27866_27892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (8))){
var inst_27834 = cljs.core.async.close_BANG_.call(null,to);
var state_27851__$1 = state_27851;
var statearr_27867_27893 = state_27851__$1;
(statearr_27867_27893[(2)] = inst_27834);

(statearr_27867_27893[(1)] = (10));


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
});})(c__27712__auto___27879))
;
return ((function (switch__27600__auto__,c__27712__auto___27879){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_27871 = [null,null,null,null,null,null,null,null];
(statearr_27871[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_27871[(1)] = (1));

return statearr_27871;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_27851){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_27851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e27872){if((e27872 instanceof Object)){
var ex__27604__auto__ = e27872;
var statearr_27873_27894 = state_27851;
(statearr_27873_27894[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27895 = state_27851;
state_27851 = G__27895;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_27851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_27851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___27879))
})();
var state__27714__auto__ = (function (){var statearr_27874 = f__27713__auto__.call(null);
(statearr_27874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___27879);

return statearr_27874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___27879))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28083){
var vec__28084 = p__28083;
var v = cljs.core.nth.call(null,vec__28084,(0),null);
var p = cljs.core.nth.call(null,vec__28084,(1),null);
var job = vec__28084;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27712__auto___28270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___28270,res,vec__28084,v,p,job,jobs,results){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___28270,res,vec__28084,v,p,job,jobs,results){
return (function (state_28091){
var state_val_28092 = (state_28091[(1)]);
if((state_val_28092 === (1))){
var state_28091__$1 = state_28091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28091__$1,(2),res,v);
} else {
if((state_val_28092 === (2))){
var inst_28088 = (state_28091[(2)]);
var inst_28089 = cljs.core.async.close_BANG_.call(null,res);
var state_28091__$1 = (function (){var statearr_28093 = state_28091;
(statearr_28093[(7)] = inst_28088);

return statearr_28093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28091__$1,inst_28089);
} else {
return null;
}
}
});})(c__27712__auto___28270,res,vec__28084,v,p,job,jobs,results))
;
return ((function (switch__27600__auto__,c__27712__auto___28270,res,vec__28084,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0 = (function (){
var statearr_28097 = [null,null,null,null,null,null,null,null];
(statearr_28097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__);

(statearr_28097[(1)] = (1));

return statearr_28097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1 = (function (state_28091){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28098){if((e28098 instanceof Object)){
var ex__27604__auto__ = e28098;
var statearr_28099_28271 = state_28091;
(statearr_28099_28271[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28272 = state_28091;
state_28091 = G__28272;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = function(state_28091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1.call(this,state_28091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___28270,res,vec__28084,v,p,job,jobs,results))
})();
var state__27714__auto__ = (function (){var statearr_28100 = f__27713__auto__.call(null);
(statearr_28100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___28270);

return statearr_28100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___28270,res,vec__28084,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28101){
var vec__28102 = p__28101;
var v = cljs.core.nth.call(null,vec__28102,(0),null);
var p = cljs.core.nth.call(null,vec__28102,(1),null);
var job = vec__28102;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25763__auto___28273 = n;
var __28274 = (0);
while(true){
if((__28274 < n__25763__auto___28273)){
var G__28105_28275 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28105_28275) {
case "compute":
var c__27712__auto___28277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28274,c__27712__auto___28277,G__28105_28275,n__25763__auto___28273,jobs,results,process,async){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (__28274,c__27712__auto___28277,G__28105_28275,n__25763__auto___28273,jobs,results,process,async){
return (function (state_28118){
var state_val_28119 = (state_28118[(1)]);
if((state_val_28119 === (1))){
var state_28118__$1 = state_28118;
var statearr_28120_28278 = state_28118__$1;
(statearr_28120_28278[(2)] = null);

(statearr_28120_28278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (2))){
var state_28118__$1 = state_28118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28118__$1,(4),jobs);
} else {
if((state_val_28119 === (3))){
var inst_28116 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28118__$1,inst_28116);
} else {
if((state_val_28119 === (4))){
var inst_28108 = (state_28118[(2)]);
var inst_28109 = process.call(null,inst_28108);
var state_28118__$1 = state_28118;
if(cljs.core.truth_(inst_28109)){
var statearr_28121_28279 = state_28118__$1;
(statearr_28121_28279[(1)] = (5));

} else {
var statearr_28122_28280 = state_28118__$1;
(statearr_28122_28280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (5))){
var state_28118__$1 = state_28118;
var statearr_28123_28281 = state_28118__$1;
(statearr_28123_28281[(2)] = null);

(statearr_28123_28281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (6))){
var state_28118__$1 = state_28118;
var statearr_28124_28282 = state_28118__$1;
(statearr_28124_28282[(2)] = null);

(statearr_28124_28282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28119 === (7))){
var inst_28114 = (state_28118[(2)]);
var state_28118__$1 = state_28118;
var statearr_28125_28283 = state_28118__$1;
(statearr_28125_28283[(2)] = inst_28114);

(statearr_28125_28283[(1)] = (3));


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
});})(__28274,c__27712__auto___28277,G__28105_28275,n__25763__auto___28273,jobs,results,process,async))
;
return ((function (__28274,switch__27600__auto__,c__27712__auto___28277,G__28105_28275,n__25763__auto___28273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0 = (function (){
var statearr_28129 = [null,null,null,null,null,null,null];
(statearr_28129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__);

(statearr_28129[(1)] = (1));

return statearr_28129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1 = (function (state_28118){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28130){if((e28130 instanceof Object)){
var ex__27604__auto__ = e28130;
var statearr_28131_28284 = state_28118;
(statearr_28131_28284[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28285 = state_28118;
state_28118 = G__28285;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = function(state_28118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1.call(this,state_28118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__;
})()
;})(__28274,switch__27600__auto__,c__27712__auto___28277,G__28105_28275,n__25763__auto___28273,jobs,results,process,async))
})();
var state__27714__auto__ = (function (){var statearr_28132 = f__27713__auto__.call(null);
(statearr_28132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___28277);

return statearr_28132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(__28274,c__27712__auto___28277,G__28105_28275,n__25763__auto___28273,jobs,results,process,async))
);


break;
case "async":
var c__27712__auto___28286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28274,c__27712__auto___28286,G__28105_28275,n__25763__auto___28273,jobs,results,process,async){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (__28274,c__27712__auto___28286,G__28105_28275,n__25763__auto___28273,jobs,results,process,async){
return (function (state_28145){
var state_val_28146 = (state_28145[(1)]);
if((state_val_28146 === (1))){
var state_28145__$1 = state_28145;
var statearr_28147_28287 = state_28145__$1;
(statearr_28147_28287[(2)] = null);

(statearr_28147_28287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (2))){
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(4),jobs);
} else {
if((state_val_28146 === (3))){
var inst_28143 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28145__$1,inst_28143);
} else {
if((state_val_28146 === (4))){
var inst_28135 = (state_28145[(2)]);
var inst_28136 = async.call(null,inst_28135);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28136)){
var statearr_28148_28288 = state_28145__$1;
(statearr_28148_28288[(1)] = (5));

} else {
var statearr_28149_28289 = state_28145__$1;
(statearr_28149_28289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (5))){
var state_28145__$1 = state_28145;
var statearr_28150_28290 = state_28145__$1;
(statearr_28150_28290[(2)] = null);

(statearr_28150_28290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (6))){
var state_28145__$1 = state_28145;
var statearr_28151_28291 = state_28145__$1;
(statearr_28151_28291[(2)] = null);

(statearr_28151_28291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (7))){
var inst_28141 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28152_28292 = state_28145__$1;
(statearr_28152_28292[(2)] = inst_28141);

(statearr_28152_28292[(1)] = (3));


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
});})(__28274,c__27712__auto___28286,G__28105_28275,n__25763__auto___28273,jobs,results,process,async))
;
return ((function (__28274,switch__27600__auto__,c__27712__auto___28286,G__28105_28275,n__25763__auto___28273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0 = (function (){
var statearr_28156 = [null,null,null,null,null,null,null];
(statearr_28156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__);

(statearr_28156[(1)] = (1));

return statearr_28156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1 = (function (state_28145){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28157){if((e28157 instanceof Object)){
var ex__27604__auto__ = e28157;
var statearr_28158_28293 = state_28145;
(statearr_28158_28293[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28294 = state_28145;
state_28145 = G__28294;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = function(state_28145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1.call(this,state_28145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__;
})()
;})(__28274,switch__27600__auto__,c__27712__auto___28286,G__28105_28275,n__25763__auto___28273,jobs,results,process,async))
})();
var state__27714__auto__ = (function (){var statearr_28159 = f__27713__auto__.call(null);
(statearr_28159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___28286);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(__28274,c__27712__auto___28286,G__28105_28275,n__25763__auto___28273,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28295 = (__28274 + (1));
__28274 = G__28295;
continue;
} else {
}
break;
}

var c__27712__auto___28296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___28296,jobs,results,process,async){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___28296,jobs,results,process,async){
return (function (state_28181){
var state_val_28182 = (state_28181[(1)]);
if((state_val_28182 === (1))){
var state_28181__$1 = state_28181;
var statearr_28183_28297 = state_28181__$1;
(statearr_28183_28297[(2)] = null);

(statearr_28183_28297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (2))){
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,(4),from);
} else {
if((state_val_28182 === (3))){
var inst_28179 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28181__$1,inst_28179);
} else {
if((state_val_28182 === (4))){
var inst_28162 = (state_28181[(7)]);
var inst_28162__$1 = (state_28181[(2)]);
var inst_28163 = (inst_28162__$1 == null);
var state_28181__$1 = (function (){var statearr_28184 = state_28181;
(statearr_28184[(7)] = inst_28162__$1);

return statearr_28184;
})();
if(cljs.core.truth_(inst_28163)){
var statearr_28185_28298 = state_28181__$1;
(statearr_28185_28298[(1)] = (5));

} else {
var statearr_28186_28299 = state_28181__$1;
(statearr_28186_28299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (5))){
var inst_28165 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28181__$1 = state_28181;
var statearr_28187_28300 = state_28181__$1;
(statearr_28187_28300[(2)] = inst_28165);

(statearr_28187_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (6))){
var inst_28167 = (state_28181[(8)]);
var inst_28162 = (state_28181[(7)]);
var inst_28167__$1 = cljs.core.async.chan.call(null,(1));
var inst_28168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28169 = [inst_28162,inst_28167__$1];
var inst_28170 = (new cljs.core.PersistentVector(null,2,(5),inst_28168,inst_28169,null));
var state_28181__$1 = (function (){var statearr_28188 = state_28181;
(statearr_28188[(8)] = inst_28167__$1);

return statearr_28188;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28181__$1,(8),jobs,inst_28170);
} else {
if((state_val_28182 === (7))){
var inst_28177 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28189_28301 = state_28181__$1;
(statearr_28189_28301[(2)] = inst_28177);

(statearr_28189_28301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (8))){
var inst_28167 = (state_28181[(8)]);
var inst_28172 = (state_28181[(2)]);
var state_28181__$1 = (function (){var statearr_28190 = state_28181;
(statearr_28190[(9)] = inst_28172);

return statearr_28190;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28181__$1,(9),results,inst_28167);
} else {
if((state_val_28182 === (9))){
var inst_28174 = (state_28181[(2)]);
var state_28181__$1 = (function (){var statearr_28191 = state_28181;
(statearr_28191[(10)] = inst_28174);

return statearr_28191;
})();
var statearr_28192_28302 = state_28181__$1;
(statearr_28192_28302[(2)] = null);

(statearr_28192_28302[(1)] = (2));


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
});})(c__27712__auto___28296,jobs,results,process,async))
;
return ((function (switch__27600__auto__,c__27712__auto___28296,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0 = (function (){
var statearr_28196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__);

(statearr_28196[(1)] = (1));

return statearr_28196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1 = (function (state_28181){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28197){if((e28197 instanceof Object)){
var ex__27604__auto__ = e28197;
var statearr_28198_28303 = state_28181;
(statearr_28198_28303[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28304 = state_28181;
state_28181 = G__28304;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = function(state_28181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1.call(this,state_28181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___28296,jobs,results,process,async))
})();
var state__27714__auto__ = (function (){var statearr_28199 = f__27713__auto__.call(null);
(statearr_28199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___28296);

return statearr_28199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___28296,jobs,results,process,async))
);


var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__,jobs,results,process,async){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__,jobs,results,process,async){
return (function (state_28237){
var state_val_28238 = (state_28237[(1)]);
if((state_val_28238 === (7))){
var inst_28233 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28239_28305 = state_28237__$1;
(statearr_28239_28305[(2)] = inst_28233);

(statearr_28239_28305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (20))){
var state_28237__$1 = state_28237;
var statearr_28240_28306 = state_28237__$1;
(statearr_28240_28306[(2)] = null);

(statearr_28240_28306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (1))){
var state_28237__$1 = state_28237;
var statearr_28241_28307 = state_28237__$1;
(statearr_28241_28307[(2)] = null);

(statearr_28241_28307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (4))){
var inst_28202 = (state_28237[(7)]);
var inst_28202__$1 = (state_28237[(2)]);
var inst_28203 = (inst_28202__$1 == null);
var state_28237__$1 = (function (){var statearr_28242 = state_28237;
(statearr_28242[(7)] = inst_28202__$1);

return statearr_28242;
})();
if(cljs.core.truth_(inst_28203)){
var statearr_28243_28308 = state_28237__$1;
(statearr_28243_28308[(1)] = (5));

} else {
var statearr_28244_28309 = state_28237__$1;
(statearr_28244_28309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (15))){
var inst_28215 = (state_28237[(8)]);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28237__$1,(18),to,inst_28215);
} else {
if((state_val_28238 === (21))){
var inst_28228 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28245_28310 = state_28237__$1;
(statearr_28245_28310[(2)] = inst_28228);

(statearr_28245_28310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (13))){
var inst_28230 = (state_28237[(2)]);
var state_28237__$1 = (function (){var statearr_28246 = state_28237;
(statearr_28246[(9)] = inst_28230);

return statearr_28246;
})();
var statearr_28247_28311 = state_28237__$1;
(statearr_28247_28311[(2)] = null);

(statearr_28247_28311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (6))){
var inst_28202 = (state_28237[(7)]);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28237__$1,(11),inst_28202);
} else {
if((state_val_28238 === (17))){
var inst_28223 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
if(cljs.core.truth_(inst_28223)){
var statearr_28248_28312 = state_28237__$1;
(statearr_28248_28312[(1)] = (19));

} else {
var statearr_28249_28313 = state_28237__$1;
(statearr_28249_28313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (3))){
var inst_28235 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28237__$1,inst_28235);
} else {
if((state_val_28238 === (12))){
var inst_28212 = (state_28237[(10)]);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28237__$1,(14),inst_28212);
} else {
if((state_val_28238 === (2))){
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28237__$1,(4),results);
} else {
if((state_val_28238 === (19))){
var state_28237__$1 = state_28237;
var statearr_28250_28314 = state_28237__$1;
(statearr_28250_28314[(2)] = null);

(statearr_28250_28314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (11))){
var inst_28212 = (state_28237[(2)]);
var state_28237__$1 = (function (){var statearr_28251 = state_28237;
(statearr_28251[(10)] = inst_28212);

return statearr_28251;
})();
var statearr_28252_28315 = state_28237__$1;
(statearr_28252_28315[(2)] = null);

(statearr_28252_28315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (9))){
var state_28237__$1 = state_28237;
var statearr_28253_28316 = state_28237__$1;
(statearr_28253_28316[(2)] = null);

(statearr_28253_28316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (5))){
var state_28237__$1 = state_28237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28254_28317 = state_28237__$1;
(statearr_28254_28317[(1)] = (8));

} else {
var statearr_28255_28318 = state_28237__$1;
(statearr_28255_28318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (14))){
var inst_28217 = (state_28237[(11)]);
var inst_28215 = (state_28237[(8)]);
var inst_28215__$1 = (state_28237[(2)]);
var inst_28216 = (inst_28215__$1 == null);
var inst_28217__$1 = cljs.core.not.call(null,inst_28216);
var state_28237__$1 = (function (){var statearr_28256 = state_28237;
(statearr_28256[(11)] = inst_28217__$1);

(statearr_28256[(8)] = inst_28215__$1);

return statearr_28256;
})();
if(inst_28217__$1){
var statearr_28257_28319 = state_28237__$1;
(statearr_28257_28319[(1)] = (15));

} else {
var statearr_28258_28320 = state_28237__$1;
(statearr_28258_28320[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (16))){
var inst_28217 = (state_28237[(11)]);
var state_28237__$1 = state_28237;
var statearr_28259_28321 = state_28237__$1;
(statearr_28259_28321[(2)] = inst_28217);

(statearr_28259_28321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (10))){
var inst_28209 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28260_28322 = state_28237__$1;
(statearr_28260_28322[(2)] = inst_28209);

(statearr_28260_28322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (18))){
var inst_28220 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28261_28323 = state_28237__$1;
(statearr_28261_28323[(2)] = inst_28220);

(statearr_28261_28323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (8))){
var inst_28206 = cljs.core.async.close_BANG_.call(null,to);
var state_28237__$1 = state_28237;
var statearr_28262_28324 = state_28237__$1;
(statearr_28262_28324[(2)] = inst_28206);

(statearr_28262_28324[(1)] = (10));


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
});})(c__27712__auto__,jobs,results,process,async))
;
return ((function (switch__27600__auto__,c__27712__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0 = (function (){
var statearr_28266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__);

(statearr_28266[(1)] = (1));

return statearr_28266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1 = (function (state_28237){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object)){
var ex__27604__auto__ = e28267;
var statearr_28268_28325 = state_28237;
(statearr_28268_28325[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28326 = state_28237;
state_28237 = G__28326;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__ = function(state_28237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1.call(this,state_28237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__,jobs,results,process,async))
})();
var state__27714__auto__ = (function (){var statearr_28269 = f__27713__auto__.call(null);
(statearr_28269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__,jobs,results,process,async))
);

return c__27712__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28327 = [];
var len__25923__auto___28330 = arguments.length;
var i__25924__auto___28331 = (0);
while(true){
if((i__25924__auto___28331 < len__25923__auto___28330)){
args28327.push((arguments[i__25924__auto___28331]));

var G__28332 = (i__25924__auto___28331 + (1));
i__25924__auto___28331 = G__28332;
continue;
} else {
}
break;
}

var G__28329 = args28327.length;
switch (G__28329) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28327.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28334 = [];
var len__25923__auto___28337 = arguments.length;
var i__25924__auto___28338 = (0);
while(true){
if((i__25924__auto___28338 < len__25923__auto___28337)){
args28334.push((arguments[i__25924__auto___28338]));

var G__28339 = (i__25924__auto___28338 + (1));
i__25924__auto___28338 = G__28339;
continue;
} else {
}
break;
}

var G__28336 = args28334.length;
switch (G__28336) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28334.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28341 = [];
var len__25923__auto___28394 = arguments.length;
var i__25924__auto___28395 = (0);
while(true){
if((i__25924__auto___28395 < len__25923__auto___28394)){
args28341.push((arguments[i__25924__auto___28395]));

var G__28396 = (i__25924__auto___28395 + (1));
i__25924__auto___28395 = G__28396;
continue;
} else {
}
break;
}

var G__28343 = args28341.length;
switch (G__28343) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28341.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27712__auto___28398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___28398,tc,fc){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___28398,tc,fc){
return (function (state_28369){
var state_val_28370 = (state_28369[(1)]);
if((state_val_28370 === (7))){
var inst_28365 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28371_28399 = state_28369__$1;
(statearr_28371_28399[(2)] = inst_28365);

(statearr_28371_28399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (1))){
var state_28369__$1 = state_28369;
var statearr_28372_28400 = state_28369__$1;
(statearr_28372_28400[(2)] = null);

(statearr_28372_28400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (4))){
var inst_28346 = (state_28369[(7)]);
var inst_28346__$1 = (state_28369[(2)]);
var inst_28347 = (inst_28346__$1 == null);
var state_28369__$1 = (function (){var statearr_28373 = state_28369;
(statearr_28373[(7)] = inst_28346__$1);

return statearr_28373;
})();
if(cljs.core.truth_(inst_28347)){
var statearr_28374_28401 = state_28369__$1;
(statearr_28374_28401[(1)] = (5));

} else {
var statearr_28375_28402 = state_28369__$1;
(statearr_28375_28402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (13))){
var state_28369__$1 = state_28369;
var statearr_28376_28403 = state_28369__$1;
(statearr_28376_28403[(2)] = null);

(statearr_28376_28403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (6))){
var inst_28346 = (state_28369[(7)]);
var inst_28352 = p.call(null,inst_28346);
var state_28369__$1 = state_28369;
if(cljs.core.truth_(inst_28352)){
var statearr_28377_28404 = state_28369__$1;
(statearr_28377_28404[(1)] = (9));

} else {
var statearr_28378_28405 = state_28369__$1;
(statearr_28378_28405[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (3))){
var inst_28367 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28369__$1,inst_28367);
} else {
if((state_val_28370 === (12))){
var state_28369__$1 = state_28369;
var statearr_28379_28406 = state_28369__$1;
(statearr_28379_28406[(2)] = null);

(statearr_28379_28406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (2))){
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28369__$1,(4),ch);
} else {
if((state_val_28370 === (11))){
var inst_28346 = (state_28369[(7)]);
var inst_28356 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28369__$1,(8),inst_28356,inst_28346);
} else {
if((state_val_28370 === (9))){
var state_28369__$1 = state_28369;
var statearr_28380_28407 = state_28369__$1;
(statearr_28380_28407[(2)] = tc);

(statearr_28380_28407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (5))){
var inst_28349 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28350 = cljs.core.async.close_BANG_.call(null,fc);
var state_28369__$1 = (function (){var statearr_28381 = state_28369;
(statearr_28381[(8)] = inst_28349);

return statearr_28381;
})();
var statearr_28382_28408 = state_28369__$1;
(statearr_28382_28408[(2)] = inst_28350);

(statearr_28382_28408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (14))){
var inst_28363 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28383_28409 = state_28369__$1;
(statearr_28383_28409[(2)] = inst_28363);

(statearr_28383_28409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (10))){
var state_28369__$1 = state_28369;
var statearr_28384_28410 = state_28369__$1;
(statearr_28384_28410[(2)] = fc);

(statearr_28384_28410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (8))){
var inst_28358 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
if(cljs.core.truth_(inst_28358)){
var statearr_28385_28411 = state_28369__$1;
(statearr_28385_28411[(1)] = (12));

} else {
var statearr_28386_28412 = state_28369__$1;
(statearr_28386_28412[(1)] = (13));

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
});})(c__27712__auto___28398,tc,fc))
;
return ((function (switch__27600__auto__,c__27712__auto___28398,tc,fc){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_28390 = [null,null,null,null,null,null,null,null,null];
(statearr_28390[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_28390[(1)] = (1));

return statearr_28390;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_28369){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28391){if((e28391 instanceof Object)){
var ex__27604__auto__ = e28391;
var statearr_28392_28413 = state_28369;
(statearr_28392_28413[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28414 = state_28369;
state_28369 = G__28414;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_28369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_28369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___28398,tc,fc))
})();
var state__27714__auto__ = (function (){var statearr_28393 = f__27713__auto__.call(null);
(statearr_28393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___28398);

return statearr_28393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___28398,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__){
return (function (state_28478){
var state_val_28479 = (state_28478[(1)]);
if((state_val_28479 === (7))){
var inst_28474 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28480_28501 = state_28478__$1;
(statearr_28480_28501[(2)] = inst_28474);

(statearr_28480_28501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (1))){
var inst_28458 = init;
var state_28478__$1 = (function (){var statearr_28481 = state_28478;
(statearr_28481[(7)] = inst_28458);

return statearr_28481;
})();
var statearr_28482_28502 = state_28478__$1;
(statearr_28482_28502[(2)] = null);

(statearr_28482_28502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (4))){
var inst_28461 = (state_28478[(8)]);
var inst_28461__$1 = (state_28478[(2)]);
var inst_28462 = (inst_28461__$1 == null);
var state_28478__$1 = (function (){var statearr_28483 = state_28478;
(statearr_28483[(8)] = inst_28461__$1);

return statearr_28483;
})();
if(cljs.core.truth_(inst_28462)){
var statearr_28484_28503 = state_28478__$1;
(statearr_28484_28503[(1)] = (5));

} else {
var statearr_28485_28504 = state_28478__$1;
(statearr_28485_28504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (6))){
var inst_28465 = (state_28478[(9)]);
var inst_28461 = (state_28478[(8)]);
var inst_28458 = (state_28478[(7)]);
var inst_28465__$1 = f.call(null,inst_28458,inst_28461);
var inst_28466 = cljs.core.reduced_QMARK_.call(null,inst_28465__$1);
var state_28478__$1 = (function (){var statearr_28486 = state_28478;
(statearr_28486[(9)] = inst_28465__$1);

return statearr_28486;
})();
if(inst_28466){
var statearr_28487_28505 = state_28478__$1;
(statearr_28487_28505[(1)] = (8));

} else {
var statearr_28488_28506 = state_28478__$1;
(statearr_28488_28506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (3))){
var inst_28476 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28478__$1,inst_28476);
} else {
if((state_val_28479 === (2))){
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28478__$1,(4),ch);
} else {
if((state_val_28479 === (9))){
var inst_28465 = (state_28478[(9)]);
var inst_28458 = inst_28465;
var state_28478__$1 = (function (){var statearr_28489 = state_28478;
(statearr_28489[(7)] = inst_28458);

return statearr_28489;
})();
var statearr_28490_28507 = state_28478__$1;
(statearr_28490_28507[(2)] = null);

(statearr_28490_28507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (5))){
var inst_28458 = (state_28478[(7)]);
var state_28478__$1 = state_28478;
var statearr_28491_28508 = state_28478__$1;
(statearr_28491_28508[(2)] = inst_28458);

(statearr_28491_28508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (10))){
var inst_28472 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28492_28509 = state_28478__$1;
(statearr_28492_28509[(2)] = inst_28472);

(statearr_28492_28509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (8))){
var inst_28465 = (state_28478[(9)]);
var inst_28468 = cljs.core.deref.call(null,inst_28465);
var state_28478__$1 = state_28478;
var statearr_28493_28510 = state_28478__$1;
(statearr_28493_28510[(2)] = inst_28468);

(statearr_28493_28510[(1)] = (10));


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
});})(c__27712__auto__))
;
return ((function (switch__27600__auto__,c__27712__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27601__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27601__auto____0 = (function (){
var statearr_28497 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28497[(0)] = cljs$core$async$reduce_$_state_machine__27601__auto__);

(statearr_28497[(1)] = (1));

return statearr_28497;
});
var cljs$core$async$reduce_$_state_machine__27601__auto____1 = (function (state_28478){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28498){if((e28498 instanceof Object)){
var ex__27604__auto__ = e28498;
var statearr_28499_28511 = state_28478;
(statearr_28499_28511[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28512 = state_28478;
state_28478 = G__28512;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27601__auto__ = function(state_28478){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27601__auto____1.call(this,state_28478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27601__auto____0;
cljs$core$async$reduce_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27601__auto____1;
return cljs$core$async$reduce_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__))
})();
var state__27714__auto__ = (function (){var statearr_28500 = f__27713__auto__.call(null);
(statearr_28500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_28500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__))
);

return c__27712__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28513 = [];
var len__25923__auto___28565 = arguments.length;
var i__25924__auto___28566 = (0);
while(true){
if((i__25924__auto___28566 < len__25923__auto___28565)){
args28513.push((arguments[i__25924__auto___28566]));

var G__28567 = (i__25924__auto___28566 + (1));
i__25924__auto___28566 = G__28567;
continue;
} else {
}
break;
}

var G__28515 = args28513.length;
switch (G__28515) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28513.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__){
return (function (state_28540){
var state_val_28541 = (state_28540[(1)]);
if((state_val_28541 === (7))){
var inst_28522 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28542_28569 = state_28540__$1;
(statearr_28542_28569[(2)] = inst_28522);

(statearr_28542_28569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (1))){
var inst_28516 = cljs.core.seq.call(null,coll);
var inst_28517 = inst_28516;
var state_28540__$1 = (function (){var statearr_28543 = state_28540;
(statearr_28543[(7)] = inst_28517);

return statearr_28543;
})();
var statearr_28544_28570 = state_28540__$1;
(statearr_28544_28570[(2)] = null);

(statearr_28544_28570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (4))){
var inst_28517 = (state_28540[(7)]);
var inst_28520 = cljs.core.first.call(null,inst_28517);
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28540__$1,(7),ch,inst_28520);
} else {
if((state_val_28541 === (13))){
var inst_28534 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28545_28571 = state_28540__$1;
(statearr_28545_28571[(2)] = inst_28534);

(statearr_28545_28571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (6))){
var inst_28525 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
if(cljs.core.truth_(inst_28525)){
var statearr_28546_28572 = state_28540__$1;
(statearr_28546_28572[(1)] = (8));

} else {
var statearr_28547_28573 = state_28540__$1;
(statearr_28547_28573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (3))){
var inst_28538 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28540__$1,inst_28538);
} else {
if((state_val_28541 === (12))){
var state_28540__$1 = state_28540;
var statearr_28548_28574 = state_28540__$1;
(statearr_28548_28574[(2)] = null);

(statearr_28548_28574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (2))){
var inst_28517 = (state_28540[(7)]);
var state_28540__$1 = state_28540;
if(cljs.core.truth_(inst_28517)){
var statearr_28549_28575 = state_28540__$1;
(statearr_28549_28575[(1)] = (4));

} else {
var statearr_28550_28576 = state_28540__$1;
(statearr_28550_28576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (11))){
var inst_28531 = cljs.core.async.close_BANG_.call(null,ch);
var state_28540__$1 = state_28540;
var statearr_28551_28577 = state_28540__$1;
(statearr_28551_28577[(2)] = inst_28531);

(statearr_28551_28577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (9))){
var state_28540__$1 = state_28540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28552_28578 = state_28540__$1;
(statearr_28552_28578[(1)] = (11));

} else {
var statearr_28553_28579 = state_28540__$1;
(statearr_28553_28579[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (5))){
var inst_28517 = (state_28540[(7)]);
var state_28540__$1 = state_28540;
var statearr_28554_28580 = state_28540__$1;
(statearr_28554_28580[(2)] = inst_28517);

(statearr_28554_28580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (10))){
var inst_28536 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28555_28581 = state_28540__$1;
(statearr_28555_28581[(2)] = inst_28536);

(statearr_28555_28581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (8))){
var inst_28517 = (state_28540[(7)]);
var inst_28527 = cljs.core.next.call(null,inst_28517);
var inst_28517__$1 = inst_28527;
var state_28540__$1 = (function (){var statearr_28556 = state_28540;
(statearr_28556[(7)] = inst_28517__$1);

return statearr_28556;
})();
var statearr_28557_28582 = state_28540__$1;
(statearr_28557_28582[(2)] = null);

(statearr_28557_28582[(1)] = (2));


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
});})(c__27712__auto__))
;
return ((function (switch__27600__auto__,c__27712__auto__){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_28561 = [null,null,null,null,null,null,null,null];
(statearr_28561[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_28561[(1)] = (1));

return statearr_28561;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_28540){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e28562){if((e28562 instanceof Object)){
var ex__27604__auto__ = e28562;
var statearr_28563_28583 = state_28540;
(statearr_28563_28583[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28584 = state_28540;
state_28540 = G__28584;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_28540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_28540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__))
})();
var state__27714__auto__ = (function (){var statearr_28564 = f__27713__auto__.call(null);
(statearr_28564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__))
);

return c__27712__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25511__auto__ = (((_ == null))?null:_);
var m__25512__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,_);
} else {
var m__25512__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28810 = (function (mult,ch,cs,meta28811){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28811 = meta28811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28812,meta28811__$1){
var self__ = this;
var _28812__$1 = this;
return (new cljs.core.async.t_cljs$core$async28810(self__.mult,self__.ch,self__.cs,meta28811__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28812){
var self__ = this;
var _28812__$1 = this;
return self__.meta28811;
});})(cs))
;

cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28810.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28810.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28811","meta28811",-1245685846,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28810";

cljs.core.async.t_cljs$core$async28810.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28810");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28810 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28810(mult__$1,ch__$1,cs__$1,meta28811){
return (new cljs.core.async.t_cljs$core$async28810(mult__$1,ch__$1,cs__$1,meta28811));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28810(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27712__auto___29035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___29035,cs,m,dchan,dctr,done){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___29035,cs,m,dchan,dctr,done){
return (function (state_28947){
var state_val_28948 = (state_28947[(1)]);
if((state_val_28948 === (7))){
var inst_28943 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_28949_29036 = state_28947__$1;
(statearr_28949_29036[(2)] = inst_28943);

(statearr_28949_29036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (20))){
var inst_28846 = (state_28947[(7)]);
var inst_28858 = cljs.core.first.call(null,inst_28846);
var inst_28859 = cljs.core.nth.call(null,inst_28858,(0),null);
var inst_28860 = cljs.core.nth.call(null,inst_28858,(1),null);
var state_28947__$1 = (function (){var statearr_28950 = state_28947;
(statearr_28950[(8)] = inst_28859);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28860)){
var statearr_28951_29037 = state_28947__$1;
(statearr_28951_29037[(1)] = (22));

} else {
var statearr_28952_29038 = state_28947__$1;
(statearr_28952_29038[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (27))){
var inst_28890 = (state_28947[(9)]);
var inst_28888 = (state_28947[(10)]);
var inst_28895 = (state_28947[(11)]);
var inst_28815 = (state_28947[(12)]);
var inst_28895__$1 = cljs.core._nth.call(null,inst_28888,inst_28890);
var inst_28896 = cljs.core.async.put_BANG_.call(null,inst_28895__$1,inst_28815,done);
var state_28947__$1 = (function (){var statearr_28953 = state_28947;
(statearr_28953[(11)] = inst_28895__$1);

return statearr_28953;
})();
if(cljs.core.truth_(inst_28896)){
var statearr_28954_29039 = state_28947__$1;
(statearr_28954_29039[(1)] = (30));

} else {
var statearr_28955_29040 = state_28947__$1;
(statearr_28955_29040[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (1))){
var state_28947__$1 = state_28947;
var statearr_28956_29041 = state_28947__$1;
(statearr_28956_29041[(2)] = null);

(statearr_28956_29041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (24))){
var inst_28846 = (state_28947[(7)]);
var inst_28865 = (state_28947[(2)]);
var inst_28866 = cljs.core.next.call(null,inst_28846);
var inst_28824 = inst_28866;
var inst_28825 = null;
var inst_28826 = (0);
var inst_28827 = (0);
var state_28947__$1 = (function (){var statearr_28957 = state_28947;
(statearr_28957[(13)] = inst_28826);

(statearr_28957[(14)] = inst_28825);

(statearr_28957[(15)] = inst_28824);

(statearr_28957[(16)] = inst_28827);

(statearr_28957[(17)] = inst_28865);

return statearr_28957;
})();
var statearr_28958_29042 = state_28947__$1;
(statearr_28958_29042[(2)] = null);

(statearr_28958_29042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (39))){
var state_28947__$1 = state_28947;
var statearr_28962_29043 = state_28947__$1;
(statearr_28962_29043[(2)] = null);

(statearr_28962_29043[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (4))){
var inst_28815 = (state_28947[(12)]);
var inst_28815__$1 = (state_28947[(2)]);
var inst_28816 = (inst_28815__$1 == null);
var state_28947__$1 = (function (){var statearr_28963 = state_28947;
(statearr_28963[(12)] = inst_28815__$1);

return statearr_28963;
})();
if(cljs.core.truth_(inst_28816)){
var statearr_28964_29044 = state_28947__$1;
(statearr_28964_29044[(1)] = (5));

} else {
var statearr_28965_29045 = state_28947__$1;
(statearr_28965_29045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (15))){
var inst_28826 = (state_28947[(13)]);
var inst_28825 = (state_28947[(14)]);
var inst_28824 = (state_28947[(15)]);
var inst_28827 = (state_28947[(16)]);
var inst_28842 = (state_28947[(2)]);
var inst_28843 = (inst_28827 + (1));
var tmp28959 = inst_28826;
var tmp28960 = inst_28825;
var tmp28961 = inst_28824;
var inst_28824__$1 = tmp28961;
var inst_28825__$1 = tmp28960;
var inst_28826__$1 = tmp28959;
var inst_28827__$1 = inst_28843;
var state_28947__$1 = (function (){var statearr_28966 = state_28947;
(statearr_28966[(13)] = inst_28826__$1);

(statearr_28966[(18)] = inst_28842);

(statearr_28966[(14)] = inst_28825__$1);

(statearr_28966[(15)] = inst_28824__$1);

(statearr_28966[(16)] = inst_28827__$1);

return statearr_28966;
})();
var statearr_28967_29046 = state_28947__$1;
(statearr_28967_29046[(2)] = null);

(statearr_28967_29046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (21))){
var inst_28869 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_28971_29047 = state_28947__$1;
(statearr_28971_29047[(2)] = inst_28869);

(statearr_28971_29047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (31))){
var inst_28895 = (state_28947[(11)]);
var inst_28899 = done.call(null,null);
var inst_28900 = cljs.core.async.untap_STAR_.call(null,m,inst_28895);
var state_28947__$1 = (function (){var statearr_28972 = state_28947;
(statearr_28972[(19)] = inst_28899);

return statearr_28972;
})();
var statearr_28973_29048 = state_28947__$1;
(statearr_28973_29048[(2)] = inst_28900);

(statearr_28973_29048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (32))){
var inst_28890 = (state_28947[(9)]);
var inst_28888 = (state_28947[(10)]);
var inst_28889 = (state_28947[(20)]);
var inst_28887 = (state_28947[(21)]);
var inst_28902 = (state_28947[(2)]);
var inst_28903 = (inst_28890 + (1));
var tmp28968 = inst_28888;
var tmp28969 = inst_28889;
var tmp28970 = inst_28887;
var inst_28887__$1 = tmp28970;
var inst_28888__$1 = tmp28968;
var inst_28889__$1 = tmp28969;
var inst_28890__$1 = inst_28903;
var state_28947__$1 = (function (){var statearr_28974 = state_28947;
(statearr_28974[(9)] = inst_28890__$1);

(statearr_28974[(10)] = inst_28888__$1);

(statearr_28974[(20)] = inst_28889__$1);

(statearr_28974[(22)] = inst_28902);

(statearr_28974[(21)] = inst_28887__$1);

return statearr_28974;
})();
var statearr_28975_29049 = state_28947__$1;
(statearr_28975_29049[(2)] = null);

(statearr_28975_29049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (40))){
var inst_28915 = (state_28947[(23)]);
var inst_28919 = done.call(null,null);
var inst_28920 = cljs.core.async.untap_STAR_.call(null,m,inst_28915);
var state_28947__$1 = (function (){var statearr_28976 = state_28947;
(statearr_28976[(24)] = inst_28919);

return statearr_28976;
})();
var statearr_28977_29050 = state_28947__$1;
(statearr_28977_29050[(2)] = inst_28920);

(statearr_28977_29050[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (33))){
var inst_28906 = (state_28947[(25)]);
var inst_28908 = cljs.core.chunked_seq_QMARK_.call(null,inst_28906);
var state_28947__$1 = state_28947;
if(inst_28908){
var statearr_28978_29051 = state_28947__$1;
(statearr_28978_29051[(1)] = (36));

} else {
var statearr_28979_29052 = state_28947__$1;
(statearr_28979_29052[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (13))){
var inst_28836 = (state_28947[(26)]);
var inst_28839 = cljs.core.async.close_BANG_.call(null,inst_28836);
var state_28947__$1 = state_28947;
var statearr_28980_29053 = state_28947__$1;
(statearr_28980_29053[(2)] = inst_28839);

(statearr_28980_29053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (22))){
var inst_28859 = (state_28947[(8)]);
var inst_28862 = cljs.core.async.close_BANG_.call(null,inst_28859);
var state_28947__$1 = state_28947;
var statearr_28981_29054 = state_28947__$1;
(statearr_28981_29054[(2)] = inst_28862);

(statearr_28981_29054[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (36))){
var inst_28906 = (state_28947[(25)]);
var inst_28910 = cljs.core.chunk_first.call(null,inst_28906);
var inst_28911 = cljs.core.chunk_rest.call(null,inst_28906);
var inst_28912 = cljs.core.count.call(null,inst_28910);
var inst_28887 = inst_28911;
var inst_28888 = inst_28910;
var inst_28889 = inst_28912;
var inst_28890 = (0);
var state_28947__$1 = (function (){var statearr_28982 = state_28947;
(statearr_28982[(9)] = inst_28890);

(statearr_28982[(10)] = inst_28888);

(statearr_28982[(20)] = inst_28889);

(statearr_28982[(21)] = inst_28887);

return statearr_28982;
})();
var statearr_28983_29055 = state_28947__$1;
(statearr_28983_29055[(2)] = null);

(statearr_28983_29055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (41))){
var inst_28906 = (state_28947[(25)]);
var inst_28922 = (state_28947[(2)]);
var inst_28923 = cljs.core.next.call(null,inst_28906);
var inst_28887 = inst_28923;
var inst_28888 = null;
var inst_28889 = (0);
var inst_28890 = (0);
var state_28947__$1 = (function (){var statearr_28984 = state_28947;
(statearr_28984[(9)] = inst_28890);

(statearr_28984[(10)] = inst_28888);

(statearr_28984[(20)] = inst_28889);

(statearr_28984[(21)] = inst_28887);

(statearr_28984[(27)] = inst_28922);

return statearr_28984;
})();
var statearr_28985_29056 = state_28947__$1;
(statearr_28985_29056[(2)] = null);

(statearr_28985_29056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (43))){
var state_28947__$1 = state_28947;
var statearr_28986_29057 = state_28947__$1;
(statearr_28986_29057[(2)] = null);

(statearr_28986_29057[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (29))){
var inst_28931 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_28987_29058 = state_28947__$1;
(statearr_28987_29058[(2)] = inst_28931);

(statearr_28987_29058[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (44))){
var inst_28940 = (state_28947[(2)]);
var state_28947__$1 = (function (){var statearr_28988 = state_28947;
(statearr_28988[(28)] = inst_28940);

return statearr_28988;
})();
var statearr_28989_29059 = state_28947__$1;
(statearr_28989_29059[(2)] = null);

(statearr_28989_29059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (6))){
var inst_28879 = (state_28947[(29)]);
var inst_28878 = cljs.core.deref.call(null,cs);
var inst_28879__$1 = cljs.core.keys.call(null,inst_28878);
var inst_28880 = cljs.core.count.call(null,inst_28879__$1);
var inst_28881 = cljs.core.reset_BANG_.call(null,dctr,inst_28880);
var inst_28886 = cljs.core.seq.call(null,inst_28879__$1);
var inst_28887 = inst_28886;
var inst_28888 = null;
var inst_28889 = (0);
var inst_28890 = (0);
var state_28947__$1 = (function (){var statearr_28990 = state_28947;
(statearr_28990[(9)] = inst_28890);

(statearr_28990[(10)] = inst_28888);

(statearr_28990[(20)] = inst_28889);

(statearr_28990[(29)] = inst_28879__$1);

(statearr_28990[(30)] = inst_28881);

(statearr_28990[(21)] = inst_28887);

return statearr_28990;
})();
var statearr_28991_29060 = state_28947__$1;
(statearr_28991_29060[(2)] = null);

(statearr_28991_29060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (28))){
var inst_28887 = (state_28947[(21)]);
var inst_28906 = (state_28947[(25)]);
var inst_28906__$1 = cljs.core.seq.call(null,inst_28887);
var state_28947__$1 = (function (){var statearr_28992 = state_28947;
(statearr_28992[(25)] = inst_28906__$1);

return statearr_28992;
})();
if(inst_28906__$1){
var statearr_28993_29061 = state_28947__$1;
(statearr_28993_29061[(1)] = (33));

} else {
var statearr_28994_29062 = state_28947__$1;
(statearr_28994_29062[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (25))){
var inst_28890 = (state_28947[(9)]);
var inst_28889 = (state_28947[(20)]);
var inst_28892 = (inst_28890 < inst_28889);
var inst_28893 = inst_28892;
var state_28947__$1 = state_28947;
if(cljs.core.truth_(inst_28893)){
var statearr_28995_29063 = state_28947__$1;
(statearr_28995_29063[(1)] = (27));

} else {
var statearr_28996_29064 = state_28947__$1;
(statearr_28996_29064[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (34))){
var state_28947__$1 = state_28947;
var statearr_28997_29065 = state_28947__$1;
(statearr_28997_29065[(2)] = null);

(statearr_28997_29065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (17))){
var state_28947__$1 = state_28947;
var statearr_28998_29066 = state_28947__$1;
(statearr_28998_29066[(2)] = null);

(statearr_28998_29066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (3))){
var inst_28945 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28947__$1,inst_28945);
} else {
if((state_val_28948 === (12))){
var inst_28874 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_28999_29067 = state_28947__$1;
(statearr_28999_29067[(2)] = inst_28874);

(statearr_28999_29067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (2))){
var state_28947__$1 = state_28947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28947__$1,(4),ch);
} else {
if((state_val_28948 === (23))){
var state_28947__$1 = state_28947;
var statearr_29000_29068 = state_28947__$1;
(statearr_29000_29068[(2)] = null);

(statearr_29000_29068[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (35))){
var inst_28929 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_29001_29069 = state_28947__$1;
(statearr_29001_29069[(2)] = inst_28929);

(statearr_29001_29069[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (19))){
var inst_28846 = (state_28947[(7)]);
var inst_28850 = cljs.core.chunk_first.call(null,inst_28846);
var inst_28851 = cljs.core.chunk_rest.call(null,inst_28846);
var inst_28852 = cljs.core.count.call(null,inst_28850);
var inst_28824 = inst_28851;
var inst_28825 = inst_28850;
var inst_28826 = inst_28852;
var inst_28827 = (0);
var state_28947__$1 = (function (){var statearr_29002 = state_28947;
(statearr_29002[(13)] = inst_28826);

(statearr_29002[(14)] = inst_28825);

(statearr_29002[(15)] = inst_28824);

(statearr_29002[(16)] = inst_28827);

return statearr_29002;
})();
var statearr_29003_29070 = state_28947__$1;
(statearr_29003_29070[(2)] = null);

(statearr_29003_29070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (11))){
var inst_28824 = (state_28947[(15)]);
var inst_28846 = (state_28947[(7)]);
var inst_28846__$1 = cljs.core.seq.call(null,inst_28824);
var state_28947__$1 = (function (){var statearr_29004 = state_28947;
(statearr_29004[(7)] = inst_28846__$1);

return statearr_29004;
})();
if(inst_28846__$1){
var statearr_29005_29071 = state_28947__$1;
(statearr_29005_29071[(1)] = (16));

} else {
var statearr_29006_29072 = state_28947__$1;
(statearr_29006_29072[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (9))){
var inst_28876 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_29007_29073 = state_28947__$1;
(statearr_29007_29073[(2)] = inst_28876);

(statearr_29007_29073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (5))){
var inst_28822 = cljs.core.deref.call(null,cs);
var inst_28823 = cljs.core.seq.call(null,inst_28822);
var inst_28824 = inst_28823;
var inst_28825 = null;
var inst_28826 = (0);
var inst_28827 = (0);
var state_28947__$1 = (function (){var statearr_29008 = state_28947;
(statearr_29008[(13)] = inst_28826);

(statearr_29008[(14)] = inst_28825);

(statearr_29008[(15)] = inst_28824);

(statearr_29008[(16)] = inst_28827);

return statearr_29008;
})();
var statearr_29009_29074 = state_28947__$1;
(statearr_29009_29074[(2)] = null);

(statearr_29009_29074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (14))){
var state_28947__$1 = state_28947;
var statearr_29010_29075 = state_28947__$1;
(statearr_29010_29075[(2)] = null);

(statearr_29010_29075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (45))){
var inst_28937 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_29011_29076 = state_28947__$1;
(statearr_29011_29076[(2)] = inst_28937);

(statearr_29011_29076[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (26))){
var inst_28879 = (state_28947[(29)]);
var inst_28933 = (state_28947[(2)]);
var inst_28934 = cljs.core.seq.call(null,inst_28879);
var state_28947__$1 = (function (){var statearr_29012 = state_28947;
(statearr_29012[(31)] = inst_28933);

return statearr_29012;
})();
if(inst_28934){
var statearr_29013_29077 = state_28947__$1;
(statearr_29013_29077[(1)] = (42));

} else {
var statearr_29014_29078 = state_28947__$1;
(statearr_29014_29078[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (16))){
var inst_28846 = (state_28947[(7)]);
var inst_28848 = cljs.core.chunked_seq_QMARK_.call(null,inst_28846);
var state_28947__$1 = state_28947;
if(inst_28848){
var statearr_29015_29079 = state_28947__$1;
(statearr_29015_29079[(1)] = (19));

} else {
var statearr_29016_29080 = state_28947__$1;
(statearr_29016_29080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (38))){
var inst_28926 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_29017_29081 = state_28947__$1;
(statearr_29017_29081[(2)] = inst_28926);

(statearr_29017_29081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (30))){
var state_28947__$1 = state_28947;
var statearr_29018_29082 = state_28947__$1;
(statearr_29018_29082[(2)] = null);

(statearr_29018_29082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (10))){
var inst_28825 = (state_28947[(14)]);
var inst_28827 = (state_28947[(16)]);
var inst_28835 = cljs.core._nth.call(null,inst_28825,inst_28827);
var inst_28836 = cljs.core.nth.call(null,inst_28835,(0),null);
var inst_28837 = cljs.core.nth.call(null,inst_28835,(1),null);
var state_28947__$1 = (function (){var statearr_29019 = state_28947;
(statearr_29019[(26)] = inst_28836);

return statearr_29019;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_29020_29083 = state_28947__$1;
(statearr_29020_29083[(1)] = (13));

} else {
var statearr_29021_29084 = state_28947__$1;
(statearr_29021_29084[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (18))){
var inst_28872 = (state_28947[(2)]);
var state_28947__$1 = state_28947;
var statearr_29022_29085 = state_28947__$1;
(statearr_29022_29085[(2)] = inst_28872);

(statearr_29022_29085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (42))){
var state_28947__$1 = state_28947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28947__$1,(45),dchan);
} else {
if((state_val_28948 === (37))){
var inst_28815 = (state_28947[(12)]);
var inst_28915 = (state_28947[(23)]);
var inst_28906 = (state_28947[(25)]);
var inst_28915__$1 = cljs.core.first.call(null,inst_28906);
var inst_28916 = cljs.core.async.put_BANG_.call(null,inst_28915__$1,inst_28815,done);
var state_28947__$1 = (function (){var statearr_29023 = state_28947;
(statearr_29023[(23)] = inst_28915__$1);

return statearr_29023;
})();
if(cljs.core.truth_(inst_28916)){
var statearr_29024_29086 = state_28947__$1;
(statearr_29024_29086[(1)] = (39));

} else {
var statearr_29025_29087 = state_28947__$1;
(statearr_29025_29087[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28948 === (8))){
var inst_28826 = (state_28947[(13)]);
var inst_28827 = (state_28947[(16)]);
var inst_28829 = (inst_28827 < inst_28826);
var inst_28830 = inst_28829;
var state_28947__$1 = state_28947;
if(cljs.core.truth_(inst_28830)){
var statearr_29026_29088 = state_28947__$1;
(statearr_29026_29088[(1)] = (10));

} else {
var statearr_29027_29089 = state_28947__$1;
(statearr_29027_29089[(1)] = (11));

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
});})(c__27712__auto___29035,cs,m,dchan,dctr,done))
;
return ((function (switch__27600__auto__,c__27712__auto___29035,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27601__auto__ = null;
var cljs$core$async$mult_$_state_machine__27601__auto____0 = (function (){
var statearr_29031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29031[(0)] = cljs$core$async$mult_$_state_machine__27601__auto__);

(statearr_29031[(1)] = (1));

return statearr_29031;
});
var cljs$core$async$mult_$_state_machine__27601__auto____1 = (function (state_28947){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_28947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e29032){if((e29032 instanceof Object)){
var ex__27604__auto__ = e29032;
var statearr_29033_29090 = state_28947;
(statearr_29033_29090[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29091 = state_28947;
state_28947 = G__29091;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27601__auto__ = function(state_28947){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27601__auto____1.call(this,state_28947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27601__auto____0;
cljs$core$async$mult_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27601__auto____1;
return cljs$core$async$mult_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___29035,cs,m,dchan,dctr,done))
})();
var state__27714__auto__ = (function (){var statearr_29034 = f__27713__auto__.call(null);
(statearr_29034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___29035);

return statearr_29034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___29035,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29092 = [];
var len__25923__auto___29095 = arguments.length;
var i__25924__auto___29096 = (0);
while(true){
if((i__25924__auto___29096 < len__25923__auto___29095)){
args29092.push((arguments[i__25924__auto___29096]));

var G__29097 = (i__25924__auto___29096 + (1));
i__25924__auto___29096 = G__29097;
continue;
} else {
}
break;
}

var G__29094 = args29092.length;
switch (G__29094) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29092.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,state_map);
} else {
var m__25512__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,mode);
} else {
var m__25512__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___29109 = arguments.length;
var i__25924__auto___29110 = (0);
while(true){
if((i__25924__auto___29110 < len__25923__auto___29109)){
args__25930__auto__.push((arguments[i__25924__auto___29110]));

var G__29111 = (i__25924__auto___29110 + (1));
i__25924__auto___29110 = G__29111;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29103){
var map__29104 = p__29103;
var map__29104__$1 = ((((!((map__29104 == null)))?((((map__29104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29104):map__29104);
var opts = map__29104__$1;
var statearr_29106_29112 = state;
(statearr_29106_29112[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29104,map__29104__$1,opts){
return (function (val){
var statearr_29107_29113 = state;
(statearr_29107_29113[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29104,map__29104__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29108_29114 = state;
(statearr_29108_29114[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29099){
var G__29100 = cljs.core.first.call(null,seq29099);
var seq29099__$1 = cljs.core.next.call(null,seq29099);
var G__29101 = cljs.core.first.call(null,seq29099__$1);
var seq29099__$2 = cljs.core.next.call(null,seq29099__$1);
var G__29102 = cljs.core.first.call(null,seq29099__$2);
var seq29099__$3 = cljs.core.next.call(null,seq29099__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29100,G__29101,G__29102,seq29099__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29280 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29281){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29281 = meta29281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29282,meta29281__$1){
var self__ = this;
var _29282__$1 = this;
return (new cljs.core.async.t_cljs$core$async29280(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29281__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29282){
var self__ = this;
var _29282__$1 = this;
return self__.meta29281;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29281","meta29281",164082152,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29280";

cljs.core.async.t_cljs$core$async29280.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29280");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29280 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29280(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29281){
return (new cljs.core.async.t_cljs$core$async29280(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29281));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29280(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27712__auto___29445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___29445,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___29445,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29382){
var state_val_29383 = (state_29382[(1)]);
if((state_val_29383 === (7))){
var inst_29298 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29384_29446 = state_29382__$1;
(statearr_29384_29446[(2)] = inst_29298);

(statearr_29384_29446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (20))){
var inst_29310 = (state_29382[(7)]);
var state_29382__$1 = state_29382;
var statearr_29385_29447 = state_29382__$1;
(statearr_29385_29447[(2)] = inst_29310);

(statearr_29385_29447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (27))){
var state_29382__$1 = state_29382;
var statearr_29386_29448 = state_29382__$1;
(statearr_29386_29448[(2)] = null);

(statearr_29386_29448[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (1))){
var inst_29286 = (state_29382[(8)]);
var inst_29286__$1 = calc_state.call(null);
var inst_29288 = (inst_29286__$1 == null);
var inst_29289 = cljs.core.not.call(null,inst_29288);
var state_29382__$1 = (function (){var statearr_29387 = state_29382;
(statearr_29387[(8)] = inst_29286__$1);

return statearr_29387;
})();
if(inst_29289){
var statearr_29388_29449 = state_29382__$1;
(statearr_29388_29449[(1)] = (2));

} else {
var statearr_29389_29450 = state_29382__$1;
(statearr_29389_29450[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (24))){
var inst_29333 = (state_29382[(9)]);
var inst_29356 = (state_29382[(10)]);
var inst_29342 = (state_29382[(11)]);
var inst_29356__$1 = inst_29333.call(null,inst_29342);
var state_29382__$1 = (function (){var statearr_29390 = state_29382;
(statearr_29390[(10)] = inst_29356__$1);

return statearr_29390;
})();
if(cljs.core.truth_(inst_29356__$1)){
var statearr_29391_29451 = state_29382__$1;
(statearr_29391_29451[(1)] = (29));

} else {
var statearr_29392_29452 = state_29382__$1;
(statearr_29392_29452[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (4))){
var inst_29301 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29301)){
var statearr_29393_29453 = state_29382__$1;
(statearr_29393_29453[(1)] = (8));

} else {
var statearr_29394_29454 = state_29382__$1;
(statearr_29394_29454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (15))){
var inst_29327 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29327)){
var statearr_29395_29455 = state_29382__$1;
(statearr_29395_29455[(1)] = (19));

} else {
var statearr_29396_29456 = state_29382__$1;
(statearr_29396_29456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (21))){
var inst_29332 = (state_29382[(12)]);
var inst_29332__$1 = (state_29382[(2)]);
var inst_29333 = cljs.core.get.call(null,inst_29332__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29334 = cljs.core.get.call(null,inst_29332__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29335 = cljs.core.get.call(null,inst_29332__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29382__$1 = (function (){var statearr_29397 = state_29382;
(statearr_29397[(13)] = inst_29334);

(statearr_29397[(9)] = inst_29333);

(statearr_29397[(12)] = inst_29332__$1);

return statearr_29397;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29382__$1,(22),inst_29335);
} else {
if((state_val_29383 === (31))){
var inst_29364 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29364)){
var statearr_29398_29457 = state_29382__$1;
(statearr_29398_29457[(1)] = (32));

} else {
var statearr_29399_29458 = state_29382__$1;
(statearr_29399_29458[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (32))){
var inst_29341 = (state_29382[(14)]);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29382__$1,(35),out,inst_29341);
} else {
if((state_val_29383 === (33))){
var inst_29332 = (state_29382[(12)]);
var inst_29310 = inst_29332;
var state_29382__$1 = (function (){var statearr_29400 = state_29382;
(statearr_29400[(7)] = inst_29310);

return statearr_29400;
})();
var statearr_29401_29459 = state_29382__$1;
(statearr_29401_29459[(2)] = null);

(statearr_29401_29459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (13))){
var inst_29310 = (state_29382[(7)]);
var inst_29317 = inst_29310.cljs$lang$protocol_mask$partition0$;
var inst_29318 = (inst_29317 & (64));
var inst_29319 = inst_29310.cljs$core$ISeq$;
var inst_29320 = (inst_29318) || (inst_29319);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29320)){
var statearr_29402_29460 = state_29382__$1;
(statearr_29402_29460[(1)] = (16));

} else {
var statearr_29403_29461 = state_29382__$1;
(statearr_29403_29461[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (22))){
var inst_29341 = (state_29382[(14)]);
var inst_29342 = (state_29382[(11)]);
var inst_29340 = (state_29382[(2)]);
var inst_29341__$1 = cljs.core.nth.call(null,inst_29340,(0),null);
var inst_29342__$1 = cljs.core.nth.call(null,inst_29340,(1),null);
var inst_29343 = (inst_29341__$1 == null);
var inst_29344 = cljs.core._EQ_.call(null,inst_29342__$1,change);
var inst_29345 = (inst_29343) || (inst_29344);
var state_29382__$1 = (function (){var statearr_29404 = state_29382;
(statearr_29404[(14)] = inst_29341__$1);

(statearr_29404[(11)] = inst_29342__$1);

return statearr_29404;
})();
if(cljs.core.truth_(inst_29345)){
var statearr_29405_29462 = state_29382__$1;
(statearr_29405_29462[(1)] = (23));

} else {
var statearr_29406_29463 = state_29382__$1;
(statearr_29406_29463[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (36))){
var inst_29332 = (state_29382[(12)]);
var inst_29310 = inst_29332;
var state_29382__$1 = (function (){var statearr_29407 = state_29382;
(statearr_29407[(7)] = inst_29310);

return statearr_29407;
})();
var statearr_29408_29464 = state_29382__$1;
(statearr_29408_29464[(2)] = null);

(statearr_29408_29464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (29))){
var inst_29356 = (state_29382[(10)]);
var state_29382__$1 = state_29382;
var statearr_29409_29465 = state_29382__$1;
(statearr_29409_29465[(2)] = inst_29356);

(statearr_29409_29465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (6))){
var state_29382__$1 = state_29382;
var statearr_29410_29466 = state_29382__$1;
(statearr_29410_29466[(2)] = false);

(statearr_29410_29466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (28))){
var inst_29352 = (state_29382[(2)]);
var inst_29353 = calc_state.call(null);
var inst_29310 = inst_29353;
var state_29382__$1 = (function (){var statearr_29411 = state_29382;
(statearr_29411[(15)] = inst_29352);

(statearr_29411[(7)] = inst_29310);

return statearr_29411;
})();
var statearr_29412_29467 = state_29382__$1;
(statearr_29412_29467[(2)] = null);

(statearr_29412_29467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (25))){
var inst_29378 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29413_29468 = state_29382__$1;
(statearr_29413_29468[(2)] = inst_29378);

(statearr_29413_29468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (34))){
var inst_29376 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29414_29469 = state_29382__$1;
(statearr_29414_29469[(2)] = inst_29376);

(statearr_29414_29469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (17))){
var state_29382__$1 = state_29382;
var statearr_29415_29470 = state_29382__$1;
(statearr_29415_29470[(2)] = false);

(statearr_29415_29470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (3))){
var state_29382__$1 = state_29382;
var statearr_29416_29471 = state_29382__$1;
(statearr_29416_29471[(2)] = false);

(statearr_29416_29471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (12))){
var inst_29380 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29382__$1,inst_29380);
} else {
if((state_val_29383 === (2))){
var inst_29286 = (state_29382[(8)]);
var inst_29291 = inst_29286.cljs$lang$protocol_mask$partition0$;
var inst_29292 = (inst_29291 & (64));
var inst_29293 = inst_29286.cljs$core$ISeq$;
var inst_29294 = (inst_29292) || (inst_29293);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29294)){
var statearr_29417_29472 = state_29382__$1;
(statearr_29417_29472[(1)] = (5));

} else {
var statearr_29418_29473 = state_29382__$1;
(statearr_29418_29473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (23))){
var inst_29341 = (state_29382[(14)]);
var inst_29347 = (inst_29341 == null);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29347)){
var statearr_29419_29474 = state_29382__$1;
(statearr_29419_29474[(1)] = (26));

} else {
var statearr_29420_29475 = state_29382__$1;
(statearr_29420_29475[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (35))){
var inst_29367 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29367)){
var statearr_29421_29476 = state_29382__$1;
(statearr_29421_29476[(1)] = (36));

} else {
var statearr_29422_29477 = state_29382__$1;
(statearr_29422_29477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (19))){
var inst_29310 = (state_29382[(7)]);
var inst_29329 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29310);
var state_29382__$1 = state_29382;
var statearr_29423_29478 = state_29382__$1;
(statearr_29423_29478[(2)] = inst_29329);

(statearr_29423_29478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (11))){
var inst_29310 = (state_29382[(7)]);
var inst_29314 = (inst_29310 == null);
var inst_29315 = cljs.core.not.call(null,inst_29314);
var state_29382__$1 = state_29382;
if(inst_29315){
var statearr_29424_29479 = state_29382__$1;
(statearr_29424_29479[(1)] = (13));

} else {
var statearr_29425_29480 = state_29382__$1;
(statearr_29425_29480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (9))){
var inst_29286 = (state_29382[(8)]);
var state_29382__$1 = state_29382;
var statearr_29426_29481 = state_29382__$1;
(statearr_29426_29481[(2)] = inst_29286);

(statearr_29426_29481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (5))){
var state_29382__$1 = state_29382;
var statearr_29427_29482 = state_29382__$1;
(statearr_29427_29482[(2)] = true);

(statearr_29427_29482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (14))){
var state_29382__$1 = state_29382;
var statearr_29428_29483 = state_29382__$1;
(statearr_29428_29483[(2)] = false);

(statearr_29428_29483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (26))){
var inst_29342 = (state_29382[(11)]);
var inst_29349 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29342);
var state_29382__$1 = state_29382;
var statearr_29429_29484 = state_29382__$1;
(statearr_29429_29484[(2)] = inst_29349);

(statearr_29429_29484[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (16))){
var state_29382__$1 = state_29382;
var statearr_29430_29485 = state_29382__$1;
(statearr_29430_29485[(2)] = true);

(statearr_29430_29485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (38))){
var inst_29372 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29431_29486 = state_29382__$1;
(statearr_29431_29486[(2)] = inst_29372);

(statearr_29431_29486[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (30))){
var inst_29334 = (state_29382[(13)]);
var inst_29333 = (state_29382[(9)]);
var inst_29342 = (state_29382[(11)]);
var inst_29359 = cljs.core.empty_QMARK_.call(null,inst_29333);
var inst_29360 = inst_29334.call(null,inst_29342);
var inst_29361 = cljs.core.not.call(null,inst_29360);
var inst_29362 = (inst_29359) && (inst_29361);
var state_29382__$1 = state_29382;
var statearr_29432_29487 = state_29382__$1;
(statearr_29432_29487[(2)] = inst_29362);

(statearr_29432_29487[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (10))){
var inst_29286 = (state_29382[(8)]);
var inst_29306 = (state_29382[(2)]);
var inst_29307 = cljs.core.get.call(null,inst_29306,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29308 = cljs.core.get.call(null,inst_29306,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29309 = cljs.core.get.call(null,inst_29306,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29310 = inst_29286;
var state_29382__$1 = (function (){var statearr_29433 = state_29382;
(statearr_29433[(16)] = inst_29307);

(statearr_29433[(17)] = inst_29308);

(statearr_29433[(18)] = inst_29309);

(statearr_29433[(7)] = inst_29310);

return statearr_29433;
})();
var statearr_29434_29488 = state_29382__$1;
(statearr_29434_29488[(2)] = null);

(statearr_29434_29488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (18))){
var inst_29324 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29435_29489 = state_29382__$1;
(statearr_29435_29489[(2)] = inst_29324);

(statearr_29435_29489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (37))){
var state_29382__$1 = state_29382;
var statearr_29436_29490 = state_29382__$1;
(statearr_29436_29490[(2)] = null);

(statearr_29436_29490[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (8))){
var inst_29286 = (state_29382[(8)]);
var inst_29303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29286);
var state_29382__$1 = state_29382;
var statearr_29437_29491 = state_29382__$1;
(statearr_29437_29491[(2)] = inst_29303);

(statearr_29437_29491[(1)] = (10));


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
});})(c__27712__auto___29445,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27600__auto__,c__27712__auto___29445,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27601__auto__ = null;
var cljs$core$async$mix_$_state_machine__27601__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = cljs$core$async$mix_$_state_machine__27601__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var cljs$core$async$mix_$_state_machine__27601__auto____1 = (function (state_29382){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_29382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__27604__auto__ = e29442;
var statearr_29443_29492 = state_29382;
(statearr_29443_29492[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29493 = state_29382;
state_29382 = G__29493;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27601__auto__ = function(state_29382){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27601__auto____1.call(this,state_29382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27601__auto____0;
cljs$core$async$mix_$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27601__auto____1;
return cljs$core$async$mix_$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___29445,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27714__auto__ = (function (){var statearr_29444 = f__27713__auto__.call(null);
(statearr_29444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___29445);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___29445,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29494 = [];
var len__25923__auto___29497 = arguments.length;
var i__25924__auto___29498 = (0);
while(true){
if((i__25924__auto___29498 < len__25923__auto___29497)){
args29494.push((arguments[i__25924__auto___29498]));

var G__29499 = (i__25924__auto___29498 + (1));
i__25924__auto___29498 = G__29499;
continue;
} else {
}
break;
}

var G__29496 = args29494.length;
switch (G__29496) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29494.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29502 = [];
var len__25923__auto___29627 = arguments.length;
var i__25924__auto___29628 = (0);
while(true){
if((i__25924__auto___29628 < len__25923__auto___29627)){
args29502.push((arguments[i__25924__auto___29628]));

var G__29629 = (i__25924__auto___29628 + (1));
i__25924__auto___29628 = G__29629;
continue;
} else {
}
break;
}

var G__29504 = args29502.length;
switch (G__29504) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29502.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24848__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24848__auto__,mults){
return (function (p1__29501_SHARP_){
if(cljs.core.truth_(p1__29501_SHARP_.call(null,topic))){
return p1__29501_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29501_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29505 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29506){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29506 = meta29506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29507,meta29506__$1){
var self__ = this;
var _29507__$1 = this;
return (new cljs.core.async.t_cljs$core$async29505(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29506__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29507){
var self__ = this;
var _29507__$1 = this;
return self__.meta29506;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29506","meta29506",740323490,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29505";

cljs.core.async.t_cljs$core$async29505.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29505");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29505 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29505(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29506){
return (new cljs.core.async.t_cljs$core$async29505(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29506));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29505(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27712__auto___29631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___29631,mults,ensure_mult,p){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___29631,mults,ensure_mult,p){
return (function (state_29579){
var state_val_29580 = (state_29579[(1)]);
if((state_val_29580 === (7))){
var inst_29575 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29581_29632 = state_29579__$1;
(statearr_29581_29632[(2)] = inst_29575);

(statearr_29581_29632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (20))){
var state_29579__$1 = state_29579;
var statearr_29582_29633 = state_29579__$1;
(statearr_29582_29633[(2)] = null);

(statearr_29582_29633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (1))){
var state_29579__$1 = state_29579;
var statearr_29583_29634 = state_29579__$1;
(statearr_29583_29634[(2)] = null);

(statearr_29583_29634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (24))){
var inst_29558 = (state_29579[(7)]);
var inst_29567 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29558);
var state_29579__$1 = state_29579;
var statearr_29584_29635 = state_29579__$1;
(statearr_29584_29635[(2)] = inst_29567);

(statearr_29584_29635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (4))){
var inst_29510 = (state_29579[(8)]);
var inst_29510__$1 = (state_29579[(2)]);
var inst_29511 = (inst_29510__$1 == null);
var state_29579__$1 = (function (){var statearr_29585 = state_29579;
(statearr_29585[(8)] = inst_29510__$1);

return statearr_29585;
})();
if(cljs.core.truth_(inst_29511)){
var statearr_29586_29636 = state_29579__$1;
(statearr_29586_29636[(1)] = (5));

} else {
var statearr_29587_29637 = state_29579__$1;
(statearr_29587_29637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (15))){
var inst_29552 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29588_29638 = state_29579__$1;
(statearr_29588_29638[(2)] = inst_29552);

(statearr_29588_29638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (21))){
var inst_29572 = (state_29579[(2)]);
var state_29579__$1 = (function (){var statearr_29589 = state_29579;
(statearr_29589[(9)] = inst_29572);

return statearr_29589;
})();
var statearr_29590_29639 = state_29579__$1;
(statearr_29590_29639[(2)] = null);

(statearr_29590_29639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (13))){
var inst_29534 = (state_29579[(10)]);
var inst_29536 = cljs.core.chunked_seq_QMARK_.call(null,inst_29534);
var state_29579__$1 = state_29579;
if(inst_29536){
var statearr_29591_29640 = state_29579__$1;
(statearr_29591_29640[(1)] = (16));

} else {
var statearr_29592_29641 = state_29579__$1;
(statearr_29592_29641[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (22))){
var inst_29564 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
if(cljs.core.truth_(inst_29564)){
var statearr_29593_29642 = state_29579__$1;
(statearr_29593_29642[(1)] = (23));

} else {
var statearr_29594_29643 = state_29579__$1;
(statearr_29594_29643[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (6))){
var inst_29560 = (state_29579[(11)]);
var inst_29558 = (state_29579[(7)]);
var inst_29510 = (state_29579[(8)]);
var inst_29558__$1 = topic_fn.call(null,inst_29510);
var inst_29559 = cljs.core.deref.call(null,mults);
var inst_29560__$1 = cljs.core.get.call(null,inst_29559,inst_29558__$1);
var state_29579__$1 = (function (){var statearr_29595 = state_29579;
(statearr_29595[(11)] = inst_29560__$1);

(statearr_29595[(7)] = inst_29558__$1);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29560__$1)){
var statearr_29596_29644 = state_29579__$1;
(statearr_29596_29644[(1)] = (19));

} else {
var statearr_29597_29645 = state_29579__$1;
(statearr_29597_29645[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (25))){
var inst_29569 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29598_29646 = state_29579__$1;
(statearr_29598_29646[(2)] = inst_29569);

(statearr_29598_29646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (17))){
var inst_29534 = (state_29579[(10)]);
var inst_29543 = cljs.core.first.call(null,inst_29534);
var inst_29544 = cljs.core.async.muxch_STAR_.call(null,inst_29543);
var inst_29545 = cljs.core.async.close_BANG_.call(null,inst_29544);
var inst_29546 = cljs.core.next.call(null,inst_29534);
var inst_29520 = inst_29546;
var inst_29521 = null;
var inst_29522 = (0);
var inst_29523 = (0);
var state_29579__$1 = (function (){var statearr_29599 = state_29579;
(statearr_29599[(12)] = inst_29521);

(statearr_29599[(13)] = inst_29522);

(statearr_29599[(14)] = inst_29523);

(statearr_29599[(15)] = inst_29520);

(statearr_29599[(16)] = inst_29545);

return statearr_29599;
})();
var statearr_29600_29647 = state_29579__$1;
(statearr_29600_29647[(2)] = null);

(statearr_29600_29647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (3))){
var inst_29577 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29579__$1,inst_29577);
} else {
if((state_val_29580 === (12))){
var inst_29554 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29601_29648 = state_29579__$1;
(statearr_29601_29648[(2)] = inst_29554);

(statearr_29601_29648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (2))){
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29579__$1,(4),ch);
} else {
if((state_val_29580 === (23))){
var state_29579__$1 = state_29579;
var statearr_29602_29649 = state_29579__$1;
(statearr_29602_29649[(2)] = null);

(statearr_29602_29649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (19))){
var inst_29560 = (state_29579[(11)]);
var inst_29510 = (state_29579[(8)]);
var inst_29562 = cljs.core.async.muxch_STAR_.call(null,inst_29560);
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29579__$1,(22),inst_29562,inst_29510);
} else {
if((state_val_29580 === (11))){
var inst_29534 = (state_29579[(10)]);
var inst_29520 = (state_29579[(15)]);
var inst_29534__$1 = cljs.core.seq.call(null,inst_29520);
var state_29579__$1 = (function (){var statearr_29603 = state_29579;
(statearr_29603[(10)] = inst_29534__$1);

return statearr_29603;
})();
if(inst_29534__$1){
var statearr_29604_29650 = state_29579__$1;
(statearr_29604_29650[(1)] = (13));

} else {
var statearr_29605_29651 = state_29579__$1;
(statearr_29605_29651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (9))){
var inst_29556 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29606_29652 = state_29579__$1;
(statearr_29606_29652[(2)] = inst_29556);

(statearr_29606_29652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (5))){
var inst_29517 = cljs.core.deref.call(null,mults);
var inst_29518 = cljs.core.vals.call(null,inst_29517);
var inst_29519 = cljs.core.seq.call(null,inst_29518);
var inst_29520 = inst_29519;
var inst_29521 = null;
var inst_29522 = (0);
var inst_29523 = (0);
var state_29579__$1 = (function (){var statearr_29607 = state_29579;
(statearr_29607[(12)] = inst_29521);

(statearr_29607[(13)] = inst_29522);

(statearr_29607[(14)] = inst_29523);

(statearr_29607[(15)] = inst_29520);

return statearr_29607;
})();
var statearr_29608_29653 = state_29579__$1;
(statearr_29608_29653[(2)] = null);

(statearr_29608_29653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (14))){
var state_29579__$1 = state_29579;
var statearr_29612_29654 = state_29579__$1;
(statearr_29612_29654[(2)] = null);

(statearr_29612_29654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (16))){
var inst_29534 = (state_29579[(10)]);
var inst_29538 = cljs.core.chunk_first.call(null,inst_29534);
var inst_29539 = cljs.core.chunk_rest.call(null,inst_29534);
var inst_29540 = cljs.core.count.call(null,inst_29538);
var inst_29520 = inst_29539;
var inst_29521 = inst_29538;
var inst_29522 = inst_29540;
var inst_29523 = (0);
var state_29579__$1 = (function (){var statearr_29613 = state_29579;
(statearr_29613[(12)] = inst_29521);

(statearr_29613[(13)] = inst_29522);

(statearr_29613[(14)] = inst_29523);

(statearr_29613[(15)] = inst_29520);

return statearr_29613;
})();
var statearr_29614_29655 = state_29579__$1;
(statearr_29614_29655[(2)] = null);

(statearr_29614_29655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (10))){
var inst_29521 = (state_29579[(12)]);
var inst_29522 = (state_29579[(13)]);
var inst_29523 = (state_29579[(14)]);
var inst_29520 = (state_29579[(15)]);
var inst_29528 = cljs.core._nth.call(null,inst_29521,inst_29523);
var inst_29529 = cljs.core.async.muxch_STAR_.call(null,inst_29528);
var inst_29530 = cljs.core.async.close_BANG_.call(null,inst_29529);
var inst_29531 = (inst_29523 + (1));
var tmp29609 = inst_29521;
var tmp29610 = inst_29522;
var tmp29611 = inst_29520;
var inst_29520__$1 = tmp29611;
var inst_29521__$1 = tmp29609;
var inst_29522__$1 = tmp29610;
var inst_29523__$1 = inst_29531;
var state_29579__$1 = (function (){var statearr_29615 = state_29579;
(statearr_29615[(17)] = inst_29530);

(statearr_29615[(12)] = inst_29521__$1);

(statearr_29615[(13)] = inst_29522__$1);

(statearr_29615[(14)] = inst_29523__$1);

(statearr_29615[(15)] = inst_29520__$1);

return statearr_29615;
})();
var statearr_29616_29656 = state_29579__$1;
(statearr_29616_29656[(2)] = null);

(statearr_29616_29656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (18))){
var inst_29549 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29617_29657 = state_29579__$1;
(statearr_29617_29657[(2)] = inst_29549);

(statearr_29617_29657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (8))){
var inst_29522 = (state_29579[(13)]);
var inst_29523 = (state_29579[(14)]);
var inst_29525 = (inst_29523 < inst_29522);
var inst_29526 = inst_29525;
var state_29579__$1 = state_29579;
if(cljs.core.truth_(inst_29526)){
var statearr_29618_29658 = state_29579__$1;
(statearr_29618_29658[(1)] = (10));

} else {
var statearr_29619_29659 = state_29579__$1;
(statearr_29619_29659[(1)] = (11));

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
});})(c__27712__auto___29631,mults,ensure_mult,p))
;
return ((function (switch__27600__auto__,c__27712__auto___29631,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_29623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29623[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_29623[(1)] = (1));

return statearr_29623;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_29579){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_29579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e29624){if((e29624 instanceof Object)){
var ex__27604__auto__ = e29624;
var statearr_29625_29660 = state_29579;
(statearr_29625_29660[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29661 = state_29579;
state_29579 = G__29661;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_29579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_29579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___29631,mults,ensure_mult,p))
})();
var state__27714__auto__ = (function (){var statearr_29626 = f__27713__auto__.call(null);
(statearr_29626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___29631);

return statearr_29626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___29631,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29662 = [];
var len__25923__auto___29665 = arguments.length;
var i__25924__auto___29666 = (0);
while(true){
if((i__25924__auto___29666 < len__25923__auto___29665)){
args29662.push((arguments[i__25924__auto___29666]));

var G__29667 = (i__25924__auto___29666 + (1));
i__25924__auto___29666 = G__29667;
continue;
} else {
}
break;
}

var G__29664 = args29662.length;
switch (G__29664) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29662.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29669 = [];
var len__25923__auto___29672 = arguments.length;
var i__25924__auto___29673 = (0);
while(true){
if((i__25924__auto___29673 < len__25923__auto___29672)){
args29669.push((arguments[i__25924__auto___29673]));

var G__29674 = (i__25924__auto___29673 + (1));
i__25924__auto___29673 = G__29674;
continue;
} else {
}
break;
}

var G__29671 = args29669.length;
switch (G__29671) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29669.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29676 = [];
var len__25923__auto___29747 = arguments.length;
var i__25924__auto___29748 = (0);
while(true){
if((i__25924__auto___29748 < len__25923__auto___29747)){
args29676.push((arguments[i__25924__auto___29748]));

var G__29749 = (i__25924__auto___29748 + (1));
i__25924__auto___29748 = G__29749;
continue;
} else {
}
break;
}

var G__29678 = args29676.length;
switch (G__29678) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29676.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27712__auto___29751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___29751,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___29751,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29717){
var state_val_29718 = (state_29717[(1)]);
if((state_val_29718 === (7))){
var state_29717__$1 = state_29717;
var statearr_29719_29752 = state_29717__$1;
(statearr_29719_29752[(2)] = null);

(statearr_29719_29752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (1))){
var state_29717__$1 = state_29717;
var statearr_29720_29753 = state_29717__$1;
(statearr_29720_29753[(2)] = null);

(statearr_29720_29753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (4))){
var inst_29681 = (state_29717[(7)]);
var inst_29683 = (inst_29681 < cnt);
var state_29717__$1 = state_29717;
if(cljs.core.truth_(inst_29683)){
var statearr_29721_29754 = state_29717__$1;
(statearr_29721_29754[(1)] = (6));

} else {
var statearr_29722_29755 = state_29717__$1;
(statearr_29722_29755[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (15))){
var inst_29713 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
var statearr_29723_29756 = state_29717__$1;
(statearr_29723_29756[(2)] = inst_29713);

(statearr_29723_29756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (13))){
var inst_29706 = cljs.core.async.close_BANG_.call(null,out);
var state_29717__$1 = state_29717;
var statearr_29724_29757 = state_29717__$1;
(statearr_29724_29757[(2)] = inst_29706);

(statearr_29724_29757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (6))){
var state_29717__$1 = state_29717;
var statearr_29725_29758 = state_29717__$1;
(statearr_29725_29758[(2)] = null);

(statearr_29725_29758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (3))){
var inst_29715 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29717__$1,inst_29715);
} else {
if((state_val_29718 === (12))){
var inst_29703 = (state_29717[(8)]);
var inst_29703__$1 = (state_29717[(2)]);
var inst_29704 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29703__$1);
var state_29717__$1 = (function (){var statearr_29726 = state_29717;
(statearr_29726[(8)] = inst_29703__$1);

return statearr_29726;
})();
if(cljs.core.truth_(inst_29704)){
var statearr_29727_29759 = state_29717__$1;
(statearr_29727_29759[(1)] = (13));

} else {
var statearr_29728_29760 = state_29717__$1;
(statearr_29728_29760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (2))){
var inst_29680 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29681 = (0);
var state_29717__$1 = (function (){var statearr_29729 = state_29717;
(statearr_29729[(9)] = inst_29680);

(statearr_29729[(7)] = inst_29681);

return statearr_29729;
})();
var statearr_29730_29761 = state_29717__$1;
(statearr_29730_29761[(2)] = null);

(statearr_29730_29761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (11))){
var inst_29681 = (state_29717[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29717,(10),Object,null,(9));
var inst_29690 = chs__$1.call(null,inst_29681);
var inst_29691 = done.call(null,inst_29681);
var inst_29692 = cljs.core.async.take_BANG_.call(null,inst_29690,inst_29691);
var state_29717__$1 = state_29717;
var statearr_29731_29762 = state_29717__$1;
(statearr_29731_29762[(2)] = inst_29692);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (9))){
var inst_29681 = (state_29717[(7)]);
var inst_29694 = (state_29717[(2)]);
var inst_29695 = (inst_29681 + (1));
var inst_29681__$1 = inst_29695;
var state_29717__$1 = (function (){var statearr_29732 = state_29717;
(statearr_29732[(10)] = inst_29694);

(statearr_29732[(7)] = inst_29681__$1);

return statearr_29732;
})();
var statearr_29733_29763 = state_29717__$1;
(statearr_29733_29763[(2)] = null);

(statearr_29733_29763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (5))){
var inst_29701 = (state_29717[(2)]);
var state_29717__$1 = (function (){var statearr_29734 = state_29717;
(statearr_29734[(11)] = inst_29701);

return statearr_29734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29717__$1,(12),dchan);
} else {
if((state_val_29718 === (14))){
var inst_29703 = (state_29717[(8)]);
var inst_29708 = cljs.core.apply.call(null,f,inst_29703);
var state_29717__$1 = state_29717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29717__$1,(16),out,inst_29708);
} else {
if((state_val_29718 === (16))){
var inst_29710 = (state_29717[(2)]);
var state_29717__$1 = (function (){var statearr_29735 = state_29717;
(statearr_29735[(12)] = inst_29710);

return statearr_29735;
})();
var statearr_29736_29764 = state_29717__$1;
(statearr_29736_29764[(2)] = null);

(statearr_29736_29764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (10))){
var inst_29685 = (state_29717[(2)]);
var inst_29686 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29717__$1 = (function (){var statearr_29737 = state_29717;
(statearr_29737[(13)] = inst_29685);

return statearr_29737;
})();
var statearr_29738_29765 = state_29717__$1;
(statearr_29738_29765[(2)] = inst_29686);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (8))){
var inst_29699 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
var statearr_29739_29766 = state_29717__$1;
(statearr_29739_29766[(2)] = inst_29699);

(statearr_29739_29766[(1)] = (5));


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
});})(c__27712__auto___29751,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27600__auto__,c__27712__auto___29751,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_29743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29743[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_29743[(1)] = (1));

return statearr_29743;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_29717){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_29717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e29744){if((e29744 instanceof Object)){
var ex__27604__auto__ = e29744;
var statearr_29745_29767 = state_29717;
(statearr_29745_29767[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29768 = state_29717;
state_29717 = G__29768;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_29717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_29717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___29751,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27714__auto__ = (function (){var statearr_29746 = f__27713__auto__.call(null);
(statearr_29746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___29751);

return statearr_29746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___29751,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29770 = [];
var len__25923__auto___29828 = arguments.length;
var i__25924__auto___29829 = (0);
while(true){
if((i__25924__auto___29829 < len__25923__auto___29828)){
args29770.push((arguments[i__25924__auto___29829]));

var G__29830 = (i__25924__auto___29829 + (1));
i__25924__auto___29829 = G__29830;
continue;
} else {
}
break;
}

var G__29772 = args29770.length;
switch (G__29772) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29770.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27712__auto___29832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___29832,out){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___29832,out){
return (function (state_29804){
var state_val_29805 = (state_29804[(1)]);
if((state_val_29805 === (7))){
var inst_29783 = (state_29804[(7)]);
var inst_29784 = (state_29804[(8)]);
var inst_29783__$1 = (state_29804[(2)]);
var inst_29784__$1 = cljs.core.nth.call(null,inst_29783__$1,(0),null);
var inst_29785 = cljs.core.nth.call(null,inst_29783__$1,(1),null);
var inst_29786 = (inst_29784__$1 == null);
var state_29804__$1 = (function (){var statearr_29806 = state_29804;
(statearr_29806[(7)] = inst_29783__$1);

(statearr_29806[(9)] = inst_29785);

(statearr_29806[(8)] = inst_29784__$1);

return statearr_29806;
})();
if(cljs.core.truth_(inst_29786)){
var statearr_29807_29833 = state_29804__$1;
(statearr_29807_29833[(1)] = (8));

} else {
var statearr_29808_29834 = state_29804__$1;
(statearr_29808_29834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (1))){
var inst_29773 = cljs.core.vec.call(null,chs);
var inst_29774 = inst_29773;
var state_29804__$1 = (function (){var statearr_29809 = state_29804;
(statearr_29809[(10)] = inst_29774);

return statearr_29809;
})();
var statearr_29810_29835 = state_29804__$1;
(statearr_29810_29835[(2)] = null);

(statearr_29810_29835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (4))){
var inst_29774 = (state_29804[(10)]);
var state_29804__$1 = state_29804;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29804__$1,(7),inst_29774);
} else {
if((state_val_29805 === (6))){
var inst_29800 = (state_29804[(2)]);
var state_29804__$1 = state_29804;
var statearr_29811_29836 = state_29804__$1;
(statearr_29811_29836[(2)] = inst_29800);

(statearr_29811_29836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (3))){
var inst_29802 = (state_29804[(2)]);
var state_29804__$1 = state_29804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29804__$1,inst_29802);
} else {
if((state_val_29805 === (2))){
var inst_29774 = (state_29804[(10)]);
var inst_29776 = cljs.core.count.call(null,inst_29774);
var inst_29777 = (inst_29776 > (0));
var state_29804__$1 = state_29804;
if(cljs.core.truth_(inst_29777)){
var statearr_29813_29837 = state_29804__$1;
(statearr_29813_29837[(1)] = (4));

} else {
var statearr_29814_29838 = state_29804__$1;
(statearr_29814_29838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (11))){
var inst_29774 = (state_29804[(10)]);
var inst_29793 = (state_29804[(2)]);
var tmp29812 = inst_29774;
var inst_29774__$1 = tmp29812;
var state_29804__$1 = (function (){var statearr_29815 = state_29804;
(statearr_29815[(10)] = inst_29774__$1);

(statearr_29815[(11)] = inst_29793);

return statearr_29815;
})();
var statearr_29816_29839 = state_29804__$1;
(statearr_29816_29839[(2)] = null);

(statearr_29816_29839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (9))){
var inst_29784 = (state_29804[(8)]);
var state_29804__$1 = state_29804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29804__$1,(11),out,inst_29784);
} else {
if((state_val_29805 === (5))){
var inst_29798 = cljs.core.async.close_BANG_.call(null,out);
var state_29804__$1 = state_29804;
var statearr_29817_29840 = state_29804__$1;
(statearr_29817_29840[(2)] = inst_29798);

(statearr_29817_29840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (10))){
var inst_29796 = (state_29804[(2)]);
var state_29804__$1 = state_29804;
var statearr_29818_29841 = state_29804__$1;
(statearr_29818_29841[(2)] = inst_29796);

(statearr_29818_29841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (8))){
var inst_29783 = (state_29804[(7)]);
var inst_29785 = (state_29804[(9)]);
var inst_29774 = (state_29804[(10)]);
var inst_29784 = (state_29804[(8)]);
var inst_29788 = (function (){var cs = inst_29774;
var vec__29779 = inst_29783;
var v = inst_29784;
var c = inst_29785;
return ((function (cs,vec__29779,v,c,inst_29783,inst_29785,inst_29774,inst_29784,state_val_29805,c__27712__auto___29832,out){
return (function (p1__29769_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29769_SHARP_);
});
;})(cs,vec__29779,v,c,inst_29783,inst_29785,inst_29774,inst_29784,state_val_29805,c__27712__auto___29832,out))
})();
var inst_29789 = cljs.core.filterv.call(null,inst_29788,inst_29774);
var inst_29774__$1 = inst_29789;
var state_29804__$1 = (function (){var statearr_29819 = state_29804;
(statearr_29819[(10)] = inst_29774__$1);

return statearr_29819;
})();
var statearr_29820_29842 = state_29804__$1;
(statearr_29820_29842[(2)] = null);

(statearr_29820_29842[(1)] = (2));


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
});})(c__27712__auto___29832,out))
;
return ((function (switch__27600__auto__,c__27712__auto___29832,out){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_29824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29824[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_29824[(1)] = (1));

return statearr_29824;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_29804){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_29804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e29825){if((e29825 instanceof Object)){
var ex__27604__auto__ = e29825;
var statearr_29826_29843 = state_29804;
(statearr_29826_29843[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29844 = state_29804;
state_29804 = G__29844;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_29804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_29804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___29832,out))
})();
var state__27714__auto__ = (function (){var statearr_29827 = f__27713__auto__.call(null);
(statearr_29827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___29832);

return statearr_29827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___29832,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29845 = [];
var len__25923__auto___29894 = arguments.length;
var i__25924__auto___29895 = (0);
while(true){
if((i__25924__auto___29895 < len__25923__auto___29894)){
args29845.push((arguments[i__25924__auto___29895]));

var G__29896 = (i__25924__auto___29895 + (1));
i__25924__auto___29895 = G__29896;
continue;
} else {
}
break;
}

var G__29847 = args29845.length;
switch (G__29847) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29845.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27712__auto___29898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___29898,out){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___29898,out){
return (function (state_29871){
var state_val_29872 = (state_29871[(1)]);
if((state_val_29872 === (7))){
var inst_29853 = (state_29871[(7)]);
var inst_29853__$1 = (state_29871[(2)]);
var inst_29854 = (inst_29853__$1 == null);
var inst_29855 = cljs.core.not.call(null,inst_29854);
var state_29871__$1 = (function (){var statearr_29873 = state_29871;
(statearr_29873[(7)] = inst_29853__$1);

return statearr_29873;
})();
if(inst_29855){
var statearr_29874_29899 = state_29871__$1;
(statearr_29874_29899[(1)] = (8));

} else {
var statearr_29875_29900 = state_29871__$1;
(statearr_29875_29900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (1))){
var inst_29848 = (0);
var state_29871__$1 = (function (){var statearr_29876 = state_29871;
(statearr_29876[(8)] = inst_29848);

return statearr_29876;
})();
var statearr_29877_29901 = state_29871__$1;
(statearr_29877_29901[(2)] = null);

(statearr_29877_29901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (4))){
var state_29871__$1 = state_29871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29871__$1,(7),ch);
} else {
if((state_val_29872 === (6))){
var inst_29866 = (state_29871[(2)]);
var state_29871__$1 = state_29871;
var statearr_29878_29902 = state_29871__$1;
(statearr_29878_29902[(2)] = inst_29866);

(statearr_29878_29902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (3))){
var inst_29868 = (state_29871[(2)]);
var inst_29869 = cljs.core.async.close_BANG_.call(null,out);
var state_29871__$1 = (function (){var statearr_29879 = state_29871;
(statearr_29879[(9)] = inst_29868);

return statearr_29879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29871__$1,inst_29869);
} else {
if((state_val_29872 === (2))){
var inst_29848 = (state_29871[(8)]);
var inst_29850 = (inst_29848 < n);
var state_29871__$1 = state_29871;
if(cljs.core.truth_(inst_29850)){
var statearr_29880_29903 = state_29871__$1;
(statearr_29880_29903[(1)] = (4));

} else {
var statearr_29881_29904 = state_29871__$1;
(statearr_29881_29904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (11))){
var inst_29848 = (state_29871[(8)]);
var inst_29858 = (state_29871[(2)]);
var inst_29859 = (inst_29848 + (1));
var inst_29848__$1 = inst_29859;
var state_29871__$1 = (function (){var statearr_29882 = state_29871;
(statearr_29882[(8)] = inst_29848__$1);

(statearr_29882[(10)] = inst_29858);

return statearr_29882;
})();
var statearr_29883_29905 = state_29871__$1;
(statearr_29883_29905[(2)] = null);

(statearr_29883_29905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (9))){
var state_29871__$1 = state_29871;
var statearr_29884_29906 = state_29871__$1;
(statearr_29884_29906[(2)] = null);

(statearr_29884_29906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (5))){
var state_29871__$1 = state_29871;
var statearr_29885_29907 = state_29871__$1;
(statearr_29885_29907[(2)] = null);

(statearr_29885_29907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (10))){
var inst_29863 = (state_29871[(2)]);
var state_29871__$1 = state_29871;
var statearr_29886_29908 = state_29871__$1;
(statearr_29886_29908[(2)] = inst_29863);

(statearr_29886_29908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (8))){
var inst_29853 = (state_29871[(7)]);
var state_29871__$1 = state_29871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29871__$1,(11),out,inst_29853);
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
});})(c__27712__auto___29898,out))
;
return ((function (switch__27600__auto__,c__27712__auto___29898,out){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_29890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29890[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_29890[(1)] = (1));

return statearr_29890;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_29871){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_29871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e29891){if((e29891 instanceof Object)){
var ex__27604__auto__ = e29891;
var statearr_29892_29909 = state_29871;
(statearr_29892_29909[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29910 = state_29871;
state_29871 = G__29910;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_29871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_29871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___29898,out))
})();
var state__27714__auto__ = (function (){var statearr_29893 = f__27713__auto__.call(null);
(statearr_29893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___29898);

return statearr_29893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___29898,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29918 = (function (map_LT_,f,ch,meta29919){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29919 = meta29919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29920,meta29919__$1){
var self__ = this;
var _29920__$1 = this;
return (new cljs.core.async.t_cljs$core$async29918(self__.map_LT_,self__.f,self__.ch,meta29919__$1));
});

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29920){
var self__ = this;
var _29920__$1 = this;
return self__.meta29919;
});

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29921 = (function (map_LT_,f,ch,meta29919,_,fn1,meta29922){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29919 = meta29919;
this._ = _;
this.fn1 = fn1;
this.meta29922 = meta29922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29923,meta29922__$1){
var self__ = this;
var _29923__$1 = this;
return (new cljs.core.async.t_cljs$core$async29921(self__.map_LT_,self__.f,self__.ch,self__.meta29919,self__._,self__.fn1,meta29922__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29923){
var self__ = this;
var _29923__$1 = this;
return self__.meta29922;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29911_SHARP_){
return f1.call(null,(((p1__29911_SHARP_ == null))?null:self__.f.call(null,p1__29911_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29921.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29919","meta29919",1362231674,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29918","cljs.core.async/t_cljs$core$async29918",620728809,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29922","meta29922",1538810842,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29921";

cljs.core.async.t_cljs$core$async29921.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29921");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29921 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29921(map_LT___$1,f__$1,ch__$1,meta29919__$1,___$2,fn1__$1,meta29922){
return (new cljs.core.async.t_cljs$core$async29921(map_LT___$1,f__$1,ch__$1,meta29919__$1,___$2,fn1__$1,meta29922));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29921(self__.map_LT_,self__.f,self__.ch,self__.meta29919,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24836__auto__ = ret;
if(cljs.core.truth_(and__24836__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24836__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29919","meta29919",1362231674,null)], null);
});

cljs.core.async.t_cljs$core$async29918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29918";

cljs.core.async.t_cljs$core$async29918.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29918");
});

cljs.core.async.__GT_t_cljs$core$async29918 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29918(map_LT___$1,f__$1,ch__$1,meta29919){
return (new cljs.core.async.t_cljs$core$async29918(map_LT___$1,f__$1,ch__$1,meta29919));
});

}

return (new cljs.core.async.t_cljs$core$async29918(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29927 = (function (map_GT_,f,ch,meta29928){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29928 = meta29928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29929,meta29928__$1){
var self__ = this;
var _29929__$1 = this;
return (new cljs.core.async.t_cljs$core$async29927(self__.map_GT_,self__.f,self__.ch,meta29928__$1));
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29929){
var self__ = this;
var _29929__$1 = this;
return self__.meta29928;
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29928","meta29928",1917296574,null)], null);
});

cljs.core.async.t_cljs$core$async29927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29927";

cljs.core.async.t_cljs$core$async29927.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29927");
});

cljs.core.async.__GT_t_cljs$core$async29927 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29927(map_GT___$1,f__$1,ch__$1,meta29928){
return (new cljs.core.async.t_cljs$core$async29927(map_GT___$1,f__$1,ch__$1,meta29928));
});

}

return (new cljs.core.async.t_cljs$core$async29927(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29933 = (function (filter_GT_,p,ch,meta29934){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29934 = meta29934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29935,meta29934__$1){
var self__ = this;
var _29935__$1 = this;
return (new cljs.core.async.t_cljs$core$async29933(self__.filter_GT_,self__.p,self__.ch,meta29934__$1));
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29935){
var self__ = this;
var _29935__$1 = this;
return self__.meta29934;
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29934","meta29934",-301459518,null)], null);
});

cljs.core.async.t_cljs$core$async29933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29933";

cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29933");
});

cljs.core.async.__GT_t_cljs$core$async29933 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29933(filter_GT___$1,p__$1,ch__$1,meta29934){
return (new cljs.core.async.t_cljs$core$async29933(filter_GT___$1,p__$1,ch__$1,meta29934));
});

}

return (new cljs.core.async.t_cljs$core$async29933(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29936 = [];
var len__25923__auto___29980 = arguments.length;
var i__25924__auto___29981 = (0);
while(true){
if((i__25924__auto___29981 < len__25923__auto___29980)){
args29936.push((arguments[i__25924__auto___29981]));

var G__29982 = (i__25924__auto___29981 + (1));
i__25924__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var G__29938 = args29936.length;
switch (G__29938) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29936.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27712__auto___29984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___29984,out){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___29984,out){
return (function (state_29959){
var state_val_29960 = (state_29959[(1)]);
if((state_val_29960 === (7))){
var inst_29955 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_29961_29985 = state_29959__$1;
(statearr_29961_29985[(2)] = inst_29955);

(statearr_29961_29985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (1))){
var state_29959__$1 = state_29959;
var statearr_29962_29986 = state_29959__$1;
(statearr_29962_29986[(2)] = null);

(statearr_29962_29986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (4))){
var inst_29941 = (state_29959[(7)]);
var inst_29941__$1 = (state_29959[(2)]);
var inst_29942 = (inst_29941__$1 == null);
var state_29959__$1 = (function (){var statearr_29963 = state_29959;
(statearr_29963[(7)] = inst_29941__$1);

return statearr_29963;
})();
if(cljs.core.truth_(inst_29942)){
var statearr_29964_29987 = state_29959__$1;
(statearr_29964_29987[(1)] = (5));

} else {
var statearr_29965_29988 = state_29959__$1;
(statearr_29965_29988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (6))){
var inst_29941 = (state_29959[(7)]);
var inst_29946 = p.call(null,inst_29941);
var state_29959__$1 = state_29959;
if(cljs.core.truth_(inst_29946)){
var statearr_29966_29989 = state_29959__$1;
(statearr_29966_29989[(1)] = (8));

} else {
var statearr_29967_29990 = state_29959__$1;
(statearr_29967_29990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (3))){
var inst_29957 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29959__$1,inst_29957);
} else {
if((state_val_29960 === (2))){
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29959__$1,(4),ch);
} else {
if((state_val_29960 === (11))){
var inst_29949 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_29968_29991 = state_29959__$1;
(statearr_29968_29991[(2)] = inst_29949);

(statearr_29968_29991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (9))){
var state_29959__$1 = state_29959;
var statearr_29969_29992 = state_29959__$1;
(statearr_29969_29992[(2)] = null);

(statearr_29969_29992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (5))){
var inst_29944 = cljs.core.async.close_BANG_.call(null,out);
var state_29959__$1 = state_29959;
var statearr_29970_29993 = state_29959__$1;
(statearr_29970_29993[(2)] = inst_29944);

(statearr_29970_29993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (10))){
var inst_29952 = (state_29959[(2)]);
var state_29959__$1 = (function (){var statearr_29971 = state_29959;
(statearr_29971[(8)] = inst_29952);

return statearr_29971;
})();
var statearr_29972_29994 = state_29959__$1;
(statearr_29972_29994[(2)] = null);

(statearr_29972_29994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (8))){
var inst_29941 = (state_29959[(7)]);
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29959__$1,(11),out,inst_29941);
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
});})(c__27712__auto___29984,out))
;
return ((function (switch__27600__auto__,c__27712__auto___29984,out){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_29976 = [null,null,null,null,null,null,null,null,null];
(statearr_29976[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_29976[(1)] = (1));

return statearr_29976;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_29959){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_29959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e29977){if((e29977 instanceof Object)){
var ex__27604__auto__ = e29977;
var statearr_29978_29995 = state_29959;
(statearr_29978_29995[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29996 = state_29959;
state_29959 = G__29996;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_29959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_29959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___29984,out))
})();
var state__27714__auto__ = (function (){var statearr_29979 = f__27713__auto__.call(null);
(statearr_29979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___29984);

return statearr_29979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___29984,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29997 = [];
var len__25923__auto___30000 = arguments.length;
var i__25924__auto___30001 = (0);
while(true){
if((i__25924__auto___30001 < len__25923__auto___30000)){
args29997.push((arguments[i__25924__auto___30001]));

var G__30002 = (i__25924__auto___30001 + (1));
i__25924__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var G__29999 = args29997.length;
switch (G__29999) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29997.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27712__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto__){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto__){
return (function (state_30169){
var state_val_30170 = (state_30169[(1)]);
if((state_val_30170 === (7))){
var inst_30165 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30171_30212 = state_30169__$1;
(statearr_30171_30212[(2)] = inst_30165);

(statearr_30171_30212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (20))){
var inst_30135 = (state_30169[(7)]);
var inst_30146 = (state_30169[(2)]);
var inst_30147 = cljs.core.next.call(null,inst_30135);
var inst_30121 = inst_30147;
var inst_30122 = null;
var inst_30123 = (0);
var inst_30124 = (0);
var state_30169__$1 = (function (){var statearr_30172 = state_30169;
(statearr_30172[(8)] = inst_30146);

(statearr_30172[(9)] = inst_30121);

(statearr_30172[(10)] = inst_30122);

(statearr_30172[(11)] = inst_30124);

(statearr_30172[(12)] = inst_30123);

return statearr_30172;
})();
var statearr_30173_30213 = state_30169__$1;
(statearr_30173_30213[(2)] = null);

(statearr_30173_30213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (1))){
var state_30169__$1 = state_30169;
var statearr_30174_30214 = state_30169__$1;
(statearr_30174_30214[(2)] = null);

(statearr_30174_30214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (4))){
var inst_30110 = (state_30169[(13)]);
var inst_30110__$1 = (state_30169[(2)]);
var inst_30111 = (inst_30110__$1 == null);
var state_30169__$1 = (function (){var statearr_30175 = state_30169;
(statearr_30175[(13)] = inst_30110__$1);

return statearr_30175;
})();
if(cljs.core.truth_(inst_30111)){
var statearr_30176_30215 = state_30169__$1;
(statearr_30176_30215[(1)] = (5));

} else {
var statearr_30177_30216 = state_30169__$1;
(statearr_30177_30216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (15))){
var state_30169__$1 = state_30169;
var statearr_30181_30217 = state_30169__$1;
(statearr_30181_30217[(2)] = null);

(statearr_30181_30217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (21))){
var state_30169__$1 = state_30169;
var statearr_30182_30218 = state_30169__$1;
(statearr_30182_30218[(2)] = null);

(statearr_30182_30218[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (13))){
var inst_30121 = (state_30169[(9)]);
var inst_30122 = (state_30169[(10)]);
var inst_30124 = (state_30169[(11)]);
var inst_30123 = (state_30169[(12)]);
var inst_30131 = (state_30169[(2)]);
var inst_30132 = (inst_30124 + (1));
var tmp30178 = inst_30121;
var tmp30179 = inst_30122;
var tmp30180 = inst_30123;
var inst_30121__$1 = tmp30178;
var inst_30122__$1 = tmp30179;
var inst_30123__$1 = tmp30180;
var inst_30124__$1 = inst_30132;
var state_30169__$1 = (function (){var statearr_30183 = state_30169;
(statearr_30183[(9)] = inst_30121__$1);

(statearr_30183[(10)] = inst_30122__$1);

(statearr_30183[(11)] = inst_30124__$1);

(statearr_30183[(12)] = inst_30123__$1);

(statearr_30183[(14)] = inst_30131);

return statearr_30183;
})();
var statearr_30184_30219 = state_30169__$1;
(statearr_30184_30219[(2)] = null);

(statearr_30184_30219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (22))){
var state_30169__$1 = state_30169;
var statearr_30185_30220 = state_30169__$1;
(statearr_30185_30220[(2)] = null);

(statearr_30185_30220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (6))){
var inst_30110 = (state_30169[(13)]);
var inst_30119 = f.call(null,inst_30110);
var inst_30120 = cljs.core.seq.call(null,inst_30119);
var inst_30121 = inst_30120;
var inst_30122 = null;
var inst_30123 = (0);
var inst_30124 = (0);
var state_30169__$1 = (function (){var statearr_30186 = state_30169;
(statearr_30186[(9)] = inst_30121);

(statearr_30186[(10)] = inst_30122);

(statearr_30186[(11)] = inst_30124);

(statearr_30186[(12)] = inst_30123);

return statearr_30186;
})();
var statearr_30187_30221 = state_30169__$1;
(statearr_30187_30221[(2)] = null);

(statearr_30187_30221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (17))){
var inst_30135 = (state_30169[(7)]);
var inst_30139 = cljs.core.chunk_first.call(null,inst_30135);
var inst_30140 = cljs.core.chunk_rest.call(null,inst_30135);
var inst_30141 = cljs.core.count.call(null,inst_30139);
var inst_30121 = inst_30140;
var inst_30122 = inst_30139;
var inst_30123 = inst_30141;
var inst_30124 = (0);
var state_30169__$1 = (function (){var statearr_30188 = state_30169;
(statearr_30188[(9)] = inst_30121);

(statearr_30188[(10)] = inst_30122);

(statearr_30188[(11)] = inst_30124);

(statearr_30188[(12)] = inst_30123);

return statearr_30188;
})();
var statearr_30189_30222 = state_30169__$1;
(statearr_30189_30222[(2)] = null);

(statearr_30189_30222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (3))){
var inst_30167 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30169__$1,inst_30167);
} else {
if((state_val_30170 === (12))){
var inst_30155 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30190_30223 = state_30169__$1;
(statearr_30190_30223[(2)] = inst_30155);

(statearr_30190_30223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (2))){
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(4),in$);
} else {
if((state_val_30170 === (23))){
var inst_30163 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30191_30224 = state_30169__$1;
(statearr_30191_30224[(2)] = inst_30163);

(statearr_30191_30224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (19))){
var inst_30150 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30192_30225 = state_30169__$1;
(statearr_30192_30225[(2)] = inst_30150);

(statearr_30192_30225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (11))){
var inst_30121 = (state_30169[(9)]);
var inst_30135 = (state_30169[(7)]);
var inst_30135__$1 = cljs.core.seq.call(null,inst_30121);
var state_30169__$1 = (function (){var statearr_30193 = state_30169;
(statearr_30193[(7)] = inst_30135__$1);

return statearr_30193;
})();
if(inst_30135__$1){
var statearr_30194_30226 = state_30169__$1;
(statearr_30194_30226[(1)] = (14));

} else {
var statearr_30195_30227 = state_30169__$1;
(statearr_30195_30227[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (9))){
var inst_30157 = (state_30169[(2)]);
var inst_30158 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30169__$1 = (function (){var statearr_30196 = state_30169;
(statearr_30196[(15)] = inst_30157);

return statearr_30196;
})();
if(cljs.core.truth_(inst_30158)){
var statearr_30197_30228 = state_30169__$1;
(statearr_30197_30228[(1)] = (21));

} else {
var statearr_30198_30229 = state_30169__$1;
(statearr_30198_30229[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (5))){
var inst_30113 = cljs.core.async.close_BANG_.call(null,out);
var state_30169__$1 = state_30169;
var statearr_30199_30230 = state_30169__$1;
(statearr_30199_30230[(2)] = inst_30113);

(statearr_30199_30230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (14))){
var inst_30135 = (state_30169[(7)]);
var inst_30137 = cljs.core.chunked_seq_QMARK_.call(null,inst_30135);
var state_30169__$1 = state_30169;
if(inst_30137){
var statearr_30200_30231 = state_30169__$1;
(statearr_30200_30231[(1)] = (17));

} else {
var statearr_30201_30232 = state_30169__$1;
(statearr_30201_30232[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (16))){
var inst_30153 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30202_30233 = state_30169__$1;
(statearr_30202_30233[(2)] = inst_30153);

(statearr_30202_30233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (10))){
var inst_30122 = (state_30169[(10)]);
var inst_30124 = (state_30169[(11)]);
var inst_30129 = cljs.core._nth.call(null,inst_30122,inst_30124);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(13),out,inst_30129);
} else {
if((state_val_30170 === (18))){
var inst_30135 = (state_30169[(7)]);
var inst_30144 = cljs.core.first.call(null,inst_30135);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(20),out,inst_30144);
} else {
if((state_val_30170 === (8))){
var inst_30124 = (state_30169[(11)]);
var inst_30123 = (state_30169[(12)]);
var inst_30126 = (inst_30124 < inst_30123);
var inst_30127 = inst_30126;
var state_30169__$1 = state_30169;
if(cljs.core.truth_(inst_30127)){
var statearr_30203_30234 = state_30169__$1;
(statearr_30203_30234[(1)] = (10));

} else {
var statearr_30204_30235 = state_30169__$1;
(statearr_30204_30235[(1)] = (11));

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
});})(c__27712__auto__))
;
return ((function (switch__27600__auto__,c__27712__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27601__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27601__auto____0 = (function (){
var statearr_30208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30208[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27601__auto__);

(statearr_30208[(1)] = (1));

return statearr_30208;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27601__auto____1 = (function (state_30169){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_30169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e30209){if((e30209 instanceof Object)){
var ex__27604__auto__ = e30209;
var statearr_30210_30236 = state_30169;
(statearr_30210_30236[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30237 = state_30169;
state_30169 = G__30237;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27601__auto__ = function(state_30169){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27601__auto____1.call(this,state_30169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27601__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27601__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto__))
})();
var state__27714__auto__ = (function (){var statearr_30211 = f__27713__auto__.call(null);
(statearr_30211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto__);

return statearr_30211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto__))
);

return c__27712__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30238 = [];
var len__25923__auto___30241 = arguments.length;
var i__25924__auto___30242 = (0);
while(true){
if((i__25924__auto___30242 < len__25923__auto___30241)){
args30238.push((arguments[i__25924__auto___30242]));

var G__30243 = (i__25924__auto___30242 + (1));
i__25924__auto___30242 = G__30243;
continue;
} else {
}
break;
}

var G__30240 = args30238.length;
switch (G__30240) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30238.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30245 = [];
var len__25923__auto___30248 = arguments.length;
var i__25924__auto___30249 = (0);
while(true){
if((i__25924__auto___30249 < len__25923__auto___30248)){
args30245.push((arguments[i__25924__auto___30249]));

var G__30250 = (i__25924__auto___30249 + (1));
i__25924__auto___30249 = G__30250;
continue;
} else {
}
break;
}

var G__30247 = args30245.length;
switch (G__30247) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30245.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30252 = [];
var len__25923__auto___30303 = arguments.length;
var i__25924__auto___30304 = (0);
while(true){
if((i__25924__auto___30304 < len__25923__auto___30303)){
args30252.push((arguments[i__25924__auto___30304]));

var G__30305 = (i__25924__auto___30304 + (1));
i__25924__auto___30304 = G__30305;
continue;
} else {
}
break;
}

var G__30254 = args30252.length;
switch (G__30254) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30252.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27712__auto___30307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___30307,out){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___30307,out){
return (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (7))){
var inst_30273 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30280_30308 = state_30278__$1;
(statearr_30280_30308[(2)] = inst_30273);

(statearr_30280_30308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (1))){
var inst_30255 = null;
var state_30278__$1 = (function (){var statearr_30281 = state_30278;
(statearr_30281[(7)] = inst_30255);

return statearr_30281;
})();
var statearr_30282_30309 = state_30278__$1;
(statearr_30282_30309[(2)] = null);

(statearr_30282_30309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (4))){
var inst_30258 = (state_30278[(8)]);
var inst_30258__$1 = (state_30278[(2)]);
var inst_30259 = (inst_30258__$1 == null);
var inst_30260 = cljs.core.not.call(null,inst_30259);
var state_30278__$1 = (function (){var statearr_30283 = state_30278;
(statearr_30283[(8)] = inst_30258__$1);

return statearr_30283;
})();
if(inst_30260){
var statearr_30284_30310 = state_30278__$1;
(statearr_30284_30310[(1)] = (5));

} else {
var statearr_30285_30311 = state_30278__$1;
(statearr_30285_30311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (6))){
var state_30278__$1 = state_30278;
var statearr_30286_30312 = state_30278__$1;
(statearr_30286_30312[(2)] = null);

(statearr_30286_30312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (3))){
var inst_30275 = (state_30278[(2)]);
var inst_30276 = cljs.core.async.close_BANG_.call(null,out);
var state_30278__$1 = (function (){var statearr_30287 = state_30278;
(statearr_30287[(9)] = inst_30275);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30278__$1,inst_30276);
} else {
if((state_val_30279 === (2))){
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30278__$1,(4),ch);
} else {
if((state_val_30279 === (11))){
var inst_30258 = (state_30278[(8)]);
var inst_30267 = (state_30278[(2)]);
var inst_30255 = inst_30258;
var state_30278__$1 = (function (){var statearr_30288 = state_30278;
(statearr_30288[(7)] = inst_30255);

(statearr_30288[(10)] = inst_30267);

return statearr_30288;
})();
var statearr_30289_30313 = state_30278__$1;
(statearr_30289_30313[(2)] = null);

(statearr_30289_30313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (9))){
var inst_30258 = (state_30278[(8)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30278__$1,(11),out,inst_30258);
} else {
if((state_val_30279 === (5))){
var inst_30255 = (state_30278[(7)]);
var inst_30258 = (state_30278[(8)]);
var inst_30262 = cljs.core._EQ_.call(null,inst_30258,inst_30255);
var state_30278__$1 = state_30278;
if(inst_30262){
var statearr_30291_30314 = state_30278__$1;
(statearr_30291_30314[(1)] = (8));

} else {
var statearr_30292_30315 = state_30278__$1;
(statearr_30292_30315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (10))){
var inst_30270 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30293_30316 = state_30278__$1;
(statearr_30293_30316[(2)] = inst_30270);

(statearr_30293_30316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (8))){
var inst_30255 = (state_30278[(7)]);
var tmp30290 = inst_30255;
var inst_30255__$1 = tmp30290;
var state_30278__$1 = (function (){var statearr_30294 = state_30278;
(statearr_30294[(7)] = inst_30255__$1);

return statearr_30294;
})();
var statearr_30295_30317 = state_30278__$1;
(statearr_30295_30317[(2)] = null);

(statearr_30295_30317[(1)] = (2));


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
});})(c__27712__auto___30307,out))
;
return ((function (switch__27600__auto__,c__27712__auto___30307,out){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_30299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30299[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_30299[(1)] = (1));

return statearr_30299;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_30278){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_30278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e30300){if((e30300 instanceof Object)){
var ex__27604__auto__ = e30300;
var statearr_30301_30318 = state_30278;
(statearr_30301_30318[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30319 = state_30278;
state_30278 = G__30319;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___30307,out))
})();
var state__27714__auto__ = (function (){var statearr_30302 = f__27713__auto__.call(null);
(statearr_30302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___30307);

return statearr_30302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___30307,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30320 = [];
var len__25923__auto___30390 = arguments.length;
var i__25924__auto___30391 = (0);
while(true){
if((i__25924__auto___30391 < len__25923__auto___30390)){
args30320.push((arguments[i__25924__auto___30391]));

var G__30392 = (i__25924__auto___30391 + (1));
i__25924__auto___30391 = G__30392;
continue;
} else {
}
break;
}

var G__30322 = args30320.length;
switch (G__30322) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30320.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27712__auto___30394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___30394,out){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___30394,out){
return (function (state_30360){
var state_val_30361 = (state_30360[(1)]);
if((state_val_30361 === (7))){
var inst_30356 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30362_30395 = state_30360__$1;
(statearr_30362_30395[(2)] = inst_30356);

(statearr_30362_30395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (1))){
var inst_30323 = (new Array(n));
var inst_30324 = inst_30323;
var inst_30325 = (0);
var state_30360__$1 = (function (){var statearr_30363 = state_30360;
(statearr_30363[(7)] = inst_30325);

(statearr_30363[(8)] = inst_30324);

return statearr_30363;
})();
var statearr_30364_30396 = state_30360__$1;
(statearr_30364_30396[(2)] = null);

(statearr_30364_30396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (4))){
var inst_30328 = (state_30360[(9)]);
var inst_30328__$1 = (state_30360[(2)]);
var inst_30329 = (inst_30328__$1 == null);
var inst_30330 = cljs.core.not.call(null,inst_30329);
var state_30360__$1 = (function (){var statearr_30365 = state_30360;
(statearr_30365[(9)] = inst_30328__$1);

return statearr_30365;
})();
if(inst_30330){
var statearr_30366_30397 = state_30360__$1;
(statearr_30366_30397[(1)] = (5));

} else {
var statearr_30367_30398 = state_30360__$1;
(statearr_30367_30398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (15))){
var inst_30350 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30368_30399 = state_30360__$1;
(statearr_30368_30399[(2)] = inst_30350);

(statearr_30368_30399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (13))){
var state_30360__$1 = state_30360;
var statearr_30369_30400 = state_30360__$1;
(statearr_30369_30400[(2)] = null);

(statearr_30369_30400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (6))){
var inst_30325 = (state_30360[(7)]);
var inst_30346 = (inst_30325 > (0));
var state_30360__$1 = state_30360;
if(cljs.core.truth_(inst_30346)){
var statearr_30370_30401 = state_30360__$1;
(statearr_30370_30401[(1)] = (12));

} else {
var statearr_30371_30402 = state_30360__$1;
(statearr_30371_30402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (3))){
var inst_30358 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30360__$1,inst_30358);
} else {
if((state_val_30361 === (12))){
var inst_30324 = (state_30360[(8)]);
var inst_30348 = cljs.core.vec.call(null,inst_30324);
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30360__$1,(15),out,inst_30348);
} else {
if((state_val_30361 === (2))){
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30360__$1,(4),ch);
} else {
if((state_val_30361 === (11))){
var inst_30340 = (state_30360[(2)]);
var inst_30341 = (new Array(n));
var inst_30324 = inst_30341;
var inst_30325 = (0);
var state_30360__$1 = (function (){var statearr_30372 = state_30360;
(statearr_30372[(7)] = inst_30325);

(statearr_30372[(8)] = inst_30324);

(statearr_30372[(10)] = inst_30340);

return statearr_30372;
})();
var statearr_30373_30403 = state_30360__$1;
(statearr_30373_30403[(2)] = null);

(statearr_30373_30403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (9))){
var inst_30324 = (state_30360[(8)]);
var inst_30338 = cljs.core.vec.call(null,inst_30324);
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30360__$1,(11),out,inst_30338);
} else {
if((state_val_30361 === (5))){
var inst_30325 = (state_30360[(7)]);
var inst_30328 = (state_30360[(9)]);
var inst_30333 = (state_30360[(11)]);
var inst_30324 = (state_30360[(8)]);
var inst_30332 = (inst_30324[inst_30325] = inst_30328);
var inst_30333__$1 = (inst_30325 + (1));
var inst_30334 = (inst_30333__$1 < n);
var state_30360__$1 = (function (){var statearr_30374 = state_30360;
(statearr_30374[(11)] = inst_30333__$1);

(statearr_30374[(12)] = inst_30332);

return statearr_30374;
})();
if(cljs.core.truth_(inst_30334)){
var statearr_30375_30404 = state_30360__$1;
(statearr_30375_30404[(1)] = (8));

} else {
var statearr_30376_30405 = state_30360__$1;
(statearr_30376_30405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (14))){
var inst_30353 = (state_30360[(2)]);
var inst_30354 = cljs.core.async.close_BANG_.call(null,out);
var state_30360__$1 = (function (){var statearr_30378 = state_30360;
(statearr_30378[(13)] = inst_30353);

return statearr_30378;
})();
var statearr_30379_30406 = state_30360__$1;
(statearr_30379_30406[(2)] = inst_30354);

(statearr_30379_30406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (10))){
var inst_30344 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30380_30407 = state_30360__$1;
(statearr_30380_30407[(2)] = inst_30344);

(statearr_30380_30407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (8))){
var inst_30333 = (state_30360[(11)]);
var inst_30324 = (state_30360[(8)]);
var tmp30377 = inst_30324;
var inst_30324__$1 = tmp30377;
var inst_30325 = inst_30333;
var state_30360__$1 = (function (){var statearr_30381 = state_30360;
(statearr_30381[(7)] = inst_30325);

(statearr_30381[(8)] = inst_30324__$1);

return statearr_30381;
})();
var statearr_30382_30408 = state_30360__$1;
(statearr_30382_30408[(2)] = null);

(statearr_30382_30408[(1)] = (2));


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
});})(c__27712__auto___30394,out))
;
return ((function (switch__27600__auto__,c__27712__auto___30394,out){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_30386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30386[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_30386[(1)] = (1));

return statearr_30386;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_30360){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_30360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e30387){if((e30387 instanceof Object)){
var ex__27604__auto__ = e30387;
var statearr_30388_30409 = state_30360;
(statearr_30388_30409[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30410 = state_30360;
state_30360 = G__30410;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_30360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_30360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___30394,out))
})();
var state__27714__auto__ = (function (){var statearr_30389 = f__27713__auto__.call(null);
(statearr_30389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___30394);

return statearr_30389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___30394,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30411 = [];
var len__25923__auto___30485 = arguments.length;
var i__25924__auto___30486 = (0);
while(true){
if((i__25924__auto___30486 < len__25923__auto___30485)){
args30411.push((arguments[i__25924__auto___30486]));

var G__30487 = (i__25924__auto___30486 + (1));
i__25924__auto___30486 = G__30487;
continue;
} else {
}
break;
}

var G__30413 = args30411.length;
switch (G__30413) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30411.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27712__auto___30489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27712__auto___30489,out){
return (function (){
var f__27713__auto__ = (function (){var switch__27600__auto__ = ((function (c__27712__auto___30489,out){
return (function (state_30455){
var state_val_30456 = (state_30455[(1)]);
if((state_val_30456 === (7))){
var inst_30451 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
var statearr_30457_30490 = state_30455__$1;
(statearr_30457_30490[(2)] = inst_30451);

(statearr_30457_30490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (1))){
var inst_30414 = [];
var inst_30415 = inst_30414;
var inst_30416 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30455__$1 = (function (){var statearr_30458 = state_30455;
(statearr_30458[(7)] = inst_30416);

(statearr_30458[(8)] = inst_30415);

return statearr_30458;
})();
var statearr_30459_30491 = state_30455__$1;
(statearr_30459_30491[(2)] = null);

(statearr_30459_30491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (4))){
var inst_30419 = (state_30455[(9)]);
var inst_30419__$1 = (state_30455[(2)]);
var inst_30420 = (inst_30419__$1 == null);
var inst_30421 = cljs.core.not.call(null,inst_30420);
var state_30455__$1 = (function (){var statearr_30460 = state_30455;
(statearr_30460[(9)] = inst_30419__$1);

return statearr_30460;
})();
if(inst_30421){
var statearr_30461_30492 = state_30455__$1;
(statearr_30461_30492[(1)] = (5));

} else {
var statearr_30462_30493 = state_30455__$1;
(statearr_30462_30493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (15))){
var inst_30445 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
var statearr_30463_30494 = state_30455__$1;
(statearr_30463_30494[(2)] = inst_30445);

(statearr_30463_30494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (13))){
var state_30455__$1 = state_30455;
var statearr_30464_30495 = state_30455__$1;
(statearr_30464_30495[(2)] = null);

(statearr_30464_30495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (6))){
var inst_30415 = (state_30455[(8)]);
var inst_30440 = inst_30415.length;
var inst_30441 = (inst_30440 > (0));
var state_30455__$1 = state_30455;
if(cljs.core.truth_(inst_30441)){
var statearr_30465_30496 = state_30455__$1;
(statearr_30465_30496[(1)] = (12));

} else {
var statearr_30466_30497 = state_30455__$1;
(statearr_30466_30497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (3))){
var inst_30453 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30455__$1,inst_30453);
} else {
if((state_val_30456 === (12))){
var inst_30415 = (state_30455[(8)]);
var inst_30443 = cljs.core.vec.call(null,inst_30415);
var state_30455__$1 = state_30455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30455__$1,(15),out,inst_30443);
} else {
if((state_val_30456 === (2))){
var state_30455__$1 = state_30455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30455__$1,(4),ch);
} else {
if((state_val_30456 === (11))){
var inst_30423 = (state_30455[(10)]);
var inst_30419 = (state_30455[(9)]);
var inst_30433 = (state_30455[(2)]);
var inst_30434 = [];
var inst_30435 = inst_30434.push(inst_30419);
var inst_30415 = inst_30434;
var inst_30416 = inst_30423;
var state_30455__$1 = (function (){var statearr_30467 = state_30455;
(statearr_30467[(7)] = inst_30416);

(statearr_30467[(11)] = inst_30435);

(statearr_30467[(8)] = inst_30415);

(statearr_30467[(12)] = inst_30433);

return statearr_30467;
})();
var statearr_30468_30498 = state_30455__$1;
(statearr_30468_30498[(2)] = null);

(statearr_30468_30498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (9))){
var inst_30415 = (state_30455[(8)]);
var inst_30431 = cljs.core.vec.call(null,inst_30415);
var state_30455__$1 = state_30455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30455__$1,(11),out,inst_30431);
} else {
if((state_val_30456 === (5))){
var inst_30416 = (state_30455[(7)]);
var inst_30423 = (state_30455[(10)]);
var inst_30419 = (state_30455[(9)]);
var inst_30423__$1 = f.call(null,inst_30419);
var inst_30424 = cljs.core._EQ_.call(null,inst_30423__$1,inst_30416);
var inst_30425 = cljs.core.keyword_identical_QMARK_.call(null,inst_30416,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30426 = (inst_30424) || (inst_30425);
var state_30455__$1 = (function (){var statearr_30469 = state_30455;
(statearr_30469[(10)] = inst_30423__$1);

return statearr_30469;
})();
if(cljs.core.truth_(inst_30426)){
var statearr_30470_30499 = state_30455__$1;
(statearr_30470_30499[(1)] = (8));

} else {
var statearr_30471_30500 = state_30455__$1;
(statearr_30471_30500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (14))){
var inst_30448 = (state_30455[(2)]);
var inst_30449 = cljs.core.async.close_BANG_.call(null,out);
var state_30455__$1 = (function (){var statearr_30473 = state_30455;
(statearr_30473[(13)] = inst_30448);

return statearr_30473;
})();
var statearr_30474_30501 = state_30455__$1;
(statearr_30474_30501[(2)] = inst_30449);

(statearr_30474_30501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (10))){
var inst_30438 = (state_30455[(2)]);
var state_30455__$1 = state_30455;
var statearr_30475_30502 = state_30455__$1;
(statearr_30475_30502[(2)] = inst_30438);

(statearr_30475_30502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30456 === (8))){
var inst_30423 = (state_30455[(10)]);
var inst_30419 = (state_30455[(9)]);
var inst_30415 = (state_30455[(8)]);
var inst_30428 = inst_30415.push(inst_30419);
var tmp30472 = inst_30415;
var inst_30415__$1 = tmp30472;
var inst_30416 = inst_30423;
var state_30455__$1 = (function (){var statearr_30476 = state_30455;
(statearr_30476[(7)] = inst_30416);

(statearr_30476[(14)] = inst_30428);

(statearr_30476[(8)] = inst_30415__$1);

return statearr_30476;
})();
var statearr_30477_30503 = state_30455__$1;
(statearr_30477_30503[(2)] = null);

(statearr_30477_30503[(1)] = (2));


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
});})(c__27712__auto___30489,out))
;
return ((function (switch__27600__auto__,c__27712__auto___30489,out){
return (function() {
var cljs$core$async$state_machine__27601__auto__ = null;
var cljs$core$async$state_machine__27601__auto____0 = (function (){
var statearr_30481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30481[(0)] = cljs$core$async$state_machine__27601__auto__);

(statearr_30481[(1)] = (1));

return statearr_30481;
});
var cljs$core$async$state_machine__27601__auto____1 = (function (state_30455){
while(true){
var ret_value__27602__auto__ = (function (){try{while(true){
var result__27603__auto__ = switch__27600__auto__.call(null,state_30455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27603__auto__;
}
break;
}
}catch (e30482){if((e30482 instanceof Object)){
var ex__27604__auto__ = e30482;
var statearr_30483_30504 = state_30455;
(statearr_30483_30504[(5)] = ex__27604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30505 = state_30455;
state_30455 = G__30505;
continue;
} else {
return ret_value__27602__auto__;
}
break;
}
});
cljs$core$async$state_machine__27601__auto__ = function(state_30455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27601__auto____1.call(this,state_30455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27601__auto____0;
cljs$core$async$state_machine__27601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27601__auto____1;
return cljs$core$async$state_machine__27601__auto__;
})()
;})(switch__27600__auto__,c__27712__auto___30489,out))
})();
var state__27714__auto__ = (function (){var statearr_30484 = f__27713__auto__.call(null);
(statearr_30484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27712__auto___30489);

return statearr_30484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27714__auto__);
});})(c__27712__auto___30489,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491541641847