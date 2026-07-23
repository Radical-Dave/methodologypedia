---
layout: default
title: "Contact"
permalink: /contact/
---
{% assign lang = site.active_lang %}
{% assign t = site.data.translations[lang] %}

<div class="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
  <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-8">{{ t.contact.title }}</h1>

  <form id="contact-form" class="space-y-6">
    <input type="hidden" name="access_key" value="{{ site.web3forms_key }}">
    <input type="hidden" name="subject" value="MethodologyPedia Contact">
    <input type="checkbox" name="botcheck" class="hidden" style="display:none">

    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.contact.name_label }}</label>
      <input type="text" name="name" id="name" required
        class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all">
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.contact.email_label }}</label>
      <input type="email" name="email" id="email" required
        class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all">
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.contact.message_label }}</label>
      <textarea name="message" id="message" rows="5" required
        class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all resize-none"></textarea>
    </div>

    <button type="submit"
      class="w-full px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
      {{ t.contact.submit_button }}
    </button>
  </form>

  <div id="contact-success" class="hidden text-center py-12">
    <div class="text-5xl mb-4">&#10003;</div>
    <p class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ t.contact.success }}</p>
  </div>

  <script>
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var form = this;
      var data = new FormData(form);
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        .then(function(r) { return r.json(); })
        .then(function() {
          form.classList.add('hidden');
          document.getElementById('contact-success').classList.remove('hidden');
        });
    });
  </script>
</div>
