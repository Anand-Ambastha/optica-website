import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AI Solution Expo - BVP Optica'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030014',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1a103c 0%, #030014 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.3,
            backgroundImage: 'linear-gradient(#4c1d95 1px, transparent 1px), linear-gradient(90deg, #4c1d95 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div
           style={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             zIndex: 10,
             padding: '40px',
             textAlign: 'center',
           }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#a855f7',
              marginBottom: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'rgba(168, 85, 247, 0.1)',
              padding: '10px 24px',
              borderRadius: '50px',
              border: '1px solid rgba(168, 85, 247, 0.3)',
            }}
          >
            R&D CELL, BVCOE X BVP OPTICA
          </div>
          
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 900,
              background: 'linear-gradient(to right, #c084fc, #f472b6, #22d3ee)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 10,
              textAlign: 'center',
              lineHeight: 1.1,
              textShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
            }}
          >
            AI SOLUTION EXPO
          </div>
          
          <div
            style={{
              fontSize: 32,
              color: '#e2e8f0',
              marginBottom: 40,
              fontWeight: 500,
            }}
          >
            Mar 21 - Apr 14, 2026
          </div>
          
          <div
             style={{
               display: 'flex',
               gap: '24px',
               marginTop: '10px'
             }}
          >
             <div style={{ display: 'flex', padding: '12px 24px', background: 'rgba(168, 85, 247, 0.15)', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.4)', color: '#d8b4fe', fontSize: 20, fontWeight: 600 }}>Environment</div>
             <div style={{ display: 'flex', padding: '12px 24px', background: 'rgba(236, 72, 153, 0.15)', borderRadius: '16px', border: '1px solid rgba(236, 72, 153, 0.4)', color: '#fbcfe8', fontSize: 20, fontWeight: 600 }}>Healthcare</div>
             <div style={{ display: 'flex', padding: '12px 24px', background: 'rgba(34, 211, 238, 0.15)', borderRadius: '16px', border: '1px solid rgba(34, 211, 238, 0.4)', color: '#bae6fd', fontSize: 20, fontWeight: 600 }}>Fintech</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
