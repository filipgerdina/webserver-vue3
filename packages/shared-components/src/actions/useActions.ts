import { h, ref } from 'vue';
import { ActionsQueryDTO, EndPointAction, Entity, RecordParams, ActionsQueryDTOCoreListResponse } from 'utility';
import ExtraParamsForm from '../extraParamsForm/ExtraParamsForm.vue';

export function useActions(
  entity: Entity<any>,
  refresh: () => Promise<void>,
  initializeForm: (submitFunc: Function) => void,
) {
  const recordId = ref<any>(null);
  const actions = ref<ActionsQueryDTO[] | null>(null);
  const showExtraForm = ref(false);
  const selectedAction = ref<ActionsQueryDTO | null>(null);
  const selectedActionEndPointAction = ref<EndPointAction | null>(null);
  const recordParams = ref<Array<RecordParams>>([]);
  const loading = ref(false);
  const pendingRequest = ref<Promise<any> | null>(null);

  async function loadActions() {
    if (recordId.value == null) {
      actions.value = [];
    }
    entity.module.moduleActionsDS.getQueryParams = () => ({
      RecordTypeCode: entity.entityCode,
      RecordId: recordId.value,
    });
    const res: ActionsQueryDTOCoreListResponse = await getActions();
    pendingRequest.value = null;
    actions.value = res?.data || null;
  }

  async function getActions() {
    if (pendingRequest.value)
      return pendingRequest.value;

    pendingRequest.value = entity.module.moduleActionsDS.retrieveData();
    return await pendingRequest.value;
  }

  async function onRecordIdChanged(newRecordId: number | null) {
    recordId.value = newRecordId;
    recordParams.value = [
      {
        recordId: recordId.value,
      } as RecordParams
    ];
    await loadActions();
  }

  function onContextMenuPreparing(e: any) {
    e.items = [];
    if (actions.value?.length) {
      actions.value.forEach((action) => {
        e.items.push({
          text: action.actionName,
          onItemClick: () => handleActionClick(action),
        });
      });
    }
  }

  async function handleActionClick(action: ActionsQueryDTO) {
    if (!action.actionCode) return;

    selectedAction.value = action;
    selectedActionEndPointAction.value = new EndPointAction(action.actionProcedure ?? '');

    if(selectedAction.value.baseActionCode == "NEW" && initializeForm)
        await initializeForm(submitExtraParamsForm);
    else if (action.extraParamsFormUrl) {
      showExtraForm.value = true;
    } else {
      submitExtraParamsForm({});
    }
  }

  async function submitExtraParamsForm(formData: Record<string, any>) {
    if (
      !selectedActionEndPointAction.value ||
      !selectedAction.value?.actionCode ||
      recordParams.value.length === 0
    ) {
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
            extraParamsFormValues: formData,
            currentStateCode: "dfsdfsdf"
          },
          eSign: {
            username: "dfsfsd",
            comment: "sadasd",
            applicationSignId: 1,
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
    if (!selectedAction.value?.actionCode) return null;

    return h(ExtraParamsForm, {
      visible: showExtraForm.value,
      module: entity.module,
      actionCode: selectedAction.value.actionCode,
      recordParams: recordParams.value,
      loading: loading.value,
      onSubmit: submitExtraParamsForm,
      'onUpdate:visible': (val: boolean) => (showExtraForm.value = val),
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
