import { u as user_mf_2_management__loadShare__vue__loadShare__ } from './user_mf_2_management__loadShare__vue__loadShare__-2c98848e.js';
import { V as VisualizationType, t as translationService, b as user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__, c as EndPointAction } from './index.es-9142de90.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import './preload-helper-1a9bd443.js';

function useGridLogic(config, emit) {
  const data = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
  async function refresh() {
    const { entity, viewName } = config;
    try {
      const source = viewName ? entity.views?.[viewName]?.dataSource : entity.dataSource;
      if (!source)
        throw new Error("No data source");
      const result = await source.retrieveData();
      if (result.data)
        data.value = result.data;
      else
        data.value = [];
      emit("refresh");
    } catch (err) {
      console.error("Load failed", err);
    }
  }
  return { data, refresh };
}
function getDataType(type) {
  switch (type) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "datetime":
      return "datetime";
    case "boolean":
      return "boolean";
  }
  return "object";
}
function getEditorType(visualizationType) {
  switch (visualizationType) {
    case VisualizationType.Value3:
      return "dxSelectBox";
    case VisualizationType.Value7:
      return "dxCheckBox";
    default:
      return "dxTextBox";
  }
}
function getTextBoxOptions(control, formData) {
  return {
    mode: control.dataField?.toLocaleLowerCase().includes("password") ? "password" : "text",
    disabled: control.properties?.readOnly,
    inputAttr: {
      "autocomplete": "new-password",
      "name": "no-suggest-" + control.dataField
    },
    // value: typeof control.dataField === 'string' ? formData[control.dataField] ?? undefined : undefined,
    onValueChanged: (e) => {
      if (typeof control.dataField === "string") {
        formData[control.dataField] = e.value?.length ? e.value : null;
      }
    }
  };
}
function getDropDownOptions(control, formData) {
  return {
    dataSource: control.properties.values ?? [],
    displayExpr: control.properties.displayDataField,
    valueExpr: control.properties.valueDataField,
    disabled: control.properties?.disabled,
    placeholder: translationService.translate("s:search") + "...",
    showClearButton: !control.required,
    onValueChanged: (e) => {
      if (typeof control.dataField === "string") {
        formData[control.dataField] = e.value;
      }
    },
    dropDownOptions: {}
  };
}
function getCheckBoxOptions(control, formData) {
  return {
    disabled: control.properties?.readOnly,
    onValueChanged: (e) => {
      if (typeof control.dataField === "string") {
        formData[control.dataField] = e.value;
      }
    }
  };
}
function getEditorOptions(control, formData) {
  switch (control.visualizationType) {
    case VisualizationType.Value3:
      return getDropDownOptions(control, formData);
    case VisualizationType.Value7:
      return getCheckBoxOptions(control, formData);
    default:
      return getTextBoxOptions(control, formData);
  }
}
const _sfc_main$5 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "DynamicForm",
  props: {
    formData: {},
    controls: {},
    columns: {},
    loading: { type: Boolean }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = user_mf_2_management__loadShare__vue__loadShare__.ref();
    function handleSubmit() {
      const formInstance = formRef.value?.instance;
      if (!formInstance)
        return;
      const result = formInstance.validate();
      if (!result.isValid)
        return;
      emit("submit", props.formData);
    }
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock(user_mf_2_management__loadShare__vue__loadShare__.Fragment, null, [
        user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxForm), {
          ref_key: "formRef",
          ref: formRef,
          "form-data": _ctx.formData,
          items: [],
          "label-location": "left"
        }, {
          default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
            (user_mf_2_management__loadShare__vue__loadShare__.openBlock(true), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock(user_mf_2_management__loadShare__vue__loadShare__.Fragment, null, user_mf_2_management__loadShare__vue__loadShare__.renderList(props.controls, (control) => {
              return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxItem), {
                "data-field": control.dataField ?? void 0,
                label: { text: user_mf_2_management__loadShare__vue__loadShare__.unref(translationService).translate(control.label ?? "") },
                "is-required": control.required || false,
                "editor-type": user_mf_2_management__loadShare__vue__loadShare__.unref(getEditorType)(control.visualizationType),
                "editor-options": user_mf_2_management__loadShare__vue__loadShare__.unref(getEditorOptions)(control, _ctx.formData),
                "help-text": control.description ?? void 0,
                visible: control.visible !== null ? control.visible : void 0
              }, null, 8, ["data-field", "label", "is-required", "editor-type", "editor-options", "help-text", "visible"]);
            }), 256))
          ]),
          _: 1
        }, 8, ["form-data"]),
        user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxButton), {
          text: user_mf_2_management__loadShare__vue__loadShare__.unref(translationService).translate("s:submit"),
          disabled: _ctx.loading,
          onClick: handleSubmit
        }, null, 8, ["text", "disabled"])
      ], 64);
    };
  }
});
function useExtraParamsForm(visible, actionCode, module, recordParams, additionalExtraParamsRequestParams) {
  const formData = user_mf_2_management__loadShare__vue__loadShare__.reactive({});
  const controls = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
  const items = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
  const title = user_mf_2_management__loadShare__vue__loadShare__.ref(void 0);
  user_mf_2_management__loadShare__vue__loadShare__.watch(
    [visible, actionCode],
    async ([isVisible, code]) => {
      if (!isVisible || !code)
        return;
      controls.value = [];
      Object.keys(formData).forEach((k) => delete formData[k]);
      try {
        module.value.moduleActionFormsDS.getQueryParams = () => {
          let data = { data: { formCode: String(code) } };
          if (recordParams.value)
            data.data.recordParams = recordParams.value;
          if (additionalExtraParamsRequestParams) {
            let params = additionalExtraParamsRequestParams();
            params.forEach((value, key) => {
              data.data[key] = value;
            });
          }
          return data;
        };
        const res = await module.value.moduleActionFormsDS.retrieveData();
        title.value = res?.data?.title ?? void 0;
        controls.value = res?.data?.controls ?? [];
        controls.value.forEach((c) => {
          if (c.dataField && !(c.dataField in formData)) {
            formData[c.dataField] = res?.data?.defaultValues?.[c.dataField] ?? null;
          }
        });
        console.log(formData);
        items.value = [];
      } catch (err) {
        console.error("Failed to load form controls:", err);
        controls.value = [];
      }
    },
    { immediate: true }
  );
  return { formData, controls, items, title };
}
const _sfc_main$4 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "ExtraParamsFormHolder",
  props: {
    visible: { type: Boolean },
    loading: { type: Boolean },
    module: {},
    actionCode: {},
    recordParams: {},
    additionalExtraParamsRequestParams: { type: Function }
  },
  emits: ["submit", "update:title"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { visible, actionCode, module, recordParams } = user_mf_2_management__loadShare__vue__loadShare__.toRefs(props);
    const { formData, controls, items, title } = useExtraParamsForm(
      visible,
      actionCode,
      module,
      recordParams,
      props.additionalExtraParamsRequestParams
    );
    user_mf_2_management__loadShare__vue__loadShare__.watch(title, (newTitle) => {
      emit("update:title", newTitle ?? "");
    }, { immediate: true });
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(_sfc_main$5, {
        "form-data": user_mf_2_management__loadShare__vue__loadShare__.unref(formData),
        controls: user_mf_2_management__loadShare__vue__loadShare__.unref(controls),
        loading: _ctx.loading,
        onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit", $event))
      }, null, 8, ["form-data", "controls", "loading"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "ExtraParamsForm",
  props: {
    visible: { type: Boolean },
    loading: { type: Boolean },
    module: {},
    actionCode: {},
    recordParams: {},
    additionalExtraParamsRequestParams: { type: Function }
  },
  emits: ["update:visible", "submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const dynamicTitle = user_mf_2_management__loadShare__vue__loadShare__.ref("");
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxPopup), {
        visible: _ctx.visible,
        "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:visible", $event)),
        title: dynamicTitle.value,
        "show-close-button": true,
        width: 700,
        height: "auto"
      }, {
        default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
          user_mf_2_management__loadShare__vue__loadShare__.createVNode(_sfc_main$4, {
            visible: _ctx.visible,
            loading: _ctx.loading,
            module: _ctx.module,
            "action-code": _ctx.actionCode,
            "record-params": _ctx.recordParams,
            "additional-extra-params-request-params": props.additionalExtraParamsRequestParams,
            onSubmit: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("submit", $event)),
            "onUpdate:title": _cache[1] || (_cache[1] = ($event) => dynamicTitle.value = $event)
          }, null, 8, ["visible", "loading", "module", "action-code", "record-params", "additional-extra-params-request-params"])
        ]),
        _: 1
      }, 8, ["visible", "title"]);
    };
  }
});
function useActions(entity, refresh, initializeForm) {
  const recordId = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
  const actions = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
  const showExtraForm = user_mf_2_management__loadShare__vue__loadShare__.ref(false);
  const selectedAction = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
  const selectedActionEndPointAction = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
  const recordParams = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
  const loading = user_mf_2_management__loadShare__vue__loadShare__.ref(false);
  const pendingRequest = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
  async function loadActions() {
    if (recordId.value == null) {
      actions.value = [];
    }
    entity.module.moduleActionsDS.getQueryParams = () => ({
      RecordTypeCode: entity.entityCode,
      RecordId: recordId.value
    });
    const res = await getActions();
    pendingRequest.value = null;
    actions.value = res?.data || null;
  }
  async function getActions() {
    if (pendingRequest.value)
      return pendingRequest.value;
    pendingRequest.value = entity.module.moduleActionsDS.retrieveData();
    return await pendingRequest.value;
  }
  async function onRecordIdChanged(newRecordId) {
    recordId.value = newRecordId;
    recordParams.value = [
      {
        recordId: recordId.value
      }
    ];
    await loadActions();
  }
  function onContextMenuPreparing(e) {
    e.items = [];
    if (actions.value?.length) {
      actions.value.forEach((action) => {
        e.items.push({
          text: action.actionName,
          onItemClick: () => handleActionClick(action)
        });
      });
    }
  }
  async function handleActionClick(action) {
    if (!action.actionCode)
      return;
    selectedAction.value = action;
    selectedActionEndPointAction.value = new EndPointAction(action.actionProcedure ?? "");
    if (selectedAction.value.baseActionCode == "NEW" && initializeForm)
      await initializeForm(submitExtraParamsForm);
    else if (action.extraParamsFormUrl) {
      showExtraForm.value = true;
    } else {
      submitExtraParamsForm({});
    }
  }
  async function submitExtraParamsForm(formData) {
    if (!selectedActionEndPointAction.value || !selectedAction.value?.actionCode || recordParams.value.length === 0) {
      console.warn("Missing required data for form submission");
      return;
    }
    loading.value = true;
    try {
      selectedActionEndPointAction.value.dataSource.getBodyParams = () => {
        return {
          data: {
            actionCode: selectedAction.value?.actionCode,
            recordTypeCode: "fsdfds",
            extraParamsFormValues: formData
          }
        };
      };
      selectedActionEndPointAction.value.dataSource.getUrlParams = () => ({
        id: recordParams.value[0].recordId
      });
      const res = await selectedActionEndPointAction.value.dataSource.retrieveData();
      await refresh();
      setTimeout(() => {
        loadActions();
      }, 100);
      showExtraForm.value = false;
    } catch (error) {
      console.error("Submit failed:", error);
    } finally {
      loading.value = false;
    }
  }
  function renderExtraParamsForm() {
    if (!selectedAction.value?.actionCode)
      return null;
    return user_mf_2_management__loadShare__vue__loadShare__.h(_sfc_main$3, {
      visible: showExtraForm.value,
      module: entity.module,
      actionCode: selectedAction.value.actionCode,
      recordParams: recordParams.value,
      loading: loading.value,
      onSubmit: submitExtraParamsForm,
      "onUpdate:visible": (val) => showExtraForm.value = val
    });
  }
  return {
    recordId,
    actions,
    showExtraForm,
    selectedAction,
    selectedActionEndPointAction,
    recordParams,
    onRecordIdChanged,
    onContextMenuPreparing,
    handleActionClick,
    renderExtraParamsForm
  };
}
const _sfc_main$2 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "DynamicFormPopup",
  props: {
    visible: { type: Boolean },
    loading: { type: Boolean },
    controls: {},
    formData: {},
    title: {}
  },
  emits: ["update:visible", "submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxPopup), {
        visible: _ctx.visible,
        "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.$emit("update:visible", $event)),
        title: _ctx.title,
        "show-close-button": true,
        width: 700,
        height: "auto"
      }, {
        default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
          user_mf_2_management__loadShare__vue__loadShare__.createVNode(_sfc_main$5, {
            "form-data": props.formData || {},
            controls: _ctx.controls,
            loading: _ctx.loading,
            onSubmit: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("submit", $event))
          }, null, 8, ["form-data", "controls", "loading"])
        ]),
        _: 1
      }, 8, ["visible", "title"]);
    };
  }
});
/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && user_mf_2_management__loadShare__vue__loadShare__.getCurrentScope()) {
    user_mf_2_management__loadShare__vue__loadShare__.onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !user_mf_2_management__loadShare__vue__loadShare__.isRef(subPatch) && !user_mf_2_management__loadShare__vue__loadShare__.isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(user_mf_2_management__loadShare__vue__loadShare__.isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      pinia.state.value[id] = state ? state() : {};
    }
    const localState = user_mf_2_management__loadShare__vue__loadShare__.toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = user_mf_2_management__loadShare__vue__loadShare__.markRaw(user_mf_2_management__loadShare__vue__loadShare__.computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    pinia.state.value[$id] = {};
  }
  user_mf_2_management__loadShare__vue__loadShare__.ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    user_mf_2_management__loadShare__vue__loadShare__.nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => user_mf_2_management__loadShare__vue__loadShare__.watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = user_mf_2_management__loadShare__vue__loadShare__.reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = user_mf_2_management__loadShare__vue__loadShare__.effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (user_mf_2_management__loadShare__vue__loadShare__.isRef(prop) && !isComputed(prop) || user_mf_2_management__loadShare__vue__loadShare__.isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (user_mf_2_management__loadShare__vue__loadShare__.isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        pinia.state.value[$id][key] = prop;
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      setupStore[key] = actionValue;
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  assign(store, setupStore);
  assign(user_mf_2_management__loadShare__vue__loadShare__.toRaw(store), setupStore);
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(id, setup, setupOptions) {
  let options;
  const isSetupStore = typeof setup === "function";
  options = isSetupStore ? setupOptions : setup;
  function useStore(pinia, hot) {
    const hasContext = user_mf_2_management__loadShare__vue__loadShare__.hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? user_mf_2_management__loadShare__vue__loadShare__.inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useGridStore = (id) => /* @__PURE__ */ defineStore(
  id,
  () => {
    const gridViewState = user_mf_2_management__loadShare__vue__loadShare__.ref({});
    function resetGridView() {
      gridViewState.value = {};
    }
    function SaveDataGridView(viewState) {
      gridViewState.value = viewState;
    }
    function GetDataGridView() {
      return gridViewState.value;
    }
    function ResetDataGridView() {
      gridViewState.value = {};
    }
    return { gridViewState, resetGridView, SaveDataGridView, GetDataGridView, ResetDataGridView };
  }
);
const _hoisted_1$1 = { style: { "max-height": "600px", "overflow-y": "auto", "display": "block", "width": "100%" } };
const _hoisted_2$1 = { style: { "margin-bottom": "10px" } };
const _sfc_main$1 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "DataGrid",
  props: {
    config: {},
    canDelete: { type: Boolean },
    canUpdate: { type: Boolean },
    additionalExtraParamsRequestParams: { type: Function }
  },
  emits: ["refresh", "delete", "update", "selected", "view-changed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const dynamicFormVisible = user_mf_2_management__loadShare__vue__loadShare__.ref(false);
    const formData = user_mf_2_management__loadShare__vue__loadShare__.ref({});
    const controls = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
    const refreshButtonOptions = {
      icon: "refresh",
      text: translationService.translate("s:refresh"),
      onClick: () => {
        refresh();
      }
    };
    function submitForm() {
      if (submitFunction.value)
        submitFunction.value(formData.value);
      dynamicFormVisible.value = false;
    }
    const submitFunction = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
    async function initializeForm(submitFunc) {
      controls.value = await Promise.all(
        props.config.columns.filter((col) => col.addedInEditMode).map(async (col) => {
          let values = [];
          if (col.selectionFromDataSource?.dataSource) {
            let res = await col.selectionFromDataSource.dataSource.retrieveData();
            values = res.data;
          }
          return {
            dataField: col.field._field,
            label: col.field._caption,
            required: false,
            visualizationType: col.visualizationType,
            visible: col.visibleInEditMode !== false,
            properties: {
              values,
              displayDataField: col.selectionFromDataSource?.displayDataMemeber._field,
              valueDataField: col.selectionFromDataSource?.idDataMember._field
            }
          };
        })
      );
      formData.value = {};
      if (props.additionalExtraParamsRequestParams) {
        props.additionalExtraParamsRequestParams().forEach((value, key) => {
          formData.value[key] = value;
        });
      }
      dynamicFormVisible.value = true;
      submitFunction.value = submitFunc;
    }
    const props = __props;
    const emits = __emit;
    const { data, refresh } = useGridLogic(props.config, emits);
    const dataGridRef = user_mf_2_management__loadShare__vue__loadShare__.ref();
    const store = useGridStore(props.config.id)();
    const actionsHandlers = useActions(props.config.entity, refresh, initializeForm);
    actionsHandlers.onRecordIdChanged(null);
    function onSelectionChanged(e) {
      emits("selected", e.selectedRowsData[0]);
      if (e.selectedRowsData[0])
        actionsHandlers.onRecordIdChanged(e.selectedRowsData[0][dataGridRef.value.keyExpr]);
      else
        actionsHandlers.onRecordIdChanged(null);
      emits("view-changed", dataGridRef.value.instance.state());
    }
    function loadState() {
      return store?.GetDataGridView();
    }
    function saveState(state) {
      emits("view-changed", state);
    }
    function onCtxPreparing(e) {
      e.component.selectRowsByIndexes([e.rowIndex]);
      actionsHandlers.onContextMenuPreparing(e);
    }
    function loadStateToGrid() {
    }
    user_mf_2_management__loadShare__vue__loadShare__.onMounted(refresh);
    __expose({
      refresh,
      loadStateToGrid,
      actionsHandlers
    });
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock(user_mf_2_management__loadShare__vue__loadShare__.Fragment, null, [
        user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_1$1, [
          user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxDataGrid), {
            ref_key: "dataGridRef",
            ref: dataGridRef,
            style: { "max-height": "500px", "overflow": "hidden" },
            "data-source": user_mf_2_management__loadShare__vue__loadShare__.unref(data),
            "remote-operations": false,
            "allow-column-reordering": true,
            "row-alternation-enabled": true,
            "show-borders": true,
            "key-expr": "id",
            width: "auto",
            height: "auto",
            "no-data-text": user_mf_2_management__loadShare__vue__loadShare__.unref(translationService).translate("s:dsfasd"),
            onSelectionChanged,
            onContextMenuPreparing: onCtxPreparing
          }, {
            default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxSelection), {
                mode: "single",
                selectionChange: ""
              }),
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxPaging), { "page-size": 0 }),
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxPager), {
                visible: true,
                "show-page-size-selector": true,
                "allowed-page-sizes": [25, 100, "all"]
              }),
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxStateStoring), {
                enabled: true,
                type: "custom",
                "custom-load": loadState,
                "custom-save": saveState
              }),
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxSearchPanel), {
                visible: true,
                "highlight-case-sensitive": true,
                placeholder: user_mf_2_management__loadShare__vue__loadShare__.unref(translationService).translate("s:search") + "..."
              }, null, 8, ["placeholder"]),
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxGroupPanel), { visible: true }),
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxGrouping), { "auto-expand-all": false }),
              (user_mf_2_management__loadShare__vue__loadShare__.openBlock(true), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock(user_mf_2_management__loadShare__vue__loadShare__.Fragment, null, user_mf_2_management__loadShare__vue__loadShare__.renderList(props.config.columns, (colm, index) => {
                return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxColumn), {
                  key: index,
                  "data-field": colm.field._field,
                  "data-type": user_mf_2_management__loadShare__vue__loadShare__.unref(getDataType)(colm.field._type),
                  caption: user_mf_2_management__loadShare__vue__loadShare__.unref(translationService).translate(colm.field._caption),
                  visible: colm.visible != false
                }, null, 8, ["data-field", "data-type", "caption", "visible"]);
              }), 128)),
              user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxToolbar), null, {
                default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
                  user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxItem), {
                    location: "after",
                    locateInMenu: "auto",
                    showText: "inMenu",
                    widget: "dxButton",
                    options: refreshButtonOptions
                  }),
                  user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxItem), { location: "center" }, {
                    default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
                      user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("h4", _hoisted_2$1, user_mf_2_management__loadShare__vue__loadShare__.toDisplayString(user_mf_2_management__loadShare__vue__loadShare__.unref(translationService).translate(props.config.title || "Title")), 1)
                    ]),
                    _: 1
                  }),
                  user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxItem), { name: "searchPanel" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data-source", "no-data-text"])
        ]),
        (user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.resolveDynamicComponent(user_mf_2_management__loadShare__vue__loadShare__.unref(actionsHandlers).renderExtraParamsForm()))),
        user_mf_2_management__loadShare__vue__loadShare__.createVNode(_sfc_main$2, {
          visible: dynamicFormVisible.value,
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => dynamicFormVisible.value = $event),
          controls: controls.value,
          "form-data": formData.value,
          loading: false,
          title: user_mf_2_management__loadShare__vue__loadShare__.unref(translationService).translate(props.config.newFormTitle ?? ""),
          onSubmit: submitForm
        }, null, 8, ["visible", "controls", "form-data", "title"])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper" };
