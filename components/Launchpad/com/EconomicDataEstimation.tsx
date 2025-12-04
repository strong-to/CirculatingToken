'use client'

import { px } from '@/utils/pxToRem'

interface EconomicDataEstimationProps {
  onEnter?: () => void
}

export default function EconomicDataEstimation({ onEnter }: EconomicDataEstimationProps = {} as EconomicDataEstimationProps) {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-between" style={{ marginBottom: px(30), width: px(532) }}>
        <div
          className="text-[#000000]"
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(40),
            lineHeight: px(48),
            verticalAlign: 'middle',
            height: px(34),
            display: 'flex',
            alignItems: 'center',
            marginTop: px(5),
          }}
        >
          Economic Data Estimation
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)', marginTop: px(-15) }}></div>
      </div>
      
      <div className="" style={{ marginTop: px(39) }}>
      <div className="border border-[#000000] rounded-[4px]" style={{ width: px(1355)  }}>

        <div  className=" flex items-center justify-between bg-[#F7F9FF]" style={{ color: '#888888', fontSize: px(16),width: '100%' , height: px(80),paddingLeft: px(30),paddingRight: px(30) }} >
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'Book',
              fontSize: px(24),
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#000000',
            }}
          >
            Fee Standard
          </div>

        
        <button
          style={{
            width: px(128),
            height: px(40),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            color: '#000000',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Renovate
        </button>

        </div>
       <div style={{ color: '#888888', fontSize: px(16),width: '100%'  , height: px(422) }} className="border  border-t-[#000000]">

      <div className='flex flex-col  justify-between' style={{ paddingLeft: px(30), paddingRight: px(30) , paddingTop: px(30) ,paddingBottom: px(30),height: '100%' }}>
        <div className='flex items-center justify-between' style={{  }}>
          <div className='flex flex-col items-start ' style={{  }}>

          <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(22),
                lineHeight: px(26),
                letterSpacing: '0%',
                color: '#083FD8',
              }}
            >
             Basic Features
            </div>
            
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by subscription period
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by deliverable outcomes
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by output capacity
            </div>
          </div>
          <div className='flex  items-center justify-center' style={{  }}>
            <div style={{ width: px(132), height: px(132),border: `0.5px solid #000000`}}></div>

            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='flex items-center justify-between' >
          <div className='flex flex-col items-start ' style={{  }}>

          <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(22),
                lineHeight: px(26),
                letterSpacing: '0%',
                color: '#083FD8',
              }}
            >
           Advanced Features
            </div>
            
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by subscription period
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by deliverable outcomes
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by output capacity
            </div>
          </div>
          <div className='flex  items-center justify-center' style={{  }}>
            <div style={{ width: px(132), height: px(132),border: `0.5px solid #000000`}}></div>

            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

       </div>
      </div>

      <div className="border border-[#000000] rounded-[4px]" style={{ width: px(1355) ,marginTop: px(15) }}>

        <div  style={{ color: '#888888', fontSize: px(16),width: '100%' , height: px(80),paddingLeft: px(30),paddingRight: px(30) }} className=" flex items-center justify-between bg-[#F7F9FF]">
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'Book',
              fontSize: px(24),
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#000000',
            }}
          >
           Custom Standard
          </div>

        
        <button
          style={{
            width: px(128),
            height: px(40),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            color: '#000000',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Renovate
        </button>

        </div>
       <div style={{ color: '#888888', fontSize: px(16),width: '100%'  , height: px(422) }} className="border  border-t-[#000000]">

      <div className='flex flex-col  justify-between' style={{ paddingLeft: px(30), paddingRight: px(30) , paddingTop: px(30) ,paddingBottom: px(30),height: '100%' }}>
        <div className='flex items-center justify-between' style={{  }}>
          <div className='flex flex-col items-start ' style={{  }}>

          <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(22),
                lineHeight: px(26),
                letterSpacing: '0%',
                color: '#083FD8',
              }}
            >
             Basic Features
            </div>
            
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by subscription period
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by deliverable outcomes
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by output capacity
            </div>
          </div>
          <div className='flex  items-center justify-center' style={{  }}>
            <div style={{ width: px(132), height: px(132),border: `0.5px solid #000000`}}></div>

            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='flex items-center justify-between' >
          <div className='flex flex-col items-start ' style={{  }}>

          <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(22),
                lineHeight: px(26),
                letterSpacing: '0%',
                color: '#083FD8',
              }}
            >
             Advanced Features
            </div>
            
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by subscription period
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by deliverable outcomes
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by output capacity
            </div>
          </div>
          <div className='flex  items-center justify-center' style={{  }}>
            <div style={{ width: px(132), height: px(132),border: `0.5px solid #000000`}}></div>

            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

       </div>
      </div>


      <div className="border border-[#000000] rounded-[4px]" style={{ width: px(1355) ,marginTop: px(15)  }}>

        <div  style={{ color: '#888888', fontSize: px(16),width: '100%' , height: px(80),paddingLeft: px(30),paddingRight: px(30) }} className=" flex items-center justify-between bg-[#F7F9FF]">
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'Book',
              fontSize: px(24),
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#000000',
            }}
          >
            Custom Standards
          </div>

        
        <button
          style={{
            width: px(128),
            height: px(40),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            color: '#000000',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Renovate
        </button>

        </div>
       <div style={{ color: '#888888', fontSize: px(16),width: '100%'  , height: px(422) }} className="border  border-t-[#000000]">

      <div className='flex flex-col  justify-between' style={{ paddingLeft: px(30), paddingRight: px(30) , paddingTop: px(30) ,paddingBottom: px(30),height: '100%' }}>
        <div className='flex items-center justify-between' style={{  }}>
          <div className='flex flex-col items-start ' style={{  }}>

          <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(22),
                lineHeight: px(26),
                letterSpacing: '0%',
                color: '#083FD8',
              }}
            >
             Basic Features
            </div>
            
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by subscription period
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by deliverable outcomes
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by output capacity
            </div>
          </div>
          <div className='flex  items-center justify-center' style={{  }}>
            <div style={{ width: px(132), height: px(132),border: `0.5px solid #000000`}}></div>

            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='flex items-center justify-between' >
          <div className='flex flex-col items-start ' style={{  }}>

          <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(22),
                lineHeight: px(26),
                letterSpacing: '0%',
                color: '#083FD8',
              }}
            >
            Advanced Features
            </div>
            
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by subscription period
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by deliverable outcomes
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by output capacity
            </div>
          </div>
          <div className='flex  items-center justify-center' style={{  }}>
            <div style={{ width: px(132), height: px(132),border: `0.5px solid #000000`}}></div>

            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>
            <div style={{ marginLeft: px(15), width: px(270), height: px(132),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：2列3行，共6个格子 */}
              <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr`, height: '100%' }}>
                {/* 第一行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  1M
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10
                </div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  10.000
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

       </div>
      </div>


      <div className="border border-[#000000] rounded-[4px]" style={{ width: px(1355) ,marginTop: px(15)  }}>

        <div  style={{ color: '#888888', fontSize: px(16),width: '100%' , height: px(80),paddingLeft: px(30),paddingRight: px(30) }} className=" flex items-center justify-between bg-[#F7F9FF]">
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'Book',
              fontSize: px(24),
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#000000',
            }}
          >
            Custom Standards
          </div>

        
        <button
          style={{
            width: px(128),
            height: px(40),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            color: '#000000',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Renovate
        </button>

        </div>

       <div style={{ color: '#888888', fontSize: px(16),width: '100%'  }} className="border  border-t-[#000000]">

      <div className='flex flex-col  justify-between' style={{ paddingLeft: px(30), paddingRight: px(30) , paddingTop: px(30) ,paddingBottom: px(30),height: '100%' }}>
        
        <div className='flex items-center justify-between' style={{  }}>
          <div className='flex flex-col items-start ' style={{  }}>
            
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by subscription period
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by deliverable outcomes
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'Book',
                fontSize: px(16),
                lineHeight: px(19),
                letterSpacing: '0%',
                color: '#000000',
                marginTop: px(24)
              }}
            >
              Charged by output capacity
            </div>
          </div>
          <div className='flex  items-center justify-center' style={{  }}>
            {/* <div style={{ width: px(132), height: px(132),border: `0.5px solid #000000`}}></div> */}

            <div style={{ marginLeft: px(15), width: px(945), height: px(172),border: `0.5px solid #000000`, overflow: 'hidden' }}>
              {/* 表格：7列（1个空列 + 6个数据列）4行，每行43px */}
              <div style={{ display: 'grid', gridTemplateColumns: `${px(135)} ${px(135)} ${px(135)} ${px(135)} ${px(135)} ${px(135)} ${px(135)}`, gridTemplateRows: `${px(43)} ${px(43)} ${px(43)} ${px(43)}` }}>
                {/* 表头行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  3 months
                </div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  6 months
                </div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  12 months
                </div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  24 months
                </div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  36 months
                </div>
                <div style={{ borderBottom: `0.5px solid #000000`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'Book',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}>
                  48 months
                </div>
                {/* 第二行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000` }}></div>
                {/* 第三行 */}
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000`, borderBottom: `0.5px solid #000000` }}></div>
                <div style={{ borderBottom: `0.5px solid #000000` }}></div>
                {/* 第四行 */}
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div style={{ borderRight: `0.5px solid #000000` }}></div>
                <div></div>
              </div>
            </div>
           
          

          </div>
        </div>

       
      </div>

       </div>
      </div>

      {/* Enter 按钮 */}
      <div className="flex items-center justify-center" style={{ marginTop: px(40) }}>
        <button
          className="cursor-pointer"
          onClick={onEnter}
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            width: px(200),
            height: px(50),
            backgroundColor: '#000000',
            borderRadius: px(4),
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Enter
        </button>
      </div>
      </div>
    </div>
  )
}

