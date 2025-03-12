<template>
  <div class="sidebar">
    <h2>Menu</h2>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/documents">Dokumen</router-link></li>
      <li><router-link to="/settings">Pengaturan</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #2c3e50;
  color: white;
  padding: 20px;
  position: fixed;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
