(function() {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function getTheme() {
    return localStorage.getItem('theme');
  }

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // system
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggle.addEventListener('click', function() {
    var current = getTheme();
    var isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });

  // Listen for OS theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!getTheme()) {
      applyTheme();
    }
  });
})();
