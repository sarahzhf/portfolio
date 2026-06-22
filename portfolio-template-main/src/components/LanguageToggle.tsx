import { colors } from '../styles/colors';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const segment = (value: 'fr' | 'en') => ({
    color: lang === value ? colors.pink[500] : colors.pink[300],
    fontWeight: lang === value ? 700 : 500,
    opacity: lang === value ? 1 : 0.55,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '0 4px',
    fontSize: '14px',
    fontFamily: 'inherit',
  });

  return (
    <div
      role="group"
      aria-label="Language switcher"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '44px',
        userSelect: 'none',
      }}
    >
      <button
        type="button"
        onClick={() => setLang('fr')}
        style={segment('fr')}
        aria-pressed={lang === 'fr'}
        aria-label="Passer en français"
        onFocus={(e) => e.currentTarget.blur()}
      >
        FR
      </button>
      <span style={{ color: colors.pink[300], opacity: 0.5, fontSize: '14px' }}>/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        style={segment('en')}
        aria-pressed={lang === 'en'}
        aria-label="Switch to English"
        onFocus={(e) => e.currentTarget.blur()}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
