import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const LOGO_URL = 'https://aerosunenergy.in/images/logo.png'

export const size = {
  width: 48,
  height: 48,
}

export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
        }}
      >
        <img
          src={LOGO_URL}
          alt="AeroSun Energy logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </div>
    ),
    size,
  )
}