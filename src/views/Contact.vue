<template>
  <div
    class="d-flex flex-row justify-content-center align-items-center px-5"
    style="padding-top: 4rem; padding-bottom: 3rem"
  >
    <main class="contact-page">
      <section class="location animate__animated animate__fadeInBottomRight">
        <h2 id="found-me"><span>Me trouver</span></h2>
        <div
          class="d-flex flex-column justify-content-between align-items-between"
        >
          <div class="contact-box">
            <div
              class="contact d-flex flex-column justify-content-start align-items-start"
            >
              <div
                class="d-flex flex-row justify-content-start align-items-center item"
              >
                <i class="fas fa-map-marker-alt"></i>
                <div class="d-flex flex-column align-items-start item">
                  <h3 id="adresse"><span>Adresse</span></h3>
                  <p>
                    9 rue Pourmann <br />
                    Appartement 2218 <br />
                    33300 BORDEAUX <br />
                    FRANCE
                  </p>
                </div>
              </div>

              <br />

              <div
                class="d-flex flex-row justify-content-start align-items-center item"
              >
                <i class="fas fa-phone-alt"></i>
                <div class="d-flex flex-column align-items-start item">
                  <h3 id="phone"><span>Téléphone</span></h3>
                  <a href="tel:0643434155">06 43 43 41 55</a>
                </div>
              </div>

              <br />

              <div
                class="d-flex flex-row justify-content-start align-items-center item"
              >
                <i class="fas fa-at"></i>
                <div class="d-flex flex-column align-items-start item">
                  <h3 id="mail"><span>Mail</span></h3>
                  <a href="mailto:arnaud.tessier33@gmail.com"
                    >arnaud.tessier33@gmail.com</a
                  >
                </div>
              </div>
            </div>

            <a
              href="https://www.google.fr/maps/place/9+Rue+Pourmann,+33300+Bordeaux/@44.8616853,-0.5706299,14.46z/data=!4m5!3m4!1s0xd552894adb60ea9:0xf264fa10c23ad2c3!8m2!3d44.867763!4d-0.5488326"
              target="_blank"
              rel="external nofollow noreferrer noopener"
            >
              <img src="@/assets/img/map4.jpg" alt="map" />
            </a>
          </div>

          <hr />

          <div class="social-net">
            <a
              href="https://github.com/LemonW00D"
              target="_blank"
              rel="external nofollow noreferrer noopener"
              ><i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arnaud-tessier-a9732b63/"
              target="_blank"
              rel="external nofollow noreferrer noopener"
              ><i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.researchgate.net/profile/Arnaud_Tessier3"
              target="_blank"
              rel="external nofollow noreferrer noopener"
              ><i class="fab fa-researchgate"></i>
            </a>
            <a
              href="https://www.instagram.com/arnaud_tessier.pro/?hl=fr"
              target="_blank"
              rel="external nofollow noreferrer noopener"
              ><i class="fab fa-instagram-square"></i
            ></a>
          </div>

          <div>
            <p class="horaires">
              <span class="underL">Horaires:</span><span> du</span> Lundi
              <span>au</span> Vendredi, <span>de</span> 09H00
              <span>à</span> 18H00
            </p>
          </div>
        </div>
      </section>

      <section class="formulaire animate__animated animate__fadeInTopLeft">
        <h2 id="contact-me"><span>Me contacter</span></h2>
        <div class="d-flex flex-column item">
          <form
            class="contact-form"
            id="contact-form"
            @submit.prevent="sendEmail"
          >
            <b-form-group
              id="input-group-1"
              label="Votre nom"
              label-for="input-2"
              description="Your name"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Bruce WAYNE"
                type="text"
                name="user_name"
              ></b-form-input>
            </b-form-group>

            <br />

            <b-form-group
              id="input-group-2"
              label="Votre e-mail"
              label-for="input-1"
              description="Your email"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                required
                placeholder="bruce-wayne@gmail.com"
                type="email"
                name="user_email"
              ></b-form-input>
            </b-form-group>

            <br />

            <b-form-group
              id="input-group-3"
              label="Votre message"
              label-for="input-1"
              description="Your message"
            >
              <b-form-textarea
                id="textarea-no-resize"
                placeholder="En quoi puis-je vous aider..."
                rows="8"
                no-resize
                aria-invalid="Merci d'écrire votre message."
                trim="true"
                name="message"
              ></b-form-textarea>
            </b-form-group>

            <button type="submit" value="Send" class="fancy">
              <span>Envoyer</span>
              <div class="icon-send">
                <i class="far fa-paper-plane"></i>
              </div>
            </button>
            <br />
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { BFormGroup } from "bootstrap-vue";
import { BFormInput } from "bootstrap-vue";
import { BFormTextarea } from "bootstrap-vue";
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  components: {
    BFormGroup,
    BFormInput,
    BFormTextarea
  },
  data() {
    return {
      form: {
        email: "",
        name: ""
      },
      show: true
    };
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "service_1psad01",
          "template_8c395zh",
          e.target,
          "user_mLMGMiPv2dL6ne2OuuZNO"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            alert("Votre message a bien été envoyé !");
            const form = document.getElementById("contact-form");
            form.reset();
          },
          error => {
            console.log("FAILED...", error);
            alert("Une erreur est survenue.");
          }
        );
    }
  },
  props: ["mode"]
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.formulaire{
  border: 16px solid transparent;
	border-image: 16 repeating-linear-gradient(-45deg, #D01F33 0, #D01F33 1em, transparent 0, transparent 2em,
	              #3C4E82 0, #3C4E82 3em, transparent 0, transparent 4em);
                
  padding-right: calc(6rem - 16px);
  padding-left: calc(5rem - 16px);
}

#contact-me {
  &:hover {
    span {
      display: none;
    }
    &:hover:before {
      content: "CONTACT ME";
      color: $yellow;
      text-shadow: 2px 2px 2px $dark-blue;
    }
  }
}
#found-me {
  &:hover {
    span {
      display: none;
    }
    &:hover:before {
      content: "FOUND ME";
      color: $yellow;
      text-shadow: 2px 2px 2px $dark-blue;
    }
  }
}
#adresse {
  &:hover {
    span {
      display: none;
    }
    &:hover:before {
      content: "Location";
      color: $dark-blue;
    }
  }
}
#phone {
  &:hover {
    span {
      display: none;
    }
    &:hover:before {
      content: "Phone";
      color: $dark-blue;
    }
  }
}
#mail {
  &:hover {
    span {
      display: none;
    }
    &:hover:before {
      content: "Email";
      color: $dark-blue;
    }
  }
}

