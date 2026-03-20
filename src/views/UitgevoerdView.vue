<template>
  <div class="page">
    <h1>Uitgevoerde inspecties</h1>

    <p v-if="loading">Gegevens laden...</p>

    <div v-else>
      <div
        v-for="inspection in inspections"
        :key="inspection.id"
        class="inspection-card"
      >
        <h3>{{ inspection.title }}</h3>
        <p>Locatie: {{ inspection.location }}</p>
        <p>Datum: {{ inspection.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getInspections } from '@/services/service';

export default {
  name: 'CompletedInspectionsView',

  data() {
    return {
      inspections: [],
      loading: true
    };
  },

  async mounted() {
    const data = await getInspections();

    const completedInspections = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'completed') {
        completedInspections.push(data[i]);
      }
    }

    this.inspections = completedInspections;
    this.loading = false;
  }
};
</script>

<style scoped>
.page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.inspection-card {
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #00aaa2;
}
</style>