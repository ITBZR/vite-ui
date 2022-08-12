(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ZzsUI = {}, global.Vue));
})(this, function(exports2, vue) {
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
  exports2.ZButton = ZButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
