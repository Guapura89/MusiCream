<template>
  <div class="signin__container">
    <div class="content row">
      <div class="form-login col-12 col-md-6">
        <form
          @submit.prevent="login(this.userEmail, this.userPassword)"
          class="mx-auto"
        >
          <!-- CORREO -->
          <div class="my-5 text-center">
            <h1 class="fw-bold">Log in</h1>
          </div>
          <div class="form-floating">
            <input
              class="form-control mb-5"
              type="text"
              required
              id="email"
              placeholder="Enter your email"
              v-model="userEmail"
            />
            <label for="email">Enter your email</label>
          </div>

          <!-- PASSWORD -->
          <div class="form-floating">
            <input
              class="form-control mb-5"
              type="password"
              required
              id="password"
              placeholder="Enter your password"
              v-model="userPassword"
            />
            <label for="password">Enter your password</label>
          </div>

          <div class="d-grid gap-2">
            <button
              type="submit"
              class="text-light btn btn-primary rounded-pill mx-auto mb-4"
            >
              Sing in
            </button>
          </div>
          <div class="mt-5 text-end fw-bold text-muted">
            <router-link to="/signup">Don't have an account?</router-link>
          </div>
        </form>
      </div>
      <div class="form-img col-12 col-md-6"></div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import Swal from "sweetalert2";

export default {
  name: "AboutView",
  data() {
    return {
      userEmail: "",
      userPasword: "",
    };
  },
  methods: {
    login(email, password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        // eslint-disable-next-line no-unused-vars
        .then((userCredential) => {
          console.log("¡Sesión iniciada!");
          router.push("/home");
          // Signed in
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            Swal.fire({
              title: "Error!",
              text: "Password incorrect",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
          if (errorCode === "auth/user-not-found") {
            Swal.fire({
              title: "Error!",
              text: "User not found",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
          if (errorCode === "auth/invalid-email") {
            Swal.fire({
              title: "Invalid email",
              text: "Please check the email, and try again",
              icon: "question",
              confirmButtonText: "OK",
            });
          }
        });
    },
  },
};
</script>

<style lang="scss">
.signin__container {
  //
  height: 100vh;
  display: flex;
  align-items: center;
  .content {
    height: 700px;
    width: 70%;
    margin: 0 auto;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    .form-login {
      display: flex;
      align-items: center;
      form {
        width: 90%;
        button {
          width: 50%;
        }
      }
    }

    .form-img {
      background-image: url("https://i.pinimg.com/564x/0c/36/7f/0c367f2e570fb70383d979d6a5edd657.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      // img {
      //   width: 60%;
      // }
    }
  }
}
</style>
