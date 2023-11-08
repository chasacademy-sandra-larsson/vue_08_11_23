<script lang="ts"></script>

<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/movies">Movies</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>@copyrightjossa</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Helvetica';
  text-align: center;
}

header,
footer {
  background-color: #34495e;
  color: #fff;
  padding: 1rem 0;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}
</style>
