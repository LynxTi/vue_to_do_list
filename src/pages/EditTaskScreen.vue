<template>
  <CreateNewTaskBlock :id="taskId"/>
</template>

<script>
import CreateNewTaskBlock from "@/components/CreateNewTaskBlock.vue";
export default {
  name: 'EditTaskScrenn',
  components: {CreateNewTaskBlock},

  props: {
    taskId: {
      type: String
    }
  },
}
</script>

