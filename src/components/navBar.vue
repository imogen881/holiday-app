<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img id="logo" alt="logo" src="../assets/plane.png" class="p-mr-2" />
      </template>
      <template #end>
        <InputText
          placeholder="Search"
          type="text"
          v-model="query"
          v-on:keyup.enter="searchFunction()"
        />
      </template>
    </Menubar>

    <Calendar v-model="date13" :touchUI="false" v-if="showCalendar === true" />
  </div>
</template>


<script>
export default {
  name: "NavBar",
  methods: {
    searchFunction() {
      this.$emit("searchFunction", this.query);
    },
  },
  data() {
    return {
      query: "",

      selectedStartDate: "",
      selectedEndDate: "",
      showCalendar: false,
      items: [
        {
          label: "Date",
          icon: "pi pi-fw pi-calendar",
          command: () => {
            this.showCalendar = true;
          },
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark",
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video",
                },
              ],
            },
          ],
        },
        {
          label: "Price",
          icon: "pi pi-fw pi-tag",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark",
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>



<style scoped>
#logo {
  height: 30px;
  margin: 10px;
}
</style>