(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const key = 'academic-site-theme';

  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch {
    // The toggle still works for this page when storage is unavailable.
  }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const isDark = () => (root.dataset.theme || (preference.matches ? 'dark' : 'light')) === 'dark';
    const updateButton = () => button.setAttribute('aria-pressed', String(isDark()));

    button.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      updateButton();

      try {
        localStorage.setItem(key, root.dataset.theme);
      } catch {
        // Keep the current page's selection.
      }
    });

    preference.addEventListener('change', updateButton);
    updateButton();
    button.hidden = false;
  });
})();