const _hoisted_2 = { class: "tabs-body" };
const _sfc_main = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "Tabs",
  props: {
    labels: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const internalIndex = user_mf_2_management__loadShare__vue__loadShare__.ref(props.modelValue ?? 0);
    user_mf_2_management__loadShare__vue__loadShare__.watch(
      () => props.modelValue,
      (v) => v !== void 0 && v !== internalIndex.value && (internalIndex.value = v)
    );
    const normalizedLabels = user_mf_2_management__loadShare__vue__loadShare__.computed(
      () => props.labels.map((l) => typeof l === "string" ? { text: l } : l)
    );
    function onChange(e) {
      internalIndex.value = e.component.option("selectedIndex");
      emit("update:modelValue", internalIndex.value);
      emit("change", internalIndex.value);
    }
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", _hoisted_1, [
        user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxTabs), {
          "data-source": normalizedLabels.value,
          "selected-index": internalIndex.value,
          "no-data-text": "",
          onSelectionChanged: onChange
        }, null, 8, ["data-source", "selected-index"]),
        user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_2, [
          user_mf_2_management__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default", { selected: internalIndex.value }, void 0, true)
        ])
      ]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-646989bb"]]);

export { _sfc_main$1 as DataGrid, _sfc_main$4 as ExtraParamsFormHolder, Tabs, getDropDownOptions, getEditorOptions, getEditorType, getTextBoxOptions, useGridStore };
//# sourceMappingURL=index.es-614b729b.js.map
