<template>
<div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Category select: </label>
    <select v-model="selected" @change="emitEventChanged">
      <option v-for="option in options" :key="option.value" v-bind:value="{ id: option.value, text: option.text }">
        {{ option.text }}
      </option>
    </select>
  </div>
</div>

</template>
<script>
export default {
  props: {
      option: [
        { text: 'Food', value: 1 },
        { text: 'Cookery', value: 2 },
        { text: 'Travel', value: 3 },
        { text: 'Health', value: 4 },
     ]
   },
  data() {
    return {
      selected: {},
      options: [
        { text: 'Food', value: 1 },
        { text: 'Cookery', value: 2 },
        { text: 'Travel', value: 3 },
        { text: 'Health', value: 4 },
     ]
    }
  },
  methods: {
    emitEventChanged () {
      this.$emit('CustomEventInputChanged', this.selected.id);
    }
  }
}
</script>
<style scoped>
</style>