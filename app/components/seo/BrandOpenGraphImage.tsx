import { ImageResponse } from 'next/og'

type BrandOpenGraphImageProps = {
  category: string
  description: string
  title: string
}

export const brandOpenGraphImageSize = {
  width: 1200,
  height: 630,
} as const

export function createBrandOpenGraphImage({
  category,
  description,
  title,
}: BrandOpenGraphImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(115deg, #f8fbf8 0%, #ffffff 57%, #e9f4ed 100%)',
          color: '#073b2c',
          display: 'flex',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#07834f',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 18,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            padding: '42px 74px',
            position: 'relative',
            width: '100%',
          }}
        >
          <div style={{ alignItems: 'center', display: 'flex', gap: 16 }}>
            <div
              style={{
                alignItems: 'center',
                background: 'linear-gradient(145deg, #07834f, #f47721)',
                borderRadius: 16,
                color: '#ffffff',
                display: 'flex',
                fontSize: 28,
                fontWeight: 800,
                height: 56,
                justifyContent: 'center',
                width: 56,
              }}
            >
              A
            </div>
            <div style={{ display: 'flex', fontSize: 31, fontWeight: 800 }}>
              <span>AeroSun&nbsp;</span>
              <span style={{ color: '#ef7622' }}>Energy</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 600 }}>
            <div
              style={{
                color: '#07834f',
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              {category}
            </div>
            <div
              style={{
                color: '#073b2c',
                fontSize: 58,
                fontWeight: 800,
                letterSpacing: -2,
                lineHeight: 1.08,
              }}
            >
              {title}
            </div>
            <div style={{ color: '#47665b', fontSize: 25, lineHeight: 1.4, maxWidth: 600 }}>
              {description}
            </div>
          </div>

          <div
            style={{
              alignItems: 'center',
              borderTop: '2px solid #d5e5db',
              color: '#07834f',
              display: 'flex',
              fontSize: 18,
              fontWeight: 700,
              justifyContent: 'space-between',
              letterSpacing: 2,
              paddingTop: 16,
              textTransform: 'uppercase',
            }}
          >
            <span>aerosunenergy.in</span>
            <span>Solar | Wind | Hybrid</span>
          </div>
        </div>

        <div
          style={{
            alignItems: 'center',
            background: '#e5f2e9',
            border: '14px solid #ffffff',
            borderRadius: 240,
            display: 'flex',
            height: 420,
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'absolute',
            right: 56,
            top: 104,
            width: 420,
          }}
        >
          <div
            style={{
              background: '#f79424',
              borderRadius: 100,
              height: 120,
              position: 'absolute',
              right: 40,
              top: 42,
              width: 120,
            }}
          />
          <div
            style={{
              background: '#b8dec7',
              borderRadius: '50% 50% 0 0',
              bottom: 0,
              height: 176,
              left: -20,
              position: 'absolute',
              width: 430,
            }}
          />
          <div
            style={{
              background: '#16765a',
              border: '8px solid #ffffff',
              bottom: 56,
              height: 72,
              position: 'absolute',
              transform: 'skew(-12deg)',
              width: 176,
            }}
          />
          <div
            style={{
              background: '#08794e',
              bottom: 118,
              height: 184,
              left: 90,
              position: 'absolute',
              width: 8,
            }}
          />
          <div
            style={{
              background: '#f47721',
              borderRadius: 20,
              bottom: 288,
              height: 20,
              left: 84,
              position: 'absolute',
              width: 20,
            }}
          />
          <div
            style={{
              background: '#08794e',
              bottom: 299,
              height: 8,
              left: 74,
              position: 'absolute',
              transform: 'rotate(-45deg)',
              width: 64,
            }}
          />
          <div
            style={{
              background: '#08794e',
              bottom: 299,
              height: 8,
              left: 82,
              position: 'absolute',
              transform: 'rotate(42deg)',
              width: 64,
            }}
          />
        </div>
      </div>
    ),
    brandOpenGraphImageSize,
  )
}
