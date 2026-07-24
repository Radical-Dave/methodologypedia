---
layout: default
title: "About"
permalink: /about/
---
{% assign lang = site.active_lang %}
{% assign t = site.data.translations[lang] %}

<div class="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
  <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-8">{{ t.about.title }}</h1>

  <div class="prose dark:prose-invert prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
    {% if lang == 'ar' %}
      <p>
        مرحبًا بكم في <strong>MethodologyPedia</strong>، الموسوعة الشاملة لمنهجيات تطوير البرمجيات.
      </p>
      <p>
        بدأ هذا الموقع كمزحة في عام 2013 كموقع ASP.NET MVC بسيط، وتطور ليصبح مجموعة تجمع بين المنهجيات الحقيقية والمنهجيات الساخرة التي يشاركها مجتمع تطوير البرمجيات.
      </p>
      <p>
        يمكنك استخدام التبديل في الصفحة الرئيسية للتنقل بين Real و Satire. تمثل المنهجيات الحقيقية ممارسات عملية، بينما تمثل المنهجيات الساخرة الجانب الفكاهي من ثقافة البرمجة.
      </p>
    {% elsif lang == 'es' %}
      <p>
        Bienvenido a <strong>MethodologyPedia</strong>, la enciclopedia definitiva de metodologías de desarrollo de software.
      </p>
      <p>
        Este sitio comenzó como un chiste en 2013 como un simple sitio ASP.NET MVC, y ha evolucionado hasta convertirse en una colección que combina metodologías reales y metodologías satíricas compartidas por la comunidad de desarrollo de software.
      </p>
      <p>
        Usa el selector de la página principal para alternar entre Real y Satire. Las metodologías reales son referencias prácticas, y las satíricas celebran el lado humorístico de la cultura de la programación.
      </p>
    {% else %}
      <p>
        Welcome to <strong>MethodologyPedia</strong>, the definitive encyclopedia of software development methodologies.
      </p>
      <p>
        This site started as a joke in 2013 as a simple ASP.NET MVC project and has evolved into a collection that combines real methodologies and satirical ones from the software community.
      </p>
      <p>
        Use the homepage toggle to switch between Real and Satire. Real entries are practical references, while satirical entries celebrate the humorous side of software culture.
      </p>
    {% endif %}
  </div>
</div>
