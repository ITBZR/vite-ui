import { defineComponent, createVNode, createTextVNode } from "vue";
const ZButton = defineComponent({
  name: "ZButton",
  setup() {
    return () => {
      return createVNode("button", null, [createTextVNode("my button")]);
    };
  }
});
const components = [ZButton];
const entry = {
  install(app) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  }
};
export {
  ZButton,
  entry as default
};
