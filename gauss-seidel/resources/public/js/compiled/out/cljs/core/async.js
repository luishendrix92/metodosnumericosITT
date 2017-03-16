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
var args27821 = [];
var len__25923__auto___27827 = arguments.length;
var i__25924__auto___27828 = (0);
while(true){
if((i__25924__auto___27828 < len__25923__auto___27827)){
args27821.push((arguments[i__25924__auto___27828]));

var G__27829 = (i__25924__auto___27828 + (1));
i__25924__auto___27828 = G__27829;
continue;
} else {
}
break;
}

var G__27823 = args27821.length;
switch (G__27823) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27821.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27824 = (function (f,blockable,meta27825){
this.f = f;
this.blockable = blockable;
this.meta27825 = meta27825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27826,meta27825__$1){
var self__ = this;
var _27826__$1 = this;
return (new cljs.core.async.t_cljs$core$async27824(self__.f,self__.blockable,meta27825__$1));
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27826){
var self__ = this;
var _27826__$1 = this;
return self__.meta27825;
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27825","meta27825",1596560720,null)], null);
});

cljs.core.async.t_cljs$core$async27824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27824";

cljs.core.async.t_cljs$core$async27824.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27824");
});

cljs.core.async.__GT_t_cljs$core$async27824 = (function cljs$core$async$__GT_t_cljs$core$async27824(f__$1,blockable__$1,meta27825){
return (new cljs.core.async.t_cljs$core$async27824(f__$1,blockable__$1,meta27825));
});

}

return (new cljs.core.async.t_cljs$core$async27824(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27833 = [];
var len__25923__auto___27836 = arguments.length;
var i__25924__auto___27837 = (0);
while(true){
if((i__25924__auto___27837 < len__25923__auto___27836)){
args27833.push((arguments[i__25924__auto___27837]));

var G__27838 = (i__25924__auto___27837 + (1));
i__25924__auto___27837 = G__27838;
continue;
} else {
}
break;
}

var G__27835 = args27833.length;
switch (G__27835) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27833.length)].join('')));

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
var args27840 = [];
var len__25923__auto___27843 = arguments.length;
var i__25924__auto___27844 = (0);
while(true){
if((i__25924__auto___27844 < len__25923__auto___27843)){
args27840.push((arguments[i__25924__auto___27844]));

var G__27845 = (i__25924__auto___27844 + (1));
i__25924__auto___27844 = G__27845;
continue;
} else {
}
break;
}

var G__27842 = args27840.length;
switch (G__27842) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27840.length)].join('')));

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
var args27847 = [];
var len__25923__auto___27850 = arguments.length;
var i__25924__auto___27851 = (0);
while(true){
if((i__25924__auto___27851 < len__25923__auto___27850)){
args27847.push((arguments[i__25924__auto___27851]));

var G__27852 = (i__25924__auto___27851 + (1));
i__25924__auto___27851 = G__27852;
continue;
} else {
}
break;
}

var G__27849 = args27847.length;
switch (G__27849) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27847.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27854 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27854);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27854,ret){
return (function (){
return fn1.call(null,val_27854);
});})(val_27854,ret))
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
var args27855 = [];
var len__25923__auto___27858 = arguments.length;
var i__25924__auto___27859 = (0);
while(true){
if((i__25924__auto___27859 < len__25923__auto___27858)){
args27855.push((arguments[i__25924__auto___27859]));

var G__27860 = (i__25924__auto___27859 + (1));
i__25924__auto___27859 = G__27860;
continue;
} else {
}
break;
}

var G__27857 = args27855.length;
switch (G__27857) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27855.length)].join('')));

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
var n__25763__auto___27862 = n;
var x_27863 = (0);
while(true){
if((x_27863 < n__25763__auto___27862)){
(a[x_27863] = (0));

var G__27864 = (x_27863 + (1));
x_27863 = G__27864;
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

var G__27865 = (i + (1));
i = G__27865;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27869 = (function (alt_flag,flag,meta27870){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27870 = meta27870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27871,meta27870__$1){
var self__ = this;
var _27871__$1 = this;
return (new cljs.core.async.t_cljs$core$async27869(self__.alt_flag,self__.flag,meta27870__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27871){
var self__ = this;
var _27871__$1 = this;
return self__.meta27870;
});})(flag))
;

cljs.core.async.t_cljs$core$async27869.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27869.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27870","meta27870",589443822,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27869";

cljs.core.async.t_cljs$core$async27869.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27869");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27869 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27869(alt_flag__$1,flag__$1,meta27870){
return (new cljs.core.async.t_cljs$core$async27869(alt_flag__$1,flag__$1,meta27870));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27869(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27875 = (function (alt_handler,flag,cb,meta27876){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27876 = meta27876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27877,meta27876__$1){
var self__ = this;
var _27877__$1 = this;
return (new cljs.core.async.t_cljs$core$async27875(self__.alt_handler,self__.flag,self__.cb,meta27876__$1));
});

cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27877){
var self__ = this;
var _27877__$1 = this;
return self__.meta27876;
});

cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27876","meta27876",-1543441497,null)], null);
});

cljs.core.async.t_cljs$core$async27875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27875";

cljs.core.async.t_cljs$core$async27875.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27875");
});

cljs.core.async.__GT_t_cljs$core$async27875 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27875(alt_handler__$1,flag__$1,cb__$1,meta27876){
return (new cljs.core.async.t_cljs$core$async27875(alt_handler__$1,flag__$1,cb__$1,meta27876));
});

}

