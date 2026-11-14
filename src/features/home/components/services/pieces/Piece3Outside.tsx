import { Abs, Root, Txt, box, v, HAIR, MONO, type PieceProps } from './kit'

const win = (title: string, meta: string, rows: [string, string, string][], y: number, key: string) => (
  <Abs data-part="window" data-window={key} x={6} y={y} w={88} h={48} style={{ ...box(v('panel'), v('border'), 1.2), overflow: 'hidden' }}>
    <Abs x={0} y={0} w={88} h={7.5} style={{ background: v('inset'), borderBottom: `${HAIR} solid ${v('line')}` }} />
    {[0, 1, 2].map((i) => (
      <Abs key={i} x={3 + i * 2.2} y={3.2} w={1.1} h={1.1} style={{ borderRadius: '50%', background: v('bar') }} />
    ))}
    <Txt x={11} y={2.4} s={2.6} weight={500}>{title}</Txt>
    <Txt x={60} y={2.8} w={25} s={1.8} mono c="faint" align="right">{meta}</Txt>
    {rows.map((r, i) => (
      <div key={r[0]} data-row={i}>
        <Abs x={3} y={8.5 + i * 11} w={82} h={0.2} style={{ background: i ? v('line') : 'transparent' }} />
        <Abs x={3} y={10.8 + i * 11} w={2.4} h={2.4} style={box(i === 0 ? v('primary') : v('bar'), undefined, 0.6)} />
        <Txt x={7.5} y={10.2 + i * 11} s={2.4}>{r[0]}</Txt>
        <Txt x={7.5} y={14.2 + i * 11} s={1.8} mono c="faint">{r[1]}</Txt>
        <Txt x={50} y={11.4 + i * 11} w={35} s={2.1} mono c="soft" align="right">{r[2]}</Txt>
      </div>
    ))}
    <Abs x={3} y={41.6} w={82} h={0.2} style={{ background: v('line') }} />
    <Txt x={3} y={43.4} s={1.8} mono c="faint">3 registros</Txt>
  </Abs>
)

export function Piece3Outside({ className }: PieceProps) {
  return (
    <Root ratio="3/4" className={className} bg={v('surface')} piece={3} layer="outside">
      {win('Vendas', 'hoje', [
        ['Lote 1042', 'M. Costa', 'pago'],
        ['Lote 1043', 'R. Alves', 'reservado'],
        ['Lote 1044', 'T. Nunes', 'pago'],
      ], 5, 'vendas')}

      <Abs data-part="link" x={49.9} y={53} w={0.2} h={27.3} style={{ background: v('border') }} />
      <Abs
        data-part="status-chip"
        x={34}
        y={64.2}
        w={32}
        h={5.6}
        style={{ ...box(v('panel'), v('border'), 2.8), display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2cqw', fontFamily: MONO, fontSize: '2cqw', color: v('soft') }}
      >
        <span style={{ width: '1.1cqw', height: '1.1cqw', borderRadius: '50%', background: v('primary') }} />
        Sincronizado
      </Abs>

      {win('Financeiro', 'jun', [
        ['Entrada', 'Lote 1042', 'R$ 890,00'],
        ['Parcela 1/12', 'Lote 1044', 'R$ 412,50'],
        ['Taxa', 'Lote 1042', 'R$ 38,00'],
      ], 80.3, 'financeiro')}
    </Root>
  )
}
