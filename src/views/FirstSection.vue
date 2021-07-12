<template>
  <div>
    <input type="number" v-model="numbers[0]" placeholder="Number 1" />
    <input type="number" v-model="numbers[1]" placeholder="Number 2" />

    <div>Sum: {{ sum() }}</div>
  </div>
</template>

<script>
//todo: add validation

export default {
  name: "FirstSection",
  data: () => {
    return {
      numbers: [],
    };
  },
  methods: {
    sum() {
      return this.numbers.reduce((acc, item) => {
        return item ? parseInt(acc) + parseInt(item) : acc;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
