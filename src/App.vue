<template>
  <div id="app">
    <h1 class="header">HOLIDAY</h1>

    <h2>Available packages</h2>

    <div class="p-grid p-ai-stretch vertical-container">
      <div class="p-col">
        <Card
          id="card"
          style="width: 25rem; margin-bottom: 2em"
          v-for="holiday in holidays"
          v-bind:key="holiday.id"
        >
          <template #header>
            <img v-bind:src="getImage(holiday)" />
          </template>
          <template #title>
            {{ holiday.name }}
          </template>
          <template #content>
            {{ holiday.destination }}
            {{ holiday.country }}
            {{ holiday.priceGBP }}
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Book" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    getImage(holiday) {
      return require("./assets/" + holiday.image + ".jpg");
    },
  },
  data() {
    return {
      holidays: [
        {
          id: 1,
          name: "Two weeks in the Canaries!",
          image: "tenerife",
          destination: "Tenerife",
          country: "Spain",
          priceGBP: "500",
        },
        {
          id: 2,
          name: "City-break in NYC!",
          image: "ny",
          destination: "New York City",
          country: "United States of America",
          priceGBP: "1200",
        },
        {
          id: 3,
          name: "All inclusive in Greece!",
          image: "crete",
          destination: "Crete",
          country: "Greece",
          priceGBP: "800",
        },
        {
          id: 4,
          name: "All inclusive in Greece!",
          image: "crete",
          destination: "Crete",
          country: "Greece",
          priceGBP: "800",
        },
        {
          id: 5,
          name: "All inclusive in Greece!",
          image: "crete",
          destination: "Crete",
          country: "Greece",
          priceGBP: "800",
        },
      ],
    };
  },
};
</script>

<style>
* {
  font-family: "montserrat", sans-serif;
}

.header {
  padding: 10px 0px;
}

p {
  line-height: 1.5;
  margin: 0;
}

#card {
  margin: 10px;
  display: inline-block;
}

img {
  float: left;
  height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
}
</style>
