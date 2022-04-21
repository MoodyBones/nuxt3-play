<template>
  <div class="container">
    <Html lang="en-GB" />
    <Title>n3rdle</Title>
    <Meta
      name="description"
      content="A tiny, incomplete clone of Wordle built in Nuxt 3 for a live-coding session at Vue.js Nation."
    />
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" class="flex items-center gap-2 text-green-400">
              <img
                alt="Nuxt logo"
                src="https://nuxtjs.org/design-kit/colored-logo.svg"
                height="24"
                width="24"
              />
              <strong>n3rdle</strong>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="pt-8">
      <small>Made by Mel with Daniel Roe's help :D</small>
    </footer>
  </div>
</template>
