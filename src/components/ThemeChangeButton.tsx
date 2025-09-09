import { useEffect, useState } from 'react';
import { Button } from '../components';

type ThemeKey = 'sea' | 'obang' | 'mugunghwa' | 'cheongja';

const THEME_STORAGE_KEY = 'theme';

const THEME_OPTIONS: Array<{
  key: ThemeKey;
  label: string;
  emoji: string;
  subtitle: string;
}> = [ 
  { key: 'sea',       label: '바다',     emoji: '🌊', subtitle: '깊은 바다·맑은 하늘' },
  { key: 'obang',     label: '오방색',   emoji: '🌏', subtitle: '한국 전통의 오방색에서 영감을 받아, 다채로운 여행의 방향과 의미' },
  { key: 'mugunghwa', label: '무궁화',   emoji: '🌸', subtitle: '무궁화의 연보라와 우아한 한국미가 느껴지는 은은한 여행의 설렘' },
  { key: 'cheongja',  label: '청자',     emoji: '🪷', subtitle: '비취빛의 절제된 고급스러움' },
];

export const ThemeChangeButton = () => {
  const [theme, setTheme] = useState<ThemeKey>(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem(THEME_STORAGE_KEY)) as ThemeKey | null;
    return saved ?? 'obang';
  });

  // 현재 테마 적용
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  const onSelect = (next: ThemeKey) => setTheme(next);

  const renderVariant = (key: ThemeKey) =>
    key === theme ? 'primary' : 'outline';

  return (
    <section className="page-container animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {THEME_OPTIONS.map(({ key, label, emoji, subtitle }) => (
          <div key={key} className="k-card p-4 flex flex-col gap-3">
            <div>
              <div className="text-lg font-semibold text-text-main flex items-center gap-2">
                <span aria-hidden>{emoji}</span> {label}
              </div>
              <div className="text-sm text-text-subtle">{subtitle}</div>
            </div>
            <div>
              <Button
                variant={renderVariant(key) as any}
                size="sm"
                aria-pressed={theme === key}
                aria-label={`${label} 테마로 변경`}
                onClick={() => onSelect(key)}
              >
                {theme === key ? '적용됨' : '적용'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
