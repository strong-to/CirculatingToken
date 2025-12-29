'use client'

import { useMemo } from 'react'
import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'

const renderMarkdown = (markdown?: string) => {
  if (!markdown) return null
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean)

  return blocks.map((block, index) => {
    if (block.startsWith('### ')) {
      return (
        <h4
          key={`md-h3-${index}`}
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 500,
            fontSize: px(20),
            marginTop: px(24),
          }}
        >
          {block.replace(/^###\s+/, '')}
        </h4>
      )
    }

    if (block.startsWith('## ')) {
      return (
        <h3
          key={`md-h2-${index}`}
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 500,
            fontSize: px(24),
            marginTop: px(32),
          }}
        >
          {block.replace(/^##\s+/, '')}
        </h3>
      )
    }

    const lines = block.split('\n')
    if (lines.every((line) => line.trim().startsWith('- '))) {
      const items = lines.map((line) => line.replace(/^-\s*/, '').trim()).filter(Boolean)
      return (
        <ul key={`md-list-${index}`} style={{ paddingLeft: px(20), marginTop: px(12) }}>
          {items.map((item, itemIndex) => (
            <li
              key={`md-li-${index}-${itemIndex}`}
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(18),
                lineHeight: px(26),
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p
        key={`md-p-${index}`}
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(18),
          lineHeight: px(30),
          marginTop: px(16),
        }}
      >
        {block}
      </p>
    )
  })
}

export default function ProjectIntroduction() {
  const { project } = useProjectDetail()
  const taxonomySummary = useMemo(() => {
    const { taxonomy } = project
    return [
      { label: 'Domain', value: taxonomy.domain?.join(' / ') },
      { label: 'Action', value: taxonomy.action?.join(' / ') },
      { label: 'Interaction', value: taxonomy.interaction_form?.join(' / ') },
    ].filter((item) => item.value)
  }, [project])

  const links = project.profile.links || {}

  return (
    <div
      className="w-full"
      style={{
        paddingLeft: px(80),
        paddingRight: px(80),
        paddingTop: px(60),
      }}
    >
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(18),
          color: '#8C8C8C',
        }}
      >
        {project.system_id}
      </div>
      <h2
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 500,
          fontSize: px(40),
          marginTop: px(12),
        }}
      >
        {project.profile.name}
      </h2>
      <p
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(22),
          color: '#606060',
          marginTop: px(8),
        }}
      >
        {project.profile.slogan}
      </p>

      {taxonomySummary.length > 0 && (
        <div className="flex flex-wrap" style={{ gap: px(16), marginTop: px(24) }}>
          {taxonomySummary.map((item) => (
            <div key={item.label} style={{ minWidth: px(200) }}>
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 500,
                  fontSize: px(16),
                  color: '#8C8C8C',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(18),
                  marginTop: px(4),
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: px(32) }}>{renderMarkdown(project.profile.description_md)}</div>

      {Object.values(links).some(Boolean) && (
        <div style={{ marginTop: px(32) }}>
          <h3
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 500,
              fontSize: px(20),
              marginBottom: px(12),
            }}
          >
            Official Links
          </h3>
          <div className="flex flex-wrap" style={{ gap: px(16) }}>
            {links.website && (
              <a
                href={links.website}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{
                  border: '1px solid #000000',
                  borderRadius: px(4),
                  padding: `${px(8)} ${px(16)}`,
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(16),
                }}
              >
                Website
              </a>
            )}
            {links.whitepaper && (
              <a
                href={links.whitepaper}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{
                  border: '1px solid #000000',
                  borderRadius: px(4),
                  padding: `${px(8)} ${px(16)}`,
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(16),
                }}
              >
                Whitepaper
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{
                  border: '1px solid #000000',
                  borderRadius: px(4),
                  padding: `${px(8)} ${px(16)}`,
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(16),
                }}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
