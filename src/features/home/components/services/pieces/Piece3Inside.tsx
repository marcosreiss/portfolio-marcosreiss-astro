import { DotGrid, Head, Root, St, Svg, v, type PieceProps } from './kit'

const lines = ['{ "venda": 1042,', '  "valor": 890.0,', '  "status": "pago"', '}']
const tags = [
  { t: 'content-type: json', x: 6, w: 23 },
  { t: 'retry x3', x: 30.5, w: 12 },
  { t: 'bearer', x: 44, w: 10 },
]

export function Piece3Inside({ className }: PieceProps) {
  const H = 400 / 3
  return (
    <Root ratio="3/4" className={className} bg={v('inset')} piece={3} layer="inside">
      <Svg H={H}>
        <DotGrid H={H} />
        <St x={6} y={10} s={2}>integração · api rest</St>

        {/* nodes */}
        {[
          { id: 'sistema A', sub: 'origem', x: 6 },
          { id: 'sistema B', sub: 'destino', x: 66 },
        ].map((n) => (
          <g key={n.id} data-node={n.id} data-part="system">
            <rect x={n.x} y="18" width="28" height="18" rx="1.2" fill={v('panel')} stroke={v('border')} strokeWidth="1" />
            <St x={n.x + 14} y={26.6} anchor="middle" s={2.4} fill="text">{n.id}</St>
            <St x={n.x + 14} y={31.4} anchor="middle" s={1.8} fill="faint">{n.sub}</St>
          </g>
        ))}

        {/* request */}
        <line data-edge="request" x1="34" x2="64.6" y1="24" y2="24" stroke={v('primary')} strokeWidth="1.2" />
        <Head x={66} y={24} dir="r" />
        <St x={50} y={21} anchor="middle" s={1.9} fill="primary-text">POST /vendas</St>
        {[41, 50, 58].map((x, i) => (
          <circle key={x} data-packet={i + 1} data-state={i === 1 ? 'accent' : 'default'} cx={x} cy="24" r="1.1" fill={i === 1 ? v('accent') : v('primary')} />
        ))}

        {/* response */}
        <line data-edge="response" x1="35.4" x2="66" y1="31" y2="31" stroke={v('muted')} strokeWidth="1" strokeDasharray="1.4 1.2" />
        <Head x={34} y={31} dir="l" fill="muted" />
        <rect data-part="response-chip" x="46" y="28.8" width="8" height="4.4" rx="2.2" fill={v('panel')} stroke={v('border')} strokeWidth="1" />
        <St x={50} y={31.9} anchor="middle" s={2} fill="primary-text">201</St>

        {/* webhook */}
        <line data-edge="evento" x1="80" x2="80" y1="36" y2="48.6" stroke={v('muted')} strokeWidth="1" strokeDasharray="1.4 1.2" />
        <Head x={80} y={50} dir="d" fill="muted" />
        <St x={82} y={44} s={1.8} fill="faint">evento</St>
        <g data-node="webhook" data-part="webhook">
          <rect x="66" y="50" width="28" height="11" rx="1.2" fill={v('panel')} stroke={v('primary')} strokeWidth="1" />
          <St x={80} y={57} anchor="middle" s={2.2} fill="text">webhook</St>
        </g>
        <path data-edge="callback" d="M66 55.5 H20 V37.4" fill="none" stroke={v('muted')} strokeWidth="1" strokeDasharray="1.4 1.2" />
        <Head x={20} y={36} dir="u" fill="muted" />
        <rect x="29" y="53.8" width="17" height="3.4" fill={v('inset')} />
        <St x={37.5} y={56.2} anchor="middle" s={1.8} fill="faint">callback</St>

        {/* code */}
        <St x={6} y={73} s={1.8} fill="faint">corpo da requisição</St>
        <g data-part="code">
          <rect x="6" y="76" width="88" height="28" rx="1.2" fill={v('panel')} stroke={v('border')} strokeWidth="1" />
          {lines.map((l, i) => (
            <g key={i} data-row={i}>
              <St x={9} y={83 + i * 5.4} s={2} fill="faint">{i + 1}</St>
              <St x={14} y={83 + i * 5.4} s={2.6} fill={i === 2 ? 'primary-text' : 'soft'}>{l.replace(/ /g, '\u00a0')}</St>
            </g>
          ))}
        </g>

        {/* tags + latency */}
        {tags.map((t) => (
          <g key={t.t}>
            <rect x={t.x} y="109" width={t.w} height="4.6" rx="2.3" fill={v('chip')} stroke={v('border')} strokeWidth="1" />
            <St x={t.x + t.w / 2} y={112.1} anchor="middle" s={1.8} fill="soft">{t.t}</St>
          </g>
        ))}
        <St x={6} y={122} s={1.8} fill="muted">latência</St>
        <St x={94} y={122} s={2} fill="primary-text" anchor="end">84 ms</St>
        <rect x="6" y="124.4" width="88" height="1.2" rx="0.6" fill={v('bar')} />
        <rect x="6" y="124.4" width="18" height="1.2" rx="0.6" fill={v('primary')} />
      </Svg>
    </Root>
  )
}
