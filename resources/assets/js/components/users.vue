<template>
  <div>
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in list" :key="u.name">
          <th>{{ u.name }}</th>
          <th>{{ u.email }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["users"],

  data () {
    return {
      list: []
    }
  },

  mounted() {
    this.list = JSON.parse(this.users).sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} )
  }
}
</script>
