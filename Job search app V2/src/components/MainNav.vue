<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a class="flex h-full items-center text-xl" :href="url">{{
          company
        }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full"
            >
              <a href="#" class="flex h-full items-center py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Job Searcher",
      url: "http://2manyartistz.com/",
      menuItems: [
        "Teamz",
        "Locationz",
        "Life @ here",
        "How we hire",
        "Studentz",
        "Jobz",
      ],
    };
  },
};
</script>
