/*!
 * verbal-expressions JavaScript Library v1.0.1
 * https://github.com/VerbalExpressions/JSVerbalExpressions
 *
 * Released under the MIT license
 */

!(function(e, t) {
  void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd
      ? define("VerEx", [], function() {
          return (e.VerEx = t());
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.VerEx = t());
})(this, function() {
  var e = function(e, t, i) {
    return t && n(e.prototype, t), i && n(e, i), e;
  };
  function n(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  var t,
    i =
      ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(
        o,
        ((t = RegExp),
        (r.prototype = Object.create(t.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        Object.setPrototypeOf ? Object.setPrototypeOf(r, t) : (r.__proto__ = t),
        r)
      ),
      e(
        o,
        [
          {
            key: "add",
            value: function(e) {
              var t = 0 < arguments.length && void 0 !== e ? e : "";
              this._source += t;
              var i = this._prefixes + this._source + this._suffixes;
              return this.compile(i, this._modifiers), this;
            }
          },
          {
            key: "startOfLine",
            value: function(e) {
              var t = !(0 < arguments.length && void 0 !== e) || e;
              return (this._prefixes = t ? "^" : ""), this.add();
            }
          },
          {
            key: "endOfLine",
            value: function(e) {
              var t = !(0 < arguments.length && void 0 !== e) || e;
              return (this._suffixes = t ? "$" : ""), this.add();
            }
          },
          {
            key: "then",
            value: function(e) {
              return (e = o.sanitize(e)), this.add("(?:" + e + ")");
            }
          },
          {
            key: "find",
            value: function(e) {
              return this.then(e);
            }
          },
          {
            key: "maybe",
            value: function(e) {
              return (e = o.sanitize(e)), this.add("(?:" + e + ")?");
            }
          },
          {
            key: "or",
            value: function(e) {
              return (
                (this._prefixes += "(?:"),
                (this._suffixes = ")" + this._suffixes),
                this.add(")|(?:"),
                e && this.then(e),
                this
              );
            }
          },
          {
            key: "anything",
            value: function() {
              return this.add("(?:.*)");
            }
          },
          {
            key: "anythingBut",
            value: function(e) {
              return (
                Array.isArray(e) && (e = e.join("")),
                (e = o.sanitize(e)),
                this.add("(?:[^" + e + "]*)")
              );
            }
          },
          {
            key: "something",
            value: function() {
              return this.add("(?:.+)");
            }
          },
          {
            key: "somethingBut",
            value: function(e) {
              return (
                Array.isArray(e) && (e = e.join("")),
                (e = o.sanitize(e)),
                this.add("(?:[^" + e + "]+)")
              );
            }
          },
          {
            key: "anyOf",
            value: function(e) {
              return (
                Array.isArray(e) && (e = e.join("")),
                (e = o.sanitize(e)),
                this.add("[" + e + "]")
              );
            }
          },
          {
            key: "any",
            value: function(e) {
              return this.anyOf(e);
            }
          },
          {
            key: "not",
            value: function(e) {
              return (e = o.sanitize(e)), this.add("(?!" + e + ")"), this;
            }
          },
          {
            key: "range",
            value: function() {
              for (var e = "", t = 1; t < arguments.length; t += 2)
                e +=
                  o.sanitize(
                    arguments.length <= t - 1 ? void 0 : arguments[t - 1]
                  ) +
                  "-" +
                  o.sanitize(arguments.length <= t ? void 0 : arguments[t]);
              return this.add("[" + e + "]");
            }
          },
          {
            key: "lineBreak",
            value: function() {
              return this.add("(?:\\r\\n|\\r|\\n)");
            }
          },
          {
            key: "br",
            value: function() {
              return this.lineBreak();
            }
          },
          {
            key: "tab",
            value: function() {
              return this.add("\\t");
            }
          },
          {
            key: "word",
            value: function() {
              return this.add("\\w+");
            }
          },
          {
            key: "digit",
            value: function() {
              return this.add("\\d");
            }
          },
          {
            key: "whitespace",
            value: function() {
              return this.add("\\s");
            }
          },
          {
            key: "addModifier",
            value: function(e) {
              return (
                this._modifiers.includes(e) || (this._modifiers += e),
                this.add()
              );
            }
          },
          {
            key: "removeModifier",
            value: function(e) {
              return (
                (this._modifiers = this._modifiers.replace(e, "")), this.add()
              );
            }
          },
          {
            key: "withAnyCase",
            value: function(e) {
              return 0 < arguments.length && void 0 !== e && !e
                ? this.removeModifier("i")
                : this.addModifier("i");
            }
          },
          {
            key: "stopAtFirst",
            value: function(e) {
              return 0 < arguments.length && void 0 !== e && !e
                ? this.addModifier("g")
                : this.removeModifier("g");
            }
          },
          {
            key: "searchOneLine",
            value: function(e) {
              return 0 < arguments.length && void 0 !== e && !e
                ? this.addModifier("m")
                : this.removeModifier("m");
            }
          },
          {
            key: "repeatPrevious",
            value: function() {
              for (
                var t = /\d+/, e = arguments.length, i = Array(e), n = 0;
                n < e;
                n++
              )
                i[n] = arguments[n];
              var r = i.filter(function(e) {
                return t.test(e);
              });
              return (
                0 === r.length ||
                  2 < r.length ||
                  this.add("{" + r.join(",") + "}"),
                this
              );
            }
          },
          {
            key: "oneOrMore",
            value: function() {
              return this.add("+");
            }
          },
          {
            key: "multiple",
            value: function(e, t, i) {
              return (
                void 0 !== e &&
                  ((e = o.sanitize(e)), this.add("(?:" + e + ")")),
                void 0 === t && void 0 === i
                  ? this.add("*")
                  : void 0 !== t && void 0 === i
                  ? this.add("{" + t + ",}")
                  : void 0 !== t &&
                    void 0 !== i &&
                    this.add("{" + t + "," + i + "}"),
                this
              );
            }
          },
          {
            key: "beginCapture",
            value: function() {
              return (this._suffixes += ")"), this.add("(");
            }
          },
          {
            key: "endCapture",
            value: function() {
              return (
                (this._suffixes = this._suffixes.slice(0, -1)), this.add(")")
              );
            }
          },
          {
            key: "replace",
            value: function(e, t) {
              return (e = e.toString()).replace(this, t);
            }
          },
          {
            key: "toRegExp",
            value: function() {
              var e = this.toString().match(/\/(.*)\/([gimuy]+)?/),
                t = e[1],
                i = e[2];
              return new RegExp(t, i);
            }
          }
        ],
        [
          {
            key: "sanitize",
            value: function(e) {
              return e instanceof RegExp
                ? e.source
                : "number" == typeof e
                ? e
                : "string" != typeof e
                ? ""
                : e.replace(/([\].|*?+(){}^$\\:=[])/g, "\\$&");
            }
          }
        ]
      ),
      o);
  function r() {
    var e = Reflect.construct(t, Array.from(arguments));
    return Object.setPrototypeOf(e, Object.getPrototypeOf(this)), e;
  }
  function o() {
    !(function(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    })(this, o);
    var e = (function(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, "", "gm"));
    return (
      (e._prefixes = ""),
      (e._source = ""),
      (e._suffixes = ""),
      (e._modifiers = "gm"),
      e
    );
  }
  return function() {
    var e = new i();
    return (e.sanitize = i.sanitize), e;
  };
});
//# sourceMappingURL=verbalexpressions.min.js.map