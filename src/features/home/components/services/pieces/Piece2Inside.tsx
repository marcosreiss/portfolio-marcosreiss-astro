import { DotGrid, Root, St, Svg, v, type PieceProps } from './kit'

const dash = { fill: 'none', stroke: v('muted'), strokeWidth: 1, strokeDasharray: '2 1.6' }
const tags = [
  { t: '<title>', x: 3, w: 11 },
  { t: 'meta description', x: 15.5, w: 20.5 },
  { t: 'responsivo', x: 37.5, w: 14 },
]

export function Piece2Inside({ className }: PieceProps) {
  return (
    <Root ratio="1/1" className={className} bg={v('inset')} piece={2} layer="inside">
      <Svg H={100}>
        <DotGrid H={100} />

        {/* frame + chrome */}
        <rect x="3" y="3" width="90" height="82" rx="1.2" fill={v('panel')} stroke={v('border')} strokeWidth="1" />
        <line x1="3" x2="93" y1="10" y2="10" stroke={v('line')} strokeWidth="1" />
        <rect x="16" y="4.4" width="40" height="4.2" rx="2.1" fill="none" stroke={v('border')} strokeWidth="1" />
        <St x={36} y={7.4} anchor="middle" s={1.9}>https://</St>

        {/* sections */}
        <g data-part="sections">
          <rect data-node="hero" x="6" y="15" width="84" height="35" rx="0.8" {...dash} />
          <St x={7.6} y={18.4} s={1.8} fill="faint">hero</St>
          <rect x="8" y="20" width="52" height="15.8" rx="0.6" fill="none" stroke={v('line')} strokeWidth="1" />

          <rect data-node="cta" x="7" y="42.2" width="20" height="7.2" rx="1" fill="none" stroke={v('primary')} strokeWidth="1" strokeDasharray="2 1.6" />
          <line data-edge="cta-underline" x1="7" x2="27" y1="49.8" y2="49.8" stroke={v('accent')} strokeWidth="1.6" />
          <St x={28.4} y={46.6} s={1.8} fill="primary-text">cta</St>

          <rect data-node="prova" x="6" y="51.5" width="84" height="11" rx="0.8" {...dash} />
          <St x={7.6} y={55} s={1.8} fill="faint">prova</St>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={8 + i * 28.5} y="56.8" width="26" height="4.4" rx="0.6" fill="none" stroke={v('line')} strokeWidth="1" />
          ))}

          <rect x="6" y="63.5" width="84" height="16.5" rx="0.8" {...dash} />
          <St x={7.6} y={66.8} s={1.8} fill="faint">destaque</St>

          <rect data-node="rodape" x="6" y="80.8" width="84" height="3.4" rx="0.8" {...dash} />
          <St x={88.6} y={83.3} s={1.8} fill="faint" anchor="end">rodapé</St>
        </g>

        {/* performance */}
        <g data-part="performance">
          <St x={62} y={21.4} s={1.8} fill="muted">carregamento</St>
          <St x={89} y={21.4} s={2.2} fill="primary-text" anchor="end">0,9 s</St>
          <rect x="62" y="23.4" width="27" height="1.4" rx="0.7" fill={v('bar')} />
          <rect data-part="load-bar" x="62" y="23.4" width="7" height="1.4" rx="0.7" fill={v('primary')} />
        </g>

        {/* page builder */}
        <g data-part="cms">
          <St x={62} y={30.2} s={1.8} fill="muted">blocos editáveis</St>
          {[0, 1, 2].map((i) => (
            <g key={i} data-row={i}>
              <rect x="62" y={32.4 + i * 4.6} width="27" height="3.6" rx="0.6" fill={v('panel')} stroke={i === 0 ? v('primary') : v('border')} strokeWidth="1" />
              {[0, 1, 2].map((d) => (
                <circle key={d} cx={63.6} cy={34.2 + i * 4.6 + (d - 1) * 0.9} r="0.25" fill={v('faint')} />
              ))}
              <rect x="65.5" y={33.7 + i * 4.6} width={[10, 14, 8][i]} height="1" rx="0.5" fill={v('bar')} />
            </g>
          ))}
        </g>

        {/* phone */}
        <rect data-node="mobile" x="68" y="52" width="26" height="46" rx="3" fill={v('inset')} stroke={v('soft')} strokeWidth="1" />
        <rect x="70.5" y="58" width="21" height="9" rx="0.6" {...dash} />
        <rect x="70.5" y="69" width="21" height="4" rx="0.8" fill="none" stroke={v('primary')} strokeWidth="1" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={70.5 + i * 6.9} y="75" width="6.2" height="5" rx="0.6" fill="none" stroke={v('line')} strokeWidth="1" />
        ))}
        <rect x="70.5" y="82" width="21" height="10" rx="0.6" {...dash} />
        <St x={81} y={56} s={1.8} fill="faint" anchor="middle">375 px</St>

        {/* tags */}
        <g data-part="tags">
          {tags.map((t) => (
            <g key={t.t} data-node={t.t}>
              <rect x={t.x} y="90" width={t.w} height="4.6" rx="2.3" fill={v('chip')} stroke={v('border')} strokeWidth="1" />
              <St x={t.x + t.w / 2} y={93.1} anchor="middle" s={1.8} fill="soft">{t.t}</St>
            </g>
          ))}
          <line data-edge="responsivo" x1="51.5" x2="68" y1="92.3" y2="92.3" stroke={v('primary')} strokeWidth="1" strokeDasharray="1.2 1.2" />
          <circle cx="68" cy="92.3" r="0.8" fill={v('primary')} />
        </g>
      </Svg>
    </Root>
  )
}
