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
var args50107 = [];
var len__25923__auto___50113 = arguments.length;
var i__25924__auto___50114 = (0);
while(true){
if((i__25924__auto___50114 < len__25923__auto___50113)){
args50107.push((arguments[i__25924__auto___50114]));

var G__50115 = (i__25924__auto___50114 + (1));
i__25924__auto___50114 = G__50115;
continue;
} else {
}
break;
}

var G__50109 = args50107.length;
switch (G__50109) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50107.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async50110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50110 = (function (f,blockable,meta50111){
this.f = f;
this.blockable = blockable;
this.meta50111 = meta50111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50112,meta50111__$1){
var self__ = this;
var _50112__$1 = this;
return (new cljs.core.async.t_cljs$core$async50110(self__.f,self__.blockable,meta50111__$1));
});

cljs.core.async.t_cljs$core$async50110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50112){
var self__ = this;
var _50112__$1 = this;
return self__.meta50111;
});

cljs.core.async.t_cljs$core$async50110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async50110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async50110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50111","meta50111",1043417875,null)], null);
});

cljs.core.async.t_cljs$core$async50110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50110";

cljs.core.async.t_cljs$core$async50110.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async50110");
});

cljs.core.async.__GT_t_cljs$core$async50110 = (function cljs$core$async$__GT_t_cljs$core$async50110(f__$1,blockable__$1,meta50111){
return (new cljs.core.async.t_cljs$core$async50110(f__$1,blockable__$1,meta50111));
});

}

return (new cljs.core.async.t_cljs$core$async50110(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args50119 = [];
var len__25923__auto___50122 = arguments.length;
var i__25924__auto___50123 = (0);
while(true){
if((i__25924__auto___50123 < len__25923__auto___50122)){
args50119.push((arguments[i__25924__auto___50123]));

var G__50124 = (i__25924__auto___50123 + (1));
i__25924__auto___50123 = G__50124;
continue;
} else {
}
break;
}

var G__50121 = args50119.length;
switch (G__50121) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50119.length)].join('')));

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
var args50126 = [];
var len__25923__auto___50129 = arguments.length;
var i__25924__auto___50130 = (0);
while(true){
if((i__25924__auto___50130 < len__25923__auto___50129)){
args50126.push((arguments[i__25924__auto___50130]));

var G__50131 = (i__25924__auto___50130 + (1));
i__25924__auto___50130 = G__50131;
continue;
} else {
}
break;
}

var G__50128 = args50126.length;
switch (G__50128) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50126.length)].join('')));

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
var args50133 = [];
var len__25923__auto___50136 = arguments.length;
var i__25924__auto___50137 = (0);
while(true){
if((i__25924__auto___50137 < len__25923__auto___50136)){
args50133.push((arguments[i__25924__auto___50137]));

var G__50138 = (i__25924__auto___50137 + (1));
i__25924__auto___50137 = G__50138;
continue;
} else {
}
break;
}

var G__50135 = args50133.length;
switch (G__50135) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50133.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50140 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50140);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_50140,ret){
return (function (){
return fn1.call(null,val_50140);
});})(val_50140,ret))
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
var args50141 = [];
var len__25923__auto___50144 = arguments.length;
var i__25924__auto___50145 = (0);
while(true){
if((i__25924__auto___50145 < len__25923__auto___50144)){
args50141.push((arguments[i__25924__auto___50145]));

var G__50146 = (i__25924__auto___50145 + (1));
i__25924__auto___50145 = G__50146;
continue;
} else {
}
break;
}

var G__50143 = args50141.length;
switch (G__50143) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50141.length)].join('')));

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
var n__25763__auto___50148 = n;
var x_50149 = (0);
while(true){
if((x_50149 < n__25763__auto___50148)){
(a[x_50149] = (0));

var G__50150 = (x_50149 + (1));
x_50149 = G__50150;
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

var G__50151 = (i + (1));
i = G__50151;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async50155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50155 = (function (alt_flag,flag,meta50156){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta50156 = meta50156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50157,meta50156__$1){
var self__ = this;
var _50157__$1 = this;
return (new cljs.core.async.t_cljs$core$async50155(self__.alt_flag,self__.flag,meta50156__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50157){
var self__ = this;
var _50157__$1 = this;
return self__.meta50156;
});})(flag))
;

cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50155.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50156","meta50156",1640219768,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50155";

cljs.core.async.t_cljs$core$async50155.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async50155");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async50155 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50155(alt_flag__$1,flag__$1,meta50156){
return (new cljs.core.async.t_cljs$core$async50155(alt_flag__$1,flag__$1,meta50156));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50155(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async50161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50161 = (function (alt_handler,flag,cb,meta50162){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta50162 = meta50162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50163,meta50162__$1){
var self__ = this;
var _50163__$1 = this;
return (new cljs.core.async.t_cljs$core$async50161(self__.alt_handler,self__.flag,self__.cb,meta50162__$1));
});

cljs.core.async.t_cljs$core$async50161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50163){
var self__ = this;
var _50163__$1 = this;
return self__.meta50162;
});

cljs.core.async.t_cljs$core$async50161.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async50161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50162","meta50162",486441792,null)], null);
});

cljs.core.async.t_cljs$core$async50161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50161";

cljs.core.async.t_cljs$core$async50161.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async50161");
});

cljs.core.async.__GT_t_cljs$core$async50161 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50161(alt_handler__$1,flag__$1,cb__$1,meta50162){
return (new cljs.core.async.t_cljs$core$async50161(alt_handler__$1,flag__$1,cb__$1,meta50162));
});

}

