<template>
  <div class="card">
    <div class="card-header align-center"><slot name="header"></slot></div>
    <div class="card-content"><slot name="content"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['header', 'content']
}
</script>

<style scoped>
.card {
  position: relative;

  width: 100%;
}

.card-header {
  font-weight: bold;
  font-size: 1.5em;
  position: relative;
  height: 2em;
  width: 100%;
  background: var(--light);
  padding: 0;
  margin: 0;
  padding-top: .5em;
  border-radius: 6px 6px 0 0;
  box-sizing: border-box;
}

.card-content {
  position: relative;
  width: 100%;
  padding: 2em 3em 5em 3em;
  background: var(--lighter);
  border-radius: 0 0 6px 6px;
  box-sizing: border-box;
}
</style>
