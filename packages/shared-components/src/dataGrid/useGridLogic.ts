import { ref } from 'vue';
import type { DataGridConfig } from '../types';

export function useGridLogic<T>(
  config: DataGridConfig<T>,
  emit: (event: 'refresh') => void
) {
  const data = ref<T[]>([]);

  async function refresh() {
    const { entity, viewName } = config;
    try {
      const source = viewName
        ? entity.views?.[viewName]?.dataSource
        : entity.dataSource;

      if (!source) throw new Error('No data source');

      const result = await source.retrieveData();
      if (result.data) data.value = result.data;
      else data.value = [];
      emit('refresh');
    } catch (err) {
      console.error('Load failed', err);
    }
  }

  return { data, refresh };
}

export function getDataType(
  type: string
): 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime' {
  switch (type) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'datetime':
      return 'datetime';
    case 'boolean':
      return 'boolean';
  }
  return 'object';
}
