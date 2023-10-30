<template>
    <div class="container">
          <DataTable 
          class="container__table" 
          :value="dataRef" 
          tableStyle="width: 100%"
          scrollable 
          scrollHeight="400px"
          >
              <Column field=name header="Nombre" sortable style="width: 25%"></Column>
              <Column field=surname header="Apellidos" sortable style="width: 25%"></Column>
              <Column field=available header="Activo/Inactivo" sortable style="width: 25%"></Column>
              <Column field=last_login header="Ultima conexión" sortable style="width: 25%"></Column>
          </DataTable>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {getUsersS2 } from '../api/users.api'

// primeVue

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const dataRef = ref([]);

async function getDataTable() {
  try{
    const data = await getUsersS2();
    if (data === []) {
        return
      }
    dataRef.value = data
    
  }
  catch{
    return
  }
}


onMounted(getDataTable);

</script>