import {
  P as i,
  h as e,
  C as o,
  M as t,
  i as u,
  L as r,
} from './q-9ngTyHsh.js';
import { u as a } from './q-Scd2ZB6o.js';
import { A as c, a as m } from './q-v9P9ygUp.js';
const f = () => {
  const n = c(),
    s = m();
  return i(
    r,
    {
      children: [
        e('title', null, null, a(n.title), 1, null),
        e(
          'link',
          null,
          { href: o((l) => l.url.hash, [s]), rel: 'canonical' },
          null,
          3,
          null
        ),
        e(
          'meta',
          null,
          {
            content: 'width=device-width, initial-scale=1.0',
            name: 'viewport',
          },
          null,
          3,
          null
        ),
        e(
          'link',
          null,
          { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
          null,
          3,
          null
        ),
        n.meta.map((l) =>
          t(
            'meta',
            { ...l, content: l.content ? a(l.content) : void 0 },
            null,
            0,
            '0Z_0'
          )
        ),
        n.links.map((l) => t('link', { ...l }, null, 0, '0Z_1')),
        n.styles.map((l) =>
          t(
            'style',
            { ...l.props, dangerouslySetInnerHTML: u(l, 'style') },
            null,
            0,
            '0Z_2'
          )
        ),
      ],
    },
    1,
    '0Z_3'
  );
};
export { f as s_2Fq8wIUpq5I };
