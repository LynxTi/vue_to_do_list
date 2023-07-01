<template>
  <div>
    <taskCard
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :content="task.content"
    />
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: 'TasksList',
  components: {TaskCard},
  data() {
    return {

    }
  },
  async created() {
    try {
      await this.getTasks();
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    ...mapActions(['getTasks', 'getTaskById'])
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>