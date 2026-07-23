---
layout: default
title: "Submit a Methodology"
permalink: /submit/
---
{% assign lang = site.active_lang %}
{% assign t = site.data.translations[lang] %}

<div class="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
  <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-3">{{ t.submit.title }}</h1>
  <p class="text-gray-600 dark:text-gray-400 mb-8">{{ t.submit.description }}</p>

  <form id="submit-form" class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.submit.name_label }}</label>
        <input type="text" name="name" id="name" required
          class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all">
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.submit.email_label }}</label>
        <input type="email" name="email" id="email" required
          class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all">
      </div>
    </div>

    <div>
      <label for="methodology_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.submit.methodology_name_label }}</label>
      <input type="text" name="methodology_name" id="methodology_name" required placeholder="e.g. TDD"
        class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all font-mono">
    </div>

    <div>
      <label for="methodology_full_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.submit.methodology_full_name_label }}</label>
      <input type="text" name="methodology_full_name" id="methodology_full_name" required placeholder="e.g. Tea Driven Development"
        class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all">
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{{ t.submit.description_label }}</label>
      <textarea name="description" id="description" rows="5" required
        class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all resize-none"></textarea>
    </div>

    <button type="submit"
      class="w-full px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
      {{ t.submit.submit_button }}
    </button>
  </form>

  <div id="submit-success" class="hidden text-center py-12">
    <div class="text-5xl mb-4">&#10003;</div>
    <p class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ t.submit.success }}</p>
  </div>

  <script>
    document.getElementById('submit-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var form = this;
      var payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        methodology_name: document.getElementById('methodology_name').value,
        full_name: document.getElementById('methodology_full_name').value,
        description: document.getElementById('description').value
      };
      fetch('https://api.github.com/repos/Radical-Dave/methodologypedia/dispatches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token {{ site.dispatch_token }}',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          event_type: 'submit_methodology',
          client_payload: payload
        })
      })
      .then(function(r) {
        if (r.ok) {
          form.classList.add('hidden');
          document.getElementById('submit-success').classList.remove('hidden');
        } else {
          alert('Submission failed. Please try again.');
        }
      })
      .catch(function() {
        alert('Network error. Please try again.');
      });
    });
  </script>
</div>