return (new cljs.core.async.t_cljs$core$async50161(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50164_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50164_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50165_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50165_SHARP_,port], null));
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
var G__50166 = (i + (1));
i = G__50166;
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
var len__25923__auto___50172 = arguments.length;
var i__25924__auto___50173 = (0);
while(true){
if((i__25924__auto___50173 < len__25923__auto___50172)){
args__25930__auto__.push((arguments[i__25924__auto___50173]));

var G__50174 = (i__25924__auto___50173 + (1));
i__25924__auto___50173 = G__50174;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50169){
var map__50170 = p__50169;
var map__50170__$1 = ((((!((map__50170 == null)))?((((map__50170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50170):map__50170);
var opts = map__50170__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50167){
var G__50168 = cljs.core.first.call(null,seq50167);
var seq50167__$1 = cljs.core.next.call(null,seq50167);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50168,seq50167__$1);
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
var args50175 = [];
var len__25923__auto___50225 = arguments.length;
var i__25924__auto___50226 = (0);
while(true){
if((i__25924__auto___50226 < len__25923__auto___50225)){
args50175.push((arguments[i__25924__auto___50226]));

var G__50227 = (i__25924__auto___50226 + (1));
i__25924__auto___50226 = G__50227;
continue;
} else {
}
break;
}

var G__50177 = args50175.length;
switch (G__50177) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50175.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27022__auto___50229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___50229){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___50229){
return (function (state_50201){
var state_val_50202 = (state_50201[(1)]);
if((state_val_50202 === (7))){
var inst_50197 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
var statearr_50203_50230 = state_50201__$1;
(statearr_50203_50230[(2)] = inst_50197);

(statearr_50203_50230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (1))){
var state_50201__$1 = state_50201;
var statearr_50204_50231 = state_50201__$1;
(statearr_50204_50231[(2)] = null);

(statearr_50204_50231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (4))){
var inst_50180 = (state_50201[(7)]);
var inst_50180__$1 = (state_50201[(2)]);
var inst_50181 = (inst_50180__$1 == null);
var state_50201__$1 = (function (){var statearr_50205 = state_50201;
(statearr_50205[(7)] = inst_50180__$1);

return statearr_50205;
})();
if(cljs.core.truth_(inst_50181)){
var statearr_50206_50232 = state_50201__$1;
(statearr_50206_50232[(1)] = (5));

} else {
var statearr_50207_50233 = state_50201__$1;
(statearr_50207_50233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (13))){
var state_50201__$1 = state_50201;
var statearr_50208_50234 = state_50201__$1;
(statearr_50208_50234[(2)] = null);

(statearr_50208_50234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (6))){
var inst_50180 = (state_50201[(7)]);
var state_50201__$1 = state_50201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50201__$1,(11),to,inst_50180);
} else {
if((state_val_50202 === (3))){
var inst_50199 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50201__$1,inst_50199);
} else {
if((state_val_50202 === (12))){
var state_50201__$1 = state_50201;
var statearr_50209_50235 = state_50201__$1;
(statearr_50209_50235[(2)] = null);

(statearr_50209_50235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (2))){
var state_50201__$1 = state_50201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50201__$1,(4),from);
} else {
if((state_val_50202 === (11))){
var inst_50190 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
if(cljs.core.truth_(inst_50190)){
var statearr_50210_50236 = state_50201__$1;
(statearr_50210_50236[(1)] = (12));

} else {
var statearr_50211_50237 = state_50201__$1;
(statearr_50211_50237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (9))){
var state_50201__$1 = state_50201;
var statearr_50212_50238 = state_50201__$1;
(statearr_50212_50238[(2)] = null);

(statearr_50212_50238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (5))){
var state_50201__$1 = state_50201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50213_50239 = state_50201__$1;
(statearr_50213_50239[(1)] = (8));

} else {
var statearr_50214_50240 = state_50201__$1;
(statearr_50214_50240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (14))){
var inst_50195 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
var statearr_50215_50241 = state_50201__$1;
(statearr_50215_50241[(2)] = inst_50195);

(statearr_50215_50241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (10))){
var inst_50187 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
var statearr_50216_50242 = state_50201__$1;
(statearr_50216_50242[(2)] = inst_50187);

(statearr_50216_50242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (8))){
var inst_50184 = cljs.core.async.close_BANG_.call(null,to);
var state_50201__$1 = state_50201;
var statearr_50217_50243 = state_50201__$1;
(statearr_50217_50243[(2)] = inst_50184);

(statearr_50217_50243[(1)] = (10));


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
});})(c__27022__auto___50229))
;
return ((function (switch__26910__auto__,c__27022__auto___50229){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_50221 = [null,null,null,null,null,null,null,null];
(statearr_50221[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_50221[(1)] = (1));

return statearr_50221;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_50201){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50222){if((e50222 instanceof Object)){
var ex__26914__auto__ = e50222;
var statearr_50223_50244 = state_50201;
(statearr_50223_50244[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50245 = state_50201;
state_50201 = G__50245;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_50201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_50201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___50229))
})();
var state__27024__auto__ = (function (){var statearr_50224 = f__27023__auto__.call(null);
(statearr_50224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___50229);

return statearr_50224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___50229))
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
return (function (p__50433){
var vec__50434 = p__50433;
var v = cljs.core.nth.call(null,vec__50434,(0),null);
var p = cljs.core.nth.call(null,vec__50434,(1),null);
var job = vec__50434;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27022__auto___50620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___50620,res,vec__50434,v,p,job,jobs,results){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___50620,res,vec__50434,v,p,job,jobs,results){
return (function (state_50441){
var state_val_50442 = (state_50441[(1)]);
if((state_val_50442 === (1))){
var state_50441__$1 = state_50441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50441__$1,(2),res,v);
} else {
if((state_val_50442 === (2))){
var inst_50438 = (state_50441[(2)]);
var inst_50439 = cljs.core.async.close_BANG_.call(null,res);
var state_50441__$1 = (function (){var statearr_50443 = state_50441;
(statearr_50443[(7)] = inst_50438);

return statearr_50443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50441__$1,inst_50439);
} else {
return null;
}
}
});})(c__27022__auto___50620,res,vec__50434,v,p,job,jobs,results))
;
return ((function (switch__26910__auto__,c__27022__auto___50620,res,vec__50434,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_50447 = [null,null,null,null,null,null,null,null];
(statearr_50447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_50447[(1)] = (1));

return statearr_50447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_50441){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50448){if((e50448 instanceof Object)){
var ex__26914__auto__ = e50448;
var statearr_50449_50621 = state_50441;
(statearr_50449_50621[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50622 = state_50441;
state_50441 = G__50622;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_50441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_50441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___50620,res,vec__50434,v,p,job,jobs,results))
})();
var state__27024__auto__ = (function (){var statearr_50450 = f__27023__auto__.call(null);
(statearr_50450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___50620);

return statearr_50450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___50620,res,vec__50434,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50451){
var vec__50452 = p__50451;
var v = cljs.core.nth.call(null,vec__50452,(0),null);
var p = cljs.core.nth.call(null,vec__50452,(1),null);
var job = vec__50452;
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
var n__25763__auto___50623 = n;
var __50624 = (0);
while(true){
if((__50624 < n__25763__auto___50623)){
var G__50455_50625 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50455_50625) {
case "compute":
var c__27022__auto___50627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50624,c__27022__auto___50627,G__50455_50625,n__25763__auto___50623,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (__50624,c__27022__auto___50627,G__50455_50625,n__25763__auto___50623,jobs,results,process,async){
return (function (state_50468){
var state_val_50469 = (state_50468[(1)]);
if((state_val_50469 === (1))){
var state_50468__$1 = state_50468;
var statearr_50470_50628 = state_50468__$1;
(statearr_50470_50628[(2)] = null);

(statearr_50470_50628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50469 === (2))){
var state_50468__$1 = state_50468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50468__$1,(4),jobs);
} else {
if((state_val_50469 === (3))){
var inst_50466 = (state_50468[(2)]);
var state_50468__$1 = state_50468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50468__$1,inst_50466);
} else {
if((state_val_50469 === (4))){
var inst_50458 = (state_50468[(2)]);
var inst_50459 = process.call(null,inst_50458);
var state_50468__$1 = state_50468;
if(cljs.core.truth_(inst_50459)){
var statearr_50471_50629 = state_50468__$1;
(statearr_50471_50629[(1)] = (5));

} else {
var statearr_50472_50630 = state_50468__$1;
(statearr_50472_50630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50469 === (5))){
var state_50468__$1 = state_50468;
var statearr_50473_50631 = state_50468__$1;
(statearr_50473_50631[(2)] = null);

(statearr_50473_50631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50469 === (6))){
var state_50468__$1 = state_50468;
var statearr_50474_50632 = state_50468__$1;
(statearr_50474_50632[(2)] = null);

(statearr_50474_50632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50469 === (7))){
var inst_50464 = (state_50468[(2)]);
var state_50468__$1 = state_50468;
var statearr_50475_50633 = state_50468__$1;
(statearr_50475_50633[(2)] = inst_50464);

(statearr_50475_50633[(1)] = (3));


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
});})(__50624,c__27022__auto___50627,G__50455_50625,n__25763__auto___50623,jobs,results,process,async))
;
return ((function (__50624,switch__26910__auto__,c__27022__auto___50627,G__50455_50625,n__25763__auto___50623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_50479 = [null,null,null,null,null,null,null];
(statearr_50479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_50479[(1)] = (1));

return statearr_50479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_50468){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50480){if((e50480 instanceof Object)){
var ex__26914__auto__ = e50480;
var statearr_50481_50634 = state_50468;
(statearr_50481_50634[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50635 = state_50468;
state_50468 = G__50635;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_50468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_50468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(__50624,switch__26910__auto__,c__27022__auto___50627,G__50455_50625,n__25763__auto___50623,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_50482 = f__27023__auto__.call(null);
(statearr_50482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___50627);

return statearr_50482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(__50624,c__27022__auto___50627,G__50455_50625,n__25763__auto___50623,jobs,results,process,async))
);


break;
case "async":
var c__27022__auto___50636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50624,c__27022__auto___50636,G__50455_50625,n__25763__auto___50623,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (__50624,c__27022__auto___50636,G__50455_50625,n__25763__auto___50623,jobs,results,process,async){
return (function (state_50495){
var state_val_50496 = (state_50495[(1)]);
if((state_val_50496 === (1))){
var state_50495__$1 = state_50495;
var statearr_50497_50637 = state_50495__$1;
(statearr_50497_50637[(2)] = null);

(statearr_50497_50637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (2))){
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50495__$1,(4),jobs);
} else {
if((state_val_50496 === (3))){
var inst_50493 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50495__$1,inst_50493);
} else {
if((state_val_50496 === (4))){
var inst_50485 = (state_50495[(2)]);
var inst_50486 = async.call(null,inst_50485);
var state_50495__$1 = state_50495;
if(cljs.core.truth_(inst_50486)){
var statearr_50498_50638 = state_50495__$1;
(statearr_50498_50638[(1)] = (5));

} else {
var statearr_50499_50639 = state_50495__$1;
(statearr_50499_50639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (5))){
var state_50495__$1 = state_50495;
var statearr_50500_50640 = state_50495__$1;
(statearr_50500_50640[(2)] = null);

(statearr_50500_50640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (6))){
var state_50495__$1 = state_50495;
var statearr_50501_50641 = state_50495__$1;
(statearr_50501_50641[(2)] = null);

(statearr_50501_50641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (7))){
var inst_50491 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
var statearr_50502_50642 = state_50495__$1;
(statearr_50502_50642[(2)] = inst_50491);

(statearr_50502_50642[(1)] = (3));


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
});})(__50624,c__27022__auto___50636,G__50455_50625,n__25763__auto___50623,jobs,results,process,async))
;
return ((function (__50624,switch__26910__auto__,c__27022__auto___50636,G__50455_50625,n__25763__auto___50623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_50506 = [null,null,null,null,null,null,null];
(statearr_50506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_50506[(1)] = (1));

return statearr_50506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_50495){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50507){if((e50507 instanceof Object)){
var ex__26914__auto__ = e50507;
var statearr_50508_50643 = state_50495;
(statearr_50508_50643[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50644 = state_50495;
state_50495 = G__50644;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_50495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_50495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(__50624,switch__26910__auto__,c__27022__auto___50636,G__50455_50625,n__25763__auto___50623,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_50509 = f__27023__auto__.call(null);
(statearr_50509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___50636);

return statearr_50509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(__50624,c__27022__auto___50636,G__50455_50625,n__25763__auto___50623,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__50645 = (__50624 + (1));
__50624 = G__50645;
continue;
} else {
}
break;
}

var c__27022__auto___50646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___50646,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___50646,jobs,results,process,async){
return (function (state_50531){
var state_val_50532 = (state_50531[(1)]);
if((state_val_50532 === (1))){
var state_50531__$1 = state_50531;
var statearr_50533_50647 = state_50531__$1;
(statearr_50533_50647[(2)] = null);

(statearr_50533_50647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50532 === (2))){
var state_50531__$1 = state_50531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50531__$1,(4),from);
} else {
if((state_val_50532 === (3))){
var inst_50529 = (state_50531[(2)]);
var state_50531__$1 = state_50531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50531__$1,inst_50529);
} else {
if((state_val_50532 === (4))){
var inst_50512 = (state_50531[(7)]);
var inst_50512__$1 = (state_50531[(2)]);
var inst_50513 = (inst_50512__$1 == null);
var state_50531__$1 = (function (){var statearr_50534 = state_50531;
(statearr_50534[(7)] = inst_50512__$1);

return statearr_50534;
})();
if(cljs.core.truth_(inst_50513)){
var statearr_50535_50648 = state_50531__$1;
(statearr_50535_50648[(1)] = (5));

} else {
var statearr_50536_50649 = state_50531__$1;
(statearr_50536_50649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50532 === (5))){
var inst_50515 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50531__$1 = state_50531;
var statearr_50537_50650 = state_50531__$1;
(statearr_50537_50650[(2)] = inst_50515);

(statearr_50537_50650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50532 === (6))){
var inst_50512 = (state_50531[(7)]);
var inst_50517 = (state_50531[(8)]);
var inst_50517__$1 = cljs.core.async.chan.call(null,(1));
var inst_50518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50519 = [inst_50512,inst_50517__$1];
var inst_50520 = (new cljs.core.PersistentVector(null,2,(5),inst_50518,inst_50519,null));
var state_50531__$1 = (function (){var statearr_50538 = state_50531;
(statearr_50538[(8)] = inst_50517__$1);

return statearr_50538;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50531__$1,(8),jobs,inst_50520);
} else {
if((state_val_50532 === (7))){
var inst_50527 = (state_50531[(2)]);
var state_50531__$1 = state_50531;
var statearr_50539_50651 = state_50531__$1;
(statearr_50539_50651[(2)] = inst_50527);

(statearr_50539_50651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50532 === (8))){
var inst_50517 = (state_50531[(8)]);
var inst_50522 = (state_50531[(2)]);
var state_50531__$1 = (function (){var statearr_50540 = state_50531;
(statearr_50540[(9)] = inst_50522);

return statearr_50540;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50531__$1,(9),results,inst_50517);
} else {
if((state_val_50532 === (9))){
var inst_50524 = (state_50531[(2)]);
var state_50531__$1 = (function (){var statearr_50541 = state_50531;
(statearr_50541[(10)] = inst_50524);

return statearr_50541;
})();
var statearr_50542_50652 = state_50531__$1;
(statearr_50542_50652[(2)] = null);

(statearr_50542_50652[(1)] = (2));


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
});})(c__27022__auto___50646,jobs,results,process,async))
;
return ((function (switch__26910__auto__,c__27022__auto___50646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0 = (function (){
var statearr_50546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_50546[(1)] = (1));

return statearr_50546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_50531){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50547){if((e50547 instanceof Object)){
var ex__26914__auto__ = e50547;
var statearr_50548_50653 = state_50531;
(statearr_50548_50653[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50654 = state_50531;
state_50531 = G__50654;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_50531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_50531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___50646,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_50549 = f__27023__auto__.call(null);
(statearr_50549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___50646);

return statearr_50549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___50646,jobs,results,process,async))
);


var c__27022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto__,jobs,results,process,async){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto__,jobs,results,process,async){
return (function (state_50587){
var state_val_50588 = (state_50587[(1)]);
if((state_val_50588 === (7))){
var inst_50583 = (state_50587[(2)]);
var state_50587__$1 = state_50587;
var statearr_50589_50655 = state_50587__$1;
(statearr_50589_50655[(2)] = inst_50583);

(statearr_50589_50655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (20))){
var state_50587__$1 = state_50587;
var statearr_50590_50656 = state_50587__$1;
(statearr_50590_50656[(2)] = null);

(statearr_50590_50656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (1))){
var state_50587__$1 = state_50587;
var statearr_50591_50657 = state_50587__$1;
(statearr_50591_50657[(2)] = null);

(statearr_50591_50657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (4))){
var inst_50552 = (state_50587[(7)]);
var inst_50552__$1 = (state_50587[(2)]);
var inst_50553 = (inst_50552__$1 == null);
var state_50587__$1 = (function (){var statearr_50592 = state_50587;
(statearr_50592[(7)] = inst_50552__$1);

return statearr_50592;
})();
if(cljs.core.truth_(inst_50553)){
var statearr_50593_50658 = state_50587__$1;
(statearr_50593_50658[(1)] = (5));

} else {
var statearr_50594_50659 = state_50587__$1;
(statearr_50594_50659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (15))){
var inst_50565 = (state_50587[(8)]);
var state_50587__$1 = state_50587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50587__$1,(18),to,inst_50565);
} else {
if((state_val_50588 === (21))){
var inst_50578 = (state_50587[(2)]);
var state_50587__$1 = state_50587;
var statearr_50595_50660 = state_50587__$1;
(statearr_50595_50660[(2)] = inst_50578);

(statearr_50595_50660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (13))){
var inst_50580 = (state_50587[(2)]);
var state_50587__$1 = (function (){var statearr_50596 = state_50587;
(statearr_50596[(9)] = inst_50580);

return statearr_50596;
})();
var statearr_50597_50661 = state_50587__$1;
(statearr_50597_50661[(2)] = null);

(statearr_50597_50661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (6))){
var inst_50552 = (state_50587[(7)]);
var state_50587__$1 = state_50587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50587__$1,(11),inst_50552);
} else {
if((state_val_50588 === (17))){
var inst_50573 = (state_50587[(2)]);
var state_50587__$1 = state_50587;
if(cljs.core.truth_(inst_50573)){
var statearr_50598_50662 = state_50587__$1;
(statearr_50598_50662[(1)] = (19));

} else {
var statearr_50599_50663 = state_50587__$1;
(statearr_50599_50663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (3))){
var inst_50585 = (state_50587[(2)]);
var state_50587__$1 = state_50587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50587__$1,inst_50585);
} else {
if((state_val_50588 === (12))){
var inst_50562 = (state_50587[(10)]);
var state_50587__$1 = state_50587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50587__$1,(14),inst_50562);
} else {
if((state_val_50588 === (2))){
var state_50587__$1 = state_50587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50587__$1,(4),results);
} else {
if((state_val_50588 === (19))){
var state_50587__$1 = state_50587;
var statearr_50600_50664 = state_50587__$1;
(statearr_50600_50664[(2)] = null);

(statearr_50600_50664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (11))){
var inst_50562 = (state_50587[(2)]);
var state_50587__$1 = (function (){var statearr_50601 = state_50587;
(statearr_50601[(10)] = inst_50562);

return statearr_50601;
})();
var statearr_50602_50665 = state_50587__$1;
(statearr_50602_50665[(2)] = null);

(statearr_50602_50665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (9))){
var state_50587__$1 = state_50587;
var statearr_50603_50666 = state_50587__$1;
(statearr_50603_50666[(2)] = null);

(statearr_50603_50666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (5))){
var state_50587__$1 = state_50587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50604_50667 = state_50587__$1;
(statearr_50604_50667[(1)] = (8));

} else {
var statearr_50605_50668 = state_50587__$1;
(statearr_50605_50668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (14))){
var inst_50565 = (state_50587[(8)]);
var inst_50567 = (state_50587[(11)]);
var inst_50565__$1 = (state_50587[(2)]);
var inst_50566 = (inst_50565__$1 == null);
var inst_50567__$1 = cljs.core.not.call(null,inst_50566);
var state_50587__$1 = (function (){var statearr_50606 = state_50587;
(statearr_50606[(8)] = inst_50565__$1);

(statearr_50606[(11)] = inst_50567__$1);

return statearr_50606;
})();
if(inst_50567__$1){
var statearr_50607_50669 = state_50587__$1;
(statearr_50607_50669[(1)] = (15));

} else {
var statearr_50608_50670 = state_50587__$1;
(statearr_50608_50670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (16))){
var inst_50567 = (state_50587[(11)]);
var state_50587__$1 = state_50587;
var statearr_50609_50671 = state_50587__$1;
(statearr_50609_50671[(2)] = inst_50567);

(statearr_50609_50671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (10))){
var inst_50559 = (state_50587[(2)]);
var state_50587__$1 = state_50587;
var statearr_50610_50672 = state_50587__$1;
(statearr_50610_50672[(2)] = inst_50559);

(statearr_50610_50672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (18))){
var inst_50570 = (state_50587[(2)]);
var state_50587__$1 = state_50587;
var statearr_50611_50673 = state_50587__$1;
(statearr_50611_50673[(2)] = inst_50570);

(statearr_50611_50673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50588 === (8))){
var inst_50556 = cljs.core.async.close_BANG_.call(null,to);
var state_50587__$1 = state_50587;
var statearr_50612_50674 = state_50587__$1;
(statearr_50612_50674[(2)] = inst_50556);

(statearr_50612_50674[(1)] = (10));


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
var statearr_50616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__);

(statearr_50616[(1)] = (1));

return statearr_50616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1 = (function (state_50587){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50617){if((e50617 instanceof Object)){
var ex__26914__auto__ = e50617;
var statearr_50618_50675 = state_50587;
(statearr_50618_50675[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50676 = state_50587;
state_50587 = G__50676;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__ = function(state_50587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1.call(this,state_50587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__,jobs,results,process,async))
})();
var state__27024__auto__ = (function (){var statearr_50619 = f__27023__auto__.call(null);
(statearr_50619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_50619;
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
var args50677 = [];
var len__25923__auto___50680 = arguments.length;
var i__25924__auto___50681 = (0);
while(true){
if((i__25924__auto___50681 < len__25923__auto___50680)){
args50677.push((arguments[i__25924__auto___50681]));

var G__50682 = (i__25924__auto___50681 + (1));
i__25924__auto___50681 = G__50682;
continue;
} else {
}
break;
}

var G__50679 = args50677.length;
switch (G__50679) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50677.length)].join('')));

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
var args50684 = [];
var len__25923__auto___50687 = arguments.length;
var i__25924__auto___50688 = (0);
while(true){
if((i__25924__auto___50688 < len__25923__auto___50687)){
args50684.push((arguments[i__25924__auto___50688]));

var G__50689 = (i__25924__auto___50688 + (1));
i__25924__auto___50688 = G__50689;
continue;
} else {
}
break;
}

var G__50686 = args50684.length;
switch (G__50686) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50684.length)].join('')));

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
var args50691 = [];
var len__25923__auto___50744 = arguments.length;
var i__25924__auto___50745 = (0);
while(true){
if((i__25924__auto___50745 < len__25923__auto___50744)){
args50691.push((arguments[i__25924__auto___50745]));

var G__50746 = (i__25924__auto___50745 + (1));
i__25924__auto___50745 = G__50746;
continue;
} else {
}
break;
}

var G__50693 = args50691.length;
switch (G__50693) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50691.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27022__auto___50748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___50748,tc,fc){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___50748,tc,fc){
return (function (state_50719){
var state_val_50720 = (state_50719[(1)]);
if((state_val_50720 === (7))){
var inst_50715 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
var statearr_50721_50749 = state_50719__$1;
(statearr_50721_50749[(2)] = inst_50715);

(statearr_50721_50749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (1))){
var state_50719__$1 = state_50719;
var statearr_50722_50750 = state_50719__$1;
(statearr_50722_50750[(2)] = null);

(statearr_50722_50750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (4))){
var inst_50696 = (state_50719[(7)]);
var inst_50696__$1 = (state_50719[(2)]);
var inst_50697 = (inst_50696__$1 == null);
var state_50719__$1 = (function (){var statearr_50723 = state_50719;
(statearr_50723[(7)] = inst_50696__$1);

return statearr_50723;
})();
if(cljs.core.truth_(inst_50697)){
var statearr_50724_50751 = state_50719__$1;
(statearr_50724_50751[(1)] = (5));

} else {
var statearr_50725_50752 = state_50719__$1;
(statearr_50725_50752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (13))){
var state_50719__$1 = state_50719;
var statearr_50726_50753 = state_50719__$1;
(statearr_50726_50753[(2)] = null);

(statearr_50726_50753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (6))){
var inst_50696 = (state_50719[(7)]);
var inst_50702 = p.call(null,inst_50696);
var state_50719__$1 = state_50719;
if(cljs.core.truth_(inst_50702)){
var statearr_50727_50754 = state_50719__$1;
(statearr_50727_50754[(1)] = (9));

} else {
var statearr_50728_50755 = state_50719__$1;
(statearr_50728_50755[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (3))){
var inst_50717 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50719__$1,inst_50717);
} else {
if((state_val_50720 === (12))){
var state_50719__$1 = state_50719;
var statearr_50729_50756 = state_50719__$1;
(statearr_50729_50756[(2)] = null);

(statearr_50729_50756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (2))){
var state_50719__$1 = state_50719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50719__$1,(4),ch);
} else {
if((state_val_50720 === (11))){
var inst_50696 = (state_50719[(7)]);
var inst_50706 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50719__$1,(8),inst_50706,inst_50696);
} else {
if((state_val_50720 === (9))){
var state_50719__$1 = state_50719;
var statearr_50730_50757 = state_50719__$1;
(statearr_50730_50757[(2)] = tc);

(statearr_50730_50757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (5))){
var inst_50699 = cljs.core.async.close_BANG_.call(null,tc);
var inst_50700 = cljs.core.async.close_BANG_.call(null,fc);
var state_50719__$1 = (function (){var statearr_50731 = state_50719;
(statearr_50731[(8)] = inst_50699);

return statearr_50731;
})();
var statearr_50732_50758 = state_50719__$1;
(statearr_50732_50758[(2)] = inst_50700);

(statearr_50732_50758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (14))){
var inst_50713 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
var statearr_50733_50759 = state_50719__$1;
(statearr_50733_50759[(2)] = inst_50713);

(statearr_50733_50759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (10))){
var state_50719__$1 = state_50719;
var statearr_50734_50760 = state_50719__$1;
(statearr_50734_50760[(2)] = fc);

(statearr_50734_50760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (8))){
var inst_50708 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
if(cljs.core.truth_(inst_50708)){
var statearr_50735_50761 = state_50719__$1;
(statearr_50735_50761[(1)] = (12));

} else {
var statearr_50736_50762 = state_50719__$1;
(statearr_50736_50762[(1)] = (13));

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
});})(c__27022__auto___50748,tc,fc))
;
return ((function (switch__26910__auto__,c__27022__auto___50748,tc,fc){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_50740 = [null,null,null,null,null,null,null,null,null];
(statearr_50740[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_50740[(1)] = (1));

return statearr_50740;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_50719){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50741){if((e50741 instanceof Object)){
var ex__26914__auto__ = e50741;
var statearr_50742_50763 = state_50719;
(statearr_50742_50763[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50764 = state_50719;
state_50719 = G__50764;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_50719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_50719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___50748,tc,fc))
})();
var state__27024__auto__ = (function (){var statearr_50743 = f__27023__auto__.call(null);
(statearr_50743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___50748);

return statearr_50743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___50748,tc,fc))
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
return (function (state_50828){
var state_val_50829 = (state_50828[(1)]);
if((state_val_50829 === (7))){
var inst_50824 = (state_50828[(2)]);
var state_50828__$1 = state_50828;
var statearr_50830_50851 = state_50828__$1;
(statearr_50830_50851[(2)] = inst_50824);

(statearr_50830_50851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50829 === (1))){
var inst_50808 = init;
var state_50828__$1 = (function (){var statearr_50831 = state_50828;
(statearr_50831[(7)] = inst_50808);

return statearr_50831;
})();
var statearr_50832_50852 = state_50828__$1;
(statearr_50832_50852[(2)] = null);

(statearr_50832_50852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50829 === (4))){
var inst_50811 = (state_50828[(8)]);
var inst_50811__$1 = (state_50828[(2)]);
var inst_50812 = (inst_50811__$1 == null);
var state_50828__$1 = (function (){var statearr_50833 = state_50828;
(statearr_50833[(8)] = inst_50811__$1);

return statearr_50833;
})();
if(cljs.core.truth_(inst_50812)){
var statearr_50834_50853 = state_50828__$1;
(statearr_50834_50853[(1)] = (5));

} else {
var statearr_50835_50854 = state_50828__$1;
(statearr_50835_50854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50829 === (6))){
var inst_50815 = (state_50828[(9)]);
var inst_50811 = (state_50828[(8)]);
var inst_50808 = (state_50828[(7)]);
var inst_50815__$1 = f.call(null,inst_50808,inst_50811);
var inst_50816 = cljs.core.reduced_QMARK_.call(null,inst_50815__$1);
var state_50828__$1 = (function (){var statearr_50836 = state_50828;
(statearr_50836[(9)] = inst_50815__$1);

return statearr_50836;
})();
if(inst_50816){
var statearr_50837_50855 = state_50828__$1;
(statearr_50837_50855[(1)] = (8));

} else {
var statearr_50838_50856 = state_50828__$1;
(statearr_50838_50856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50829 === (3))){
var inst_50826 = (state_50828[(2)]);
var state_50828__$1 = state_50828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50828__$1,inst_50826);
} else {
if((state_val_50829 === (2))){
var state_50828__$1 = state_50828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50828__$1,(4),ch);
} else {
if((state_val_50829 === (9))){
var inst_50815 = (state_50828[(9)]);
var inst_50808 = inst_50815;
var state_50828__$1 = (function (){var statearr_50839 = state_50828;
(statearr_50839[(7)] = inst_50808);

return statearr_50839;
})();
var statearr_50840_50857 = state_50828__$1;
(statearr_50840_50857[(2)] = null);

(statearr_50840_50857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50829 === (5))){
var inst_50808 = (state_50828[(7)]);
var state_50828__$1 = state_50828;
var statearr_50841_50858 = state_50828__$1;
(statearr_50841_50858[(2)] = inst_50808);

(statearr_50841_50858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50829 === (10))){
var inst_50822 = (state_50828[(2)]);
var state_50828__$1 = state_50828;
var statearr_50842_50859 = state_50828__$1;
(statearr_50842_50859[(2)] = inst_50822);

(statearr_50842_50859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50829 === (8))){
var inst_50815 = (state_50828[(9)]);
var inst_50818 = cljs.core.deref.call(null,inst_50815);
var state_50828__$1 = state_50828;
var statearr_50843_50860 = state_50828__$1;
(statearr_50843_50860[(2)] = inst_50818);

(statearr_50843_50860[(1)] = (10));


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
var statearr_50847 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50847[(0)] = cljs$core$async$reduce_$_state_machine__26911__auto__);

(statearr_50847[(1)] = (1));

return statearr_50847;
});
var cljs$core$async$reduce_$_state_machine__26911__auto____1 = (function (state_50828){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50848){if((e50848 instanceof Object)){
var ex__26914__auto__ = e50848;
var statearr_50849_50861 = state_50828;
(statearr_50849_50861[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50862 = state_50828;
state_50828 = G__50862;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26911__auto__ = function(state_50828){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26911__auto____1.call(this,state_50828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26911__auto____0;
cljs$core$async$reduce_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26911__auto____1;
return cljs$core$async$reduce_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_50850 = f__27023__auto__.call(null);
(statearr_50850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_50850;
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
var args50863 = [];
var len__25923__auto___50915 = arguments.length;
var i__25924__auto___50916 = (0);
while(true){
if((i__25924__auto___50916 < len__25923__auto___50915)){
args50863.push((arguments[i__25924__auto___50916]));

var G__50917 = (i__25924__auto___50916 + (1));
i__25924__auto___50916 = G__50917;
continue;
} else {
}
break;
}

var G__50865 = args50863.length;
switch (G__50865) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50863.length)].join('')));

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
return (function (state_50890){
var state_val_50891 = (state_50890[(1)]);
if((state_val_50891 === (7))){
var inst_50872 = (state_50890[(2)]);
var state_50890__$1 = state_50890;
var statearr_50892_50919 = state_50890__$1;
(statearr_50892_50919[(2)] = inst_50872);

(statearr_50892_50919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (1))){
var inst_50866 = cljs.core.seq.call(null,coll);
var inst_50867 = inst_50866;
var state_50890__$1 = (function (){var statearr_50893 = state_50890;
(statearr_50893[(7)] = inst_50867);

return statearr_50893;
})();
var statearr_50894_50920 = state_50890__$1;
(statearr_50894_50920[(2)] = null);

(statearr_50894_50920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (4))){
var inst_50867 = (state_50890[(7)]);
var inst_50870 = cljs.core.first.call(null,inst_50867);
var state_50890__$1 = state_50890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50890__$1,(7),ch,inst_50870);
} else {
if((state_val_50891 === (13))){
var inst_50884 = (state_50890[(2)]);
var state_50890__$1 = state_50890;
var statearr_50895_50921 = state_50890__$1;
(statearr_50895_50921[(2)] = inst_50884);

(statearr_50895_50921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (6))){
var inst_50875 = (state_50890[(2)]);
var state_50890__$1 = state_50890;
if(cljs.core.truth_(inst_50875)){
var statearr_50896_50922 = state_50890__$1;
(statearr_50896_50922[(1)] = (8));

} else {
var statearr_50897_50923 = state_50890__$1;
(statearr_50897_50923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (3))){
var inst_50888 = (state_50890[(2)]);
var state_50890__$1 = state_50890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50890__$1,inst_50888);
} else {
if((state_val_50891 === (12))){
var state_50890__$1 = state_50890;
var statearr_50898_50924 = state_50890__$1;
(statearr_50898_50924[(2)] = null);

(statearr_50898_50924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (2))){
var inst_50867 = (state_50890[(7)]);
var state_50890__$1 = state_50890;
if(cljs.core.truth_(inst_50867)){
var statearr_50899_50925 = state_50890__$1;
(statearr_50899_50925[(1)] = (4));

} else {
var statearr_50900_50926 = state_50890__$1;
(statearr_50900_50926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (11))){
var inst_50881 = cljs.core.async.close_BANG_.call(null,ch);
var state_50890__$1 = state_50890;
var statearr_50901_50927 = state_50890__$1;
(statearr_50901_50927[(2)] = inst_50881);

(statearr_50901_50927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (9))){
var state_50890__$1 = state_50890;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50902_50928 = state_50890__$1;
(statearr_50902_50928[(1)] = (11));

} else {
var statearr_50903_50929 = state_50890__$1;
(statearr_50903_50929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (5))){
var inst_50867 = (state_50890[(7)]);
var state_50890__$1 = state_50890;
var statearr_50904_50930 = state_50890__$1;
(statearr_50904_50930[(2)] = inst_50867);

(statearr_50904_50930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (10))){
var inst_50886 = (state_50890[(2)]);
var state_50890__$1 = state_50890;
var statearr_50905_50931 = state_50890__$1;
(statearr_50905_50931[(2)] = inst_50886);

(statearr_50905_50931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50891 === (8))){
var inst_50867 = (state_50890[(7)]);
var inst_50877 = cljs.core.next.call(null,inst_50867);
var inst_50867__$1 = inst_50877;
var state_50890__$1 = (function (){var statearr_50906 = state_50890;
(statearr_50906[(7)] = inst_50867__$1);

return statearr_50906;
})();
var statearr_50907_50932 = state_50890__$1;
(statearr_50907_50932[(2)] = null);

(statearr_50907_50932[(1)] = (2));


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
var statearr_50911 = [null,null,null,null,null,null,null,null];
(statearr_50911[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_50911[(1)] = (1));

return statearr_50911;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_50890){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_50890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e50912){if((e50912 instanceof Object)){
var ex__26914__auto__ = e50912;
var statearr_50913_50933 = state_50890;
(statearr_50913_50933[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50934 = state_50890;
state_50890 = G__50934;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_50890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_50890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_50914 = f__27023__auto__.call(null);
(statearr_50914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_50914;
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
if(typeof cljs.core.async.t_cljs$core$async51160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51160 = (function (mult,ch,cs,meta51161){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta51161 = meta51161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51162,meta51161__$1){
var self__ = this;
var _51162__$1 = this;
return (new cljs.core.async.t_cljs$core$async51160(self__.mult,self__.ch,self__.cs,meta51161__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51162){
var self__ = this;
var _51162__$1 = this;
return self__.meta51161;
});})(cs))
;

cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51160.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51160.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51161","meta51161",-378239846,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51160";

cljs.core.async.t_cljs$core$async51160.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async51160");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async51160 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51160(mult__$1,ch__$1,cs__$1,meta51161){
return (new cljs.core.async.t_cljs$core$async51160(mult__$1,ch__$1,cs__$1,meta51161));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51160(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27022__auto___51385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___51385,cs,m,dchan,dctr,done){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___51385,cs,m,dchan,dctr,done){
return (function (state_51297){
var state_val_51298 = (state_51297[(1)]);
if((state_val_51298 === (7))){
var inst_51293 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51299_51386 = state_51297__$1;
(statearr_51299_51386[(2)] = inst_51293);

(statearr_51299_51386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (20))){
var inst_51196 = (state_51297[(7)]);
var inst_51208 = cljs.core.first.call(null,inst_51196);
var inst_51209 = cljs.core.nth.call(null,inst_51208,(0),null);
var inst_51210 = cljs.core.nth.call(null,inst_51208,(1),null);
var state_51297__$1 = (function (){var statearr_51300 = state_51297;
(statearr_51300[(8)] = inst_51209);

return statearr_51300;
})();
if(cljs.core.truth_(inst_51210)){
var statearr_51301_51387 = state_51297__$1;
(statearr_51301_51387[(1)] = (22));

} else {
var statearr_51302_51388 = state_51297__$1;
(statearr_51302_51388[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (27))){
var inst_51238 = (state_51297[(9)]);
var inst_51165 = (state_51297[(10)]);
var inst_51245 = (state_51297[(11)]);
var inst_51240 = (state_51297[(12)]);
var inst_51245__$1 = cljs.core._nth.call(null,inst_51238,inst_51240);
var inst_51246 = cljs.core.async.put_BANG_.call(null,inst_51245__$1,inst_51165,done);
var state_51297__$1 = (function (){var statearr_51303 = state_51297;
(statearr_51303[(11)] = inst_51245__$1);

return statearr_51303;
})();
if(cljs.core.truth_(inst_51246)){
var statearr_51304_51389 = state_51297__$1;
(statearr_51304_51389[(1)] = (30));

} else {
var statearr_51305_51390 = state_51297__$1;
(statearr_51305_51390[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (1))){
var state_51297__$1 = state_51297;
var statearr_51306_51391 = state_51297__$1;
(statearr_51306_51391[(2)] = null);

(statearr_51306_51391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (24))){
var inst_51196 = (state_51297[(7)]);
var inst_51215 = (state_51297[(2)]);
var inst_51216 = cljs.core.next.call(null,inst_51196);
var inst_51174 = inst_51216;
var inst_51175 = null;
var inst_51176 = (0);
var inst_51177 = (0);
var state_51297__$1 = (function (){var statearr_51307 = state_51297;
(statearr_51307[(13)] = inst_51174);

(statearr_51307[(14)] = inst_51175);

(statearr_51307[(15)] = inst_51176);

(statearr_51307[(16)] = inst_51177);

(statearr_51307[(17)] = inst_51215);

return statearr_51307;
})();
var statearr_51308_51392 = state_51297__$1;
(statearr_51308_51392[(2)] = null);

(statearr_51308_51392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (39))){
var state_51297__$1 = state_51297;
var statearr_51312_51393 = state_51297__$1;
(statearr_51312_51393[(2)] = null);

(statearr_51312_51393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (4))){
var inst_51165 = (state_51297[(10)]);
var inst_51165__$1 = (state_51297[(2)]);
var inst_51166 = (inst_51165__$1 == null);
var state_51297__$1 = (function (){var statearr_51313 = state_51297;
(statearr_51313[(10)] = inst_51165__$1);

return statearr_51313;
})();
if(cljs.core.truth_(inst_51166)){
var statearr_51314_51394 = state_51297__$1;
(statearr_51314_51394[(1)] = (5));

} else {
var statearr_51315_51395 = state_51297__$1;
(statearr_51315_51395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (15))){
var inst_51174 = (state_51297[(13)]);
var inst_51175 = (state_51297[(14)]);
var inst_51176 = (state_51297[(15)]);
var inst_51177 = (state_51297[(16)]);
var inst_51192 = (state_51297[(2)]);
var inst_51193 = (inst_51177 + (1));
var tmp51309 = inst_51174;
var tmp51310 = inst_51175;
var tmp51311 = inst_51176;
var inst_51174__$1 = tmp51309;
var inst_51175__$1 = tmp51310;
var inst_51176__$1 = tmp51311;
var inst_51177__$1 = inst_51193;
var state_51297__$1 = (function (){var statearr_51316 = state_51297;
(statearr_51316[(18)] = inst_51192);

(statearr_51316[(13)] = inst_51174__$1);

(statearr_51316[(14)] = inst_51175__$1);

(statearr_51316[(15)] = inst_51176__$1);

(statearr_51316[(16)] = inst_51177__$1);

return statearr_51316;
})();
var statearr_51317_51396 = state_51297__$1;
(statearr_51317_51396[(2)] = null);

(statearr_51317_51396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (21))){
var inst_51219 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51321_51397 = state_51297__$1;
(statearr_51321_51397[(2)] = inst_51219);

(statearr_51321_51397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (31))){
var inst_51245 = (state_51297[(11)]);
var inst_51249 = done.call(null,null);
var inst_51250 = cljs.core.async.untap_STAR_.call(null,m,inst_51245);
var state_51297__$1 = (function (){var statearr_51322 = state_51297;
(statearr_51322[(19)] = inst_51249);

return statearr_51322;
})();
var statearr_51323_51398 = state_51297__$1;
(statearr_51323_51398[(2)] = inst_51250);

(statearr_51323_51398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (32))){
var inst_51238 = (state_51297[(9)]);
var inst_51237 = (state_51297[(20)]);
var inst_51240 = (state_51297[(12)]);
var inst_51239 = (state_51297[(21)]);
var inst_51252 = (state_51297[(2)]);
var inst_51253 = (inst_51240 + (1));
var tmp51318 = inst_51238;
var tmp51319 = inst_51237;
var tmp51320 = inst_51239;
var inst_51237__$1 = tmp51319;
var inst_51238__$1 = tmp51318;
var inst_51239__$1 = tmp51320;
var inst_51240__$1 = inst_51253;
var state_51297__$1 = (function (){var statearr_51324 = state_51297;
(statearr_51324[(22)] = inst_51252);

(statearr_51324[(9)] = inst_51238__$1);

(statearr_51324[(20)] = inst_51237__$1);

(statearr_51324[(12)] = inst_51240__$1);

(statearr_51324[(21)] = inst_51239__$1);

return statearr_51324;
})();
var statearr_51325_51399 = state_51297__$1;
(statearr_51325_51399[(2)] = null);

(statearr_51325_51399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (40))){
var inst_51265 = (state_51297[(23)]);
var inst_51269 = done.call(null,null);
var inst_51270 = cljs.core.async.untap_STAR_.call(null,m,inst_51265);
var state_51297__$1 = (function (){var statearr_51326 = state_51297;
(statearr_51326[(24)] = inst_51269);

return statearr_51326;
})();
var statearr_51327_51400 = state_51297__$1;
(statearr_51327_51400[(2)] = inst_51270);

(statearr_51327_51400[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (33))){
var inst_51256 = (state_51297[(25)]);
var inst_51258 = cljs.core.chunked_seq_QMARK_.call(null,inst_51256);
var state_51297__$1 = state_51297;
if(inst_51258){
var statearr_51328_51401 = state_51297__$1;
(statearr_51328_51401[(1)] = (36));

} else {
var statearr_51329_51402 = state_51297__$1;
(statearr_51329_51402[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (13))){
var inst_51186 = (state_51297[(26)]);
var inst_51189 = cljs.core.async.close_BANG_.call(null,inst_51186);
var state_51297__$1 = state_51297;
var statearr_51330_51403 = state_51297__$1;
(statearr_51330_51403[(2)] = inst_51189);

(statearr_51330_51403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (22))){
var inst_51209 = (state_51297[(8)]);
var inst_51212 = cljs.core.async.close_BANG_.call(null,inst_51209);
var state_51297__$1 = state_51297;
var statearr_51331_51404 = state_51297__$1;
(statearr_51331_51404[(2)] = inst_51212);

(statearr_51331_51404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (36))){
var inst_51256 = (state_51297[(25)]);
var inst_51260 = cljs.core.chunk_first.call(null,inst_51256);
var inst_51261 = cljs.core.chunk_rest.call(null,inst_51256);
var inst_51262 = cljs.core.count.call(null,inst_51260);
var inst_51237 = inst_51261;
var inst_51238 = inst_51260;
var inst_51239 = inst_51262;
var inst_51240 = (0);
var state_51297__$1 = (function (){var statearr_51332 = state_51297;
(statearr_51332[(9)] = inst_51238);

(statearr_51332[(20)] = inst_51237);

(statearr_51332[(12)] = inst_51240);

(statearr_51332[(21)] = inst_51239);

return statearr_51332;
})();
var statearr_51333_51405 = state_51297__$1;
(statearr_51333_51405[(2)] = null);

(statearr_51333_51405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (41))){
var inst_51256 = (state_51297[(25)]);
var inst_51272 = (state_51297[(2)]);
var inst_51273 = cljs.core.next.call(null,inst_51256);
var inst_51237 = inst_51273;
var inst_51238 = null;
var inst_51239 = (0);
var inst_51240 = (0);
var state_51297__$1 = (function (){var statearr_51334 = state_51297;
(statearr_51334[(9)] = inst_51238);

(statearr_51334[(20)] = inst_51237);

(statearr_51334[(27)] = inst_51272);

(statearr_51334[(12)] = inst_51240);

(statearr_51334[(21)] = inst_51239);

return statearr_51334;
})();
var statearr_51335_51406 = state_51297__$1;
(statearr_51335_51406[(2)] = null);

(statearr_51335_51406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (43))){
var state_51297__$1 = state_51297;
var statearr_51336_51407 = state_51297__$1;
(statearr_51336_51407[(2)] = null);

(statearr_51336_51407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (29))){
var inst_51281 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51337_51408 = state_51297__$1;
(statearr_51337_51408[(2)] = inst_51281);

(statearr_51337_51408[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (44))){
var inst_51290 = (state_51297[(2)]);
var state_51297__$1 = (function (){var statearr_51338 = state_51297;
(statearr_51338[(28)] = inst_51290);

return statearr_51338;
})();
var statearr_51339_51409 = state_51297__$1;
(statearr_51339_51409[(2)] = null);

(statearr_51339_51409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (6))){
var inst_51229 = (state_51297[(29)]);
var inst_51228 = cljs.core.deref.call(null,cs);
var inst_51229__$1 = cljs.core.keys.call(null,inst_51228);
var inst_51230 = cljs.core.count.call(null,inst_51229__$1);
var inst_51231 = cljs.core.reset_BANG_.call(null,dctr,inst_51230);
var inst_51236 = cljs.core.seq.call(null,inst_51229__$1);
var inst_51237 = inst_51236;
var inst_51238 = null;
var inst_51239 = (0);
var inst_51240 = (0);
var state_51297__$1 = (function (){var statearr_51340 = state_51297;
(statearr_51340[(9)] = inst_51238);

(statearr_51340[(20)] = inst_51237);

(statearr_51340[(30)] = inst_51231);

(statearr_51340[(29)] = inst_51229__$1);

(statearr_51340[(12)] = inst_51240);

(statearr_51340[(21)] = inst_51239);

return statearr_51340;
})();
var statearr_51341_51410 = state_51297__$1;
(statearr_51341_51410[(2)] = null);

(statearr_51341_51410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (28))){
var inst_51256 = (state_51297[(25)]);
var inst_51237 = (state_51297[(20)]);
var inst_51256__$1 = cljs.core.seq.call(null,inst_51237);
var state_51297__$1 = (function (){var statearr_51342 = state_51297;
(statearr_51342[(25)] = inst_51256__$1);

return statearr_51342;
})();
if(inst_51256__$1){
var statearr_51343_51411 = state_51297__$1;
(statearr_51343_51411[(1)] = (33));

} else {
var statearr_51344_51412 = state_51297__$1;
(statearr_51344_51412[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (25))){
var inst_51240 = (state_51297[(12)]);
var inst_51239 = (state_51297[(21)]);
var inst_51242 = (inst_51240 < inst_51239);
var inst_51243 = inst_51242;
var state_51297__$1 = state_51297;
if(cljs.core.truth_(inst_51243)){
var statearr_51345_51413 = state_51297__$1;
(statearr_51345_51413[(1)] = (27));

} else {
var statearr_51346_51414 = state_51297__$1;
(statearr_51346_51414[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (34))){
var state_51297__$1 = state_51297;
var statearr_51347_51415 = state_51297__$1;
(statearr_51347_51415[(2)] = null);

(statearr_51347_51415[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (17))){
var state_51297__$1 = state_51297;
var statearr_51348_51416 = state_51297__$1;
(statearr_51348_51416[(2)] = null);

(statearr_51348_51416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (3))){
var inst_51295 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51297__$1,inst_51295);
} else {
if((state_val_51298 === (12))){
var inst_51224 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51349_51417 = state_51297__$1;
(statearr_51349_51417[(2)] = inst_51224);

(statearr_51349_51417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (2))){
var state_51297__$1 = state_51297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51297__$1,(4),ch);
} else {
if((state_val_51298 === (23))){
var state_51297__$1 = state_51297;
var statearr_51350_51418 = state_51297__$1;
(statearr_51350_51418[(2)] = null);

(statearr_51350_51418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (35))){
var inst_51279 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51351_51419 = state_51297__$1;
(statearr_51351_51419[(2)] = inst_51279);

(statearr_51351_51419[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (19))){
var inst_51196 = (state_51297[(7)]);
var inst_51200 = cljs.core.chunk_first.call(null,inst_51196);
var inst_51201 = cljs.core.chunk_rest.call(null,inst_51196);
var inst_51202 = cljs.core.count.call(null,inst_51200);
var inst_51174 = inst_51201;
var inst_51175 = inst_51200;
var inst_51176 = inst_51202;
var inst_51177 = (0);
var state_51297__$1 = (function (){var statearr_51352 = state_51297;
(statearr_51352[(13)] = inst_51174);

(statearr_51352[(14)] = inst_51175);

(statearr_51352[(15)] = inst_51176);

(statearr_51352[(16)] = inst_51177);

return statearr_51352;
})();
var statearr_51353_51420 = state_51297__$1;
(statearr_51353_51420[(2)] = null);

(statearr_51353_51420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (11))){
var inst_51174 = (state_51297[(13)]);
var inst_51196 = (state_51297[(7)]);
var inst_51196__$1 = cljs.core.seq.call(null,inst_51174);
var state_51297__$1 = (function (){var statearr_51354 = state_51297;
(statearr_51354[(7)] = inst_51196__$1);

return statearr_51354;
})();
if(inst_51196__$1){
var statearr_51355_51421 = state_51297__$1;
(statearr_51355_51421[(1)] = (16));

} else {
var statearr_51356_51422 = state_51297__$1;
(statearr_51356_51422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (9))){
var inst_51226 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51357_51423 = state_51297__$1;
(statearr_51357_51423[(2)] = inst_51226);

(statearr_51357_51423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (5))){
var inst_51172 = cljs.core.deref.call(null,cs);
var inst_51173 = cljs.core.seq.call(null,inst_51172);
var inst_51174 = inst_51173;
var inst_51175 = null;
var inst_51176 = (0);
var inst_51177 = (0);
var state_51297__$1 = (function (){var statearr_51358 = state_51297;
(statearr_51358[(13)] = inst_51174);

(statearr_51358[(14)] = inst_51175);

(statearr_51358[(15)] = inst_51176);

(statearr_51358[(16)] = inst_51177);

return statearr_51358;
})();
var statearr_51359_51424 = state_51297__$1;
(statearr_51359_51424[(2)] = null);

(statearr_51359_51424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (14))){
var state_51297__$1 = state_51297;
var statearr_51360_51425 = state_51297__$1;
(statearr_51360_51425[(2)] = null);

(statearr_51360_51425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (45))){
var inst_51287 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51361_51426 = state_51297__$1;
(statearr_51361_51426[(2)] = inst_51287);

(statearr_51361_51426[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (26))){
var inst_51229 = (state_51297[(29)]);
var inst_51283 = (state_51297[(2)]);
var inst_51284 = cljs.core.seq.call(null,inst_51229);
var state_51297__$1 = (function (){var statearr_51362 = state_51297;
(statearr_51362[(31)] = inst_51283);

return statearr_51362;
})();
if(inst_51284){
var statearr_51363_51427 = state_51297__$1;
(statearr_51363_51427[(1)] = (42));

} else {
var statearr_51364_51428 = state_51297__$1;
(statearr_51364_51428[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (16))){
var inst_51196 = (state_51297[(7)]);
var inst_51198 = cljs.core.chunked_seq_QMARK_.call(null,inst_51196);
var state_51297__$1 = state_51297;
if(inst_51198){
var statearr_51365_51429 = state_51297__$1;
(statearr_51365_51429[(1)] = (19));

} else {
var statearr_51366_51430 = state_51297__$1;
(statearr_51366_51430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (38))){
var inst_51276 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51367_51431 = state_51297__$1;
(statearr_51367_51431[(2)] = inst_51276);

(statearr_51367_51431[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (30))){
var state_51297__$1 = state_51297;
var statearr_51368_51432 = state_51297__$1;
(statearr_51368_51432[(2)] = null);

(statearr_51368_51432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (10))){
var inst_51175 = (state_51297[(14)]);
var inst_51177 = (state_51297[(16)]);
var inst_51185 = cljs.core._nth.call(null,inst_51175,inst_51177);
var inst_51186 = cljs.core.nth.call(null,inst_51185,(0),null);
var inst_51187 = cljs.core.nth.call(null,inst_51185,(1),null);
var state_51297__$1 = (function (){var statearr_51369 = state_51297;
(statearr_51369[(26)] = inst_51186);

return statearr_51369;
})();
if(cljs.core.truth_(inst_51187)){
var statearr_51370_51433 = state_51297__$1;
(statearr_51370_51433[(1)] = (13));

} else {
var statearr_51371_51434 = state_51297__$1;
(statearr_51371_51434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (18))){
var inst_51222 = (state_51297[(2)]);
var state_51297__$1 = state_51297;
var statearr_51372_51435 = state_51297__$1;
(statearr_51372_51435[(2)] = inst_51222);

(statearr_51372_51435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (42))){
var state_51297__$1 = state_51297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51297__$1,(45),dchan);
} else {
if((state_val_51298 === (37))){
var inst_51256 = (state_51297[(25)]);
var inst_51265 = (state_51297[(23)]);
var inst_51165 = (state_51297[(10)]);
var inst_51265__$1 = cljs.core.first.call(null,inst_51256);
var inst_51266 = cljs.core.async.put_BANG_.call(null,inst_51265__$1,inst_51165,done);
var state_51297__$1 = (function (){var statearr_51373 = state_51297;
(statearr_51373[(23)] = inst_51265__$1);

return statearr_51373;
})();
if(cljs.core.truth_(inst_51266)){
var statearr_51374_51436 = state_51297__$1;
(statearr_51374_51436[(1)] = (39));

} else {
var statearr_51375_51437 = state_51297__$1;
(statearr_51375_51437[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51298 === (8))){
var inst_51176 = (state_51297[(15)]);
var inst_51177 = (state_51297[(16)]);
var inst_51179 = (inst_51177 < inst_51176);
var inst_51180 = inst_51179;
var state_51297__$1 = state_51297;
if(cljs.core.truth_(inst_51180)){
var statearr_51376_51438 = state_51297__$1;
(statearr_51376_51438[(1)] = (10));

} else {
var statearr_51377_51439 = state_51297__$1;
(statearr_51377_51439[(1)] = (11));

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
});})(c__27022__auto___51385,cs,m,dchan,dctr,done))
;
return ((function (switch__26910__auto__,c__27022__auto___51385,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26911__auto__ = null;
var cljs$core$async$mult_$_state_machine__26911__auto____0 = (function (){
var statearr_51381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51381[(0)] = cljs$core$async$mult_$_state_machine__26911__auto__);

(statearr_51381[(1)] = (1));

return statearr_51381;
});
var cljs$core$async$mult_$_state_machine__26911__auto____1 = (function (state_51297){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_51297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e51382){if((e51382 instanceof Object)){
var ex__26914__auto__ = e51382;
var statearr_51383_51440 = state_51297;
(statearr_51383_51440[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51441 = state_51297;
state_51297 = G__51441;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26911__auto__ = function(state_51297){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26911__auto____1.call(this,state_51297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26911__auto____0;
cljs$core$async$mult_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26911__auto____1;
return cljs$core$async$mult_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___51385,cs,m,dchan,dctr,done))
})();
var state__27024__auto__ = (function (){var statearr_51384 = f__27023__auto__.call(null);
(statearr_51384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___51385);

return statearr_51384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___51385,cs,m,dchan,dctr,done))
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
var args51442 = [];
var len__25923__auto___51445 = arguments.length;
var i__25924__auto___51446 = (0);
while(true){
if((i__25924__auto___51446 < len__25923__auto___51445)){
args51442.push((arguments[i__25924__auto___51446]));

var G__51447 = (i__25924__auto___51446 + (1));
i__25924__auto___51446 = G__51447;
continue;
} else {
}
break;
}

var G__51444 = args51442.length;
switch (G__51444) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51442.length)].join('')));

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
var len__25923__auto___51459 = arguments.length;
var i__25924__auto___51460 = (0);
while(true){
if((i__25924__auto___51460 < len__25923__auto___51459)){
args__25930__auto__.push((arguments[i__25924__auto___51460]));

var G__51461 = (i__25924__auto___51460 + (1));
i__25924__auto___51460 = G__51461;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51453){
var map__51454 = p__51453;
var map__51454__$1 = ((((!((map__51454 == null)))?((((map__51454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51454):map__51454);
var opts = map__51454__$1;
var statearr_51456_51462 = state;
(statearr_51456_51462[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__51454,map__51454__$1,opts){
return (function (val){
var statearr_51457_51463 = state;
(statearr_51457_51463[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51454,map__51454__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_51458_51464 = state;
(statearr_51458_51464[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51449){
var G__51450 = cljs.core.first.call(null,seq51449);
var seq51449__$1 = cljs.core.next.call(null,seq51449);
var G__51451 = cljs.core.first.call(null,seq51449__$1);
var seq51449__$2 = cljs.core.next.call(null,seq51449__$1);
var G__51452 = cljs.core.first.call(null,seq51449__$2);
var seq51449__$3 = cljs.core.next.call(null,seq51449__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51450,G__51451,G__51452,seq51449__$3);
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
if(typeof cljs.core.async.t_cljs$core$async51630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51630 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51631){
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
this.meta51631 = meta51631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51632,meta51631__$1){
var self__ = this;
var _51632__$1 = this;
return (new cljs.core.async.t_cljs$core$async51630(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51631__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51632){
var self__ = this;
var _51632__$1 = this;
return self__.meta51631;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async51630.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51631","meta51631",1538099872,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51630";

cljs.core.async.t_cljs$core$async51630.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async51630");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async51630 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51630(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51631){
return (new cljs.core.async.t_cljs$core$async51630(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51631));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51630(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27022__auto___51795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___51795,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___51795,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51732){
var state_val_51733 = (state_51732[(1)]);
if((state_val_51733 === (7))){
var inst_51648 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
var statearr_51734_51796 = state_51732__$1;
(statearr_51734_51796[(2)] = inst_51648);

(statearr_51734_51796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (20))){
var inst_51660 = (state_51732[(7)]);
var state_51732__$1 = state_51732;
var statearr_51735_51797 = state_51732__$1;
(statearr_51735_51797[(2)] = inst_51660);

(statearr_51735_51797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (27))){
var state_51732__$1 = state_51732;
var statearr_51736_51798 = state_51732__$1;
(statearr_51736_51798[(2)] = null);

(statearr_51736_51798[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (1))){
var inst_51636 = (state_51732[(8)]);
var inst_51636__$1 = calc_state.call(null);
var inst_51638 = (inst_51636__$1 == null);
var inst_51639 = cljs.core.not.call(null,inst_51638);
var state_51732__$1 = (function (){var statearr_51737 = state_51732;
(statearr_51737[(8)] = inst_51636__$1);

return statearr_51737;
})();
if(inst_51639){
var statearr_51738_51799 = state_51732__$1;
(statearr_51738_51799[(1)] = (2));

} else {
var statearr_51739_51800 = state_51732__$1;
(statearr_51739_51800[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (24))){
var inst_51706 = (state_51732[(9)]);
var inst_51683 = (state_51732[(10)]);
var inst_51692 = (state_51732[(11)]);
var inst_51706__$1 = inst_51683.call(null,inst_51692);
var state_51732__$1 = (function (){var statearr_51740 = state_51732;
(statearr_51740[(9)] = inst_51706__$1);

return statearr_51740;
})();
if(cljs.core.truth_(inst_51706__$1)){
var statearr_51741_51801 = state_51732__$1;
(statearr_51741_51801[(1)] = (29));

} else {
var statearr_51742_51802 = state_51732__$1;
(statearr_51742_51802[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (4))){
var inst_51651 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
if(cljs.core.truth_(inst_51651)){
var statearr_51743_51803 = state_51732__$1;
(statearr_51743_51803[(1)] = (8));

} else {
var statearr_51744_51804 = state_51732__$1;
(statearr_51744_51804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (15))){
var inst_51677 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
if(cljs.core.truth_(inst_51677)){
var statearr_51745_51805 = state_51732__$1;
(statearr_51745_51805[(1)] = (19));

} else {
var statearr_51746_51806 = state_51732__$1;
(statearr_51746_51806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (21))){
var inst_51682 = (state_51732[(12)]);
var inst_51682__$1 = (state_51732[(2)]);
var inst_51683 = cljs.core.get.call(null,inst_51682__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51684 = cljs.core.get.call(null,inst_51682__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51685 = cljs.core.get.call(null,inst_51682__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51732__$1 = (function (){var statearr_51747 = state_51732;
(statearr_51747[(13)] = inst_51684);

(statearr_51747[(10)] = inst_51683);

(statearr_51747[(12)] = inst_51682__$1);

return statearr_51747;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51732__$1,(22),inst_51685);
} else {
if((state_val_51733 === (31))){
var inst_51714 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
if(cljs.core.truth_(inst_51714)){
var statearr_51748_51807 = state_51732__$1;
(statearr_51748_51807[(1)] = (32));

} else {
var statearr_51749_51808 = state_51732__$1;
(statearr_51749_51808[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (32))){
var inst_51691 = (state_51732[(14)]);
var state_51732__$1 = state_51732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51732__$1,(35),out,inst_51691);
} else {
if((state_val_51733 === (33))){
var inst_51682 = (state_51732[(12)]);
var inst_51660 = inst_51682;
var state_51732__$1 = (function (){var statearr_51750 = state_51732;
(statearr_51750[(7)] = inst_51660);

return statearr_51750;
})();
var statearr_51751_51809 = state_51732__$1;
(statearr_51751_51809[(2)] = null);

(statearr_51751_51809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (13))){
var inst_51660 = (state_51732[(7)]);
var inst_51667 = inst_51660.cljs$lang$protocol_mask$partition0$;
var inst_51668 = (inst_51667 & (64));
var inst_51669 = inst_51660.cljs$core$ISeq$;
var inst_51670 = (inst_51668) || (inst_51669);
var state_51732__$1 = state_51732;
if(cljs.core.truth_(inst_51670)){
var statearr_51752_51810 = state_51732__$1;
(statearr_51752_51810[(1)] = (16));

} else {
var statearr_51753_51811 = state_51732__$1;
(statearr_51753_51811[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (22))){
var inst_51691 = (state_51732[(14)]);
var inst_51692 = (state_51732[(11)]);
var inst_51690 = (state_51732[(2)]);
var inst_51691__$1 = cljs.core.nth.call(null,inst_51690,(0),null);
var inst_51692__$1 = cljs.core.nth.call(null,inst_51690,(1),null);
var inst_51693 = (inst_51691__$1 == null);
var inst_51694 = cljs.core._EQ_.call(null,inst_51692__$1,change);
var inst_51695 = (inst_51693) || (inst_51694);
var state_51732__$1 = (function (){var statearr_51754 = state_51732;
(statearr_51754[(14)] = inst_51691__$1);

(statearr_51754[(11)] = inst_51692__$1);

return statearr_51754;
})();
if(cljs.core.truth_(inst_51695)){
var statearr_51755_51812 = state_51732__$1;
(statearr_51755_51812[(1)] = (23));

} else {
var statearr_51756_51813 = state_51732__$1;
(statearr_51756_51813[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (36))){
var inst_51682 = (state_51732[(12)]);
var inst_51660 = inst_51682;
var state_51732__$1 = (function (){var statearr_51757 = state_51732;
(statearr_51757[(7)] = inst_51660);

return statearr_51757;
})();
var statearr_51758_51814 = state_51732__$1;
(statearr_51758_51814[(2)] = null);

(statearr_51758_51814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (29))){
var inst_51706 = (state_51732[(9)]);
var state_51732__$1 = state_51732;
var statearr_51759_51815 = state_51732__$1;
(statearr_51759_51815[(2)] = inst_51706);

(statearr_51759_51815[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (6))){
var state_51732__$1 = state_51732;
var statearr_51760_51816 = state_51732__$1;
(statearr_51760_51816[(2)] = false);

(statearr_51760_51816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (28))){
var inst_51702 = (state_51732[(2)]);
var inst_51703 = calc_state.call(null);
var inst_51660 = inst_51703;
var state_51732__$1 = (function (){var statearr_51761 = state_51732;
(statearr_51761[(15)] = inst_51702);

(statearr_51761[(7)] = inst_51660);

return statearr_51761;
})();
var statearr_51762_51817 = state_51732__$1;
(statearr_51762_51817[(2)] = null);

(statearr_51762_51817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (25))){
var inst_51728 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
var statearr_51763_51818 = state_51732__$1;
(statearr_51763_51818[(2)] = inst_51728);

(statearr_51763_51818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (34))){
var inst_51726 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
var statearr_51764_51819 = state_51732__$1;
(statearr_51764_51819[(2)] = inst_51726);

(statearr_51764_51819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (17))){
var state_51732__$1 = state_51732;
var statearr_51765_51820 = state_51732__$1;
(statearr_51765_51820[(2)] = false);

(statearr_51765_51820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (3))){
var state_51732__$1 = state_51732;
var statearr_51766_51821 = state_51732__$1;
(statearr_51766_51821[(2)] = false);

(statearr_51766_51821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (12))){
var inst_51730 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51732__$1,inst_51730);
} else {
if((state_val_51733 === (2))){
var inst_51636 = (state_51732[(8)]);
var inst_51641 = inst_51636.cljs$lang$protocol_mask$partition0$;
var inst_51642 = (inst_51641 & (64));
var inst_51643 = inst_51636.cljs$core$ISeq$;
var inst_51644 = (inst_51642) || (inst_51643);
var state_51732__$1 = state_51732;
if(cljs.core.truth_(inst_51644)){
var statearr_51767_51822 = state_51732__$1;
(statearr_51767_51822[(1)] = (5));

} else {
var statearr_51768_51823 = state_51732__$1;
(statearr_51768_51823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (23))){
var inst_51691 = (state_51732[(14)]);
var inst_51697 = (inst_51691 == null);
var state_51732__$1 = state_51732;
if(cljs.core.truth_(inst_51697)){
var statearr_51769_51824 = state_51732__$1;
(statearr_51769_51824[(1)] = (26));

} else {
var statearr_51770_51825 = state_51732__$1;
(statearr_51770_51825[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (35))){
var inst_51717 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
if(cljs.core.truth_(inst_51717)){
var statearr_51771_51826 = state_51732__$1;
(statearr_51771_51826[(1)] = (36));

} else {
var statearr_51772_51827 = state_51732__$1;
(statearr_51772_51827[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (19))){
var inst_51660 = (state_51732[(7)]);
var inst_51679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51660);
var state_51732__$1 = state_51732;
var statearr_51773_51828 = state_51732__$1;
(statearr_51773_51828[(2)] = inst_51679);

(statearr_51773_51828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (11))){
var inst_51660 = (state_51732[(7)]);
var inst_51664 = (inst_51660 == null);
var inst_51665 = cljs.core.not.call(null,inst_51664);
var state_51732__$1 = state_51732;
if(inst_51665){
var statearr_51774_51829 = state_51732__$1;
(statearr_51774_51829[(1)] = (13));

} else {
var statearr_51775_51830 = state_51732__$1;
(statearr_51775_51830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (9))){
var inst_51636 = (state_51732[(8)]);
var state_51732__$1 = state_51732;
var statearr_51776_51831 = state_51732__$1;
(statearr_51776_51831[(2)] = inst_51636);

(statearr_51776_51831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (5))){
var state_51732__$1 = state_51732;
var statearr_51777_51832 = state_51732__$1;
(statearr_51777_51832[(2)] = true);

(statearr_51777_51832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (14))){
var state_51732__$1 = state_51732;
var statearr_51778_51833 = state_51732__$1;
(statearr_51778_51833[(2)] = false);

(statearr_51778_51833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (26))){
var inst_51692 = (state_51732[(11)]);
var inst_51699 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51692);
var state_51732__$1 = state_51732;
var statearr_51779_51834 = state_51732__$1;
(statearr_51779_51834[(2)] = inst_51699);

(statearr_51779_51834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (16))){
var state_51732__$1 = state_51732;
var statearr_51780_51835 = state_51732__$1;
(statearr_51780_51835[(2)] = true);

(statearr_51780_51835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (38))){
var inst_51722 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
var statearr_51781_51836 = state_51732__$1;
(statearr_51781_51836[(2)] = inst_51722);

(statearr_51781_51836[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (30))){
var inst_51684 = (state_51732[(13)]);
var inst_51683 = (state_51732[(10)]);
var inst_51692 = (state_51732[(11)]);
var inst_51709 = cljs.core.empty_QMARK_.call(null,inst_51683);
var inst_51710 = inst_51684.call(null,inst_51692);
var inst_51711 = cljs.core.not.call(null,inst_51710);
var inst_51712 = (inst_51709) && (inst_51711);
var state_51732__$1 = state_51732;
var statearr_51782_51837 = state_51732__$1;
(statearr_51782_51837[(2)] = inst_51712);

(statearr_51782_51837[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (10))){
var inst_51636 = (state_51732[(8)]);
var inst_51656 = (state_51732[(2)]);
var inst_51657 = cljs.core.get.call(null,inst_51656,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51658 = cljs.core.get.call(null,inst_51656,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51659 = cljs.core.get.call(null,inst_51656,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51660 = inst_51636;
var state_51732__$1 = (function (){var statearr_51783 = state_51732;
(statearr_51783[(16)] = inst_51658);

(statearr_51783[(17)] = inst_51659);

(statearr_51783[(7)] = inst_51660);

(statearr_51783[(18)] = inst_51657);

return statearr_51783;
})();
var statearr_51784_51838 = state_51732__$1;
(statearr_51784_51838[(2)] = null);

(statearr_51784_51838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (18))){
var inst_51674 = (state_51732[(2)]);
var state_51732__$1 = state_51732;
var statearr_51785_51839 = state_51732__$1;
(statearr_51785_51839[(2)] = inst_51674);

(statearr_51785_51839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (37))){
var state_51732__$1 = state_51732;
var statearr_51786_51840 = state_51732__$1;
(statearr_51786_51840[(2)] = null);

(statearr_51786_51840[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51733 === (8))){
var inst_51636 = (state_51732[(8)]);
var inst_51653 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51636);
var state_51732__$1 = state_51732;
var statearr_51787_51841 = state_51732__$1;
(statearr_51787_51841[(2)] = inst_51653);

(statearr_51787_51841[(1)] = (10));


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
});})(c__27022__auto___51795,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26910__auto__,c__27022__auto___51795,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26911__auto__ = null;
var cljs$core$async$mix_$_state_machine__26911__auto____0 = (function (){
var statearr_51791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51791[(0)] = cljs$core$async$mix_$_state_machine__26911__auto__);

(statearr_51791[(1)] = (1));

return statearr_51791;
});
var cljs$core$async$mix_$_state_machine__26911__auto____1 = (function (state_51732){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_51732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e51792){if((e51792 instanceof Object)){
var ex__26914__auto__ = e51792;
var statearr_51793_51842 = state_51732;
(statearr_51793_51842[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51843 = state_51732;
state_51732 = G__51843;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26911__auto__ = function(state_51732){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26911__auto____1.call(this,state_51732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26911__auto____0;
cljs$core$async$mix_$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26911__auto____1;
return cljs$core$async$mix_$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___51795,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27024__auto__ = (function (){var statearr_51794 = f__27023__auto__.call(null);
(statearr_51794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___51795);

return statearr_51794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___51795,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args51844 = [];
var len__25923__auto___51847 = arguments.length;
var i__25924__auto___51848 = (0);
while(true){
if((i__25924__auto___51848 < len__25923__auto___51847)){
args51844.push((arguments[i__25924__auto___51848]));

var G__51849 = (i__25924__auto___51848 + (1));
i__25924__auto___51848 = G__51849;
continue;
} else {
}
break;
}

var G__51846 = args51844.length;
switch (G__51846) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51844.length)].join('')));

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
var args51852 = [];
var len__25923__auto___51977 = arguments.length;
var i__25924__auto___51978 = (0);
while(true){
if((i__25924__auto___51978 < len__25923__auto___51977)){
args51852.push((arguments[i__25924__auto___51978]));

var G__51979 = (i__25924__auto___51978 + (1));
i__25924__auto___51978 = G__51979;
continue;
} else {
}
break;
}

var G__51854 = args51852.length;
switch (G__51854) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51852.length)].join('')));

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
return (function (p1__51851_SHARP_){
if(cljs.core.truth_(p1__51851_SHARP_.call(null,topic))){
return p1__51851_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51851_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async51855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51855 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51856){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51856 = meta51856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51857,meta51856__$1){
var self__ = this;
var _51857__$1 = this;
return (new cljs.core.async.t_cljs$core$async51855(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51856__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51857){
var self__ = this;
var _51857__$1 = this;
return self__.meta51856;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51855.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51855.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51856","meta51856",-752095459,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51855";

cljs.core.async.t_cljs$core$async51855.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async51855");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async51855 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51855(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51856){
return (new cljs.core.async.t_cljs$core$async51855(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51856));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51855(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27022__auto___51981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___51981,mults,ensure_mult,p){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___51981,mults,ensure_mult,p){
return (function (state_51929){
var state_val_51930 = (state_51929[(1)]);
if((state_val_51930 === (7))){
var inst_51925 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
var statearr_51931_51982 = state_51929__$1;
(statearr_51931_51982[(2)] = inst_51925);

(statearr_51931_51982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (20))){
var state_51929__$1 = state_51929;
var statearr_51932_51983 = state_51929__$1;
(statearr_51932_51983[(2)] = null);

(statearr_51932_51983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (1))){
var state_51929__$1 = state_51929;
var statearr_51933_51984 = state_51929__$1;
(statearr_51933_51984[(2)] = null);

(statearr_51933_51984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (24))){
var inst_51908 = (state_51929[(7)]);
var inst_51917 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51908);
var state_51929__$1 = state_51929;
var statearr_51934_51985 = state_51929__$1;
(statearr_51934_51985[(2)] = inst_51917);

(statearr_51934_51985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (4))){
var inst_51860 = (state_51929[(8)]);
var inst_51860__$1 = (state_51929[(2)]);
var inst_51861 = (inst_51860__$1 == null);
var state_51929__$1 = (function (){var statearr_51935 = state_51929;
(statearr_51935[(8)] = inst_51860__$1);

return statearr_51935;
})();
if(cljs.core.truth_(inst_51861)){
var statearr_51936_51986 = state_51929__$1;
(statearr_51936_51986[(1)] = (5));

} else {
var statearr_51937_51987 = state_51929__$1;
(statearr_51937_51987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (15))){
var inst_51902 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
var statearr_51938_51988 = state_51929__$1;
(statearr_51938_51988[(2)] = inst_51902);

(statearr_51938_51988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (21))){
var inst_51922 = (state_51929[(2)]);
var state_51929__$1 = (function (){var statearr_51939 = state_51929;
(statearr_51939[(9)] = inst_51922);

return statearr_51939;
})();
var statearr_51940_51989 = state_51929__$1;
(statearr_51940_51989[(2)] = null);

(statearr_51940_51989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (13))){
var inst_51884 = (state_51929[(10)]);
var inst_51886 = cljs.core.chunked_seq_QMARK_.call(null,inst_51884);
var state_51929__$1 = state_51929;
if(inst_51886){
var statearr_51941_51990 = state_51929__$1;
(statearr_51941_51990[(1)] = (16));

} else {
var statearr_51942_51991 = state_51929__$1;
(statearr_51942_51991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (22))){
var inst_51914 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
if(cljs.core.truth_(inst_51914)){
var statearr_51943_51992 = state_51929__$1;
(statearr_51943_51992[(1)] = (23));

} else {
var statearr_51944_51993 = state_51929__$1;
(statearr_51944_51993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (6))){
var inst_51860 = (state_51929[(8)]);
var inst_51908 = (state_51929[(7)]);
var inst_51910 = (state_51929[(11)]);
var inst_51908__$1 = topic_fn.call(null,inst_51860);
var inst_51909 = cljs.core.deref.call(null,mults);
var inst_51910__$1 = cljs.core.get.call(null,inst_51909,inst_51908__$1);
var state_51929__$1 = (function (){var statearr_51945 = state_51929;
(statearr_51945[(7)] = inst_51908__$1);

(statearr_51945[(11)] = inst_51910__$1);

return statearr_51945;
})();
if(cljs.core.truth_(inst_51910__$1)){
var statearr_51946_51994 = state_51929__$1;
(statearr_51946_51994[(1)] = (19));

} else {
var statearr_51947_51995 = state_51929__$1;
(statearr_51947_51995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (25))){
var inst_51919 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
var statearr_51948_51996 = state_51929__$1;
(statearr_51948_51996[(2)] = inst_51919);

(statearr_51948_51996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (17))){
var inst_51884 = (state_51929[(10)]);
var inst_51893 = cljs.core.first.call(null,inst_51884);
var inst_51894 = cljs.core.async.muxch_STAR_.call(null,inst_51893);
var inst_51895 = cljs.core.async.close_BANG_.call(null,inst_51894);
var inst_51896 = cljs.core.next.call(null,inst_51884);
var inst_51870 = inst_51896;
var inst_51871 = null;
var inst_51872 = (0);
var inst_51873 = (0);
var state_51929__$1 = (function (){var statearr_51949 = state_51929;
(statearr_51949[(12)] = inst_51895);

(statearr_51949[(13)] = inst_51870);

(statearr_51949[(14)] = inst_51871);

(statearr_51949[(15)] = inst_51873);

(statearr_51949[(16)] = inst_51872);

return statearr_51949;
})();
var statearr_51950_51997 = state_51929__$1;
(statearr_51950_51997[(2)] = null);

(statearr_51950_51997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (3))){
var inst_51927 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51929__$1,inst_51927);
} else {
if((state_val_51930 === (12))){
var inst_51904 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
var statearr_51951_51998 = state_51929__$1;
(statearr_51951_51998[(2)] = inst_51904);

(statearr_51951_51998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (2))){
var state_51929__$1 = state_51929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51929__$1,(4),ch);
} else {
if((state_val_51930 === (23))){
var state_51929__$1 = state_51929;
var statearr_51952_51999 = state_51929__$1;
(statearr_51952_51999[(2)] = null);

(statearr_51952_51999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (19))){
var inst_51860 = (state_51929[(8)]);
var inst_51910 = (state_51929[(11)]);
var inst_51912 = cljs.core.async.muxch_STAR_.call(null,inst_51910);
var state_51929__$1 = state_51929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51929__$1,(22),inst_51912,inst_51860);
} else {
if((state_val_51930 === (11))){
var inst_51870 = (state_51929[(13)]);
var inst_51884 = (state_51929[(10)]);
var inst_51884__$1 = cljs.core.seq.call(null,inst_51870);
var state_51929__$1 = (function (){var statearr_51953 = state_51929;
(statearr_51953[(10)] = inst_51884__$1);

return statearr_51953;
})();
if(inst_51884__$1){
var statearr_51954_52000 = state_51929__$1;
(statearr_51954_52000[(1)] = (13));

} else {
var statearr_51955_52001 = state_51929__$1;
(statearr_51955_52001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (9))){
var inst_51906 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
var statearr_51956_52002 = state_51929__$1;
(statearr_51956_52002[(2)] = inst_51906);

(statearr_51956_52002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (5))){
var inst_51867 = cljs.core.deref.call(null,mults);
var inst_51868 = cljs.core.vals.call(null,inst_51867);
var inst_51869 = cljs.core.seq.call(null,inst_51868);
var inst_51870 = inst_51869;
var inst_51871 = null;
var inst_51872 = (0);
var inst_51873 = (0);
var state_51929__$1 = (function (){var statearr_51957 = state_51929;
(statearr_51957[(13)] = inst_51870);

(statearr_51957[(14)] = inst_51871);

(statearr_51957[(15)] = inst_51873);

(statearr_51957[(16)] = inst_51872);

return statearr_51957;
})();
var statearr_51958_52003 = state_51929__$1;
(statearr_51958_52003[(2)] = null);

(statearr_51958_52003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (14))){
var state_51929__$1 = state_51929;
var statearr_51962_52004 = state_51929__$1;
(statearr_51962_52004[(2)] = null);

(statearr_51962_52004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (16))){
var inst_51884 = (state_51929[(10)]);
var inst_51888 = cljs.core.chunk_first.call(null,inst_51884);
var inst_51889 = cljs.core.chunk_rest.call(null,inst_51884);
var inst_51890 = cljs.core.count.call(null,inst_51888);
var inst_51870 = inst_51889;
var inst_51871 = inst_51888;
var inst_51872 = inst_51890;
var inst_51873 = (0);
var state_51929__$1 = (function (){var statearr_51963 = state_51929;
(statearr_51963[(13)] = inst_51870);

(statearr_51963[(14)] = inst_51871);

(statearr_51963[(15)] = inst_51873);

(statearr_51963[(16)] = inst_51872);

return statearr_51963;
})();
var statearr_51964_52005 = state_51929__$1;
(statearr_51964_52005[(2)] = null);

(statearr_51964_52005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (10))){
var inst_51870 = (state_51929[(13)]);
var inst_51871 = (state_51929[(14)]);
var inst_51873 = (state_51929[(15)]);
var inst_51872 = (state_51929[(16)]);
var inst_51878 = cljs.core._nth.call(null,inst_51871,inst_51873);
var inst_51879 = cljs.core.async.muxch_STAR_.call(null,inst_51878);
var inst_51880 = cljs.core.async.close_BANG_.call(null,inst_51879);
var inst_51881 = (inst_51873 + (1));
var tmp51959 = inst_51870;
var tmp51960 = inst_51871;
var tmp51961 = inst_51872;
var inst_51870__$1 = tmp51959;
var inst_51871__$1 = tmp51960;
var inst_51872__$1 = tmp51961;
var inst_51873__$1 = inst_51881;
var state_51929__$1 = (function (){var statearr_51965 = state_51929;
(statearr_51965[(13)] = inst_51870__$1);

(statearr_51965[(14)] = inst_51871__$1);

(statearr_51965[(15)] = inst_51873__$1);

(statearr_51965[(17)] = inst_51880);

(statearr_51965[(16)] = inst_51872__$1);

return statearr_51965;
})();
var statearr_51966_52006 = state_51929__$1;
(statearr_51966_52006[(2)] = null);

(statearr_51966_52006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (18))){
var inst_51899 = (state_51929[(2)]);
var state_51929__$1 = state_51929;
var statearr_51967_52007 = state_51929__$1;
(statearr_51967_52007[(2)] = inst_51899);

(statearr_51967_52007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51930 === (8))){
var inst_51873 = (state_51929[(15)]);
var inst_51872 = (state_51929[(16)]);
var inst_51875 = (inst_51873 < inst_51872);
var inst_51876 = inst_51875;
var state_51929__$1 = state_51929;
if(cljs.core.truth_(inst_51876)){
var statearr_51968_52008 = state_51929__$1;
(statearr_51968_52008[(1)] = (10));

} else {
var statearr_51969_52009 = state_51929__$1;
(statearr_51969_52009[(1)] = (11));

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
});})(c__27022__auto___51981,mults,ensure_mult,p))
;
return ((function (switch__26910__auto__,c__27022__auto___51981,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_51973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51973[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_51973[(1)] = (1));

return statearr_51973;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_51929){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_51929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e51974){if((e51974 instanceof Object)){
var ex__26914__auto__ = e51974;
var statearr_51975_52010 = state_51929;
(statearr_51975_52010[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52011 = state_51929;
state_51929 = G__52011;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_51929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_51929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___51981,mults,ensure_mult,p))
})();
var state__27024__auto__ = (function (){var statearr_51976 = f__27023__auto__.call(null);
(statearr_51976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___51981);

return statearr_51976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___51981,mults,ensure_mult,p))
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
var args52012 = [];
var len__25923__auto___52015 = arguments.length;
var i__25924__auto___52016 = (0);
while(true){
if((i__25924__auto___52016 < len__25923__auto___52015)){
args52012.push((arguments[i__25924__auto___52016]));

var G__52017 = (i__25924__auto___52016 + (1));
i__25924__auto___52016 = G__52017;
continue;
} else {
}
break;
}

var G__52014 = args52012.length;
switch (G__52014) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52012.length)].join('')));

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
var args52019 = [];
var len__25923__auto___52022 = arguments.length;
var i__25924__auto___52023 = (0);
while(true){
if((i__25924__auto___52023 < len__25923__auto___52022)){
args52019.push((arguments[i__25924__auto___52023]));

var G__52024 = (i__25924__auto___52023 + (1));
i__25924__auto___52023 = G__52024;
continue;
} else {
}
break;
}

var G__52021 = args52019.length;
switch (G__52021) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52019.length)].join('')));

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
var args52026 = [];
var len__25923__auto___52097 = arguments.length;
var i__25924__auto___52098 = (0);
while(true){
if((i__25924__auto___52098 < len__25923__auto___52097)){
args52026.push((arguments[i__25924__auto___52098]));

var G__52099 = (i__25924__auto___52098 + (1));
i__25924__auto___52098 = G__52099;
continue;
} else {
}
break;
}

var G__52028 = args52026.length;
switch (G__52028) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52026.length)].join('')));

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
var c__27022__auto___52101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___52101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___52101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52067){
var state_val_52068 = (state_52067[(1)]);
if((state_val_52068 === (7))){
var state_52067__$1 = state_52067;
var statearr_52069_52102 = state_52067__$1;
(statearr_52069_52102[(2)] = null);

(statearr_52069_52102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (1))){
var state_52067__$1 = state_52067;
var statearr_52070_52103 = state_52067__$1;
(statearr_52070_52103[(2)] = null);

(statearr_52070_52103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (4))){
var inst_52031 = (state_52067[(7)]);
var inst_52033 = (inst_52031 < cnt);
var state_52067__$1 = state_52067;
if(cljs.core.truth_(inst_52033)){
var statearr_52071_52104 = state_52067__$1;
(statearr_52071_52104[(1)] = (6));

} else {
var statearr_52072_52105 = state_52067__$1;
(statearr_52072_52105[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (15))){
var inst_52063 = (state_52067[(2)]);
var state_52067__$1 = state_52067;
var statearr_52073_52106 = state_52067__$1;
(statearr_52073_52106[(2)] = inst_52063);

(statearr_52073_52106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (13))){
var inst_52056 = cljs.core.async.close_BANG_.call(null,out);
var state_52067__$1 = state_52067;
var statearr_52074_52107 = state_52067__$1;
(statearr_52074_52107[(2)] = inst_52056);

(statearr_52074_52107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (6))){
var state_52067__$1 = state_52067;
var statearr_52075_52108 = state_52067__$1;
(statearr_52075_52108[(2)] = null);

(statearr_52075_52108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (3))){
var inst_52065 = (state_52067[(2)]);
var state_52067__$1 = state_52067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52067__$1,inst_52065);
} else {
if((state_val_52068 === (12))){
var inst_52053 = (state_52067[(8)]);
var inst_52053__$1 = (state_52067[(2)]);
var inst_52054 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52053__$1);
var state_52067__$1 = (function (){var statearr_52076 = state_52067;
(statearr_52076[(8)] = inst_52053__$1);

return statearr_52076;
})();
if(cljs.core.truth_(inst_52054)){
var statearr_52077_52109 = state_52067__$1;
(statearr_52077_52109[(1)] = (13));

} else {
var statearr_52078_52110 = state_52067__$1;
(statearr_52078_52110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (2))){
var inst_52030 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_52031 = (0);
var state_52067__$1 = (function (){var statearr_52079 = state_52067;
(statearr_52079[(7)] = inst_52031);

(statearr_52079[(9)] = inst_52030);

return statearr_52079;
})();
var statearr_52080_52111 = state_52067__$1;
(statearr_52080_52111[(2)] = null);

(statearr_52080_52111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (11))){
var inst_52031 = (state_52067[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52067,(10),Object,null,(9));
var inst_52040 = chs__$1.call(null,inst_52031);
var inst_52041 = done.call(null,inst_52031);
var inst_52042 = cljs.core.async.take_BANG_.call(null,inst_52040,inst_52041);
var state_52067__$1 = state_52067;
var statearr_52081_52112 = state_52067__$1;
(statearr_52081_52112[(2)] = inst_52042);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (9))){
var inst_52031 = (state_52067[(7)]);
var inst_52044 = (state_52067[(2)]);
var inst_52045 = (inst_52031 + (1));
var inst_52031__$1 = inst_52045;
var state_52067__$1 = (function (){var statearr_52082 = state_52067;
(statearr_52082[(7)] = inst_52031__$1);

(statearr_52082[(10)] = inst_52044);

return statearr_52082;
})();
var statearr_52083_52113 = state_52067__$1;
(statearr_52083_52113[(2)] = null);

(statearr_52083_52113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (5))){
var inst_52051 = (state_52067[(2)]);
var state_52067__$1 = (function (){var statearr_52084 = state_52067;
(statearr_52084[(11)] = inst_52051);

return statearr_52084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52067__$1,(12),dchan);
} else {
if((state_val_52068 === (14))){
var inst_52053 = (state_52067[(8)]);
var inst_52058 = cljs.core.apply.call(null,f,inst_52053);
var state_52067__$1 = state_52067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52067__$1,(16),out,inst_52058);
} else {
if((state_val_52068 === (16))){
var inst_52060 = (state_52067[(2)]);
var state_52067__$1 = (function (){var statearr_52085 = state_52067;
(statearr_52085[(12)] = inst_52060);

return statearr_52085;
})();
var statearr_52086_52114 = state_52067__$1;
(statearr_52086_52114[(2)] = null);

(statearr_52086_52114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (10))){
var inst_52035 = (state_52067[(2)]);
var inst_52036 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_52067__$1 = (function (){var statearr_52087 = state_52067;
(statearr_52087[(13)] = inst_52035);

return statearr_52087;
})();
var statearr_52088_52115 = state_52067__$1;
(statearr_52088_52115[(2)] = inst_52036);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52068 === (8))){
var inst_52049 = (state_52067[(2)]);
var state_52067__$1 = state_52067;
var statearr_52089_52116 = state_52067__$1;
(statearr_52089_52116[(2)] = inst_52049);

(statearr_52089_52116[(1)] = (5));


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
});})(c__27022__auto___52101,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26910__auto__,c__27022__auto___52101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_52093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52093[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_52093[(1)] = (1));

return statearr_52093;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_52067){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52094){if((e52094 instanceof Object)){
var ex__26914__auto__ = e52094;
var statearr_52095_52117 = state_52067;
(statearr_52095_52117[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52118 = state_52067;
state_52067 = G__52118;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_52067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_52067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___52101,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27024__auto__ = (function (){var statearr_52096 = f__27023__auto__.call(null);
(statearr_52096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___52101);

return statearr_52096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___52101,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args52120 = [];
var len__25923__auto___52178 = arguments.length;
var i__25924__auto___52179 = (0);
while(true){
if((i__25924__auto___52179 < len__25923__auto___52178)){
args52120.push((arguments[i__25924__auto___52179]));

var G__52180 = (i__25924__auto___52179 + (1));
i__25924__auto___52179 = G__52180;
continue;
} else {
}
break;
}

var G__52122 = args52120.length;
switch (G__52122) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52120.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___52182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___52182,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___52182,out){
return (function (state_52154){
var state_val_52155 = (state_52154[(1)]);
if((state_val_52155 === (7))){
var inst_52133 = (state_52154[(7)]);
var inst_52134 = (state_52154[(8)]);
var inst_52133__$1 = (state_52154[(2)]);
var inst_52134__$1 = cljs.core.nth.call(null,inst_52133__$1,(0),null);
var inst_52135 = cljs.core.nth.call(null,inst_52133__$1,(1),null);
var inst_52136 = (inst_52134__$1 == null);
var state_52154__$1 = (function (){var statearr_52156 = state_52154;
(statearr_52156[(7)] = inst_52133__$1);

(statearr_52156[(9)] = inst_52135);

(statearr_52156[(8)] = inst_52134__$1);

return statearr_52156;
})();
if(cljs.core.truth_(inst_52136)){
var statearr_52157_52183 = state_52154__$1;
(statearr_52157_52183[(1)] = (8));

} else {
var statearr_52158_52184 = state_52154__$1;
(statearr_52158_52184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (1))){
var inst_52123 = cljs.core.vec.call(null,chs);
var inst_52124 = inst_52123;
var state_52154__$1 = (function (){var statearr_52159 = state_52154;
(statearr_52159[(10)] = inst_52124);

return statearr_52159;
})();
var statearr_52160_52185 = state_52154__$1;
(statearr_52160_52185[(2)] = null);

(statearr_52160_52185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (4))){
var inst_52124 = (state_52154[(10)]);
var state_52154__$1 = state_52154;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52154__$1,(7),inst_52124);
} else {
if((state_val_52155 === (6))){
var inst_52150 = (state_52154[(2)]);
var state_52154__$1 = state_52154;
var statearr_52161_52186 = state_52154__$1;
(statearr_52161_52186[(2)] = inst_52150);

(statearr_52161_52186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (3))){
var inst_52152 = (state_52154[(2)]);
var state_52154__$1 = state_52154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52154__$1,inst_52152);
} else {
if((state_val_52155 === (2))){
var inst_52124 = (state_52154[(10)]);
var inst_52126 = cljs.core.count.call(null,inst_52124);
var inst_52127 = (inst_52126 > (0));
var state_52154__$1 = state_52154;
if(cljs.core.truth_(inst_52127)){
var statearr_52163_52187 = state_52154__$1;
(statearr_52163_52187[(1)] = (4));

} else {
var statearr_52164_52188 = state_52154__$1;
(statearr_52164_52188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (11))){
var inst_52124 = (state_52154[(10)]);
var inst_52143 = (state_52154[(2)]);
var tmp52162 = inst_52124;
var inst_52124__$1 = tmp52162;
var state_52154__$1 = (function (){var statearr_52165 = state_52154;
(statearr_52165[(10)] = inst_52124__$1);

(statearr_52165[(11)] = inst_52143);

return statearr_52165;
})();
var statearr_52166_52189 = state_52154__$1;
(statearr_52166_52189[(2)] = null);

(statearr_52166_52189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (9))){
var inst_52134 = (state_52154[(8)]);
var state_52154__$1 = state_52154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52154__$1,(11),out,inst_52134);
} else {
if((state_val_52155 === (5))){
var inst_52148 = cljs.core.async.close_BANG_.call(null,out);
var state_52154__$1 = state_52154;
var statearr_52167_52190 = state_52154__$1;
(statearr_52167_52190[(2)] = inst_52148);

(statearr_52167_52190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (10))){
var inst_52146 = (state_52154[(2)]);
var state_52154__$1 = state_52154;
var statearr_52168_52191 = state_52154__$1;
(statearr_52168_52191[(2)] = inst_52146);

(statearr_52168_52191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (8))){
var inst_52133 = (state_52154[(7)]);
var inst_52124 = (state_52154[(10)]);
var inst_52135 = (state_52154[(9)]);
var inst_52134 = (state_52154[(8)]);
var inst_52138 = (function (){var cs = inst_52124;
var vec__52129 = inst_52133;
var v = inst_52134;
var c = inst_52135;
return ((function (cs,vec__52129,v,c,inst_52133,inst_52124,inst_52135,inst_52134,state_val_52155,c__27022__auto___52182,out){
return (function (p1__52119_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__52119_SHARP_);
});
;})(cs,vec__52129,v,c,inst_52133,inst_52124,inst_52135,inst_52134,state_val_52155,c__27022__auto___52182,out))
})();
var inst_52139 = cljs.core.filterv.call(null,inst_52138,inst_52124);
var inst_52124__$1 = inst_52139;
var state_52154__$1 = (function (){var statearr_52169 = state_52154;
(statearr_52169[(10)] = inst_52124__$1);

return statearr_52169;
})();
var statearr_52170_52192 = state_52154__$1;
(statearr_52170_52192[(2)] = null);

(statearr_52170_52192[(1)] = (2));


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
});})(c__27022__auto___52182,out))
;
return ((function (switch__26910__auto__,c__27022__auto___52182,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_52174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52174[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_52174[(1)] = (1));

return statearr_52174;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_52154){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52175){if((e52175 instanceof Object)){
var ex__26914__auto__ = e52175;
var statearr_52176_52193 = state_52154;
(statearr_52176_52193[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52194 = state_52154;
state_52154 = G__52194;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_52154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_52154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___52182,out))
})();
var state__27024__auto__ = (function (){var statearr_52177 = f__27023__auto__.call(null);
(statearr_52177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___52182);

return statearr_52177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___52182,out))
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
var args52195 = [];
var len__25923__auto___52244 = arguments.length;
var i__25924__auto___52245 = (0);
while(true){
if((i__25924__auto___52245 < len__25923__auto___52244)){
args52195.push((arguments[i__25924__auto___52245]));

var G__52246 = (i__25924__auto___52245 + (1));
i__25924__auto___52245 = G__52246;
continue;
} else {
}
break;
}

var G__52197 = args52195.length;
switch (G__52197) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52195.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___52248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___52248,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___52248,out){
return (function (state_52221){
var state_val_52222 = (state_52221[(1)]);
if((state_val_52222 === (7))){
var inst_52203 = (state_52221[(7)]);
var inst_52203__$1 = (state_52221[(2)]);
var inst_52204 = (inst_52203__$1 == null);
var inst_52205 = cljs.core.not.call(null,inst_52204);
var state_52221__$1 = (function (){var statearr_52223 = state_52221;
(statearr_52223[(7)] = inst_52203__$1);

return statearr_52223;
})();
if(inst_52205){
var statearr_52224_52249 = state_52221__$1;
(statearr_52224_52249[(1)] = (8));

} else {
var statearr_52225_52250 = state_52221__$1;
(statearr_52225_52250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (1))){
var inst_52198 = (0);
var state_52221__$1 = (function (){var statearr_52226 = state_52221;
(statearr_52226[(8)] = inst_52198);

return statearr_52226;
})();
var statearr_52227_52251 = state_52221__$1;
(statearr_52227_52251[(2)] = null);

(statearr_52227_52251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (4))){
var state_52221__$1 = state_52221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52221__$1,(7),ch);
} else {
if((state_val_52222 === (6))){
var inst_52216 = (state_52221[(2)]);
var state_52221__$1 = state_52221;
var statearr_52228_52252 = state_52221__$1;
(statearr_52228_52252[(2)] = inst_52216);

(statearr_52228_52252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (3))){
var inst_52218 = (state_52221[(2)]);
var inst_52219 = cljs.core.async.close_BANG_.call(null,out);
var state_52221__$1 = (function (){var statearr_52229 = state_52221;
(statearr_52229[(9)] = inst_52218);

return statearr_52229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52221__$1,inst_52219);
} else {
if((state_val_52222 === (2))){
var inst_52198 = (state_52221[(8)]);
var inst_52200 = (inst_52198 < n);
var state_52221__$1 = state_52221;
if(cljs.core.truth_(inst_52200)){
var statearr_52230_52253 = state_52221__$1;
(statearr_52230_52253[(1)] = (4));

} else {
var statearr_52231_52254 = state_52221__$1;
(statearr_52231_52254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (11))){
var inst_52198 = (state_52221[(8)]);
var inst_52208 = (state_52221[(2)]);
var inst_52209 = (inst_52198 + (1));
var inst_52198__$1 = inst_52209;
var state_52221__$1 = (function (){var statearr_52232 = state_52221;
(statearr_52232[(8)] = inst_52198__$1);

(statearr_52232[(10)] = inst_52208);

return statearr_52232;
})();
var statearr_52233_52255 = state_52221__$1;
(statearr_52233_52255[(2)] = null);

(statearr_52233_52255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (9))){
var state_52221__$1 = state_52221;
var statearr_52234_52256 = state_52221__$1;
(statearr_52234_52256[(2)] = null);

(statearr_52234_52256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (5))){
var state_52221__$1 = state_52221;
var statearr_52235_52257 = state_52221__$1;
(statearr_52235_52257[(2)] = null);

(statearr_52235_52257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (10))){
var inst_52213 = (state_52221[(2)]);
var state_52221__$1 = state_52221;
var statearr_52236_52258 = state_52221__$1;
(statearr_52236_52258[(2)] = inst_52213);

(statearr_52236_52258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52222 === (8))){
var inst_52203 = (state_52221[(7)]);
var state_52221__$1 = state_52221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52221__$1,(11),out,inst_52203);
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
});})(c__27022__auto___52248,out))
;
return ((function (switch__26910__auto__,c__27022__auto___52248,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_52240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52240[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_52240[(1)] = (1));

return statearr_52240;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_52221){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52241){if((e52241 instanceof Object)){
var ex__26914__auto__ = e52241;
var statearr_52242_52259 = state_52221;
(statearr_52242_52259[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52260 = state_52221;
state_52221 = G__52260;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_52221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_52221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___52248,out))
})();
var state__27024__auto__ = (function (){var statearr_52243 = f__27023__auto__.call(null);
(statearr_52243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___52248);

return statearr_52243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___52248,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52268 = (function (map_LT_,f,ch,meta52269){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52269 = meta52269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52270,meta52269__$1){
var self__ = this;
var _52270__$1 = this;
return (new cljs.core.async.t_cljs$core$async52268(self__.map_LT_,self__.f,self__.ch,meta52269__$1));
});

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52270){
var self__ = this;
var _52270__$1 = this;
return self__.meta52269;
});

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async52271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52271 = (function (map_LT_,f,ch,meta52269,_,fn1,meta52272){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52269 = meta52269;
this._ = _;
this.fn1 = fn1;
this.meta52272 = meta52272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52273,meta52272__$1){
var self__ = this;
var _52273__$1 = this;
return (new cljs.core.async.t_cljs$core$async52271(self__.map_LT_,self__.f,self__.ch,self__.meta52269,self__._,self__.fn1,meta52272__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52273){
var self__ = this;
var _52273__$1 = this;
return self__.meta52272;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52261_SHARP_){
return f1.call(null,(((p1__52261_SHARP_ == null))?null:self__.f.call(null,p1__52261_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52271.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52269","meta52269",1756594917,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52268","cljs.core.async/t_cljs$core$async52268",1006780602,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52272","meta52272",-33340193,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52271";

cljs.core.async.t_cljs$core$async52271.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async52271");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async52271 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52271(map_LT___$1,f__$1,ch__$1,meta52269__$1,___$2,fn1__$1,meta52272){
return (new cljs.core.async.t_cljs$core$async52271(map_LT___$1,f__$1,ch__$1,meta52269__$1,___$2,fn1__$1,meta52272));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52271(self__.map_LT_,self__.f,self__.ch,self__.meta52269,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52269","meta52269",1756594917,null)], null);
});

cljs.core.async.t_cljs$core$async52268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52268";

cljs.core.async.t_cljs$core$async52268.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async52268");
});

cljs.core.async.__GT_t_cljs$core$async52268 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52268(map_LT___$1,f__$1,ch__$1,meta52269){
return (new cljs.core.async.t_cljs$core$async52268(map_LT___$1,f__$1,ch__$1,meta52269));
});

}

return (new cljs.core.async.t_cljs$core$async52268(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52277 = (function (map_GT_,f,ch,meta52278){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta52278 = meta52278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52279,meta52278__$1){
var self__ = this;
var _52279__$1 = this;
return (new cljs.core.async.t_cljs$core$async52277(self__.map_GT_,self__.f,self__.ch,meta52278__$1));
});

cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52279){
var self__ = this;
var _52279__$1 = this;
return self__.meta52278;
});

cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52278","meta52278",-1612086474,null)], null);
});

cljs.core.async.t_cljs$core$async52277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52277";

cljs.core.async.t_cljs$core$async52277.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async52277");
});

cljs.core.async.__GT_t_cljs$core$async52277 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52277(map_GT___$1,f__$1,ch__$1,meta52278){
return (new cljs.core.async.t_cljs$core$async52277(map_GT___$1,f__$1,ch__$1,meta52278));
});

}

return (new cljs.core.async.t_cljs$core$async52277(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async52283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52283 = (function (filter_GT_,p,ch,meta52284){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta52284 = meta52284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52285,meta52284__$1){
var self__ = this;
var _52285__$1 = this;
return (new cljs.core.async.t_cljs$core$async52283(self__.filter_GT_,self__.p,self__.ch,meta52284__$1));
});

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52285){
var self__ = this;
var _52285__$1 = this;
return self__.meta52284;
});

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52284","meta52284",-1401833419,null)], null);
});

cljs.core.async.t_cljs$core$async52283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52283";

cljs.core.async.t_cljs$core$async52283.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async52283");
});

cljs.core.async.__GT_t_cljs$core$async52283 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52283(filter_GT___$1,p__$1,ch__$1,meta52284){
return (new cljs.core.async.t_cljs$core$async52283(filter_GT___$1,p__$1,ch__$1,meta52284));
});

}

return (new cljs.core.async.t_cljs$core$async52283(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args52286 = [];
var len__25923__auto___52330 = arguments.length;
var i__25924__auto___52331 = (0);
while(true){
if((i__25924__auto___52331 < len__25923__auto___52330)){
args52286.push((arguments[i__25924__auto___52331]));

var G__52332 = (i__25924__auto___52331 + (1));
i__25924__auto___52331 = G__52332;
continue;
} else {
}
break;
}

var G__52288 = args52286.length;
switch (G__52288) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52286.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___52334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___52334,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___52334,out){
return (function (state_52309){
var state_val_52310 = (state_52309[(1)]);
if((state_val_52310 === (7))){
var inst_52305 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52311_52335 = state_52309__$1;
(statearr_52311_52335[(2)] = inst_52305);

(statearr_52311_52335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (1))){
var state_52309__$1 = state_52309;
var statearr_52312_52336 = state_52309__$1;
(statearr_52312_52336[(2)] = null);

(statearr_52312_52336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (4))){
var inst_52291 = (state_52309[(7)]);
var inst_52291__$1 = (state_52309[(2)]);
var inst_52292 = (inst_52291__$1 == null);
var state_52309__$1 = (function (){var statearr_52313 = state_52309;
(statearr_52313[(7)] = inst_52291__$1);

return statearr_52313;
})();
if(cljs.core.truth_(inst_52292)){
var statearr_52314_52337 = state_52309__$1;
(statearr_52314_52337[(1)] = (5));

} else {
var statearr_52315_52338 = state_52309__$1;
(statearr_52315_52338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (6))){
var inst_52291 = (state_52309[(7)]);
var inst_52296 = p.call(null,inst_52291);
var state_52309__$1 = state_52309;
if(cljs.core.truth_(inst_52296)){
var statearr_52316_52339 = state_52309__$1;
(statearr_52316_52339[(1)] = (8));

} else {
var statearr_52317_52340 = state_52309__$1;
(statearr_52317_52340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (3))){
var inst_52307 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52309__$1,inst_52307);
} else {
if((state_val_52310 === (2))){
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52309__$1,(4),ch);
} else {
if((state_val_52310 === (11))){
var inst_52299 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52318_52341 = state_52309__$1;
(statearr_52318_52341[(2)] = inst_52299);

(statearr_52318_52341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (9))){
var state_52309__$1 = state_52309;
var statearr_52319_52342 = state_52309__$1;
(statearr_52319_52342[(2)] = null);

(statearr_52319_52342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (5))){
var inst_52294 = cljs.core.async.close_BANG_.call(null,out);
var state_52309__$1 = state_52309;
var statearr_52320_52343 = state_52309__$1;
(statearr_52320_52343[(2)] = inst_52294);

(statearr_52320_52343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (10))){
var inst_52302 = (state_52309[(2)]);
var state_52309__$1 = (function (){var statearr_52321 = state_52309;
(statearr_52321[(8)] = inst_52302);

return statearr_52321;
})();
var statearr_52322_52344 = state_52309__$1;
(statearr_52322_52344[(2)] = null);

(statearr_52322_52344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (8))){
var inst_52291 = (state_52309[(7)]);
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52309__$1,(11),out,inst_52291);
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
});})(c__27022__auto___52334,out))
;
return ((function (switch__26910__auto__,c__27022__auto___52334,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_52326 = [null,null,null,null,null,null,null,null,null];
(statearr_52326[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_52326[(1)] = (1));

return statearr_52326;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_52309){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52327){if((e52327 instanceof Object)){
var ex__26914__auto__ = e52327;
var statearr_52328_52345 = state_52309;
(statearr_52328_52345[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52346 = state_52309;
state_52309 = G__52346;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_52309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_52309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___52334,out))
})();
var state__27024__auto__ = (function (){var statearr_52329 = f__27023__auto__.call(null);
(statearr_52329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___52334);

return statearr_52329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___52334,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args52347 = [];
var len__25923__auto___52350 = arguments.length;
var i__25924__auto___52351 = (0);
while(true){
if((i__25924__auto___52351 < len__25923__auto___52350)){
args52347.push((arguments[i__25924__auto___52351]));

var G__52352 = (i__25924__auto___52351 + (1));
i__25924__auto___52351 = G__52352;
continue;
} else {
}
break;
}

var G__52349 = args52347.length;
switch (G__52349) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52347.length)].join('')));

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
return (function (state_52519){
var state_val_52520 = (state_52519[(1)]);
if((state_val_52520 === (7))){
var inst_52515 = (state_52519[(2)]);
var state_52519__$1 = state_52519;
var statearr_52521_52562 = state_52519__$1;
(statearr_52521_52562[(2)] = inst_52515);

(statearr_52521_52562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (20))){
var inst_52485 = (state_52519[(7)]);
var inst_52496 = (state_52519[(2)]);
var inst_52497 = cljs.core.next.call(null,inst_52485);
var inst_52471 = inst_52497;
var inst_52472 = null;
var inst_52473 = (0);
var inst_52474 = (0);
var state_52519__$1 = (function (){var statearr_52522 = state_52519;
(statearr_52522[(8)] = inst_52496);

(statearr_52522[(9)] = inst_52472);

(statearr_52522[(10)] = inst_52473);

(statearr_52522[(11)] = inst_52474);

(statearr_52522[(12)] = inst_52471);

return statearr_52522;
})();
var statearr_52523_52563 = state_52519__$1;
(statearr_52523_52563[(2)] = null);

(statearr_52523_52563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (1))){
var state_52519__$1 = state_52519;
var statearr_52524_52564 = state_52519__$1;
(statearr_52524_52564[(2)] = null);

(statearr_52524_52564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (4))){
var inst_52460 = (state_52519[(13)]);
var inst_52460__$1 = (state_52519[(2)]);
var inst_52461 = (inst_52460__$1 == null);
var state_52519__$1 = (function (){var statearr_52525 = state_52519;
(statearr_52525[(13)] = inst_52460__$1);

return statearr_52525;
})();
if(cljs.core.truth_(inst_52461)){
var statearr_52526_52565 = state_52519__$1;
(statearr_52526_52565[(1)] = (5));

} else {
var statearr_52527_52566 = state_52519__$1;
(statearr_52527_52566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (15))){
var state_52519__$1 = state_52519;
var statearr_52531_52567 = state_52519__$1;
(statearr_52531_52567[(2)] = null);

(statearr_52531_52567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (21))){
var state_52519__$1 = state_52519;
var statearr_52532_52568 = state_52519__$1;
(statearr_52532_52568[(2)] = null);

(statearr_52532_52568[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (13))){
var inst_52472 = (state_52519[(9)]);
var inst_52473 = (state_52519[(10)]);
var inst_52474 = (state_52519[(11)]);
var inst_52471 = (state_52519[(12)]);
var inst_52481 = (state_52519[(2)]);
var inst_52482 = (inst_52474 + (1));
var tmp52528 = inst_52472;
var tmp52529 = inst_52473;
var tmp52530 = inst_52471;
var inst_52471__$1 = tmp52530;
var inst_52472__$1 = tmp52528;
var inst_52473__$1 = tmp52529;
var inst_52474__$1 = inst_52482;
var state_52519__$1 = (function (){var statearr_52533 = state_52519;
(statearr_52533[(9)] = inst_52472__$1);

(statearr_52533[(10)] = inst_52473__$1);

(statearr_52533[(14)] = inst_52481);

(statearr_52533[(11)] = inst_52474__$1);

(statearr_52533[(12)] = inst_52471__$1);

return statearr_52533;
})();
var statearr_52534_52569 = state_52519__$1;
(statearr_52534_52569[(2)] = null);

(statearr_52534_52569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (22))){
var state_52519__$1 = state_52519;
var statearr_52535_52570 = state_52519__$1;
(statearr_52535_52570[(2)] = null);

(statearr_52535_52570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (6))){
var inst_52460 = (state_52519[(13)]);
var inst_52469 = f.call(null,inst_52460);
var inst_52470 = cljs.core.seq.call(null,inst_52469);
var inst_52471 = inst_52470;
var inst_52472 = null;
var inst_52473 = (0);
var inst_52474 = (0);
var state_52519__$1 = (function (){var statearr_52536 = state_52519;
(statearr_52536[(9)] = inst_52472);

(statearr_52536[(10)] = inst_52473);

(statearr_52536[(11)] = inst_52474);

(statearr_52536[(12)] = inst_52471);

return statearr_52536;
})();
var statearr_52537_52571 = state_52519__$1;
(statearr_52537_52571[(2)] = null);

(statearr_52537_52571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (17))){
var inst_52485 = (state_52519[(7)]);
var inst_52489 = cljs.core.chunk_first.call(null,inst_52485);
var inst_52490 = cljs.core.chunk_rest.call(null,inst_52485);
var inst_52491 = cljs.core.count.call(null,inst_52489);
var inst_52471 = inst_52490;
var inst_52472 = inst_52489;
var inst_52473 = inst_52491;
var inst_52474 = (0);
var state_52519__$1 = (function (){var statearr_52538 = state_52519;
(statearr_52538[(9)] = inst_52472);

(statearr_52538[(10)] = inst_52473);

(statearr_52538[(11)] = inst_52474);

(statearr_52538[(12)] = inst_52471);

return statearr_52538;
})();
var statearr_52539_52572 = state_52519__$1;
(statearr_52539_52572[(2)] = null);

(statearr_52539_52572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (3))){
var inst_52517 = (state_52519[(2)]);
var state_52519__$1 = state_52519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52519__$1,inst_52517);
} else {
if((state_val_52520 === (12))){
var inst_52505 = (state_52519[(2)]);
var state_52519__$1 = state_52519;
var statearr_52540_52573 = state_52519__$1;
(statearr_52540_52573[(2)] = inst_52505);

(statearr_52540_52573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (2))){
var state_52519__$1 = state_52519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52519__$1,(4),in$);
} else {
if((state_val_52520 === (23))){
var inst_52513 = (state_52519[(2)]);
var state_52519__$1 = state_52519;
var statearr_52541_52574 = state_52519__$1;
(statearr_52541_52574[(2)] = inst_52513);

(statearr_52541_52574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (19))){
var inst_52500 = (state_52519[(2)]);
var state_52519__$1 = state_52519;
var statearr_52542_52575 = state_52519__$1;
(statearr_52542_52575[(2)] = inst_52500);

(statearr_52542_52575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (11))){
var inst_52471 = (state_52519[(12)]);
var inst_52485 = (state_52519[(7)]);
var inst_52485__$1 = cljs.core.seq.call(null,inst_52471);
var state_52519__$1 = (function (){var statearr_52543 = state_52519;
(statearr_52543[(7)] = inst_52485__$1);

return statearr_52543;
})();
if(inst_52485__$1){
var statearr_52544_52576 = state_52519__$1;
(statearr_52544_52576[(1)] = (14));

} else {
var statearr_52545_52577 = state_52519__$1;
(statearr_52545_52577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (9))){
var inst_52507 = (state_52519[(2)]);
var inst_52508 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52519__$1 = (function (){var statearr_52546 = state_52519;
(statearr_52546[(15)] = inst_52507);

return statearr_52546;
})();
if(cljs.core.truth_(inst_52508)){
var statearr_52547_52578 = state_52519__$1;
(statearr_52547_52578[(1)] = (21));

} else {
var statearr_52548_52579 = state_52519__$1;
(statearr_52548_52579[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (5))){
var inst_52463 = cljs.core.async.close_BANG_.call(null,out);
var state_52519__$1 = state_52519;
var statearr_52549_52580 = state_52519__$1;
(statearr_52549_52580[(2)] = inst_52463);

(statearr_52549_52580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (14))){
var inst_52485 = (state_52519[(7)]);
var inst_52487 = cljs.core.chunked_seq_QMARK_.call(null,inst_52485);
var state_52519__$1 = state_52519;
if(inst_52487){
var statearr_52550_52581 = state_52519__$1;
(statearr_52550_52581[(1)] = (17));

} else {
var statearr_52551_52582 = state_52519__$1;
(statearr_52551_52582[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (16))){
var inst_52503 = (state_52519[(2)]);
var state_52519__$1 = state_52519;
var statearr_52552_52583 = state_52519__$1;
(statearr_52552_52583[(2)] = inst_52503);

(statearr_52552_52583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52520 === (10))){
var inst_52472 = (state_52519[(9)]);
var inst_52474 = (state_52519[(11)]);
var inst_52479 = cljs.core._nth.call(null,inst_52472,inst_52474);
var state_52519__$1 = state_52519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52519__$1,(13),out,inst_52479);
} else {
if((state_val_52520 === (18))){
var inst_52485 = (state_52519[(7)]);
var inst_52494 = cljs.core.first.call(null,inst_52485);
var state_52519__$1 = state_52519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52519__$1,(20),out,inst_52494);
} else {
if((state_val_52520 === (8))){
var inst_52473 = (state_52519[(10)]);
var inst_52474 = (state_52519[(11)]);
var inst_52476 = (inst_52474 < inst_52473);
var inst_52477 = inst_52476;
var state_52519__$1 = state_52519;
if(cljs.core.truth_(inst_52477)){
var statearr_52553_52584 = state_52519__$1;
(statearr_52553_52584[(1)] = (10));

} else {
var statearr_52554_52585 = state_52519__$1;
(statearr_52554_52585[(1)] = (11));

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
var statearr_52558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52558[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__);

(statearr_52558[(1)] = (1));

return statearr_52558;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____1 = (function (state_52519){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52559){if((e52559 instanceof Object)){
var ex__26914__auto__ = e52559;
var statearr_52560_52586 = state_52519;
(statearr_52560_52586[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52587 = state_52519;
state_52519 = G__52587;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__ = function(state_52519){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____1.call(this,state_52519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26911__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto__))
})();
var state__27024__auto__ = (function (){var statearr_52561 = f__27023__auto__.call(null);
(statearr_52561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto__);

return statearr_52561;
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
var args52588 = [];
var len__25923__auto___52591 = arguments.length;
var i__25924__auto___52592 = (0);
while(true){
if((i__25924__auto___52592 < len__25923__auto___52591)){
args52588.push((arguments[i__25924__auto___52592]));

var G__52593 = (i__25924__auto___52592 + (1));
i__25924__auto___52592 = G__52593;
continue;
} else {
}
break;
}

var G__52590 = args52588.length;
switch (G__52590) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52588.length)].join('')));

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
var args52595 = [];
var len__25923__auto___52598 = arguments.length;
var i__25924__auto___52599 = (0);
while(true){
if((i__25924__auto___52599 < len__25923__auto___52598)){
args52595.push((arguments[i__25924__auto___52599]));

var G__52600 = (i__25924__auto___52599 + (1));
i__25924__auto___52599 = G__52600;
continue;
} else {
}
break;
}

var G__52597 = args52595.length;
switch (G__52597) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52595.length)].join('')));

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
var args52602 = [];
var len__25923__auto___52653 = arguments.length;
var i__25924__auto___52654 = (0);
while(true){
if((i__25924__auto___52654 < len__25923__auto___52653)){
args52602.push((arguments[i__25924__auto___52654]));

var G__52655 = (i__25924__auto___52654 + (1));
i__25924__auto___52654 = G__52655;
continue;
} else {
}
break;
}

var G__52604 = args52602.length;
switch (G__52604) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52602.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___52657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___52657,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___52657,out){
return (function (state_52628){
var state_val_52629 = (state_52628[(1)]);
if((state_val_52629 === (7))){
var inst_52623 = (state_52628[(2)]);
var state_52628__$1 = state_52628;
var statearr_52630_52658 = state_52628__$1;
(statearr_52630_52658[(2)] = inst_52623);

(statearr_52630_52658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52629 === (1))){
var inst_52605 = null;
var state_52628__$1 = (function (){var statearr_52631 = state_52628;
(statearr_52631[(7)] = inst_52605);

return statearr_52631;
})();
var statearr_52632_52659 = state_52628__$1;
(statearr_52632_52659[(2)] = null);

(statearr_52632_52659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52629 === (4))){
var inst_52608 = (state_52628[(8)]);
var inst_52608__$1 = (state_52628[(2)]);
var inst_52609 = (inst_52608__$1 == null);
var inst_52610 = cljs.core.not.call(null,inst_52609);
var state_52628__$1 = (function (){var statearr_52633 = state_52628;
(statearr_52633[(8)] = inst_52608__$1);

return statearr_52633;
})();
if(inst_52610){
var statearr_52634_52660 = state_52628__$1;
(statearr_52634_52660[(1)] = (5));

} else {
var statearr_52635_52661 = state_52628__$1;
(statearr_52635_52661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52629 === (6))){
var state_52628__$1 = state_52628;
var statearr_52636_52662 = state_52628__$1;
(statearr_52636_52662[(2)] = null);

(statearr_52636_52662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52629 === (3))){
var inst_52625 = (state_52628[(2)]);
var inst_52626 = cljs.core.async.close_BANG_.call(null,out);
var state_52628__$1 = (function (){var statearr_52637 = state_52628;
(statearr_52637[(9)] = inst_52625);

return statearr_52637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52628__$1,inst_52626);
} else {
if((state_val_52629 === (2))){
var state_52628__$1 = state_52628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52628__$1,(4),ch);
} else {
if((state_val_52629 === (11))){
var inst_52608 = (state_52628[(8)]);
var inst_52617 = (state_52628[(2)]);
var inst_52605 = inst_52608;
var state_52628__$1 = (function (){var statearr_52638 = state_52628;
(statearr_52638[(7)] = inst_52605);

(statearr_52638[(10)] = inst_52617);

return statearr_52638;
})();
var statearr_52639_52663 = state_52628__$1;
(statearr_52639_52663[(2)] = null);

(statearr_52639_52663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52629 === (9))){
var inst_52608 = (state_52628[(8)]);
var state_52628__$1 = state_52628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52628__$1,(11),out,inst_52608);
} else {
if((state_val_52629 === (5))){
var inst_52605 = (state_52628[(7)]);
var inst_52608 = (state_52628[(8)]);
var inst_52612 = cljs.core._EQ_.call(null,inst_52608,inst_52605);
var state_52628__$1 = state_52628;
if(inst_52612){
var statearr_52641_52664 = state_52628__$1;
(statearr_52641_52664[(1)] = (8));

} else {
var statearr_52642_52665 = state_52628__$1;
(statearr_52642_52665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52629 === (10))){
var inst_52620 = (state_52628[(2)]);
var state_52628__$1 = state_52628;
var statearr_52643_52666 = state_52628__$1;
(statearr_52643_52666[(2)] = inst_52620);

(statearr_52643_52666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52629 === (8))){
var inst_52605 = (state_52628[(7)]);
var tmp52640 = inst_52605;
var inst_52605__$1 = tmp52640;
var state_52628__$1 = (function (){var statearr_52644 = state_52628;
(statearr_52644[(7)] = inst_52605__$1);

return statearr_52644;
})();
var statearr_52645_52667 = state_52628__$1;
(statearr_52645_52667[(2)] = null);

(statearr_52645_52667[(1)] = (2));


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
});})(c__27022__auto___52657,out))
;
return ((function (switch__26910__auto__,c__27022__auto___52657,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_52649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52649[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_52649[(1)] = (1));

return statearr_52649;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_52628){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52650){if((e52650 instanceof Object)){
var ex__26914__auto__ = e52650;
var statearr_52651_52668 = state_52628;
(statearr_52651_52668[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52669 = state_52628;
state_52628 = G__52669;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_52628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_52628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___52657,out))
})();
var state__27024__auto__ = (function (){var statearr_52652 = f__27023__auto__.call(null);
(statearr_52652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___52657);

return statearr_52652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___52657,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args52670 = [];
var len__25923__auto___52740 = arguments.length;
var i__25924__auto___52741 = (0);
while(true){
if((i__25924__auto___52741 < len__25923__auto___52740)){
args52670.push((arguments[i__25924__auto___52741]));

var G__52742 = (i__25924__auto___52741 + (1));
i__25924__auto___52741 = G__52742;
continue;
} else {
}
break;
}

var G__52672 = args52670.length;
switch (G__52672) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52670.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___52744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___52744,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___52744,out){
return (function (state_52710){
var state_val_52711 = (state_52710[(1)]);
if((state_val_52711 === (7))){
var inst_52706 = (state_52710[(2)]);
var state_52710__$1 = state_52710;
var statearr_52712_52745 = state_52710__$1;
(statearr_52712_52745[(2)] = inst_52706);

(statearr_52712_52745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (1))){
var inst_52673 = (new Array(n));
var inst_52674 = inst_52673;
var inst_52675 = (0);
var state_52710__$1 = (function (){var statearr_52713 = state_52710;
(statearr_52713[(7)] = inst_52675);

(statearr_52713[(8)] = inst_52674);

return statearr_52713;
})();
var statearr_52714_52746 = state_52710__$1;
(statearr_52714_52746[(2)] = null);

(statearr_52714_52746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (4))){
var inst_52678 = (state_52710[(9)]);
var inst_52678__$1 = (state_52710[(2)]);
var inst_52679 = (inst_52678__$1 == null);
var inst_52680 = cljs.core.not.call(null,inst_52679);
var state_52710__$1 = (function (){var statearr_52715 = state_52710;
(statearr_52715[(9)] = inst_52678__$1);

return statearr_52715;
})();
if(inst_52680){
var statearr_52716_52747 = state_52710__$1;
(statearr_52716_52747[(1)] = (5));

} else {
var statearr_52717_52748 = state_52710__$1;
(statearr_52717_52748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (15))){
var inst_52700 = (state_52710[(2)]);
var state_52710__$1 = state_52710;
var statearr_52718_52749 = state_52710__$1;
(statearr_52718_52749[(2)] = inst_52700);

(statearr_52718_52749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (13))){
var state_52710__$1 = state_52710;
var statearr_52719_52750 = state_52710__$1;
(statearr_52719_52750[(2)] = null);

(statearr_52719_52750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (6))){
var inst_52675 = (state_52710[(7)]);
var inst_52696 = (inst_52675 > (0));
var state_52710__$1 = state_52710;
if(cljs.core.truth_(inst_52696)){
var statearr_52720_52751 = state_52710__$1;
(statearr_52720_52751[(1)] = (12));

} else {
var statearr_52721_52752 = state_52710__$1;
(statearr_52721_52752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (3))){
var inst_52708 = (state_52710[(2)]);
var state_52710__$1 = state_52710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52710__$1,inst_52708);
} else {
if((state_val_52711 === (12))){
var inst_52674 = (state_52710[(8)]);
var inst_52698 = cljs.core.vec.call(null,inst_52674);
var state_52710__$1 = state_52710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52710__$1,(15),out,inst_52698);
} else {
if((state_val_52711 === (2))){
var state_52710__$1 = state_52710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52710__$1,(4),ch);
} else {
if((state_val_52711 === (11))){
var inst_52690 = (state_52710[(2)]);
var inst_52691 = (new Array(n));
var inst_52674 = inst_52691;
var inst_52675 = (0);
var state_52710__$1 = (function (){var statearr_52722 = state_52710;
(statearr_52722[(10)] = inst_52690);

(statearr_52722[(7)] = inst_52675);

(statearr_52722[(8)] = inst_52674);

return statearr_52722;
})();
var statearr_52723_52753 = state_52710__$1;
(statearr_52723_52753[(2)] = null);

(statearr_52723_52753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (9))){
var inst_52674 = (state_52710[(8)]);
var inst_52688 = cljs.core.vec.call(null,inst_52674);
var state_52710__$1 = state_52710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52710__$1,(11),out,inst_52688);
} else {
if((state_val_52711 === (5))){
var inst_52678 = (state_52710[(9)]);
var inst_52675 = (state_52710[(7)]);
var inst_52683 = (state_52710[(11)]);
var inst_52674 = (state_52710[(8)]);
var inst_52682 = (inst_52674[inst_52675] = inst_52678);
var inst_52683__$1 = (inst_52675 + (1));
var inst_52684 = (inst_52683__$1 < n);
var state_52710__$1 = (function (){var statearr_52724 = state_52710;
(statearr_52724[(12)] = inst_52682);

(statearr_52724[(11)] = inst_52683__$1);

return statearr_52724;
})();
if(cljs.core.truth_(inst_52684)){
var statearr_52725_52754 = state_52710__$1;
(statearr_52725_52754[(1)] = (8));

} else {
var statearr_52726_52755 = state_52710__$1;
(statearr_52726_52755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (14))){
var inst_52703 = (state_52710[(2)]);
var inst_52704 = cljs.core.async.close_BANG_.call(null,out);
var state_52710__$1 = (function (){var statearr_52728 = state_52710;
(statearr_52728[(13)] = inst_52703);

return statearr_52728;
})();
var statearr_52729_52756 = state_52710__$1;
(statearr_52729_52756[(2)] = inst_52704);

(statearr_52729_52756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (10))){
var inst_52694 = (state_52710[(2)]);
var state_52710__$1 = state_52710;
var statearr_52730_52757 = state_52710__$1;
(statearr_52730_52757[(2)] = inst_52694);

(statearr_52730_52757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52711 === (8))){
var inst_52683 = (state_52710[(11)]);
var inst_52674 = (state_52710[(8)]);
var tmp52727 = inst_52674;
var inst_52674__$1 = tmp52727;
var inst_52675 = inst_52683;
var state_52710__$1 = (function (){var statearr_52731 = state_52710;
(statearr_52731[(7)] = inst_52675);

(statearr_52731[(8)] = inst_52674__$1);

return statearr_52731;
})();
var statearr_52732_52758 = state_52710__$1;
(statearr_52732_52758[(2)] = null);

(statearr_52732_52758[(1)] = (2));


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
});})(c__27022__auto___52744,out))
;
return ((function (switch__26910__auto__,c__27022__auto___52744,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_52736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52736[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_52736[(1)] = (1));

return statearr_52736;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_52710){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52737){if((e52737 instanceof Object)){
var ex__26914__auto__ = e52737;
var statearr_52738_52759 = state_52710;
(statearr_52738_52759[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52760 = state_52710;
state_52710 = G__52760;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_52710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_52710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___52744,out))
})();
var state__27024__auto__ = (function (){var statearr_52739 = f__27023__auto__.call(null);
(statearr_52739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___52744);

return statearr_52739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___52744,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args52761 = [];
var len__25923__auto___52835 = arguments.length;
var i__25924__auto___52836 = (0);
while(true){
if((i__25924__auto___52836 < len__25923__auto___52835)){
args52761.push((arguments[i__25924__auto___52836]));

var G__52837 = (i__25924__auto___52836 + (1));
i__25924__auto___52836 = G__52837;
continue;
} else {
}
break;
}

var G__52763 = args52761.length;
switch (G__52763) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52761.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27022__auto___52839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27022__auto___52839,out){
return (function (){
var f__27023__auto__ = (function (){var switch__26910__auto__ = ((function (c__27022__auto___52839,out){
return (function (state_52805){
var state_val_52806 = (state_52805[(1)]);
if((state_val_52806 === (7))){
var inst_52801 = (state_52805[(2)]);
var state_52805__$1 = state_52805;
var statearr_52807_52840 = state_52805__$1;
(statearr_52807_52840[(2)] = inst_52801);

(statearr_52807_52840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (1))){
var inst_52764 = [];
var inst_52765 = inst_52764;
var inst_52766 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52805__$1 = (function (){var statearr_52808 = state_52805;
(statearr_52808[(7)] = inst_52766);

(statearr_52808[(8)] = inst_52765);

return statearr_52808;
})();
var statearr_52809_52841 = state_52805__$1;
(statearr_52809_52841[(2)] = null);

(statearr_52809_52841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (4))){
var inst_52769 = (state_52805[(9)]);
var inst_52769__$1 = (state_52805[(2)]);
var inst_52770 = (inst_52769__$1 == null);
var inst_52771 = cljs.core.not.call(null,inst_52770);
var state_52805__$1 = (function (){var statearr_52810 = state_52805;
(statearr_52810[(9)] = inst_52769__$1);

return statearr_52810;
})();
if(inst_52771){
var statearr_52811_52842 = state_52805__$1;
(statearr_52811_52842[(1)] = (5));

} else {
var statearr_52812_52843 = state_52805__$1;
(statearr_52812_52843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (15))){
var inst_52795 = (state_52805[(2)]);
var state_52805__$1 = state_52805;
var statearr_52813_52844 = state_52805__$1;
(statearr_52813_52844[(2)] = inst_52795);

(statearr_52813_52844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (13))){
var state_52805__$1 = state_52805;
var statearr_52814_52845 = state_52805__$1;
(statearr_52814_52845[(2)] = null);

(statearr_52814_52845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (6))){
var inst_52765 = (state_52805[(8)]);
var inst_52790 = inst_52765.length;
var inst_52791 = (inst_52790 > (0));
var state_52805__$1 = state_52805;
if(cljs.core.truth_(inst_52791)){
var statearr_52815_52846 = state_52805__$1;
(statearr_52815_52846[(1)] = (12));

} else {
var statearr_52816_52847 = state_52805__$1;
(statearr_52816_52847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (3))){
var inst_52803 = (state_52805[(2)]);
var state_52805__$1 = state_52805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52805__$1,inst_52803);
} else {
if((state_val_52806 === (12))){
var inst_52765 = (state_52805[(8)]);
var inst_52793 = cljs.core.vec.call(null,inst_52765);
var state_52805__$1 = state_52805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52805__$1,(15),out,inst_52793);
} else {
if((state_val_52806 === (2))){
var state_52805__$1 = state_52805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52805__$1,(4),ch);
} else {
if((state_val_52806 === (11))){
var inst_52769 = (state_52805[(9)]);
var inst_52773 = (state_52805[(10)]);
var inst_52783 = (state_52805[(2)]);
var inst_52784 = [];
var inst_52785 = inst_52784.push(inst_52769);
var inst_52765 = inst_52784;
var inst_52766 = inst_52773;
var state_52805__$1 = (function (){var statearr_52817 = state_52805;
(statearr_52817[(7)] = inst_52766);

(statearr_52817[(11)] = inst_52783);

(statearr_52817[(8)] = inst_52765);

(statearr_52817[(12)] = inst_52785);

return statearr_52817;
})();
var statearr_52818_52848 = state_52805__$1;
(statearr_52818_52848[(2)] = null);

(statearr_52818_52848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (9))){
var inst_52765 = (state_52805[(8)]);
var inst_52781 = cljs.core.vec.call(null,inst_52765);
var state_52805__$1 = state_52805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52805__$1,(11),out,inst_52781);
} else {
if((state_val_52806 === (5))){
var inst_52766 = (state_52805[(7)]);
var inst_52769 = (state_52805[(9)]);
var inst_52773 = (state_52805[(10)]);
var inst_52773__$1 = f.call(null,inst_52769);
var inst_52774 = cljs.core._EQ_.call(null,inst_52773__$1,inst_52766);
var inst_52775 = cljs.core.keyword_identical_QMARK_.call(null,inst_52766,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52776 = (inst_52774) || (inst_52775);
var state_52805__$1 = (function (){var statearr_52819 = state_52805;
(statearr_52819[(10)] = inst_52773__$1);

return statearr_52819;
})();
if(cljs.core.truth_(inst_52776)){
var statearr_52820_52849 = state_52805__$1;
(statearr_52820_52849[(1)] = (8));

} else {
var statearr_52821_52850 = state_52805__$1;
(statearr_52821_52850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (14))){
var inst_52798 = (state_52805[(2)]);
var inst_52799 = cljs.core.async.close_BANG_.call(null,out);
var state_52805__$1 = (function (){var statearr_52823 = state_52805;
(statearr_52823[(13)] = inst_52798);

return statearr_52823;
})();
var statearr_52824_52851 = state_52805__$1;
(statearr_52824_52851[(2)] = inst_52799);

(statearr_52824_52851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (10))){
var inst_52788 = (state_52805[(2)]);
var state_52805__$1 = state_52805;
var statearr_52825_52852 = state_52805__$1;
(statearr_52825_52852[(2)] = inst_52788);

(statearr_52825_52852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52806 === (8))){
var inst_52769 = (state_52805[(9)]);
var inst_52773 = (state_52805[(10)]);
var inst_52765 = (state_52805[(8)]);
var inst_52778 = inst_52765.push(inst_52769);
var tmp52822 = inst_52765;
var inst_52765__$1 = tmp52822;
var inst_52766 = inst_52773;
var state_52805__$1 = (function (){var statearr_52826 = state_52805;
(statearr_52826[(7)] = inst_52766);

(statearr_52826[(14)] = inst_52778);

(statearr_52826[(8)] = inst_52765__$1);

return statearr_52826;
})();
var statearr_52827_52853 = state_52805__$1;
(statearr_52827_52853[(2)] = null);

(statearr_52827_52853[(1)] = (2));


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
});})(c__27022__auto___52839,out))
;
return ((function (switch__26910__auto__,c__27022__auto___52839,out){
return (function() {
var cljs$core$async$state_machine__26911__auto__ = null;
var cljs$core$async$state_machine__26911__auto____0 = (function (){
var statearr_52831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52831[(0)] = cljs$core$async$state_machine__26911__auto__);

(statearr_52831[(1)] = (1));

return statearr_52831;
});
var cljs$core$async$state_machine__26911__auto____1 = (function (state_52805){
while(true){
var ret_value__26912__auto__ = (function (){try{while(true){
var result__26913__auto__ = switch__26910__auto__.call(null,state_52805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26913__auto__;
}
break;
}
}catch (e52832){if((e52832 instanceof Object)){
var ex__26914__auto__ = e52832;
var statearr_52833_52854 = state_52805;
(statearr_52833_52854[(5)] = ex__26914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52855 = state_52805;
state_52805 = G__52855;
continue;
} else {
return ret_value__26912__auto__;
}
break;
}
});
cljs$core$async$state_machine__26911__auto__ = function(state_52805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26911__auto____1.call(this,state_52805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26911__auto____0;
cljs$core$async$state_machine__26911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26911__auto____1;
return cljs$core$async$state_machine__26911__auto__;
})()
;})(switch__26910__auto__,c__27022__auto___52839,out))
})();
var state__27024__auto__ = (function (){var statearr_52834 = f__27023__auto__.call(null);
(statearr_52834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27022__auto___52839);

return statearr_52834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27024__auto__);
});})(c__27022__auto___52839,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489464068571