'use client'

import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'

const formatNumber = (value?: number) => {
  if (value === undefined || value === null) return '—'
  return value.toLocaleString('en-US')
}

const formatPercent = (value?: number) => {
  if (value === undefined || value === null) return '—'
  return `${(value * 100).toFixed(1)}%`
}

const RatingStars = ({ score }: { score: number }) => {
  const filledStars = Math.round(score)
  return (
    <div className="flex items-center" style={{ gap: px(4) }}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.5L12.4721 7.80423L19.194 8.1459L13.9558 12.1958L15.6942 18.8541L10 15.125L4.30577 18.8541L6.0442 12.1958L0.805923 8.1459L7.52786 7.80423L10 1.5Z"
            fill={index < filledStars ? '#000000' : 'none'}
            stroke="#000000"
          />
        </svg>
      ))}
    </div>
  )
}

export default function UserComments() {
  const { project } = useProjectDetail()
  const rating = project.metrics.rating
  const reviews = project.reviews?.list ?? []
  const summaryTags = project.reviews?.summary_tags ?? []
  const displayReviews = reviews.slice(0, 6)

  const stats = [
    { label: 'Total Users', value: formatNumber(project.metrics.operation.total_users) },
    { label: '24h Revenue', value: `$${formatNumber(project.metrics.operation.revenue_24h)}` },
    { label: 'Contributors', value: formatNumber(project.metrics.development.contributors_count) },
    { label: 'Progress', value: formatPercent(project.metrics.development.progress) },
  ]

  return (
    <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(50) }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: px(20),
          marginBottom: px(32),
        }}
      >
        <div
          style={{
            border: '1px solid #000000',
            borderRadius: px(8),
            padding: px(24),
          }}
        >
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(18),
              color: '#606060',
            }}
          >
            Community Score
          </div>
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 500,
              fontSize: px(48),
              marginTop: px(12),
            }}
          >
            {rating.score.toFixed(1)} / 5
          </div>
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              color: '#8C8C8C',
              marginTop: px(8),
            }}
          >
            {formatNumber(rating.review_count)} reviews
          </div>
          <div style={{ marginTop: px(16) }}>
            <RatingStars score={rating.score} />
          </div>
        </div>

        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              border: '1px solid #000000',
              borderRadius: px(8),
              padding: px(24),
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
              {stat.label}
            </div>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 500,
                fontSize: px(24),
                marginTop: px(12),
              }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {summaryTags.length > 0 && (
        <div style={{ marginBottom: px(24) }}>
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 500,
              fontSize: px(18),
              marginBottom: px(12),
            }}
          >
            Community Highlights
          </div>
          <div className="flex flex-wrap" style={{ gap: px(12) }}>
            {summaryTags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                style={{
                  border: '1px solid #000000',
                  borderRadius: px(999),
                  padding: `${px(6)} ${px(14)}`,
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(14),
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {displayReviews.length > 0 ? (
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: px(20),
          }}
        >
          {displayReviews.map((review) => (
            <div
              key={review.id}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: px(8),
                padding: px(20),
                display: 'flex',
                flexDirection: 'column',
                gap: px(12),
                backgroundColor: '#fff',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: px(18),
                  }}
                >
                  {review.user_name || review.user_id || 'Anonymous'}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    color: '#8C8C8C',
                  }}
                >
                  {review.date}
                </div>
              </div>
              {typeof review.rating === 'number' && <RatingStars score={review.rating} />}
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: px(24),
                }}
              >
                {review.content}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            border: '1px dashed #cccccc',
            borderRadius: px(8),
            padding: px(32),
            textAlign: 'center',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(18),
          }}
        >
          Reviews will appear here once this project receives public feedback.
        </div>
      )}
    </div>
  )
}
