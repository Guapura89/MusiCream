<template>
  <div class="home">
    <div class="home__container">
      <!-- Welcome container -->
      <div class="row wellcome__container">
        <div
          class="wellcome-item__container col-12 col-md-6 p-1 p-md-4 d-flex flex-column justify-content-center text-center text-white"
        >
          <div class="w-50 mx-auto">
            <h1 class="fw-bold">Welcome to MusiCream</h1>
            <p>The website to buy the albums that you love.</p>
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

      <div class="albums-title text-center my-5" id="albums-title">
        <h1 class="fw-bold my-5">Most popular albums</h1>
      </div>

      <!-- Albums section -->
      <div class="container my-5">
        <div class="row d-flex justify-content-around">
          <div
            v-for="(album, idx) in albums"
            :key="idx"
            class="col-12 col-md-5 col-lg-3 my-5 mx-3 text-center album__card"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <div class="p-3">
              <div class="card-title my-3">
                <h4 class="fw-bold">{{ album.title }}</h4>
              </div>
              <img class="w-50" src="../assets/images/cd.png" alt="song-img" />
              <p class="fw-bold my-3">{{ album.artist }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Get in touch section -->
      <div class="container contact-section">
        <div class="text-center my-5">
          <h1 class="fw-bold">Get in touch</h1>
        </div>
        <div class="contact__card w-100">
          <form
            class="contact__form w-75 mx-auto"
            ref="albums-title-1"
            id="albums-title1"
          >
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
</template>

<script>
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
    };
  },
  computed: {
    sendDisabled() {
      if (!this.name || !this.email || !this.msg) {
        return true;
      } else return false;
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  .wellcome__container {
    margin: 0 0 200px 0;
    background-image: url("https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJvdW5kZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
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
          .note-img2,
          .note-img3 {
            display: none;
          }
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
      cursor: pointer;
      transform: scale(1.05);
      img {
        transition: all 0.5s ease-in-out;
        animation-name: rotation2;
        animation-duration: 5s;
        animation-iteration-count: infinite;
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
</style>
