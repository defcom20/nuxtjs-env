import { eventBus } from '~/event-bus';

export const actions = {
  open({}, data) {
    eventBus.$emit('openModalError', data);
  }
}
