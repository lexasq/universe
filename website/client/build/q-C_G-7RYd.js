import {
  h as a,
  n as u,
  P as o,
  K as e,
  i as n,
  R as r,
  g as f,
  _ as p,
} from './q-9ngTyHsh.js';
import { a as i, B as s } from './q-UhehzwuD.js';
import { C as g } from './q-GyeNLo0W.js';
import { C as y } from './q-XhXTUHYG.js';
import { I as b } from './q-ps5hdwuV.js';
import { I as h } from './q-gLuYvr2d.js';
import { S as _, a as x } from './q-T3cxTwNd.js';
import { u as t } from './q-Scd2ZB6o.js';
const v = a(
    'svg',
    null,
    {
      fill: 'none',
      viewBox: '0 0 582 667',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      a(
        'path',
        null,
        {
          d: 'M291.285 0L0.901367 164.099V499.366L292.113 667L581.612 499.366V164.099L291.285 0Z',
          fill: 'url(#paint0_linear_934_3156)',
        },
        null,
        3,
        null
      ),
      a(
        'defs',
        null,
        null,
        a(
          'linearGradient',
          null,
          {
            gradientUnits: 'userSpaceOnUse',
            id: 'paint0_linear_934_3156',
            x1: '290.989',
            x2: '290.989',
            y1: '129.454',
            y2: '411.69',
          },
          [
            a('stop', null, { 'stop-color': '#C2EEFF' }, null, 3, null),
            a(
              'stop',
              null,
              { offset: '1', 'stop-color': '#CCC5FD' },
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
    'Uk_0'
  ),
  w = () => {
    u(
      f(() => p(() => Promise.resolve().then(() => A), void 0), 's_14NE37yaMfA')
    );
    const d = [
        {
          title: t(
            'doc-summary.cards.decentralized.title@@Decentralized code sharing'
          ),
          desc: t(
            'doc-summary.cards.decentralized.desc@@Module Federation allows developers to share code between multiple projects in a decentralized manner, making it easier to manage complex applications.'
          ),
          actionHref: '/docs/en/mf-docs/0.2/getting-started/',
          actionTitle: t(
            'doc-summary.cards.decentralized.action@@Documentation'
          ),
          target: '_blank',
        },
        {
          title: t(
            'doc-summary.cards.modular-architecture.title@@Modular architecture'
          ),
          desc: t(
            'doc-summary.cards.modular-architecture.desc@@Applications can be split into smaller, self-contained modules that can be developed, tested, and deployed independently.'
          ),
          actionHref: '/docs/en/mf-docs/0.2/getting-started/',
          actionTitle: t(
            'doc-summary.cards.modular-architecture.action@@Documentation'
          ),
          target: '_blank',
        },
        {
          title: t(
            'doc-summary.cards.federated-runtime.title@@Federated runtime'
          ),
          desc: t(
            'doc-summary.cards.federated-runtime.desc@@The modules can be combined and federated at runtime, allowing for greater collaboration and faster development times.'
          ),
          actionHref: '/docs/en/mf-docs/0.2/getting-started/',
          actionTitle: t(
            'doc-summary.cards.federated-runtime.action@@Documentation'
          ),
          target: '_blank',
        },
        {
          title: t('doc-summary.cards.flexibility.title@@Flexibility'),
          desc: t(
            'doc-summary.cards.flexibility.desc@@Module Federation gives developers the freedom to choose and implement the architecture that best suits their needs, promoting a modular and scalable approach to application development.'
          ),
          actionHref: '/docs/en/mf-docs/0.2/getting-started/',
          actionTitle: t('doc-summary.cards.flexibility.action@@Documentation'),
          target: '_blank',
        },
        {
          title: t(
            'doc-summary.cards.team-colaboration.title@@Team collaboration'
          ),
          desc: t(
            'doc-summary.cards.team-colaboration.desc@@Independent teams can be assigned responsibility for specific microfrontends, making it easier to manage the development process and promote collaboration between team members.'
          ),
          actionHref: '/docs/en/mf-docs/0.2/getting-started/',
          actionTitle: t(
            'doc-summary.cards.team-colaboration.action@@Documentation'
          ),
          target: '_blank',
        },
      ],
      c = t('doc-summary.title@@Scalability with Module Federation'),
      m = t(
        'doc-summary.subtitle@@Module Federation brings scalability to not only code but also individual and organizational productivity'
      );
    return o(
      x,
      {
        id: 'learn',
        get theme() {
          return y.OPAQUE;
        },
        children: [
          o(
            _,
            { 'q:slot': 'header', subtitle: m, title: c, [e]: { 'q:slot': e } },
            3,
            'ma_0'
          ),
          a(
            'div',
            null,
            { class: 'flex flex-col items-center gap-3 md:gap-10' },
            [
              d.map((l) =>
                a(
                  'div',
                  null,
                  { class: 'w-full' },
                  o(
                    g,
                    {
                      children: a(
                        'div',
                        null,
                        {
                          class:
                            'flex flex-col gap-6 items-start md:flex-row md:items-center p-10',
                        },
                        [
                          a(
                            'div',
                            null,
                            { class: 'flex flex-col gap-4 w-full pr-4' },
                            [
                              a(
                                'h3',
                                null,
                                {
                                  class: 'text-blue-gray-900 font-bold text-xl',
                                },
                                n(l, 'title'),
                                1,
                                null
                              ),
                              a(
                                'p',
                                null,
                                {
                                  class:
                                    'font-medium text-blue-gray-900 text-lg',
                                },
                                n(l, 'desc'),
                                1,
                                null
                              ),
                            ],
                            1,
                            null
                          ),
                          o(
                            i,
                            {
                              get theme() {
                                return s.NAKED;
                              },
                              get href() {
                                return l.actionHref;
                              },
                              get target() {
                                return l.target;
                              },
                              children: [
                                n(l, 'actionTitle'),
                                o(
                                  b,
                                  {
                                    'q:slot': 'suffix',
                                    get name() {
                                      return h.ARROW_NARROW_RIGHT;
                                    },
                                    size: '24px',
                                    [e]: { name: e, 'q:slot': e, size: e },
                                  },
                                  3,
                                  'ma_1'
                                ),
                              ],
                              type: 'link',
                              [e]: {
                                href: r(l, 'actionHref'),
                                target: r(l, 'target'),
                                theme: e,
                                type: e,
                              },
                            },
                            1,
                            'ma_2'
                          ),
                        ],
                        1,
                        null
                      ),
                      hover: !0,
                      [e]: { hover: e },
                    },
                    1,
                    'ma_3'
                  ),
                  1,
                  l.title
                )
              ),
              o(
                i,
                {
                  class: 'w-full md:w-auto',
                  get theme() {
                    return s.SOLID;
                  },
                  children: t(
                    'doc-summary.action@@Start using module federation'
                  ),
                  href: 'https://module-federation.io/en/mf-docs/0.2/setup',
                  target: '_blank',
                  type: 'link',
                  [e]: { class: e, href: e, target: e, theme: e, type: e },
                },
                1,
                'ma_4'
              ),
            ],
            1,
            null
          ),
          a(
            'div',
            { 'q:slot': 'background' },
            null,
            a(
              'div',
              null,
              {
                class:
                  'absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-1/3 w-[80%] md:w-2/6',
              },
              v,
              3,
              null
            ),
            3,
            null
          ),
        ],
        [e]: { id: e, theme: e },
      },
      1,
      'ma_5'
    );
  },
  T = '',
  k = T,
  A = Object.freeze(
    Object.defineProperty(
      { __proto__: null, s_14NE37yaMfA: k, s_TCwB4TUhbFA: w },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
export { k as s_14NE37yaMfA, w as s_TCwB4TUhbFA };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
