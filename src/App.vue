<template>
  <div id="app">
    <!-- <div>
      <Menubar :model="items">
        <template #start>
          <img id="logo" alt="logo" src="./assets/plane.png" class="p-mr-2" />
        </template>
        <template #end>
          <InputText placeholder="Search" type="text" v-model="query" v-on:keyup.enter="search" />
        </template>
      </Menubar>
    </div> -->

    <NavBar v-on:searchFunction="searchFunction" />

    <div class="p-grid p-ai-center vertical-container">
      <div class="p-col">
        <Card
          id="card"
          style="width: 25rem; margin-bottom: 2em"
          v-for="holiday in filteredHolidays"
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
    </div>

    <div ref="bookingForm" v-if="booking === true && confirmed === false">
      <h2 class="formHeaders">Complete your booking below</h2>

      <div class="p-grid p-jc-center">
        <div class="p-col-1">
          <label>Selected package:</label>
          <Dropdown
            class="formField"
            v-model="confirmedHoliday.name"
            :options="holidays"
            optionLabel="name"
            :placeholder="selectedHoliday.name"
          />
        </div>

        <div class="p-col">
          <label for="startDate">Start date:</label>
          <Calendar
            id="startDate"
            v-model="confirmedHoliday.startDate"
            :showIcon="true"
          />

          <label for="endDate">End date:</label>
          <Calendar
            id="endDate"
            v-model="confirmedHoliday.endDate"
            :showIcon="true"
          />
        </div>

        <div class="p-col">
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

        <div class="p-col">
          <h3 id="subtotal" v-bind="subtotal">Subtotal: £{{ subtotal }}</h3>
        </div>

        <h2 class="formHeaders">Please enter your contact details</h2>

        <div class="p-col">
          <label for="firstName">First name:</label>
          <InputText
            class="formField"
            id="firstName"
            v-model="confirmedHoliday.firstName"
          />
        </div>

        <div class="p-col">
          <label for="lastName">Last name:</label>
          <InputText
            class="formField"
            id="lastName"
            v-model="confirmedHoliday.lastName"
          />
        </div>

        <div class="p-col">
          <label for="email">Email address:</label>
          <InputText
            class="formField"
            id="email"
            v-model="confirmedHoliday.email"
          />
        </div>

        <div class="p-col">
          <label for="phone">Contact number:</label>
          <InputNumber
            :useGrouping="false"
            class="formField"
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
    </div>

    <Sidebar
      id="bookingConfirmation"
      v-model:visible="visibleFull"
      :baseZIndex="1000"
      position="full"
    >
      <div id="bookingConfirmationText">
        <h2>Booking Complete</h2>
        <h3>You're going to {{ selectedHoliday.destination }}!</h3>
        <p>Details will be sent to your email address.</p>
        <p>
          <img
            id="bookingConfirmationImage"
            v-bind:src="getImage(selectedHoliday)"
          />
        </p>
      </div>
    </Sidebar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: { NavBar },
  methods: {
    getImage(holiday) {
      return require("./assets/" + holiday.image + ".jpg");
    },
    startBooking(holiday) {
      this.booking = true;
      this.selectedHoliday = holiday;
      this.subtotal = holiday.priceGBP;
    },
    confirmation() {
      this.confirmed = true;
      this.visibleFull = true;
    },
    calculateSubtotal(numOfGuests) {
      this.subtotal = this.selectedHoliday.priceGBP * numOfGuests;
    },
    changePackage(holiday) {
      this.selectedHoliday = holiday;
      this.confirmedHoliday.numOfGuests = 1;
      const newPackagePrice = holiday.priceGBP;
      this.subtotal = newPackagePrice;
    },
    searchFunction(query) {
      this.query = query;
    },
  },
  updated() {
    this.$nextTick(function () {
      var element = this.$refs["bookingForm"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    });
  },
  watch: {
    "confirmedHoliday.numOfGuests": {
      handler(newValue) {
        this.calculateSubtotal(newValue);
      },
    },
    "confirmedHoliday.name": {
      handler(newValue) {
        this.changePackage(newValue);
      },
    },
  },
  computed: {
    filteredHolidays: function () {
      return this.holidays.filter((holiday) => {
        return holiday.name.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
  data() {
    return {
      booking: false,
      confirmed: false,
      visibleFull: false,
      selectedHoliday: undefined,
      subtotal: 0.0,
      query: "",
      searchResult: [],
      confirmedHoliday: {
        name: "",
        startDate: "",
        endDate: "",
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
.cardImage {
  float: left;
  height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
}
.formField {
  width: 50%;
  margin: 8px !important;
}
.formHeaders {
  background-color: #f8f9fa;
  color: #495057;
  padding: 15px;
}
input .formField {
  margin: 15px;
}
label {
  margin: 15px;
}
#completeBooking {
  margin: 15px;
}
#subtotal {
  margin: 15px;
  color: #495057;
}
.p-field * {
  display: block;
}
.cardContent {
  margin: 10px;
}

#bookingConfirmationText {
  text-align: center;
  margin: 15px;
}
#bookingConfirmationImage {
  margin-top: 20px;
  height: 500px;
  width: 800px;
  display: inline-block;
}
</style>