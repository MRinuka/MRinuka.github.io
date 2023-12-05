document.addEventListener("alpine:init", () => {
  Alpine.store("user", {
    profile: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postal_code: "",
      country: "",
    },
    reservation: {
      hotel: "Heritance Kandalama",
      room_type: "",
      number_of_rooms: "",
      check_in: "",
      check_out: "",
      adults: 0,
      children: 0,
      children_above_five: 0,
      extra_bed: 0,
      promo_code: "",
      total: 0,
      status: "pending",
      payment_type: "card",
      adventure_type: "Scuba Diving",
      adventure_adults: 0,
      adventure_children: 0,
    },
    updateUser() {
      localStorage.setItem(
        "user_profile",
        JSON.stringify(this.$store.user.profile)
      );
      localStorage.setItem(
        "user_reservation",
        JSON.stringify(this.$store.user.reservation)
      );
    },
    init() {
      this.profile =
        JSON.parse(localStorage.getItem("user_profile")) || this.profile;
      this.reservation =
        JSON.parse(localStorage.getItem("user_reservation")) ||
        this.reservation;
    },
  });
});
