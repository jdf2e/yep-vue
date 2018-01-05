<template>
    <div class="page-indexlist">
        <h1 class="page-title">
            <span>Yep-Index-list</span>
            <router-link class="page-back router-link-active" to="/">
                返回
                <i class="Yepui Yepui-back"></i>
            </router-link>
        </h1>
        <div class="page-indexlist-wrapper">
            <Yep-index-list >
                <Yep-index-section v-for="(item,key) in alphabet" :index="item.initial" :key="key">
                    <Yep-cell v-for="(cell, index) in item.cells" :title="cell" :key="index">{{cell}}</Yep-cell>
                </Yep-index-section>
            </Yep-index-list>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
.indexlist {
  &-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px;
  }

  &-wrapper {
    width: 100%;
    border-top: solid 1px #ddd;
  }
}
</style>

<script type="text/babel">
const NAMES = [
  'Aaron',
  'Alden',
  'Austin',
  'Baldwin',
  'Braden',
  'Carl',
  'Chandler',
  'Clyde',
  'David',
  'Edgar',
  'Elton',
  'Floyd',
  'Freeman',
  'Gavin',
  'Hector',
  'Henry',
  'Ian',
  'Jason',
  'Joshua',
  'Kane',
  'Lambert',
  'Matthew',
  'Morgan',
  'Neville',
  'Oliver',
  'Oscar',
  'Perry',
  'Quinn',
  'Ramsey',
  'Scott',
  'Seth',
  'Spencer',
  'Timothy',
  'Todd',
  'Trevor',
  'Udolf',
  'Victor',
  'Vincent',
  'Walton',
  'Willis',
  'Xavier',
  'Yvonne',
  'Zack',
  'Zane',
];

export default {
  data() {
    return {
      alphabet: [],
    };
  },

  created() {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((initial) => {
      const cells = NAMES.filter(name => name[0] === initial);
      this.alphabet.push({
        initial,
        cells,
      });
    });
  },
};

</script>
