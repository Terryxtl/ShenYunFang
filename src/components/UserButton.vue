<template>
  <div class="mx-2 dropdown">
    <button
      class="btn btn-light dropdown border border-dark-subtle"
      aria-expanded="false"
      data-bs-toggle="dropdown"
    >
      <div class="d-flex align-items-center justify-content-center">
        <svg
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          />
        </svg>
      </div>
    </button>
    <ul class="shadow-sm dropdown-menu dropdown-menu-end">
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
  </div>
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
