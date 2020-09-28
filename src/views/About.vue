<template>
  <div class="d-flex flex-row justify-content-center align-items-center p-5">
    <div class="about">
      <div class="resume">
        <h4>EXPÉRIENCES</h4>
        <br />

        <badger-accordion>
          <badger-accordion-item>
            <template slot="header">
              <h6>09.2018 <span class="arrow">&#x21FE;</span> 12.2019</h6>
              <p>
                <span class="italic">LUCINE</span>, Chargé de Recherche,
                Bordeaux, France.
              </p>
              <p>
                Soulagement de la douleur chronique par Réalité Virtuelle (DTx).
              </p>
              <div class="down"><i class="fas fa-angle-down"></i></div>
            </template>
            <template slot="content">
              <p class="p2">
                Rédaction de rapports scientifiques et de protocoles de
                recherche clinique. Gestion d'un laboratoire sur la douleur.
                Conférences et valorisation. Supervision d'un stagiaire.
              </p>
            </template>
          </badger-accordion-item>
        </badger-accordion>

        <badger-accordion>
          <badger-accordion-item>
            <template slot="header">
              <h6>02.2018 <span class="arrow">&#x21FE;</span> 03.2018</h6>
              <p>
                <span class="italic">AELIS FARMA</span>, Assistant Chef de
                Projet, Bordeaux, France.
              </p>
              <p>
                Elaboration de nouveaux médicaments dérivés de la Prégnénolone
                (endocannabinoïde).
              </p>
              <div class="down"><i class="fas fa-angle-down"></i></div>
            </template>
            <template slot="content">
              <p class="p2">
                Assistance au développement des projets et des tests
                pré-cliniques.
              </p>
            </template>
          </badger-accordion-item>
        </badger-accordion>

        <badger-accordion>
          <badger-accordion-item>
            <template slot="header">
              <h6>01.2012 <span class="arrow">&#x21FE;</span> 02.2018</h6>
              <p>
                <span class="italic">CH CHARLES PERRENS</span>, Ingénieur de
                Recherche, Bordeaux, France.
              </p>
              <p>Recherches cliniques sur la Schizophrénie.</p>
              <div class="down"><i class="fas fa-angle-down"></i></div>
            </template>
            <template slot="content">
              <p class="p2">
                Gestion et coordination de plusieurs protocoles. Assistance dans
                la gestion d'un centre de référence pour les maladies mentales
                (Centre Expert Schizophrénie - Fondation FondaMental). Rédaction
                d'articles scientifiques. Supervision de thèses de médecines sur
                la méthodologie et les statistiques.
              </p>
            </template>
          </badger-accordion-item>
        </badger-accordion>

        <br />
        <div class="timeline">
          <img src="@/assets/img/timeline.png" />
        </div>
        <div class="dwnld-btn">
          <a
            download="Arnaud_TESSIER_CV.pdf"
            href="Arnaud_TESSIER_CV.pdf"
            target="_blank"
            rel="external nofollow noreferrer noopener"
            title="Mon CV en pdf"
            role="link"
            aria-pressed="false"
          >
            <button class="continue-application">
              <div>
                <div class="pencil"></div>
                <div class="folder">
                  <div class="top">
                    <svg viewBox="0 0 24 27">
                      <path
                        d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="paper"></div>
                </div>
              </div>
              Télécharger mon CV
            </button>
          </a>
        </div>
      </div>
      <div class="portrait">
        <h4>PORTRAIT</h4>
        <br />
        <img src="@/assets/img/about-img.jpg" />
        <div class="portrait-red">
          <ul>
            <li>Né en 1990</li>
            <li>Basé à Bordeaux, France</li>
            <li>Permis B</li>
            <li>Neuroscientifique et Développeur Web</li>
          </ul>
        </div>
        <br />
      </div>
      <div class="education">
        <h4>ÉDUCATION</h4>
        <br />
        <div class="educ-box">
          <ul>
            <li>
              <span class="educ-date">2020</span>
              <p>
                Développeur Front-End JS-Vue.js,
                <a
                  href="https://dyma.fr/developer/5e4cfe9660a2e83ad0ddd6b2"
                  target="_blank"
                  >Dyma</a
                >, France.
              </p>
            </li>
            <li>
              <span class="educ-date">2013</span>
              <p>
                Master de Neurosciences, Ecole Pratique des Hautes Etudes -
                Sorbonne, Paris, France.
              </p>
            </li>
            <li>
              <span class="educ-date">2011</span>
              <p>
                Licence de Biologie, spécialité Physiologie-Neurosciences,
                Université de Tours, France.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BadgerAccordion, BadgerAccordionItem } from "vue-badger-accordion";

export default {
  name: "About",
  components: {
    BadgerAccordion,
    BadgerAccordionItem
  }
};
</script>

<style lang="scss">
@import "../../src/assets/scss/style.main.scss";

p,
h6,
h4 {
  letter-spacing: 1px;
}

.arrow {
  font-size: 1.75rem;
}

.down {
  text-align: right;
  right: 0;
  cursor: pointer;
  z-index: 99;

  .fas {
    font-size: 2.5rem;
    padding: 0 0 1rem 0;
    margin: 0;
    color: $yellow;
  }
}

.badger-accordion__header
  .js-badger-accordion-header
  .badger-accordion-toggle
  .badger-accordion-title {
  flex: 0 0 100%;
  cursor: pointer;
  text-align: left;

  &:hover {
    .fas {
      color: #b15947;
    }
  }
}

