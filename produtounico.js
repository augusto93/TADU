const vm = new Vue({
  el: "#app",
  data: {
    projeto: {}
  },
  methods: {
    fetchProjeto() {
      fetch("http://taduapilocal.local/wp-json/api/projeto/zereses/")
      .then(r => r.json())
      .then(r => {
        this.projeto = r;
      })
    }
  },
  created() {
    this.fetchProjeto();
  }
})