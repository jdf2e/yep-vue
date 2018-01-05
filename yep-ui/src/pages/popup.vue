<template>
    <main>

        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-Popup</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <button class="button button--default button--large" @click="popupVisible1 = true">
                        <label class="button-text">从上侧弹出</label>
                    </button>
                    <button class="button button--default button--large" ref="button" @click="popupVisible2 = true">
                        <label class="button-text">从中部弹出</label>
                    </button>
                    <button class="button button--default button--large" @click="popupVisible3 = true" >
                        <label class="button-text">从右部弹出</label>
                    </button>
                    <button class="button button--default button--large" @click="marryStatus">
                        <label class="button-text">从下侧弹出</label>
                    </button>
                    <button class="button button--default button--large" @click="handleAreaPickShow">
                        <label class="button-text">地区选择组件</label>
                    </button>
                </div>

            </div>
        </div>
        <Yep-popupExternal v-model="popupVisible1"
                       position="top"
                       class="popup-external-1"
                       :modal="false">
            <p>更新成功</p>
        </Yep-popupExternal>
        <Yep-popupExternal v-model="popupVisible2"
                       popup-transition="popup-fade"
                       class="popup-external-2"
                       :style="{ top: buttonBottom + 10 + 'px' }">
            <h1>popup</h1>
            <p>popup 从中部弹出</p>
        </Yep-popupExternal>

        <Yep-popupExternal v-model="popupVisible3" position="right" class="popup-external-3" :modal="false">
            <button @click="popupVisible3 = false" size="large" type="primary">关闭 popup</button>
        </Yep-popupExternal>


        <Yep-popup :contentList="contentList" :isShow="popupShow" @popupClick="popupClick" @liClick="liClick"></Yep-popup>
        <Yep-areaPick @closeAreaPick="closeAreaPick" :isShow="areaPickShow"
                  propsAreaListInfo="2,2813,51976"></Yep-areaPick>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.Yep-popup-external {
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  transition: 0.2s ease-out;
  &-wrapper {
    padding: 0 20px;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    button:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

.popup-external-1 {
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  p {
    line-height: 50px;
    color: #fff;
    font-size: 14px;
  }
}

.popup-external-2 {
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  transform: translate(-50%, 0);

  h1 {
    font-size: 20px;
    color: #26a2ff;
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
}

.popup-external-2::before {
  display: inline-block;
  width: 0;
  height: 0;
  border: solid transparent;
  border-width: 10px;
  border-bottom-color: #fff;
  content: "";
  position: absolute;
  top: -20px;
  right: 50px;
}

.popup-external-3 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.popup-external-3 .button {
  position: absolute;
  width: 90%;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}

.popup-external-4 {
  width: 100%;
  .picker-slot-wrapper,
  .picker-item {
    backface-visibility: hidden;
  }
}
</style>

<script>
export default {
  data() {
    return {
      areaPickShow: false,
      payPassConfirmShow: false,
      popupShow: false,
      contentList: [
          { text: '未婚', cur: true },
          { text: '已婚', cur: false },
          { text: '离异', cur: false },
      ],
        // popup external
      popupVisible1: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
      buttonBottom: 0,
      dateSlots: [
        {
          flex: 1,
          values: [
            '2016-01',
            '2016-02',
            '2016-03',
            '2016-04',
            '2016-05',
            '2016-06',
          ],
          className: 'slot1',
          textAlign: 'right',
        },
        {
          divider: true,
          content: '-',
          className: 'slot2',
        },
        {
          flex: 1,
          values: [
            '2016-01',
            '2016-02',
            '2016-03',
            '2016-04',
            '2016-05',
            '2016-06',
          ],
          className: 'slot3',
          textAlign: 'left',
        },
      ],
    };
  },
  watch: {
    popupVisible1(val) {
      if (val) {
        setTimeout(() => {
          this.popupVisible1 = false;
        }, 2000);
      }
    },
  },
  methods: {
    handleAreaPickShow() {
      this.areaPickShow = true;
    },
    closeAreaPick(comAreaListInfo, addressListStr) {
      alert(comAreaListInfo);
      alert(addressListStr);
      this.areaPickShow = false;
    },

    marryStatus() {
      this.popupShow = true;
    },
    popupClick() {
      this.popupShow = false;
    },
    liClick(index) {
      this.popupShow = false;
      this.contentList.forEach((element, i) => {
        if (i === index) {
          this.contentList[i].cur = true;
        } else {
          this.contentList[i].cur = false;
        }
      });
      alert(`${index}: ${this.contentList[index].text}`);
    },

    onDateChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      this.dateStart = values[0];
      this.dateEnd = values[1];
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.buttonBottom = this.$refs.button.getBoundingClientRect().bottom;
    });
  },
  components: {},
};

</script>

