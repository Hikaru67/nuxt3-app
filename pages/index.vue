<script lang="ts">
import SingleSlide from "~/components/templates/SingleSlide.vue";

export default {
  components: { SingleSlide },
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
      <div
        id="ctl00_divAlt1"
        class="altcontent1 cmszone"
      >
        <div class="top-comics Module Module-183">
          <div class="ModuleContent">
            <h2 class="page-title">Truyện đề cử <i class="fa fa-angle-right"></i></h2>
            <div class="items-slide">
              <div
                class="owl-carousel clearfix owl-theme"
                style="opacity: 1; display: block;"
              >
                <div class="owl-wrapper-outer">
                  <div
                    class="owl-wrapper"
                    style="width: 4060px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);"
                  >
                    <div
                      v-for="(manga, index) in listManga"
                      :key="index"
                      class="owl-item"
                      style="width: 203px;"
                    >
                      <single-slide :manga="manga" />
                    </div>
                  </div>
                </div>

                <div
                  class="owl-controls clickable"
                  style="display: block;"
                >
                  <div class="owl-pagination">
                    <div class="owl-page active"><span class=""></span></div>
                    <div class="owl-page"><span class=""></span></div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                class="prev"
                aria-label="Trước"
              >
              </a>
              <a
                href="#"
                class="next"
                aria-label="Sau"
              >
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>