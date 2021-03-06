import Vue from 'vue';
import toastComponent from './component.vue';

const ToastConstructor = Vue.extend(toastComponent);

let instanceBack;

const Toast = (options) => {
  // 删除页面上存在的toast
  if (instanceBack) {
    instanceBack.vm.visible = false;
  }

  // 参数format
  options = options || { message: '' };
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  // 新建一个vue对象
  const instance = new ToastConstructor({
    data: options,
  });

  // 保存这个对象
  instanceBack = instance;

  // 生成这个vue的html文件并插入body
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;

  setTimeout(() => {
    instance.vm.visible = false;
    instance.vm.success && instance.vm.success();
  }, instance.duration);

  return instance.vm;
};

export default Toast;
