import { Abs, Root, Txt, box, v, HAIR, MONO, type PieceProps } from './kit'

type Lot = { id: number; x: number; y: number; state: 'free' | 'reserved' | 'sold'; q: number }
type Block = { c: number; r: number; dy: number }

const P = 2.9 // lot pitch
const S = 2.5 // lot size
const GAP = 2.4

const rowA: Block[] = [
  { c: 4, r: 3, dy: 0 },
  { c: 6, r: 2, dy: 1.2 },
  { c: 3, r: 4, dy: 0 },
  { c: 4, r: 3, dy: 2.4 },
]
const rowB: Block[] = [
  { c: 2, r: 6, dy: 0 },
  { c: 4, r: 3, dy: 3 },
  { c: 6, r: 2, dy: 0.8 },
  { c: 3, r: 4, dy: 0 },
]

const lots: Lot[] = []
const labels: { q: number; x: number; y: number }[] = []
let n = 0
function lay(blocks: Block[], x0: number, y0: number, q0: number) {
  let x = x0
  blocks.forEach((b, bi) => {
    const q = q0 + bi
    labels.push({ q, x, y: y0 + b.dy - 2.6 })
    for (let r = 0; r < b.r; r++)
      for (let c = 0; c < b.c; c++) {
        const t = (n * 7 + q * 5 + n * n) % 11
        lots.push({ id: n, x: x + c * P, y: y0 + b.dy + r * P, state: t < 5 ? 'sold' : t === 5 ? 'reserved' : 'free', q })
        n++
      }
    x += b.c * P - (P - S) + GAP
  })
}
lay(rowA, 11, 16.2, 1)
lay(rowB, 13, 33, 5)

const count = (s: Lot['state']) => lots.filter((l) => l.state === s).length

const lotStyle = (s: Lot['state']) =>
  s === 'sold'
    ? box(v('primary'), v('primary'), 0.5)
    : s === 'reserved'
      ? box(v('accent-soft'), v('accent'), 0.5)
      : box('transparent', v('faint'), 0.5)

const approvals = [
  { name: 'M. Costa', sub: 'Lote 14 · Q3', chip: 'Novo', w: 8, hot: true },
  { name: 'R. Alves', sub: 'Lote 52 · Q6', chip: 'Análise', w: 11, hot: false },
  { name: 'T. Nunes', sub: 'Lote 71 · Q7', chip: 'Revisão', w: 11, hot: false },
]

