<template>
  <div id="app">
    <h1 class="header">HOLIDAY</h1>

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
            <Button
              icon="pi pi-check"
              label="Book"
              v-on:click="startBooking(holiday)"
            />
          </template>
        </Card>
      </div>
    </div>

    <div ref="bookingForm" v-if="booking === true">
      <div>
        <label>Selected package:</label>
        <Dropdown
          class="formField"
          v-model="confirmedHoliday.name"
          :options="holidays"
          optionLabel="name"
          :placeholder="selectedHoliday.name"
        />
      </div>
      <div>
        <label for="range">Dates:</label>
        <Calendar
          class="formField"
          id="range"
          v-model="confirmedHoliday.dates"
          selectionMode="range"
          :manualInput="false"
        />
      </div>
      <div>
        <label for="numOfGuests">Number of guests:</label>
        <InputNumber
          class="formField"
          id="numOfGuests"
          v-model="confirmedHoliday.numOfGuests"
          showButtons
          :min="1"
          :max="10"
          :placeholder="1"
        />
      </div>

      <div>
        <p id="subtotal">Subtotal: </p>
      </div>

      <div>
        <label for="firstName">First name:</label>
        <InputText
          class="formFieldName"
          id="firstName"
          v-model="confirmedHoliday.firstName"
        />
        <label for="lastName">Last name:</label>
        <InputText
          class="formFieldName"
          id="lastName"
          v-model="confirmedHoliday.lastName"
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <InputText
          class="formFieldContact"
          id="email"
          v-model="confirmedHoliday.email"
        />
        <label for="phone">Contact number:</label>
        <InputText
          class="formFieldContact"
          id="phone"
          v-model="confirmedHoliday.phone"
        />
      </div>

      <Button
        label="Complete booking"
        id="completeBooking"
        v-on:click="confirmation()"
      />
    </div>

    <div ref="confirmation" v-if="confirmed === true">
      <h2>BOOKING COMPLETE</h2>
      <h3>You're going to {{ selectedHoliday.destination }}!</h3>
      <p>Details will be sent to your email address: {{ confirmedHoliday.email }}</p>
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
    startBooking(holiday) {
      this.booking = true;
      this.selectedHoliday = holiday;
    },
    confirmation() {
      this.confirmed = true;
    },
  },
  updated() {
    this.$nextTick(function () {
      var element = this.$refs["bookingForm"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    });
  },
  data() {
    return {
      booking: false,
      confirmed: false,
      selectedHoliday: undefined,
      confirmedHoliday: {
        name: "",
        dates: "",
        numOfGuests: 1,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      holidays: [
        {
          id: 1,
          name: "Two weeks in the Canaries",
          image: "tenerife",
          destination: "Tenerife",
          country: "Spain",
          priceGBP: "500",
        },
        {
          id: 2,
          name: "City-break in NYC",
          image: "ny",
          destination: "New York City",
          country: "United States of America",
          priceGBP: "1200",
        },
        {
          id: 3,
          name: "Greece All Inclusive",
          image: "crete",
          destination: "Crete",
          country: "Greece",
          priceGBP: "1000",
        },
        {
          id: 4,
          name: "Skiing in France",
          image: "chamonix",
          destination: "Chamonix",
          country: "France",
          priceGBP: "1500",
        },
        {
          id: 5,
          name: "Hiking in Italy",
          image: "sardinia",
          destination: "Sardinia",
          country: "Italy",
          priceGBP: "600",
        },
        {
          id: 6,
          name: "Safari in South Africa",
          image: "capetown",
          destination: "Cape Town",
          country: "South Africa",
          priceGBP: "1800",
        },
        {
          id: 7,
          name: "Explore Paris",
          image: "paris",
          destination: "Paris",
          country: "France",
          priceGBP: "300",
        },
        {
          id: 8,
          name: "Wine-tasting in Tuscany",
          image: "tuscany",
          destination: "Tuscany",
          country: "Italy",
          priceGBP: "700",
        },
        {
          id: 9,
          name: "Travel across Australia",
          image: "sydney",
          destination: "Sydney",
          country: "Australia",
          priceGBP: "2000",
        },
        {
          id: 10,
          name: "Explore Rio de Janeiro",
          image: "rio",
          destination: "Rio de Janeiro",
          country: "Brazil",
          priceGBP: "1500",
        },
        {
          id: 11,
          name: "Historial tour of Rome",
          image: "rome",
          destination: "Rome",
          country: "Italy",
          priceGBP: "700",
        },
        {
          id: 12,
          name: "Extreme Sports in New Zealand",
          image: "nz",
          destination: "Auckland",
          country: "New Zealand",
          priceGBP: "2000",
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

.formField {
  width: 50%;
  margin: 10px;
}

.formFieldName .formFieldContact {
  width: 25%;
}

label {
  margin: 15px;
}

#completeBooking {
  margin: 15px;
}

#subtoal {
  margin: 15px;
}
</style>
