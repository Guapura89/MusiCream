<template>
  <div class="home">
    <div class="home__container">
      <!-- navbar -->
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style="position: absolute; width: 100%; z-index: 2"
      >
        <div class="container">
          <a class="navbar-brand"><h1 class="fw-bold">MusiCream</h1></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto me-4 align-items-center">
              <li class="nav-item mx-1">
                <a @click="scrollToHome" class="nav-link py-auto"
                  ><h5 class="d-inline fw-bold">Home</h5></a
                >
              </li>

              <li class="nav-item mx-1">
                <a @click="scrollToMusic" class="nav-link"
                  ><h5 class="d-inline fw-bold">Music</h5></a
                >
              </li>

              <li class="nav-item mx-1">
                <a @click="scrollToAbout" class="nav-link"
                  ><h5 class="d-inline fw-bold">About</h5></a
                >
              </li>
              <li class="nav-item mx-1">
                <a @click="scrollToContact" class="nav-link"
                  ><h5 class="d-inline fw-bold">Contact us</h5></a
                >
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link text-light"
                  ><img
                    style="width: 40px"
                    src="https://cdn-icons-png.flaticon.com/128/4400/4400828.png"
                    alt="signout"
                    @click="signout"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Welcome container -->
      <div class="row wellcome__container">
        <div
          ref="wellcome__container"
          class="wellcome-item__container col-12 col-md-6 p-1 p-md-4 d-flex flex-column justify-content-center text-center text-white"
        >
          <div class="info w-50 mx-auto">
            <h1 class="fw-bold">Welcome to MusiCream</h1>
            <p>The website to buy the albums that you love.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              inventore.
            </p>
          </div>
        </div>
        <div
          class="wellcome-item__container col-12 col-md-6 d-flex justify-content-center align-items-center text-center"
        >
          <div
            class="img-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              class="note-img1"
              src="../assets/images/music-note-1.png"
              alt=""
            />
            <img
              class="note-img2"
              src="../assets/images/music-note-2.png"
              alt=""
            />
            <img class="note-img3" src="../assets/images/cd.png" alt="" />
            <img class="w-75" src="../assets/images/listen.png" alt="listen" />
          </div>
        </div>
      </div>

      <div class="albums-title text-center my-5" ref="albums-title">
        <h1 class="fw-bold my-5">Most popular albums</h1>
      </div>

      <!-- Albums section -->
      <div class="container my-5">
        <div class="row d-flex justify-content-around">
          <div
            v-for="(album, idx) in albums"
            :key="idx"
            class="col-12 col-sm-5 col-md-5 col-lg-3 my-5 mx-3 text-center album__card"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div class="p-3">
              <div class="card-title my-3">
                <h4 class="fw-bold">{{ album.title }}</h4>
              </div>
              <img
                class="disc w-50"
                src="../assets/images/cd.png"
                alt="song-img"
              />
              <p class="fw-bold my-3">{{ album.artist }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- About section -->
      <div ref="about__section"></div>
      <div class="about__section">
        <div class="row">
          <div
            class="about-left d-flex justify-content-center align-items-center col-12 col-md-6 my-3"
          >
            <div>
              <h1 class="fw-bold">
                What is <span class="text-primary">MusiCream</span>?
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                animi rerum minima architecto provident aspernatur placeat
                dolorum, aut quidem error eos nostrum est quae maiores nam
                soluta a veritatis recusandae!
              </p>
              <div class="text-center w-100 mt-5">
                <button class="btn btn-primary mx-auto px-5 pt-2 text-white">
                  <router-link to="/dashboard">Dashboard</router-link>
                </button>
              </div>
            </div>
          </div>
          <div class="about-right col-12 col-md-6 my-3">
            <div>
              <img
                data-aos="fade-left"
                data-aos-duration="1000"
                src="https://images.pexels.com/photos/3756949/pexels-photo-3756949.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Get in touch section -->
      <div ref="contact__section" class="mt-1 text-light">;</div>
      <div class="container contact-section">
        <div class="text-center my-5">
          <h1 class="fw-bold">Get in touch</h1>
        </div>
        <div class="contact__card w-100">
          <form class="contact__form w-75 mx-auto">
            <div class="form-floating">
              <input
                class="form-control mb-5"
                type="text"
                required
                placeholder="Juan Pistolas"
                v-model="name"
              />
              <label for="name">Enter you name</label>
            </div>

            <div class="form-floating">
              <input
                class="form-control mb-5"
                type="text"
                required
                id="email"
                placeholder="example@gmail.com"
                v-model="email"
              />
              <label for="email">Enter your email</label>
            </div>

            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                row="4"
                v-model="msg"
                style="max-height: 200px; height: 200px"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>

            <button
              type="submit"
              :disabled="sendDisabled"
              class="btn btn-secondary py-3 fw-bold d-flex justify-content-center rounded-pill mx-auto d-flex my-4"
              pill
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- navbar section -->
  <div class="footer container-fluid bg-dark text-light">
    <div class="container">
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top"
      >
        <h4 class="col-md-4 mb-0">&copy; 2022 MusicCream, Inc</h4>

        <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a
              @click="scrollToHome"
              class="nav-link px-2 text-lighnav a:hover { color: #4b8d8f; }t fw-bold"
              >Back to top</a
            >
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import router from "@/router";
import Swal from "sweetalert2";

export default {
  name: "HomeView",
  data() {
    return {
      albums: [
        { title: "Abbey Road", artist: "The beatles" },
        { title: "Scaled And Icy", artist: "Tewnty One Pilots" },
        { title: "The Eminem Show", artist: "Eminem" },
        { title: "The Predator", artist: "Ice Cube" },
        { title: "Bohemian Rhapsody", artist: "Queen" },
        { title: "Evolve", artist: "Imagine Dragons" },
        { title: "Mi Buena Suerte", artist: "Los Tigres Del Norte" },
        { title: "Future Nostalgia", artist: "Dua Lipa" },
        { title: "Black In Black", artist: "AC/DC" },
      ],
      name: "",
      email: "",
      msg: "",
      userEmail: "",
      password: "",
      uemail: "",
      upassword: "",
      urepassword: "",
    };
  },
  computed: {
    sendDisabled() {
      if (!this.name || !this.email || !this.msg) {
        return true;
      } else return false;
    },
  },
  methods: {
    scrollToHome() {
      this.$refs["wellcome__container"].scrollIntoView({ behavior: "smooth" });
    },
    scrollToMusic() {
      this.$refs["albums-title"].scrollIntoView({ behavior: "smooth" });
    },
    scrollToAbout() {
      this.$refs["about__section"].scrollIntoView({ behavior: "smooth" });
    },
    scrollToContact() {
      this.$refs["contact__section"].scrollIntoView({ behavior: "smooth" });
    },
    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
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
            title: "Signed out successfully",
          });
          router.push("/");
        })
        .catch((error) => {
          Swal.fire({
            title: "Invalid email",
            text: error,
            icon: "question",
            confirmButtonText: "OK",
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  .wellcome__container {
    margin: 0 0 200px 0;
    background-image: url("https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1600");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;

    nav a:hover {
      color: white;
    }
    .wellcome-item__container {
      backdrop-filter: brightness(50%);

      .img-container {
        position: relative;
        .note-img1 {
          width: 50px;
          transition: all 0.5s ease-in-out;
          animation-name: upAnimation;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          position: absolute;
          left: -10px;
          bottom: 100px;
        }
        .note-img2 {
          width: 50px;
          transition: all 0.5s ease-in-out;
          animation-name: upAnimation2;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          position: absolute;
          top: -80px;
          left: 48%;
        }
        .note-img3 {
          width: 50px;
          transition: all 0.5s linear;
          animation-name: rotation;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          position: absolute;
          right: 10px;
          bottom: 250px;
        }

        @media (max-width: 580px) {
          .note-img1,
          .note-img3 {
            display: none;
          }
        }
      }
      @media (max-width: 1000px) {
        .info {
          margin-top: 100px;
        }
      }
    }
  }
  .albums-title {
    margin: 200px 0;
  }

  .album__card {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 25px;
    .card-title {
      border-bottom: 1px solid black;
    }
    img {
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      cursor: url("../assets/images/add-to-cart.png"), auto;
      transform: scale(1.05);
      .disc {
        transition: all 0.5s ease-in-out;
        animation-name: rotation2;
        animation-duration: 5s;
        animation-iteration-count: infinite;
      }
    }
  }

  //about section styles
  .about__section {
    margin: 200px 0;
    .about-left {
      div {
        width: 50%;

        @media (max-width: 800px) {
          width: 90%;
        }
      }
    }

    .about-right {
      img {
        width: 100%;
      }
    }
  }

  .album__card:nth-child(odd) {
    background-color: #4b8d8f;
    color: white;
  }

  .contact-section {
    margin: 200px auto;
    .contact__form button {
      width: 50%;
    }
  }
}

@keyframes upAnimation {
  0% {
    bottom: 100px;
  }
  50% {
    bottom: 125px;
  }
  100% {
    bottom: 100px;
  }
}

@keyframes upAnimation2 {
  0% {
    top: -60px;
  }
  50% {
    top: -80px;
  }
  100% {
    top: -60px;
  }
}

@keyframes rotation {
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotation2 {
  10% {
    transform: rotate(36deg);
  }
  20% {
    transform: rotate(36 * 2deg);
  }
  30% {
    transform: rotate(36 * 3deg);
  }
  40% {
    transform: rotate(36 * 4deg);
  }
  50% {
    transform: rotate(36 * 5deg);
  }
  60% {
    transform: rotate(36 * 6deg);
  }
  70% {
    transform: rotate(36 * 7deg);
  }
  80% {
    transform: rotate(36 * 8deg);
  }
  90% {
    transform: rotate(36 * 9deg);
  }
  100% {
    transform: rotate(36 * 10deg);
  }
}
.footer {
  height: 200px;
  display: flex;
  align-items: center;
}
</style>