return (new cljs.core.async.t_cljs$core$async27875(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27878_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27878_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27879_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27879_SHARP_,port], null));
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
var G__27880 = (i + (1));
i = G__27880;
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
var len__25923__auto___27886 = arguments.length;
var i__25924__auto___27887 = (0);
while(true){
if((i__25924__auto___27887 < len__25923__auto___27886)){
args__25930__auto__.push((arguments[i__25924__auto___27887]));

var G__27888 = (i__25924__auto___27887 + (1));
i__25924__auto___27887 = G__27888;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27883){
var map__27884 = p__27883;
var map__27884__$1 = ((((!((map__27884 == null)))?((((map__27884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27884):map__27884);
var opts = map__27884__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27881){
var G__27882 = cljs.core.first.call(null,seq27881);
var seq27881__$1 = cljs.core.next.call(null,seq27881);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27882,seq27881__$1);
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
var args27889 = [];
var len__25923__auto___27939 = arguments.length;
var i__25924__auto___27940 = (0);
while(true){
if((i__25924__auto___27940 < len__25923__auto___27939)){
args27889.push((arguments[i__25924__auto___27940]));

var G__27941 = (i__25924__auto___27940 + (1));
i__25924__auto___27940 = G__27941;
continue;
} else {
}
break;
}

var G__27891 = args27889.length;
switch (G__27891) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27889.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27776__auto___27943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___27943){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___27943){
return (function (state_27915){
var state_val_27916 = (state_27915[(1)]);
if((state_val_27916 === (7))){
var inst_27911 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
var statearr_27917_27944 = state_27915__$1;
(statearr_27917_27944[(2)] = inst_27911);

(statearr_27917_27944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (1))){
var state_27915__$1 = state_27915;
var statearr_27918_27945 = state_27915__$1;
(statearr_27918_27945[(2)] = null);

(statearr_27918_27945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (4))){
var inst_27894 = (state_27915[(7)]);
var inst_27894__$1 = (state_27915[(2)]);
var inst_27895 = (inst_27894__$1 == null);
var state_27915__$1 = (function (){var statearr_27919 = state_27915;
(statearr_27919[(7)] = inst_27894__$1);

return statearr_27919;
})();
if(cljs.core.truth_(inst_27895)){
var statearr_27920_27946 = state_27915__$1;
(statearr_27920_27946[(1)] = (5));

} else {
var statearr_27921_27947 = state_27915__$1;
(statearr_27921_27947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (13))){
var state_27915__$1 = state_27915;
var statearr_27922_27948 = state_27915__$1;
(statearr_27922_27948[(2)] = null);

(statearr_27922_27948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (6))){
var inst_27894 = (state_27915[(7)]);
var state_27915__$1 = state_27915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27915__$1,(11),to,inst_27894);
} else {
if((state_val_27916 === (3))){
var inst_27913 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27915__$1,inst_27913);
} else {
if((state_val_27916 === (12))){
var state_27915__$1 = state_27915;
var statearr_27923_27949 = state_27915__$1;
(statearr_27923_27949[(2)] = null);

(statearr_27923_27949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (2))){
var state_27915__$1 = state_27915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27915__$1,(4),from);
} else {
if((state_val_27916 === (11))){
var inst_27904 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
if(cljs.core.truth_(inst_27904)){
var statearr_27924_27950 = state_27915__$1;
(statearr_27924_27950[(1)] = (12));

} else {
var statearr_27925_27951 = state_27915__$1;
(statearr_27925_27951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (9))){
var state_27915__$1 = state_27915;
var statearr_27926_27952 = state_27915__$1;
(statearr_27926_27952[(2)] = null);

(statearr_27926_27952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (5))){
var state_27915__$1 = state_27915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27927_27953 = state_27915__$1;
(statearr_27927_27953[(1)] = (8));

} else {
var statearr_27928_27954 = state_27915__$1;
(statearr_27928_27954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (14))){
var inst_27909 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
var statearr_27929_27955 = state_27915__$1;
(statearr_27929_27955[(2)] = inst_27909);

(statearr_27929_27955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (10))){
var inst_27901 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
var statearr_27930_27956 = state_27915__$1;
(statearr_27930_27956[(2)] = inst_27901);

(statearr_27930_27956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (8))){
var inst_27898 = cljs.core.async.close_BANG_.call(null,to);
var state_27915__$1 = state_27915;
var statearr_27931_27957 = state_27915__$1;
(statearr_27931_27957[(2)] = inst_27898);

(statearr_27931_27957[(1)] = (10));


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
});})(c__27776__auto___27943))
;
return ((function (switch__27664__auto__,c__27776__auto___27943){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_27935 = [null,null,null,null,null,null,null,null];
(statearr_27935[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_27935[(1)] = (1));

return statearr_27935;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_27915){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_27915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e27936){if((e27936 instanceof Object)){
var ex__27668__auto__ = e27936;
var statearr_27937_27958 = state_27915;
(statearr_27937_27958[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27959 = state_27915;
state_27915 = G__27959;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_27915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_27915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___27943))
})();
var state__27778__auto__ = (function (){var statearr_27938 = f__27777__auto__.call(null);
(statearr_27938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___27943);

return statearr_27938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___27943))
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
return (function (p__28147){
var vec__28148 = p__28147;
var v = cljs.core.nth.call(null,vec__28148,(0),null);
var p = cljs.core.nth.call(null,vec__28148,(1),null);
var job = vec__28148;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27776__auto___28334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___28334,res,vec__28148,v,p,job,jobs,results){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___28334,res,vec__28148,v,p,job,jobs,results){
return (function (state_28155){
var state_val_28156 = (state_28155[(1)]);
if((state_val_28156 === (1))){
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28155__$1,(2),res,v);
} else {
if((state_val_28156 === (2))){
var inst_28152 = (state_28155[(2)]);
var inst_28153 = cljs.core.async.close_BANG_.call(null,res);
var state_28155__$1 = (function (){var statearr_28157 = state_28155;
(statearr_28157[(7)] = inst_28152);

return statearr_28157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28155__$1,inst_28153);
} else {
return null;
}
}
});})(c__27776__auto___28334,res,vec__28148,v,p,job,jobs,results))
;
return ((function (switch__27664__auto__,c__27776__auto___28334,res,vec__28148,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0 = (function (){
var statearr_28161 = [null,null,null,null,null,null,null,null];
(statearr_28161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__);

(statearr_28161[(1)] = (1));

return statearr_28161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1 = (function (state_28155){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object)){
var ex__27668__auto__ = e28162;
var statearr_28163_28335 = state_28155;
(statearr_28163_28335[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28336 = state_28155;
state_28155 = G__28336;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = function(state_28155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1.call(this,state_28155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___28334,res,vec__28148,v,p,job,jobs,results))
})();
var state__27778__auto__ = (function (){var statearr_28164 = f__27777__auto__.call(null);
(statearr_28164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___28334);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___28334,res,vec__28148,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28165){
var vec__28166 = p__28165;
var v = cljs.core.nth.call(null,vec__28166,(0),null);
var p = cljs.core.nth.call(null,vec__28166,(1),null);
var job = vec__28166;
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
var n__25763__auto___28337 = n;
var __28338 = (0);
while(true){
if((__28338 < n__25763__auto___28337)){
var G__28169_28339 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28169_28339) {
case "compute":
var c__27776__auto___28341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28338,c__27776__auto___28341,G__28169_28339,n__25763__auto___28337,jobs,results,process,async){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (__28338,c__27776__auto___28341,G__28169_28339,n__25763__auto___28337,jobs,results,process,async){
return (function (state_28182){
var state_val_28183 = (state_28182[(1)]);
if((state_val_28183 === (1))){
var state_28182__$1 = state_28182;
var statearr_28184_28342 = state_28182__$1;
(statearr_28184_28342[(2)] = null);

(statearr_28184_28342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (2))){
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28182__$1,(4),jobs);
} else {
if((state_val_28183 === (3))){
var inst_28180 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28182__$1,inst_28180);
} else {
if((state_val_28183 === (4))){
var inst_28172 = (state_28182[(2)]);
var inst_28173 = process.call(null,inst_28172);
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28173)){
var statearr_28185_28343 = state_28182__$1;
(statearr_28185_28343[(1)] = (5));

} else {
var statearr_28186_28344 = state_28182__$1;
(statearr_28186_28344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (5))){
var state_28182__$1 = state_28182;
var statearr_28187_28345 = state_28182__$1;
(statearr_28187_28345[(2)] = null);

(statearr_28187_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (6))){
var state_28182__$1 = state_28182;
var statearr_28188_28346 = state_28182__$1;
(statearr_28188_28346[(2)] = null);

(statearr_28188_28346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (7))){
var inst_28178 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28189_28347 = state_28182__$1;
(statearr_28189_28347[(2)] = inst_28178);

(statearr_28189_28347[(1)] = (3));


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
});})(__28338,c__27776__auto___28341,G__28169_28339,n__25763__auto___28337,jobs,results,process,async))
;
return ((function (__28338,switch__27664__auto__,c__27776__auto___28341,G__28169_28339,n__25763__auto___28337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0 = (function (){
var statearr_28193 = [null,null,null,null,null,null,null];
(statearr_28193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__);

(statearr_28193[(1)] = (1));

return statearr_28193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1 = (function (state_28182){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28194){if((e28194 instanceof Object)){
var ex__27668__auto__ = e28194;
var statearr_28195_28348 = state_28182;
(statearr_28195_28348[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28349 = state_28182;
state_28182 = G__28349;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = function(state_28182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1.call(this,state_28182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__;
})()
;})(__28338,switch__27664__auto__,c__27776__auto___28341,G__28169_28339,n__25763__auto___28337,jobs,results,process,async))
})();
var state__27778__auto__ = (function (){var statearr_28196 = f__27777__auto__.call(null);
(statearr_28196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___28341);

return statearr_28196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(__28338,c__27776__auto___28341,G__28169_28339,n__25763__auto___28337,jobs,results,process,async))
);


break;
case "async":
var c__27776__auto___28350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28338,c__27776__auto___28350,G__28169_28339,n__25763__auto___28337,jobs,results,process,async){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (__28338,c__27776__auto___28350,G__28169_28339,n__25763__auto___28337,jobs,results,process,async){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (1))){
var state_28209__$1 = state_28209;
var statearr_28211_28351 = state_28209__$1;
(statearr_28211_28351[(2)] = null);

(statearr_28211_28351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (2))){
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28209__$1,(4),jobs);
} else {
if((state_val_28210 === (3))){
var inst_28207 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (4))){
var inst_28199 = (state_28209[(2)]);
var inst_28200 = async.call(null,inst_28199);
var state_28209__$1 = state_28209;
if(cljs.core.truth_(inst_28200)){
var statearr_28212_28352 = state_28209__$1;
(statearr_28212_28352[(1)] = (5));

} else {
var statearr_28213_28353 = state_28209__$1;
(statearr_28213_28353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (5))){
var state_28209__$1 = state_28209;
var statearr_28214_28354 = state_28209__$1;
(statearr_28214_28354[(2)] = null);

(statearr_28214_28354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (6))){
var state_28209__$1 = state_28209;
var statearr_28215_28355 = state_28209__$1;
(statearr_28215_28355[(2)] = null);

(statearr_28215_28355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (7))){
var inst_28205 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28216_28356 = state_28209__$1;
(statearr_28216_28356[(2)] = inst_28205);

(statearr_28216_28356[(1)] = (3));


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
});})(__28338,c__27776__auto___28350,G__28169_28339,n__25763__auto___28337,jobs,results,process,async))
;
return ((function (__28338,switch__27664__auto__,c__27776__auto___28350,G__28169_28339,n__25763__auto___28337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0 = (function (){
var statearr_28220 = [null,null,null,null,null,null,null];
(statearr_28220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__);

(statearr_28220[(1)] = (1));

return statearr_28220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1 = (function (state_28209){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28221){if((e28221 instanceof Object)){
var ex__27668__auto__ = e28221;
var statearr_28222_28357 = state_28209;
(statearr_28222_28357[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28358 = state_28209;
state_28209 = G__28358;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__;
})()
;})(__28338,switch__27664__auto__,c__27776__auto___28350,G__28169_28339,n__25763__auto___28337,jobs,results,process,async))
})();
var state__27778__auto__ = (function (){var statearr_28223 = f__27777__auto__.call(null);
(statearr_28223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___28350);

return statearr_28223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(__28338,c__27776__auto___28350,G__28169_28339,n__25763__auto___28337,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28359 = (__28338 + (1));
__28338 = G__28359;
continue;
} else {
}
break;
}

var c__27776__auto___28360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___28360,jobs,results,process,async){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___28360,jobs,results,process,async){
return (function (state_28245){
var state_val_28246 = (state_28245[(1)]);
if((state_val_28246 === (1))){
var state_28245__$1 = state_28245;
var statearr_28247_28361 = state_28245__$1;
(statearr_28247_28361[(2)] = null);

(statearr_28247_28361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (2))){
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28245__$1,(4),from);
} else {
if((state_val_28246 === (3))){
var inst_28243 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28245__$1,inst_28243);
} else {
if((state_val_28246 === (4))){
var inst_28226 = (state_28245[(7)]);
var inst_28226__$1 = (state_28245[(2)]);
var inst_28227 = (inst_28226__$1 == null);
var state_28245__$1 = (function (){var statearr_28248 = state_28245;
(statearr_28248[(7)] = inst_28226__$1);

return statearr_28248;
})();
if(cljs.core.truth_(inst_28227)){
var statearr_28249_28362 = state_28245__$1;
(statearr_28249_28362[(1)] = (5));

} else {
var statearr_28250_28363 = state_28245__$1;
(statearr_28250_28363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (5))){
var inst_28229 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28245__$1 = state_28245;
var statearr_28251_28364 = state_28245__$1;
(statearr_28251_28364[(2)] = inst_28229);

(statearr_28251_28364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (6))){
var inst_28226 = (state_28245[(7)]);
var inst_28231 = (state_28245[(8)]);
var inst_28231__$1 = cljs.core.async.chan.call(null,(1));
var inst_28232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28233 = [inst_28226,inst_28231__$1];
var inst_28234 = (new cljs.core.PersistentVector(null,2,(5),inst_28232,inst_28233,null));
var state_28245__$1 = (function (){var statearr_28252 = state_28245;
(statearr_28252[(8)] = inst_28231__$1);

return statearr_28252;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28245__$1,(8),jobs,inst_28234);
} else {
if((state_val_28246 === (7))){
var inst_28241 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28253_28365 = state_28245__$1;
(statearr_28253_28365[(2)] = inst_28241);

(statearr_28253_28365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (8))){
var inst_28231 = (state_28245[(8)]);
var inst_28236 = (state_28245[(2)]);
var state_28245__$1 = (function (){var statearr_28254 = state_28245;
(statearr_28254[(9)] = inst_28236);

return statearr_28254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28245__$1,(9),results,inst_28231);
} else {
if((state_val_28246 === (9))){
var inst_28238 = (state_28245[(2)]);
var state_28245__$1 = (function (){var statearr_28255 = state_28245;
(statearr_28255[(10)] = inst_28238);

return statearr_28255;
})();
var statearr_28256_28366 = state_28245__$1;
(statearr_28256_28366[(2)] = null);

(statearr_28256_28366[(1)] = (2));


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
});})(c__27776__auto___28360,jobs,results,process,async))
;
return ((function (switch__27664__auto__,c__27776__auto___28360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0 = (function (){
var statearr_28260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__);

(statearr_28260[(1)] = (1));

return statearr_28260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1 = (function (state_28245){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28261){if((e28261 instanceof Object)){
var ex__27668__auto__ = e28261;
var statearr_28262_28367 = state_28245;
(statearr_28262_28367[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28368 = state_28245;
state_28245 = G__28368;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = function(state_28245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1.call(this,state_28245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___28360,jobs,results,process,async))
})();
var state__27778__auto__ = (function (){var statearr_28263 = f__27777__auto__.call(null);
(statearr_28263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___28360);

return statearr_28263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___28360,jobs,results,process,async))
);


var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__,jobs,results,process,async){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__,jobs,results,process,async){
return (function (state_28301){
var state_val_28302 = (state_28301[(1)]);
if((state_val_28302 === (7))){
var inst_28297 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
var statearr_28303_28369 = state_28301__$1;
(statearr_28303_28369[(2)] = inst_28297);

(statearr_28303_28369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (20))){
var state_28301__$1 = state_28301;
var statearr_28304_28370 = state_28301__$1;
(statearr_28304_28370[(2)] = null);

(statearr_28304_28370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (1))){
var state_28301__$1 = state_28301;
var statearr_28305_28371 = state_28301__$1;
(statearr_28305_28371[(2)] = null);

(statearr_28305_28371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (4))){
var inst_28266 = (state_28301[(7)]);
var inst_28266__$1 = (state_28301[(2)]);
var inst_28267 = (inst_28266__$1 == null);
var state_28301__$1 = (function (){var statearr_28306 = state_28301;
(statearr_28306[(7)] = inst_28266__$1);

return statearr_28306;
})();
if(cljs.core.truth_(inst_28267)){
var statearr_28307_28372 = state_28301__$1;
(statearr_28307_28372[(1)] = (5));

} else {
var statearr_28308_28373 = state_28301__$1;
(statearr_28308_28373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (15))){
var inst_28279 = (state_28301[(8)]);
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28301__$1,(18),to,inst_28279);
} else {
if((state_val_28302 === (21))){
var inst_28292 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
var statearr_28309_28374 = state_28301__$1;
(statearr_28309_28374[(2)] = inst_28292);

(statearr_28309_28374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (13))){
var inst_28294 = (state_28301[(2)]);
var state_28301__$1 = (function (){var statearr_28310 = state_28301;
(statearr_28310[(9)] = inst_28294);

return statearr_28310;
})();
var statearr_28311_28375 = state_28301__$1;
(statearr_28311_28375[(2)] = null);

(statearr_28311_28375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (6))){
var inst_28266 = (state_28301[(7)]);
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28301__$1,(11),inst_28266);
} else {
if((state_val_28302 === (17))){
var inst_28287 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
if(cljs.core.truth_(inst_28287)){
var statearr_28312_28376 = state_28301__$1;
(statearr_28312_28376[(1)] = (19));

} else {
var statearr_28313_28377 = state_28301__$1;
(statearr_28313_28377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (3))){
var inst_28299 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28301__$1,inst_28299);
} else {
if((state_val_28302 === (12))){
var inst_28276 = (state_28301[(10)]);
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28301__$1,(14),inst_28276);
} else {
if((state_val_28302 === (2))){
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28301__$1,(4),results);
} else {
if((state_val_28302 === (19))){
var state_28301__$1 = state_28301;
var statearr_28314_28378 = state_28301__$1;
(statearr_28314_28378[(2)] = null);

(statearr_28314_28378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (11))){
var inst_28276 = (state_28301[(2)]);
var state_28301__$1 = (function (){var statearr_28315 = state_28301;
(statearr_28315[(10)] = inst_28276);

return statearr_28315;
})();
var statearr_28316_28379 = state_28301__$1;
(statearr_28316_28379[(2)] = null);

(statearr_28316_28379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (9))){
var state_28301__$1 = state_28301;
var statearr_28317_28380 = state_28301__$1;
(statearr_28317_28380[(2)] = null);

(statearr_28317_28380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (5))){
var state_28301__$1 = state_28301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28318_28381 = state_28301__$1;
(statearr_28318_28381[(1)] = (8));

} else {
var statearr_28319_28382 = state_28301__$1;
(statearr_28319_28382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (14))){
var inst_28279 = (state_28301[(8)]);
var inst_28281 = (state_28301[(11)]);
var inst_28279__$1 = (state_28301[(2)]);
var inst_28280 = (inst_28279__$1 == null);
var inst_28281__$1 = cljs.core.not.call(null,inst_28280);
var state_28301__$1 = (function (){var statearr_28320 = state_28301;
(statearr_28320[(8)] = inst_28279__$1);

(statearr_28320[(11)] = inst_28281__$1);

return statearr_28320;
})();
if(inst_28281__$1){
var statearr_28321_28383 = state_28301__$1;
(statearr_28321_28383[(1)] = (15));

} else {
var statearr_28322_28384 = state_28301__$1;
(statearr_28322_28384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (16))){
var inst_28281 = (state_28301[(11)]);
var state_28301__$1 = state_28301;
var statearr_28323_28385 = state_28301__$1;
(statearr_28323_28385[(2)] = inst_28281);

(statearr_28323_28385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (10))){
var inst_28273 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
var statearr_28324_28386 = state_28301__$1;
(statearr_28324_28386[(2)] = inst_28273);

(statearr_28324_28386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (18))){
var inst_28284 = (state_28301[(2)]);
var state_28301__$1 = state_28301;
var statearr_28325_28387 = state_28301__$1;
(statearr_28325_28387[(2)] = inst_28284);

(statearr_28325_28387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28302 === (8))){
var inst_28270 = cljs.core.async.close_BANG_.call(null,to);
var state_28301__$1 = state_28301;
var statearr_28326_28388 = state_28301__$1;
(statearr_28326_28388[(2)] = inst_28270);

(statearr_28326_28388[(1)] = (10));


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
});})(c__27776__auto__,jobs,results,process,async))
;
return ((function (switch__27664__auto__,c__27776__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1 = (function (state_28301){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object)){
var ex__27668__auto__ = e28331;
var statearr_28332_28389 = state_28301;
(statearr_28332_28389[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28390 = state_28301;
state_28301 = G__28390;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__ = function(state_28301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1.call(this,state_28301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__,jobs,results,process,async))
})();
var state__27778__auto__ = (function (){var statearr_28333 = f__27777__auto__.call(null);
(statearr_28333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__,jobs,results,process,async))
);

return c__27776__auto__;
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
var args28391 = [];
var len__25923__auto___28394 = arguments.length;
var i__25924__auto___28395 = (0);
while(true){
if((i__25924__auto___28395 < len__25923__auto___28394)){
args28391.push((arguments[i__25924__auto___28395]));

var G__28396 = (i__25924__auto___28395 + (1));
i__25924__auto___28395 = G__28396;
continue;
} else {
}
break;
}

var G__28393 = args28391.length;
switch (G__28393) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28391.length)].join('')));

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
var args28398 = [];
var len__25923__auto___28401 = arguments.length;
var i__25924__auto___28402 = (0);
while(true){
if((i__25924__auto___28402 < len__25923__auto___28401)){
args28398.push((arguments[i__25924__auto___28402]));

var G__28403 = (i__25924__auto___28402 + (1));
i__25924__auto___28402 = G__28403;
continue;
} else {
}
break;
}

var G__28400 = args28398.length;
switch (G__28400) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28398.length)].join('')));

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
var args28405 = [];
var len__25923__auto___28458 = arguments.length;
var i__25924__auto___28459 = (0);
while(true){
if((i__25924__auto___28459 < len__25923__auto___28458)){
args28405.push((arguments[i__25924__auto___28459]));

var G__28460 = (i__25924__auto___28459 + (1));
i__25924__auto___28459 = G__28460;
continue;
} else {
}
break;
}

var G__28407 = args28405.length;
switch (G__28407) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28405.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27776__auto___28462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___28462,tc,fc){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___28462,tc,fc){
return (function (state_28433){
var state_val_28434 = (state_28433[(1)]);
if((state_val_28434 === (7))){
var inst_28429 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
var statearr_28435_28463 = state_28433__$1;
(statearr_28435_28463[(2)] = inst_28429);

(statearr_28435_28463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (1))){
var state_28433__$1 = state_28433;
var statearr_28436_28464 = state_28433__$1;
(statearr_28436_28464[(2)] = null);

(statearr_28436_28464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (4))){
var inst_28410 = (state_28433[(7)]);
var inst_28410__$1 = (state_28433[(2)]);
var inst_28411 = (inst_28410__$1 == null);
var state_28433__$1 = (function (){var statearr_28437 = state_28433;
(statearr_28437[(7)] = inst_28410__$1);

return statearr_28437;
})();
if(cljs.core.truth_(inst_28411)){
var statearr_28438_28465 = state_28433__$1;
(statearr_28438_28465[(1)] = (5));

} else {
var statearr_28439_28466 = state_28433__$1;
(statearr_28439_28466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (13))){
var state_28433__$1 = state_28433;
var statearr_28440_28467 = state_28433__$1;
(statearr_28440_28467[(2)] = null);

(statearr_28440_28467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (6))){
var inst_28410 = (state_28433[(7)]);
var inst_28416 = p.call(null,inst_28410);
var state_28433__$1 = state_28433;
if(cljs.core.truth_(inst_28416)){
var statearr_28441_28468 = state_28433__$1;
(statearr_28441_28468[(1)] = (9));

} else {
var statearr_28442_28469 = state_28433__$1;
(statearr_28442_28469[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (3))){
var inst_28431 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28433__$1,inst_28431);
} else {
if((state_val_28434 === (12))){
var state_28433__$1 = state_28433;
var statearr_28443_28470 = state_28433__$1;
(statearr_28443_28470[(2)] = null);

(statearr_28443_28470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (2))){
var state_28433__$1 = state_28433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28433__$1,(4),ch);
} else {
if((state_val_28434 === (11))){
var inst_28410 = (state_28433[(7)]);
var inst_28420 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28433__$1,(8),inst_28420,inst_28410);
} else {
if((state_val_28434 === (9))){
var state_28433__$1 = state_28433;
var statearr_28444_28471 = state_28433__$1;
(statearr_28444_28471[(2)] = tc);

(statearr_28444_28471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (5))){
var inst_28413 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28414 = cljs.core.async.close_BANG_.call(null,fc);
var state_28433__$1 = (function (){var statearr_28445 = state_28433;
(statearr_28445[(8)] = inst_28413);

return statearr_28445;
})();
var statearr_28446_28472 = state_28433__$1;
(statearr_28446_28472[(2)] = inst_28414);

(statearr_28446_28472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (14))){
var inst_28427 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
var statearr_28447_28473 = state_28433__$1;
(statearr_28447_28473[(2)] = inst_28427);

(statearr_28447_28473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (10))){
var state_28433__$1 = state_28433;
var statearr_28448_28474 = state_28433__$1;
(statearr_28448_28474[(2)] = fc);

(statearr_28448_28474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28434 === (8))){
var inst_28422 = (state_28433[(2)]);
var state_28433__$1 = state_28433;
if(cljs.core.truth_(inst_28422)){
var statearr_28449_28475 = state_28433__$1;
(statearr_28449_28475[(1)] = (12));

} else {
var statearr_28450_28476 = state_28433__$1;
(statearr_28450_28476[(1)] = (13));

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
});})(c__27776__auto___28462,tc,fc))
;
return ((function (switch__27664__auto__,c__27776__auto___28462,tc,fc){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_28454 = [null,null,null,null,null,null,null,null,null];
(statearr_28454[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_28454[(1)] = (1));

return statearr_28454;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_28433){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28455){if((e28455 instanceof Object)){
var ex__27668__auto__ = e28455;
var statearr_28456_28477 = state_28433;
(statearr_28456_28477[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28478 = state_28433;
state_28433 = G__28478;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_28433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_28433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___28462,tc,fc))
})();
var state__27778__auto__ = (function (){var statearr_28457 = f__27777__auto__.call(null);
(statearr_28457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___28462);

return statearr_28457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___28462,tc,fc))
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
var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__){
return (function (state_28542){
var state_val_28543 = (state_28542[(1)]);
if((state_val_28543 === (7))){
var inst_28538 = (state_28542[(2)]);
var state_28542__$1 = state_28542;
var statearr_28544_28565 = state_28542__$1;
(statearr_28544_28565[(2)] = inst_28538);

(statearr_28544_28565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (1))){
var inst_28522 = init;
var state_28542__$1 = (function (){var statearr_28545 = state_28542;
(statearr_28545[(7)] = inst_28522);

return statearr_28545;
})();
var statearr_28546_28566 = state_28542__$1;
(statearr_28546_28566[(2)] = null);

(statearr_28546_28566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (4))){
var inst_28525 = (state_28542[(8)]);
var inst_28525__$1 = (state_28542[(2)]);
var inst_28526 = (inst_28525__$1 == null);
var state_28542__$1 = (function (){var statearr_28547 = state_28542;
(statearr_28547[(8)] = inst_28525__$1);

return statearr_28547;
})();
if(cljs.core.truth_(inst_28526)){
var statearr_28548_28567 = state_28542__$1;
(statearr_28548_28567[(1)] = (5));

} else {
var statearr_28549_28568 = state_28542__$1;
(statearr_28549_28568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (6))){
var inst_28522 = (state_28542[(7)]);
var inst_28529 = (state_28542[(9)]);
var inst_28525 = (state_28542[(8)]);
var inst_28529__$1 = f.call(null,inst_28522,inst_28525);
var inst_28530 = cljs.core.reduced_QMARK_.call(null,inst_28529__$1);
var state_28542__$1 = (function (){var statearr_28550 = state_28542;
(statearr_28550[(9)] = inst_28529__$1);

return statearr_28550;
})();
if(inst_28530){
var statearr_28551_28569 = state_28542__$1;
(statearr_28551_28569[(1)] = (8));

} else {
var statearr_28552_28570 = state_28542__$1;
(statearr_28552_28570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (3))){
var inst_28540 = (state_28542[(2)]);
var state_28542__$1 = state_28542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28542__$1,inst_28540);
} else {
if((state_val_28543 === (2))){
var state_28542__$1 = state_28542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28542__$1,(4),ch);
} else {
if((state_val_28543 === (9))){
var inst_28529 = (state_28542[(9)]);
var inst_28522 = inst_28529;
var state_28542__$1 = (function (){var statearr_28553 = state_28542;
(statearr_28553[(7)] = inst_28522);

return statearr_28553;
})();
var statearr_28554_28571 = state_28542__$1;
(statearr_28554_28571[(2)] = null);

(statearr_28554_28571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (5))){
var inst_28522 = (state_28542[(7)]);
var state_28542__$1 = state_28542;
var statearr_28555_28572 = state_28542__$1;
(statearr_28555_28572[(2)] = inst_28522);

(statearr_28555_28572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (10))){
var inst_28536 = (state_28542[(2)]);
var state_28542__$1 = state_28542;
var statearr_28556_28573 = state_28542__$1;
(statearr_28556_28573[(2)] = inst_28536);

(statearr_28556_28573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (8))){
var inst_28529 = (state_28542[(9)]);
var inst_28532 = cljs.core.deref.call(null,inst_28529);
var state_28542__$1 = state_28542;
var statearr_28557_28574 = state_28542__$1;
(statearr_28557_28574[(2)] = inst_28532);

(statearr_28557_28574[(1)] = (10));


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
});})(c__27776__auto__))
;
return ((function (switch__27664__auto__,c__27776__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27665__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27665__auto____0 = (function (){
var statearr_28561 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28561[(0)] = cljs$core$async$reduce_$_state_machine__27665__auto__);

(statearr_28561[(1)] = (1));

return statearr_28561;
});
var cljs$core$async$reduce_$_state_machine__27665__auto____1 = (function (state_28542){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28562){if((e28562 instanceof Object)){
var ex__27668__auto__ = e28562;
var statearr_28563_28575 = state_28542;
(statearr_28563_28575[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28576 = state_28542;
state_28542 = G__28576;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27665__auto__ = function(state_28542){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27665__auto____1.call(this,state_28542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27665__auto____0;
cljs$core$async$reduce_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27665__auto____1;
return cljs$core$async$reduce_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__))
})();
var state__27778__auto__ = (function (){var statearr_28564 = f__27777__auto__.call(null);
(statearr_28564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__))
);

return c__27776__auto__;
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
var args28577 = [];
var len__25923__auto___28629 = arguments.length;
var i__25924__auto___28630 = (0);
while(true){
if((i__25924__auto___28630 < len__25923__auto___28629)){
args28577.push((arguments[i__25924__auto___28630]));

var G__28631 = (i__25924__auto___28630 + (1));
i__25924__auto___28630 = G__28631;
continue;
} else {
}
break;
}

var G__28579 = args28577.length;
switch (G__28579) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28577.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__){
return (function (state_28604){
var state_val_28605 = (state_28604[(1)]);
if((state_val_28605 === (7))){
var inst_28586 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28606_28633 = state_28604__$1;
(statearr_28606_28633[(2)] = inst_28586);

(statearr_28606_28633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (1))){
var inst_28580 = cljs.core.seq.call(null,coll);
var inst_28581 = inst_28580;
var state_28604__$1 = (function (){var statearr_28607 = state_28604;
(statearr_28607[(7)] = inst_28581);

return statearr_28607;
})();
var statearr_28608_28634 = state_28604__$1;
(statearr_28608_28634[(2)] = null);

(statearr_28608_28634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (4))){
var inst_28581 = (state_28604[(7)]);
var inst_28584 = cljs.core.first.call(null,inst_28581);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28604__$1,(7),ch,inst_28584);
} else {
if((state_val_28605 === (13))){
var inst_28598 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28609_28635 = state_28604__$1;
(statearr_28609_28635[(2)] = inst_28598);

(statearr_28609_28635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (6))){
var inst_28589 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
if(cljs.core.truth_(inst_28589)){
var statearr_28610_28636 = state_28604__$1;
(statearr_28610_28636[(1)] = (8));

} else {
var statearr_28611_28637 = state_28604__$1;
(statearr_28611_28637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (3))){
var inst_28602 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28604__$1,inst_28602);
} else {
if((state_val_28605 === (12))){
var state_28604__$1 = state_28604;
var statearr_28612_28638 = state_28604__$1;
(statearr_28612_28638[(2)] = null);

(statearr_28612_28638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (2))){
var inst_28581 = (state_28604[(7)]);
var state_28604__$1 = state_28604;
if(cljs.core.truth_(inst_28581)){
var statearr_28613_28639 = state_28604__$1;
(statearr_28613_28639[(1)] = (4));

} else {
var statearr_28614_28640 = state_28604__$1;
(statearr_28614_28640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (11))){
var inst_28595 = cljs.core.async.close_BANG_.call(null,ch);
var state_28604__$1 = state_28604;
var statearr_28615_28641 = state_28604__$1;
(statearr_28615_28641[(2)] = inst_28595);

(statearr_28615_28641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (9))){
var state_28604__$1 = state_28604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28616_28642 = state_28604__$1;
(statearr_28616_28642[(1)] = (11));

} else {
var statearr_28617_28643 = state_28604__$1;
(statearr_28617_28643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (5))){
var inst_28581 = (state_28604[(7)]);
var state_28604__$1 = state_28604;
var statearr_28618_28644 = state_28604__$1;
(statearr_28618_28644[(2)] = inst_28581);

(statearr_28618_28644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (10))){
var inst_28600 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28619_28645 = state_28604__$1;
(statearr_28619_28645[(2)] = inst_28600);

(statearr_28619_28645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (8))){
var inst_28581 = (state_28604[(7)]);
var inst_28591 = cljs.core.next.call(null,inst_28581);
var inst_28581__$1 = inst_28591;
var state_28604__$1 = (function (){var statearr_28620 = state_28604;
(statearr_28620[(7)] = inst_28581__$1);

return statearr_28620;
})();
var statearr_28621_28646 = state_28604__$1;
(statearr_28621_28646[(2)] = null);

(statearr_28621_28646[(1)] = (2));


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
});})(c__27776__auto__))
;
return ((function (switch__27664__auto__,c__27776__auto__){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_28625 = [null,null,null,null,null,null,null,null];
(statearr_28625[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_28625[(1)] = (1));

return statearr_28625;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_28604){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_28604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e28626){if((e28626 instanceof Object)){
var ex__27668__auto__ = e28626;
var statearr_28627_28647 = state_28604;
(statearr_28627_28647[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28648 = state_28604;
state_28604 = G__28648;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_28604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_28604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__))
})();
var state__27778__auto__ = (function (){var statearr_28628 = f__27777__auto__.call(null);
(statearr_28628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_28628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__))
);

return c__27776__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28874 = (function (mult,ch,cs,meta28875){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28875 = meta28875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28876,meta28875__$1){
var self__ = this;
var _28876__$1 = this;
return (new cljs.core.async.t_cljs$core$async28874(self__.mult,self__.ch,self__.cs,meta28875__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28876){
var self__ = this;
var _28876__$1 = this;
return self__.meta28875;
});})(cs))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28874.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28874.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28875","meta28875",-67102899,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28874";

cljs.core.async.t_cljs$core$async28874.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28874");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28874 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28874(mult__$1,ch__$1,cs__$1,meta28875){
return (new cljs.core.async.t_cljs$core$async28874(mult__$1,ch__$1,cs__$1,meta28875));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28874(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27776__auto___29099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___29099,cs,m,dchan,dctr,done){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___29099,cs,m,dchan,dctr,done){
return (function (state_29011){
var state_val_29012 = (state_29011[(1)]);
if((state_val_29012 === (7))){
var inst_29007 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29013_29100 = state_29011__$1;
(statearr_29013_29100[(2)] = inst_29007);

(statearr_29013_29100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (20))){
var inst_28910 = (state_29011[(7)]);
var inst_28922 = cljs.core.first.call(null,inst_28910);
var inst_28923 = cljs.core.nth.call(null,inst_28922,(0),null);
var inst_28924 = cljs.core.nth.call(null,inst_28922,(1),null);
var state_29011__$1 = (function (){var statearr_29014 = state_29011;
(statearr_29014[(8)] = inst_28923);

return statearr_29014;
})();
if(cljs.core.truth_(inst_28924)){
var statearr_29015_29101 = state_29011__$1;
(statearr_29015_29101[(1)] = (22));

} else {
var statearr_29016_29102 = state_29011__$1;
(statearr_29016_29102[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (27))){
var inst_28879 = (state_29011[(9)]);
var inst_28959 = (state_29011[(10)]);
var inst_28952 = (state_29011[(11)]);
var inst_28954 = (state_29011[(12)]);
var inst_28959__$1 = cljs.core._nth.call(null,inst_28952,inst_28954);
var inst_28960 = cljs.core.async.put_BANG_.call(null,inst_28959__$1,inst_28879,done);
var state_29011__$1 = (function (){var statearr_29017 = state_29011;
(statearr_29017[(10)] = inst_28959__$1);

return statearr_29017;
})();
if(cljs.core.truth_(inst_28960)){
var statearr_29018_29103 = state_29011__$1;
(statearr_29018_29103[(1)] = (30));

} else {
var statearr_29019_29104 = state_29011__$1;
(statearr_29019_29104[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (1))){
var state_29011__$1 = state_29011;
var statearr_29020_29105 = state_29011__$1;
(statearr_29020_29105[(2)] = null);

(statearr_29020_29105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (24))){
var inst_28910 = (state_29011[(7)]);
var inst_28929 = (state_29011[(2)]);
var inst_28930 = cljs.core.next.call(null,inst_28910);
var inst_28888 = inst_28930;
var inst_28889 = null;
var inst_28890 = (0);
var inst_28891 = (0);
var state_29011__$1 = (function (){var statearr_29021 = state_29011;
(statearr_29021[(13)] = inst_28890);

(statearr_29021[(14)] = inst_28888);

(statearr_29021[(15)] = inst_28889);

(statearr_29021[(16)] = inst_28891);

(statearr_29021[(17)] = inst_28929);

return statearr_29021;
})();
var statearr_29022_29106 = state_29011__$1;
(statearr_29022_29106[(2)] = null);

(statearr_29022_29106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (39))){
var state_29011__$1 = state_29011;
var statearr_29026_29107 = state_29011__$1;
(statearr_29026_29107[(2)] = null);

(statearr_29026_29107[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (4))){
var inst_28879 = (state_29011[(9)]);
var inst_28879__$1 = (state_29011[(2)]);
var inst_28880 = (inst_28879__$1 == null);
var state_29011__$1 = (function (){var statearr_29027 = state_29011;
(statearr_29027[(9)] = inst_28879__$1);

return statearr_29027;
})();
if(cljs.core.truth_(inst_28880)){
var statearr_29028_29108 = state_29011__$1;
(statearr_29028_29108[(1)] = (5));

} else {
var statearr_29029_29109 = state_29011__$1;
(statearr_29029_29109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (15))){
var inst_28890 = (state_29011[(13)]);
var inst_28888 = (state_29011[(14)]);
var inst_28889 = (state_29011[(15)]);
var inst_28891 = (state_29011[(16)]);
var inst_28906 = (state_29011[(2)]);
var inst_28907 = (inst_28891 + (1));
var tmp29023 = inst_28890;
var tmp29024 = inst_28888;
var tmp29025 = inst_28889;
var inst_28888__$1 = tmp29024;
var inst_28889__$1 = tmp29025;
var inst_28890__$1 = tmp29023;
var inst_28891__$1 = inst_28907;
var state_29011__$1 = (function (){var statearr_29030 = state_29011;
(statearr_29030[(13)] = inst_28890__$1);

(statearr_29030[(14)] = inst_28888__$1);

(statearr_29030[(15)] = inst_28889__$1);

(statearr_29030[(16)] = inst_28891__$1);

(statearr_29030[(18)] = inst_28906);

return statearr_29030;
})();
var statearr_29031_29110 = state_29011__$1;
(statearr_29031_29110[(2)] = null);

(statearr_29031_29110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (21))){
var inst_28933 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29035_29111 = state_29011__$1;
(statearr_29035_29111[(2)] = inst_28933);

(statearr_29035_29111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (31))){
var inst_28959 = (state_29011[(10)]);
var inst_28963 = done.call(null,null);
var inst_28964 = cljs.core.async.untap_STAR_.call(null,m,inst_28959);
var state_29011__$1 = (function (){var statearr_29036 = state_29011;
(statearr_29036[(19)] = inst_28963);

return statearr_29036;
})();
var statearr_29037_29112 = state_29011__$1;
(statearr_29037_29112[(2)] = inst_28964);

(statearr_29037_29112[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (32))){
var inst_28951 = (state_29011[(20)]);
var inst_28952 = (state_29011[(11)]);
var inst_28954 = (state_29011[(12)]);
var inst_28953 = (state_29011[(21)]);
var inst_28966 = (state_29011[(2)]);
var inst_28967 = (inst_28954 + (1));
var tmp29032 = inst_28951;
var tmp29033 = inst_28952;
var tmp29034 = inst_28953;
var inst_28951__$1 = tmp29032;
var inst_28952__$1 = tmp29033;
var inst_28953__$1 = tmp29034;
var inst_28954__$1 = inst_28967;
var state_29011__$1 = (function (){var statearr_29038 = state_29011;
(statearr_29038[(20)] = inst_28951__$1);

(statearr_29038[(11)] = inst_28952__$1);

(statearr_29038[(12)] = inst_28954__$1);

(statearr_29038[(21)] = inst_28953__$1);

(statearr_29038[(22)] = inst_28966);

return statearr_29038;
})();
var statearr_29039_29113 = state_29011__$1;
(statearr_29039_29113[(2)] = null);

(statearr_29039_29113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (40))){
var inst_28979 = (state_29011[(23)]);
var inst_28983 = done.call(null,null);
var inst_28984 = cljs.core.async.untap_STAR_.call(null,m,inst_28979);
var state_29011__$1 = (function (){var statearr_29040 = state_29011;
(statearr_29040[(24)] = inst_28983);

return statearr_29040;
})();
var statearr_29041_29114 = state_29011__$1;
(statearr_29041_29114[(2)] = inst_28984);

(statearr_29041_29114[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (33))){
var inst_28970 = (state_29011[(25)]);
var inst_28972 = cljs.core.chunked_seq_QMARK_.call(null,inst_28970);
var state_29011__$1 = state_29011;
if(inst_28972){
var statearr_29042_29115 = state_29011__$1;
(statearr_29042_29115[(1)] = (36));

} else {
var statearr_29043_29116 = state_29011__$1;
(statearr_29043_29116[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (13))){
var inst_28900 = (state_29011[(26)]);
var inst_28903 = cljs.core.async.close_BANG_.call(null,inst_28900);
var state_29011__$1 = state_29011;
var statearr_29044_29117 = state_29011__$1;
(statearr_29044_29117[(2)] = inst_28903);

(statearr_29044_29117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (22))){
var inst_28923 = (state_29011[(8)]);
var inst_28926 = cljs.core.async.close_BANG_.call(null,inst_28923);
var state_29011__$1 = state_29011;
var statearr_29045_29118 = state_29011__$1;
(statearr_29045_29118[(2)] = inst_28926);

(statearr_29045_29118[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (36))){
var inst_28970 = (state_29011[(25)]);
var inst_28974 = cljs.core.chunk_first.call(null,inst_28970);
var inst_28975 = cljs.core.chunk_rest.call(null,inst_28970);
var inst_28976 = cljs.core.count.call(null,inst_28974);
var inst_28951 = inst_28975;
var inst_28952 = inst_28974;
var inst_28953 = inst_28976;
var inst_28954 = (0);
var state_29011__$1 = (function (){var statearr_29046 = state_29011;
(statearr_29046[(20)] = inst_28951);

(statearr_29046[(11)] = inst_28952);

(statearr_29046[(12)] = inst_28954);

(statearr_29046[(21)] = inst_28953);

return statearr_29046;
})();
var statearr_29047_29119 = state_29011__$1;
(statearr_29047_29119[(2)] = null);

(statearr_29047_29119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (41))){
var inst_28970 = (state_29011[(25)]);
var inst_28986 = (state_29011[(2)]);
var inst_28987 = cljs.core.next.call(null,inst_28970);
var inst_28951 = inst_28987;
var inst_28952 = null;
var inst_28953 = (0);
var inst_28954 = (0);
var state_29011__$1 = (function (){var statearr_29048 = state_29011;
(statearr_29048[(20)] = inst_28951);

(statearr_29048[(27)] = inst_28986);

(statearr_29048[(11)] = inst_28952);

(statearr_29048[(12)] = inst_28954);

(statearr_29048[(21)] = inst_28953);

return statearr_29048;
})();
var statearr_29049_29120 = state_29011__$1;
(statearr_29049_29120[(2)] = null);

(statearr_29049_29120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (43))){
var state_29011__$1 = state_29011;
var statearr_29050_29121 = state_29011__$1;
(statearr_29050_29121[(2)] = null);

(statearr_29050_29121[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (29))){
var inst_28995 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29051_29122 = state_29011__$1;
(statearr_29051_29122[(2)] = inst_28995);

(statearr_29051_29122[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (44))){
var inst_29004 = (state_29011[(2)]);
var state_29011__$1 = (function (){var statearr_29052 = state_29011;
(statearr_29052[(28)] = inst_29004);

return statearr_29052;
})();
var statearr_29053_29123 = state_29011__$1;
(statearr_29053_29123[(2)] = null);

(statearr_29053_29123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (6))){
var inst_28943 = (state_29011[(29)]);
var inst_28942 = cljs.core.deref.call(null,cs);
var inst_28943__$1 = cljs.core.keys.call(null,inst_28942);
var inst_28944 = cljs.core.count.call(null,inst_28943__$1);
var inst_28945 = cljs.core.reset_BANG_.call(null,dctr,inst_28944);
var inst_28950 = cljs.core.seq.call(null,inst_28943__$1);
var inst_28951 = inst_28950;
var inst_28952 = null;
var inst_28953 = (0);
var inst_28954 = (0);
var state_29011__$1 = (function (){var statearr_29054 = state_29011;
(statearr_29054[(20)] = inst_28951);

(statearr_29054[(29)] = inst_28943__$1);

(statearr_29054[(11)] = inst_28952);

(statearr_29054[(30)] = inst_28945);

(statearr_29054[(12)] = inst_28954);

(statearr_29054[(21)] = inst_28953);

return statearr_29054;
})();
var statearr_29055_29124 = state_29011__$1;
(statearr_29055_29124[(2)] = null);

(statearr_29055_29124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (28))){
var inst_28951 = (state_29011[(20)]);
var inst_28970 = (state_29011[(25)]);
var inst_28970__$1 = cljs.core.seq.call(null,inst_28951);
var state_29011__$1 = (function (){var statearr_29056 = state_29011;
(statearr_29056[(25)] = inst_28970__$1);

return statearr_29056;
})();
if(inst_28970__$1){
var statearr_29057_29125 = state_29011__$1;
(statearr_29057_29125[(1)] = (33));

} else {
var statearr_29058_29126 = state_29011__$1;
(statearr_29058_29126[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (25))){
var inst_28954 = (state_29011[(12)]);
var inst_28953 = (state_29011[(21)]);
var inst_28956 = (inst_28954 < inst_28953);
var inst_28957 = inst_28956;
var state_29011__$1 = state_29011;
if(cljs.core.truth_(inst_28957)){
var statearr_29059_29127 = state_29011__$1;
(statearr_29059_29127[(1)] = (27));

} else {
var statearr_29060_29128 = state_29011__$1;
(statearr_29060_29128[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (34))){
var state_29011__$1 = state_29011;
var statearr_29061_29129 = state_29011__$1;
(statearr_29061_29129[(2)] = null);

(statearr_29061_29129[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (17))){
var state_29011__$1 = state_29011;
var statearr_29062_29130 = state_29011__$1;
(statearr_29062_29130[(2)] = null);

(statearr_29062_29130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (3))){
var inst_29009 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29011__$1,inst_29009);
} else {
if((state_val_29012 === (12))){
var inst_28938 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29063_29131 = state_29011__$1;
(statearr_29063_29131[(2)] = inst_28938);

(statearr_29063_29131[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (2))){
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(4),ch);
} else {
if((state_val_29012 === (23))){
var state_29011__$1 = state_29011;
var statearr_29064_29132 = state_29011__$1;
(statearr_29064_29132[(2)] = null);

(statearr_29064_29132[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (35))){
var inst_28993 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29065_29133 = state_29011__$1;
(statearr_29065_29133[(2)] = inst_28993);

(statearr_29065_29133[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (19))){
var inst_28910 = (state_29011[(7)]);
var inst_28914 = cljs.core.chunk_first.call(null,inst_28910);
var inst_28915 = cljs.core.chunk_rest.call(null,inst_28910);
var inst_28916 = cljs.core.count.call(null,inst_28914);
var inst_28888 = inst_28915;
var inst_28889 = inst_28914;
var inst_28890 = inst_28916;
var inst_28891 = (0);
var state_29011__$1 = (function (){var statearr_29066 = state_29011;
(statearr_29066[(13)] = inst_28890);

(statearr_29066[(14)] = inst_28888);

(statearr_29066[(15)] = inst_28889);

(statearr_29066[(16)] = inst_28891);

return statearr_29066;
})();
var statearr_29067_29134 = state_29011__$1;
(statearr_29067_29134[(2)] = null);

(statearr_29067_29134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (11))){
var inst_28888 = (state_29011[(14)]);
var inst_28910 = (state_29011[(7)]);
var inst_28910__$1 = cljs.core.seq.call(null,inst_28888);
var state_29011__$1 = (function (){var statearr_29068 = state_29011;
(statearr_29068[(7)] = inst_28910__$1);

return statearr_29068;
})();
if(inst_28910__$1){
var statearr_29069_29135 = state_29011__$1;
(statearr_29069_29135[(1)] = (16));

} else {
var statearr_29070_29136 = state_29011__$1;
(statearr_29070_29136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (9))){
var inst_28940 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29071_29137 = state_29011__$1;
(statearr_29071_29137[(2)] = inst_28940);

(statearr_29071_29137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (5))){
var inst_28886 = cljs.core.deref.call(null,cs);
var inst_28887 = cljs.core.seq.call(null,inst_28886);
var inst_28888 = inst_28887;
var inst_28889 = null;
var inst_28890 = (0);
var inst_28891 = (0);
var state_29011__$1 = (function (){var statearr_29072 = state_29011;
(statearr_29072[(13)] = inst_28890);

(statearr_29072[(14)] = inst_28888);

(statearr_29072[(15)] = inst_28889);

(statearr_29072[(16)] = inst_28891);

return statearr_29072;
})();
var statearr_29073_29138 = state_29011__$1;
(statearr_29073_29138[(2)] = null);

(statearr_29073_29138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (14))){
var state_29011__$1 = state_29011;
var statearr_29074_29139 = state_29011__$1;
(statearr_29074_29139[(2)] = null);

(statearr_29074_29139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (45))){
var inst_29001 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29075_29140 = state_29011__$1;
(statearr_29075_29140[(2)] = inst_29001);

(statearr_29075_29140[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (26))){
var inst_28943 = (state_29011[(29)]);
var inst_28997 = (state_29011[(2)]);
var inst_28998 = cljs.core.seq.call(null,inst_28943);
var state_29011__$1 = (function (){var statearr_29076 = state_29011;
(statearr_29076[(31)] = inst_28997);

return statearr_29076;
})();
if(inst_28998){
var statearr_29077_29141 = state_29011__$1;
(statearr_29077_29141[(1)] = (42));

} else {
var statearr_29078_29142 = state_29011__$1;
(statearr_29078_29142[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (16))){
var inst_28910 = (state_29011[(7)]);
var inst_28912 = cljs.core.chunked_seq_QMARK_.call(null,inst_28910);
var state_29011__$1 = state_29011;
if(inst_28912){
var statearr_29079_29143 = state_29011__$1;
(statearr_29079_29143[(1)] = (19));

} else {
var statearr_29080_29144 = state_29011__$1;
(statearr_29080_29144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (38))){
var inst_28990 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29081_29145 = state_29011__$1;
(statearr_29081_29145[(2)] = inst_28990);

(statearr_29081_29145[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (30))){
var state_29011__$1 = state_29011;
var statearr_29082_29146 = state_29011__$1;
(statearr_29082_29146[(2)] = null);

(statearr_29082_29146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (10))){
var inst_28889 = (state_29011[(15)]);
var inst_28891 = (state_29011[(16)]);
var inst_28899 = cljs.core._nth.call(null,inst_28889,inst_28891);
var inst_28900 = cljs.core.nth.call(null,inst_28899,(0),null);
var inst_28901 = cljs.core.nth.call(null,inst_28899,(1),null);
var state_29011__$1 = (function (){var statearr_29083 = state_29011;
(statearr_29083[(26)] = inst_28900);

return statearr_29083;
})();
if(cljs.core.truth_(inst_28901)){
var statearr_29084_29147 = state_29011__$1;
(statearr_29084_29147[(1)] = (13));

} else {
var statearr_29085_29148 = state_29011__$1;
(statearr_29085_29148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (18))){
var inst_28936 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29086_29149 = state_29011__$1;
(statearr_29086_29149[(2)] = inst_28936);

(statearr_29086_29149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (42))){
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(45),dchan);
} else {
if((state_val_29012 === (37))){
var inst_28970 = (state_29011[(25)]);
var inst_28879 = (state_29011[(9)]);
var inst_28979 = (state_29011[(23)]);
var inst_28979__$1 = cljs.core.first.call(null,inst_28970);
var inst_28980 = cljs.core.async.put_BANG_.call(null,inst_28979__$1,inst_28879,done);
var state_29011__$1 = (function (){var statearr_29087 = state_29011;
(statearr_29087[(23)] = inst_28979__$1);

return statearr_29087;
})();
if(cljs.core.truth_(inst_28980)){
var statearr_29088_29150 = state_29011__$1;
(statearr_29088_29150[(1)] = (39));

} else {
var statearr_29089_29151 = state_29011__$1;
(statearr_29089_29151[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (8))){
var inst_28890 = (state_29011[(13)]);
var inst_28891 = (state_29011[(16)]);
var inst_28893 = (inst_28891 < inst_28890);
var inst_28894 = inst_28893;
var state_29011__$1 = state_29011;
if(cljs.core.truth_(inst_28894)){
var statearr_29090_29152 = state_29011__$1;
(statearr_29090_29152[(1)] = (10));

} else {
var statearr_29091_29153 = state_29011__$1;
(statearr_29091_29153[(1)] = (11));

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
});})(c__27776__auto___29099,cs,m,dchan,dctr,done))
;
return ((function (switch__27664__auto__,c__27776__auto___29099,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27665__auto__ = null;
var cljs$core$async$mult_$_state_machine__27665__auto____0 = (function (){
var statearr_29095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29095[(0)] = cljs$core$async$mult_$_state_machine__27665__auto__);

(statearr_29095[(1)] = (1));

return statearr_29095;
});
var cljs$core$async$mult_$_state_machine__27665__auto____1 = (function (state_29011){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_29011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e29096){if((e29096 instanceof Object)){
var ex__27668__auto__ = e29096;
var statearr_29097_29154 = state_29011;
(statearr_29097_29154[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29155 = state_29011;
state_29011 = G__29155;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27665__auto__ = function(state_29011){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27665__auto____1.call(this,state_29011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27665__auto____0;
cljs$core$async$mult_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27665__auto____1;
return cljs$core$async$mult_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___29099,cs,m,dchan,dctr,done))
})();
var state__27778__auto__ = (function (){var statearr_29098 = f__27777__auto__.call(null);
(statearr_29098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___29099);

return statearr_29098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___29099,cs,m,dchan,dctr,done))
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
var args29156 = [];
var len__25923__auto___29159 = arguments.length;
var i__25924__auto___29160 = (0);
while(true){
if((i__25924__auto___29160 < len__25923__auto___29159)){
args29156.push((arguments[i__25924__auto___29160]));

var G__29161 = (i__25924__auto___29160 + (1));
i__25924__auto___29160 = G__29161;
continue;
} else {
}
break;
}

var G__29158 = args29156.length;
switch (G__29158) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29156.length)].join('')));

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
var len__25923__auto___29173 = arguments.length;
var i__25924__auto___29174 = (0);
while(true){
if((i__25924__auto___29174 < len__25923__auto___29173)){
args__25930__auto__.push((arguments[i__25924__auto___29174]));

var G__29175 = (i__25924__auto___29174 + (1));
i__25924__auto___29174 = G__29175;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29167){
var map__29168 = p__29167;
var map__29168__$1 = ((((!((map__29168 == null)))?((((map__29168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168):map__29168);
var opts = map__29168__$1;
var statearr_29170_29176 = state;
(statearr_29170_29176[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29168,map__29168__$1,opts){
return (function (val){
var statearr_29171_29177 = state;
(statearr_29171_29177[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29168,map__29168__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29172_29178 = state;
(statearr_29172_29178[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29163){
var G__29164 = cljs.core.first.call(null,seq29163);
var seq29163__$1 = cljs.core.next.call(null,seq29163);
var G__29165 = cljs.core.first.call(null,seq29163__$1);
var seq29163__$2 = cljs.core.next.call(null,seq29163__$1);
var G__29166 = cljs.core.first.call(null,seq29163__$2);
var seq29163__$3 = cljs.core.next.call(null,seq29163__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29164,G__29165,G__29166,seq29163__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29344 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29345){
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
this.meta29345 = meta29345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29346,meta29345__$1){
var self__ = this;
var _29346__$1 = this;
return (new cljs.core.async.t_cljs$core$async29344(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29345__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29346){
var self__ = this;
var _29346__$1 = this;
return self__.meta29345;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29344.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29345","meta29345",-313065371,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29344";

cljs.core.async.t_cljs$core$async29344.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29344");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29344 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29344(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29345){
return (new cljs.core.async.t_cljs$core$async29344(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29345));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29344(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27776__auto___29509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___29509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___29509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29446){
var state_val_29447 = (state_29446[(1)]);
if((state_val_29447 === (7))){
var inst_29362 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
var statearr_29448_29510 = state_29446__$1;
(statearr_29448_29510[(2)] = inst_29362);

(statearr_29448_29510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (20))){
var inst_29374 = (state_29446[(7)]);
var state_29446__$1 = state_29446;
var statearr_29449_29511 = state_29446__$1;
(statearr_29449_29511[(2)] = inst_29374);

(statearr_29449_29511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (27))){
var state_29446__$1 = state_29446;
var statearr_29450_29512 = state_29446__$1;
(statearr_29450_29512[(2)] = null);

(statearr_29450_29512[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (1))){
var inst_29350 = (state_29446[(8)]);
var inst_29350__$1 = calc_state.call(null);
var inst_29352 = (inst_29350__$1 == null);
var inst_29353 = cljs.core.not.call(null,inst_29352);
var state_29446__$1 = (function (){var statearr_29451 = state_29446;
(statearr_29451[(8)] = inst_29350__$1);

return statearr_29451;
})();
if(inst_29353){
var statearr_29452_29513 = state_29446__$1;
(statearr_29452_29513[(1)] = (2));

} else {
var statearr_29453_29514 = state_29446__$1;
(statearr_29453_29514[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (24))){
var inst_29397 = (state_29446[(9)]);
var inst_29406 = (state_29446[(10)]);
var inst_29420 = (state_29446[(11)]);
var inst_29420__$1 = inst_29397.call(null,inst_29406);
var state_29446__$1 = (function (){var statearr_29454 = state_29446;
(statearr_29454[(11)] = inst_29420__$1);

return statearr_29454;
})();
if(cljs.core.truth_(inst_29420__$1)){
var statearr_29455_29515 = state_29446__$1;
(statearr_29455_29515[(1)] = (29));

} else {
var statearr_29456_29516 = state_29446__$1;
(statearr_29456_29516[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (4))){
var inst_29365 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
if(cljs.core.truth_(inst_29365)){
var statearr_29457_29517 = state_29446__$1;
(statearr_29457_29517[(1)] = (8));

} else {
var statearr_29458_29518 = state_29446__$1;
(statearr_29458_29518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (15))){
var inst_29391 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
if(cljs.core.truth_(inst_29391)){
var statearr_29459_29519 = state_29446__$1;
(statearr_29459_29519[(1)] = (19));

} else {
var statearr_29460_29520 = state_29446__$1;
(statearr_29460_29520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (21))){
var inst_29396 = (state_29446[(12)]);
var inst_29396__$1 = (state_29446[(2)]);
var inst_29397 = cljs.core.get.call(null,inst_29396__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29398 = cljs.core.get.call(null,inst_29396__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29399 = cljs.core.get.call(null,inst_29396__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29446__$1 = (function (){var statearr_29461 = state_29446;
(statearr_29461[(9)] = inst_29397);

(statearr_29461[(13)] = inst_29398);

(statearr_29461[(12)] = inst_29396__$1);

return statearr_29461;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29446__$1,(22),inst_29399);
} else {
if((state_val_29447 === (31))){
var inst_29428 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
if(cljs.core.truth_(inst_29428)){
var statearr_29462_29521 = state_29446__$1;
(statearr_29462_29521[(1)] = (32));

} else {
var statearr_29463_29522 = state_29446__$1;
(statearr_29463_29522[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (32))){
var inst_29405 = (state_29446[(14)]);
var state_29446__$1 = state_29446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29446__$1,(35),out,inst_29405);
} else {
if((state_val_29447 === (33))){
var inst_29396 = (state_29446[(12)]);
var inst_29374 = inst_29396;
var state_29446__$1 = (function (){var statearr_29464 = state_29446;
(statearr_29464[(7)] = inst_29374);

return statearr_29464;
})();
var statearr_29465_29523 = state_29446__$1;
(statearr_29465_29523[(2)] = null);

(statearr_29465_29523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (13))){
var inst_29374 = (state_29446[(7)]);
var inst_29381 = inst_29374.cljs$lang$protocol_mask$partition0$;
var inst_29382 = (inst_29381 & (64));
var inst_29383 = inst_29374.cljs$core$ISeq$;
var inst_29384 = (inst_29382) || (inst_29383);
var state_29446__$1 = state_29446;
if(cljs.core.truth_(inst_29384)){
var statearr_29466_29524 = state_29446__$1;
(statearr_29466_29524[(1)] = (16));

} else {
var statearr_29467_29525 = state_29446__$1;
(statearr_29467_29525[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (22))){
var inst_29406 = (state_29446[(10)]);
var inst_29405 = (state_29446[(14)]);
var inst_29404 = (state_29446[(2)]);
var inst_29405__$1 = cljs.core.nth.call(null,inst_29404,(0),null);
var inst_29406__$1 = cljs.core.nth.call(null,inst_29404,(1),null);
var inst_29407 = (inst_29405__$1 == null);
var inst_29408 = cljs.core._EQ_.call(null,inst_29406__$1,change);
var inst_29409 = (inst_29407) || (inst_29408);
var state_29446__$1 = (function (){var statearr_29468 = state_29446;
(statearr_29468[(10)] = inst_29406__$1);

(statearr_29468[(14)] = inst_29405__$1);

return statearr_29468;
})();
if(cljs.core.truth_(inst_29409)){
var statearr_29469_29526 = state_29446__$1;
(statearr_29469_29526[(1)] = (23));

} else {
var statearr_29470_29527 = state_29446__$1;
(statearr_29470_29527[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (36))){
var inst_29396 = (state_29446[(12)]);
var inst_29374 = inst_29396;
var state_29446__$1 = (function (){var statearr_29471 = state_29446;
(statearr_29471[(7)] = inst_29374);

return statearr_29471;
})();
var statearr_29472_29528 = state_29446__$1;
(statearr_29472_29528[(2)] = null);

(statearr_29472_29528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (29))){
var inst_29420 = (state_29446[(11)]);
var state_29446__$1 = state_29446;
var statearr_29473_29529 = state_29446__$1;
(statearr_29473_29529[(2)] = inst_29420);

(statearr_29473_29529[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (6))){
var state_29446__$1 = state_29446;
var statearr_29474_29530 = state_29446__$1;
(statearr_29474_29530[(2)] = false);

(statearr_29474_29530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (28))){
var inst_29416 = (state_29446[(2)]);
var inst_29417 = calc_state.call(null);
var inst_29374 = inst_29417;
var state_29446__$1 = (function (){var statearr_29475 = state_29446;
(statearr_29475[(7)] = inst_29374);

(statearr_29475[(15)] = inst_29416);

return statearr_29475;
})();
var statearr_29476_29531 = state_29446__$1;
(statearr_29476_29531[(2)] = null);

(statearr_29476_29531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (25))){
var inst_29442 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
var statearr_29477_29532 = state_29446__$1;
(statearr_29477_29532[(2)] = inst_29442);

(statearr_29477_29532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (34))){
var inst_29440 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
var statearr_29478_29533 = state_29446__$1;
(statearr_29478_29533[(2)] = inst_29440);

(statearr_29478_29533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (17))){
var state_29446__$1 = state_29446;
var statearr_29479_29534 = state_29446__$1;
(statearr_29479_29534[(2)] = false);

(statearr_29479_29534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (3))){
var state_29446__$1 = state_29446;
var statearr_29480_29535 = state_29446__$1;
(statearr_29480_29535[(2)] = false);

(statearr_29480_29535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (12))){
var inst_29444 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29446__$1,inst_29444);
} else {
if((state_val_29447 === (2))){
var inst_29350 = (state_29446[(8)]);
var inst_29355 = inst_29350.cljs$lang$protocol_mask$partition0$;
var inst_29356 = (inst_29355 & (64));
var inst_29357 = inst_29350.cljs$core$ISeq$;
var inst_29358 = (inst_29356) || (inst_29357);
var state_29446__$1 = state_29446;
if(cljs.core.truth_(inst_29358)){
var statearr_29481_29536 = state_29446__$1;
(statearr_29481_29536[(1)] = (5));

} else {
var statearr_29482_29537 = state_29446__$1;
(statearr_29482_29537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (23))){
var inst_29405 = (state_29446[(14)]);
var inst_29411 = (inst_29405 == null);
var state_29446__$1 = state_29446;
if(cljs.core.truth_(inst_29411)){
var statearr_29483_29538 = state_29446__$1;
(statearr_29483_29538[(1)] = (26));

} else {
var statearr_29484_29539 = state_29446__$1;
(statearr_29484_29539[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (35))){
var inst_29431 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
if(cljs.core.truth_(inst_29431)){
var statearr_29485_29540 = state_29446__$1;
(statearr_29485_29540[(1)] = (36));

} else {
var statearr_29486_29541 = state_29446__$1;
(statearr_29486_29541[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (19))){
var inst_29374 = (state_29446[(7)]);
var inst_29393 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29374);
var state_29446__$1 = state_29446;
var statearr_29487_29542 = state_29446__$1;
(statearr_29487_29542[(2)] = inst_29393);

(statearr_29487_29542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (11))){
var inst_29374 = (state_29446[(7)]);
var inst_29378 = (inst_29374 == null);
var inst_29379 = cljs.core.not.call(null,inst_29378);
var state_29446__$1 = state_29446;
if(inst_29379){
var statearr_29488_29543 = state_29446__$1;
(statearr_29488_29543[(1)] = (13));

} else {
var statearr_29489_29544 = state_29446__$1;
(statearr_29489_29544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (9))){
var inst_29350 = (state_29446[(8)]);
var state_29446__$1 = state_29446;
var statearr_29490_29545 = state_29446__$1;
(statearr_29490_29545[(2)] = inst_29350);

(statearr_29490_29545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (5))){
var state_29446__$1 = state_29446;
var statearr_29491_29546 = state_29446__$1;
(statearr_29491_29546[(2)] = true);

(statearr_29491_29546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (14))){
var state_29446__$1 = state_29446;
var statearr_29492_29547 = state_29446__$1;
(statearr_29492_29547[(2)] = false);

(statearr_29492_29547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (26))){
var inst_29406 = (state_29446[(10)]);
var inst_29413 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29406);
var state_29446__$1 = state_29446;
var statearr_29493_29548 = state_29446__$1;
(statearr_29493_29548[(2)] = inst_29413);

(statearr_29493_29548[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (16))){
var state_29446__$1 = state_29446;
var statearr_29494_29549 = state_29446__$1;
(statearr_29494_29549[(2)] = true);

(statearr_29494_29549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (38))){
var inst_29436 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
var statearr_29495_29550 = state_29446__$1;
(statearr_29495_29550[(2)] = inst_29436);

(statearr_29495_29550[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (30))){
var inst_29397 = (state_29446[(9)]);
var inst_29398 = (state_29446[(13)]);
var inst_29406 = (state_29446[(10)]);
var inst_29423 = cljs.core.empty_QMARK_.call(null,inst_29397);
var inst_29424 = inst_29398.call(null,inst_29406);
var inst_29425 = cljs.core.not.call(null,inst_29424);
var inst_29426 = (inst_29423) && (inst_29425);
var state_29446__$1 = state_29446;
var statearr_29496_29551 = state_29446__$1;
(statearr_29496_29551[(2)] = inst_29426);

(statearr_29496_29551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (10))){
var inst_29350 = (state_29446[(8)]);
var inst_29370 = (state_29446[(2)]);
var inst_29371 = cljs.core.get.call(null,inst_29370,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29372 = cljs.core.get.call(null,inst_29370,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29373 = cljs.core.get.call(null,inst_29370,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29374 = inst_29350;
var state_29446__$1 = (function (){var statearr_29497 = state_29446;
(statearr_29497[(7)] = inst_29374);

(statearr_29497[(16)] = inst_29372);

(statearr_29497[(17)] = inst_29371);

(statearr_29497[(18)] = inst_29373);

return statearr_29497;
})();
var statearr_29498_29552 = state_29446__$1;
(statearr_29498_29552[(2)] = null);

(statearr_29498_29552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (18))){
var inst_29388 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
var statearr_29499_29553 = state_29446__$1;
(statearr_29499_29553[(2)] = inst_29388);

(statearr_29499_29553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (37))){
var state_29446__$1 = state_29446;
var statearr_29500_29554 = state_29446__$1;
(statearr_29500_29554[(2)] = null);

(statearr_29500_29554[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (8))){
var inst_29350 = (state_29446[(8)]);
var inst_29367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29350);
var state_29446__$1 = state_29446;
var statearr_29501_29555 = state_29446__$1;
(statearr_29501_29555[(2)] = inst_29367);

(statearr_29501_29555[(1)] = (10));


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
});})(c__27776__auto___29509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27664__auto__,c__27776__auto___29509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27665__auto__ = null;
var cljs$core$async$mix_$_state_machine__27665__auto____0 = (function (){
var statearr_29505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29505[(0)] = cljs$core$async$mix_$_state_machine__27665__auto__);

(statearr_29505[(1)] = (1));

return statearr_29505;
});
var cljs$core$async$mix_$_state_machine__27665__auto____1 = (function (state_29446){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_29446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e29506){if((e29506 instanceof Object)){
var ex__27668__auto__ = e29506;
var statearr_29507_29556 = state_29446;
(statearr_29507_29556[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29557 = state_29446;
state_29446 = G__29557;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27665__auto__ = function(state_29446){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27665__auto____1.call(this,state_29446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27665__auto____0;
cljs$core$async$mix_$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27665__auto____1;
return cljs$core$async$mix_$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___29509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27778__auto__ = (function (){var statearr_29508 = f__27777__auto__.call(null);
(statearr_29508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___29509);

return statearr_29508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___29509,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args29558 = [];
var len__25923__auto___29561 = arguments.length;
var i__25924__auto___29562 = (0);
while(true){
if((i__25924__auto___29562 < len__25923__auto___29561)){
args29558.push((arguments[i__25924__auto___29562]));

var G__29563 = (i__25924__auto___29562 + (1));
i__25924__auto___29562 = G__29563;
continue;
} else {
}
break;
}

var G__29560 = args29558.length;
switch (G__29560) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29558.length)].join('')));

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
var args29566 = [];
var len__25923__auto___29691 = arguments.length;
var i__25924__auto___29692 = (0);
while(true){
if((i__25924__auto___29692 < len__25923__auto___29691)){
args29566.push((arguments[i__25924__auto___29692]));

var G__29693 = (i__25924__auto___29692 + (1));
i__25924__auto___29692 = G__29693;
continue;
} else {
}
break;
}

var G__29568 = args29566.length;
switch (G__29568) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29566.length)].join('')));

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
return (function (p1__29565_SHARP_){
if(cljs.core.truth_(p1__29565_SHARP_.call(null,topic))){
return p1__29565_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29565_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29569 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29570){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29570 = meta29570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29571,meta29570__$1){
var self__ = this;
var _29571__$1 = this;
return (new cljs.core.async.t_cljs$core$async29569(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29570__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29571){
var self__ = this;
var _29571__$1 = this;
return self__.meta29570;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29569.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29570","meta29570",-411959432,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29569";

cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29569");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29569 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29569(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29570){
return (new cljs.core.async.t_cljs$core$async29569(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29570));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29569(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27776__auto___29695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___29695,mults,ensure_mult,p){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___29695,mults,ensure_mult,p){
return (function (state_29643){
var state_val_29644 = (state_29643[(1)]);
if((state_val_29644 === (7))){
var inst_29639 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29645_29696 = state_29643__$1;
(statearr_29645_29696[(2)] = inst_29639);

(statearr_29645_29696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (20))){
var state_29643__$1 = state_29643;
var statearr_29646_29697 = state_29643__$1;
(statearr_29646_29697[(2)] = null);

(statearr_29646_29697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (1))){
var state_29643__$1 = state_29643;
var statearr_29647_29698 = state_29643__$1;
(statearr_29647_29698[(2)] = null);

(statearr_29647_29698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (24))){
var inst_29622 = (state_29643[(7)]);
var inst_29631 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29622);
var state_29643__$1 = state_29643;
var statearr_29648_29699 = state_29643__$1;
(statearr_29648_29699[(2)] = inst_29631);

(statearr_29648_29699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (4))){
var inst_29574 = (state_29643[(8)]);
var inst_29574__$1 = (state_29643[(2)]);
var inst_29575 = (inst_29574__$1 == null);
var state_29643__$1 = (function (){var statearr_29649 = state_29643;
(statearr_29649[(8)] = inst_29574__$1);

return statearr_29649;
})();
if(cljs.core.truth_(inst_29575)){
var statearr_29650_29700 = state_29643__$1;
(statearr_29650_29700[(1)] = (5));

} else {
var statearr_29651_29701 = state_29643__$1;
(statearr_29651_29701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (15))){
var inst_29616 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29652_29702 = state_29643__$1;
(statearr_29652_29702[(2)] = inst_29616);

(statearr_29652_29702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (21))){
var inst_29636 = (state_29643[(2)]);
var state_29643__$1 = (function (){var statearr_29653 = state_29643;
(statearr_29653[(9)] = inst_29636);

return statearr_29653;
})();
var statearr_29654_29703 = state_29643__$1;
(statearr_29654_29703[(2)] = null);

(statearr_29654_29703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (13))){
var inst_29598 = (state_29643[(10)]);
var inst_29600 = cljs.core.chunked_seq_QMARK_.call(null,inst_29598);
var state_29643__$1 = state_29643;
if(inst_29600){
var statearr_29655_29704 = state_29643__$1;
(statearr_29655_29704[(1)] = (16));

} else {
var statearr_29656_29705 = state_29643__$1;
(statearr_29656_29705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (22))){
var inst_29628 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
if(cljs.core.truth_(inst_29628)){
var statearr_29657_29706 = state_29643__$1;
(statearr_29657_29706[(1)] = (23));

} else {
var statearr_29658_29707 = state_29643__$1;
(statearr_29658_29707[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (6))){
var inst_29624 = (state_29643[(11)]);
var inst_29574 = (state_29643[(8)]);
var inst_29622 = (state_29643[(7)]);
var inst_29622__$1 = topic_fn.call(null,inst_29574);
var inst_29623 = cljs.core.deref.call(null,mults);
var inst_29624__$1 = cljs.core.get.call(null,inst_29623,inst_29622__$1);
var state_29643__$1 = (function (){var statearr_29659 = state_29643;
(statearr_29659[(11)] = inst_29624__$1);

(statearr_29659[(7)] = inst_29622__$1);

return statearr_29659;
})();
if(cljs.core.truth_(inst_29624__$1)){
var statearr_29660_29708 = state_29643__$1;
(statearr_29660_29708[(1)] = (19));

} else {
var statearr_29661_29709 = state_29643__$1;
(statearr_29661_29709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (25))){
var inst_29633 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29662_29710 = state_29643__$1;
(statearr_29662_29710[(2)] = inst_29633);

(statearr_29662_29710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (17))){
var inst_29598 = (state_29643[(10)]);
var inst_29607 = cljs.core.first.call(null,inst_29598);
var inst_29608 = cljs.core.async.muxch_STAR_.call(null,inst_29607);
var inst_29609 = cljs.core.async.close_BANG_.call(null,inst_29608);
var inst_29610 = cljs.core.next.call(null,inst_29598);
var inst_29584 = inst_29610;
var inst_29585 = null;
var inst_29586 = (0);
var inst_29587 = (0);
var state_29643__$1 = (function (){var statearr_29663 = state_29643;
(statearr_29663[(12)] = inst_29585);

(statearr_29663[(13)] = inst_29609);

(statearr_29663[(14)] = inst_29587);

(statearr_29663[(15)] = inst_29586);

(statearr_29663[(16)] = inst_29584);

return statearr_29663;
})();
var statearr_29664_29711 = state_29643__$1;
(statearr_29664_29711[(2)] = null);

(statearr_29664_29711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (3))){
var inst_29641 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29643__$1,inst_29641);
} else {
if((state_val_29644 === (12))){
var inst_29618 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29665_29712 = state_29643__$1;
(statearr_29665_29712[(2)] = inst_29618);

(statearr_29665_29712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (2))){
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29643__$1,(4),ch);
} else {
if((state_val_29644 === (23))){
var state_29643__$1 = state_29643;
var statearr_29666_29713 = state_29643__$1;
(statearr_29666_29713[(2)] = null);

(statearr_29666_29713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (19))){
var inst_29624 = (state_29643[(11)]);
var inst_29574 = (state_29643[(8)]);
var inst_29626 = cljs.core.async.muxch_STAR_.call(null,inst_29624);
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29643__$1,(22),inst_29626,inst_29574);
} else {
if((state_val_29644 === (11))){
var inst_29598 = (state_29643[(10)]);
var inst_29584 = (state_29643[(16)]);
var inst_29598__$1 = cljs.core.seq.call(null,inst_29584);
var state_29643__$1 = (function (){var statearr_29667 = state_29643;
(statearr_29667[(10)] = inst_29598__$1);

return statearr_29667;
})();
if(inst_29598__$1){
var statearr_29668_29714 = state_29643__$1;
(statearr_29668_29714[(1)] = (13));

} else {
var statearr_29669_29715 = state_29643__$1;
(statearr_29669_29715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (9))){
var inst_29620 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29670_29716 = state_29643__$1;
(statearr_29670_29716[(2)] = inst_29620);

(statearr_29670_29716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (5))){
var inst_29581 = cljs.core.deref.call(null,mults);
var inst_29582 = cljs.core.vals.call(null,inst_29581);
var inst_29583 = cljs.core.seq.call(null,inst_29582);
var inst_29584 = inst_29583;
var inst_29585 = null;
var inst_29586 = (0);
var inst_29587 = (0);
var state_29643__$1 = (function (){var statearr_29671 = state_29643;
(statearr_29671[(12)] = inst_29585);

(statearr_29671[(14)] = inst_29587);

(statearr_29671[(15)] = inst_29586);

(statearr_29671[(16)] = inst_29584);

return statearr_29671;
})();
var statearr_29672_29717 = state_29643__$1;
(statearr_29672_29717[(2)] = null);

(statearr_29672_29717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (14))){
var state_29643__$1 = state_29643;
var statearr_29676_29718 = state_29643__$1;
(statearr_29676_29718[(2)] = null);

(statearr_29676_29718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (16))){
var inst_29598 = (state_29643[(10)]);
var inst_29602 = cljs.core.chunk_first.call(null,inst_29598);
var inst_29603 = cljs.core.chunk_rest.call(null,inst_29598);
var inst_29604 = cljs.core.count.call(null,inst_29602);
var inst_29584 = inst_29603;
var inst_29585 = inst_29602;
var inst_29586 = inst_29604;
var inst_29587 = (0);
var state_29643__$1 = (function (){var statearr_29677 = state_29643;
(statearr_29677[(12)] = inst_29585);

(statearr_29677[(14)] = inst_29587);

(statearr_29677[(15)] = inst_29586);

(statearr_29677[(16)] = inst_29584);

return statearr_29677;
})();
var statearr_29678_29719 = state_29643__$1;
(statearr_29678_29719[(2)] = null);

(statearr_29678_29719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (10))){
var inst_29585 = (state_29643[(12)]);
var inst_29587 = (state_29643[(14)]);
var inst_29586 = (state_29643[(15)]);
var inst_29584 = (state_29643[(16)]);
var inst_29592 = cljs.core._nth.call(null,inst_29585,inst_29587);
var inst_29593 = cljs.core.async.muxch_STAR_.call(null,inst_29592);
var inst_29594 = cljs.core.async.close_BANG_.call(null,inst_29593);
var inst_29595 = (inst_29587 + (1));
var tmp29673 = inst_29585;
var tmp29674 = inst_29586;
var tmp29675 = inst_29584;
var inst_29584__$1 = tmp29675;
var inst_29585__$1 = tmp29673;
var inst_29586__$1 = tmp29674;
var inst_29587__$1 = inst_29595;
var state_29643__$1 = (function (){var statearr_29679 = state_29643;
(statearr_29679[(12)] = inst_29585__$1);

(statearr_29679[(14)] = inst_29587__$1);

(statearr_29679[(15)] = inst_29586__$1);

(statearr_29679[(17)] = inst_29594);

(statearr_29679[(16)] = inst_29584__$1);

return statearr_29679;
})();
var statearr_29680_29720 = state_29643__$1;
(statearr_29680_29720[(2)] = null);

(statearr_29680_29720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (18))){
var inst_29613 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29681_29721 = state_29643__$1;
(statearr_29681_29721[(2)] = inst_29613);

(statearr_29681_29721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (8))){
var inst_29587 = (state_29643[(14)]);
var inst_29586 = (state_29643[(15)]);
var inst_29589 = (inst_29587 < inst_29586);
var inst_29590 = inst_29589;
var state_29643__$1 = state_29643;
if(cljs.core.truth_(inst_29590)){
var statearr_29682_29722 = state_29643__$1;
(statearr_29682_29722[(1)] = (10));

} else {
var statearr_29683_29723 = state_29643__$1;
(statearr_29683_29723[(1)] = (11));

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
});})(c__27776__auto___29695,mults,ensure_mult,p))
;
return ((function (switch__27664__auto__,c__27776__auto___29695,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_29687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29687[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_29687[(1)] = (1));

return statearr_29687;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_29643){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_29643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e29688){if((e29688 instanceof Object)){
var ex__27668__auto__ = e29688;
var statearr_29689_29724 = state_29643;
(statearr_29689_29724[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29725 = state_29643;
state_29643 = G__29725;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_29643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_29643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___29695,mults,ensure_mult,p))
})();
var state__27778__auto__ = (function (){var statearr_29690 = f__27777__auto__.call(null);
(statearr_29690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___29695);

return statearr_29690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___29695,mults,ensure_mult,p))
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
var args29726 = [];
var len__25923__auto___29729 = arguments.length;
var i__25924__auto___29730 = (0);
while(true){
if((i__25924__auto___29730 < len__25923__auto___29729)){
args29726.push((arguments[i__25924__auto___29730]));

var G__29731 = (i__25924__auto___29730 + (1));
i__25924__auto___29730 = G__29731;
continue;
} else {
}
break;
}

var G__29728 = args29726.length;
switch (G__29728) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29726.length)].join('')));

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
var args29733 = [];
var len__25923__auto___29736 = arguments.length;
var i__25924__auto___29737 = (0);
while(true){
if((i__25924__auto___29737 < len__25923__auto___29736)){
args29733.push((arguments[i__25924__auto___29737]));

var G__29738 = (i__25924__auto___29737 + (1));
i__25924__auto___29737 = G__29738;
continue;
} else {
}
break;
}

var G__29735 = args29733.length;
switch (G__29735) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29733.length)].join('')));

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
var args29740 = [];
var len__25923__auto___29811 = arguments.length;
var i__25924__auto___29812 = (0);
while(true){
if((i__25924__auto___29812 < len__25923__auto___29811)){
args29740.push((arguments[i__25924__auto___29812]));

var G__29813 = (i__25924__auto___29812 + (1));
i__25924__auto___29812 = G__29813;
continue;
} else {
}
break;
}

var G__29742 = args29740.length;
switch (G__29742) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29740.length)].join('')));

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
var c__27776__auto___29815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___29815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___29815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29781){
var state_val_29782 = (state_29781[(1)]);
if((state_val_29782 === (7))){
var state_29781__$1 = state_29781;
var statearr_29783_29816 = state_29781__$1;
(statearr_29783_29816[(2)] = null);

(statearr_29783_29816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (1))){
var state_29781__$1 = state_29781;
var statearr_29784_29817 = state_29781__$1;
(statearr_29784_29817[(2)] = null);

(statearr_29784_29817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (4))){
var inst_29745 = (state_29781[(7)]);
var inst_29747 = (inst_29745 < cnt);
var state_29781__$1 = state_29781;
if(cljs.core.truth_(inst_29747)){
var statearr_29785_29818 = state_29781__$1;
(statearr_29785_29818[(1)] = (6));

} else {
var statearr_29786_29819 = state_29781__$1;
(statearr_29786_29819[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (15))){
var inst_29777 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29787_29820 = state_29781__$1;
(statearr_29787_29820[(2)] = inst_29777);

(statearr_29787_29820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (13))){
var inst_29770 = cljs.core.async.close_BANG_.call(null,out);
var state_29781__$1 = state_29781;
var statearr_29788_29821 = state_29781__$1;
(statearr_29788_29821[(2)] = inst_29770);

(statearr_29788_29821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (6))){
var state_29781__$1 = state_29781;
var statearr_29789_29822 = state_29781__$1;
(statearr_29789_29822[(2)] = null);

(statearr_29789_29822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (3))){
var inst_29779 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29781__$1,inst_29779);
} else {
if((state_val_29782 === (12))){
var inst_29767 = (state_29781[(8)]);
var inst_29767__$1 = (state_29781[(2)]);
var inst_29768 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29767__$1);
var state_29781__$1 = (function (){var statearr_29790 = state_29781;
(statearr_29790[(8)] = inst_29767__$1);

return statearr_29790;
})();
if(cljs.core.truth_(inst_29768)){
var statearr_29791_29823 = state_29781__$1;
(statearr_29791_29823[(1)] = (13));

} else {
var statearr_29792_29824 = state_29781__$1;
(statearr_29792_29824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (2))){
var inst_29744 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29745 = (0);
var state_29781__$1 = (function (){var statearr_29793 = state_29781;
(statearr_29793[(9)] = inst_29744);

(statearr_29793[(7)] = inst_29745);

return statearr_29793;
})();
var statearr_29794_29825 = state_29781__$1;
(statearr_29794_29825[(2)] = null);

(statearr_29794_29825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (11))){
var inst_29745 = (state_29781[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29781,(10),Object,null,(9));
var inst_29754 = chs__$1.call(null,inst_29745);
var inst_29755 = done.call(null,inst_29745);
var inst_29756 = cljs.core.async.take_BANG_.call(null,inst_29754,inst_29755);
var state_29781__$1 = state_29781;
var statearr_29795_29826 = state_29781__$1;
(statearr_29795_29826[(2)] = inst_29756);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (9))){
var inst_29745 = (state_29781[(7)]);
var inst_29758 = (state_29781[(2)]);
var inst_29759 = (inst_29745 + (1));
var inst_29745__$1 = inst_29759;
var state_29781__$1 = (function (){var statearr_29796 = state_29781;
(statearr_29796[(10)] = inst_29758);

(statearr_29796[(7)] = inst_29745__$1);

return statearr_29796;
})();
var statearr_29797_29827 = state_29781__$1;
(statearr_29797_29827[(2)] = null);

(statearr_29797_29827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (5))){
var inst_29765 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29798 = state_29781;
(statearr_29798[(11)] = inst_29765);

return statearr_29798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29781__$1,(12),dchan);
} else {
if((state_val_29782 === (14))){
var inst_29767 = (state_29781[(8)]);
var inst_29772 = cljs.core.apply.call(null,f,inst_29767);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29781__$1,(16),out,inst_29772);
} else {
if((state_val_29782 === (16))){
var inst_29774 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29799 = state_29781;
(statearr_29799[(12)] = inst_29774);

return statearr_29799;
})();
var statearr_29800_29828 = state_29781__$1;
(statearr_29800_29828[(2)] = null);

(statearr_29800_29828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (10))){
var inst_29749 = (state_29781[(2)]);
var inst_29750 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29781__$1 = (function (){var statearr_29801 = state_29781;
(statearr_29801[(13)] = inst_29749);

return statearr_29801;
})();
var statearr_29802_29829 = state_29781__$1;
(statearr_29802_29829[(2)] = inst_29750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (8))){
var inst_29763 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29803_29830 = state_29781__$1;
(statearr_29803_29830[(2)] = inst_29763);

(statearr_29803_29830[(1)] = (5));


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
});})(c__27776__auto___29815,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27664__auto__,c__27776__auto___29815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_29807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29807[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_29807[(1)] = (1));

return statearr_29807;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_29781){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_29781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e29808){if((e29808 instanceof Object)){
var ex__27668__auto__ = e29808;
var statearr_29809_29831 = state_29781;
(statearr_29809_29831[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29832 = state_29781;
state_29781 = G__29832;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_29781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_29781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___29815,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27778__auto__ = (function (){var statearr_29810 = f__27777__auto__.call(null);
(statearr_29810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___29815);

return statearr_29810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___29815,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29834 = [];
var len__25923__auto___29892 = arguments.length;
var i__25924__auto___29893 = (0);
while(true){
if((i__25924__auto___29893 < len__25923__auto___29892)){
args29834.push((arguments[i__25924__auto___29893]));

var G__29894 = (i__25924__auto___29893 + (1));
i__25924__auto___29893 = G__29894;
continue;
} else {
}
break;
}

var G__29836 = args29834.length;
switch (G__29836) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29834.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27776__auto___29896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___29896,out){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___29896,out){
return (function (state_29868){
var state_val_29869 = (state_29868[(1)]);
if((state_val_29869 === (7))){
var inst_29848 = (state_29868[(7)]);
var inst_29847 = (state_29868[(8)]);
var inst_29847__$1 = (state_29868[(2)]);
var inst_29848__$1 = cljs.core.nth.call(null,inst_29847__$1,(0),null);
var inst_29849 = cljs.core.nth.call(null,inst_29847__$1,(1),null);
var inst_29850 = (inst_29848__$1 == null);
var state_29868__$1 = (function (){var statearr_29870 = state_29868;
(statearr_29870[(7)] = inst_29848__$1);

(statearr_29870[(8)] = inst_29847__$1);

(statearr_29870[(9)] = inst_29849);

return statearr_29870;
})();
if(cljs.core.truth_(inst_29850)){
var statearr_29871_29897 = state_29868__$1;
(statearr_29871_29897[(1)] = (8));

} else {
var statearr_29872_29898 = state_29868__$1;
(statearr_29872_29898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (1))){
var inst_29837 = cljs.core.vec.call(null,chs);
var inst_29838 = inst_29837;
var state_29868__$1 = (function (){var statearr_29873 = state_29868;
(statearr_29873[(10)] = inst_29838);

return statearr_29873;
})();
var statearr_29874_29899 = state_29868__$1;
(statearr_29874_29899[(2)] = null);

(statearr_29874_29899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (4))){
var inst_29838 = (state_29868[(10)]);
var state_29868__$1 = state_29868;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29868__$1,(7),inst_29838);
} else {
if((state_val_29869 === (6))){
var inst_29864 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29875_29900 = state_29868__$1;
(statearr_29875_29900[(2)] = inst_29864);

(statearr_29875_29900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (3))){
var inst_29866 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29868__$1,inst_29866);
} else {
if((state_val_29869 === (2))){
var inst_29838 = (state_29868[(10)]);
var inst_29840 = cljs.core.count.call(null,inst_29838);
var inst_29841 = (inst_29840 > (0));
var state_29868__$1 = state_29868;
if(cljs.core.truth_(inst_29841)){
var statearr_29877_29901 = state_29868__$1;
(statearr_29877_29901[(1)] = (4));

} else {
var statearr_29878_29902 = state_29868__$1;
(statearr_29878_29902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (11))){
var inst_29838 = (state_29868[(10)]);
var inst_29857 = (state_29868[(2)]);
var tmp29876 = inst_29838;
var inst_29838__$1 = tmp29876;
var state_29868__$1 = (function (){var statearr_29879 = state_29868;
(statearr_29879[(10)] = inst_29838__$1);

(statearr_29879[(11)] = inst_29857);

return statearr_29879;
})();
var statearr_29880_29903 = state_29868__$1;
(statearr_29880_29903[(2)] = null);

(statearr_29880_29903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (9))){
var inst_29848 = (state_29868[(7)]);
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29868__$1,(11),out,inst_29848);
} else {
if((state_val_29869 === (5))){
var inst_29862 = cljs.core.async.close_BANG_.call(null,out);
var state_29868__$1 = state_29868;
var statearr_29881_29904 = state_29868__$1;
(statearr_29881_29904[(2)] = inst_29862);

(statearr_29881_29904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (10))){
var inst_29860 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29882_29905 = state_29868__$1;
(statearr_29882_29905[(2)] = inst_29860);

(statearr_29882_29905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (8))){
var inst_29848 = (state_29868[(7)]);
var inst_29838 = (state_29868[(10)]);
var inst_29847 = (state_29868[(8)]);
var inst_29849 = (state_29868[(9)]);
var inst_29852 = (function (){var cs = inst_29838;
var vec__29843 = inst_29847;
var v = inst_29848;
var c = inst_29849;
return ((function (cs,vec__29843,v,c,inst_29848,inst_29838,inst_29847,inst_29849,state_val_29869,c__27776__auto___29896,out){
return (function (p1__29833_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29833_SHARP_);
});
;})(cs,vec__29843,v,c,inst_29848,inst_29838,inst_29847,inst_29849,state_val_29869,c__27776__auto___29896,out))
})();
var inst_29853 = cljs.core.filterv.call(null,inst_29852,inst_29838);
var inst_29838__$1 = inst_29853;
var state_29868__$1 = (function (){var statearr_29883 = state_29868;
(statearr_29883[(10)] = inst_29838__$1);

return statearr_29883;
})();
var statearr_29884_29906 = state_29868__$1;
(statearr_29884_29906[(2)] = null);

(statearr_29884_29906[(1)] = (2));


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
});})(c__27776__auto___29896,out))
;
return ((function (switch__27664__auto__,c__27776__auto___29896,out){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_29868){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_29868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e29889){if((e29889 instanceof Object)){
var ex__27668__auto__ = e29889;
var statearr_29890_29907 = state_29868;
(statearr_29890_29907[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29908 = state_29868;
state_29868 = G__29908;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_29868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_29868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___29896,out))
})();
var state__27778__auto__ = (function (){var statearr_29891 = f__27777__auto__.call(null);
(statearr_29891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___29896);

return statearr_29891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___29896,out))
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
var args29909 = [];
var len__25923__auto___29958 = arguments.length;
var i__25924__auto___29959 = (0);
while(true){
if((i__25924__auto___29959 < len__25923__auto___29958)){
args29909.push((arguments[i__25924__auto___29959]));

var G__29960 = (i__25924__auto___29959 + (1));
i__25924__auto___29959 = G__29960;
continue;
} else {
}
break;
}

var G__29911 = args29909.length;
switch (G__29911) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29909.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27776__auto___29962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___29962,out){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___29962,out){
return (function (state_29935){
var state_val_29936 = (state_29935[(1)]);
if((state_val_29936 === (7))){
var inst_29917 = (state_29935[(7)]);
var inst_29917__$1 = (state_29935[(2)]);
var inst_29918 = (inst_29917__$1 == null);
var inst_29919 = cljs.core.not.call(null,inst_29918);
var state_29935__$1 = (function (){var statearr_29937 = state_29935;
(statearr_29937[(7)] = inst_29917__$1);

return statearr_29937;
})();
if(inst_29919){
var statearr_29938_29963 = state_29935__$1;
(statearr_29938_29963[(1)] = (8));

} else {
var statearr_29939_29964 = state_29935__$1;
(statearr_29939_29964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (1))){
var inst_29912 = (0);
var state_29935__$1 = (function (){var statearr_29940 = state_29935;
(statearr_29940[(8)] = inst_29912);

return statearr_29940;
})();
var statearr_29941_29965 = state_29935__$1;
(statearr_29941_29965[(2)] = null);

(statearr_29941_29965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (4))){
var state_29935__$1 = state_29935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29935__$1,(7),ch);
} else {
if((state_val_29936 === (6))){
var inst_29930 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
var statearr_29942_29966 = state_29935__$1;
(statearr_29942_29966[(2)] = inst_29930);

(statearr_29942_29966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (3))){
var inst_29932 = (state_29935[(2)]);
var inst_29933 = cljs.core.async.close_BANG_.call(null,out);
var state_29935__$1 = (function (){var statearr_29943 = state_29935;
(statearr_29943[(9)] = inst_29932);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29935__$1,inst_29933);
} else {
if((state_val_29936 === (2))){
var inst_29912 = (state_29935[(8)]);
var inst_29914 = (inst_29912 < n);
var state_29935__$1 = state_29935;
if(cljs.core.truth_(inst_29914)){
var statearr_29944_29967 = state_29935__$1;
(statearr_29944_29967[(1)] = (4));

} else {
var statearr_29945_29968 = state_29935__$1;
(statearr_29945_29968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (11))){
var inst_29912 = (state_29935[(8)]);
var inst_29922 = (state_29935[(2)]);
var inst_29923 = (inst_29912 + (1));
var inst_29912__$1 = inst_29923;
var state_29935__$1 = (function (){var statearr_29946 = state_29935;
(statearr_29946[(8)] = inst_29912__$1);

(statearr_29946[(10)] = inst_29922);

return statearr_29946;
})();
var statearr_29947_29969 = state_29935__$1;
(statearr_29947_29969[(2)] = null);

(statearr_29947_29969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (9))){
var state_29935__$1 = state_29935;
var statearr_29948_29970 = state_29935__$1;
(statearr_29948_29970[(2)] = null);

(statearr_29948_29970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (5))){
var state_29935__$1 = state_29935;
var statearr_29949_29971 = state_29935__$1;
(statearr_29949_29971[(2)] = null);

(statearr_29949_29971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (10))){
var inst_29927 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
var statearr_29950_29972 = state_29935__$1;
(statearr_29950_29972[(2)] = inst_29927);

(statearr_29950_29972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (8))){
var inst_29917 = (state_29935[(7)]);
var state_29935__$1 = state_29935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29935__$1,(11),out,inst_29917);
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
});})(c__27776__auto___29962,out))
;
return ((function (switch__27664__auto__,c__27776__auto___29962,out){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_29954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29954[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_29954[(1)] = (1));

return statearr_29954;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_29935){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_29935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e29955){if((e29955 instanceof Object)){
var ex__27668__auto__ = e29955;
var statearr_29956_29973 = state_29935;
(statearr_29956_29973[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29974 = state_29935;
state_29935 = G__29974;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_29935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_29935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___29962,out))
})();
var state__27778__auto__ = (function (){var statearr_29957 = f__27777__auto__.call(null);
(statearr_29957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___29962);

return statearr_29957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___29962,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29982 = (function (map_LT_,f,ch,meta29983){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29983 = meta29983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29984,meta29983__$1){
var self__ = this;
var _29984__$1 = this;
return (new cljs.core.async.t_cljs$core$async29982(self__.map_LT_,self__.f,self__.ch,meta29983__$1));
});

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29984){
var self__ = this;
var _29984__$1 = this;
return self__.meta29983;
});

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29985 = (function (map_LT_,f,ch,meta29983,_,fn1,meta29986){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29983 = meta29983;
this._ = _;
this.fn1 = fn1;
this.meta29986 = meta29986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29987,meta29986__$1){
var self__ = this;
var _29987__$1 = this;
return (new cljs.core.async.t_cljs$core$async29985(self__.map_LT_,self__.f,self__.ch,self__.meta29983,self__._,self__.fn1,meta29986__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29987){
var self__ = this;
var _29987__$1 = this;
return self__.meta29986;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29975_SHARP_){
return f1.call(null,(((p1__29975_SHARP_ == null))?null:self__.f.call(null,p1__29975_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29985.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29983","meta29983",1731251502,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29982","cljs.core.async/t_cljs$core$async29982",-410939090,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29986","meta29986",-956304759,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29985";

cljs.core.async.t_cljs$core$async29985.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29985");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29985 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29985(map_LT___$1,f__$1,ch__$1,meta29983__$1,___$2,fn1__$1,meta29986){
return (new cljs.core.async.t_cljs$core$async29985(map_LT___$1,f__$1,ch__$1,meta29983__$1,___$2,fn1__$1,meta29986));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29985(self__.map_LT_,self__.f,self__.ch,self__.meta29983,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29983","meta29983",1731251502,null)], null);
});

cljs.core.async.t_cljs$core$async29982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29982";

cljs.core.async.t_cljs$core$async29982.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29982");
});

cljs.core.async.__GT_t_cljs$core$async29982 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29982(map_LT___$1,f__$1,ch__$1,meta29983){
return (new cljs.core.async.t_cljs$core$async29982(map_LT___$1,f__$1,ch__$1,meta29983));
});

}

return (new cljs.core.async.t_cljs$core$async29982(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29991 = (function (map_GT_,f,ch,meta29992){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29992 = meta29992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29993,meta29992__$1){
var self__ = this;
var _29993__$1 = this;
return (new cljs.core.async.t_cljs$core$async29991(self__.map_GT_,self__.f,self__.ch,meta29992__$1));
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29993){
var self__ = this;
var _29993__$1 = this;
return self__.meta29992;
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29992","meta29992",436769723,null)], null);
});

cljs.core.async.t_cljs$core$async29991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29991";

cljs.core.async.t_cljs$core$async29991.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29991");
});

cljs.core.async.__GT_t_cljs$core$async29991 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29991(map_GT___$1,f__$1,ch__$1,meta29992){
return (new cljs.core.async.t_cljs$core$async29991(map_GT___$1,f__$1,ch__$1,meta29992));
});

}

return (new cljs.core.async.t_cljs$core$async29991(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29997 = (function (filter_GT_,p,ch,meta29998){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29998 = meta29998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29999,meta29998__$1){
var self__ = this;
var _29999__$1 = this;
return (new cljs.core.async.t_cljs$core$async29997(self__.filter_GT_,self__.p,self__.ch,meta29998__$1));
});

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29999){
var self__ = this;
var _29999__$1 = this;
return self__.meta29998;
});

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29998","meta29998",1340468328,null)], null);
});

cljs.core.async.t_cljs$core$async29997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29997";

cljs.core.async.t_cljs$core$async29997.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29997");
});

cljs.core.async.__GT_t_cljs$core$async29997 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29997(filter_GT___$1,p__$1,ch__$1,meta29998){
return (new cljs.core.async.t_cljs$core$async29997(filter_GT___$1,p__$1,ch__$1,meta29998));
});

}

return (new cljs.core.async.t_cljs$core$async29997(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30000 = [];
var len__25923__auto___30044 = arguments.length;
var i__25924__auto___30045 = (0);
while(true){
if((i__25924__auto___30045 < len__25923__auto___30044)){
args30000.push((arguments[i__25924__auto___30045]));

var G__30046 = (i__25924__auto___30045 + (1));
i__25924__auto___30045 = G__30046;
continue;
} else {
}
break;
}

var G__30002 = args30000.length;
switch (G__30002) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30000.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27776__auto___30048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___30048,out){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___30048,out){
return (function (state_30023){
var state_val_30024 = (state_30023[(1)]);
if((state_val_30024 === (7))){
var inst_30019 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
var statearr_30025_30049 = state_30023__$1;
(statearr_30025_30049[(2)] = inst_30019);

(statearr_30025_30049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (1))){
var state_30023__$1 = state_30023;
var statearr_30026_30050 = state_30023__$1;
(statearr_30026_30050[(2)] = null);

(statearr_30026_30050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (4))){
var inst_30005 = (state_30023[(7)]);
var inst_30005__$1 = (state_30023[(2)]);
var inst_30006 = (inst_30005__$1 == null);
var state_30023__$1 = (function (){var statearr_30027 = state_30023;
(statearr_30027[(7)] = inst_30005__$1);

return statearr_30027;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30028_30051 = state_30023__$1;
(statearr_30028_30051[(1)] = (5));

} else {
var statearr_30029_30052 = state_30023__$1;
(statearr_30029_30052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (6))){
var inst_30005 = (state_30023[(7)]);
var inst_30010 = p.call(null,inst_30005);
var state_30023__$1 = state_30023;
if(cljs.core.truth_(inst_30010)){
var statearr_30030_30053 = state_30023__$1;
(statearr_30030_30053[(1)] = (8));

} else {
var statearr_30031_30054 = state_30023__$1;
(statearr_30031_30054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (3))){
var inst_30021 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30023__$1,inst_30021);
} else {
if((state_val_30024 === (2))){
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30023__$1,(4),ch);
} else {
if((state_val_30024 === (11))){
var inst_30013 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
var statearr_30032_30055 = state_30023__$1;
(statearr_30032_30055[(2)] = inst_30013);

(statearr_30032_30055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (9))){
var state_30023__$1 = state_30023;
var statearr_30033_30056 = state_30023__$1;
(statearr_30033_30056[(2)] = null);

(statearr_30033_30056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (5))){
var inst_30008 = cljs.core.async.close_BANG_.call(null,out);
var state_30023__$1 = state_30023;
var statearr_30034_30057 = state_30023__$1;
(statearr_30034_30057[(2)] = inst_30008);

(statearr_30034_30057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (10))){
var inst_30016 = (state_30023[(2)]);
var state_30023__$1 = (function (){var statearr_30035 = state_30023;
(statearr_30035[(8)] = inst_30016);

return statearr_30035;
})();
var statearr_30036_30058 = state_30023__$1;
(statearr_30036_30058[(2)] = null);

(statearr_30036_30058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (8))){
var inst_30005 = (state_30023[(7)]);
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30023__$1,(11),out,inst_30005);
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
});})(c__27776__auto___30048,out))
;
return ((function (switch__27664__auto__,c__27776__auto___30048,out){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_30040 = [null,null,null,null,null,null,null,null,null];
(statearr_30040[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_30040[(1)] = (1));

return statearr_30040;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_30023){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_30023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e30041){if((e30041 instanceof Object)){
var ex__27668__auto__ = e30041;
var statearr_30042_30059 = state_30023;
(statearr_30042_30059[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30060 = state_30023;
state_30023 = G__30060;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_30023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_30023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___30048,out))
})();
var state__27778__auto__ = (function (){var statearr_30043 = f__27777__auto__.call(null);
(statearr_30043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___30048);

return statearr_30043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___30048,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30061 = [];
var len__25923__auto___30064 = arguments.length;
var i__25924__auto___30065 = (0);
while(true){
if((i__25924__auto___30065 < len__25923__auto___30064)){
args30061.push((arguments[i__25924__auto___30065]));

var G__30066 = (i__25924__auto___30065 + (1));
i__25924__auto___30065 = G__30066;
continue;
} else {
}
break;
}

var G__30063 = args30061.length;
switch (G__30063) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30061.length)].join('')));

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
var c__27776__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto__){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto__){
return (function (state_30233){
var state_val_30234 = (state_30233[(1)]);
if((state_val_30234 === (7))){
var inst_30229 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30235_30276 = state_30233__$1;
(statearr_30235_30276[(2)] = inst_30229);

(statearr_30235_30276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (20))){
var inst_30199 = (state_30233[(7)]);
var inst_30210 = (state_30233[(2)]);
var inst_30211 = cljs.core.next.call(null,inst_30199);
var inst_30185 = inst_30211;
var inst_30186 = null;
var inst_30187 = (0);
var inst_30188 = (0);
var state_30233__$1 = (function (){var statearr_30236 = state_30233;
(statearr_30236[(8)] = inst_30186);

(statearr_30236[(9)] = inst_30187);

(statearr_30236[(10)] = inst_30188);

(statearr_30236[(11)] = inst_30210);

(statearr_30236[(12)] = inst_30185);

return statearr_30236;
})();
var statearr_30237_30277 = state_30233__$1;
(statearr_30237_30277[(2)] = null);

(statearr_30237_30277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (1))){
var state_30233__$1 = state_30233;
var statearr_30238_30278 = state_30233__$1;
(statearr_30238_30278[(2)] = null);

(statearr_30238_30278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (4))){
var inst_30174 = (state_30233[(13)]);
var inst_30174__$1 = (state_30233[(2)]);
var inst_30175 = (inst_30174__$1 == null);
var state_30233__$1 = (function (){var statearr_30239 = state_30233;
(statearr_30239[(13)] = inst_30174__$1);

return statearr_30239;
})();
if(cljs.core.truth_(inst_30175)){
var statearr_30240_30279 = state_30233__$1;
(statearr_30240_30279[(1)] = (5));

} else {
var statearr_30241_30280 = state_30233__$1;
(statearr_30241_30280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (15))){
var state_30233__$1 = state_30233;
var statearr_30245_30281 = state_30233__$1;
(statearr_30245_30281[(2)] = null);

(statearr_30245_30281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (21))){
var state_30233__$1 = state_30233;
var statearr_30246_30282 = state_30233__$1;
(statearr_30246_30282[(2)] = null);

(statearr_30246_30282[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (13))){
var inst_30186 = (state_30233[(8)]);
var inst_30187 = (state_30233[(9)]);
var inst_30188 = (state_30233[(10)]);
var inst_30185 = (state_30233[(12)]);
var inst_30195 = (state_30233[(2)]);
var inst_30196 = (inst_30188 + (1));
var tmp30242 = inst_30186;
var tmp30243 = inst_30187;
var tmp30244 = inst_30185;
var inst_30185__$1 = tmp30244;
var inst_30186__$1 = tmp30242;
var inst_30187__$1 = tmp30243;
var inst_30188__$1 = inst_30196;
var state_30233__$1 = (function (){var statearr_30247 = state_30233;
(statearr_30247[(8)] = inst_30186__$1);

(statearr_30247[(9)] = inst_30187__$1);

(statearr_30247[(10)] = inst_30188__$1);

(statearr_30247[(14)] = inst_30195);

(statearr_30247[(12)] = inst_30185__$1);

return statearr_30247;
})();
var statearr_30248_30283 = state_30233__$1;
(statearr_30248_30283[(2)] = null);

(statearr_30248_30283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (22))){
var state_30233__$1 = state_30233;
var statearr_30249_30284 = state_30233__$1;
(statearr_30249_30284[(2)] = null);

(statearr_30249_30284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (6))){
var inst_30174 = (state_30233[(13)]);
var inst_30183 = f.call(null,inst_30174);
var inst_30184 = cljs.core.seq.call(null,inst_30183);
var inst_30185 = inst_30184;
var inst_30186 = null;
var inst_30187 = (0);
var inst_30188 = (0);
var state_30233__$1 = (function (){var statearr_30250 = state_30233;
(statearr_30250[(8)] = inst_30186);

(statearr_30250[(9)] = inst_30187);

(statearr_30250[(10)] = inst_30188);

(statearr_30250[(12)] = inst_30185);

return statearr_30250;
})();
var statearr_30251_30285 = state_30233__$1;
(statearr_30251_30285[(2)] = null);

(statearr_30251_30285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (17))){
var inst_30199 = (state_30233[(7)]);
var inst_30203 = cljs.core.chunk_first.call(null,inst_30199);
var inst_30204 = cljs.core.chunk_rest.call(null,inst_30199);
var inst_30205 = cljs.core.count.call(null,inst_30203);
var inst_30185 = inst_30204;
var inst_30186 = inst_30203;
var inst_30187 = inst_30205;
var inst_30188 = (0);
var state_30233__$1 = (function (){var statearr_30252 = state_30233;
(statearr_30252[(8)] = inst_30186);

(statearr_30252[(9)] = inst_30187);

(statearr_30252[(10)] = inst_30188);

(statearr_30252[(12)] = inst_30185);

return statearr_30252;
})();
var statearr_30253_30286 = state_30233__$1;
(statearr_30253_30286[(2)] = null);

(statearr_30253_30286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (3))){
var inst_30231 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30233__$1,inst_30231);
} else {
if((state_val_30234 === (12))){
var inst_30219 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30254_30287 = state_30233__$1;
(statearr_30254_30287[(2)] = inst_30219);

(statearr_30254_30287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (2))){
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30233__$1,(4),in$);
} else {
if((state_val_30234 === (23))){
var inst_30227 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30255_30288 = state_30233__$1;
(statearr_30255_30288[(2)] = inst_30227);

(statearr_30255_30288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (19))){
var inst_30214 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30256_30289 = state_30233__$1;
(statearr_30256_30289[(2)] = inst_30214);

(statearr_30256_30289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (11))){
var inst_30199 = (state_30233[(7)]);
var inst_30185 = (state_30233[(12)]);
var inst_30199__$1 = cljs.core.seq.call(null,inst_30185);
var state_30233__$1 = (function (){var statearr_30257 = state_30233;
(statearr_30257[(7)] = inst_30199__$1);

return statearr_30257;
})();
if(inst_30199__$1){
var statearr_30258_30290 = state_30233__$1;
(statearr_30258_30290[(1)] = (14));

} else {
var statearr_30259_30291 = state_30233__$1;
(statearr_30259_30291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (9))){
var inst_30221 = (state_30233[(2)]);
var inst_30222 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30233__$1 = (function (){var statearr_30260 = state_30233;
(statearr_30260[(15)] = inst_30221);

return statearr_30260;
})();
if(cljs.core.truth_(inst_30222)){
var statearr_30261_30292 = state_30233__$1;
(statearr_30261_30292[(1)] = (21));

} else {
var statearr_30262_30293 = state_30233__$1;
(statearr_30262_30293[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (5))){
var inst_30177 = cljs.core.async.close_BANG_.call(null,out);
var state_30233__$1 = state_30233;
var statearr_30263_30294 = state_30233__$1;
(statearr_30263_30294[(2)] = inst_30177);

(statearr_30263_30294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (14))){
var inst_30199 = (state_30233[(7)]);
var inst_30201 = cljs.core.chunked_seq_QMARK_.call(null,inst_30199);
var state_30233__$1 = state_30233;
if(inst_30201){
var statearr_30264_30295 = state_30233__$1;
(statearr_30264_30295[(1)] = (17));

} else {
var statearr_30265_30296 = state_30233__$1;
(statearr_30265_30296[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (16))){
var inst_30217 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30266_30297 = state_30233__$1;
(statearr_30266_30297[(2)] = inst_30217);

(statearr_30266_30297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (10))){
var inst_30186 = (state_30233[(8)]);
var inst_30188 = (state_30233[(10)]);
var inst_30193 = cljs.core._nth.call(null,inst_30186,inst_30188);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30233__$1,(13),out,inst_30193);
} else {
if((state_val_30234 === (18))){
var inst_30199 = (state_30233[(7)]);
var inst_30208 = cljs.core.first.call(null,inst_30199);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30233__$1,(20),out,inst_30208);
} else {
if((state_val_30234 === (8))){
var inst_30187 = (state_30233[(9)]);
var inst_30188 = (state_30233[(10)]);
var inst_30190 = (inst_30188 < inst_30187);
var inst_30191 = inst_30190;
var state_30233__$1 = state_30233;
if(cljs.core.truth_(inst_30191)){
var statearr_30267_30298 = state_30233__$1;
(statearr_30267_30298[(1)] = (10));

} else {
var statearr_30268_30299 = state_30233__$1;
(statearr_30268_30299[(1)] = (11));

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
});})(c__27776__auto__))
;
return ((function (switch__27664__auto__,c__27776__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27665__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27665__auto____0 = (function (){
var statearr_30272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30272[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27665__auto__);

(statearr_30272[(1)] = (1));

return statearr_30272;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27665__auto____1 = (function (state_30233){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_30233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e30273){if((e30273 instanceof Object)){
var ex__27668__auto__ = e30273;
var statearr_30274_30300 = state_30233;
(statearr_30274_30300[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30301 = state_30233;
state_30233 = G__30301;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27665__auto__ = function(state_30233){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27665__auto____1.call(this,state_30233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27665__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27665__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto__))
})();
var state__27778__auto__ = (function (){var statearr_30275 = f__27777__auto__.call(null);
(statearr_30275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto__);

return statearr_30275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto__))
);

return c__27776__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30302 = [];
var len__25923__auto___30305 = arguments.length;
var i__25924__auto___30306 = (0);
while(true){
if((i__25924__auto___30306 < len__25923__auto___30305)){
args30302.push((arguments[i__25924__auto___30306]));

var G__30307 = (i__25924__auto___30306 + (1));
i__25924__auto___30306 = G__30307;
continue;
} else {
}
break;
}

var G__30304 = args30302.length;
switch (G__30304) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30302.length)].join('')));

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
var args30309 = [];
var len__25923__auto___30312 = arguments.length;
var i__25924__auto___30313 = (0);
while(true){
if((i__25924__auto___30313 < len__25923__auto___30312)){
args30309.push((arguments[i__25924__auto___30313]));

var G__30314 = (i__25924__auto___30313 + (1));
i__25924__auto___30313 = G__30314;
continue;
} else {
}
break;
}

var G__30311 = args30309.length;
switch (G__30311) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30309.length)].join('')));

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
var args30316 = [];
var len__25923__auto___30367 = arguments.length;
var i__25924__auto___30368 = (0);
while(true){
if((i__25924__auto___30368 < len__25923__auto___30367)){
args30316.push((arguments[i__25924__auto___30368]));

var G__30369 = (i__25924__auto___30368 + (1));
i__25924__auto___30368 = G__30369;
continue;
} else {
}
break;
}

var G__30318 = args30316.length;
switch (G__30318) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30316.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27776__auto___30371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___30371,out){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___30371,out){
return (function (state_30342){
var state_val_30343 = (state_30342[(1)]);
if((state_val_30343 === (7))){
var inst_30337 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30344_30372 = state_30342__$1;
(statearr_30344_30372[(2)] = inst_30337);

(statearr_30344_30372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (1))){
var inst_30319 = null;
var state_30342__$1 = (function (){var statearr_30345 = state_30342;
(statearr_30345[(7)] = inst_30319);

return statearr_30345;
})();
var statearr_30346_30373 = state_30342__$1;
(statearr_30346_30373[(2)] = null);

(statearr_30346_30373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (4))){
var inst_30322 = (state_30342[(8)]);
var inst_30322__$1 = (state_30342[(2)]);
var inst_30323 = (inst_30322__$1 == null);
var inst_30324 = cljs.core.not.call(null,inst_30323);
var state_30342__$1 = (function (){var statearr_30347 = state_30342;
(statearr_30347[(8)] = inst_30322__$1);

return statearr_30347;
})();
if(inst_30324){
var statearr_30348_30374 = state_30342__$1;
(statearr_30348_30374[(1)] = (5));

} else {
var statearr_30349_30375 = state_30342__$1;
(statearr_30349_30375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (6))){
var state_30342__$1 = state_30342;
var statearr_30350_30376 = state_30342__$1;
(statearr_30350_30376[(2)] = null);

(statearr_30350_30376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (3))){
var inst_30339 = (state_30342[(2)]);
var inst_30340 = cljs.core.async.close_BANG_.call(null,out);
var state_30342__$1 = (function (){var statearr_30351 = state_30342;
(statearr_30351[(9)] = inst_30339);

return statearr_30351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30342__$1,inst_30340);
} else {
if((state_val_30343 === (2))){
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30342__$1,(4),ch);
} else {
if((state_val_30343 === (11))){
var inst_30322 = (state_30342[(8)]);
var inst_30331 = (state_30342[(2)]);
var inst_30319 = inst_30322;
var state_30342__$1 = (function (){var statearr_30352 = state_30342;
(statearr_30352[(7)] = inst_30319);

(statearr_30352[(10)] = inst_30331);

return statearr_30352;
})();
var statearr_30353_30377 = state_30342__$1;
(statearr_30353_30377[(2)] = null);

(statearr_30353_30377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (9))){
var inst_30322 = (state_30342[(8)]);
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30342__$1,(11),out,inst_30322);
} else {
if((state_val_30343 === (5))){
var inst_30322 = (state_30342[(8)]);
var inst_30319 = (state_30342[(7)]);
var inst_30326 = cljs.core._EQ_.call(null,inst_30322,inst_30319);
var state_30342__$1 = state_30342;
if(inst_30326){
var statearr_30355_30378 = state_30342__$1;
(statearr_30355_30378[(1)] = (8));

} else {
var statearr_30356_30379 = state_30342__$1;
(statearr_30356_30379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (10))){
var inst_30334 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30357_30380 = state_30342__$1;
(statearr_30357_30380[(2)] = inst_30334);

(statearr_30357_30380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (8))){
var inst_30319 = (state_30342[(7)]);
var tmp30354 = inst_30319;
var inst_30319__$1 = tmp30354;
var state_30342__$1 = (function (){var statearr_30358 = state_30342;
(statearr_30358[(7)] = inst_30319__$1);

return statearr_30358;
})();
var statearr_30359_30381 = state_30342__$1;
(statearr_30359_30381[(2)] = null);

(statearr_30359_30381[(1)] = (2));


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
});})(c__27776__auto___30371,out))
;
return ((function (switch__27664__auto__,c__27776__auto___30371,out){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_30363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30363[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_30363[(1)] = (1));

return statearr_30363;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_30342){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_30342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e30364){if((e30364 instanceof Object)){
var ex__27668__auto__ = e30364;
var statearr_30365_30382 = state_30342;
(statearr_30365_30382[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30383 = state_30342;
state_30342 = G__30383;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_30342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_30342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___30371,out))
})();
var state__27778__auto__ = (function (){var statearr_30366 = f__27777__auto__.call(null);
(statearr_30366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___30371);

return statearr_30366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___30371,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30384 = [];
var len__25923__auto___30454 = arguments.length;
var i__25924__auto___30455 = (0);
while(true){
if((i__25924__auto___30455 < len__25923__auto___30454)){
args30384.push((arguments[i__25924__auto___30455]));

var G__30456 = (i__25924__auto___30455 + (1));
i__25924__auto___30455 = G__30456;
continue;
} else {
}
break;
}

var G__30386 = args30384.length;
switch (G__30386) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30384.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27776__auto___30458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___30458,out){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___30458,out){
return (function (state_30424){
var state_val_30425 = (state_30424[(1)]);
if((state_val_30425 === (7))){
var inst_30420 = (state_30424[(2)]);
var state_30424__$1 = state_30424;
var statearr_30426_30459 = state_30424__$1;
(statearr_30426_30459[(2)] = inst_30420);

(statearr_30426_30459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (1))){
var inst_30387 = (new Array(n));
var inst_30388 = inst_30387;
var inst_30389 = (0);
var state_30424__$1 = (function (){var statearr_30427 = state_30424;
(statearr_30427[(7)] = inst_30389);

(statearr_30427[(8)] = inst_30388);

return statearr_30427;
})();
var statearr_30428_30460 = state_30424__$1;
(statearr_30428_30460[(2)] = null);

(statearr_30428_30460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (4))){
var inst_30392 = (state_30424[(9)]);
var inst_30392__$1 = (state_30424[(2)]);
var inst_30393 = (inst_30392__$1 == null);
var inst_30394 = cljs.core.not.call(null,inst_30393);
var state_30424__$1 = (function (){var statearr_30429 = state_30424;
(statearr_30429[(9)] = inst_30392__$1);

return statearr_30429;
})();
if(inst_30394){
var statearr_30430_30461 = state_30424__$1;
(statearr_30430_30461[(1)] = (5));

} else {
var statearr_30431_30462 = state_30424__$1;
(statearr_30431_30462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (15))){
var inst_30414 = (state_30424[(2)]);
var state_30424__$1 = state_30424;
var statearr_30432_30463 = state_30424__$1;
(statearr_30432_30463[(2)] = inst_30414);

(statearr_30432_30463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (13))){
var state_30424__$1 = state_30424;
var statearr_30433_30464 = state_30424__$1;
(statearr_30433_30464[(2)] = null);

(statearr_30433_30464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (6))){
var inst_30389 = (state_30424[(7)]);
var inst_30410 = (inst_30389 > (0));
var state_30424__$1 = state_30424;
if(cljs.core.truth_(inst_30410)){
var statearr_30434_30465 = state_30424__$1;
(statearr_30434_30465[(1)] = (12));

} else {
var statearr_30435_30466 = state_30424__$1;
(statearr_30435_30466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (3))){
var inst_30422 = (state_30424[(2)]);
var state_30424__$1 = state_30424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30424__$1,inst_30422);
} else {
if((state_val_30425 === (12))){
var inst_30388 = (state_30424[(8)]);
var inst_30412 = cljs.core.vec.call(null,inst_30388);
var state_30424__$1 = state_30424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30424__$1,(15),out,inst_30412);
} else {
if((state_val_30425 === (2))){
var state_30424__$1 = state_30424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30424__$1,(4),ch);
} else {
if((state_val_30425 === (11))){
var inst_30404 = (state_30424[(2)]);
var inst_30405 = (new Array(n));
var inst_30388 = inst_30405;
var inst_30389 = (0);
var state_30424__$1 = (function (){var statearr_30436 = state_30424;
(statearr_30436[(10)] = inst_30404);

(statearr_30436[(7)] = inst_30389);

(statearr_30436[(8)] = inst_30388);

return statearr_30436;
})();
var statearr_30437_30467 = state_30424__$1;
(statearr_30437_30467[(2)] = null);

(statearr_30437_30467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (9))){
var inst_30388 = (state_30424[(8)]);
var inst_30402 = cljs.core.vec.call(null,inst_30388);
var state_30424__$1 = state_30424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30424__$1,(11),out,inst_30402);
} else {
if((state_val_30425 === (5))){
var inst_30392 = (state_30424[(9)]);
var inst_30397 = (state_30424[(11)]);
var inst_30389 = (state_30424[(7)]);
var inst_30388 = (state_30424[(8)]);
var inst_30396 = (inst_30388[inst_30389] = inst_30392);
var inst_30397__$1 = (inst_30389 + (1));
var inst_30398 = (inst_30397__$1 < n);
var state_30424__$1 = (function (){var statearr_30438 = state_30424;
(statearr_30438[(11)] = inst_30397__$1);

(statearr_30438[(12)] = inst_30396);

return statearr_30438;
})();
if(cljs.core.truth_(inst_30398)){
var statearr_30439_30468 = state_30424__$1;
(statearr_30439_30468[(1)] = (8));

} else {
var statearr_30440_30469 = state_30424__$1;
(statearr_30440_30469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (14))){
var inst_30417 = (state_30424[(2)]);
var inst_30418 = cljs.core.async.close_BANG_.call(null,out);
var state_30424__$1 = (function (){var statearr_30442 = state_30424;
(statearr_30442[(13)] = inst_30417);

return statearr_30442;
})();
var statearr_30443_30470 = state_30424__$1;
(statearr_30443_30470[(2)] = inst_30418);

(statearr_30443_30470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (10))){
var inst_30408 = (state_30424[(2)]);
var state_30424__$1 = state_30424;
var statearr_30444_30471 = state_30424__$1;
(statearr_30444_30471[(2)] = inst_30408);

(statearr_30444_30471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30425 === (8))){
var inst_30397 = (state_30424[(11)]);
var inst_30388 = (state_30424[(8)]);
var tmp30441 = inst_30388;
var inst_30388__$1 = tmp30441;
var inst_30389 = inst_30397;
var state_30424__$1 = (function (){var statearr_30445 = state_30424;
(statearr_30445[(7)] = inst_30389);

(statearr_30445[(8)] = inst_30388__$1);

return statearr_30445;
})();
var statearr_30446_30472 = state_30424__$1;
(statearr_30446_30472[(2)] = null);

(statearr_30446_30472[(1)] = (2));


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
});})(c__27776__auto___30458,out))
;
return ((function (switch__27664__auto__,c__27776__auto___30458,out){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_30450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30450[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_30450[(1)] = (1));

return statearr_30450;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_30424){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_30424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e30451){if((e30451 instanceof Object)){
var ex__27668__auto__ = e30451;
var statearr_30452_30473 = state_30424;
(statearr_30452_30473[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30474 = state_30424;
state_30424 = G__30474;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_30424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_30424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___30458,out))
})();
var state__27778__auto__ = (function (){var statearr_30453 = f__27777__auto__.call(null);
(statearr_30453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___30458);

return statearr_30453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___30458,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30475 = [];
var len__25923__auto___30549 = arguments.length;
var i__25924__auto___30550 = (0);
while(true){
if((i__25924__auto___30550 < len__25923__auto___30549)){
args30475.push((arguments[i__25924__auto___30550]));

var G__30551 = (i__25924__auto___30550 + (1));
i__25924__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var G__30477 = args30475.length;
switch (G__30477) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30475.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27776__auto___30553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27776__auto___30553,out){
return (function (){
var f__27777__auto__ = (function (){var switch__27664__auto__ = ((function (c__27776__auto___30553,out){
return (function (state_30519){
var state_val_30520 = (state_30519[(1)]);
if((state_val_30520 === (7))){
var inst_30515 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30521_30554 = state_30519__$1;
(statearr_30521_30554[(2)] = inst_30515);

(statearr_30521_30554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (1))){
var inst_30478 = [];
var inst_30479 = inst_30478;
var inst_30480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30519__$1 = (function (){var statearr_30522 = state_30519;
(statearr_30522[(7)] = inst_30479);

(statearr_30522[(8)] = inst_30480);

return statearr_30522;
})();
var statearr_30523_30555 = state_30519__$1;
(statearr_30523_30555[(2)] = null);

(statearr_30523_30555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (4))){
var inst_30483 = (state_30519[(9)]);
var inst_30483__$1 = (state_30519[(2)]);
var inst_30484 = (inst_30483__$1 == null);
var inst_30485 = cljs.core.not.call(null,inst_30484);
var state_30519__$1 = (function (){var statearr_30524 = state_30519;
(statearr_30524[(9)] = inst_30483__$1);

return statearr_30524;
})();
if(inst_30485){
var statearr_30525_30556 = state_30519__$1;
(statearr_30525_30556[(1)] = (5));

} else {
var statearr_30526_30557 = state_30519__$1;
(statearr_30526_30557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (15))){
var inst_30509 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30527_30558 = state_30519__$1;
(statearr_30527_30558[(2)] = inst_30509);

(statearr_30527_30558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (13))){
var state_30519__$1 = state_30519;
var statearr_30528_30559 = state_30519__$1;
(statearr_30528_30559[(2)] = null);

(statearr_30528_30559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (6))){
var inst_30479 = (state_30519[(7)]);
var inst_30504 = inst_30479.length;
var inst_30505 = (inst_30504 > (0));
var state_30519__$1 = state_30519;
if(cljs.core.truth_(inst_30505)){
var statearr_30529_30560 = state_30519__$1;
(statearr_30529_30560[(1)] = (12));

} else {
var statearr_30530_30561 = state_30519__$1;
(statearr_30530_30561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (3))){
var inst_30517 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30519__$1,inst_30517);
} else {
if((state_val_30520 === (12))){
var inst_30479 = (state_30519[(7)]);
var inst_30507 = cljs.core.vec.call(null,inst_30479);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30519__$1,(15),out,inst_30507);
} else {
if((state_val_30520 === (2))){
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30519__$1,(4),ch);
} else {
if((state_val_30520 === (11))){
var inst_30483 = (state_30519[(9)]);
var inst_30487 = (state_30519[(10)]);
var inst_30497 = (state_30519[(2)]);
var inst_30498 = [];
var inst_30499 = inst_30498.push(inst_30483);
var inst_30479 = inst_30498;
var inst_30480 = inst_30487;
var state_30519__$1 = (function (){var statearr_30531 = state_30519;
(statearr_30531[(7)] = inst_30479);

(statearr_30531[(8)] = inst_30480);

(statearr_30531[(11)] = inst_30499);

(statearr_30531[(12)] = inst_30497);

return statearr_30531;
})();
var statearr_30532_30562 = state_30519__$1;
(statearr_30532_30562[(2)] = null);

(statearr_30532_30562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (9))){
var inst_30479 = (state_30519[(7)]);
var inst_30495 = cljs.core.vec.call(null,inst_30479);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30519__$1,(11),out,inst_30495);
} else {
if((state_val_30520 === (5))){
var inst_30480 = (state_30519[(8)]);
var inst_30483 = (state_30519[(9)]);
var inst_30487 = (state_30519[(10)]);
var inst_30487__$1 = f.call(null,inst_30483);
var inst_30488 = cljs.core._EQ_.call(null,inst_30487__$1,inst_30480);
var inst_30489 = cljs.core.keyword_identical_QMARK_.call(null,inst_30480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30490 = (inst_30488) || (inst_30489);
var state_30519__$1 = (function (){var statearr_30533 = state_30519;
(statearr_30533[(10)] = inst_30487__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30490)){
var statearr_30534_30563 = state_30519__$1;
(statearr_30534_30563[(1)] = (8));

} else {
var statearr_30535_30564 = state_30519__$1;
(statearr_30535_30564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (14))){
var inst_30512 = (state_30519[(2)]);
var inst_30513 = cljs.core.async.close_BANG_.call(null,out);
var state_30519__$1 = (function (){var statearr_30537 = state_30519;
(statearr_30537[(13)] = inst_30512);

return statearr_30537;
})();
var statearr_30538_30565 = state_30519__$1;
(statearr_30538_30565[(2)] = inst_30513);

(statearr_30538_30565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (10))){
var inst_30502 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30539_30566 = state_30519__$1;
(statearr_30539_30566[(2)] = inst_30502);

(statearr_30539_30566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (8))){
var inst_30479 = (state_30519[(7)]);
var inst_30483 = (state_30519[(9)]);
var inst_30487 = (state_30519[(10)]);
var inst_30492 = inst_30479.push(inst_30483);
var tmp30536 = inst_30479;
var inst_30479__$1 = tmp30536;
var inst_30480 = inst_30487;
var state_30519__$1 = (function (){var statearr_30540 = state_30519;
(statearr_30540[(7)] = inst_30479__$1);

(statearr_30540[(8)] = inst_30480);

(statearr_30540[(14)] = inst_30492);

return statearr_30540;
})();
var statearr_30541_30567 = state_30519__$1;
(statearr_30541_30567[(2)] = null);

(statearr_30541_30567[(1)] = (2));


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
});})(c__27776__auto___30553,out))
;
return ((function (switch__27664__auto__,c__27776__auto___30553,out){
return (function() {
var cljs$core$async$state_machine__27665__auto__ = null;
var cljs$core$async$state_machine__27665__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = cljs$core$async$state_machine__27665__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var cljs$core$async$state_machine__27665__auto____1 = (function (state_30519){
while(true){
var ret_value__27666__auto__ = (function (){try{while(true){
var result__27667__auto__ = switch__27664__auto__.call(null,state_30519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27667__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object)){
var ex__27668__auto__ = e30546;
var statearr_30547_30568 = state_30519;
(statearr_30547_30568[(5)] = ex__27668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30569 = state_30519;
state_30519 = G__30569;
continue;
} else {
return ret_value__27666__auto__;
}
break;
}
});
cljs$core$async$state_machine__27665__auto__ = function(state_30519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27665__auto____1.call(this,state_30519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27665__auto____0;
cljs$core$async$state_machine__27665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27665__auto____1;
return cljs$core$async$state_machine__27665__auto__;
})()
;})(switch__27664__auto__,c__27776__auto___30553,out))
})();
var state__27778__auto__ = (function (){var statearr_30548 = f__27777__auto__.call(null);
(statearr_30548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27776__auto___30553);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27778__auto__);
});})(c__27776__auto___30553,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489628683234