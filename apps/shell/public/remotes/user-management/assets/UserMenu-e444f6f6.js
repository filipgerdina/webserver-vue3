import { defineComponent, ref, onMounted, openBlock, createElementBlock, createElementVNode, unref, toDisplayString, normalizeClass, withModifiers, createTextVNode, createCommentVNode, pushScopeId, popScopeId } from 'vue';
import { useRouter } from 'vue-router';
import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-319ee11e.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-c4c0bc37.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import './preload-helper-1a9bd443.js';

const _withScopeId = (n) => (pushScopeId("data-v-7e969c95"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "userSummary" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "userText" };
const _hoisted_4 = { class: "userName" };
const _hoisted_5 = { class: "userRoles" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("i", { class: "fa-solid fa-user" }, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("i", { class: "fa-solid fa-right-from-bracket" }, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserMenu",
  setup(__props) {
    const t = user_mf_2_management__loadShare__utility__loadShare__.translationService.translate;
    const router = useRouter();
    const displayName = ref("");
    const userRoles = ref([]);
    const userMenuExpanded = ref(false);
    const userInformationDataSource = new user_mf_2_management__loadShare__utility__loadShare__.DataSource({
      name: "userInformation",
      method: "GET"
    });
    function toggleUserMenu() {
      userMenuExpanded.value = !userMenuExpanded.value;
    }
    function closeUserMenu() {
      userMenuExpanded.value = false;
    }
    function goToSettings() {
      closeUserMenu();
      router.push("/profile");
      console.log(router);
    }
    async function retrieveUserInformation() {
      let res = await userInformationDataSource.retrieveData((data) => {
        user_mf_2_management__loadShare__utility__loadShare__.settingsService.setUserSettings(data.data?.languageId, data.data?.dateTimeFormatId, data.data?.decimalSeperatorId);
      });
      if (res) {
        displayName.value = res.data?.displayName ?? res.data?.username ?? "";
        userRoles.value = res.data?.roleNames ?? [];
      }
    }
    onMounted(async () => {
      if (!user_mf_2_management__loadShare__utility__loadShare__.authService.currentUser.value)
        user_mf_2_management__loadShare__utility__loadShare__.authService.onLoaded(async () => {
          await retrieveUserInformation();
        });
      else {
        await retrieveUserInformation();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "userMenu",
        onClick: toggleUserMenu
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("img", {
            src: unref(user_mf_2_management__loadShare__utility__loadShare__.GetImageUrl)("userIcon.png"),
            style: { "width": "35px" }
          }, null, 8, _hoisted_2),
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", _hoisted_4, toDisplayString(displayName.value), 1),
            createElementVNode("div", _hoisted_5, toDisplayString(userRoles.value?.join(", ")), 1)
          ]),
          createElementVNode("i", {
            class: normalizeClass(["fa-solid fa-chevron-down caretIcon", { rotated: userMenuExpanded.value }])
          }, null, 2)
        ]),
        userMenuExpanded.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "userMenuDropdown",
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createElementVNode("button", { onClick: goToSettings }, [
            _hoisted_6,
            createTextVNode(" " + toDisplayString(unref(t)("s:mySettings")), 1)
          ]),
          createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => unref(user_mf_2_management__loadShare__utility__loadShare__.authService).logout())
          }, [
            _hoisted_7,
            createTextVNode(" " + toDisplayString(unref(t)("s:signOut")), 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});

const UserMenu_vue_vue_type_style_index_0_scoped_7e969c95_lang = '';

const UserMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e969c95"]]);

export { UserMenu as default };
//# sourceMappingURL=UserMenu-e444f6f6.js.map
