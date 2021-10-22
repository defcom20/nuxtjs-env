import { mapState, mapGetters } from "vuex";
import { actionsByProduct } from '~/enums/actions'
export default {
  computed: {
    ...mapState("errors", ["errorStatus"]),
    ...mapGetters("encuesta", ["productCode", "estadoRespuesta"]),
  },
  methods: {
    analyzeProspectStatus() {
      const actionsByProspectCode = actionsByProduct[this.productCode][this.currentComponent.step]
      const action = actionsByProspectCode.find(
        (it) => it.prospectStatus == this.estadoRespuesta
      )
      if (action.shouldGoNextPage) {
        this.$store.commit(`${this.currentComponent.nameSpace}/SET_STEP`, action.nextPage)
      } else if (action.shouldShowModal) {
        this.$emit('open-modal-menssage-prospectus', action)
      }
    }
  }

}
