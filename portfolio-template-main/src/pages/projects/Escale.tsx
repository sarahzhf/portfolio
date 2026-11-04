import { BookOpen, Globe2, Wallet, Users } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/ImageCarousel';
import { useT } from '../../contexts/LanguageContext';
import { socialLinks } from '../../config/socialLinks';
import { escaleIcon } from '../../assets/project_icons';
import { getProjectImages } from '../../assets/projects';

const featureIcons = [BookOpen, Globe2, Wallet, Users];
const images = getProjectImages('escale');

const Escale = () => {
  const t = useT();
  const p = t.project.pages.escale;

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={escaleIcon}
        title="Escale"
        subtitle={p.subtitle}
        githubUrl={socialLinks.repositories.escale}
        features={p.features.map((f, i) => ({ icon: featureIcons[i], title: f.title, description: f.description }))}
      />

      <ImageCarousel images={images} projectName="Escale" title={t.project.snapshots} />

      <ProjectSection title={t.project.overview}>
        <ProjectOverview paragraphs={p.overview} />
      </ProjectSection>

      <ProjectSection title={t.project.techStack}>
        <TechStack technologies={['JavaScript', 'Supabase', 'PostgreSQL', 'D3.js', 'TopoJSON', 'Three.js', 'GSAP', 'PWA', 'Netlify']} />
      </ProjectSection>

      <ProjectSection title={t.project.highlights}>
        <TechnicalHighlights highlights={p.highlights} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Escale;
