import type { CSSProperties } from 'react'
import { Abs, Root, Txt, box, v, HAIR, type PieceProps } from './kit'

const bar = (c = 'text'): CSSProperties => ({ background: v(c), borderRadius: '0.5cqw' })

export function Piece2Outside({ className }: PieceProps) {
  return (
    <Root ratio="1/1" className={className} bg={v('surface')} piece={2} layer="outside">
      {/* browser frame */}
      <Abs data-part="browser" x={3} y={3} w={90} h={82} style={{ ...box(v('panel'), v('border'), 1.2), overflow: 'hidden' }}>
        {/* chrome */}
        <Abs x={0} y={0} w={90} h={7} style={{ borderBottom: `${HAIR} solid ${v('line')}`, background: v('inset') }} />
        {[0, 1, 2].map((i) => (
          <Abs key={i} data-part="dot" x={2.6 + i * 2.4} y={3} w={1.2} h={1.2} style={{ borderRadius: '50%', background: v('bar') }} />
        ))}
        <Abs data-part="address" x={13} y={1.4} w={40} h={4.2} style={box(v('panel'), v('line'), 2.1)} />
        <Txt x={13} y={1.4} w={40} h={4.2} s={1.9} mono c="muted" align="center">suaempresa.com.br</Txt>

        {/* decorative abstract on hero */}
        <Abs x={64} y={5} w={30} h={30} style={{ borderRadius: '50%', background: v('primary-soft') }} />
        <Abs x={70} y={11} w={18} h={18} style={{ borderRadius: '50%', border: `${HAIR} solid ${v('primary')}` }} />

        {/* nav */}
        <Abs x={5} y={9.6} w={3} h={3} style={box(v('text'), undefined, 0.7)} />
        {[0, 1, 2].map((i) => (
          <Abs key={i} x={50 + i * 9} y={10.8} w={6} h={0.7} style={bar('bar')} />
        ))}

        {/* hero */}
        <div data-part="hero">
          <Abs x={5} y={17} w={52} h={3.8} style={bar('text')} />
          <Abs x={5} y={22.6} w={44} h={3.8} style={bar('text')} />
          <Abs x={5} y={28.2} w={30} h={3.8} style={bar('text')} />
          <Abs x={5} y={34.6} w={38} h={1} style={bar('bar')} />
          <Abs x={5} y={37} w={32} h={1} style={bar('bar')} />
          <Abs data-part="cta" x={5} y={40.2} w={18} h={5.2} style={{ ...box(v('primary'), undefined, 0.8), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Abs x={4} y={2.1} w={10} h={1} style={bar('panel')} />
          </Abs>
          <Abs x={25} y={41.7} w={12} h={1} style={bar('bar')} />
        </div>

        {/* proof */}
        <div data-part="proof">
          {[0, 1, 2].map((i) => (
            <Abs key={i} data-block={i} x={5 + i * 28.5} y={50} w={26} h={8} style={box(v('surface'), v('line'), 0.8)}>
              <Abs x={2} y={1.8} w={7} h={2} style={bar('soft')} />
              <Abs x={2} y={5} w={16} h={0.9} style={bar('bar')} />
            </Abs>
          ))}
        </div>

        {/* feature */}
        <div data-part="feature">
          <Abs x={5} y={61} w={32} h={15} style={{ ...box(v('inset'), v('line'), 0.8), overflow: 'hidden' }}>
            <Abs x={4} y={3} w={9} h={9} style={{ borderRadius: '50%', background: v('primary') }} />
            <Abs x={12} y={6} w={14} h={9} style={{ background: v('chip'), borderRadius: '0.8cqw 0.8cqw 0 0' }} />
            <Abs x={0} y={13.4} w={32} h={0.2} style={{ background: v('border') }} />
          </Abs>
          <Abs x={41} y={62.5} w={22} h={2.4} style={bar('text')} />
          <Abs x={41} y={67.4} w={30} h={1} style={bar('bar')} />
          <Abs x={41} y={70} w={26} h={1} style={bar('bar')} />
          <Abs x={41} y={72.6} w={20} h={1} style={bar('bar')} />
        </div>

        {/* footer */}
        <Abs data-part="footer" x={0} y={78} w={90} h={4} style={{ borderTop: `${HAIR} solid ${v('line')}` }}>
          {[0, 1, 2].map((i) => (
            <Abs key={i} x={5 + i * 8} y={1.6} w={6} h={0.9} style={bar('bar')} />
          ))}
        </Abs>
      </Abs>

      {/* phone */}
      <Abs data-part="phone" x={68} y={52} w={26} h={46} style={{ ...box(v('panel'), v('soft'), 3), borderWidth: '0.35cqw', overflow: 'hidden' }}>
        <Abs x={9} y={1.2} w={6} h={1} style={bar('bar')} />
        <Abs x={2.5} y={6} w={18} h={2.2} style={bar('text')} />
        <Abs x={2.5} y={9.6} w={13} h={2.2} style={bar('text')} />
        <Abs x={2.5} y={14} w={17} h={0.9} style={bar('bar')} />
        <Abs data-part="cta" x={2.5} y={17.6} w={20} h={3.8} style={box(v('primary'), undefined, 0.8)}>
          <Abs x={6} y={1.45} w={8} h={0.9} style={bar('panel')} />
        </Abs>
        {[0, 1, 2].map((i) => (
          <Abs key={i} data-block={i} x={2.5 + i * 6.9} y={24} w={6.2} h={5} style={box(v('surface'), v('line'), 0.6)} />
        ))}
        <Abs x={2.5} y={31.5} w={20} h={10} style={{ ...box(v('inset'), v('line'), 0.6), overflow: 'hidden' }}>
          <Abs x={3} y={2.5} w={5.5} h={5.5} style={{ borderRadius: '50%', background: v('primary') }} />
          <Abs x={8} y={5} w={9} h={5} style={{ background: v('chip') }} />
        </Abs>
      </Abs>
    </Root>
  )
}
