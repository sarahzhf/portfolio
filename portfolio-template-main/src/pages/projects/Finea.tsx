import { Sparkles, Bot, Gamepad2, Smartphone } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { useT } from '../../contexts/LanguageContext';
import { socialLinks } from '../../config/socialLinks';
import { comingSoon } from '../../assets';

const featureIcons = [Bot, Gamepad2, Smartphone, Sparkles];

const Finea = () => {
  const t = useT();
  const p = t.project.pages.finea;

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="Finéa"
        subtitle={p.subtitle}
        githubUrl={socialLinks.repositories.projectOne}
        features={p.features.map((f, i) => ({ icon: featureIcons[i], title: f.title, description: f.description }))}
      />

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
