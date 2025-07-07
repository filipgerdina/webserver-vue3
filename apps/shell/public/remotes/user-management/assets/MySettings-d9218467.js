import { u as user_mf_2_management__loadShare__vue__loadShare__ } from './user_mf_2_management__loadShare__vue__loadShare__-2c98848e.js';
import { u as user_mf_2_management__loadShare__shared_mf_2_components__loadShare__, m as module } from './module-a91b8008.js';
import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-319ee11e.js';
import { u as user_mf_2_management__loadShare__vue_mf_2_router__loadShare__ } from './user_mf_2_management__loadShare__vue_mf_2_router__loadShare__-33cd187a.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-c4c0bc37.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import './preload-helper-1a9bd443.js';

const _hoisted_1$1 = { class: "profile-card" };
const _sfc_main$2 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "EditProfileForm",
  setup(__props) {
    user_mf_2_management__loadShare__vue_mf_2_router__loadShare__.useRouter();
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
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", _hoisted_1$1, [
        user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare__shared_mf_2_components__loadShare__.ExtraParamsFormHolder), {
          visible: true,
          loading: false,
          actionCode: "EDIT_PROFILE",
          module: user_mf_2_management__loadShare__vue__loadShare__.unref(module),
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
const _sfc_main$1 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
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
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", _hoisted_1, [
        user_mf_2_management__loadShare__vue__loadShare__.createVNode(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare__shared_mf_2_components__loadShare__.ExtraParamsFormHolder), {
          visible: true,
          loading: false,
          actionCode: "CHANGE_PASSWORD",
          module: user_mf_2_management__loadShare__vue__loadShare__.unref(module),
          recordParams: [],
          onSubmit: changePassword
        }, null, 8, ["module"])
      ]);
    };
  }
});

const ChangePasswordForm_vue_vue_type_style_index_0_scoped_228fd932_lang = '';

const ChangePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-228fd932"]]);

const _sfc_main = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "MySettings",
  setup(__props) {
    const selectedTab = user_mf_2_management__loadShare__vue__loadShare__.ref(0);
    const tabLabels = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
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
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare__shared_mf_2_components__loadShare__.Tabs), {
        labels: tabLabels.value,
        modelValue: selectedTab.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTab.value = $event)
      }, {
        default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
          user_mf_2_management__loadShare__vue__loadShare__.withDirectives(user_mf_2_management__loadShare__vue__loadShare__.createVNode(EditProfileForm, null, null, 512), [
            [user_mf_2_management__loadShare__vue__loadShare__.vShow, selectedTab.value === 0]
          ]),
          user_mf_2_management__loadShare__vue__loadShare__.withDirectives(user_mf_2_management__loadShare__vue__loadShare__.createVNode(ChangePasswordForm, null, null, 512), [
            [user_mf_2_management__loadShare__vue__loadShare__.vShow, selectedTab.value === 1]
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
//# sourceMappingURL=MySettings-d9218467.js.map
