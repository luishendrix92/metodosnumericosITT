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
var args27067 = [];
var len__25923__auto___27073 = arguments.length;
var i__25924__auto___27074 = (0);
while(true){
if((i__25924__auto___27074 < len__25923__auto___27073)){
args27067.push((arguments[i__25924__auto___27074]));

var G__27075 = (i__25924__auto___27074 + (1));
i__25924__auto___27074 = G__27075;
continue;
} else {
}
break;
}

var G__27069 = args27067.length;
switch (G__27069) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27067.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27070 = (function (f,blockable,meta27071){
this.f = f;
this.blockable = blockable;
this.meta27071 = meta27071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27072,meta27071__$1){
var self__ = this;
var _27072__$1 = this;
return (new cljs.core.async.t_cljs$core$async27070(self__.f,self__.blockable,meta27071__$1));
});

cljs.core.async.t_cljs$core$async27070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27072){
var self__ = this;
var _27072__$1 = this;
return self__.meta27071;
});

cljs.core.async.t_cljs$core$async27070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27071","meta27071",-44623496,null)], null);
});

cljs.core.async.t_cljs$core$async27070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27070";

cljs.core.async.t_cljs$core$async27070.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27070");
});

cljs.core.async.__GT_t_cljs$core$async27070 = (function cljs$core$async$__GT_t_cljs$core$async27070(f__$1,blockable__$1,meta27071){
return (new cljs.core.async.t_cljs$core$async27070(f__$1,blockable__$1,meta27071));
});

}

return (new cljs.core.async.t_cljs$core$async27070(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27079 = [];
var len__25923__auto___27082 = arguments.length;
var i__25924__auto___27083 = (0);
while(true){
if((i__25924__auto___27083 < len__25923__auto___27082)){
args27079.push((arguments[i__25924__auto___27083]));

var G__27084 = (i__25924__auto___27083 + (1));
i__25924__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var G__27081 = args27079.length;
switch (G__27081) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27079.length)].join('')));

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
var args27086 = [];
var len__25923__auto___27089 = arguments.length;
var i__25924__auto___27090 = (0);
while(true){
if((i__25924__auto___27090 < len__25923__auto___27089)){
args27086.push((arguments[i__25924__auto___27090]));

var G__27091 = (i__25924__auto___27090 + (1));
i__25924__auto___27090 = G__27091;
continue;
} else {
}
break;
}

var G__27088 = args27086.length;
switch (G__27088) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27086.length)].join('')));

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
var args27093 = [];
var len__25923__auto___27096 = arguments.length;
var i__25924__auto___27097 = (0);
while(true){
if((i__25924__auto___27097 < len__25923__auto___27096)){
args27093.push((arguments[i__25924__auto___27097]));

var G__27098 = (i__25924__auto___27097 + (1));
i__25924__auto___27097 = G__27098;
continue;
} else {
}
break;
}

var G__27095 = args27093.length;
switch (G__27095) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27093.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27100 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27100);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27100,ret){
return (function (){
return fn1.call(null,val_27100);
});})(val_27100,ret))
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
var args27101 = [];
var len__25923__auto___27104 = arguments.length;
var i__25924__auto___27105 = (0);
while(true){
if((i__25924__auto___27105 < len__25923__auto___27104)){
args27101.push((arguments[i__25924__auto___27105]));

var G__27106 = (i__25924__auto___27105 + (1));
i__25924__auto___27105 = G__27106;
continue;
} else {
}
break;
}

var G__27103 = args27101.length;
switch (G__27103) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27101.length)].join('')));

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
var n__25763__auto___27108 = n;
var x_27109 = (0);
while(true){
if((x_27109 < n__25763__auto___27108)){
(a[x_27109] = (0));

var G__27110 = (x_27109 + (1));
x_27109 = G__27110;
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

var G__27111 = (i + (1));
i = G__27111;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27115 = (function (alt_flag,flag,meta27116){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27116 = meta27116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27117,meta27116__$1){
var self__ = this;
var _27117__$1 = this;
return (new cljs.core.async.t_cljs$core$async27115(self__.alt_flag,self__.flag,meta27116__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27117){
var self__ = this;
var _27117__$1 = this;
return self__.meta27116;
});})(flag))
;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27115.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27116","meta27116",1085713416,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27115";

cljs.core.async.t_cljs$core$async27115.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27115");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27115 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27115(alt_flag__$1,flag__$1,meta27116){
return (new cljs.core.async.t_cljs$core$async27115(alt_flag__$1,flag__$1,meta27116));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27115(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27121 = (function (alt_handler,flag,cb,meta27122){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27122 = meta27122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27123,meta27122__$1){
var self__ = this;
var _27123__$1 = this;
return (new cljs.core.async.t_cljs$core$async27121(self__.alt_handler,self__.flag,self__.cb,meta27122__$1));
});

cljs.core.async.t_cljs$core$async27121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27123){
var self__ = this;
var _27123__$1 = this;
return self__.meta27122;
});

cljs.core.async.t_cljs$core$async27121.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27122","meta27122",-1197453498,null)], null);
});

cljs.core.async.t_cljs$core$async27121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27121";

cljs.core.async.t_cljs$core$async27121.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async27121");
});

cljs.core.async.__GT_t_cljs$core$async27121 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27121(alt_handler__$1,flag__$1,cb__$1,meta27122){
return (new cljs.core.async.t_cljs$core$async27121(alt_handler__$1,flag__$1,cb__$1,meta27122));
});

}

