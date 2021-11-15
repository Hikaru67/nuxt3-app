<script lang="ts">
import Slider from "~/components/templates/Slider.vue";

export default {
  components: { Slider },
  layout: "default",
};
</script>

<script lang="ts" setup>
const { data }: { data: any } = await useFetch("/api/nettruyen");
const listManga = data._value;
</script>

<template>
  <main>
    <div class="container">
      <slider :list-manga="listManga" />
    </div>
  </main>
</template>