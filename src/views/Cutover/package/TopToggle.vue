<!--
 * @Descripttion: 切换动画按钮组件
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-08-28 09:12:55
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-09-27 16:36:25
-->
<template>
  <div class="top-toggle">
    <h1 class="page-title" @click="navHome">{{ title }}</h1>
    <div class="btn-wrap">
      <div
        class="toggle-btn"
        v-for="(item, i) in toggleArr"
        :key="i"
        @mousemove="showMenu(i)"
        @mouseleave="showMenu(-1)"
      >
        <p class="toggle-text">{{ item.title }}</p>
        <transition name="toggleBtn">
          <div class="pull-menu" v-show="i === pullActive">
            <ul class="menu-wrap">
              <li
                v-for="(ele, j) in item.child"
                :key="j"
                class="menu-list"
                @click="selectListFn(ele.title)"
              >
                {{ ele.title }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const pullActive = ref(-1);
    const title = ref("切换动画");
    const toggleArr = ref([
      {
        title: "MOVE",
        child: [
          {
            title: "moveLeft",
            id: "1-1"
          },
          {
            title: "moveRight",
            id: "1-2"
          },
          {
            title: "moveTop",
            id: "1-3"
          },
          {
            title: "moveBottom",
            id: "1-4"
          }
        ]
      },
      {
        title: "SCALE",
        child: [
          {
            title: "scaleDown",
            id: "2-1"
          },
          {
            title: "scaleUp",
            id: "2-2"
          },
          {
            title: "scaleUpAndLeft",
            id: "2-3"
          },
          {
            title: "scaleDownAndUp",
            id: "2-4"
          },
          {
            title: "scaleLine",
            id: "2-5"
          },
          {
            title: "scaleCircle",
            id: "2-5"
          }
        ]
      },
      {
        title: "SLIDE",
        child: [
          {
            title: "slide",
            id: "2-1"
          }
        ]
      }
    ]);
    function showMenu(i) {
      this.pullActive = i;
    }
    function selectListFn(e) {
      console.log(this);
      emit("select-list-fn", e);
      this.pullActive = -1;
    }
    function navHome() {
      this.$router.replace({
        path: "/"
      });
    }
    return {
      pullActive,
      toggleArr,
      title,
      showMenu,
      selectListFn,
      navHome
    };
  }
};
</script>

<style lang="less" scoped>
.top-toggle {
  height: 60px;
  padding: 0 30px;
  position: relative;
  z-index: 10;
  background: #f1f1f1;
}
.top-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title {
  margin: 0;
  padding: 0;
}
.btn-wrap {
  display: flex;
}
.toggle-btn {
  position: relative;
  box-sizing: border-box;
  width: 100px;
  height: 60px;
  line-height: 60px;
  .toggle-text {
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    z-index: 2;
  }
  .pull-menu {
    position: absolute;
    box-sizing: border-box;
    top: 50px;
    left: -30px;
    z-index: 2;
    background: #fff;
    padding: 16px 0;
    width: 160px;
    z-index: 1;
    border-radius: 4px;
    .menu-list {
      height: 30px;
      line-height: 30px;
      text-align: left;
      cursor: pointer;
      padding: 0 16px;
    }
    .menu-list:hover {
      background: aquamarine;
    }
  }
}
@import url("../../../style/toggleBtn.less");
</style>
