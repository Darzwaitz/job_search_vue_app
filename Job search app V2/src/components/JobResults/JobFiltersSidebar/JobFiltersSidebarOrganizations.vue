<template>
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
</template>

<script>
import CollapsibleAccordian from "@/components/Shared/CollapsibleAccordian.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: { CollapsibleAccordian },
};
</script>
