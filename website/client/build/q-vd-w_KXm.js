import {
  n as b,
  h as t,
  P as n,
  C as c,
  K as a,
  N as s,
  g as i,
  _ as g,
} from './q-9ngTyHsh.js';
import { C as l } from './q-XhXTUHYG.js';
const f = '',
  _ = f,
  m = (e) => {
    b(
      i(() => g(() => Promise.resolve().then(() => p), void 0), 's_onhenAasZyM')
    );
    const r = {
        [l.PINK]: 'bg-[#EFEFFF]',
        [l.OPAQUE]: 'bg-mf-gray',
        [l.GRAY]: 'bg-mf-gray',
        [l.NONE]: 'bg-transparent',
      }[e.theme || l.PINK],
      o = {
        [l.PINK]: 'backdrop-blur-md bg-transparent',
        [l.OPAQUE]: 'backdrop-blur-xl bg-white/10',
        [l.GRAY]: 'bg-transparent',
        [l.NONE]: 'bg-transparent',
      }[e.theme || l.PINK];
    return (
      {
        [l.PINK]:
          e.pattern === !1 ? 'opacity-0' : 'bg-pattern bg-repeat opacity-40',
        [l.OPAQUE]:
          e.pattern === !1 ? 'opacity-0' : 'bg-pattern bg-repeat opacity-40',
        [l.GRAY]:
          e.pattern === !1 ? 'opacity-0' : 'bg-pattern bg-repeat opacity-40',
        [l.NONE]: '',
      }[e.theme || l.PINK],
      t(
        'div',
        { class: `w-full relative ${r}` },
        null,
        [
          t(
            'div',
            null,
            { class: 'block absolute h-full w-full top-0 left-0 z-10' },
            n(s, { name: 'background', [a]: { name: a } }, 3, 'Wz_0'),
            1,
            null
          ),
          t(
            'div',
            { class: `absolute h-full w-full top-0 left-0 z-20 ${o} ` },
            null,
            null,
            3,
            null
          ),
          t(
            'div',
            null,
            { class: 'block absolute h-full w-full top-0 left-0 z-20' },
            n(
              s,
              { name: 'background-no-overlay', [a]: { name: a } },
              3,
              'Wz_1'
            ),
            1,
            null
          ),
          t(
            'div',
            null,
            {
              class: c(
                (u) =>
                  `relative mx-auto z-20 ${
                    u.fullWidth ? 'w-full' : 'w-11/12 max-w-1225'
                  }`,
                [e]
              ),
            },
            n(s, null, 3, 'Wz_2'),
            1,
            null
          ),
        ],
        1,
        'Wz_3'
      )
    );
  },
  p = Object.freeze(
    Object.defineProperty(
      { __proto__: null, s_07tGklv0JFU: m, s_onhenAasZyM: _ },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
export { m as s_07tGklv0JFU, _ as s_onhenAasZyM };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
