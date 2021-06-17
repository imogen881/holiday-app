<template>
  <div ref="bookingForm">
    <h2>Complete your booking below</h2>
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
        <h3 id="subtotal" v-bind="subtotal">Subtotal: {{ subtotal }}</h3>
      </div>

      <h2>Please enter your contact details</h2>

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
</template>

<script>
export default {
  name: "BookingForm",
  methods: {
    updated() {
    this.$nextTick(function () {
      var element = this.$refs["bookingForm"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    });
  },
  }
</script>

<style scoped>
</style>