import { importShared } from './__federation_fn_import-054b33c3.js';
import { m as module } from './module-2c7bbc93.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-c4c0bc37.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1,pushScopeId:_pushScopeId$1,popScopeId:_popScopeId$1} = await importShared('vue');
const _hoisted_1$1 = { class: "profile-card" };
const {ExtraParamsFormHolder: ExtraParamsFormHolder$1} = await importShared('shared-components');
const {DataSource: DataSource$1,settingsService} = await importShared('utility');

const {useRouter} = await importShared('vue-router');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "EditProfileForm",
  setup(__props) {
    useRouter();
    const submitProfileDs = new DataSource$1({
      method: "POST",
      name: "editProfile"
    });
    async function editUserProfile(formData) {
      submitProfileDs.getBodyParams = () => ({
        data: {
          actionCode: "EDIT_PROFILE",
          recordTypeCode: "fsdfds",
          extraParamsFormValues: formData
        }
      });
      await submitProfileDs.retrieveData(() => {
        settingsService.setUserSettings(
          formData.languageId,
          formData.dateTimeFormatId,
          formData.decimalSeperatorId
        );
      });
      window.location.reload();
    }
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("div", _hoisted_1$1, [
        _createVNode$2(_unref$2(ExtraParamsFormHolder$1), {
          visible: true,
          loading: false,
          actionCode: "EDIT_PROFILE",
          module: _unref$2(module),
          recordParams: [],
          onSubmit: editUserProfile
        }, null, 8, ["module"])
      ]);
    };
  }
});

const EditProfileForm_vue_vue_type_style_index_0_scoped_45b30a3f_lang = '';

const EditProfileForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-45b30a3f"]]);

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock,pushScopeId:_pushScopeId,popScopeId:_popScopeId} = await importShared('vue');
const _hoisted_1 = { class: "profile-card" };
const {ExtraParamsFormHolder} = await importShared('shared-components');
const {DataSource} = await importShared('utility');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "ChangePasswordForm",
  setup(__props) {
    const submitPasswordDs = new DataSource({
      method: "POST",
      name: "changePassword"
    });
    async function changePassword(formData) {
      submitPasswordDs.getBodyParams = () => ({
        data: {
          actionCode: "CHANGE_PASSWORD",
          recordTypeCode: "fsdfds",
          extraParamsFormValues: formData
        }
      });
      await submitPasswordDs.retrieveData();
    }
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("div", _hoisted_1, [
        _createVNode$1(_unref$1(ExtraParamsFormHolder), {
          visible: true,
          loading: false,
          actionCode: "CHANGE_PASSWORD",
          module: _unref$1(module),
          recordParams: [],
          onSubmit: changePassword
        }, null, 8, ["module"])
      ]);
    };
  }
});

const ChangePasswordForm_vue_vue_type_style_index_0_scoped_228fd932_lang = '';

const ChangePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-228fd932"]]);

const {defineComponent:_defineComponent} = await importShared('vue');

const {vShow:_vShow,createVNode:_createVNode,withDirectives:_withDirectives,unref:_unref,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {ref} = await importShared('vue');

const {Tabs} = await importShared('shared-components');
const {authService,translationService} = await importShared('utility');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "MySettings",
  setup(__props) {
    const selectedTab = ref(0);
    const tabLabels = ref([]);
    if (authService.isLoggedIn.value) {
      setTabs();
    } else {
      authService.onLoaded(() => {
        setTabs();
      });
    }
    function setTabs() {
      tabLabels.value.push(translationService.translate("s:settings"));
      if (!authService.isUserDomain.value)
        tabLabels.value.push(translationService.translate("s:changePassword"));
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(Tabs), {
        labels: tabLabels.value,
        modelValue: selectedTab.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTab.value = $event)
      }, {
        default: _withCtx(() => [
          _withDirectives(_createVNode(EditProfileForm, null, null, 512), [
            [_vShow, selectedTab.value === 0]
          ]),
          _withDirectives(_createVNode(ChangePasswordForm, null, null, 512), [
            [_vShow, selectedTab.value === 1]
          ])
        ]),
        _: 1
      }, 8, ["labels", "modelValue"]);
    };
  }
});

const MySettings_vue_vue_type_style_index_0_scoped_579d2aca_lang = '';

const MySettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-579d2aca"]]);

export { MySettings as default };
//# sourceMappingURL=__federation_expose_Profile-ced9fc53.js.map
