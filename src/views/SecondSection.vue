<template>
  <main>
    <h1>Guest book</h1>

    <form v-on:submit="submitForm">
      <input
        type="text"
        placeholder="first name"
        name="firstName"
        v-model="guestForm.firstName"
      />
      <input
        type="text"
        placeholder="last name"
        name="lastName"
        v-model="guestForm.lastName"
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        v-model="guestForm.email"
      />
      <input
        type="tel"
        placeholder="phone"
        name="phone"
        v-model="guestForm.phone"
      />
      <input type="submit" value="Add Guest" />
    </form>

    <section class="guestbook">
      <div class="guestbook__row" v-for="(item, key) in getGuests()" :key="key">
        <div class="guestbook__col guestbook__col--first-name">
          {{ item.firstName }}
        </div>
        <div class="guestbook__col guestbook__col--last-name">
          {{ item.lastName }}
        </div>
        <div class="guestbook__col guestbook__col--email">{{ item.email }}</div>
        <div class="guestbook__col guestbook__col--phone">{{ item.phone }}</div>
      </div>
    </section>
    <button v-on:click="resetStates">Clear guestbooks</button>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SecondSection",
  data: () => {
    const exampleForm = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    return {
      exampleForm,
      guestForm: { ...exampleForm },
    };
  },
  methods: {
    clearForm() {
      this.guestForm = { ...this.exampleForm };
    },
    submitForm(e) {
      this.addGuest(this.guestForm);
      this.clearForm();

      // To prevent the form from submitting
      e.preventDefault();
    },
    ...mapMutations({
      addGuest: "Guestbook/addGuest",
      resetStates: "Guestbook/resetStates",
    }),
    ...mapGetters({
      getGuests: "Guestbook/getGuests",
      getGuestsCount: "Guestbook/getGuestsCount",
    }),
  },
};
</script>

<style scoped>
.guestbook {
  margin-top: 64px;
  border: 1px solid black;
}
.guestbook__row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid black;
  text-align: left;
  padding: 0 8px;
}
.guestbook__row:last-child {
  border-bottom: none;
}
.guestbook__col {
  padding: 12px 8px;
  border-right: 1px #444 solid;
}
.guestbook__col:last-child {
  border-right: none;
}
</style>
