/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qe(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const Q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Gt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], le = () => {
}, ml = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hn = (e) => e.startsWith("onUpdate:"), oe = Object.assign, os = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gl = Object.prototype.hasOwnProperty, H = (e, t) => gl.call(e, t), C = Array.isArray, St = (e) => to(e) === "[object Map]", Ar = (e) => to(e) === "[object Set]", I = (e) => typeof e == "function", se = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", ss = (e) => (Y(e) || I(e)) && I(e.then) && I(e.catch), $r = Object.prototype.toString, to = (e) => $r.call(e), rs = (e) => to(e).slice(8, -1), Cr = (e) => to(e) === "[object Object]", is = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ Qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vl = /* @__PURE__ */ Qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), no = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, yl = /-(\w)/g, He = no((e) => e.replace(yl, (t, n) => n ? n.toUpperCase() : "")), El = /\B([A-Z])/g, _t = no(
  (e) => e.replace(El, "-$1").toLowerCase()
), Tt = no((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nt = no((e) => e ? `on${Tt(e)}` : ""), mt = (e, t) => !Object.is(e, t), Ut = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Un = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, To = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xs;
const ls = () => xs || (xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function cs(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = se(o) ? wl(o) : cs(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (se(e) || Y(e))
    return e;
}
const bl = /;(?![^(]*\))/g, Nl = /:([^]+)/, Ol = /\/\*[^]*?\*\//g;
function wl(e) {
  const t = {};
  return e.replace(Ol, "").split(bl).forEach((n) => {
    if (n) {
      const o = n.split(Nl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function zt(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = zt(e[n]);
      o && (t += o + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Dl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Sl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Vl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Pl = /* @__PURE__ */ Qe(Dl), Al = /* @__PURE__ */ Qe(Sl), $l = /* @__PURE__ */ Qe(Vl), Cl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Il = /* @__PURE__ */ Qe(Cl);
function Ir(e) {
  return !!e || e === "";
}
const Tr = (e) => !!(e && e.__v_isRef === !0), Ce = (e) => se(e) ? e : e == null ? "" : C(e) || Y(e) && (e.toString === $r || !I(e.toString)) ? Tr(e) ? Ce(e.value) : JSON.stringify(e, xr, 2) : String(e), xr = (e, t) => Tr(t) ? xr(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[No(o, r) + " =>"] = s, n),
    {}
  )
} : Ar(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => No(n))
} : yt(t) ? No(t) : Y(t) && !C(t) && !Cr(t) ? String(t) : t, No = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ue(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Oe;
class Rr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Oe, !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Ue("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Oe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Oe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Fr(e) {
  return new Rr(e);
}
function Tl(e, t = Oe) {
  t && t.active && t.effects.push(e);
}
function jr() {
  return Oe;
}
function xl(e) {
  Oe ? Oe.cleanups.push(e) : process.env.NODE_ENV !== "production" && Ue(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Vt;
class as {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Tl(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Rl(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ze();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = dt, n = Vt;
    try {
      return dt = !0, Vt = this, this._runnings++, Rs(this), this.fn();
    } finally {
      Fs(this), this._runnings--, Vt = n, dt = t;
    }
  }
  stop() {
    this.active && (Rs(this), Fs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Rl(e) {
  return e.value;
}
function Rs(e) {
  e._trackId++, e._depsLength = 0;
}
function Fs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Mr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Mr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let dt = !0, xo = 0;
const Lr = [];
function Xe() {
  Lr.push(dt), dt = !1;
}
function Ze() {
  const e = Lr.pop();
  dt = e === void 0 ? !0 : e;
}
function us() {
  xo++;
}
function fs() {
  for (xo--; !xo && Ro.length; )
    Ro.shift()();
}
function kr(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Mr(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, oe({ effect: e }, n)));
  }
}
const Ro = [];
function Hr(e, t, n) {
  var o;
  us();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, oe({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Ro.push(s.scheduler)));
  }
  fs();
}
const Ur = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Bn = /* @__PURE__ */ new WeakMap(), Pt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Fo = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function _e(e, t, n) {
  if (dt && Vt) {
    let o = Bn.get(e);
    o || Bn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Ur(() => o.delete(n))), kr(
      Vt,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Le(e, t, n, o, s, r) {
  const i = Bn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && C(e)) {
    const c = Number(o);
    i.forEach((u, p) => {
      (p === "length" || !yt(p) && p >= c) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        C(e) ? is(n) && l.push(i.get("length")) : (l.push(i.get(Pt)), St(e) && l.push(i.get(Fo)));
        break;
      case "delete":
        C(e) || (l.push(i.get(Pt)), St(e) && l.push(i.get(Fo)));
        break;
      case "set":
        St(e) && l.push(i.get(Pt));
        break;
    }
  us();
  for (const c of l)
    c && Hr(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: s,
        oldTarget: r
      } : void 0
    );
  fs();
}
function Fl(e, t) {
  const n = Bn.get(e);
  return n && n.get(t);
}
const jl = /* @__PURE__ */ Qe("__proto__,__v_isRef,__isVue"), Br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
), js = /* @__PURE__ */ Ml();
function Ml() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = R(this);
      for (let r = 0, i = this.length; r < i; r++)
        _e(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(R)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Xe(), us();
      const o = R(this)[t].apply(this, n);
      return fs(), Ze(), o;
    };
  }), e;
}
function Ll(e) {
  yt(e) || (e = String(e));
  const t = R(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Wr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Qr : Yr : r ? zr : qr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = C(t);
    if (!s) {
      if (i && H(js, n))
        return Reflect.get(js, n, o);
      if (n === "hasOwnProperty")
        return Ll;
    }
    const l = Reflect.get(t, n, o);
    return (yt(n) ? Br.has(n) : jl(n)) || (s || _e(t, "get", n), r) ? l : ne(l) ? i && is(n) ? l : l.value : Y(l) ? s ? Xr(l) : ro(l) : l;
  }
}
class Gr extends Wr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = xt(r);
      if (!At(o) && !xt(o) && (r = R(r), o = R(o)), !C(t) && ne(r) && !ne(o))
        return c ? !1 : (r.value = o, !0);
    }
    const i = C(t) && is(n) ? Number(n) < t.length : H(t, n), l = Reflect.set(t, n, o, s);
    return t === R(s) && (i ? mt(o, r) && Le(t, "set", n, o, r) : Le(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = H(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Le(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!yt(n) || !Br.has(n)) && _e(t, "has", n), o;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      C(t) ? "length" : Pt
    ), Reflect.ownKeys(t);
  }
}
class Kr extends Wr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ue(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ue(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const kl = /* @__PURE__ */ new Gr(), Hl = /* @__PURE__ */ new Kr(), Ul = /* @__PURE__ */ new Gr(
  !0
), Bl = /* @__PURE__ */ new Kr(!0), ds = (e) => e, oo = (e) => Reflect.getPrototypeOf(e);
function On(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = R(e), r = R(t);
  n || (mt(t, r) && _e(s, "get", t), _e(s, "get", r));
  const { has: i } = oo(s), l = o ? ds : n ? ps : dn;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function wn(e, t = !1) {
  const n = this.__v_raw, o = R(n), s = R(e);
  return t || (mt(e, s) && _e(o, "has", e), _e(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Dn(e, t = !1) {
  return e = e.__v_raw, !t && _e(R(e), "iterate", Pt), Reflect.get(e, "size", e);
}
function Ms(e) {
  e = R(e);
  const t = R(this);
  return oo(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function Ls(e, t) {
  t = R(t);
  const n = R(this), { has: o, get: s } = oo(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Jr(n, o, e) : (e = R(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? mt(t, i) && Le(n, "set", e, t, i) : Le(n, "add", e, t), this;
}
function ks(e) {
  const t = R(this), { has: n, get: o } = oo(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Jr(t, n, e) : (e = R(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && Le(t, "delete", e, void 0, r), i;
}
function Hs() {
  const e = R(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? St(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Le(e, "clear", void 0, void 0, n), o;
}
function Sn(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = R(i), c = t ? ds : e ? ps : dn;
    return !e && _e(l, "iterate", Pt), i.forEach((u, p) => o.call(s, c(u), c(p), r));
  };
}
function Vn(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = R(s), i = St(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = s[e](...o), p = n ? ds : t ? ps : dn;
    return !t && _e(
      r,
      "iterate",
      c ? Fo : Pt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: _ } = u.next();
        return _ ? { value: d, done: _ } : {
          value: l ? [p(d[0]), p(d[1])] : p(d),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function rt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ue(
        `${Tt(e)} operation ${n}failed: target is readonly.`,
        R(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wl() {
  const e = {
    get(r) {
      return On(this, r);
    },
    get size() {
      return Dn(this);
    },
    has: wn,
    add: Ms,
    set: Ls,
    delete: ks,
    clear: Hs,
    forEach: Sn(!1, !1)
  }, t = {
    get(r) {
      return On(this, r, !1, !0);
    },
    get size() {
      return Dn(this);
    },
    has: wn,
    add: Ms,
    set: Ls,
    delete: ks,
    clear: Hs,
    forEach: Sn(!1, !0)
  }, n = {
    get(r) {
      return On(this, r, !0);
    },
    get size() {
      return Dn(this, !0);
    },
    has(r) {
      return wn.call(this, r, !0);
    },
    add: rt("add"),
    set: rt("set"),
    delete: rt("delete"),
    clear: rt("clear"),
    forEach: Sn(!0, !1)
  }, o = {
    get(r) {
      return On(this, r, !0, !0);
    },
    get size() {
      return Dn(this, !0);
    },
    has(r) {
      return wn.call(this, r, !0);
    },
    add: rt("add"),
    set: rt("set"),
    delete: rt("delete"),
    clear: rt("clear"),
    forEach: Sn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Vn(r, !1, !1), n[r] = Vn(r, !0, !1), t[r] = Vn(r, !1, !0), o[r] = Vn(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Gl,
  Kl,
  Jl,
  ql
] = /* @__PURE__ */ Wl();
function so(e, t) {
  const n = t ? e ? ql : Jl : e ? Kl : Gl;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    H(n, s) && s in o ? n : o,
    s,
    r
  );
}
const zl = {
  get: /* @__PURE__ */ so(!1, !1)
}, Yl = {
  get: /* @__PURE__ */ so(!1, !0)
}, Ql = {
  get: /* @__PURE__ */ so(!0, !1)
}, Xl = {
  get: /* @__PURE__ */ so(!0, !0)
};
function Jr(e, t, n) {
  const o = R(n);
  if (o !== n && t.call(e, o)) {
    const s = rs(e);
    Ue(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const qr = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap();
function Zl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ec(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zl(rs(e));
}
function ro(e) {
  return xt(e) ? e : io(
    e,
    !1,
    kl,
    zl,
    qr
  );
}
function tc(e) {
  return io(
    e,
    !1,
    Ul,
    Yl,
    zr
  );
}
function Xr(e) {
  return io(
    e,
    !0,
    Hl,
    Ql,
    Yr
  );
}
function Me(e) {
  return io(
    e,
    !0,
    Bl,
    Xl,
    Qr
  );
}
function io(e, t, n, o, s) {
  if (!Y(e))
    return process.env.NODE_ENV !== "production" && Ue(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = ec(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function qe(e) {
  return xt(e) ? qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
function At(e) {
  return !!(e && e.__v_isShallow);
}
function Wn(e) {
  return e ? !!e.__v_raw : !1;
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function ut(e) {
  return Object.isExtensible(e) && Un(e, "__v_skip", !0), e;
}
const dn = (e) => Y(e) ? ro(e) : e, ps = (e) => Y(e) ? Xr(e) : e, nc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Zr {
  constructor(t, n, o, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new as(
      () => t(this._value),
      () => Cn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = R(this);
    return (!t._cacheable || t.effect.dirty) && mt(t._value, t._value = t.effect.run()) && Cn(t, 4), ei(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Ue(nc, `

getter: `, this.getter), Cn(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function oc(e, t, n = !1) {
  let o, s;
  const r = I(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    Ue("Write operation failed: computed value is readonly");
  } : le) : (o = e.get, s = e.set);
  const i = new Zr(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function ei(e) {
  var t;
  dt && Vt && (e = R(e), kr(
    Vt,
    (t = e.dep) != null ? t : e.dep = Ur(
      () => e.dep = void 0,
      e instanceof Zr ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Cn(e, t = 4, n, o) {
  e = R(e);
  const s = e.dep;
  s && Hr(
    s,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: o
    } : void 0
  );
}
function ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function de(e) {
  return sc(e, !1);
}
function sc(e, t) {
  return ne(e) ? e : new rc(e, t);
}
class rc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : R(t), this._value = n ? t : dn(t);
  }
  get value() {
    return ei(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || At(t) || xt(t);
    if (t = n ? t : R(t), mt(t, this._rawValue)) {
      const o = this._rawValue;
      this._rawValue = t, this._value = n ? t : dn(t), Cn(this, 4, t, o);
    }
  }
}
function ti(e) {
  return ne(e) ? e.value : e;
}
const ic = {
  get: (e, t, n) => ti(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return ne(s) && !ne(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ni(e) {
  return qe(e) ? e : new Proxy(e, ic);
}
function Us(e) {
  process.env.NODE_ENV !== "production" && !Wn(e) && Ue("toRefs() expects a reactive object but received a plain one.");
  const t = C(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = oi(e, n);
  return t;
}
class lc {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Fl(R(this._object), this._key);
  }
}
class cc {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Oo(e, t, n) {
  return ne(e) ? e : I(e) ? new cc(e) : Y(e) && arguments.length > 1 ? oi(e, t, n) : de(e);
}
function oi(e, t, n) {
  const o = e[t];
  return ne(o) ? o : new lc(e, t, n);
}
/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const $t = [];
function In(e) {
  $t.push(e);
}
function Tn() {
  $t.pop();
}
function O(e, ...t) {
  Xe();
  const n = $t.length ? $t[$t.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = ac();
  if (o)
    ze(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${_o(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...uc(s)), console.warn(...r);
  }
  Ze();
}
function ac() {
  let e = $t[$t.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function uc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...fc(n));
  }), t;
}
function fc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${_o(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...dc(e.props), r] : [s + r];
}
function dc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...si(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function si(e, t, n) {
  return se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ne(t) ? (t = si(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const hs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function ze(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    vn(s, t, n);
  }
}
function Ie(e, t, n, o) {
  if (I(e)) {
    const s = ze(e, t, n, o);
    return s && ss(s) && s.catch((r) => {
      vn(r, t, n);
    }), s;
  }
  if (C(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Ie(e[r], t, n, o));
    return s;
  } else
    process.env.NODE_ENV !== "production" && O(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function vn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? hs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Xe(), ze(
        c,
        null,
        10,
        [e, i, l]
      ), Ze();
      return;
    }
  }
  pc(e, n, s, o);
}
function pc(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = hs[t];
    if (n && In(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Tn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let pn = !1, jo = !1;
const ve = [];
let je = 0;
const Kt = [];
let it = null, Dt = 0;
const ri = /* @__PURE__ */ Promise.resolve();
let _s = null;
const hc = 100;
function Mo(e) {
  const t = _s || ri;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _c(e) {
  let t = je + 1, n = ve.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = ve[o], r = hn(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function lo(e) {
  (!ve.length || !ve.includes(
    e,
    pn && e.allowRecurse ? je + 1 : je
  )) && (e.id == null ? ve.push(e) : ve.splice(_c(e.id), 0, e), ii());
}
function ii() {
  !pn && !jo && (jo = !0, _s = ri.then(ai));
}
function mc(e) {
  const t = ve.indexOf(e);
  t > je && ve.splice(t, 1);
}
function li(e) {
  C(e) ? Kt.push(...e) : (!it || !it.includes(
    e,
    e.allowRecurse ? Dt + 1 : Dt
  )) && Kt.push(e), ii();
}
function Bs(e, t, n = pn ? je + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ve.length; n++) {
    const o = ve[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && ms(t, o))
        continue;
      ve.splice(n, 1), n--, o();
    }
  }
}
function ci(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, o) => hn(n) - hn(o)
    );
    if (Kt.length = 0, it) {
      it.push(...t);
      return;
    }
    for (it = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Dt = 0; Dt < it.length; Dt++) {
      const n = it[Dt];
      process.env.NODE_ENV !== "production" && ms(e, n) || n.active !== !1 && n();
    }
    it = null, Dt = 0;
  }
}
const hn = (e) => e.id == null ? 1 / 0 : e.id, gc = (e, t) => {
  const n = hn(e) - hn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ai(e) {
  jo = !1, pn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ve.sort(gc);
  const t = process.env.NODE_ENV !== "production" ? (n) => ms(e, n) : le;
  try {
    for (je = 0; je < ve.length; je++) {
      const n = ve[je];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        ze(n, null, 14);
      }
    }
  } finally {
    je = 0, ve.length = 0, ci(e), pn = !1, _s = null, (ve.length || Kt.length) && ai(e);
  }
}
function ms(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > hc) {
      const o = t.ownerInstance, s = o && Vs(o.type);
      return vn(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Ct = !1;
const Ot = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (ls().__VUE_HMR_RUNTIME__ = {
  createRecord: wo(ui),
  rerender: wo(Ec),
  reload: wo(bc)
});
const Rt = /* @__PURE__ */ new Map();
function vc(e) {
  const t = e.type.__hmrId;
  let n = Rt.get(t);
  n || (ui(t, e.type), n = Rt.get(t)), n.instances.add(e);
}
function yc(e) {
  Rt.get(e.type.__hmrId).instances.delete(e);
}
function ui(e, t) {
  return Rt.has(e) ? !1 : (Rt.set(e, {
    initialDef: ln(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ln(e) {
  return Ki(e) ? e.__vccOpts : e;
}
function Ec(e, t) {
  const n = Rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ln(o.type).render = t), o.renderCache = [], Ct = !0, o.effect.dirty = !0, o.update(), Ct = !1;
  }));
}
function bc(e, t) {
  const n = Rt.get(e);
  if (!n)
    return;
  t = ln(t), Ws(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = ln(s.type);
    Ot.has(r) || (r !== n.initialDef && Ws(r, t), Ot.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ot.add(r), s.ceReload(t.styles), Ot.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, lo(() => {
      s.parent.update(), Ot.delete(r);
    })) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  li(() => {
    for (const s of o)
      Ot.delete(
        ln(s.type)
      );
  });
}
function Ws(e, t) {
  oe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function wo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ae, nn = [], Lo = !1;
function yn(e, ...t) {
  Ae ? Ae.emit(e, ...t) : Lo || nn.push({ event: e, args: t });
}
function gs(e, t) {
  var n, o;
  Ae = e, Ae ? (Ae.enabled = !0, nn.forEach(({ event: s, args: r }) => Ae.emit(s, ...r)), nn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gs(r, t);
  }), setTimeout(() => {
    Ae || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Lo = !0, nn = []);
  }, 3e3)) : (Lo = !0, nn = []);
}
function Nc(e, t) {
  yn("app:init", e, t, {
    Fragment: re,
    Text: En,
    Comment: De,
    Static: Rn
  });
}
function Oc(e) {
  yn("app:unmount", e);
}
const wc = /* @__PURE__ */ vs(
  "component:added"
  /* COMPONENT_ADDED */
), fi = /* @__PURE__ */ vs(
  "component:updated"
  /* COMPONENT_UPDATED */
), Dc = /* @__PURE__ */ vs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Sc = (e) => {
  Ae && typeof Ae.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ae.cleanupBuffer(e) && Dc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vs(e) {
  return (t) => {
    yn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Vc = /* @__PURE__ */ di(
  "perf:start"
  /* PERFORMANCE_START */
), Pc = /* @__PURE__ */ di(
  "perf:end"
  /* PERFORMANCE_END */
);
function di(e) {
  return (t, n, o) => {
    yn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ac(e, t, n) {
  yn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function $c(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || Q;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [d]
    } = e;
    if (p)
      if (!(t in p))
        (!d || !(Nt(t) in d)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Nt(t)}" prop.`
        );
      else {
        const _ = p[t];
        I(_) && (_(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: _ } = o[p] || Q;
    _ && (s = n.map((D) => se(D) ? D.trim() : D)), d && (s = n.map(To));
  }
  if (process.env.NODE_ENV !== "production" && Ac(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[Nt(p)] && O(
      `Event "${p}" is emitted in component ${_o(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_t(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = o[l = Nt(t)] || // also try camelCase event handler (#2249)
  o[l = Nt(He(t))];
  !c && r && (c = o[l = Nt(_t(t))]), c && Ie(
    c,
    e,
    6,
    s
  );
  const u = o[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ie(
      u,
      e,
      6,
      s
    );
  }
}
function pi(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!I(e)) {
    const c = (u) => {
      const p = pi(u, t, !0);
      p && (l = !0, oe(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (Y(e) && o.set(e, null), null) : (C(r) ? r.forEach((c) => i[c] = null) : oe(i, r), Y(e) && o.set(e, i), i);
}
function co(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, _t(t)) || H(e, t));
}
let ce = null, ao = null;
function Gn(e) {
  const t = ce;
  return ce = e, ao = e && e.type.__scopeId || null, t;
}
function Cc(e) {
  ao = e;
}
function Ic() {
  ao = null;
}
function ko(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && sr(-1);
    const r = Gn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Gn(r), o._d && sr(1);
    }
    return process.env.NODE_ENV !== "production" && fi(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Ho = !1;
function Kn() {
  Ho = !0;
}
function Do(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: c,
    render: u,
    renderCache: p,
    props: d,
    data: _,
    setupState: D,
    ctx: T,
    inheritAttrs: F
  } = e, he = Gn(e);
  let J, j;
  process.env.NODE_ENV !== "production" && (Ho = !1);
  try {
    if (n.shapeFlag & 4) {
      const K = s || o, B = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(K, {
        get(E, te, Z) {
          return O(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(E, te, Z);
        }
      }) : K;
      J = Pe(
        u.call(
          B,
          K,
          p,
          process.env.NODE_ENV !== "production" ? Me(d) : d,
          D,
          _,
          T
        )
      ), j = l;
    } else {
      const K = t;
      process.env.NODE_ENV !== "production" && l === d && Kn(), J = Pe(
        K.length > 1 ? K(
          process.env.NODE_ENV !== "production" ? Me(d) : d,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Kn(), Me(l);
            },
            slots: i,
            emit: c
          } : { attrs: l, slots: i, emit: c }
        ) : K(
          process.env.NODE_ENV !== "production" ? Me(d) : d,
          null
        )
      ), j = t.props ? l : Tc(l);
    }
  } catch (K) {
    un.length = 0, vn(K, e, 1), J = ye(De);
  }
  let U = J, G;
  if (process.env.NODE_ENV !== "production" && J.patchFlag > 0 && J.patchFlag & 2048 && ([U, G] = hi(J)), j && F !== !1) {
    const K = Object.keys(j), { shapeFlag: B } = U;
    if (K.length) {
      if (B & 7)
        r && K.some(Hn) && (j = xc(
          j,
          r
        )), U = vt(U, j, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Ho && U.type !== De) {
        const E = Object.keys(l), te = [], Z = [];
        for (let P = 0, V = E.length; P < V; P++) {
          const W = E[P];
          gn(W) ? Hn(W) || te.push(W[2].toLowerCase() + W.slice(3)) : Z.push(W);
        }
        Z.length && O(
          `Extraneous non-props attributes (${Z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), te.length && O(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Gs(U) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = vt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Gs(U) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), U.transition = n.transition), process.env.NODE_ENV !== "production" && G ? G(U) : J = U, Gn(he), J;
}
const hi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ys(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return hi(o);
  } else
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Pe(o), i];
};
function ys(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (fo(s)) {
      if (s.type !== De || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ys(n.children);
      }
    } else
      return;
  }
  return n;
}
const Tc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Hn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Gs = (e) => e.shapeFlag & 7 || e.type === De;
function Rc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: c } = t, u = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Ct || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? Ks(o, i, u) : !!i;
    if (c & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const _ = p[d];
        if (i[_] !== o[_] && !co(u, _))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Ks(o, i, u) : !0 : !!i;
  return !1;
}
function Ks(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !co(n, r))
      return !0;
  }
  return !1;
}
function Fc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Jn = "components";
function gt(e, t) {
  return mi(Jn, e, !0, t) || e;
}
const _i = Symbol.for("v-ndc");
function jc(e) {
  return se(e) ? mi(Jn, e, !1) || e : e || _i;
}
function mi(e, t, n = !0, o = !1) {
  const s = ce || ae;
  if (s) {
    const r = s.type;
    if (e === Jn) {
      const l = Vs(
        r,
        !1
      );
      if (l && (l === t || l === He(t) || l === Tt(He(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Js(s[e] || r[e], t) || // global registration
      Js(s.appContext[e], t)
    );
    if (!i && o)
      return r;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const l = e === Jn ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      O(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && O(
      `resolve${Tt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Js(e, t) {
  return e && (e[t] || e[He(t)] || e[Tt(He(t))]);
}
const Mc = (e) => e.__isSuspense;
function Lc(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : li(e);
}
function uo(e, t, n = ae, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Xe();
      const l = bn(n), c = Ie(t, n, e, i);
      return l(), Ze(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Nt(hs[e].replace(/ hook$/, ""));
    O(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const et = (e) => (t, n = ae) => {
  (!po || e === "sp") && uo(e, (...o) => t(...o), n);
}, kc = et("bm"), Hc = et("m"), Uc = et("bu"), Bc = et("u"), Wc = et("bum"), gi = et("um"), Gc = et("sp"), Kc = et(
  "rtg"
), Jc = et(
  "rtc"
);
function qc(e, t = ae) {
  uo("ec", e, t);
}
function vi(e) {
  vl(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function Uo(e, t) {
  if (ce === null)
    return process.env.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = ho(ce), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, l, c = Q] = t[s];
    r && (I(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && at(i), o.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Et(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let c = l.dir[o];
    c && (Xe(), Ie(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ze());
  }
}
function pt(e, t, n, o) {
  let s;
  const r = n && n[o];
  if (C(e) || se(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, r && r[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, r && r[i]);
  } else if (Y(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, l) => t(i, l, void 0, r && r[l])
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        s[l] = t(e[u], u, l, r && r[l]);
      }
    }
  else
    s = [];
  return n && (n[o] = s), s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function tt(e, t) {
  return I(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => oe({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const cn = (e) => !!e.type.__asyncLoader;
function yi(e, t, n = {}, o, s) {
  if (ce.isCE || ce.parent && cn(ce.parent) && ce.parent.isCE)
    return t !== "default" && (n.name = t), ye("slot", n, o && o());
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (O(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), q();
  const i = r && Ei(r(n)), l = ws(
    re,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Ei(e) {
  return e.some((t) => fo(t) ? !(t.type === De || t.type === re && !Ei(t.children)) : !0) ? e : null;
}
const Bo = (e) => e ? Bi(e) ? ho(e) : Bo(e.parent) : null, It = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Me(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Me(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Me(e.refs) : e.refs,
    $parent: (e) => Bo(e.parent),
    $root: (e) => Bo(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, lo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mo.bind(e.proxy)),
    $watch: (e) => Sa.bind(e)
  })
), Es = (e) => e === "_" || e === "$", So = (e, t) => e !== Q && !e.__isScriptSetup && H(e, t), bi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (So(o, t))
          return i[t] = 1, o[t];
        if (s !== Q && H(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && H(u, t)
        )
          return i[t] = 3, r[t];
        if (n !== Q && H(n, t))
          return i[t] = 4, n[t];
        Wo && (i[t] = 0);
      }
    }
    const p = It[t];
    let d, _;
    if (p)
      return t === "$attrs" ? (_e(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Kn()) : process.env.NODE_ENV !== "production" && t === "$slots" && _e(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Q && H(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      _ = c.config.globalProperties, H(_, t)
    )
      return _[t];
    process.env.NODE_ENV !== "production" && ce && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== Q && Es(t[0]) && H(s, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ce && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return So(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && H(s, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Q && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== Q && H(e, i) || So(t, i) || (l = r[0]) && H(l, i) || H(o, i) || H(It, i) || H(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (bi.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function zc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(It).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => It[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: le
    });
  }), t;
}
function Yc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: le
    });
  });
}
function Qc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(R(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Es(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: le
      });
    }
  });
}
function qs(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Xc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Wo = !0;
function Zc(e) {
  const t = bs(e), n = e.proxy, o = e.ctx;
  Wo = !1, t.beforeCreate && zs(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: c,
    inject: u,
    // lifecycle
    created: p,
    beforeMount: d,
    mounted: _,
    beforeUpdate: D,
    updated: T,
    activated: F,
    deactivated: he,
    beforeDestroy: J,
    beforeUnmount: j,
    destroyed: U,
    unmounted: G,
    render: K,
    renderTracked: B,
    renderTriggered: E,
    errorCaptured: te,
    serverPrefetch: Z,
    // public API
    expose: P,
    inheritAttrs: V,
    // assets
    components: W,
    directives: ue,
    filters: ot
  } = t, Te = process.env.NODE_ENV !== "production" ? Xc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const x in L)
        Te("Props", x);
  }
  if (u && ea(u, o, Te), i)
    for (const L in i) {
      const x = i[L];
      I(x) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: x.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = x.bind(n), process.env.NODE_ENV !== "production" && Te("Methods", L)) : process.env.NODE_ENV !== "production" && O(
        `Method "${L}" has type "${typeof x}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !I(s) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && ss(L) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Y(L))
      process.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = ro(L), process.env.NODE_ENV !== "production")
      for (const x in L)
        Te("Data", x), Es(x[0]) || Object.defineProperty(o, x, {
          configurable: !0,
          enumerable: !0,
          get: () => L[x],
          set: le
        });
  }
  if (Wo = !0, r)
    for (const L in r) {
      const x = r[L], xe = I(x) ? x.bind(n, n) : I(x.get) ? x.get.bind(n, n) : le;
      process.env.NODE_ENV !== "production" && xe === le && O(`Computed property "${L}" has no getter.`);
      const go = !I(x) && I(x.set) ? x.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : le, Yt = Ye({
        get: xe,
        set: go
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Yt.value,
        set: (jt) => Yt.value = jt
      }), process.env.NODE_ENV !== "production" && Te("Computed", L);
    }
  if (l)
    for (const L in l)
      Ni(l[L], o, n, L);
  if (c) {
    const L = I(c) ? c.call(n) : c;
    Reflect.ownKeys(L).forEach((x) => {
      ia(x, L[x]);
    });
  }
  p && zs(p, e, "c");
  function me(L, x) {
    C(x) ? x.forEach((xe) => L(xe.bind(n))) : x && L(x.bind(n));
  }
  if (me(kc, d), me(Hc, _), me(Uc, D), me(Bc, T), me(Va, F), me(Pa, he), me(qc, te), me(Jc, B), me(Kc, E), me(Wc, j), me(gi, G), me(Gc, Z), C(P))
    if (P.length) {
      const L = e.exposed || (e.exposed = {});
      P.forEach((x) => {
        Object.defineProperty(L, x, {
          get: () => n[x],
          set: (xe) => n[x] = xe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  K && e.render === le && (e.render = K), V != null && (e.inheritAttrs = V), W && (e.components = W), ue && (e.directives = ue);
}
function ea(e, t, n = le) {
  C(e) && (e = Go(e));
  for (const o in e) {
    const s = e[o];
    let r;
    Y(s) ? "default" in s ? r = an(
      s.from || o,
      s.default,
      !0
    ) : r = an(s.from || o) : r = an(s), ne(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function zs(e, t, n) {
  Ie(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ni(e, t, n, o) {
  const s = o.includes(".") ? Ri(n, o) : () => n[o];
  if (se(e)) {
    const r = t[e];
    I(r) ? qt(s, r) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (I(e))
    qt(s, e.bind(n));
  else if (Y(e))
    if (C(e))
      e.forEach((r) => Ni(r, t, n, o));
    else {
      const r = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(r) ? qt(s, r, e) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function bs(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (u) => qn(c, u, i, !0)
  ), qn(c, t, i)), Y(t) && r.set(t, c), c;
}
function qn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && qn(e, r, n, !0), s && s.forEach(
    (i) => qn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ta[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ta = {
  data: Ys,
  props: Qs,
  emits: Qs,
  // objects
  methods: on,
  computed: on,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: on,
  directives: on,
  // watch
  watch: oa,
  // provide / inject
  provide: Ys,
  inject: na
};
function Ys(e, t) {
  return t ? e ? function() {
    return oe(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function na(e, t) {
  return on(Go(e), Go(t));
}
function Go(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function on(e, t) {
  return e ? oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qs(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    qs(e),
    qs(t ?? {})
  ) : t;
}
function oa(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = oe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = be(e[o], t[o]);
  return n;
}
function Oi() {
  return {
    app: null,
    config: {
      isNativeTag: ml,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let sa = 0;
function ra(e, t) {
  return function(o, s = null) {
    I(o) || (o = oe({}, o)), s != null && !Y(s) && (process.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), s = null);
    const r = Oi(), i = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const c = r.app = {
      _uid: sa++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: cr,
      get config() {
        return r.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...p) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : u && I(u.install) ? (i.add(u), u.install(c, ...p)) : I(u) ? (i.add(u), u(c, ...p)) : process.env.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(u) {
        return r.mixins.includes(u) ? process.env.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), c;
      },
      component(u, p) {
        return process.env.NODE_ENV !== "production" && Yo(u, r.config), p ? (process.env.NODE_ENV !== "production" && r.components[u] && O(`Component "${u}" has already been registered in target app.`), r.components[u] = p, c) : r.components[u];
      },
      directive(u, p) {
        return process.env.NODE_ENV !== "production" && vi(u), p ? (process.env.NODE_ENV !== "production" && r.directives[u] && O(`Directive "${u}" has already been registered in target app.`), r.directives[u] = p, c) : r.directives[u];
      },
      mount(u, p, d) {
        if (l)
          process.env.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = ye(o, s);
          return _.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(
              vt(_),
              u,
              d
            );
          }), p && t ? t(_, u) : e(_, u, d), l = !0, c._container = u, u.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = _.component, Nc(c, cr)), ho(_.component);
        }
      },
      unmount() {
        l ? (e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, Oc(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(u, p) {
        return process.env.NODE_ENV !== "production" && u in r.provides && O(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), r.provides[u] = p, c;
      },
      runWithContext(u) {
        const p = Jt;
        Jt = c;
        try {
          return u();
        } finally {
          Jt = p;
        }
      }
    };
    return c;
  };
}
let Jt = null;
function ia(e, t) {
  if (!ae)
    process.env.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = ae.provides;
    const o = ae.parent && ae.parent.provides;
    o === n && (n = ae.provides = Object.create(o)), n[e] = t;
  }
}
function an(e, t, n = !1) {
  const o = ae || ce;
  if (o || Jt) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Jt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
function la() {
  return !!(ae || ce || Jt);
}
const wi = {}, Di = () => Object.create(wi), Si = (e) => Object.getPrototypeOf(e) === wi;
function ca(e, t, n, o = !1) {
  const s = {}, r = Di();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vi(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && Ai(t || {}, s, e), n ? e.props = o ? s : tc(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function aa(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function ua(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = R(s), [c] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && aa(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let _ = p[d];
        if (co(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (c)
          if (H(r, _))
            D !== r[_] && (r[_] = D, u = !0);
          else {
            const T = He(_);
            s[T] = Ko(
              c,
              l,
              T,
              D,
              e,
              !1
            );
          }
        else
          D !== r[_] && (r[_] = D, u = !0);
      }
    }
  } else {
    Vi(e, t, s, r) && (u = !0);
    let p;
    for (const d in l)
      (!t || // for camelCase
      !H(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = _t(d)) === d || !H(t, p))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[d] = Ko(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (r !== l)
      for (const d in r)
        (!t || !H(t, d)) && (delete r[d], u = !0);
  }
  u && Le(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Ai(t || {}, s, e);
}
function Vi(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (rn(c))
        continue;
      const u = t[c];
      let p;
      s && H(s, p = He(c)) ? !r || !r.includes(p) ? n[p] = u : (l || (l = {}))[p] = u : co(e.emitsOptions, c) || (!(c in o) || u !== o[c]) && (o[c] = u, i = !0);
    }
  if (r) {
    const c = R(n), u = l || Q;
    for (let p = 0; p < r.length; p++) {
      const d = r[p];
      n[d] = Ko(
        s,
        c,
        d,
        u[d],
        e,
        !H(u, d)
      );
    }
  }
  return i;
}
function Ko(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = H(i, "default");
    if (l && o === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && I(c)) {
        const { propsDefaults: u } = s;
        if (n in u)
          o = u[n];
        else {
          const p = bn(s);
          o = u[n] = c.call(
            null,
            t
          ), p();
        }
      } else
        o = c;
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === _t(n)) && (o = !0));
  }
  return o;
}
function Pi(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let c = !1;
  if (!I(e)) {
    const p = (d) => {
      c = !0;
      const [_, D] = Pi(d, t, !0);
      oe(i, _), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !c)
    return Y(e) && o.set(e, Gt), Gt;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !se(r[p]) && O("props must be strings when using array syntax.", r[p]);
      const d = He(r[p]);
      Xs(d) && (i[d] = Q);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !Y(r) && O("invalid props options", r);
    for (const p in r) {
      const d = He(p);
      if (Xs(d)) {
        const _ = r[p], D = i[d] = C(_) || I(_) ? { type: _ } : oe({}, _);
        if (D) {
          const T = er(Boolean, D.type), F = er(String, D.type);
          D[
            0
            /* shouldCast */
          ] = T > -1, D[
            1
            /* shouldCastTrue */
          ] = F < 0 || T < F, (T > -1 || H(D, "default")) && l.push(d);
        }
      }
    }
  }
  const u = [i, l];
  return Y(e) && o.set(e, u), u;
}
function Xs(e) {
  return e[0] !== "$" && !rn(e) ? !0 : (process.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Jo(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Zs(e, t) {
  return Jo(e) === Jo(t);
}
function er(e, t) {
  return C(t) ? t.findIndex((n) => Zs(n, e)) : I(t) && Zs(t, e) ? 0 : -1;
}
function Ai(e, t, n) {
  const o = R(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && fa(
      r,
      o[r],
      i,
      process.env.NODE_ENV !== "production" ? Me(o) : o,
      !H(e, r) && !H(e, _t(r))
    );
  }
}
function fa(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: c } = n;
  if (i && s) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let u = !1;
      const p = C(r) ? r : [r], d = [];
      for (let _ = 0; _ < p.length && !u; _++) {
        const { valid: D, expectedType: T } = pa(t, p[_]);
        d.push(T || ""), u = D;
      }
      if (!u) {
        O(ha(e, t, d));
        return;
      }
    }
    l && !l(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const da = /* @__PURE__ */ Qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function pa(e, t) {
  let n;
  const o = Jo(t);
  if (da(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Y(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function ha(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Tt).join(" | ")}`;
  const s = n[0], r = rs(t), i = tr(t, s), l = tr(t, r);
  return n.length === 1 && nr(s) && !_a(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, nr(r) && (o += `with value ${l}.`), o;
}
function tr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function nr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function _a(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $i = (e) => e[0] === "_" || e === "$stable", Ns = (e) => C(e) ? e.map(Pe) : [Pe(e)], ma = (e, t, n) => {
  if (t._n)
    return t;
  const o = ko((...s) => (process.env.NODE_ENV !== "production" && ae && (!n || n.root === ae.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ns(t(...s))), n);
  return o._c = !1, o;
}, Ci = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if ($i(s))
      continue;
    const r = e[s];
    if (I(r))
      t[s] = ma(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Ns(r);
      t[s] = () => i;
    }
  }
}, Ii = (e, t) => {
  process.env.NODE_ENV !== "production" && !Os(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ns(t);
  e.slots.default = () => n;
}, ga = (e, t) => {
  const n = e.slots = Di();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (oe(n, t), Un(n, "_", o, !0)) : Ci(t, n);
  } else
    t && Ii(e, t);
}, va = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = Q;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ct ? (oe(s, t), Le(e, "set", "$slots")) : n && l === 1 ? r = !1 : (oe(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, Ci(t, s)), i = t;
  } else
    t && (Ii(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !$i(l) && i[l] == null && delete s[l];
};
function qo(e, t, n, o, s = !1) {
  if (C(e)) {
    e.forEach(
      (_, D) => qo(
        _,
        t && (C(t) ? t[D] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (cn(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? ho(o.component) : o.el, i = s ? null : r, { i: l, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, p = l.refs === Q ? l.refs = {} : l.refs, d = l.setupState;
  if (u != null && u !== c && (se(u) ? (p[u] = null, H(d, u) && (d[u] = null)) : ne(u) && (u.value = null)), I(c))
    ze(c, l, 12, [i, p]);
  else {
    const _ = se(c), D = ne(c);
    if (_ || D) {
      const T = () => {
        if (e.f) {
          const F = _ ? H(d, c) ? d[c] : p[c] : c.value;
          s ? C(F) && os(F, r) : C(F) ? F.includes(r) || F.push(r) : _ ? (p[c] = [r], H(d, c) && (d[c] = p[c])) : (c.value = [r], e.k && (p[e.k] = c.value));
        } else
          _ ? (p[c] = i, H(d, c) && (d[c] = i)) : D ? (c.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && O("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (T.id = -1, Ne(T, n)) : T();
    } else
      process.env.NODE_ENV !== "production" && O("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Xt, ct;
function Ge(e, t) {
  e.appContext.config.performance && zn() && ct.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Vc(e, t, zn() ? ct.now() : Date.now());
}
function Ke(e, t) {
  if (e.appContext.config.performance && zn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ct.mark(o), ct.measure(
      `<${_o(e, e.type)}> ${t}`,
      n,
      o
    ), ct.clearMarks(n), ct.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Pc(e, t, zn() ? ct.now() : Date.now());
}
function zn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, ct = window.performance) : Xt = !1), Xt;
}
function ya() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ne = Lc;
function Ea(e) {
  return ba(e);
}
function ba(e, t) {
  ya();
  const n = ls();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && gs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: c,
    setText: u,
    setElementText: p,
    parentNode: d,
    nextSibling: _,
    setScopeId: D = le,
    insertStaticContent: T
  } = e, F = (a, f, h, m = null, g = null, b = null, w = void 0, y = null, N = process.env.NODE_ENV !== "production" && Ct ? !1 : !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Zt(a, f) && (m = Nn(a), st(a, g, b, !0), a = null), f.patchFlag === -2 && (N = !1, f.dynamicChildren = null);
    const { type: v, ref: S, shapeFlag: $ } = f;
    switch (v) {
      case En:
        he(a, f, h, m);
        break;
      case De:
        J(a, f, h, m);
        break;
      case Rn:
        a == null ? j(f, h, m, w) : process.env.NODE_ENV !== "production" && U(a, f, h, w);
        break;
      case re:
        ue(
          a,
          f,
          h,
          m,
          g,
          b,
          w,
          y,
          N
        );
        break;
      default:
        $ & 1 ? B(
          a,
          f,
          h,
          m,
          g,
          b,
          w,
          y,
          N
        ) : $ & 6 ? ot(
          a,
          f,
          h,
          m,
          g,
          b,
          w,
          y,
          N
        ) : $ & 64 || $ & 128 ? v.process(
          a,
          f,
          h,
          m,
          g,
          b,
          w,
          y,
          N,
          Mt
        ) : process.env.NODE_ENV !== "production" && O("Invalid VNode type:", v, `(${typeof v})`);
    }
    S != null && g && qo(S, a && a.ref, b, f || a, !f);
  }, he = (a, f, h, m) => {
    if (a == null)
      o(
        f.el = l(f.children),
        h,
        m
      );
    else {
      const g = f.el = a.el;
      f.children !== a.children && u(g, f.children);
    }
  }, J = (a, f, h, m) => {
    a == null ? o(
      f.el = c(f.children || ""),
      h,
      m
    ) : f.el = a.el;
  }, j = (a, f, h, m) => {
    [a.el, a.anchor] = T(
      a.children,
      f,
      h,
      m,
      a.el,
      a.anchor
    );
  }, U = (a, f, h, m) => {
    if (f.children !== a.children) {
      const g = _(a.anchor);
      K(a), [f.el, f.anchor] = T(
        f.children,
        h,
        g,
        m
      );
    } else
      f.el = a.el, f.anchor = a.anchor;
  }, G = ({ el: a, anchor: f }, h, m) => {
    let g;
    for (; a && a !== f; )
      g = _(a), o(a, h, m), a = g;
    o(f, h, m);
  }, K = ({ el: a, anchor: f }) => {
    let h;
    for (; a && a !== f; )
      h = _(a), s(a), a = h;
    s(f);
  }, B = (a, f, h, m, g, b, w, y, N) => {
    f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"), a == null ? E(
      f,
      h,
      m,
      g,
      b,
      w,
      y,
      N
    ) : P(
      a,
      f,
      g,
      b,
      w,
      y,
      N
    );
  }, E = (a, f, h, m, g, b, w, y) => {
    let N, v;
    const { props: S, shapeFlag: $, transition: A, dirs: M } = a;
    if (N = a.el = i(
      a.type,
      b,
      S && S.is,
      S
    ), $ & 8 ? p(N, a.children) : $ & 16 && Z(
      a.children,
      N,
      null,
      m,
      g,
      Vo(a, b),
      w,
      y
    ), M && Et(a, null, m, "created"), te(N, a, a.scopeId, w, m), S) {
      for (const ee in S)
        ee !== "value" && !rn(ee) && r(
          N,
          ee,
          null,
          S[ee],
          b,
          a.children,
          m,
          g,
          Be
        );
      "value" in S && r(N, "value", null, S.value, b), (v = S.onVnodeBeforeMount) && Fe(v, m, a);
    }
    process.env.NODE_ENV !== "production" && (Un(N, "__vnode", a, !0), Un(N, "__vueParentComponent", m, !0)), M && Et(a, null, m, "beforeMount");
    const k = Na(g, A);
    k && A.beforeEnter(N), o(N, f, h), ((v = S && S.onVnodeMounted) || k || M) && Ne(() => {
      v && Fe(v, m, a), k && A.enter(N), M && Et(a, null, m, "mounted");
    }, g);
  }, te = (a, f, h, m, g) => {
    if (h && D(a, h), m)
      for (let b = 0; b < m.length; b++)
        D(a, m[b]);
    if (g) {
      let b = g.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = ys(b.children) || b), f === b) {
        const w = g.vnode;
        te(
          a,
          w,
          w.scopeId,
          w.slotScopeIds,
          g.parent
        );
      }
    }
  }, Z = (a, f, h, m, g, b, w, y, N = 0) => {
    for (let v = N; v < a.length; v++) {
      const S = a[v] = y ? lt(a[v]) : Pe(a[v]);
      F(
        null,
        S,
        f,
        h,
        m,
        g,
        b,
        w,
        y
      );
    }
  }, P = (a, f, h, m, g, b, w) => {
    const y = f.el = a.el;
    process.env.NODE_ENV !== "production" && (y.__vnode = f);
    let { patchFlag: N, dynamicChildren: v, dirs: S } = f;
    N |= a.patchFlag & 16;
    const $ = a.props || Q, A = f.props || Q;
    let M;
    if (h && bt(h, !1), (M = A.onVnodeBeforeUpdate) && Fe(M, h, f, a), S && Et(f, a, h, "beforeUpdate"), h && bt(h, !0), process.env.NODE_ENV !== "production" && Ct && (N = 0, w = !1, v = null), v ? (V(
      a.dynamicChildren,
      v,
      y,
      h,
      m,
      Vo(f, g),
      b
    ), process.env.NODE_ENV !== "production" && xn(a, f)) : w || xe(
      a,
      f,
      y,
      null,
      h,
      m,
      Vo(f, g),
      b,
      !1
    ), N > 0) {
      if (N & 16)
        W(
          y,
          f,
          $,
          A,
          h,
          m,
          g
        );
      else if (N & 2 && $.class !== A.class && r(y, "class", null, A.class, g), N & 4 && r(y, "style", $.style, A.style, g), N & 8) {
        const k = f.dynamicProps;
        for (let ee = 0; ee < k.length; ee++) {
          const z = k[ee], fe = $[z], Se = A[z];
          (Se !== fe || z === "value") && r(
            y,
            z,
            fe,
            Se,
            g,
            a.children,
            h,
            m,
            Be
          );
        }
      }
      N & 1 && a.children !== f.children && p(y, f.children);
    } else
      !w && v == null && W(
        y,
        f,
        $,
        A,
        h,
        m,
        g
      );
    ((M = A.onVnodeUpdated) || S) && Ne(() => {
      M && Fe(M, h, f, a), S && Et(f, a, h, "updated");
    }, m);
  }, V = (a, f, h, m, g, b, w) => {
    for (let y = 0; y < f.length; y++) {
      const N = a[y], v = f[y], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(N, v) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 70) ? d(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      F(
        N,
        v,
        S,
        null,
        m,
        g,
        b,
        w,
        !0
      );
    }
  }, W = (a, f, h, m, g, b, w) => {
    if (h !== m) {
      if (h !== Q)
        for (const y in h)
          !rn(y) && !(y in m) && r(
            a,
            y,
            h[y],
            null,
            w,
            f.children,
            g,
            b,
            Be
          );
      for (const y in m) {
        if (rn(y))
          continue;
        const N = m[y], v = h[y];
        N !== v && y !== "value" && r(
          a,
          y,
          v,
          N,
          w,
          f.children,
          g,
          b,
          Be
        );
      }
      "value" in m && r(a, "value", h.value, m.value, w);
    }
  }, ue = (a, f, h, m, g, b, w, y, N) => {
    const v = f.el = a ? a.el : l(""), S = f.anchor = a ? a.anchor : l("");
    let { patchFlag: $, dynamicChildren: A, slotScopeIds: M } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ct || $ & 2048) && ($ = 0, N = !1, A = null), M && (y = y ? y.concat(M) : M), a == null ? (o(v, h, m), o(S, h, m), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      S,
      g,
      b,
      w,
      y,
      N
    )) : $ > 0 && $ & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (V(
      a.dynamicChildren,
      A,
      h,
      g,
      b,
      w,
      y
    ), process.env.NODE_ENV !== "production" ? xn(a, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || g && f === g.subTree) && xn(
        a,
        f,
        !0
        /* shallow */
      )
    )) : xe(
      a,
      f,
      h,
      S,
      g,
      b,
      w,
      y,
      N
    );
  }, ot = (a, f, h, m, g, b, w, y, N) => {
    f.slotScopeIds = y, a == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      h,
      m,
      w,
      N
    ) : Te(
      f,
      h,
      m,
      g,
      b,
      w,
      N
    ) : me(a, f, N);
  }, Te = (a, f, h, m, g, b, w) => {
    const y = a.component = ja(
      a,
      m,
      g
    );
    if (process.env.NODE_ENV !== "production" && y.type.__hmrId && vc(y), process.env.NODE_ENV !== "production" && (In(a), Ge(y, "mount")), Os(a) && (y.ctx.renderer = Mt), process.env.NODE_ENV !== "production" && Ge(y, "init"), La(y), process.env.NODE_ENV !== "production" && Ke(y, "init"), y.asyncDep) {
      if (g && g.registerDep(y, L, w), !a.el) {
        const N = y.subTree = ye(De);
        J(null, N, f, h);
      }
    } else
      L(
        y,
        a,
        f,
        h,
        g,
        b,
        w
      );
    process.env.NODE_ENV !== "production" && (Tn(), Ke(y, "mount"));
  }, me = (a, f, h) => {
    const m = f.component = a.component;
    if (Rc(a, f, h))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && In(f), x(m, f, h), process.env.NODE_ENV !== "production" && Tn();
        return;
      } else
        m.next = f, mc(m.update), m.effect.dirty = !0, m.update();
    else
      f.el = a.el, m.vnode = f;
  }, L = (a, f, h, m, g, b, w) => {
    const y = () => {
      if (a.isMounted) {
        let { next: S, bu: $, u: A, parent: M, vnode: k } = a;
        {
          const Lt = Ti(a);
          if (Lt) {
            S && (S.el = k.el, x(a, S, w)), Lt.asyncDep.then(() => {
              a.isUnmounted || y();
            });
            return;
          }
        }
        let ee = S, z;
        process.env.NODE_ENV !== "production" && In(S || a.vnode), bt(a, !1), S ? (S.el = k.el, x(a, S, w)) : S = k, $ && Ut($), (z = S.props && S.props.onVnodeBeforeUpdate) && Fe(z, M, S, k), bt(a, !0), process.env.NODE_ENV !== "production" && Ge(a, "render");
        const fe = Do(a);
        process.env.NODE_ENV !== "production" && Ke(a, "render");
        const Se = a.subTree;
        a.subTree = fe, process.env.NODE_ENV !== "production" && Ge(a, "patch"), F(
          Se,
          fe,
          // parent may have changed if it's in a teleport
          d(Se.el),
          // anchor may have changed if it's in a fragment
          Nn(Se),
          a,
          g,
          b
        ), process.env.NODE_ENV !== "production" && Ke(a, "patch"), S.el = fe.el, ee === null && Fc(a, fe.el), A && Ne(A, g), (z = S.props && S.props.onVnodeUpdated) && Ne(
          () => Fe(z, M, S, k),
          g
        ), process.env.NODE_ENV !== "production" && fi(a), process.env.NODE_ENV !== "production" && Tn();
      } else {
        let S;
        const { el: $, props: A } = f, { bm: M, m: k, parent: ee } = a, z = cn(f);
        if (bt(a, !1), M && Ut(M), !z && (S = A && A.onVnodeBeforeMount) && Fe(S, ee, f), bt(a, !0), $ && bo) {
          const fe = () => {
            process.env.NODE_ENV !== "production" && Ge(a, "render"), a.subTree = Do(a), process.env.NODE_ENV !== "production" && Ke(a, "render"), process.env.NODE_ENV !== "production" && Ge(a, "hydrate"), bo(
              $,
              a.subTree,
              a,
              g,
              null
            ), process.env.NODE_ENV !== "production" && Ke(a, "hydrate");
          };
          z ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !a.isUnmounted && fe()
          ) : fe();
        } else {
          process.env.NODE_ENV !== "production" && Ge(a, "render");
          const fe = a.subTree = Do(a);
          process.env.NODE_ENV !== "production" && Ke(a, "render"), process.env.NODE_ENV !== "production" && Ge(a, "patch"), F(
            null,
            fe,
            h,
            m,
            a,
            g,
            b
          ), process.env.NODE_ENV !== "production" && Ke(a, "patch"), f.el = fe.el;
        }
        if (k && Ne(k, g), !z && (S = A && A.onVnodeMounted)) {
          const fe = f;
          Ne(
            () => Fe(S, ee, fe),
            g
          );
        }
        (f.shapeFlag & 256 || ee && cn(ee.vnode) && ee.vnode.shapeFlag & 256) && a.a && Ne(a.a, g), a.isMounted = !0, process.env.NODE_ENV !== "production" && wc(a), f = h = m = null;
      }
    }, N = a.effect = new as(
      y,
      le,
      () => lo(v),
      a.scope
      // track it in component's effect scope
    ), v = a.update = () => {
      N.dirty && N.run();
    };
    v.id = a.uid, bt(a, !0), process.env.NODE_ENV !== "production" && (N.onTrack = a.rtc ? (S) => Ut(a.rtc, S) : void 0, N.onTrigger = a.rtg ? (S) => Ut(a.rtg, S) : void 0, v.ownerInstance = a), v();
  }, x = (a, f, h) => {
    f.component = a;
    const m = a.vnode.props;
    a.vnode = f, a.next = null, ua(a, f.props, m, h), va(a, f.children, h), Xe(), Bs(a), Ze();
  }, xe = (a, f, h, m, g, b, w, y, N = !1) => {
    const v = a && a.children, S = a ? a.shapeFlag : 0, $ = f.children, { patchFlag: A, shapeFlag: M } = f;
    if (A > 0) {
      if (A & 128) {
        Yt(
          v,
          $,
          h,
          m,
          g,
          b,
          w,
          y,
          N
        );
        return;
      } else if (A & 256) {
        go(
          v,
          $,
          h,
          m,
          g,
          b,
          w,
          y,
          N
        );
        return;
      }
    }
    M & 8 ? (S & 16 && Be(v, g, b), $ !== v && p(h, $)) : S & 16 ? M & 16 ? Yt(
      v,
      $,
      h,
      m,
      g,
      b,
      w,
      y,
      N
    ) : Be(v, g, b, !0) : (S & 8 && p(h, ""), M & 16 && Z(
      $,
      h,
      m,
      g,
      b,
      w,
      y,
      N
    ));
  }, go = (a, f, h, m, g, b, w, y, N) => {
    a = a || Gt, f = f || Gt;
    const v = a.length, S = f.length, $ = Math.min(v, S);
    let A;
    for (A = 0; A < $; A++) {
      const M = f[A] = N ? lt(f[A]) : Pe(f[A]);
      F(
        a[A],
        M,
        h,
        null,
        g,
        b,
        w,
        y,
        N
      );
    }
    v > S ? Be(
      a,
      g,
      b,
      !0,
      !1,
      $
    ) : Z(
      f,
      h,
      m,
      g,
      b,
      w,
      y,
      N,
      $
    );
  }, Yt = (a, f, h, m, g, b, w, y, N) => {
    let v = 0;
    const S = f.length;
    let $ = a.length - 1, A = S - 1;
    for (; v <= $ && v <= A; ) {
      const M = a[v], k = f[v] = N ? lt(f[v]) : Pe(f[v]);
      if (Zt(M, k))
        F(
          M,
          k,
          h,
          null,
          g,
          b,
          w,
          y,
          N
        );
      else
        break;
      v++;
    }
    for (; v <= $ && v <= A; ) {
      const M = a[$], k = f[A] = N ? lt(f[A]) : Pe(f[A]);
      if (Zt(M, k))
        F(
          M,
          k,
          h,
          null,
          g,
          b,
          w,
          y,
          N
        );
      else
        break;
      $--, A--;
    }
    if (v > $) {
      if (v <= A) {
        const M = A + 1, k = M < S ? f[M].el : m;
        for (; v <= A; )
          F(
            null,
            f[v] = N ? lt(f[v]) : Pe(f[v]),
            h,
            k,
            g,
            b,
            w,
            y,
            N
          ), v++;
      }
    } else if (v > A)
      for (; v <= $; )
        st(a[v], g, b, !0), v++;
    else {
      const M = v, k = v, ee = /* @__PURE__ */ new Map();
      for (v = k; v <= A; v++) {
        const Ee = f[v] = N ? lt(f[v]) : Pe(f[v]);
        Ee.key != null && (process.env.NODE_ENV !== "production" && ee.has(Ee.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), ee.set(Ee.key, v));
      }
      let z, fe = 0;
      const Se = A - k + 1;
      let Lt = !1, Cs = 0;
      const Qt = new Array(Se);
      for (v = 0; v < Se; v++)
        Qt[v] = 0;
      for (v = M; v <= $; v++) {
        const Ee = a[v];
        if (fe >= Se) {
          st(Ee, g, b, !0);
          continue;
        }
        let Re;
        if (Ee.key != null)
          Re = ee.get(Ee.key);
        else
          for (z = k; z <= A; z++)
            if (Qt[z - k] === 0 && Zt(Ee, f[z])) {
              Re = z;
              break;
            }
        Re === void 0 ? st(Ee, g, b, !0) : (Qt[Re - k] = v + 1, Re >= Cs ? Cs = Re : Lt = !0, F(
          Ee,
          f[Re],
          h,
          null,
          g,
          b,
          w,
          y,
          N
        ), fe++);
      }
      const Is = Lt ? Oa(Qt) : Gt;
      for (z = Is.length - 1, v = Se - 1; v >= 0; v--) {
        const Ee = k + v, Re = f[Ee], Ts = Ee + 1 < S ? f[Ee + 1].el : m;
        Qt[v] === 0 ? F(
          null,
          Re,
          h,
          Ts,
          g,
          b,
          w,
          y,
          N
        ) : Lt && (z < 0 || v !== Is[z] ? jt(Re, h, Ts, 2) : z--);
      }
    }
  }, jt = (a, f, h, m, g = null) => {
    const { el: b, type: w, transition: y, children: N, shapeFlag: v } = a;
    if (v & 6) {
      jt(a.component.subTree, f, h, m);
      return;
    }
    if (v & 128) {
      a.suspense.move(f, h, m);
      return;
    }
    if (v & 64) {
      w.move(a, f, h, Mt);
      return;
    }
    if (w === re) {
      o(b, f, h);
      for (let $ = 0; $ < N.length; $++)
        jt(N[$], f, h, m);
      o(a.anchor, f, h);
      return;
    }
    if (w === Rn) {
      G(a, f, h);
      return;
    }
    if (m !== 2 && v & 1 && y)
      if (m === 0)
        y.beforeEnter(b), o(b, f, h), Ne(() => y.enter(b), g);
      else {
        const { leave: $, delayLeave: A, afterLeave: M } = y, k = () => o(b, f, h), ee = () => {
          $(b, () => {
            k(), M && M();
          });
        };
        A ? A(b, k, ee) : ee();
      }
    else
      o(b, f, h);
  }, st = (a, f, h, m = !1, g = !1) => {
    const {
      type: b,
      props: w,
      ref: y,
      children: N,
      dynamicChildren: v,
      shapeFlag: S,
      patchFlag: $,
      dirs: A,
      memoIndex: M
    } = a;
    if ($ === -2 && (g = !1), y != null && qo(y, null, h, a, !0), M != null && (f.renderCache[M] = void 0), S & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const k = S & 1 && A, ee = !cn(a);
    let z;
    if (ee && (z = w && w.onVnodeBeforeUnmount) && Fe(z, f, a), S & 6)
      _l(a.component, h, m);
    else {
      if (S & 128) {
        a.suspense.unmount(h, m);
        return;
      }
      k && Et(a, null, f, "beforeUnmount"), S & 64 ? a.type.remove(
        a,
        f,
        h,
        Mt,
        m
      ) : v && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== re || $ > 0 && $ & 64) ? Be(
        v,
        f,
        h,
        !1,
        !0
      ) : (b === re && $ & 384 || !g && S & 16) && Be(N, f, h), m && vo(a);
    }
    (ee && (z = w && w.onVnodeUnmounted) || k) && Ne(() => {
      z && Fe(z, f, a), k && Et(a, null, f, "unmounted");
    }, h);
  }, vo = (a) => {
    const { type: f, el: h, anchor: m, transition: g } = a;
    if (f === re) {
      process.env.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && g && !g.persisted ? a.children.forEach((w) => {
        w.type === De ? s(w.el) : vo(w);
      }) : hl(h, m);
      return;
    }
    if (f === Rn) {
      K(a);
      return;
    }
    const b = () => {
      s(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (a.shapeFlag & 1 && g && !g.persisted) {
      const { leave: w, delayLeave: y } = g, N = () => w(h, b);
      y ? y(a.el, b, N) : N();
    } else
      b();
  }, hl = (a, f) => {
    let h;
    for (; a !== f; )
      h = _(a), s(a), a = h;
    s(f);
  }, _l = (a, f, h) => {
    process.env.NODE_ENV !== "production" && a.type.__hmrId && yc(a);
    const { bum: m, scope: g, update: b, subTree: w, um: y, m: N, a: v } = a;
    or(N), or(v), m && Ut(m), g.stop(), b && (b.active = !1, st(w, a, f, h)), y && Ne(y, f), Ne(() => {
      a.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Sc(a);
  }, Be = (a, f, h, m = !1, g = !1, b = 0) => {
    for (let w = b; w < a.length; w++)
      st(a[w], f, h, m, g);
  }, Nn = (a) => a.shapeFlag & 6 ? Nn(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : _(a.anchor || a.el);
  let yo = !1;
  const $s = (a, f, h) => {
    a == null ? f._vnode && st(f._vnode, null, null, !0) : F(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      h
    ), yo || (yo = !0, Bs(), ci(), yo = !1), f._vnode = a;
  }, Mt = {
    p: F,
    um: st,
    m: jt,
    r: vo,
    mt: Te,
    mc: Z,
    pc: xe,
    pbc: V,
    n: Nn,
    o: e
  };
  let Eo, bo;
  return t && ([Eo, bo] = t(
    Mt
  )), {
    render: $s,
    hydrate: Eo,
    createApp: ra($s, Eo)
  };
}
function Vo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Na(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (C(o) && C(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = lt(s[r]), l.el = i.el), !n && l.patchFlag !== -2 && xn(i, l)), l.type === En && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === De && !l.el && (l.el = i.el);
    }
}
function Oa(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const u = e[o];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < u ? r = l + 1 : i = l;
      u < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Ti(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ti(t);
}
function or(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].active = !1;
}
const wa = Symbol.for("v-scx"), Da = () => {
  {
    const e = an(wa);
    return e || process.env.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Pn = {};
function qt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !I(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xi(e, t, n);
}
function xi(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: i,
  onTrigger: l
} = Q) {
  if (t && r) {
    const E = t;
    t = (...te) => {
      E(...te), B();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && O(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (E) => {
    O(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = ae, p = (E) => o === !0 ? E : (
    // for deep: false, only traverse root-level properties
    at(E, o === !1 ? 1 : void 0)
  );
  let d, _ = !1, D = !1;
  if (ne(e) ? (d = () => e.value, _ = At(e)) : qe(e) ? (d = () => p(e), _ = !0) : C(e) ? (D = !0, _ = e.some((E) => qe(E) || At(E)), d = () => e.map((E) => {
    if (ne(E))
      return E.value;
    if (qe(E))
      return p(E);
    if (I(E))
      return ze(E, u, 2);
    process.env.NODE_ENV !== "production" && c(E);
  })) : I(e) ? t ? d = () => ze(e, u, 2) : d = () => (T && T(), Ie(
    e,
    u,
    3,
    [F]
  )) : (d = le, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const E = d;
    d = () => at(E());
  }
  let T, F = (E) => {
    T = G.onStop = () => {
      ze(E, u, 4), T = G.onStop = void 0;
    };
  }, he;
  if (po)
    if (F = le, t ? n && Ie(t, u, 3, [
      d(),
      D ? [] : void 0,
      F
    ]) : d(), s === "sync") {
      const E = Da();
      he = E.__watcherHandles || (E.__watcherHandles = []);
    } else
      return le;
  let J = D ? new Array(e.length).fill(Pn) : Pn;
  const j = () => {
    if (!(!G.active || !G.dirty))
      if (t) {
        const E = G.run();
        (o || _ || (D ? E.some((te, Z) => mt(te, J[Z])) : mt(E, J))) && (T && T(), Ie(t, u, 3, [
          E,
          // pass undefined as the old value when it's changed for the first time
          J === Pn ? void 0 : D && J[0] === Pn ? [] : J,
          F
        ]), J = E);
      } else
        G.run();
  };
  j.allowRecurse = !!t;
  let U;
  s === "sync" ? U = j : s === "post" ? U = () => Ne(j, u && u.suspense) : (j.pre = !0, u && (j.id = u.uid), U = () => lo(j));
  const G = new as(d, le, U), K = jr(), B = () => {
    G.stop(), K && os(K.effects, G);
  };
  return process.env.NODE_ENV !== "production" && (G.onTrack = i, G.onTrigger = l), t ? n ? j() : J = G.run() : s === "post" ? Ne(
    G.run.bind(G),
    u && u.suspense
  ) : G.run(), he && he.push(B), B;
}
function Sa(e, t, n) {
  const o = this.proxy, s = se(e) ? e.includes(".") ? Ri(o, e) : () => o[e] : e.bind(o, o);
  let r;
  I(t) ? r = t : (r = t.handler, n = t);
  const i = bn(this), l = xi(s, r.bind(o), n);
  return i(), l;
}
function Ri(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function at(e, t = 1 / 0, n) {
  if (t <= 0 || !Y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ne(e))
    at(e.value, t, n);
  else if (C(e))
    for (let o = 0; o < e.length; o++)
      at(e[o], t, n);
  else if (Ar(e) || St(e))
    e.forEach((o) => {
      at(o, t, n);
    });
  else if (Cr(e)) {
    for (const o in e)
      at(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && at(e[o], t, n);
  }
  return e;
}
const Os = (e) => e.type.__isKeepAlive;
function Va(e, t) {
  Fi(e, "a", t);
}
function Pa(e, t) {
  Fi(e, "da", t);
}
function Fi(e, t, n = ae) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (uo(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Os(s.parent.vnode) && Aa(o, t, n, s), s = s.parent;
  }
}
function Aa(e, t, n, o) {
  const s = uo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  gi(() => {
    os(o[t], s);
  }, n);
}
function ji(e, t) {
  e.shapeFlag & 6 && e.component ? ji(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const $a = (e) => e.__isTeleport, re = Symbol.for("v-fgt"), En = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), Rn = Symbol.for("v-stc"), un = [];
let $e = null;
function q(e = !1) {
  un.push($e = e ? null : []);
}
function Ca() {
  un.pop(), $e = un[un.length - 1] || null;
}
let _n = 1;
function sr(e) {
  _n += e;
}
function Mi(e) {
  return e.dynamicChildren = _n > 0 ? $e || Gt : null, Ca(), _n > 0 && $e && $e.push(e), e;
}
function X(e, t, n, o, s, r) {
  return Mi(
    ie(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function ws(e, t, n, o, s) {
  return Mi(
    ye(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function fo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Ot.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Ia = (...e) => ki(
  ...e
), Li = ({ key: e }) => e ?? null, Fn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || ne(e) || I(e) ? { i: ce, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, o = 0, s = null, r = e === re ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Li(t),
    ref: t && Fn(t),
    scopeId: ao,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return l ? (Ss(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && O("VNode created with invalid key (NaN). VNode type:", c.type), _n > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && $e.push(c), c;
}
const ye = process.env.NODE_ENV !== "production" ? Ia : ki;
function ki(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === _i) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = De), fo(e)) {
    const l = vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ss(l, n), _n > 0 && !r && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (Ki(e) && (e = e.__vccOpts), t) {
    t = Ta(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = zt(l)), Y(c) && (Wn(c) && !C(c) && (c = oe({}, c)), t.style = cs(c));
  }
  const i = se(e) ? 1 : Mc(e) ? 128 : $a(e) ? 64 : Y(e) ? 4 : I(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Wn(e) && (e = R(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ie(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function Ta(e) {
  return e ? Wn(e) || Si(e) ? oe({}, e) : e : null;
}
function vt(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: c } = e, u = t ? xa(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Li(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(Fn(t)) : [r, Fn(t)] : Fn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && C(l) ? l.map(Hi) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== re ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && vt(e.ssContent),
    ssFallback: e.ssFallback && vt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && ji(
    p,
    c.clone(p)
  ), p;
}
function Hi(e) {
  const t = vt(e);
  return C(e.children) && (t.children = e.children.map(Hi)), t;
}
function Ds(e = " ", t = 0) {
  return ye(En, null, e, t);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? ye(De) : C(e) ? ye(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? lt(e) : ye(En, null, String(e));
}
function lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vt(e);
}
function Ss(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ss(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Si(t) ? t._ctx = ce : s === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    I(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ds(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function xa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = zt([t.class, o.class]));
      else if (s === "style")
        t.style = cs([t.style, o.style]);
      else if (gn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(C(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Fe(e, t, n, o = null) {
  Ie(e, t, 7, [
    n,
    o
  ]);
}
const Ra = Oi();
let Fa = 0;
function ja(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Ra, r = {
    uid: Fa++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Rr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Pi(o, s),
    emitsOptions: pi(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = zc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = $c.bind(null, r), e.ce && e.ce(r), r;
}
let ae = null;
const Ui = () => ae || ce;
let Yn, zo;
{
  const e = ls(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ae = n
  ), zo = t(
    "__VUE_SSR_SETTERS__",
    (n) => po = n
  );
}
const bn = (e) => {
  const t = ae;
  return Yn(e), e.scope.on(), () => {
    e.scope.off(), Yn(t);
  };
}, rr = () => {
  ae && ae.scope.off(), Yn(null);
}, Ma = /* @__PURE__ */ Qe("slot,component");
function Yo(e, { isNativeTag: t }) {
  (Ma(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Bi(e) {
  return e.vnode.shapeFlag & 4;
}
let po = !1;
function La(e, t = !1) {
  t && zo(t);
  const { props: n, children: o } = e.vnode, s = Bi(e);
  ca(e, n, s, t), ga(e, o);
  const r = s ? ka(e, t) : void 0;
  return t && zo(!1), r;
}
function ka(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Yo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        Yo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        vi(r[i]);
    }
    o.compilerOptions && Wi() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bi), process.env.NODE_ENV !== "production" && Yc(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ua(e) : null, i = bn(e);
    Xe();
    const l = ze(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
        r
      ]
    );
    if (Ze(), i(), ss(l)) {
      if (l.then(rr, rr), t)
        return l.then((c) => {
          ir(e, c, t);
        }).catch((c) => {
          vn(c, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ir(e, l, t);
  } else
    Gi(e, t);
}
function ir(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (process.env.NODE_ENV !== "production" && fo(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ni(t), process.env.NODE_ENV !== "production" && Qc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Gi(e, n);
}
let Qo;
const Wi = () => !Qo;
function Gi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Qo && !o.render) {
      const s = o.template || bs(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && Ge(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: c } = o, u = oe(
          oe(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          c
        );
        o.render = Qo(s, u), process.env.NODE_ENV !== "production" && Ke(e, "compile");
      }
    }
    e.render = o.render || le;
  }
  {
    const s = bn(e);
    Xe();
    try {
      Zc(e);
    } finally {
      Ze(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === le && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const lr = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Kn(), _e(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return _e(e, "get", ""), e[t];
  }
};
function Ha(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return _e(e, "get", "$slots"), t[n];
    }
  }));
}
function Ua(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : ne(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, lr));
      },
      get slots() {
        return Ha(e);
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, lr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function ho(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ni(ut(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in It)
        return It[n](e);
    },
    has(t, n) {
      return n in t || n in It;
    }
  })) : e.proxy;
}
const Ba = /(?:^|[-_])(\w)/g, Wa = (e) => e.replace(Ba, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vs(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _o(e, t, n = !1) {
  let o = Vs(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Wa(o) : n ? "App" : "Anonymous";
}
function Ki(e) {
  return I(e) && "__vccOpts" in e;
}
const Ye = (e, t) => {
  const n = oc(e, t, po);
  if (process.env.NODE_ENV !== "production") {
    const o = Ui();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ga() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    header(d) {
      return Y(d) ? d.__isVue ? ["div", e, "VueInstance"] : ne(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        l(d.value),
        ">"
      ] : qe(d) ? [
        "div",
        {},
        ["span", e, At(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${xt(d) ? " (readonly)" : ""}`
      ] : xt(d) ? [
        "div",
        {},
        ["span", e, At(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const _ = [];
    d.type.props && d.props && _.push(i("props", R(d.props))), d.setupState !== Q && _.push(i("setup", d.setupState)), d.data !== Q && _.push(i("data", R(d.data)));
    const D = c(d, "computed");
    D && _.push(i("computed", D));
    const T = c(d, "inject");
    return T && _.push(i("injected", T)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), _;
  }
  function i(d, _) {
    return _ = oe({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          l(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, _ = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : Y(d) ? ["object", { object: _ ? R(d) : d }] : ["span", n, String(d)];
  }
  function c(d, _) {
    const D = d.type;
    if (I(D))
      return;
    const T = {};
    for (const F in d.ctx)
      u(D, F, _) && (T[F] = d.ctx[F]);
    return T;
  }
  function u(d, _, D) {
    const T = d[D];
    if (C(T) && T.includes(_) || Y(T) && _ in T || d.extends && u(d.extends, _, D) || d.mixins && d.mixins.some((F) => u(F, _, D)))
      return !0;
  }
  function p(d) {
    return At(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const cr = "3.4.31", ht = process.env.NODE_ENV !== "production" ? O : le;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ka = "http://www.w3.org/2000/svg", Ja = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, ar = Je && /* @__PURE__ */ Je.createElement("template"), qa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? Je.createElementNS(Ka, e) : t === "mathml" ? Je.createElementNS(Ja, e) : n ? Je.createElement(e, { is: n }) : Je.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      ar.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const l = ar.content;
      if (o === "svg" || o === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, za = Symbol("_vtc");
function Ya(e, t, n) {
  const o = e[za];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qn = Symbol("_vod"), Ji = Symbol("_vsh"), Xo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Qn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : en(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), en(e, !0), o.enter(e)) : o.leave(e, () => {
      en(e, !1);
    }) : en(e, t));
  },
  beforeUnmount(e, { value: t }) {
    en(e, t);
  }
};
process.env.NODE_ENV !== "production" && (Xo.name = "show");
function en(e, t) {
  e.style.display = t ? e[Qn] : "none", e[Ji] = !t;
}
const Qa = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Xa = /(^|;)\s*display\s*:/;
function Za(e, t, n) {
  const o = e.style, s = se(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (se(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && jn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && jn(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), jn(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[Qa];
      i && (n += ";" + i), o.cssText = n, r = Xa.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Qn in e && (e[Qn] = r ? o.display : "", e[Ji] && (o.display = "none"));
}
const eu = /[^\\];\s*$/, ur = /\s*!important$/;
function jn(e, t, n) {
  if (C(n))
    n.forEach((o) => jn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && eu.test(n) && ht(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = tu(e, t);
    ur.test(n) ? e.setProperty(
      _t(o),
      n.replace(ur, ""),
      "important"
    ) : e[o] = n;
  }
}
const fr = ["Webkit", "Moz", "ms"], Po = {};
function tu(e, t) {
  const n = Po[t];
  if (n)
    return n;
  let o = He(t);
  if (o !== "filter" && o in e)
    return Po[t] = o;
  o = Tt(o);
  for (let s = 0; s < fr.length; s++) {
    const r = fr[s] + o;
    if (r in e)
      return Po[t] = r;
  }
  return t;
}
const dr = "http://www.w3.org/1999/xlink";
function pr(e, t, n, o, s, r = Il(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(dr, t.slice(6, t.length)) : e.setAttributeNS(dr, t, n) : n == null || r && !Ir(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : yt(n) ? String(n) : n
  );
}
function nu(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const u = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? "" : String(n);
    (u !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Ir(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !c && ht(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      u
    );
  }
  c && e.removeAttribute(t);
}
function Bt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ou(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const hr = Symbol("_vei");
function su(e, t, n, o, s = null) {
  const r = e[hr] || (e[hr] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? mr(o, t) : o;
  else {
    const [l, c] = ru(t);
    if (o) {
      const u = r[t] = cu(
        process.env.NODE_ENV !== "production" ? mr(o, t) : o,
        s
      );
      Bt(e, l, u, c);
    } else
      i && (ou(e, l, i, c), r[t] = void 0);
  }
}
const _r = /(?:Once|Passive|Capture)$/;
function ru(e) {
  let t;
  if (_r.test(e)) {
    t = {};
    let o;
    for (; o = e.match(_r); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _t(e.slice(2)), t];
}
let Ao = 0;
const iu = /* @__PURE__ */ Promise.resolve(), lu = () => Ao || (iu.then(() => Ao = 0), Ao = Date.now());
function cu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ie(
      au(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = lu(), n;
}
function mr(e, t) {
  return I(e) || C(e) ? e : (ht(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), le);
}
function au(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const gr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uu = (e, t, n, o, s, r, i, l, c) => {
  const u = s === "svg";
  t === "class" ? Ya(e, o, u) : t === "style" ? Za(e, n, o) : gn(t) ? Hn(t) || su(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fu(e, t, o, u)) ? (nu(
    e,
    t,
    o,
    r,
    i,
    l,
    c
  ), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pr(e, t, o, u, i, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), pr(e, t, o, u));
};
function fu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gr(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return gr(t) && se(n) ? !1 : t in e;
}
const vr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => Ut(t, n) : t;
};
function du(e) {
  e.target.composing = !0;
}
function yr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const $o = Symbol("_assign"), pu = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
    e[$o] = vr(s);
    const r = o || s.props && s.props.type === "number";
    Bt(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), r && (l = To(l)), e[$o](l);
    }), n && Bt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Bt(e, "compositionstart", du), Bt(e, "compositionend", yr), Bt(e, "change", yr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: s, number: r } }, i) {
    if (e[$o] = vr(i), e.composing)
      return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? To(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (o && t === n || s && e.value.trim() === c) || (e.value = c));
  }
}, hu = /* @__PURE__ */ oe({ patchProp: uu }, qa);
let Er;
function _u() {
  return Er || (Er = Ea(hu));
}
const mu = (...e) => {
  const t = _u().createApp(...e);
  process.env.NODE_ENV !== "production" && (vu(t), yu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Eu(o);
    if (!s)
      return;
    const r = t._component;
    !I(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, gu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function gu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function vu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Pl(t) || Al(t) || $l(t),
    writable: !1
  });
}
function yu(e) {
  if (Wi()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ht(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ht(o), n;
      },
      set() {
        ht(o);
      }
    });
  }
}
function Eu(e) {
  if (se(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ht(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ht(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bu() {
  Ga();
}
process.env.NODE_ENV !== "production" && bu();
var qi = !1;
function An(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Co(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Nu() {
  return zi().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zi() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ou = typeof Proxy == "function", wu = "devtools-plugin:setup", Du = "plugin:settings:set";
let kt, Zo;
function Su() {
  var e;
  return kt !== void 0 || (typeof window < "u" && window.performance ? (kt = !0, Zo = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (kt = !0, Zo = globalThis.perf_hooks.performance) : kt = !1), kt;
}
function Vu() {
  return Su() ? Zo.now() : Date.now();
}
class Pu {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        o[i] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let r = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), l = JSON.parse(i);
      Object.assign(r, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch {
        }
        r = i;
      },
      now() {
        return Vu();
      }
    }, n && n.on(Du, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({
          method: l,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({
        method: l,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[l](...c)) : (...c) => new Promise((u) => {
        this.targetQueue.push({
          method: l,
          args: c,
          resolve: u
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Yi(e, t) {
  const n = e, o = zi(), s = Nu(), r = Ou && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    s.emit(wu, e, t);
  else {
    const i = r ? new Pu(n, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let sn;
const mn = (e) => sn = e, Qi = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Ft(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ke;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ke || (ke = {}));
const mo = typeof window < "u", fn = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && mo, br = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Au(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function Ps(e, t, n) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    el(o.response, t, n);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function Xi(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Mn(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Ln = typeof navigator == "object" ? navigator : { userAgent: "" }, Zi = /* @__PURE__ */ (() => /Macintosh/.test(Ln.userAgent) && /AppleWebKit/.test(Ln.userAgent) && !/Safari/.test(Ln.userAgent))(), el = mo ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Zi ? $u : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ln ? Cu : (
      // Fallback to using FileReader and a popup
      Iu
    )
  )
) : () => {
};
function $u(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? Xi(o.href) ? Ps(e, t, n) : (o.target = "_blank", Mn(o)) : Mn(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    Mn(o);
  }, 0));
}
function Cu(e, t = "download", n) {
  if (typeof e == "string")
    if (Xi(e))
      Ps(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        Mn(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Au(e, n), t);
}
function Iu(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Ps(e, t, n);
  const s = e.type === "application/octet-stream", r = /constructor/i.test(String(br.HTMLElement)) || "safari" in br, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || s && r || Zi) && typeof FileReader < "u") {
    const l = new FileReader();
    l.onloadend = function() {
      let c = l.result;
      if (typeof c != "string")
        throw o = null, new Error("Wrong reader.result type");
      c = i ? c : c.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = c : location.assign(c), o = null;
    }, l.readAsDataURL(e);
  } else {
    const l = URL.createObjectURL(e);
    o ? o.location.assign(l) : location.href = l, o = null, setTimeout(function() {
      URL.revokeObjectURL(l);
    }, 4e4);
  }
}
function pe(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function As(e) {
  return "_a" in e && "install" in e;
}
function tl() {
  if (!("clipboard" in navigator))
    return pe("Your browser doesn't support the Clipboard API", "error"), !0;
}
function nl(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (pe('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Tu(e) {
  if (!tl())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), pe("Global state copied to clipboard.");
    } catch (t) {
      if (nl(t))
        return;
      pe("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function xu(e) {
  if (!tl())
    try {
      ol(e, JSON.parse(await navigator.clipboard.readText())), pe("Global state pasted from clipboard.");
    } catch (t) {
      if (nl(t))
        return;
      pe("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Ru(e) {
  try {
    el(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    pe("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let We;
function Fu() {
  We || (We = document.createElement("input"), We.type = "file", We.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      We.onchange = async () => {
        const o = We.files;
        if (!o)
          return t(null);
        const s = o.item(0);
        return t(s ? { text: await s.text(), file: s } : null);
      }, We.oncancel = () => t(null), We.onerror = n, We.click();
    });
  }
  return e;
}
async function ju(e) {
  try {
    const n = await Fu()();
    if (!n)
      return;
    const { text: o, file: s } = n;
    ol(e, JSON.parse(o)), pe(`Global state imported from "${s.name}".`);
  } catch (t) {
    pe("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function ol(e, t) {
  for (const n in t) {
    const o = e.state.value[n];
    o ? Object.assign(o, t[n]) : e.state.value[n] = t[n];
  }
}
function Ve(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const sl = "🍍 Pinia (root)", es = "_root";
function Mu(e) {
  return As(e) ? {
    id: es,
    label: sl
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Lu(e) {
  if (As(e)) {
    const n = Array.from(e._s.keys()), o = e._s;
    return {
      state: n.map((r) => ({
        editable: !0,
        key: r,
        value: e.state.value[r]
      })),
      getters: n.filter((r) => o.get(r)._getters).map((r) => {
        const i = o.get(r);
        return {
          editable: !1,
          key: r,
          value: i._getters.reduce((l, c) => (l[c] = i[c], l), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function ku(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Ve(e.type),
    key: Ve(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Hu(e) {
  switch (e) {
    case ke.direct:
      return "mutation";
    case ke.patchFunction:
      return "$patch";
    case ke.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Wt = !0;
const kn = [], wt = "pinia:mutations", ge = "pinia", { assign: Uu } = Object, Xn = (e) => "🍍 " + e;
function Bu(e, t) {
  Yi({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: kn,
    app: e
  }, (n) => {
    typeof n.now != "function" && pe("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: wt,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: ge,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Tu(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await xu(t), n.sendInspectorTree(ge), n.sendInspectorState(ge);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Ru(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await ju(t), n.sendInspectorTree(ge), n.sendInspectorState(ge);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const s = t._s.get(o);
            s ? typeof s.$reset != "function" ? pe(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (s.$reset(), pe(`Store "${o}" reset.`)) : pe(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((o, s) => {
      const r = o.componentInstance && o.componentInstance.proxy;
      if (r && r._pStores) {
        const i = o.componentInstance.proxy._pStores;
        Object.values(i).forEach((l) => {
          o.instanceData.state.push({
            type: Xn(l.$id),
            key: "state",
            editable: !0,
            value: l._isOptionsAPI ? {
              _custom: {
                value: R(l.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => l.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(l.$state).reduce((c, u) => (c[u] = l.$state[u], c), {})
            )
          }), l._getters && l._getters.length && o.instanceData.state.push({
            type: Xn(l.$id),
            key: "getters",
            editable: !1,
            value: l._getters.reduce((c, u) => {
              try {
                c[u] = l[u];
              } catch (p) {
                c[u] = p;
              }
              return c;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === ge) {
        let s = [t];
        s = s.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? s.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(o.filter.toLowerCase()) : sl.toLowerCase().includes(o.filter.toLowerCase())) : s).map(Mu);
      }
    }), n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === ge) {
        const s = o.nodeId === es ? t : t._s.get(o.nodeId);
        if (!s)
          return;
        s && (o.state = Lu(s));
      }
    }), n.on.editInspectorState((o, s) => {
      if (o.app === e && o.inspectorId === ge) {
        const r = o.nodeId === es ? t : t._s.get(o.nodeId);
        if (!r)
          return pe(`store "${o.nodeId}" not found`, "error");
        const { path: i } = o;
        As(r) ? i.unshift("state") : (i.length !== 1 || !r._customProperties.has(i[0]) || i[0] in r.$state) && i.unshift("$state"), Wt = !1, o.set(r, i, o.state.value), Wt = !0;
      }
    }), n.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const s = o.type.replace(/^🍍\s*/, ""), r = t._s.get(s);
        if (!r)
          return pe(`store "${s}" not found`, "error");
        const { path: i } = o;
        if (i[0] !== "state")
          return pe(`Invalid path for store "${s}":
${i}
Only state can be modified.`);
        i[0] = "$state", Wt = !1, o.set(r, i, o.state.value), Wt = !0;
      }
    });
  });
}
function Wu(e, t) {
  kn.includes(Xn(t.$id)) || kn.push(Xn(t.$id)), Yi({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: kn,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const o = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: i, onError: l, name: c, args: u }) => {
      const p = rl++;
      n.addTimelineEvent({
        layerId: wt,
        event: {
          time: o(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: Ve(t.$id),
            action: Ve(c),
            args: u
          },
          groupId: p
        }
      }), i((d) => {
        ft = void 0, n.addTimelineEvent({
          layerId: wt,
          event: {
            time: o(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: Ve(t.$id),
              action: Ve(c),
              args: u,
              result: d
            },
            groupId: p
          }
        });
      }), l((d) => {
        ft = void 0, n.addTimelineEvent({
          layerId: wt,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: Ve(t.$id),
              action: Ve(c),
              args: u,
              error: d
            },
            groupId: p
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      qt(() => ti(t[i]), (l, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(ge), Wt && n.addTimelineEvent({
          layerId: wt,
          event: {
            time: o(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: l,
              oldValue: c
            },
            groupId: ft
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: l }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(ge), !Wt)
        return;
      const u = {
        time: o(),
        title: Hu(l),
        data: Uu({ store: Ve(t.$id) }, ku(i)),
        groupId: ft
      };
      l === ke.patchFunction ? u.subtitle = "⤵️" : l === ke.patchObject ? u.subtitle = "🧩" : i && !Array.isArray(i) && (u.subtitle = i.type), i && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: wt,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const s = t._hotUpdate;
    t._hotUpdate = ut((i) => {
      s(i), n.addTimelineEvent({
        layerId: wt,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Ve(t.$id),
            info: Ve("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(ge), n.sendInspectorState(ge);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(ge), n.sendInspectorState(ge), n.getSettings().logStoreChanges && pe(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(ge), n.sendInspectorState(ge), n.getSettings().logStoreChanges && pe(`"${t.$id}" store installed 🆕`);
  });
}
let rl = 0, ft;
function Nr(e, t, n) {
  const o = t.reduce((s, r) => (s[r] = R(e)[r], s), {});
  for (const s in o)
    e[s] = function() {
      const r = rl, i = n ? new Proxy(e, {
        get(...c) {
          return ft = r, Reflect.get(...c);
        },
        set(...c) {
          return ft = r, Reflect.set(...c);
        }
      }) : e;
      ft = r;
      const l = o[s].apply(i, arguments);
      return ft = void 0, l;
    };
}
function Gu({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, Nr(t, Object.keys(n.actions), t._isOptionsAPI);
  const o = t._hotUpdate;
  R(t)._hotUpdate = function(s) {
    o.apply(this, arguments), Nr(t, Object.keys(s._hmrPayload.actions), !!t._isOptionsAPI);
  }, Wu(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Ku() {
  const e = Fr(!0), t = e.run(() => de({}));
  let n = [], o = [];
  const s = ut({
    install(r) {
      mn(s), s._a = r, r.provide(Qi, s), r.config.globalProperties.$pinia = s, fn && Bu(r, s), o.forEach((i) => n.push(i)), o = [];
    },
    use(r) {
      return !this._a && !qi ? o.push(r) : n.push(r), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return fn && typeof Proxy < "u" && s.use(Gu), s;
}
function il(e, t) {
  for (const n in t) {
    const o = t[n];
    if (!(n in e))
      continue;
    const s = e[n];
    Ft(s) && Ft(o) && !ne(o) && !qe(o) ? e[n] = il(s, o) : e[n] = o;
  }
  return e;
}
const ll = () => {
};
function Or(e, t, n, o = ll) {
  e.push(t);
  const s = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), o());
  };
  return !n && jr() && xl(s), s;
}
function Ht(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Ju = (e) => e();
function ts(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], s = e[n];
    Ft(s) && Ft(o) && e.hasOwnProperty(n) && !ne(o) && !qe(o) ? e[n] = ts(s, o) : e[n] = o;
  }
  return e;
}
const qu = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function zu(e) {
  return !Ft(e) || !e.hasOwnProperty(qu);
}
const { assign: we } = Object;
function wr(e) {
  return !!(ne(e) && e.effect);
}
function Dr(e, t, n, o) {
  const { state: s, actions: r, getters: i } = t, l = n.state.value[e];
  let c;
  function u() {
    !l && (process.env.NODE_ENV === "production" || !o) && (n.state.value[e] = s ? s() : {});
    const p = process.env.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Us(de(s ? s() : {}).value)
    ) : Us(n.state.value[e]);
    return we(p, r, Object.keys(i || {}).reduce((d, _) => (process.env.NODE_ENV !== "production" && _ in p && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${_}" in store "${e}".`), d[_] = ut(Ye(() => {
      mn(n);
      const D = n._s.get(e);
      return i[_].call(D, D);
    })), d), {}));
  }
  return c = ns(e, u, t, n, o, !0), c;
}
function ns(e, t, n = {}, o, s, r) {
  let i;
  const l = we({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const c = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !qi && (c.onTrigger = (P) => {
    u ? D = P : u == !1 && !E._hotUpdating && (Array.isArray(D) ? D.push(P) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, p, d = [], _ = [], D;
  const T = o.state.value[e];
  !r && !T && (process.env.NODE_ENV === "production" || !s) && (o.state.value[e] = {});
  const F = de({});
  let he;
  function J(P) {
    let V;
    u = p = !1, process.env.NODE_ENV !== "production" && (D = []), typeof P == "function" ? (P(o.state.value[e]), V = {
      type: ke.patchFunction,
      storeId: e,
      events: D
    }) : (ts(o.state.value[e], P), V = {
      type: ke.patchObject,
      payload: P,
      storeId: e,
      events: D
    });
    const W = he = Symbol();
    Mo().then(() => {
      he === W && (u = !0);
    }), p = !0, Ht(d, V, o.state.value[e]);
  }
  const j = r ? function() {
    const { state: V } = n, W = V ? V() : {};
    this.$patch((ue) => {
      we(ue, W);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : ll
  );
  function U() {
    i.stop(), d = [], _ = [], o._s.delete(e);
  }
  function G(P, V) {
    return function() {
      mn(o);
      const W = Array.from(arguments), ue = [], ot = [];
      function Te(x) {
        ue.push(x);
      }
      function me(x) {
        ot.push(x);
      }
      Ht(_, {
        args: W,
        name: P,
        store: E,
        after: Te,
        onError: me
      });
      let L;
      try {
        L = V.apply(this && this.$id === e ? this : E, W);
      } catch (x) {
        throw Ht(ot, x), x;
      }
      return L instanceof Promise ? L.then((x) => (Ht(ue, x), x)).catch((x) => (Ht(ot, x), Promise.reject(x))) : (Ht(ue, L), L);
    };
  }
  const K = /* @__PURE__ */ ut({
    actions: {},
    getters: {},
    state: [],
    hotState: F
  }), B = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: Or.bind(null, _),
    $patch: J,
    $reset: j,
    $subscribe(P, V = {}) {
      const W = Or(d, P, V.detached, () => ue()), ue = i.run(() => qt(() => o.state.value[e], (ot) => {
        (V.flush === "sync" ? p : u) && P({
          storeId: e,
          type: ke.direct,
          events: D
        }, ot);
      }, we({}, c, V)));
      return W;
    },
    $dispose: U
  }, E = ro(process.env.NODE_ENV !== "production" || fn ? we(
    {
      _hmrPayload: K,
      _customProperties: ut(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    B
    // must be added later
    // setupStore
  ) : B);
  o._s.set(e, E);
  const Z = (o._a && o._a.runWithContext || Ju)(() => o._e.run(() => (i = Fr()).run(t)));
  for (const P in Z) {
    const V = Z[P];
    if (ne(V) && !wr(V) || qe(V))
      process.env.NODE_ENV !== "production" && s ? An(F.value, P, Oo(Z, P)) : r || (T && zu(V) && (ne(V) ? V.value = T[P] : ts(V, T[P])), o.state.value[e][P] = V), process.env.NODE_ENV !== "production" && K.state.push(P);
    else if (typeof V == "function") {
      const W = process.env.NODE_ENV !== "production" && s ? V : G(P, V);
      Z[P] = W, process.env.NODE_ENV !== "production" && (K.actions[P] = V), l.actions[P] = V;
    } else
      process.env.NODE_ENV !== "production" && wr(V) && (K.getters[P] = r ? (
        // @ts-expect-error
        n.getters[P]
      ) : V, mo && (Z._getters || // @ts-expect-error: same
      (Z._getters = ut([]))).push(P));
  }
  if (we(E, Z), we(R(E), Z), Object.defineProperty(E, "$state", {
    get: () => process.env.NODE_ENV !== "production" && s ? F.value : o.state.value[e],
    set: (P) => {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error("cannot set hotState");
      J((V) => {
        we(V, P);
      });
    }
  }), process.env.NODE_ENV !== "production" && (E._hotUpdate = ut((P) => {
    E._hotUpdating = !0, P._hmrPayload.state.forEach((V) => {
      if (V in E.$state) {
        const W = P.$state[V], ue = E.$state[V];
        typeof W == "object" && Ft(W) && Ft(ue) ? il(W, ue) : P.$state[V] = ue;
      }
      An(E, V, Oo(P.$state, V));
    }), Object.keys(E.$state).forEach((V) => {
      V in P.$state || Co(E, V);
    }), u = !1, p = !1, o.state.value[e] = Oo(P._hmrPayload, "hotState"), p = !0, Mo().then(() => {
      u = !0;
    });
    for (const V in P._hmrPayload.actions) {
      const W = P[V];
      An(E, V, G(V, W));
    }
    for (const V in P._hmrPayload.getters) {
      const W = P._hmrPayload.getters[V], ue = r ? (
        // special handling of options api
        Ye(() => (mn(o), W.call(E, E)))
      ) : W;
      An(E, V, ue);
    }
    Object.keys(E._hmrPayload.getters).forEach((V) => {
      V in P._hmrPayload.getters || Co(E, V);
    }), Object.keys(E._hmrPayload.actions).forEach((V) => {
      V in P._hmrPayload.actions || Co(E, V);
    }), E._hmrPayload = P._hmrPayload, E._getters = P._getters, E._hotUpdating = !1;
  })), fn) {
    const P = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((V) => {
      Object.defineProperty(E, V, we({ value: E[V] }, P));
    });
  }
  return o._p.forEach((P) => {
    if (fn) {
      const V = i.run(() => P({
        store: E,
        app: o._a,
        pinia: o,
        options: l
      }));
      Object.keys(V || {}).forEach((W) => E._customProperties.add(W)), we(E, V);
    } else
      we(E, i.run(() => P({
        store: E,
        app: o._a,
        pinia: o,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && E.$state && typeof E.$state == "object" && typeof E.$state.constructor == "function" && !E.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${E.$id}".`), T && r && n.hydrate && n.hydrate(E.$state, T), u = !0, p = !0, E;
}
function Yu(e, t, n) {
  let o, s;
  const r = typeof t == "function";
  if (typeof e == "string")
    o = e, s = r ? n : t;
  else if (s = e, o = e.id, process.env.NODE_ENV !== "production" && typeof o != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function i(l, c) {
    const u = la();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && sn && sn._testing ? null : l) || (u ? an(Qi, null) : null), l && mn(l), process.env.NODE_ENV !== "production" && !sn)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    l = sn, l._s.has(o) || (r ? ns(o, t, s, l) : Dr(o, s, l), process.env.NODE_ENV !== "production" && (i._pinia = l));
    const p = l._s.get(o);
    if (process.env.NODE_ENV !== "production" && c) {
      const d = "__hot:" + o, _ = r ? ns(d, t, s, l, !0) : Dr(d, we({}, s), l, !0);
      c._hotUpdate(_), delete l.state.value[d], l._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && mo) {
      const d = Ui();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !c) {
        const _ = d.proxy, D = "_pStores" in _ ? _._pStores : _._pStores = {};
        D[o] = p;
      }
    }
    return p;
  }
  return i.$id = o, i;
}
const cl = Yu("sidePanel", () => {
  const e = de(!1), t = de(null), n = de(null);
  return {
    openPanel: (r, i) => {
      e.value = !0, t.value = r, n.value = i;
    },
    isOpen: e,
    component: t,
    componentData: n,
    closePanel: () => {
      t.value = null, e.value = !1;
    }
  };
}), Qu = /* @__PURE__ */ tt({
  name: "NestedList",
  props: {
    items: {
      type: void 0,
      required: !0
    }
  }
}), nt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Xu = { key: 0 }, Zu = { key: 1 }, ef = { key: 2 };
function tf(e, t, n, o, s, r) {
  const i = gt("nested-list", !0);
  return Array.isArray(e.items) ? (q(), X("ul", Xu, [
    (q(!0), X(re, null, pt(e.items, (l, c) => (q(), X("li", { key: c }, [
      ye(i, { items: l }, null, 8, ["items"])
    ]))), 128))
  ])) : typeof e.items == "object" ? (q(), X("ul", Zu, [
    (q(!0), X(re, null, pt(e.items, (l, c) => (q(), X("li", { key: c }, Ce(c) + ": " + Ce(l), 1))), 128))
  ])) : (q(), X("li", ef, Ce(e.items), 1));
}
const nf = /* @__PURE__ */ nt(Qu, [["render", tf]]), of = /* @__PURE__ */ tt({
  components: { NestedList: nf },
  props: {
    data: {
      type: Object,
      required: !0
    }
  }
}), sf = { key: 0 }, rf = { key: 1 };
function lf(e, t, n, o, s, r) {
  const i = gt("NestedList");
  return q(), X("ul", null, [
    (q(!0), X(re, null, pt(Object.keys(e.data.labels), (l) => (q(), X("li", { key: l }, [
      ie("strong", null, Ce(e.data.labels[l]) + ": ", 1),
      Array.isArray(e.data.deal[l]) ? (q(), X("ul", sf, [
        (q(!0), X(re, null, pt(e.data.deal[l], (c, u) => (q(), X("li", { key: u }, [
          ye(i, { items: c }, null, 8, ["items"])
        ]))), 128))
      ])) : (q(), X("span", rf, Ce(e.data.deal[l]), 1))
    ]))), 128))
  ]);
}
const cf = /* @__PURE__ */ nt(of, [["render", lf]]), af = /* @__PURE__ */ tt({
  components: { DataDisplayPane: cf },
  setup() {
    const e = cl(), { closePanel: t } = e, n = Ye(() => e.isOpen), o = Ye(() => e.component), s = Ye(() => e.componentData);
    return {
      closePanel: t,
      isOpen: n,
      component: o,
      data: s
    };
  }
});
const uf = { class: "sidebar_overlay" }, ff = { class: "sidebar_panel_content" };
function df(e, t, n, o, s, r) {
  return q(), X("div", {
    class: zt(["sidebar", { show: e.isOpen }])
  }, [
    ie("div", uf, [
      ie("div", ff, [
        (q(), ws(jc(e.component), { data: e.data }, null, 8, ["data"]))
      ])
    ])
  ], 2);
}
const pf = /* @__PURE__ */ nt(af, [["render", df]]), hf = /* @__PURE__ */ tt({
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: !0
    }
  },
  emits: ["handlePageNavigation"],
  setup(e, { emit: t }) {
    const n = de(1), o = () => {
      t("handlePageNavigation", n.value);
    }, s = () => {
      n.value < e.totalPages && (n.value++, o());
    }, r = () => {
      n.value > 1 && (n.value--, o());
    }, i = (c) => {
      n.value = c, o();
    }, l = Ye(() => {
      const c = [];
      if (e.totalPages <= 5)
        for (let u = 1; u <= e.totalPages; u++)
          c.push(u);
      else
        n.value <= 3 ? c.push(1, 2, 3, "...", e.totalPages) : n.value >= e.totalPages - 2 ? c.push(
          1,
          "...",
          e.totalPages - 2,
          e.totalPages - 1,
          e.totalPages
        ) : c.push(
          1,
          "...",
          n.value - 1,
          n.value,
          n.value + 1,
          "...",
          e.totalPages
        );
      return c;
    });
    return {
      nextPage: s,
      prevPage: r,
      currentPage: n,
      setPage: i,
      pagesToShow: l
    };
  }
});
const _f = { class: "pagination" }, mf = { class: "pagination-buttons" }, gf = ["disabled"], vf = ["onClick"], yf = ["disabled"];
function Ef(e, t, n, o, s, r) {
  return q(), X("div", _f, [
    ie("div", mf, [
      ie("button", {
        disabled: e.currentPage === 1,
        onClick: t[0] || (t[0] = (...i) => e.prevPage && e.prevPage(...i))
      }, "<", 8, gf),
      (q(!0), X(re, null, pt(e.pagesToShow, (i) => (q(), X("button", {
        key: i,
        class: zt({ active: e.currentPage === i, dots: i === "..." }),
        onClick: (l) => i !== "..." && e.setPage(i)
      }, Ce(i), 11, vf))), 128)),
      ie("button", {
        disabled: e.currentPage === e.totalPages,
        onClick: t[1] || (t[1] = (...i) => e.nextPage && e.nextPage(...i))
      }, " > ", 8, yf)
    ]),
    ie("span", null, "Page " + Ce(e.currentPage) + " of " + Ce(e.totalPages), 1)
  ]);
}
const bf = /* @__PURE__ */ nt(hf, [["render", Ef], ["__scopeId", "data-v-158bb409"]]), Nf = /* @__PURE__ */ tt({
  props: {
    activeHighlight: {
      type: Function,
      default: () => {
      }
    },
    defaultSortOrder: {
      type: String,
      default: "asc"
    },
    columnLabels: {
      type: Array,
      required: !0
    },
    tableData: {
      type: void 0,
      required: !0
    }
  },
  emits: ["onRowClick", "onSortValues"],
  setup(e, { emit: t }) {
    const n = de(0), o = de(e.defaultSortOrder);
    return {
      sort: (i) => {
        n.value = i, o.value = o.value === "asc" ? "desc" : "asc";
        const l = o.value === "asc" ? 1 : -1;
        t("onSortValues", { value: i, direction: l });
      },
      sortField: n,
      sortOrder: o,
      rowClick: (i, l) => {
        t("onRowClick", { row: i, index: l });
      }
    };
  }
});
const Of = { class: "grid-header" }, wf = { class: "grid-header__row" }, Df = ["onClick"], Sf = ["onClick"];
function Vf(e, t, n, o, s, r) {
  return q(), X("table", null, [
    ie("thead", Of, [
      ie("tr", wf, [
        (q(!0), X(re, null, pt(e.columnLabels, (i, l) => (q(), X("th", { key: i }, [
          ie("span", {
            class: "grid-header__column",
            onClick: (c) => e.sort(l)
          }, [
            Ds(Ce(i) + " ", 1),
            Uo(ie("span", null, " ▲ ", 512), [
              [Xo, e.sortField === l && e.sortOrder === "asc"]
            ]),
            Uo(ie("span", null, " ▼ ", 512), [
              [Xo, e.sortField === l && e.sortOrder === "desc"]
            ])
          ], 8, Df)
        ]))), 128))
      ])
    ]),
    ie("tbody", null, [
      (q(!0), X(re, null, pt(e.tableData, (i, l) => (q(), X("tr", {
        class: zt({ active: e.activeHighlight(i) }),
        key: i,
        onClick: (c) => e.rowClick(i, l)
      }, [
        (q(!0), X(re, null, pt(i, (c) => (q(), X("td", { key: c }, Ce(Array.isArray(c) ? c.join(", ") : c), 1))), 128))
      ], 10, Sf))), 128))
    ])
  ]);
}
const Pf = /* @__PURE__ */ nt(Nf, [["render", Vf]]), Af = /* @__PURE__ */ tt({
  components: { Table: Pf, Pagination: bf },
  props: {
    tableData: {
      type: void 0,
      required: !0
    },
    defaultSortField: {
      type: Number,
      default: 0
    },
    defaultSortOrder: {
      type: String,
      default: "asc"
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    totalPages: {
      type: Number,
      required: !0
    },
    columnLabels: {
      type: Array,
      required: !0
    },
    initialPage: {
      type: Number,
      default: 1
    },
    activeHighlight: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: ["onSortValues", "handlePageNavigation", "onRowClick"],
  setup(e, { emit: t }) {
    return {
      currentPage: de(1),
      handlePageNavigation: (i) => {
        t("handlePageNavigation", i);
      },
      emitRowClick: (i) => {
        t("onRowClick", i);
      },
      emitSortValues: (i) => {
        t("onSortValues", i);
      }
    };
  }
});
const $f = { class: "grid-container" }, Cf = { class: "grid-header" }, If = { class: "grid-body" };
function Tf(e, t, n, o, s, r) {
  const i = gt("Table"), l = gt("Pagination");
  return q(), X("div", $f, [
    ie("div", Cf, [
      yi(e.$slots, "header", {}, void 0, !0)
    ]),
    ie("div", If, [
      ye(i, {
        "active-highlight": e.activeHighlight,
        "table-data": e.tableData,
        "default-sort-order": e.defaultSortOrder,
        "default-sort-field": e.defaultSortField,
        "column-labels": e.columnLabels,
        onOnRowClick: e.emitRowClick,
        onOnSortValues: e.emitSortValues
      }, null, 8, ["active-highlight", "table-data", "default-sort-order", "default-sort-field", "column-labels", "onOnRowClick", "onOnSortValues"])
    ]),
    ye(l, {
      "total-pages": e.totalPages,
      onHandlePageNavigation: e.handlePageNavigation
    }, null, 8, ["total-pages", "onHandlePageNavigation"])
  ]);
}
const xf = /* @__PURE__ */ nt(Af, [["render", Tf], ["__scopeId", "data-v-604eb2be"]]), Rf = [
  {
    id: 123,
    issuer_name: "Random Issuer Name",
    deal_name: "Sample Deal",
    bloomber_id: "XYZ12345",
    total: 100000056e-2,
    industry: "Technology",
    status: "Active",
    analysts: ["Analyst A", "Analyst B", "Analyst C"],
    doc_count: 3,
    custom_deal_identifiers: ["ID-001", "REF-123"]
  },
  {
    id: 234,
    issuer_name: "Another Issuer",
    deal_name: "New Deal",
    bloomber_id: "ABC56789",
    total: 5e6,
    industry: "Finance",
    status: "Pending",
    analysts: ["Analyst X", "Analyst Y"],
    doc_count: 1,
    custom_deal_identifiers: ["ID-002", "REF-456"]
  },
  {
    id: 345,
    issuer_name: "Third Issuer",
    deal_name: "Additional Deal",
    bloomber_id: "DEF98765",
    total: 200000075e-2,
    industry: "Healthcare",
    status: "Closed",
    analysts: ["Analyst M", "Analyst N"],
    doc_count: 2,
    custom_deal_identifiers: ["ID-003", "REF-789"]
  },
  {
    id: 456,
    issuer_name: "Fourth Company",
    deal_name: "Deal 4",
    bloomber_id: "GHI54321",
    total: 300000033e-2,
    industry: "Retail",
    status: "Inactive",
    analysts: ["Analyst P", "Analyst Q"],
    doc_count: 4,
    custom_deal_identifiers: ["ID-004", "REF-012"]
  },
  {
    id: 567,
    issuer_name: "Fifth Corporation",
    deal_name: "Deal 5",
    bloomber_id: "JKL67890",
    total: 400000044e-2,
    industry: "Automotive",
    status: "Active",
    analysts: ["Analyst R", "Analyst S"],
    doc_count: 3,
    custom_deal_identifiers: ["ID-005", "REF-123"]
  },
  {
    id: 678,
    issuer_name: "Sixth Organization",
    deal_name: "Deal 6",
    bloomber_id: "MNO13579",
    total: 250000022e-2,
    industry: "Hospitality",
    status: "Pending",
    analysts: ["Analyst T", "Analyst U"],
    doc_count: 2,
    custom_deal_identifiers: ["ID-006", "REF-456"]
  },
  {
    id: 789,
    issuer_name: "Seventh Firm",
    deal_name: "Deal 7",
    bloomber_id: "PQR24680",
    total: 350000078e-2,
    industry: "Energy",
    status: "Active",
    analysts: ["Analyst V", "Analyst W"],
    doc_count: 5,
    custom_deal_identifiers: ["ID-007", "REF-789"]
  },
  {
    id: 890,
    issuer_name: "Eighth Enterprise",
    deal_name: "Deal 8",
    bloomber_id: "STU97531",
    total: 450000066e-2,
    industry: "Telecommunications",
    status: "Closed",
    analysts: ["Analyst X", "Analyst Y"],
    doc_count: 3,
    custom_deal_identifiers: ["ID-008", "REF-012"]
  },
  {
    id: 246,
    issuer_name: "Tech Innovators Inc.",
    deal_name: "Innovative Deal",
    bloomber_id: "ABC67890",
    total: 250000075e-2,
    industry: "Technology",
    status: "Active",
    analysts: ["Analyst D", "Analyst E", "Analyst F"],
    doc_count: 5,
    custom_deal_identifiers: ["ID-002", "REF-124"]
  },
  {
    id: 250,
    issuer_name: "Healthcare Solutions",
    deal_name: "Health First",
    bloomber_id: "LMN23456",
    total: 150000025e-2,
    industry: "Healthcare",
    status: "Closed",
    analysts: ["Analyst G", "Analyst H", "Analyst I"],
    doc_count: 4,
    custom_deal_identifiers: ["ID-003", "REF-125"]
  },
  {
    id: 252,
    issuer_name: "Eco Energy Corp.",
    deal_name: "Green Energy",
    bloomber_id: "OPQ78901",
    total: 30000005e-1,
    industry: "Energy",
    status: "Active",
    analysts: ["Analyst J", "Analyst K", "Analyst L"],
    doc_count: 6,
    custom_deal_identifiers: ["ID-004", "REF-126"]
  },
  {
    id: 254,
    issuer_name: "Finance Pros",
    deal_name: "Finance Growth",
    bloomber_id: "RST34567",
    total: 17500006e-1,
    industry: "Finance",
    status: "Pending",
    analysts: ["Analyst M", "Analyst N", "Analyst O"],
    doc_count: 2,
    custom_deal_identifiers: ["ID-005", "REF-127"]
  },
  {
    id: 256,
    issuer_name: "Retail Masters",
    deal_name: "Retail Expansion",
    bloomber_id: "UVW89012",
    total: 22500008e-1,
    industry: "Retail",
    status: "Active",
    analysts: ["Analyst P", "Analyst Q", "Analyst R"],
    doc_count: 3,
    custom_deal_identifiers: ["ID-006", "REF-128"]
  },
  {
    id: 258,
    issuer_name: "Auto Innovators",
    deal_name: "Auto Revolution",
    bloomber_id: "XYZ23456",
    total: 32000003e-1,
    industry: "Automotive",
    status: "Active",
    analysts: ["Analyst S", "Analyst T", "Analyst U"],
    doc_count: 5,
    custom_deal_identifiers: ["ID-007", "REF-129"]
  },
  {
    id: 260,
    issuer_name: "Tech Pioneers",
    deal_name: "Pioneer Tech Deal",
    bloomber_id: "DEF45678",
    total: 27500009e-1,
    industry: "Technology",
    status: "Active",
    analysts: ["Analyst V", "Analyst W", "Analyst X"],
    doc_count: 6,
    custom_deal_identifiers: ["ID-008", "REF-130"]
  },
  {
    id: 262,
    issuer_name: "Health Innovators",
    deal_name: "Health Revolution",
    bloomber_id: "GHI78901",
    total: 185000045e-2,
    industry: "Healthcare",
    status: "Pending",
    analysts: ["Analyst Y", "Analyst Z", "Analyst AA"],
    doc_count: 3,
    custom_deal_identifiers: ["ID-009", "REF-131"]
  },
  {
    id: 264,
    issuer_name: "Energy Leaders",
    deal_name: "Energy Future",
    bloomber_id: "JKL34567",
    total: 340000085e-2,
    industry: "Energy",
    status: "Closed",
    analysts: ["Analyst BB", "Analyst CC", "Analyst DD"],
    doc_count: 4,
    custom_deal_identifiers: ["ID-010", "REF-132"]
  },
  {
    id: 266,
    issuer_name: "Finance Innovators",
    deal_name: "Innovative Finance",
    bloomber_id: "MNO67890",
    total: 21000007e-1,
    industry: "Finance",
    status: "Active",
    analysts: ["Analyst EE", "Analyst FF", "Analyst GG"],
    doc_count: 2,
    custom_deal_identifiers: ["ID-011", "REF-133"]
  },
  {
    id: 124,
    issuer_name: "Tech Innovators Inc.",
    deal_name: "Innovative Deal",
    bloomber_id: "ABC67890",
    total: 250000075e-2,
    industry: "Technology",
    status: "Active",
    analysts: ["Analyst D", "Analyst E", "Analyst F"],
    doc_count: 5,
    custom_deal_identifiers: ["ID-002", "REF-124"]
  },
  {
    id: 125,
    issuer_name: "Healthcare Solutions",
    deal_name: "Health First",
    bloomber_id: "LMN23456",
    total: 150000025e-2,
    industry: "Healthcare",
    status: "Closed",
    analysts: ["Analyst G", "Analyst H", "Analyst I"],
    doc_count: 4,
    custom_deal_identifiers: ["ID-003", "REF-125"]
  },
  {
    id: 126,
    issuer_name: "Eco Energy Corp.",
    deal_name: "Green Energy",
    bloomber_id: "OPQ78901",
    total: 30000005e-1,
    industry: "Energy",
    status: "Active",
    analysts: ["Analyst J", "Analyst K", "Analyst L"],
    doc_count: 6,
    custom_deal_identifiers: ["ID-004", "REF-126"]
  },
  {
    id: 127,
    issuer_name: "Finance Pros",
    deal_name: "Finance Growth",
    bloomber_id: "RST34567",
    total: 17500006e-1,
    industry: "Finance",
    status: "Pending",
    analysts: ["Analyst M", "Analyst N", "Analyst O"],
    doc_count: 2,
    custom_deal_identifiers: ["ID-005", "REF-127"]
  },
  {
    id: 128,
    issuer_name: "Retail Masters",
    deal_name: "Retail Expansion",
    bloomber_id: "UVW89012",
    total: 22500008e-1,
    industry: "Retail",
    status: "Active",
    analysts: ["Analyst P", "Analyst Q", "Analyst R"],
    doc_count: 3,
    custom_deal_identifiers: ["ID-006", "REF-128"]
  },
  {
    id: 129,
    issuer_name: "Auto Innovators",
    deal_name: "Auto Revolution",
    bloomber_id: "XYZ23456",
    total: 32000003e-1,
    industry: "Automotive",
    status: "Active",
    analysts: ["Analyst S", "Analyst T", "Analyst U"],
    doc_count: 5,
    custom_deal_identifiers: ["ID-007", "REF-129"]
  },
  {
    id: 130,
    issuer_name: "Tech Pioneers",
    deal_name: "Pioneer Tech Deal",
    bloomber_id: "DEF45678",
    total: 27500009e-1,
    industry: "Technology",
    status: "Active",
    analysts: ["Analyst V", "Analyst W", "Analyst X"],
    doc_count: 6,
    custom_deal_identifiers: ["ID-008", "REF-130"]
  },
  {
    id: 131,
    issuer_name: "Health Innovators",
    deal_name: "Health Revolution",
    bloomber_id: "GHI78901",
    total: 185000045e-2,
    industry: "Healthcare",
    status: "Pending",
    analysts: ["Analyst Y", "Analyst Z", "Analyst AA"],
    doc_count: 3,
    custom_deal_identifiers: ["ID-009", "REF-131"]
  },
  {
    id: 132,
    issuer_name: "Energy Leaders",
    deal_name: "Energy Future",
    bloomber_id: "JKL34567",
    total: 340000085e-2,
    industry: "Energy",
    status: "Closed",
    analysts: ["Analyst BB", "Analyst CC", "Analyst DD"],
    doc_count: 4,
    custom_deal_identifiers: ["ID-010", "REF-132"]
  },
  {
    id: 133,
    issuer_name: "Finance Innovators",
    deal_name: "Innovative Finance",
    bloomber_id: "MNO67890",
    total: 21000007e-1,
    industry: "Finance",
    status: "Active",
    analysts: ["Analyst EE", "Analyst FF", "Analyst GG"],
    doc_count: 2,
    custom_deal_identifiers: ["ID-011", "REF-133"]
  }
], $n = {
  labels: {
    id: "ID",
    issuer_name: "Issuer",
    deal_name: "Deal",
    bloomber_id: "Bloomberg ID",
    total: "Total",
    industry: "Industry",
    status: "Status",
    analysts: "Analysts",
    doc_count: "Docs",
    custom_deal_identifiers: "Identifiers"
  },
  data: Rf
};
var Ff = typeof global == "object" && global && global.Object === Object && global;
const jf = Ff;
var Mf = typeof self == "object" && self && self.Object === Object && self, Lf = jf || Mf || Function("return this")();
const al = Lf;
var kf = al.Symbol;
const Zn = kf;
var ul = Object.prototype, Hf = ul.hasOwnProperty, Uf = ul.toString, tn = Zn ? Zn.toStringTag : void 0;
function Bf(e) {
  var t = Hf.call(e, tn), n = e[tn];
  try {
    e[tn] = void 0;
    var o = !0;
  } catch {
  }
  var s = Uf.call(e);
  return o && (t ? e[tn] = n : delete e[tn]), s;
}
var Wf = Object.prototype, Gf = Wf.toString;
function Kf(e) {
  return Gf.call(e);
}
var Jf = "[object Null]", qf = "[object Undefined]", Sr = Zn ? Zn.toStringTag : void 0;
function fl(e) {
  return e == null ? e === void 0 ? qf : Jf : Sr && Sr in Object(e) ? Bf(e) : Kf(e);
}
function dl(e) {
  return e != null && typeof e == "object";
}
var zf = "[object Symbol]";
function Yf(e) {
  return typeof e == "symbol" || dl(e) && fl(e) == zf;
}
var Qf = Array.isArray;
const Xf = Qf;
var Zf = /\s/;
function ed(e) {
  for (var t = e.length; t-- && Zf.test(e.charAt(t)); )
    ;
  return t;
}
var td = /^\s+/;
function nd(e) {
  return e && e.slice(0, ed(e) + 1).replace(td, "");
}
function eo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vr = 0 / 0, od = /^[-+]0x[0-9a-f]+$/i, sd = /^0b[01]+$/i, rd = /^0o[0-7]+$/i, id = parseInt;
function Pr(e) {
  if (typeof e == "number")
    return e;
  if (Yf(e))
    return Vr;
  if (eo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = eo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = nd(e);
  var n = sd.test(e);
  return n || rd.test(e) ? id(e.slice(2), n ? 2 : 8) : od.test(e) ? Vr : +e;
}
var ld = function() {
  return al.Date.now();
};
const Io = ld;
var cd = "Expected a function", ad = Math.max, ud = Math.min;
function fd(e, t, n) {
  var o, s, r, i, l, c, u = 0, p = !1, d = !1, _ = !0;
  if (typeof e != "function")
    throw new TypeError(cd);
  t = Pr(t) || 0, eo(n) && (p = !!n.leading, d = "maxWait" in n, r = d ? ad(Pr(n.maxWait) || 0, t) : r, _ = "trailing" in n ? !!n.trailing : _);
  function D(B) {
    var E = o, te = s;
    return o = s = void 0, u = B, i = e.apply(te, E), i;
  }
  function T(B) {
    return u = B, l = setTimeout(J, t), p ? D(B) : i;
  }
  function F(B) {
    var E = B - c, te = B - u, Z = t - E;
    return d ? ud(Z, r - te) : Z;
  }
  function he(B) {
    var E = B - c, te = B - u;
    return c === void 0 || E >= t || E < 0 || d && te >= r;
  }
  function J() {
    var B = Io();
    if (he(B))
      return j(B);
    l = setTimeout(J, F(B));
  }
  function j(B) {
    return l = void 0, _ && o ? D(B) : (o = s = void 0, i);
  }
  function U() {
    l !== void 0 && clearTimeout(l), u = 0, o = c = s = l = void 0;
  }
  function G() {
    return l === void 0 ? i : j(Io());
  }
  function K() {
    var B = Io(), E = he(B);
    if (o = arguments, s = this, c = B, E) {
      if (l === void 0)
        return T(c);
      if (d)
        return clearTimeout(l), l = setTimeout(J, t), D(c);
    }
    return l === void 0 && (l = setTimeout(J, t)), i;
  }
  return K.cancel = U, K.flush = G, K;
}
var dd = "[object Number]";
function pd(e) {
  return typeof e == "number" || dl(e) && fl(e) == dd;
}
const hd = /* @__PURE__ */ tt({
  emits: ["click"],
  setup(e, { emit: t }) {
    return {
      handleClick: (o) => {
        t("click", o);
      }
    };
  }
});
function _d(e, t, n, o, s, r) {
  return q(), X("button", {
    class: "primary-button",
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    yi(e.$slots, "default", {}, void 0, !0)
  ]);
}
const md = /* @__PURE__ */ nt(hd, [["render", _d], ["__scopeId", "data-v-24c524b5"]]), gd = (e) => {
  let t = "";
  const n = Object.keys(e[0]);
  return t += n.join(",") + `
`, e.forEach((o) => {
    const s = n.map((r) => {
      const i = o[r];
      return Xf(i) ? i.join(" ") : pd(i) ? i.toFixed(2) : eo(i) ? JSON.stringify(i) : i;
    });
    t += s.join(",") + `
`;
  }), t;
}, vd = (e) => {
  let t = gd(e), n = new Blob([t], { type: "text/csv" }), o = window.URL.createObjectURL(n), s = document.createElement("a");
  s.href = o, s.download = "data.csv", document.body.appendChild(s), s.click();
}, yd = /* @__PURE__ */ tt({
  components: {
    PaginatedTable: xf,
    PrimaryButton: md
  },
  setup() {
    const { openPanel: e, closePanel: t } = cl(), n = de($n.data), o = de(/* @__PURE__ */ new Set()), s = (j) => o.value.has(j.id), r = ({ row: j }) => {
      if (o.value.has(j.id)) {
        o.value.delete(j.id);
        return;
      }
      if (o.value.add(j.id), o.value.size > 1) {
        t();
        return;
      }
    };
    qt(o.value, (j, U) => {
      if (j.size === 1) {
        e("DataDisplayPane", {
          labels: $n.labels,
          deal: n.value.filter(
            (G) => G.id === j.values().next().value
          )[0]
        });
        return;
      }
      if (j.size === 0) {
        t();
        return;
      }
    });
    const i = de(""), l = de(1), c = de(n.value), u = de(10), p = Ye(
      () => Math.ceil(c.value.length / u.value)
    ), d = Object.values($n.labels), _ = () => {
      c.value = n.value.filter((j) => he.value.some((U) => (j[U] ? j[U].toString().toLowerCase() : "").includes(i.value.toLowerCase())));
    }, D = ({
      value: j,
      direction: U
    }) => {
      const G = Object.keys(n.value[0])[j];
      c.value.sort((K, B) => {
        const E = K[G], te = B[G];
        return E < te ? -1 * U : E > te ? 1 * U : 0;
      });
    }, T = Ye(() => {
      const j = (l.value - 1) * u.value, U = Math.min(
        j + u.value,
        c.value.length
      );
      return c.value.slice(j, U);
    }), F = (j) => {
      l.value = j;
    }, he = de(Object.keys(n.value[0] || {})), J = fd(_, 500);
    return {
      MOCK_DATA: $n,
      onInput: J,
      searchTerm: i,
      columnLabels: d,
      filteredData: c,
      sortValues: D,
      itemsPerPage: u,
      totalPages: p,
      changeCurrentPage: F,
      openPanel: e,
      displayedData: T,
      downloadJSONAsCSV: vd,
      data: n,
      handleOpenPanel: r,
      selectedRows: o,
      isRowSelected: s
    };
  }
});
const Ed = (e) => (Cc("data-v-aaac1444"), e = e(), Ic(), e), bd = { class: "deals-header" }, Nd = { class: "search-bar" }, Od = /* @__PURE__ */ Ed(() => /* @__PURE__ */ ie("label", { for: "search-input" }, "Search:", -1));
function wd(e, t, n, o, s, r) {
  const i = gt("PrimaryButton"), l = gt("PaginatedTable");
  return q(), ws(l, {
    "table-data": e.displayedData,
    "column-labels": e.columnLabels,
    "items-per-page": e.itemsPerPage,
    "total-pages": e.totalPages,
    "row-identifier": "id",
    "active-highlight": e.isRowSelected,
    onOnSortValues: e.sortValues,
    onHandlePageNavigation: e.changeCurrentPage,
    onOnRowClick: e.handleOpenPanel
  }, {
    header: ko(() => [
      ie("div", bd, [
        ie("div", Nd, [
          Od,
          Uo(ie("input", {
            type: "text",
            id: "search-input",
            "onUpdate:modelValue": t[0] || (t[0] = (c) => e.searchTerm = c),
            onInput: t[1] || (t[1] = (...c) => e.onInput && e.onInput(...c))
          }, null, 544), [
            [pu, e.searchTerm]
          ])
        ]),
        ye(i, {
          onClick: t[2] || (t[2] = (c) => e.downloadJSONAsCSV(e.data)),
          class: "deals-header__button"
        }, {
          default: ko(() => [
            Ds(" Export .CSV ")
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["table-data", "column-labels", "items-per-page", "total-pages", "active-highlight", "onOnSortValues", "onHandlePageNavigation", "onOnRowClick"]);
}
const Dd = /* @__PURE__ */ nt(yd, [["render", wd], ["__scopeId", "data-v-aaac1444"]]), Sd = /* @__PURE__ */ tt({
  components: { SidePanel: pf, Deals: Dd }
});
function Vd(e, t, n, o, s, r) {
  const i = gt("SidePanel"), l = gt("Deals");
  return q(), X(re, null, [
    ye(i),
    ye(l)
  ], 64);
}
const Pd = /* @__PURE__ */ nt(Sd, [["render", Vd]]), Ad = Ku(), pl = mu(Pd);
pl.use(Ad);
pl.mount("#app");