export function Piece1Outside({ className }: PieceProps) {
  const stats = [
    { k: 'Lotes', n: lots.length, f: 1 },
    { k: 'Vendidos', n: count('sold'), f: count('sold') / lots.length },
    { k: 'Livres', n: count('free'), f: count('free') / lots.length },
  ]
  return (
    <Root ratio="5/4" className={className} bg={v('panel')} piece={1} layer="outside">
      {/* sidebar */}
      <Abs data-part="sidebar" x={0} y={0} w={7} h={80} style={{ borderRight: `${HAIR} solid ${v('line')}`, background: v('surface') }}>
        <Abs x={2} y={2.2} w={3} h={3} style={box(v('text'), undefined, 0.7)} />
        {[0, 1, 2, 3].map((i) => (
          <Abs
            key={i}
            data-part="menu-mark"
            data-state={i === 1 ? 'active' : 'idle'}
            x={2}
            y={12 + i * 5.5}
            w={3}
            h={0.7}
            style={{ borderRadius: '0.4cqw', background: i === 1 ? v('primary') : v('bar') }}
          />
        ))}
      </Abs>

      {/* top bar */}
      <Abs data-part="topbar" x={7} y={0} w={93} h={7} style={{ borderBottom: `${HAIR} solid ${v('line')}` }} />
      <Txt x={9.5} y={2.5} s={1.9} mono data-part="breadcrumb">
        <span style={{ color: v('faint') }}>Loteamento</span>
        <span style={{ color: v('faint') }}> / </span>
        <span style={{ color: v('soft') }}>Lotes</span>
      </Txt>
      <Abs x={80} y={3} w={1} h={1} style={{ borderRadius: '50%', background: v('primary') }} />
      <Txt x={82} y={2.6} s={1.8} mono c="faint">ao vivo</Txt>
      <Abs x={93.6} y={1.6} w={3.8} h={3.8} style={box(v('chip'), v('border'), 2)} />

      {/* map */}
      <Txt x={9} y={8.6} s={1.8} mono c="faint">MAPA DE LOTES</Txt>
      <Abs data-part="map" x={9} y={12} w={61} h={44} style={box(v('inset'), v('line'), 1)}>
        <Abs x={0} y={17} w={61} h={0.2} style={{ background: v('line') }} />
      </Abs>
      {labels.map((l) => (
        <Txt key={l.q} x={l.x} y={l.y} s={1.8} mono c="faint">Q{l.q}</Txt>
      ))}
      {lots.map((l) => (
        <Abs key={l.id} data-part="lot" data-lot={l.id} data-state={l.state} x={l.x} y={l.y} w={S} h={S} style={lotStyle(l.state)} />
      ))}

      {/* legend */}
      <div data-part="legend">
        {[
          { k: 'free', t: 'Livre', x: 12 },
          { k: 'reserved', t: 'Reservado', x: 24 },
          { k: 'sold', t: 'Vendido', x: 40 },
        ].map((i) => (
          <div key={i.k}>
            <Abs x={i.x} y={53} w={2.2} h={2.2} style={lotStyle(i.k as Lot['state'])} />
            <Txt x={i.x + 3.2} y={53} h={2.2} s={1.8} mono c="muted">{i.t}</Txt>
          </div>
        ))}
      </div>

      {/* stats */}
      {stats.map((s, i) => (
        <Abs key={s.k} data-part="stat" x={9 + i * 20.8} y={60} w={19.4} h={15} style={box(v('panel'), v('line'), 0.8)}>
          <Txt x={2} y={2.2} s={1.8} mono c="faint">{s.k.toUpperCase()}</Txt>
          <Txt x={2} y={5.6} s={4.2} weight={500}>{s.n}</Txt>
          <Abs x={2} y={11.4} w={15.4} h={0.8} style={{ background: v('bar'), borderRadius: '0.4cqw' }}>
            <Abs x={0} y={0} w={15.4 * s.f} h={0.8} style={{ background: i === 1 ? v('primary') : v('soft'), borderRadius: '0.4cqw' }} />
          </Abs>
        </Abs>
      ))}

      {/* approvals */}
      <Abs data-part="approvals" x={71.5} y={12} w={27} h={63} style={box(v('surface'), v('line'), 1)}>
        <Txt x={2} y={2.4} s={2.6} weight={500}>Aprovações</Txt>
        <Txt x={2} y={6} s={2.6} c="muted">pendentes</Txt>
        <Txt x={18} y={2.6} w={7} s={1.8} mono c="faint" align="right">03</Txt>
      </Abs>
      {approvals.map((a, i) => (
        <div key={a.name} data-row={i}>
          <Abs x={73.5} y={26 + i * 12} w={23} h={0.2} style={{ background: v('line') }} />
          <Txt x={73.5} y={28.4 + i * 12} s={2.3}>{a.name}</Txt>
          <Txt x={73.5} y={32.2 + i * 12} s={1.8} mono c="faint">{a.sub}</Txt>
          <Abs
            data-part="chip"
            x={96.5 - a.w}
            y={28 + i * 12}
            w={a.w}
            h={3.4}
            style={{
              ...box(a.hot ? v('primary-soft') : v('chip'), undefined, 1.7),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: MONO,
              fontSize: '1.8cqw',
              color: a.hot ? v('primary-text') : v('soft'),
            }}
          >
            {a.chip}
          </Abs>
        </div>
      ))}
      <Abs x={73.5} y={64} w={23} h={6.5} data-part="cta" style={{ ...box('transparent', v('primary'), 0.8), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2cqw', color: v('primary-text') }}>
        Aprovar todas
      </Abs>
    </Root>
  )
}
