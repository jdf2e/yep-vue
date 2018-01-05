import Vue from 'vue';
import confirmComponent from './component.vue';

const toastConstructor = Vue.extend(confirmComponent);

let instanceBack;

const Toast = (options) => {
  // 删除页面上存在的toast
  if (instanceBack) {
    instanceBack.vm.visible = false;
  }

  // 新建一个vue对象
  const instance = new toastConstructor({
    data: {
      title: options.title,
      message: options.message,
      leftTxt: options.leftTxt,
      rightTxt: options.rightTxt,
    },
    methods: {
      cancel: options.cancel ? options.cancel : () => {},
      submit: options.submit ? options.submit : () => {},
    },
  });

  // 保存这个对象
  instanceBack = instance;

  // 生成这个vue的html文件并插入body
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;

  return instance.vm;
};

export default Toast;
