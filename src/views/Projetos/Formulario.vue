<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Formulario',
  setup() {
    const store = useStore();
    return {
      store
    }
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      nomeDoProjeto: ''
    }
  },
  mounted() {    
    if (this.id) {
      console.log('mounted');
      const projeto = this.store.state.projetos.find(pr => pr.id == this.id);
      this.nomeDoProjeto = projeto === undefined ? '' : projeto.nome;
    }
  },
  methods: {
    salvar() {
      if(this.id) {
        this.store.commit('ALTERA_PROJETO', {
          id: this.id,
          nome: this.nomeDoProjeto
        });
      }
      else {
        this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto);
      } 

      this.nomeDoProjeto = '';
      this.$router.push('/projetos');
    }
  }
});

</script>
