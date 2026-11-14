import { DotGrid, Head, Root, St, Svg, v, type PieceProps } from './kit'

const roles = [
  { id: 'admin', y: 10, sub: 'perfil: admin' },
  { id: 'corretor', y: 32, sub: 'perfil: corretor' },
  { id: 'investidor', y: 54, sub: 'perfil: investidor' },
]
const ents = [
  { id: 'lotes', x: 44, y: 12, f: 'id · status' },
  { id: 'reservas', x: 74, y: 12, f: 'id · lote_id', hot: true },
  { id: 'corretores', x: 44, y: 50, f: 'id · creci' },
  { id: 'vendas', x: 74, y: 50, f: 'id · valor' },
]

const line = { stroke: v('muted'), strokeWidth: 1, fill: 'none' }

export function Piece1Inside({ className }: PieceProps) {
  return (
    <Root ratio="5/4" className={className} bg={v('inset')} piece={1} layer="inside">
      <Svg H={80}>
        <DotGrid H={80} />

        {/* edges */}
        <g data-part="edges">
          {/* accent: admin aprova reserva */}
          <path data-edge="admin-reservas" d="M13 10 V6.5 H85 V12" stroke={v('accent')} strokeWidth="1.4" fill="none" />
          <Head x={85} y={12} dir="d" fill="accent" />
          <rect x="38" y="4.8" width="22" height="3.4" fill={v('inset')} />
          <St x={49} y={7.2} fill="accent" anchor="middle" s={1.9}>aprova reserva</St>

          <path data-edge="corretor-corretores" d="M24 37 H34 V57.5 H44" {...line} />
          <Head x={44} y={57.5} dir="r" fill="muted" />
          <St x={26} y={35.2} s={1.8} fill="faint">cria</St>

          <path data-edge="investidor-vendas" d="M13 64 V72 H85 V65" {...line} strokeDasharray="1.2 1.2" />
          <Head x={85} y={65} dir="u" fill="muted" />
          <rect x="30" y="70.2" width="30" height="3.4" fill={v('inset')} />
          <St x={45} y={72.6} anchor="middle" s={1.8} fill="faint">consulta vendas · leitura</St>

          <path data-edge="lotes-reservas" d="M66 19.5 H74" {...line} />
          <path data-edge="corretores-vendas" d="M66 57.5 H74" {...line} />
          <path data-edge="reservas-vendas" d="M85 27 V50" {...line} />
          <path data-edge="corretores-reservas" d="M60 50 L78 27" {...line} />
        </g>

        {/* cardinalities */}
        <g data-part="cardinality">
          <St x={67.2} y={18.4} s={1.9} fill="primary-text">1</St>
          <St x={72.4} y={18.4} s={1.9} fill="primary-text" anchor="middle">n</St>
          <St x={67.2} y={56.4} s={1.9} fill="primary-text">1</St>
          <St x={72.4} y={56.4} s={1.9} fill="primary-text" anchor="middle">n</St>
          <St x={86.2} y={30.6} s={1.9} fill="primary-text">1</St>
          <St x={86.2} y={48.2} s={1.9} fill="primary-text">1</St>
          <St x={59} y={48} s={1.9} fill="primary-text" anchor="end">1</St>
          <St x={77} y={31} s={1.9} fill="primary-text" anchor="end">n</St>
        </g>

        {/* role nodes */}
        {roles.map((r) => (
          <g key={r.id} data-node={r.id} data-part="role">
            <rect x="2" y={r.y} width="22" height="10" rx="1" fill={v('panel')} stroke={v('border')} strokeWidth="1" />
            <circle cx="5" cy={r.y + 3.7} r="0.7" fill={v('primary')} />
            <St x={7} y={r.y + 4.5} s={2.2} fill="text">{r.id}</St>
            <St x={4} y={r.y + 8} s={1.8} fill="faint">{r.sub}</St>
          </g>
        ))}

        {/* entities */}
        {ents.map((e) => (
          <g key={e.id} data-node={e.id} data-part="entity">
            <rect x={e.x} y={e.y} width="22" height="15" rx="1" fill={v('panel')} stroke={e.hot ? v('primary') : v('border')} strokeWidth="1" />
            <rect x={e.x} y={e.y} width="22" height="6" rx="1" fill={e.hot ? v('primary-soft') : v('surface')} />
            <line x1={e.x} x2={e.x + 22} y1={e.y + 6} y2={e.y + 6} stroke={v('line')} strokeWidth="1" />
            <St x={e.x + 1.8} y={e.y + 4.1} s={2.1} fill="text">{e.id}</St>
            <St x={e.x + 1.8} y={e.y + 11} s={1.8} fill="faint">{e.f}</St>
          </g>
        ))}

        <St x={4} y={77} s={1.8} fill="faint">esquema · v1</St>
        <St x={96} y={77} s={1.8} fill="faint" anchor="end">4 tabelas · 3 perfis</St>
      </Svg>
    </Root>
  )
}
