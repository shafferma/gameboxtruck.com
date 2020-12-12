<template>
  <div>
    <CallToActionBanner />
    <Content />
    <Features />
    <CallToActionText />
  </div>
</template>

<script>
import CallToActionBanner from '@/components/CallToActionBanner.vue';
import CallToActionText from '@/components/CallToActionText.vue';
import Content from '@/components/Content.vue';
import Features from '@/components/Features.vue';

export default {
  components: {
    CallToActionBanner,
    CallToActionText,
    Content,
    Features,
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
