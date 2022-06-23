<template>
  <section>
    <strong>{{ tempoDecorrido }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Cronometro',
  props: {
    tempoEmSegundos: { 
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrido () : string {
      // cria uma nova data com os segundos (* 1000 porque o construtpr entende em mls), depois formata e recorta a parte de tempo
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11 ,8)
    }
  }
})
</script>
