<template>
  <nav class="q-navbar">
    <img
      class="q-navbar-logo"
      width="50"
      height="40"
      src="../../assets/icon_q-bit.png"
      alt="the q-bit logo of this website"
    />

    <ul class="q-navbar-navigation right">
      <q-theme-button class="q-navbar-item"></q-theme-button>
    </ul>
  </nav>
</template>

<script>
import QThemeButton from "../Theme/AppThemeButton.vue";

export default {
  components: {
    QThemeButton,
  },
};
</script>

<style scoped>
.q-navbar {
  display: flex;
  justify-content: space-between;
  color: var(--accent-color-primary);
  background-color: var(--accent-color-primary);
  padding: var(--gap-sm);
}

ul.q-navbar-navigation {
  align-items: center;
}

.q-navbar-logo {
  font-weight: 600;
  font-size: var(--text-size-md);
}

.q-navbar-logo {
  background-color: white;
  border-radius: 0 var(--gap-sm) 0 var(--gap-sm);
}

.q-navbar-logo,
.q-navbar-item {
  display: inline-block;
  padding: var(--gap-sm) var(--gap-md);
}

.left {
  text-align: left;
  justify-content: flex-start;
}

.right {
  text-align: right;
  justify-content: flex-end;
}
</style>