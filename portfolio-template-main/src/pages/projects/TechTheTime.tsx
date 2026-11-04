import { Newspaper, Bot, Gauge, Mail } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/ImageCarousel';
import { useT } from '../../contexts/LanguageContext';
import { socialLinks } from '../../config/socialLinks';
import { techTheTimeIcon } from '../../assets/project_icons';
import { getProjectImages } from '../../assets/projects';

const featureIcons = [Newspaper, Bot, Gauge, Mail];
const images = getProjectImages('techthetime');

const TechTheTime = () => {
  const t = useT();
  const p = t.project.pages.techthetime;

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={techTheTimeIcon}
        title="Tech the Time"
        subtitle={p.subtitle}
        githubUrl={socialLinks.repositories.techTheTime}
        features={p.features.map((f, i) => ({ icon: featureIcons[i], title: f.title, description: f.description }))}
      />

      <ImageCarousel images={images} projectName="Tech the Time" title={t.project.snapshots} />

      <ProjectSection title={t.project.overview}>
        <ProjectOverview paragraphs={p.overview} />
      </ProjectSection>

      <ProjectSection title={t.project.techStack}>
        <TechStack technologies={['Next.js 14', 'React 18', 'TypeScript', 'Claude API', 'rss-parser', 'GDELT', 'Upstash Redis', 'Vercel Cron', 'Brevo']} />
      </ProjectSection>

      <ProjectSection title={t.project.highlights}>
        <TechnicalHighlights highlights={p.highlights} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default TechTheTime;
