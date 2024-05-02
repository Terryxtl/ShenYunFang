<template>
  <a
    aria-expanded="false"
    class="nav-link"
    data-bs-toggle="dropdown"
    role="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-person-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
    </svg>
    <small class="d-md-none ms-2 dropdown-toggle">个人</small>
  </a>
  <ul class="shadow-sm dropdown-menu">
    <li>
      <router-link class="dropdown-item" to="#">页面管理</router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="#">系统公告</router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="#">问题反馈</router-link>
    </li>
    <li><hr class="dropdown-divider" /></li>
    <li>
      <router-link class="dropdown-item" to="#">账号设置</router-link>
    </li>
    <li>
      <router-link class="dropdown-item text-danger" to="#">登出</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
button {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
}
</style>
