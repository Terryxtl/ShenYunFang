<template>
  <nav class="shadow-sm navbar navbar-expand-md bg-body-tertiary px-5 -top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="/logo.png" width="32" />
        <strong class="mx-1">审韵坊</strong>
      </router-link>
      <button
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link aria-current="page" class="nav-link" to="/"
              >首页</router-link
            >
          </li>
          <li
            class="nav-item dropdown"
            v-for="item in dropdownlist"
            :key="item.menuname"
          >
            <a
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
            >
              {{ item.menuname }}
            </a>
            <ul class="shadow-sm dropdown-menu">
              <li>
                <router-link
                  class="dropdown-item"
                  v-for="obj in item.itemlist"
                  :key="obj.itemname"
                  :to="obj.url"
                  >{{ obj.itemname }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav flex-row flex-wrap mx-md-auto">
          <li class="nav-item py-1 py-md-1 col-12 col-md-auto">
            <search-bar />
          </li>
        </ul>
        <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <li class="nav-item dropdown py-1 py-md-1 col-12 col-md-auto">
            <user-button />
          </li>
          <li class="nav-item py-1 py-md-1 col-12 col-md-auto">
            <div class="vr d-none d-md-flex h-100 mx-md-2 text-black-50"></div>
            <hr class="d-md-none my-2 text-black-50" />
          </li>
          <li class="nav-item py-1 py-md-1 col-12 col-md-auto">
            <to-github />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue'
import ToGithub from './ToGithub.vue'
import UserButton from './UserButton.vue'
export default {
  components: { SearchBar, UserButton, ToGithub },
  data() {
    return {
      dropdownlist: [
        {
          menuname: '审计优选',
          itemlist: [
            { itemname: '精品集萃', url: '/1' },
            { itemname: '审计精鉴', url: '' },
            { itemname: '审计故事', url: '/2' },
            { itemname: '政策法规', url: '/4' }
          ]
        },
        {
          menuname: '审计交流',
          itemlist: [
            { itemname: '审艺购坊', url: '/3' },
            { itemname: '创意激扬', url: '#' },
            { itemname: '审计心语', url: '#' }
          ]
        },
        {
          menuname: '审计书海',
          itemlist: [{ itemname: '书中审计', url: '/5' }]
        }
      ]
    }
  }
}
</script>

<style scoped></style>
