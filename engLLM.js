!function(t, e) {
    if ("object" == typeof exports && "undefined" != typeof module) {
        module.exports = e();
    } else if ("function" == typeof define && define.amd) {
        define(e);
    } else {
        (t = "undefined" != typeof globalThis ? globalThis : t || self).MiniSearch = e();
    }
}(this, (function() {
    "use strict";

    function t(t, e, s, i) {
        return new (s || (s = Promise))((function(n, o) {
            function r(t) {
                try {
                    u(i.next(t));
                } catch (t) {
                    o(t);
                }
            }
            function c(t) {
                try {
                    u(i.throw(t));
                } catch (t) {
                    o(t);
                }
            }
            function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) { t(e); }))).then(r, c);
            }
            u((i = i.apply(t, e || [])).next());
        }));
    }

    // SuppressedError is an empty placeholder
    "function" == typeof SuppressedError && SuppressedError;

    const e = "KEYS", s = "VALUES", i = "";

    class n {
        constructor(t, e) {
            const s = t._tree;
            const i = Array.from(s.keys());
            this.set = t;
            this._type = e;
            this._path = i.length > 0 ? [{ node: s, keys: i }] : [];
        }

        next() {
            const t = this.dive();
            this.backtrack();
            return t;
        }

        dive() {
            if (0 === this._path.length) return { done: true, value: undefined };
            const { node: t, keys: e } = o(this._path);
            if (o(e) === i) return { done: false, value: this.result() };
            const s = t.get(o(e));
            this._path.push({ node: s, keys: Array.from(s.keys()) });
            return this.dive();
        }

        backtrack() {
            if (0 === this._path.length) return;
            const t = o(this._path).keys;
            t.pop();
            if (t.length > 0) {
                this._path.pop();
                this.backtrack();
            }
        }

        key() {
            return this.set._prefix + this._path.map(({ keys: t }) => o(t)).filter((t) => t !== i).join("");
        }

        value() {
            return o(this._path).node.get(i);
        }

        result() {
            switch (this._type) {
                case s:
                    return this.value();
                case e:
                    return this.key();
                default:
                    return [this.key(), this.value()];
            }
        }

        [Symbol.iterator]() {
            return this;
        }
    }

    const o = (t) => t[t.length - 1];

    const r = (t, e, s, n, o, c, u, h) => {
        const d = c * u;
        t: for (const a of t.keys()) {
            if (a === i) {
                const e = o[d - 1];
                e <= s && n.set(h, [t.get(a), e]);
            } else {
                let i = c;
                for (let t = 0; t < a.length; ++t, ++i) {
                    const n = a[t], r = u * i, c = r - u;
                    let h = o[r];
                    const d = Math.max(0, i - s - 1), l = Math.min(u - 1, i + s);
                    for (let t = d; t < l; ++t) {
                        const s = n !== e[t], i = o[c + t] + +s, u = o[c + t + 1] + 1, d = o[r + t] + 1;
                        const a = o[r + t + 1] = Math.min(i, u, d);
                        if (a < h) h = a;
                    }
                    if (h > s) continue t;
                    r(t.get(a), e, s, n, o, i, u, h + a);
                }
            }
        }
    };

    class c {
        constructor(t = new Map(), e = "") {
            this._size = undefined;
            this._tree = t;
            this._prefix = e;
        }

        atPrefix(t) {
            if (!t.startsWith(this._prefix)) throw new Error("Mismatched prefix");
            const [e, s] = u(this._tree, t.slice(this._prefix.length));
            if (e === undefined) {
                const [e, n] = m(s);
                for (const s of e.keys()) {
                    if (s !== i && s.startsWith(n)) {
                        const i = new Map();
                        i.set(s.slice(n.length), e.get(s));
                        return new c(i, t);
                    }
                }
            }
            return new c(e, t);
        }

        clear() {
            this._size = undefined;
            this._tree.clear();
        }

        delete(t) {
            this._size = undefined;
            return a(this._tree, t);
        }

        entries() {
            return new n(this, "ENTRIES");
        }

        forEach(t) {
            for (const [e, s] of this) t(e, s, this);
        }

        fuzzyGet(t, e) {
            return ((t, e, s) => {
                const i = new Map();
                if (e === undefined) return i;
                const n = e.length + 1, o = n + s, c = new Uint8Array(o * n).fill(s + 1);
                for (let t = 0; t < n; ++t) c[t] = t;
                for (let t = 1; t < o; ++t) c[t * n] = t;
                return r(t, e, s, i, c, 1, n, "");
            })(this._tree, t, e);
        }

        get(t) {
            const e = h(this._tree, t);
            return e === undefined ? undefined : e.get(i);
        }

        has(t) {
            const e = h(this._tree, t);
            return e !== undefined && e.has(i);
        }

        keys() {
            return new n(this, e);
        }

        set(t, e) {
            if (typeof t !== "string") throw new Error("key must be a string");
            this._size = undefined;
            d(this._tree, t).set(i, e);
            return this;
        }

        get size() {
            if (this._size) return this._size;
            this._size = 0;
            const t = this.entries();
            while (!t.next().done) this._size += 1;
            return this._size;
        }

        update(t, e) {
            if (typeof t !== "string") throw new Error("key must be a string");
            this._size = undefined;
            const s = d(this._tree, t);
            s.set(i, e(s.get(i)));
            return this;
        }

        fetch(t, e) {
            if (typeof t !== "string") throw new Error("key must be a string");
            this._size = undefined;
            const s = d(this._tree, t);
            let n = s.get(i);
            if (n === undefined) {
                s.set(i, n = e());
            }
            return n;
        }

        values() {
            return new n(this, s);
        }

        [Symbol.iterator]() {
            return this.entries();
        }

        static from(t) {
            const e = new c();
            for (const [s, i] of t) e.set(s, i);
            return e;
        }

        static fromObject(t) {
            return c.from(Object.entries(t));
        }
    }

    const u = (t, e, s = []) => {
        if (e.length === 0 || t === null) return [t, s];
        for (const n of t.keys()) {
            if (n !== i && e.startsWith(n)) {
                s.push([t, n]);
                return u(t.get(n), e.slice(n.length), s);
            }
        }
        s.push([t, e]);
        return [undefined, s];
    };

    const h = (t, e) => {
        if (e.length === 0 || t === null) return t;
        for (const s of t.keys()) {
            if (s !== i && e.startsWith(s)) {
                return h(t.get(s), e.slice(s.length));
            }
        }
    };

    const d = (t, e) => {
        const s = e.length;
        for (let n = 0; t && n < s;) {
            for (const o of t.keys()) {
                if (o !== i && e[n] === o[0]) {
                    const i = Math.min(s - n, o.length);
                    let r = 1;
                    while (r < i && e[n + r] === o[r]) ++r;
                    const c = t.get(o);
                    if (r === o.length) {
                        t = c;
                    } else {
                        return new Map();
                    }
                }
            }
        }
        return t;
    };

    const m = (t) => {
        const e = [], s = {};
        t.forEach((t) => {
            if (!t.has(i)) return;
            e.push([t.get(i), t.get(i)]);
        });
        return [e, s];
    };

    return c;
}));
