<template lang="pug">
.repos-item
  .repos-left
    h3 {{ repos.name }}
    p Кол-во звёзд: {{ repos.stargazers_count }} ⭐
    p Дата добавления: {{ new Date(repos.created_at).toLocaleDateString() }}
  a.repos__link(:href="repos.html_url") ПОСЕТИТЬ
</template>
<script>
export default {
  props: {
    repos: Object,
  },
};
</script>
<style lang="scss">
.repos-item {
  margin: 20px auto;
  max-width: 585px;
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 18px;
  }
  p{
    font-size: 14px;
    margin: 4px 0;
  }
  a{
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 300;
    background: #3F3F3F;
    border-radius: 6px;
  }
}
</style>