import {
  h as l,
  n as d,
  P as e,
  K as t,
  g as c,
  _ as p,
} from './q-9ngTyHsh.js';
import { a as s, B as a } from './q-UhehzwuD.js';
import { C as m, a as f } from './q-XhXTUHYG.js';
import { L as n } from './q-51TGVSGw.js';
import { l as h } from './q-JZLb1D8d.js';
import { a as g, u as o } from './q-Scd2ZB6o.js';
const w = l(
    'svg',
    null,
    {
      fill: 'none',
      viewBox: '0 0 582 667',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      l(
        'path',
        null,
        {
          d: 'M291.285 0L0.900391 164.099V499.366L292.054 667H292.112L581.611 499.366V164.099L291.285 0Z',
          fill: 'url(#paint0_linear_934_3155)',
        },
        null,
        3,
        null
      ),
      l(
        'defs',
        null,
        null,
        l(
          'linearGradient',
          null,
          {
            gradientUnits: 'userSpaceOnUse',
            id: 'paint0_linear_934_3155',
            x1: '290.988',
            x2: '290.988',
            y1: '129.454',
            y2: '411.69',
          },
          [
            l('stop', null, { 'stop-color': '#9DE4FF' }, null, 3, null),
            l(
              'stop',
              null,
              { offset: '1', 'stop-color': '#9589EA' },
              null,
              3,
              null
            ),
          ],
          3,
          null
        ),
        3,
        null
      ),
    ],
    3,
    'jw_0'
  ),
  _ = l(
    'svg',
    null,
    {
      fill: 'none',
      viewBox: '0 0 273 316',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      l(
        'path',
        null,
        {
          d: 'M273.001 235.832L272.783 78.7356L136.845 0L0 78.2259L0.189217 236.568L136.833 315.228L273.001 235.832Z',
          fill: 'url(#paint0_angular_934_3153)',
        },
        null,
        3,
        null
      ),
      l(
        'defs',
        null,
        null,
        l(
          'radialGradient',
          null,
          {
            cx: '0',
            cy: '0',
            gradientTransform:
              'translate(122.869 107.3) rotate(79.398) scale(174.74 151.365)',
            gradientUnits: 'userSpaceOnUse',
            id: 'paint0_angular_934_3153',
            r: '1',
          },
          [
            l(
              'stop',
              null,
              { offset: '0.1', 'stop-color': '#004FC7' },
              null,
              3,
              null
            ),
            l(
              'stop',
              null,
              { offset: '1', 'stop-color': '#00F3B4' },
              null,
              3,
              null
            ),
          ],
          3,
          null
        ),
        3,
        null
      ),
    ],
    3,
    null
  ),
  x = l(
    'svg',
    null,
    {
      fill: 'none',
      viewBox: '0 0 357 411',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      l(
        'path',
        null,
        {
          d: 'M178.5 0L0 101.709V307.84L179.009 410.906L357 307.84V101.709L178.5 0Z',
          fill: 'url(#paint0_angular_934_3154)',
        },
        null,
        3,
        null
      ),
      l(
        'defs',
        null,
        null,
        l(
          'radialGradient',
          null,
          {
            cx: '0',
            cy: '0',
            gradientTransform:
              'translate(-298.5 536) rotate(90.1962) scale(536.248 1035.8)',
            gradientUnits: 'userSpaceOnUse',
            id: 'paint0_angular_934_3154',
            r: '1',
          },
          [
            l(
              'stop',
              null,
              { offset: '0.00523167', 'stop-color': '#6CF8D3' },
              null,
              3,
              null
            ),
            l(
              'stop',
              null,
              { offset: '0.75', 'stop-color': '#9589EA' },
              null,
              3,
              null
            ),
          ],
          3,
          null
        ),
        3,
        null
      ),
    ],
    3,
    null
  ),
  b = () => {
    d(
      c(() => p(() => Promise.resolve().then(() => L), void 0), 's_0CLaYnIloJk')
    );
    const r = g(),
      u = (i) => h(i, r);
    return e(
      f,
      {
        get theme() {
          return m.OPAQUE;
        },
        children: [
          l('div', null, { class: 'block h-[88px] z-[999]' }, null, 3, null),
          l(
            'header',
            null,
            {
              class:
                'flex flex-col items-center text-center gap-4 pt-10 pb-24 md:gap-8 md:py-32 w-full overflow-x-hidden',
            },
            [
              l(
                'h1',
                null,
                {
                  class:
                    'text-4xl leading-tight md:text-6xl md:leading-none font-bold text-blue-gray-900',
                },
                o(
                  'hero.title@@Module Federation: streamline your microfrontends'
                ),
                1,
                null
              ),
              l(
                'p',
                null,
                {
                  class:
                    'font-medium text-lg  text-blue-gray-900 break-words max-w-4xl',
                },
                o(
                  'hero.subtitle@@Module Federation aims to solve the sharing of modules in a distributed system. It allows you to ship those critical shared pieces as macro or as micro as you would like. It does this by pulling them out of the build pipeline and out of your apps'
                ),
                1,
                null
              ),
              l(
                'div',
                null,
                {
                  class:
                    'flex flex-col md:flex-row gap-4 w-full md:justify-center',
                },
                [
                  e(
                    s,
                    {
                      class: 'w-full md:w-[196px]',
                      get theme() {
                        return a.SOLID;
                      },
                      children: o('hero.actions.documentation@@Documentation'),
                      href: '/docs/en/mf-docs/0.2/setup',
                      type: 'link',
                      [t]: { class: t, href: t, theme: t, type: t },
                    },
                    1,
                    'jo_0'
                  ),
                  e(
                    s,
                    {
                      class: 'w-full md:w-[196px]',
                      get theme() {
                        return a.OUTLINE;
                      },
                      children: o('hero.actions.learn@@Learn'),
                      href: u('/#learn'),
                      type: 'link',
                      [t]: { class: t, theme: t, type: t },
                    },
                    1,
                    'jo_1'
                  ),
                ],
                1,
                null
              ),
            ],
            1,
            null
          ),
          l(
            'div',
            { 'q:slot': 'background' },
            null,
            [
              l(
                'div',
                null,
                {
                  class:
                    'inline-block absolute w-40 top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 md:w-72 md:top-1/2',
                },
                _,
                3,
                null
              ),
              l(
                'div',
                null,
                {
                  class:
                    'inline-block absolute bottom-0 w-[90%] left-1/2 translate-y-1/2 -translate-x-1/2 md:w-5/12 md:top-[60%] md:translate-y-0',
                },
                w,
                3,
                null
              ),
              l(
                'div',
                null,
                {
                  class:
                    'inline-block absolute w-40 top-1/3 right-0 translate-x-1/3 -translate-y-1/2 md:w-72 md:top-1/2',
                },
                x,
                3,
                null
              ),
            ],
            3,
            null
          ),
          l(
            'div',
            { 'q:slot': 'background-no-overlay' },
            null,
            [
              e(
                n,
                {
                  class:
                    'absolute w-20 md:w-40 top-1/3 md:top-1/2 left-0 rotate-[30deg] origin-left',
                  showStart: !1,
                  [t]: { class: t, showStart: t },
                },
                3,
                'jo_2'
              ),
              e(
                n,
                {
                  class:
                    'absolute bottom-[12%] left-[-2px] md:left-1/2 w-3/12 md:w-5/12 md:-translate-x-1/2 rotate-[30deg] origin-left',
                  [t]: { class: t },
                },
                3,
                'jo_3'
              ),
              e(
                n,
                {
                  class:
                    'absolute bottom-[12%] right-[-2px] md:left-1/2 w-3/12 md:w-5/12 md:-translate-x-1/2 -rotate-[30deg] origin-right',
                  [t]: { class: t },
                },
                3,
                'jo_4'
              ),
              e(
                n,
                {
                  class:
                    'absolute w-32 md:w-64 top-[25%] md:top-1/3 right-[5%] translate-x-1/2 rotate-90 ',
                  [t]: { class: t },
                },
                3,
                'jo_5'
              ),
            ],
            1,
            null
          ),
        ],
        [t]: { theme: t },
      },
      1,
      'jo_6'
    );
  },
  y = '',
  v = y,
  L = Object.freeze(
    Object.defineProperty(
      { __proto__: null, s_0CLaYnIloJk: v, s_DRT9K1jPHw0: b },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
export { v as s_0CLaYnIloJk, b as s_DRT9K1jPHw0 };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
