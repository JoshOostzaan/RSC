<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p class="welcome-text">
      Welkom bij RealEstateCare. Kies een onderdeel om verder te gaan.
    </p>

      <router-link to="/inspections/assigned" class="dashboard-card">
        <h2>Toegewezen inspecties</h2>
        <p>Bekijk inspecties die nog uitgevoerd moeten worden.</p>
      </router-link>
      <br>
      <router-link to="/inspections/completed" class="dashboard-card">
        <h2>Uitgevoerde inspecties</h2>
        <p>Bekijk inspecties die al zijn afgerond.</p>
      </router-link>
      <br>
      <router-link to="/knowledge-base" class="dashboard-card">
        <h2>Kennisbase</h2>
        <p>Handleidingen, documenten en procedures.</p>
      </router-link>
      <br>
      <router-link to="/settings" class="dashboard-card">
        <h2>Instellingen</h2>
        <p>Beheer je account en voorkeuren.</p>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
};
</script>

<style>
.dashboard {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.dashboard h1 {
  margin-bottom: 10px;
  color: #141b1f;
}

.welcome-text {
  margin-bottom: 30px;
  color: #475e6c;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.dashboard-card {
  display: block;
  background: white;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  border-top: 4px solid #00aaa2;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: 0.2s;
}

.dashboard-card h2 {
  margin-bottom: 10px;
  color: #141b1f;
}

.dashboard-card p {
  color: #475e6c;
  line-height: 1.4;
}

.dashboard-card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
  color: inherit;
}
</style>
