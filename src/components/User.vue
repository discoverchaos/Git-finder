<template lang="pug">
.user-content(v-if="user")
  .user-content-left
    img(:src="user.avatar_url", alt="alt")
    a(:href="user.html_url") ПОСЕТИТЬ
  .user-content-right
    h2 {{ user.login }}
    h3 Репозиториев: <span>{{ user.public_repos }}</span>
    h4 Создан: <span>{{ user.created_at }}</span>
    h5 Подписчиков: <span>{{ user.followers }}</span>
    h6 Подписок: <span>{{ user.following }}</span>
.sort
  h2 Сортировка
  .sort-box
    button.sort-box__btn(
      v-for="(btn, index) in btns",
      :key="btn.name"
      :class="{active: isActive == index}"
      @click="sort(index, btn.sortType)") {{ btn.name }}
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isActive: 0,
      btns: [
        { name: "ИМЯ", sortType: 'name' },
        { name: "ЗВЕЗДЫ", sortType: 'stargazers_count' },
        { name: "ДАТА", sortType: 'created_at' }],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapMutations(['changeSort']),
    sort(index, sortType) {
      this.isActive = index
      this.changeSort(sortType)
    }
  },
};
</script>
<style lang="scss">
.user-content {
  width: 337px;
  height: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 32px;
  margin: 20px auto;
  background: #ffffff;
  border-radius: 6px;
  gap: 10px;
  &-left {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3px;
    a {
      width: 100px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3f3f3f;
      border-radius: 6px;
      color: white;
      font-size: 14px;
      font-weight: 300;
    }
    img {
      width: 100px;
      height: 100px;
      border: 1px solid #3f3f3f;
      border-radius: 6px;
    }
  }
}
.sort {
  margin: 20px auto;
  text-align: center;
  &-box {
    background: #e0e0e0;
    border-radius: 4px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin: 20px auto;
    &__btn{
      width: 112px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #E0E0E0;
      border-radius: 4px;
      outline: none;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      &.active{
        background: white;
      }
    }
  }
}
</style>