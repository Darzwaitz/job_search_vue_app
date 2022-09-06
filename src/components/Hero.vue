<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-100">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          5 columnz
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">
          5 columnz
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700">
          1 columnz
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HeroMainPage",
};
</script>
