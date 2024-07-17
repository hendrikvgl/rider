(() => {
    'use strict';
    var t = function (e, r) {
        return (
            (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                }),
            t(e, r)
        );
    };
    function e(e, r) {
        if ('function' != typeof r && null !== r)
            throw new TypeError(
                'Class extends value ' +
                    String(r) +
                    ' is not a constructor or null'
            );
        function n() {
            this.constructor = e;
        }
        t(e, r),
            (e.prototype =
                null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
    }
    function r(t, e) {
        var r,
            n,
            o,
            i,
            c = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            'function' == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                    return this;
                }),
            i
        );
        function u(u) {
            return function (a) {
                return (function (u) {
                    if (r)
                        throw new TypeError('Generator is already executing.');
                    for (; i && ((i = 0), u[0] && (c = 0)), c; )
                        try {
                            if (
                                ((r = 1),
                                n &&
                                    (o =
                                        2 & u[0]
                                            ? n.return
                                            : u[0]
                                              ? n.throw ||
                                                ((o = n.return) && o.call(n), 0)
                                              : n.next) &&
                                    !(o = o.call(n, u[1])).done)
                            )
                                return o;
                            switch (
                                ((n = 0), o && (u = [2 & u[0], o.value]), u[0])
                            ) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return c.label++, { value: u[1], done: !1 };
                                case 5:
                                    c.label++, (n = u[1]), (u = [0]);
                                    continue;
                                case 7:
                                    (u = c.ops.pop()), c.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(
                                            (o =
                                                (o = c.trys).length > 0 &&
                                                o[o.length - 1]) ||
                                            (6 !== u[0] && 2 !== u[0])
                                        )
                                    ) {
                                        c = 0;
                                        continue;
                                    }
                                    if (
                                        3 === u[0] &&
                                        (!o || (u[1] > o[0] && u[1] < o[3]))
                                    ) {
                                        c.label = u[1];
                                        break;
                                    }
                                    if (6 === u[0] && c.label < o[1]) {
                                        (c.label = o[1]), (o = u);
                                        break;
                                    }
                                    if (o && c.label < o[2]) {
                                        (c.label = o[2]), c.ops.push(u);
                                        break;
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue;
                            }
                            u = e.call(t, c);
                        } catch (t) {
                            (u = [6, t]), (n = 0);
                        } finally {
                            r = o = 0;
                        }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                })([u, a]);
            };
        }
    }
    function n(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && 'number' == typeof t.length)
            return {
                next: function () {
                    return (
                        t && n >= t.length && (t = void 0),
                        { value: t && t[n++], done: !t }
                    );
                },
            };
        throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
    }
    function o(t, e) {
        var r = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n,
            o,
            i = r.call(t),
            c = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                c.push(n.value);
        } catch (t) {
            o = { error: t };
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i);
            } finally {
                if (o) throw o.error;
            }
        }
        return c;
    }
    function i(t, e, r) {
        if (r || 2 === arguments.length)
            for (var n, o = 0, i = e.length; o < i; o++)
                (!n && o in e) ||
                    (n || (n = Array.prototype.slice.call(e, 0, o)),
                    (n[o] = e[o]));
        return t.concat(n || Array.prototype.slice.call(e));
    }
    function c(t) {
        return this instanceof c ? ((this.v = t), this) : new c(t);
    }
    function u(t) {
        return 'function' == typeof t;
    }
    Object.create,
        Object.create,
        'function' == typeof SuppressedError && SuppressedError;
    var a,
        s =
            (((a = function (t) {
                var e;
                (e = this),
                    Error.call(e),
                    (e.stack = new Error().stack),
                    (this.message = t
                        ? t.length +
                          ' errors occurred during unsubscription:\n' +
                          t
                              .map(function (t, e) {
                                  return e + 1 + ') ' + t.toString();
                              })
                              .join('\n  ')
                        : ''),
                    (this.name = 'UnsubscriptionError'),
                    (this.errors = t);
            }).prototype = Object.create(Error.prototype)),
            (a.prototype.constructor = a),
            a);
    function l(t, e) {
        if (t) {
            var r = t.indexOf(e);
            0 <= r && t.splice(r, 1);
        }
    }
    var f = (function () {
        function t(t) {
            (this.initialTeardown = t),
                (this.closed = !1),
                (this._parentage = null),
                (this._finalizers = null);
        }
        var e;
        return (
            (t.prototype.unsubscribe = function () {
                var t, e, r, c, a;
                if (!this.closed) {
                    this.closed = !0;
                    var l = this._parentage;
                    if (l)
                        if (((this._parentage = null), Array.isArray(l)))
                            try {
                                for (
                                    var f = n(l), h = f.next();
                                    !h.done;
                                    h = f.next()
                                )
                                    h.value.remove(this);
                            } catch (e) {
                                t = { error: e };
                            } finally {
                                try {
                                    h && !h.done && (e = f.return) && e.call(f);
                                } finally {
                                    if (t) throw t.error;
                                }
                            }
                        else l.remove(this);
                    var y = this.initialTeardown;
                    if (u(y))
                        try {
                            y();
                        } catch (t) {
                            a = t instanceof s ? t.errors : [t];
                        }
                    var p = this._finalizers;
                    if (p) {
                        this._finalizers = null;
                        try {
                            for (
                                var v = n(p), b = v.next();
                                !b.done;
                                b = v.next()
                            ) {
                                var w = b.value;
                                try {
                                    d(w);
                                } catch (t) {
                                    (a = null != a ? a : []),
                                        t instanceof s
                                            ? (a = i(i([], o(a)), o(t.errors)))
                                            : a.push(t);
                                }
                            }
                        } catch (t) {
                            r = { error: t };
                        } finally {
                            try {
                                b && !b.done && (c = v.return) && c.call(v);
                            } finally {
                                if (r) throw r.error;
                            }
                        }
                    }
                    if (a) throw new s(a);
                }
            }),
            (t.prototype.add = function (e) {
                var r;
                if (e && e !== this)
                    if (this.closed) d(e);
                    else {
                        if (e instanceof t) {
                            if (e.closed || e._hasParent(this)) return;
                            e._addParent(this);
                        }
                        (this._finalizers =
                            null !== (r = this._finalizers) && void 0 !== r
                                ? r
                                : []).push(e);
                    }
            }),
            (t.prototype._hasParent = function (t) {
                var e = this._parentage;
                return e === t || (Array.isArray(e) && e.includes(t));
            }),
            (t.prototype._addParent = function (t) {
                var e = this._parentage;
                this._parentage = Array.isArray(e)
                    ? (e.push(t), e)
                    : e
                      ? [e, t]
                      : t;
            }),
            (t.prototype._removeParent = function (t) {
                var e = this._parentage;
                e === t
                    ? (this._parentage = null)
                    : Array.isArray(e) && l(e, t);
            }),
            (t.prototype.remove = function (e) {
                var r = this._finalizers;
                r && l(r, e), e instanceof t && e._removeParent(this);
            }),
            (t.EMPTY = (((e = new t()).closed = !0), e)),
            t
        );
    })();
    function h(t) {
        return (
            t instanceof f ||
            (t && 'closed' in t && u(t.remove) && u(t.add) && u(t.unsubscribe))
        );
    }
    function d(t) {
        u(t) ? t() : t.unsubscribe();
    }
    f.EMPTY;
    var y = (function (t) {
            function r(e, r) {
                return t.call(this) || this;
            }
            return (
                e(r, t),
                (r.prototype.schedule = function (t, e) {
                    return void 0 === e && (e = 0), this;
                }),
                r
            );
        })(f),
        p = {
            setInterval: function (t, e) {
                for (var r = [], n = 2; n < arguments.length; n++)
                    r[n - 2] = arguments[n];
                var c = p.delegate;
                return (null == c ? void 0 : c.setInterval)
                    ? c.setInterval.apply(c, i([t, e], o(r)))
                    : setInterval.apply(void 0, i([t, e], o(r)));
            },
            clearInterval: function (t) {
                var e = p.delegate;
                return (
                    (null == e ? void 0 : e.clearInterval) || clearInterval
                )(t);
            },
            delegate: void 0,
        },
        v = (function (t) {
            function r(e, r) {
                var n = t.call(this, e, r) || this;
                return (n.scheduler = e), (n.work = r), (n.pending = !1), n;
            }
            return (
                e(r, t),
                (r.prototype.schedule = function (t, e) {
                    var r;
                    if ((void 0 === e && (e = 0), this.closed)) return this;
                    this.state = t;
                    var n = this.id,
                        o = this.scheduler;
                    return (
                        null != n && (this.id = this.recycleAsyncId(o, n, e)),
                        (this.pending = !0),
                        (this.delay = e),
                        (this.id =
                            null !== (r = this.id) && void 0 !== r
                                ? r
                                : this.requestAsyncId(o, this.id, e)),
                        this
                    );
                }),
                (r.prototype.requestAsyncId = function (t, e, r) {
                    return (
                        void 0 === r && (r = 0),
                        p.setInterval(t.flush.bind(t, this), r)
                    );
                }),
                (r.prototype.recycleAsyncId = function (t, e, r) {
                    if (
                        (void 0 === r && (r = 0),
                        null != r && this.delay === r && !1 === this.pending)
                    )
                        return e;
                    null != e && p.clearInterval(e);
                }),
                (r.prototype.execute = function (t, e) {
                    if (this.closed)
                        return new Error('executing a cancelled action');
                    this.pending = !1;
                    var r = this._execute(t, e);
                    if (r) return r;
                    !1 === this.pending &&
                        null != this.id &&
                        (this.id = this.recycleAsyncId(
                            this.scheduler,
                            this.id,
                            null
                        ));
                }),
                (r.prototype._execute = function (t, e) {
                    var r,
                        n = !1;
                    try {
                        this.work(t);
                    } catch (t) {
                        (n = !0),
                            (r =
                                t ||
                                new Error(
                                    'Scheduled action threw falsy error'
                                ));
                    }
                    if (n) return this.unsubscribe(), r;
                }),
                (r.prototype.unsubscribe = function () {
                    if (!this.closed) {
                        var e = this.id,
                            r = this.scheduler,
                            n = r.actions;
                        (this.work = this.state = this.scheduler = null),
                            (this.pending = !1),
                            l(n, this),
                            null != e &&
                                (this.id = this.recycleAsyncId(r, e, null)),
                            (this.delay = null),
                            t.prototype.unsubscribe.call(this);
                    }
                }),
                r
            );
        })(y),
        b = {
            now: function () {
                return (b.delegate || Date).now();
            },
            delegate: void 0,
        },
        w = (function () {
            function t(e, r) {
                void 0 === r && (r = t.now),
                    (this.schedulerActionCtor = e),
                    (this.now = r);
            }
            return (
                (t.prototype.schedule = function (t, e, r) {
                    return (
                        void 0 === e && (e = 0),
                        new this.schedulerActionCtor(this, t).schedule(r, e)
                    );
                }),
                (t.now = b.now),
                t
            );
        })(),
        x = new ((function (t) {
            function r(e, r) {
                void 0 === r && (r = w.now);
                var n = t.call(this, e, r) || this;
                return (n.actions = []), (n._active = !1), n;
            }
            return (
                e(r, t),
                (r.prototype.flush = function (t) {
                    var e = this.actions;
                    if (this._active) e.push(t);
                    else {
                        var r;
                        this._active = !0;
                        do {
                            if ((r = t.execute(t.state, t.delay))) break;
                        } while ((t = e.shift()));
                        if (((this._active = !1), r)) {
                            for (; (t = e.shift()); ) t.unsubscribe();
                            throw r;
                        }
                    }
                }),
                r
            );
        })(w))(v),
        m = x,
        g = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1,
        },
        _ = {
            setTimeout: function (t, e) {
                for (var r = [], n = 2; n < arguments.length; n++)
                    r[n - 2] = arguments[n];
                var c = _.delegate;
                return (null == c ? void 0 : c.setTimeout)
                    ? c.setTimeout.apply(c, i([t, e], o(r)))
                    : setTimeout.apply(void 0, i([t, e], o(r)));
            },
            clearTimeout: function (t) {
                var e = _.delegate;
                return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(
                    t
                );
            },
            delegate: void 0,
        };
    function S(t) {
        _.setTimeout(function () {
            var e = g.onUnhandledError;
            if (!e) throw t;
            e(t);
        });
    }
    function E() {}
    var I = P('C', void 0, void 0);
    function P(t, e, r) {
        return { kind: t, value: e, error: r };
    }
    var A = null,
        T = (function (t) {
            function r(e) {
                var r = t.call(this) || this;
                return (
                    (r.isStopped = !1),
                    e
                        ? ((r.destination = e), h(e) && e.add(r))
                        : (r.destination = B),
                    r
                );
            }
            return (
                e(r, t),
                (r.create = function (t, e, r) {
                    return new j(t, e, r);
                }),
                (r.prototype.next = function (t) {
                    this.isStopped
                        ? D(
                              (function (t) {
                                  return P('N', t, void 0);
                              })(t),
                              this
                          )
                        : this._next(t);
                }),
                (r.prototype.error = function (t) {
                    this.isStopped
                        ? D(P('E', void 0, t), this)
                        : ((this.isStopped = !0), this._error(t));
                }),
                (r.prototype.complete = function () {
                    this.isStopped
                        ? D(I, this)
                        : ((this.isStopped = !0), this._complete());
                }),
                (r.prototype.unsubscribe = function () {
                    this.closed ||
                        ((this.isStopped = !0),
                        t.prototype.unsubscribe.call(this),
                        (this.destination = null));
                }),
                (r.prototype._next = function (t) {
                    this.destination.next(t);
                }),
                (r.prototype._error = function (t) {
                    try {
                        this.destination.error(t);
                    } finally {
                        this.unsubscribe();
                    }
                }),
                (r.prototype._complete = function () {
                    try {
                        this.destination.complete();
                    } finally {
                        this.unsubscribe();
                    }
                }),
                r
            );
        })(f),
        M = Function.prototype.bind;
    function k(t, e) {
        return M.call(t, e);
    }
    var O = (function () {
            function t(t) {
                this.partialObserver = t;
            }
            return (
                (t.prototype.next = function (t) {
                    var e = this.partialObserver;
                    if (e.next)
                        try {
                            e.next(t);
                        } catch (t) {
                            C(t);
                        }
                }),
                (t.prototype.error = function (t) {
                    var e = this.partialObserver;
                    if (e.error)
                        try {
                            e.error(t);
                        } catch (t) {
                            C(t);
                        }
                    else C(t);
                }),
                (t.prototype.complete = function () {
                    var t = this.partialObserver;
                    if (t.complete)
                        try {
                            t.complete();
                        } catch (t) {
                            C(t);
                        }
                }),
                t
            );
        })(),
        j = (function (t) {
            function r(e, r, n) {
                var o,
                    i,
                    c = t.call(this) || this;
                return (
                    u(e) || !e
                        ? (o = {
                              next: null != e ? e : void 0,
                              error: null != r ? r : void 0,
                              complete: null != n ? n : void 0,
                          })
                        : c && g.useDeprecatedNextContext
                          ? (((i = Object.create(e)).unsubscribe = function () {
                                return c.unsubscribe();
                            }),
                            (o = {
                                next: e.next && k(e.next, i),
                                error: e.error && k(e.error, i),
                                complete: e.complete && k(e.complete, i),
                            }))
                          : (o = e),
                    (c.destination = new O(o)),
                    c
                );
            }
            return e(r, t), r;
        })(T);
    function C(t) {
        var e;
        g.useDeprecatedSynchronousErrorHandling
            ? ((e = t),
              g.useDeprecatedSynchronousErrorHandling &&
                  A &&
                  ((A.errorThrown = !0), (A.error = e)))
            : S(t);
    }
    function D(t, e) {
        var r = g.onStoppedNotification;
        r &&
            _.setTimeout(function () {
                return r(t, e);
            });
    }
    var B = {
            closed: !0,
            next: E,
            error: function (t) {
                throw t;
            },
            complete: E,
        },
        U =
            ('function' == typeof Symbol && Symbol.observable) ||
            '@@observable';
    function z(t) {
        return t;
    }
    var K = (function () {
        function t(t) {
            t && (this._subscribe = t);
        }
        return (
            (t.prototype.lift = function (e) {
                var r = new t();
                return (r.source = this), (r.operator = e), r;
            }),
            (t.prototype.subscribe = function (t, e, r) {
                var n,
                    o = this,
                    i =
                        ((n = t) && n instanceof T) ||
                        ((function (t) {
                            return (
                                t && u(t.next) && u(t.error) && u(t.complete)
                            );
                        })(n) &&
                            h(n))
                            ? t
                            : new j(t, e, r);
                return (
                    (function (t) {
                        if (g.useDeprecatedSynchronousErrorHandling) {
                            var e = !A;
                            if (
                                (e && (A = { errorThrown: !1, error: null }),
                                t(),
                                e)
                            ) {
                                var r = A,
                                    n = r.errorThrown,
                                    o = r.error;
                                if (((A = null), n)) throw o;
                            }
                        } else t();
                    })(function () {
                        var t = o,
                            e = t.operator,
                            r = t.source;
                        i.add(
                            e
                                ? e.call(i, r)
                                : r
                                  ? o._subscribe(i)
                                  : o._trySubscribe(i)
                        );
                    }),
                    i
                );
            }),
            (t.prototype._trySubscribe = function (t) {
                try {
                    return this._subscribe(t);
                } catch (e) {
                    t.error(e);
                }
            }),
            (t.prototype.forEach = function (t, e) {
                var r = this;
                return new (e = N(e))(function (e, n) {
                    var o = new j({
                        next: function (e) {
                            try {
                                t(e);
                            } catch (t) {
                                n(t), o.unsubscribe();
                            }
                        },
                        error: n,
                        complete: e,
                    });
                    r.subscribe(o);
                });
            }),
            (t.prototype._subscribe = function (t) {
                var e;
                return null === (e = this.source) || void 0 === e
                    ? void 0
                    : e.subscribe(t);
            }),
            (t.prototype[U] = function () {
                return this;
            }),
            (t.prototype.pipe = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return (
                    0 === (r = t).length
                        ? z
                        : 1 === r.length
                          ? r[0]
                          : function (t) {
                                return r.reduce(function (t, e) {
                                    return e(t);
                                }, t);
                            }
                )(this);
                var r;
            }),
            (t.prototype.toPromise = function (t) {
                var e = this;
                return new (t = N(t))(function (t, r) {
                    var n;
                    e.subscribe(
                        function (t) {
                            return (n = t);
                        },
                        function (t) {
                            return r(t);
                        },
                        function () {
                            return t(n);
                        }
                    );
                });
            }),
            (t.create = function (e) {
                return new t(e);
            }),
            t
        );
    })();
    function N(t) {
        var e;
        return null !== (e = null != t ? t : g.Promise) && void 0 !== e
            ? e
            : Promise;
    }
    var F =
        'function' == typeof Symbol && Symbol.iterator
            ? Symbol.iterator
            : '@@iterator';
    function R(t) {
        if (t instanceof K) return t;
        if (null != t) {
            if (
                (function (t) {
                    return u(t[U]);
                })(t)
            )
                return (
                    (l = t),
                    new K(function (t) {
                        var e = l[U]();
                        if (u(e.subscribe)) return e.subscribe(t);
                        throw new TypeError(
                            'Provided object does not correctly implement Symbol.observable'
                        );
                    })
                );
            if (
                (e = t) &&
                'number' == typeof e.length &&
                'function' != typeof e
            )
                return (
                    (s = t),
                    new K(function (t) {
                        for (var e = 0; e < s.length && !t.closed; e++)
                            t.next(s[e]);
                        t.complete();
                    })
                );
            if (u(null == (a = t) ? void 0 : a.then))
                return (
                    (i = t),
                    new K(function (t) {
                        i.then(
                            function (e) {
                                t.closed || (t.next(e), t.complete());
                            },
                            function (e) {
                                return t.error(e);
                            }
                        ).then(null, S);
                    })
                );
            if (
                (function (t) {
                    return (
                        Symbol.asyncIterator &&
                        u(null == t ? void 0 : t[Symbol.asyncIterator])
                    );
                })(t)
            )
                return L(t);
            if (
                (function (t) {
                    return u(null == t ? void 0 : t[F]);
                })(t)
            )
                return (
                    (o = t),
                    new K(function (t) {
                        var e, r;
                        try {
                            for (
                                var i = n(o), c = i.next();
                                !c.done;
                                c = i.next()
                            ) {
                                var u = c.value;
                                if ((t.next(u), t.closed)) return;
                            }
                        } catch (t) {
                            e = { error: t };
                        } finally {
                            try {
                                c && !c.done && (r = i.return) && r.call(i);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                        t.complete();
                    })
                );
            if (
                (function (t) {
                    return u(null == t ? void 0 : t.getReader);
                })(t)
            )
                return L(
                    (function (t) {
                        return (function (t, e, r) {
                            if (!Symbol.asyncIterator)
                                throw new TypeError(
                                    'Symbol.asyncIterator is not defined.'
                                );
                            var n,
                                o = r.apply(t, e || []),
                                i = [];
                            return (
                                (n = {}),
                                u('next'),
                                u('throw'),
                                u('return', function (t) {
                                    return function (e) {
                                        return Promise.resolve(e).then(t, l);
                                    };
                                }),
                                (n[Symbol.asyncIterator] = function () {
                                    return this;
                                }),
                                n
                            );
                            function u(t, e) {
                                o[t] &&
                                    ((n[t] = function (e) {
                                        return new Promise(function (r, n) {
                                            i.push([t, e, r, n]) > 1 || a(t, e);
                                        });
                                    }),
                                    e && (n[t] = e(n[t])));
                            }
                            function a(t, e) {
                                try {
                                    (r = o[t](e)).value instanceof c
                                        ? Promise.resolve(r.value.v).then(s, l)
                                        : f(i[0][2], r);
                                } catch (t) {
                                    f(i[0][3], t);
                                }
                                var r;
                            }
                            function s(t) {
                                a('next', t);
                            }
                            function l(t) {
                                a('throw', t);
                            }
                            function f(t, e) {
                                t(e),
                                    i.shift(),
                                    i.length && a(i[0][0], i[0][1]);
                            }
                        })(this, arguments, function () {
                            var e, n, o;
                            return r(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        (e = t.getReader()), (r.label = 1);
                                    case 1:
                                        r.trys.push([1, , 9, 10]),
                                            (r.label = 2);
                                    case 2:
                                        return [4, c(e.read())];
                                    case 3:
                                        return (
                                            (n = r.sent()),
                                            (o = n.value),
                                            n.done ? [4, c(void 0)] : [3, 5]
                                        );
                                    case 4:
                                        return [2, r.sent()];
                                    case 5:
                                        return [4, c(o)];
                                    case 6:
                                        return [4, r.sent()];
                                    case 7:
                                        return r.sent(), [3, 2];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return e.releaseLock(), [7];
                                    case 10:
                                        return [2];
                                }
                            });
                        });
                    })(t)
                );
        }
        var e, o, i, a, s, l;
        throw (function (t) {
            return new TypeError(
                'You provided ' +
                    (null !== t && 'object' == typeof t
                        ? 'an invalid object'
                        : "'" + t + "'") +
                    ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.'
            );
        })(t);
    }
    function L(t) {
        return new K(function (e) {
            (function (t, e) {
                var o, i, c, u, a, s, l, f;
                return (
                    (a = this),
                    (s = void 0),
                    (f = function () {
                        var a, s;
                        return r(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    r.trys.push([0, 5, 6, 11]),
                                        (o = (function (t) {
                                            if (!Symbol.asyncIterator)
                                                throw new TypeError(
                                                    'Symbol.asyncIterator is not defined.'
                                                );
                                            var e,
                                                r = t[Symbol.asyncIterator];
                                            return r
                                                ? r.call(t)
                                                : ((t = n(t)),
                                                  (e = {}),
                                                  o('next'),
                                                  o('throw'),
                                                  o('return'),
                                                  (e[Symbol.asyncIterator] =
                                                      function () {
                                                          return this;
                                                      }),
                                                  e);
                                            function o(r) {
                                                e[r] =
                                                    t[r] &&
                                                    function (e) {
                                                        return new Promise(
                                                            function (n, o) {
                                                                !(function (
                                                                    t,
                                                                    e,
                                                                    r,
                                                                    n
                                                                ) {
                                                                    Promise.resolve(
                                                                        n
                                                                    ).then(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            t({
                                                                                value: e,
                                                                                done: r,
                                                                            });
                                                                        },
                                                                        e
                                                                    );
                                                                })(
                                                                    n,
                                                                    o,
                                                                    (e =
                                                                        t[r](e))
                                                                        .done,
                                                                    e.value
                                                                );
                                                            }
                                                        );
                                                    };
                                            }
                                        })(t)),
                                        (r.label = 1);
                                case 1:
                                    return [4, o.next()];
                                case 2:
                                    if ((i = r.sent()).done) return [3, 4];
                                    if (((a = i.value), e.next(a), e.closed))
                                        return [2];
                                    r.label = 3;
                                case 3:
                                    return [3, 1];
                                case 4:
                                    return [3, 11];
                                case 5:
                                    return (
                                        (s = r.sent()),
                                        (c = { error: s }),
                                        [3, 11]
                                    );
                                case 6:
                                    return (
                                        r.trys.push([6, , 9, 10]),
                                        i && !i.done && (u = o.return)
                                            ? [4, u.call(o)]
                                            : [3, 8]
                                    );
                                case 7:
                                    r.sent(), (r.label = 8);
                                case 8:
                                    return [3, 10];
                                case 9:
                                    if (c) throw c.error;
                                    return [7];
                                case 10:
                                    return [7];
                                case 11:
                                    return e.complete(), [2];
                            }
                        });
                    }),
                    new ((l = void 0) || (l = Promise))(function (t, e) {
                        function r(t) {
                            try {
                                o(f.next(t));
                            } catch (t) {
                                e(t);
                            }
                        }
                        function n(t) {
                            try {
                                o(f.throw(t));
                            } catch (t) {
                                e(t);
                            }
                        }
                        function o(e) {
                            var o;
                            e.done
                                ? t(e.value)
                                : ((o = e.value),
                                  o instanceof l
                                      ? o
                                      : new l(function (t) {
                                            t(o);
                                        })).then(r, n);
                        }
                        o((f = f.apply(a, s || [])).next());
                    })
                );
            })(t, e).catch(function (t) {
                return e.error(t);
            });
        });
    }
    function H(t, e, r, n, o) {
        return new Y(t, e, r, n, o);
    }
    var Y = (function (t) {
        function r(e, r, n, o, i, c) {
            var u = t.call(this, e) || this;
            return (
                (u.onFinalize = i),
                (u.shouldUnsubscribe = c),
                (u._next = r
                    ? function (t) {
                          try {
                              r(t);
                          } catch (t) {
                              e.error(t);
                          }
                      }
                    : t.prototype._next),
                (u._error = o
                    ? function (t) {
                          try {
                              o(t);
                          } catch (t) {
                              e.error(t);
                          } finally {
                              this.unsubscribe();
                          }
                      }
                    : t.prototype._error),
                (u._complete = n
                    ? function () {
                          try {
                              n();
                          } catch (t) {
                              e.error(t);
                          } finally {
                              this.unsubscribe();
                          }
                      }
                    : t.prototype._complete),
                u
            );
        }
        return (
            e(r, t),
            (r.prototype.unsubscribe = function () {
                var e;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    var r = this.closed;
                    t.prototype.unsubscribe.call(this),
                        !r &&
                            (null === (e = this.onFinalize) ||
                                void 0 === e ||
                                e.call(this));
                }
            }),
            r
        );
    })(T);
    let q = !1;
    document.getElementById('pauseButton').onclick = () => {
        q = !q;
    };
    var W = document.getElementById('myCanvas').getContext('2d');
    const G = 600,
        J = 800,
        Q = document.getElementById('wastedOverlay'),
        V = document.getElementById('playAgainText'),
        X = document.getElementById('angle'),
        Z = document.getElementById('acc'),
        $ = document.getElementById('points'),
        tt = document.getElementById('finalPoints');
    let et = [],
        rt = 0,
        nt = {};
    const ot = { faster: !1, slower: !1, left: !1, right: !1 };
    let it = [];
    const ct = () => {
            (q = !1),
                (it = [
                    {
                        x: 1,
                        y: 1,
                        h: 100,
                        w: 50,
                        dx: 0.4,
                        dy: 0.8,
                        color: 'red',
                    },
                    {
                        x: 580,
                        y: 20,
                        h: 50,
                        w: 50,
                        dx: 0.6,
                        dy: 0.4,
                        color: 'red',
                    },
                    {
                        x: 700,
                        y: 200,
                        h: 70,
                        w: 90,
                        dx: -0.1,
                        dy: -0.1,
                        color: 'red',
                    },
                    {
                        x: 400,
                        y: 400,
                        h: 50,
                        w: 50,
                        dx: 1,
                        dy: -1,
                        color: 'red',
                    },
                    {
                        x: 500,
                        y: 100,
                        h: 30,
                        w: 150,
                        dx: 0.8,
                        dy: -0.6,
                        color: 'red',
                    },
                    {
                        x: 150,
                        y: 400,
                        h: 80,
                        w: 20,
                        dx: -0.9,
                        dy: 0.3,
                        color: 'red',
                    },
                    {
                        x: 650,
                        y: 500,
                        h: 50,
                        w: 50,
                        dx: 1,
                        dy: -0.95,
                        color: 'red',
                    },
                ]),
                (nt = { x: 400, y: 300, r: 15, angle: 0, acc: 0 }),
                (rt = 0),
                (et = []);
        },
        ut = () => {
            ct(), (Q.style.display = 'none'), (q = !1);
        };
    (V.onclick = ut),
        document.addEventListener('keydown', ({ code: t }) => {
            console.log(t),
                ('KeyW' !== t && 'ArrowUp' !== t) || (ot.faster = !0),
                ('KeyS' !== t && 'ArrowDown' !== t) || (ot.slower = !0),
                ('KeyA' !== t && 'ArrowLeft' !== t) || (ot.left = !0),
                ('KeyD' !== t && 'ArrowRight' !== t) || (ot.right = !0),
                'Space' === t && ut();
        }),
        document.addEventListener('keyup', ({ code: t }) => {
            ('KeyW' !== t && 'ArrowUp' !== t) || (ot.faster = !1),
                ('KeyS' !== t && 'ArrowDown' !== t) || (ot.slower = !1),
                ('KeyA' !== t && 'ArrowLeft' !== t) || (ot.left = !1),
                ('KeyD' !== t && 'ArrowRight' !== t) || (ot.right = !1);
        });
    const at = (t, e) => {
            var r = Math.abs(t.x - e.x - e.w / 2),
                n = Math.abs(t.y - e.y - e.h / 2);
            if (r > e.w / 2 + t.r) return !1;
            if (n > e.h / 2 + t.r) return !1;
            if (r <= e.w / 2) return !0;
            if (n <= e.h / 2) return !0;
            var o = r - e.w / 2,
                i = n - e.h / 2;
            return o * o + i * i <= t.r * t.r;
        },
        st = (t, e, r, n, o) => {
            W.beginPath(),
                W.rect(Math.round(t), Math.round(e), r, n),
                (W.fillStyle = o),
                W.fill(),
                W.closePath();
        };
    function lt(t, e) {
        return (
            (t = Math.ceil(t)),
            (e = Math.floor(e)),
            Math.floor(Math.random() * (e - t) + t)
        );
    }
    const ft = () => {
        q ||
            (W.clearRect(0, 0, J, G),
            et.forEach((t, e) => {
                at(nt, t) && (et.splice(e, 1), (rt += 100));
            }),
            it.some((t) => at(nt, t)) &&
                ((Q.style.display = 'block'), (q = !0)),
            (() => {
                const t = { angle: nt.angle, acc: nt.acc };
                ot.faster ? (t.acc = t.acc + 0.1) : (t.acc = t.acc - 0.01),
                    ot.slower && (t.acc = t.acc - 0.05),
                    ot.left && (t.angle = nt.angle - 1.5),
                    ot.right && (t.angle = nt.angle + 1.5),
                    t.angle > 360 && (t.angle = t.angle - 360),
                    t.angle < 0 && (t.angle = t.angle + 360),
                    t.acc <= 0 && (t.acc = 0),
                    t.acc >= 3 && (t.acc = 3),
                    (nt.angle = t.angle),
                    (nt.acc = t.acc);
            })(),
            (() => {
                const t = { x: nt.x, y: nt.y },
                    e = nt.acc * Math.sin((2 * Math.PI * nt.angle) / 360),
                    r = nt.acc * Math.cos((2 * Math.PI * nt.angle) / 360);
                (t.x = nt.x + e),
                    (t.y = nt.y - r),
                    t.x - nt.r < 0 && (t.x = 0 + nt.r),
                    t.x + nt.r > J && (t.x = J - nt.r),
                    t.y - nt.r < 0 && (t.y = 0 + nt.r),
                    t.y + nt.r > G && (t.y = G - nt.r),
                    (nt.x = t.x),
                    (nt.y = t.y);
            })(),
            (() => {
                (() => {
                    const t = it.map((t, e) => {
                        const r = [...it];
                        delete r[e];
                        const n = { ...t };
                        let o = !1;
                        return (
                            (n.x + n.w >= J || n.x <= 0) &&
                                ((n.dx = -n.dx), (o = !0)),
                            (n.y + n.h >= G || n.y <= 0) &&
                                ((n.dy = -n.dy), (o = !0)),
                            o ||
                                (r.forEach((t) => {
                                    n.x + n.w >= t.x &&
                                        n.x <= t.x + t.w &&
                                        Math.abs(n.y - (t.y + t.h)) <= 1 &&
                                        (n.dy = t.dy);
                                }),
                                r.forEach((t) => {
                                    n.x + n.w >= t.x &&
                                        n.x <= t.x + t.w &&
                                        Math.abs(n.y + n.h - t.y) <= 1 &&
                                        (n.dy = t.dy);
                                }),
                                r.forEach((t) => {
                                    n.y + n.h >= t.y &&
                                        n.y <= t.y + t.h &&
                                        Math.abs(n.x + n.w - t.x) <= 1 &&
                                        (n.dx = t.dx);
                                }),
                                r.some((t) => {
                                    n.y + n.h >= t.y &&
                                        n.y <= t.y + t.h &&
                                        Math.abs(n.x - (t.x + t.w)) <= 1 &&
                                        (n.dx = t.dx);
                                })),
                            n
                        );
                    });
                    it = t;
                })();
                const t = it.map((t) => ({
                    ...t,
                    x: t.x + t.dx,
                    y: t.y + t.dy,
                }));
                it = t;
            })(),
            (rt -= 0.01),
            ((t, e, r, n, o) => {
                W.beginPath(),
                    W.arc(t, e, r, 0, 2 * Math.PI, !1),
                    (W.fillStyle = o),
                    W.fill(),
                    W.closePath(),
                    W.beginPath(),
                    (W.strokeStyle = 'white'),
                    W.moveTo(t, e);
                const i = r * Math.sin((2 * Math.PI * n) / 360),
                    c = r * Math.cos((2 * Math.PI * n) / 360);
                W.lineTo(t + i, e - c), W.stroke();
            })(nt.x, nt.y, nt.r, nt.angle, 'blue'),
            et.forEach((t) => {
                st(t.x, t.y, t.w, t.h, 'orange');
            }),
            it.forEach((t) => {
                st(t.x, t.y, t.w, t.h, t.color);
            }),
            (X.textContent = nt.angle + ' degrees'),
            (Z.textContent = nt.acc.toFixed(2) + ' speed'),
            (tt.textContent = rt.toFixed(0)),
            ($.textContent = rt.toFixed(0)));
    };
    var ht, dt, yt, pt;
    ct(),
        setInterval(() => {
            if (et.length < 3) {
                const t = { x: lt(10, 790), y: lt(10, 590), w: 10, h: 10 };
                et.push(t);
            }
        }, 3e3),
        (void 0 === (ht = 10) && (ht = 0),
        void 0 === dt && (dt = x),
        ht < 0 && (ht = 0),
        (function (t, e, r) {
            void 0 === t && (t = 0), void 0 === r && (r = m);
            var n,
                o = -1;
            return (
                null != e && ((n = e) && u(n.schedule) ? (r = e) : (o = e)),
                new K(function (e) {
                    var n = (function (t) {
                        return t instanceof Date && !isNaN(t);
                    })(t)
                        ? +t - r.now()
                        : t;
                    n < 0 && (n = 0);
                    var i = 0;
                    return r.schedule(function () {
                        e.closed ||
                            (e.next(i++),
                            0 <= o ? this.schedule(void 0, o) : e.complete());
                    }, n);
                })
            );
        })(ht, ht, dt)).pipe(
            ((yt = () => {
                ft();
            }),
            (pt = function (t, e) {
                var r = null,
                    n = !1,
                    o = function () {
                        return n && !r && e.complete();
                    };
                t.subscribe(
                    H(
                        e,
                        function (t) {
                            null == r || r.unsubscribe(),
                                R(yt()).subscribe(
                                    (r = H(
                                        e,
                                        function (t) {
                                            return e.next(t);
                                        },
                                        function () {
                                            (r = null), o();
                                        }
                                    ))
                                );
                        },
                        function () {
                            (n = !0), o();
                        }
                    )
                );
            }),
            function (t) {
                if (
                    (function (t) {
                        return u(null == t ? void 0 : t.lift);
                    })(t)
                )
                    return t.lift(function (t) {
                        try {
                            return pt(t, this);
                        } catch (t) {
                            this.error(t);
                        }
                    });
                throw new TypeError('Unable to lift unknown Observable type');
            })
        );
})();
