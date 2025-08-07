export class ThemeManager {
  private readonly STORAGE_KEY = 'theme';
  private readonly DARK_CLASS = 'dark';

  constructor() {
    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.setDark();
    } else {
      this.setLight();
    }
  }

  toggle() {
    if (this.isDark()) {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  setDark() {
    document.documentElement.classList.add(this.DARK_CLASS);
    localStorage.setItem(this.STORAGE_KEY, 'dark');
  }

  setLight() {
    document.documentElement.classList.remove(this.DARK_CLASS);
    localStorage.setItem(this.STORAGE_KEY, 'light');
  }

  isDark(): boolean {
    return document.documentElement.classList.contains(this.DARK_CLASS);
  }

  getTheme(): 'light' | 'dark' {
    return this.isDark() ? 'dark' : 'light';
  }
}