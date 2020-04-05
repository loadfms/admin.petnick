
<template>
  <div class="menu">
    <h1 class="menu__logo" />
    <ul class="menu__ul">
      <li class="menu__li">
        <nuxt-link class="menu__li__link menu__li__link-dash" to="/dashboard">
          Dashboard
        </nuxt-link>
      </li>
      <li class="menu__li">
        <nuxt-link class="menu__li__link menu__li__link-schedule" to="/dashboard">
          Agendamento
        </nuxt-link>
      </li>
      <li class="menu__li">
        <nuxt-link class="menu__li__link menu__li__link-customer" to="/dashboard">
          Clientes
        </nuxt-link>
      </li>
    </ul>
    <div class="menu__settings">
      <ul class="menu__ul">
        <li class="menu__li-nomargin">
          <span class="menu__li__link menu__li__link-settings">
            Administraçao
          </span>
        </li>
        <li class="menu__li-nomargin">
          <nuxt-link class="menu__li__link menu__li__link-noicon" to="/service">
            Servicos
          </nuxt-link>
        </li>
        <li class="menu__li-nomargin">
          <nuxt-link class="menu__li__link menu__li__link-noicon" to="/dashboard">
            Funcionarios
          </nuxt-link>
        </li>
        <li class="menu__li-nomargin">
          <nuxt-link class="menu__li__link menu__li__link-noicon" to="/dashboard">
            Usuarios
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
</script>
