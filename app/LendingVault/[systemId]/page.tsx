import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import ImagePreloader from '@/components/ImagePreloader'
import LendingVaultContent from '@/components/LendingVault/LendingVaultContent'
import { ProjectDetailProvider } from '@/components/LendingVault/ProjectDetailProvider'
import { getProjectById, getRelatedProjects, getAllProjects } from '@/lib/projectDetail'
import { notFound } from 'next/navigation'
import type { Project } from '@/lib/types'

type PageProps = {
  params: {
    systemId: string
  }
}

const getProjectOrThrow = (systemId: string): Project => {
  const project = getProjectById(systemId)
  if (!project) {
    notFound()
  }
  return project
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectById(params.systemId)
  if (!project) {
    return {
      title: 'Project Not Found | Lending Vault',
      description: 'The requested project is unavailable in Lending Vault.'
    }
  }

  const title = `${project.profile.name} | Lending Vault`
  const description = project.profile.summary || project.profile.slogan || `Discover ${project.profile.name} on THE4 Lending Vault.`
  const banner = project.profile.media?.banner

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: banner ? [banner] : undefined,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: banner ? [banner] : undefined
    }
  }
}

export default function LendingVaultDetailPage({ params }: PageProps) {
  const project = getProjectOrThrow(params.systemId)
  const relatedProjects = getRelatedProjects(project)

  return (
    <ProjectDetailProvider project={project} relatedProjects={relatedProjects}>
      <div className="h-screen flex flex-col overflow-hidden">
        <ImagePreloader />
        <div>
          <Header />
        </div>
        <LendingVaultContent />
      </div>
    </ProjectDetailProvider>
  )
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    systemId: project.system_id,
  }))
}
