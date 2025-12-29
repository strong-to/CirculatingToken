'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'
import { toCdnUrl, CDN_PREFIX } from '@/utils/cdn'

const FALLBACK_AVATARS = Array.from({ length: 16 }, (_, i) => `${CDN_PREFIX}/LendingVault/ProjectConstruction/item/img${i + 1}.png`)

const fillAvatars = (avatars: string[], size: number) => {
  if (avatars.length === 0) {
    return FALLBACK_AVATARS.slice(0, size)
  }
  const filled: string[] = []
  while (filled.length < size) {
    filled.push(avatars[filled.length % avatars.length])
  }
  return filled
}

export default function ProjectConstruction() {
  const { project } = useProjectDetail()
  const coCreation = project.co_creation
  const summary = coCreation?.summary
  const avatarCandidates = (project.profile.media?.assets ?? [])
    .filter((asset) => asset.context === 'project_construction_avatar')
    .map((asset) => toCdnUrl(asset.url))
  const avatars = fillAvatars(avatarCandidates, 16)
  const openTasks = coCreation?.open_tasks ?? []
  const contributors = coCreation?.contributors_leaderboard ?? []

  return (
    <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(80) }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: px(16),
        }}
      >
        <StatCard label="Construction responses" value={summary?.total_contributions_recorded} />
        <StatCard label="Active builders" value={summary?.active_builders_count} />
        <StatCard label="Contributors" value={project.metrics.development.contributors_count} />
        <StatCard label="Total commits" value={project.metrics.development.total_commits} />
      </div>

      <div style={{ marginTop: px(32) }}>
        <h3
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 500,
            fontSize: px(22),
            marginBottom: px(16),
          }}
        >
          Builder network
        </h3>
        <div className="flex flex-wrap" style={{ gap: px(15) }}>
          {avatars.map((src, index) => (
            <div
              key={`${src}-${index}`}
              style={{
                width: px(64),
                height: px(64),
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <Image src={src} alt="Builder avatar" width={64} height={64} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      {openTasks.length > 0 && (
        <div style={{ marginTop: px(40) }}>
          <SectionTitle title="Open tasks" />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: px(16) }}>
            {openTasks.map((task) => (
              <div
                key={task.task_id}
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#fff',
                }}
              >
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: px(18),
                  }}
                >
                  {task.title}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    color: '#8C8C8C',
                    marginTop: px(8),
                  }}
                >
                  {task.category} · {task.type}
                </div>
                {task.progress_current !== undefined && task.progress_target ? (
                  <div style={{ marginTop: px(12) }}>
                    <div
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontSize: px(14),
                      }}
                    >
                      Progress: {task.progress_current}/{task.progress_target}
                    </div>
                    <div style={{ width: '100%', height: px(6), background: '#f1f1f1', borderRadius: px(3), marginTop: px(6) }}>
                      <div
                        style={{
                          width: `${Math.min(100, (task.progress_current / task.progress_target) * 100)}%`,
                          height: '100%',
                          background: '#000',
                          borderRadius: px(3),
                        }}
                      />
                    </div>
                  </div>
                ) : null}
                {task.reward_display && (
                  <div
                    style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontSize: px(14),
                      marginTop: px(12),
                    }}
                  >
                    Reward: {task.reward_display}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {contributors.length > 0 && (
        <div style={{ marginTop: px(40), marginBottom: px(32) }}>
          <SectionTitle title="Top contributors" />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: px(16) }}>
            {contributors.slice(0, 6).map((contributor) => (
              <div
                key={`${contributor.user_id}-${contributor.rank}`}
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#fff',
                }}
              >
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: px(18),
                  }}
                >
                  #{contributor.rank} {contributor.name || contributor.user_id}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    color: '#8C8C8C',
                    marginTop: px(6),
                  }}
                >
                  {contributor.role}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    marginTop: px(10),
                  }}
                >
                  {formatNumber(contributor.contribution_points)} pts
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value }: { label: string; value?: number }) {
  return (
    <div
      style={{
        border: '1px solid #e5e5e5',
        borderRadius: px(8),
        padding: px(24),
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(16),
          color: '#8C8C8C',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 500,
          fontSize: px(28),
          marginTop: px(10),
        }}
      >
        {value !== undefined ? value.toLocaleString('en-US') : '—'}
      </div>
    </div>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h3
      style={{
        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
        fontWeight: 500,
        fontSize: px(22),
        marginBottom: px(16),
      }}
    >
      {title}
    </h3>
  )
}

function formatNumber(value?: number) {
  if (value === undefined || value === null) return '—'
  return value.toLocaleString('en-US')
}
