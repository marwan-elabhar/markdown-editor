<script lang="ts">
import { defineComponent, ref } from "vue";
import textToHTML from "../helpers/textToHTML";
import { onMounted } from "vue";
import { collection, doc, updateDoc, query, getDocs } from "firebase/firestore";
import firestore from "../firebase";

export default defineComponent({
  setup() {
    const markdown = ref("");
    const convertedText = ref("");
    const docID = "aMqv2YGMu7tBbCfDUR9u";
    const markdownDoc = doc(firestore, "markdowns", docID);

    async function convertToHTML(): Promise<void> {
      convertedText.value = textToHTML(markdown.value);
      await updateDoc(markdownDoc, {
        markdown: markdown.value,
      });
    }

    async function getMarkdowns(): Promise<void> {
      const q = query(collection(firestore, "markdowns"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        markdown.value = doc.data().markdown;
      });
      convertedText.value = textToHTML(markdown.value);
    }

    onMounted(() => {
      getMarkdowns();
    });
    return { markdown, convertedText, convertToHTML };
  },
});
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="preview-box d-flex justify-content-center flex-wrap">
      <div class="textarea-side">
        <textarea
          class="textarea-style w-100"
          v-model="markdown"
          @keyup="convertToHTML"
        ></textarea>
      </div>
      <div class="markdown-side">
        <div v-html="convertedText" class="markdown-style" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.preview-box
  width: 60vw
  height: 65vh
  border-radius: 12px
.textarea-side
  width: 50%
  background: #eee
  height: 100%
.textarea-style
  resize: none
  height: 100%
  padding: 12px
  border: none
  background-color: #ccc

.markdown-side
  width: 50%
  background: #ddd
  height: 100%

.markdown-style
  padding: 12px

@media (max-width: 425px)
  .textarea-side, .markdown-side
    width: 100%
  .preview-box
    display: block !important
</style>