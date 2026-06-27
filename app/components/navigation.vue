<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><a href="/portfolio">Portfolio</a></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
  padding-left: 0;
}

li a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background: black;
  color: white;
}

li a.router-link-active {
  border: 6px double black;
  padding: 10px;
}
</style>

