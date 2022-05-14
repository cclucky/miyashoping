<template>
  <div class="pagination">
    <button @click="$emit('jump', pageNo - 1)" :disabled="pageNo == 1">
      上一页
    </button>

    <button
      v-if="startAndEnd.start > 1"
      @click="$emit('jump', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startAndEnd.start > 2">...</button>

    <button
      v-for="(item, index) in middleNum"
      :key="index"
      @click="jump(item)"
      :class="{ active: pageNo == item }"
    >
      {{ item }}
    </button>

    <button
      v-if="startAndEnd.end < PagesLength - 1"
      @click="$emit('jump', pageNo + 1)"
    >
      ...
    </button>
    <button
      v-if="startAndEnd.end < PagesLength"
      @click="$emit('jump', PagesLength)"
      :class="{ active: pageNo == PagesLength }"
    >
      {{ PagesLength }}
    </button>
    <button @click="pageNo + 1" :disabled="pageNo == PagesLength">
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [],
    };
  },
  name: "Pagination",
  //currents 需要连续的五页
  props: ["currents", "total", "pageSize", "pageNo"],
  computed: {
    PagesLength() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndEnd() {
      const { currents, PagesLength, pageNo } = this;
      let start = 0;
      let end = 0;
      if (currents > PagesLength) {
        start = 1;
        end = PagesLength;
      } else {
        start = pageNo - parseInt(currents / 2);
        end = pageNo + parseInt(currents / 2);
        if (start < 1) {
          start = 1;
          end = currents;
        }
        if (end > PagesLength) {
          end = PagesLength;
          start = PagesLength - currents + 1;
        }
      }
      return { start, end };
    },
    middleNum() {
      const { startAndEnd } = this;
      let arr = [];
      for (let i = startAndEnd.start; i <= startAndEnd.end; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    jump(item) {
      this.$emit("jump", item);
    },
    goUp() {},
    goNext() {},
  },
  created() {
    // this.getPagesLength()
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>