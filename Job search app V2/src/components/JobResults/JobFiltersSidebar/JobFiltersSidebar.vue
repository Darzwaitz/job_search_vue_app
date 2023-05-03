<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <collapsible-accordian header="Job types">
        Temp content
      </collapsible-accordian>

      <collapsible-accordian header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Between Vue" type="checkbox" class="mr-3" />
                <label for="Between Vue">Between Vue</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Et Vue" type="checkbox" class="mr-3" />
                <label for="Et Vue">Et Vue</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Vue unt whose army" type="checkbox" class="mr-3" />
                <label for="Vue unt whose army">Vue unt whose army</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsible-accordian>
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import CollapsibleAccordian from "@/components/Shared/CollapsibleAccordian.vue";

export default {
  name: "JobFiltersSidebar",
  components: { ActionButton, CollapsibleAccordian },
};
</script>