.component-badger-accordion {
  margin-bottom: 1rem;
  padding: 1rem 1rem;

  &:focus {
    border: none;
  }

  &:hover,
  &:active {
    cursor: pointer;
    outline: none;

    .badger-accordion__trigger-title {
      color: black;
    }

    .badger-accordion__trigger-icon {
      &:after,
      &:before {
        background-color: white;
      }
    }
  }
}

.badger-accordion-title {
  font-weight: 400;
}

p {
  font-size: 1.2rem;
}

.p2 {
  font-size: 1.2rem;
  padding-left: 1.5rem;
  background-color: white;
  border-radius: 5px;
}

.about {
  margin: 2rem auto auto auto;
  display: grid;
  grid:
    "resume portrait" 500px
    "resume education" auto
    / 1fr 1fr;
}

.portrait-red {
  background-color: #b15947;
  width: 45%;
  position: relative;
  left: 400px;
  top: -30px;
  padding: 1rem 0.5rem;

  li {
    color: white;
    text-align: start;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    line-height: 1.5rem;
    letter-spacing: 1px;
  }
}

.educ-box {
  background-color: $yellow-10;
  color: $dark-blue;
  padding: 3rem 3rem 3rem 6rem;
  margin: 0;

  li + li {
    padding-top: 3rem;
  }

  li {
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
      .educ-date {
        font-weight: 500;
        padding-left: 2rem;
      }
      p {
        padding: 0 7rem 0 6rem;
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 20%;
      top: 0;
      background-color: $dark-blue;
      width: 3px;
      height: 100%;
    }

    .educ-date {
      flex: 0 0 20%;
      max-width: 20%;
      font-weight: 400;
      font-size: 3rem;
      line-height: 3rem;
      transition: 0.35s ease-out;
    }

    p {
      flex: 0 0 80%;
      max-width: 80%;
      padding: 0 5rem 0 8rem;
      cursor: default;
      transition: 0.35s ease-out;
      margin-bottom: 0;
    }
  }
}

.italic {
  font-style: italic;
}

.resume {
  grid-area: resume;
  margin: 0 5rem;
  img {
    min-width: 320px;
    padding: 0 4rem;
  }
  .timeline {
    background-color: #072939;
    margin: 2rem 4rem 0 4rem;
  }
  .dwnld-btn {
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
}

.portrait {
  grid-area: portrait;
  text-align: center;
  margin: 0 5rem;
  width: auto;
  img {
    height: auto;
    min-width: 320px;
  }
  p {
    text-align: center;
  }
}

.education {
  grid-area: education;
  margin: 0 5rem;
  p {
    a {
      display: inline;
    }
  }
}

.download {
  position: relative;
  margin: 2.5rem auto 0;
  top: -125px;
  left: -200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  a {
    text-transform: uppercase;
    text-align: center;
    width: 110px;
    height: 110px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    position: relative;
    padding: 4rem 0;
    border-radius: 5px;
    font-size: 1.15rem !important;

    &:after {
      transition: 0.3s all ease;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 5px;
      border: 3px solid #b15947;
    }

    &:before {
      content: "";
      position: absolute;
      border-radius: 3px;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      background-color: #fff;
      border-radius: 5px;
      z-index: -1;
    }

    &:hover {
      &:after {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    &:active {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      &:before {
        background-color: #f1481b;
      }
      &:after {
        border-color: #f1481b;
        border-radius: 5px;
      }
    }
  }
}

@include xxl {
  .portrait-red {
    left: 300px;
  }
}
@include xl {
  .portrait-red {
    left: 200px;
  }
  .resume {
    img {
      padding: 0;
    }
    .timeline {
      margin: 0;
    }
  }
  .educ-box {
    padding: 2rem 1rem 2rem 2rem;

    li {
      &::before {
        left: 22.5%;
      }
      &:hover {
        p {
          padding: 0 2rem 0 4rem;
        }
      }
      p {
        flex: 0 0 80%;
        max-width: 80%;
        padding: 0 3rem 0 5rem !important;
      }
    }
  }
}
@include md {
  .about {
    grid:
      "portrait" auto
      "resume" auto
      "education" auto
      / 1fr;
    grid-gap: 2.5rem;
  }
  .education {
    margin-top: 10rem;
  }
  .portrait-red {
    left: 400px;
  }
}
@include sm {
  .portrait-red {
    left: 300px;
    top: -20px;
  }
  .download {
    a {
      margin-left: 10rem;
    }
  }
}
@include xs {
  .portrait-red {
    width: 57.5%;
    left: 125px;
    top: -10px;
  }
  li {
    font-size: 1.2rem !important;
  }
  .download {
    position: static !important;
    a {
      margin: auto;
    }
  }
  .educ-box {
    padding: 2rem 1rem 2rem 2rem;

    li + li {
      padding-top: 1.5rem;
    }

    li {
      &:hover {
        .educ-date {
          font-weight: 500;
          padding-left: 0rem;
        }
        p {
          padding: 0 1rem 0 3rem;
        }
      }

      &::before {
        left: 22.5%;
      }

      .educ-date {
        font-size: 2rem;
        line-height: 2rem;
      }

      p {
        flex: 0 0 80%;
        max-width: 80%;
        padding: 0 1rem 0 3rem !important;
      }
    }
  }
}
</style>
