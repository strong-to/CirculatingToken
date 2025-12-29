'use client'

import Link from 'next/link'
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'
import { px } from '@/utils/pxToRem'
import { LearnMoreArrowIcon } from '@/components/icons/Icons'
import { useProjectDetail } from '../ProjectDetailProvider'
import { toCdnUrl } from '@/utils/cdn'
import { buildLendingVaultPath } from '@/config/app'

export default function ProjectsYouMayBeInterestedIn() {
  const { relatedProjects } = useProjectDetail()
  const projects = relatedProjects.slice(0, 6)

  if (projects.length === 0) {
    return null
  }

  return (
    <div className="w-full" style={{ marginTop: px(50), paddingLeft: px(80), paddingRight: px(80), paddingBottom: px(60) }}>
      <div className="flex items-center justify-between" style={{ marginBottom: px(32) }}>
        <div
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 500,
            fontSize: px(28),
          }}
        >
          Projects You May Be Interested In
        </div>
        <Link
          href={buildLendingVaultPath(projects[0].system_id)}
          className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity"
        >
          <span>View featured project</span>
          <LearnMoreArrowIcon style={{ width: px(24), height: px(24) }} />
        </Link>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: px(16) }}>
        {projects.map((project) => {
          const hero = toCdnUrl(project.profile.media?.banner)
          return (
            <Link
              key={project.system_id}
              href={buildLendingVaultPath(project.system_id)}
              className="relative flex flex-col overflow-hidden"
              style={{ borderRadius: px(12), border: '1px solid #e5e5e5' }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10' }}>
                <ImageWithSkeleton
                  src={hero}
                  alt={project.profile.name}
                  fill
                  objectFit="cover"
                />
              </div>
              <div style={{ padding: px(16) }}>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: px(18),
                  }}
                >
                  {project.profile.name}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    color: '#8C8C8C',
                    marginTop: px(4),
                  }}
                >
                  {project.system_id}
                </div>
                <p
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    marginTop: px(12),
                    lineHeight: px(20),
                  }}
                >
                  {project.profile.summary}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
