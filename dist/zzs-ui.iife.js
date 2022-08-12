var ZzsUI = function(exports, vue) {
  "use strict";
  const ZButton = vue.defineComponent({
    name: "ZButton",
    setup() {
      return () => {
        return vue.createVNode("button", null, [vue.createTextVNode("my button")]);
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
  exports.ZButton = ZButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
