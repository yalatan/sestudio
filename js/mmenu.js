! function(e) { var t = {};

    function n(i) { if (t[i]) return t[i].exports; var s = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports }
    n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var i = Object.create(null); if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var s in e) n.d(i, s, function(t) { return e[t] }.bind(null, s)); return i }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0) }([function(e, t, n) {
    "use strict";
    n.r(t);
    var i = { hooks: {}, extensions: [], wrappers: [], navbar: { add: !0, title: "Menu", titleLink: "parent" }, onClick: { close: null, preventDefault: null, setSelected: !0 }, slidingSubmenus: !0 };
    var s = { classNames: { inset: "Inset", nolistview: "NoListview", nopanel: "NoPanel", panel: "Panel", selected: "Selected", spacer: "Spacer", vertical: "Vertical" }, language: null, openingInterval: 25, panelNodetype: ["ul", "ol", "div"], transitionDuration: 400 };

    function a(e, t) { "object" != o(e) && (e = {}), "object" != o(t) && (t = {}); for (let n in t) t.hasOwnProperty(n) && (void 0 === e[n] ? e[n] = t[n] : "object" == o(e[n]) && a(e[n], t[n])); return e }

    function o(e) { return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() }

    function r(e, t, n) { if ("function" == typeof t) { var i = t.call(e); if (void 0 !== i) return i } return null !== t && "function" != typeof t && void 0 !== t || void 0 === n ? t : n }

    function l(e, t, n) { var i = !1,
            s = function(n) { void 0 !== n && n.target !== e || (i || (e.removeEventListener("transitionend", s), e.removeEventListener("webkitTransitionEnd", s), t.call(e)), i = !0) };
        e.addEventListener("transitionend", s), e.addEventListener("webkitTransitionEnd", s), setTimeout(s, 1.1 * n) }

    function m() { return "mm-" + d++ }
    var d = 0;

    function c(e) { return "mm-" == e.slice(0, 3) ? e.slice(3) : e }
    var p = {};

    function h(e, t) { void 0 === p[t] && (p[t] = {}), a(p[t], e) }
    var f = { Menu: "منو" },
        u = { Menu: "Menü" },
        v = { Menu: "Меню" };

    function b(e) { var t; return e.split(".").forEach((e, n) => { 0 == n ? t = document.createElement(e) : t.classList.add(e) }), t }

    function g(e, t) { return Array.prototype.slice.call(e.querySelectorAll(t)) }

    function _(e, t) { var n = Array.prototype.slice.call(e.children); return t ? n.filter(e => e.matches(t)) : n }

    function y(e, t) { for (var n = [], i = e.parentElement; i;) n.push(i), i = i.parentElement; return t ? n.filter(e => e.matches(t)) : n }

    function w(e) { return e.filter(e => !e.matches(".mm-hidden")) }

    function L(e) { var t = []; return w(e).forEach(e => { t.push(..._(e, "a.mm-listitem__text")) }), t.filter(e => !e.matches(".mm-btn_next")) }

    function E(e, t, n) { e.matches("." + t) && (e.classList.remove(t), e.classList.add(n)) }
    var x = {};

    function P(e, t, n) { "number" == typeof e && (e = "(min-width: " + e + "px)"), x[e] = x[e] || [], x[e].push({ yes: t, no: n }) }

    function k(e, t) { var n = t.matches ? "yes" : "no"; for (let t = 0; t < x[e].length; t++) x[e][t][n]() }
    h({ Menu: "Menu" }, "nl"), h(f, "fa"), h(u, "de"), h(v, "ru");
    class S { constructor(e, t, n) { return this.opts = a(t, S.options), this.conf = a(n, S.configs), this._api = ["bind", "initPanels", "initPanel", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.node = {}, this.vars = {}, this.hook = {}, this.clck = [], this.node.menu = "string" == typeof e ? document.querySelector(e) : e, "function" == typeof this._deprecatedWarnings && this._deprecatedWarnings(), this._initWrappers(), this._initAddons(), this._initExtensions(), this._initHooks(), this._initAPI(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(),
                function() { for (let e in x) { let t = window.matchMedia(e);
                        k(e, t), t.onchange = (n => { k(e, t) }) } }(), this }
        openPanel(e, t) { if (this.trigger("openPanel:before", [e]), e && (e.matches(".mm-panel") || (e = e.closest(".mm-panel")), e)) { if ("boolean" != typeof t && (t = !0), e.parentElement.matches(".mm-listitem_vertical")) { y(e, ".mm-listitem_vertical").forEach(e => { e.classList.add("mm-listitem_opened"), _(e, ".mm-panel").forEach(e => { e.classList.remove("mm-hidden") }) }); let t = y(e, ".mm-panel").filter(e => !e.parentElement.matches(".mm-listitem_vertical"));
                    this.trigger("openPanel:start", [e]), t.length && this.openPanel(t[0]), this.trigger("openPanel:finish", [e]) } else { if (e.matches(".mm-panel_opened")) return; let n = _(this.node.pnls, ".mm-panel"),
                        i = _(this.node.pnls, ".mm-panel_opened")[0];
                    n.filter(t => t !== e).forEach(e => { e.classList.remove("mm-panel_opened-parent") }); let s = e.mmParent; for (; s;)(s = s.closest(".mm-panel")) && (s.parentElement.matches(".mm-listitem_vertical") || s.classList.add("mm-panel_opened-parent"), s = s.mmParent);
                    n.forEach(e => { e.classList.remove("mm-panel_highest") }), n.filter(e => e !== i).filter(t => t !== e).forEach(e => { e.classList.add("mm-hidden") }), e.classList.remove("mm-hidden"); let a = () => { i && i.classList.remove("mm-panel_opened"), e.classList.add("mm-panel_opened"), e.matches(".mm-panel_opened-parent") ? (i && i.classList.add("mm-panel_highest"), e.classList.remove("mm-panel_opened-parent")) : (i && i.classList.add("mm-panel_opened-parent"), e.classList.add("mm-panel_highest")), this.trigger("openPanel:start", [e]) },
                        o = () => { i && (i.classList.remove("mm-panel_highest"), i.classList.add("mm-hidden")), e.classList.remove("mm-panel_highest"), this.trigger("openPanel:finish", [e]) };
                    t && !e.matches(".mm-panel_noanimation") ? setTimeout(() => { l(e, () => { o() }, this.conf.transitionDuration), a() }, this.conf.openingInterval) : (a(), o()) }
                this.trigger("openPanel:after", [e]) } }
        closePanel(e) { this.trigger("closePanel:before", [e]); var t = e.parentElement;
            t.matches(".mm-listitem_vertical") && (t.classList.remove("mm-listitem_opened"), e.classList.add("mm-hidden"), this.trigger("closePanel", [e])), this.trigger("closePanel:after", [e]) }
        closeAllPanels(e) { this.trigger("closeAllPanels:before"), this.node.pnls.querySelectorAll(".mm-listitem").forEach(e => { e.classList.remove("mm-listitem_selected", "mm-listitem_opened") }); var t = _(this.node.pnls, ".mm-panel"),
                n = e || t[0];
            _(this.node.pnls, ".mm-panel").forEach(e => { e !== n && (e.classList.remove("mm-panel_opened"), e.classList.remove("mm-panel_opened-parent"), e.classList.remove("mm-panel_highest"), e.classList.add("mm-hidden")) }), this.openPanel(n, !1), this.trigger("closeAllPanels:after") }
        togglePanel(e) { let t = e.parentElement;
            t.matches(".mm-listitem_vertical") && this[t.matches(".mm-listitem_opened") ? "closePanel" : "openPanel"](e) }
        setSelected(e) { this.trigger("setSelected:before", [e]), g(this.node.menu, ".mm-listitem_selected").forEach(e => { e.classList.remove("mm-listitem_selected") }), e.classList.add("mm-listitem_selected"), this.trigger("setSelected:after", [e]) }
        bind(e, t) { this.hook[e] = this.hook[e] || [], this.hook[e].push(t) }
        trigger(e, t) { if (this.hook[e])
                for (var n = 0, i = this.hook[e].length; n < i; n++) this.hook[e][n].apply(this, t) }
        _initAPI() { var e = this;
            this.API = {}, this._api.forEach(t => { this.API[t] = function() { var n = e[t].apply(e, arguments); return void 0 === n ? e.API : n } }), this.node.menu.mmApi = this.API }
        _initHooks() { for (let e in this.opts.hooks) this.bind(e, this.opts.hooks[e]) }
        _initWrappers() { this.trigger("initWrappers:before"); for (let e = 0; e < this.opts.wrappers.length; e++) { let t = S.wrappers[this.opts.wrappers[e]]; "function" == typeof t && t.call(this) }
            this.trigger("initWrappers:after") }
        _initAddons() { this.trigger("initAddons:before"); for (let e in S.addons) S.addons[e].call(this);
            this.trigger("initAddons:after") }
        _initExtensions() { this.trigger("initExtensions:before"), "array" == o(this.opts.extensions) && (this.opts.extensions = { all: this.opts.extensions }); for (let e in this.opts.extensions)
                if (this.opts.extensions[e].length) { let t = this.opts.extensions[e].map(e => "mm-menu_" + e);
                    P(e, () => { this.node.menu.classList.add(...t) }, () => { this.node.menu.classList.remove(...t) }) }
            this.trigger("initExtensions:after") }
        _initMenu() { this.trigger("initMenu:before"), this.node.wrpr = this.node.wrpr || this.node.menu.parentElement, this.node.wrpr.classList.add("mm-wrapper"), this.node.menu.id = this.node.menu.id || m(); let e = b("div.mm-panels");
            _(this.node.menu).forEach(t => { this.conf.panelNodetype.indexOf(t.nodeName.toLowerCase()) > -1 && e.append(t) }), this.node.menu.append(e), this.node.pnls = e, this.node.menu.classList.add("mm-menu"), this.trigger("initMenu:after") }
        initPanels(e) { this.trigger("initPanels:deprecated"), (e = e || _(this.node.pnls)).forEach(e => { this.initPanel(e) }) }
        _initPanels() { this.trigger("initPanels:before"), this.clck.push((e, t) => { if (t.inMenu) { var n = e.getAttribute("href"); if (n && n.length > 1 && "#" == n.slice(0, 1)) try { let t = g(this.node.menu, n)[0]; if (t && t.matches(".mm-panel")) return e.parentElement.matches(".mm-listitem_vertical") ? this.togglePanel(t) : this.openPanel(t), !0 } catch (e) {} } }), _(this.node.pnls).forEach(e => { this.initPanel(e) }), this.trigger("initPanels:after") }
        initPanel(e) { var t = this.conf.panelNodetype.join(", "); if (e.matches(t) && (e.matches(".mm-panel") || (e = this._initPanel(e)), e)) { let n = [];
                n.push(..._(e, "." + this.conf.classNames.panel)), _(e, ".mm-listview").forEach(e => { _(e, ".mm-listitem").forEach(e => { n.push(..._(e, t)) }) }), n.forEach(e => { this.initPanel(e) }) } }
        _initPanel(e) { if (this.trigger("initPanel:before", [e]), E(e, this.conf.classNames.panel, "mm-panel"), E(e, this.conf.classNames.nopanel, "mm-nopanel"), E(e, this.conf.classNames.inset, "mm-listview_inset"), e.matches(".mm-listview_inset") && e.classList.add("mm-nopanel"), e.matches(".mm-nopanel")) return null; var t = e.id || m(),
                n = e.matches("." + this.conf.classNames.vertical) || !this.opts.slidingSubmenus; if (e.classList.remove(this.conf.classNames.vertical), e.matches("ul, ol")) { e.removeAttribute("id"); let t = b("div");
                e.before(t), t.append(e), e = t }
            e.id = t, e.classList.add("mm-panel", "mm-hidden"); var i = [e.parentElement].filter(e => e.matches("li"))[0]; return n ? i && i.classList.add("mm-listitem_vertical") : this.node.pnls.append(e), i && (i.mmChild = e, e.mmParent = i), this._initNavbar(e), this._initListview(e), this.trigger("initPanel:after", [e]), e }
        _initNavbar(e) { if (this.trigger("initNavbar:before", [e]), _(e, ".mm-navbar").length) return; var t = e.mmParent,
                n = b("div.mm-navbar"),
                i = this._getPanelTitle(e, this.opts.navbar.title),
                s = ""; if (t) { if (t.matches(".mm-listitem_vertical")) return; let a, o = (a = t.matches(".mm-listitem") ? _(t, ".mm-listitem__text")[0] : g(a = e.closest(".mm-panel"), 'a[href="#' + e.id + '"]')[0]).closest(".mm-panel").id; switch (i = this._getPanelTitle(e, a.textContent), this.opts.navbar.titleLink) {
                    case "anchor":
                        s = a.getAttribute("href"); break;
                    case "parent":
                        s = "#" + o } let r = b("a.mm-btn.mm-btn_prev.mm-navbar__btn");
                r.setAttribute("href", "#" + o), n.append(r) } else if (!this.opts.navbar.title) return;
            this.opts.navbar.add || _(e, ".mm-navbar")[0].classList.add("mm-hidden"); let a = b("a.mm-navbar__title"); if (a.innerHTML = i, s && a.setAttribute("href", s), n.append(a), t) { let e = b("span.mm-btn.mm-navbar__btn");
                n.append(e) }
            e.prepend(n), this.trigger("initNavbar:after", [e]) }
        _initListview(e) { this.trigger("initListview:before", [e]), _(e, "ul, ol").forEach(e => { E(e, this.conf.classNames.nolistview, "mm-nolistview"), e.matches(".mm-nolistview") || (e.classList.add("mm-listview"), _(e).forEach(e => { e.classList.add("mm-listitem"), E(e, this.conf.classNames.selected, "mm-listitem_selected"), E(e, this.conf.classNames.spacer, "mm-listitem_spacer"), _(e, "a, span").forEach(e => { e.matches(".mm-btn") || e.classList.add("mm-listitem__text") }) })) }); var t = e.mmParent; if (t && t.matches(".mm-listitem") && !_(t, ".mm-btn").length) { let n = _(t, ".mm-listitem__text")[0]; if (n) { let i = b("a.mm-btn.mm-btn_next.mm-listitem__btn");
                    i.setAttribute("href", "#" + e.id), n.matches("span") ? (i.classList.add("mm-listitem__text"), i.innerHTML = n.innerHTML, t.insertBefore(i, n.nextElementSibling), n.remove()) : t.insertBefore(i, _(t, ".mm-panel")[0]) } }
            this.trigger("initListview:after", [e]) }
        _initOpened() { this.trigger("initOpened:before"); let e = this.node.pnls.querySelectorAll(".mm-listitem_selected"),
                t = null;
            e.forEach(e => { t = e, e.classList.remove("mm-listitem_selected") }), t && t.classList.add("mm-listitem_selected"); let n = t ? t.closest(".mm-panel") : _(this.node.pnls, ".mm-panel")[0];
            this.openPanel(n, !1), this.trigger("initOpened:after") }
        _initAnchors() { this.trigger("initAnchors:before"), document.addEventListener("click", e => { var t = e.target.closest("a[href]"); if (t) { var n = { inMenu: t.closest(".mm-menu") === this.node.menu, inListview: t.matches(".mm-listitem > a"), toExternal: t.matches('[rel="external"]') || t.matches('[target="_blank"]') },
                        i = { close: null, setSelected: null, preventDefault: "#" == t.getAttribute("href").slice(0, 1) }; for (let s = 0; s < this.clck.length; s++) { let r = this.clck[s].call(this, t, n); if (r) { if ("boolean" == typeof r) return void e.preventDefault(); "object" == o(r) && (i = a(r, i)) } }
                    n.inMenu && n.inListview && !n.toExternal && (r(t, this.opts.onClick.setSelected, i.setSelected) && this.setSelected(t.parentElement), r(t, this.opts.onClick.preventDefault, i.preventDefault) && e.preventDefault(), r(t, this.opts.onClick.close, i.close) && this.opts.offCanvas && "function" == typeof this.close && this.close()) } }, !0), this.trigger("initAnchors:after") }
        i18n(e) { return function(e, t) { return "string" == typeof t && void 0 !== p[t] && p[t][e] || e }(e, this.conf.language) }
        _getPanelTitle(e, t) { var n; return "function" == typeof this.opts.navbar.title && (n = this.opts.navbar.title.call(e)), void 0 === n && (n = e.getAttribute("mm-data-title")), "string" == typeof n && n.length ? n : "string" == typeof t ? this.i18n(t) : "function" == typeof t ? this.i18n(t.call(e)) : "string" == typeof S.options.navbar.title ? this.i18n(S.options.navbar.title) : this.i18n("Menu") } }
    S.version = "8.2.3", S.options = i, S.configs = s, S.addons = {}, S.wrappers = {}, S.node = {}, S.vars = {};
    var M = { blockUI: !0, moveBackground: !0 };
    var A = { clone: !1, menu: { insertMethod: "prepend", insertSelector: "body" }, page: { nodetype: "div", selector: null, noSelector: [] } };

    function T(e) { return e ? e.charAt(0).toUpperCase() + e.slice(1) : "" }

    function C(e, t, n) { var i = t.split(".");
        e[t = "mmEvent" + T(i[0]) + T(i[1])] = e[t] || [], e[t].push(n), e.addEventListener(i[0], n) }

    function N(e, t) { var n = t.split(".");
        t = "mmEvent" + T(n[0]) + T(n[1]), (e[t] || []).forEach(t => { e.removeEventListener(n[0], t) }) }
    S.options.offCanvas = M, S.configs.offCanvas = A;
    S.prototype.open = function() { this.trigger("open:before"), this.vars.opened || (this._openSetup(), setTimeout(() => { this._openStart() }, this.conf.openingInterval), this.trigger("open:after")) }, S.prototype._openSetup = function() { var e = this.opts.offCanvas;
        this.closeAllOthers(), S.node.page.mmStyle = S.node.page.getAttribute("style") || "",
            function(e, t, n) { var i = t.split(".");
                (e[t = "mmEvent" + T(i[0]) + T(i[1])] || []).forEach(e => { e(n || {}) }) }(window, "resize.page", { force: !0 }); var t = ["mm-wrapper_opened"];
        e.blockUI && t.push("mm-wrapper_blocking"), "modal" == e.blockUI && t.push("mm-wrapper_modal"), e.moveBackground && t.push("mm-wrapper_background"), this.node.wrpr.classList.add(...t), setTimeout(() => { this.vars.opened = !0 }, this.conf.openingInterval), this.node.menu.classList.add("mm-menu_opened") }, S.prototype._openStart = function() { l(S.node.page, () => { this.trigger("open:finish") }, this.conf.transitionDuration), this.trigger("open:start"), this.node.wrpr.classList.add("mm-wrapper_opening") }, S.prototype.close = function() { this.trigger("close:before"), this.vars.opened && (l(S.node.page, () => { this.node.menu.classList.remove("mm-menu_opened");
            this.node.wrpr.classList.remove("mm-wrapper_opened", "mm-wrapper_blocking", "mm-wrapper_modal", "mm-wrapper_background"), S.node.page.setAttribute("style", S.node.page.mmStyle), this.vars.opened = !1, this.trigger("close:finish") }, this.conf.transitionDuration), this.trigger("close:start"), this.node.wrpr.classList.remove("mm-wrapper_opening"), this.trigger("close:after")) }, S.prototype.closeAllOthers = function() { g(document.body, ".mm-menu_offcanvas").forEach(e => { if (e !== this.node.menu) { let t = e.mmApi;
                t && t.close && t.close() } }) }, S.prototype.setPage = function(e) { this.trigger("setPage:before", [e]); var t = this.conf.offCanvas; if (!e) { let n = "string" == typeof t.page.selector ? g(document.body, t.page.selector) : _(document.body, t.page.nodetype); if (n = n.filter(e => !e.matches(".mm-menu, .mm-wrapper__blocker")), t.page.noSelector.length && (n = n.filter(e => !e.matches(t.page.noSelector.join(", ")))), n.length > 1) { let e = b("div");
                n[0].before(e), n.forEach(t => { e.append(t) }), n = [e] }
            e = n[0] }
        e.classList.add("mm-page", "mm-slideout"), e.id = e.id || m(), S.node.page = e, this.trigger("setPage:after", [e]) };
    const H = function() { N(document.body, "keydown.tabguard"), C(document.body, "keydown.tabguard", e => { 9 == e.keyCode && this.node.wrpr.matches(".mm-wrapper_opened") && e.preventDefault() }), N(window, "resize.page"), C(window, "resize.page", e => { S.node.page && (this.node.wrpr.matches(".mm-wrapper_opening") || e.force) && (S.node.page.style.minHeight = window.innerHeight + "px") }) },
        j = function() { this.trigger("initBlocker:before"); var e = this.opts.offCanvas,
                t = this.conf.offCanvas; if (e.blockUI) { if (!S.node.blck) { let e = b("div.mm-wrapper__blocker.mm-slideout");
                    e.innerHTML = "<a></a>", document.querySelector(t.menu.insertSelector).append(e), S.node.blck = e } var n = e => { e.preventDefault(), e.stopPropagation(), this.node.wrpr.matches(".mm-wrapper_modal") || this.close() };
                S.node.blck.addEventListener("mousedown", n), S.node.blck.addEventListener("touchstart", n), S.node.blck.addEventListener("touchmove", n), this.trigger("initBlocker:after") } };
    var I = { aria: !0, text: !0 };
    var O = { text: { closeMenu: "Close menu", closeSubmenu: "Close submenu", openSubmenu: "Open submenu", toggleSubmenu: "Toggle submenu" } },
        q = { "Close menu": "بستن منو", "Close submenu": "بستن زیرمنو", "Open submenu": "بازکردن زیرمنو", "Toggle submenu": "سوییچ زیرمنو" },
        D = { "Close menu": "Menü schließen", "Close submenu": "Untermenü schließen", "Open submenu": "Untermenü öffnen", "Toggle submenu": "Untermenü wechseln" },
        B = { "Close menu": "Закрыть меню", "Close submenu": "Закрыть подменю", "Open submenu": "Открыть подменю", "Toggle submenu": "Переключить подменю" };
    h({ "Close menu": "Menu sluiten", "Close submenu": "Submenu sluiten", "Open submenu": "Submenu openen", "Toggle submenu": "Submenu wisselen" }, "nl"), h(q, "fa"), h(D, "de"), h(B, "ru"), S.options.screenReader = I, S.configs.screenReader = O;
    var z;
    z = function(e, t, n) { e[t] = n, n ? e.setAttribute(t, n.toString()) : e.removeAttribute(t) }, S.sr_aria = function(e, t, n) { z(e, "aria-" + t, n) }, S.sr_role = function(e, t) { z(e, "role", t) }, S.sr_text = function(e) { return '<span class="mm-sronly">' + e + "</span>" };
    var R = { fix: !0 };
    const U = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;
    S.options.scrollBugFix = R;
    var W = { height: "default" };
    S.options.autoHeight = W;
    var F = { close: !1, open: !1 };
    S.options.backButton = F;
    var Y = { add: !1, visible: { min: 1, max: 3 } };
    S.options.columns = Y;
    var V = { add: !1, addTo: "panels", count: !1 };
    S.options.counters = V, S.configs.classNames.counters = { counter: "Counter" };
    var Z = { add: !1, addTo: "panels", type: null };
    S.options.dividers = Z, S.configs.classNames.divider = "Divider";
    var X = { menu: { open: !1, node: null, maxStartPos: 100, threshold: 50 }, panels: { close: !1 }, vendors: { hammer: {} } };
    var G = { menu: { width: { perc: .8, min: 140, max: 440 }, height: { perc: .8, min: 140, max: 880 } } };
    S.options.drag = X, S.configs.drag = G;
    var K = { drop: !1, fitViewport: !0, event: "click", position: {}, tip: !0 };
    var Q = { offset: { button: { x: -5, y: 5 }, viewport: { x: 20, y: 20 } }, height: { max: 880 }, width: { max: 440 } };
    S.options.dropdown = K, S.configs.dropdown = Q;
    var J = { fixed: { insertMethod: "append", insertSelector: "body" }, sticky: { offset: 0 } };
    S.configs.fixedElements = J, S.configs.classNames.fixedElements = { fixed: "Fixed", sticky: "Sticky" };
    var $ = { use: !1, top: [], bottom: [], position: "left", type: "default" };
    S.options.iconbar = $;
    var ee = { add: !1, blockPanel: !0, hideDivider: !1, hideNavbar: !0, visible: 3 };
    S.options.iconPanels = ee;
    var te = { enable: !1, enhance: !1 };
    S.options.keyboardNavigation = te;
    const ne = function(e) { N(document.body, "keydown.tabguard"), N(document.body, "focusin.tabguard"), C(document.body, "focusin.tabguard", e => { if (this.node.wrpr.matches(".mm-wrapper_opened")) { let t = e.target; if (t.matches(".mm-tabend")) { let e;
                    t.parentElement.matches(".mm-menu") && S.node.blck && (e = S.node.blck), t.parentElement.matches(".mm-wrapper__blocker") && (e = g(document.body, ".mm-menu_offcanvas.mm-menu_opened")[0]), e || (e = t.parentElement), e && _(e, ".mm-tabstart")[0].focus() } } }), N(document.body, "keydown.navigate"), C(document.body, "keydown.navigate", t => { var n = t.target,
                i = n.closest(".mm-menu"); if (i) { i.mmApi; if (!n.matches("input, textarea")) switch (t.keyCode) {
                    case 13:
                        (n.matches(".mm-toggle") || n.matches(".mm-check")) && n.dispatchEvent(new Event("click")); break;
                    case 32:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        t.preventDefault() }
                if (e)
                    if (n.matches("input")) switch (t.keyCode) {
                        case 27:
                            n.value = "" } else { let e = i.mmApi; switch (t.keyCode) {
                            case 8:
                                let n = g(i, ".mm-panel_opened")[0].mmParent;
                                n && e.openPanel(n.closest(".mm-panel")); break;
                            case 27:
                                i.matches(".mm-menu_offcanvas") && e.close() } } } }) };
    var ie = { load: !1 };
    S.options.lazySubmenus = ie;
    var se = [];
    var ae = { breadcrumbs: { separator: "/", removeFirst: !1 } };

    function oe() { var e = this.opts.navbars; if (void 0 !== e) { e instanceof Array || (e = [e]); var t = {};
            e.length && (e.forEach(e => { if (!(e = function(e) { return "boolean" == typeof e && e && (e = {}), "object" != typeof e && (e = {}), void 0 === e.content && (e.content = ["prev", "title"]), e.content instanceof Array || (e.content = [e.content]), void 0 === e.use && (e.use = !0), "boolean" == typeof e.use && e.use && (e.use = !0), e }(e)).use) return !1; var n = b("div.mm-navbar"),
                    i = e.position; "bottom" !== i && (i = "top"), t[i] || (t[i] = b("div.mm-navbars_" + i)), t[i].append(n); for (let t = 0, i = e.content.length; t < i; t++) { let i = e.content[t]; if ("string" == typeof i) { let e = oe.navbarContents[i]; if ("function" == typeof e) e.call(this, n);
                        else { let e = b("span");
                            e.innerHTML = i; let t = _(e);
                            1 == t.length && (e = t[0]), n.append(e) } } else n.append(i) } if ("string" == typeof e.type) { let t = oe.navbarTypes[e.type]; "function" == typeof t && t.call(this, n) } let s = () => { n.classList.remove("mm-hidden"), S.sr_aria(n, "hidden", !1) },
                    a = () => { n.classList.add("mm-hidden"), S.sr_aria(n, "hidden", !0) }; "boolean" != typeof e.use && P(e.use, s, a) }), this.bind("initMenu:after", () => { for (let e in t) this.node.menu["bottom" == e ? "append" : "prepend"](t[e]) })) } }
    S.options.navbars = se, S.configs.navbars = ae, S.configs.classNames.navbars = { panelNext: "Next", panelPrev: "Prev", panelTitle: "Title" }, oe.navbarContents = { breadcrumbs: function(e) { var t = b("div.mm-navbar__breadcrumbs");
            e.append(t), this.bind("initNavbar:after", e => { if (!e.querySelector(".mm-navbar__breadcrumbs")) { _(e, ".mm-navbar")[0].classList.add("mm-hidden"); for (var t = [], n = b("span.mm-navbar__breadcrumbs"), i = e, s = !0; i;) { if (i.matches(".mm-panel") || (i = i.closest(".mm-panel")), !i.parentElement.matches(".mm-listitem_vertical")) { var a = g(i, ".mm-navbar__title")[0].textContent;
                            a.length && t.unshift(s ? "<span>" + a + "</span>" : '<a href="#' + i.id + '">' + a + "</a>"), s = !1 }
                        i = i.mmParent }
                    this.conf.navbars.breadcrumbs.removeFirst && t.shift(), n.innerHTML = t.join('<span class="mm-separator">' + this.conf.navbars.breadcrumbs.separator + "</span>"), _(e, ".mm-navbar")[0].append(n) } }), this.bind("openPanel:start", e => { var n = e.querySelector(".mm-navbar__breadcrumbs");
                n && (t.innerHTML = n.innerHTML) }), this.bind("initNavbar:after:sr-aria", e => { g(e, ".mm-breadcrumbs a").forEach(e => { S.sr_aria(e, "owns", e.getAttribute("href").slice(1)) }) }) }, close: function(e) { var t = b("a.mm-btn.mm-btn_close.mm-navbar__btn");
            e.append(t), this.bind("setPage:after", e => { t.setAttribute("href", "#" + e.id) }), this.bind("setPage:after:sr-text", () => { t.innerHTML = S.sr_text(this.i18n(this.conf.screenReader.text.closeMenu)), S.sr_aria(t, "owns", t.getAttribute("href").slice(1)) }) }, next: function(e) { var t, n, i, s = b("a.mm-btn.mm-btn_next.mm-navbar__btn");
            e.append(s), this.bind("openPanel:start", e => { t = e.querySelector("." + this.conf.classNames.navbars.panelNext), n = t ? t.getAttribute("href") : "", i = t ? t.innerHTML : "", n ? s.setAttribute("href", n) : s.removeAttribute("href"), s.classList[n || i ? "remove" : "add"]("mm-hidden"), s.innerHTML = i }), this.bind("openPanel:start:sr-aria", e => { S.sr_aria(s, "hidden", s.matches("mm-hidden")), S.sr_aria(s, "owns", (s.getAttribute("href") || "").slice(1)) }) }, prev: function(e) { var t, n, i, s = b("a.mm-btn.mm-btn_prev.mm-navbar__btn");
            e.append(s), this.bind("initNavbar:after", e => { _(e, ".mm-navbar")[0].classList.add("mm-hidden") }), this.bind("openPanel:start", e => { e.parentElement.matches(".mm-listitem_vertical") || ((t = e.querySelector("." + this.conf.classNames.navbars.panelPrev)) || (t = e.querySelector(".mm-navbar__btn.mm-btn_prev")), n = t ? t.getAttribute("href") : "", i = t ? t.innerHTML : "", n ? s.setAttribute("href", n) : s.removeAttribute("href"), s.classList[n || i ? "remove" : "add"]("mm-hidden"), s.innerHTML = i) }), this.bind("initNavbar:after:sr-aria", e => { S.sr_aria(e.querySelector(".mm-navbar"), "hidden", !0) }), this.bind("openPanel:start:sr-aria", e => { S.sr_aria(s, "hidden", s.matches(".mm-hidden")), S.sr_aria(s, "owns", (s.getAttribute("href") || "").slice(1)) }) }, searchfield: function(e) { "object" != o(this.opts.searchfield) && (this.opts.searchfield = {}); var t = b("div.mm-navbar__searchfield");
            e.append(t), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = [t] }, title: function(e) { var t, n, i, s, a = b("a.mm-navbar__title");
            e.append(a), this.bind("openPanel:start", e => { e.parentElement.matches(".mm-listitem_vertical") || ((i = e.querySelector("." + this.conf.classNames.navbars.panelTitle)) || (i = e.querySelector(".mm-navbar__title")), (t = i ? i.getAttribute("href") : "") ? a.setAttribute("href", t) : a.removeAttribute("href"), n = i ? i.innerHTML : "", a.innerHTML = n, a.classList[t || n ? "remove" : "add"]("mm-hidden")) }), this.bind("openPanel:start:sr-aria", e => { if (this.opts.screenReader.text && (s || _(this.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach(e => { let t = e.querySelector(".mm-btn_prev");
                        t && (s = t) }), s)) { var t = !0; "parent" == this.opts.navbar.titleLink && (t = !s.matches(".mm-hidden")), S.sr_aria(a, "hidden", t) } }) } }, oe.navbarTypes = { tabs: function(e) { e.classList.add("mm-navbar_tabs"), e.parentElement.classList.add("mm-navbars_has-tabs"); var t = _(e, "a");
            e.addEventListener("click", e => { var t = e.target; if (t.matches("a"))
                    if (t.matches(".mm-navbar__tab_selected")) e.stopImmediatePropagation();
                    else try { this.openPanel(this.node.menu.querySelector(t.getAttribute("href")), !1), e.stopImmediatePropagation() } catch (e) {} }), this.bind("openPanel:start", function e(n) { t.forEach(e => { e.classList.remove("mm-navbar__tab_selected") }); var i = t.filter(e => e.matches('[href="#' + n.id + '"]'))[0]; if (i) i.classList.add("mm-navbar__tab_selected");
                else { var s = n.mmParent;
                    s && e.call(this, s.closest(".mm-panel")) } }) } };
    var re = { scroll: !1, update: !1 };
    var le = { scrollOffset: 0, updateOffset: 50 };
    S.options.pageScroll = re, S.configs.pageScroll = le;
    var me = { add: !1, addTo: "panels", cancel: !1, noResults: "No results found.", placeholder: "Search", panel: { add: !1, dividers: !0, fx: "none", id: null, splash: null, title: "Search" }, search: !0, showTextItems: !1, showSubPanels: !0 };
    var de = { clear: !1, form: !1, input: !1, submit: !1 },
        ce = { Search: "جستجو", "No results found.": "نتیجه‌ای یافت نشد.", cancel: "انصراف" },
        pe = { Search: "Suche", "No results found.": "Keine Ergebnisse gefunden.", cancel: "beenden" },
        he = { Search: "Найти", "No results found.": "Ничего не найдено.", cancel: "отменить" };
    h({ Search: "Zoeken", "No results found.": "Geen resultaten gevonden.", cancel: "annuleren" }, "nl"), h(ce, "fa"), h(pe, "de"), h(he, "ru"), S.options.searchfield = me, S.configs.searchfield = de;
    const fe = function() { var e = this.opts.searchfield;
            this.conf.searchfield; if (_(this.node.pnls, ".mm-panel_search").length) return null; var t = b("div.mm-panel_search"),
                n = b("ul"); switch (t.append(n), this.node.pnls.append(t), e.panel.id && (t.id = e.panel.id), e.panel.title && t.setAttribute("data-mm-title", e.panel.title), e.panel.fx) {
                case !1:
                    break;
                case "none":
                    t.classList.add("mm-panel_noanimation"); break;
                default:
                    t.classList.add("mm-panel_fx-" + e.panel.fx) } if (e.panel.splash) { let n = b("div.mm-panel__content");
                n.innerHTML = e.panel.splash, t.append(n) } return this.initPanel(t), t },
        ue = function(e) { var t = this.opts.searchfield,
                n = this.conf.searchfield; if (e.parentElement.matches(".mm-listitem_vertical")) return null; if (s = g(e, ".mm-searchfield")[0]) return s;

            function i(e, t) { if (t)
                    for (var n in t) e.setAttribute(n, t[n]) } var s = b((n.form ? "form" : "div") + ".mm-searchfield"),
                a = b("div.mm-searchfield__input"),
                o = b("input"); if (o.type = "text", o.autocomplete = "off", o.placeholder = this.i18n(t.placeholder), a.append(o), s.append(a), e.prepend(s), i(o, n.input), n.clear) { let e = b("a.mm-btn.mm-btn_close.mm-searchfield__btn");
                e.setAttribute("href", "#"), a.append(e) } if (i(s, n.form), n.form && n.submit && !n.clear) { let e = b("a.mm-btn.mm-btn_next.mm-searchfield__btn");
                e.setAttribute("href", "#"), a.append(e) } if (t.cancel) { let e = b("a.mm-searchfield__cancel");
                e.setAttribute("href", "#"), e.textContent = this.i18n("cancel"), s.append(e) } return s },
        ve = function(e) { var t = this.opts.searchfield,
                n = (this.conf.searchfield, {});
            e.closest(".mm-panel_search") ? (n.panels = g(this.node.pnls, ".mm-panel"), n.noresults = [e.closest(".mm-panel")]) : e.closest(".mm-panel") ? (n.panels = [e.closest(".mm-panel")], n.noresults = n.panels) : (n.panels = g(this.node.pnls, ".mm-panel"), n.noresults = [this.node.menu]), n.panels = n.panels.filter(e => !e.parentElement.matches(".mm-listitem_vertical")), n.panels = n.panels.filter(e => !e.matches(".mm-panel_search")), n.listitems = [], n.dividers = [], n.panels.forEach(e => { n.listitems.push(...g(e, ".mm-listitem")), n.dividers.push(...g(e, ".mm-divider")) }); var i = _(this.node.pnls, ".mm-panel_search")[0],
                s = g(e, "input")[0],
                a = g(e, ".mm-searchfield__cancel")[0];
            s.mmSearchfield = n, t.panel.add && t.panel.splash && (N(s, "focus.splash"), C(s, "focus.splash", e => { this.openPanel(i) })), t.cancel && (N(s, "focus.cancel"), C(s, "focus.cancel", e => { a.classList.add("mm-searchfield__cancel-active") }), N(a, "click.splash"), C(a, "click.splash", e => { if (e.preventDefault(), a.classList.remove("mm-searchfield__cancel-active"), i.matches(".mm-panel_opened")) { let e = _(this.node.pnls, ".mm-panel_opened-parent");
                    e.length && this.openPanel(e[e.length - 1]) } })), t.panel.add && "panel" == t.addTo && this.bind("openPanel:finish", e => { e === i && s.focus() }), N(s, "input.search"), C(s, "input.search", e => { switch (e.keyCode) {
                    case 9:
                    case 16:
                    case 17:
                    case 18:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        break;
                    default:
                        this.search(s) } }), this.search(s) },
        be = function(e) { if (e) { var t = this.opts.searchfield;
                this.conf.searchfield; if (e.closest(".mm-panel") || (e = _(this.node.pnls, ".mm-panel")[0]), !_(e, ".mm-panel__noresultsmsg").length) { var n = b("div.mm-panel__noresultsmsg.mm-hidden");
                    n.innerHTML = this.i18n(t.noResults), e.append(n) } } };
    S.prototype.search = function(e, t) { var n = this.opts.searchfield;
        this.conf.searchfield;
        t = (t = t || "" + e.value).toLowerCase().trim(); var i = e.mmSearchfield,
            s = g(e.closest(".mm-searchfield"), ".mm-btn"),
            a = _(this.node.pnls, ".mm-panel_search")[0],
            o = i.panels,
            r = i.noresults,
            l = i.listitems,
            m = i.dividers; if (l.forEach(e => { e.classList.remove("mm-listitem_nosubitems", "mm-listitem_onlysubitems", "mm-hidden") }), a && (_(a, ".mm-listview")[0].innerHTML = ""), o.forEach(e => { e.scrollTop = 0 }), t.length) { m.forEach(e => { e.classList.add("mm-hidden") }), l.forEach(e => { var i = _(e, ".mm-listitem__text")[0],
                    s = !1;
                i && function(e) { return Array.prototype.slice.call(e.childNodes).filter(e => 3 == e.nodeType).map(e => e.textContent).join(" ") }(i).toLowerCase().indexOf(t) > -1 && (i.matches(".mm-listitem__btn") ? n.showSubPanels && (s = !0) : i.matches("a") ? s = !0 : n.showTextItems && (s = !0)), s || e.classList.add("mm-hidden") }); var d = l.filter(e => !e.matches(".mm-hidden")).length; if (n.panel.add) { let e = [];
                o.forEach(t => { let i = w(g(t, ".mm-listitem")); if ((i = i.filter(e => !e.matches(".mm-hidden"))).length) { if (n.panel.dividers) { let n = b("li.mm-divider");
                            n.innerHTML = t.querySelector(".mm-navbar__title").innerHTML, e.push(n) }
                        i.forEach(t => { e.push(t.cloneNode(!0)) }) } }), e.forEach(e => { e.querySelectorAll(".mm-toggle, .mm-check").forEach(e => { e.remove() }) }), _(a, ".mm-listview")[0].append(...e), this.openPanel(a) } else n.showSubPanels && o.forEach(e => { w(g(e, ".mm-listitem")).forEach(e => { let t = e.mmChild;
                    t && g(t, ".mm-listitem").forEach(e => { e.classList.remove("mm-hidden") }) }) }), [...o].reverse().forEach((t, n) => { let i = t.mmParent; if (i) { w(g(t, ".mm-listitem")).length ? (i.matches(".mm-hidden") && i.classList.remove("mm-hidden"), i.classList.add("mm-listitem_onlysubitems")) : e.closest(".mm-panel") || ((t.matches(".mm-panel_opened") || t.matches(".mm-panel_opened-parent")) && setTimeout(() => { this.openPanel(i.closest(".mm-panel")) }, (n + 1) * (1.5 * this.conf.openingInterval)), i.classList.add("mm-listitem_nosubitems")) } }), o.forEach(e => { w(g(e, ".mm-listitem")).forEach(e => { let t = function(e, t) { for (var n = [], i = e.previousElementSibling; i;) t && !i.matches(t) || n.push(i), i = i.previousElementSibling; return n }(e, ".mm-divider")[0];
                    t && t.classList.remove("mm-hidden") }) });
            s.forEach(e => e.classList.remove("mm-hidden")), r.forEach(e => { g(e, ".mm-panel__noresultsmsg").forEach(e => e.classList[d ? "add" : "remove"]("mm-hidden")) }), n.panel.add && (n.panel.splash && g(a, ".mm-panel__content").forEach(e => e.classList.add("mm-hidden")), l.forEach(e => e.classList.remove("mm-hidden")), m.forEach(e => e.classList.remove("mm-hidden"))) } else if (l.forEach(e => e.classList.remove("mm-hidden")), m.forEach(e => e.classList.remove("mm-hidden")), s.forEach(e => e.classList.add("mm-hidden")), r.forEach(e => { g(e, ".mm-panel__noresultsmsg").forEach(e => e.classList.add("mm-hidden")) }), n.panel.add)
            if (n.panel.splash) g(a, ".mm-panel__content").forEach(e => e.classList.remove("mm-hidden"));
            else if (!e.closest(".mm-panel_search")) { let e = _(this.node.pnls, ".mm-panel_opened-parent");
            this.openPanel(e.slice(-1)[0]) }
        this.trigger("updateListview") };
    var ge = { add: !1, addTo: "panels" };
    S.options.sectionIndexer = ge;
    var _e = { current: !0, hover: !1, parent: !1 };
    S.options.setSelected = _e;
    var ye = { collapsed: { use: !1, blockMenu: !0, hideDivider: !1, hideNavbar: !0 }, expanded: { use: !1, initial: "open" } };
    S.options.sidebar = ye;
    S.configs.classNames.toggles = { toggle: "Toggle", check: "Check" };
    /*!
     * mmenu.js
     * mmenujs.com
     *
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     *
     * License: CC-BY-NC-4.0
     * http://creativecommons.org/licenses/by-nc/4.0/
     */
    S.addons = { offcanvas: function() { if (this.opts.offCanvas) { var e = function(e) { return "object" != typeof e && (e = {}), e }(this.opts.offCanvas);
                this.opts.offCanvas = a(e, S.options.offCanvas); var t = this.conf.offCanvas;
                this._api.push("open", "close", "setPage"), this.vars.opened = !1, this.bind("initMenu:before", () => { t.clone && (this.node.menu = this.node.menu.cloneNode(!0), this.node.menu.id && (this.node.menu.id = "mm-" + this.node.menu.id), g(this.node.menu, "[id]").forEach(e => { e.id = "mm-" + e.id })), this.node.wrpr = document.documentElement, document.querySelector(t.menu.insertSelector)[t.menu.insertMethod](this.node.menu) }), this.bind("initMenu:after", () => { j.call(this), this.setPage(S.node.page), H.call(this), this.node.menu.classList.add("mm-menu_offcanvas"); let e = window.location.hash; if (e) { let t = c(this.node.menu.id);
                        t && t == e.slice(1) && setTimeout(() => { this.open() }, 1e3) } }), this.bind("setPage:after", e => { S.node.blck && _(S.node.blck, "a").forEach(t => { t.setAttribute("href", "#" + e.id) }) }), this.bind("open:start:sr-aria", () => { S.sr_aria(this.node.menu, "hidden", !1) }), this.bind("close:finish:sr-aria", () => { S.sr_aria(this.node.menu, "hidden", !0) }), this.bind("initMenu:after:sr-aria", () => { S.sr_aria(this.node.menu, "hidden", !0) }), this.bind("initBlocker:after:sr-text", () => { _(S.node.blck, "a").forEach(e => { e.innerHTML = S.sr_text(this.i18n(this.conf.screenReader.text.closeMenu)) }) }), this.clck.push((e, t) => { let n = c(this.node.menu.id); if (n && e.matches('[href="#' + n + '"]')) { if (t.inMenu) return this.open(), !0; var i = e.closest(".mm-menu"); if (i) { var s = i.mmApi; if (s && s.close) return s.close(), l(i, () => { this.open() }, this.conf.transitionDuration), !0 } return this.open(), !0 } if ((n = S.node.page.id) && e.matches('[href="#' + n + '"]')) return this.close(), !0 }) } }, screenReader: function() { var e = function(e) { return "boolean" == typeof e && (e = { aria: e, text: e }), "object" != typeof e && (e = {}), e }(this.opts.screenReader);
            this.opts.screenReader = a(e, S.options.screenReader); var t = this.conf.screenReader;
            e.aria && (this.bind("initAddons:after", () => { this.bind("initMenu:after", function() { this.trigger("initMenu:after:sr-aria", [].slice.call(arguments)) }), this.bind("initNavbar:after", function() { this.trigger("initNavbar:after:sr-aria", [].slice.call(arguments)) }), this.bind("openPanel:start", function() { this.trigger("openPanel:start:sr-aria", [].slice.call(arguments)) }), this.bind("close:start", function() { this.trigger("close:start:sr-aria", [].slice.call(arguments)) }), this.bind("close:finish", function() { this.trigger("close:finish:sr-aria", [].slice.call(arguments)) }), this.bind("open:start", function() { this.trigger("open:start:sr-aria", [].slice.call(arguments)) }), this.bind("initOpened:after", function() { this.trigger("initOpened:after:sr-aria", [].slice.call(arguments)) }) }), this.bind("updateListview", () => { this.node.pnls.querySelectorAll(".mm-listitem").forEach(e => { S.sr_aria(e, "hidden", e.matches(".mm-hidden")) }) }), this.bind("openPanel:start", e => { var t = g(this.node.pnls, ".mm-panel").filter(t => t !== e).filter(e => !e.parentElement.matches(".mm-panel")),
                    n = [e];
                g(e, ".mm-listitem_vertical .mm-listitem_opened").forEach(e => { n.push(..._(e, ".mm-panel")) }), t.forEach(e => { S.sr_aria(e, "hidden", !0) }), n.forEach(e => { S.sr_aria(e, "hidden", !1) }) }), this.bind("closePanel", e => { S.sr_aria(e, "hidden", !0) }), this.bind("initPanel:after", e => { g(e, ".mm-btn").forEach(e => { S.sr_aria(e, "haspopup", !0); let t = e.getAttribute("href");
                    t && S.sr_aria(e, "owns", t.replace("#", "")) }) }), this.bind("initNavbar:after", e => { var t = _(e, ".mm-navbar")[0],
                    n = t.matches(".mm-hidden");
                S.sr_aria(t, "hidden", n) }), e.text && "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", e => { var t = _(e, ".mm-navbar")[0],
                    n = !!t.querySelector(".mm-btn_prev");
                S.sr_aria(g(t, ".mm-navbar__title")[0], "hidden", n) })), e.text && (this.bind("initAddons:after", () => { this.bind("setPage:after", function() { this.trigger("setPage:after:sr-text", [].slice.call(arguments)) }), this.bind("initBlocker:after", function() { this.trigger("initBlocker:after:sr-text", [].slice.call(arguments)) }) }), this.bind("initNavbar:after", e => { let n = _(e, ".mm-navbar")[0]; if (n) { let e = _(n, ".mm-btn_prev")[0];
                    e && (e.innerHTML = S.sr_text(this.i18n(t.text.closeSubmenu))) } }), this.bind("initListview:after", e => { let n = e.mmParent; if (n) { let e = _(n, ".mm-btn_next")[0]; if (e) { let n = this.i18n(t.text[e.parentElement.matches(".mm-listitem_vertical") ? "toggleSubmenu" : "openSubmenu"]);
                        e.innerHTML += S.sr_text(n) } } })) }, scrollBugFix: function() { if (U && this.opts.offCanvas && this.opts.offCanvas.blockUI) { var e = function(e) { return "boolean" == typeof e && (e = { fix: e }), "object" != typeof e && (e = {}), e }(this.opts.scrollBugFix); if (this.opts.scrollBugFix = a(e, S.options.scrollBugFix), e.fix) { var t, n, i, s = (t = this.node.menu, n = "", i = -1, t.addEventListener("touchstart", e => { i = e.changedTouches[0].pageY }), t.addEventListener("touchmove", e => { var t = e.changedTouches[0].pageY;
                        n = t > i ? "down" : "up", i = t }), { get: () => n });
                    this.node.menu.addEventListener("scroll", o, { passive: !1 }), this.node.menu.addEventListener("touchmove", e => { var t = e.target.closest(".mm-panel");
                        t ? t.scrollHeight === t.offsetHeight ? o(e) : (0 == t.scrollTop && "down" == s.get() || t.scrollHeight == t.scrollTop + t.offsetHeight && "up" == s.get()) && o(e) : o(e) }, { passive: !1 }), this.bind("open:start", () => { _(this.node.pnls, ".mm-panel_opened")[0].scrollTop = 0 }), window.addEventListener("orientationchange", e => { var t = _(this.node.pnls, ".mm-panel_opened")[0];
                        t.scrollTop = 0, t.style["-webkit-overflow-scrolling"] = "auto", t.style["-webkit-overflow-scrolling"] = "touch" }) } }

            function o(e) { e.preventDefault(), e.stopPropagation() } }, autoHeight: function() { var e = function(e) { return "boolean" == typeof e && e && (e = { height: "auto" }), "string" == typeof e && (e = { height: e }), "object" != typeof e && (e = {}), e }(this.opts.autoHeight); if (this.opts.autoHeight = a(e, S.options.autoHeight), "auto" != e.height && "highest" != e.height) return; const t = (() => { const t = () => { var e = _(this.node.pnls, ".mm-panel_opened")[0]; return e && (e = i(e)), e || (e = _(this.node.pnls, ".mm-panel")[0]), e.offsetHeight },
                    n = () => { var e = 0; return _(this.node.pnls, ".mm-panel").forEach(t => { t = i(t), e = Math.max(e, t.offsetHeight) }), e },
                    i = e => (e.parentElement.matches(".mm-listitem_vertical") && (e = y(e, ".mm-panel").filter(e => !e.parentElement.matches(".mm-listitem_vertical"))[0]), e); return () => { if (!this.opts.offCanvas || this.vars.opened) { var i = window.getComputedStyle(this.node.pnls),
                            s = Math.max(parseInt(i.top, 10), 0) || 0,
                            a = Math.max(parseInt(i.bottom, 10), 0) || 0,
                            o = 0;
                        this.node.menu.classList.add("mm-menu_autoheight-measuring"), "auto" == e.height ? o = t() : "highest" == e.height && (o = n()), this.node.menu.style.height = o + s + a + "px", this.node.menu.classList.remove("mm-menu_autoheight-measuring") } } })();
            this.bind("initMenu:after", () => { this.node.menu.classList.add("mm-menu_autoheight") }), this.opts.offCanvas && this.bind("open:start", t), "highest" == e.height && this.bind("initPanels:after", t), "auto" == e.height && (this.bind("updateListview", t), this.bind("openPanel:start", t)) }, backButton: function() { if (this.opts.offCanvas) { var e = function(e) { return "boolean" == typeof e && (e = { close: e }), "object" != typeof e && (e = {}), e }(this.opts.backButton);
                this.opts.backButton = a(e, S.options.backButton); var t = "#" + this.node.menu.id; if (e.close) { var n = []; const e = () => { n = [t], _(this.node.pnls, ".mm-panel_opened, .mm-panel_opened-parent").forEach(e => { n.push("#" + e.id) }) };
                    this.bind("open:finish", () => { history.pushState(null, document.title, t) }), this.bind("open:finish", e), this.bind("openPanel:finish", e), this.bind("close:finish", () => { n = [], history.back(), history.pushState(null, document.title, location.pathname + location.search) }), window.addEventListener("popstate", e => { if (this.vars.opened && n.length) { var i = (n = n.slice(0, -1))[n.length - 1];
                            i == t ? this.close() : (this.openPanel(this.node.menu.querySelector(i)), history.pushState(null, document.title, t)) } }) }
                e.open && window.addEventListener("popstate", e => { this.vars.opened || location.hash != t || this.open() }) } }, columns: function() { var e = function(e) { return "boolean" == typeof e && (e = { add: e }), "number" == typeof e && (e = { add: !0, visible: e }), "object" != typeof e && (e = {}), "number" == typeof e.visible && (e.visible = { min: e.visible, max: e.visible }), e }(this.opts.columns); if (this.opts.columns = a(e, S.options.columns), e.add) { e.visible.min = Math.max(1, Math.min(6, e.visible.min)), e.visible.max = Math.max(e.visible.min, Math.min(6, e.visible.max)); for (var t = [], n = [], i = ["mm-panel_opened", "mm-panel_opened-parent", "mm-panel_highest"], s = 0; s <= e.visible.max; s++) t.push("mm-menu_columns-" + s), n.push("mm-panel_columns-" + s);
                i.push(...n), this.bind("openPanel:before", e => { var t; if (e && (t = e.mmParent), t && (t = t.closest(".mm-panel"))) { var n = t.className; if (n.length && (n = n.split("mm-panel_columns-")[1]))
                            for (var s = parseInt(n.split(" ")[0], 10) + 1; s > 0;) { if (!(e = _(this.node.pnls, ".mm-panel_columns-" + s)[0])) { s = -1; break }
                                console.log(e), s++, e.classList.remove(...i), e.classList.add("mm-hidden") } } }), this.bind("openPanel:start", i => { var s = _(this.node.pnls, ".mm-panel_opened-parent").length;
                    i.matches(".mm-panel_opened-parent") || s++, s = Math.min(e.visible.max, Math.max(e.visible.min, s)), this.node.menu.classList.remove(...t), this.node.menu.classList.add("mm-menu_columns-" + s); var a = [];
                    _(this.node.pnls, ".mm-panel").forEach(e => { e.classList.remove(...n), e.matches(".mm-panel_opened-parent") && a.push(e) }), a.push(i), a.slice(-e.visible.max).forEach((e, t) => { e.classList.add("mm-panel_columns-" + t) }) }) } }, counters: function() { var e = function(e) { return "boolean" == typeof e && (e = { add: e, addTo: "panels", count: e }), "object" != typeof e && (e = {}), "panels" == e.addTo && (e.addTo = ".mm-panel"), e }(this.opts.counters); if (this.opts.counters = a(e, S.options.counters), this.bind("initListview:after", e => { var t = this.conf.classNames.counters.counter;
                    e.querySelectorAll("." + t).forEach(e => { E(e, t, "mm-counter") }) }), e.add && this.bind("initListview:after", t => { if (t.matches(e.addTo)) { var n = t.mmParent; if (n && !n.querySelector(".mm-counter")) { let e = b("span.mm-counter"),
                                t = _(n, ".mm-btn")[0];
                            t && t.prepend(e) } } }), e.count) { const e = e => {
                    (e ? [e] : _(this.node.pnls, ".mm-panel")).forEach(e => { var t = e.mmParent; if (t) { var n = t.querySelector(".mm-counter"); if (n) { var i = [];
                                _(e, ".mm-listview").forEach(e => { i.push(..._(e)) }), n.innerHTML = w(i).length.toString() } } }) };
                this.bind("initListview:after", e), this.bind("updateListview", e) } }, dividers: function() { var e = function(e) { return "boolean" == typeof e && (e = { add: e }), "object" != typeof e && (e = {}), "panels" == e.addTo && (e.addTo = ".mm-panel"), e }(this.opts.dividers);
            this.opts.dividers = a(e, S.options.dividers), this.bind("initListview:after", e => { _(e, "ul, ol").forEach(e => { _(e).forEach(e => { E(e, this.conf.classNames.divider, "mm-divider"), e.matches(".mm-divider") && e.classList.remove("mm-listitem") }) }) }), e.type && this.bind("initMenu:after", () => { this.node.menu.classList.add("mm-menu_dividers-" + e.type) }), e.add && this.bind("initListview:after", t => { t.matches(e.addTo) && (g(t, ".mm-divider").forEach(e => { e.remove() }), g(t, ".mm-listview").forEach(e => { var t = "";
                    w(_(e)).forEach(n => { let i = _(n, ".mm-listitem__text")[0].textContent.trim().toLowerCase()[0]; if (i.length && i != t) { t = i; let s = b("li.mm-divider");
                            s.textContent = i, e.insertBefore(s, n) } }) })) }) }, drag: function() { if (this.opts.offCanvas && !("function" != typeof window.Hammer || window.Hammer.VERSION < 2)) { var e = function(e) { return "boolean" == typeof e && (e = { menu: e, panels: e }), "object" != typeof e && (e = {}), "boolean" == typeof e.menu && (e.menu = { open: e.menu }), "object" != typeof e.menu && (e.menu = {}), "boolean" == typeof e.panels && (e.panels = { close: e.panels }), "object" != typeof e.panels && (e.panels = {}), e }(this.opts.drag);
                this.opts.drag = a(e, S.options.drag); var t = this.conf.drag;
                e.menu.open && this.bind("setPage:after", () => { var i, s, a, o = { events: "panleft panright", typeLower: "x", typeUpper: "X", open_dir: "right", close_dir: "left", negative: !1 },
                        l = "width",
                        m = "innerWidth",
                        d = o.open_dir,
                        c = function(t) { t <= e.menu.maxStartPos && (h = 1) },
                        p = function() { return g(document.body, ".mm-slideout") },
                        h = 0,
                        f = 0,
                        u = 0,
                        v = this.opts.extensions.all,
                        b = void 0 === v ? "left" : v.indexOf("mm-menu_position-right") > -1 ? "right" : v.indexOf("mm-menu_position-top") > -1 ? "top" : v.indexOf("mm-menu_position-bottom") > -1 ? "bottom" : "left",
                        _ = void 0 === v ? "back" : v.indexOf("mm-menu_position-top") > -1 || v.indexOf("mm-menu_position-bottom") > -1 || v.indexOf("mm-menu_position-front") > -1 ? "front" : "back"; switch (b) {
                        case "top":
                        case "bottom":
                            o.events = "panup pandown", o.typeLower = "y", o.typeUpper = "Y", l = "height", m = "innerHeight" } switch (b) {
                        case "right":
                        case "bottom":
                            o.negative = !0, c = function(t) { t >= window[m] - e.menu.maxStartPos && (h = 1) } } switch (b) {
                        case "right":
                            o.open_dir = "left", o.close_dir = "right"; break;
                        case "top":
                            o.open_dir = "down", o.close_dir = "up"; break;
                        case "bottom":
                            o.open_dir = "up", o.close_dir = "down" } switch (_) {
                        case "front":
                            p = function() { return [this.node.menu] } } var y = r(this.node.menu, e.menu.node, S.node.page); "string" == typeof y && (y = document.querySelector(y)); var w = new window.Hammer(y, this.opts.drag.vendors.hammer);
                    w.on("panstart", e => { c.call(this, e.center[o.typeLower]), a = p.call(this), d = o.open_dir }), w.on(o.events + " panend", e => { h > 0 && e.preventDefault() }), w.on(o.events, r => { if (i = r["delta" + o.typeUpper], o.negative && (i = -i), i != f && (d = i >= f ? o.open_dir : o.close_dir), (f = i) > e.menu.threshold && 1 == h) { if (this.node.wrpr.matches(".mm-wrapper_opened")) return;
                            h = 2, this._openSetup(), this.trigger("open:start"), this.node.wrpr.classList.add("mm-wrapper_dragging"), u = n(window[m] * t.menu[l].perc, t.menu[l].min, t.menu[l].max) } if (2 == h) { s = n(f, 10, u) - ("front" == _ ? u : 0), o.negative && (s = -s); let e = "translate" + o.typeUpper + "(" + s + "px )";
                            a.forEach(t => { t.style["-webkit-transform"] = "-webkit-" + e, t.style.transform = e }) } }), w.on("panend", e => { 2 == h && (this.node.wrpr.classList.remove("mm-wrapper_dragging"), a.forEach(e => { e.style["-webkit-transform"] = "", e.style.transform = "" }), this[d == o.open_dir ? "_openStart" : "close"]()), h = 0 }) }), e.panels.close && this.bind("initPanel:after", e => { var t = e["mmParent "]; if (t) { t = t.closest(".mm-panel"); var n = new window.Hammer(e, this.opts.drag.vendors.hammer),
                            i = null;
                        n.on("panright", e => { i || (this.openPanel(t), i = setTimeout(() => { clearTimeout(i), i = null }, this.conf.openingInterval + this.conf.transitionDuration)) }) } }) }

            function n(e, t, n) { return e < t && (e = t), e > n && (e = n), e } }, dropdown: function() { if (this.opts.offCanvas) { var e = function(e) { return "boolean" == typeof e && e && (e = { drop: e }), "object" != typeof e && (e = {}), "string" == typeof e.position && (e.position = { of: e.position }), e }(this.opts.dropdown);
                this.opts.dropdown = a(e, S.options.dropdown); var t = this.conf.dropdown; if (e.drop) { var n;
                    this.bind("initMenu:after", () => { if (this.node.menu.classList.add("mm-menu_dropdown"), "string" != typeof e.position.of) { let t = c(this.node.menu.id);
                            t && t.length && (e.position.of = '[href="#' + t + '"]') } if ("string" == typeof e.position.of) { n = g(document.body, e.position.of)[0]; var t = e.event.split(" ");
                            1 == t.length && (t[1] = t[0]), "hover" == t[0] && n.addEventListener("mouseenter", e => { this.open() }, { passive: !0 }), "hover" == t[1] && this.node.menu.addEventListener("mouseleave", e => { this.close() }, { passive: !0 }) } }), this.bind("open:start", () => { this.node.menu.mmStyle = this.node.menu.getAttribute("style"), this.node.wrpr.classList.add("mm-wrapper_dropdown") }), this.bind("close:finish", () => { this.node.menu.setAttribute("style", this.node.menu.mmStyle), this.node.wrpr.classList.remove("mm-wrapper_dropdown") }); var i = function(i, s) { var a, o, r, l = s[0],
                            m = s[1],
                            d = "x" == i ? "offsetWidth" : "offsetHeight",
                            c = "x" == i ? "left" : "top",
                            p = "x" == i ? "right" : "bottom",
                            h = "x" == i ? "width" : "height",
                            f = "x" == i ? "innerWidth" : "innerHeight",
                            u = "x" == i ? "maxWidth" : "maxHeight",
                            v = null,
                            b = window["x" == i ? "scrollX" : "scrollY"],
                            g = (a = c, n.getBoundingClientRect()[a] + document.body["left" === a ? "scrollLeft" : "scrollTop"] - b),
                            _ = g + n[d],
                            y = window[f],
                            w = t.offset.button[i] + t.offset.viewport[i]; if (e.position[i]) switch (e.position[i]) {
                            case "left":
                            case "bottom":
                                v = "after"; break;
                            case "right":
                            case "top":
                                v = "before" }
                        return null === v && (v = g + (_ - g) / 2 < y / 2 ? "after" : "before"), "after" == v ? (r = y - ((o = "x" == i ? g : _) + w), l[c] = o + t.offset.button[i] + "px", l[p] = "auto", e.tip && m.push("mm-menu_tip-" + ("x" == i ? "left" : "top"))) : (r = (o = "x" == i ? _ : g) - w, l[p] = "calc( 100% - " + (o - t.offset.button[i]) + "px )", l[c] = "auto", e.tip && m.push("mm-menu_tip-" + ("x" == i ? "right" : "bottom"))), e.fitViewport && (l[u] = Math.min(t[h].max, r) + "px"), [l, m] };
                    this.bind("open:start", s), window.addEventListener("resize", e => { s.call(this) }, { passive: !0 }), this.opts.offCanvas.blockUI || window.addEventListener("scroll", e => { s.call(this) }, { passive: !0 }) } }

            function s() { if (this.vars.opened) { this.node.menu.setAttribute("style", this.node.menu.mmStyle); var t = [{},
                        []
                    ];
                    t = i.call(this, "y", t), t = i.call(this, "x", t); for (let e in t[0]) this.node.menu.style[e] = t[0][e];
                    e.tip && (this.node.menu.classList.remove("mm-menu_tip-left", "mm-menu_tip-right", "mm-menu_tip-top", "mm-menu_tip-bottom"), this.node.menu.classList.add(...t[1])) } } }, fixedElements: function() { if (this.opts.offCanvas) { var e, t, n, i, s = this.conf.fixedElements;
                this.bind("setPage:after", a => { e = this.conf.classNames.fixedElements.fixed, i = g(document, s.fixed.insertSelector)[0], g(a, "." + e).forEach(t => { E(t, e, "mm-slideout"), i[s.fixed.insertMethod](t) }), g(a, "." + (t = this.conf.classNames.fixedElements.sticky)).forEach(e => { E(e, t, "mm-sticky") }), n = g(a, ".mm-sticky") }), this.bind("open:start", () => { if (n.length && "hidden" == window.getComputedStyle(this.node.wrpr).overflow) { let e = window.scrollY + s.sticky.offset;
                        n.forEach(t => { t.style.top = parseInt(window.getComputedStyle(t).top, 10) + e + "px" }) } }), this.bind("close:finish", () => { n.forEach(e => { e.style.top = "" }) }) } }, iconbar: function() { var e, t = function(e) { return "array" == o(e) && (e = { use: !0, top: e }), "object" != o(e) && (e = {}), void 0 === e.use && (e.use = !0), "boolean" == typeof e.use && e.use && (e.use = !0), e }(this.opts.iconbar); if (this.opts.iconbar = a(t, S.options.iconbar), t.use && (["top", "bottom"].forEach((n, i) => { var s = t[n]; "array" != o(s) && (s = [s]); var a = b("div.mm-iconbar__" + n); for (let e = 0, t = s.length; e < t; e++) "string" == typeof s[e] ? a.innerHTML += s[e] : a.append(s[e]);
                    a.children.length && (e || (e = b("div.mm-iconbar")), e.append(a)) }), e)) { this.bind("initMenu:after", () => { this.node.menu.prepend(e) }); let n = "mm-menu_iconbar-" + t.position,
                    i = () => { this.node.menu.classList.add(n), S.sr_aria(e, "hidden", !1) },
                    s = () => { this.node.menu.classList.remove(n), S.sr_aria(e, "hidden", !0) }; if ("boolean" == typeof t.use ? this.bind("initMenu:after", i) : P(t.use, i, s), "tabs" == t.type) { e.classList.add("mm-iconbar_tabs"), e.addEventListener("click", e => { var t = e.target; if (t.matches("a"))
                            if (t.matches(".mm-iconbar__tab_selected")) e.stopImmediatePropagation();
                            else try { var n = this.node.menu.querySelector(t.getAttribute("href"))[0];
                                n && n.matches(".mm-panel") && (e.preventDefault(), e.stopImmediatePropagation(), this.openPanel(n, !1)) } catch (e) {} }); const t = n => { g(e, "a").forEach(e => { e.classList.remove("mm-iconbar__tab_selected") }); var i = g(e, '[href="#' + n.id + '"]')[0]; if (i) i.classList.add("mm-iconbar__tab_selected");
                        else { let e = n.mmParent;
                            e && t(e.closest(".mm-panel")) } };
                    this.bind("openPanel:start", t) } } }, iconPanels: function() { var e = function(e) { return "boolean" == typeof e && (e = { add: e }), "number" != typeof e && "string" != typeof e || (e = { add: !0, visible: e }), "object" != typeof e && (e = {}), e }(this.opts.iconPanels);
            this.opts.iconPanels = a(e, S.options.iconPanels); var t = !1; if ("first" == e.visible && (t = !0, e.visible = 1), e.visible = Math.min(3, Math.max(1, e.visible)), e.visible++, e.add) { this.bind("initMenu:after", () => { var t = ["mm-menu_iconpanel"];
                    e.hideNavbar && t.push("mm-menu_hidenavbar"), e.hideDivider && t.push("mm-menu_hidedivider"), this.node.menu.classList.add(...t) }); var n = []; if (!t)
                    for (var i = 0; i <= e.visible; i++) n.push("mm-panel_iconpanel-" + i);
                this.bind("openPanel:start", i => { var s = _(this.node.pnls, ".mm-panel"); if (!(i = i || s[0]).parentElement.matches(".mm-listitem_vertical"))
                        if (t) s.forEach((e, t) => { e.classList[0 == t ? "add" : "remove"]("mm-panel_iconpanel-first") });
                        else { s.forEach(e => { e.classList.remove(...n) }), s = s.filter(e => e.matches(".mm-panel_opened-parent")); let t = !1;
                            s.forEach(e => { i === e && (t = !0) }), t || s.push(i), s.forEach(e => { e.classList.remove("mm-hidden") }), (s = s.slice(-e.visible)).forEach((e, t) => { e.classList.add("mm-panel_iconpanel-" + t) }) } }), this.bind("initListview:after", t => { if (e.blockPanel && !t.parentElement.matches(".mm-listitem_vertical") && !_(t, ".mm-panel__blocker")[0]) { let e = b("a.mm-panel__blocker");
                        e.setAttribute("href", "#" + t.closest(".mm-panel").id), t.prepend(e) } }) } }, keyboardNavigation: function() { if (!U) { var e = function(e) { return "boolean" != typeof e && "string" != typeof e || (e = { enable: e }), "object" != typeof e && (e = {}), e }(this.opts.keyboardNavigation); if (this.opts.keyboardNavigation = a(e, S.options.keyboardNavigation), e.enable) { let t = b("button.mm-tabstart.mm-sronly"),
                        n = b("button.mm-tabend.mm-sronly"),
                        i = b("button.mm-tabend.mm-sronly");
                    this.bind("initMenu:after", () => { e.enhance && this.node.menu.classList.add("mm-menu_keyboardfocus"), ne.call(this, e.enhance) }), this.bind("initOpened:before", () => { this.node.menu.prepend(t), this.node.menu.append(n), _(this.node.menu, ".mm-navbars-top, .mm-navbars-bottom").forEach(e => { e.querySelectorAll(".mm-navbar__title").forEach(e => { e.setAttribute("tabindex", "-1") }) }) }), this.bind("initBlocker:after", () => { S.node.blck.append(i), _(S.node.blck, "a")[0].classList.add("mm-tabstart") }); let s = "input, select, textarea, button, label, a[href]"; const a = t => { t = t || _(this.node.pnls, ".mm-panel_opened")[0]; var n = null,
                            i = document.activeElement.closest(".mm-navbar"); if (!i || i.closest(".mm-menu") != this.node.menu) { if ("default" == e.enable && ((n = g(t, ".mm-listview a[href]:not(.mm-hidden)")[0]) || (n = g(t, s + ":not(.mm-hidden)")[0]), !n)) { let e = [];
                                _(this.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach(t => { e.push(...g(t, s + ":not(.mm-hidden)")) }), n = e[0] }
                            n || (n = _(this.node.menu, ".mm-tabstart")[0]), n && n.focus() } };
                    this.bind("open:finish", a), this.bind("openPanel:finish", a), this.bind("initOpened:after:sr-aria", () => {
                        [this.node.menu, S.node.blck].forEach(e => { _(e, ".mm-tabstart, .mm-tabend").forEach(e => { S.sr_aria(e, "hidden", !0), S.sr_role(e, "presentation") }) }) }) } } }, lazySubmenus: function() { var e = function(e) { return "boolean" == typeof e && (e = { load: e }), "object" != typeof e && (e = {}), e }(this.opts.lazySubmenus);
            this.opts.lazySubmenus = a(e, S.options.lazySubmenus), e.load && (this.bind("initMenu:after", () => { var e = [];
                g(this.node.pnls, "li").forEach(t => { e.push(..._(t, this.conf.panelNodetype.join(", "))) }), e.filter(e => !e.matches(".mm-listview_inset")).filter(e => !e.matches(".mm-nolistview")).filter(e => !e.matches(".mm-nopanel")).forEach(e => { e.classList.add("mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel") }) }), this.bind("initPanels:before", () => { _(this.node.pnls, this.conf.panelNodetype.join(", ")).forEach(e => { var t = ".mm-panel_lazysubmenu",
                        n = g(e, t);
                    e.matches(t) && n.unshift(e), n.filter(e => !e.matches(".mm-panel_lazysubmenu .mm-panel_lazysubmenu")).forEach(e => { e.classList.remove("mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel") }) }) }), this.bind("initOpened:before", () => { var e = [];
                g(this.node.pnls, "." + this.conf.classNames.selected).forEach(t => { e.push(...y(t, ".mm-panel_lazysubmenu")) }), e.length && (e.forEach(e => { e.classList.remove("mm-panel_lazysubmenu", "mm-nolistview mm-nopanel") }), this.initPanel(e[e.length - 1])) }), this.bind("openPanel:before", e => { var t = ".mm-panel_lazysubmenu",
                    n = g(e, t);
                e.matches(t) && n.unshift(e), (n = n.filter(e => !e.matches(".mm-panel_lazysubmenu .mm-panel_lazysubmenu"))).forEach(e => { this.initPanel(e) }) })) }, navbars: oe, pageScroll: function() { var e = function(e) { return "boolean" == typeof e && (e = { scroll: e }), "object" != typeof e && (e = {}), e }(this.opts.pageScroll);
            this.opts.pageScroll = a(e, S.options.pageScroll); var t, n = this.conf.pageScroll;

            function i() { t && window.scrollTo({ top: t.getBoundingClientRect().top - n.scrollOffset, behavior: "smooth" }), t = null }

            function s(e) { try { return "#" != e && "#" == e.slice(0, 1) ? S.node.page.querySelector(e) : null } catch (e) { return null } } if (e.scroll && this.bind("close:finish", () => { i() }), this.opts.offCanvas && e.scroll && this.clck.push((e, n) => { if (t = null, n.inMenu) { var a = e.getAttribute("href"); if (t = s(a)) return this.node.menu.matches(".mm-menu_sidebar-expanded") && this.node.wrpr.matches(".mm-wrapper_sidebar-expanded") ? void i() : { close: !0 } } }), e.update) { let e = [];
                this.bind("initListview:after", t => { L(g(t, ".mm-listitem")).forEach(t => { var n = s(t.getAttribute("href"));
                        n && e.unshift(n) }) }); let t = -1;
                window.addEventListener("scroll", i => { for (var s = window.scrollY, a = 0; a < e.length; a++)
                        if (e[a].offsetTop < s + n.updateOffset) { if (t !== a) { t = a; let n = L(g(_(this.node.pnls, ".mm-panel_opened")[0], ".mm-listitem"));
                                (n = n.filter(t => t.matches('[href="#' + e[a].id + '"]'))).length && this.setSelected(n[0].parentElement) } break } }) } }, searchfield: function() { var e = function(e) { return "boolean" == typeof e && (e = { add: e }), "object" != typeof e && (e = {}), "boolean" == typeof e.panel && (e.panel = { add: e.panel }), "object" != typeof e.panel && (e.panel = {}), "panel" == e.addTo && (e.panel.add = !0), e.panel.add && (e.showSubPanels = !1, e.panel.splash && (e.cancel = !0)), e }(this.opts.searchfield);
            this.opts.searchfield = a(e, S.options.searchfield);
            this.conf.searchfield;
            e.add && (this.bind("close:start", () => { g(this.node.menu, ".mm-searchfield").forEach(e => { e.blur() }) }), this.bind("initPanel:after", t => { var n = null;
                e.panel.add && (n = fe.call(this)); var i = null; switch (e.addTo) {
                    case "panels":
                        i = [t]; break;
                    case "panel":
                        i = [n]; break;
                    default:
                        "string" == typeof e.addTo ? i = g(this.node.menu, e.addTo) : "array" == o(e.addTo) && (i = e.addTo) }
                i.forEach(t => { t = ue.call(this, t), e.search && t && ve.call(this, t) }), e.noResults && be.call(this, e.panel.add ? n : t) }), this.clck.push((e, t) => { if (t.inMenu && e.matches(".mm-searchfield__btn")) { if (e.matches(".mm-btn_close")) { let t = g(e.closest(".mm-searchfield"), "input")[0]; return t.value = "", this.search(t), !0 } if (e.matches(".mm-btn_next")) { let t = e.closest("form"); return t && t.submit(), !0 } } })) }, sectionIndexer: function() { var e = function(e) { return "boolean" == typeof e && (e = { add: e }), "object" != typeof e && (e = {}), e }(this.opts.sectionIndexer);
            this.opts.sectionIndexer = a(e, S.options.sectionIndexer), e.add && this.bind("initPanels:after", () => { if (!this.node.indx) { let e = ""; "abcdefghijklmnopqrstuvwxyz".split("").forEach(t => { e += '<a href="#">' + t + "</a>" }); let t = b("div.mm-sectionindexer");
                    t.innerHTML = e, this.node.pnls.prepend(t), this.node.indx = t, this.node.indx.addEventListener("click", e => { e.target.matches("a") && e.preventDefault() }); let n = e => { if (e.target.matches("a")) { var t = e.target.textContent,
                                n = _(this.node.pnls, ".mm-panel_opened")[0],
                                i = -1,
                                s = n.scrollTop;
                            n.scrollTop = 0, g(n, ".mm-divider").filter(e => !e.matches(".mm-hidden")).forEach(e => { i < 0 && t == e.textContent.trim().slice(0, 1).toLowerCase() && (i = e.offsetTop) }), n.scrollTop = i > -1 ? i : s } };
                    U ? (this.node.indx.addEventListener("touchstart", n), this.node.indx.addEventListener("touchmove", n)) : this.node.indx.addEventListener("mouseover", n) }
                this.bind("openPanel:start", e => { var t = g(e, ".mm-divider").filter(e => !e.matches(".mm-hidden")).length;
                    this.node.indx.classList[t ? "add" : "remove"]("mm-sectionindexer_active") }) }) }, setSelected: function() { var e = function(e) { return "boolean" == typeof e && (e = { hover: e, parent: e }), "object" != typeof e && (e = {}), e }(this.opts.setSelected); if (this.opts.setSelected = a(e, S.options.setSelected), "detect" == e.current) { const e = t => { t = t.split("?")[0].split("#")[0]; var n = this.node.menu.querySelector('a[href="' + t + '"], a[href="' + t + '/"]'); if (n) this.setSelected(n.parentElement);
                    else { var i = t.split("/").slice(0, -1);
                        i.length && e(i.join("/")) } };
                this.bind("initMenu:after", () => { e.call(this, window.location.href) }) } else e.current || this.bind("initListview:after", e => { g(e, ".mm-listitem_selected").forEach(e => { e.classList.remove("mm-listitem_selected") }) });
            e.hover && this.bind("initMenu:after", () => { this.node.menu.classList.add("mm-menu_selected-hover") }), e.parent && (this.bind("openPanel:finish", e => { g(this.node.pnls, ".mm-listitem_selected-parent").forEach(e => { e.classList.remove("mm-listitem_selected-parent") }); for (var t = e.mmParent; t;) t.matches(".mm-listitem_vertical") || t.classList.add("mm-listitem_selected-parent"), t = (t = t.closest(".mm-panel")).mmParent }), this.bind("initMenu:after", () => { this.node.menu.classList.add("mm-menu_selected-parent") })) }, sidebar: function() { if (this.opts.offCanvas) { var e = function(e) { return ("string" == typeof e || "boolean" == typeof e && e || "number" == typeof e) && (e = { expanded: e }), "object" != typeof e && (e = {}), "boolean" == typeof e.collapsed && e.collapsed && (e.collapsed = { use: !0 }), "string" != typeof e.collapsed && "number" != typeof e.collapsed || (e.collapsed = { use: e.collapsed }), "object" != typeof e.collapsed && (e.collapsed = {}), "boolean" == typeof e.expanded && e.expanded && (e.expanded = { use: !0 }), "string" != typeof e.expanded && "number" != typeof e.expanded || (e.expanded = { use: e.expanded }), "object" != typeof e.expanded && (e.expanded = {}), e }(this.opts.sidebar); if (this.opts.sidebar = a(e, S.options.sidebar), e.collapsed.use) { this.bind("initMenu:after", () => { if (this.node.menu.classList.add("mm-menu_sidebar-collapsed"), e.collapsed.blockMenu && this.opts.offCanvas && !_(this.node.menu, ".mm-menu__blocker")[0]) { let e = b("a.mm-menu__blocker");
                            e.setAttribute("href", "#" + this.node.menu.id), this.node.menu.prepend(e) }
                        e.collapsed.hideNavbar && this.node.menu.classList.add("mm-menu_hidenavbar"), e.collapsed.hideDivider && this.node.menu.classList.add("mm-menu_hidedivider") }); let t = () => { this.node.wrpr.classList.add("mm-wrapper_sidebar-collapsed") },
                        n = () => { this.node.wrpr.classList.remove("mm-wrapper_sidebar-collapsed") }; "boolean" == typeof e.collapsed.use ? this.bind("initMenu:after", t) : P(e.collapsed.use, t, n) } if (e.expanded.use) { this.bind("initMenu:after", () => { this.node.menu.classList.add("mm-menu_sidebar-expanded") }); let n = () => { this.node.wrpr.classList.add("mm-wrapper_sidebar-expanded"), this.node.wrpr.matches(".mm-wrapper_sidebar-closed") || this.open() },
                        i = () => { this.node.wrpr.classList.remove("mm-wrapper_sidebar-expanded"), this.close() }; "boolean" == typeof e.expanded.use ? this.bind("initMenu:after", n) : P(e.expanded.use, n, i), this.bind("close:start", () => { this.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (this.node.wrpr.classList.add("mm-wrapper_sidebar-closed"), "remember" == e.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "closed")) }), this.bind("open:start", () => { this.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (this.node.wrpr.classList.remove("mm-wrapper_sidebar-closed"), "remember" == e.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "open")) }); var t = e.expanded.initial; if ("remember" == e.expanded.initial) { let e = window.localStorage.getItem("mmenuExpandedState"); switch (e) {
                            case "open":
                            case "closed":
                                t = e } } "closed" == t && this.bind("initMenu:after", () => { this.node.wrpr.classList.add("mm-wrapper_sidebar-closed") }), this.clck.push((t, n) => { if (n.inMenu && n.inListview && this.node.wrpr.matches(".mm-wrapper_sidebar-expanded")) return { close: "closed" == e.expanded.initial } }) } } }, toggles: function() { this.bind("initPanel:after", e => { g(e, "input").forEach(e => { E(e, this.conf.classNames.toggles.toggle, "mm-toggle"), E(e, this.conf.classNames.toggles.check, "mm-check") }) }) } }, S.wrappers = { angular: function() { this.opts.onClick = { close: !0, preventDefault: !1, setSelected: !0 } }, bootstrap: function() { if (this.node.menu.matches(".navbar-collapse")) { this.conf.offCanvas && (this.conf.offCanvas.clone = !1); var e = b("nav"),
                    t = b("div");
                e.append(t), _(this.node.menu).forEach(e => { switch (!0) {
                        case e.matches(".navbar-nav"):
                            t.append(function(e) { var t = b("ul"); return g(e, ".nav-item").forEach(e => { var s = b("li"); if (e.matches(".active") && s.classList.add("Selected"), !e.matches(".nav-link")) { let t = _(e, ".dropdown-menu")[0];
                                        t && s.append(i(t)), e = _(e, ".nav-link")[0] }
                                    s.prepend(n(e)), t.append(s) }), t }(e)); break;
                        case e.matches(".dropdown-menu"):
                            t.append(i(e)); break;
                        case e.matches(".form-inline"):
                            this.conf.searchfield.form = { action: e.getAttribute("action") || null, method: e.getAttribute("method") || null }, this.conf.searchfield.input = { name: e.querySelector("input").getAttribute("name") || null }, this.conf.searchfield.clear = !1, this.conf.searchfield.submit = !0; break;
                        default:
                            t.append(e.cloneNode(!0)) } }), this.bind("initMenu:before", () => { document.body.prepend(e), this.node.menu = e }); let s = this.node.menu.parentElement; if (s) { let e = s.querySelector(".navbar-toggler");
                    e && (delete e.dataset.target, e.removeAttribute("aria-controls"), e.outerHTML = e.outerHTML, (e = s.querySelector(".navbar-toggler")).addEventListener("click", e => { e.preventDefault(), e.stopImmediatePropagation(), this[this.vars.opened ? "close" : "open"]() })) } }

            function n(e) { for (var t = b(e.matches("a") ? "a" : "span"), n = ["href", "title", "target"], i = 0; i < n.length; i++) void 0 !== e.getAttribute(n[i]) && t.setAttribute(n[i], e.getAttribute(n[i])); return t.innerHTML = e.innerHTML, g(t, ".sr-only").forEach(e => { e.remove() }), t }

            function i(e) { var t = b("ul"); return _(e).forEach(e => { var i = b("li");
                    e.matches(".dropdown-divider") ? i.classList.add("Divider") : e.matches(".dropdown-item") && i.append(n(e)), t.append(i) }), t } }, olark: function() { this.conf.offCanvas.page.noSelector.push("#olark") }, turbolinks: function() { var e;
            document.addEventListener("turbolinks:before-visit", t => { e = function(e, t) { for (var n = [], i = 0; i < e.length; i++) { let s = e[i];
                        t(s) && n.push(s) } return n }((e = document.documentElement.className).split(" "), e => !/mm-/.test(e)).join(" ") }), document.addEventListener("turbolinks:load", t => { void 0 !== e && (document.documentElement.className = e) }) }, wordpress: function() { this.conf.classNames.selected = "current-menu-item"; var e = document.getElementById("wpadminbar");
            e && (e.style.position = "fixed", e.classList.add("mm-slideout")) } };
    var we;
    t.default = S;
    window.Mmenu = S, (we = window.jQuery || window.Zepto || null) && (we.fn.mmenu = function(e, t) { var n = we(); return this.each((i, s) => { if (s.mmApi) return; let a = new S(s, e, t),
                o = we(a.node.menu);
            o.data("mmenu", a.API), n = n.add(o) }), n })
}]);