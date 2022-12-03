<script>
import MarkdownEditor from "@/components/MarkdownEditor.vue";
import AppLayout from "@/components/AppLayout.vue";
export default {
  components: {
    AppLayout,
    MarkdownEditor,
  },

  data() {
    return {};
  },
};
</script>
<template>
  <AppLayout>
    <MarkdownEditor />
  </AppLayout>
</template>
<style scoped lang='sass'></style>