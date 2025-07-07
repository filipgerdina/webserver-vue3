import { defineComponent, openBlock, createElementBlock, createVNode, unref, ref, createBlock, withCtx, withDirectives, vShow } from 'vue';
import { ExtraParamsFormHolder, Tabs } from 'shared-components';
import { m as module } from './module-8931beaf.js';
import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-319ee11e.js';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-c4c0bc37.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import './preload-helper-1a9bd443.js';

const _hoisted_1$1 = { class: "profile-card" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EditProfileForm",
  setup(__props) {
    useRouter();
    const submitProfileDs = new user_mf_2_management__loadShare__utility__loadShare__.DataSource({
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
        user_mf_2_management__loadShare__utility__loadShare__.settingsService.setUserSettings(
          formData.languageId,
          formData.dateTimeFormatId,
          formData.decimalSeperatorId
        );
      });
      window.location.reload();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(ExtraParamsFormHolder), {
          visible: true,
          loading: false,
          actionCode: "EDIT_PROFILE",
          module: unref(module),
          recordParams: [],
          onSubmit: editUserProfile
        }, null, 8, ["module"])
      ]);
    };
  }
});

const EditProfileForm_vue_vue_type_style_index_0_scoped_45b30a3f_lang = '';

const EditProfileForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-45b30a3f"]]);

const _hoisted_1 = { class: "profile-card" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChangePasswordForm",
  setup(__props) {
    const submitPasswordDs = new user_mf_2_management__loadShare__utility__loadShare__.DataSource({
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ExtraParamsFormHolder), {
          visible: true,
          loading: false,
          actionCode: "CHANGE_PASSWORD",
          module: unref(module),
          recordParams: [],
          onSubmit: changePassword
        }, null, 8, ["module"])
      ]);
    };
  }
});

const ChangePasswordForm_vue_vue_type_style_index_0_scoped_228fd932_lang = '';

const ChangePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-228fd932"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MySettings",
  setup(__props) {
    const selectedTab = ref(0);
    const tabLabels = ref([]);
    if (user_mf_2_management__loadShare__utility__loadShare__.authService.isLoggedIn.value) {
      setTabs();
    } else {
      user_mf_2_management__loadShare__utility__loadShare__.authService.onLoaded(() => {
        setTabs();
      });
    }
    function setTabs() {
      tabLabels.value.push(user_mf_2_management__loadShare__utility__loadShare__.translationService.translate("s:settings"));
      if (!user_mf_2_management__loadShare__utility__loadShare__.authService.isUserDomain.value)
        tabLabels.value.push(user_mf_2_management__loadShare__utility__loadShare__.translationService.translate("s:changePassword"));
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Tabs), {
        labels: tabLabels.value,
        modelValue: selectedTab.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTab.value = $event)
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(EditProfileForm, null, null, 512), [
            [vShow, selectedTab.value === 0]
          ]),
          withDirectives(createVNode(ChangePasswordForm, null, null, 512), [
            [vShow, selectedTab.value === 1]
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
//# sourceMappingURL=MySettings-c74dcfae.js.map
