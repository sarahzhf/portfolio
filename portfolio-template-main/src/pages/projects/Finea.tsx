import { Bot, Gamepad2, Smartphone, Sparkles } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/ImageCarousel';
import { useT } from '../../contexts/LanguageContext';
import { socialLinks } from '../../config/socialLinks';
import { fineaIcon } from '../../assets/project_icons';
import { getProjectImages } from '../../assets/projects';

const featureIcons = [Bot, Gamepad2, Smartphone, Sparkles];
const images = getProjectImages('finea');

const Finea = () => {
  const t = useT();
  const p = t.project.pages.finea;

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={fineaIcon}
        title="Finéa"
        subtitle={p.subtitle}
        githubUrl={socialLinks.repositories.projectOne}
        features={p.features.map((f, i) => ({ icon: featureIcons[i], title: f.title, description: f.description }))}
      />

      <ImageCarousel images={images} projectName="Finéa" title={t.project.snapshots} />

      <ProjectSection title={t.project.overview}>
        <ProjectOverview paragraphs={p.overview} />
      </ProjectSection>

      <ProjectSection title={t.project.techStack}>
        <TechStack technologies={['Next.js', 'TypeScript', 'Three.js', 'Gemini API', 'Vercel AI SDK', 'Firebase', 'Supabase']} />
      </ProjectSection>

      <ProjectSection title={t.project.highlights}>
        <TechnicalHighlights highlights={p.highlights} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Finea;
