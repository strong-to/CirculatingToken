'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'
import { CDN_PREFIX } from '@/utils/cdn'

export default function ProjectConstruction() {
  const { project, computed } = useProjectDetail()
  const coCreation = project.co_creation
  const summary = coCreation?.summary
  const openTasks = coCreation?.open_tasks ?? []
  const contributors = coCreation?.contributors_leaderboard ?? []
  const avatars = computed.builderAvatars.length > 0 ? computed.builderAvatars : Array.from({ length: 16 }, (_, idx) => `${CDN_PREFIX}/LendingVault/ProjectConstruction/item/img${(idx % 16) + 1}.png`)
  const statCards = [
    { label: 'Construction responses', value: summary?.total_contributions_recorded },
    { label: 'Active builders', value: summary?.active_builders_count },
    { label: 'Contributors', value: project.metrics.development.contributors_count },
    { label: 'Total commits', value: project.metrics.development.total_commits },
  ]

  return (
    <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(80) }}>
      <div
        style={{
          backgroundColor: '#000000',
          borderRadius: px(12),
          padding: px(32),
          color: '#ffffff',
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: px(16),
          }}
        >
          {statCards.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(15),
                  color: '#CFCFCF',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 500,
                  fontSize: px(32),
                  marginTop: px(8),
                }}
              >
                {formatNumber(stat.value)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: px(32) }}>
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 500,
              fontSize: px(22),
              marginBottom: px(16),
            }}
          >
            Builder network
          </div>
          <div className="flex flex-wrap" style={{ gap: px(15) }}>
            {avatars.map((src, index) => (
              <div
                key={`${src}-${index}`}
                style={{
                  width: px(64),
                  height: px(64),
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Image src={src} alt="Builder avatar" width={64} height={64} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
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
                  border: '1px solid #000000',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#ffffff',
                  minHeight: px(200),
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
                  border: '1px solid #000000',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#ffffff',
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
