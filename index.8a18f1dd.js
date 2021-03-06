import {
  j as p,
  m as R,
  u as S,
  r as x,
  A as N,
  T as L,
  I as g,
  M as z,
  S as A,
  V as O,
  a as C,
  b as P,
  B as y,
  c as f,
  d as n,
  H as D,
  D as M,
  L as B,
  e as E,
  f as w,
  g as F,
  h,
  i as o,
  k as W,
  l as G,
  G as k,
  n as V,
  W as H,
  o as Y,
  p as q,
  q as X,
  s as $,
  t as K,
  R as J,
  C as U,
} from "./vendor.4f11e0d6.js";
const Q = function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t);
  new MutationObserver((t) => {
    for (const a of t)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && c(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(t) {
    const a = {};
    return (
      t.integrity && (a.integrity = t.integrity),
      t.referrerpolicy && (a.referrerPolicy = t.referrerpolicy),
      t.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : t.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function c(t) {
    if (t.ep) return;
    t.ep = !0;
    const a = d(t);
    fetch(t.href, a);
  }
};
Q();
const e = p.exports.jsx,
  s = p.exports.jsxs,
  Z = p.exports.Fragment,
  _ = [
    {
      id: 1,
      title: "Walk-through | Phatom Thieves #10",
      channel: "PS4 world",
      views: "11 mi de visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/Yg.gif",
      thumb: "./images/p5.jpg",
    },
    {
      id: 2,
      title: "Official Trailer - Resident Evil 8 - Village",
      channel: "Resident Evil World",
      views: "957 mil visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/leon.jpg",
      thumb: "./images/re8.jpg",
    },
    {
      id: 3,
      title: "FORTNITE - Spiderman Skin",
      channel: "Young gameplays",
      views: "106 mil visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/young.png",
      thumb: "./images/fort.jpg",
    },
    {
      id: 4,
      title: "APEX LEGENDS - Tentando alcan\xE7ar o \xFAltimo rank (Predator)",
      channel: "Apex Fan BR",
      views: "5,6 mi de visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/giphy.gif",
      thumb: "./images/apex.jpg",
    },
    {
      id: 5,
      title: "Tudo sobre o filme SPIDERMAN - NO WAY HOME",
      channel: "Cultura Geek",
      views: "2,2 mi de visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/geek.jpg",
      thumb: "./images/sp.jpg",
    },
    {
      id: 6,
      title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
      channel: "Lucas Nhimi",
      views: "233 mil visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/avatar.jpeg",
      thumb: "./images/thumb6.png",
    },
    {
      id: 7,
      title:
        "RESIDENT EVIL WELCOME TO RACOON CITY | Realmente vale a pena assistir?",
      channel: "Cultura Geek",
      views: "118 mil visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/geek.jpg",
      thumb: "./images/rwrc.jpg",
    },
    {
      id: 8,
      title:
        "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
      channel: "Lucas Nhimi",
      views: "1,9 mi de visualiza\xE7\xF5es",
      date: "h\xE1 1 semana",
      avatar: "./images/avatar.jpeg",
      thumb: "./images/thumb8.png",
    },
    {
      id: 9,
      title: "Walkthrough | Phatom Thieves #09",
      channel: "PS4 world",
      views: "10 mi de visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/Yg.gif",
      thumb: "./images/p5.jpg",
    },
    {
      id: 10,
      title: "Twenty One Pilots - No Chances",
      channel: "VEVO | Twenty One Pilots",
      views: "7 mi visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/twenty.jpg",
      thumb: "./images/tw.jpg",
    },
    {
      id: 11,
      title: "League Of Legends - Wild Rift | Ranked",
      channel: "Young gameplays",
      views: "106 mil visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/young.png",
      thumb: "./images/lol.jpg",
    },
    {
      id: 12,
      title: "FREE FIRE | Obtendo as novas skins",
      channel: "Young gameplays",
      views: "2,6 mi de visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/young.png",
      thumb: "./images/ff.jpg",
    },
    {
      id: 13,
      title: "Playstation 5 - Tudo sobre o novo console",
      channel: "Playstation World",
      views: "2,5 mi de visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/avatar.jpeg",
      thumb: "./images/ps5.jpg",
    },
    {
      id: 14,
      title: "Metallica - Nothing Else Matters",
      channel: "VEVO | Metallica ",
      views: "5,4 mi visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/metallica.jpg",
      thumb: "./images/meta.jpg",
    },
    {
      id: 15,
      title: "Tudo sobre - Horizon Forbidden West",
      channel: "Young gameplays",
      views: "18 mil visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/young.png",
      thumb: "./images/hfw.jpg",
    },
    {
      id: 8,
      title: "An\xE1lise sobre o Xbox Series X",
      channel: "Xbox",
      views: "4,9 mi de visualiza\xE7\xF5es",
      date: "h\xE1 2 semana",
      avatar: "./images/xbox.jpg",
      thumb: "./images/x.jpg",
    },
  ],
  u = {
    firstGroup: [
      { icon: e(V, {}), text: "In\xEDcio" },
      { icon: e(H, {}), text: "Em alta" },
      { icon: e(Y, {}), text: "Inscri\xE7\xF5es" },
    ],
    secondGroup: [
      { icon: e(q, {}), text: "Biblioteca" },
      { icon: e(X, {}), text: "Hist\xF3rico" },
    ],
    suggestions: {
      title: "mais do Youtube",
      children: [
        { text: "M\xFAsica" },
        { text: "Esportes" },
        { text: "Jogos" },
        { text: "Filmes" },
        { text: "Not\xEDcias" },
        { text: "Ao vivo" },
        { text: "Destaque" },
        { text: "V\xEDdeo em 360\xB0" },
        { text: "Procurar canais" },
      ],
    },
  },
  ee = R((r) => ({
    root: {
      height: "100vh",
      overflowX: "hidden",
      backgroundColor: r.palette.background.dark,
      "&::-webkit-scrollbar": { width: 8 },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: "1px solid slategrey",
        borderRadius: "500px",
      },
    },
    appBar: {
      boxShadow: "none",
      zIndex: r.zIndex.drawer + 1,
      marginRight: "10px",
    },
    grow: { flexGrow: 1 },
    drawer: { width: "250px", flexShrink: 0, overflowY: "auto" },
    drawerPaper: {
      marginTop: "64px",
      transition: "linear",
      padding: "0 10px",
      width: "250px",
      borderRight: "none",
      "&::-webkit-scrollbar": { width: 8 },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: "1px solid slategrey",
        borderRadius: "500px",
        visibility: "hidden",
      },
      "&:hover::-webkit-scrollbar-thumb": { visibility: "visible" },
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 4,
      paddingBottom: 4,
    },
    listItemText: { fontSize: 14 },
    icon: { marginRight: r.spacing(2) },
    logo: { height: "25px" },
    subheader: { "& > span": { textTransform: "uppercase" } },
    gridItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      transition: "200ms linear",
      "&:hover": { transform: "scale(1.1)" },
    },
    menuIcon: { marginLeft: 20 },
  }));
var ae = ({ darkMode: r, setDarkMode: l }) => {
  const d = S(),
    [c, t] = x.exports.useState(!0),
    a = ee();
  return s("div", {
    className: a.root,
    children: [
      e(N, {
        color: "inherit",
        className: a.appBar,
        children: s(L, {
          children: [
            e(g, {
              edge: "start",
              className: a.menuIcon,
              "aria-label": "menu",
              onClick: () => {
                const i = document.querySelector(`.${a.drawerPaper}`);
                console.log(i.style.display), t(!c);
              },
              children: e(z, {}),
            }),
            e("img", {
              src:
                d.palette.type === "dark"
                  ? "./images/branco.png"
                  : "./images/preto.png",
              alt: "logo",
              className: a.logo,
            }),
            e("div", { className: a.grow }),
            e(A, { className: a.icon, value: r, onChange: () => l(!r) }),
            e(g, { className: a.icon, children: e(O, {}) }),
            e(g, { className: a.icon, children: e(C, {}) }),
            e(g, { className: a.icon, children: e(P, {}) }),
            e(y, {
              startIcon: e(f, {}),
              color: "primary",
              variant: "outlined",
              children: "Fazer Login",
            }),
          ],
        }),
      }),
      s(n, {
        pt: 4,
        display: "flex",
        children: [
          e(D, {
            mdDown: !0,
            children: s(M, {
              variant: "permanent",
              className: a.drawer,
              classes: { paper: a.drawerPaper },
              style: { display: c ? "flex" : "none" },
              children: [
                e(n, {
                  children: e(B, {
                    children: Object.keys(u).map(
                      (i, m, b) =>
                        m <= 1 &&
                        u[i].map(({ icon: I, text: j }, v, T) =>
                          s(
                            x.exports.Fragment,
                            {
                              children: [
                                s(E, {
                                  classes: { root: a.listItem },
                                  button: !0,
                                  children: [
                                    e(w, { children: I }),
                                    e(F, {
                                      classes: { primary: a.listItemText },
                                      primary: j,
                                    }),
                                  ],
                                }),
                                v === T.length - 1 && e(h, {}),
                              ],
                            },
                            v
                          )
                        )
                    ),
                  }),
                }),
                s(n, {
                  m: 2,
                  textAlign: "center",
                  children: [
                    e(o, {
                      variant: "body2",
                      children:
                        "Fa\xE7a login para curtir v\xEDdeos, comentar e se inscrever.",
                    }),
                    e(n, {
                      m: 2,
                      children: e(y, {
                        startIcon: e(f, {}),
                        color: "primary",
                        variant: "outlined",
                        children: "Fazer Login",
                      }),
                    }),
                  ],
                }),
                e(h, {}),
                s(W, {
                  classes: { root: a.subheader },
                  children: [
                    e("span", { children: u.suggestions.title }),
                    u.suggestions.children.map(({ text: i }, m, b) =>
                      s(Z, {
                        children: [
                          m === b.length - 1 && e(h, {}),
                          s(
                            E,
                            {
                              button: !0,
                              children: [
                                e(w, { children: e(G, {}) }),
                                e(F, {
                                  classes: { primary: a.listItemText },
                                  primary: i,
                                }),
                              ],
                            },
                            m
                          ),
                        ],
                      })
                    ),
                  ],
                }),
                e(h, {}),
                e(n, {
                  p: 2,
                  children: e(o, {
                    variant: "body1",
                    style: { textAlign: "center", fontSize: "10px" },
                    children: "\xA9 2022 Google LLC",
                  }),
                }),
              ],
            }),
          }),
          s(n, {
            mt: 15,
            children: [
              e(o, {
                variant: "h5",
                color: "textPrimary",
                style: { fontWeight: 600, fontSize: 20, paddingLeft: "20px" },
                children: "Recomendados",
              }),
              e(k, {
                container: !0,
                spacing: 5,
                style: { padding: "20px" },
                children: _.map((i) =>
                  s(k, {
                    item: !0,
                    lg: 3,
                    md: 4,
                    sm: 6,
                    xs: 12,
                    className: a.gridItem,
                    children: [
                      e(n, {
                        children: e("img", {
                          style: { width: "100%" },
                          alt: i.title,
                          src: i.thumb,
                        }),
                      }),
                      s(n, {
                        children: [
                          s(n, {
                            style: {
                              display: "flex",
                              width: "100%",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            },
                            children: [
                              e("img", {
                                src: i.avatar,
                                alt: "avatar",
                                style: {
                                  width: 40,
                                  marginRight: "10px",
                                  borderRadius: "50%",
                                },
                              }),
                              e(o, {
                                style: { fontWeight: 600 },
                                gutterBottom: !0,
                                variant: "body1",
                                color: "textPrimary",
                                style: { fontWeight: 600 },
                                children: i.title,
                              }),
                            ],
                          }),
                          e(o, {
                            display: "block",
                            variant: "body2",
                            color: "textSecondary",
                            children: i.channel,
                          }),
                          e(o, {
                            variant: "body2",
                            color: "textSecondary",
                            children: `${i.views} - ${i.date}`,
                          }),
                        ],
                      }),
                    ],
                  })
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
function te() {
  const [r, l] = x.exports.useState(!1),
    d = $({
      spacing: 4,
      palette: {
        type: r ? "dark" : "light",
        background: {
          default: r ? "#232323" : "#FFF",
          dark: r ? "#181818" : "#f4f6f8",
          paper: r ? "#232323" : "#FFF",
        },
      },
    });
  return e(K, {
    theme: d,
    className: "App",
    children: e(ae, { darkMode: r, setDarkMode: l }),
  });
}
J.render(e(U, { children: e(te, {}) }), document.getElementById("root"));
