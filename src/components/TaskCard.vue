<template>
  <div class="task-card">
    <div
        @click="removeTask"
        class="task-card__remove-button"
    >
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="task-card__header">{{title}}</div>
    <div class="task-card__content">{{ content }}</div>
    <router-link :to="{name: 'editTask', params:{ taskId: id} }" class="task-card__edit-button">
      <i class="fa-sharp fa-solid fa-pen"></i>
    </router-link>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'TaskCard',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(['deleteTask', 'getTasks']),

    async removeTask () {
      try {
        await this.deleteTask(this.id)
        await this.getTasks()
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

