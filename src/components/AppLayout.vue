<script>
export default {
  setup() {},
};
</script>
<template>
  <div class="page-layout w-100">
    <div class="page-title d-flex justify-content-center">
        <h1>Markdown Editor</h1>
    </div>
    <slot/>
  </div>
</template>
<style scoped lang='sass'>
.page-layout
    min-height: 100vh
.page-title
    padding: 24px    

</style>