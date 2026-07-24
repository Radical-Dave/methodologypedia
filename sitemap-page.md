---
layout: default
title: "Sitemap"
permalink: /sitemap/
---
{% assign lang = site.active_lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<div class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
  <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-8">{{ t.sitemap.title }}</h1>

  <div class="space-y-10">
    <section>
      <h2 class="text-xl font-bold mb-4 text-violet-600 dark:text-violet-400">{{ t.sitemap.main_pages }}</h2>
      <ul class="space-y-3">
        <li class="flex flex-wrap items-center gap-2">
          <a href="{{ '/' | relative_url }}" class="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{{ t.nav.home }}</a>
          <span class="text-gray-400 dark:text-gray-600 text-xs">|</span>
          <a href="{{ '/' | relative_url }}" class="text-sm hover:opacity-80" title="English">🇺🇸</a>
          <a href="{{ '/en-gb/' | relative_url }}" class="text-sm hover:opacity-80" title="English (UK)">🇬🇧</a>
          <a href="{{ '/ar/' | relative_url }}" class="text-sm hover:opacity-80" title="العربية">🇸🇦</a>
          <a href="{{ '/es/' | relative_url }}" class="text-sm hover:opacity-80" title="Español">🇪🇸</a>
        </li>
        <li class="flex flex-wrap items-center gap-2">
          <a href="{{ '/about/' | relative_url }}" class="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{{ t.nav.about }}</a>
          <span class="text-gray-400 dark:text-gray-600 text-xs">|</span>
          <a href="{{ '/about/' | relative_url }}" class="text-sm hover:opacity-80" title="English">🇺🇸</a>
          <a href="{{ '/en-gb/about/' | relative_url }}" class="text-sm hover:opacity-80" title="English (UK)">🇬🇧</a>
          <a href="{{ '/ar/about/' | relative_url }}" class="text-sm hover:opacity-80" title="العربية">🇸🇦</a>
          <a href="{{ '/es/about/' | relative_url }}" class="text-sm hover:opacity-80" title="Español">🇪🇸</a>
        </li>
        <li class="flex flex-wrap items-center gap-2">
          <a href="{{ '/contact/' | relative_url }}" class="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{{ t.nav.contact }}</a>
          <span class="text-gray-400 dark:text-gray-600 text-xs">|</span>
          <a href="{{ '/contact/' | relative_url }}" class="text-sm hover:opacity-80" title="English">🇺🇸</a>
          <a href="{{ '/en-gb/contact/' | relative_url }}" class="text-sm hover:opacity-80" title="English (UK)">🇬🇧</a>
          <a href="{{ '/ar/contact/' | relative_url }}" class="text-sm hover:opacity-80" title="العربية">🇸🇦</a>
          <a href="{{ '/es/contact/' | relative_url }}" class="text-sm hover:opacity-80" title="Español">🇪🇸</a>
        </li>
        <li class="flex flex-wrap items-center gap-2">
          <a href="{{ '/submit/' | relative_url }}" class="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{{ t.submit.title }}</a>
          <span class="text-gray-400 dark:text-gray-600 text-xs">|</span>
          <a href="{{ '/submit/' | relative_url }}" class="text-sm hover:opacity-80" title="English">🇺🇸</a>
          <a href="{{ '/en-gb/submit/' | relative_url }}" class="text-sm hover:opacity-80" title="English (UK)">🇬🇧</a>
          <a href="{{ '/ar/submit/' | relative_url }}" class="text-sm hover:opacity-80" title="العربية">🇸🇦</a>
          <a href="{{ '/es/submit/' | relative_url }}" class="text-sm hover:opacity-80" title="Español">🇪🇸</a>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-violet-600 dark:text-violet-400">{{ t.sitemap.methodologies }}</h2>
      <ul class="space-y-3">
        {% assign sorted = site.methodologies | sort: "acronym" %}
        {% for m in sorted %}
          <li class="flex flex-wrap items-center gap-2">
            <a href="{{ '/methodologies/' | append: m.slug | append: '/' | relative_url }}" class="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              <span class="font-mono font-bold text-sm">{{ m.acronym }}</span> &mdash; {{ m.name_en }}
            </a>
            <span class="text-gray-400 dark:text-gray-600 text-xs">|</span>
            <a href="{{ '/methodologies/' | append: m.slug | append: '/' | relative_url }}" class="text-sm hover:opacity-80" title="English">🇺🇸</a>
            <a href="{{ '/en-gb/methodologies/' | append: m.slug | append: '/' | relative_url }}" class="text-sm hover:opacity-80" title="English (UK)">🇬🇧</a>
            <a href="{{ '/ar/methodologies/' | append: m.slug | append: '/' | relative_url }}" class="text-sm hover:opacity-80" title="العربية">🇸🇦</a>
            <a href="{{ '/es/methodologies/' | append: m.slug | append: '/' | relative_url }}" class="text-sm hover:opacity-80" title="Español">🇪🇸</a>
          </li>
        {% endfor %}
      </ul>
    </section>
  </div>
</div>
