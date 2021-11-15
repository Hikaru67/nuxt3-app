<script>
export default {
  props: {
    manga: {
      type: Object,
      value: {}
    }
  },
  data: () => ({
  }),
}
</script>

<template>
  <div
    class="owl-item"
    style="width: 203px;"
  >
    <div class="item">
      <a href="http://www.nettruyenpro.com/truyen-tranh/chien-hon-tuyet-the-30951">
        <img
          :src="manga.image"
          class="lazyOwl"
          style="display: inline;"
        >
      </a>
      <div class="slide-caption">
        <h3>
          <a
            href="http://www.nettruyenpro.com/truyen-tranh/chien-hon-tuyet-the-30951"
            :title="manga.title"
          >
            {{manga.title}}
          </a>
        </h3>
        <a
          href="http://www.nettruyenpro.com/truyen-tranh/chien-hon-tuyet-the/chap-210/786358"
          title="manga.chapter"
        >{{manga.chapter}}</a>
        <span class="time">
          <i class="fa fa-clock-o">
          </i>{{manga.time}}</span>
      </div>
    </div>
  </div>
</template>