label {
  font-weight: 800;
  margin: 0;
}

.form-control {
  font-size: 1.4rem;
  line-height: 2.5rem;
  font-weight: 500;
  color: black;
  background-color: transparent;
  width: 100%;
  height: 28px;
  border: 0;
  border-bottom: 0.275rem solid;
  padding-top: 13px;
  padding-bottom: 0;
  margin-bottom: 5px;
  -webkit-box-sizing: initial;
  box-sizing: initial;
}

.contact-page {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  width: 100%;
}

section {
  margin: 0 2.5rem;
  padding: 0 6rem 0 5rem;
  background: $yellow-10;
  box-shadow: $shadow-card;
  width: 800px;
}

@include md {
  .contact-page {
    flex-direction: column;
  }
  section {
    width: auto;
    margin-bottom: 5rem;
  }
}
.contact-box {
  margin-top: 7.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /*background-image: url('../assets/img/map4.jpg');*/
}

.contact {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.form-text {
  margin-bottom: 1rem;
  font-weight: 700;
}

.contact-form {
  margin: 2rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h3 {
  font-size: 1.4rem;
  letter-spacing: 1px;
  cursor: default;
}

p {
  font-size: 1.4rem;
  text-align: initial;
  font-family: "Poppins", sans-serif;
  margin: 0;
}

a {
  text-decoration: none;
  text-align: initial;
  color: black;
  letter-spacing: 1px;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  img {
    max-height: 300px;
    height: auto;
    min-height: auto;
    width: auto;
  }
}

.fas {
  font-size: 4rem;
  width: 7rem;
  color: $dark-blue;
  margin-right: 4rem;
}

.social-net {
  margin: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-between;

  i {
    &:hover {
      opacity: 1;
    }
  }

  .fab {
    font-size: 4rem;
    color: $dark-blue;
  }

  .fa-github {
    &:hover {
      color: #24292e;
    }
  }

  .fa-linkedin {
    &:hover {
      color: #0077b5;
    }
  }

  .fa-researchgate {
    &:hover {
      color: #00ccbb;
    }
  }
  .fa-facebook {
    &:hover {
      color: #0b84ed;
    }
  }

  .fa-instagram-square {
    border-radius: 7.5px;
    display: inline-block;
    &:hover {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

hr {
  margin: 9rem 0 1rem;
}

.horaires {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;

  .underL {
    text-decoration: underline;
    font-style: initial;
    font-weight: bold;
  }

  span {
    font-style: italic;
    font-weight: 400;
  }
}

@include xs {
  .contact {
    flex-direction: column;
  }
  .item {
    margin-top: 3rem;
  }
  section {
    margin: 0;
    padding: 0 2rem 0 1.5rem;
  }
  .location,
  .formulaire {
    margin-bottom: 5rem;
  }
  a {
    font-size: 1.2rem;
    img {
      display: none;
    }
  }
  .fas {
    font-size: 3rem;
    margin-right: 0rem;
  }
  .fab {
    font-size: 3rem;
  }
  .fancy{
    width: 175px;
  }
}

@include sm {
  .contact-box {
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  a {
    img {
      margin-top: 2rem;
    }
  }
  .social-net {
    margin-top: 0;
  }
}

@include md {
  footer {
    margin-top: 5rem;
  }
  .studio {
    flex-direction: column;
    align-items: center;

    img {
      margin: 0;
    }

    iframe {
      margin-top: 4rem;
    }
  }
}

@include xl {
  .contact-box {
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  a {
    img {
      margin-top: 2rem;
    }
  }
}
</style>
