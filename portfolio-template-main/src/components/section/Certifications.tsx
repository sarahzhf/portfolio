import { useDarkMode } from '../../contexts/DarkModeContext';
import { useT } from '../../contexts/LanguageContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

// Repurposed from the template's "Certifications" section into an Education
// section. Kept the component/export name so App.tsx imports stay unchanged.
const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const t = useT();
  const themeColors = useThemeColors();

  const education = t.education.items;

  return (
    <section id="education" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>{t.education.title}</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: themeColors.card.background,
                border: `1px solid ${themeColors.card.border}`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{item.degree}</h3>
                    <p className="text-base font-medium text-gray-700 dark:text-gray-400 mt-1">{item.school}</p>
                  </div>
                </div>
                <div className="md:text-right md:flex-shrink-0 pl-9 md:pl-0">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1 md:justify-end">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 md:justify-end">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-3 pl-9" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;
