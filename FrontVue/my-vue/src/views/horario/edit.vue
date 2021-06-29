<template>
  <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img :src="'../../src/assets/logo.png'"  width="300">
                </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#"><span @click="voltar()">Voltar</span></a>
                <router-link to="/add"> <a class="nav-link">Agendar alimentação</a></router-link>
                </div>
              </div>
            </div>
        </nav>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input v-model="hora" type="time" id="appt" name="appt" min="00:00" max="24:00" required>
          <input v-model="diaSemana" class="mt-2 mb-2 form-control form-control-sm" type="text" placeholder=".form-control-sm">
          <input v-model="dispensadoDia" class="mb-2 form-control form-control-sm" type="text" placeholder=".form-control-sm">
          <button class="btn btn-info btn-sm" @click="submitForm()">Salvar</button>
        </div>
      </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps, onMounted, ref } from "vue";
import { api } from "../../const/api";

const router = useRouter()

const props = defineProps({
  id: String
})

const hora = ref('')
const diaSemana = ref('')
const dispensadoDia = ref('')

function submitForm() {
  api.post(`horario/update/${props.id}`, {
    hora: hora.value,
    diaSemana: diaSemana.value,
    dispensadoDia: dispensadoDia.value,
  })
  .then(() => {
    router.push('/')
  })
}

function voltar() {
    router.push('/')
  }

  function buscar() {
    api.get(`horario/${props.id}`)
      .then(resp => {
      hora.value = resp.data.hora,
       diaSemana.value = resp.data.diaSemana,
      dispensadoDia.value = resp.data.dispensadoDia
      })
  }

onMounted(() => buscar())
</script>