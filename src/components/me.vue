<template>
 <div id="me"></div>
</template>

<script>
export default {
  mounted() {
    var s =
      "_" +
      Math.random()
        .toString(36)
        .slice(2);
    console.log(s, window.slotbydup);
    this.advert = s;
    $("#me").append('<div id="' + s + '"></div>');
    (window.slotbydup = window.slotbydup || []).push({
      id: "5874769",
      container: s,
      size: "20,3",
      display: "float"
    });
    console.log($("#"+s))
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="stylus">

</style>
