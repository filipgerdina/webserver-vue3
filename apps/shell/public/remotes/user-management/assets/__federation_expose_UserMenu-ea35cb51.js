import { importShared } from './__federation_fn_import-054b33c3.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-c4c0bc37.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,toDisplayString:_toDisplayString,normalizeClass:_normalizeClass,createTextVNode:_createTextVNode,withModifiers:_withModifiers,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,pushScopeId:_pushScopeId,popScopeId:_popScopeId} = await importShared('vue');

const _withScopeId = (n) => (_pushScopeId("data-v-7e969c95"), n = n(), _popScopeId(), n);
const _hoisted_1 = { class: "userSummary" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "userText" };
const _hoisted_4 = { class: "userName" };
const _hoisted_5 = { class: "userRoles" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ _createElementVNode("i", { class: "fa-solid fa-user" }, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ _createElementVNode("i", { class: "fa-solid fa-right-from-bracket" }, null, -1));
const {onMounted,ref} = await importShared('vue');

const {useRouter} = await importShared('vue-router');

const {authService,DataSource,GetImageUrl} = await importShared('utility');

const {translationService,settingsService} = await importShared('utility');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "UserMenu",
  setup(__props) {
    const t = translationService.translate;
    const router = useRouter();
    const displayName = ref("");
    const userRoles = ref([]);
    const userMenuExpanded = ref(false);
    const userInformationDataSource = new DataSource({
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
        settingsService.setUserSettings(data.data?.languageId, data.data?.dateTimeFormatId, data.data?.decimalSeperatorId);
      });
      if (res) {
        displayName.value = res.data?.displayName ?? res.data?.username ?? "";
        userRoles.value = res.data?.roleNames ?? [];
      }
    }
    onMounted(async () => {
      if (!authService.currentUser.value)
        authService.onLoaded(async () => {
          await retrieveUserInformation();
        });
      else {
        await retrieveUserInformation();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", {
        class: "userMenu",
        onClick: toggleUserMenu
      }, [
        _createElementVNode("div", _hoisted_1, [
          _createElementVNode("img", {
            src: _unref(GetImageUrl)("userIcon.png"),
            style: { "width": "35px" }
          }, null, 8, _hoisted_2),
          _createElementVNode("div", _hoisted_3, [
            _createElementVNode("div", _hoisted_4, _toDisplayString(displayName.value), 1),
            _createElementVNode("div", _hoisted_5, _toDisplayString(userRoles.value?.join(", ")), 1)
          ]),
          _createElementVNode("i", {
            class: _normalizeClass(["fa-solid fa-chevron-down caretIcon", { rotated: userMenuExpanded.value }])
          }, null, 2)
        ]),
        userMenuExpanded.value ? (_openBlock(), _createElementBlock("div", {
          key: 0,
          class: "userMenuDropdown",
          onClick: _cache[1] || (_cache[1] = _withModifiers(() => {
          }, ["stop"]))
        }, [
          _createElementVNode("button", { onClick: goToSettings }, [
            _hoisted_6,
            _createTextVNode(" " + _toDisplayString(_unref(t)("s:mySettings")), 1)
          ]),
          _createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _unref(authService).logout())
          }, [
            _hoisted_7,
            _createTextVNode(" " + _toDisplayString(_unref(t)("s:signOut")), 1)
          ])
        ])) : _createCommentVNode("", true)
      ]);
    };
  }
});

const UserMenu_vue_vue_type_style_index_0_scoped_7e969c95_lang = '';

const UserMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e969c95"]]);

export { UserMenu as default };
//# sourceMappingURL=__federation_expose_UserMenu-ea35cb51.js.map
