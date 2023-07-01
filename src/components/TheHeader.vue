<template>
  <div class="the-header">
  <router-link :to="{name: 'home' }">
    <div class="the-header__logo">{{ $t('global.logo_text')}}</div>
  </router-link>
  <router-link :to="{name: 'createNew' }">
    <ButtonBlock>
      {{$t('global.create_task')}}
    </ButtonBlock>
  </router-link>
  </div>

</template>

<script>
import ButtonBlock from "@/components/ui/bottonBlock/buttonBlock.vue";
export default {
  components: {ButtonBlock}
}
</script>
