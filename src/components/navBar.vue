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
          v-on:keyup.enter="search"
        />
      </template>
    </Menubar>
  </div>
</template>


<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        {
          label: "Date",
          icon: "pi pi-fw pi-calendar",
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
</style>