return (new cljs.core.async.t_cljs$core$async27121(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27124_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27124_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27125_SHARP_,port], null));
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
var G__27126 = (i + (1));
i = G__27126;
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
var len__25923__auto___27132 = arguments.length;
var i__25924__auto___27133 = (0);
while(true){
if((i__25924__auto___27133 < len__25923__auto___27132)){
args__25930__auto__.push((arguments[i__25924__auto___27133]));

var G__27134 = (i__25924__auto___27133 + (1));
i__25924__auto___27133 = G__27134;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27129){
var map__27130 = p__27129;
var map__27130__$1 = ((((!((map__27130 == null)))?((((map__27130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27130):map__27130);
var opts = map__27130__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27127){
var G__27128 = cljs.core.first.call(null,seq27127);
var seq27127__$1 = cljs.core.next.call(null,seq27127);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27128,seq27127__$1);
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
var args27135 = [];
var len__25923__auto___27185 = arguments.length;
var i__25924__auto___27186 = (0);
while(true){
if((i__25924__auto___27186 < len__25923__auto___27185)){
args27135.push((arguments[i__25924__auto___27186]));

var G__27187 = (i__25924__auto___27186 + (1));
i__25924__auto___27186 = G__27187;
continue;
} else {
}
break;
}

var G__27137 = args27135.length;
switch (G__27137) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27135.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27022__auto___27189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___27189){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___27189){
return (function (state_27161){
var state_val_27162 = (state_27161[(1)]);
if((state_val_27162 === (7))){
var inst_27157 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
var statearr_27163_27190 = state_27161__$1;
(statearr_27163_27190[(2)] = inst_27157);

(statearr_27163_27190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (1))){
var state_27161__$1 = state_27161;
var statearr_27164_27191 = state_27161__$1;
(statearr_27164_27191[(2)] = null);

(statearr_27164_27191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (4))){
var inst_27140 = (state_27161[(7)]);
var inst_27140__$1 = (state_27161[(2)]);
var inst_27141 = (inst_27140__$1 == null);
var state_27161__$1 = (function (){var statearr_27165 = state_27161;
(statearr_27165[(7)] = inst_27140__$1);

return statearr_27165;
})();
if(cljs.core.truth_(inst_27141)){
var statearr_27166_27192 = state_27161__$1;
(statearr_27166_27192[(1)] = (5));

} else {
var statearr_27167_27193 = state_27161__$1;
(statearr_27167_27193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (13))){
var state_27161__$1 = state_27161;
var statearr_27168_27194 = state_27161__$1;
(statearr_27168_27194[(2)] = null);

(statearr_27168_27194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (6))){
var inst_27140 = (state_27161[(7)]);
var state_27161__$1 = state_27161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27161__$1,(11),to,inst_27140);
} else {
if((state_val_27162 === (3))){
var inst_27159 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27161__$1,inst_27159);
} else {
if((state_val_27162 === (12))){
var state_27161__$1 = state_27161;
var statearr_27169_27195 = state_27161__$1;
(statearr_27169_27195[(2)] = null);

(statearr_27169_27195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (2))){
var state_27161__$1 = state_27161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27161__$1,(4),from);
} else {
if((state_val_27162 === (11))){
var inst_27150 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
if(cljs.core.truth_(inst_27150)){
var statearr_27170_27196 = state_27161__$1;
(statearr_27170_27196[(1)] = (12));

} else {
var statearr_27171_27197 = state_27161__$1;
(statearr_27171_27197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (9))){
var state_27161__$1 = state_27161;
var statearr_27172_27198 = state_27161__$1;
(statearr_27172_27198[(2)] = null);

(statearr_27172_27198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (5))){
var state_27161__$1 = state_27161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27173_27199 = state_27161__$1;
(statearr_27173_27199[(1)] = (8));

} else {
var statearr_27174_27200 = state_27161__$1;
(statearr_27174_27200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (14))){
var inst_27155 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
var statearr_27175_27201 = state_27161__$1;
(statearr_27175_27201[(2)] = inst_27155);

(statearr_27175_27201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (10))){
var inst_27147 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
var statearr_27176_27202 = state_27161__$1;
(statearr_27176_27202[(2)] = inst_27147);

(statearr_27176_27202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (8))){
var inst_27144 = cljs.core.async.close_BANG_.call(null,to);
var state_27161__$1 = state_27161;
var statearr_27177_27203 = state_27161__$1;
(statearr_27177_27203[(2)] = inst_27144);

(statearr_27177_27203[(1)] = (10));


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
});})(c__27022__auto___27189))
;
return ((function (switch__26910__auto__,c__27022__auto___27189){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_27181 = [null,null,null,null,null,null,null,null];
(statearr_27181[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_27181[(1)] = (1));

return statearr_27181;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_27161){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27182){if((e27182 instanceof Object)){
var ex__26914__auto__ = e27182;
var statearr_27183_27204 = state_27161;
(statearr_27183_27204[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27205 = state_27161;
state_27161 = G__27205;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_27161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_27161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___27189))
})();
var state__27024__auto__ = (function (){var statearr_27184 = f__27023__auto__.call(null);
(statearr_27184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___27189);

return statearr_27184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___27189))
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
return (function (p__27393){
var vec__27394 = p__27393;
var v = cljs.core.nth.call(null,vec__27394,(0),null);
var p = cljs.core.nth.call(null,vec__27394,(1),null);
var job = vec__27394;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27022__auto___27580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___27580,res,vec__27394,v,p,job,jobs,results){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___27580,res,vec__27394,v,p,job,jobs,results){
return (function (state_27401){
var state_val_27402 = (state_27401[(1)]);
if((state_val_27402 === (1))){
var state_27401__$1 = state_27401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27401__$1,(2),res,v);
} else {
if((state_val_27402 === (2))){
var inst_27398 = (state_27401[(2)]);
var inst_27399 = cljs.core.async.close_BANG_.call(null,res);
var state_27401__$1 = (function (){var statearr_27403 = state_27401;
(statearr_27403[(7)] = inst_27398);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27401__$1,inst_27399);
} else {
return null;
}
}
});})(c__27022__auto___27580,res,vec__27394,v,p,job,jobs,results))
;
return ((function (switch__26910__auto__,c__27022__auto___27580,res,vec__27394,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_27407 = [null,null,null,null,null,null,null,null];
(statearr_27407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_27407[(1)] = (1));

return statearr_27407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_27401){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27408){if((e27408 instanceof Object)){
var ex__26914__auto__ = e27408;
var statearr_27409_27581 = state_27401;
(statearr_27409_27581[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27582 = state_27401;
state_27401 = G__27582;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_27401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_27401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___27580,res,vec__27394,v,p,job,jobs,results))
})();
var state__27024__auto__ = (function (){var statearr_27410 = f__27023__auto__.call(null);
(statearr_27410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___27580);

return statearr_27410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___27580,res,vec__27394,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27411){
var vec__27412 = p__27411;
var v = cljs.core.nth.call(null,vec__27412,(0),null);
var p = cljs.core.nth.call(null,vec__27412,(1),null);
var job = vec__27412;
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
var n__25763__auto___27583 = n;
var __27584 = (0);
while(true){
if((__27584 < n__25763__auto___27583)){
var G__27415_27585 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27415_27585) {
case "compute":
var c__27022__auto___27587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27584,c__27022__auto___27587,G__27415_27585,n__25763__auto___27583,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (__27584,c__27022__auto___27587,G__27415_27585,n__25763__auto___27583,jobs,results,process,async){
return (function (state_27428){
var state_val_27429 = (state_27428[(1)]);
if((state_val_27429 === (1))){
var state_27428__$1 = state_27428;
var statearr_27430_27588 = state_27428__$1;
(statearr_27430_27588[(2)] = null);

(statearr_27430_27588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (2))){
var state_27428__$1 = state_27428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27428__$1,(4),jobs);
} else {
if((state_val_27429 === (3))){
var inst_27426 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27428__$1,inst_27426);
} else {
if((state_val_27429 === (4))){
var inst_27418 = (state_27428[(2)]);
var inst_27419 = process.call(null,inst_27418);
var state_27428__$1 = state_27428;
if(cljs.core.truth_(inst_27419)){
var statearr_27431_27589 = state_27428__$1;
(statearr_27431_27589[(1)] = (5));

} else {
var statearr_27432_27590 = state_27428__$1;
(statearr_27432_27590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (5))){
var state_27428__$1 = state_27428;
var statearr_27433_27591 = state_27428__$1;
(statearr_27433_27591[(2)] = null);

(statearr_27433_27591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (6))){
var state_27428__$1 = state_27428;
var statearr_27434_27592 = state_27428__$1;
(statearr_27434_27592[(2)] = null);

(statearr_27434_27592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (7))){
var inst_27424 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
var statearr_27435_27593 = state_27428__$1;
(statearr_27435_27593[(2)] = inst_27424);

(statearr_27435_27593[(1)] = (3));


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
});})(__27584,c__27022__auto___27587,G__27415_27585,n__25763__auto___27583,jobs,results,process,async))
;
return ((function (__27584,switch__26910__auto__,c__27022__auto___27587,G__27415_27585,n__25763__auto___27583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_27439 = [null,null,null,null,null,null,null];
(statearr_27439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_27439[(1)] = (1));

return statearr_27439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_27428){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27440){if((e27440 instanceof Object)){
var ex__26914__auto__ = e27440;
var statearr_27441_27594 = state_27428;
(statearr_27441_27594[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27595 = state_27428;
state_27428 = G__27595;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_27428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_27428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(__27584,switch__26910__auto__,c__27022__auto___27587,G__27415_27585,n__25763__auto___27583,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_27442 = f__27023__auto__.call(null);
(statearr_27442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___27587);

return statearr_27442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(__27584,c__27022__auto___27587,G__27415_27585,n__25763__auto___27583,jobs,results,process,async))
);


break;
case "async":
var c__27022__auto___27596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27584,c__27022__auto___27596,G__27415_27585,n__25763__auto___27583,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (__27584,c__27022__auto___27596,G__27415_27585,n__25763__auto___27583,jobs,results,process,async){
return (function (state_27455){
var state_val_27456 = (state_27455[(1)]);
if((state_val_27456 === (1))){
var state_27455__$1 = state_27455;
var statearr_27457_27597 = state_27455__$1;
(statearr_27457_27597[(2)] = null);

(statearr_27457_27597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (2))){
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(4),jobs);
} else {
if((state_val_27456 === (3))){
var inst_27453 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27455__$1,inst_27453);
} else {
if((state_val_27456 === (4))){
var inst_27445 = (state_27455[(2)]);
var inst_27446 = async.call(null,inst_27445);
var state_27455__$1 = state_27455;
if(cljs.core.truth_(inst_27446)){
var statearr_27458_27598 = state_27455__$1;
(statearr_27458_27598[(1)] = (5));

} else {
var statearr_27459_27599 = state_27455__$1;
(statearr_27459_27599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (5))){
var state_27455__$1 = state_27455;
var statearr_27460_27600 = state_27455__$1;
(statearr_27460_27600[(2)] = null);

(statearr_27460_27600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (6))){
var state_27455__$1 = state_27455;
var statearr_27461_27601 = state_27455__$1;
(statearr_27461_27601[(2)] = null);

(statearr_27461_27601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (7))){
var inst_27451 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27462_27602 = state_27455__$1;
(statearr_27462_27602[(2)] = inst_27451);

(statearr_27462_27602[(1)] = (3));


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
});})(__27584,c__27022__auto___27596,G__27415_27585,n__25763__auto___27583,jobs,results,process,async))
;
return ((function (__27584,switch__26910__auto__,c__27022__auto___27596,G__27415_27585,n__25763__auto___27583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_27466 = [null,null,null,null,null,null,null];
(statearr_27466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_27466[(1)] = (1));

return statearr_27466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_27455){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27467){if((e27467 instanceof Object)){
var ex__26914__auto__ = e27467;
var statearr_27468_27603 = state_27455;
(statearr_27468_27603[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27604 = state_27455;
state_27455 = G__27604;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_27455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_27455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(__27584,switch__26910__auto__,c__27022__auto___27596,G__27415_27585,n__25763__auto___27583,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_27469 = f__27023__auto__.call(null);
(statearr_27469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___27596);

return statearr_27469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(__27584,c__27022__auto___27596,G__27415_27585,n__25763__auto___27583,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27605 = (__27584 + (1));
__27584 = G__27605;
continue;
} else {
}
break;
}

var c__27022__auto___27606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___27606,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___27606,jobs,results,process,async){
return (function (state_27491){
var state_val_27492 = (state_27491[(1)]);
if((state_val_27492 === (1))){
var state_27491__$1 = state_27491;
var statearr_27493_27607 = state_27491__$1;
(statearr_27493_27607[(2)] = null);

(statearr_27493_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (2))){
var state_27491__$1 = state_27491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27491__$1,(4),from);
} else {
if((state_val_27492 === (3))){
var inst_27489 = (state_27491[(2)]);
var state_27491__$1 = state_27491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27491__$1,inst_27489);
} else {
if((state_val_27492 === (4))){
var inst_27472 = (state_27491[(7)]);
var inst_27472__$1 = (state_27491[(2)]);
var inst_27473 = (inst_27472__$1 == null);
var state_27491__$1 = (function (){var statearr_27494 = state_27491;
(statearr_27494[(7)] = inst_27472__$1);

return statearr_27494;
})();
if(cljs.core.truth_(inst_27473)){
var statearr_27495_27608 = state_27491__$1;
(statearr_27495_27608[(1)] = (5));

} else {
var statearr_27496_27609 = state_27491__$1;
(statearr_27496_27609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (5))){
var inst_27475 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27491__$1 = state_27491;
var statearr_27497_27610 = state_27491__$1;
(statearr_27497_27610[(2)] = inst_27475);

(statearr_27497_27610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (6))){
var inst_27477 = (state_27491[(8)]);
var inst_27472 = (state_27491[(7)]);
var inst_27477__$1 = cljs.core.async.chan.call(null,(1));
var inst_27478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27479 = [inst_27472,inst_27477__$1];
var inst_27480 = (new cljs.core.PersistentVector(null,2,(5),inst_27478,inst_27479,null));
var state_27491__$1 = (function (){var statearr_27498 = state_27491;
(statearr_27498[(8)] = inst_27477__$1);

return statearr_27498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27491__$1,(8),jobs,inst_27480);
} else {
if((state_val_27492 === (7))){
var inst_27487 = (state_27491[(2)]);
var state_27491__$1 = state_27491;
var statearr_27499_27611 = state_27491__$1;
(statearr_27499_27611[(2)] = inst_27487);

(statearr_27499_27611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (8))){
var inst_27477 = (state_27491[(8)]);
var inst_27482 = (state_27491[(2)]);
var state_27491__$1 = (function (){var statearr_27500 = state_27491;
(statearr_27500[(9)] = inst_27482);

return statearr_27500;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27491__$1,(9),results,inst_27477);
} else {
if((state_val_27492 === (9))){
var inst_27484 = (state_27491[(2)]);
var state_27491__$1 = (function (){var statearr_27501 = state_27491;
(statearr_27501[(10)] = inst_27484);

return statearr_27501;
})();
var statearr_27502_27612 = state_27491__$1;
(statearr_27502_27612[(2)] = null);

(statearr_27502_27612[(1)] = (2));


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
});})(c__27022__auto___27606,jobs,results,process,async))
;
return ((function (switch__26910__auto__,c__27022__auto___27606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_27506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_27506[(1)] = (1));

return statearr_27506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_27491){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27507){if((e27507 instanceof Object)){
var ex__26914__auto__ = e27507;
var statearr_27508_27613 = state_27491;
(statearr_27508_27613[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27614 = state_27491;
state_27491 = G__27614;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_27491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_27491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___27606,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_27509 = f__27023__auto__.call(null);
(statearr_27509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___27606);

return statearr_27509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___27606,jobs,results,process,async))
);


var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__,jobs,results,process,async){
return (function (state_27547){
var state_val_27548 = (state_27547[(1)]);
if((state_val_27548 === (7))){
var inst_27543 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27549_27615 = state_27547__$1;
(statearr_27549_27615[(2)] = inst_27543);

(statearr_27549_27615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (20))){
var state_27547__$1 = state_27547;
var statearr_27550_27616 = state_27547__$1;
(statearr_27550_27616[(2)] = null);

(statearr_27550_27616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (1))){
var state_27547__$1 = state_27547;
var statearr_27551_27617 = state_27547__$1;
(statearr_27551_27617[(2)] = null);

(statearr_27551_27617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (4))){
var inst_27512 = (state_27547[(7)]);
var inst_27512__$1 = (state_27547[(2)]);
var inst_27513 = (inst_27512__$1 == null);
var state_27547__$1 = (function (){var statearr_27552 = state_27547;
(statearr_27552[(7)] = inst_27512__$1);

return statearr_27552;
})();
if(cljs.core.truth_(inst_27513)){
var statearr_27553_27618 = state_27547__$1;
(statearr_27553_27618[(1)] = (5));

} else {
var statearr_27554_27619 = state_27547__$1;
(statearr_27554_27619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (15))){
var inst_27525 = (state_27547[(8)]);
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27547__$1,(18),to,inst_27525);
} else {
if((state_val_27548 === (21))){
var inst_27538 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27555_27620 = state_27547__$1;
(statearr_27555_27620[(2)] = inst_27538);

(statearr_27555_27620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (13))){
var inst_27540 = (state_27547[(2)]);
var state_27547__$1 = (function (){var statearr_27556 = state_27547;
(statearr_27556[(9)] = inst_27540);

return statearr_27556;
})();
var statearr_27557_27621 = state_27547__$1;
(statearr_27557_27621[(2)] = null);

(statearr_27557_27621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (6))){
var inst_27512 = (state_27547[(7)]);
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(11),inst_27512);
} else {
if((state_val_27548 === (17))){
var inst_27533 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
if(cljs.core.truth_(inst_27533)){
var statearr_27558_27622 = state_27547__$1;
(statearr_27558_27622[(1)] = (19));

} else {
var statearr_27559_27623 = state_27547__$1;
(statearr_27559_27623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (3))){
var inst_27545 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27547__$1,inst_27545);
} else {
if((state_val_27548 === (12))){
var inst_27522 = (state_27547[(10)]);
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(14),inst_27522);
} else {
if((state_val_27548 === (2))){
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(4),results);
} else {
if((state_val_27548 === (19))){
var state_27547__$1 = state_27547;
var statearr_27560_27624 = state_27547__$1;
(statearr_27560_27624[(2)] = null);

(statearr_27560_27624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (11))){
var inst_27522 = (state_27547[(2)]);
var state_27547__$1 = (function (){var statearr_27561 = state_27547;
(statearr_27561[(10)] = inst_27522);

return statearr_27561;
})();
var statearr_27562_27625 = state_27547__$1;
(statearr_27562_27625[(2)] = null);

(statearr_27562_27625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (9))){
var state_27547__$1 = state_27547;
var statearr_27563_27626 = state_27547__$1;
(statearr_27563_27626[(2)] = null);

(statearr_27563_27626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (5))){
var state_27547__$1 = state_27547;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27564_27627 = state_27547__$1;
(statearr_27564_27627[(1)] = (8));

} else {
var statearr_27565_27628 = state_27547__$1;
(statearr_27565_27628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (14))){
var inst_27527 = (state_27547[(11)]);
var inst_27525 = (state_27547[(8)]);
var inst_27525__$1 = (state_27547[(2)]);
var inst_27526 = (inst_27525__$1 == null);
var inst_27527__$1 = cljs.core.not.call(null,inst_27526);
var state_27547__$1 = (function (){var statearr_27566 = state_27547;
(statearr_27566[(11)] = inst_27527__$1);

(statearr_27566[(8)] = inst_27525__$1);

return statearr_27566;
})();
if(inst_27527__$1){
var statearr_27567_27629 = state_27547__$1;
(statearr_27567_27629[(1)] = (15));

} else {
var statearr_27568_27630 = state_27547__$1;
(statearr_27568_27630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (16))){
var inst_27527 = (state_27547[(11)]);
var state_27547__$1 = state_27547;
var statearr_27569_27631 = state_27547__$1;
(statearr_27569_27631[(2)] = inst_27527);

(statearr_27569_27631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (10))){
var inst_27519 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27570_27632 = state_27547__$1;
(statearr_27570_27632[(2)] = inst_27519);

(statearr_27570_27632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (18))){
var inst_27530 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27571_27633 = state_27547__$1;
(statearr_27571_27633[(2)] = inst_27530);

(statearr_27571_27633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (8))){
var inst_27516 = cljs.core.async.close_BANG_.call(null,to);
var state_27547__$1 = state_27547;
var statearr_27572_27634 = state_27547__$1;
(statearr_27572_27634[(2)] = inst_27516);

(statearr_27572_27634[(1)] = (10));


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
});})(c__27022__auto__,jobs,results,process,async))
;
return ((function (switch__26910__auto__,c__27022__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_27576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_27576[(1)] = (1));

return statearr_27576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_27547){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27577){if((e27577 instanceof Object)){
var ex__26914__auto__ = e27577;
var statearr_27578_27635 = state_27547;
(statearr_27578_27635[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27636 = state_27547;
state_27547 = G__27636;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_27547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_27547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_27579 = f__27023__auto__.call(null);
(statearr_27579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_27579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__,jobs,results,process,async))
);

return c__27022__auto__;
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
var args27637 = [];
var len__25923__auto___27640 = arguments.length;
var i__25924__auto___27641 = (0);
while(true){
if((i__25924__auto___27641 < len__25923__auto___27640)){
args27637.push((arguments[i__25924__auto___27641]));

var G__27642 = (i__25924__auto___27641 + (1));
i__25924__auto___27641 = G__27642;
continue;
} else {
}
break;
}

var G__27639 = args27637.length;
switch (G__27639) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27637.length)].join('')));

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
var args27644 = [];
var len__25923__auto___27647 = arguments.length;
var i__25924__auto___27648 = (0);
while(true){
if((i__25924__auto___27648 < len__25923__auto___27647)){
args27644.push((arguments[i__25924__auto___27648]));

var G__27649 = (i__25924__auto___27648 + (1));
i__25924__auto___27648 = G__27649;
continue;
} else {
}
break;
}

var G__27646 = args27644.length;
switch (G__27646) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27644.length)].join('')));

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
var args27651 = [];
var len__25923__auto___27704 = arguments.length;
var i__25924__auto___27705 = (0);
while(true){
if((i__25924__auto___27705 < len__25923__auto___27704)){
args27651.push((arguments[i__25924__auto___27705]));

var G__27706 = (i__25924__auto___27705 + (1));
i__25924__auto___27705 = G__27706;
continue;
} else {
}
break;
}

var G__27653 = args27651.length;
switch (G__27653) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27651.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27022__auto___27708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___27708,tc,fc){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___27708,tc,fc){
return (function (state_27679){
var state_val_27680 = (state_27679[(1)]);
if((state_val_27680 === (7))){
var inst_27675 = (state_27679[(2)]);
var state_27679__$1 = state_27679;
var statearr_27681_27709 = state_27679__$1;
(statearr_27681_27709[(2)] = inst_27675);

(statearr_27681_27709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (1))){
var state_27679__$1 = state_27679;
var statearr_27682_27710 = state_27679__$1;
(statearr_27682_27710[(2)] = null);

(statearr_27682_27710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (4))){
var inst_27656 = (state_27679[(7)]);
var inst_27656__$1 = (state_27679[(2)]);
var inst_27657 = (inst_27656__$1 == null);
var state_27679__$1 = (function (){var statearr_27683 = state_27679;
(statearr_27683[(7)] = inst_27656__$1);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27657)){
var statearr_27684_27711 = state_27679__$1;
(statearr_27684_27711[(1)] = (5));

} else {
var statearr_27685_27712 = state_27679__$1;
(statearr_27685_27712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (13))){
var state_27679__$1 = state_27679;
var statearr_27686_27713 = state_27679__$1;
(statearr_27686_27713[(2)] = null);

(statearr_27686_27713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (6))){
var inst_27656 = (state_27679[(7)]);
var inst_27662 = p.call(null,inst_27656);
var state_27679__$1 = state_27679;
if(cljs.core.truth_(inst_27662)){
var statearr_27687_27714 = state_27679__$1;
(statearr_27687_27714[(1)] = (9));

} else {
var statearr_27688_27715 = state_27679__$1;
(statearr_27688_27715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (3))){
var inst_27677 = (state_27679[(2)]);
var state_27679__$1 = state_27679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27679__$1,inst_27677);
} else {
if((state_val_27680 === (12))){
var state_27679__$1 = state_27679;
var statearr_27689_27716 = state_27679__$1;
(statearr_27689_27716[(2)] = null);

(statearr_27689_27716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (2))){
var state_27679__$1 = state_27679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27679__$1,(4),ch);
} else {
if((state_val_27680 === (11))){
var inst_27656 = (state_27679[(7)]);
var inst_27666 = (state_27679[(2)]);
var state_27679__$1 = state_27679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27679__$1,(8),inst_27666,inst_27656);
} else {
if((state_val_27680 === (9))){
var state_27679__$1 = state_27679;
var statearr_27690_27717 = state_27679__$1;
(statearr_27690_27717[(2)] = tc);

(statearr_27690_27717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (5))){
var inst_27659 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27660 = cljs.core.async.close_BANG_.call(null,fc);
var state_27679__$1 = (function (){var statearr_27691 = state_27679;
(statearr_27691[(8)] = inst_27659);

return statearr_27691;
})();
var statearr_27692_27718 = state_27679__$1;
(statearr_27692_27718[(2)] = inst_27660);

(statearr_27692_27718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (14))){
var inst_27673 = (state_27679[(2)]);
var state_27679__$1 = state_27679;
var statearr_27693_27719 = state_27679__$1;
(statearr_27693_27719[(2)] = inst_27673);

(statearr_27693_27719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (10))){
var state_27679__$1 = state_27679;
var statearr_27694_27720 = state_27679__$1;
(statearr_27694_27720[(2)] = fc);

(statearr_27694_27720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (8))){
var inst_27668 = (state_27679[(2)]);
var state_27679__$1 = state_27679;
if(cljs.core.truth_(inst_27668)){
var statearr_27695_27721 = state_27679__$1;
(statearr_27695_27721[(1)] = (12));

} else {
var statearr_27696_27722 = state_27679__$1;
(statearr_27696_27722[(1)] = (13));

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
});})(c__27022__auto___27708,tc,fc))
;
return ((function (switch__26910__auto__,c__27022__auto___27708,tc,fc){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_27700 = [null,null,null,null,null,null,null,null,null];
(statearr_27700[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_27700[(1)] = (1));

return statearr_27700;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_27679){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27701){if((e27701 instanceof Object)){
var ex__26914__auto__ = e27701;
var statearr_27702_27723 = state_27679;
(statearr_27702_27723[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27724 = state_27679;
state_27679 = G__27724;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_27679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_27679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___27708,tc,fc))
})();
var state__27024__auto__ = (function (){var statearr_27703 = f__27023__auto__.call(null);
(statearr_27703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___27708);

return statearr_27703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___27708,tc,fc))
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
var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__){
return (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (7))){
var inst_27784 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27790_27811 = state_27788__$1;
(statearr_27790_27811[(2)] = inst_27784);

(statearr_27790_27811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (1))){
var inst_27768 = init;
var state_27788__$1 = (function (){var statearr_27791 = state_27788;
(statearr_27791[(7)] = inst_27768);

return statearr_27791;
})();
var statearr_27792_27812 = state_27788__$1;
(statearr_27792_27812[(2)] = null);

(statearr_27792_27812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (4))){
var inst_27771 = (state_27788[(8)]);
var inst_27771__$1 = (state_27788[(2)]);
var inst_27772 = (inst_27771__$1 == null);
var state_27788__$1 = (function (){var statearr_27793 = state_27788;
(statearr_27793[(8)] = inst_27771__$1);

return statearr_27793;
})();
if(cljs.core.truth_(inst_27772)){
var statearr_27794_27813 = state_27788__$1;
(statearr_27794_27813[(1)] = (5));

} else {
var statearr_27795_27814 = state_27788__$1;
(statearr_27795_27814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (6))){
var inst_27771 = (state_27788[(8)]);
var inst_27775 = (state_27788[(9)]);
var inst_27768 = (state_27788[(7)]);
var inst_27775__$1 = f.call(null,inst_27768,inst_27771);
var inst_27776 = cljs.core.reduced_QMARK_.call(null,inst_27775__$1);
var state_27788__$1 = (function (){var statearr_27796 = state_27788;
(statearr_27796[(9)] = inst_27775__$1);

return statearr_27796;
})();
if(inst_27776){
var statearr_27797_27815 = state_27788__$1;
(statearr_27797_27815[(1)] = (8));

} else {
var statearr_27798_27816 = state_27788__$1;
(statearr_27798_27816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (3))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (2))){
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(4),ch);
} else {
if((state_val_27789 === (9))){
var inst_27775 = (state_27788[(9)]);
var inst_27768 = inst_27775;
var state_27788__$1 = (function (){var statearr_27799 = state_27788;
(statearr_27799[(7)] = inst_27768);

return statearr_27799;
})();
var statearr_27800_27817 = state_27788__$1;
(statearr_27800_27817[(2)] = null);

(statearr_27800_27817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (5))){
var inst_27768 = (state_27788[(7)]);
var state_27788__$1 = state_27788;
var statearr_27801_27818 = state_27788__$1;
(statearr_27801_27818[(2)] = inst_27768);

(statearr_27801_27818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (10))){
var inst_27782 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27802_27819 = state_27788__$1;
(statearr_27802_27819[(2)] = inst_27782);

(statearr_27802_27819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (8))){
var inst_27775 = (state_27788[(9)]);
var inst_27778 = cljs.core.deref.call(null,inst_27775);
var state_27788__$1 = state_27788;
var statearr_27803_27820 = state_27788__$1;
(statearr_27803_27820[(2)] = inst_27778);

(statearr_27803_27820[(1)] = (10));


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
});})(c__27022__auto__))
;
return ((function (switch__26910__auto__,c__27022__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26911__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26911__auto____0 = (function (){
var statearr_27807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27807[(0)] = cljs$core$async$reduce_$_state_machine__26911__auto__);

(statearr_27807[(1)] = (1));

return statearr_27807;
});
var cljs$core$async$reduce_$_state_machine__26911__auto____1 = (function (state_27788){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27808){if((e27808 instanceof Object)){
var ex__26914__auto__ = e27808;
var statearr_27809_27821 = state_27788;
(statearr_27809_27821[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27822 = state_27788;
state_27788 = G__27822;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26911__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26911__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26911__auto____0;
cljs$core$async$reduce_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26911__auto____1;
return cljs$core$async$reduce_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_27810 = f__27023__auto__.call(null);
(statearr_27810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_27810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__))
);

return c__27022__auto__;
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
var args27823 = [];
var len__25923__auto___27875 = arguments.length;
var i__25924__auto___27876 = (0);
while(true){
if((i__25924__auto___27876 < len__25923__auto___27875)){
args27823.push((arguments[i__25924__auto___27876]));

var G__27877 = (i__25924__auto___27876 + (1));
i__25924__auto___27876 = G__27877;
continue;
} else {
}
break;
}

var G__27825 = args27823.length;
switch (G__27825) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27823.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__){
return (function (state_27850){
var state_val_27851 = (state_27850[(1)]);
if((state_val_27851 === (7))){
var inst_27832 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27852_27879 = state_27850__$1;
(statearr_27852_27879[(2)] = inst_27832);

(statearr_27852_27879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (1))){
var inst_27826 = cljs.core.seq.call(null,coll);
var inst_27827 = inst_27826;
var state_27850__$1 = (function (){var statearr_27853 = state_27850;
(statearr_27853[(7)] = inst_27827);

return statearr_27853;
})();
var statearr_27854_27880 = state_27850__$1;
(statearr_27854_27880[(2)] = null);

(statearr_27854_27880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (4))){
var inst_27827 = (state_27850[(7)]);
var inst_27830 = cljs.core.first.call(null,inst_27827);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27850__$1,(7),ch,inst_27830);
} else {
if((state_val_27851 === (13))){
var inst_27844 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27855_27881 = state_27850__$1;
(statearr_27855_27881[(2)] = inst_27844);

(statearr_27855_27881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (6))){
var inst_27835 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27835)){
var statearr_27856_27882 = state_27850__$1;
(statearr_27856_27882[(1)] = (8));

} else {
var statearr_27857_27883 = state_27850__$1;
(statearr_27857_27883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (3))){
var inst_27848 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27850__$1,inst_27848);
} else {
if((state_val_27851 === (12))){
var state_27850__$1 = state_27850;
var statearr_27858_27884 = state_27850__$1;
(statearr_27858_27884[(2)] = null);

(statearr_27858_27884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (2))){
var inst_27827 = (state_27850[(7)]);
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27827)){
var statearr_27859_27885 = state_27850__$1;
(statearr_27859_27885[(1)] = (4));

} else {
var statearr_27860_27886 = state_27850__$1;
(statearr_27860_27886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (11))){
var inst_27841 = cljs.core.async.close_BANG_.call(null,ch);
var state_27850__$1 = state_27850;
var statearr_27861_27887 = state_27850__$1;
(statearr_27861_27887[(2)] = inst_27841);

(statearr_27861_27887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (9))){
var state_27850__$1 = state_27850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27862_27888 = state_27850__$1;
(statearr_27862_27888[(1)] = (11));

} else {
var statearr_27863_27889 = state_27850__$1;
(statearr_27863_27889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (5))){
var inst_27827 = (state_27850[(7)]);
var state_27850__$1 = state_27850;
var statearr_27864_27890 = state_27850__$1;
(statearr_27864_27890[(2)] = inst_27827);

(statearr_27864_27890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (10))){
var inst_27846 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27865_27891 = state_27850__$1;
(statearr_27865_27891[(2)] = inst_27846);

(statearr_27865_27891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (8))){
var inst_27827 = (state_27850[(7)]);
var inst_27837 = cljs.core.next.call(null,inst_27827);
var inst_27827__$1 = inst_27837;
var state_27850__$1 = (function (){var statearr_27866 = state_27850;
(statearr_27866[(7)] = inst_27827__$1);

return statearr_27866;
})();
var statearr_27867_27892 = state_27850__$1;
(statearr_27867_27892[(2)] = null);

(statearr_27867_27892[(1)] = (2));


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
});})(c__27022__auto__))
;
return ((function (switch__26910__auto__,c__27022__auto__){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_27871 = [null,null,null,null,null,null,null,null];
(statearr_27871[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_27871[(1)] = (1));

return statearr_27871;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_27850){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_27850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e27872){if((e27872 instanceof Object)){
var ex__26914__auto__ = e27872;
var statearr_27873_27893 = state_27850;
(statearr_27873_27893[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27894 = state_27850;
state_27850 = G__27894;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_27850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_27850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_27874 = f__27023__auto__.call(null);
(statearr_27874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_27874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__))
);

return c__27022__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28120 = (function (mult,ch,cs,meta28121){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28121 = meta28121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28122,meta28121__$1){
var self__ = this;
var _28122__$1 = this;
return (new cljs.core.async.t_cljs$core$async28120(self__.mult,self__.ch,self__.cs,meta28121__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28122){
var self__ = this;
var _28122__$1 = this;
return self__.meta28121;
});})(cs))
;

cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28120.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28120.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28121","meta28121",-894546281,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28120";

cljs.core.async.t_cljs$core$async28120.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28120");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28120 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28120(mult__$1,ch__$1,cs__$1,meta28121){
return (new cljs.core.async.t_cljs$core$async28120(mult__$1,ch__$1,cs__$1,meta28121));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28120(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27022__auto___28345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___28345,cs,m,dchan,dctr,done){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___28345,cs,m,dchan,dctr,done){
return (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (7))){
var inst_28253 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28259_28346 = state_28257__$1;
(statearr_28259_28346[(2)] = inst_28253);

(statearr_28259_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (20))){
var inst_28156 = (state_28257[(7)]);
var inst_28168 = cljs.core.first.call(null,inst_28156);
var inst_28169 = cljs.core.nth.call(null,inst_28168,(0),null);
var inst_28170 = cljs.core.nth.call(null,inst_28168,(1),null);
var state_28257__$1 = (function (){var statearr_28260 = state_28257;
(statearr_28260[(8)] = inst_28169);

return statearr_28260;
})();
if(cljs.core.truth_(inst_28170)){
var statearr_28261_28347 = state_28257__$1;
(statearr_28261_28347[(1)] = (22));

} else {
var statearr_28262_28348 = state_28257__$1;
(statearr_28262_28348[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (27))){
var inst_28205 = (state_28257[(9)]);
var inst_28200 = (state_28257[(10)]);
var inst_28198 = (state_28257[(11)]);
var inst_28125 = (state_28257[(12)]);
var inst_28205__$1 = cljs.core._nth.call(null,inst_28198,inst_28200);
var inst_28206 = cljs.core.async.put_BANG_.call(null,inst_28205__$1,inst_28125,done);
var state_28257__$1 = (function (){var statearr_28263 = state_28257;
(statearr_28263[(9)] = inst_28205__$1);

return statearr_28263;
})();
if(cljs.core.truth_(inst_28206)){
var statearr_28264_28349 = state_28257__$1;
(statearr_28264_28349[(1)] = (30));

} else {
var statearr_28265_28350 = state_28257__$1;
(statearr_28265_28350[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (1))){
var state_28257__$1 = state_28257;
var statearr_28266_28351 = state_28257__$1;
(statearr_28266_28351[(2)] = null);

(statearr_28266_28351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (24))){
var inst_28156 = (state_28257[(7)]);
var inst_28175 = (state_28257[(2)]);
var inst_28176 = cljs.core.next.call(null,inst_28156);
var inst_28134 = inst_28176;
var inst_28135 = null;
var inst_28136 = (0);
var inst_28137 = (0);
var state_28257__$1 = (function (){var statearr_28267 = state_28257;
(statearr_28267[(13)] = inst_28136);

(statearr_28267[(14)] = inst_28135);

(statearr_28267[(15)] = inst_28134);

(statearr_28267[(16)] = inst_28175);

(statearr_28267[(17)] = inst_28137);

return statearr_28267;
})();
var statearr_28268_28352 = state_28257__$1;
(statearr_28268_28352[(2)] = null);

(statearr_28268_28352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (39))){
var state_28257__$1 = state_28257;
var statearr_28272_28353 = state_28257__$1;
(statearr_28272_28353[(2)] = null);

(statearr_28272_28353[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (4))){
var inst_28125 = (state_28257[(12)]);
var inst_28125__$1 = (state_28257[(2)]);
var inst_28126 = (inst_28125__$1 == null);
var state_28257__$1 = (function (){var statearr_28273 = state_28257;
(statearr_28273[(12)] = inst_28125__$1);

return statearr_28273;
})();
if(cljs.core.truth_(inst_28126)){
var statearr_28274_28354 = state_28257__$1;
(statearr_28274_28354[(1)] = (5));

} else {
var statearr_28275_28355 = state_28257__$1;
(statearr_28275_28355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (15))){
var inst_28136 = (state_28257[(13)]);
var inst_28135 = (state_28257[(14)]);
var inst_28134 = (state_28257[(15)]);
var inst_28137 = (state_28257[(17)]);
var inst_28152 = (state_28257[(2)]);
var inst_28153 = (inst_28137 + (1));
var tmp28269 = inst_28136;
var tmp28270 = inst_28135;
var tmp28271 = inst_28134;
var inst_28134__$1 = tmp28271;
var inst_28135__$1 = tmp28270;
var inst_28136__$1 = tmp28269;
var inst_28137__$1 = inst_28153;
var state_28257__$1 = (function (){var statearr_28276 = state_28257;
(statearr_28276[(13)] = inst_28136__$1);

(statearr_28276[(14)] = inst_28135__$1);

(statearr_28276[(15)] = inst_28134__$1);

(statearr_28276[(18)] = inst_28152);

(statearr_28276[(17)] = inst_28137__$1);

return statearr_28276;
})();
var statearr_28277_28356 = state_28257__$1;
(statearr_28277_28356[(2)] = null);

(statearr_28277_28356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (21))){
var inst_28179 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28281_28357 = state_28257__$1;
(statearr_28281_28357[(2)] = inst_28179);

(statearr_28281_28357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (31))){
var inst_28205 = (state_28257[(9)]);
var inst_28209 = done.call(null,null);
var inst_28210 = cljs.core.async.untap_STAR_.call(null,m,inst_28205);
var state_28257__$1 = (function (){var statearr_28282 = state_28257;
(statearr_28282[(19)] = inst_28209);

return statearr_28282;
})();
var statearr_28283_28358 = state_28257__$1;
(statearr_28283_28358[(2)] = inst_28210);

(statearr_28283_28358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (32))){
var inst_28199 = (state_28257[(20)]);
var inst_28197 = (state_28257[(21)]);
var inst_28200 = (state_28257[(10)]);
var inst_28198 = (state_28257[(11)]);
var inst_28212 = (state_28257[(2)]);
var inst_28213 = (inst_28200 + (1));
var tmp28278 = inst_28199;
var tmp28279 = inst_28197;
var tmp28280 = inst_28198;
var inst_28197__$1 = tmp28279;
var inst_28198__$1 = tmp28280;
var inst_28199__$1 = tmp28278;
var inst_28200__$1 = inst_28213;
var state_28257__$1 = (function (){var statearr_28284 = state_28257;
(statearr_28284[(22)] = inst_28212);

(statearr_28284[(20)] = inst_28199__$1);

(statearr_28284[(21)] = inst_28197__$1);

(statearr_28284[(10)] = inst_28200__$1);

(statearr_28284[(11)] = inst_28198__$1);

return statearr_28284;
})();
var statearr_28285_28359 = state_28257__$1;
(statearr_28285_28359[(2)] = null);

(statearr_28285_28359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (40))){
var inst_28225 = (state_28257[(23)]);
var inst_28229 = done.call(null,null);
var inst_28230 = cljs.core.async.untap_STAR_.call(null,m,inst_28225);
var state_28257__$1 = (function (){var statearr_28286 = state_28257;
(statearr_28286[(24)] = inst_28229);

return statearr_28286;
})();
var statearr_28287_28360 = state_28257__$1;
(statearr_28287_28360[(2)] = inst_28230);

(statearr_28287_28360[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (33))){
var inst_28216 = (state_28257[(25)]);
var inst_28218 = cljs.core.chunked_seq_QMARK_.call(null,inst_28216);
var state_28257__$1 = state_28257;
if(inst_28218){
var statearr_28288_28361 = state_28257__$1;
(statearr_28288_28361[(1)] = (36));

} else {
var statearr_28289_28362 = state_28257__$1;
(statearr_28289_28362[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (13))){
var inst_28146 = (state_28257[(26)]);
var inst_28149 = cljs.core.async.close_BANG_.call(null,inst_28146);
var state_28257__$1 = state_28257;
var statearr_28290_28363 = state_28257__$1;
(statearr_28290_28363[(2)] = inst_28149);

(statearr_28290_28363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (22))){
var inst_28169 = (state_28257[(8)]);
var inst_28172 = cljs.core.async.close_BANG_.call(null,inst_28169);
var state_28257__$1 = state_28257;
var statearr_28291_28364 = state_28257__$1;
(statearr_28291_28364[(2)] = inst_28172);

(statearr_28291_28364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (36))){
var inst_28216 = (state_28257[(25)]);
var inst_28220 = cljs.core.chunk_first.call(null,inst_28216);
var inst_28221 = cljs.core.chunk_rest.call(null,inst_28216);
var inst_28222 = cljs.core.count.call(null,inst_28220);
var inst_28197 = inst_28221;
var inst_28198 = inst_28220;
var inst_28199 = inst_28222;
var inst_28200 = (0);
var state_28257__$1 = (function (){var statearr_28292 = state_28257;
(statearr_28292[(20)] = inst_28199);

(statearr_28292[(21)] = inst_28197);

(statearr_28292[(10)] = inst_28200);

(statearr_28292[(11)] = inst_28198);

return statearr_28292;
})();
var statearr_28293_28365 = state_28257__$1;
(statearr_28293_28365[(2)] = null);

(statearr_28293_28365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (41))){
var inst_28216 = (state_28257[(25)]);
var inst_28232 = (state_28257[(2)]);
var inst_28233 = cljs.core.next.call(null,inst_28216);
var inst_28197 = inst_28233;
var inst_28198 = null;
var inst_28199 = (0);
var inst_28200 = (0);
var state_28257__$1 = (function (){var statearr_28294 = state_28257;
(statearr_28294[(20)] = inst_28199);

(statearr_28294[(21)] = inst_28197);

(statearr_28294[(10)] = inst_28200);

(statearr_28294[(11)] = inst_28198);

(statearr_28294[(27)] = inst_28232);

return statearr_28294;
})();
var statearr_28295_28366 = state_28257__$1;
(statearr_28295_28366[(2)] = null);

(statearr_28295_28366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (43))){
var state_28257__$1 = state_28257;
var statearr_28296_28367 = state_28257__$1;
(statearr_28296_28367[(2)] = null);

(statearr_28296_28367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (29))){
var inst_28241 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28297_28368 = state_28257__$1;
(statearr_28297_28368[(2)] = inst_28241);

(statearr_28297_28368[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (44))){
var inst_28250 = (state_28257[(2)]);
var state_28257__$1 = (function (){var statearr_28298 = state_28257;
(statearr_28298[(28)] = inst_28250);

return statearr_28298;
})();
var statearr_28299_28369 = state_28257__$1;
(statearr_28299_28369[(2)] = null);

(statearr_28299_28369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (6))){
var inst_28189 = (state_28257[(29)]);
var inst_28188 = cljs.core.deref.call(null,cs);
var inst_28189__$1 = cljs.core.keys.call(null,inst_28188);
var inst_28190 = cljs.core.count.call(null,inst_28189__$1);
var inst_28191 = cljs.core.reset_BANG_.call(null,dctr,inst_28190);
var inst_28196 = cljs.core.seq.call(null,inst_28189__$1);
var inst_28197 = inst_28196;
var inst_28198 = null;
var inst_28199 = (0);
var inst_28200 = (0);
var state_28257__$1 = (function (){var statearr_28300 = state_28257;
(statearr_28300[(29)] = inst_28189__$1);

(statearr_28300[(20)] = inst_28199);

(statearr_28300[(21)] = inst_28197);

(statearr_28300[(30)] = inst_28191);

(statearr_28300[(10)] = inst_28200);

(statearr_28300[(11)] = inst_28198);

return statearr_28300;
})();
var statearr_28301_28370 = state_28257__$1;
(statearr_28301_28370[(2)] = null);

(statearr_28301_28370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (28))){
var inst_28197 = (state_28257[(21)]);
var inst_28216 = (state_28257[(25)]);
var inst_28216__$1 = cljs.core.seq.call(null,inst_28197);
var state_28257__$1 = (function (){var statearr_28302 = state_28257;
(statearr_28302[(25)] = inst_28216__$1);

return statearr_28302;
})();
if(inst_28216__$1){
var statearr_28303_28371 = state_28257__$1;
(statearr_28303_28371[(1)] = (33));

} else {
var statearr_28304_28372 = state_28257__$1;
(statearr_28304_28372[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (25))){
var inst_28199 = (state_28257[(20)]);
var inst_28200 = (state_28257[(10)]);
var inst_28202 = (inst_28200 < inst_28199);
var inst_28203 = inst_28202;
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28203)){
var statearr_28305_28373 = state_28257__$1;
(statearr_28305_28373[(1)] = (27));

} else {
var statearr_28306_28374 = state_28257__$1;
(statearr_28306_28374[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (34))){
var state_28257__$1 = state_28257;
var statearr_28307_28375 = state_28257__$1;
(statearr_28307_28375[(2)] = null);

(statearr_28307_28375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (17))){
var state_28257__$1 = state_28257;
var statearr_28308_28376 = state_28257__$1;
(statearr_28308_28376[(2)] = null);

(statearr_28308_28376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (3))){
var inst_28255 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (12))){
var inst_28184 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28309_28377 = state_28257__$1;
(statearr_28309_28377[(2)] = inst_28184);

(statearr_28309_28377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (2))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(4),ch);
} else {
if((state_val_28258 === (23))){
var state_28257__$1 = state_28257;
var statearr_28310_28378 = state_28257__$1;
(statearr_28310_28378[(2)] = null);

(statearr_28310_28378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (35))){
var inst_28239 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28311_28379 = state_28257__$1;
(statearr_28311_28379[(2)] = inst_28239);

(statearr_28311_28379[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (19))){
var inst_28156 = (state_28257[(7)]);
var inst_28160 = cljs.core.chunk_first.call(null,inst_28156);
var inst_28161 = cljs.core.chunk_rest.call(null,inst_28156);
var inst_28162 = cljs.core.count.call(null,inst_28160);
var inst_28134 = inst_28161;
var inst_28135 = inst_28160;
var inst_28136 = inst_28162;
var inst_28137 = (0);
var state_28257__$1 = (function (){var statearr_28312 = state_28257;
(statearr_28312[(13)] = inst_28136);

(statearr_28312[(14)] = inst_28135);

(statearr_28312[(15)] = inst_28134);

(statearr_28312[(17)] = inst_28137);

return statearr_28312;
})();
var statearr_28313_28380 = state_28257__$1;
(statearr_28313_28380[(2)] = null);

(statearr_28313_28380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (11))){
var inst_28134 = (state_28257[(15)]);
var inst_28156 = (state_28257[(7)]);
var inst_28156__$1 = cljs.core.seq.call(null,inst_28134);
var state_28257__$1 = (function (){var statearr_28314 = state_28257;
(statearr_28314[(7)] = inst_28156__$1);

return statearr_28314;
})();
if(inst_28156__$1){
var statearr_28315_28381 = state_28257__$1;
(statearr_28315_28381[(1)] = (16));

} else {
var statearr_28316_28382 = state_28257__$1;
(statearr_28316_28382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (9))){
var inst_28186 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28317_28383 = state_28257__$1;
(statearr_28317_28383[(2)] = inst_28186);

(statearr_28317_28383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (5))){
var inst_28132 = cljs.core.deref.call(null,cs);
var inst_28133 = cljs.core.seq.call(null,inst_28132);
var inst_28134 = inst_28133;
var inst_28135 = null;
var inst_28136 = (0);
var inst_28137 = (0);
var state_28257__$1 = (function (){var statearr_28318 = state_28257;
(statearr_28318[(13)] = inst_28136);

(statearr_28318[(14)] = inst_28135);

(statearr_28318[(15)] = inst_28134);

(statearr_28318[(17)] = inst_28137);

return statearr_28318;
})();
var statearr_28319_28384 = state_28257__$1;
(statearr_28319_28384[(2)] = null);

(statearr_28319_28384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (14))){
var state_28257__$1 = state_28257;
var statearr_28320_28385 = state_28257__$1;
(statearr_28320_28385[(2)] = null);

(statearr_28320_28385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (45))){
var inst_28247 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28321_28386 = state_28257__$1;
(statearr_28321_28386[(2)] = inst_28247);

(statearr_28321_28386[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (26))){
var inst_28189 = (state_28257[(29)]);
var inst_28243 = (state_28257[(2)]);
var inst_28244 = cljs.core.seq.call(null,inst_28189);
var state_28257__$1 = (function (){var statearr_28322 = state_28257;
(statearr_28322[(31)] = inst_28243);

return statearr_28322;
})();
if(inst_28244){
var statearr_28323_28387 = state_28257__$1;
(statearr_28323_28387[(1)] = (42));

} else {
var statearr_28324_28388 = state_28257__$1;
(statearr_28324_28388[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (16))){
var inst_28156 = (state_28257[(7)]);
var inst_28158 = cljs.core.chunked_seq_QMARK_.call(null,inst_28156);
var state_28257__$1 = state_28257;
if(inst_28158){
var statearr_28325_28389 = state_28257__$1;
(statearr_28325_28389[(1)] = (19));

} else {
var statearr_28326_28390 = state_28257__$1;
(statearr_28326_28390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (38))){
var inst_28236 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28327_28391 = state_28257__$1;
(statearr_28327_28391[(2)] = inst_28236);

(statearr_28327_28391[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (30))){
var state_28257__$1 = state_28257;
var statearr_28328_28392 = state_28257__$1;
(statearr_28328_28392[(2)] = null);

(statearr_28328_28392[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (10))){
var inst_28135 = (state_28257[(14)]);
var inst_28137 = (state_28257[(17)]);
var inst_28145 = cljs.core._nth.call(null,inst_28135,inst_28137);
var inst_28146 = cljs.core.nth.call(null,inst_28145,(0),null);
var inst_28147 = cljs.core.nth.call(null,inst_28145,(1),null);
var state_28257__$1 = (function (){var statearr_28329 = state_28257;
(statearr_28329[(26)] = inst_28146);

return statearr_28329;
})();
if(cljs.core.truth_(inst_28147)){
var statearr_28330_28393 = state_28257__$1;
(statearr_28330_28393[(1)] = (13));

} else {
var statearr_28331_28394 = state_28257__$1;
(statearr_28331_28394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (18))){
var inst_28182 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28332_28395 = state_28257__$1;
(statearr_28332_28395[(2)] = inst_28182);

(statearr_28332_28395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (42))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(45),dchan);
} else {
if((state_val_28258 === (37))){
var inst_28225 = (state_28257[(23)]);
var inst_28216 = (state_28257[(25)]);
var inst_28125 = (state_28257[(12)]);
var inst_28225__$1 = cljs.core.first.call(null,inst_28216);
var inst_28226 = cljs.core.async.put_BANG_.call(null,inst_28225__$1,inst_28125,done);
var state_28257__$1 = (function (){var statearr_28333 = state_28257;
(statearr_28333[(23)] = inst_28225__$1);

return statearr_28333;
})();
if(cljs.core.truth_(inst_28226)){
var statearr_28334_28396 = state_28257__$1;
(statearr_28334_28396[(1)] = (39));

} else {
var statearr_28335_28397 = state_28257__$1;
(statearr_28335_28397[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28136 = (state_28257[(13)]);
var inst_28137 = (state_28257[(17)]);
var inst_28139 = (inst_28137 < inst_28136);
var inst_28140 = inst_28139;
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28140)){
var statearr_28336_28398 = state_28257__$1;
(statearr_28336_28398[(1)] = (10));

} else {
var statearr_28337_28399 = state_28257__$1;
(statearr_28337_28399[(1)] = (11));

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
});})(c__27022__auto___28345,cs,m,dchan,dctr,done))
;
return ((function (switch__26910__auto__,c__27022__auto___28345,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26911__auto__ = null;
var cljs$core$async$mult_$_state_machine__26911__auto____0 = (function (){
var statearr_28341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28341[(0)] = cljs$core$async$mult_$_state_machine__26911__auto__);

(statearr_28341[(1)] = (1));

return statearr_28341;
});
var cljs$core$async$mult_$_state_machine__26911__auto____1 = (function (state_28257){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_28257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e28342){if((e28342 instanceof Object)){
var ex__26914__auto__ = e28342;
var statearr_28343_28400 = state_28257;
(statearr_28343_28400[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28401 = state_28257;
state_28257 = G__28401;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26911__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26911__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26911__auto____0;
cljs$core$async$mult_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26911__auto____1;
return cljs$core$async$mult_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___28345,cs,m,dchan,dctr,done))
})();
var state__27024__auto__ = (function (){var statearr_28344 = f__27023__auto__.call(null);
(statearr_28344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___28345);

return statearr_28344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___28345,cs,m,dchan,dctr,done))
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
var args28402 = [];
var len__25923__auto___28405 = arguments.length;
var i__25924__auto___28406 = (0);
while(true){
if((i__25924__auto___28406 < len__25923__auto___28405)){
args28402.push((arguments[i__25924__auto___28406]));

var G__28407 = (i__25924__auto___28406 + (1));
i__25924__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var G__28404 = args28402.length;
switch (G__28404) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28402.length)].join('')));

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
var len__25923__auto___28419 = arguments.length;
var i__25924__auto___28420 = (0);
while(true){
if((i__25924__auto___28420 < len__25923__auto___28419)){
args__25930__auto__.push((arguments[i__25924__auto___28420]));

var G__28421 = (i__25924__auto___28420 + (1));
i__25924__auto___28420 = G__28421;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28413){
var map__28414 = p__28413;
var map__28414__$1 = ((((!((map__28414 == null)))?((((map__28414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28414):map__28414);
var opts = map__28414__$1;
var statearr_28416_28422 = state;
(statearr_28416_28422[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28414,map__28414__$1,opts){
return (function (val){
var statearr_28417_28423 = state;
(statearr_28417_28423[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28414,map__28414__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28418_28424 = state;
(statearr_28418_28424[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28409){
var G__28410 = cljs.core.first.call(null,seq28409);
var seq28409__$1 = cljs.core.next.call(null,seq28409);
var G__28411 = cljs.core.first.call(null,seq28409__$1);
var seq28409__$2 = cljs.core.next.call(null,seq28409__$1);
var G__28412 = cljs.core.first.call(null,seq28409__$2);
var seq28409__$3 = cljs.core.next.call(null,seq28409__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28410,G__28411,G__28412,seq28409__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28590 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28591){
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
this.meta28591 = meta28591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28592,meta28591__$1){
var self__ = this;
var _28592__$1 = this;
return (new cljs.core.async.t_cljs$core$async28590(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28591__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28592){
var self__ = this;
var _28592__$1 = this;
return self__.meta28591;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28590.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28591","meta28591",1886285192,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28590";

cljs.core.async.t_cljs$core$async28590.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28590");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28590 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28590(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28591){
return (new cljs.core.async.t_cljs$core$async28590(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28591));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28590(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27022__auto___28755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___28755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___28755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (7))){
var inst_28608 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28694_28756 = state_28692__$1;
(statearr_28694_28756[(2)] = inst_28608);

(statearr_28694_28756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (20))){
var inst_28620 = (state_28692[(7)]);
var state_28692__$1 = state_28692;
var statearr_28695_28757 = state_28692__$1;
(statearr_28695_28757[(2)] = inst_28620);

(statearr_28695_28757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (27))){
var state_28692__$1 = state_28692;
var statearr_28696_28758 = state_28692__$1;
(statearr_28696_28758[(2)] = null);

(statearr_28696_28758[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (1))){
var inst_28596 = (state_28692[(8)]);
var inst_28596__$1 = calc_state.call(null);
var inst_28598 = (inst_28596__$1 == null);
var inst_28599 = cljs.core.not.call(null,inst_28598);
var state_28692__$1 = (function (){var statearr_28697 = state_28692;
(statearr_28697[(8)] = inst_28596__$1);

return statearr_28697;
})();
if(inst_28599){
var statearr_28698_28759 = state_28692__$1;
(statearr_28698_28759[(1)] = (2));

} else {
var statearr_28699_28760 = state_28692__$1;
(statearr_28699_28760[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (24))){
var inst_28643 = (state_28692[(9)]);
var inst_28652 = (state_28692[(10)]);
var inst_28666 = (state_28692[(11)]);
var inst_28666__$1 = inst_28643.call(null,inst_28652);
var state_28692__$1 = (function (){var statearr_28700 = state_28692;
(statearr_28700[(11)] = inst_28666__$1);

return statearr_28700;
})();
if(cljs.core.truth_(inst_28666__$1)){
var statearr_28701_28761 = state_28692__$1;
(statearr_28701_28761[(1)] = (29));

} else {
var statearr_28702_28762 = state_28692__$1;
(statearr_28702_28762[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (4))){
var inst_28611 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28611)){
var statearr_28703_28763 = state_28692__$1;
(statearr_28703_28763[(1)] = (8));

} else {
var statearr_28704_28764 = state_28692__$1;
(statearr_28704_28764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (15))){
var inst_28637 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28637)){
var statearr_28705_28765 = state_28692__$1;
(statearr_28705_28765[(1)] = (19));

} else {
var statearr_28706_28766 = state_28692__$1;
(statearr_28706_28766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (21))){
var inst_28642 = (state_28692[(12)]);
var inst_28642__$1 = (state_28692[(2)]);
var inst_28643 = cljs.core.get.call(null,inst_28642__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28644 = cljs.core.get.call(null,inst_28642__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28645 = cljs.core.get.call(null,inst_28642__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28692__$1 = (function (){var statearr_28707 = state_28692;
(statearr_28707[(12)] = inst_28642__$1);

(statearr_28707[(9)] = inst_28643);

(statearr_28707[(13)] = inst_28644);

return statearr_28707;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28692__$1,(22),inst_28645);
} else {
if((state_val_28693 === (31))){
var inst_28674 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28674)){
var statearr_28708_28767 = state_28692__$1;
(statearr_28708_28767[(1)] = (32));

} else {
var statearr_28709_28768 = state_28692__$1;
(statearr_28709_28768[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (32))){
var inst_28651 = (state_28692[(14)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28692__$1,(35),out,inst_28651);
} else {
if((state_val_28693 === (33))){
var inst_28642 = (state_28692[(12)]);
var inst_28620 = inst_28642;
var state_28692__$1 = (function (){var statearr_28710 = state_28692;
(statearr_28710[(7)] = inst_28620);

return statearr_28710;
})();
var statearr_28711_28769 = state_28692__$1;
(statearr_28711_28769[(2)] = null);

(statearr_28711_28769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (13))){
var inst_28620 = (state_28692[(7)]);
var inst_28627 = inst_28620.cljs$lang$protocol_mask$partition0$;
var inst_28628 = (inst_28627 & (64));
var inst_28629 = inst_28620.cljs$core$ISeq$;
var inst_28630 = (inst_28628) || (inst_28629);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28630)){
var statearr_28712_28770 = state_28692__$1;
(statearr_28712_28770[(1)] = (16));

} else {
var statearr_28713_28771 = state_28692__$1;
(statearr_28713_28771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (22))){
var inst_28652 = (state_28692[(10)]);
var inst_28651 = (state_28692[(14)]);
var inst_28650 = (state_28692[(2)]);
var inst_28651__$1 = cljs.core.nth.call(null,inst_28650,(0),null);
var inst_28652__$1 = cljs.core.nth.call(null,inst_28650,(1),null);
var inst_28653 = (inst_28651__$1 == null);
var inst_28654 = cljs.core._EQ_.call(null,inst_28652__$1,change);
var inst_28655 = (inst_28653) || (inst_28654);
var state_28692__$1 = (function (){var statearr_28714 = state_28692;
(statearr_28714[(10)] = inst_28652__$1);

(statearr_28714[(14)] = inst_28651__$1);

return statearr_28714;
})();
if(cljs.core.truth_(inst_28655)){
var statearr_28715_28772 = state_28692__$1;
(statearr_28715_28772[(1)] = (23));

} else {
var statearr_28716_28773 = state_28692__$1;
(statearr_28716_28773[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (36))){
var inst_28642 = (state_28692[(12)]);
var inst_28620 = inst_28642;
var state_28692__$1 = (function (){var statearr_28717 = state_28692;
(statearr_28717[(7)] = inst_28620);

return statearr_28717;
})();
var statearr_28718_28774 = state_28692__$1;
(statearr_28718_28774[(2)] = null);

(statearr_28718_28774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (29))){
var inst_28666 = (state_28692[(11)]);
var state_28692__$1 = state_28692;
var statearr_28719_28775 = state_28692__$1;
(statearr_28719_28775[(2)] = inst_28666);

(statearr_28719_28775[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (6))){
var state_28692__$1 = state_28692;
var statearr_28720_28776 = state_28692__$1;
(statearr_28720_28776[(2)] = false);

(statearr_28720_28776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (28))){
var inst_28662 = (state_28692[(2)]);
var inst_28663 = calc_state.call(null);
var inst_28620 = inst_28663;
var state_28692__$1 = (function (){var statearr_28721 = state_28692;
(statearr_28721[(15)] = inst_28662);

(statearr_28721[(7)] = inst_28620);

return statearr_28721;
})();
var statearr_28722_28777 = state_28692__$1;
(statearr_28722_28777[(2)] = null);

(statearr_28722_28777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (25))){
var inst_28688 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28723_28778 = state_28692__$1;
(statearr_28723_28778[(2)] = inst_28688);

(statearr_28723_28778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (34))){
var inst_28686 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28724_28779 = state_28692__$1;
(statearr_28724_28779[(2)] = inst_28686);

(statearr_28724_28779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (17))){
var state_28692__$1 = state_28692;
var statearr_28725_28780 = state_28692__$1;
(statearr_28725_28780[(2)] = false);

(statearr_28725_28780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (3))){
var state_28692__$1 = state_28692;
var statearr_28726_28781 = state_28692__$1;
(statearr_28726_28781[(2)] = false);

(statearr_28726_28781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (12))){
var inst_28690 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28692__$1,inst_28690);
} else {
if((state_val_28693 === (2))){
var inst_28596 = (state_28692[(8)]);
var inst_28601 = inst_28596.cljs$lang$protocol_mask$partition0$;
var inst_28602 = (inst_28601 & (64));
var inst_28603 = inst_28596.cljs$core$ISeq$;
var inst_28604 = (inst_28602) || (inst_28603);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28604)){
var statearr_28727_28782 = state_28692__$1;
(statearr_28727_28782[(1)] = (5));

} else {
var statearr_28728_28783 = state_28692__$1;
(statearr_28728_28783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (23))){
var inst_28651 = (state_28692[(14)]);
var inst_28657 = (inst_28651 == null);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28657)){
var statearr_28729_28784 = state_28692__$1;
(statearr_28729_28784[(1)] = (26));

} else {
var statearr_28730_28785 = state_28692__$1;
(statearr_28730_28785[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (35))){
var inst_28677 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28677)){
var statearr_28731_28786 = state_28692__$1;
(statearr_28731_28786[(1)] = (36));

} else {
var statearr_28732_28787 = state_28692__$1;
(statearr_28732_28787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (19))){
var inst_28620 = (state_28692[(7)]);
var inst_28639 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28620);
var state_28692__$1 = state_28692;
var statearr_28733_28788 = state_28692__$1;
(statearr_28733_28788[(2)] = inst_28639);

(statearr_28733_28788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (11))){
var inst_28620 = (state_28692[(7)]);
var inst_28624 = (inst_28620 == null);
var inst_28625 = cljs.core.not.call(null,inst_28624);
var state_28692__$1 = state_28692;
if(inst_28625){
var statearr_28734_28789 = state_28692__$1;
(statearr_28734_28789[(1)] = (13));

} else {
var statearr_28735_28790 = state_28692__$1;
(statearr_28735_28790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (9))){
var inst_28596 = (state_28692[(8)]);
var state_28692__$1 = state_28692;
var statearr_28736_28791 = state_28692__$1;
(statearr_28736_28791[(2)] = inst_28596);

(statearr_28736_28791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var state_28692__$1 = state_28692;
var statearr_28737_28792 = state_28692__$1;
(statearr_28737_28792[(2)] = true);

(statearr_28737_28792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (14))){
var state_28692__$1 = state_28692;
var statearr_28738_28793 = state_28692__$1;
(statearr_28738_28793[(2)] = false);

(statearr_28738_28793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (26))){
var inst_28652 = (state_28692[(10)]);
var inst_28659 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28652);
var state_28692__$1 = state_28692;
var statearr_28739_28794 = state_28692__$1;
(statearr_28739_28794[(2)] = inst_28659);

(statearr_28739_28794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (16))){
var state_28692__$1 = state_28692;
var statearr_28740_28795 = state_28692__$1;
(statearr_28740_28795[(2)] = true);

(statearr_28740_28795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (38))){
var inst_28682 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28741_28796 = state_28692__$1;
(statearr_28741_28796[(2)] = inst_28682);

(statearr_28741_28796[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (30))){
var inst_28643 = (state_28692[(9)]);
var inst_28652 = (state_28692[(10)]);
var inst_28644 = (state_28692[(13)]);
var inst_28669 = cljs.core.empty_QMARK_.call(null,inst_28643);
var inst_28670 = inst_28644.call(null,inst_28652);
var inst_28671 = cljs.core.not.call(null,inst_28670);
var inst_28672 = (inst_28669) && (inst_28671);
var state_28692__$1 = state_28692;
var statearr_28742_28797 = state_28692__$1;
(statearr_28742_28797[(2)] = inst_28672);

(statearr_28742_28797[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (10))){
var inst_28596 = (state_28692[(8)]);
var inst_28616 = (state_28692[(2)]);
var inst_28617 = cljs.core.get.call(null,inst_28616,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28618 = cljs.core.get.call(null,inst_28616,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28619 = cljs.core.get.call(null,inst_28616,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28620 = inst_28596;
var state_28692__$1 = (function (){var statearr_28743 = state_28692;
(statearr_28743[(7)] = inst_28620);

(statearr_28743[(16)] = inst_28617);

(statearr_28743[(17)] = inst_28619);

(statearr_28743[(18)] = inst_28618);

return statearr_28743;
})();
var statearr_28744_28798 = state_28692__$1;
(statearr_28744_28798[(2)] = null);

(statearr_28744_28798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (18))){
var inst_28634 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28745_28799 = state_28692__$1;
(statearr_28745_28799[(2)] = inst_28634);

(statearr_28745_28799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (37))){
var state_28692__$1 = state_28692;
var statearr_28746_28800 = state_28692__$1;
(statearr_28746_28800[(2)] = null);

(statearr_28746_28800[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (8))){
var inst_28596 = (state_28692[(8)]);
var inst_28613 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28596);
var state_28692__$1 = state_28692;
var statearr_28747_28801 = state_28692__$1;
(statearr_28747_28801[(2)] = inst_28613);

(statearr_28747_28801[(1)] = (10));


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
});})(c__27022__auto___28755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26910__auto__,c__27022__auto___28755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26911__auto__ = null;
var cljs$core$async$mix_$_state_machine__26911__auto____0 = (function (){
var statearr_28751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28751[(0)] = cljs$core$async$mix_$_state_machine__26911__auto__);

(statearr_28751[(1)] = (1));

return statearr_28751;
});
var cljs$core$async$mix_$_state_machine__26911__auto____1 = (function (state_28692){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_28692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e28752){if((e28752 instanceof Object)){
var ex__26914__auto__ = e28752;
var statearr_28753_28802 = state_28692;
(statearr_28753_28802[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28803 = state_28692;
state_28692 = G__28803;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26911__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26911__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26911__auto____0;
cljs$core$async$mix_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26911__auto____1;
return cljs$core$async$mix_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___28755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27024__auto__ = (function (){var statearr_28754 = f__27023__auto__.call(null);
(statearr_28754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___28755);

return statearr_28754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___28755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28804 = [];
var len__25923__auto___28807 = arguments.length;
var i__25924__auto___28808 = (0);
while(true){
if((i__25924__auto___28808 < len__25923__auto___28807)){
args28804.push((arguments[i__25924__auto___28808]));

var G__28809 = (i__25924__auto___28808 + (1));
i__25924__auto___28808 = G__28809;
continue;
} else {
}
break;
}

var G__28806 = args28804.length;
switch (G__28806) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28804.length)].join('')));

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
var args28812 = [];
var len__25923__auto___28937 = arguments.length;
var i__25924__auto___28938 = (0);
while(true){
if((i__25924__auto___28938 < len__25923__auto___28937)){
args28812.push((arguments[i__25924__auto___28938]));

var G__28939 = (i__25924__auto___28938 + (1));
i__25924__auto___28938 = G__28939;
continue;
} else {
}
break;
}

var G__28814 = args28812.length;
switch (G__28814) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28812.length)].join('')));

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
return (function (p1__28811_SHARP_){
if(cljs.core.truth_(p1__28811_SHARP_.call(null,topic))){
return p1__28811_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28811_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28815 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28816){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28816 = meta28816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28817,meta28816__$1){
var self__ = this;
var _28817__$1 = this;
return (new cljs.core.async.t_cljs$core$async28815(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28816__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28817){
var self__ = this;
var _28817__$1 = this;
return self__.meta28816;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28815.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28816","meta28816",-1212517237,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28815";

cljs.core.async.t_cljs$core$async28815.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28815");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28815 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28816){
return (new cljs.core.async.t_cljs$core$async28815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28816));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28815(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27022__auto___28941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___28941,mults,ensure_mult,p){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___28941,mults,ensure_mult,p){
return (function (state_28889){
var state_val_28890 = (state_28889[(1)]);
if((state_val_28890 === (7))){
var inst_28885 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28891_28942 = state_28889__$1;
(statearr_28891_28942[(2)] = inst_28885);

(statearr_28891_28942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (20))){
var state_28889__$1 = state_28889;
var statearr_28892_28943 = state_28889__$1;
(statearr_28892_28943[(2)] = null);

(statearr_28892_28943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (1))){
var state_28889__$1 = state_28889;
var statearr_28893_28944 = state_28889__$1;
(statearr_28893_28944[(2)] = null);

(statearr_28893_28944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (24))){
var inst_28868 = (state_28889[(7)]);
var inst_28877 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28868);
var state_28889__$1 = state_28889;
var statearr_28894_28945 = state_28889__$1;
(statearr_28894_28945[(2)] = inst_28877);

(statearr_28894_28945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (4))){
var inst_28820 = (state_28889[(8)]);
var inst_28820__$1 = (state_28889[(2)]);
var inst_28821 = (inst_28820__$1 == null);
var state_28889__$1 = (function (){var statearr_28895 = state_28889;
(statearr_28895[(8)] = inst_28820__$1);

return statearr_28895;
})();
if(cljs.core.truth_(inst_28821)){
var statearr_28896_28946 = state_28889__$1;
(statearr_28896_28946[(1)] = (5));

} else {
var statearr_28897_28947 = state_28889__$1;
(statearr_28897_28947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (15))){
var inst_28862 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28898_28948 = state_28889__$1;
(statearr_28898_28948[(2)] = inst_28862);

(statearr_28898_28948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (21))){
var inst_28882 = (state_28889[(2)]);
var state_28889__$1 = (function (){var statearr_28899 = state_28889;
(statearr_28899[(9)] = inst_28882);

return statearr_28899;
})();
var statearr_28900_28949 = state_28889__$1;
(statearr_28900_28949[(2)] = null);

(statearr_28900_28949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (13))){
var inst_28844 = (state_28889[(10)]);
var inst_28846 = cljs.core.chunked_seq_QMARK_.call(null,inst_28844);
var state_28889__$1 = state_28889;
if(inst_28846){
var statearr_28901_28950 = state_28889__$1;
(statearr_28901_28950[(1)] = (16));

} else {
var statearr_28902_28951 = state_28889__$1;
(statearr_28902_28951[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (22))){
var inst_28874 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
if(cljs.core.truth_(inst_28874)){
var statearr_28903_28952 = state_28889__$1;
(statearr_28903_28952[(1)] = (23));

} else {
var statearr_28904_28953 = state_28889__$1;
(statearr_28904_28953[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (6))){
var inst_28870 = (state_28889[(11)]);
var inst_28820 = (state_28889[(8)]);
var inst_28868 = (state_28889[(7)]);
var inst_28868__$1 = topic_fn.call(null,inst_28820);
var inst_28869 = cljs.core.deref.call(null,mults);
var inst_28870__$1 = cljs.core.get.call(null,inst_28869,inst_28868__$1);
var state_28889__$1 = (function (){var statearr_28905 = state_28889;
(statearr_28905[(11)] = inst_28870__$1);

(statearr_28905[(7)] = inst_28868__$1);

return statearr_28905;
})();
if(cljs.core.truth_(inst_28870__$1)){
var statearr_28906_28954 = state_28889__$1;
(statearr_28906_28954[(1)] = (19));

} else {
var statearr_28907_28955 = state_28889__$1;
(statearr_28907_28955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (25))){
var inst_28879 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28908_28956 = state_28889__$1;
(statearr_28908_28956[(2)] = inst_28879);

(statearr_28908_28956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (17))){
var inst_28844 = (state_28889[(10)]);
var inst_28853 = cljs.core.first.call(null,inst_28844);
var inst_28854 = cljs.core.async.muxch_STAR_.call(null,inst_28853);
var inst_28855 = cljs.core.async.close_BANG_.call(null,inst_28854);
var inst_28856 = cljs.core.next.call(null,inst_28844);
var inst_28830 = inst_28856;
var inst_28831 = null;
var inst_28832 = (0);
var inst_28833 = (0);
var state_28889__$1 = (function (){var statearr_28909 = state_28889;
(statearr_28909[(12)] = inst_28831);

(statearr_28909[(13)] = inst_28832);

(statearr_28909[(14)] = inst_28833);

(statearr_28909[(15)] = inst_28855);

(statearr_28909[(16)] = inst_28830);

return statearr_28909;
})();
var statearr_28910_28957 = state_28889__$1;
(statearr_28910_28957[(2)] = null);

(statearr_28910_28957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (3))){
var inst_28887 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28889__$1,inst_28887);
} else {
if((state_val_28890 === (12))){
var inst_28864 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28911_28958 = state_28889__$1;
(statearr_28911_28958[(2)] = inst_28864);

(statearr_28911_28958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (2))){
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(4),ch);
} else {
if((state_val_28890 === (23))){
var state_28889__$1 = state_28889;
var statearr_28912_28959 = state_28889__$1;
(statearr_28912_28959[(2)] = null);

(statearr_28912_28959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (19))){
var inst_28870 = (state_28889[(11)]);
var inst_28820 = (state_28889[(8)]);
var inst_28872 = cljs.core.async.muxch_STAR_.call(null,inst_28870);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28889__$1,(22),inst_28872,inst_28820);
} else {
if((state_val_28890 === (11))){
var inst_28844 = (state_28889[(10)]);
var inst_28830 = (state_28889[(16)]);
var inst_28844__$1 = cljs.core.seq.call(null,inst_28830);
var state_28889__$1 = (function (){var statearr_28913 = state_28889;
(statearr_28913[(10)] = inst_28844__$1);

return statearr_28913;
})();
if(inst_28844__$1){
var statearr_28914_28960 = state_28889__$1;
(statearr_28914_28960[(1)] = (13));

} else {
var statearr_28915_28961 = state_28889__$1;
(statearr_28915_28961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (9))){
var inst_28866 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28916_28962 = state_28889__$1;
(statearr_28916_28962[(2)] = inst_28866);

(statearr_28916_28962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (5))){
var inst_28827 = cljs.core.deref.call(null,mults);
var inst_28828 = cljs.core.vals.call(null,inst_28827);
var inst_28829 = cljs.core.seq.call(null,inst_28828);
var inst_28830 = inst_28829;
var inst_28831 = null;
var inst_28832 = (0);
var inst_28833 = (0);
var state_28889__$1 = (function (){var statearr_28917 = state_28889;
(statearr_28917[(12)] = inst_28831);

(statearr_28917[(13)] = inst_28832);

(statearr_28917[(14)] = inst_28833);

(statearr_28917[(16)] = inst_28830);

return statearr_28917;
})();
var statearr_28918_28963 = state_28889__$1;
(statearr_28918_28963[(2)] = null);

(statearr_28918_28963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (14))){
var state_28889__$1 = state_28889;
var statearr_28922_28964 = state_28889__$1;
(statearr_28922_28964[(2)] = null);

(statearr_28922_28964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (16))){
var inst_28844 = (state_28889[(10)]);
var inst_28848 = cljs.core.chunk_first.call(null,inst_28844);
var inst_28849 = cljs.core.chunk_rest.call(null,inst_28844);
var inst_28850 = cljs.core.count.call(null,inst_28848);
var inst_28830 = inst_28849;
var inst_28831 = inst_28848;
var inst_28832 = inst_28850;
var inst_28833 = (0);
var state_28889__$1 = (function (){var statearr_28923 = state_28889;
(statearr_28923[(12)] = inst_28831);

(statearr_28923[(13)] = inst_28832);

(statearr_28923[(14)] = inst_28833);

(statearr_28923[(16)] = inst_28830);

return statearr_28923;
})();
var statearr_28924_28965 = state_28889__$1;
(statearr_28924_28965[(2)] = null);

(statearr_28924_28965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (10))){
var inst_28831 = (state_28889[(12)]);
var inst_28832 = (state_28889[(13)]);
var inst_28833 = (state_28889[(14)]);
var inst_28830 = (state_28889[(16)]);
var inst_28838 = cljs.core._nth.call(null,inst_28831,inst_28833);
var inst_28839 = cljs.core.async.muxch_STAR_.call(null,inst_28838);
var inst_28840 = cljs.core.async.close_BANG_.call(null,inst_28839);
var inst_28841 = (inst_28833 + (1));
var tmp28919 = inst_28831;
var tmp28920 = inst_28832;
var tmp28921 = inst_28830;
var inst_28830__$1 = tmp28921;
var inst_28831__$1 = tmp28919;
var inst_28832__$1 = tmp28920;
var inst_28833__$1 = inst_28841;
var state_28889__$1 = (function (){var statearr_28925 = state_28889;
(statearr_28925[(12)] = inst_28831__$1);

(statearr_28925[(17)] = inst_28840);

(statearr_28925[(13)] = inst_28832__$1);

(statearr_28925[(14)] = inst_28833__$1);

(statearr_28925[(16)] = inst_28830__$1);

return statearr_28925;
})();
var statearr_28926_28966 = state_28889__$1;
(statearr_28926_28966[(2)] = null);

(statearr_28926_28966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (18))){
var inst_28859 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28927_28967 = state_28889__$1;
(statearr_28927_28967[(2)] = inst_28859);

(statearr_28927_28967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (8))){
var inst_28832 = (state_28889[(13)]);
var inst_28833 = (state_28889[(14)]);
var inst_28835 = (inst_28833 < inst_28832);
var inst_28836 = inst_28835;
var state_28889__$1 = state_28889;
if(cljs.core.truth_(inst_28836)){
var statearr_28928_28968 = state_28889__$1;
(statearr_28928_28968[(1)] = (10));

} else {
var statearr_28929_28969 = state_28889__$1;
(statearr_28929_28969[(1)] = (11));

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
});})(c__27022__auto___28941,mults,ensure_mult,p))
;
return ((function (switch__26910__auto__,c__27022__auto___28941,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_28933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28933[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_28933[(1)] = (1));

return statearr_28933;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_28889){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_28889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e28934){if((e28934 instanceof Object)){
var ex__26914__auto__ = e28934;
var statearr_28935_28970 = state_28889;
(statearr_28935_28970[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28971 = state_28889;
state_28889 = G__28971;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_28889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_28889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___28941,mults,ensure_mult,p))
})();
var state__27024__auto__ = (function (){var statearr_28936 = f__27023__auto__.call(null);
(statearr_28936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___28941);

return statearr_28936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___28941,mults,ensure_mult,p))
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
var args28972 = [];
var len__25923__auto___28975 = arguments.length;
var i__25924__auto___28976 = (0);
while(true){
if((i__25924__auto___28976 < len__25923__auto___28975)){
args28972.push((arguments[i__25924__auto___28976]));

var G__28977 = (i__25924__auto___28976 + (1));
i__25924__auto___28976 = G__28977;
continue;
} else {
}
break;
}

var G__28974 = args28972.length;
switch (G__28974) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28972.length)].join('')));

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
var args28979 = [];
var len__25923__auto___28982 = arguments.length;
var i__25924__auto___28983 = (0);
while(true){
if((i__25924__auto___28983 < len__25923__auto___28982)){
args28979.push((arguments[i__25924__auto___28983]));

var G__28984 = (i__25924__auto___28983 + (1));
i__25924__auto___28983 = G__28984;
continue;
} else {
}
break;
}

var G__28981 = args28979.length;
switch (G__28981) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28979.length)].join('')));

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
var args28986 = [];
var len__25923__auto___29057 = arguments.length;
var i__25924__auto___29058 = (0);
while(true){
if((i__25924__auto___29058 < len__25923__auto___29057)){
args28986.push((arguments[i__25924__auto___29058]));

var G__29059 = (i__25924__auto___29058 + (1));
i__25924__auto___29058 = G__29059;
continue;
} else {
}
break;
}

var G__28988 = args28986.length;
switch (G__28988) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28986.length)].join('')));

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
var c__27022__auto___29061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___29061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___29061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29027){
var state_val_29028 = (state_29027[(1)]);
if((state_val_29028 === (7))){
var state_29027__$1 = state_29027;
var statearr_29029_29062 = state_29027__$1;
(statearr_29029_29062[(2)] = null);

(statearr_29029_29062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (1))){
var state_29027__$1 = state_29027;
var statearr_29030_29063 = state_29027__$1;
(statearr_29030_29063[(2)] = null);

(statearr_29030_29063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (4))){
var inst_28991 = (state_29027[(7)]);
var inst_28993 = (inst_28991 < cnt);
var state_29027__$1 = state_29027;
if(cljs.core.truth_(inst_28993)){
var statearr_29031_29064 = state_29027__$1;
(statearr_29031_29064[(1)] = (6));

} else {
var statearr_29032_29065 = state_29027__$1;
(statearr_29032_29065[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (15))){
var inst_29023 = (state_29027[(2)]);
var state_29027__$1 = state_29027;
var statearr_29033_29066 = state_29027__$1;
(statearr_29033_29066[(2)] = inst_29023);

(statearr_29033_29066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (13))){
var inst_29016 = cljs.core.async.close_BANG_.call(null,out);
var state_29027__$1 = state_29027;
var statearr_29034_29067 = state_29027__$1;
(statearr_29034_29067[(2)] = inst_29016);

(statearr_29034_29067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (6))){
var state_29027__$1 = state_29027;
var statearr_29035_29068 = state_29027__$1;
(statearr_29035_29068[(2)] = null);

(statearr_29035_29068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (3))){
var inst_29025 = (state_29027[(2)]);
var state_29027__$1 = state_29027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29027__$1,inst_29025);
} else {
if((state_val_29028 === (12))){
var inst_29013 = (state_29027[(8)]);
var inst_29013__$1 = (state_29027[(2)]);
var inst_29014 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29013__$1);
var state_29027__$1 = (function (){var statearr_29036 = state_29027;
(statearr_29036[(8)] = inst_29013__$1);

return statearr_29036;
})();
if(cljs.core.truth_(inst_29014)){
var statearr_29037_29069 = state_29027__$1;
(statearr_29037_29069[(1)] = (13));

} else {
var statearr_29038_29070 = state_29027__$1;
(statearr_29038_29070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (2))){
var inst_28990 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28991 = (0);
var state_29027__$1 = (function (){var statearr_29039 = state_29027;
(statearr_29039[(7)] = inst_28991);

(statearr_29039[(9)] = inst_28990);

return statearr_29039;
})();
var statearr_29040_29071 = state_29027__$1;
(statearr_29040_29071[(2)] = null);

(statearr_29040_29071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (11))){
var inst_28991 = (state_29027[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29027,(10),Object,null,(9));
var inst_29000 = chs__$1.call(null,inst_28991);
var inst_29001 = done.call(null,inst_28991);
var inst_29002 = cljs.core.async.take_BANG_.call(null,inst_29000,inst_29001);
var state_29027__$1 = state_29027;
var statearr_29041_29072 = state_29027__$1;
(statearr_29041_29072[(2)] = inst_29002);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29027__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (9))){
var inst_28991 = (state_29027[(7)]);
var inst_29004 = (state_29027[(2)]);
var inst_29005 = (inst_28991 + (1));
var inst_28991__$1 = inst_29005;
var state_29027__$1 = (function (){var statearr_29042 = state_29027;
(statearr_29042[(7)] = inst_28991__$1);

(statearr_29042[(10)] = inst_29004);

return statearr_29042;
})();
var statearr_29043_29073 = state_29027__$1;
(statearr_29043_29073[(2)] = null);

(statearr_29043_29073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (5))){
var inst_29011 = (state_29027[(2)]);
var state_29027__$1 = (function (){var statearr_29044 = state_29027;
(statearr_29044[(11)] = inst_29011);

return statearr_29044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29027__$1,(12),dchan);
} else {
if((state_val_29028 === (14))){
var inst_29013 = (state_29027[(8)]);
var inst_29018 = cljs.core.apply.call(null,f,inst_29013);
var state_29027__$1 = state_29027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29027__$1,(16),out,inst_29018);
} else {
if((state_val_29028 === (16))){
var inst_29020 = (state_29027[(2)]);
var state_29027__$1 = (function (){var statearr_29045 = state_29027;
(statearr_29045[(12)] = inst_29020);

return statearr_29045;
})();
var statearr_29046_29074 = state_29027__$1;
(statearr_29046_29074[(2)] = null);

(statearr_29046_29074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (10))){
var inst_28995 = (state_29027[(2)]);
var inst_28996 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29027__$1 = (function (){var statearr_29047 = state_29027;
(statearr_29047[(13)] = inst_28995);

return statearr_29047;
})();
var statearr_29048_29075 = state_29027__$1;
(statearr_29048_29075[(2)] = inst_28996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29027__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (8))){
var inst_29009 = (state_29027[(2)]);
var state_29027__$1 = state_29027;
var statearr_29049_29076 = state_29027__$1;
(statearr_29049_29076[(2)] = inst_29009);

(statearr_29049_29076[(1)] = (5));


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
});})(c__27022__auto___29061,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26910__auto__,c__27022__auto___29061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_29053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29053[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_29053[(1)] = (1));

return statearr_29053;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_29027){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29054){if((e29054 instanceof Object)){
var ex__26914__auto__ = e29054;
var statearr_29055_29077 = state_29027;
(statearr_29055_29077[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29078 = state_29027;
state_29027 = G__29078;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_29027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_29027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___29061,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27024__auto__ = (function (){var statearr_29056 = f__27023__auto__.call(null);
(statearr_29056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___29061);

return statearr_29056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___29061,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29080 = [];
var len__25923__auto___29138 = arguments.length;
var i__25924__auto___29139 = (0);
while(true){
if((i__25924__auto___29139 < len__25923__auto___29138)){
args29080.push((arguments[i__25924__auto___29139]));

var G__29140 = (i__25924__auto___29139 + (1));
i__25924__auto___29139 = G__29140;
continue;
} else {
}
break;
}

var G__29082 = args29080.length;
switch (G__29082) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29080.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___29142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___29142,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___29142,out){
return (function (state_29114){
var state_val_29115 = (state_29114[(1)]);
if((state_val_29115 === (7))){
var inst_29094 = (state_29114[(7)]);
var inst_29093 = (state_29114[(8)]);
var inst_29093__$1 = (state_29114[(2)]);
var inst_29094__$1 = cljs.core.nth.call(null,inst_29093__$1,(0),null);
var inst_29095 = cljs.core.nth.call(null,inst_29093__$1,(1),null);
var inst_29096 = (inst_29094__$1 == null);
var state_29114__$1 = (function (){var statearr_29116 = state_29114;
(statearr_29116[(7)] = inst_29094__$1);

(statearr_29116[(8)] = inst_29093__$1);

(statearr_29116[(9)] = inst_29095);

return statearr_29116;
})();
if(cljs.core.truth_(inst_29096)){
var statearr_29117_29143 = state_29114__$1;
(statearr_29117_29143[(1)] = (8));

} else {
var statearr_29118_29144 = state_29114__$1;
(statearr_29118_29144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (1))){
var inst_29083 = cljs.core.vec.call(null,chs);
var inst_29084 = inst_29083;
var state_29114__$1 = (function (){var statearr_29119 = state_29114;
(statearr_29119[(10)] = inst_29084);

return statearr_29119;
})();
var statearr_29120_29145 = state_29114__$1;
(statearr_29120_29145[(2)] = null);

(statearr_29120_29145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (4))){
var inst_29084 = (state_29114[(10)]);
var state_29114__$1 = state_29114;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29114__$1,(7),inst_29084);
} else {
if((state_val_29115 === (6))){
var inst_29110 = (state_29114[(2)]);
var state_29114__$1 = state_29114;
var statearr_29121_29146 = state_29114__$1;
(statearr_29121_29146[(2)] = inst_29110);

(statearr_29121_29146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (3))){
var inst_29112 = (state_29114[(2)]);
var state_29114__$1 = state_29114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29114__$1,inst_29112);
} else {
if((state_val_29115 === (2))){
var inst_29084 = (state_29114[(10)]);
var inst_29086 = cljs.core.count.call(null,inst_29084);
var inst_29087 = (inst_29086 > (0));
var state_29114__$1 = state_29114;
if(cljs.core.truth_(inst_29087)){
var statearr_29123_29147 = state_29114__$1;
(statearr_29123_29147[(1)] = (4));

} else {
var statearr_29124_29148 = state_29114__$1;
(statearr_29124_29148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (11))){
var inst_29084 = (state_29114[(10)]);
var inst_29103 = (state_29114[(2)]);
var tmp29122 = inst_29084;
var inst_29084__$1 = tmp29122;
var state_29114__$1 = (function (){var statearr_29125 = state_29114;
(statearr_29125[(11)] = inst_29103);

(statearr_29125[(10)] = inst_29084__$1);

return statearr_29125;
})();
var statearr_29126_29149 = state_29114__$1;
(statearr_29126_29149[(2)] = null);

(statearr_29126_29149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (9))){
var inst_29094 = (state_29114[(7)]);
var state_29114__$1 = state_29114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29114__$1,(11),out,inst_29094);
} else {
if((state_val_29115 === (5))){
var inst_29108 = cljs.core.async.close_BANG_.call(null,out);
var state_29114__$1 = state_29114;
var statearr_29127_29150 = state_29114__$1;
(statearr_29127_29150[(2)] = inst_29108);

(statearr_29127_29150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (10))){
var inst_29106 = (state_29114[(2)]);
var state_29114__$1 = state_29114;
var statearr_29128_29151 = state_29114__$1;
(statearr_29128_29151[(2)] = inst_29106);

(statearr_29128_29151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (8))){
var inst_29094 = (state_29114[(7)]);
var inst_29093 = (state_29114[(8)]);
var inst_29084 = (state_29114[(10)]);
var inst_29095 = (state_29114[(9)]);
var inst_29098 = (function (){var cs = inst_29084;
var vec__29089 = inst_29093;
var v = inst_29094;
var c = inst_29095;
return ((function (cs,vec__29089,v,c,inst_29094,inst_29093,inst_29084,inst_29095,state_val_29115,c__27022__auto___29142,out){
return (function (p1__29079_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29079_SHARP_);
});
;})(cs,vec__29089,v,c,inst_29094,inst_29093,inst_29084,inst_29095,state_val_29115,c__27022__auto___29142,out))
})();
var inst_29099 = cljs.core.filterv.call(null,inst_29098,inst_29084);
var inst_29084__$1 = inst_29099;
var state_29114__$1 = (function (){var statearr_29129 = state_29114;
(statearr_29129[(10)] = inst_29084__$1);

return statearr_29129;
})();
var statearr_29130_29152 = state_29114__$1;
(statearr_29130_29152[(2)] = null);

(statearr_29130_29152[(1)] = (2));


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
});})(c__27022__auto___29142,out))
;
return ((function (switch__26910__auto__,c__27022__auto___29142,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_29134 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29134[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_29134[(1)] = (1));

return statearr_29134;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_29114){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29135){if((e29135 instanceof Object)){
var ex__26914__auto__ = e29135;
var statearr_29136_29153 = state_29114;
(statearr_29136_29153[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29154 = state_29114;
state_29114 = G__29154;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_29114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_29114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___29142,out))
})();
var state__27024__auto__ = (function (){var statearr_29137 = f__27023__auto__.call(null);
(statearr_29137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___29142);

return statearr_29137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___29142,out))
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
var args29155 = [];
var len__25923__auto___29204 = arguments.length;
var i__25924__auto___29205 = (0);
while(true){
if((i__25924__auto___29205 < len__25923__auto___29204)){
args29155.push((arguments[i__25924__auto___29205]));

var G__29206 = (i__25924__auto___29205 + (1));
i__25924__auto___29205 = G__29206;
continue;
} else {
}
break;
}

var G__29157 = args29155.length;
switch (G__29157) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29155.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___29208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___29208,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___29208,out){
return (function (state_29181){
var state_val_29182 = (state_29181[(1)]);
if((state_val_29182 === (7))){
var inst_29163 = (state_29181[(7)]);
var inst_29163__$1 = (state_29181[(2)]);
var inst_29164 = (inst_29163__$1 == null);
var inst_29165 = cljs.core.not.call(null,inst_29164);
var state_29181__$1 = (function (){var statearr_29183 = state_29181;
(statearr_29183[(7)] = inst_29163__$1);

return statearr_29183;
})();
if(inst_29165){
var statearr_29184_29209 = state_29181__$1;
(statearr_29184_29209[(1)] = (8));

} else {
var statearr_29185_29210 = state_29181__$1;
(statearr_29185_29210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (1))){
var inst_29158 = (0);
var state_29181__$1 = (function (){var statearr_29186 = state_29181;
(statearr_29186[(8)] = inst_29158);

return statearr_29186;
})();
var statearr_29187_29211 = state_29181__$1;
(statearr_29187_29211[(2)] = null);

(statearr_29187_29211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (4))){
var state_29181__$1 = state_29181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29181__$1,(7),ch);
} else {
if((state_val_29182 === (6))){
var inst_29176 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
var statearr_29188_29212 = state_29181__$1;
(statearr_29188_29212[(2)] = inst_29176);

(statearr_29188_29212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (3))){
var inst_29178 = (state_29181[(2)]);
var inst_29179 = cljs.core.async.close_BANG_.call(null,out);
var state_29181__$1 = (function (){var statearr_29189 = state_29181;
(statearr_29189[(9)] = inst_29178);

return statearr_29189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29181__$1,inst_29179);
} else {
if((state_val_29182 === (2))){
var inst_29158 = (state_29181[(8)]);
var inst_29160 = (inst_29158 < n);
var state_29181__$1 = state_29181;
if(cljs.core.truth_(inst_29160)){
var statearr_29190_29213 = state_29181__$1;
(statearr_29190_29213[(1)] = (4));

} else {
var statearr_29191_29214 = state_29181__$1;
(statearr_29191_29214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (11))){
var inst_29158 = (state_29181[(8)]);
var inst_29168 = (state_29181[(2)]);
var inst_29169 = (inst_29158 + (1));
var inst_29158__$1 = inst_29169;
var state_29181__$1 = (function (){var statearr_29192 = state_29181;
(statearr_29192[(8)] = inst_29158__$1);

(statearr_29192[(10)] = inst_29168);

return statearr_29192;
})();
var statearr_29193_29215 = state_29181__$1;
(statearr_29193_29215[(2)] = null);

(statearr_29193_29215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (9))){
var state_29181__$1 = state_29181;
var statearr_29194_29216 = state_29181__$1;
(statearr_29194_29216[(2)] = null);

(statearr_29194_29216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (5))){
var state_29181__$1 = state_29181;
var statearr_29195_29217 = state_29181__$1;
(statearr_29195_29217[(2)] = null);

(statearr_29195_29217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (10))){
var inst_29173 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
var statearr_29196_29218 = state_29181__$1;
(statearr_29196_29218[(2)] = inst_29173);

(statearr_29196_29218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (8))){
var inst_29163 = (state_29181[(7)]);
var state_29181__$1 = state_29181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29181__$1,(11),out,inst_29163);
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
});})(c__27022__auto___29208,out))
;
return ((function (switch__26910__auto__,c__27022__auto___29208,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_29200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29200[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_29200[(1)] = (1));

return statearr_29200;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_29181){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29201){if((e29201 instanceof Object)){
var ex__26914__auto__ = e29201;
var statearr_29202_29219 = state_29181;
(statearr_29202_29219[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29220 = state_29181;
state_29181 = G__29220;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_29181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_29181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___29208,out))
})();
var state__27024__auto__ = (function (){var statearr_29203 = f__27023__auto__.call(null);
(statearr_29203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___29208);

return statearr_29203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___29208,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29228 = (function (map_LT_,f,ch,meta29229){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29229 = meta29229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29230,meta29229__$1){
var self__ = this;
var _29230__$1 = this;
return (new cljs.core.async.t_cljs$core$async29228(self__.map_LT_,self__.f,self__.ch,meta29229__$1));
});

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29230){
var self__ = this;
var _29230__$1 = this;
return self__.meta29229;
});

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29231 = (function (map_LT_,f,ch,meta29229,_,fn1,meta29232){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29229 = meta29229;
this._ = _;
this.fn1 = fn1;
this.meta29232 = meta29232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29233,meta29232__$1){
var self__ = this;
var _29233__$1 = this;
return (new cljs.core.async.t_cljs$core$async29231(self__.map_LT_,self__.f,self__.ch,self__.meta29229,self__._,self__.fn1,meta29232__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29233){
var self__ = this;
var _29233__$1 = this;
return self__.meta29232;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29231.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29221_SHARP_){
return f1.call(null,(((p1__29221_SHARP_ == null))?null:self__.f.call(null,p1__29221_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29231.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29229","meta29229",815020800,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29228","cljs.core.async/t_cljs$core$async29228",1941633238,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29232","meta29232",586995276,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29231";

cljs.core.async.t_cljs$core$async29231.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29231");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29231 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29231(map_LT___$1,f__$1,ch__$1,meta29229__$1,___$2,fn1__$1,meta29232){
return (new cljs.core.async.t_cljs$core$async29231(map_LT___$1,f__$1,ch__$1,meta29229__$1,___$2,fn1__$1,meta29232));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29231(self__.map_LT_,self__.f,self__.ch,self__.meta29229,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29229","meta29229",815020800,null)], null);
});

cljs.core.async.t_cljs$core$async29228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29228";

cljs.core.async.t_cljs$core$async29228.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29228");
});

cljs.core.async.__GT_t_cljs$core$async29228 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29228(map_LT___$1,f__$1,ch__$1,meta29229){
return (new cljs.core.async.t_cljs$core$async29228(map_LT___$1,f__$1,ch__$1,meta29229));
});

}

return (new cljs.core.async.t_cljs$core$async29228(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29237 = (function (map_GT_,f,ch,meta29238){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29238 = meta29238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29239,meta29238__$1){
var self__ = this;
var _29239__$1 = this;
return (new cljs.core.async.t_cljs$core$async29237(self__.map_GT_,self__.f,self__.ch,meta29238__$1));
});

cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29239){
var self__ = this;
var _29239__$1 = this;
return self__.meta29238;
});

cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29238","meta29238",-1497582034,null)], null);
});

cljs.core.async.t_cljs$core$async29237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29237";

cljs.core.async.t_cljs$core$async29237.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29237");
});

cljs.core.async.__GT_t_cljs$core$async29237 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29237(map_GT___$1,f__$1,ch__$1,meta29238){
return (new cljs.core.async.t_cljs$core$async29237(map_GT___$1,f__$1,ch__$1,meta29238));
});

}

return (new cljs.core.async.t_cljs$core$async29237(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29243 = (function (filter_GT_,p,ch,meta29244){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29244 = meta29244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29245,meta29244__$1){
var self__ = this;
var _29245__$1 = this;
return (new cljs.core.async.t_cljs$core$async29243(self__.filter_GT_,self__.p,self__.ch,meta29244__$1));
});

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29245){
var self__ = this;
var _29245__$1 = this;
return self__.meta29244;
});

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29244","meta29244",1201567118,null)], null);
});

cljs.core.async.t_cljs$core$async29243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29243";

cljs.core.async.t_cljs$core$async29243.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29243");
});

cljs.core.async.__GT_t_cljs$core$async29243 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29243(filter_GT___$1,p__$1,ch__$1,meta29244){
return (new cljs.core.async.t_cljs$core$async29243(filter_GT___$1,p__$1,ch__$1,meta29244));
});

}

return (new cljs.core.async.t_cljs$core$async29243(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29246 = [];
var len__25923__auto___29290 = arguments.length;
var i__25924__auto___29291 = (0);
while(true){
if((i__25924__auto___29291 < len__25923__auto___29290)){
args29246.push((arguments[i__25924__auto___29291]));

var G__29292 = (i__25924__auto___29291 + (1));
i__25924__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var G__29248 = args29246.length;
switch (G__29248) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29246.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___29294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___29294,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___29294,out){
return (function (state_29269){
var state_val_29270 = (state_29269[(1)]);
if((state_val_29270 === (7))){
var inst_29265 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
var statearr_29271_29295 = state_29269__$1;
(statearr_29271_29295[(2)] = inst_29265);

(statearr_29271_29295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (1))){
var state_29269__$1 = state_29269;
var statearr_29272_29296 = state_29269__$1;
(statearr_29272_29296[(2)] = null);

(statearr_29272_29296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (4))){
var inst_29251 = (state_29269[(7)]);
var inst_29251__$1 = (state_29269[(2)]);
var inst_29252 = (inst_29251__$1 == null);
var state_29269__$1 = (function (){var statearr_29273 = state_29269;
(statearr_29273[(7)] = inst_29251__$1);

return statearr_29273;
})();
if(cljs.core.truth_(inst_29252)){
var statearr_29274_29297 = state_29269__$1;
(statearr_29274_29297[(1)] = (5));

} else {
var statearr_29275_29298 = state_29269__$1;
(statearr_29275_29298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (6))){
var inst_29251 = (state_29269[(7)]);
var inst_29256 = p.call(null,inst_29251);
var state_29269__$1 = state_29269;
if(cljs.core.truth_(inst_29256)){
var statearr_29276_29299 = state_29269__$1;
(statearr_29276_29299[(1)] = (8));

} else {
var statearr_29277_29300 = state_29269__$1;
(statearr_29277_29300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (3))){
var inst_29267 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29269__$1,inst_29267);
} else {
if((state_val_29270 === (2))){
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29269__$1,(4),ch);
} else {
if((state_val_29270 === (11))){
var inst_29259 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
var statearr_29278_29301 = state_29269__$1;
(statearr_29278_29301[(2)] = inst_29259);

(statearr_29278_29301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (9))){
var state_29269__$1 = state_29269;
var statearr_29279_29302 = state_29269__$1;
(statearr_29279_29302[(2)] = null);

(statearr_29279_29302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (5))){
var inst_29254 = cljs.core.async.close_BANG_.call(null,out);
var state_29269__$1 = state_29269;
var statearr_29280_29303 = state_29269__$1;
(statearr_29280_29303[(2)] = inst_29254);

(statearr_29280_29303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (10))){
var inst_29262 = (state_29269[(2)]);
var state_29269__$1 = (function (){var statearr_29281 = state_29269;
(statearr_29281[(8)] = inst_29262);

return statearr_29281;
})();
var statearr_29282_29304 = state_29269__$1;
(statearr_29282_29304[(2)] = null);

(statearr_29282_29304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (8))){
var inst_29251 = (state_29269[(7)]);
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29269__$1,(11),out,inst_29251);
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
});})(c__27022__auto___29294,out))
;
return ((function (switch__26910__auto__,c__27022__auto___29294,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_29286 = [null,null,null,null,null,null,null,null,null];
(statearr_29286[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_29286[(1)] = (1));

return statearr_29286;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_29269){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29287){if((e29287 instanceof Object)){
var ex__26914__auto__ = e29287;
var statearr_29288_29305 = state_29269;
(statearr_29288_29305[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29306 = state_29269;
state_29269 = G__29306;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_29269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_29269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___29294,out))
})();
var state__27024__auto__ = (function (){var statearr_29289 = f__27023__auto__.call(null);
(statearr_29289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___29294);

return statearr_29289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___29294,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29307 = [];
var len__25923__auto___29310 = arguments.length;
var i__25924__auto___29311 = (0);
while(true){
if((i__25924__auto___29311 < len__25923__auto___29310)){
args29307.push((arguments[i__25924__auto___29311]));

var G__29312 = (i__25924__auto___29311 + (1));
i__25924__auto___29311 = G__29312;
continue;
} else {
}
break;
}

var G__29309 = args29307.length;
switch (G__29309) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29307.length)].join('')));

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
var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__){
return (function (state_29479){
var state_val_29480 = (state_29479[(1)]);
if((state_val_29480 === (7))){
var inst_29475 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29481_29522 = state_29479__$1;
(statearr_29481_29522[(2)] = inst_29475);

(statearr_29481_29522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (20))){
var inst_29445 = (state_29479[(7)]);
var inst_29456 = (state_29479[(2)]);
var inst_29457 = cljs.core.next.call(null,inst_29445);
var inst_29431 = inst_29457;
var inst_29432 = null;
var inst_29433 = (0);
var inst_29434 = (0);
var state_29479__$1 = (function (){var statearr_29482 = state_29479;
(statearr_29482[(8)] = inst_29431);

(statearr_29482[(9)] = inst_29433);

(statearr_29482[(10)] = inst_29432);

(statearr_29482[(11)] = inst_29434);

(statearr_29482[(12)] = inst_29456);

return statearr_29482;
})();
var statearr_29483_29523 = state_29479__$1;
(statearr_29483_29523[(2)] = null);

(statearr_29483_29523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (1))){
var state_29479__$1 = state_29479;
var statearr_29484_29524 = state_29479__$1;
(statearr_29484_29524[(2)] = null);

(statearr_29484_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (4))){
var inst_29420 = (state_29479[(13)]);
var inst_29420__$1 = (state_29479[(2)]);
var inst_29421 = (inst_29420__$1 == null);
var state_29479__$1 = (function (){var statearr_29485 = state_29479;
(statearr_29485[(13)] = inst_29420__$1);

return statearr_29485;
})();
if(cljs.core.truth_(inst_29421)){
var statearr_29486_29525 = state_29479__$1;
(statearr_29486_29525[(1)] = (5));

} else {
var statearr_29487_29526 = state_29479__$1;
(statearr_29487_29526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (15))){
var state_29479__$1 = state_29479;
var statearr_29491_29527 = state_29479__$1;
(statearr_29491_29527[(2)] = null);

(statearr_29491_29527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (21))){
var state_29479__$1 = state_29479;
var statearr_29492_29528 = state_29479__$1;
(statearr_29492_29528[(2)] = null);

(statearr_29492_29528[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (13))){
var inst_29431 = (state_29479[(8)]);
var inst_29433 = (state_29479[(9)]);
var inst_29432 = (state_29479[(10)]);
var inst_29434 = (state_29479[(11)]);
var inst_29441 = (state_29479[(2)]);
var inst_29442 = (inst_29434 + (1));
var tmp29488 = inst_29431;
var tmp29489 = inst_29433;
var tmp29490 = inst_29432;
var inst_29431__$1 = tmp29488;
var inst_29432__$1 = tmp29490;
var inst_29433__$1 = tmp29489;
var inst_29434__$1 = inst_29442;
var state_29479__$1 = (function (){var statearr_29493 = state_29479;
(statearr_29493[(14)] = inst_29441);

(statearr_29493[(8)] = inst_29431__$1);

(statearr_29493[(9)] = inst_29433__$1);

(statearr_29493[(10)] = inst_29432__$1);

(statearr_29493[(11)] = inst_29434__$1);

return statearr_29493;
})();
var statearr_29494_29529 = state_29479__$1;
(statearr_29494_29529[(2)] = null);

(statearr_29494_29529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (22))){
var state_29479__$1 = state_29479;
var statearr_29495_29530 = state_29479__$1;
(statearr_29495_29530[(2)] = null);

(statearr_29495_29530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (6))){
var inst_29420 = (state_29479[(13)]);
var inst_29429 = f.call(null,inst_29420);
var inst_29430 = cljs.core.seq.call(null,inst_29429);
var inst_29431 = inst_29430;
var inst_29432 = null;
var inst_29433 = (0);
var inst_29434 = (0);
var state_29479__$1 = (function (){var statearr_29496 = state_29479;
(statearr_29496[(8)] = inst_29431);

(statearr_29496[(9)] = inst_29433);

(statearr_29496[(10)] = inst_29432);

(statearr_29496[(11)] = inst_29434);

return statearr_29496;
})();
var statearr_29497_29531 = state_29479__$1;
(statearr_29497_29531[(2)] = null);

(statearr_29497_29531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (17))){
var inst_29445 = (state_29479[(7)]);
var inst_29449 = cljs.core.chunk_first.call(null,inst_29445);
var inst_29450 = cljs.core.chunk_rest.call(null,inst_29445);
var inst_29451 = cljs.core.count.call(null,inst_29449);
var inst_29431 = inst_29450;
var inst_29432 = inst_29449;
var inst_29433 = inst_29451;
var inst_29434 = (0);
var state_29479__$1 = (function (){var statearr_29498 = state_29479;
(statearr_29498[(8)] = inst_29431);

(statearr_29498[(9)] = inst_29433);

(statearr_29498[(10)] = inst_29432);

(statearr_29498[(11)] = inst_29434);

return statearr_29498;
})();
var statearr_29499_29532 = state_29479__$1;
(statearr_29499_29532[(2)] = null);

(statearr_29499_29532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (3))){
var inst_29477 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29479__$1,inst_29477);
} else {
if((state_val_29480 === (12))){
var inst_29465 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29500_29533 = state_29479__$1;
(statearr_29500_29533[(2)] = inst_29465);

(statearr_29500_29533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (2))){
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29479__$1,(4),in$);
} else {
if((state_val_29480 === (23))){
var inst_29473 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29501_29534 = state_29479__$1;
(statearr_29501_29534[(2)] = inst_29473);

(statearr_29501_29534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (19))){
var inst_29460 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29502_29535 = state_29479__$1;
(statearr_29502_29535[(2)] = inst_29460);

(statearr_29502_29535[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (11))){
var inst_29445 = (state_29479[(7)]);
var inst_29431 = (state_29479[(8)]);
var inst_29445__$1 = cljs.core.seq.call(null,inst_29431);
var state_29479__$1 = (function (){var statearr_29503 = state_29479;
(statearr_29503[(7)] = inst_29445__$1);

return statearr_29503;
})();
if(inst_29445__$1){
var statearr_29504_29536 = state_29479__$1;
(statearr_29504_29536[(1)] = (14));

} else {
var statearr_29505_29537 = state_29479__$1;
(statearr_29505_29537[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (9))){
var inst_29467 = (state_29479[(2)]);
var inst_29468 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29479__$1 = (function (){var statearr_29506 = state_29479;
(statearr_29506[(15)] = inst_29467);

return statearr_29506;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29507_29538 = state_29479__$1;
(statearr_29507_29538[(1)] = (21));

} else {
var statearr_29508_29539 = state_29479__$1;
(statearr_29508_29539[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (5))){
var inst_29423 = cljs.core.async.close_BANG_.call(null,out);
var state_29479__$1 = state_29479;
var statearr_29509_29540 = state_29479__$1;
(statearr_29509_29540[(2)] = inst_29423);

(statearr_29509_29540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (14))){
var inst_29445 = (state_29479[(7)]);
var inst_29447 = cljs.core.chunked_seq_QMARK_.call(null,inst_29445);
var state_29479__$1 = state_29479;
if(inst_29447){
var statearr_29510_29541 = state_29479__$1;
(statearr_29510_29541[(1)] = (17));

} else {
var statearr_29511_29542 = state_29479__$1;
(statearr_29511_29542[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (16))){
var inst_29463 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29512_29543 = state_29479__$1;
(statearr_29512_29543[(2)] = inst_29463);

(statearr_29512_29543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (10))){
var inst_29432 = (state_29479[(10)]);
var inst_29434 = (state_29479[(11)]);
var inst_29439 = cljs.core._nth.call(null,inst_29432,inst_29434);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29479__$1,(13),out,inst_29439);
} else {
if((state_val_29480 === (18))){
var inst_29445 = (state_29479[(7)]);
var inst_29454 = cljs.core.first.call(null,inst_29445);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29479__$1,(20),out,inst_29454);
} else {
if((state_val_29480 === (8))){
var inst_29433 = (state_29479[(9)]);
var inst_29434 = (state_29479[(11)]);
var inst_29436 = (inst_29434 < inst_29433);
var inst_29437 = inst_29436;
var state_29479__$1 = state_29479;
if(cljs.core.truth_(inst_29437)){
var statearr_29513_29544 = state_29479__$1;
(statearr_29513_29544[(1)] = (10));

} else {
var statearr_29514_29545 = state_29479__$1;
(statearr_29514_29545[(1)] = (11));

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
});})(c__27022__auto__))
;
return ((function (switch__26910__auto__,c__27022__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_29518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29518[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__);

(statearr_29518[(1)] = (1));

return statearr_29518;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____1 = (function (state_29479){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29519){if((e29519 instanceof Object)){
var ex__26914__auto__ = e29519;
var statearr_29520_29546 = state_29479;
(statearr_29520_29546[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29547 = state_29479;
state_29479 = G__29547;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__ = function(state_29479){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____1.call(this,state_29479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_29521 = f__27023__auto__.call(null);
(statearr_29521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_29521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto__))
);

return c__27022__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29548 = [];
var len__25923__auto___29551 = arguments.length;
var i__25924__auto___29552 = (0);
while(true){
if((i__25924__auto___29552 < len__25923__auto___29551)){
args29548.push((arguments[i__25924__auto___29552]));

var G__29553 = (i__25924__auto___29552 + (1));
i__25924__auto___29552 = G__29553;
continue;
} else {
}
break;
}

var G__29550 = args29548.length;
switch (G__29550) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29548.length)].join('')));

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
var args29555 = [];
var len__25923__auto___29558 = arguments.length;
var i__25924__auto___29559 = (0);
while(true){
if((i__25924__auto___29559 < len__25923__auto___29558)){
args29555.push((arguments[i__25924__auto___29559]));

var G__29560 = (i__25924__auto___29559 + (1));
i__25924__auto___29559 = G__29560;
continue;
} else {
}
break;
}

var G__29557 = args29555.length;
switch (G__29557) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29555.length)].join('')));

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
var args29562 = [];
var len__25923__auto___29613 = arguments.length;
var i__25924__auto___29614 = (0);
while(true){
if((i__25924__auto___29614 < len__25923__auto___29613)){
args29562.push((arguments[i__25924__auto___29614]));

var G__29615 = (i__25924__auto___29614 + (1));
i__25924__auto___29614 = G__29615;
continue;
} else {
}
break;
}

var G__29564 = args29562.length;
switch (G__29564) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29562.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___29617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___29617,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___29617,out){
return (function (state_29588){
var state_val_29589 = (state_29588[(1)]);
if((state_val_29589 === (7))){
var inst_29583 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
var statearr_29590_29618 = state_29588__$1;
(statearr_29590_29618[(2)] = inst_29583);

(statearr_29590_29618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (1))){
var inst_29565 = null;
var state_29588__$1 = (function (){var statearr_29591 = state_29588;
(statearr_29591[(7)] = inst_29565);

return statearr_29591;
})();
var statearr_29592_29619 = state_29588__$1;
(statearr_29592_29619[(2)] = null);

(statearr_29592_29619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (4))){
var inst_29568 = (state_29588[(8)]);
var inst_29568__$1 = (state_29588[(2)]);
var inst_29569 = (inst_29568__$1 == null);
var inst_29570 = cljs.core.not.call(null,inst_29569);
var state_29588__$1 = (function (){var statearr_29593 = state_29588;
(statearr_29593[(8)] = inst_29568__$1);

return statearr_29593;
})();
if(inst_29570){
var statearr_29594_29620 = state_29588__$1;
(statearr_29594_29620[(1)] = (5));

} else {
var statearr_29595_29621 = state_29588__$1;
(statearr_29595_29621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (6))){
var state_29588__$1 = state_29588;
var statearr_29596_29622 = state_29588__$1;
(statearr_29596_29622[(2)] = null);

(statearr_29596_29622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (3))){
var inst_29585 = (state_29588[(2)]);
var inst_29586 = cljs.core.async.close_BANG_.call(null,out);
var state_29588__$1 = (function (){var statearr_29597 = state_29588;
(statearr_29597[(9)] = inst_29585);

return statearr_29597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29588__$1,inst_29586);
} else {
if((state_val_29589 === (2))){
var state_29588__$1 = state_29588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29588__$1,(4),ch);
} else {
if((state_val_29589 === (11))){
var inst_29568 = (state_29588[(8)]);
var inst_29577 = (state_29588[(2)]);
var inst_29565 = inst_29568;
var state_29588__$1 = (function (){var statearr_29598 = state_29588;
(statearr_29598[(7)] = inst_29565);

(statearr_29598[(10)] = inst_29577);

return statearr_29598;
})();
var statearr_29599_29623 = state_29588__$1;
(statearr_29599_29623[(2)] = null);

(statearr_29599_29623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (9))){
var inst_29568 = (state_29588[(8)]);
var state_29588__$1 = state_29588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29588__$1,(11),out,inst_29568);
} else {
if((state_val_29589 === (5))){
var inst_29565 = (state_29588[(7)]);
var inst_29568 = (state_29588[(8)]);
var inst_29572 = cljs.core._EQ_.call(null,inst_29568,inst_29565);
var state_29588__$1 = state_29588;
if(inst_29572){
var statearr_29601_29624 = state_29588__$1;
(statearr_29601_29624[(1)] = (8));

} else {
var statearr_29602_29625 = state_29588__$1;
(statearr_29602_29625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (10))){
var inst_29580 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
var statearr_29603_29626 = state_29588__$1;
(statearr_29603_29626[(2)] = inst_29580);

(statearr_29603_29626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (8))){
var inst_29565 = (state_29588[(7)]);
var tmp29600 = inst_29565;
var inst_29565__$1 = tmp29600;
var state_29588__$1 = (function (){var statearr_29604 = state_29588;
(statearr_29604[(7)] = inst_29565__$1);

return statearr_29604;
})();
var statearr_29605_29627 = state_29588__$1;
(statearr_29605_29627[(2)] = null);

(statearr_29605_29627[(1)] = (2));


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
});})(c__27022__auto___29617,out))
;
return ((function (switch__26910__auto__,c__27022__auto___29617,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_29609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29609[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_29609[(1)] = (1));

return statearr_29609;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_29588){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29610){if((e29610 instanceof Object)){
var ex__26914__auto__ = e29610;
var statearr_29611_29628 = state_29588;
(statearr_29611_29628[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29629 = state_29588;
state_29588 = G__29629;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_29588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_29588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___29617,out))
})();
var state__27024__auto__ = (function (){var statearr_29612 = f__27023__auto__.call(null);
(statearr_29612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___29617);

return statearr_29612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___29617,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29630 = [];
var len__25923__auto___29700 = arguments.length;
var i__25924__auto___29701 = (0);
while(true){
if((i__25924__auto___29701 < len__25923__auto___29700)){
args29630.push((arguments[i__25924__auto___29701]));

var G__29702 = (i__25924__auto___29701 + (1));
i__25924__auto___29701 = G__29702;
continue;
} else {
}
break;
}

var G__29632 = args29630.length;
switch (G__29632) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29630.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___29704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___29704,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___29704,out){
return (function (state_29670){
var state_val_29671 = (state_29670[(1)]);
if((state_val_29671 === (7))){
var inst_29666 = (state_29670[(2)]);
var state_29670__$1 = state_29670;
var statearr_29672_29705 = state_29670__$1;
(statearr_29672_29705[(2)] = inst_29666);

(statearr_29672_29705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (1))){
var inst_29633 = (new Array(n));
var inst_29634 = inst_29633;
var inst_29635 = (0);
var state_29670__$1 = (function (){var statearr_29673 = state_29670;
(statearr_29673[(7)] = inst_29635);

(statearr_29673[(8)] = inst_29634);

return statearr_29673;
})();
var statearr_29674_29706 = state_29670__$1;
(statearr_29674_29706[(2)] = null);

(statearr_29674_29706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (4))){
var inst_29638 = (state_29670[(9)]);
var inst_29638__$1 = (state_29670[(2)]);
var inst_29639 = (inst_29638__$1 == null);
var inst_29640 = cljs.core.not.call(null,inst_29639);
var state_29670__$1 = (function (){var statearr_29675 = state_29670;
(statearr_29675[(9)] = inst_29638__$1);

return statearr_29675;
})();
if(inst_29640){
var statearr_29676_29707 = state_29670__$1;
(statearr_29676_29707[(1)] = (5));

} else {
var statearr_29677_29708 = state_29670__$1;
(statearr_29677_29708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (15))){
var inst_29660 = (state_29670[(2)]);
var state_29670__$1 = state_29670;
var statearr_29678_29709 = state_29670__$1;
(statearr_29678_29709[(2)] = inst_29660);

(statearr_29678_29709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (13))){
var state_29670__$1 = state_29670;
var statearr_29679_29710 = state_29670__$1;
(statearr_29679_29710[(2)] = null);

(statearr_29679_29710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (6))){
var inst_29635 = (state_29670[(7)]);
var inst_29656 = (inst_29635 > (0));
var state_29670__$1 = state_29670;
if(cljs.core.truth_(inst_29656)){
var statearr_29680_29711 = state_29670__$1;
(statearr_29680_29711[(1)] = (12));

} else {
var statearr_29681_29712 = state_29670__$1;
(statearr_29681_29712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (3))){
var inst_29668 = (state_29670[(2)]);
var state_29670__$1 = state_29670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29670__$1,inst_29668);
} else {
if((state_val_29671 === (12))){
var inst_29634 = (state_29670[(8)]);
var inst_29658 = cljs.core.vec.call(null,inst_29634);
var state_29670__$1 = state_29670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29670__$1,(15),out,inst_29658);
} else {
if((state_val_29671 === (2))){
var state_29670__$1 = state_29670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29670__$1,(4),ch);
} else {
if((state_val_29671 === (11))){
var inst_29650 = (state_29670[(2)]);
var inst_29651 = (new Array(n));
var inst_29634 = inst_29651;
var inst_29635 = (0);
var state_29670__$1 = (function (){var statearr_29682 = state_29670;
(statearr_29682[(7)] = inst_29635);

(statearr_29682[(10)] = inst_29650);

(statearr_29682[(8)] = inst_29634);

return statearr_29682;
})();
var statearr_29683_29713 = state_29670__$1;
(statearr_29683_29713[(2)] = null);

(statearr_29683_29713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (9))){
var inst_29634 = (state_29670[(8)]);
var inst_29648 = cljs.core.vec.call(null,inst_29634);
var state_29670__$1 = state_29670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29670__$1,(11),out,inst_29648);
} else {
if((state_val_29671 === (5))){
var inst_29635 = (state_29670[(7)]);
var inst_29638 = (state_29670[(9)]);
var inst_29643 = (state_29670[(11)]);
var inst_29634 = (state_29670[(8)]);
var inst_29642 = (inst_29634[inst_29635] = inst_29638);
var inst_29643__$1 = (inst_29635 + (1));
var inst_29644 = (inst_29643__$1 < n);
var state_29670__$1 = (function (){var statearr_29684 = state_29670;
(statearr_29684[(12)] = inst_29642);

(statearr_29684[(11)] = inst_29643__$1);

return statearr_29684;
})();
if(cljs.core.truth_(inst_29644)){
var statearr_29685_29714 = state_29670__$1;
(statearr_29685_29714[(1)] = (8));

} else {
var statearr_29686_29715 = state_29670__$1;
(statearr_29686_29715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (14))){
var inst_29663 = (state_29670[(2)]);
var inst_29664 = cljs.core.async.close_BANG_.call(null,out);
var state_29670__$1 = (function (){var statearr_29688 = state_29670;
(statearr_29688[(13)] = inst_29663);

return statearr_29688;
})();
var statearr_29689_29716 = state_29670__$1;
(statearr_29689_29716[(2)] = inst_29664);

(statearr_29689_29716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (10))){
var inst_29654 = (state_29670[(2)]);
var state_29670__$1 = state_29670;
var statearr_29690_29717 = state_29670__$1;
(statearr_29690_29717[(2)] = inst_29654);

(statearr_29690_29717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29671 === (8))){
var inst_29643 = (state_29670[(11)]);
var inst_29634 = (state_29670[(8)]);
var tmp29687 = inst_29634;
var inst_29634__$1 = tmp29687;
var inst_29635 = inst_29643;
var state_29670__$1 = (function (){var statearr_29691 = state_29670;
(statearr_29691[(7)] = inst_29635);

(statearr_29691[(8)] = inst_29634__$1);

return statearr_29691;
})();
var statearr_29692_29718 = state_29670__$1;
(statearr_29692_29718[(2)] = null);

(statearr_29692_29718[(1)] = (2));


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
});})(c__27022__auto___29704,out))
;
return ((function (switch__26910__auto__,c__27022__auto___29704,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_29696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29696[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_29696[(1)] = (1));

return statearr_29696;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_29670){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29697){if((e29697 instanceof Object)){
var ex__26914__auto__ = e29697;
var statearr_29698_29719 = state_29670;
(statearr_29698_29719[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29720 = state_29670;
state_29670 = G__29720;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_29670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_29670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___29704,out))
})();
var state__27024__auto__ = (function (){var statearr_29699 = f__27023__auto__.call(null);
(statearr_29699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___29704);

return statearr_29699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___29704,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29721 = [];
var len__25923__auto___29795 = arguments.length;
var i__25924__auto___29796 = (0);
while(true){
if((i__25924__auto___29796 < len__25923__auto___29795)){
args29721.push((arguments[i__25924__auto___29796]));

var G__29797 = (i__25924__auto___29796 + (1));
i__25924__auto___29796 = G__29797;
continue;
} else {
}
break;
}

var G__29723 = args29721.length;
switch (G__29723) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29721.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___29799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___29799,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___29799,out){
return (function (state_29765){
var state_val_29766 = (state_29765[(1)]);
if((state_val_29766 === (7))){
var inst_29761 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29767_29800 = state_29765__$1;
(statearr_29767_29800[(2)] = inst_29761);

(statearr_29767_29800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (1))){
var inst_29724 = [];
var inst_29725 = inst_29724;
var inst_29726 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29765__$1 = (function (){var statearr_29768 = state_29765;
(statearr_29768[(7)] = inst_29726);

(statearr_29768[(8)] = inst_29725);

return statearr_29768;
})();
var statearr_29769_29801 = state_29765__$1;
(statearr_29769_29801[(2)] = null);

(statearr_29769_29801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (4))){
var inst_29729 = (state_29765[(9)]);
var inst_29729__$1 = (state_29765[(2)]);
var inst_29730 = (inst_29729__$1 == null);
var inst_29731 = cljs.core.not.call(null,inst_29730);
var state_29765__$1 = (function (){var statearr_29770 = state_29765;
(statearr_29770[(9)] = inst_29729__$1);

return statearr_29770;
})();
if(inst_29731){
var statearr_29771_29802 = state_29765__$1;
(statearr_29771_29802[(1)] = (5));

} else {
var statearr_29772_29803 = state_29765__$1;
(statearr_29772_29803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (15))){
var inst_29755 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29773_29804 = state_29765__$1;
(statearr_29773_29804[(2)] = inst_29755);

(statearr_29773_29804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (13))){
var state_29765__$1 = state_29765;
var statearr_29774_29805 = state_29765__$1;
(statearr_29774_29805[(2)] = null);

(statearr_29774_29805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (6))){
var inst_29725 = (state_29765[(8)]);
var inst_29750 = inst_29725.length;
var inst_29751 = (inst_29750 > (0));
var state_29765__$1 = state_29765;
if(cljs.core.truth_(inst_29751)){
var statearr_29775_29806 = state_29765__$1;
(statearr_29775_29806[(1)] = (12));

} else {
var statearr_29776_29807 = state_29765__$1;
(statearr_29776_29807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (3))){
var inst_29763 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29765__$1,inst_29763);
} else {
if((state_val_29766 === (12))){
var inst_29725 = (state_29765[(8)]);
var inst_29753 = cljs.core.vec.call(null,inst_29725);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29765__$1,(15),out,inst_29753);
} else {
if((state_val_29766 === (2))){
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29765__$1,(4),ch);
} else {
if((state_val_29766 === (11))){
var inst_29729 = (state_29765[(9)]);
var inst_29733 = (state_29765[(10)]);
var inst_29743 = (state_29765[(2)]);
var inst_29744 = [];
var inst_29745 = inst_29744.push(inst_29729);
var inst_29725 = inst_29744;
var inst_29726 = inst_29733;
var state_29765__$1 = (function (){var statearr_29777 = state_29765;
(statearr_29777[(7)] = inst_29726);

(statearr_29777[(8)] = inst_29725);

(statearr_29777[(11)] = inst_29743);

(statearr_29777[(12)] = inst_29745);

return statearr_29777;
})();
var statearr_29778_29808 = state_29765__$1;
(statearr_29778_29808[(2)] = null);

(statearr_29778_29808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (9))){
var inst_29725 = (state_29765[(8)]);
var inst_29741 = cljs.core.vec.call(null,inst_29725);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29765__$1,(11),out,inst_29741);
} else {
if((state_val_29766 === (5))){
var inst_29726 = (state_29765[(7)]);
var inst_29729 = (state_29765[(9)]);
var inst_29733 = (state_29765[(10)]);
var inst_29733__$1 = f.call(null,inst_29729);
var inst_29734 = cljs.core._EQ_.call(null,inst_29733__$1,inst_29726);
var inst_29735 = cljs.core.keyword_identical_QMARK_.call(null,inst_29726,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29736 = (inst_29734) || (inst_29735);
var state_29765__$1 = (function (){var statearr_29779 = state_29765;
(statearr_29779[(10)] = inst_29733__$1);

return statearr_29779;
})();
if(cljs.core.truth_(inst_29736)){
var statearr_29780_29809 = state_29765__$1;
(statearr_29780_29809[(1)] = (8));

} else {
var statearr_29781_29810 = state_29765__$1;
(statearr_29781_29810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (14))){
var inst_29758 = (state_29765[(2)]);
var inst_29759 = cljs.core.async.close_BANG_.call(null,out);
var state_29765__$1 = (function (){var statearr_29783 = state_29765;
(statearr_29783[(13)] = inst_29758);

return statearr_29783;
})();
var statearr_29784_29811 = state_29765__$1;
(statearr_29784_29811[(2)] = inst_29759);

(statearr_29784_29811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (10))){
var inst_29748 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29785_29812 = state_29765__$1;
(statearr_29785_29812[(2)] = inst_29748);

(statearr_29785_29812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (8))){
var inst_29725 = (state_29765[(8)]);
var inst_29729 = (state_29765[(9)]);
var inst_29733 = (state_29765[(10)]);
var inst_29738 = inst_29725.push(inst_29729);
var tmp29782 = inst_29725;
var inst_29725__$1 = tmp29782;
var inst_29726 = inst_29733;
var state_29765__$1 = (function (){var statearr_29786 = state_29765;
(statearr_29786[(7)] = inst_29726);

(statearr_29786[(8)] = inst_29725__$1);

(statearr_29786[(14)] = inst_29738);

return statearr_29786;
})();
var statearr_29787_29813 = state_29765__$1;
(statearr_29787_29813[(2)] = null);

(statearr_29787_29813[(1)] = (2));


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
});})(c__27022__auto___29799,out))
;
return ((function (switch__26910__auto__,c__27022__auto___29799,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_29791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29791[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_29791[(1)] = (1));

return statearr_29791;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_29765){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_29765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e29792){if((e29792 instanceof Object)){
var ex__26914__auto__ = e29792;
var statearr_29793_29814 = state_29765;
(statearr_29793_29814[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29815 = state_29765;
state_29765 = G__29815;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_29765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_29765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___29799,out))
})();
var state__27024__auto__ = (function (){var statearr_29794 = f__27023__auto__.call(null);
(statearr_29794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___29799);

return statearr_29794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___29799,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489514026924