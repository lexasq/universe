import {
  n as c,
  P as o,
  h as t,
  l as m,
  i as r,
  K as e,
  R as a,
  g as p,
  _ as f,
} from './q-9ngTyHsh.js';
import { a as s, B as i } from './q-UhehzwuD.js';
import { C as d } from './q-GyeNLo0W.js';
import { C as g } from './q-XhXTUHYG.js';
import { I as x } from './q-ps5hdwuV.js';
import { I as h } from './q-gLuYvr2d.js';
import { b, a as _ } from './q-T3cxTwNd.js';
import { u as l } from './q-Scd2ZB6o.js';
const v = () => {
    c(
      p(() => f(() => Promise.resolve().then(() => T), void 0), 's_DkNHR022s5k')
    );
    const u = [
      {
        iconSrc: '/illustrations/pratical-module-federation.svg',
        title: l(
          'explore.cards.practical-module-federation.title@@Practical Module Federation'
        ),
        actionText: l(
          'explore.cards.practical-module-federation.action@@Get the book'
        ),
        actionHref:
          'https://module-federation.myshopify.com/products/practical-module-federation',
        target: '_blank',
      },
      {
        iconSrc: '/illustrations/implementing-module-federation.svg',
        title: l(
          'explore.cards.implementing-module-federation.title@@Implementing Module Federation'
        ),
        actionText: l(
          'explore.cards.implementing-module-federation.action@@Learn more'
        ),
        actionHref: 'https://module-federation.io/en/mf-docs/0.2/setup',
        target: '_blank',
      },
      {
        iconSrc: '/illustrations/conference-talks.svg',
        title: l('explore.cards.conference-talks.title@@Conference talks'),
        actionText: l('explore.cards.conference-talks.action@@Watch now'),
        actionHref: '#',
        actionDisabled: !0,
        target: '_blank',
      },
      {
        iconSrc: '/illustrations/community-content.svg',
        title: l('explore.cards.community-content.title@@Community content'),
        actionText: l('explore.cards.community-content.action@@Find out more'),
        actionHref: '#',
        actionDisabled: !0,
        target: '_blank',
      },
    ];
    return o(
      _,
      {
        get padding() {
          return b.BOTTOM;
        },
        class: 'scroll-mt-32',
        id: 'discover',
        get theme() {
          return g.OPAQUE;
        },
        children: t(
          'div',
          null,
          { class: 'flex flex-col gap-3' },
          [
            t(
              'div',
              null,
              { class: 'grid grid-cols-1 md:grid-cols-2 gap-3' },
              u.map(
                (n) => (
                  m(),
                  o(
                    d,
                    {
                      children: t(
                        'div',
                        null,
                        { class: 'flex items-center px-6 py-8 md:p-12 gap-6' },
                        [
                          t(
                            'img',
                            { alt: r(n, 'title'), src: r(n, 'iconSrc') },
                            { class: 'h-16 w-16' },
                            null,
                            3,
                            null
                          ),
                          t(
                            'div',
                            null,
                            {
                              class: 'flex flex-col items-start gap-2 md:gap-1',
                            },
                            [
                              t(
                                'h3',
                                null,
                                {
                                  class:
                                    'text-blue-gray-900 font-semibold text-xl',
                                },
                                r(n, 'title'),
                                1,
                                null
                              ),
                              o(
                                s,
                                {
                                  get theme() {
                                    return i.NAKED;
                                  },
                                  get href() {
                                    return n.actionHref;
                                  },
                                  get target() {
                                    return n.target;
                                  },
                                  get disabled() {
                                    return n.actionDisabled;
                                  },
                                  children: [
                                    n.actionDisabled
                                      ? l('explore.disabled')
                                      : n.actionText,
                                    !n.actionDisabled &&
                                      o(
                                        x,
                                        {
                                          'q:slot': 'suffix',
                                          get name() {
                                            return h.ARROW_NARROW_RIGHT;
                                          },
                                          size: '24px',
                                          [e]: {
                                            name: e,
                                            'q:slot': e,
                                            size: e,
                                          },
                                        },
                                        3,
                                        'du_0'
                                      ),
                                  ],
                                  type: 'link',
                                  [e]: {
                                    disabled: a(n, 'actionDisabled'),
                                    href: a(n, 'actionHref'),
                                    target: a(n, 'target'),
                                    theme: e,
                                    type: e,
                                  },
                                },
                                1,
                                'du_1'
                              ),
                            ],
                            1,
                            null
                          ),
                        ],
                        1,
                        null
                      ),
                      hover: !0,
                      [e]: { hover: e },
                    },
                    1,
                    n.title
                  )
                )
              ),
              1,
              null
            ),
            t(
              'div',
              null,
              { class: 'flex' },
              o(
                d,
                {
                  children: [
                    t(
                      'div',
                      null,
                      {
                        class:
                          'items-start p-12 gap-6 max-w-2xl mx-auto hidden md:flex',
                      },
                      [
                        t(
                          'img',
                          null,
                          {
                            alt: 'Module Federation courses',
                            class: 'h-14 w-14 md:h-24 md:w-24',
                            src: '/illustrations/module-federation-courses.svg',
                          },
                          null,
                          3,
                          null
                        ),
                        t(
                          'div',
                          null,
                          { class: 'flex flex-col items-start gap-6' },
                          [
                            t(
                              'div',
                              null,
                              { class: 'flex flex-col items-start gap-1' },
                              [
                                t(
                                  'h3',
                                  null,
                                  {
                                    class:
                                      'text-blue-gray-900 font-semibold text-xl',
                                  },
                                  l(
                                    'explore.cards.module-federation-courses.title@@Module Federation courses'
                                  ),
                                  1,
                                  null
                                ),
                                t(
                                  'p',
                                  null,
                                  {
                                    class:
                                      'font-medium text-blue-gray-900 text-lg',
                                  },
                                  l(
                                    'explore.cards.module-federation-courses.subtitle@@Gain expertise in Module Federation and enhance your skills now'
                                  ),
                                  1,
                                  null
                                ),
                              ],
                              1,
                              null
                            ),
                            o(
                              s,
                              {
                                class: 'mt-2',
                                get theme() {
                                  return i.NAKED;
                                },
                                children: l('explore.disabled'),
                                disabled: !0,
                                href: '#',
                                target: '_blank',
                                type: 'link',
                                [e]: {
                                  class: e,
                                  disabled: e,
                                  href: e,
                                  target: e,
                                  theme: e,
                                  type: e,
                                },
                              },
                              1,
                              'du_2'
                            ),
                          ],
                          1,
                          null
                        ),
                      ],
                      1,
                      null
                    ),
                    t(
                      'div',
                      null,
                      { class: 'flex flex-col md:hidden px-6 py-8 gap-6' },
                      [
                        t(
                          'div',
                          null,
                          { class: 'flex items-start gap-6' },
                          [
                            t(
                              'img',
                              null,
                              {
                                alt: 'Module Federation courses',
                                class: 'h-16 w-16',
                                src: '/illustrations/module-federation-courses.svg',
                              },
                              null,
                              3,
                              null
                            ),
                            t(
                              'div',
                              null,
                              {
                                class:
                                  'flex flex-col items-start gap-2 md:gap-1',
                              },
                              [
                                t(
                                  'h3',
                                  null,
                                  {
                                    class:
                                      'text-blue-gray-900 font-semibold text-xl',
                                  },
                                  l(
                                    'explore.cards.module-federation-courses.title@@Module Federation courses'
                                  ),
                                  1,
                                  null
                                ),
                                t(
                                  'p',
                                  null,
                                  {
                                    class:
                                      'font-medium text-blue-gray-900 text-lg',
                                  },
                                  l(
                                    'explore.cards.module-federation-courses.subtitle@@Gain expertise in Module Federation and enhance your skills now'
                                  ),
                                  1,
                                  null
                                ),
                              ],
                              1,
                              null
                            ),
                          ],
                          1,
                          null
                        ),
                        o(
                          s,
                          {
                            get theme() {
                              return i.NAKED;
                            },
                            children: l('explore.disabled'),
                            disabled: !0,
                            href: '#',
                            target: '_blank',
                            type: 'link',
                            [e]: {
                              disabled: e,
                              href: e,
                              target: e,
                              theme: e,
                              type: e,
                            },
                          },
                          1,
                          'du_3'
                        ),
                      ],
                      1,
                      null
                    ),
                  ],
                  hover: !0,
                  [e]: { hover: e },
                },
                1,
                'du_4'
              ),
              1,
              null
            ),
          ],
          1,
          null
        ),
        [e]: { class: e, id: e, padding: e, theme: e },
      },
      1,
      'du_5'
    );
  },
  y = '.explore-grid{grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}',
  k = y,
  T = Object.freeze(
    Object.defineProperty(
      { __proto__: null, s_DkNHR022s5k: k, s_RZ4kRsPh3h0: v },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
export { k as s_DkNHR022s5k, v as s_RZ4kRsPh3h0 };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
