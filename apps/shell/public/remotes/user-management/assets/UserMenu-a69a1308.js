import { u as user_mf_2_management__loadShare__vue__loadShare__ } from './user_mf_2_management__loadShare__vue__loadShare__-e47a04a9.js';
import { u as user_mf_2_management__loadShare__vue_mf_2_router__loadShare__ } from './user_mf_2_management__loadShare__vue_mf_2_router__loadShare__-8996c67b.js';
import { u as user_mf_2_management__loadShare__utility__loadShare__ } from './user_mf_2_management__loadShare__utility__loadShare__-ba6f8ca5.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-c4c0bc37.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';
import './preload-helper-1a9bd443.js';

const _withScopeId = (n) => (user_mf_2_management__loadShare__vue__loadShare__.pushScopeId("data-v-7e969c95"), n = n(), user_mf_2_management__loadShare__vue__loadShare__.popScopeId(), n);
const _hoisted_1 = { class: "userSummary" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "userText" };
const _hoisted_4 = { class: "userName" };
const _hoisted_5 = { class: "userRoles" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("i", { class: "fa-solid fa-user" }, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("i", { class: "fa-solid fa-right-from-bracket" }, null, -1));
const _sfc_main = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "UserMenu",
  setup(__props) {
    const t = user_mf_2_management__loadShare__utility__loadShare__.translationService.translate;
    const router = user_mf_2_management__loadShare__vue_mf_2_router__loadShare__.useRouter();
    const displayName = user_mf_2_management__loadShare__vue__loadShare__.ref("");
    const userRoles = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
    const userMenuExpanded = user_mf_2_management__loadShare__vue__loadShare__.ref(false);
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
    user_mf_2_management__loadShare__vue__loadShare__.onMounted(async () => {
      if (!user_mf_2_management__loadShare__utility__loadShare__.authService.currentUser.value)
        user_mf_2_management__loadShare__utility__loadShare__.authService.onLoaded(async () => {
          await retrieveUserInformation();
        });
      else {
        await retrieveUserInformation();
      }
    });
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", {
        class: "userMenu",
        onClick: toggleUserMenu
      }, [
        user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_1, [
          user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("img", {
            src: user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare__utility__loadShare__.GetImageUrl)("userIcon.png"),
            style: { "width": "35px" }
          }, null, 8, _hoisted_2),
          user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_3, [
            user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_4, user_mf_2_management__loadShare__vue__loadShare__.toDisplayString(displayName.value), 1),
            user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_5, user_mf_2_management__loadShare__vue__loadShare__.toDisplayString(userRoles.value?.join(", ")), 1)
          ]),
          user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("i", {
            class: user_mf_2_management__loadShare__vue__loadShare__.normalizeClass(["fa-solid fa-chevron-down caretIcon", { rotated: userMenuExpanded.value }])
          }, null, 2)
        ]),
        userMenuExpanded.value ? (user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock("div", {
          key: 0,
          class: "userMenuDropdown",
          onClick: _cache[1] || (_cache[1] = user_mf_2_management__loadShare__vue__loadShare__.withModifiers(() => {
          }, ["stop"]))
        }, [
          user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("button", { onClick: goToSettings }, [
            _hoisted_6,
            user_mf_2_management__loadShare__vue__loadShare__.createTextVNode(" " + user_mf_2_management__loadShare__vue__loadShare__.toDisplayString(user_mf_2_management__loadShare__vue__loadShare__.unref(t)("s:mySettings")), 1)
          ]),
          user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare__utility__loadShare__.authService).logout())
          }, [
            _hoisted_7,
            user_mf_2_management__loadShare__vue__loadShare__.createTextVNode(" " + user_mf_2_management__loadShare__vue__loadShare__.toDisplayString(user_mf_2_management__loadShare__vue__loadShare__.unref(t)("s:signOut")), 1)
          ])
        ])) : user_mf_2_management__loadShare__vue__loadShare__.createCommentVNode("", true)
      ]);
    };
  }
});

const UserMenu_vue_vue_type_style_index_0_scoped_7e969c95_lang = '';

const UserMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e969c95"]]);

export { UserMenu as default };
//# sourceMappingURL=UserMenu-a69a1308.js.map
