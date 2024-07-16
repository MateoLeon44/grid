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
const Q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Wt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], le = () => {
}, ml = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hn = (e) => e.startsWith("onUpdate:"), oe = Object.assign, es = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _l = Object.prototype.hasOwnProperty, H = (e, t) => _l.call(e, t), C = Array.isArray, St = (e) => eo(e) === "[object Map]", Ar = (e) => eo(e) === "[object Set]", I = (e) => typeof e == "function", se = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", ts = (e) => (Y(e) || I(e)) && I(e.then) && I(e.catch), Pr = Object.prototype.toString, eo = (e) => Pr.call(e), ns = (e) => eo(e).slice(8, -1), $r = (e) => eo(e) === "[object Object]", os = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ Qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), gl = /* @__PURE__ */ Qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), to = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, vl = /-(\w)/g, He = to((e) => e.replace(vl, (t, n) => n ? n.toUpperCase() : "")), yl = /\B([A-Z])/g, mt = to(
  (e) => e.replace(yl, "-$1").toLowerCase()
), Tt = to((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nt = to((e) => e ? `on${Tt(e)}` : ""), _t = (e, t) => !Object.is(e, t), Ht = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Un = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, $o = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ts;
const ss = () => Ts || (Ts = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rs(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = se(o) ? Ol(o) : rs(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (se(e) || Y(e))
    return e;
}
const El = /;(?![^(]*\))/g, bl = /:([^]+)/, Nl = /\/\*[^]*?\*\//g;
function Ol(e) {
  const t = {};
  return e.replace(Nl, "").split(El).forEach((n) => {
    if (n) {
      const o = n.split(bl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function qt(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = qt(e[n]);
      o && (t += o + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Dl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Sl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Vl = /* @__PURE__ */ Qe(wl), Al = /* @__PURE__ */ Qe(Dl), Pl = /* @__PURE__ */ Qe(Sl), $l = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cl = /* @__PURE__ */ Qe($l);
function Cr(e) {
  return !!e || e === "";
}
const Ir = (e) => !!(e && e.__v_isRef === !0), Ce = (e) => se(e) ? e : e == null ? "" : C(e) || Y(e) && (e.toString === Pr || !I(e.toString)) ? Ir(e) ? Ce(e.value) : JSON.stringify(e, Tr, 2) : String(e), Tr = (e, t) => Ir(t) ? Tr(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[yo(o, r) + " =>"] = s, n),
    {}
  )
} : Ar(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => yo(n))
} : yt(t) ? yo(t) : Y(t) && !C(t) && !$r(t) ? String(t) : t, yo = (e, t = "") => {
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
class xr {
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
    } else process.env.NODE_ENV !== "production" && Ue("cannot run an inactive effect scope.");
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
function Rr(e) {
  return new xr(e);
}
function Il(e, t = Oe) {
  t && t.active && t.effects.push(e);
}
function Fr() {
  return Oe;
}
function Tl(e) {
  Oe ? Oe.cleanups.push(e) : process.env.NODE_ENV !== "production" && Ue(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Vt;
class is {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Il(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (xl(n.computed), this._dirtyLevel >= 4))
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
      return dt = !0, Vt = this, this._runnings++, xs(this), this.fn();
    } finally {
      Rs(this), this._runnings--, Vt = n, dt = t;
    }
  }
  stop() {
    this.active && (xs(this), Rs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function xl(e) {
  return e.value;
}
function xs(e) {
  e._trackId++, e._depsLength = 0;
}
function Rs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      jr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function jr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let dt = !0, Co = 0;
const Mr = [];
function Xe() {
  Mr.push(dt), dt = !1;
}
function Ze() {
  const e = Mr.pop();
  dt = e === void 0 ? !0 : e;
}
function ls() {
  Co++;
}
function cs() {
  for (Co--; !Co && Io.length; )
    Io.shift()();
}
function Lr(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && jr(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, oe({ effect: e }, n)));
  }
}
const Io = [];
function kr(e, t, n) {
  var o;
  ls();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, oe({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Io.push(s.scheduler)));
  }
  cs();
}
const Hr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Bn = /* @__PURE__ */ new WeakMap(), At = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), To = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function me(e, t, n) {
  if (dt && Vt) {
    let o = Bn.get(e);
    o || Bn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Hr(() => o.delete(n))), Lr(
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
        C(e) ? os(n) && l.push(i.get("length")) : (l.push(i.get(At)), St(e) && l.push(i.get(To)));
        break;
      case "delete":
        C(e) || (l.push(i.get(At)), St(e) && l.push(i.get(To)));
        break;
      case "set":
        St(e) && l.push(i.get(At));
        break;
    }
  ls();
  for (const c of l)
    c && kr(
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
  cs();
}
function Rl(e, t) {
  const n = Bn.get(e);
  return n && n.get(t);
}
const Fl = /* @__PURE__ */ Qe("__proto__,__v_isRef,__isVue"), Ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
), Fs = /* @__PURE__ */ jl();
function jl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = R(this);
      for (let r = 0, i = this.length; r < i; r++)
        me(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(R)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Xe(), ls();
      const o = R(this)[t].apply(this, n);
      return cs(), Ze(), o;
    };
  }), e;
}
function Ml(e) {
  yt(e) || (e = String(e));
  const t = R(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class Br {
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
      return o === (s ? r ? Yr : zr : r ? qr : Jr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = C(t);
    if (!s) {
      if (i && H(Fs, n))
        return Reflect.get(Fs, n, o);
      if (n === "hasOwnProperty")
        return Ml;
    }
    const l = Reflect.get(t, n, o);
    return (yt(n) ? Ur.has(n) : Fl(n)) || (s || me(t, "get", n), r) ? l : ne(l) ? i && os(n) ? l : l.value : Y(l) ? s ? Qr(l) : so(l) : l;
  }
}
class Wr extends Br {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = xt(r);
      if (!Pt(o) && !xt(o) && (r = R(r), o = R(o)), !C(t) && ne(r) && !ne(o))
        return c ? !1 : (r.value = o, !0);
    }
    const i = C(t) && os(n) ? Number(n) < t.length : H(t, n), l = Reflect.set(t, n, o, s);
    return t === R(s) && (i ? _t(o, r) && Le(t, "set", n, o, r) : Le(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = H(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Le(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!yt(n) || !Ur.has(n)) && me(t, "has", n), o;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      C(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class Gr extends Br {
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
const Ll = /* @__PURE__ */ new Wr(), kl = /* @__PURE__ */ new Gr(), Hl = /* @__PURE__ */ new Wr(
  !0
), Ul = /* @__PURE__ */ new Gr(!0), as = (e) => e, no = (e) => Reflect.getPrototypeOf(e);
function On(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = R(e), r = R(t);
  n || (_t(t, r) && me(s, "get", t), me(s, "get", r));
  const { has: i } = no(s), l = o ? as : n ? us : dn;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function wn(e, t = !1) {
  const n = this.__v_raw, o = R(n), s = R(e);
  return t || (_t(e, s) && me(o, "has", e), me(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Dn(e, t = !1) {
  return e = e.__v_raw, !t && me(R(e), "iterate", At), Reflect.get(e, "size", e);
}
function js(e) {
  e = R(e);
  const t = R(this);
  return no(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function Ms(e, t) {
  t = R(t);
  const n = R(this), { has: o, get: s } = no(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Kr(n, o, e) : (e = R(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? _t(t, i) && Le(n, "set", e, t, i) : Le(n, "add", e, t), this;
}
function Ls(e) {
  const t = R(this), { has: n, get: o } = no(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Kr(t, n, e) : (e = R(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && Le(t, "delete", e, void 0, r), i;
}
function ks() {
  const e = R(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? St(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Le(e, "clear", void 0, void 0, n), o;
}
function Sn(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = R(i), c = t ? as : e ? us : dn;
    return !e && me(l, "iterate", At), i.forEach((u, p) => o.call(s, c(u), c(p), r));
  };
}
function Vn(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = R(s), i = St(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = s[e](...o), p = n ? as : t ? us : dn;
    return !t && me(
      r,
      "iterate",
      c ? To : At
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = u.next();
        return m ? { value: d, done: m } : {
          value: l ? [p(d[0]), p(d[1])] : p(d),
          done: m
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
function Bl() {
  const e = {
    get(r) {
      return On(this, r);
    },
    get size() {
      return Dn(this);
    },
    has: wn,
    add: js,
    set: Ms,
    delete: Ls,
    clear: ks,
    forEach: Sn(!1, !1)
  }, t = {
    get(r) {
      return On(this, r, !1, !0);
    },
    get size() {
      return Dn(this);
    },
    has: wn,
    add: js,
    set: Ms,
    delete: Ls,
    clear: ks,
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
  Wl,
  Gl,
  Kl,
  Jl
] = /* @__PURE__ */ Bl();
function oo(e, t) {
  const n = t ? e ? Jl : Kl : e ? Gl : Wl;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    H(n, s) && s in o ? n : o,
    s,
    r
  );
}
const ql = {
  get: /* @__PURE__ */ oo(!1, !1)
}, zl = {
  get: /* @__PURE__ */ oo(!1, !0)
}, Yl = {
  get: /* @__PURE__ */ oo(!0, !1)
}, Ql = {
  get: /* @__PURE__ */ oo(!0, !0)
};
function Kr(e, t, n) {
  const o = R(n);
  if (o !== n && t.call(e, o)) {
    const s = ns(e);
    Ue(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Jr = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap();
function Xl(e) {
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
function Zl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xl(ns(e));
}
function so(e) {
  return xt(e) ? e : ro(
    e,
    !1,
    Ll,
    ql,
    Jr
  );
}
function ec(e) {
  return ro(
    e,
    !1,
    Hl,
    zl,
    qr
  );
}
function Qr(e) {
  return ro(
    e,
    !0,
    kl,
    Yl,
    zr
  );
}
function Me(e) {
  return ro(
    e,
    !0,
    Ul,
    Ql,
    Yr
  );
}
function ro(e, t, n, o, s) {
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
  const i = Zl(e);
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
function Pt(e) {
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
const dn = (e) => Y(e) ? so(e) : e, us = (e) => Y(e) ? Qr(e) : e, tc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Xr {
  constructor(t, n, o, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new is(
      () => t(this._value),
      () => Cn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = R(this);
    return (!t._cacheable || t.effect.dirty) && _t(t._value, t._value = t.effect.run()) && Cn(t, 4), Zr(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Ue(tc, `

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
function nc(e, t, n = !1) {
  let o, s;
  const r = I(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    Ue("Write operation failed: computed value is readonly");
  } : le) : (o = e.get, s = e.set);
  const i = new Xr(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function Zr(e) {
  var t;
  dt && Vt && (e = R(e), Lr(
    Vt,
    (t = e.dep) != null ? t : e.dep = Hr(
      () => e.dep = void 0,
      e instanceof Xr ? e : void 0
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
  s && kr(
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
  return oc(e, !1);
}
function oc(e, t) {
  return ne(e) ? e : new sc(e, t);
}
class sc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : R(t), this._value = n ? t : dn(t);
  }
  get value() {
    return Zr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Pt(t) || xt(t);
    if (t = n ? t : R(t), _t(t, this._rawValue)) {
      const o = this._rawValue;
      this._rawValue = t, this._value = n ? t : dn(t), Cn(this, 4, t, o);
    }
  }
}
function ei(e) {
  return ne(e) ? e.value : e;
}
const rc = {
  get: (e, t, n) => ei(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return ne(s) && !ne(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ti(e) {
  return qe(e) ? e : new Proxy(e, rc);
}
function Hs(e) {
  process.env.NODE_ENV !== "production" && !Wn(e) && Ue("toRefs() expects a reactive object but received a plain one.");
  const t = C(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ni(e, n);
  return t;
}
class ic {
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
    return Rl(R(this._object), this._key);
  }
}
class lc {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Eo(e, t, n) {
  return ne(e) ? e : I(e) ? new lc(e) : Y(e) && arguments.length > 1 ? ni(e, t, n) : de(e);
}
function ni(e, t, n) {
  const o = e[t];
  return ne(o) ? o : new ic(e, t, n);
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
  const n = $t.length ? $t[$t.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = cc();
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
          ({ vnode: r }) => `at <${ho(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...ac(s)), console.warn(...r);
  }
  Ze();
}
function cc() {
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
function ac(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...uc(n));
  }), t;
}
function uc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${ho(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...fc(e.props), r] : [s + r];
}
function fc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...oi(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function oi(e, t, n) {
  return se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ne(t) ? (t = oi(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const fs = {
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
    return s && ts(s) && s.catch((r) => {
      vn(r, t, n);
    }), s;
  }
  if (C(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Ie(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function vn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? fs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  dc(e, n, s, o);
}
function dc(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = fs[t];
    if (n && In(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Tn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let pn = !1, xo = !1;
const ve = [];
let je = 0;
const Gt = [];
let it = null, Dt = 0;
const si = /* @__PURE__ */ Promise.resolve();
let ds = null;
const pc = 100;
function Ro(e) {
  const t = ds || si;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hc(e) {
  let t = je + 1, n = ve.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = ve[o], r = hn(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function io(e) {
  (!ve.length || !ve.includes(
    e,
    pn && e.allowRecurse ? je + 1 : je
  )) && (e.id == null ? ve.push(e) : ve.splice(hc(e.id), 0, e), ri());
}
function ri() {
  !pn && !xo && (xo = !0, ds = si.then(ci));
}
function mc(e) {
  const t = ve.indexOf(e);
  t > je && ve.splice(t, 1);
}
function ii(e) {
  C(e) ? Gt.push(...e) : (!it || !it.includes(
    e,
    e.allowRecurse ? Dt + 1 : Dt
  )) && Gt.push(e), ri();
}
function Us(e, t, n = pn ? je + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ve.length; n++) {
    const o = ve[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && ps(t, o))
        continue;
      ve.splice(n, 1), n--, o();
    }
  }
}
function li(e) {
  if (Gt.length) {
    const t = [...new Set(Gt)].sort(
      (n, o) => hn(n) - hn(o)
    );
    if (Gt.length = 0, it) {
      it.push(...t);
      return;
    }
    for (it = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Dt = 0; Dt < it.length; Dt++) {
      const n = it[Dt];
      process.env.NODE_ENV !== "production" && ps(e, n) || n.active !== !1 && n();
    }
    it = null, Dt = 0;
  }
}
const hn = (e) => e.id == null ? 1 / 0 : e.id, _c = (e, t) => {
  const n = hn(e) - hn(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function ci(e) {
  xo = !1, pn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ve.sort(_c);
  const t = process.env.NODE_ENV !== "production" ? (n) => ps(e, n) : le;
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
    je = 0, ve.length = 0, li(e), pn = !1, ds = null, (ve.length || Gt.length) && ci(e);
  }
}
function ps(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > pc) {
      const o = t.ownerInstance, s = o && ws(o.type);
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
process.env.NODE_ENV !== "production" && (ss().__VUE_HMR_RUNTIME__ = {
  createRecord: bo(ai),
  rerender: bo(yc),
  reload: bo(Ec)
});
const Rt = /* @__PURE__ */ new Map();
function gc(e) {
  const t = e.type.__hmrId;
  let n = Rt.get(t);
  n || (ai(t, e.type), n = Rt.get(t)), n.instances.add(e);
}
function vc(e) {
  Rt.get(e.type.__hmrId).instances.delete(e);
}
function ai(e, t) {
  return Rt.has(e) ? !1 : (Rt.set(e, {
    initialDef: ln(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ln(e) {
  return Gi(e) ? e.__vccOpts : e;
}
function yc(e, t) {
  const n = Rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ln(o.type).render = t), o.renderCache = [], Ct = !0, o.effect.dirty = !0, o.update(), Ct = !1;
  }));
}
function Ec(e, t) {
  const n = Rt.get(e);
  if (!n) return;
  t = ln(t), Bs(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = ln(s.type);
    Ot.has(r) || (r !== n.initialDef && Bs(r, t), Ot.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ot.add(r), s.ceReload(t.styles), Ot.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, io(() => {
      s.parent.update(), Ot.delete(r);
    })) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ii(() => {
    for (const s of o)
      Ot.delete(
        ln(s.type)
      );
  });
}
function Bs(e, t) {
  oe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function bo(e) {
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
let Pe, nn = [], Fo = !1;
function yn(e, ...t) {
  Pe ? Pe.emit(e, ...t) : Fo || nn.push({ event: e, args: t });
}
function hs(e, t) {
  var n, o;
  Pe = e, Pe ? (Pe.enabled = !0, nn.forEach(({ event: s, args: r }) => Pe.emit(s, ...r)), nn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    hs(r, t);
  }), setTimeout(() => {
    Pe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fo = !0, nn = []);
  }, 3e3)) : (Fo = !0, nn = []);
}
function bc(e, t) {
  yn("app:init", e, t, {
    Fragment: re,
    Text: En,
    Comment: De,
    Static: Rn
  });
}
function Nc(e) {
  yn("app:unmount", e);
}
const Oc = /* @__PURE__ */ ms(
  "component:added"
  /* COMPONENT_ADDED */
), ui = /* @__PURE__ */ ms(
  "component:updated"
  /* COMPONENT_UPDATED */
), wc = /* @__PURE__ */ ms(
  "component:removed"
  /* COMPONENT_REMOVED */
), Dc = (e) => {
  Pe && typeof Pe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Pe.cleanupBuffer(e) && wc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ms(e) {
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
const Sc = /* @__PURE__ */ fi(
  "perf:start"
  /* PERFORMANCE_START */
), Vc = /* @__PURE__ */ fi(
  "perf:end"
  /* PERFORMANCE_END */
);
function fi(e) {
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
function Pc(e, t, ...n) {
  if (e.isUnmounted) return;
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
        const m = p[t];
        I(m) && (m(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: m } = o[p] || Q;
    m && (s = n.map((D) => se(D) ? D.trim() : D)), d && (s = n.map($o));
  }
  if (process.env.NODE_ENV !== "production" && Ac(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[Nt(p)] && O(
      `Event "${p}" is emitted in component ${ho(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${mt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = o[l = Nt(t)] || // also try camelCase event handler (#2249)
  o[l = Nt(He(t))];
  !c && r && (c = o[l = Nt(mt(t))]), c && Ie(
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
function di(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!I(e)) {
    const c = (u) => {
      const p = di(u, t, !0);
      p && (l = !0, oe(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (Y(e) && o.set(e, null), null) : (C(r) ? r.forEach((c) => i[c] = null) : oe(i, r), Y(e) && o.set(e, i), i);
}
function lo(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, mt(t)) || H(e, t));
}
let ce = null, co = null;
function Gn(e) {
  const t = ce;
  return ce = e, co = e && e.type.__scopeId || null, t;
}
function $c(e) {
  co = e;
}
function Cc() {
  co = null;
}
function jo(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && or(-1);
    const r = Gn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Gn(r), o._d && or(1);
    }
    return process.env.NODE_ENV !== "production" && ui(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Mo = !1;
function Kn() {
  Mo = !0;
}
function No(e) {
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
    data: m,
    setupState: D,
    ctx: T,
    inheritAttrs: F
  } = e, he = Gn(e);
  let J, j;
  process.env.NODE_ENV !== "production" && (Mo = !1);
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
      J = Ae(
        u.call(
          B,
          K,
          p,
          process.env.NODE_ENV !== "production" ? Me(d) : d,
          D,
          m,
          T
        )
      ), j = l;
    } else {
      const K = t;
      process.env.NODE_ENV !== "production" && l === d && Kn(), J = Ae(
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
      ), j = t.props ? l : Ic(l);
    }
  } catch (K) {
    un.length = 0, vn(K, e, 1), J = ye(De);
  }
  let U = J, G;
  if (process.env.NODE_ENV !== "production" && J.patchFlag > 0 && J.patchFlag & 2048 && ([U, G] = pi(J)), j && F !== !1) {
    const K = Object.keys(j), { shapeFlag: B } = U;
    if (K.length) {
      if (B & 7)
        r && K.some(Hn) && (j = Tc(
          j,
          r
        )), U = vt(U, j, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Mo && U.type !== De) {
        const E = Object.keys(l), te = [], Z = [];
        for (let A = 0, V = E.length; A < V; A++) {
          const W = E[A];
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
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ws(U) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = vt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ws(U) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), U.transition = n.transition), process.env.NODE_ENV !== "production" && G ? G(U) : J = U, Gn(he), J;
}
const pi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = _s(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return pi(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ae(o), i];
};
function _s(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (uo(s)) {
      if (s.type !== De || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return _s(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ic = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Hn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Ws = (e) => e.shapeFlag & 7 || e.type === De;
function xc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: c } = t, u = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Ct || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? Gs(o, i, u) : !!i;
    if (c & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const m = p[d];
        if (i[m] !== o[m] && !lo(u, m))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Gs(o, i, u) : !0 : !!i;
  return !1;
}
function Gs(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !lo(n, r))
      return !0;
  }
  return !1;
}
function Rc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const hi = "components";
function gt(e, t) {
  return _i(hi, e, !0, t) || e;
}
const mi = Symbol.for("v-ndc");
function Fc(e) {
  return se(e) ? _i(hi, e, !1) || e : e || mi;
}
function _i(e, t, n = !0, o = !1) {
  const s = ce || ae;
  if (s) {
    const r = s.type;
    {
      const l = ws(
        r,
        !1
      );
      if (l && (l === t || l === He(t) || l === Tt(He(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ks(s[e] || r[e], t) || // global registration
      Ks(s.appContext[e], t)
    );
    return !i && o ? r : (process.env.NODE_ENV !== "production" && n && !i && O(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else process.env.NODE_ENV !== "production" && O(
    `resolve${Tt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Ks(e, t) {
  return e && (e[t] || e[He(t)] || e[Tt(He(t))]);
}
const jc = (e) => e.__isSuspense;
function Mc(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : ii(e);
}
function ao(e, t, n = ae, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Xe();
      const l = bn(n), c = Ie(t, n, e, i);
      return l(), Ze(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Nt(fs[e].replace(/ hook$/, ""));
    O(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const et = (e) => (t, n = ae) => {
  (!fo || e === "sp") && ao(e, (...o) => t(...o), n);
}, Lc = et("bm"), kc = et("m"), Hc = et("bu"), Uc = et("u"), Bc = et("bum"), gi = et("um"), Wc = et("sp"), Gc = et(
  "rtg"
), Kc = et(
  "rtc"
);
function Jc(e, t = ae) {
  ao("ec", e, t);
}
function vi(e) {
  gl(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function Lo(e, t) {
  if (ce === null)
    return process.env.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = po(ce), o = e.dirs || (e.dirs = []);
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
  const r = n;
  if (C(e) || se(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, r);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, r);
  } else if (Y(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, l) => t(i, l, void 0, r)
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        s[l] = t(e[u], u, l, r);
      }
    }
  else
    s = [];
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function tt(e, t) {
  return I(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    oe({ name: e.name }, t, { setup: e })
  ) : e;
}
const cn = (e) => !!e.type.__asyncLoader;
function yi(e, t, n = {}, o, s) {
  if (ce.isCE || ce.parent && cn(ce.parent) && ce.parent.isCE)
    return t !== "default" && (n.name = t), ye("slot", n, o);
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (O(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), q();
  const i = r && Ei(r(n)), l = bs(
    re,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), l;
}
function Ei(e) {
  return e.some((t) => uo(t) ? !(t.type === De || t.type === re && !Ei(t.children)) : !0) ? e : null;
}
const ko = (e) => e ? Bi(e) ? po(e) : ko(e.parent) : null, It = (
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
    $parent: (e) => ko(e.parent),
    $root: (e) => ko(e.root),
    $emit: (e) => e.emit,
    $options: (e) => vs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, io(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ro.bind(e.proxy)),
    $watch: (e) => Da.bind(e)
  })
), gs = (e) => e === "_" || e === "$", Oo = (e, t) => e !== Q && !e.__isScriptSetup && H(e, t), bi = {
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
        if (Oo(o, t))
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
        Ho && (i[t] = 0);
      }
    }
    const p = It[t];
    let d, m;
    if (p)
      return t === "$attrs" ? (me(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Kn()) : process.env.NODE_ENV !== "production" && t === "$slots" && me(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Q && H(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      m = c.config.globalProperties, H(m, t)
    )
      return m[t];
    process.env.NODE_ENV !== "production" && ce && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== Q && gs(t[0]) && H(s, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ce && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Oo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && H(s, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Q && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(
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
    return !!n[i] || e !== Q && H(e, i) || Oo(t, i) || (l = r[0]) && H(l, i) || H(o, i) || H(It, i) || H(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (bi.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function qc(e) {
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
function zc(e) {
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
function Yc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(R(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (gs(o[0])) {
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
function Js(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Qc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ho = !0;
function Xc(e) {
  const t = vs(e), n = e.proxy, o = e.ctx;
  Ho = !1, t.beforeCreate && qs(t.beforeCreate, e, "bc");
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
    mounted: m,
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
    expose: A,
    inheritAttrs: V,
    // assets
    components: W,
    directives: ue,
    filters: ot
  } = t, Te = process.env.NODE_ENV !== "production" ? Qc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const x in L)
        Te("Props", x);
  }
  if (u && Zc(u, o, Te), i)
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
    if (process.env.NODE_ENV !== "production" && ts(L) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Y(L))
      process.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = so(L), process.env.NODE_ENV !== "production")
      for (const x in L)
        Te("Data", x), gs(x[0]) || Object.defineProperty(o, x, {
          configurable: !0,
          enumerable: !0,
          get: () => L[x],
          set: le
        });
  }
  if (Ho = !0, r)
    for (const L in r) {
      const x = r[L], xe = I(x) ? x.bind(n, n) : I(x.get) ? x.get.bind(n, n) : le;
      process.env.NODE_ENV !== "production" && xe === le && O(`Computed property "${L}" has no getter.`);
      const _o = !I(x) && I(x.set) ? x.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : le, zt = Ye({
        get: xe,
        set: _o
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => zt.value,
        set: (jt) => zt.value = jt
      }), process.env.NODE_ENV !== "production" && Te("Computed", L);
    }
  if (l)
    for (const L in l)
      Ni(l[L], o, n, L);
  if (c) {
    const L = I(c) ? c.call(n) : c;
    Reflect.ownKeys(L).forEach((x) => {
      ra(x, L[x]);
    });
  }
  p && qs(p, e, "c");
  function _e(L, x) {
    C(x) ? x.forEach((xe) => L(xe.bind(n))) : x && L(x.bind(n));
  }
  if (_e(Lc, d), _e(kc, m), _e(Hc, D), _e(Uc, T), _e(Sa, F), _e(Va, he), _e(Jc, te), _e(Kc, B), _e(Gc, E), _e(Bc, j), _e(gi, G), _e(Wc, Z), C(A))
    if (A.length) {
      const L = e.exposed || (e.exposed = {});
      A.forEach((x) => {
        Object.defineProperty(L, x, {
          get: () => n[x],
          set: (xe) => n[x] = xe
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === le && (e.render = K), V != null && (e.inheritAttrs = V), W && (e.components = W), ue && (e.directives = ue);
}
function Zc(e, t, n = le) {
  C(e) && (e = Uo(e));
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
function qs(e, t, n) {
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
    I(r) ? Jt(s, r) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (I(e))
    Jt(s, e.bind(n));
  else if (Y(e))
    if (C(e))
      e.forEach((r) => Ni(r, t, n, o));
    else {
      const r = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(r) ? Jt(s, r, e) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function vs(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (u) => Jn(c, u, i, !0)
  ), Jn(c, t, i)), Y(t) && r.set(t, c), c;
}
function Jn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Jn(e, r, n, !0), s && s.forEach(
    (i) => Jn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ea[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ea = {
  data: zs,
  props: Ys,
  emits: Ys,
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
  watch: na,
  // provide / inject
  provide: zs,
  inject: ta
};
function zs(e, t) {
  return t ? e ? function() {
    return oe(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ta(e, t) {
  return on(Uo(e), Uo(t));
}
function Uo(e) {
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
function Ys(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    Js(e),
    Js(t ?? {})
  ) : t;
}
function na(e, t) {
  if (!e) return t;
  if (!t) return e;
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
let oa = 0;
function sa(e, t) {
  return function(o, s = null) {
    I(o) || (o = oe({}, o)), s != null && !Y(s) && (process.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), s = null);
    const r = Oi(), i = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const c = r.app = {
      _uid: oa++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: lr,
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
        return process.env.NODE_ENV !== "production" && Jo(u, r.config), p ? (process.env.NODE_ENV !== "production" && r.components[u] && O(`Component "${u}" has already been registered in target app.`), r.components[u] = p, c) : r.components[u];
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
          const m = ye(o, s);
          return m.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(
              vt(m),
              u,
              d
            );
          }), p && t ? t(m, u) : e(m, u, d), l = !0, c._container = u, u.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = m.component, bc(c, lr)), po(m.component);
        }
      },
      unmount() {
        l ? (e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, Nc(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(u, p) {
        return process.env.NODE_ENV !== "production" && u in r.provides && O(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), r.provides[u] = p, c;
      },
      runWithContext(u) {
        const p = Kt;
        Kt = c;
        try {
          return u();
        } finally {
          Kt = p;
        }
      }
    };
    return c;
  };
}
let Kt = null;
function ra(e, t) {
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
  if (o || Kt) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Kt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
function ia() {
  return !!(ae || ce || Kt);
}
const wi = {}, Di = () => Object.create(wi), Si = (e) => Object.getPrototypeOf(e) === wi;
function la(e, t, n, o = !1) {
  const s = {}, r = Di();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vi(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && Pi(t || {}, s, e), n ? e.props = o ? s : ec(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function ca(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function aa(e, t, n, o) {
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
    !(process.env.NODE_ENV !== "production" && ca(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let m = p[d];
        if (lo(e.emitsOptions, m))
          continue;
        const D = t[m];
        if (c)
          if (H(r, m))
            D !== r[m] && (r[m] = D, u = !0);
          else {
            const T = He(m);
            s[T] = Bo(
              c,
              l,
              T,
              D,
              e,
              !1
            );
          }
        else
          D !== r[m] && (r[m] = D, u = !0);
      }
    }
  } else {
    Vi(e, t, s, r) && (u = !0);
    let p;
    for (const d in l)
      (!t || // for camelCase
      !H(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = mt(d)) === d || !H(t, p))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[d] = Bo(
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
  u && Le(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Pi(t || {}, s, e);
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
      s && H(s, p = He(c)) ? !r || !r.includes(p) ? n[p] = u : (l || (l = {}))[p] = u : lo(e.emitsOptions, c) || (!(c in o) || u !== o[c]) && (o[c] = u, i = !0);
    }
  if (r) {
    const c = R(n), u = l || Q;
    for (let p = 0; p < r.length; p++) {
      const d = r[p];
      n[d] = Bo(
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
function Bo(e, t, n, o, s, r) {
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
    ] && (o === "" || o === mt(n)) && (o = !0));
  }
  return o;
}
function Ai(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let c = !1;
  if (!I(e)) {
    const p = (d) => {
      c = !0;
      const [m, D] = Ai(d, t, !0);
      oe(i, m), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !c)
    return Y(e) && o.set(e, Wt), Wt;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !se(r[p]) && O("props must be strings when using array syntax.", r[p]);
      const d = He(r[p]);
      Qs(d) && (i[d] = Q);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !Y(r) && O("invalid props options", r);
    for (const p in r) {
      const d = He(p);
      if (Qs(d)) {
        const m = r[p], D = i[d] = C(m) || I(m) ? { type: m } : oe({}, m);
        if (D) {
          const T = Zs(Boolean, D.type), F = Zs(String, D.type);
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
function Qs(e) {
  return e[0] !== "$" && !rn(e) ? !0 : (process.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Wo(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Xs(e, t) {
  return Wo(e) === Wo(t);
}
function Zs(e, t) {
  return C(t) ? t.findIndex((n) => Xs(n, e)) : I(t) && Xs(t, e) ? 0 : -1;
}
function Pi(e, t, n) {
  const o = R(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && ua(
      r,
      o[r],
      i,
      process.env.NODE_ENV !== "production" ? Me(o) : o,
      !H(e, r) && !H(e, mt(r))
    );
  }
}
function ua(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: c } = n;
  if (i && s) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let u = !1;
      const p = C(r) ? r : [r], d = [];
      for (let m = 0; m < p.length && !u; m++) {
        const { valid: D, expectedType: T } = da(t, p[m]);
        d.push(T || ""), u = D;
      }
      if (!u) {
        O(pa(e, t, d));
        return;
      }
    }
    l && !l(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const fa = /* @__PURE__ */ Qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function da(e, t) {
  let n;
  const o = Wo(t);
  if (fa(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = Y(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function pa(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Tt).join(" | ")}`;
  const s = n[0], r = ns(t), i = er(t, s), l = er(t, r);
  return n.length === 1 && tr(s) && !ha(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, tr(r) && (o += `with value ${l}.`), o;
}
function er(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function tr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ha(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $i = (e) => e[0] === "_" || e === "$stable", ys = (e) => C(e) ? e.map(Ae) : [Ae(e)], ma = (e, t, n) => {
  if (t._n)
    return t;
  const o = jo((...s) => (process.env.NODE_ENV !== "production" && ae && (!n || n.root === ae.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ys(t(...s))), n);
  return o._c = !1, o;
}, Ci = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if ($i(s)) continue;
    const r = e[s];
    if (I(r))
      t[s] = ma(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = ys(r);
      t[s] = () => i;
    }
  }
}, Ii = (e, t) => {
  process.env.NODE_ENV !== "production" && !Es(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ys(t);
  e.slots.default = () => n;
}, _a = (e, t) => {
  const n = e.slots = Di();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (oe(n, t), Un(n, "_", o, !0)) : Ci(t, n);
  } else t && Ii(e, t);
}, ga = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = Q;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ct ? (oe(s, t), Le(e, "set", "$slots")) : n && l === 1 ? r = !1 : (oe(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, Ci(t, s)), i = t;
  } else t && (Ii(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !$i(l) && i[l] == null && delete s[l];
};
function Go(e, t, n, o, s = !1) {
  if (C(e)) {
    e.forEach(
      (m, D) => Go(
        m,
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
  const r = o.shapeFlag & 4 ? po(o.component) : o.el, i = s ? null : r, { i: l, r: c } = e;
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
    const m = se(c), D = ne(c);
    if (m || D) {
      const T = () => {
        if (e.f) {
          const F = m ? H(d, c) ? d[c] : p[c] : c.value;
          s ? C(F) && es(F, r) : C(F) ? F.includes(r) || F.push(r) : m ? (p[c] = [r], H(d, c) && (d[c] = p[c])) : (c.value = [r], e.k && (p[e.k] = c.value));
        } else m ? (p[c] = i, H(d, c) && (d[c] = i)) : D ? (c.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && O("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (T.id = -1, Ne(T, n)) : T();
    } else process.env.NODE_ENV !== "production" && O("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Xt, ct;
function Ge(e, t) {
  e.appContext.config.performance && qn() && ct.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Sc(e, t, qn() ? ct.now() : Date.now());
}
function Ke(e, t) {
  if (e.appContext.config.performance && qn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ct.mark(o), ct.measure(
      `<${ho(e, e.type)}> ${t}`,
      n,
      o
    ), ct.clearMarks(n), ct.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Vc(e, t, qn() ? ct.now() : Date.now());
}
function qn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, ct = window.performance) : Xt = !1), Xt;
}
function va() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ne = Mc;
function ya(e) {
  return Ea(e);
}
function Ea(e, t) {
  va();
  const n = ss();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && hs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    nextSibling: m,
    setScopeId: D = le,
    insertStaticContent: T
  } = e, F = (a, f, h, _ = null, g = null, b = null, w = void 0, y = null, N = process.env.NODE_ENV !== "production" && Ct ? !1 : !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Zt(a, f) && (_ = Nn(a), st(a, g, b, !0), a = null), f.patchFlag === -2 && (N = !1, f.dynamicChildren = null);
    const { type: v, ref: S, shapeFlag: $ } = f;
    switch (v) {
      case En:
        he(a, f, h, _);
        break;
      case De:
        J(a, f, h, _);
        break;
      case Rn:
        a == null ? j(f, h, _, w) : process.env.NODE_ENV !== "production" && U(a, f, h, w);
        break;
      case re:
        ue(
          a,
          f,
          h,
          _,
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
          _,
          g,
          b,
          w,
          y,
          N
        ) : $ & 6 ? ot(
          a,
          f,
          h,
          _,
          g,
          b,
          w,
          y,
          N
        ) : $ & 64 || $ & 128 ? v.process(
          a,
          f,
          h,
          _,
          g,
          b,
          w,
          y,
          N,
          Yt
        ) : process.env.NODE_ENV !== "production" && O("Invalid VNode type:", v, `(${typeof v})`);
    }
    S != null && g && Go(S, a && a.ref, b, f || a, !f);
  }, he = (a, f, h, _) => {
    if (a == null)
      o(
        f.el = l(f.children),
        h,
        _
      );
    else {
      const g = f.el = a.el;
      f.children !== a.children && u(g, f.children);
    }
  }, J = (a, f, h, _) => {
    a == null ? o(
      f.el = c(f.children || ""),
      h,
      _
    ) : f.el = a.el;
  }, j = (a, f, h, _) => {
    [a.el, a.anchor] = T(
      a.children,
      f,
      h,
      _,
      a.el,
      a.anchor
    );
  }, U = (a, f, h, _) => {
    if (f.children !== a.children) {
      const g = m(a.anchor);
      K(a), [f.el, f.anchor] = T(
        f.children,
        h,
        g,
        _
      );
    } else
      f.el = a.el, f.anchor = a.anchor;
  }, G = ({ el: a, anchor: f }, h, _) => {
    let g;
    for (; a && a !== f; )
      g = m(a), o(a, h, _), a = g;
    o(f, h, _);
  }, K = ({ el: a, anchor: f }) => {
    let h;
    for (; a && a !== f; )
      h = m(a), s(a), a = h;
    s(f);
  }, B = (a, f, h, _, g, b, w, y, N) => {
    f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"), a == null ? E(
      f,
      h,
      _,
      g,
      b,
      w,
      y,
      N
    ) : A(
      a,
      f,
      g,
      b,
      w,
      y,
      N
    );
  }, E = (a, f, h, _, g, b, w, y) => {
    let N, v;
    const { props: S, shapeFlag: $, transition: P, dirs: M } = a;
    if (N = a.el = i(
      a.type,
      b,
      S && S.is,
      S
    ), $ & 8 ? p(N, a.children) : $ & 16 && Z(
      a.children,
      N,
      null,
      _,
      g,
      wo(a, b),
      w,
      y
    ), M && Et(a, null, _, "created"), te(N, a, a.scopeId, w, _), S) {
      for (const ee in S)
        ee !== "value" && !rn(ee) && r(
          N,
          ee,
          null,
          S[ee],
          b,
          a.children,
          _,
          g,
          Be
        );
      "value" in S && r(N, "value", null, S.value, b), (v = S.onVnodeBeforeMount) && Fe(v, _, a);
    }
    process.env.NODE_ENV !== "production" && (Un(N, "__vnode", a, !0), Un(N, "__vueParentComponent", _, !0)), M && Et(a, null, _, "beforeMount");
    const k = ba(g, P);
    k && P.beforeEnter(N), o(N, f, h), ((v = S && S.onVnodeMounted) || k || M) && Ne(() => {
      v && Fe(v, _, a), k && P.enter(N), M && Et(a, null, _, "mounted");
    }, g);
  }, te = (a, f, h, _, g) => {
    if (h && D(a, h), _)
      for (let b = 0; b < _.length; b++)
        D(a, _[b]);
    if (g) {
      let b = g.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = _s(b.children) || b), f === b) {
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
  }, Z = (a, f, h, _, g, b, w, y, N = 0) => {
    for (let v = N; v < a.length; v++) {
      const S = a[v] = y ? lt(a[v]) : Ae(a[v]);
      F(
        null,
        S,
        f,
        h,
        _,
        g,
        b,
        w,
        y
      );
    }
  }, A = (a, f, h, _, g, b, w) => {
    const y = f.el = a.el;
    process.env.NODE_ENV !== "production" && (y.__vnode = f);
    let { patchFlag: N, dynamicChildren: v, dirs: S } = f;
    N |= a.patchFlag & 16;
    const $ = a.props || Q, P = f.props || Q;
    let M;
    if (h && bt(h, !1), (M = P.onVnodeBeforeUpdate) && Fe(M, h, f, a), S && Et(f, a, h, "beforeUpdate"), h && bt(h, !0), process.env.NODE_ENV !== "production" && Ct && (N = 0, w = !1, v = null), v ? (V(
      a.dynamicChildren,
      v,
      y,
      h,
      _,
      wo(f, g),
      b
    ), process.env.NODE_ENV !== "production" && xn(a, f)) : w || xe(
      a,
      f,
      y,
      null,
      h,
      _,
      wo(f, g),
      b,
      !1
    ), N > 0) {
      if (N & 16)
        W(
          y,
          f,
          $,
          P,
          h,
          _,
          g
        );
      else if (N & 2 && $.class !== P.class && r(y, "class", null, P.class, g), N & 4 && r(y, "style", $.style, P.style, g), N & 8) {
        const k = f.dynamicProps;
        for (let ee = 0; ee < k.length; ee++) {
          const z = k[ee], fe = $[z], Se = P[z];
          (Se !== fe || z === "value") && r(
            y,
            z,
            fe,
            Se,
            g,
            a.children,
            h,
            _,
            Be
          );
        }
      }
      N & 1 && a.children !== f.children && p(y, f.children);
    } else !w && v == null && W(
      y,
      f,
      $,
      P,
      h,
      _,
      g
    );
    ((M = P.onVnodeUpdated) || S) && Ne(() => {
      M && Fe(M, h, f, a), S && Et(f, a, h, "updated");
    }, _);
  }, V = (a, f, h, _, g, b, w) => {
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
        _,
        g,
        b,
        w,
        !0
      );
    }
  }, W = (a, f, h, _, g, b, w) => {
    if (h !== _) {
      if (h !== Q)
        for (const y in h)
          !rn(y) && !(y in _) && r(
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
      for (const y in _) {
        if (rn(y)) continue;
        const N = _[y], v = h[y];
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
      "value" in _ && r(a, "value", h.value, _.value, w);
    }
  }, ue = (a, f, h, _, g, b, w, y, N) => {
    const v = f.el = a ? a.el : l(""), S = f.anchor = a ? a.anchor : l("");
    let { patchFlag: $, dynamicChildren: P, slotScopeIds: M } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ct || $ & 2048) && ($ = 0, N = !1, P = null), M && (y = y ? y.concat(M) : M), a == null ? (o(v, h, _), o(S, h, _), Z(
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
    )) : $ > 0 && $ & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (V(
      a.dynamicChildren,
      P,
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
  }, ot = (a, f, h, _, g, b, w, y, N) => {
    f.slotScopeIds = y, a == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      h,
      _,
      w,
      N
    ) : Te(
      f,
      h,
      _,
      g,
      b,
      w,
      N
    ) : _e(a, f, N);
  }, Te = (a, f, h, _, g, b, w) => {
    const y = a.component = Fa(
      a,
      _,
      g
    );
    if (process.env.NODE_ENV !== "production" && y.type.__hmrId && gc(y), process.env.NODE_ENV !== "production" && (In(a), Ge(y, "mount")), Es(a) && (y.ctx.renderer = Yt), process.env.NODE_ENV !== "production" && Ge(y, "init"), Ma(y), process.env.NODE_ENV !== "production" && Ke(y, "init"), y.asyncDep) {
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
  }, _e = (a, f, h) => {
    const _ = f.component = a.component;
    if (xc(a, f, h))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && In(f), x(_, f, h), process.env.NODE_ENV !== "production" && Tn();
        return;
      } else
        _.next = f, mc(_.update), _.effect.dirty = !0, _.update();
    else
      f.el = a.el, _.vnode = f;
  }, L = (a, f, h, _, g, b, w) => {
    const y = () => {
      if (a.isMounted) {
        let { next: S, bu: $, u: P, parent: M, vnode: k } = a;
        {
          const Mt = Ti(a);
          if (Mt) {
            S && (S.el = k.el, x(a, S, w)), Mt.asyncDep.then(() => {
              a.isUnmounted || y();
            });
            return;
          }
        }
        let ee = S, z;
        process.env.NODE_ENV !== "production" && In(S || a.vnode), bt(a, !1), S ? (S.el = k.el, x(a, S, w)) : S = k, $ && Ht($), (z = S.props && S.props.onVnodeBeforeUpdate) && Fe(z, M, S, k), bt(a, !0), process.env.NODE_ENV !== "production" && Ge(a, "render");
        const fe = No(a);
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
        ), process.env.NODE_ENV !== "production" && Ke(a, "patch"), S.el = fe.el, ee === null && Rc(a, fe.el), P && Ne(P, g), (z = S.props && S.props.onVnodeUpdated) && Ne(
          () => Fe(z, M, S, k),
          g
        ), process.env.NODE_ENV !== "production" && ui(a), process.env.NODE_ENV !== "production" && Tn();
      } else {
        let S;
        const { el: $, props: P } = f, { bm: M, m: k, parent: ee } = a, z = cn(f);
        if (bt(a, !1), M && Ht(M), !z && (S = P && P.onVnodeBeforeMount) && Fe(S, ee, f), bt(a, !0), $ && Ps) {
          const fe = () => {
            process.env.NODE_ENV !== "production" && Ge(a, "render"), a.subTree = No(a), process.env.NODE_ENV !== "production" && Ke(a, "render"), process.env.NODE_ENV !== "production" && Ge(a, "hydrate"), Ps(
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
          const fe = a.subTree = No(a);
          process.env.NODE_ENV !== "production" && Ke(a, "render"), process.env.NODE_ENV !== "production" && Ge(a, "patch"), F(
            null,
            fe,
            h,
            _,
            a,
            g,
            b
          ), process.env.NODE_ENV !== "production" && Ke(a, "patch"), f.el = fe.el;
        }
        if (k && Ne(k, g), !z && (S = P && P.onVnodeMounted)) {
          const fe = f;
          Ne(
            () => Fe(S, ee, fe),
            g
          );
        }
        (f.shapeFlag & 256 || ee && cn(ee.vnode) && ee.vnode.shapeFlag & 256) && a.a && Ne(a.a, g), a.isMounted = !0, process.env.NODE_ENV !== "production" && Oc(a), f = h = _ = null;
      }
    }, N = a.effect = new is(
      y,
      le,
      () => io(v),
      a.scope
      // track it in component's effect scope
    ), v = a.update = () => {
      N.dirty && N.run();
    };
    v.id = a.uid, bt(a, !0), process.env.NODE_ENV !== "production" && (N.onTrack = a.rtc ? (S) => Ht(a.rtc, S) : void 0, N.onTrigger = a.rtg ? (S) => Ht(a.rtg, S) : void 0, v.ownerInstance = a), v();
  }, x = (a, f, h) => {
    f.component = a;
    const _ = a.vnode.props;
    a.vnode = f, a.next = null, aa(a, f.props, _, h), ga(a, f.children, h), Xe(), Us(a), Ze();
  }, xe = (a, f, h, _, g, b, w, y, N = !1) => {
    const v = a && a.children, S = a ? a.shapeFlag : 0, $ = f.children, { patchFlag: P, shapeFlag: M } = f;
    if (P > 0) {
      if (P & 128) {
        zt(
          v,
          $,
          h,
          _,
          g,
          b,
          w,
          y,
          N
        );
        return;
      } else if (P & 256) {
        _o(
          v,
          $,
          h,
          _,
          g,
          b,
          w,
          y,
          N
        );
        return;
      }
    }
    M & 8 ? (S & 16 && Be(v, g, b), $ !== v && p(h, $)) : S & 16 ? M & 16 ? zt(
      v,
      $,
      h,
      _,
      g,
      b,
      w,
      y,
      N
    ) : Be(v, g, b, !0) : (S & 8 && p(h, ""), M & 16 && Z(
      $,
      h,
      _,
      g,
      b,
      w,
      y,
      N
    ));
  }, _o = (a, f, h, _, g, b, w, y, N) => {
    a = a || Wt, f = f || Wt;
    const v = a.length, S = f.length, $ = Math.min(v, S);
    let P;
    for (P = 0; P < $; P++) {
      const M = f[P] = N ? lt(f[P]) : Ae(f[P]);
      F(
        a[P],
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
      _,
      g,
      b,
      w,
      y,
      N,
      $
    );
  }, zt = (a, f, h, _, g, b, w, y, N) => {
    let v = 0;
    const S = f.length;
    let $ = a.length - 1, P = S - 1;
    for (; v <= $ && v <= P; ) {
      const M = a[v], k = f[v] = N ? lt(f[v]) : Ae(f[v]);
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
    for (; v <= $ && v <= P; ) {
      const M = a[$], k = f[P] = N ? lt(f[P]) : Ae(f[P]);
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
      $--, P--;
    }
    if (v > $) {
      if (v <= P) {
        const M = P + 1, k = M < S ? f[M].el : _;
        for (; v <= P; )
          F(
            null,
            f[v] = N ? lt(f[v]) : Ae(f[v]),
            h,
            k,
            g,
            b,
            w,
            y,
            N
          ), v++;
      }
    } else if (v > P)
      for (; v <= $; )
        st(a[v], g, b, !0), v++;
    else {
      const M = v, k = v, ee = /* @__PURE__ */ new Map();
      for (v = k; v <= P; v++) {
        const Ee = f[v] = N ? lt(f[v]) : Ae(f[v]);
        Ee.key != null && (process.env.NODE_ENV !== "production" && ee.has(Ee.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), ee.set(Ee.key, v));
      }
      let z, fe = 0;
      const Se = P - k + 1;
      let Mt = !1, $s = 0;
      const Qt = new Array(Se);
      for (v = 0; v < Se; v++) Qt[v] = 0;
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
          for (z = k; z <= P; z++)
            if (Qt[z - k] === 0 && Zt(Ee, f[z])) {
              Re = z;
              break;
            }
        Re === void 0 ? st(Ee, g, b, !0) : (Qt[Re - k] = v + 1, Re >= $s ? $s = Re : Mt = !0, F(
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
      const Cs = Mt ? Na(Qt) : Wt;
      for (z = Cs.length - 1, v = Se - 1; v >= 0; v--) {
        const Ee = k + v, Re = f[Ee], Is = Ee + 1 < S ? f[Ee + 1].el : _;
        Qt[v] === 0 ? F(
          null,
          Re,
          h,
          Is,
          g,
          b,
          w,
          y,
          N
        ) : Mt && (z < 0 || v !== Cs[z] ? jt(Re, h, Is, 2) : z--);
      }
    }
  }, jt = (a, f, h, _, g = null) => {
    const { el: b, type: w, transition: y, children: N, shapeFlag: v } = a;
    if (v & 6) {
      jt(a.component.subTree, f, h, _);
      return;
    }
    if (v & 128) {
      a.suspense.move(f, h, _);
      return;
    }
    if (v & 64) {
      w.move(a, f, h, Yt);
      return;
    }
    if (w === re) {
      o(b, f, h);
      for (let $ = 0; $ < N.length; $++)
        jt(N[$], f, h, _);
      o(a.anchor, f, h);
      return;
    }
    if (w === Rn) {
      G(a, f, h);
      return;
    }
    if (_ !== 2 && v & 1 && y)
      if (_ === 0)
        y.beforeEnter(b), o(b, f, h), Ne(() => y.enter(b), g);
      else {
        const { leave: $, delayLeave: P, afterLeave: M } = y, k = () => o(b, f, h), ee = () => {
          $(b, () => {
            k(), M && M();
          });
        };
        P ? P(b, k, ee) : ee();
      }
    else
      o(b, f, h);
  }, st = (a, f, h, _ = !1, g = !1) => {
    const {
      type: b,
      props: w,
      ref: y,
      children: N,
      dynamicChildren: v,
      shapeFlag: S,
      patchFlag: $,
      dirs: P,
      memoIndex: M
    } = a;
    if ($ === -2 && (g = !1), y != null && Go(y, null, h, a, !0), M != null && (f.renderCache[M] = void 0), S & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const k = S & 1 && P, ee = !cn(a);
    let z;
    if (ee && (z = w && w.onVnodeBeforeUnmount) && Fe(z, f, a), S & 6)
      hl(a.component, h, _);
    else {
      if (S & 128) {
        a.suspense.unmount(h, _);
        return;
      }
      k && Et(a, null, f, "beforeUnmount"), S & 64 ? a.type.remove(
        a,
        f,
        h,
        Yt,
        _
      ) : v && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== re || $ > 0 && $ & 64) ? Be(
        v,
        f,
        h,
        !1,
        !0
      ) : (b === re && $ & 384 || !g && S & 16) && Be(N, f, h), _ && go(a);
    }
    (ee && (z = w && w.onVnodeUnmounted) || k) && Ne(() => {
      z && Fe(z, f, a), k && Et(a, null, f, "unmounted");
    }, h);
  }, go = (a) => {
    const { type: f, el: h, anchor: _, transition: g } = a;
    if (f === re) {
      process.env.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && g && !g.persisted ? a.children.forEach((w) => {
        w.type === De ? s(w.el) : go(w);
      }) : pl(h, _);
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
  }, pl = (a, f) => {
    let h;
    for (; a !== f; )
      h = m(a), s(a), a = h;
    s(f);
  }, hl = (a, f, h) => {
    process.env.NODE_ENV !== "production" && a.type.__hmrId && vc(a);
    const { bum: _, scope: g, update: b, subTree: w, um: y, m: N, a: v } = a;
    nr(N), nr(v), _ && Ht(_), g.stop(), b && (b.active = !1, st(w, a, f, h)), y && Ne(y, f), Ne(() => {
      a.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Dc(a);
  }, Be = (a, f, h, _ = !1, g = !1, b = 0) => {
    for (let w = b; w < a.length; w++)
      st(a[w], f, h, _, g);
  }, Nn = (a) => a.shapeFlag & 6 ? Nn(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : m(a.anchor || a.el);
  let vo = !1;
  const Vs = (a, f, h) => {
    a == null ? f._vnode && st(f._vnode, null, null, !0) : F(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      h
    ), vo || (vo = !0, Us(), li(), vo = !1), f._vnode = a;
  }, Yt = {
    p: F,
    um: st,
    m: jt,
    r: go,
    mt: Te,
    mc: Z,
    pc: xe,
    pbc: V,
    n: Nn,
    o: e
  };
  let As, Ps;
  return {
    render: Vs,
    hydrate: As,
    createApp: sa(Vs, As)
  };
}
function wo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ba(e, t) {
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
function Na(e) {
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
function nr(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const Oa = Symbol.for("v-scx"), wa = () => {
  {
    const e = an(Oa);
    return e || process.env.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, An = {};
function Jt(e, t, n) {
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
  let d, m = !1, D = !1;
  if (ne(e) ? (d = () => e.value, m = Pt(e)) : qe(e) ? (d = () => p(e), m = !0) : C(e) ? (D = !0, m = e.some((E) => qe(E) || Pt(E)), d = () => e.map((E) => {
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
  if (fo)
    if (F = le, t ? n && Ie(t, u, 3, [
      d(),
      D ? [] : void 0,
      F
    ]) : d(), s === "sync") {
      const E = wa();
      he = E.__watcherHandles || (E.__watcherHandles = []);
    } else
      return le;
  let J = D ? new Array(e.length).fill(An) : An;
  const j = () => {
    if (!(!G.active || !G.dirty))
      if (t) {
        const E = G.run();
        (o || m || (D ? E.some((te, Z) => _t(te, J[Z])) : _t(E, J))) && (T && T(), Ie(t, u, 3, [
          E,
          // pass undefined as the old value when it's changed for the first time
          J === An ? void 0 : D && J[0] === An ? [] : J,
          F
        ]), J = E);
      } else
        G.run();
  };
  j.allowRecurse = !!t;
  let U;
  s === "sync" ? U = j : s === "post" ? U = () => Ne(j, u && u.suspense) : (j.pre = !0, u && (j.id = u.uid), U = () => io(j));
  const G = new is(d, le, U), K = Fr(), B = () => {
    G.stop(), K && es(K.effects, G);
  };
  return process.env.NODE_ENV !== "production" && (G.onTrack = i, G.onTrigger = l), t ? n ? j() : J = G.run() : s === "post" ? Ne(
    G.run.bind(G),
    u && u.suspense
  ) : G.run(), he && he.push(B), B;
}
function Da(e, t, n) {
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
  else if ($r(e)) {
    for (const o in e)
      at(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && at(e[o], t, n);
  }
  return e;
}
const Es = (e) => e.type.__isKeepAlive;
function Sa(e, t) {
  Fi(e, "a", t);
}
function Va(e, t) {
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
  if (ao(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Es(s.parent.vnode) && Aa(o, t, n, s), s = s.parent;
  }
}
function Aa(e, t, n, o) {
  const s = ao(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  gi(() => {
    es(o[t], s);
  }, n);
}
function ji(e, t) {
  e.shapeFlag & 6 && e.component ? ji(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const Pa = (e) => e.__isTeleport, re = Symbol.for("v-fgt"), En = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), Rn = Symbol.for("v-stc"), un = [];
let $e = null;
function q(e = !1) {
  un.push($e = e ? null : []);
}
function $a() {
  un.pop(), $e = un[un.length - 1] || null;
}
let mn = 1;
function or(e) {
  mn += e;
}
function Mi(e) {
  return e.dynamicChildren = mn > 0 ? $e || Wt : null, $a(), mn > 0 && $e && $e.push(e), e;
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
function bs(e, t, n, o, s) {
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
function uo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Ot.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Ca = (...e) => ki(
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
    scopeId: co,
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
  return l ? (Os(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && O("VNode created with invalid key (NaN). VNode type:", c.type), mn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && $e.push(c), c;
}
const ye = process.env.NODE_ENV !== "production" ? Ca : ki;
function ki(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === mi) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = De), uo(e)) {
    const l = vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Os(l, n), mn > 0 && !r && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (Gi(e) && (e = e.__vccOpts), t) {
    t = Ia(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = qt(l)), Y(c) && (Wn(c) && !C(c) && (c = oe({}, c)), t.style = rs(c));
  }
  const i = se(e) ? 1 : jc(e) ? 128 : Pa(e) ? 64 : Y(e) ? 4 : I(e) ? 2 : 0;
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
function Ia(e) {
  return e ? Wn(e) || Si(e) ? oe({}, e) : e : null;
}
function vt(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: c } = e, u = t ? Ta(s || {}, t) : s, p = {
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
function Ns(e = " ", t = 0) {
  return ye(En, null, e, t);
}
function Ae(e) {
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
function Os(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Os(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Si(t) ? t._ctx = ce : s === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ns(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ta(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = qt([t.class, o.class]));
      else if (s === "style")
        t.style = rs([t.style, o.style]);
      else if (gn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(C(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Fe(e, t, n, o = null) {
  Ie(e, t, 7, [
    n,
    o
  ]);
}
const xa = Oi();
let Ra = 0;
function Fa(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || xa, r = {
    uid: Ra++,
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
    scope: new xr(
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
    propsOptions: Ai(o, s),
    emitsOptions: di(o, s),
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
  return process.env.NODE_ENV !== "production" ? r.ctx = qc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pc.bind(null, r), e.ce && e.ce(r), r;
}
let ae = null;
const Ui = () => ae || ce;
let zn, Ko;
{
  const e = ss(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  zn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ae = n
  ), Ko = t(
    "__VUE_SSR_SETTERS__",
    (n) => fo = n
  );
}
const bn = (e) => {
  const t = ae;
  return zn(e), e.scope.on(), () => {
    e.scope.off(), zn(t);
  };
}, sr = () => {
  ae && ae.scope.off(), zn(null);
}, ja = /* @__PURE__ */ Qe("slot,component");
function Jo(e, { isNativeTag: t }) {
  (ja(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Bi(e) {
  return e.vnode.shapeFlag & 4;
}
let fo = !1;
function Ma(e, t = !1) {
  t && Ko(t);
  const { props: n, children: o } = e.vnode, s = Bi(e);
  la(e, n, s, t), _a(e, o);
  const r = s ? La(e, t) : void 0;
  return t && Ko(!1), r;
}
function La(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Jo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        Jo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        vi(r[i]);
    }
    o.compilerOptions && ka() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bi), process.env.NODE_ENV !== "production" && zc(e);
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
    if (Ze(), i(), ts(l)) {
      if (l.then(sr, sr), t)
        return l.then((c) => {
          rr(e, c, t);
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
      rr(e, l, t);
  } else
    Wi(e, t);
}
function rr(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (process.env.NODE_ENV !== "production" && uo(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ti(t), process.env.NODE_ENV !== "production" && Yc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Wi(e, n);
}
let qo;
const ka = () => !qo;
function Wi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && qo && !o.render) {
      const s = o.template || vs(e).template;
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
        o.render = qo(s, u), process.env.NODE_ENV !== "production" && Ke(e, "compile");
      }
    }
    e.render = o.render || le;
  }
  {
    const s = bn(e);
    Xe();
    try {
      Xc(e);
    } finally {
      Ze(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === le && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const ir = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Kn(), me(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return me(e, "get", ""), e[t];
  }
};
function Ha(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return me(e, "get", "$slots"), t[n];
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
        return n || (n = new Proxy(e.attrs, ir));
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
      attrs: new Proxy(e.attrs, ir),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function po(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ti(ut(e.exposed)), {
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
function ws(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ho(e, t, n = !1) {
  let o = ws(t);
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
function Gi(e) {
  return I(e) && "__vccOpts" in e;
}
const Ye = (e, t) => {
  const n = nc(e, t, fo);
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
        ["span", e, Pt(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${xt(d) ? " (readonly)" : ""}`
      ] : xt(d) ? [
        "div",
        {},
        ["span", e, Pt(d) ? "ShallowReadonly" : "Readonly"],
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
    const m = [];
    d.type.props && d.props && m.push(i("props", R(d.props))), d.setupState !== Q && m.push(i("setup", d.setupState)), d.data !== Q && m.push(i("data", R(d.data)));
    const D = c(d, "computed");
    D && m.push(i("computed", D));
    const T = c(d, "inject");
    return T && m.push(i("injected", T)), m.push([
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
    ]), m;
  }
  function i(d, m) {
    return m = oe({}, m), Object.keys(m).length ? [
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
        ...Object.keys(m).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          l(m[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : Y(d) ? ["object", { object: m ? R(d) : d }] : ["span", n, String(d)];
  }
  function c(d, m) {
    const D = d.type;
    if (I(D))
      return;
    const T = {};
    for (const F in d.ctx)
      u(D, F, m) && (T[F] = d.ctx[F]);
    return T;
  }
  function u(d, m, D) {
    const T = d[D];
    if (C(T) && T.includes(m) || Y(T) && m in T || d.extends && u(d.extends, m, D) || d.mixins && d.mixins.some((F) => u(F, m, D)))
      return !0;
  }
  function p(d) {
    return Pt(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const lr = "3.4.31", ht = process.env.NODE_ENV !== "production" ? O : le;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ka = "http://www.w3.org/2000/svg", Ja = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, cr = Je && /* @__PURE__ */ Je.createElement("template"), qa = {
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
      cr.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const l = cr.content;
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
const Yn = Symbol("_vod"), Ki = Symbol("_vsh"), zo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Yn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : en(e, t);
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
process.env.NODE_ENV !== "production" && (zo.name = "show");
function en(e, t) {
  e.style.display = t ? e[Yn] : "none", e[Ki] = !t;
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
  } else t && e.removeAttribute("style");
  Yn in e && (e[Yn] = r ? o.display : "", e[Ki] && (o.display = "none"));
}
const eu = /[^\\];\s*$/, ar = /\s*!important$/;
function jn(e, t, n) {
  if (C(n))
    n.forEach((o) => jn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && eu.test(n) && ht(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = tu(e, t);
    ar.test(n) ? e.setProperty(
      mt(o),
      n.replace(ar, ""),
      "important"
    ) : e[o] = n;
  }
}
const ur = ["Webkit", "Moz", "ms"], Do = {};
function tu(e, t) {
  const n = Do[t];
  if (n)
    return n;
  let o = He(t);
  if (o !== "filter" && o in e)
    return Do[t] = o;
  o = Tt(o);
  for (let s = 0; s < ur.length; s++) {
    const r = ur[s] + o;
    if (r in e)
      return Do[t] = r;
  }
  return t;
}
const fr = "http://www.w3.org/1999/xlink";
function dr(e, t, n, o, s, r = Cl(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fr, t.slice(6, t.length)) : e.setAttributeNS(fr, t, n) : n == null || r && !Cr(n) ? e.removeAttribute(t) : e.setAttribute(
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
    u === "boolean" ? n = Cr(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
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
function Ut(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ou(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const pr = Symbol("_vei");
function su(e, t, n, o, s = null) {
  const r = e[pr] || (e[pr] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? mr(o, t) : o;
  else {
    const [l, c] = ru(t);
    if (o) {
      const u = r[t] = cu(
        process.env.NODE_ENV !== "production" ? mr(o, t) : o,
        s
      );
      Ut(e, l, u, c);
    } else i && (ou(e, l, i, c), r[t] = void 0);
  }
}
const hr = /(?:Once|Passive|Capture)$/;
function ru(e) {
  let t;
  if (hr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : mt(e.slice(2)), t];
}
let So = 0;
const iu = /* @__PURE__ */ Promise.resolve(), lu = () => So || (iu.then(() => So = 0), So = Date.now());
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
const _r = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
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
  ), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && dr(e, t, o, u, i, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), dr(e, t, o, u));
};
function fu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _r(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return _r(t) && se(n) ? !1 : t in e;
}
const gr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => Ht(t, n) : t;
};
function du(e) {
  e.target.composing = !0;
}
function vr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Vo = Symbol("_assign"), pu = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
    e[Vo] = gr(s);
    const r = o || s.props && s.props.type === "number";
    Ut(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = $o(l)), e[Vo](l);
    }), n && Ut(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ut(e, "compositionstart", du), Ut(e, "compositionend", vr), Ut(e, "change", vr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: s, number: r } }, i) {
    if (e[Vo] = gr(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? $o(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (o && t === n || s && e.value.trim() === c) || (e.value = c));
  }
}, hu = /* @__PURE__ */ oe({ patchProp: uu }, qa);
let yr;
function mu() {
  return yr || (yr = ya(hu));
}
const _u = (...e) => {
  const t = mu().createApp(...e);
  process.env.NODE_ENV !== "production" && (vu(t), yu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Eu(o);
    if (!s) return;
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
    value: (t) => Vl(t) || Al(t) || Pl(t),
    writable: !1
  });
}
function yu(e) {
  {
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
var Ji = !1;
function Pn(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Ao(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Nu() {
  return qi().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function qi() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ou = typeof Proxy == "function", wu = "devtools-plugin:setup", Du = "plugin:settings:set";
let Lt, Yo;
function Su() {
  var e;
  return Lt !== void 0 || (typeof window < "u" && window.performance ? (Lt = !0, Yo = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Lt = !0, Yo = globalThis.perf_hooks.performance) : Lt = !1), Lt;
}
function Vu() {
  return Su() ? Yo.now() : Date.now();
}
class Au {
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
function zi(e, t) {
  const n = e, o = qi(), s = Nu(), r = Ou && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    s.emit(wu, e, t);
  else {
    const i = r ? new Au(n, s) : null;
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
const _n = (e) => sn = e, Yi = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
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
const mo = typeof window < "u", fn = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && mo, Er = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Pu(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Ds(e, t, n) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    Zi(o.response, t, n);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function Qi(e) {
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
const Ln = typeof navigator == "object" ? navigator : { userAgent: "" }, Xi = /Macintosh/.test(Ln.userAgent) && /AppleWebKit/.test(Ln.userAgent) && !/Safari/.test(Ln.userAgent), Zi = mo ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Xi ? $u : (
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
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? Qi(o.href) ? Ds(e, t, n) : (o.target = "_blank", Mn(o)) : Mn(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    Mn(o);
  }, 0));
}
function Cu(e, t = "download", n) {
  if (typeof e == "string")
    if (Qi(e))
      Ds(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        Mn(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Pu(e, n), t);
}
function Iu(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Ds(e, t, n);
  const s = e.type === "application/octet-stream", r = /constructor/i.test(String(Er.HTMLElement)) || "safari" in Er, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || s && r || Xi) && typeof FileReader < "u") {
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
function Ss(e) {
  return "_a" in e && "install" in e;
}
function el() {
  if (!("clipboard" in navigator))
    return pe("Your browser doesn't support the Clipboard API", "error"), !0;
}
function tl(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (pe('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Tu(e) {
  if (!el())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), pe("Global state copied to clipboard.");
    } catch (t) {
      if (tl(t))
        return;
      pe("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function xu(e) {
  if (!el())
    try {
      nl(e, JSON.parse(await navigator.clipboard.readText())), pe("Global state pasted from clipboard.");
    } catch (t) {
      if (tl(t))
        return;
      pe("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Ru(e) {
  try {
    Zi(new Blob([JSON.stringify(e.state.value)], {
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
    nl(e, JSON.parse(o)), pe(`Global state imported from "${s.name}".`);
  } catch (t) {
    pe("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function nl(e, t) {
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
const ol = "🍍 Pinia (root)", Qo = "_root";
function Mu(e) {
  return Ss(e) ? {
    id: Qo,
    label: ol
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Lu(e) {
  if (Ss(e)) {
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
let Bt = !0;
const kn = [], wt = "pinia:mutations", ge = "pinia", { assign: Uu } = Object, Qn = (e) => "🍍 " + e;
function Bu(e, t) {
  zi({
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
            type: Qn(l.$id),
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
            type: Qn(l.$id),
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
        s = s.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? s.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(o.filter.toLowerCase()) : ol.toLowerCase().includes(o.filter.toLowerCase())) : s).map(Mu);
      }
    }), n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === ge) {
        const s = o.nodeId === Qo ? t : t._s.get(o.nodeId);
        if (!s)
          return;
        s && (o.state = Lu(s));
      }
    }), n.on.editInspectorState((o, s) => {
      if (o.app === e && o.inspectorId === ge) {
        const r = o.nodeId === Qo ? t : t._s.get(o.nodeId);
        if (!r)
          return pe(`store "${o.nodeId}" not found`, "error");
        const { path: i } = o;
        Ss(r) ? i.unshift("state") : (i.length !== 1 || !r._customProperties.has(i[0]) || i[0] in r.$state) && i.unshift("$state"), Bt = !1, o.set(r, i, o.state.value), Bt = !0;
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
        i[0] = "$state", Bt = !1, o.set(r, i, o.state.value), Bt = !0;
      }
    });
  });
}
function Wu(e, t) {
  kn.includes(Qn(t.$id)) || kn.push(Qn(t.$id)), zi({
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
      const p = sl++;
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
      Jt(() => ei(t[i]), (l, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(ge), Bt && n.addTimelineEvent({
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
      if (n.notifyComponentUpdate(), n.sendInspectorState(ge), !Bt)
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
let sl = 0, ft;
function br(e, t, n) {
  const o = t.reduce((s, r) => (s[r] = R(e)[r], s), {});
  for (const s in o)
    e[s] = function() {
      const r = sl, i = n ? new Proxy(e, {
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
  t._isOptionsAPI = !!n.state, br(t, Object.keys(n.actions), t._isOptionsAPI);
  const o = t._hotUpdate;
  R(t)._hotUpdate = function(s) {
    o.apply(this, arguments), br(t, Object.keys(s._hmrPayload.actions), !!t._isOptionsAPI);
  }, Wu(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Ku() {
  const e = Rr(!0), t = e.run(() => de({}));
  let n = [], o = [];
  const s = ut({
    install(r) {
      _n(s), s._a = r, r.provide(Yi, s), r.config.globalProperties.$pinia = s, fn && Bu(r, s), o.forEach((i) => n.push(i)), o = [];
    },
    use(r) {
      return !this._a && !Ji ? o.push(r) : n.push(r), this;
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
function rl(e, t) {
  for (const n in t) {
    const o = t[n];
    if (!(n in e))
      continue;
    const s = e[n];
    Ft(s) && Ft(o) && !ne(o) && !qe(o) ? e[n] = rl(s, o) : e[n] = o;
  }
  return e;
}
const il = () => {
};
function Nr(e, t, n, o = il) {
  e.push(t);
  const s = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), o());
  };
  return !n && Fr() && Tl(s), s;
}
function kt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Ju = (e) => e();
function Xo(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], s = e[n];
    Ft(s) && Ft(o) && e.hasOwnProperty(n) && !ne(o) && !qe(o) ? e[n] = Xo(s, o) : e[n] = o;
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
function Or(e) {
  return !!(ne(e) && e.effect);
}
function wr(e, t, n, o) {
  const { state: s, actions: r, getters: i } = t, l = n.state.value[e];
  let c;
  function u() {
    !l && (process.env.NODE_ENV === "production" || !o) && (n.state.value[e] = s ? s() : {});
    const p = process.env.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Hs(de(s ? s() : {}).value)
    ) : Hs(n.state.value[e]);
    return we(p, r, Object.keys(i || {}).reduce((d, m) => (process.env.NODE_ENV !== "production" && m in p && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${m}" in store "${e}".`), d[m] = ut(Ye(() => {
      _n(n);
      const D = n._s.get(e);
      return i[m].call(D, D);
    })), d), {}));
  }
  return c = Zo(e, u, t, n, o, !0), c;
}
function Zo(e, t, n = {}, o, s, r) {
  let i;
  const l = we({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const c = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Ji && (c.onTrigger = (A) => {
    u ? D = A : u == !1 && !E._hotUpdating && (Array.isArray(D) ? D.push(A) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, p, d = [], m = [], D;
  const T = o.state.value[e];
  !r && !T && (process.env.NODE_ENV === "production" || !s) && (o.state.value[e] = {});
  const F = de({});
  let he;
  function J(A) {
    let V;
    u = p = !1, process.env.NODE_ENV !== "production" && (D = []), typeof A == "function" ? (A(o.state.value[e]), V = {
      type: ke.patchFunction,
      storeId: e,
      events: D
    }) : (Xo(o.state.value[e], A), V = {
      type: ke.patchObject,
      payload: A,
      storeId: e,
      events: D
    });
    const W = he = Symbol();
    Ro().then(() => {
      he === W && (u = !0);
    }), p = !0, kt(d, V, o.state.value[e]);
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
    } : il
  );
  function U() {
    i.stop(), d = [], m = [], o._s.delete(e);
  }
  function G(A, V) {
    return function() {
      _n(o);
      const W = Array.from(arguments), ue = [], ot = [];
      function Te(x) {
        ue.push(x);
      }
      function _e(x) {
        ot.push(x);
      }
      kt(m, {
        args: W,
        name: A,
        store: E,
        after: Te,
        onError: _e
      });
      let L;
      try {
        L = V.apply(this && this.$id === e ? this : E, W);
      } catch (x) {
        throw kt(ot, x), x;
      }
      return L instanceof Promise ? L.then((x) => (kt(ue, x), x)).catch((x) => (kt(ot, x), Promise.reject(x))) : (kt(ue, L), L);
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
    $onAction: Nr.bind(null, m),
    $patch: J,
    $reset: j,
    $subscribe(A, V = {}) {
      const W = Nr(d, A, V.detached, () => ue()), ue = i.run(() => Jt(() => o.state.value[e], (ot) => {
        (V.flush === "sync" ? p : u) && A({
          storeId: e,
          type: ke.direct,
          events: D
        }, ot);
      }, we({}, c, V)));
      return W;
    },
    $dispose: U
  }, E = so(process.env.NODE_ENV !== "production" || fn ? we(
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
  const Z = (o._a && o._a.runWithContext || Ju)(() => o._e.run(() => (i = Rr()).run(t)));
  for (const A in Z) {
    const V = Z[A];
    if (ne(V) && !Or(V) || qe(V))
      process.env.NODE_ENV !== "production" && s ? Pn(F.value, A, Eo(Z, A)) : r || (T && zu(V) && (ne(V) ? V.value = T[A] : Xo(V, T[A])), o.state.value[e][A] = V), process.env.NODE_ENV !== "production" && K.state.push(A);
    else if (typeof V == "function") {
      const W = process.env.NODE_ENV !== "production" && s ? V : G(A, V);
      Z[A] = W, process.env.NODE_ENV !== "production" && (K.actions[A] = V), l.actions[A] = V;
    } else process.env.NODE_ENV !== "production" && Or(V) && (K.getters[A] = r ? (
      // @ts-expect-error
      n.getters[A]
    ) : V, mo && (Z._getters || // @ts-expect-error: same
    (Z._getters = ut([]))).push(A));
  }
  if (we(E, Z), we(R(E), Z), Object.defineProperty(E, "$state", {
    get: () => process.env.NODE_ENV !== "production" && s ? F.value : o.state.value[e],
    set: (A) => {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error("cannot set hotState");
      J((V) => {
        we(V, A);
      });
    }
  }), process.env.NODE_ENV !== "production" && (E._hotUpdate = ut((A) => {
    E._hotUpdating = !0, A._hmrPayload.state.forEach((V) => {
      if (V in E.$state) {
        const W = A.$state[V], ue = E.$state[V];
        typeof W == "object" && Ft(W) && Ft(ue) ? rl(W, ue) : A.$state[V] = ue;
      }
      Pn(E, V, Eo(A.$state, V));
    }), Object.keys(E.$state).forEach((V) => {
      V in A.$state || Ao(E, V);
    }), u = !1, p = !1, o.state.value[e] = Eo(A._hmrPayload, "hotState"), p = !0, Ro().then(() => {
      u = !0;
    });
    for (const V in A._hmrPayload.actions) {
      const W = A[V];
      Pn(E, V, G(V, W));
    }
    for (const V in A._hmrPayload.getters) {
      const W = A._hmrPayload.getters[V], ue = r ? (
        // special handling of options api
        Ye(() => (_n(o), W.call(E, E)))
      ) : W;
      Pn(E, V, ue);
    }
    Object.keys(E._hmrPayload.getters).forEach((V) => {
      V in A._hmrPayload.getters || Ao(E, V);
    }), Object.keys(E._hmrPayload.actions).forEach((V) => {
      V in A._hmrPayload.actions || Ao(E, V);
    }), E._hmrPayload = A._hmrPayload, E._getters = A._getters, E._hotUpdating = !1;
  })), fn) {
    const A = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((V) => {
      Object.defineProperty(E, V, we({ value: E[V] }, A));
    });
  }
  return o._p.forEach((A) => {
    if (fn) {
      const V = i.run(() => A({
        store: E,
        app: o._a,
        pinia: o,
        options: l
      }));
      Object.keys(V || {}).forEach((W) => E._customProperties.add(W)), we(E, V);
    } else
      we(E, i.run(() => A({
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
  o = e, s = r ? n : t;
  function i(l, c) {
    const u = ia();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && sn && sn._testing ? null : l) || (u ? an(Yi, null) : null), l && _n(l), process.env.NODE_ENV !== "production" && !sn)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    l = sn, l._s.has(o) || (r ? Zo(o, t, s, l) : wr(o, s, l), process.env.NODE_ENV !== "production" && (i._pinia = l));
    const p = l._s.get(o);
    if (process.env.NODE_ENV !== "production" && c) {
      const d = "__hot:" + o, m = r ? Zo(d, t, s, l, !0) : wr(d, we({}, s), l, !0);
      c._hotUpdate(m), delete l.state.value[d], l._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && mo) {
      const d = Ui();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !c) {
        const m = d.proxy, D = "_pStores" in m ? m._pStores : m._pStores = {};
        D[o] = p;
      }
    }
    return p;
  }
  return i.$id = o, i;
}
const ll = Yu("sidePanel", () => {
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
    const e = ll(), { closePanel: t } = e, n = Ye(() => e.isOpen), o = Ye(() => e.component), s = Ye(() => e.componentData);
    return {
      closePanel: t,
      isOpen: n,
      component: o,
      data: s
    };
  }
}), uf = { class: "sidebar_overlay" }, ff = { class: "sidebar_panel_content" };
function df(e, t, n, o, s, r) {
  return q(), X("div", {
    class: qt(["sidebar", { show: e.isOpen }])
  }, [
    ie("div", uf, [
      ie("div", ff, [
        (q(), bs(Fc(e.component), { data: e.data }, null, 8, ["data"]))
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
}), mf = { class: "pagination" }, _f = { class: "pagination-buttons" }, gf = ["disabled"], vf = ["onClick"], yf = ["disabled"];
function Ef(e, t, n, o, s, r) {
  return q(), X("div", mf, [
    ie("div", _f, [
      ie("button", {
        disabled: e.currentPage === 1,
        onClick: t[0] || (t[0] = (...i) => e.prevPage && e.prevPage(...i))
      }, "<", 8, gf),
      (q(!0), X(re, null, pt(e.pagesToShow, (i) => (q(), X("button", {
        key: i,
        class: qt({ active: e.currentPage === i, dots: i === "..." }),
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
}), Of = { class: "grid-header" }, wf = { class: "grid-header__row" }, Df = ["onClick"], Sf = ["onClick"];
function Vf(e, t, n, o, s, r) {
  return q(), X("table", null, [
    ie("thead", Of, [
      ie("tr", wf, [
        (q(!0), X(re, null, pt(e.columnLabels, (i, l) => (q(), X("th", { key: i }, [
          ie("span", {
            class: "grid-header__column",
            onClick: (c) => e.sort(l)
          }, [
            Ns(Ce(i) + " ", 1),
            Lo(ie("span", null, " ▲ ", 512), [
              [zo, e.sortField === l && e.sortOrder === "asc"]
            ]),
            Lo(ie("span", null, " ▼ ", 512), [
              [zo, e.sortField === l && e.sortOrder === "desc"]
            ])
          ], 8, Df)
        ]))), 128))
      ])
    ]),
    ie("tbody", null, [
      (q(!0), X(re, null, pt(e.tableData, (i, l) => (q(), X("tr", {
        class: qt({ active: e.activeHighlight(i) }),
        key: i,
        onClick: (c) => e.rowClick(i, l)
      }, [
        (q(!0), X(re, null, pt(i, (c) => (q(), X("td", { key: c }, Ce(Array.isArray(c) ? c.join(", ") : c), 1))), 128))
      ], 10, Sf))), 128))
    ])
  ]);
}
const Af = /* @__PURE__ */ nt(Nf, [["render", Vf]]), Pf = /* @__PURE__ */ tt({
  components: { Table: Af, Pagination: bf },
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
}), $f = { class: "grid-container" }, Cf = { class: "grid-header" }, If = { class: "grid-body" };
function Tf(e, t, n, o, s, r) {
  const i = gt("Table"), l = gt("Pagination");
  return q(), X("div", $f, [
    ie("div", Cf, [
      yi(e.$slots, "header", {}, void 0)
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
const xf = /* @__PURE__ */ nt(Pf, [["render", Tf], ["__scopeId", "data-v-604eb2be"]]), Rf = [
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
var Ff = typeof global == "object" && global && global.Object === Object && global, jf = typeof self == "object" && self && self.Object === Object && self, cl = Ff || jf || Function("return this")(), Xn = cl.Symbol, al = Object.prototype, Mf = al.hasOwnProperty, Lf = al.toString, tn = Xn ? Xn.toStringTag : void 0;
function kf(e) {
  var t = Mf.call(e, tn), n = e[tn];
  try {
    e[tn] = void 0;
    var o = !0;
  } catch {
  }
  var s = Lf.call(e);
  return o && (t ? e[tn] = n : delete e[tn]), s;
}
var Hf = Object.prototype, Uf = Hf.toString;
function Bf(e) {
  return Uf.call(e);
}
var Wf = "[object Null]", Gf = "[object Undefined]", Dr = Xn ? Xn.toStringTag : void 0;
function ul(e) {
  return e == null ? e === void 0 ? Gf : Wf : Dr && Dr in Object(e) ? kf(e) : Bf(e);
}
function fl(e) {
  return e != null && typeof e == "object";
}
var Kf = "[object Symbol]";
function Jf(e) {
  return typeof e == "symbol" || fl(e) && ul(e) == Kf;
}
var qf = Array.isArray, zf = /\s/;
function Yf(e) {
  for (var t = e.length; t-- && zf.test(e.charAt(t)); )
    ;
  return t;
}
var Qf = /^\s+/;
function Xf(e) {
  return e && e.slice(0, Yf(e) + 1).replace(Qf, "");
}
function Zn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Sr = NaN, Zf = /^[-+]0x[0-9a-f]+$/i, ed = /^0b[01]+$/i, td = /^0o[0-7]+$/i, nd = parseInt;
function Vr(e) {
  if (typeof e == "number")
    return e;
  if (Jf(e))
    return Sr;
  if (Zn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Zn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Xf(e);
  var n = ed.test(e);
  return n || td.test(e) ? nd(e.slice(2), n ? 2 : 8) : Zf.test(e) ? Sr : +e;
}
var Po = function() {
  return cl.Date.now();
}, od = "Expected a function", sd = Math.max, rd = Math.min;
function id(e, t, n) {
  var o, s, r, i, l, c, u = 0, p = !1, d = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(od);
  t = Vr(t) || 0, Zn(n) && (p = !!n.leading, d = "maxWait" in n, r = d ? sd(Vr(n.maxWait) || 0, t) : r, m = "trailing" in n ? !!n.trailing : m);
  function D(B) {
    var E = o, te = s;
    return o = s = void 0, u = B, i = e.apply(te, E), i;
  }
  function T(B) {
    return u = B, l = setTimeout(J, t), p ? D(B) : i;
  }
  function F(B) {
    var E = B - c, te = B - u, Z = t - E;
    return d ? rd(Z, r - te) : Z;
  }
  function he(B) {
    var E = B - c, te = B - u;
    return c === void 0 || E >= t || E < 0 || d && te >= r;
  }
  function J() {
    var B = Po();
    if (he(B))
      return j(B);
    l = setTimeout(J, F(B));
  }
  function j(B) {
    return l = void 0, m && o ? D(B) : (o = s = void 0, i);
  }
  function U() {
    l !== void 0 && clearTimeout(l), u = 0, o = c = s = l = void 0;
  }
  function G() {
    return l === void 0 ? i : j(Po());
  }
  function K() {
    var B = Po(), E = he(B);
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
var ld = "[object Number]";
function cd(e) {
  return typeof e == "number" || fl(e) && ul(e) == ld;
}
const ad = /* @__PURE__ */ tt({
  emits: ["click"],
  setup(e, { emit: t }) {
    return {
      handleClick: (o) => {
        t("click", o);
      }
    };
  }
});
function ud(e, t, n, o, s, r) {
  return q(), X("button", {
    class: "primary-button",
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    yi(e.$slots, "default", {}, void 0)
  ]);
}
const fd = /* @__PURE__ */ nt(ad, [["render", ud], ["__scopeId", "data-v-24c524b5"]]), dd = (e) => {
  let t = "";
  const n = Object.keys(e[0]);
  return t += n.join(",") + `
`, e.forEach((o) => {
    const s = n.map((r) => {
      const i = o[r];
      return qf(i) ? i.join(" ") : cd(i) ? i.toFixed(2) : Zn(i) ? JSON.stringify(i) : i;
    });
    t += s.join(",") + `
`;
  }), t;
}, pd = (e) => {
  let t = dd(e), n = new Blob([t], { type: "text/csv" }), o = window.URL.createObjectURL(n), s = document.createElement("a");
  s.href = o, s.download = "data.csv", document.body.appendChild(s), s.click();
}, hd = /* @__PURE__ */ tt({
  components: {
    PaginatedTable: xf,
    PrimaryButton: fd
  },
  setup() {
    const { openPanel: e, closePanel: t } = ll(), n = de($n.data), o = de(/* @__PURE__ */ new Set()), s = (j) => o.value.has(j.id), r = ({ row: j }) => {
      if (o.value.has(j.id)) {
        o.value.delete(j.id);
        return;
      }
      if (o.value.add(j.id), o.value.size > 1) {
        t();
        return;
      }
    };
    Jt(o.value, (j, U) => {
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
    ), d = Object.values($n.labels), m = () => {
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
    }, he = de(Object.keys(n.value[0] || {})), J = id(m, 500);
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
      downloadJSONAsCSV: pd,
      data: n,
      handleOpenPanel: r,
      selectedRows: o,
      isRowSelected: s
    };
  }
}), md = (e) => ($c("data-v-aaac1444"), e = e(), Cc(), e), _d = { class: "deals-header" }, gd = { class: "search-bar" }, vd = /* @__PURE__ */ md(() => /* @__PURE__ */ ie("label", { for: "search-input" }, "Search:", -1));
function yd(e, t, n, o, s, r) {
  const i = gt("PrimaryButton"), l = gt("PaginatedTable");
  return q(), bs(l, {
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
    header: jo(() => [
      ie("div", _d, [
        ie("div", gd, [
          vd,
          Lo(ie("input", {
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
          default: jo(() => [
            Ns(" Export .CSV ")
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["table-data", "column-labels", "items-per-page", "total-pages", "active-highlight", "onOnSortValues", "onHandlePageNavigation", "onOnRowClick"]);
}
const Ed = /* @__PURE__ */ nt(hd, [["render", yd], ["__scopeId", "data-v-aaac1444"]]), bd = /* @__PURE__ */ tt({
  components: { SidePanel: pf, Deals: Ed }
});
function Nd(e, t, n, o, s, r) {
  const i = gt("SidePanel"), l = gt("Deals");
  return q(), X(re, null, [
    ye(i),
    ye(l)
  ], 64);
}
const Od = /* @__PURE__ */ nt(bd, [["render", Nd]]), wd = Ku(), dl = _u(Od);
dl.use(wd);
dl.mount("#app");
