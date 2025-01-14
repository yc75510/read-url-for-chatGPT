<script lang="ts" setup>
import { onMounted, h } from 'vue';
import Toaster from '@/components/ui/toast/Toaster.vue'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { extractContent, copyText } from '@/utils/content-extractor';

const { toast } = useToast()
const isoModalOpened = defineModel<boolean>("isoModalOpened")
const extractContentData = ref({ markdown: '' })

onMounted(() => {
  chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'extractContent') {
      try {
        extractContentData.value = extractContent(document)

        console.log(extractContentData.value);
        await copyText(extractContentData.value.markdown);

        toast({
          title: 'Success!',
          description: 'Copied to clipboard! Go chatGPT and paste.',
          action: h(ToastAction, {
            altText: 'View Markdown',
            onClick: () => {
              isoModalOpened.value = true
            },
          }, {
            default: () => {
              return 'View Markdown'
            },
          }),
        });
      } catch (error) {
        console.log(error);

        toast({
          title: 'Failed!',
          description: 'Sorry! Something went wrong, please try again.',
          variant: 'destructive',
        });
      }
    }
    return true;
  });
});
</script>

<template>
  <div>
    <Toaster />

    <AlertDialog v-model:open="isoModalOpened">
      <AlertDialogContent>
        <AlertDialogTitle>
          Markdown
        </AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <pre>{{ extractContentData.markdown }}</pre>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction @click="copyText(extractContentData.markdown)">Copy & Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  </div>
</template>

<style scoped></style>
