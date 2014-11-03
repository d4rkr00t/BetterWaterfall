!function () {
    function n(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0;
    }
    function t(n) {
        return null != n && !isNaN(n);
    }
    function e(n) {
        return {
            left: function (t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) < 0 ? r = i + 1 : u = i;
                }
                return r;
            },
            right: function (t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) > 0 ? u = i : r = i + 1;
                }
                return r;
            }
        };
    }
    function r(n) {
        return n.length;
    }
    function u(n) {
        for (var t = 1; n * t % 1;)
            t *= 10;
        return t;
    }
    function i(n, t) {
        try {
            for (var e in t)
                Object.defineProperty(n.prototype, e, {
                    value: t[e],
                    enumerable: !1
                });
        } catch (r) {
            n.prototype = t;
        }
    }
    function o() {
    }
    function a(n) {
        return oa + n in this;
    }
    function c(n) {
        return n = oa + n, n in this && delete this[n];
    }
    function l() {
        var n = [];
        return this.forEach(function (t) {
            n.push(t);
        }), n;
    }
    function s() {
        var n = 0;
        for (var t in this)
            t.charCodeAt(0) === aa && ++n;
        return n;
    }
    function f() {
        for (var n in this)
            if (n.charCodeAt(0) === aa)
                return !1;
        return !0;
    }
    function h() {
    }
    function g(n, t, e) {
        return function () {
            var r = e.apply(t, arguments);
            return r === t ? n : r;
        };
    }
    function p(n, t) {
        if (t in n)
            return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e = 0, r = ca.length; r > e; ++e) {
            var u = ca[e] + t;
            if (u in n)
                return u;
        }
    }
    function v() {
    }
    function d() {
    }
    function m(n) {
        function t() {
            for (var t, r = e, u = -1, i = r.length; ++u < i;)
                (t = r[u].on) && t.apply(this, arguments);
            return n;
        }
        var e = [], r = new o();
        return t.on = function (t, u) {
            var i, o = r.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, { on: u })), n);
        }, t;
    }
    function y() {
        Vo.event.preventDefault();
    }
    function x() {
        for (var n, t = Vo.event; n = t.sourceEvent;)
            t = n;
        return t;
    }
    function M(n) {
        for (var t = new d(), e = 0, r = arguments.length; ++e < r;)
            t[arguments[e]] = m(t);
        return t.of = function (e, r) {
            return function (u) {
                try {
                    var i = u.sourceEvent = Vo.event;
                    u.target = n, Vo.event = u, t[u.type].apply(e, r);
                } finally {
                    Vo.event = i;
                }
            };
        }, t;
    }
    function _(n) {
        return sa(n, va), n;
    }
    function b(n) {
        return 'function' == typeof n ? n : function () {
            return fa(n, this);
        };
    }
    function w(n) {
        return 'function' == typeof n ? n : function () {
            return ha(n, this);
        };
    }
    function S(n, t) {
        function e() {
            this.removeAttribute(n);
        }
        function r() {
            this.removeAttributeNS(n.space, n.local);
        }
        function u() {
            this.setAttribute(n, t);
        }
        function i() {
            this.setAttributeNS(n.space, n.local, t);
        }
        function o() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
        }
        function a() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
        }
        return n = Vo.ns.qualify(n), null == t ? n.local ? r : e : 'function' == typeof t ? n.local ? a : o : n.local ? i : u;
    }
    function k(n) {
        return n.trim().replace(/\s+/g, ' ');
    }
    function E(n) {
        return new RegExp('(?:^|\\s+)' + Vo.requote(n) + '(?:\\s+|$)', 'g');
    }
    function A(n) {
        return (n + '').trim().split(/^|\s+/);
    }
    function C(n, t) {
        function e() {
            for (var e = -1; ++e < u;)
                n[e](this, t);
        }
        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < u;)
                n[e](this, r);
        }
        n = A(n).map(N);
        var u = n.length;
        return 'function' == typeof t ? r : e;
    }
    function N(n) {
        var t = E(n);
        return function (e, r) {
            if (u = e.classList)
                return r ? u.add(n) : u.remove(n);
            var u = e.getAttribute('class') || '';
            r ? (t.lastIndex = 0, t.test(u) || e.setAttribute('class', k(u + ' ' + n))) : e.setAttribute('class', k(u.replace(t, ' ')));
        };
    }
    function z(n, t, e) {
        function r() {
            this.style.removeProperty(n);
        }
        function u() {
            this.style.setProperty(n, t, e);
        }
        function i() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
        }
        return null == t ? r : 'function' == typeof t ? i : u;
    }
    function L(n, t) {
        function e() {
            delete this[n];
        }
        function r() {
            this[n] = t;
        }
        function u() {
            var e = t.apply(this, arguments);
            null == e ? delete this[n] : this[n] = e;
        }
        return null == t ? e : 'function' == typeof t ? u : r;
    }
    function T(n) {
        return 'function' == typeof n ? n : (n = Vo.ns.qualify(n)).local ? function () {
            return this.ownerDocument.createElementNS(n.space, n.local);
        } : function () {
            return this.ownerDocument.createElementNS(this.namespaceURI, n);
        };
    }
    function q(n) {
        return { __data__: n };
    }
    function R(n) {
        return function () {
            return pa(this, n);
        };
    }
    function D(t) {
        return arguments.length || (t = n), function (n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
        };
    }
    function P(n, t) {
        for (var e = 0, r = n.length; r > e; e++)
            for (var u, i = n[e], o = 0, a = i.length; a > o; o++)
                (u = i[o]) && t(u, o, e);
        return n;
    }
    function U(n) {
        return sa(n, ma), n;
    }
    function j(n) {
        var t, e;
        return function (r, u, i) {
            var o, a = n[i].update, c = a.length;
            for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
            return o;
        };
    }
    function H() {
        var n = this.__transition__;
        n && ++n.active;
    }
    function F(n, t, e) {
        function r() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$), delete this[o]);
        }
        function u() {
            var u = c(t, $o(arguments));
            r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t;
        }
        function i() {
            var t, e = new RegExp('^__on([^.]+)' + Vo.requote(n) + '$');
            for (var r in this)
                if (t = r.match(e)) {
                    var u = this[r];
                    this.removeEventListener(t[1], u, u.$), delete this[r];
                }
        }
        var o = '__on' + n, a = n.indexOf('.'), c = O;
        a > 0 && (n = n.slice(0, a));
        var l = xa.get(n);
        return l && (n = l, c = Y), a ? t ? u : r : t ? v : i;
    }
    function O(n, t) {
        return function (e) {
            var r = Vo.event;
            Vo.event = e, t[0] = this.__data__;
            try {
                n.apply(this, t);
            } finally {
                Vo.event = r;
            }
        };
    }
    function Y(n, t) {
        var e = O(n, t);
        return function (n) {
            var t = this, r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n);
        };
    }
    function I() {
        var n = '.dragsuppress-' + ++_a, t = 'click' + n, e = Vo.select(Jo).on('touchmove' + n, y).on('dragstart' + n, y).on('selectstart' + n, y);
        if (Ma) {
            var r = Wo.style, u = r[Ma];
            r[Ma] = 'none';
        }
        return function (i) {
            function o() {
                e.on(t, null);
            }
            e.on(n, null), Ma && (r[Ma] = u), i && (e.on(t, function () {
                y(), o();
            }, !0), setTimeout(o, 0));
        };
    }
    function Z(n, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > ba && (Jo.scrollX || Jo.scrollY)) {
                e = Vo.select('body').append('svg').style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: 'none'
                }, 'important');
                var u = e[0][0].getScreenCTM();
                ba = !(u.f || u.e), e.remove();
            }
            return ba ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [
                r.x,
                r.y
            ];
        }
        var i = n.getBoundingClientRect();
        return [
            t.clientX - i.left - n.clientLeft,
            t.clientY - i.top - n.clientTop
        ];
    }
    function V() {
        return Vo.event.changedTouches[0].identifier;
    }
    function X() {
        return Vo.event.target;
    }
    function $() {
        return Jo;
    }
    function B(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0;
    }
    function W(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
    }
    function J(n) {
        return n > 1 ? 0 : -1 > n ? wa : Math.acos(n);
    }
    function G(n) {
        return n > 1 ? ka : -1 > n ? -ka : Math.asin(n);
    }
    function K(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2;
    }
    function Q(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2;
    }
    function nt(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1);
    }
    function tt(n) {
        return (n = Math.sin(n / 2)) * n;
    }
    function et() {
    }
    function rt(n, t, e) {
        return this instanceof rt ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof rt ? new rt(n.h, n.s, n.l) : mt('' + n, yt, rt) : new rt(n, t, e);
    }
    function ut(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i;
        }
        function u(n) {
            return Math.round(255 * r(n));
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = 0.5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, new gt(u(n + 120), u(n), u(n - 120));
    }
    function it(n, t, e) {
        return this instanceof it ? (this.h = +n, this.c = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof it ? new it(n.h, n.c, n.l) : n instanceof at ? lt(n.l, n.a, n.b) : lt((n = xt((n = Vo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new it(n, t, e);
    }
    function ot(n, t, e) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new at(e, Math.cos(n *= Ca) * t, Math.sin(n) * t);
    }
    function at(n, t, e) {
        return this instanceof at ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof at ? new at(n.l, n.a, n.b) : n instanceof it ? ot(n.l, n.c, n.h) : xt((n = gt(n)).r, n.g, n.b) : new at(n, t, e);
    }
    function ct(n, t, e) {
        var r = (n + 16) / 116, u = r + t / 500, i = r - e / 200;
        return u = st(u) * Ha, r = st(r) * Fa, i = st(i) * Oa, new gt(ht(3.2404542 * u - 1.5371385 * r - 0.4985314 * i), ht(-0.969266 * u + 1.8760108 * r + 0.041556 * i), ht(0.0556434 * u - 0.2040259 * r + 1.0572252 * i));
    }
    function lt(n, t, e) {
        return n > 0 ? new it(Math.atan2(e, t) * Na, Math.sqrt(t * t + e * e), n) : new it(0 / 0, 0 / 0, n);
    }
    function st(n) {
        return n > 0.206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
    }
    function ft(n) {
        return n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
    }
    function ht(n) {
        return Math.round(255 * (0.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055));
    }
    function gt(n, t, e) {
        return this instanceof gt ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof gt ? new gt(n.r, n.g, n.b) : mt('' + n, gt, ut) : new gt(n, t, e);
    }
    function pt(n) {
        return new gt(n >> 16, 255 & n >> 8, 255 & n);
    }
    function vt(n) {
        return pt(n) + '';
    }
    function dt(n) {
        return 16 > n ? '0' + Math.max(0, n).toString(16) : Math.min(255, n).toString(16);
    }
    function mt(n, t, e) {
        var r, u, i, o = 0, a = 0, c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n))
            switch (u = r[2].split(','), r[1]) {
            case 'hsl':
                return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case 'rgb':
                return t(_t(u[0]), _t(u[1]), _t(u[2]));
            }
        return (i = Za.get(n)) ? t(i.r, i.g, i.b) : (null == n || '#' !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c));
    }
    function yt(n, t, e) {
        var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - i, c = (o + i) / 2;
        return a ? (u = 0.5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), new rt(r, u, c);
    }
    function xt(n, t, e) {
        n = Mt(n), t = Mt(t), e = Mt(e);
        var r = ft((0.4124564 * n + 0.3575761 * t + 0.1804375 * e) / Ha), u = ft((0.2126729 * n + 0.7151522 * t + 0.072175 * e) / Fa), i = ft((0.0193339 * n + 0.119192 * t + 0.9503041 * e) / Oa);
        return at(116 * u - 16, 500 * (r - u), 200 * (u - i));
    }
    function Mt(n) {
        return (n /= 255) <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
    }
    function _t(n) {
        var t = parseFloat(n);
        return '%' === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
    }
    function bt(n) {
        return 'function' == typeof n ? n : function () {
            return n;
        };
    }
    function wt(n) {
        return n;
    }
    function St(n) {
        return function (t, e, r) {
            return 2 === arguments.length && 'function' == typeof e && (r = e, e = null), kt(t, e, n, r);
        };
    }
    function kt(n, t, e, r) {
        function u() {
            var n, t = c.status;
            if (!t && At(c) || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(i, c);
                } catch (r) {
                    return o.error.call(i, r), void 0;
                }
                o.load.call(i, n);
            } else
                o.error.call(i, c);
        }
        var i = {}, o = Vo.dispatch('beforesend', 'progress', 'load', 'error'), a = {}, c = new XMLHttpRequest(), l = null;
        return !Jo.XDomainRequest || 'withCredentials' in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest()), 'onload' in c ? c.onload = c.onerror = u : c.onreadystatechange = function () {
            c.readyState > 3 && u();
        }, c.onprogress = function (n) {
            var t = Vo.event;
            Vo.event = n;
            try {
                o.progress.call(i, c);
            } finally {
                Vo.event = t;
            }
        }, i.header = function (n, t) {
            return n = (n + '').toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + '', i);
        }, i.mimeType = function (n) {
            return arguments.length ? (t = null == n ? null : n + '', i) : t;
        }, i.responseType = function (n) {
            return arguments.length ? (l = n, i) : l;
        }, i.response = function (n) {
            return e = n, i;
        }, [
            'get',
            'post'
        ].forEach(function (n) {
            i[n] = function () {
                return i.send.apply(i, [n].concat($o(arguments)));
            };
        }), i.send = function (e, r, u) {
            if (2 === arguments.length && 'function' == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || 'accept' in a || (a.accept = t + ',*/*'), c.setRequestHeader)
                for (var s in a)
                    c.setRequestHeader(s, a[s]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on('error', u).on('load', function (n) {
                u(null, n);
            }), o.beforesend.call(i, c), c.send(null == r ? null : r), i;
        }, i.abort = function () {
            return c.abort(), i;
        }, Vo.rebind(i, o, 'on'), null == r ? i : i.get(Et(r));
    }
    function Et(n) {
        return 1 === n.length ? function (t, e) {
            n(null == t ? e : null);
        } : n;
    }
    function At(n) {
        var t = n.responseType;
        return t && 'text' !== t ? n.response : n.responseText;
    }
    function Ct() {
        var n = Nt(), t = zt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(Ba), Ba = setTimeout(Ct, t)), $a = 0) : ($a = 1, Ja(Ct));
    }
    function Nt() {
        var n = Date.now();
        for (Wa = Va; Wa;)
            n >= Wa.t && (Wa.f = Wa.c(n - Wa.t)), Wa = Wa.n;
        return n;
    }
    function zt() {
        for (var n, t = Va, e = 1 / 0; t;)
            t.f ? t = n ? n.n = t.n : Va = t.n : (t.t < e && (e = t.t), t = (n = t).n);
        return Xa = n, e;
    }
    function Lt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
    }
    function Tt(n, t) {
        var e = Math.pow(10, 3 * ia(8 - t));
        return {
            scale: t > 8 ? function (n) {
                return n / e;
            } : function (n) {
                return n * e;
            },
            symbol: n
        };
    }
    function qt(n) {
        var t = n.decimal, e = n.thousands, r = n.grouping, u = n.currency, i = r ? function (n) {
                for (var t = n.length, u = [], i = 0, o = r[0]; o > 0 && t > 0;)
                    u.push(n.substring(t -= o, t + o)), o = r[i = (i + 1) % r.length];
                return u.reverse().join(e);
            } : wt;
        return function (n) {
            var e = Ka.exec(n), r = e[1] || ' ', o = e[2] || '>', a = e[3] || '', c = e[4] || '', l = e[5], s = +e[6], f = e[7], h = e[8], g = e[9], p = 1, v = '', d = '', m = !1;
            switch (h && (h = +h.substring(1)), (l || '0' === r && '=' === o) && (l = r = '0', o = '=', f && (s -= Math.floor((s - 1) / 4))), g) {
            case 'n':
                f = !0, g = 'g';
                break;
            case '%':
                p = 100, d = '%', g = 'f';
                break;
            case 'p':
                p = 100, d = '%', g = 'r';
                break;
            case 'b':
            case 'o':
            case 'x':
            case 'X':
                '#' === c && (v = '0' + g.toLowerCase());
            case 'c':
            case 'd':
                m = !0, h = 0;
                break;
            case 's':
                p = -1, g = 'r';
            }
            '$' === c && (v = u[0], d = u[1]), 'r' != g || h || (g = 'g'), null != h && ('g' == g ? h = Math.max(1, Math.min(21, h)) : ('e' == g || 'f' == g) && (h = Math.max(0, Math.min(20, h)))), g = Qa.get(g) || Rt;
            var y = l && f;
            return function (n) {
                var e = d;
                if (m && n % 1)
                    return '';
                var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, '-') : a;
                if (0 > p) {
                    var c = Vo.formatPrefix(n, h);
                    n = c.scale(n), e = c.symbol + d;
                } else
                    n *= p;
                n = g(n, h);
                var x = n.lastIndexOf('.'), M = 0 > x ? n : n.substring(0, x), _ = 0 > x ? '' : t + n.substring(x + 1);
                !l && f && (M = i(M));
                var b = v.length + M.length + _.length + (y ? 0 : u.length), w = s > b ? new Array(b = s - b + 1).join(r) : '';
                return y && (M = i(w + M)), u += v, n = M + _, ('<' === o ? u + n + w : '>' === o ? w + u + n : '^' === o ? w.substring(0, b >>= 1) + u + n + w.substring(b) : u + (y ? n : w + n)) + e;
            };
        };
    }
    function Rt(n) {
        return n + '';
    }
    function Dt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
    }
    function Pt(n, t, e) {
        function r(t) {
            var e = n(t), r = i(e, 1);
            return r - t > t - e ? e : r;
        }
        function u(e) {
            return t(e = n(new tc(e - 1)), 1), e;
        }
        function i(n, e) {
            return t(n = new tc(+n), e), n;
        }
        function o(n, r, i) {
            var o = u(n), a = [];
            if (i > 1)
                for (; r > o;)
                    e(o) % i || a.push(new Date(+o)), t(o, 1);
            else
                for (; r > o;)
                    a.push(new Date(+o)), t(o, 1);
            return a;
        }
        function a(n, t, e) {
            try {
                tc = Dt;
                var r = new Dt();
                return r._ = n, o(r, t, e);
            } finally {
                tc = Date;
            }
        }
        n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
        var c = n.utc = Ut(n);
        return c.floor = c, c.round = Ut(r), c.ceil = Ut(u), c.offset = Ut(i), c.range = a, n;
    }
    function Ut(n) {
        return function (t, e) {
            try {
                tc = Dt;
                var r = new Dt();
                return r._ = t, n(r, e)._;
            } finally {
                tc = Date;
            }
        };
    }
    function jt(n) {
        function t(n) {
            function t(t) {
                for (var e, u, i, o = [], a = -1, c = 0; ++a < r;)
                    37 === n.charCodeAt(a) && (o.push(n.slice(c, a)), null != (u = rc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = C[e]) && (e = i(t, null == u ? 'e' === e ? ' ' : '0' : u)), o.push(e), c = a + 1);
                return o.push(n.slice(c, a)), o.join('');
            }
            var r = n.length;
            return t.parse = function (t) {
                var r = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    }, u = e(r, n, t, 0);
                if (u != t.length)
                    return null;
                'p' in r && (r.H = r.H % 12 + 12 * r.p);
                var i = null != r.Z && tc !== Dt, o = new (i ? Dt : tc)();
                return 'j' in r ? o.setFullYear(r.y, 0, r.j) : 'w' in r && ('W' in r || 'U' in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, 'W' in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (0 | r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o;
            }, t.toString = function () {
                return n;
            }, t;
        }
        function e(n, t, e, r) {
            for (var u, i, o, a = 0, c = t.length, l = e.length; c > a;) {
                if (r >= l)
                    return -1;
                if (u = t.charCodeAt(a++), 37 === u) {
                    if (o = t.charAt(a++), i = N[o in rc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0)
                        return -1;
                } else if (u != e.charCodeAt(r++))
                    return -1;
            }
            return r;
        }
        function r(n, t, e) {
            b.lastIndex = 0;
            var r = b.exec(t.slice(e));
            return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function u(n, t, e) {
            M.lastIndex = 0;
            var r = M.exec(t.slice(e));
            return r ? (n.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function i(n, t, e) {
            E.lastIndex = 0;
            var r = E.exec(t.slice(e));
            return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function o(n, t, e) {
            S.lastIndex = 0;
            var r = S.exec(t.slice(e));
            return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function a(n, t, r) {
            return e(n, C.c.toString(), t, r);
        }
        function c(n, t, r) {
            return e(n, C.x.toString(), t, r);
        }
        function l(n, t, r) {
            return e(n, C.X.toString(), t, r);
        }
        function s(n, t, e) {
            var r = x.get(t.slice(e, e += 2).toLowerCase());
            return null == r ? -1 : (n.p = r, e);
        }
        var f = n.dateTime, h = n.date, g = n.time, p = n.periods, v = n.days, d = n.shortDays, m = n.months, y = n.shortMonths;
        t.utc = function (n) {
            function e(n) {
                try {
                    tc = Dt;
                    var t = new tc();
                    return t._ = n, r(t);
                } finally {
                    tc = Date;
                }
            }
            var r = t(n);
            return e.parse = function (n) {
                try {
                    tc = Dt;
                    var t = r.parse(n);
                    return t && t._;
                } finally {
                    tc = Date;
                }
            }, e.toString = r.toString, e;
        }, t.multi = t.utc.multi = ue;
        var x = Vo.map(), M = Ft(v), _ = Ot(v), b = Ft(d), w = Ot(d), S = Ft(m), k = Ot(m), E = Ft(y), A = Ot(y);
        p.forEach(function (n, t) {
            x.set(n.toLowerCase(), t);
        });
        var C = {
                a: function (n) {
                    return d[n.getDay()];
                },
                A: function (n) {
                    return v[n.getDay()];
                },
                b: function (n) {
                    return y[n.getMonth()];
                },
                B: function (n) {
                    return m[n.getMonth()];
                },
                c: t(f),
                d: function (n, t) {
                    return Ht(n.getDate(), t, 2);
                },
                e: function (n, t) {
                    return Ht(n.getDate(), t, 2);
                },
                H: function (n, t) {
                    return Ht(n.getHours(), t, 2);
                },
                I: function (n, t) {
                    return Ht(n.getHours() % 12 || 12, t, 2);
                },
                j: function (n, t) {
                    return Ht(1 + nc.dayOfYear(n), t, 3);
                },
                L: function (n, t) {
                    return Ht(n.getMilliseconds(), t, 3);
                },
                m: function (n, t) {
                    return Ht(n.getMonth() + 1, t, 2);
                },
                M: function (n, t) {
                    return Ht(n.getMinutes(), t, 2);
                },
                p: function (n) {
                    return p[+(n.getHours() >= 12)];
                },
                S: function (n, t) {
                    return Ht(n.getSeconds(), t, 2);
                },
                U: function (n, t) {
                    return Ht(nc.sundayOfYear(n), t, 2);
                },
                w: function (n) {
                    return n.getDay();
                },
                W: function (n, t) {
                    return Ht(nc.mondayOfYear(n), t, 2);
                },
                x: t(h),
                X: t(g),
                y: function (n, t) {
                    return Ht(n.getFullYear() % 100, t, 2);
                },
                Y: function (n, t) {
                    return Ht(n.getFullYear() % 10000, t, 4);
                },
                Z: ee,
                '%': function () {
                    return '%';
                }
            }, N = {
                a: r,
                A: u,
                b: i,
                B: o,
                c: a,
                d: Jt,
                e: Jt,
                H: Kt,
                I: Kt,
                j: Gt,
                L: te,
                m: Wt,
                M: Qt,
                p: s,
                S: ne,
                U: It,
                w: Yt,
                W: Zt,
                x: c,
                X: l,
                y: Xt,
                Y: Vt,
                Z: $t,
                '%': re
            };
        return t;
    }
    function Ht(n, t, e) {
        var r = 0 > n ? '-' : '', u = (r ? -n : n) + '', i = u.length;
        return r + (e > i ? new Array(e - i + 1).join(t) + u : u);
    }
    function Ft(n) {
        return new RegExp('^(?:' + n.map(Vo.requote).join('|') + ')', 'i');
    }
    function Ot(n) {
        for (var t = new o(), e = -1, r = n.length; ++e < r;)
            t.set(n[e].toLowerCase(), e);
        return t;
    }
    function Yt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 1));
        return r ? (n.w = +r[0], e + r[0].length) : -1;
    }
    function It(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e));
        return r ? (n.U = +r[0], e + r[0].length) : -1;
    }
    function Zt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e));
        return r ? (n.W = +r[0], e + r[0].length) : -1;
    }
    function Vt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 4));
        return r ? (n.y = +r[0], e + r[0].length) : -1;
    }
    function Xt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 2));
        return r ? (n.y = Bt(+r[0]), e + r[0].length) : -1;
    }
    function $t(n, t, e) {
        return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1;
    }
    function Bt(n) {
        return n + (n > 68 ? 1900 : 2000);
    }
    function Wt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 2));
        return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
    }
    function Jt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 2));
        return r ? (n.d = +r[0], e + r[0].length) : -1;
    }
    function Gt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 3));
        return r ? (n.j = +r[0], e + r[0].length) : -1;
    }
    function Kt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 2));
        return r ? (n.H = +r[0], e + r[0].length) : -1;
    }
    function Qt(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 2));
        return r ? (n.M = +r[0], e + r[0].length) : -1;
    }
    function ne(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 2));
        return r ? (n.S = +r[0], e + r[0].length) : -1;
    }
    function te(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.slice(e, e + 3));
        return r ? (n.L = +r[0], e + r[0].length) : -1;
    }
    function ee(n) {
        var t = n.getTimezoneOffset(), e = t > 0 ? '-' : '+', r = 0 | ia(t) / 60, u = ia(t) % 60;
        return e + Ht(r, '0', 2) + Ht(u, '0', 2);
    }
    function re(n, t, e) {
        ic.lastIndex = 0;
        var r = ic.exec(t.slice(e, e + 1));
        return r ? e + r[0].length : -1;
    }
    function ue(n) {
        for (var t = n.length, e = -1; ++e < t;)
            n[e][0] = this(n[e][0]);
        return function (t) {
            for (var e = 0, r = n[e]; !r[1](t);)
                r = n[++e];
            return r[0](t);
        };
    }
    function ie() {
    }
    function oe(n, t, e) {
        var r = e.s = n + t, u = r - n, i = r - u;
        e.t = n - i + (t - u);
    }
    function ae(n, t) {
        n && lc.hasOwnProperty(n.type) && lc[n.type](n, t);
    }
    function ce(n, t, e) {
        var r, u = -1, i = n.length - e;
        for (t.lineStart(); ++u < i;)
            r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd();
    }
    function le(n, t) {
        var e = -1, r = n.length;
        for (t.polygonStart(); ++e < r;)
            ce(n[e], t, 1);
        t.polygonEnd();
    }
    function se() {
        function n(n, t) {
            n *= Ca, t = t * Ca / 2 + wa / 4;
            var e = n - r, o = e >= 0 ? 1 : -1, a = o * e, c = Math.cos(t), l = Math.sin(t), s = i * l, f = u * c + s * Math.cos(a), h = s * o * Math.sin(a);
            fc.add(Math.atan2(h, f)), r = n, u = c, i = l;
        }
        var t, e, r, u, i;
        hc.point = function (o, a) {
            hc.point = n, r = (t = o) * Ca, u = Math.cos(a = (e = a) * Ca / 2 + wa / 4), i = Math.sin(a);
        }, hc.lineEnd = function () {
            n(t, e);
        };
    }
    function fe(n) {
        var t = n[0], e = n[1], r = Math.cos(e);
        return [
            r * Math.cos(t),
            r * Math.sin(t),
            Math.sin(e)
        ];
    }
    function he(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
    }
    function ge(n, t) {
        return [
            n[1] * t[2] - n[2] * t[1],
            n[2] * t[0] - n[0] * t[2],
            n[0] * t[1] - n[1] * t[0]
        ];
    }
    function pe(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2];
    }
    function ve(n, t) {
        return [
            n[0] * t,
            n[1] * t,
            n[2] * t
        ];
    }
    function de(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t, n[1] /= t, n[2] /= t;
    }
    function me(n) {
        return [
            Math.atan2(n[1], n[0]),
            G(n[2])
        ];
    }
    function ye(n, t) {
        return ia(n[0] - t[0]) < Ea && ia(n[1] - t[1]) < Ea;
    }
    function xe(n, t) {
        n *= Ca;
        var e = Math.cos(t *= Ca);
        Me(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
    }
    function Me(n, t, e) {
        ++gc, vc += (n - vc) / gc, dc += (t - dc) / gc, mc += (e - mc) / gc;
    }
    function _e() {
        function n(n, u) {
            n *= Ca;
            var i = Math.cos(u *= Ca), o = i * Math.cos(n), a = i * Math.sin(n), c = Math.sin(u), l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
            pc += l, yc += l * (t + (t = o)), xc += l * (e + (e = a)), Mc += l * (r + (r = c)), Me(t, e, r);
        }
        var t, e, r;
        Sc.point = function (u, i) {
            u *= Ca;
            var o = Math.cos(i *= Ca);
            t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Sc.point = n, Me(t, e, r);
        };
    }
    function be() {
        Sc.point = xe;
    }
    function we() {
        function n(n, t) {
            n *= Ca;
            var e = Math.cos(t *= Ca), o = e * Math.cos(n), a = e * Math.sin(n), c = Math.sin(t), l = u * c - i * a, s = i * o - r * c, f = r * a - u * o, h = Math.sqrt(l * l + s * s + f * f), g = r * o + u * a + i * c, p = h && -J(g) / h, v = Math.atan2(h, g);
            _c += p * l, bc += p * s, wc += p * f, pc += v, yc += v * (r + (r = o)), xc += v * (u + (u = a)), Mc += v * (i + (i = c)), Me(r, u, i);
        }
        var t, e, r, u, i;
        Sc.point = function (o, a) {
            t = o, e = a, Sc.point = n, o *= Ca;
            var c = Math.cos(a *= Ca);
            r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), Me(r, u, i);
        }, Sc.lineEnd = function () {
            n(t, e), Sc.lineEnd = be, Sc.point = xe;
        };
    }
    function Se() {
        return !0;
    }
    function ke(n, t, e, r, u) {
        var i = [], o = [];
        if (n.forEach(function (n) {
                if (!((t = n.length - 1) <= 0)) {
                    var t, e = n[0], r = n[t];
                    if (ye(e, r)) {
                        u.lineStart();
                        for (var a = 0; t > a; ++a)
                            u.point((e = n[a])[0], e[1]);
                        return u.lineEnd(), void 0;
                    }
                    var c = new Ae(e, n, null, !0), l = new Ae(e, null, c, !1);
                    c.o = l, i.push(c), o.push(l), c = new Ae(r, n, null, !1), l = new Ae(r, null, c, !0), c.o = l, i.push(c), o.push(l);
                }
            }), o.sort(t), Ee(i), Ee(o), i.length) {
            for (var a = 0, c = e, l = o.length; l > a; ++a)
                o[a].e = c = !c;
            for (var s, f, h = i[0];;) {
                for (var g = h, p = !0; g.v;)
                    if ((g = g.n) === h)
                        return;
                s = g.z, u.lineStart();
                do {
                    if (g.v = g.o.v = !0, g.e) {
                        if (p)
                            for (var a = 0, l = s.length; l > a; ++a)
                                u.point((f = s[a])[0], f[1]);
                        else
                            r(g.x, g.n.x, 1, u);
                        g = g.n;
                    } else {
                        if (p) {
                            s = g.p.z;
                            for (var a = s.length - 1; a >= 0; --a)
                                u.point((f = s[a])[0], f[1]);
                        } else
                            r(g.x, g.p.x, -1, u);
                        g = g.p;
                    }
                    g = g.o, s = g.z, p = !p;
                } while (!g.v);
                u.lineEnd();
            }
        }
    }
    function Ee(n) {
        if (t = n.length) {
            for (var t, e, r = 0, u = n[0]; ++r < t;)
                u.n = e = n[r], e.p = u, u = e;
            u.n = e = n[0], e.p = u;
        }
    }
    function Ae(n, t, e, r) {
        this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
    }
    function Ce(n, t, e, r) {
        return function (u, i) {
            function o(t, e) {
                var r = u(t, e);
                n(t = r[0], e = r[1]) && i.point(t, e);
            }
            function a(n, t) {
                var e = u(n, t);
                d.point(e[0], e[1]);
            }
            function c() {
                y.point = a, d.lineStart();
            }
            function l() {
                y.point = o, d.lineEnd();
            }
            function s(n, t) {
                v.push([
                    n,
                    t
                ]);
                var e = u(n, t);
                M.point(e[0], e[1]);
            }
            function f() {
                M.lineStart(), v = [];
            }
            function h() {
                s(v[0][0], v[0][1]), M.lineEnd();
                var n, t = M.clean(), e = x.buffer(), r = e.length;
                if (v.pop(), p.push(v), v = null, r)
                    if (1 & t) {
                        n = e[0];
                        var u, r = n.length - 1, o = -1;
                        if (r > 0) {
                            for (_ || (i.polygonStart(), _ = !0), i.lineStart(); ++o < r;)
                                i.point((u = n[o])[0], u[1]);
                            i.lineEnd();
                        }
                    } else
                        r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Ne));
            }
            var g, p, v, d = t(i), m = u.invert(r[0], r[1]), y = {
                    point: o,
                    lineStart: c,
                    lineEnd: l,
                    polygonStart: function () {
                        y.point = s, y.lineStart = f, y.lineEnd = h, g = [], p = [];
                    },
                    polygonEnd: function () {
                        y.point = o, y.lineStart = c, y.lineEnd = l, g = Vo.merge(g);
                        var n = De(m, p);
                        g.length ? (_ || (i.polygonStart(), _ = !0), ke(g, Le, n, e, i)) : n && (_ || (i.polygonStart(), _ = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), _ && (i.polygonEnd(), _ = !1), g = p = null;
                    },
                    sphere: function () {
                        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
                    }
                }, x = ze(), M = t(x), _ = !1;
            return y;
        };
    }
    function Ne(n) {
        return n.length > 1;
    }
    function ze() {
        var n, t = [];
        return {
            lineStart: function () {
                t.push(n = []);
            },
            point: function (t, e) {
                n.push([
                    t,
                    e
                ]);
            },
            lineEnd: v,
            buffer: function () {
                var e = t;
                return t = [], n = null, e;
            },
            rejoin: function () {
                t.length > 1 && t.push(t.pop().concat(t.shift()));
            }
        };
    }
    function Le(n, t) {
        return ((n = n.x)[0] < 0 ? n[1] - ka - Ea : ka - n[1]) - ((t = t.x)[0] < 0 ? t[1] - ka - Ea : ka - t[1]);
    }
    function Te(n) {
        var t, e = 0 / 0, r = 0 / 0, u = 0 / 0;
        return {
            lineStart: function () {
                n.lineStart(), t = 1;
            },
            point: function (i, o) {
                var a = i > 0 ? wa : -wa, c = ia(i - e);
                ia(c - wa) < Ea ? (n.point(e, r = (r + o) / 2 > 0 ? ka : -ka), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= wa && (ia(e - u) < Ea && (e -= u * Ea), ia(i - a) < Ea && (i -= a * Ea), r = qe(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a;
            },
            lineEnd: function () {
                n.lineEnd(), e = r = 0 / 0;
            },
            clean: function () {
                return 2 - t;
            }
        };
    }
    function qe(n, t, e, r) {
        var u, i, o = Math.sin(n - e);
        return ia(o) > Ea ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2;
    }
    function Re(n, t, e, r) {
        var u;
        if (null == n)
            u = e * ka, r.point(-wa, u), r.point(0, u), r.point(wa, u), r.point(wa, 0), r.point(wa, -u), r.point(0, -u), r.point(-wa, -u), r.point(-wa, 0), r.point(-wa, u);
        else if (ia(n[0] - t[0]) > Ea) {
            var i = n[0] < t[0] ? wa : -wa;
            u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u);
        } else
            r.point(t[0], t[1]);
    }
    function De(n, t) {
        var e = n[0], r = n[1], u = [
                Math.sin(e),
                -Math.cos(e),
                0
            ], i = 0, o = 0;
        fc.reset();
        for (var a = 0, c = t.length; c > a; ++a) {
            var l = t[a], s = l.length;
            if (s)
                for (var f = l[0], h = f[0], g = f[1] / 2 + wa / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
                    d === s && (d = 0), n = l[d];
                    var m = n[0], y = n[1] / 2 + wa / 4, x = Math.sin(y), M = Math.cos(y), _ = m - h, b = _ >= 0 ? 1 : -1, w = b * _, S = w > wa, k = p * x;
                    if (fc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * Sa : _, S ^ h >= e ^ m >= e) {
                        var E = ge(fe(f), fe(n));
                        de(E);
                        var A = ge(u, E);
                        de(A);
                        var C = (S ^ _ >= 0 ? -1 : 1) * G(A[2]);
                        (r > C || r === C && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1);
                    }
                    if (!d++)
                        break;
                    h = m, p = x, v = M, f = n;
                }
        }
        return (-Ea > i || Ea > i && 0 > fc) ^ 1 & o;
    }
    function Pe(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > i;
        }
        function e(n) {
            var e, i, c, l, s;
            return {
                lineStart: function () {
                    l = c = !1, s = 1;
                },
                point: function (f, h) {
                    var g, p = [
                            f,
                            h
                        ], v = t(f, h), d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? wa : -wa), h) : 0;
                    if (!e && (l = c = v) && n.lineStart(), v !== c && (g = r(e, p), (ye(e, g) || ye(p, g)) && (p[0] += Ea, p[1] += Ea, v = t(p[0], p[1]))), v !== c)
                        s = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
                    else if (a && e && o ^ v) {
                        var m;
                        d & i || !(m = r(p, e, !0)) || (s = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])));
                    }
                    !v || e && ye(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d;
                },
                lineEnd: function () {
                    c && n.lineEnd(), e = null;
                },
                clean: function () {
                    return s | (l && c) << 1;
                }
            };
        }
        function r(n, t, e) {
            var r = fe(n), u = fe(t), o = [
                    1,
                    0,
                    0
                ], a = ge(r, u), c = he(a, a), l = a[0], s = c - l * l;
            if (!s)
                return !e && n;
            var f = i * c / s, h = -i * l / s, g = ge(o, a), p = ve(o, f), v = ve(a, h);
            pe(p, v);
            var d = g, m = he(p, d), y = he(d, d), x = m * m - y * (he(p, p) - 1);
            if (!(0 > x)) {
                var M = Math.sqrt(x), _ = ve(d, (-m - M) / y);
                if (pe(_, p), _ = me(_), !e)
                    return _;
                var b, w = n[0], S = t[0], k = n[1], E = t[1];
                w > S && (b = w, w = S, S = b);
                var A = S - w, C = ia(A - wa) < Ea, N = C || Ea > A;
                if (!C && k > E && (b = k, k = E, E = b), N ? C ? k + E > 0 ^ _[1] < (ia(_[0] - w) < Ea ? k : E) : k <= _[1] && _[1] <= E : A > wa ^ (w <= _[0] && _[0] <= S)) {
                    var z = ve(d, (-m + M) / y);
                    return pe(z, p), [
                        _,
                        me(z)
                    ];
                }
            }
        }
        function u(t, e) {
            var r = o ? n : wa - n, u = 0;
            return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u;
        }
        var i = Math.cos(n), o = i > 0, a = ia(i) > Ea, c = sr(n, 6 * Ca);
        return Ce(t, e, c, o ? [
            0,
            -n
        ] : [
            -wa,
            n - wa
        ]);
    }
    function Ue(n, t, e, r) {
        return function (u) {
            var i, o = u.a, a = u.b, c = o.x, l = o.y, s = a.x, f = a.y, h = 0, g = 1, p = s - c, v = f - l;
            if (i = n - c, p || !(i > 0)) {
                if (i /= p, 0 > p) {
                    if (h > i)
                        return;
                    g > i && (g = i);
                } else if (p > 0) {
                    if (i > g)
                        return;
                    i > h && (h = i);
                }
                if (i = e - c, p || !(0 > i)) {
                    if (i /= p, 0 > p) {
                        if (i > g)
                            return;
                        i > h && (h = i);
                    } else if (p > 0) {
                        if (h > i)
                            return;
                        g > i && (g = i);
                    }
                    if (i = t - l, v || !(i > 0)) {
                        if (i /= v, 0 > v) {
                            if (h > i)
                                return;
                            g > i && (g = i);
                        } else if (v > 0) {
                            if (i > g)
                                return;
                            i > h && (h = i);
                        }
                        if (i = r - l, v || !(0 > i)) {
                            if (i /= v, 0 > v) {
                                if (i > g)
                                    return;
                                i > h && (h = i);
                            } else if (v > 0) {
                                if (h > i)
                                    return;
                                g > i && (g = i);
                            }
                            return h > 0 && (u.a = {
                                x: c + h * p,
                                y: l + h * v
                            }), 1 > g && (u.b = {
                                x: c + g * p,
                                y: l + g * v
                            }), u;
                        }
                    }
                }
            }
        };
    }
    function je(n, t, e, r) {
        function u(r, u) {
            return ia(r[0] - n) < Ea ? u > 0 ? 0 : 3 : ia(r[0] - e) < Ea ? u > 0 ? 2 : 1 : ia(r[1] - t) < Ea ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
        }
        function i(n, t) {
            return o(n.x, t.x);
        }
        function o(n, t) {
            var e = u(n, 1), r = u(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
        }
        return function (a) {
            function c(n) {
                for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
                    for (var i, o = 1, a = d[u], c = a.length, l = a[0]; c > o; ++o)
                        i = a[o], l[1] <= r ? i[1] > r && W(l, i, n) > 0 && ++t : i[1] <= r && W(l, i, n) < 0 && --t, l = i;
                return 0 !== t;
            }
            function l(i, a, c, l) {
                var s = 0, f = 0;
                if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do
                        l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
                    while ((s = (s + c + 4) % 4) !== f);
                } else
                    l.point(a[0], a[1]);
            }
            function s(u, i) {
                return u >= n && e >= u && i >= t && r >= i;
            }
            function f(n, t) {
                s(n, t) && a.point(n, t);
            }
            function h() {
                N.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0 / 0;
            }
            function g() {
                v && (p(y, x), M && w && A.rejoin(), v.push(A.buffer())), N.point = f, w && a.lineEnd();
            }
            function p(n, t) {
                n = Math.max(-Ec, Math.min(Ec, n)), t = Math.max(-Ec, Math.min(Ec, t));
                var e = s(n, t);
                if (d && m.push([
                        n,
                        t
                    ]), S)
                    y = n, x = t, M = e, S = !1, e && (a.lineStart(), a.point(n, t));
                else if (e && w)
                    a.point(n, t);
                else {
                    var r = {
                        a: {
                            x: _,
                            y: b
                        },
                        b: {
                            x: n,
                            y: t
                        }
                    };
                    C(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1);
                }
                _ = n, b = t, w = e;
            }
            var v, d, m, y, x, M, _, b, w, S, k, E = a, A = ze(), C = Ue(n, t, e, r), N = {
                    point: f,
                    lineStart: h,
                    lineEnd: g,
                    polygonStart: function () {
                        a = A, v = [], d = [], k = !0;
                    },
                    polygonEnd: function () {
                        a = E, v = Vo.merge(v);
                        var t = c([
                                n,
                                r
                            ]), e = k && t, u = v.length;
                        (e || u) && (a.polygonStart(), e && (a.lineStart(), l(null, null, 1, a), a.lineEnd()), u && ke(v, i, t, l, a), a.polygonEnd()), v = d = m = null;
                    }
                };
            return N;
        };
    }
    function He(n, t) {
        function e(e, r) {
            return e = n(e, r), t(e[0], e[1]);
        }
        return n.invert && t.invert && (e.invert = function (e, r) {
            return e = t.invert(e, r), e && n.invert(e[0], e[1]);
        }), e;
    }
    function Fe(n) {
        var t = 0, e = wa / 3, r = er(n), u = r(t, e);
        return u.parallels = function (n) {
            return arguments.length ? r(t = n[0] * wa / 180, e = n[1] * wa / 180) : [
                180 * (t / wa),
                180 * (e / wa)
            ];
        }, u;
    }
    function Oe(n, t) {
        function e(n, t) {
            var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [
                e * Math.sin(n *= u),
                o - e * Math.cos(n)
            ];
        }
        var r = Math.sin(n), u = (r + Math.sin(t)) / 2, i = 1 + r * (2 * u - r), o = Math.sqrt(i) / u;
        return e.invert = function (n, t) {
            var e = o - t;
            return [
                Math.atan2(n, e) / u,
                G((i - (n * n + e * e) * u * u) / (2 * u))
            ];
        }, e;
    }
    function Ye() {
        function n(n, t) {
            Cc += u * n - r * t, r = n, u = t;
        }
        var t, e, r, u;
        qc.point = function (i, o) {
            qc.point = n, t = r = i, e = u = o;
        }, qc.lineEnd = function () {
            n(t, e);
        };
    }
    function Ie(n, t) {
        Nc > n && (Nc = n), n > Lc && (Lc = n), zc > t && (zc = t), t > Tc && (Tc = t);
    }
    function Ze() {
        function n(n, t) {
            o.push('M', n, ',', t, i);
        }
        function t(n, t) {
            o.push('M', n, ',', t), a.point = e;
        }
        function e(n, t) {
            o.push('L', n, ',', t);
        }
        function r() {
            a.point = n;
        }
        function u() {
            o.push('Z');
        }
        var i = Ve(4.5), o = [], a = {
                point: n,
                lineStart: function () {
                    a.point = t;
                },
                lineEnd: r,
                polygonStart: function () {
                    a.lineEnd = u;
                },
                polygonEnd: function () {
                    a.lineEnd = r, a.point = n;
                },
                pointRadius: function (n) {
                    return i = Ve(n), a;
                },
                result: function () {
                    if (o.length) {
                        var n = o.join('');
                        return o = [], n;
                    }
                }
            };
        return a;
    }
    function Ve(n) {
        return 'm0,' + n + 'a' + n + ',' + n + ' 0 1,1 0,' + -2 * n + 'a' + n + ',' + n + ' 0 1,1 0,' + 2 * n + 'z';
    }
    function Xe(n, t) {
        vc += n, dc += t, ++mc;
    }
    function $e() {
        function n(n, r) {
            var u = n - t, i = r - e, o = Math.sqrt(u * u + i * i);
            yc += o * (t + n) / 2, xc += o * (e + r) / 2, Mc += o, Xe(t = n, e = r);
        }
        var t, e;
        Dc.point = function (r, u) {
            Dc.point = n, Xe(t = r, e = u);
        };
    }
    function Be() {
        Dc.point = Xe;
    }
    function We() {
        function n(n, t) {
            var e = n - r, i = t - u, o = Math.sqrt(e * e + i * i);
            yc += o * (r + n) / 2, xc += o * (u + t) / 2, Mc += o, o = u * n - r * t, _c += o * (r + n), bc += o * (u + t), wc += 3 * o, Xe(r = n, u = t);
        }
        var t, e, r, u;
        Dc.point = function (i, o) {
            Dc.point = n, Xe(t = r = i, e = u = o);
        }, Dc.lineEnd = function () {
            n(t, e);
        };
    }
    function Je(n) {
        function t(t, e) {
            n.moveTo(t, e), n.arc(t, e, o, 0, Sa);
        }
        function e(t, e) {
            n.moveTo(t, e), a.point = r;
        }
        function r(t, e) {
            n.lineTo(t, e);
        }
        function u() {
            a.point = t;
        }
        function i() {
            n.closePath();
        }
        var o = 4.5, a = {
                point: t,
                lineStart: function () {
                    a.point = e;
                },
                lineEnd: u,
                polygonStart: function () {
                    a.lineEnd = i;
                },
                polygonEnd: function () {
                    a.lineEnd = u, a.point = t;
                },
                pointRadius: function (n) {
                    return o = n, a;
                },
                result: v
            };
        return a;
    }
    function Ge(n) {
        function t(n) {
            return (a ? r : e)(n);
        }
        function e(t) {
            return nr(t, function (e, r) {
                e = n(e, r), t.point(e[0], e[1]);
            });
        }
        function r(t) {
            function e(e, r) {
                e = n(e, r), t.point(e[0], e[1]);
            }
            function r() {
                x = 0 / 0, S.point = i, t.lineStart();
            }
            function i(e, r) {
                var i = fe([
                        e,
                        r
                    ]), o = n(e, r);
                u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M);
            }
            function o() {
                S.point = e, t.lineEnd();
            }
            function c() {
                r(), S.point = l, S.lineEnd = s;
            }
            function l(n, t) {
                i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i;
            }
            function s() {
                u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o();
            }
            var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {
                    point: e,
                    lineStart: r,
                    lineEnd: o,
                    polygonStart: function () {
                        t.polygonStart(), S.lineStart = c;
                    },
                    polygonEnd: function () {
                        t.polygonEnd(), S.lineStart = r;
                    }
                };
            return S;
        }
        function u(t, e, r, a, c, l, s, f, h, g, p, v, d, m) {
            var y = s - t, x = f - e, M = y * y + x * x;
            if (M > 4 * i && d--) {
                var _ = a + g, b = c + p, w = l + v, S = Math.sqrt(_ * _ + b * b + w * w), k = Math.asin(w /= S), E = ia(ia(w) - 1) < Ea || ia(r - h) < Ea ? (r + h) / 2 : Math.atan2(b, _), A = n(E, k), C = A[0], N = A[1], z = C - t, L = N - e, T = x * z - y * L;
                (T * T / M > i || ia((y * z + x * L) / M - 0.5) > 0.3 || o > a * g + c * p + l * v) && (u(t, e, r, a, c, l, C, N, E, _ /= S, b /= S, w, d, m), m.point(C, N), u(C, N, E, _, b, w, s, f, h, g, p, v, d, m));
            }
        }
        var i = 0.5, o = Math.cos(30 * Ca), a = 16;
        return t.precision = function (n) {
            return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i);
        }, t;
    }
    function Ke(n) {
        var t = Ge(function (t, e) {
            return n([
                t * Na,
                e * Na
            ]);
        });
        return function (n) {
            return rr(t(n));
        };
    }
    function Qe(n) {
        this.stream = n;
    }
    function nr(n, t) {
        return {
            point: t,
            sphere: function () {
                n.sphere();
            },
            lineStart: function () {
                n.lineStart();
            },
            lineEnd: function () {
                n.lineEnd();
            },
            polygonStart: function () {
                n.polygonStart();
            },
            polygonEnd: function () {
                n.polygonEnd();
            }
        };
    }
    function tr(n) {
        return er(function () {
            return n;
        })();
    }
    function er(n) {
        function t(n) {
            return n = a(n[0] * Ca, n[1] * Ca), [
                n[0] * h + c,
                l - n[1] * h
            ];
        }
        function e(n) {
            return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [
                n[0] * Na,
                n[1] * Na
            ];
        }
        function r() {
            a = He(o = or(m, y, x), i);
            var n = i(v, d);
            return c = g - n[0] * h, l = p + n[1] * h, u();
        }
        function u() {
            return s && (s.valid = !1, s = null), t;
        }
        var i, o, a, c, l, s, f = Ge(function (n, t) {
                return n = i(n, t), [
                    n[0] * h + c,
                    l - n[1] * h
                ];
            }), h = 150, g = 480, p = 250, v = 0, d = 0, m = 0, y = 0, x = 0, M = kc, _ = wt, b = null, w = null;
        return t.stream = function (n) {
            return s && (s.valid = !1), s = rr(M(o, f(_(n)))), s.valid = !0, s;
        }, t.clipAngle = function (n) {
            return arguments.length ? (M = null == n ? (b = n, kc) : Pe((b = +n) * Ca), u()) : b;
        }, t.clipExtent = function (n) {
            return arguments.length ? (w = n, _ = n ? je(n[0][0], n[0][1], n[1][0], n[1][1]) : wt, u()) : w;
        }, t.scale = function (n) {
            return arguments.length ? (h = +n, r()) : h;
        }, t.translate = function (n) {
            return arguments.length ? (g = +n[0], p = +n[1], r()) : [
                g,
                p
            ];
        }, t.center = function (n) {
            return arguments.length ? (v = n[0] % 360 * Ca, d = n[1] % 360 * Ca, r()) : [
                v * Na,
                d * Na
            ];
        }, t.rotate = function (n) {
            return arguments.length ? (m = n[0] % 360 * Ca, y = n[1] % 360 * Ca, x = n.length > 2 ? n[2] % 360 * Ca : 0, r()) : [
                m * Na,
                y * Na,
                x * Na
            ];
        }, Vo.rebind(t, f, 'precision'), function () {
            return i = n.apply(this, arguments), t.invert = i.invert && e, r();
        };
    }
    function rr(n) {
        return nr(n, function (t, e) {
            n.point(t * Ca, e * Ca);
        });
    }
    function ur(n, t) {
        return [
            n,
            t
        ];
    }
    function ir(n, t) {
        return [
            n > wa ? n - Sa : -wa > n ? n + Sa : n,
            t
        ];
    }
    function or(n, t, e) {
        return n ? t || e ? He(cr(n), lr(t, e)) : cr(n) : t || e ? lr(t, e) : ir;
    }
    function ar(n) {
        return function (t, e) {
            return t += n, [
                t > wa ? t - Sa : -wa > t ? t + Sa : t,
                e
            ];
        };
    }
    function cr(n) {
        var t = ar(n);
        return t.invert = ar(-n), t;
    }
    function lr(n, t) {
        function e(n, t) {
            var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, l = Math.sin(t), s = l * r + a * u;
            return [
                Math.atan2(c * i - s * o, a * r - l * u),
                G(s * i + c * o)
            ];
        }
        var r = Math.cos(n), u = Math.sin(n), i = Math.cos(t), o = Math.sin(t);
        return e.invert = function (n, t) {
            var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, l = Math.sin(t), s = l * i - c * o;
            return [
                Math.atan2(c * i + l * o, a * r + s * u),
                G(s * r - a * u)
            ];
        }, e;
    }
    function sr(n, t) {
        var e = Math.cos(n), r = Math.sin(n);
        return function (u, i, o, a) {
            var c = o * t;
            null != u ? (u = fr(e, u), i = fr(e, i), (o > 0 ? i > u : u > i) && (u += o * Sa)) : (u = n + o * Sa, i = n - 0.5 * c);
            for (var l, s = u; o > 0 ? s > i : i > s; s -= c)
                a.point((l = me([
                    e,
                    -r * Math.cos(s),
                    -r * Math.sin(s)
                ]))[0], l[1]);
        };
    }
    function fr(n, t) {
        var e = fe(t);
        e[0] -= n, de(e);
        var r = J(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ea) % (2 * Math.PI);
    }
    function hr(n, t, e) {
        var r = Vo.range(n, t - Ea, e).concat(t);
        return function (n) {
            return r.map(function (t) {
                return [
                    n,
                    t
                ];
            });
        };
    }
    function gr(n, t, e) {
        var r = Vo.range(n, t - Ea, e).concat(t);
        return function (n) {
            return r.map(function (t) {
                return [
                    t,
                    n
                ];
            });
        };
    }
    function pr(n) {
        return n.source;
    }
    function vr(n) {
        return n.target;
    }
    function dr(n, t, e, r) {
        var u = Math.cos(t), i = Math.sin(t), o = Math.cos(r), a = Math.sin(r), c = u * Math.cos(n), l = u * Math.sin(n), s = o * Math.cos(e), f = o * Math.sin(e), h = 2 * Math.asin(Math.sqrt(tt(r - t) + u * o * tt(e - n))), g = 1 / Math.sin(h), p = h ? function (n) {
                var t = Math.sin(n *= h) * g, e = Math.sin(h - n) * g, r = e * c + t * s, u = e * l + t * f, o = e * i + t * a;
                return [
                    Math.atan2(u, r) * Na,
                    Math.atan2(o, Math.sqrt(r * r + u * u)) * Na
                ];
            } : function () {
                return [
                    n * Na,
                    t * Na
                ];
            };
        return p.distance = h, p;
    }
    function mr() {
        function n(n, u) {
            var i = Math.sin(u *= Ca), o = Math.cos(u), a = ia((n *= Ca) - t), c = Math.cos(a);
            Pc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o;
        }
        var t, e, r;
        Uc.point = function (u, i) {
            t = u * Ca, e = Math.sin(i *= Ca), r = Math.cos(i), Uc.point = n;
        }, Uc.lineEnd = function () {
            Uc.point = Uc.lineEnd = v;
        };
    }
    function yr(n, t) {
        function e(t, e) {
            var r = Math.cos(t), u = Math.cos(e), i = n(r * u);
            return [
                i * u * Math.sin(t),
                i * Math.sin(e)
            ];
        }
        return e.invert = function (n, e) {
            var r = Math.sqrt(n * n + e * e), u = t(r), i = Math.sin(u), o = Math.cos(u);
            return [
                Math.atan2(n * i, r * o),
                Math.asin(r && e * i / r)
            ];
        }, e;
    }
    function xr(n, t) {
        function e(n, t) {
            o > 0 ? -ka + Ea > t && (t = -ka + Ea) : t > ka - Ea && (t = ka - Ea);
            var e = o / Math.pow(u(t), i);
            return [
                e * Math.sin(i * n),
                o - e * Math.cos(i * n)
            ];
        }
        var r = Math.cos(n), u = function (n) {
                return Math.tan(wa / 4 + n / 2);
            }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)), o = r * Math.pow(u(n), i) / i;
        return i ? (e.invert = function (n, t) {
            var e = o - t, r = B(i) * Math.sqrt(n * n + e * e);
            return [
                Math.atan2(n, e) / i,
                2 * Math.atan(Math.pow(o / r, 1 / i)) - ka
            ];
        }, e) : _r;
    }
    function Mr(n, t) {
        function e(n, t) {
            var e = i - t;
            return [
                e * Math.sin(u * n),
                i - e * Math.cos(u * n)
            ];
        }
        var r = Math.cos(n), u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n), i = r / u + n;
        return ia(u) < Ea ? ur : (e.invert = function (n, t) {
            var e = i - t;
            return [
                Math.atan2(n, e) / u,
                i - B(u) * Math.sqrt(n * n + e * e)
            ];
        }, e);
    }
    function _r(n, t) {
        return [
            n,
            Math.log(Math.tan(wa / 4 + t / 2))
        ];
    }
    function br(n) {
        var t, e = tr(n), r = e.scale, u = e.translate, i = e.clipExtent;
        return e.scale = function () {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n;
        }, e.translate = function () {
            var n = u.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n;
        }, e.clipExtent = function (n) {
            var o = i.apply(e, arguments);
            if (o === e) {
                if (t = null == n) {
                    var a = wa * r(), c = u();
                    i([
                        [
                            c[0] - a,
                            c[1] - a
                        ],
                        [
                            c[0] + a,
                            c[1] + a
                        ]
                    ]);
                }
            } else
                t && (o = null);
            return o;
        }, e.clipExtent(null);
    }
    function wr(n, t) {
        return [
            Math.log(Math.tan(wa / 4 + t / 2)),
            -n
        ];
    }
    function Sr(n) {
        return n[0];
    }
    function kr(n) {
        return n[1];
    }
    function Er(n) {
        for (var t = n.length, e = [
                    0,
                    1
                ], r = 2, u = 2; t > u; u++) {
            for (; r > 1 && W(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)
                --r;
            e[r++] = u;
        }
        return e.slice(0, r);
    }
    function Ar(n, t) {
        return n[0] - t[0] || n[1] - t[1];
    }
    function Cr(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
    }
    function Nr(n, t, e, r) {
        var u = n[0], i = e[0], o = t[0] - u, a = r[0] - i, c = n[1], l = e[1], s = t[1] - c, f = r[1] - l, h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
        return [
            u + h * o,
            c + h * s
        ];
    }
    function zr(n) {
        var t = n[0], e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1]);
    }
    function Lr() {
        Kr(this), this.edge = this.site = this.circle = null;
    }
    function Tr(n) {
        var t = Wc.pop() || new Lr();
        return t.site = n, t;
    }
    function qr(n) {
        Ir(n), Xc.remove(n), Wc.push(n), Kr(n);
    }
    function Rr(n) {
        var t = n.circle, e = t.x, r = t.cy, u = {
                x: e,
                y: r
            }, i = n.P, o = n.N, a = [n];
        qr(n);
        for (var c = i; c.circle && ia(e - c.circle.x) < Ea && ia(r - c.circle.cy) < Ea;)
            i = c.P, a.unshift(c), qr(c), c = i;
        a.unshift(c), Ir(c);
        for (var l = o; l.circle && ia(e - l.circle.x) < Ea && ia(r - l.circle.cy) < Ea;)
            o = l.N, a.push(l), qr(l), l = o;
        a.push(l), Ir(l);
        var s, f = a.length;
        for (s = 1; f > s; ++s)
            l = a[s], c = a[s - 1], Wr(l.edge, c.site, l.site, u);
        c = a[0], l = a[f - 1], l.edge = $r(c.site, l.site, null, u), Yr(c), Yr(l);
    }
    function Dr(n) {
        for (var t, e, r, u, i = n.x, o = n.y, a = Xc._; a;)
            if (r = Pr(a, o) - i, r > Ea)
                a = a.L;
            else {
                if (u = i - Ur(a, o), !(u > Ea)) {
                    r > -Ea ? (t = a.P, e = a) : u > -Ea ? (t = a, e = a.N) : t = e = a;
                    break;
                }
                if (!a.R) {
                    t = a;
                    break;
                }
                a = a.R;
            }
        var c = Tr(n);
        if (Xc.insert(t, c), t || e) {
            if (t === e)
                return Ir(t), e = Tr(t.site), Xc.insert(c, e), c.edge = e.edge = $r(t.site, c.site), Yr(t), Yr(e), void 0;
            if (!e)
                return c.edge = $r(t.site, c.site), void 0;
            Ir(t), Ir(e);
            var l = t.site, s = l.x, f = l.y, h = n.x - s, g = n.y - f, p = e.site, v = p.x - s, d = p.y - f, m = 2 * (h * d - g * v), y = h * h + g * g, x = v * v + d * d, M = {
                    x: (d * y - g * x) / m + s,
                    y: (h * x - v * y) / m + f
                };
            Wr(e.edge, l, p, M), c.edge = $r(l, n, null, M), e.edge = $r(n, p, null, M), Yr(t), Yr(e);
        }
    }
    function Pr(n, t) {
        var e = n.site, r = e.x, u = e.y, i = u - t;
        if (!i)
            return r;
        var o = n.P;
        if (!o)
            return -1 / 0;
        e = o.site;
        var a = e.x, c = e.y, l = c - t;
        if (!l)
            return a;
        var s = a - r, f = 1 / i - 1 / l, h = s / l;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + r : (r + a) / 2;
    }
    function Ur(n, t) {
        var e = n.N;
        if (e)
            return Pr(e, t);
        var r = n.site;
        return r.y === t ? r.x : 1 / 0;
    }
    function jr(n) {
        this.site = n, this.edges = [];
    }
    function Hr(n) {
        for (var t, e, r, u, i, o, a, c, l, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Vc, d = v.length; d--;)
            if (i = v[d], i && i.prepare())
                for (a = i.edges, c = a.length, o = 0; c > o;)
                    s = a[o].end(), r = s.x, u = s.y, l = a[++o % c].start(), t = l.x, e = l.y, (ia(r - t) > Ea || ia(u - e) > Ea) && (a.splice(o, 0, new Jr(Br(i.site, s, ia(r - f) < Ea && p - u > Ea ? {
                        x: f,
                        y: ia(t - f) < Ea ? e : p
                    } : ia(u - p) < Ea && h - r > Ea ? {
                        x: ia(e - p) < Ea ? t : h,
                        y: p
                    } : ia(r - h) < Ea && u - g > Ea ? {
                        x: h,
                        y: ia(t - h) < Ea ? e : g
                    } : ia(u - g) < Ea && r - f > Ea ? {
                        x: ia(e - g) < Ea ? t : f,
                        y: g
                    } : null), i.site, null)), ++c);
    }
    function Fr(n, t) {
        return t.angle - n.angle;
    }
    function Or() {
        Kr(this), this.x = this.y = this.arc = this.site = this.cy = null;
    }
    function Yr(n) {
        var t = n.P, e = n.N;
        if (t && e) {
            var r = t.site, u = n.site, i = e.site;
            if (r !== i) {
                var o = u.x, a = u.y, c = r.x - o, l = r.y - a, s = i.x - o, f = i.y - a, h = 2 * (c * f - l * s);
                if (!(h >= -Aa)) {
                    var g = c * c + l * l, p = s * s + f * f, v = (f * g - l * p) / h, d = (c * p - s * g) / h, f = d + a, m = Jc.pop() || new Or();
                    m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
                    for (var y = null, x = Bc._; x;)
                        if (m.y < x.y || m.y === x.y && m.x <= x.x) {
                            if (!x.L) {
                                y = x.P;
                                break;
                            }
                            x = x.L;
                        } else {
                            if (!x.R) {
                                y = x;
                                break;
                            }
                            x = x.R;
                        }
                    Bc.insert(y, m), y || ($c = m);
                }
            }
        }
    }
    function Ir(n) {
        var t = n.circle;
        t && (t.P || ($c = t.N), Bc.remove(t), Jc.push(t), Kr(t), n.circle = null);
    }
    function Zr(n) {
        for (var t, e = Zc, r = Ue(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;)
            t = e[u], (!Vr(t, n) || !r(t) || ia(t.a.x - t.b.x) < Ea && ia(t.a.y - t.b.y) < Ea) && (t.a = t.b = null, e.splice(u, 1));
    }
    function Vr(n, t) {
        var e = n.b;
        if (e)
            return !0;
        var r, u, i = n.a, o = t[0][0], a = t[1][0], c = t[0][1], l = t[1][1], s = n.l, f = n.r, h = s.x, g = s.y, p = f.x, v = f.y, d = (h + p) / 2, m = (g + v) / 2;
        if (v === g) {
            if (o > d || d >= a)
                return;
            if (h > p) {
                if (i) {
                    if (i.y >= l)
                        return;
                } else
                    i = {
                        x: d,
                        y: c
                    };
                e = {
                    x: d,
                    y: l
                };
            } else {
                if (i) {
                    if (i.y < c)
                        return;
                } else
                    i = {
                        x: d,
                        y: l
                    };
                e = {
                    x: d,
                    y: c
                };
            }
        } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)
            if (h > p) {
                if (i) {
                    if (i.y >= l)
                        return;
                } else
                    i = {
                        x: (c - u) / r,
                        y: c
                    };
                e = {
                    x: (l - u) / r,
                    y: l
                };
            } else {
                if (i) {
                    if (i.y < c)
                        return;
                } else
                    i = {
                        x: (l - u) / r,
                        y: l
                    };
                e = {
                    x: (c - u) / r,
                    y: c
                };
            }
        else if (v > g) {
            if (i) {
                if (i.x >= a)
                    return;
            } else
                i = {
                    x: o,
                    y: r * o + u
                };
            e = {
                x: a,
                y: r * a + u
            };
        } else {
            if (i) {
                if (i.x < o)
                    return;
            } else
                i = {
                    x: a,
                    y: r * a + u
                };
            e = {
                x: o,
                y: r * o + u
            };
        }
        return n.a = i, n.b = e, !0;
    }
    function Xr(n, t) {
        this.l = n, this.r = t, this.a = this.b = null;
    }
    function $r(n, t, e, r) {
        var u = new Xr(n, t);
        return Zc.push(u), e && Wr(u, n, t, e), r && Wr(u, t, n, r), Vc[n.i].edges.push(new Jr(u, n, t)), Vc[t.i].edges.push(new Jr(u, t, n)), u;
    }
    function Br(n, t, e) {
        var r = new Xr(n, null);
        return r.a = t, r.b = e, Zc.push(r), r;
    }
    function Wr(n, t, e, r) {
        n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e);
    }
    function Jr(n, t, e) {
        var r = n.a, u = n.b;
        this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y);
    }
    function Gr() {
        this._ = null;
    }
    function Kr(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null;
    }
    function Qr(n, t) {
        var e = t, r = t.R, u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
    }
    function nu(n, t) {
        var e = t, r = t.L, u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
    }
    function tu(n) {
        for (; n.L;)
            n = n.L;
        return n;
    }
    function eu(n, t) {
        var e, r, u, i = n.sort(ru).pop();
        for (Zc = [], Vc = new Array(n.length), Xc = new Gr(), Bc = new Gr();;)
            if (u = $c, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))
                (i.x !== e || i.y !== r) && (Vc[i.i] = new jr(i), Dr(i), e = i.x, r = i.y), i = n.pop();
            else {
                if (!u)
                    break;
                Rr(u.arc);
            }
        t && (Zr(t), Hr(t));
        var o = {
            cells: Vc,
            edges: Zc
        };
        return Xc = Bc = Zc = Vc = null, o;
    }
    function ru(n, t) {
        return t.y - n.y || t.x - n.x;
    }
    function uu(n, t, e) {
        return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y);
    }
    function iu(n) {
        return n.x;
    }
    function ou(n) {
        return n.y;
    }
    function au() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        };
    }
    function cu(n, t, e, r, u, i) {
        if (!n(t, e, r, u, i)) {
            var o = 0.5 * (e + u), a = 0.5 * (r + i), c = t.nodes;
            c[0] && cu(n, c[0], e, r, o, a), c[1] && cu(n, c[1], o, r, u, a), c[2] && cu(n, c[2], e, a, o, i), c[3] && cu(n, c[3], o, a, u, i);
        }
    }
    function lu(n, t) {
        n = Vo.rgb(n), t = Vo.rgb(t);
        var e = n.r, r = n.g, u = n.b, i = t.r - e, o = t.g - r, a = t.b - u;
        return function (n) {
            return '#' + dt(Math.round(e + i * n)) + dt(Math.round(r + o * n)) + dt(Math.round(u + a * n));
        };
    }
    function su(n, t) {
        var e, r = {}, u = {};
        for (e in n)
            e in t ? r[e] = gu(n[e], t[e]) : u[e] = n[e];
        for (e in t)
            e in n || (u[e] = t[e]);
        return function (n) {
            for (e in r)
                u[e] = r[e](n);
            return u;
        };
    }
    function fu(n, t) {
        return t -= n = +n, function (e) {
            return n + t * e;
        };
    }
    function hu(n, t) {
        var e, r, u, i = Kc.lastIndex = Qc.lastIndex = 0, o = -1, a = [], c = [];
        for (n += '', t += ''; (e = Kc.exec(n)) && (r = Qc.exec(t));)
            (u = r.index) > i && (u = t.slice(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
                i: o,
                x: fu(e, r)
            })), i = Qc.lastIndex;
        return i < t.length && (u = t.slice(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function (n) {
            return t(n) + '';
        }) : function () {
            return t;
        } : (t = c.length, function (n) {
            for (var e, r = 0; t > r; ++r)
                a[(e = c[r]).i] = e.x(n);
            return a.join('');
        });
    }
    function gu(n, t) {
        for (var e, r = Vo.interpolators.length; --r >= 0 && !(e = Vo.interpolators[r](n, t)););
        return e;
    }
    function pu(n, t) {
        var e, r = [], u = [], i = n.length, o = t.length, a = Math.min(n.length, t.length);
        for (e = 0; a > e; ++e)
            r.push(gu(n[e], t[e]));
        for (; i > e; ++e)
            u[e] = n[e];
        for (; o > e; ++e)
            u[e] = t[e];
        return function (n) {
            for (e = 0; a > e; ++e)
                u[e] = r[e](n);
            return u;
        };
    }
    function vu(n) {
        return function (t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t);
        };
    }
    function du(n) {
        return function (t) {
            return 1 - n(1 - t);
        };
    }
    function mu(n) {
        return function (t) {
            return 0.5 * (0.5 > t ? n(2 * t) : 2 - n(2 - 2 * t));
        };
    }
    function yu(n) {
        return n * n;
    }
    function xu(n) {
        return n * n * n;
    }
    function Mu(n) {
        if (0 >= n)
            return 0;
        if (n >= 1)
            return 1;
        var t = n * n, e = t * n;
        return 4 * (0.5 > n ? e : 3 * (n - t) + e - 0.75);
    }
    function _u(n) {
        return function (t) {
            return Math.pow(t, n);
        };
    }
    function bu(n) {
        return 1 - Math.cos(n * ka);
    }
    function wu(n) {
        return Math.pow(2, 10 * (n - 1));
    }
    function Su(n) {
        return 1 - Math.sqrt(1 - n * n);
    }
    function ku(n, t) {
        var e;
        return arguments.length < 2 && (t = 0.45), arguments.length ? e = t / Sa * Math.asin(1 / n) : (n = 1, e = t / 4), function (r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Sa / t);
        };
    }
    function Eu(n) {
        return n || (n = 1.70158), function (t) {
            return t * t * ((n + 1) * t - n);
        };
    }
    function Au(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
    }
    function Cu(n, t) {
        n = Vo.hcl(n), t = Vo.hcl(t);
        var e = n.h, r = n.c, u = n.l, i = t.h - e, o = t.c - r, a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) {
            return ot(e + i * n, r + o * n, u + a * n) + '';
        };
    }
    function Nu(n, t) {
        n = Vo.hsl(n), t = Vo.hsl(t);
        var e = n.h, r = n.s, u = n.l, i = t.h - e, o = t.s - r, a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) {
            return ut(e + i * n, r + o * n, u + a * n) + '';
        };
    }
    function zu(n, t) {
        n = Vo.lab(n), t = Vo.lab(t);
        var e = n.l, r = n.a, u = n.b, i = t.l - e, o = t.a - r, a = t.b - u;
        return function (n) {
            return ct(e + i * n, r + o * n, u + a * n) + '';
        };
    }
    function Lu(n, t) {
        return t -= n, function (e) {
            return Math.round(n + t * e);
        };
    }
    function Tu(n) {
        var t = [
                n.a,
                n.b
            ], e = [
                n.c,
                n.d
            ], r = Ru(t), u = qu(t, e), i = Ru(Du(e, t, -u)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Na, this.translate = [
            n.e,
            n.f
        ], this.scale = [
            r,
            i
        ], this.skew = i ? Math.atan2(u, i) * Na : 0;
    }
    function qu(n, t) {
        return n[0] * t[0] + n[1] * t[1];
    }
    function Ru(n) {
        var t = Math.sqrt(qu(n, n));
        return t && (n[0] /= t, n[1] /= t), t;
    }
    function Du(n, t, e) {
        return n[0] += e * t[0], n[1] += e * t[1], n;
    }
    function Pu(n, t) {
        var e, r = [], u = [], i = Vo.transform(n), o = Vo.transform(t), a = i.translate, c = o.translate, l = i.rotate, s = o.rotate, f = i.skew, h = o.skew, g = i.scale, p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (r.push('translate(', null, ',', null, ')'), u.push({
            i: 1,
            x: fu(a[0], c[0])
        }, {
            i: 3,
            x: fu(a[1], c[1])
        })) : c[0] || c[1] ? r.push('translate(' + c + ')') : r.push(''), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({
            i: r.push(r.pop() + 'rotate(', null, ')') - 2,
            x: fu(l, s)
        })) : s && r.push(r.pop() + 'rotate(' + s + ')'), f != h ? u.push({
            i: r.push(r.pop() + 'skewX(', null, ')') - 2,
            x: fu(f, h)
        }) : h && r.push(r.pop() + 'skewX(' + h + ')'), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + 'scale(', null, ',', null, ')'), u.push({
            i: e - 4,
            x: fu(g[0], p[0])
        }, {
            i: e - 2,
            x: fu(g[1], p[1])
        })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + 'scale(' + p + ')'), e = u.length, function (n) {
            for (var t, i = -1; ++i < e;)
                r[(t = u[i]).i] = t.x(n);
            return r.join('');
        };
    }
    function Uu(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function (e) {
            return (e - n) * t;
        };
    }
    function ju(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function (e) {
            return Math.max(0, Math.min(1, (e - n) * t));
        };
    }
    function Hu(n) {
        for (var t = n.source, e = n.target, r = Ou(t, e), u = [t]; t !== r;)
            t = t.parent, u.push(t);
        for (var i = u.length; e !== r;)
            u.splice(i, 0, e), e = e.parent;
        return u;
    }
    function Fu(n) {
        for (var t = [], e = n.parent; null != e;)
            t.push(n), n = e, e = e.parent;
        return t.push(n), t;
    }
    function Ou(n, t) {
        if (n === t)
            return n;
        for (var e = Fu(n), r = Fu(t), u = e.pop(), i = r.pop(), o = null; u === i;)
            o = u, u = e.pop(), i = r.pop();
        return o;
    }
    function Yu(n) {
        n.fixed |= 2;
    }
    function Iu(n) {
        n.fixed &= -7;
    }
    function Zu(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y;
    }
    function Vu(n) {
        n.fixed &= -5;
    }
    function Xu(n, t, e) {
        var r = 0, u = 0;
        if (n.charge = 0, !n.leaf)
            for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;)
                i = o[c], null != i && (Xu(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - 0.5, n.point.y += Math.random() - 0.5);
            var l = t * e[n.point.index];
            n.charge += n.pointCharge = l, r += l * n.point.x, u += l * n.point.y;
        }
        n.cx = r / n.charge, n.cy = u / n.charge;
    }
    function $u(n, t) {
        return Vo.rebind(n, t, 'sort', 'children', 'value'), n.nodes = n, n.links = Qu, n;
    }
    function Bu(n, t) {
        for (var e = [n]; null != (n = e.pop());)
            if (t(n), (u = n.children) && (r = u.length))
                for (var r, u; --r >= 0;)
                    e.push(u[r]);
    }
    function Wu(n, t) {
        for (var e = [n], r = []; null != (n = e.pop());)
            if (r.push(n), (i = n.children) && (u = i.length))
                for (var u, i, o = -1; ++o < u;)
                    e.push(i[o]);
        for (; null != (n = r.pop());)
            t(n);
    }
    function Ju(n) {
        return n.children;
    }
    function Gu(n) {
        return n.value;
    }
    function Ku(n, t) {
        return t.value - n.value;
    }
    function Qu(n) {
        return Vo.merge(n.map(function (n) {
            return (n.children || []).map(function (t) {
                return {
                    source: n,
                    target: t
                };
            });
        }));
    }
    function ni(n) {
        return n.x;
    }
    function ti(n) {
        return n.y;
    }
    function ei(n, t, e) {
        n.y0 = t, n.y = e;
    }
    function ri(n) {
        return Vo.range(n.length);
    }
    function ui(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e;)
            r[t] = 0;
        return r;
    }
    function ii(n) {
        for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)
            (t = n[e][1]) > u && (r = e, u = t);
        return r;
    }
    function oi(n) {
        return n.reduce(ai, 0);
    }
    function ai(n, t) {
        return n + t[1];
    }
    function ci(n, t) {
        return li(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
    }
    function li(n, t) {
        for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;)
            i[e] = u * e + r;
        return i;
    }
    function si(n) {
        return [
            Vo.min(n),
            Vo.max(n)
        ];
    }
    function fi(n, t) {
        return n.value - t.value;
    }
    function hi(n, t) {
        var e = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t;
    }
    function gi(n, t) {
        n._pack_next = t, t._pack_prev = n;
    }
    function pi(n, t) {
        var e = t.x - n.x, r = t.y - n.y, u = n.r + t.r;
        return 0.999 * u * u > e * e + r * r;
    }
    function vi(n) {
        function t(n) {
            s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g);
        }
        if ((e = n.children) && (l = e.length)) {
            var e, r, u, i, o, a, c, l, s = 1 / 0, f = -1 / 0, h = 1 / 0, g = -1 / 0;
            if (e.forEach(di), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2))
                for (i = e[2], xi(r, u, i), t(i), hi(r, i), r._pack_prev = i, hi(i, u), u = r._pack_next, o = 3; l > o; o++) {
                    xi(r, u, i = e[o]);
                    var p = 0, v = 1, d = 1;
                    for (a = u._pack_next; a !== u; a = a._pack_next, v++)
                        if (pi(a, i)) {
                            p = 1;
                            break;
                        }
                    if (1 == p)
                        for (c = r._pack_prev; c !== a._pack_prev && !pi(c, i); c = c._pack_prev, d++);
                    p ? (d > v || v == d && u.r < r.r ? gi(r, u = a) : gi(r = c, u), o--) : (hi(r, i), u = i, t(i));
                }
            var m = (s + f) / 2, y = (h + g) / 2, x = 0;
            for (o = 0; l > o; o++)
                i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = x, e.forEach(mi);
        }
    }
    function di(n) {
        n._pack_next = n._pack_prev = n;
    }
    function mi(n) {
        delete n._pack_next, delete n._pack_prev;
    }
    function yi(n, t, e, r) {
        var u = n.children;
        if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
            for (var i = -1, o = u.length; ++i < o;)
                yi(u[i], t, e, r);
    }
    function xi(n, t, e) {
        var r = n.r + e.r, u = t.x - n.x, i = t.y - n.y;
        if (r && (u || i)) {
            var o = t.r + e.r, a = u * u + i * i;
            o *= o, r *= r;
            var c = 0.5 + (r - o) / (2 * a), l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
            e.x = n.x + c * u + l * i, e.y = n.y + c * i - l * u;
        } else
            e.x = n.x + r, e.y = n.y;
    }
    function Mi(n, t) {
        return n.parent == t.parent ? 1 : 2;
    }
    function _i(n) {
        var t = n.children;
        return t.length ? t[0] : n.t;
    }
    function bi(n) {
        var t, e = n.children;
        return (t = e.length) ? e[t - 1] : n.t;
    }
    function wi(n, t, e) {
        var r = e / (t.i - n.i);
        t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e;
    }
    function Si(n) {
        for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;)
            t = u[i], t.z += e, t.m += e, e += t.s + (r += t.c);
    }
    function ki(n, t, e) {
        return n.a.parent === t.parent ? n.a : e;
    }
    function Ei(n) {
        return 1 + Vo.max(n, function (n) {
            return n.y;
        });
    }
    function Ai(n) {
        return n.reduce(function (n, t) {
            return n + t.x;
        }, 0) / n.length;
    }
    function Ci(n) {
        var t = n.children;
        return t && t.length ? Ci(t[0]) : n;
    }
    function Ni(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Ni(e[t - 1]) : n;
    }
    function zi(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        };
    }
    function Li(n, t) {
        var e = n.x + t[3], r = n.y + t[0], u = n.dx - t[1] - t[3], i = n.dy - t[0] - t[2];
        return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
            x: e,
            y: r,
            dx: u,
            dy: i
        };
    }
    function Ti(n) {
        var t = n[0], e = n[n.length - 1];
        return e > t ? [
            t,
            e
        ] : [
            e,
            t
        ];
    }
    function qi(n) {
        return n.rangeExtent ? n.rangeExtent() : Ti(n.range());
    }
    function Ri(n, t, e, r) {
        var u = e(n[0], n[1]), i = r(t[0], t[1]);
        return function (n) {
            return i(u(n));
        };
    }
    function Di(n, t) {
        var e, r = 0, u = n.length - 1, i = n[r], o = n[u];
        return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n;
    }
    function Pi(n) {
        return n ? {
            floor: function (t) {
                return Math.floor(t / n) * n;
            },
            ceil: function (t) {
                return Math.ceil(t / n) * n;
            }
        } : sl;
    }
    function Ui(n, t, e, r) {
        var u = [], i = [], o = 0, a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;)
            u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
        return function (t) {
            var e = Vo.bisect(n, t, 1, a) - 1;
            return i[e](u[e](t));
        };
    }
    function ji(n, t, e, r) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Ui : Ri, c = r ? ju : Uu;
            return o = u(n, t, c, e), a = u(t, n, c, gu), i;
        }
        function i(n) {
            return o(n);
        }
        var o, a;
        return i.invert = function (n) {
            return a(n);
        }, i.domain = function (t) {
            return arguments.length ? (n = t.map(Number), u()) : n;
        }, i.range = function (n) {
            return arguments.length ? (t = n, u()) : t;
        }, i.rangeRound = function (n) {
            return i.range(n).interpolate(Lu);
        }, i.clamp = function (n) {
            return arguments.length ? (r = n, u()) : r;
        }, i.interpolate = function (n) {
            return arguments.length ? (e = n, u()) : e;
        }, i.ticks = function (t) {
            return Yi(n, t);
        }, i.tickFormat = function (t, e) {
            return Ii(n, t, e);
        }, i.nice = function (t) {
            return Fi(n, t), u();
        }, i.copy = function () {
            return ji(n, t, e, r);
        }, u();
    }
    function Hi(n, t) {
        return Vo.rebind(n, t, 'range', 'rangeRound', 'interpolate', 'clamp');
    }
    function Fi(n, t) {
        return Di(n, Pi(Oi(n, t)[2]));
    }
    function Oi(n, t) {
        null == t && (t = 10);
        var e = Ti(n), r = e[1] - e[0], u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), i = t / r * u;
        return 0.15 >= i ? u *= 10 : 0.35 >= i ? u *= 5 : 0.75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + 0.5 * u, e[2] = u, e;
    }
    function Yi(n, t) {
        return Vo.range.apply(Vo, Oi(n, t));
    }
    function Ii(n, t, e) {
        var r = Oi(n, t);
        if (e) {
            var u = Ka.exec(e);
            if (u.shift(), 's' === u[8]) {
                var i = Vo.formatPrefix(Math.max(ia(r[0]), ia(r[1])));
                return u[7] || (u[7] = '.' + Zi(i.scale(r[2]))), u[8] = 'f', e = Vo.format(u.join('')), function (n) {
                    return e(i.scale(n)) + i.symbol;
                };
            }
            u[7] || (u[7] = '.' + Vi(u[8], r)), e = u.join('');
        } else
            e = ',.' + Zi(r[2]) + 'f';
        return Vo.format(e);
    }
    function Zi(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + 0.01);
    }
    function Vi(n, t) {
        var e = Zi(t[2]);
        return n in fl ? Math.abs(e - Zi(Math.max(ia(t[0]), ia(t[1])))) + +('e' !== n) : e - 2 * ('%' === n);
    }
    function Xi(n, t, e, r) {
        function u(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t);
        }
        function i(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n);
        }
        function o(t) {
            return n(u(t));
        }
        return o.invert = function (t) {
            return i(n.invert(t));
        }, o.domain = function (t) {
            return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r;
        }, o.base = function (e) {
            return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t;
        }, o.nice = function () {
            var t = Di(r.map(u), e ? Math : gl);
            return n.domain(t), r = t.map(i), o;
        }, o.ticks = function () {
            var n = Ti(r), o = [], a = n[0], c = n[1], l = Math.floor(u(a)), s = Math.ceil(u(c)), f = t % 1 ? 2 : t;
            if (isFinite(s - l)) {
                if (e) {
                    for (; s > l; l++)
                        for (var h = 1; f > h; h++)
                            o.push(i(l) * h);
                    o.push(i(l));
                } else
                    for (o.push(i(l)); l++ < s;)
                        for (var h = f - 1; h > 0; h--)
                            o.push(i(l) * h);
                for (l = 0; o[l] < a; l++);
                for (s = o.length; o[s - 1] > c; s--);
                o = o.slice(l, s);
            }
            return o;
        }, o.tickFormat = function (n, t) {
            if (!arguments.length)
                return hl;
            arguments.length < 2 ? t = hl : 'function' != typeof t && (t = Vo.format(t));
            var r, a = Math.max(0.1, n / o.ticks().length), c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function (n) {
                return n / i(c(u(n) + r)) <= a ? t(n) : '';
            };
        }, o.copy = function () {
            return Xi(n.copy(), t, e, r);
        }, Hi(o, n);
    }
    function $i(n, t, e) {
        function r(t) {
            return n(u(t));
        }
        var u = Bi(t), i = Bi(1 / t);
        return r.invert = function (t) {
            return i(n.invert(t));
        }, r.domain = function (t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e;
        }, r.ticks = function (n) {
            return Yi(e, n);
        }, r.tickFormat = function (n, t) {
            return Ii(e, n, t);
        }, r.nice = function (n) {
            return r.domain(Fi(e, n));
        }, r.exponent = function (o) {
            return arguments.length ? (u = Bi(t = o), i = Bi(1 / t), n.domain(e.map(u)), r) : t;
        }, r.copy = function () {
            return $i(n.copy(), t, e);
        }, Hi(r, n);
    }
    function Bi(n) {
        return function (t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n);
        };
    }
    function Wi(n, t) {
        function e(e) {
            return i[((u.get(e) || ('range' === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length];
        }
        function r(t, e) {
            return Vo.range(n.length).map(function (n) {
                return t + e * n;
            });
        }
        var u, i, a;
        return e.domain = function (r) {
            if (!arguments.length)
                return n;
            n = [], u = new o();
            for (var i, a = -1, c = r.length; ++a < c;)
                u.has(i = r[a]) || u.set(i, n.push(i));
            return e[t.t].apply(e, t.a);
        }, e.range = function (n) {
            return arguments.length ? (i = n, a = 0, t = {
                t: 'range',
                a: arguments
            }, e) : i;
        }, e.rangePoints = function (u, o) {
            arguments.length < 2 && (o = 0);
            var c = u[0], l = u[1], s = (l - c) / (Math.max(1, n.length - 1) + o);
            return i = r(n.length < 2 ? (c + l) / 2 : c + s * o / 2, s), a = 0, t = {
                t: 'rangePoints',
                a: arguments
            }, e;
        }, e.rangeBands = function (u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var l = u[1] < u[0], s = u[l - 0], f = u[1 - l], h = (f - s) / (n.length - o + 2 * c);
            return i = r(s + h * c, h), l && i.reverse(), a = h * (1 - o), t = {
                t: 'rangeBands',
                a: arguments
            }, e;
        }, e.rangeRoundBands = function (u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var l = u[1] < u[0], s = u[l - 0], f = u[1 - l], h = Math.floor((f - s) / (n.length - o + 2 * c)), g = f - s - (n.length - o) * h;
            return i = r(s + Math.round(g / 2), h), l && i.reverse(), a = Math.round(h * (1 - o)), t = {
                t: 'rangeRoundBands',
                a: arguments
            }, e;
        }, e.rangeBand = function () {
            return a;
        }, e.rangeExtent = function () {
            return Ti(t.a[0]);
        }, e.copy = function () {
            return Wi(n, t);
        }, e.domain(n);
    }
    function Ji(e, r) {
        function u() {
            var n = 0, t = r.length;
            for (o = []; ++n < t;)
                o[n - 1] = Vo.quantile(e, n / t);
            return i;
        }
        function i(n) {
            return isNaN(n = +n) ? void 0 : r[Vo.bisect(o, n)];
        }
        var o;
        return i.domain = function (r) {
            return arguments.length ? (e = r.filter(t).sort(n), u()) : e;
        }, i.range = function (n) {
            return arguments.length ? (r = n, u()) : r;
        }, i.quantiles = function () {
            return o;
        }, i.invertExtent = function (n) {
            return n = r.indexOf(n), 0 > n ? [
                0 / 0,
                0 / 0
            ] : [
                n > 0 ? o[n - 1] : e[0],
                n < o.length ? o[n] : e[e.length - 1]
            ];
        }, i.copy = function () {
            return Ji(e, r);
        }, u();
    }
    function Gi(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))];
        }
        function u() {
            return i = e.length / (t - n), o = e.length - 1, r;
        }
        var i, o;
        return r.domain = function (e) {
            return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [
                n,
                t
            ];
        }, r.range = function (n) {
            return arguments.length ? (e = n, u()) : e;
        }, r.invertExtent = function (t) {
            return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [
                t,
                t + 1 / i
            ];
        }, r.copy = function () {
            return Gi(n, t, e);
        }, u();
    }
    function Ki(n, t) {
        function e(e) {
            return e >= e ? t[Vo.bisect(n, e)] : void 0;
        }
        return e.domain = function (t) {
            return arguments.length ? (n = t, e) : n;
        }, e.range = function (n) {
            return arguments.length ? (t = n, e) : t;
        }, e.invertExtent = function (e) {
            return e = t.indexOf(e), [
                n[e - 1],
                n[e]
            ];
        }, e.copy = function () {
            return Ki(n, t);
        }, e;
    }
    function Qi(n) {
        function t(n) {
            return +n;
        }
        return t.invert = t, t.domain = t.range = function (e) {
            return arguments.length ? (n = e.map(t), t) : n;
        }, t.ticks = function (t) {
            return Yi(n, t);
        }, t.tickFormat = function (t, e) {
            return Ii(n, t, e);
        }, t.copy = function () {
            return Qi(n);
        }, t;
    }
    function no(n) {
        return n.innerRadius;
    }
    function to(n) {
        return n.outerRadius;
    }
    function eo(n) {
        return n.startAngle;
    }
    function ro(n) {
        return n.endAngle;
    }
    function uo(n) {
        function t(t) {
            function o() {
                l.push('M', i(n(s), a));
            }
            for (var c, l = [], s = [], f = -1, h = t.length, g = bt(e), p = bt(r); ++f < h;)
                u.call(this, c = t[f], f) ? s.push([
                    +g.call(this, c, f),
                    +p.call(this, c, f)
                ]) : s.length && (o(), s = []);
            return s.length && o(), l.length ? l.join('') : null;
        }
        var e = Sr, r = kr, u = Se, i = io, o = i.key, a = 0.7;
        return t.x = function (n) {
            return arguments.length ? (e = n, t) : e;
        }, t.y = function (n) {
            return arguments.length ? (r = n, t) : r;
        }, t.defined = function (n) {
            return arguments.length ? (u = n, t) : u;
        }, t.interpolate = function (n) {
            return arguments.length ? (o = 'function' == typeof n ? i = n : (i = Ml.get(n) || io).key, t) : o;
        }, t.tension = function (n) {
            return arguments.length ? (a = n, t) : a;
        }, t;
    }
    function io(n) {
        return n.join('L');
    }
    function oo(n) {
        return io(n) + 'Z';
    }
    function ao(n) {
        for (var t = 0, e = n.length, r = n[0], u = [
                    r[0],
                    ',',
                    r[1]
                ]; ++t < e;)
            u.push('H', (r[0] + (r = n[t])[0]) / 2, 'V', r[1]);
        return e > 1 && u.push('H', r[0]), u.join('');
    }
    function co(n) {
        for (var t = 0, e = n.length, r = n[0], u = [
                    r[0],
                    ',',
                    r[1]
                ]; ++t < e;)
            u.push('V', (r = n[t])[1], 'H', r[0]);
        return u.join('');
    }
    function lo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [
                    r[0],
                    ',',
                    r[1]
                ]; ++t < e;)
            u.push('H', (r = n[t])[0], 'V', r[1]);
        return u.join('');
    }
    function so(n, t) {
        return n.length < 4 ? io(n) : n[1] + go(n.slice(1, n.length - 1), po(n, t));
    }
    function fo(n, t) {
        return n.length < 3 ? io(n) : n[0] + go((n.push(n[0]), n), po([n[n.length - 2]].concat(n, [n[1]]), t));
    }
    function ho(n, t) {
        return n.length < 3 ? io(n) : n[0] + go(n, po(n, t));
    }
    function go(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
            return io(n);
        var e = n.length != t.length, r = '', u = n[0], i = n[1], o = t[0], a = o, c = 1;
        if (e && (r += 'Q' + (i[0] - 2 * o[0] / 3) + ',' + (i[1] - 2 * o[1] / 3) + ',' + i[0] + ',' + i[1], u = n[1], c = 2), t.length > 1) {
            a = t[1], i = n[c], c++, r += 'C' + (u[0] + o[0]) + ',' + (u[1] + o[1]) + ',' + (i[0] - a[0]) + ',' + (i[1] - a[1]) + ',' + i[0] + ',' + i[1];
            for (var l = 2; l < t.length; l++, c++)
                i = n[c], a = t[l], r += 'S' + (i[0] - a[0]) + ',' + (i[1] - a[1]) + ',' + i[0] + ',' + i[1];
        }
        if (e) {
            var s = n[c];
            r += 'Q' + (i[0] + 2 * a[0] / 3) + ',' + (i[1] + 2 * a[1] / 3) + ',' + s[0] + ',' + s[1];
        }
        return r;
    }
    function po(n, t) {
        for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;)
            e = i, i = o, o = n[a], r.push([
                u * (o[0] - e[0]),
                u * (o[1] - e[1])
            ]);
        return r;
    }
    function vo(n) {
        if (n.length < 3)
            return io(n);
        var t = 1, e = n.length, r = n[0], u = r[0], i = r[1], o = [
                u,
                u,
                u,
                (r = n[1])[0]
            ], a = [
                i,
                i,
                i,
                r[1]
            ], c = [
                u,
                ',',
                i,
                'L',
                Mo(wl, o),
                ',',
                Mo(wl, a)
            ];
        for (n.push(n[e - 1]); ++t <= e;)
            r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), _o(c, o, a);
        return n.pop(), c.push('L', r), c.join('');
    }
    function mo(n) {
        if (n.length < 4)
            return io(n);
        for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;)
            t = n[r], i.push(t[0]), o.push(t[1]);
        for (e.push(Mo(wl, i) + ',' + Mo(wl, o)), --r; ++r < u;)
            t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), _o(e, i, o);
        return e.join('');
    }
    function yo(n) {
        for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;)
            e = n[r % u], o.push(e[0]), a.push(e[1]);
        for (t = [
                Mo(wl, o),
                ',',
                Mo(wl, a)
            ], --r; ++r < i;)
            e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), _o(t, o, a);
        return t.join('');
    }
    function xo(n, t) {
        var e = n.length - 1;
        if (e)
            for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e;)
                r = n[l], u = l / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
        return vo(n);
    }
    function Mo(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
    }
    function _o(n, t, e) {
        n.push('C', Mo(_l, t), ',', Mo(_l, e), ',', Mo(bl, t), ',', Mo(bl, e), ',', Mo(wl, t), ',', Mo(wl, e));
    }
    function bo(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0]);
    }
    function wo(n) {
        for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = bo(u, i); ++t < e;)
            r[t] = (o + (o = bo(u = i, i = n[t + 1]))) / 2;
        return r[t] = o, r;
    }
    function So(n) {
        for (var t, e, r, u, i = [], o = wo(n), a = -1, c = n.length - 1; ++a < c;)
            t = bo(n[a], n[a + 1]), ia(t) < Ea ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
        for (a = -1; ++a <= c;)
            u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([
                u || 0,
                o[a] * u || 0
            ]);
        return i;
    }
    function ko(n) {
        return n.length < 3 ? io(n) : n[0] + go(n, So(n));
    }
    function Eo(n) {
        for (var t, e, r, u = -1, i = n.length; ++u < i;)
            t = n[u], e = t[0], r = t[1] + yl, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
        return n;
    }
    function Ao(n) {
        function t(t) {
            function c() {
                v.push('M', a(n(m), f), s, l(n(d.reverse()), f), 'Z');
            }
            for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = bt(e), _ = bt(u), b = e === r ? function () {
                        return g;
                    } : bt(r), w = u === i ? function () {
                        return p;
                    } : bt(i); ++y < x;)
                o.call(this, h = t[y], y) ? (d.push([
                    g = +M.call(this, h, y),
                    p = +_.call(this, h, y)
                ]), m.push([
                    +b.call(this, h, y),
                    +w.call(this, h, y)
                ])) : d.length && (c(), d = [], m = []);
            return d.length && c(), v.length ? v.join('') : null;
        }
        var e = Sr, r = Sr, u = 0, i = kr, o = Se, a = io, c = a.key, l = a, s = 'L', f = 0.7;
        return t.x = function (n) {
            return arguments.length ? (e = r = n, t) : r;
        }, t.x0 = function (n) {
            return arguments.length ? (e = n, t) : e;
        }, t.x1 = function (n) {
            return arguments.length ? (r = n, t) : r;
        }, t.y = function (n) {
            return arguments.length ? (u = i = n, t) : i;
        }, t.y0 = function (n) {
            return arguments.length ? (u = n, t) : u;
        }, t.y1 = function (n) {
            return arguments.length ? (i = n, t) : i;
        }, t.defined = function (n) {
            return arguments.length ? (o = n, t) : o;
        }, t.interpolate = function (n) {
            return arguments.length ? (c = 'function' == typeof n ? a = n : (a = Ml.get(n) || io).key, l = a.reverse || a, s = a.closed ? 'M' : 'L', t) : c;
        }, t.tension = function (n) {
            return arguments.length ? (f = n, t) : f;
        }, t;
    }
    function Co(n) {
        return n.radius;
    }
    function No(n) {
        return [
            n.x,
            n.y
        ];
    }
    function zo(n) {
        return function () {
            var t = n.apply(this, arguments), e = t[0], r = t[1] + yl;
            return [
                e * Math.cos(r),
                e * Math.sin(r)
            ];
        };
    }
    function Lo() {
        return 64;
    }
    function To() {
        return 'circle';
    }
    function qo(n) {
        var t = Math.sqrt(n / wa);
        return 'M0,' + t + 'A' + t + ',' + t + ' 0 1,1 0,' + -t + 'A' + t + ',' + t + ' 0 1,1 0,' + t + 'Z';
    }
    function Ro(n, t) {
        return sa(n, Nl), n.id = t, n;
    }
    function Do(n, t, e, r) {
        var u = n.id;
        return P(n, 'function' == typeof e ? function (n, i, o) {
            n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)));
        } : (e = r(e), function (n) {
            n.__transition__[u].tween.set(t, e);
        }));
    }
    function Po(n) {
        return null == n && (n = ''), function () {
            this.textContent = n;
        };
    }
    function Uo(n, t, e, r) {
        var u = n.__transition__ || (n.__transition__ = {
                active: 0,
                count: 0
            }), i = u[e];
        if (!i) {
            var a = r.time;
            i = u[e] = {
                tween: new o(),
                time: a,
                ease: r.ease,
                delay: r.delay,
                duration: r.duration
            }, ++u.count, Vo.timer(function (r) {
                function o(r) {
                    return u.active > e ? l() : (u.active = e, i.event && i.event.start.call(n, s, t), i.tween.forEach(function (e, r) {
                        (r = r.call(n, s, t)) && v.push(r);
                    }), Vo.timer(function () {
                        return p.c = c(r || 1) ? Se : c, 1;
                    }, 0, a), void 0);
                }
                function c(r) {
                    if (u.active !== e)
                        return l();
                    for (var o = r / g, a = f(o), c = v.length; c > 0;)
                        v[--c].call(n, a);
                    return o >= 1 ? (i.event && i.event.end.call(n, s, t), l()) : void 0;
                }
                function l() {
                    return --u.count ? delete u[e] : delete n.__transition__, 1;
                }
                var s = n.__data__, f = i.ease, h = i.delay, g = i.duration, p = Wa, v = [];
                return p.t = h + a, r >= h ? o(r - h) : (p.c = o, void 0);
            }, 0, a);
        }
    }
    function jo(n, t) {
        n.attr('transform', function (n) {
            return 'translate(' + t(n) + ',0)';
        });
    }
    function Ho(n, t) {
        n.attr('transform', function (n) {
            return 'translate(0,' + t(n) + ')';
        });
    }
    function Fo(n) {
        return n.toISOString();
    }
    function Oo(n, t, e) {
        function r(t) {
            return n(t);
        }
        function u(n, e) {
            var r = n[1] - n[0], u = r / e, i = Vo.bisect(jl, u);
            return i == jl.length ? [
                t.year,
                Oi(n.map(function (n) {
                    return n / 31536000000;
                }), e)[2]
            ] : i ? t[u / jl[i - 1] < jl[i] / u ? i - 1 : i] : [
                Ol,
                Oi(n, e)[2]
            ];
        }
        return r.invert = function (t) {
            return Yo(n.invert(t));
        }, r.domain = function (t) {
            return arguments.length ? (n.domain(t), r) : n.domain().map(Yo);
        }, r.nice = function (n, t) {
            function e(e) {
                return !isNaN(e) && !n.range(e, Yo(+e + 1), t).length;
            }
            var i = r.domain(), o = Ti(i), a = null == n ? u(o, 10) : 'number' == typeof n && u(o, n);
            return a && (n = a[0], t = a[1]), r.domain(Di(i, t > 1 ? {
                floor: function (t) {
                    for (; e(t = n.floor(t));)
                        t = Yo(t - 1);
                    return t;
                },
                ceil: function (t) {
                    for (; e(t = n.ceil(t));)
                        t = Yo(+t + 1);
                    return t;
                }
            } : n));
        }, r.ticks = function (n, t) {
            var e = Ti(r.domain()), i = null == n ? u(e, 10) : 'number' == typeof n ? u(e, n) : !n.range && [
                    { range: n },
                    t
                ];
            return i && (n = i[0], t = i[1]), n.range(e[0], Yo(+e[1] + 1), 1 > t ? 1 : t);
        }, r.tickFormat = function () {
            return e;
        }, r.copy = function () {
            return Oo(n.copy(), t, e);
        }, Hi(r, n);
    }
    function Yo(n) {
        return new Date(n);
    }
    function Io(n) {
        return JSON.parse(n.responseText);
    }
    function Zo(n) {
        var t = Bo.createRange();
        return t.selectNode(Bo.body), t.createContextualFragment(n.responseText);
    }
    var Vo = { version: '3.4.12' };
    Date.now || (Date.now = function () {
        return +new Date();
    });
    var Xo = [].slice, $o = function (n) {
            return Xo.call(n);
        }, Bo = document, Wo = Bo.documentElement, Jo = window;
    try {
        $o(Wo.childNodes)[0].nodeType;
    } catch (Go) {
        $o = function (n) {
            for (var t = n.length, e = new Array(t); t--;)
                e[t] = n[t];
            return e;
        };
    }
    try {
        Bo.createElement('div').style.setProperty('opacity', 0, '');
    } catch (Ko) {
        var Qo = Jo.Element.prototype, na = Qo.setAttribute, ta = Qo.setAttributeNS, ea = Jo.CSSStyleDeclaration.prototype, ra = ea.setProperty;
        Qo.setAttribute = function (n, t) {
            na.call(this, n, t + '');
        }, Qo.setAttributeNS = function (n, t, e) {
            ta.call(this, n, t, e + '');
        }, ea.setProperty = function (n, t, e) {
            ra.call(this, n, t + '', e);
        };
    }
    Vo.ascending = n, Vo.descending = function (n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0;
    }, Vo.min = function (n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e);)
                e = void 0;
            for (; ++u < i;)
                null != (r = n[u]) && e > r && (e = r);
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);)
                e = void 0;
            for (; ++u < i;)
                null != (r = t.call(n, n[u], u)) && e > r && (e = r);
        }
        return e;
    }, Vo.max = function (n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e);)
                e = void 0;
            for (; ++u < i;)
                null != (r = n[u]) && r > e && (e = r);
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);)
                e = void 0;
            for (; ++u < i;)
                null != (r = t.call(n, n[u], u)) && r > e && (e = r);
        }
        return e;
    }, Vo.extent = function (n, t) {
        var e, r, u, i = -1, o = n.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null != (e = u = n[i]) && e >= e);)
                e = u = void 0;
            for (; ++i < o;)
                null != (r = n[i]) && (e > r && (e = r), r > u && (u = r));
        } else {
            for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e);)
                e = void 0;
            for (; ++i < o;)
                null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r));
        }
        return [
            e,
            u
        ];
    }, Vo.sum = function (n, t) {
        var e, r = 0, u = n.length, i = -1;
        if (1 === arguments.length)
            for (; ++i < u;)
                isNaN(e = +n[i]) || (r += e);
        else
            for (; ++i < u;)
                isNaN(e = +t.call(n, n[i], i)) || (r += e);
        return r;
    }, Vo.mean = function (n, e) {
        var r, u = 0, i = n.length, o = -1, a = i;
        if (1 === arguments.length)
            for (; ++o < i;)
                t(r = n[o]) ? u += r : --a;
        else
            for (; ++o < i;)
                t(r = e.call(n, n[o], o)) ? u += r : --a;
        return a ? u / a : void 0;
    }, Vo.quantile = function (n, t) {
        var e = (n.length - 1) * t + 1, r = Math.floor(e), u = +n[r - 1], i = e - r;
        return i ? u + i * (n[r] - u) : u;
    }, Vo.median = function (e, r) {
        return arguments.length > 1 && (e = e.map(r)), e = e.filter(t), e.length ? Vo.quantile(e.sort(n), 0.5) : void 0;
    };
    var ua = e(n);
    Vo.bisectLeft = ua.left, Vo.bisect = Vo.bisectRight = ua.right, Vo.bisector = function (t) {
        return e(1 === t.length ? function (e, r) {
            return n(t(e), r);
        } : t);
    }, Vo.shuffle = function (n) {
        for (var t, e, r = n.length; r;)
            e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
        return n;
    }, Vo.permute = function (n, t) {
        for (var e = t.length, r = new Array(e); e--;)
            r[e] = n[t[e]];
        return r;
    }, Vo.pairs = function (n) {
        for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;)
            i[e] = [
                t = u,
                u = n[++e]
            ];
        return i;
    }, Vo.zip = function () {
        if (!(u = arguments.length))
            return [];
        for (var n = -1, t = Vo.min(arguments, r), e = new Array(t); ++n < t;)
            for (var u, i = -1, o = e[n] = new Array(u); ++i < u;)
                o[i] = arguments[i][n];
        return e;
    }, Vo.transpose = function (n) {
        return Vo.zip.apply(Vo, n);
    }, Vo.keys = function (n) {
        var t = [];
        for (var e in n)
            t.push(e);
        return t;
    }, Vo.values = function (n) {
        var t = [];
        for (var e in n)
            t.push(n[e]);
        return t;
    }, Vo.entries = function (n) {
        var t = [];
        for (var e in n)
            t.push({
                key: e,
                value: n[e]
            });
        return t;
    }, Vo.merge = function (n) {
        for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;)
            o += n[i].length;
        for (e = new Array(o); --u >= 0;)
            for (r = n[u], t = r.length; --t >= 0;)
                e[--o] = r[t];
        return e;
    };
    var ia = Math.abs;
    Vo.range = function (n, t, e) {
        if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e)
            throw new Error('infinite range');
        var r, i = [], o = u(ia(e)), a = -1;
        if (n *= o, t *= o, e *= o, 0 > e)
            for (; (r = n + e * ++a) > t;)
                i.push(r / o);
        else
            for (; (r = n + e * ++a) < t;)
                i.push(r / o);
        return i;
    }, Vo.map = function (n) {
        var t = new o();
        if (n instanceof o)
            n.forEach(function (n, e) {
                t.set(n, e);
            });
        else
            for (var e in n)
                t.set(e, n[e]);
        return t;
    }, i(o, {
        has: a,
        get: function (n) {
            return this[oa + n];
        },
        set: function (n, t) {
            return this[oa + n] = t;
        },
        remove: c,
        keys: l,
        values: function () {
            var n = [];
            return this.forEach(function (t, e) {
                n.push(e);
            }), n;
        },
        entries: function () {
            var n = [];
            return this.forEach(function (t, e) {
                n.push({
                    key: t,
                    value: e
                });
            }), n;
        },
        size: s,
        empty: f,
        forEach: function (n) {
            for (var t in this)
                t.charCodeAt(0) === aa && n.call(this, t.slice(1), this[t]);
        }
    });
    var oa = '\0', aa = oa.charCodeAt(0);
    Vo.nest = function () {
        function n(t, a, c) {
            if (c >= i.length)
                return r ? r.call(u, a) : e ? a.sort(e) : a;
            for (var l, s, f, h, g = -1, p = a.length, v = i[c++], d = new o(); ++g < p;)
                (h = d.get(l = v(s = a[g]))) ? h.push(s) : d.set(l, [s]);
            return t ? (s = t(), f = function (e, r) {
                s.set(e, n(t, r, c));
            }) : (s = {}, f = function (e, r) {
                s[e] = n(t, r, c);
            }), d.forEach(f), s;
        }
        function t(n, e) {
            if (e >= i.length)
                return n;
            var r = [], u = a[e++];
            return n.forEach(function (n, u) {
                r.push({
                    key: n,
                    values: t(u, e)
                });
            }), u ? r.sort(function (n, t) {
                return u(n.key, t.key);
            }) : r;
        }
        var e, r, u = {}, i = [], a = [];
        return u.map = function (t, e) {
            return n(e, t, 0);
        }, u.entries = function (e) {
            return t(n(Vo.map, e, 0), 0);
        }, u.key = function (n) {
            return i.push(n), u;
        }, u.sortKeys = function (n) {
            return a[i.length - 1] = n, u;
        }, u.sortValues = function (n) {
            return e = n, u;
        }, u.rollup = function (n) {
            return r = n, u;
        }, u;
    }, Vo.set = function (n) {
        var t = new h();
        if (n)
            for (var e = 0, r = n.length; r > e; ++e)
                t.add(n[e]);
        return t;
    }, i(h, {
        has: a,
        add: function (n) {
            return this[oa + n] = !0, n;
        },
        remove: function (n) {
            return n = oa + n, n in this && delete this[n];
        },
        values: l,
        size: s,
        empty: f,
        forEach: function (n) {
            for (var t in this)
                t.charCodeAt(0) === aa && n.call(this, t.slice(1));
        }
    }), Vo.behavior = {}, Vo.rebind = function (n, t) {
        for (var e, r = 1, u = arguments.length; ++r < u;)
            n[e = arguments[r]] = g(n, t, t[e]);
        return n;
    };
    var ca = [
        'webkit',
        'ms',
        'moz',
        'Moz',
        'o',
        'O'
    ];
    Vo.dispatch = function () {
        for (var n = new d(), t = -1, e = arguments.length; ++t < e;)
            n[arguments[t]] = m(n);
        return n;
    }, d.prototype.on = function (n, t) {
        var e = n.indexOf('.'), r = '';
        if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n)
            return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this)
                    this.hasOwnProperty(n) && this[n].on(r, null);
            return this;
        }
    }, Vo.event = null, Vo.requote = function (n) {
        return n.replace(la, '\\$&');
    };
    var la = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, sa = {}.__proto__ ? function (n, t) {
            n.__proto__ = t;
        } : function (n, t) {
            for (var e in t)
                n[e] = t[e];
        }, fa = function (n, t) {
            return t.querySelector(n);
        }, ha = function (n, t) {
            return t.querySelectorAll(n);
        }, ga = Wo.matches || Wo[p(Wo, 'matchesSelector')], pa = function (n, t) {
            return ga.call(n, t);
        };
    'function' == typeof Sizzle && (fa = function (n, t) {
        return Sizzle(n, t)[0] || null;
    }, ha = Sizzle, pa = Sizzle.matchesSelector), Vo.selection = function () {
        return ya;
    };
    var va = Vo.selection.prototype = [];
    va.select = function (n) {
        var t, e, r, u, i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []), t.parentNode = (r = this[o]).parentNode;
            for (var c = -1, l = r.length; ++c < l;)
                (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && '__data__' in u && (e.__data__ = u.__data__)) : t.push(null);
        }
        return _(i);
    }, va.selectAll = function (n) {
        var t, e, r = [];
        n = w(n);
        for (var u = -1, i = this.length; ++u < i;)
            for (var o = this[u], a = -1, c = o.length; ++a < c;)
                (e = o[a]) && (r.push(t = $o(n.call(e, e.__data__, a, u))), t.parentNode = e);
        return _(r);
    };
    var da = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: 'http://www.w3.org/1999/xhtml',
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/'
    };
    Vo.ns = {
        prefix: da,
        qualify: function (n) {
            var t = n.indexOf(':'), e = n;
            return t >= 0 && (e = n.slice(0, t), n = n.slice(t + 1)), da.hasOwnProperty(e) ? {
                space: da[e],
                local: n
            } : n;
        }
    }, va.attr = function (n, t) {
        if (arguments.length < 2) {
            if ('string' == typeof n) {
                var e = this.node();
                return n = Vo.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
            }
            for (t in n)
                this.each(S(t, n[t]));
            return this;
        }
        return this.each(S(n, t));
    }, va.classed = function (n, t) {
        if (arguments.length < 2) {
            if ('string' == typeof n) {
                var e = this.node(), r = (n = A(n)).length, u = -1;
                if (t = e.classList) {
                    for (; ++u < r;)
                        if (!t.contains(n[u]))
                            return !1;
                } else
                    for (t = e.getAttribute('class'); ++u < r;)
                        if (!E(n[u]).test(t))
                            return !1;
                return !0;
            }
            for (t in n)
                this.each(C(t, n[t]));
            return this;
        }
        return this.each(C(n, t));
    }, va.style = function (n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ('string' != typeof n) {
                2 > r && (t = '');
                for (e in n)
                    this.each(z(e, n[e], t));
                return this;
            }
            if (2 > r)
                return Jo.getComputedStyle(this.node(), null).getPropertyValue(n);
            e = '';
        }
        return this.each(z(n, t, e));
    }, va.property = function (n, t) {
        if (arguments.length < 2) {
            if ('string' == typeof n)
                return this.node()[n];
            for (t in n)
                this.each(L(t, n[t]));
            return this;
        }
        return this.each(L(n, t));
    }, va.text = function (n) {
        return arguments.length ? this.each('function' == typeof n ? function () {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? '' : t;
        } : null == n ? function () {
            this.textContent = '';
        } : function () {
            this.textContent = n;
        }) : this.node().textContent;
    }, va.html = function (n) {
        return arguments.length ? this.each('function' == typeof n ? function () {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? '' : t;
        } : null == n ? function () {
            this.innerHTML = '';
        } : function () {
            this.innerHTML = n;
        }) : this.node().innerHTML;
    }, va.append = function (n) {
        return n = T(n), this.select(function () {
            return this.appendChild(n.apply(this, arguments));
        });
    }, va.insert = function (n, t) {
        return n = T(n), t = b(t), this.select(function () {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null);
        });
    }, va.remove = function () {
        return this.each(function () {
            var n = this.parentNode;
            n && n.removeChild(this);
        });
    }, va.data = function (n, t) {
        function e(n, e) {
            var r, u, i, a = n.length, f = e.length, h = Math.min(a, f), g = new Array(f), p = new Array(f), v = new Array(a);
            if (t) {
                var d, m = new o(), y = new o(), x = [];
                for (r = -1; ++r < a;)
                    d = t.call(u = n[r], u.__data__, r), m.has(d) ? v[r] = u : m.set(d, u), x.push(d);
                for (r = -1; ++r < f;)
                    d = t.call(e, i = e[r], r), (u = m.get(d)) ? (g[r] = u, u.__data__ = i) : y.has(d) || (p[r] = q(i)), y.set(d, i), m.remove(d);
                for (r = -1; ++r < a;)
                    m.has(x[r]) && (v[r] = n[r]);
            } else {
                for (r = -1; ++r < h;)
                    u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = q(i);
                for (; f > r; ++r)
                    p[r] = q(e[r]);
                for (; a > r; ++r)
                    v[r] = n[r];
            }
            p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), l.push(g), s.push(v);
        }
        var r, u, i = -1, a = this.length;
        if (!arguments.length) {
            for (n = new Array(a = (r = this[0]).length); ++i < a;)
                (u = r[i]) && (n[i] = u.__data__);
            return n;
        }
        var c = U([]), l = _([]), s = _([]);
        if ('function' == typeof n)
            for (; ++i < a;)
                e(r = this[i], n.call(r, r.parentNode.__data__, i));
        else
            for (; ++i < a;)
                e(r = this[i], n);
        return l.enter = function () {
            return c;
        }, l.exit = function () {
            return s;
        }, l;
    }, va.datum = function (n) {
        return arguments.length ? this.property('__data__', n) : this.property('__data__');
    }, va.filter = function (n) {
        var t, e, r, u = [];
        'function' != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []), t.parentNode = (e = this[i]).parentNode;
            for (var a = 0, c = e.length; c > a; a++)
                (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
        }
        return _(u);
    }, va.order = function () {
        for (var n = -1, t = this.length; ++n < t;)
            for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)
                (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
        return this;
    }, va.sort = function (n) {
        n = D.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e;)
            this[t].sort(n);
        return this.order();
    }, va.each = function (n) {
        return P(this, function (t, e, r) {
            n.call(t, t.__data__, e, r);
        });
    }, va.call = function (n) {
        var t = $o(arguments);
        return n.apply(t[0] = this, t), this;
    }, va.empty = function () {
        return !this.node();
    }, va.node = function () {
        for (var n = 0, t = this.length; t > n; n++)
            for (var e = this[n], r = 0, u = e.length; u > r; r++) {
                var i = e[r];
                if (i)
                    return i;
            }
        return null;
    }, va.size = function () {
        var n = 0;
        return P(this, function () {
            ++n;
        }), n;
    };
    var ma = [];
    Vo.selection.enter = U, Vo.selection.enter.prototype = ma, ma.append = va.append, ma.empty = va.empty, ma.node = va.node, ma.call = va.call, ma.size = va.size, ma.select = function (n) {
        for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
            r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
            for (var l = -1, s = u.length; ++l < s;)
                (i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)), e.__data__ = i.__data__) : t.push(null);
        }
        return _(o);
    }, ma.insert = function (n, t) {
        return arguments.length < 2 && (t = j(this)), va.insert.call(this, n, t);
    }, va.transition = function () {
        for (var n, t, e = kl || ++zl, r = [], u = El || {
                    time: Date.now(),
                    ease: Mu,
                    delay: 0,
                    duration: 250
                }, i = -1, o = this.length; ++i < o;) {
            r.push(n = []);
            for (var a = this[i], c = -1, l = a.length; ++c < l;)
                (t = a[c]) && Uo(t, c, e, u), n.push(t);
        }
        return Ro(r, e);
    }, va.interrupt = function () {
        return this.each(H);
    }, Vo.select = function (n) {
        var t = ['string' == typeof n ? fa(n, Bo) : n];
        return t.parentNode = Wo, _([t]);
    }, Vo.selectAll = function (n) {
        var t = $o('string' == typeof n ? ha(n, Bo) : n);
        return t.parentNode = Wo, _([t]);
    };
    var ya = Vo.select(Wo);
    va.on = function (n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ('string' != typeof n) {
                2 > r && (t = !1);
                for (e in n)
                    this.each(F(e, n[e], t));
                return this;
            }
            if (2 > r)
                return (r = this.node()['__on' + n]) && r._;
            e = !1;
        }
        return this.each(F(n, t, e));
    };
    var xa = Vo.map({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
    });
    xa.forEach(function (n) {
        'on' + n in Bo && xa.remove(n);
    });
    var Ma = 'onselectstart' in Bo ? null : p(Wo.style, 'userSelect'), _a = 0;
    Vo.mouse = function (n) {
        return Z(n, x());
    };
    var ba = /WebKit/.test(Jo.navigator.userAgent) ? -1 : 0;
    Vo.touch = function (n, t, e) {
        if (arguments.length < 3 && (e = t, t = x().changedTouches), t)
            for (var r, u = 0, i = t.length; i > u; ++u)
                if ((r = t[u]).identifier === e)
                    return Z(n, r);
    }, Vo.behavior.drag = function () {
        function n() {
            this.on('mousedown.drag', u).on('touchstart.drag', i);
        }
        function t(n, t, u, i, o) {
            return function () {
                function a() {
                    var n, e, r = t(h, v);
                    r && (n = r[0] - x[0], e = r[1] - x[1], p |= n | e, x = r, g({
                        type: 'drag',
                        x: r[0] + l[0],
                        y: r[1] + l[1],
                        dx: n,
                        dy: e
                    }));
                }
                function c() {
                    t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && Vo.event.target === f), g({ type: 'dragend' }));
                }
                var l, s = this, f = Vo.event.target, h = s.parentNode, g = e.of(s, arguments), p = 0, v = n(), d = '.drag' + (null == v ? '' : '-' + v), m = Vo.select(u()).on(i + d, a).on(o + d, c), y = I(), x = t(h, v);
                r ? (l = r.apply(s, arguments), l = [
                    l.x - x[0],
                    l.y - x[1]
                ]) : l = [
                    0,
                    0
                ], g({ type: 'dragstart' });
            };
        }
        var e = M(n, 'drag', 'dragstart', 'dragend'), r = null, u = t(v, Vo.mouse, $, 'mousemove', 'mouseup'), i = t(V, Vo.touch, X, 'touchmove', 'touchend');
        return n.origin = function (t) {
            return arguments.length ? (r = t, n) : r;
        }, Vo.rebind(n, e, 'on');
    }, Vo.touches = function (n, t) {
        return arguments.length < 2 && (t = x().touches), t ? $o(t).map(function (t) {
            var e = Z(n, t);
            return e.identifier = t.identifier, e;
        }) : [];
    };
    var wa = Math.PI, Sa = 2 * wa, ka = wa / 2, Ea = 0.000001, Aa = Ea * Ea, Ca = wa / 180, Na = 180 / wa, za = Math.SQRT2, La = 2, Ta = 4;
    Vo.interpolateZoom = function (n, t) {
        function e(n) {
            var t = n * y;
            if (m) {
                var e = Q(v), o = i / (La * h) * (e * nt(za * t + v) - K(v));
                return [
                    r + o * l,
                    u + o * s,
                    i * e / Q(za * t + v)
                ];
            }
            return [
                r + n * l,
                u + n * s,
                i * Math.exp(za * t)
            ];
        }
        var r = n[0], u = n[1], i = n[2], o = t[0], a = t[1], c = t[2], l = o - r, s = a - u, f = l * l + s * s, h = Math.sqrt(f), g = (c * c - i * i + Ta * f) / (2 * i * La * h), p = (c * c - i * i - Ta * f) / (2 * c * La * h), v = Math.log(Math.sqrt(g * g + 1) - g), d = Math.log(Math.sqrt(p * p + 1) - p), m = d - v, y = (m || Math.log(c / i)) / za;
        return e.duration = 1000 * y, e;
    }, Vo.behavior.zoom = function () {
        function n(n) {
            n.on(A, l).on(Da + '.zoom', f).on('dblclick.zoom', h).on(z, s);
        }
        function t(n) {
            return [
                (n[0] - S.x) / S.k,
                (n[1] - S.y) / S.k
            ];
        }
        function e(n) {
            return [
                n[0] * S.k + S.x,
                n[1] * S.k + S.y
            ];
        }
        function r(n) {
            S.k = Math.max(E[0], Math.min(E[1], n));
        }
        function u(n, t) {
            t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1];
        }
        function i() {
            _ && _.domain(x.range().map(function (n) {
                return (n - S.x) / S.k;
            }).map(x.invert)), w && w.domain(b.range().map(function (n) {
                return (n - S.y) / S.k;
            }).map(b.invert));
        }
        function o(n) {
            n({ type: 'zoomstart' });
        }
        function a(n) {
            i(), n({
                type: 'zoom',
                scale: S.k,
                translate: [
                    S.x,
                    S.y
                ]
            });
        }
        function c(n) {
            n({ type: 'zoomend' });
        }
        function l() {
            function n() {
                s = 1, u(Vo.mouse(r), h), a(l);
            }
            function e() {
                f.on(C, null).on(N, null), g(s && Vo.event.target === i), c(l);
            }
            var r = this, i = Vo.event.target, l = L.of(r, arguments), s = 0, f = Vo.select(Jo).on(C, n).on(N, e), h = t(Vo.mouse(r)), g = I();
            H.call(r), o(l);
        }
        function s() {
            function n() {
                var n = Vo.touches(g);
                return h = S.k, n.forEach(function (n) {
                    n.identifier in v && (v[n.identifier] = t(n));
                }), n;
            }
            function e() {
                var t = Vo.event.target;
                Vo.select(t).on(M, i).on(_, f), b.push(t);
                for (var e = Vo.event.changedTouches, o = 0, c = e.length; c > o; ++o)
                    v[e[o].identifier] = null;
                var l = n(), s = Date.now();
                if (1 === l.length) {
                    if (500 > s - m) {
                        var h = l[0], g = v[h.identifier];
                        r(2 * S.k), u(h, g), y(), a(p);
                    }
                    m = s;
                } else if (l.length > 1) {
                    var h = l[0], x = l[1], w = h[0] - x[0], k = h[1] - x[1];
                    d = w * w + k * k;
                }
            }
            function i() {
                for (var n, t, e, i, o = Vo.touches(g), c = 0, l = o.length; l > c; ++c, i = null)
                    if (e = o[c], i = v[e.identifier]) {
                        if (t)
                            break;
                        n = e, t = i;
                    }
                if (i) {
                    var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s, f = d && Math.sqrt(s / d);
                    n = [
                        (n[0] + e[0]) / 2,
                        (n[1] + e[1]) / 2
                    ], t = [
                        (t[0] + i[0]) / 2,
                        (t[1] + i[1]) / 2
                    ], r(f * h);
                }
                m = null, u(n, t), a(p);
            }
            function f() {
                if (Vo.event.touches.length) {
                    for (var t = Vo.event.changedTouches, e = 0, r = t.length; r > e; ++e)
                        delete v[t[e].identifier];
                    for (var u in v)
                        return void n();
                }
                Vo.selectAll(b).on(x, null), w.on(A, l).on(z, s), k(), c(p);
            }
            var h, g = this, p = L.of(g, arguments), v = {}, d = 0, x = '.zoom-' + Vo.event.changedTouches[0].identifier, M = 'touchmove' + x, _ = 'touchend' + x, b = [], w = Vo.select(g), k = I();
            H.call(g), e(), o(p), w.on(A, null).on(z, e);
        }
        function f() {
            var n = L.of(this, arguments);
            d ? clearTimeout(d) : (g = t(p = v || Vo.mouse(this)), H.call(this), o(n)), d = setTimeout(function () {
                d = null, c(n);
            }, 50), y(), r(Math.pow(2, 0.002 * qa()) * S.k), u(p, g), a(n);
        }
        function h() {
            var n = L.of(this, arguments), e = Vo.mouse(this), i = t(e), l = Math.log(S.k) / Math.LN2;
            o(n), r(Math.pow(2, Vo.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1)), u(e, i), a(n), c(n);
        }
        var g, p, v, d, m, x, _, b, w, S = {
                x: 0,
                y: 0,
                k: 1
            }, k = [
                960,
                500
            ], E = Ra, A = 'mousedown.zoom', C = 'mousemove.zoom', N = 'mouseup.zoom', z = 'touchstart.zoom', L = M(n, 'zoomstart', 'zoom', 'zoomend');
        return n.event = function (n) {
            n.each(function () {
                var n = L.of(this, arguments), t = S;
                kl ? Vo.select(this).transition().each('start.zoom', function () {
                    S = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, o(n);
                }).tween('zoom:zoom', function () {
                    var e = k[0], r = k[1], u = e / 2, i = r / 2, o = Vo.interpolateZoom([
                            (u - S.x) / S.k,
                            (i - S.y) / S.k,
                            e / S.k
                        ], [
                            (u - t.x) / t.k,
                            (i - t.y) / t.k,
                            e / t.k
                        ]);
                    return function (t) {
                        var r = o(t), c = e / r[2];
                        this.__chart__ = S = {
                            x: u - r[0] * c,
                            y: i - r[1] * c,
                            k: c
                        }, a(n);
                    };
                }).each('end.zoom', function () {
                    c(n);
                }) : (this.__chart__ = S, o(n), a(n), c(n));
            });
        }, n.translate = function (t) {
            return arguments.length ? (S = {
                x: +t[0],
                y: +t[1],
                k: S.k
            }, i(), n) : [
                S.x,
                S.y
            ];
        }, n.scale = function (t) {
            return arguments.length ? (S = {
                x: S.x,
                y: S.y,
                k: +t
            }, i(), n) : S.k;
        }, n.scaleExtent = function (t) {
            return arguments.length ? (E = null == t ? Ra : [
                +t[0],
                +t[1]
            ], n) : E;
        }, n.center = function (t) {
            return arguments.length ? (v = t && [
                +t[0],
                +t[1]
            ], n) : v;
        }, n.size = function (t) {
            return arguments.length ? (k = t && [
                +t[0],
                +t[1]
            ], n) : k;
        }, n.x = function (t) {
            return arguments.length ? (_ = t, x = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : _;
        }, n.y = function (t) {
            return arguments.length ? (w = t, b = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : w;
        }, Vo.rebind(n, L, 'on');
    };
    var qa, Ra = [
            0,
            1 / 0
        ], Da = 'onwheel' in Bo ? (qa = function () {
            return -Vo.event.deltaY * (Vo.event.deltaMode ? 120 : 1);
        }, 'wheel') : 'onmousewheel' in Bo ? (qa = function () {
            return Vo.event.wheelDelta;
        }, 'mousewheel') : (qa = function () {
            return -Vo.event.detail;
        }, 'MozMousePixelScroll');
    Vo.color = et, et.prototype.toString = function () {
        return this.rgb() + '';
    }, Vo.hsl = rt;
    var Pa = rt.prototype = new et();
    Pa.brighter = function (n) {
        return n = Math.pow(0.7, arguments.length ? n : 1), new rt(this.h, this.s, this.l / n);
    }, Pa.darker = function (n) {
        return n = Math.pow(0.7, arguments.length ? n : 1), new rt(this.h, this.s, n * this.l);
    }, Pa.rgb = function () {
        return ut(this.h, this.s, this.l);
    }, Vo.hcl = it;
    var Ua = it.prototype = new et();
    Ua.brighter = function (n) {
        return new it(this.h, this.c, Math.min(100, this.l + ja * (arguments.length ? n : 1)));
    }, Ua.darker = function (n) {
        return new it(this.h, this.c, Math.max(0, this.l - ja * (arguments.length ? n : 1)));
    }, Ua.rgb = function () {
        return ot(this.h, this.c, this.l).rgb();
    }, Vo.lab = at;
    var ja = 18, Ha = 0.95047, Fa = 1, Oa = 1.08883, Ya = at.prototype = new et();
    Ya.brighter = function (n) {
        return new at(Math.min(100, this.l + ja * (arguments.length ? n : 1)), this.a, this.b);
    }, Ya.darker = function (n) {
        return new at(Math.max(0, this.l - ja * (arguments.length ? n : 1)), this.a, this.b);
    }, Ya.rgb = function () {
        return ct(this.l, this.a, this.b);
    }, Vo.rgb = gt;
    var Ia = gt.prototype = new et();
    Ia.brighter = function (n) {
        n = Math.pow(0.7, arguments.length ? n : 1);
        var t = this.r, e = this.g, r = this.b, u = 30;
        return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), new gt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new gt(u, u, u);
    }, Ia.darker = function (n) {
        return n = Math.pow(0.7, arguments.length ? n : 1), new gt(n * this.r, n * this.g, n * this.b);
    }, Ia.hsl = function () {
        return yt(this.r, this.g, this.b);
    }, Ia.toString = function () {
        return '#' + dt(this.r) + dt(this.g) + dt(this.b);
    };
    var Za = Vo.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Za.forEach(function (n, t) {
        Za.set(n, pt(t));
    }), Vo.functor = bt, Vo.xhr = St(wt), Vo.dsv = function (n, t) {
        function e(n, e, i) {
            arguments.length < 3 && (i = e, e = null);
            var o = kt(n, t, null == e ? r : u(e), i);
            return o.row = function (n) {
                return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e;
            }, o;
        }
        function r(n) {
            return e.parse(n.responseText);
        }
        function u(n) {
            return function (t) {
                return e.parse(t.responseText, n);
            };
        }
        function i(t) {
            return t.map(o).join(n);
        }
        function o(n) {
            return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
        }
        var a = new RegExp('["' + n + '\n]'), c = n.charCodeAt(0);
        return e.parse = function (n, t) {
            var r;
            return e.parseRows(n, function (n, e) {
                if (r)
                    return r(n, e - 1);
                var u = new Function('d', 'return {' + n.map(function (n, t) {
                    return JSON.stringify(n) + ': d[' + t + ']';
                }).join(',') + '}');
                r = t ? function (n, e) {
                    return t(u(n), e);
                } : u;
            });
        }, e.parseRows = function (n, t) {
            function e() {
                if (s >= l)
                    return o;
                if (u)
                    return u = !1, i;
                var t = s;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < l;)
                        if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1))
                                break;
                            ++e;
                        }
                    s = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.slice(t + 1, e).replace(/""/g, '"');
                }
                for (; l > s;) {
                    var r = n.charCodeAt(s++), a = 1;
                    if (10 === r)
                        u = !0;
                    else if (13 === r)
                        u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
                    else if (r !== c)
                        continue;
                    return n.slice(t, s - a);
                }
                return n.slice(t);
            }
            for (var r, u, i = {}, o = {}, a = [], l = n.length, s = 0, f = 0; (r = e()) !== o;) {
                for (var h = []; r !== i && r !== o;)
                    h.push(r), r = e();
                (!t || (h = t(h, f++))) && a.push(h);
            }
            return a;
        }, e.format = function (t) {
            if (Array.isArray(t[0]))
                return e.formatRows(t);
            var r = new h(), u = [];
            return t.forEach(function (n) {
                for (var t in n)
                    r.has(t) || u.push(r.add(t));
            }), [u.map(o).join(n)].concat(t.map(function (t) {
                return u.map(function (n) {
                    return o(t[n]);
                }).join(n);
            })).join('\n');
        }, e.formatRows = function (n) {
            return n.map(i).join('\n');
        }, e;
    }, Vo.csv = Vo.dsv(',', 'text/csv'), Vo.tsv = Vo.dsv('\t', 'text/tab-separated-values');
    var Va, Xa, $a, Ba, Wa, Ja = Jo[p(Jo, 'requestAnimationFrame')] || function (n) {
            setTimeout(n, 17);
        };
    Vo.timer = function (n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now());
        var u = e + t, i = {
                c: n,
                t: u,
                f: !1,
                n: null
            };
        Xa ? Xa.n = i : Va = i, Xa = i, $a || (Ba = clearTimeout(Ba), $a = 1, Ja(Ct));
    }, Vo.timer.flush = function () {
        Nt(), zt();
    }, Vo.round = function (n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
    };
    var Ga = [
        'y',
        'z',
        'a',
        'f',
        'p',
        'n',
        '\xB5',
        'm',
        '',
        'k',
        'M',
        'G',
        'T',
        'P',
        'E',
        'Z',
        'Y'
    ].map(Tt);
    Vo.formatPrefix = function (n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1), t && (n = Vo.round(n, Lt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), Ga[8 + e / 3];
    };
    var Ka = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, Qa = Vo.map({
            b: function (n) {
                return n.toString(2);
            },
            c: function (n) {
                return String.fromCharCode(n);
            },
            o: function (n) {
                return n.toString(8);
            },
            x: function (n) {
                return n.toString(16);
            },
            X: function (n) {
                return n.toString(16).toUpperCase();
            },
            g: function (n, t) {
                return n.toPrecision(t);
            },
            e: function (n, t) {
                return n.toExponential(t);
            },
            f: function (n, t) {
                return n.toFixed(t);
            },
            r: function (n, t) {
                return (n = Vo.round(n, Lt(n, t))).toFixed(Math.max(0, Math.min(20, Lt(n * (1 + 1e-15), t))));
            }
        }), nc = Vo.time = {}, tc = Date;
    Dt.prototype = {
        getDate: function () {
            return this._.getUTCDate();
        },
        getDay: function () {
            return this._.getUTCDay();
        },
        getFullYear: function () {
            return this._.getUTCFullYear();
        },
        getHours: function () {
            return this._.getUTCHours();
        },
        getMilliseconds: function () {
            return this._.getUTCMilliseconds();
        },
        getMinutes: function () {
            return this._.getUTCMinutes();
        },
        getMonth: function () {
            return this._.getUTCMonth();
        },
        getSeconds: function () {
            return this._.getUTCSeconds();
        },
        getTime: function () {
            return this._.getTime();
        },
        getTimezoneOffset: function () {
            return 0;
        },
        valueOf: function () {
            return this._.valueOf();
        },
        setDate: function () {
            ec.setUTCDate.apply(this._, arguments);
        },
        setDay: function () {
            ec.setUTCDay.apply(this._, arguments);
        },
        setFullYear: function () {
            ec.setUTCFullYear.apply(this._, arguments);
        },
        setHours: function () {
            ec.setUTCHours.apply(this._, arguments);
        },
        setMilliseconds: function () {
            ec.setUTCMilliseconds.apply(this._, arguments);
        },
        setMinutes: function () {
            ec.setUTCMinutes.apply(this._, arguments);
        },
        setMonth: function () {
            ec.setUTCMonth.apply(this._, arguments);
        },
        setSeconds: function () {
            ec.setUTCSeconds.apply(this._, arguments);
        },
        setTime: function () {
            ec.setTime.apply(this._, arguments);
        }
    };
    var ec = Date.prototype;
    nc.year = Pt(function (n) {
        return n = nc.day(n), n.setMonth(0, 1), n;
    }, function (n, t) {
        n.setFullYear(n.getFullYear() + t);
    }, function (n) {
        return n.getFullYear();
    }), nc.years = nc.year.range, nc.years.utc = nc.year.utc.range, nc.day = Pt(function (n) {
        var t = new tc(2000, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
    }, function (n, t) {
        n.setDate(n.getDate() + t);
    }, function (n) {
        return n.getDate() - 1;
    }), nc.days = nc.day.range, nc.days.utc = nc.day.utc.range, nc.dayOfYear = function (n) {
        var t = nc.year(n);
        return Math.floor((n - t - 60000 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 86400000);
    }, [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ].forEach(function (n, t) {
        t = 7 - t;
        var e = nc[n] = Pt(function (n) {
            return (n = nc.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n;
        }, function (n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t));
        }, function (n) {
            var e = nc.year(n).getDay();
            return Math.floor((nc.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t);
        });
        nc[n + 's'] = e.range, nc[n + 's'].utc = e.utc.range, nc[n + 'OfYear'] = function (n) {
            var e = nc.year(n).getDay();
            return Math.floor((nc.dayOfYear(n) + (e + t) % 7) / 7);
        };
    }), nc.week = nc.sunday, nc.weeks = nc.sunday.range, nc.weeks.utc = nc.sunday.utc.range, nc.weekOfYear = nc.sundayOfYear;
    var rc = {
            '-': '',
            _: ' ',
            0: '0'
        }, uc = /^\s*\d+/, ic = /^%/;
    Vo.locale = function (n) {
        return {
            numberFormat: qt(n),
            timeFormat: jt(n)
        };
    };
    var oc = Vo.locale({
        decimal: '.',
        thousands: ',',
        grouping: [3],
        currency: [
            '$',
            ''
        ],
        dateTime: '%a %b %e %X %Y',
        date: '%m/%d/%Y',
        time: '%H:%M:%S',
        periods: [
            'AM',
            'PM'
        ],
        days: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        shortDays: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],
        months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        shortMonths: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
    });
    Vo.format = oc.numberFormat, Vo.geo = {}, ie.prototype = {
        s: 0,
        t: 0,
        add: function (n) {
            oe(n, this.t, ac), oe(ac.s, this.s, this), this.s ? this.t += ac.t : this.s = ac.t;
        },
        reset: function () {
            this.s = this.t = 0;
        },
        valueOf: function () {
            return this.s;
        }
    };
    var ac = new ie();
    Vo.geo.stream = function (n, t) {
        n && cc.hasOwnProperty(n.type) ? cc[n.type](n, t) : ae(n, t);
    };
    var cc = {
            Feature: function (n, t) {
                ae(n.geometry, t);
            },
            FeatureCollection: function (n, t) {
                for (var e = n.features, r = -1, u = e.length; ++r < u;)
                    ae(e[r].geometry, t);
            }
        }, lc = {
            Sphere: function (n, t) {
                t.sphere();
            },
            Point: function (n, t) {
                n = n.coordinates, t.point(n[0], n[1], n[2]);
            },
            MultiPoint: function (n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)
                    n = e[r], t.point(n[0], n[1], n[2]);
            },
            LineString: function (n, t) {
                ce(n.coordinates, t, 0);
            },
            MultiLineString: function (n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)
                    ce(e[r], t, 0);
            },
            Polygon: function (n, t) {
                le(n.coordinates, t);
            },
            MultiPolygon: function (n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)
                    le(e[r], t);
            },
            GeometryCollection: function (n, t) {
                for (var e = n.geometries, r = -1, u = e.length; ++r < u;)
                    ae(e[r], t);
            }
        };
    Vo.geo.area = function (n) {
        return sc = 0, Vo.geo.stream(n, hc), sc;
    };
    var sc, fc = new ie(), hc = {
            sphere: function () {
                sc += 4 * wa;
            },
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function () {
                fc.reset(), hc.lineStart = se;
            },
            polygonEnd: function () {
                var n = 2 * fc;
                sc += 0 > n ? 4 * wa + n : n, hc.lineStart = hc.lineEnd = hc.point = v;
            }
        };
    Vo.geo.bounds = function () {
        function n(n, t) {
            x.push(M = [
                s = n,
                h = n
            ]), f > t && (f = t), t > g && (g = t);
        }
        function t(t, e) {
            var r = fe([
                t * Ca,
                e * Ca
            ]);
            if (m) {
                var u = ge(m, r), i = [
                        u[1],
                        -u[0],
                        0
                    ], o = ge(i, u);
                de(o), o = me(o);
                var c = t - p, l = c > 0 ? 1 : -1, v = o[0] * Na * l, d = ia(c) > 180;
                if (d ^ (v > l * p && l * t > v)) {
                    var y = o[1] * Na;
                    y > g && (g = y);
                } else if (v = (v + 360) % 360 - 180, d ^ (v > l * p && l * t > v)) {
                    var y = -o[1] * Na;
                    f > y && (f = y);
                } else
                    f > e && (f = e), e > g && (g = e);
                d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t);
            } else
                n(t, e);
            m = r, p = t;
        }
        function e() {
            _.point = t;
        }
        function r() {
            M[0] = s, M[1] = h, _.point = n, m = null;
        }
        function u(n, e) {
            if (m) {
                var r = n - p;
                y += ia(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
            } else
                v = n, d = e;
            hc.point(n, e), t(n, e);
        }
        function i() {
            hc.lineStart();
        }
        function o() {
            u(v, d), hc.lineEnd(), ia(y) > Ea && (s = -(h = 180)), M[0] = s, M[1] = h, m = null;
        }
        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t;
        }
        function c(n, t) {
            return n[0] - t[0];
        }
        function l(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
        }
        var s, f, h, g, p, v, d, m, y, x, M, _ = {
                point: n,
                lineStart: e,
                lineEnd: r,
                polygonStart: function () {
                    _.point = u, _.lineStart = i, _.lineEnd = o, y = 0, hc.polygonStart();
                },
                polygonEnd: function () {
                    hc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > fc ? (s = -(h = 180), f = -(g = 90)) : y > Ea ? g = 90 : -Ea > y && (f = -90), M[0] = s, M[1] = h;
                }
            };
        return function (n) {
            g = h = -(s = f = 1 / 0), x = [], Vo.geo.stream(n, _);
            var t = x.length;
            if (t) {
                x.sort(c);
                for (var e, r = 1, u = x[0], i = [u]; t > r; ++r)
                    e = x[r], l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r)
                    e = i[r], (o = a(u[1], e[0])) > p && (p = o, s = e[0], h = u[1]);
            }
            return x = M = null, 1 / 0 === s || 1 / 0 === f ? [
                [
                    0 / 0,
                    0 / 0
                ],
                [
                    0 / 0,
                    0 / 0
                ]
            ] : [
                [
                    s,
                    f
                ],
                [
                    h,
                    g
                ]
            ];
        };
    }(), Vo.geo.centroid = function (n) {
        gc = pc = vc = dc = mc = yc = xc = Mc = _c = bc = wc = 0, Vo.geo.stream(n, Sc);
        var t = _c, e = bc, r = wc, u = t * t + e * e + r * r;
        return Aa > u && (t = yc, e = xc, r = Mc, Ea > pc && (t = vc, e = dc, r = mc), u = t * t + e * e + r * r, Aa > u) ? [
            0 / 0,
            0 / 0
        ] : [
            Math.atan2(e, t) * Na,
            G(r / Math.sqrt(u)) * Na
        ];
    };
    var gc, pc, vc, dc, mc, yc, xc, Mc, _c, bc, wc, Sc = {
            sphere: v,
            point: xe,
            lineStart: _e,
            lineEnd: be,
            polygonStart: function () {
                Sc.lineStart = we;
            },
            polygonEnd: function () {
                Sc.lineStart = _e;
            }
        }, kc = Ce(Se, Te, Re, [
            -wa,
            -wa / 2
        ]), Ec = 1000000000;
    Vo.geo.clipExtent = function () {
        var n, t, e, r, u, i, o = {
                stream: function (n) {
                    return u && (u.valid = !1), u = i(n), u.valid = !0, u;
                },
                extent: function (a) {
                    return arguments.length ? (i = je(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
                        [
                            n,
                            t
                        ],
                        [
                            e,
                            r
                        ]
                    ];
                }
            };
        return o.extent([
            [
                0,
                0
            ],
            [
                960,
                500
            ]
        ]);
    }, (Vo.geo.conicEqualArea = function () {
        return Fe(Oe);
    }).raw = Oe, Vo.geo.albers = function () {
        return Vo.geo.conicEqualArea().rotate([
            96,
            0
        ]).center([
            -0.6,
            38.7
        ]).parallels([
            29.5,
            45.5
        ]).scale(1070);
    }, Vo.geo.albersUsa = function () {
        function n(n) {
            var i = n[0], o = n[1];
            return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t;
        }
        var t, e, r, u, i = Vo.geo.albers(), o = Vo.geo.conicEqualArea().rotate([
                154,
                0
            ]).center([
                -2,
                58.5
            ]).parallels([
                55,
                65
            ]), a = Vo.geo.conicEqualArea().rotate([
                157,
                0
            ]).center([
                -3,
                19.9
            ]).parallels([
                8,
                18
            ]), c = {
                point: function (n, e) {
                    t = [
                        n,
                        e
                    ];
                }
            };
        return n.invert = function (n) {
            var t = i.scale(), e = i.translate(), r = (n[0] - e[0]) / t, u = (n[1] - e[1]) / t;
            return (u >= 0.12 && 0.234 > u && r >= -0.425 && -0.214 > r ? o : u >= 0.166 && 0.234 > u && r >= -0.214 && -0.115 > r ? a : i).invert(n);
        }, n.stream = function (n) {
            var t = i.stream(n), e = o.stream(n), r = a.stream(n);
            return {
                point: function (n, u) {
                    t.point(n, u), e.point(n, u), r.point(n, u);
                },
                sphere: function () {
                    t.sphere(), e.sphere(), r.sphere();
                },
                lineStart: function () {
                    t.lineStart(), e.lineStart(), r.lineStart();
                },
                lineEnd: function () {
                    t.lineEnd(), e.lineEnd(), r.lineEnd();
                },
                polygonStart: function () {
                    t.polygonStart(), e.polygonStart(), r.polygonStart();
                },
                polygonEnd: function () {
                    t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
                }
            };
        }, n.precision = function (t) {
            return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision();
        }, n.scale = function (t) {
            return arguments.length ? (i.scale(t), o.scale(0.35 * t), a.scale(t), n.translate(i.translate())) : i.scale();
        }, n.translate = function (t) {
            if (!arguments.length)
                return i.translate();
            var l = i.scale(), s = +t[0], f = +t[1];
            return e = i.translate(t).clipExtent([
                [
                    s - 0.455 * l,
                    f - 0.238 * l
                ],
                [
                    s + 0.455 * l,
                    f + 0.238 * l
                ]
            ]).stream(c).point, r = o.translate([
                s - 0.307 * l,
                f + 0.201 * l
            ]).clipExtent([
                [
                    s - 0.425 * l + Ea,
                    f + 0.12 * l + Ea
                ],
                [
                    s - 0.214 * l - Ea,
                    f + 0.234 * l - Ea
                ]
            ]).stream(c).point, u = a.translate([
                s - 0.205 * l,
                f + 0.212 * l
            ]).clipExtent([
                [
                    s - 0.214 * l + Ea,
                    f + 0.166 * l + Ea
                ],
                [
                    s - 0.115 * l - Ea,
                    f + 0.234 * l - Ea
                ]
            ]).stream(c).point, n;
        }, n.scale(1070);
    };
    var Ac, Cc, Nc, zc, Lc, Tc, qc = {
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function () {
                Cc = 0, qc.lineStart = Ye;
            },
            polygonEnd: function () {
                qc.lineStart = qc.lineEnd = qc.point = v, Ac += ia(Cc / 2);
            }
        }, Rc = {
            point: Ie,
            lineStart: v,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, Dc = {
            point: Xe,
            lineStart: $e,
            lineEnd: Be,
            polygonStart: function () {
                Dc.lineStart = We;
            },
            polygonEnd: function () {
                Dc.point = Xe, Dc.lineStart = $e, Dc.lineEnd = Be;
            }
        };
    Vo.geo.path = function () {
        function n(n) {
            return n && ('function' == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), Vo.geo.stream(n, o)), i.result();
        }
        function t() {
            return o = null, n;
        }
        var e, r, u, i, o, a = 4.5;
        return n.area = function (n) {
            return Ac = 0, Vo.geo.stream(n, u(qc)), Ac;
        }, n.centroid = function (n) {
            return vc = dc = mc = yc = xc = Mc = _c = bc = wc = 0, Vo.geo.stream(n, u(Dc)), wc ? [
                _c / wc,
                bc / wc
            ] : Mc ? [
                yc / Mc,
                xc / Mc
            ] : mc ? [
                vc / mc,
                dc / mc
            ] : [
                0 / 0,
                0 / 0
            ];
        }, n.bounds = function (n) {
            return Lc = Tc = -(Nc = zc = 1 / 0), Vo.geo.stream(n, u(Rc)), [
                [
                    Nc,
                    zc
                ],
                [
                    Lc,
                    Tc
                ]
            ];
        }, n.projection = function (n) {
            return arguments.length ? (u = (e = n) ? n.stream || Ke(n) : wt, t()) : e;
        }, n.context = function (n) {
            return arguments.length ? (i = null == (r = n) ? new Ze() : new Je(n), 'function' != typeof a && i.pointRadius(a), t()) : r;
        }, n.pointRadius = function (t) {
            return arguments.length ? (a = 'function' == typeof t ? t : (i.pointRadius(+t), +t), n) : a;
        }, n.projection(Vo.geo.albersUsa()).context(null);
    }, Vo.geo.transform = function (n) {
        return {
            stream: function (t) {
                var e = new Qe(t);
                for (var r in n)
                    e[r] = n[r];
                return e;
            }
        };
    }, Qe.prototype = {
        point: function (n, t) {
            this.stream.point(n, t);
        },
        sphere: function () {
            this.stream.sphere();
        },
        lineStart: function () {
            this.stream.lineStart();
        },
        lineEnd: function () {
            this.stream.lineEnd();
        },
        polygonStart: function () {
            this.stream.polygonStart();
        },
        polygonEnd: function () {
            this.stream.polygonEnd();
        }
    }, Vo.geo.projection = tr, Vo.geo.projectionMutator = er, (Vo.geo.equirectangular = function () {
        return tr(ur);
    }).raw = ur.invert = ur, Vo.geo.rotation = function (n) {
        function t(t) {
            return t = n(t[0] * Ca, t[1] * Ca), t[0] *= Na, t[1] *= Na, t;
        }
        return n = or(n[0] % 360 * Ca, n[1] * Ca, n.length > 2 ? n[2] * Ca : 0), t.invert = function (t) {
            return t = n.invert(t[0] * Ca, t[1] * Ca), t[0] *= Na, t[1] *= Na, t;
        }, t;
    }, ir.invert = ur, Vo.geo.circle = function () {
        function n() {
            var n = 'function' == typeof r ? r.apply(this, arguments) : r, t = or(-n[0] * Ca, -n[1] * Ca, 0).invert, u = [];
            return e(null, null, 1, {
                point: function (n, e) {
                    u.push(n = t(n, e)), n[0] *= Na, n[1] *= Na;
                }
            }), {
                type: 'Polygon',
                coordinates: [u]
            };
        }
        var t, e, r = [
                0,
                0
            ], u = 6;
        return n.origin = function (t) {
            return arguments.length ? (r = t, n) : r;
        }, n.angle = function (r) {
            return arguments.length ? (e = sr((t = +r) * Ca, u * Ca), n) : t;
        }, n.precision = function (r) {
            return arguments.length ? (e = sr(t * Ca, (u = +r) * Ca), n) : u;
        }, n.angle(90);
    }, Vo.geo.distance = function (n, t) {
        var e, r = (t[0] - n[0]) * Ca, u = n[1] * Ca, i = t[1] * Ca, o = Math.sin(r), a = Math.cos(r), c = Math.sin(u), l = Math.cos(u), s = Math.sin(i), f = Math.cos(i);
        return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a);
    }, Vo.geo.graticule = function () {
        function n() {
            return {
                type: 'MultiLineString',
                coordinates: t()
            };
        }
        function t() {
            return Vo.range(Math.ceil(i / d) * d, u, d).map(h).concat(Vo.range(Math.ceil(l / m) * m, c, m).map(g)).concat(Vo.range(Math.ceil(r / p) * p, e, p).filter(function (n) {
                return ia(n % d) > Ea;
            }).map(s)).concat(Vo.range(Math.ceil(a / v) * v, o, v).filter(function (n) {
                return ia(n % m) > Ea;
            }).map(f));
        }
        var e, r, u, i, o, a, c, l, s, f, h, g, p = 10, v = p, d = 90, m = 360, y = 2.5;
        return n.lines = function () {
            return t().map(function (n) {
                return {
                    type: 'LineString',
                    coordinates: n
                };
            });
        }, n.outline = function () {
            return {
                type: 'Polygon',
                coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
            };
        }, n.extent = function (t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent();
        }, n.majorExtent = function (t) {
            return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [
                [
                    i,
                    l
                ],
                [
                    u,
                    c
                ]
            ];
        }, n.minorExtent = function (t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
                [
                    r,
                    a
                ],
                [
                    e,
                    o
                ]
            ];
        }, n.step = function (t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
        }, n.majorStep = function (t) {
            return arguments.length ? (d = +t[0], m = +t[1], n) : [
                d,
                m
            ];
        }, n.minorStep = function (t) {
            return arguments.length ? (p = +t[0], v = +t[1], n) : [
                p,
                v
            ];
        }, n.precision = function (t) {
            return arguments.length ? (y = +t, s = hr(a, o, 90), f = gr(r, e, y), h = hr(l, c, 90), g = gr(i, u, y), n) : y;
        }, n.majorExtent([
            [
                -180,
                -90 + Ea
            ],
            [
                180,
                90 - Ea
            ]
        ]).minorExtent([
            [
                -180,
                -80 - Ea
            ],
            [
                180,
                80 + Ea
            ]
        ]);
    }, Vo.geo.greatArc = function () {
        function n() {
            return {
                type: 'LineString',
                coordinates: [
                    t || r.apply(this, arguments),
                    e || u.apply(this, arguments)
                ]
            };
        }
        var t, e, r = pr, u = vr;
        return n.distance = function () {
            return Vo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments));
        }, n.source = function (e) {
            return arguments.length ? (r = e, t = 'function' == typeof e ? null : e, n) : r;
        }, n.target = function (t) {
            return arguments.length ? (u = t, e = 'function' == typeof t ? null : t, n) : u;
        }, n.precision = function () {
            return arguments.length ? n : 0;
        }, n;
    }, Vo.geo.interpolate = function (n, t) {
        return dr(n[0] * Ca, n[1] * Ca, t[0] * Ca, t[1] * Ca);
    }, Vo.geo.length = function (n) {
        return Pc = 0, Vo.geo.stream(n, Uc), Pc;
    };
    var Pc, Uc = {
            sphere: v,
            point: v,
            lineStart: mr,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, jc = yr(function (n) {
            return Math.sqrt(2 / (1 + n));
        }, function (n) {
            return 2 * Math.asin(n / 2);
        });
    (Vo.geo.azimuthalEqualArea = function () {
        return tr(jc);
    }).raw = jc;
    var Hc = yr(function (n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t);
    }, wt);
    (Vo.geo.azimuthalEquidistant = function () {
        return tr(Hc);
    }).raw = Hc, (Vo.geo.conicConformal = function () {
        return Fe(xr);
    }).raw = xr, (Vo.geo.conicEquidistant = function () {
        return Fe(Mr);
    }).raw = Mr;
    var Fc = yr(function (n) {
        return 1 / n;
    }, Math.atan);
    (Vo.geo.gnomonic = function () {
        return tr(Fc);
    }).raw = Fc, _r.invert = function (n, t) {
        return [
            n,
            2 * Math.atan(Math.exp(t)) - ka
        ];
    }, (Vo.geo.mercator = function () {
        return br(_r);
    }).raw = _r;
    var Oc = yr(function () {
        return 1;
    }, Math.asin);
    (Vo.geo.orthographic = function () {
        return tr(Oc);
    }).raw = Oc;
    var Yc = yr(function (n) {
        return 1 / (1 + n);
    }, function (n) {
        return 2 * Math.atan(n);
    });
    (Vo.geo.stereographic = function () {
        return tr(Yc);
    }).raw = Yc, wr.invert = function (n, t) {
        return [
            -t,
            2 * Math.atan(Math.exp(n)) - ka
        ];
    }, (Vo.geo.transverseMercator = function () {
        var n = br(wr), t = n.center, e = n.rotate;
        return n.center = function (n) {
            return n ? t([
                -n[1],
                n[0]
            ]) : (n = t(), [
                n[1],
                -n[0]
            ]);
        }, n.rotate = function (n) {
            return n ? e([
                n[0],
                n[1],
                n.length > 2 ? n[2] + 90 : 90
            ]) : (n = e(), [
                n[0],
                n[1],
                n[2] - 90
            ]);
        }, e([
            0,
            0,
            90
        ]);
    }).raw = wr, Vo.geom = {}, Vo.geom.hull = function (n) {
        function t(n) {
            if (n.length < 3)
                return [];
            var t, u = bt(e), i = bt(r), o = n.length, a = [], c = [];
            for (t = 0; o > t; t++)
                a.push([
                    +u.call(this, n[t], t),
                    +i.call(this, n[t], t),
                    t
                ]);
            for (a.sort(Ar), t = 0; o > t; t++)
                c.push([
                    a[t][0],
                    -a[t][1]
                ]);
            var l = Er(a), s = Er(c), f = s[0] === l[0], h = s[s.length - 1] === l[l.length - 1], g = [];
            for (t = l.length - 1; t >= 0; --t)
                g.push(n[a[l[t]][2]]);
            for (t = +f; t < s.length - h; ++t)
                g.push(n[a[s[t]][2]]);
            return g;
        }
        var e = Sr, r = kr;
        return arguments.length ? t(n) : (t.x = function (n) {
            return arguments.length ? (e = n, t) : e;
        }, t.y = function (n) {
            return arguments.length ? (r = n, t) : r;
        }, t);
    }, Vo.geom.polygon = function (n) {
        return sa(n, Ic), n;
    };
    var Ic = Vo.geom.polygon.prototype = [];
    Ic.area = function () {
        for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;)
            n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
        return 0.5 * u;
    }, Ic.centroid = function (n) {
        var t, e, r = -1, u = this.length, i = 0, o = 0, a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;)
            t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
        return [
            i * n,
            o * n
        ];
    }, Ic.clip = function (n) {
        for (var t, e, r, u, i, o, a = zr(n), c = -1, l = this.length - zr(this), s = this[l - 1]; ++c < l;) {
            for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;)
                o = t[e], Cr(o, s, u) ? (Cr(i, s, u) || n.push(Nr(i, o, s, u)), n.push(o)) : Cr(i, s, u) && n.push(Nr(i, o, s, u)), i = o;
            a && n.push(n[0]), s = u;
        }
        return n;
    };
    var Zc, Vc, Xc, $c, Bc, Wc = [], Jc = [];
    jr.prototype.prepare = function () {
        for (var n, t = this.edges, e = t.length; e--;)
            n = t[e].edge, n.b && n.a || t.splice(e, 1);
        return t.sort(Fr), t.length;
    }, Jr.prototype = {
        start: function () {
            return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function () {
            return this.edge.l === this.site ? this.edge.b : this.edge.a;
        }
    }, Gr.prototype = {
        insert: function (n, t) {
            var e, r, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;)
                        n = n.L;
                    n.L = t;
                } else
                    n.R = t;
                e = n;
            } else
                this._ ? (n = tu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
            for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;)
                r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (Qr(this, e), n = e, e = n.U), e.C = !1, r.C = !0, nu(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (nu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, Qr(this, r))), e = n.U;
            this._.C = !1;
        },
        remove: function (n) {
            n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
            var t, e, r, u = n.U, i = n.L, o = n.R;
            if (e = i ? o ? tu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
                if (n && n.C)
                    return n.C = !1, void 0;
                do {
                    if (n === this._)
                        break;
                    if (n === u.L) {
                        if (t = u.R, t.C && (t.C = !1, u.C = !0, Qr(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, nu(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, Qr(this, u), n = this._;
                            break;
                        }
                    } else if (t = u.L, t.C && (t.C = !1, u.C = !0, nu(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, Qr(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, nu(this, u), n = this._;
                        break;
                    }
                    t.C = !0, n = u, u = u.U;
                } while (!n.C);
                n && (n.C = !1);
            }
        }
    }, Vo.geom.voronoi = function (n) {
        function t(n) {
            var t = new Array(n.length), r = a[0][0], u = a[0][1], i = a[1][0], o = a[1][1];
            return eu(e(n), a).cells.forEach(function (e, a) {
                var c = e.edges, l = e.site, s = t[a] = c.length ? c.map(function (n) {
                        var t = n.start();
                        return [
                            t.x,
                            t.y
                        ];
                    }) : l.x >= r && l.x <= i && l.y >= u && l.y <= o ? [
                        [
                            r,
                            o
                        ],
                        [
                            i,
                            o
                        ],
                        [
                            i,
                            u
                        ],
                        [
                            r,
                            u
                        ]
                    ] : [];
                s.point = n[a];
            }), t;
        }
        function e(n) {
            return n.map(function (n, t) {
                return {
                    x: Math.round(i(n, t) / Ea) * Ea,
                    y: Math.round(o(n, t) / Ea) * Ea,
                    i: t
                };
            });
        }
        var r = Sr, u = kr, i = r, o = u, a = Gc;
        return n ? t(n) : (t.links = function (n) {
            return eu(e(n)).edges.filter(function (n) {
                return n.l && n.r;
            }).map(function (t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                };
            });
        }, t.triangles = function (n) {
            var t = [];
            return eu(e(n)).cells.forEach(function (e, r) {
                for (var u, i, o = e.site, a = e.edges.sort(Fr), c = -1, l = a.length, s = a[l - 1].edge, f = s.l === o ? s.r : s.l; ++c < l;)
                    u = s, i = f, s = a[c].edge, f = s.l === o ? s.r : s.l, r < i.i && r < f.i && uu(o, i, f) < 0 && t.push([
                        n[r],
                        n[i.i],
                        n[f.i]
                    ]);
            }), t;
        }, t.x = function (n) {
            return arguments.length ? (i = bt(r = n), t) : r;
        }, t.y = function (n) {
            return arguments.length ? (o = bt(u = n), t) : u;
        }, t.clipExtent = function (n) {
            return arguments.length ? (a = null == n ? Gc : n, t) : a === Gc ? null : a;
        }, t.size = function (n) {
            return arguments.length ? t.clipExtent(n && [
                [
                    0,
                    0
                ],
                n
            ]) : a === Gc ? null : a && a[1];
        }, t);
    };
    var Gc = [
        [
            -1000000,
            -1000000
        ],
        [
            1000000,
            1000000
        ]
    ];
    Vo.geom.delaunay = function (n) {
        return Vo.geom.voronoi().triangles(n);
    }, Vo.geom.quadtree = function (n, t, e, r, u) {
        function i(n) {
            function i(n, t, e, r, u, i, o, a) {
                if (!isNaN(e) && !isNaN(r))
                    if (n.leaf) {
                        var c = n.x, s = n.y;
                        if (null != c)
                            if (ia(c - e) + ia(s - r) < 0.01)
                                l(n, t, e, r, u, i, o, a);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, e, r, u, i, o, a);
                            }
                        else
                            n.x = e, n.y = r, n.point = t;
                    } else
                        l(n, t, e, r, u, i, o, a);
            }
            function l(n, t, e, r, u, o, a, c) {
                var l = 0.5 * (u + a), s = 0.5 * (o + c), f = e >= l, h = r >= s, g = (h << 1) + f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = au()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, e, r, u, o, a, c);
            }
            var s, f, h, g, p, v, d, m, y, x = bt(a), M = bt(c);
            if (null != t)
                v = t, d = e, m = r, y = u;
            else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
                for (g = 0; p > g; ++g)
                    s = n[g], s.x < v && (v = s.x), s.y < d && (d = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
            else
                for (g = 0; p > g; ++g) {
                    var _ = +x(s = n[g], g), b = +M(s, g);
                    v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b);
                }
            var w = m - v, S = y - d;
            w > S ? y = d + w : m = v + S;
            var k = au();
            if (k.add = function (n) {
                    i(k, n, +x(n, ++g), +M(n, g), v, d, m, y);
                }, k.visit = function (n) {
                    cu(n, k, v, d, m, y);
                }, g = -1, null == t) {
                for (; ++g < p;)
                    i(k, n[g], f[g], h[g], v, d, m, y);
                --g;
            } else
                n.forEach(k.add);
            return f = h = n = s = null, k;
        }
        var o, a = Sr, c = kr;
        return (o = arguments.length) ? (a = iu, c = ou, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function (n) {
            return arguments.length ? (a = n, i) : a;
        }, i.y = function (n) {
            return arguments.length ? (c = n, i) : c;
        }, i.extent = function (n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
                [
                    t,
                    e
                ],
                [
                    r,
                    u
                ]
            ];
        }, i.size = function (n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [
                r - t,
                u - e
            ];
        }, i);
    }, Vo.interpolateRgb = lu, Vo.interpolateObject = su, Vo.interpolateNumber = fu, Vo.interpolateString = hu;
    var Kc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qc = new RegExp(Kc.source, 'g');
    Vo.interpolate = gu, Vo.interpolators = [function (n, t) {
            var e = typeof t;
            return ('string' === e ? Za.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? lu : hu : t instanceof et ? lu : Array.isArray(t) ? pu : 'object' === e && isNaN(t) ? su : fu)(n, t);
        }], Vo.interpolateArray = pu;
    var nl = function () {
            return wt;
        }, tl = Vo.map({
            linear: nl,
            poly: _u,
            quad: function () {
                return yu;
            },
            cubic: function () {
                return xu;
            },
            sin: function () {
                return bu;
            },
            exp: function () {
                return wu;
            },
            circle: function () {
                return Su;
            },
            elastic: ku,
            back: Eu,
            bounce: function () {
                return Au;
            }
        }), el = Vo.map({
            'in': wt,
            out: du,
            'in-out': mu,
            'out-in': function (n) {
                return mu(du(n));
            }
        });
    Vo.ease = function (n) {
        var t = n.indexOf('-'), e = t >= 0 ? n.slice(0, t) : n, r = t >= 0 ? n.slice(t + 1) : 'in';
        return e = tl.get(e) || nl, r = el.get(r) || wt, vu(r(e.apply(null, Xo.call(arguments, 1))));
    }, Vo.interpolateHcl = Cu, Vo.interpolateHsl = Nu, Vo.interpolateLab = zu, Vo.interpolateRound = Lu, Vo.transform = function (n) {
        var t = Bo.createElementNS(Vo.ns.prefix.svg, 'g');
        return (Vo.transform = function (n) {
            if (null != n) {
                t.setAttribute('transform', n);
                var e = t.transform.baseVal.consolidate();
            }
            return new Tu(e ? e.matrix : rl);
        })(n);
    }, Tu.prototype.toString = function () {
        return 'translate(' + this.translate + ')rotate(' + this.rotate + ')skewX(' + this.skew + ')scale(' + this.scale + ')';
    };
    var rl = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Vo.interpolateTransform = Pu, Vo.layout = {}, Vo.layout.bundle = function () {
        return function (n) {
            for (var t = [], e = -1, r = n.length; ++e < r;)
                t.push(Hu(n[e]));
            return t;
        };
    }, Vo.layout.chord = function () {
        function n() {
            var n, l, f, h, g, p = {}, v = [], d = Vo.range(i), m = [];
            for (e = [], r = [], n = 0, h = -1; ++h < i;) {
                for (l = 0, g = -1; ++g < i;)
                    l += u[h][g];
                v.push(l), m.push(Vo.range(i)), n += l;
            }
            for (o && d.sort(function (n, t) {
                    return o(v[n], v[t]);
                }), a && m.forEach(function (n, t) {
                    n.sort(function (n, e) {
                        return a(u[t][n], u[t][e]);
                    });
                }), n = (Sa - s * i) / n, l = 0, h = -1; ++h < i;) {
                for (f = l, g = -1; ++g < i;) {
                    var y = d[h], x = m[y][g], M = u[y][x], _ = l, b = l += M * n;
                    p[y + '-' + x] = {
                        index: y,
                        subindex: x,
                        startAngle: _,
                        endAngle: b,
                        value: M
                    };
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: l,
                    value: (l - f) / n
                }, l += s;
            }
            for (h = -1; ++h < i;)
                for (g = h - 1; ++g < i;) {
                    var w = p[h + '-' + g], S = p[g + '-' + h];
                    (w.value || S.value) && e.push(w.value < S.value ? {
                        source: S,
                        target: w
                    } : {
                        source: w,
                        target: S
                    });
                }
            c && t();
        }
        function t() {
            e.sort(function (n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2);
            });
        }
        var e, r, u, i, o, a, c, l = {}, s = 0;
        return l.matrix = function (n) {
            return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u;
        }, l.padding = function (n) {
            return arguments.length ? (s = n, e = r = null, l) : s;
        }, l.sortGroups = function (n) {
            return arguments.length ? (o = n, e = r = null, l) : o;
        }, l.sortSubgroups = function (n) {
            return arguments.length ? (a = n, e = null, l) : a;
        }, l.sortChords = function (n) {
            return arguments.length ? (c = n, e && t(), l) : c;
        }, l.chords = function () {
            return e || n(), e;
        }, l.groups = function () {
            return r || n(), r;
        }, l;
    }, Vo.layout.force = function () {
        function n(n) {
            return function (t, e, r, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x, o = t.cy - n.y, a = u - e, c = i * i + o * o;
                    if (c > a * a / d) {
                        if (p > c) {
                            var l = t.charge / c;
                            n.px -= i * l, n.py -= o * l;
                        }
                        return !0;
                    }
                    if (t.point && c && p > c) {
                        var l = t.pointCharge / c;
                        n.px -= i * l, n.py -= o * l;
                    }
                }
                return !t.charge;
            };
        }
        function t(n) {
            n.px = Vo.event.x, n.py = Vo.event.y, a.resume();
        }
        var e, r, u, i, o, a = {}, c = Vo.dispatch('start', 'tick', 'end'), l = [
                1,
                1
            ], s = 0.9, f = ul, h = il, g = -30, p = ol, v = 0.1, d = 0.64, m = [], y = [];
        return a.tick = function () {
            if ((r *= 0.99) < 0.005)
                return c.end({
                    type: 'end',
                    alpha: r = 0
                }), !0;
            var t, e, a, f, h, p, d, x, M, _ = m.length, b = y.length;
            for (e = 0; b > e; ++e)
                a = y[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, x *= p, M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), f.y += M * d);
            if ((d = r * v) && (x = l[0] / 2, M = l[1] / 2, e = -1, d))
                for (; ++e < _;)
                    a = m[e], a.x += (x - a.x) * d, a.y += (M - a.y) * d;
            if (g)
                for (Xu(t = Vo.geom.quadtree(m), r, o), e = -1; ++e < _;)
                    (a = m[e]).fixed || t.visit(n(a));
            for (e = -1; ++e < _;)
                a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s);
            c.tick({
                type: 'tick',
                alpha: r
            });
        }, a.nodes = function (n) {
            return arguments.length ? (m = n, a) : m;
        }, a.links = function (n) {
            return arguments.length ? (y = n, a) : y;
        }, a.size = function (n) {
            return arguments.length ? (l = n, a) : l;
        }, a.linkDistance = function (n) {
            return arguments.length ? (f = 'function' == typeof n ? n : +n, a) : f;
        }, a.distance = a.linkDistance, a.linkStrength = function (n) {
            return arguments.length ? (h = 'function' == typeof n ? n : +n, a) : h;
        }, a.friction = function (n) {
            return arguments.length ? (s = +n, a) : s;
        }, a.charge = function (n) {
            return arguments.length ? (g = 'function' == typeof n ? n : +n, a) : g;
        }, a.chargeDistance = function (n) {
            return arguments.length ? (p = n * n, a) : Math.sqrt(p);
        }, a.gravity = function (n) {
            return arguments.length ? (v = +n, a) : v;
        }, a.theta = function (n) {
            return arguments.length ? (d = n * n, a) : Math.sqrt(d);
        }, a.alpha = function (n) {
            return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                type: 'start',
                alpha: r = n
            }), Vo.timer(a.tick)), a) : r;
        }, a.start = function () {
            function n(n, r) {
                if (!e) {
                    for (e = new Array(c), a = 0; c > a; ++a)
                        e[a] = [];
                    for (a = 0; l > a; ++a) {
                        var u = y[a];
                        e[u.source.index].push(u.target), e[u.target.index].push(u.source);
                    }
                }
                for (var i, o = e[t], a = -1, l = o.length; ++a < l;)
                    if (!isNaN(i = o[a][n]))
                        return i;
                return Math.random() * r;
            }
            var t, e, r, c = m.length, s = y.length, p = l[0], v = l[1];
            for (t = 0; c > t; ++t)
                (r = m[t]).index = t, r.weight = 0;
            for (t = 0; s > t; ++t)
                r = y[t], 'number' == typeof r.source && (r.source = m[r.source]), 'number' == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (t = 0; c > t; ++t)
                r = m[t], isNaN(r.x) && (r.x = n('x', p)), isNaN(r.y) && (r.y = n('y', v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (u = [], 'function' == typeof f)
                for (t = 0; s > t; ++t)
                    u[t] = +f.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t)
                    u[t] = f;
            if (i = [], 'function' == typeof h)
                for (t = 0; s > t; ++t)
                    i[t] = +h.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t)
                    i[t] = h;
            if (o = [], 'function' == typeof g)
                for (t = 0; c > t; ++t)
                    o[t] = +g.call(this, m[t], t);
            else
                for (t = 0; c > t; ++t)
                    o[t] = g;
            return a.resume();
        }, a.resume = function () {
            return a.alpha(0.1);
        }, a.stop = function () {
            return a.alpha(0);
        }, a.drag = function () {
            return e || (e = Vo.behavior.drag().origin(wt).on('dragstart.force', Yu).on('drag.force', t).on('dragend.force', Iu)), arguments.length ? (this.on('mouseover.force', Zu).on('mouseout.force', Vu).call(e), void 0) : e;
        }, Vo.rebind(a, c, 'on');
    };
    var ul = 20, il = 1, ol = 1 / 0;
    Vo.layout.hierarchy = function () {
        function n(u) {
            var i, o = [u], a = [];
            for (u.depth = 0; null != (i = o.pop());)
                if (a.push(i), (l = e.call(n, i, i.depth)) && (c = l.length)) {
                    for (var c, l, s; --c >= 0;)
                        o.push(s = l[c]), s.parent = i, s.depth = i.depth + 1;
                    r && (i.value = 0), i.children = l;
                } else
                    r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children;
            return Wu(u, function (n) {
                var e, u;
                t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value);
            }), a;
        }
        var t = Ku, e = Ju, r = Gu;
        return n.sort = function (e) {
            return arguments.length ? (t = e, n) : t;
        }, n.children = function (t) {
            return arguments.length ? (e = t, n) : e;
        }, n.value = function (t) {
            return arguments.length ? (r = t, n) : r;
        }, n.revalue = function (t) {
            return r && (Bu(t, function (n) {
                n.children && (n.value = 0);
            }), Wu(t, function (t) {
                var e;
                t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value);
            })), t;
        }, n;
    }, Vo.layout.partition = function () {
        function n(t, e, r, u) {
            var i = t.children;
            if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
                var o, a, c, l = -1;
                for (r = t.value ? r / t.value : 0; ++l < o;)
                    n(a = i[l], e, c = a.value * r, u), e += c;
            }
        }
        function t(n) {
            var e = n.children, r = 0;
            if (e && (u = e.length))
                for (var u, i = -1; ++i < u;)
                    r = Math.max(r, t(e[i]));
            return 1 + r;
        }
        function e(e, i) {
            var o = r.call(this, e, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])), o;
        }
        var r = Vo.layout.hierarchy(), u = [
                1,
                1
            ];
        return e.size = function (n) {
            return arguments.length ? (u = n, e) : u;
        }, $u(e, r);
    }, Vo.layout.pie = function () {
        function n(i) {
            var o = i.map(function (e, r) {
                    return +t.call(n, e, r);
                }), a = +('function' == typeof r ? r.apply(this, arguments) : r), c = (('function' == typeof u ? u.apply(this, arguments) : u) - a) / Vo.sum(o), l = Vo.range(i.length);
            null != e && l.sort(e === al ? function (n, t) {
                return o[t] - o[n];
            } : function (n, t) {
                return e(i[n], i[t]);
            });
            var s = [];
            return l.forEach(function (n) {
                var t;
                s[n] = {
                    data: i[n],
                    value: t = o[n],
                    startAngle: a,
                    endAngle: a += t * c
                };
            }), s;
        }
        var t = Number, e = al, r = 0, u = Sa;
        return n.value = function (e) {
            return arguments.length ? (t = e, n) : t;
        }, n.sort = function (t) {
            return arguments.length ? (e = t, n) : e;
        }, n.startAngle = function (t) {
            return arguments.length ? (r = t, n) : r;
        }, n.endAngle = function (t) {
            return arguments.length ? (u = t, n) : u;
        }, n;
    };
    var al = {};
    Vo.layout.stack = function () {
        function n(a, c) {
            var l = a.map(function (e, r) {
                    return t.call(n, e, r);
                }), s = l.map(function (t) {
                    return t.map(function (t, e) {
                        return [
                            i.call(n, t, e),
                            o.call(n, t, e)
                        ];
                    });
                }), f = e.call(n, s, c);
            l = Vo.permute(l, f), s = Vo.permute(s, f);
            var h, g, p, v = r.call(n, s, c), d = l.length, m = l[0].length;
            for (g = 0; m > g; ++g)
                for (u.call(n, l[0][g], p = v[g], s[0][g][1]), h = 1; d > h; ++h)
                    u.call(n, l[h][g], p += s[h - 1][g][1], s[h][g][1]);
            return a;
        }
        var t = wt, e = ri, r = ui, u = ei, i = ni, o = ti;
        return n.values = function (e) {
            return arguments.length ? (t = e, n) : t;
        }, n.order = function (t) {
            return arguments.length ? (e = 'function' == typeof t ? t : cl.get(t) || ri, n) : e;
        }, n.offset = function (t) {
            return arguments.length ? (r = 'function' == typeof t ? t : ll.get(t) || ui, n) : r;
        }, n.x = function (t) {
            return arguments.length ? (i = t, n) : i;
        }, n.y = function (t) {
            return arguments.length ? (o = t, n) : o;
        }, n.out = function (t) {
            return arguments.length ? (u = t, n) : u;
        }, n;
    };
    var cl = Vo.map({
            'inside-out': function (n) {
                var t, e, r = n.length, u = n.map(ii), i = n.map(oi), o = Vo.range(r).sort(function (n, t) {
                        return u[n] - u[t];
                    }), a = 0, c = 0, l = [], s = [];
                for (t = 0; r > t; ++t)
                    e = o[t], c > a ? (a += i[e], l.push(e)) : (c += i[e], s.push(e));
                return s.reverse().concat(l);
            },
            reverse: function (n) {
                return Vo.range(n.length).reverse();
            },
            'default': ri
        }), ll = Vo.map({
            silhouette: function (n) {
                var t, e, r, u = n.length, i = n[0].length, o = [], a = 0, c = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++)
                        r += n[t][e][1];
                    r > a && (a = r), o.push(r);
                }
                for (e = 0; i > e; ++e)
                    c[e] = (a - o[e]) / 2;
                return c;
            },
            wiggle: function (n) {
                var t, e, r, u, i, o, a, c, l, s = n.length, f = n[0], h = f.length, g = [];
                for (g[0] = c = l = 0, e = 1; h > e; ++e) {
                    for (t = 0, u = 0; s > t; ++t)
                        u += n[t][e][1];
                    for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; s > t; ++t) {
                        for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)
                            o += (n[r][e][1] - n[r][e - 1][1]) / a;
                        i += o * n[t][e][1];
                    }
                    g[e] = c -= u ? i / u * a : 0, l > c && (l = c);
                }
                for (e = 0; h > e; ++e)
                    g[e] -= l;
                return g;
            },
            expand: function (n) {
                var t, e, r, u = n.length, i = n[0].length, o = 1 / u, a = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++)
                        r += n[t][e][1];
                    if (r)
                        for (t = 0; u > t; t++)
                            n[t][e][1] /= r;
                    else
                        for (t = 0; u > t; t++)
                            n[t][e][1] = o;
                }
                for (e = 0; i > e; ++e)
                    a[e] = 0;
                return a;
            },
            zero: ui
        });
    Vo.layout.histogram = function () {
        function n(n, i) {
            for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;)
                o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
            if (g > 0)
                for (i = -1; ++i < h;)
                    a = l[i], a >= s[0] && a <= s[1] && (o = c[Vo.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
            return c;
        }
        var t = !0, e = Number, r = si, u = ci;
        return n.value = function (t) {
            return arguments.length ? (e = t, n) : e;
        }, n.range = function (t) {
            return arguments.length ? (r = bt(t), n) : r;
        }, n.bins = function (t) {
            return arguments.length ? (u = 'number' == typeof t ? function (n) {
                return li(n, t);
            } : bt(t), n) : u;
        }, n.frequency = function (e) {
            return arguments.length ? (t = !!e, n) : t;
        }, n;
    }, Vo.layout.pack = function () {
        function n(n, i) {
            var o = e.call(this, n, i), a = o[0], c = u[0], l = u[1], s = null == t ? Math.sqrt : 'function' == typeof t ? t : function () {
                    return t;
                };
            if (a.x = a.y = 0, Wu(a, function (n) {
                    n.r = +s(n.value);
                }), Wu(a, vi), r) {
                var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                Wu(a, function (n) {
                    n.r += f;
                }), Wu(a, vi), Wu(a, function (n) {
                    n.r -= f;
                });
            }
            return yi(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o;
        }
        var t, e = Vo.layout.hierarchy().sort(fi), r = 0, u = [
                1,
                1
            ];
        return n.size = function (t) {
            return arguments.length ? (u = t, n) : u;
        }, n.radius = function (e) {
            return arguments.length ? (t = null == e || 'function' == typeof e ? e : +e, n) : t;
        }, n.padding = function (t) {
            return arguments.length ? (r = +t, n) : r;
        }, $u(n, e);
    }, Vo.layout.tree = function () {
        function n(n, u) {
            var s = o.call(this, n, u), f = s[0], h = t(f);
            if (Wu(h, e), h.parent.m = -h.z, Bu(h, r), l)
                Bu(f, i);
            else {
                var g = f, p = f, v = f;
                Bu(f, function (n) {
                    n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n);
                });
                var d = a(g, p) / 2 - g.x, m = c[0] / (p.x + a(p, g) / 2 + d), y = c[1] / (v.depth || 1);
                Bu(f, function (n) {
                    n.x = (n.x + d) * m, n.y = n.depth * y;
                });
            }
            return s;
        }
        function t(n) {
            for (var t, e = {
                        A: null,
                        children: [n]
                    }, r = [e]; null != (t = r.pop());)
                for (var u, i = t.children, o = 0, a = i.length; a > o; ++o)
                    r.push((i[o] = u = {
                        _: i[o],
                        parent: t,
                        children: (u = i[o].children) && u.slice() || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: o
                    }).a = u);
            return e.children[0];
        }
        function e(n) {
            var t = n.children, e = n.parent.children, r = n.i ? e[n.i - 1] : null;
            if (t.length) {
                Si(n);
                var i = (t[0].z + t[t.length - 1].z) / 2;
                r ? (n.z = r.z + a(n._, r._), n.m = n.z - i) : n.z = i;
            } else
                r && (n.z = r.z + a(n._, r._));
            n.parent.A = u(n, r, n.parent.A || e[0]);
        }
        function r(n) {
            n._.x = n.z + n.parent.m, n.m += n.parent.m;
        }
        function u(n, t, e) {
            if (t) {
                for (var r, u = n, i = n, o = t, c = u.parent.children[0], l = u.m, s = i.m, f = o.m, h = c.m; o = bi(o), u = _i(u), o && u;)
                    c = _i(c), i = bi(i), i.a = n, r = o.z + f - u.z - l + a(o._, u._), r > 0 && (wi(ki(o, n, e), n, r), l += r, s += r), f += o.m, l += u.m, h += c.m, s += i.m;
                o && !bi(i) && (i.t = o, i.m += f - s), u && !_i(c) && (c.t = u, c.m += l - h, e = n);
            }
            return e;
        }
        function i(n) {
            n.x *= c[0], n.y = n.depth * c[1];
        }
        var o = Vo.layout.hierarchy().sort(null).value(null), a = Mi, c = [
                1,
                1
            ], l = null;
        return n.separation = function (t) {
            return arguments.length ? (a = t, n) : a;
        }, n.size = function (t) {
            return arguments.length ? (l = null == (c = t) ? i : null, n) : l ? null : c;
        }, n.nodeSize = function (t) {
            return arguments.length ? (l = null == (c = t) ? null : i, n) : l ? c : null;
        }, $u(n, o);
    }, Vo.layout.cluster = function () {
        function n(n, i) {
            var o, a = t.call(this, n, i), c = a[0], l = 0;
            Wu(c, function (n) {
                var t = n.children;
                t && t.length ? (n.x = Ai(t), n.y = Ei(t)) : (n.x = o ? l += e(n, o) : 0, n.y = 0, o = n);
            });
            var s = Ci(c), f = Ni(c), h = s.x - e(s, f) / 2, g = f.x + e(f, s) / 2;
            return Wu(c, u ? function (n) {
                n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1];
            } : function (n) {
                n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1];
            }), a;
        }
        var t = Vo.layout.hierarchy().sort(null).value(null), e = Mi, r = [
                1,
                1
            ], u = !1;
        return n.separation = function (t) {
            return arguments.length ? (e = t, n) : e;
        }, n.size = function (t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r;
        }, n.nodeSize = function (t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null;
        }, $u(n, t);
    }, Vo.layout.treemap = function () {
        function n(n, t) {
            for (var e, r, u = -1, i = n.length; ++u < i;)
                r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r;
        }
        function t(e) {
            var i = e.children;
            if (i && i.length) {
                var o, a, c, l = f(e), s = [], h = i.slice(), p = 1 / 0, v = 'slice' === g ? l.dx : 'dice' === g ? l.dy : 'slice-dice' === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (n(h, l.dx * l.dy / e.value), s.area = 0; (c = h.length) > 0;)
                    s.push(o = h[c - 1]), s.area += o.area, 'squarify' !== g || (a = r(s, v)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, v, l, !1), v = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
                s.length && (u(s, v, l, !0), s.length = s.area = 0), i.forEach(t);
            }
        }
        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var i, o = f(t), a = r.slice(), c = [];
                for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();)
                    c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
                r.forEach(e);
            }
        }
        function r(n, t) {
            for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)
                (e = n[o].area) && (i > e && (i = e), e > u && (u = e));
            return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0;
        }
        function u(n, t, e, r) {
            var u, i = -1, o = n.length, a = e.x, l = e.y, s = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || s > e.dy) && (s = e.dy); ++i < o;)
                    u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
                u.z = !0, u.dx += e.x + e.dx - a, e.y += s, e.dy -= s;
            } else {
                for ((r || s > e.dx) && (s = e.dx); ++i < o;)
                    u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
                u.z = !1, u.dy += e.y + e.dy - l, e.x += s, e.dx -= s;
            }
        }
        function i(r) {
            var u = o || a(r), i = u[0];
            return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u;
        }
        var o, a = Vo.layout.hierarchy(), c = Math.round, l = [
                1,
                1
            ], s = null, f = zi, h = !1, g = 'squarify', p = 0.5 * (1 + Math.sqrt(5));
        return i.size = function (n) {
            return arguments.length ? (l = n, i) : l;
        }, i.padding = function (n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null == e ? zi(t) : Li(t, 'number' == typeof e ? [
                    e,
                    e,
                    e,
                    e
                ] : e);
            }
            function e(t) {
                return Li(t, n);
            }
            if (!arguments.length)
                return s;
            var r;
            return f = null == (s = n) ? zi : 'function' == (r = typeof n) ? t : 'number' === r ? (n = [
                n,
                n,
                n,
                n
            ], e) : e, i;
        }, i.round = function (n) {
            return arguments.length ? (c = n ? Math.round : Number, i) : c != Number;
        }, i.sticky = function (n) {
            return arguments.length ? (h = n, o = null, i) : h;
        }, i.ratio = function (n) {
            return arguments.length ? (p = n, i) : p;
        }, i.mode = function (n) {
            return arguments.length ? (g = n + '', i) : g;
        }, $u(i, a);
    }, Vo.random = {
        normal: function (n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1), 1 > e && (n = 0), function () {
                var e, r, u;
                do
                    e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r;
                while (!u || u > 1);
                return n + t * e * Math.sqrt(-2 * Math.log(u) / u);
            };
        },
        logNormal: function () {
            var n = Vo.random.normal.apply(Vo, arguments);
            return function () {
                return Math.exp(n());
            };
        },
        bates: function (n) {
            var t = Vo.random.irwinHall(n);
            return function () {
                return t() / n;
            };
        },
        irwinHall: function (n) {
            return function () {
                for (var t = 0, e = 0; n > e; e++)
                    t += Math.random();
                return t;
            };
        }
    }, Vo.scale = {};
    var sl = {
        floor: wt,
        ceil: wt
    };
    Vo.scale.linear = function () {
        return ji([
            0,
            1
        ], [
            0,
            1
        ], gu, !1);
    };
    var fl = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    Vo.scale.log = function () {
        return Xi(Vo.scale.linear().domain([
            0,
            1
        ]), 10, !0, [
            1,
            10
        ]);
    };
    var hl = Vo.format('.0e'), gl = {
            floor: function (n) {
                return -Math.ceil(-n);
            },
            ceil: function (n) {
                return -Math.floor(-n);
            }
        };
    Vo.scale.pow = function () {
        return $i(Vo.scale.linear(), 1, [
            0,
            1
        ]);
    }, Vo.scale.sqrt = function () {
        return Vo.scale.pow().exponent(0.5);
    }, Vo.scale.ordinal = function () {
        return Wi([], {
            t: 'range',
            a: [[]]
        });
    }, Vo.scale.category10 = function () {
        return Vo.scale.ordinal().range(pl);
    }, Vo.scale.category20 = function () {
        return Vo.scale.ordinal().range(vl);
    }, Vo.scale.category20b = function () {
        return Vo.scale.ordinal().range(dl);
    }, Vo.scale.category20c = function () {
        return Vo.scale.ordinal().range(ml);
    };
    var pl = [
            2062260,
            16744206,
            2924588,
            14034728,
            9725885,
            9197131,
            14907330,
            8355711,
            12369186,
            1556175
        ].map(vt), vl = [
            2062260,
            11454440,
            16744206,
            16759672,
            2924588,
            10018698,
            14034728,
            16750742,
            9725885,
            12955861,
            9197131,
            12885140,
            14907330,
            16234194,
            8355711,
            13092807,
            12369186,
            14408589,
            1556175,
            10410725
        ].map(vt), dl = [
            3750777,
            5395619,
            7040719,
            10264286,
            6519097,
            9216594,
            11915115,
            13556636,
            9202993,
            12426809,
            15186514,
            15190932,
            8666169,
            11356490,
            14049643,
            15177372,
            8077683,
            10834324,
            13528509,
            14589654
        ].map(vt), ml = [
            3244733,
            7057110,
            10406625,
            13032431,
            15095053,
            16616764,
            16625259,
            16634018,
            3253076,
            7652470,
            10607003,
            13101504,
            7695281,
            10394312,
            12369372,
            14342891,
            6513507,
            9868950,
            12434877,
            14277081
        ].map(vt);
    Vo.scale.quantile = function () {
        return Ji([], []);
    }, Vo.scale.quantize = function () {
        return Gi(0, 1, [
            0,
            1
        ]);
    }, Vo.scale.threshold = function () {
        return Ki([0.5], [
            0,
            1
        ]);
    }, Vo.scale.identity = function () {
        return Qi([
            0,
            1
        ]);
    }, Vo.svg = {}, Vo.svg.arc = function () {
        function n() {
            var n = t.apply(this, arguments), i = e.apply(this, arguments), o = r.apply(this, arguments) + yl, a = u.apply(this, arguments) + yl, c = (o > a && (c = o, o = a, a = c), a - o), l = wa > c ? '0' : '1', s = Math.cos(o), f = Math.sin(o), h = Math.cos(a), g = Math.sin(a);
            return c >= xl ? n ? 'M0,' + i + 'A' + i + ',' + i + ' 0 1,1 0,' + -i + 'A' + i + ',' + i + ' 0 1,1 0,' + i + 'M0,' + n + 'A' + n + ',' + n + ' 0 1,0 0,' + -n + 'A' + n + ',' + n + ' 0 1,0 0,' + n + 'Z' : 'M0,' + i + 'A' + i + ',' + i + ' 0 1,1 0,' + -i + 'A' + i + ',' + i + ' 0 1,1 0,' + i + 'Z' : n ? 'M' + i * s + ',' + i * f + 'A' + i + ',' + i + ' 0 ' + l + ',1 ' + i * h + ',' + i * g + 'L' + n * h + ',' + n * g + 'A' + n + ',' + n + ' 0 ' + l + ',0 ' + n * s + ',' + n * f + 'Z' : 'M' + i * s + ',' + i * f + 'A' + i + ',' + i + ' 0 ' + l + ',1 ' + i * h + ',' + i * g + 'L0,0' + 'Z';
        }
        var t = no, e = to, r = eo, u = ro;
        return n.innerRadius = function (e) {
            return arguments.length ? (t = bt(e), n) : t;
        }, n.outerRadius = function (t) {
            return arguments.length ? (e = bt(t), n) : e;
        }, n.startAngle = function (t) {
            return arguments.length ? (r = bt(t), n) : r;
        }, n.endAngle = function (t) {
            return arguments.length ? (u = bt(t), n) : u;
        }, n.centroid = function () {
            var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2, i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + yl;
            return [
                Math.cos(i) * n,
                Math.sin(i) * n
            ];
        }, n;
    };
    var yl = -ka, xl = Sa - Ea;
    Vo.svg.line = function () {
        return uo(wt);
    };
    var Ml = Vo.map({
        linear: io,
        'linear-closed': oo,
        step: ao,
        'step-before': co,
        'step-after': lo,
        basis: vo,
        'basis-open': mo,
        'basis-closed': yo,
        bundle: xo,
        cardinal: ho,
        'cardinal-open': so,
        'cardinal-closed': fo,
        monotone: ko
    });
    Ml.forEach(function (n, t) {
        t.key = n, t.closed = /-closed$/.test(n);
    });
    var _l = [
            0,
            2 / 3,
            1 / 3,
            0
        ], bl = [
            0,
            1 / 3,
            2 / 3,
            0
        ], wl = [
            0,
            1 / 6,
            2 / 3,
            1 / 6
        ];
    Vo.svg.line.radial = function () {
        var n = uo(Eo);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n;
    }, co.reverse = lo, lo.reverse = co, Vo.svg.area = function () {
        return Ao(wt);
    }, Vo.svg.area.radial = function () {
        var n = Ao(Eo);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n;
    }, Vo.svg.chord = function () {
        function n(n, a) {
            var c = t(this, i, n, a), l = t(this, o, n, a);
            return 'M' + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + 'Z';
        }
        function t(n, t, e, r) {
            var u = t.call(n, e, r), i = a.call(n, u, r), o = c.call(n, u, r) + yl, s = l.call(n, u, r) + yl;
            return {
                r: i,
                a0: o,
                a1: s,
                p0: [
                    i * Math.cos(o),
                    i * Math.sin(o)
                ],
                p1: [
                    i * Math.cos(s),
                    i * Math.sin(s)
                ]
            };
        }
        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1;
        }
        function r(n, t, e) {
            return 'A' + n + ',' + n + ' 0 ' + +(e > wa) + ',1 ' + t;
        }
        function u(n, t, e, r) {
            return 'Q 0,0 ' + r;
        }
        var i = pr, o = vr, a = Co, c = eo, l = ro;
        return n.radius = function (t) {
            return arguments.length ? (a = bt(t), n) : a;
        }, n.source = function (t) {
            return arguments.length ? (i = bt(t), n) : i;
        }, n.target = function (t) {
            return arguments.length ? (o = bt(t), n) : o;
        }, n.startAngle = function (t) {
            return arguments.length ? (c = bt(t), n) : c;
        }, n.endAngle = function (t) {
            return arguments.length ? (l = bt(t), n) : l;
        }, n;
    }, Vo.svg.diagonal = function () {
        function n(n, u) {
            var i = t.call(this, n, u), o = e.call(this, n, u), a = (i.y + o.y) / 2, c = [
                    i,
                    {
                        x: i.x,
                        y: a
                    },
                    {
                        x: o.x,
                        y: a
                    },
                    o
                ];
            return c = c.map(r), 'M' + c[0] + 'C' + c[1] + ' ' + c[2] + ' ' + c[3];
        }
        var t = pr, e = vr, r = No;
        return n.source = function (e) {
            return arguments.length ? (t = bt(e), n) : t;
        }, n.target = function (t) {
            return arguments.length ? (e = bt(t), n) : e;
        }, n.projection = function (t) {
            return arguments.length ? (r = t, n) : r;
        }, n;
    }, Vo.svg.diagonal.radial = function () {
        var n = Vo.svg.diagonal(), t = No, e = n.projection;
        return n.projection = function (n) {
            return arguments.length ? e(zo(t = n)) : t;
        }, n;
    }, Vo.svg.symbol = function () {
        function n(n, r) {
            return (Sl.get(t.call(this, n, r)) || qo)(e.call(this, n, r));
        }
        var t = To, e = Lo;
        return n.type = function (e) {
            return arguments.length ? (t = bt(e), n) : t;
        }, n.size = function (t) {
            return arguments.length ? (e = bt(t), n) : e;
        }, n;
    };
    var Sl = Vo.map({
        circle: qo,
        cross: function (n) {
            var t = Math.sqrt(n / 5) / 2;
            return 'M' + -3 * t + ',' + -t + 'H' + -t + 'V' + -3 * t + 'H' + t + 'V' + -t + 'H' + 3 * t + 'V' + t + 'H' + t + 'V' + 3 * t + 'H' + -t + 'V' + t + 'H' + -3 * t + 'Z';
        },
        diamond: function (n) {
            var t = Math.sqrt(n / (2 * Cl)), e = t * Cl;
            return 'M0,' + -t + 'L' + e + ',0' + ' 0,' + t + ' ' + -e + ',0' + 'Z';
        },
        square: function (n) {
            var t = Math.sqrt(n) / 2;
            return 'M' + -t + ',' + -t + 'L' + t + ',' + -t + ' ' + t + ',' + t + ' ' + -t + ',' + t + 'Z';
        },
        'triangle-down': function (n) {
            var t = Math.sqrt(n / Al), e = t * Al / 2;
            return 'M0,' + e + 'L' + t + ',' + -e + ' ' + -t + ',' + -e + 'Z';
        },
        'triangle-up': function (n) {
            var t = Math.sqrt(n / Al), e = t * Al / 2;
            return 'M0,' + -e + 'L' + t + ',' + e + ' ' + -t + ',' + e + 'Z';
        }
    });
    Vo.svg.symbolTypes = Sl.keys();
    var kl, El, Al = Math.sqrt(3), Cl = Math.tan(30 * Ca), Nl = [], zl = 0;
    Nl.call = va.call, Nl.empty = va.empty, Nl.node = va.node, Nl.size = va.size, Vo.transition = function (n) {
        return arguments.length ? kl ? n.transition() : n : ya.transition();
    }, Vo.transition.prototype = Nl, Nl.select = function (n) {
        var t, e, r, u = this.id, i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []);
            for (var c = this[o], l = -1, s = c.length; ++l < s;)
                (r = c[l]) && (e = n.call(r, r.__data__, l, o)) ? ('__data__' in r && (e.__data__ = r.__data__), Uo(e, l, u, r.__transition__[u]), t.push(e)) : t.push(null);
        }
        return Ro(i, u);
    }, Nl.selectAll = function (n) {
        var t, e, r, u, i, o = this.id, a = [];
        n = w(n);
        for (var c = -1, l = this.length; ++c < l;)
            for (var s = this[c], f = -1, h = s.length; ++f < h;)
                if (r = s[f]) {
                    i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
                    for (var g = -1, p = e.length; ++g < p;)
                        (u = e[g]) && Uo(u, g, o, i), t.push(u);
                }
        return Ro(a, o);
    }, Nl.filter = function (n) {
        var t, e, r, u = [];
        'function' != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var e = this[i], a = 0, c = e.length; c > a; a++)
                (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
        }
        return Ro(u, this.id);
    }, Nl.tween = function (n, t) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : P(this, null == t ? function (t) {
            t.__transition__[e].tween.remove(n);
        } : function (r) {
            r.__transition__[e].tween.set(n, t);
        });
    }, Nl.attr = function (n, t) {
        function e() {
            this.removeAttribute(a);
        }
        function r() {
            this.removeAttributeNS(a.space, a.local);
        }
        function u(n) {
            return null == n ? e : (n += '', function () {
                var t, e = this.getAttribute(a);
                return e !== n && (t = o(e, n), function (n) {
                    this.setAttribute(a, t(n));
                });
            });
        }
        function i(n) {
            return null == n ? r : (n += '', function () {
                var t, e = this.getAttributeNS(a.space, a.local);
                return e !== n && (t = o(e, n), function (n) {
                    this.setAttributeNS(a.space, a.local, t(n));
                });
            });
        }
        if (arguments.length < 2) {
            for (t in n)
                this.attr(t, n[t]);
            return this;
        }
        var o = 'transform' == n ? Pu : gu, a = Vo.ns.qualify(n);
        return Do(this, 'attr.' + n, t, a.local ? i : u);
    }, Nl.attrTween = function (n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(u));
            return r && function (n) {
                this.setAttribute(u, r(n));
            };
        }
        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
            return r && function (n) {
                this.setAttributeNS(u.space, u.local, r(n));
            };
        }
        var u = Vo.ns.qualify(n);
        return this.tween('attr.' + n, u.local ? r : e);
    }, Nl.style = function (n, t, e) {
        function r() {
            this.style.removeProperty(n);
        }
        function u(t) {
            return null == t ? r : (t += '', function () {
                var r, u = Jo.getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (r = gu(u, t), function (t) {
                    this.style.setProperty(n, r(t), e);
                });
            });
        }
        var i = arguments.length;
        if (3 > i) {
            if ('string' != typeof n) {
                2 > i && (t = '');
                for (e in n)
                    this.style(e, n[e], t);
                return this;
            }
            e = '';
        }
        return Do(this, 'style.' + n, t, u);
    }, Nl.styleTween = function (n, t, e) {
        function r(r, u) {
            var i = t.call(this, r, u, Jo.getComputedStyle(this, null).getPropertyValue(n));
            return i && function (t) {
                this.style.setProperty(n, i(t), e);
            };
        }
        return arguments.length < 3 && (e = ''), this.tween('style.' + n, r);
    }, Nl.text = function (n) {
        return Do(this, 'text', n, Po);
    }, Nl.remove = function () {
        return this.each('end.transition', function () {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this);
        });
    }, Nl.ease = function (n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ('function' != typeof n && (n = Vo.ease.apply(Vo, arguments)), P(this, function (e) {
            e.__transition__[t].ease = n;
        }));
    }, Nl.delay = function (n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : P(this, 'function' == typeof n ? function (e, r, u) {
            e.__transition__[t].delay = +n.call(e, e.__data__, r, u);
        } : (n = +n, function (e) {
            e.__transition__[t].delay = n;
        }));
    }, Nl.duration = function (n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : P(this, 'function' == typeof n ? function (e, r, u) {
            e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u));
        } : (n = Math.max(1, n), function (e) {
            e.__transition__[t].duration = n;
        }));
    }, Nl.each = function (n, t) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = El, u = kl;
            kl = e, P(this, function (t, r, u) {
                El = t.__transition__[e], n.call(t, t.__data__, r, u);
            }), El = r, kl = u;
        } else
            P(this, function (r) {
                var u = r.__transition__[e];
                (u.event || (u.event = Vo.dispatch('start', 'end'))).on(n, t);
            });
        return this;
    }, Nl.transition = function () {
        for (var n, t, e, r, u = this.id, i = ++zl, o = [], a = 0, c = this.length; c > a; a++) {
            o.push(n = []);
            for (var t = this[a], l = 0, s = t.length; s > l; l++)
                (e = t[l]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Uo(e, l, i, r)), n.push(e);
        }
        return Ro(o, i);
    }, Vo.svg.axis = function () {
        function n(n) {
            n.each(function () {
                var n, l = Vo.select(this), s = this.__chart__ || e, f = this.__chart__ = e.copy(), h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c, g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : wt : t, p = l.selectAll('.tick').data(h, f), v = p.enter().insert('g', '.domain').attr('class', 'tick').style('opacity', Ea), d = Vo.transition(p.exit()).style('opacity', Ea).remove(), m = Vo.transition(p.order()).style('opacity', 1), y = qi(f), x = l.selectAll('.domain').data([0]), M = (x.enter().append('path').attr('class', 'domain'), Vo.transition(x));
                v.append('line'), v.append('text');
                var _ = v.select('line'), b = m.select('line'), w = p.select('text').text(g), S = v.select('text'), k = m.select('text');
                switch (r) {
                case 'bottom':
                    n = jo, _.attr('y2', u), S.attr('y', Math.max(u, 0) + o), b.attr('x2', 0).attr('y2', u), k.attr('x', 0).attr('y', Math.max(u, 0) + o), w.attr('dy', '.71em').style('text-anchor', 'middle'), M.attr('d', 'M' + y[0] + ',' + i + 'V0H' + y[1] + 'V' + i);
                    break;
                case 'top':
                    n = jo, _.attr('y2', -u), S.attr('y', -(Math.max(u, 0) + o)), b.attr('x2', 0).attr('y2', -u), k.attr('x', 0).attr('y', -(Math.max(u, 0) + o)), w.attr('dy', '0em').style('text-anchor', 'middle'), M.attr('d', 'M' + y[0] + ',' + -i + 'V0H' + y[1] + 'V' + -i);
                    break;
                case 'left':
                    n = Ho, _.attr('x2', -u), S.attr('x', -(Math.max(u, 0) + o)), b.attr('x2', -u).attr('y2', 0), k.attr('x', -(Math.max(u, 0) + o)).attr('y', 0), w.attr('dy', '.32em').style('text-anchor', 'end'), M.attr('d', 'M' + -i + ',' + y[0] + 'H0V' + y[1] + 'H' + -i);
                    break;
                case 'right':
                    n = Ho, _.attr('x2', u), S.attr('x', Math.max(u, 0) + o), b.attr('x2', u).attr('y2', 0), k.attr('x', Math.max(u, 0) + o).attr('y', 0), w.attr('dy', '.32em').style('text-anchor', 'start'), M.attr('d', 'M' + i + ',' + y[0] + 'H0V' + y[1] + 'H' + i);
                }
                if (f.rangeBand) {
                    var E = f, A = E.rangeBand() / 2;
                    s = f = function (n) {
                        return E(n) + A;
                    };
                } else
                    s.rangeBand ? s = f : d.call(n, f);
                v.call(n, s), m.call(n, f);
            });
        }
        var t, e = Vo.scale.linear(), r = Ll, u = 6, i = 6, o = 3, a = [10], c = null;
        return n.scale = function (t) {
            return arguments.length ? (e = t, n) : e;
        }, n.orient = function (t) {
            return arguments.length ? (r = t in Tl ? t + '' : Ll, n) : r;
        }, n.ticks = function () {
            return arguments.length ? (a = arguments, n) : a;
        }, n.tickValues = function (t) {
            return arguments.length ? (c = t, n) : c;
        }, n.tickFormat = function (e) {
            return arguments.length ? (t = e, n) : t;
        }, n.tickSize = function (t) {
            var e = arguments.length;
            return e ? (u = +t, i = +arguments[e - 1], n) : u;
        }, n.innerTickSize = function (t) {
            return arguments.length ? (u = +t, n) : u;
        }, n.outerTickSize = function (t) {
            return arguments.length ? (i = +t, n) : i;
        }, n.tickPadding = function (t) {
            return arguments.length ? (o = +t, n) : o;
        }, n.tickSubdivide = function () {
            return arguments.length && n;
        }, n;
    };
    var Ll = 'bottom', Tl = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    Vo.svg.brush = function () {
        function n(i) {
            i.each(function () {
                var i = Vo.select(this).style('pointer-events', 'all').style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)').on('mousedown.brush', u).on('touchstart.brush', u), o = i.selectAll('.background').data([0]);
                o.enter().append('rect').attr('class', 'background').style('visibility', 'hidden').style('cursor', 'crosshair'), i.selectAll('.extent').data([0]).enter().append('rect').attr('class', 'extent').style('cursor', 'move');
                var a = i.selectAll('.resize').data(p, wt);
                a.exit().remove(), a.enter().append('g').attr('class', function (n) {
                    return 'resize ' + n;
                }).style('cursor', function (n) {
                    return ql[n];
                }).append('rect').attr('x', function (n) {
                    return /[ew]$/.test(n) ? -3 : null;
                }).attr('y', function (n) {
                    return /^[ns]/.test(n) ? -3 : null;
                }).attr('width', 6).attr('height', 6).style('visibility', 'hidden'), a.style('display', n.empty() ? 'none' : null);
                var s, f = Vo.transition(i), h = Vo.transition(o);
                c && (s = qi(c), h.attr('x', s[0]).attr('width', s[1] - s[0]), e(f)), l && (s = qi(l), h.attr('y', s[0]).attr('height', s[1] - s[0]), r(f)), t(f);
            });
        }
        function t(n) {
            n.selectAll('.resize').attr('transform', function (n) {
                return 'translate(' + s[+/e$/.test(n)] + ',' + f[+/^s/.test(n)] + ')';
            });
        }
        function e(n) {
            n.select('.extent').attr('x', s[0]), n.selectAll('.extent,.n>rect,.s>rect').attr('width', s[1] - s[0]);
        }
        function r(n) {
            n.select('.extent').attr('y', f[0]), n.selectAll('.extent,.e>rect,.w>rect').attr('height', f[1] - f[0]);
        }
        function u() {
            function u() {
                32 == Vo.event.keyCode && (C || (x = null, z[0] -= s[1], z[1] -= f[1], C = 2), y());
            }
            function p() {
                32 == Vo.event.keyCode && 2 == C && (z[0] += s[1], z[1] += f[1], C = 0, y());
            }
            function v() {
                var n = Vo.mouse(_), u = !1;
                M && (n[0] += M[0], n[1] += M[1]), C || (Vo.event.altKey ? (x || (x = [
                    (s[0] + s[1]) / 2,
                    (f[0] + f[1]) / 2
                ]), z[0] = s[+(n[0] < x[0])], z[1] = f[+(n[1] < x[1])]) : x = null), E && d(n, c, 0) && (e(S), u = !0), A && d(n, l, 1) && (r(S), u = !0), u && (t(S), w({
                    type: 'brush',
                    mode: C ? 'move' : 'resize'
                }));
            }
            function d(n, t, e) {
                var r, u, a = qi(t), c = a[0], l = a[1], p = z[e], v = e ? f : s, d = v[1] - v[0];
                return C && (c -= p, l -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(l, n[e])) : n[e], C ? u = (r += p) + d : (x && (p = Math.max(c, Math.min(l, 2 * x[e] - r))), r > p ? (u = r, r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, !0) : void 0;
            }
            function m() {
                v(), S.style('pointer-events', 'all').selectAll('.resize').style('display', n.empty() ? 'none' : null), Vo.select('body').style('cursor', null), L.on('mousemove.brush', null).on('mouseup.brush', null).on('touchmove.brush', null).on('touchend.brush', null).on('keydown.brush', null).on('keyup.brush', null), N(), w({ type: 'brushend' });
            }
            var x, M, _ = this, b = Vo.select(Vo.event.target), w = a.of(_, arguments), S = Vo.select(_), k = b.datum(), E = !/^(n|s)$/.test(k) && c, A = !/^(e|w)$/.test(k) && l, C = b.classed('extent'), N = I(), z = Vo.mouse(_), L = Vo.select(Jo).on('keydown.brush', u).on('keyup.brush', p);
            if (Vo.event.changedTouches ? L.on('touchmove.brush', v).on('touchend.brush', m) : L.on('mousemove.brush', v).on('mouseup.brush', m), S.interrupt().selectAll('*').interrupt(), C)
                z[0] = s[0] - z[0], z[1] = f[0] - z[1];
            else if (k) {
                var T = +/w$/.test(k), q = +/^n/.test(k);
                M = [
                    s[1 - T] - z[0],
                    f[1 - q] - z[1]
                ], z[0] = s[T], z[1] = f[q];
            } else
                Vo.event.altKey && (x = z.slice());
            S.style('pointer-events', 'none').selectAll('.resize').style('display', null), Vo.select('body').style('cursor', b.style('cursor')), w({ type: 'brushstart' }), v();
        }
        var i, o, a = M(n, 'brushstart', 'brush', 'brushend'), c = null, l = null, s = [
                0,
                0
            ], f = [
                0,
                0
            ], h = !0, g = !0, p = Rl[0];
        return n.event = function (n) {
            n.each(function () {
                var n = a.of(this, arguments), t = {
                        x: s,
                        y: f,
                        i: i,
                        j: o
                    }, e = this.__chart__ || t;
                this.__chart__ = t, kl ? Vo.select(this).transition().each('start.brush', function () {
                    i = e.i, o = e.j, s = e.x, f = e.y, n({ type: 'brushstart' });
                }).tween('brush:brush', function () {
                    var e = pu(s, t.x), r = pu(f, t.y);
                    return i = o = null, function (u) {
                        s = t.x = e(u), f = t.y = r(u), n({
                            type: 'brush',
                            mode: 'resize'
                        });
                    };
                }).each('end.brush', function () {
                    i = t.i, o = t.j, n({
                        type: 'brush',
                        mode: 'resize'
                    }), n({ type: 'brushend' });
                }) : (n({ type: 'brushstart' }), n({
                    type: 'brush',
                    mode: 'resize'
                }), n({ type: 'brushend' }));
            });
        }, n.x = function (t) {
            return arguments.length ? (c = t, p = Rl[!c << 1 | !l], n) : c;
        }, n.y = function (t) {
            return arguments.length ? (l = t, p = Rl[!c << 1 | !l], n) : l;
        }, n.clamp = function (t) {
            return arguments.length ? (c && l ? (h = !!t[0], g = !!t[1]) : c ? h = !!t : l && (g = !!t), n) : c && l ? [
                h,
                g
            ] : c ? h : l ? g : null;
        }, n.extent = function (t) {
            var e, r, u, a, h;
            return arguments.length ? (c && (e = t[0], r = t[1], l && (e = e[0], r = r[0]), i = [
                e,
                r
            ], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), (e != s[0] || r != s[1]) && (s = [
                e,
                r
            ])), l && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [
                u,
                a
            ], l.invert && (u = l(u), a = l(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [
                u,
                a
            ])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (h = e, e = r, r = h))), l && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], l.invert && (u = l.invert(u), a = l.invert(a)), u > a && (h = u, u = a, a = h))), c && l ? [
                [
                    e,
                    u
                ],
                [
                    r,
                    a
                ]
            ] : c ? [
                e,
                r
            ] : l && [
                u,
                a
            ]);
        }, n.clear = function () {
            return n.empty() || (s = [
                0,
                0
            ], f = [
                0,
                0
            ], i = o = null), n;
        }, n.empty = function () {
            return !!c && s[0] == s[1] || !!l && f[0] == f[1];
        }, Vo.rebind(n, a, 'on');
    };
    var ql = {
            n: 'ns-resize',
            e: 'ew-resize',
            s: 'ns-resize',
            w: 'ew-resize',
            nw: 'nwse-resize',
            ne: 'nesw-resize',
            se: 'nwse-resize',
            sw: 'nesw-resize'
        }, Rl = [
            [
                'n',
                'e',
                's',
                'w',
                'nw',
                'ne',
                'se',
                'sw'
            ],
            [
                'e',
                'w'
            ],
            [
                'n',
                's'
            ],
            []
        ], Dl = nc.format = oc.timeFormat, Pl = Dl.utc, Ul = Pl('%Y-%m-%dT%H:%M:%S.%LZ');
    Dl.iso = Date.prototype.toISOString && +new Date('2000-01-01T00:00:00.000Z') ? Fo : Ul, Fo.parse = function (n) {
        var t = new Date(n);
        return isNaN(t) ? null : t;
    }, Fo.toString = Ul.toString, nc.second = Pt(function (n) {
        return new tc(1000 * Math.floor(n / 1000));
    }, function (n, t) {
        n.setTime(n.getTime() + 1000 * Math.floor(t));
    }, function (n) {
        return n.getSeconds();
    }), nc.seconds = nc.second.range, nc.seconds.utc = nc.second.utc.range, nc.minute = Pt(function (n) {
        return new tc(60000 * Math.floor(n / 60000));
    }, function (n, t) {
        n.setTime(n.getTime() + 60000 * Math.floor(t));
    }, function (n) {
        return n.getMinutes();
    }), nc.minutes = nc.minute.range, nc.minutes.utc = nc.minute.utc.range, nc.hour = Pt(function (n) {
        var t = n.getTimezoneOffset() / 60;
        return new tc(3600000 * (Math.floor(n / 3600000 - t) + t));
    }, function (n, t) {
        n.setTime(n.getTime() + 3600000 * Math.floor(t));
    }, function (n) {
        return n.getHours();
    }), nc.hours = nc.hour.range, nc.hours.utc = nc.hour.utc.range, nc.month = Pt(function (n) {
        return n = nc.day(n), n.setDate(1), n;
    }, function (n, t) {
        n.setMonth(n.getMonth() + t);
    }, function (n) {
        return n.getMonth();
    }), nc.months = nc.month.range, nc.months.utc = nc.month.utc.range;
    var jl = [
            1000,
            5000,
            15000,
            30000,
            60000,
            300000,
            900000,
            1800000,
            3600000,
            10800000,
            21600000,
            43200000,
            86400000,
            172800000,
            604800000,
            2592000000,
            7776000000,
            31536000000
        ], Hl = [
            [
                nc.second,
                1
            ],
            [
                nc.second,
                5
            ],
            [
                nc.second,
                15
            ],
            [
                nc.second,
                30
            ],
            [
                nc.minute,
                1
            ],
            [
                nc.minute,
                5
            ],
            [
                nc.minute,
                15
            ],
            [
                nc.minute,
                30
            ],
            [
                nc.hour,
                1
            ],
            [
                nc.hour,
                3
            ],
            [
                nc.hour,
                6
            ],
            [
                nc.hour,
                12
            ],
            [
                nc.day,
                1
            ],
            [
                nc.day,
                2
            ],
            [
                nc.week,
                1
            ],
            [
                nc.month,
                1
            ],
            [
                nc.month,
                3
            ],
            [
                nc.year,
                1
            ]
        ], Fl = Dl.multi([
            [
                '.%L',
                function (n) {
                    return n.getMilliseconds();
                }
            ],
            [
                ':%S',
                function (n) {
                    return n.getSeconds();
                }
            ],
            [
                '%I:%M',
                function (n) {
                    return n.getMinutes();
                }
            ],
            [
                '%I %p',
                function (n) {
                    return n.getHours();
                }
            ],
            [
                '%a %d',
                function (n) {
                    return n.getDay() && 1 != n.getDate();
                }
            ],
            [
                '%b %d',
                function (n) {
                    return 1 != n.getDate();
                }
            ],
            [
                '%B',
                function (n) {
                    return n.getMonth();
                }
            ],
            [
                '%Y',
                Se
            ]
        ]), Ol = {
            range: function (n, t, e) {
                return Vo.range(Math.ceil(n / e) * e, +t, e).map(Yo);
            },
            floor: wt,
            ceil: wt
        };
    Hl.year = nc.year, nc.scale = function () {
        return Oo(Vo.scale.linear(), Hl, Fl);
    };
    var Yl = Hl.map(function (n) {
            return [
                n[0].utc,
                n[1]
            ];
        }), Il = Pl.multi([
            [
                '.%L',
                function (n) {
                    return n.getUTCMilliseconds();
                }
            ],
            [
                ':%S',
                function (n) {
                    return n.getUTCSeconds();
                }
            ],
            [
                '%I:%M',
                function (n) {
                    return n.getUTCMinutes();
                }
            ],
            [
                '%I %p',
                function (n) {
                    return n.getUTCHours();
                }
            ],
            [
                '%a %d',
                function (n) {
                    return n.getUTCDay() && 1 != n.getUTCDate();
                }
            ],
            [
                '%b %d',
                function (n) {
                    return 1 != n.getUTCDate();
                }
            ],
            [
                '%B',
                function (n) {
                    return n.getUTCMonth();
                }
            ],
            [
                '%Y',
                Se
            ]
        ]);
    Yl.year = nc.year.utc, nc.scale.utc = function () {
        return Oo(Vo.scale.linear(), Yl, Il);
    }, Vo.text = St(function (n) {
        return n.responseText;
    }), Vo.json = function (n, t) {
        return kt(n, 'application/json', Io, t);
    }, Vo.html = function (n, t) {
        return kt(n, 'text/html', Zo, t);
    }, Vo.xml = St(function (n) {
        return n.responseXML;
    }), 'function' == typeof define && define.amd ? define('vendor/d3/d3.min', [], Vo) : 'object' == typeof module && module.exports && (module.exports = Vo), this.d3 = Vo;
}();
define('app/utils', [], function () {
    return {
        formatSize: function (size) {
            size = size / 1024;
            return size > 3 ? size : 3;
        },
        getContentType: function (mimeType) {
            switch (mimeType) {
            case 'text/html':
                return 'document';
            case 'text/css':
                return 'stylesheet';
            case 'application/x-javascript':
                return 'script';
            case 'text/javascript':
                return 'script';
            case 'application/javascript':
                return 'script';
            case 'image/png':
                return 'image';
            case 'image/gif':
                return 'image';
            case 'image/jpeg':
                return 'image';
            case 'application/x-font-woff':
                return 'fonts';
            case 'application/octet-stream':
                return 'fonts';
            default:
                return 'other';
            }
        },
        parseUrl: function (url) {
            var isValid = false, url = url, scheme = '', host = '', port = '', path = '', queryParams = '', fragment = '', folderPathComponents = '', lastPathComponent = '', result;
            var match = url.match(/^([^:]+):\/\/([^\/:]*)(?::([\d]+))?(?:(\/[^#]*)(?:#(.*))?)?$/i);
            if (match) {
                isValid = true;
                scheme = match[1].toLowerCase();
                host = match[2];
                port = match[3];
                path = match[4] || '/';
                fragment = match[5];
            } else {
                if (url.startsWith('data:')) {
                    scheme = 'data';
                    return;
                }
                if (url === 'about:blank') {
                    scheme = 'about';
                    return;
                }
                path = url;
            }
            if (path) {
                var path = path;
                var indexOfQuery = path.indexOf('?');
                if (indexOfQuery !== -1) {
                    queryParams = path.substring(indexOfQuery + 1);
                    path = path.substring(0, indexOfQuery);
                }
                var lastSlashIndex = path.lastIndexOf('/');
                if (lastSlashIndex !== -1) {
                    folderPathComponents = path.substring(0, lastSlashIndex);
                    lastPathComponent = path.substring(lastSlashIndex + 1);
                } else {
                    lastPathComponent = path;
                }
            }
            if (lastPathComponent) {
                result = lastPathComponent;
            } else {
                if (url.indexOf('?') !== -1) {
                    result = '?' + queryParams;
                } else {
                    result = host;
                }
            }
            return {
                name: result.length > 30 ? result.substr(0, 29) + '...' : result,
                host: host
            };
        }
    };
});
define('app/legend', [], function () {
    var mainLegend = function () {
        var mainLegend = document.querySelector('.w-graph__main-legend'), width;
        var onScroll = function () {
            var winWidth = window.innerWidth, scrollPos = window.pageXOffset, pos = scrollPos + winWidth / 2 - mainLegend.clientWidth / 2;
            mainLegend.style.left = pos + 'px';
        };
        window.onscroll = onScroll;
        onScroll();
        mainLegend.classList.add('-visible');
    };
    return { mainLegend: mainLegend };
});
define('waterfall-graph', [
    'vendor/d3/d3.min',
    'app/utils',
    'app/legend'
], function (d3, utils, legend) {
    var paddings = {
            top: 100,
            bottom: 68,
            left: 18 + 350,
            right: 38
        }, vStep = 3, mainGraphCont, mainLegend, timingsLegend, svg, width, height, xScale, yScale, detailView, pageStartTime, pageEndTime, entries, mainHost, onLoad, onContentLoad, state = {}, _prev = null, _prevThis = null;
    var prepEntriesData = function (entr, pageStartTime) {
        var totalSize = 0;
        return entr.map(function (item) {
            var startTime = new Date(item.startedDateTime).getTime(), yPos = totalSize, parsedUrl = item.request.url.match(/^data/) ? {
                    name: item.request.url.split('/')[0],
                    host: 'data-uri'
                } : utils.parseUrl(item.request.url);
            totalSize += utils.formatSize(item.response.content.size) + vStep;
            return {
                time: item.time,
                method: item.request.method,
                name: parsedUrl.name,
                host: parsedUrl.host,
                url: item.request.url,
                mimeType: item.response.content.mimeType,
                type: utils.getContentType(item.response.content.mimeType),
                contentSize: item.response.content.size,
                respHeaderSize: item.response.headersSize,
                respBodySize: item.response.bodySize,
                cache: item.cache,
                size: item.response.headersSize + item.response.bodySize,
                yPos: yPos,
                timings: {
                    startTime: startTime,
                    startTimeRelated: startTime - pageStartTime,
                    endTime: startTime + item.time,
                    endTimeRelated: startTime + item.time - pageStartTime,
                    blocked: item.timings.blocked > 0 ? item.timings.blocked : 0,
                    dns: item.timings.dns > 0 ? item.timings.dns : 0,
                    connect: item.timings.connect > 0 ? item.timings.connect : 0,
                    send: item.timings.send > 0 ? item.timings.send : 0,
                    wait: item.timings.wait > 0 ? item.timings.wait : 0,
                    receive: item.timings.receive > 0 ? item.timings.receive : 0,
                    ssl: item.timings.ssl > 0 ? item.timings.ssl : 0
                }
            };
        });
    };
    var getGraphHeight = function (entr, paddings) {
        return Math.ceil(entr.reduce(function (sum, item) {
            if (sum.toString() !== '[object Object]') {
                return sum + utils.formatSize(item.contentSize) + vStep;
            }
            return utils.formatSize(sum.contentSize) + utils.formatSize(item.contentSize) + vStep;
        }));
    };
    var getPageEndTime = function (onLoad, entries, pageStartTime) {
        var lastEntry;
        for (var i = 0; i < entries.length; i++) {
            if (!lastEntry || entries[i].timings.endTime > lastEntry.timings.endTime) {
                lastEntry = entries[i];
            }
        }
        return Math.ceil(lastEntry.timings.endTime - pageStartTime) + 200;
    };
    var _cleanUp = function (el, d) {
        d3.select(el.parentNode).classed('-hover', false);
        d3.select(el.parentNode).classed('-click', false);
        mainGraphCont.classed('-hover', false);
        mainGraphCont.classed('-click', false);
        mainLegend.classed('-hover', false).classed('-click', false).classed('-' + d.type, false);
        timingsLegend.classed('-hover', false);
        timingsLegend.classed('-click', false);
        for (var timing in d.timings) {
            if (d.timings.hasOwnProperty(timing)) {
                d.timings[timing] && timingsLegend.classed('-' + timing, false);
            }
        }
        detailView.cleanUp();
    };
    var drawXAxis = function () {
        var cont, step = 100;
        return function (svg, width, height, paddings) {
            if (!svg.select('.w-graph__x-axis') || !cont)
                cont = svg.append('g').attr('class', 'w-graph__x-axis');
            cont.selectAll('.w-graph__x-axis-tick').remove();
            var count = new Array(Math.floor(width / step)), groups = cont.selectAll('.w-graph__x-axis-tick').data(count);
            cont.selectAll('.w-graph__x-axis-tick').remove();
            cont.selectAll('.w-graph__x-axis-text').remove();
            var groupsEnter = groups.enter().append('g');
            groups.append('line').attr('x1', function (d, i) {
                return i * step + 0.5;
            }).attr('x2', function (d, i) {
                return i * step + 0.5;
            }).attr('y1', 0 - paddings.top + 40).attr('y2', height + paddings.bottom).attr('class', function (d, i) {
                if (i * step === 1000)
                    return 'w-graph__x-axis-tick -thousand';
                return 'w-graph__x-axis-tick';
            });
            groups.append('text').text(function (d, i) {
                return i * step + ' ms';
            }).attr('x', function (d, i) {
                return i * step + 6;
            }).attr('y', 50 - paddings.top).attr('text-anchor', 'right').attr('class', function (d, i) {
                if (i * step === 1000)
                    return 'w-graph__x-axis-text -thousand';
                return 'w-graph__x-axis-text';
            });
        };
    }();
    var drawDOMEvents = function () {
        var cont;
        return function (svg, onLoad, onContentLoad, paddings) {
            if (!svg.select('.w-graph__dom-events')[0][0])
                cont = svg.append('g').attr('class', 'w-graph__dom-events');
            if (!state.onLoadDrawn) {
                if (onLoad) {
                    cont.append('line').attr('x1', xScale(onLoad)).attr('x2', xScale(onLoad)).attr('y1', 0 - paddings.top + 10).attr('y2', height + paddings.bottom).attr('class', 'w-graph__dom-event -onload');
                    cont.append('text').text('Load event (' + Math.floor(onLoad) + ' ms)').attr('x', xScale(onLoad) + 6).attr('y', 20 - paddings.top).attr('text-anchor', 'right').attr('class', 'w-graph__dom-text -onload');
                    state.onLoadDrawn = true;
                }
            } else {
                cont.select('.w-graph__dom-event.-onload').transition().duration(200).attr('y2', height + paddings.bottom);
            }
            if (!state.onContentLoadDrawn) {
                if (onContentLoad) {
                    cont.append('line').attr('x1', xScale(onContentLoad)).attr('x2', xScale(onContentLoad)).attr('y1', 0 - paddings.top + 10).attr('y2', height + paddings.bottom).attr('class', 'w-graph__dom-event -oncontentload');
                    cont.append('text').text('DOMContentLoaded event (' + Math.floor(onContentLoad) + ' ms)').attr('x', xScale(onContentLoad) + 6).attr('y', 20 - paddings.top).attr('text-anchor', 'right').attr('class', 'w-graph__dom-text -oncontentload');
                    state.onContentLoadDrawn = true;
                }
            } else {
                cont.select('.w-graph__dom-event.-oncontentload').transition().duration(200).attr('y2', height + paddings.bottom);
            }
        };
    }();
    var drawEntries = function () {
        var cont;
        return function (svg, data, entries) {
            if (!svg.select('.w-graph__entries')[0][0])
                cont = svg.append('g').attr('class', 'w-graph__entries');
            var group = cont.selectAll('.w-graph__entry').data(entries, function (d) {
                return d.url + pageStartTime + data.pages[0].title + data.pages[0].id;
            });
            groupEnter = group.enter().append('g').attr('class', function (d) {
                return 'w-graph__entry -' + d.type;
            });
            var _hover = function (el, d, cls) {
                d3.select(el.parentNode).classed(cls, true);
                mainGraphCont.classed(cls, true);
                mainLegend.classed(cls, true).classed('-' + d.type, true);
                timingsLegend.classed(cls, true);
                for (var timing in d.timings) {
                    if (d.timings.hasOwnProperty(timing)) {
                        d.timings[timing] && timingsLegend.classed('-' + timing, true);
                    }
                }
            };
            var hoverGroup = groupEnter.append('g').attr('class', 'w-graph__entry-hover-trigger').on('click', function (d) {
                if (_prev !== d) {
                    _prev && _cleanUp(_prevThis, _prev);
                    _prev = d;
                    _prevThis = this;
                    detailView.render(d);
                    _hover(this, d, '-click');
                } else {
                    _prev = null;
                    _cleanUp(this, d);
                }
            }).on('mouseover', function (d) {
                if (mainLegend.classed('-click'))
                    return;
                _hover(this, d, '-hover');
            }).on('mouseout', function (d) {
                if (mainLegend.classed('-click'))
                    return;
                _cleanUp(this, d);
            });
            hoverGroup.append('rect').attr('class', 'w-graph__entry-main').attr('x', function (d) {
                return xScale(d.timings.startTimeRelated);
            }).attr('y', function (d) {
                return yScale(d.yPos);
            }).attr('height', function (d) {
                return utils.formatSize(d.contentSize);
            }).attr('width', function (d) {
                return d.time || 2;
            });
            var subGroup = hoverGroup.append('g').attr('class', 'w-graph__entry-sub');
            var drawTimingPart = function (grp, prop, timingPropsToAdd) {
                subGroup.append('rect').attr('class', '-' + prop).attr('x', function (d) {
                    if (!timingPropsToAdd) {
                        return d.timings.startTimeRelated;
                    }
                    ;
                    var x = d.timings.startTimeRelated;
                    for (var i = 0, max = timingPropsToAdd.length; i < max; i++) {
                        x += d.timings[timingPropsToAdd[i]];
                    }
                    return x;
                }).attr('y', function (d) {
                    return xScale(d.yPos);
                }).attr('width', function (d) {
                    return d.timings[prop];
                }).attr('height', function (d) {
                    return utils.formatSize(d.contentSize);
                });
            };
            subGroup.append('rect').attr('class', 'w-graph__entry-sub').attr('x', function (d) {
                return xScale(d.timings.startTimeRelated);
            }).attr('y', function (d) {
                return yScale(d.yPos);
            }).attr('height', function (d) {
                return utils.formatSize(d.contentSize);
            }).attr('width', function (d) {
                return d.time || 2;
            }).attr('fill', 'rgba(255,255,255,.1)');
            drawTimingPart(subGroup, 'blocked');
            drawTimingPart(subGroup, 'dns', ['blocked']);
            drawTimingPart(subGroup, 'connect', [
                'blocked',
                'dns'
            ]);
            drawTimingPart(subGroup, 'send', [
                'blocked',
                'dns',
                'connect'
            ]);
            drawTimingPart(subGroup, 'wait', [
                'blocked',
                'dns',
                'connect',
                'send'
            ]);
            drawTimingPart(subGroup, 'receive', [
                'blocked',
                'dns',
                'connect',
                'send',
                'wait'
            ]);
            var entryInfoGroup = groupEnter.append('g').attr('class', 'w-graph__entry-sub-info');
            entryInfoGroup.append('line').attr('x1', function (d) {
                return xScale(d.timings.endTimeRelated) + 8;
            }).attr('x2', function (d) {
                return xScale(d.timings.endTimeRelated) + 8;
            }).attr('y1', function (d) {
                return yScale(d.yPos);
            }).attr('y2', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize));
            }).attr('class', 'w-graph__entry-sub-info__line');
            entryInfoGroup.append('line').attr('x1', function (d) {
                return xScale(d.timings.endTimeRelated) + 8;
            }).attr('x2', function (d) {
                return xScale(d.timings.endTimeRelated) + 30;
            }).attr('y1', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2);
            }).attr('y2', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2);
            }).attr('class', 'w-graph__entry-sub-info__line');
            entryInfoGroup.append('line').attr('x1', function (d) {
                return xScale(d.timings.endTimeRelated) + 30;
            }).attr('x2', function (d) {
                return xScale(d.timings.endTimeRelated) + 30;
            }).attr('y1', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) - 53;
            }).attr('y2', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) + 53;
            }).attr('class', 'w-graph__entry-sub-info__line');
            var textX = function (d) {
                return xScale(d.timings.endTimeRelated) + 38;
            };
            entryInfoGroup.append('text').text(function (d) {
                return 'Name: ' + d.name;
            }).attr('x', textX).attr('y', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) - 43;
            }).attr('class', 'w-graph__entry-sub-info__text -name');
            entryInfoGroup.append('text').text(function (d) {
                return 'Host: ' + d.host;
            }).attr('x', textX).attr('y', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) - 24;
            }).attr('class', function (d) {
                return 'w-graph__entry-sub-info__text -host ' + (d.host === mainHost ? '' : '-diff');
            });
            entryInfoGroup.append('text').text(function (d) {
                return 'Content-Type: ' + d.mimeType;
            }).attr('x', textX).attr('y', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) - 5;
            }).attr('class', function (d) {
                return 'w-graph__entry-sub-info__text -' + d.type;
            });
            entryInfoGroup.append('text').text(function (d) {
                return 'Size: ' + Math.round(d.size / 1024 * 100) / 100 + ' KB';
            }).attr('x', textX).attr('y', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) + 14;
            }).attr('class', 'w-graph__entry-sub-info__text');
            entryInfoGroup.append('text').text(function (d) {
                return 'Content Size: ' + Math.round(d.contentSize / 1024 * 100) / 100 + ' KB';
            }).attr('x', textX).attr('y', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) + 33;
            }).attr('class', 'w-graph__entry-sub-info__text');
            entryInfoGroup.append('text').text(function (d) {
                return 'Total Time: ' + Math.round(d.time * 100) / 100 + ' ms';
            }).attr('x', textX).attr('y', function (d) {
                return yScale(d.yPos + utils.formatSize(d.contentSize) / 2) + 52;
            }).attr('class', 'w-graph__entry-sub-info__text -total');
        };
    }();
    var drawTotalResources = function () {
        var cont;
        return function (svg, data) {
            if (!svg.select('.w-graph__total')[0][0])
                cont = svg.append('g').attr('class', 'w-graph__total');
            cont.selectAll('*').remove();
            cont.append('text').text(function (d) {
                return 'Total Resources: ' + data.entries.length;
            }).attr('x', 0).attr('y', 30 - paddings.top);
        };
    }();
    var _clean = function () {
        _prevThis && _prev && _cleanUp(_prevThis, _prev);
        onLoad = null;
        onContentLoad = null;
        state = {};
        svg.select('.w-graph__entries').remove();
        svg.select('.w-graph__dom-events').remove();
    };
    return {
        render: function (data, dv) {
            detailView = dv;
            if (data.entries.length > 0 && data.pages.length > 0) {
                mainGraphCont && _clean();
                document.querySelector('.w-no-data').classList.add('-hidden');
                pageStartTime = new Date(data.pages[0].startedDateTime).getTime();
                entries = prepEntriesData(data.entries, pageStartTime);
                onLoad = data.pages[0].pageTimings.onLoad;
                onContentLoad = data.pages[0].pageTimings.onContentLoad;
                pageEndTime = getPageEndTime(onLoad, entries, pageStartTime);
                width = Math.ceil(pageEndTime) || 400;
                height = getGraphHeight(entries) || 400;
                mainHost = entries[0].host;
                !mainGraphCont && (mainGraphCont = d3.select('.w-graph'));
                !mainLegend && (mainLegend = d3.select('.w-graph__main-legend'));
                !timingsLegend && (timingsLegend = d3.select('.w-graph__timings-legend'));
                if (!svg) {
                    svg = mainGraphCont.attr('width', width + paddings.left + paddings.right).attr('height', height + paddings.top + paddings.bottom).append('g').attr('transform', 'translate(' + paddings.left + ',' + paddings.top + ')');
                } else {
                    mainGraphCont.attr('width', width + paddings.left + paddings.right).attr('height', height + paddings.top + paddings.bottom);
                }
                xScale = d3.scale.linear().domain([
                    0,
                    width
                ]).range([
                    0,
                    width
                ]);
                yScale = d3.scale.linear().domain([
                    0,
                    height
                ]).range([
                    0,
                    height
                ]);
                drawXAxis(svg, width, height, paddings);
                drawDOMEvents(svg, onLoad, onContentLoad, paddings);
                drawEntries(svg, data, entries);
                drawTotalResources(svg, data);
                legend.mainLegend();
            }
        }
    };
});
define('detail-graph', ['vendor/d3/d3.min'], function (d3) {
    var mainGraphCont, svg, paddings = {
            top: 0,
            right: 120,
            bottom: 0,
            left: 60
        }, width = 340, height = 0, xScale, yScale, vStep = 31, timings = [], max = 0, detailCont = d3.select('.w-detail'), waterfallCont = d3.select('.w-graph__cont');
    title = detailCont.select('.w-detail__title'), host = detailCont.select('.w-detail__host'), mimeType = detailCont.select('.w-detail__mime-type'), callback = false;
    var prepareTimings = function (data) {
        var propList = [
                'blocked',
                'dns',
                'connect',
                'ssl',
                'send',
                'wait',
                'receive'
            ], result = [], totalTime = 0;
        for (var i = 0; i < propList.length; i++) {
            if (data.timings[propList[i]]) {
                data.timings[propList[i]] > max && (max = data.timings[propList[i]]);
                if (propList[i] === 'ssl') {
                    result.push({
                        title: propList[i],
                        val: data.timings[propList[i]],
                        xPos: totalTime - data.timings[propList[i]],
                        ms: Math.ceil(data.timings[propList[i]] * 100) / 100 + ' ms',
                        percent: Math.ceil(data.timings[propList[i]] * 100 / data.time * 100) / 100 + '%'
                    });
                } else {
                    result.push({
                        title: propList[i],
                        val: data.timings[propList[i]],
                        xPos: totalTime,
                        ms: Math.ceil(data.timings[propList[i]] * 100) / 100 + ' ms',
                        percent: Math.ceil(data.timings[propList[i]] * 100 / data.time * 100) / 100 + '%'
                    });
                    totalTime += data.timings[propList[i]];
                }
            }
        }
        return result;
    };
    var prepareMainGraph = function (data) {
        width = width - paddings.left - paddings.right;
        height = timings.length * vStep - paddings.top - paddings.bottom;
        mainGraphCont = d3.select('.w-detail-graph');
        svg = mainGraphCont.attr('width', width + paddings.left + paddings.right).attr('height', height + paddings.top + paddings.bottom + 50).append('g').attr('transform', 'translate(' + paddings.left + ',' + paddings.top + ')');
        xScale = d3.scale.linear().domain([
            0,
            data.time
        ]).range([
            1,
            width
        ]);
        yScale = d3.scale.linear().domain([
            0,
            height / vStep
        ]).range([
            0,
            height
        ]);
    };
    var drawTimings = function () {
        var cont;
        return function (svg, timings) {
            if (!!svg.select('.w-detail__timings')[0])
                cont = svg.append('g').attr('class', 'w-detail__timings');
            var group = cont.selectAll('.w-detail__timing').data(timings);
            group.exit().select('.w-detail__timing-entry').transition().duration(300).attr('width', 0);
            group.exit().transition().duration(300).remove();
            groupEnter = group.enter().append('g').attr('class', function (d) {
                return 'w-detail__timing -' + d.title;
            });
            groupEnter.append('rect').attr('class', function (d) {
                return 'w-detail__timing-entry -' + d.title;
            }).attr('x', function (d) {
                return xScale(d.xPos);
            }).attr('y', function (d, i) {
                return yScale(i);
            }).attr('width', 0).attr('height', function () {
                return vStep;
            }).transition().duration(400).attr('width', function (d) {
                return xScale(d.val);
            });
            groupEnter.append('text').attr('class', function (d) {
                return 'w-detail__timing-title -' + d.title;
            }).text(function (d) {
                return d.title;
            }).attr('x', function (d) {
                return xScale(d.xPos) - 10;
            }).attr('y', function (d, i) {
                return yScale(i) + vStep / 2 + 5;
            }).attr('text-anchor', 'end');
            groupEnter.append('text').attr('class', function (d) {
                return 'w-detail__timing-info' + (d.val === max ? ' -max' : '');
            }).text(function (d) {
                return d.ms;
            }).attr('x', function (d) {
                return xScale(d.xPos + d.val) + 10;
            }).attr('y', function (d, i) {
                return yScale(i) + 21;
            }).attr('text-anchor', 'start');
            groupEnter.append('text').attr('class', 'w-detail__timing-info -percent').text(function (d) {
                return d.percent;
            }).attr('x', function (d) {
                return xScale(d.xPos + d.val) + 10;
            }).attr('y', function (d, i) {
                return yScale(i) + 21;
            }).attr('text-anchor', 'start');
        };
    }();
    var drawTotalTime = function () {
        var cont;
        return function (svg, data) {
            if (!!svg.select('.w-detail__total-time')[0])
                cont = svg.append('g').attr('class', 'w-detail__total-time');
            cont.append('line').attr('class', 'w-detail__total-time__line').attr('x1', 0).attr('x2', xScale(data.time)).attr('y1', height + 18.5).attr('y2', height + 18.5);
            cont.append('text').attr('class', 'w-detail__total-time__text').text('Total Time: ' + Math.ceil(data.time * 100) / 100 + ' ms').attr('x', xScale(data.time) / 2).attr('y', height + 38).attr('text-anchor', 'middle');
        };
    }();
    var drawSizes = function () {
        var cont;
        return function (svg, data) {
            if (!!svg.select('.w-detail__sizes')[0])
                cont = svg.append('g').attr('class', 'w-detail__sizes');
            cont.append('text').attr('class', 'w-detail__size -size').text('Size: ' + Math.ceil(data.size / 1024 * 100) / 100 + ' KB').attr('x', xScale(data.time) + paddings.right).attr('y', 18).attr('text-anchor', 'end');
            cont.append('text').attr('class', 'w-detail__size -content-size').text('Content: ' + Math.ceil(data.contentSize / 1024 * 100) / 100 + ' KB').attr('x', xScale(data.time) + paddings.right).attr('y', 38).attr('text-anchor', 'end');
        };
    }();
    var open = function () {
        waterfallCont.classed('-blur', true);
        detailCont.classed('-open', true);
    };
    var close = function () {
        waterfallCont.classed('-blur', false);
        callback && callback();
    };
    var cleanUp = function () {
        svg && svg.selectAll('*').remove();
        detailCont.classed('-open', false);
    };
    var resize = function (data) {
        height = timings.length * vStep - paddings.top - paddings.bottom;
        mainGraphCont.attr('height', height + paddings.top + paddings.bottom + 50);
        xScale.domain([
            0,
            data.time
        ]).range([
            1,
            width
        ]);
        yScale.domain([
            0,
            height / vStep
        ]).range([
            0,
            height
        ]);
    };
    var setStaticData = function (data) {
        title.text(data.name).attr('href', data.url);
        host.text(data.host);
        mimeType.text(data.mimeType).attr('class', 'w-detail__mime-type -' + data.type);
    };
    detailCont.on('click', function () {
        close();
    });
    return {
        render: function (data, cb) {
            max = 0;
            timings = prepareTimings(data);
            callback = cb;
            if (!mainGraphCont) {
                prepareMainGraph(data);
            } else {
                resize(data);
            }
            cleanUp();
            setStaticData(data);
            open();
            if (data.time > 0) {
                drawTimings(svg, timings);
                drawTotalTime(svg, data);
                drawSizes(svg, data);
            }
        },
        cleanUp: cleanUp
    };
});
define('main', [
    'waterfall-graph',
    'detail-graph'
], function (waterfall, detail) {
    function debounce(a, b, c) {
        var d;
        return function () {
            var e = this, f = arguments;
            clearTimeout(d), d = setTimeout(function () {
                d = null, c || a.apply(e, f);
            }, b), c && !d && a.apply(e, f);
        };
    }
    var getHAR = function () {
        var harPromise = D();
        chrome.devtools.network.getHAR(function (har) {
            harPromise.resolve(har);
        });
        return harPromise.promise;
    };
    var processData = function (har) {
        waterfall.render(har, detail);
    };
    chrome.devtools.network.onRequestFinished.addListener(debounce(function (req) {
        getHAR().then(processData);
    }, 300));
    getHAR().then(processData);
});