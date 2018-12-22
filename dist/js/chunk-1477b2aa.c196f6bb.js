(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-1477b2aa"],
  {
    "2a45": function(t, n, i) {
      "use strict";
      var e = i("5dad"),
        o = i.n(e);
      o.a;
    },
    3171: function(t, n, i) {
      "use strict";
      i.r(n);
      var e = function() {
          var t = this,
            n = t.$createElement,
            i = t._self._c || n;
          return i("div", { staticClass: "Confirmation" }, [
            i("h1", { staticClass: "Confirmation__title" }, [
              t._v("Confirmation")
            ]),
            i(
              "div",
              { staticClass: "Confirmation__input-body" },
              [
                i("label", { staticClass: "Confirmation__input-body-label" }, [
                  t._v("Name")
                ]),
                i("h2", [t._v(t._s(t.inputValue.name))]),
                i("label", { staticClass: "Confirmation__input-body-label" }, [
                  t._v("Email")
                ]),
                i("h2", [t._v(t._s(t.inputValue.email))]),
                i("label", { staticClass: "Confirmation__input-body-label" }, [
                  t._v("Gender")
                ]),
                i("h2", [t._v(t._s(t.inputValue.gender))]),
                i("label", { staticClass: "Confirmation__input-body-label" }, [
                  t._v("Country")
                ]),
                i("h2", [t._v(t._s(t.inputValue.country))]),
                t.buttonDisabled
                  ? [
                      i(
                        "button",
                        {
                          staticClass: "Confirmation__input-body-button",
                          attrs: { disabled: "" },
                          on: { click: t.submit }
                        },
                        [t._m(0)]
                      )
                    ]
                  : [
                      i(
                        "button",
                        {
                          staticClass: "Confirmation__input-body-button",
                          attrs: { id: "e2e-confirmation-button" },
                          on: { click: t.submit }
                        },
                        [i("p", [t._v("Submit")])]
                      )
                    ],
                i("br"),
                i(
                  "div",
                  { staticClass: "Confirmation__input-body-back" },
                  [
                    i("router-link", { attrs: { to: "/" } }, [
                      t._v("Back To Input")
                    ])
                  ],
                  1
                )
              ],
              2
            )
          ]);
        },
        o = [
          function() {
            var t = this,
              n = t.$createElement,
              i = t._self._c || n;
            return i("div", { staticClass: "spinner" }, [
              i("div", { staticClass: "spinner-circle" })
            ]);
          }
        ];
      i("7f7f");
      function a(t, n, i) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[n] = i),
          t
        );
      }
      function u(t) {
        for (var n = 1; n < arguments.length; n++) {
          var i = null != arguments[n] ? arguments[n] : {},
            e = Object.keys(i);
          "function" === typeof Object.getOwnPropertySymbols &&
            (e = e.concat(
              Object.getOwnPropertySymbols(i).filter(function(t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable;
              })
            )),
            e.forEach(function(n) {
              a(t, n, i[n]);
            });
        }
        return t;
      }
      i("cadf"), i("551c"), i("097d");
      var r = i("2f62"),
        s = {
          name: "Confirmation",
          computed: u(
            {},
            Object(r["b"])({
              inputValue: function(t) {
                return t.input;
              }
            })
          ),
          data: function() {
            return { buttonDisabled: !1 };
          },
          methods: {
            toggleButton: function() {
              this.buttonDisabled = !this.buttonDisabled;
            },
            submit: function() {
              var t = this;
              this.toggleButton(),
                new Promise(function(t) {
                  setTimeout(function() {
                    t();
                  }, 3e3);
                }).then(function() {
                  t.$router.push("/completion"), t.toggleButton();
                });
            }
          },
          beforeRouteEnter: function(t, n, i) {
            "completion" === n.name ? i({ path: "/" }) : i();
          }
        },
        c = s,
        l = (i("2a45"), i("2877")),
        b = Object(l["a"])(c, e, o, !1, null, "6e00d9c2", null);
      b.options.__file = "Confirmation.vue";
      n["default"] = b.exports;
    },
    "5dad": function(t, n, i) {},
    "7f7f": function(t, n, i) {
      var e = i("86cc").f,
        o = Function.prototype,
        a = /^\s*function ([^ (]*)/,
        u = "name";
      u in o ||
        (i("9e1e") &&
          e(o, u, {
            configurable: !0,
            get: function() {
              try {
                return ("" + this).match(a)[1];
              } catch (t) {
                return "";
              }
            }
          }));
    }
  }
]);
//# sourceMappingURL=chunk-1477b2aa.c196f6bb.js.map
