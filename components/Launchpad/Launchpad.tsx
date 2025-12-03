export default function Launchpad() {
  return (
    <section className="bg-white flex flex-col">
      <div className="container-responsive flex-1 flex flex-col justify-center items-center" style={{ paddingTop: '4.625rem', paddingBottom: '3.25rem' }}>
        <div
          className="text-black text-center"
          style={{ 
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '5.125rem', // 82px = 5.125rem
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Launchpad
        </div>
        <div
          className="text-black text-center mt-8"
          style={{ 
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: '1.75rem', // 28px
            lineHeight: '150%',
          }}
        >
          Coming Soon
        </div>
      </div>
    </section>
  )
}

