<script>
export default {
  props: ["users"],

  data() {
    return {
      list: []
    };
  },

  mounted() {
    this.list = JSON.parse(this.users);
  },

  computed: {
    order: function() {
      return _.orderBy(this.list, "name");
    }
  },

  methods: {
   
  }
};
</script>

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
                <tr v-for="u in order" :key="u.name">
                    <th>{{ u.name }}</th>
                    <th>{{ u.email }}</th>
                </tr>
              
            </tbody>
        </table> 
   </div>
</template>


