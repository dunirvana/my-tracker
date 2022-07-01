import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ADICIONA_TAREFA, ALTERA_PROJETO, ATUALIZA_TAREFA, REMOVE_TAREFA, REMOVE_PROJETO } from "./tipo-mutacoes";

interface State {
  projetos: IProjeto[],
  tarefas: ITarefa[],
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projetos: [],
    tarefas: []
  },
  mutations: {
    //
    // Projetos
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjeto

      state.projetos.push(projeto);
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(pr => pr.id == projeto.id);
      state.projetos[index] = projeto;
    },
    [REMOVE_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(pr => pr.id != id);
    },
    //
    // Tarefas
    [ADICIONA_TAREFA] (state, tarefa: ITarefa) {
      tarefa.id = new Date().toISOString()
      state.tarefas.push(tarefa)
    },
    [ATUALIZA_TAREFA](state, tarefa: ITarefa) {
      const indice = state.tarefas.findIndex(p => p.id == tarefa.id)
      state.tarefas[indice] = tarefa
    },
    [REMOVE_TAREFA] (state, id: string) {
      state.tarefas = state.tarefas.filter(p => p.id != id)
    },    
  }
})

export function useStore(): Store<State> {
  return vuexUseStore(key);
}