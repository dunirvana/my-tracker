<template>
  <Box>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}        
      </div>
      <div class="column is-3">
        <i>({{ tarefa.projeto && tarefa.projeto.nome ? tarefa.projeto.nome : 'N/D' }})</i>
      </div>
      <div class="column is-2">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column">
        <button class="button ml-2 is-danger" @click="excluir(tarefa.id)">
            <span class="icon is-small">
            <i class="fas fa-trash"></i>
            </span>
        </button>      
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import ITarefa from "@/interfaces/ITarefa"
import Cronometro from "./Cronometro.vue"
import Box from "./Box.vue"
import { REMOVE_TAREFA } from "@/store/tipo-mutacoes"
import { useStore } from "@/store"

export default defineComponent({
  name: 'Tarefa',
  setup() {
    const store = useStore();
    return {
      store
    }
  },  
  components: {
    Cronometro,
    Box    
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  methods: {
      excluir(id: string) {
        this.store.commit(REMOVE_TAREFA, id);
      }          
  }
})
</script>

<style scoped>
.box {
  background: #FAF0CA;
}
</style>