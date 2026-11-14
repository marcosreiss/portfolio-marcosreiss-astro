import { useId } from 'react'
import type { CSSProperties, ReactNode } from 'react'

export const MONO = "'IBM Plex Mono', ui-monospace, monospace"
export const SANS = "Inter, system-ui, sans-serif"
export const HAIR = 'max(1px, 0.2cqw)'
export const v = (n: string) => `var(--hm-${n})`

export type PieceProps = { className?: string }

/** Scalable root: container-type inline-size, explicit aspect-ratio. Everything inside is cqw / viewBox-scaled. */
export function Root({
  ratio,
  className = '',
  bg,
  children,
  piece,
  layer,
}: {
  ratio: string
  className?: string
  bg: string
  children: ReactNode
  piece: number
  layer: 'outside' | 'inside'
}) {
  return (
    <div
      className={className}
      data-piece={piece}
      data-layer={layer}
      style={{ position: 'relative', width: '100%', aspectRatio: ratio, containerType: 'inline-size' }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          background: bg,
          borderRadius: '1.6cqw',
          fontFamily: SANS,
          color: v('text'),
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: `${HAIR} solid ${v('border')}`,
          borderRadius: '1.6cqw',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

type AProps = {
  x: number
  y: number
  w?: number
  h?: number
  style?: CSSProperties
  children?: ReactNode
  [k: string]: unknown
}

/** Absolutely positioned box in cqw (1cqw = 1% of piece width). */
export function Abs({ x, y, w, h, style, children, ...rest }: AProps) {
  return (
    <div
      {...rest}
      style={{
        position: 'absolute',
        left: `${x}cqw`,
        top: `${y}cqw`,
        width: w != null ? `${w}cqw` : undefined,
        height: h != null ? `${h}cqw` : undefined,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export const box = (bg: string, border?: string, r = 0.8): CSSProperties => ({
  background: bg,
  border: border ? `${HAIR} solid ${border}` : undefined,
  borderRadius: `${r}cqw`,
})

/** Text box; pass h to vertically center via line-height. */
export function Txt({
  x,
  y,
  w,
  h,
  s = 2,
  mono,
  c = 'text',
  align,
  weight,
  children,
  style,
  ...rest
}: {
  x: number
  y: number
  w?: number
  h?: number
  s?: number
  mono?: boolean
  c?: string
  align?: 'left' | 'center' | 'right'
  weight?: number
  children: ReactNode
  style?: CSSProperties
  [k: string]: unknown
}) {
  return (
    <Abs
      x={x}
      y={y}
      w={w}
      h={h}
      {...rest}
      style={{
        fontSize: `${s}cqw`,
        fontFamily: mono ? MONO : SANS,
        color: v(c),
        textAlign: align,
        fontWeight: weight,
        lineHeight: h ? `${h}cqw` : 1,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </Abs>
  )
}

/** SVG layer sharing the cqw coordinate system: viewBox width is always 100. */
export function Svg({ H, children }: { H: number; children: ReactNode }) {
  return (
    <svg
      className="hm-svg"
      viewBox={`0 0 100 ${H}`}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    >
      <style>{'.hm-svg *{vector-effect:non-scaling-stroke}'}</style>
      {children}
    </svg>
  )
}

/** Faint dotted blueprint grid. */
export function DotGrid({ H }: { H: number }) {
  const id = 'g' + useId().replace(/[^a-zA-Z0-9]/g, '')
  return (
    <>
      <defs>
        <pattern id={id} width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.14" fill={v('faint')} />
        </pattern>
      </defs>
      <rect width="100" height={H} fill={v('inset')} />
      <rect width="100" height={H} fill={`url(#${id})`} opacity="0.55" />
    </>
  )
}

/** SVG mono/sans text. */
export function St({
  x,
  y,
  s = 1.9,
  mono = true,
  fill = 'muted',
  anchor = 'start',
  weight,
  children,
  ...rest
}: {
  x: number
  y: number
  s?: number
  mono?: boolean
  fill?: string
  anchor?: 'start' | 'middle' | 'end'
  weight?: number
  children: ReactNode
  [k: string]: unknown
}) {
  return (
    <text
      {...rest}
      x={x}
      y={y}
      fontSize={s}
      fontFamily={mono ? MONO : SANS}
      fill={v(fill)}
      textAnchor={anchor}
      fontWeight={weight}
    >
      {children}
    </text>
  )
}

/** Small arrowhead polygon. dir: r | l | u | d */
export function Head({ x, y, dir, fill = 'primary' }: { x: number; y: number; dir: 'r' | 'l' | 'u' | 'd'; fill?: string }) {
  const p = {
    r: `${x},${y} ${x - 1.5},${y - 0.9} ${x - 1.5},${y + 0.9}`,
    l: `${x},${y} ${x + 1.5},${y - 0.9} ${x + 1.5},${y + 0.9}`,
    u: `${x},${y} ${x - 0.9},${y + 1.5} ${x + 0.9},${y + 1.5}`,
    d: `${x},${y} ${x - 0.9},${y - 1.5} ${x + 0.9},${y - 1.5}`,
  }[dir]
  return <polygon points={p} fill={v(fill)} />
}
