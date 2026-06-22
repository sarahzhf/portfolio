import { Boxes, MousePointerClick, Eye } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { useT } from '../../contexts/LanguageContext';
import { socialLinks } from '../../config/socialLinks';
import { comingSoon } from '../../assets';

const featureIcons = [Boxes, MousePointerClick, Eye];

const Neura = () => {
  const t = useT();
  const p = t.project.pages.neura;

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="Neura IA"
        subtitle={p.subtitle}
        githubUrl={socialLinks.repositories.projectTwo}
        features={p.features.map((f, i) => ({ icon: featureIcons[i], title: f.title, description: f.description }))}
      />

      <ProjectSection title={t.project.overview}>
        <ProjectOverview paragraphs={p.overview} />
      </ProjectSection>

      <ProjectSection title={t.project.techStack}>
        <TechStack technologies={['Three.js', 'React', 'TypeScript']} />
      </ProjectSection>

      <ProjectSection title={t.project.highlights}>
        <TechnicalHighlights highlights={p.highlights} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Neura;
