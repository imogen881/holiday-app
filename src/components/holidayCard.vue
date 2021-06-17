<template>
  <div>
    <Card
      id="card"
      style="width: 25rem; margin-bottom: 2em"
      v-for="holiday in holidays"
      v-bind:key="holiday.id"
    >
      <template #header>
        <img class="cardImage" v-bind:src="getImage(holiday)" />
      </template>
      <template #title> {{ holiday.name }} </template>m>
      <template #content>
        <div class="cardContent">
          <strong>{{ holiday.destination }}</strong
          >, {{ holiday.country }}
        </div>
        <div class="cardContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="cardContent">
          <strong>£{{ holiday.priceGBP }}pp</strong>
        </div>
      </template>
      <template #footer>
        <Button
          icon="pi pi-check"
          label="Book"
          v-on:click="startBooking(holiday)"
        />
      </template>
    </Card>
  </div>

  <div>
    <BookingForm v-if="booking === true && confirmed === false" />
  </div>
</template>

<script>
import BookingForm from "@/components/BookingForm";

export default {
  name: "HolidayCard",
  components: { BookingForm },
  methods: {
    getImage(holiday) {
      return require("../assets/" + holiday.image + ".jpg");
    },
    startBooking(holiday) {
      this.booking = true;
      this.selectedHoliday = holiday;
      this.subtotal = holiday.priceGBP;
    },
  },
  data() {
    return {
      holidays: [
        {
          id: 1,
          name: "Two weeks in the Canaries",
          image: "tenerife",
          destination: "Tenerife",
          country: "Spain",
          priceGBP: 500,
        },
        {
          id: 2,
          name: "City-break in NYC",
          image: "ny",
          destination: "New York City",
          country: "United States of America",
          priceGBP: 1200,
        },
        {
          id: 3,
          name: "Greece All Inclusive",
          image: "crete",
          destination: "Crete",
          country: "Greece",
          priceGBP: 1000,
        },
        {
          id: 4,
          name: "Skiing in France",
          image: "chamonix",
          destination: "Chamonix",
          country: "France",
          priceGBP: 1500,
        },
        {
          id: 5,
          name: "Hiking in Italy",
          image: "sardinia",
          destination: "Sardinia",
          country: "Italy",
          priceGBP: 600,
        },
        {
          id: 6,
          name: "Safari in South Africa",
          image: "capetown",
          destination: "Cape Town",
          country: "South Africa",
          priceGBP: 1800,
        },
        {
          id: 7,
          name: "Explore Paris",
          image: "paris",
          destination: "Paris",
          country: "France",
          priceGBP: 300,
        },
        {
          id: 8,
          name: "Wine-tasting in Tuscany",
          image: "tuscany",
          destination: "Tuscany",
          country: "Italy",
          priceGBP: 700,
        },
        {
          id: 9,
          name: "Travel across Australia",
          image: "sydney",
          destination: "Sydney",
          country: "Australia",
          priceGBP: 2000,
        },
        {
          id: 10,
          name: "Explore Rio de Janeiro",
          image: "rio",
          destination: "Rio de Janeiro",
          country: "Brazil",
          priceGBP: 1500,
        },
        {
          id: 11,
          name: "Historial tour of Rome",
          image: "rome",
          destination: "Rome",
          country: "Italy",
          priceGBP: 700,
        },
        {
          id: 12,
          name: "Extreme Sports in New Zealand",
          image: "nz",
          destination: "Auckland",
          country: "New Zealand",
          priceGBP: 2000,
        },
      ],
    };
  },
};
</script>

<style scoped>
#card {
  margin: 10px;
  display: inline-block;
}

.cardImage {
  float: left;
  height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
}
</style>