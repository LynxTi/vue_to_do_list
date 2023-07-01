<template>
  <div class="create-new-task">
    <form class="create-new-task__form" @submit.prevent="submitForm">
      <inputBlock
          :label="$t('global.title')"
          :placeholder="$t('global.placeholder_title')"
          v-model="title"
      />
      <InputBlock
          :label="$t('global.task')"
          :placeholder="$t('global.placeholder_content')"
          v-model="content"
      />
      <div class="create-new-task__buttons-wrapper">
        <ButtonBlock @click="canselButton">{{$t('global.cansell')}}</ButtonBlock>
        <ButtonBlock v-if="$route.name !== 'editTask'" :disabled="getDisabled">{{$t('global.create')}}</ButtonBlock>
        <ButtonBlock v-else :disabled="getDisabled">{{$t('global.edit')}}</ButtonBlock>

      </div>
    </form>
  </div>
</template>

<script>
import InputBlock from "@/components/ui/InputBlock/InputBlock.vue";
import {mapActions} from "vuex";
import ButtonBlock from "@/components/ui/bottonBlock/buttonBlock.vue";
export default {
name: 'CreateNewTaskBlock',
  components: {ButtonBlock, InputBlock},
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
     title: '',
     content: '',
     task: null
    }
  },
  methods: {
  ...mapActions(['createNewTask', "editTask", "getTaskById"]),

    async submitForm() {
      if (this.title && this.content) {
        try {
          this.id? await this.editCurrentTask() : await this.createNew()
        } catch (e) {
          console.error(e)
        }
        await this.$router.push({name: 'home'})
      }
    },
    async createNew() {
      await this.createNewTask({id: this.id , title: this.title, content: this.content})
    },
    async editCurrentTask () {
      await this.editTask({id: this.id , title: this.title, content: this.content})
    },
    async canselButton() {
      await this.$router.push({name: 'home'})

    }
  },
  async created() {
    if (this.id) {

      this.task = await this.getTaskById(this.id)
      this.title =  this.task.title
      this.content =  this.task.content
    }
  },
  computed: {
    getDisabled() {
      if (!this.title || !this.content) {
        return true
      }

      if (this.task) {
        if (this.title === this.task?.title && this.content === this.task?.content ) return true
      }
      return false
    }
  }
}
</script>

