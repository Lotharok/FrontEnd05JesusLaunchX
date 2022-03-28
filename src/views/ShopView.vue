<template>
  <div class="row"></div>
  <form>
    <AppFlavor />
    <AppOrnament />
    <AppForm />
  </form>
</template>

<script>
import AppForm from "@/components/AppForm.vue";
import AppFlavor from "@/components/AppFlavor.vue";
import AppOrnament from "@/components/AppOrnament.vue";

export default {
  name: "ShopView",
  components: {
    AppForm,
    AppFlavor,
    AppOrnament,
  },
};
</script>
