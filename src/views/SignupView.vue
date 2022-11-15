<template>
  <div class="signup__container">
    <div class="row content">
      <div class="form-img col-12 col-md-6"></div>
      <div class="form-signup col-12 col-md-6">
        <form
          @submit.prevent="register(this.userEmail, this.userPassword)"
          class="mx-auto"
        >
          <router-link to="/"
            ><h5>
              <i class="bi bi-arrow-left-circle-fill"></i> Back
            </h5></router-link
          >
          <div class="my-5 text-center">
            <h1 class="fw-bold">Sign up</h1>
          </div>
          <!-- CORREO -->
          <div class="form-floating">
            <input
              class="form-control mb-5"
              type="email"
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
              placeholder="Enter a password"
              v-model="userPassword"
            />
            <label for="password">Enter a password</label>
          </div>

          <!-- REPASSWORD -->
          <div class="form-floating">
            <input
              class="form-control mb-5"
              type="password"
              required
              id="repassword"
              placeholder="Enter again the password"
              v-model="userRepassword"
            />
            <label for="repassword">Enter again the password</label>
          </div>

          <div class="d-grid gap-2">
            <button
              type="submit"
              class="btn btn-outline-primary rounded-pill mx-auto"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import router from "@/router";

export default {
  name: "SignupView",
  data() {
    return {
      userEmail: "",
      userPassword: "",
      userRepassword: "",
    };
  },
  methods: {
    register(email, password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          Swal.fire({
            title: "Wellcome!",
            text: "Now you can log in",
            icon: "success",
            confirmButtonText: "Go to log in",
          });
          router.push("/");
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          if (errorCode === "email-already-in-use") {
            Swal.fire({
              title: "Sorry",
              text: "Email is already in use",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
          if (errorCode === "auth/invalid-email") {
            Swal.fire({
              title: "Invalid email",
              text: "Please, check ypur email and try again",
              icon: "question",
              confirmButtonText: "OK",
            });
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.signup__container {
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
    .form-signup {
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
      background-image: url("https://i.pinimg.com/564x/01/c7/51/01c751482ef7c4f5e93f3539efd27f6f.jpg");
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
