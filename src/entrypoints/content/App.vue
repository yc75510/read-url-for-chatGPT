<script lang="ts" setup>
import { onMounted, h } from 'vue';
import Toaster from '@/components/ui/toast/Toaster.vue'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { extractContent, copyText } from '@/utils/content-extractor';

const { toast } = useToast()
const isModalOpened = defineModel<boolean>("isModalOpened")
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
              isModalOpened.value = true
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

    <Dialog v-model:open="isModalOpened">
      <DialogContent class="ubot-sm:max-w-[425px] ubot-grid-rows-[auto_minmax(0,1fr)_auto] ubot-p-0 ubot-max-h-[90dvh]">
        <DialogHeader class="ubot-p-6 ubot-pb-0">
          <DialogTitle>ChatGPT-ready Markdown</DialogTitle>
        </DialogHeader>
        <div class="ubot-grid ubot-gap-4 ubot-py-4 ubot-overflow-y-auto ubot-px-6">
          <div class="ubot-flex ubot-flex-col ubot-justify-between ubot-h-[300dvh]">
            <pre>{{ extractContentData.markdown }}</pre>
          </div>
        </div>
        <DialogFooter class="ubot-p-6 ubot-pt-0">
          <Button type="button" variant="secondary">
            <span @click="isModalOpened = false">Close</span>
          </Button>
          <Button type="submit">
            <span @click="() => {
              copyText(extractContentData.markdown);
              isModalOpened = false;
            }">Copy & Close</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style scoped></style>
