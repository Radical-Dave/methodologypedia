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
        مرحبًا بكم في <strong>MethodologyPedia</strong>، الموسوعة الشاملة لمنهجيات تطوير البرمجيات التي على الأرجح لا يجب أن توجد.
      </p>
      <p>
        بدأ هذا الموقع ك玩笑 في عام 2013 كموقع ASP.NET MVC بسيط، وتطور ليصبح مجموعة متنوعة من المنهجيات الساخرة التي يشاركها مجتمع تطوير البرمجيات. من TDD (تطوير بالشاي) إلى ZDD (تطوير Zzzzz)، نحتفي بجانب المزاح من ثقافة البرمجة.
      </p>
      <p>
        يرجى عدم استخدام أي من هذه المنهجيات في إنتاج العمل. نحن لسنا مسؤولين عن أي مشاريع فاشلة ناتجة عن تطبيق هذه المنهجيات بشكل جاد.
      </p>
    {% elsif lang == 'es' %}
      <p>
        Bienvenido a <strong>MethodologyPedia</strong>, la enciclopedia definitiva de metodologías de desarrollo de software que probablemente no deberían existir.
      </p>
      <p>
        Este sitio comenzó como un chiste en 2013 como un simple sitio ASP.NET MVC, y ha evolucionado hasta convertirse en una colección diversa de metodologías satíricas compartidas por la comunidad de desarrollo de software. Desde TDD (Desarrollo Impulsado por Té) hasta ZDD (Desarrollo Impulsado por Zzzzz), celebramos el lado humorístico de la cultura de la programación.
      </p>
      <p>
        Por favor, no uses ninguna de estas metodologías en producción. No somos responsables de ningún proyecto fallido que resulte de aplicar estas metodologías en serio.
      </p>
    {% else %}
      <p>
        Welcome to <strong>MethodologyPedia</strong>, the definitive encyclopedia of software development methodologies that probably shouldn't exist.
      </p>
      <p>
        This site started as a joke back in 2013 as a simple ASP.NET MVC website, and has evolved into a diverse collection of satirical methodologies shared by the software development community. From TDD (Tea Driven Development) to ZDD (Zzzzz Driven Development), we celebrate the humorous side of programming culture.
      </p>
      <p>
        Please do not use any of these methodologies in production work. We are not responsible for any failed projects resulting from the serious application of these methodologies.
      </p>
    {% endif %}
  </div>
</div>
