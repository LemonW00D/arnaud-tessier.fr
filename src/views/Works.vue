<template>
  <div
    class="leftside d-flex flex-column justify-content-center align-items-center px-5"
    style="padding-top: 3rem ; z-index:2"
  >
    <section class="row projects" id="start-projects">
      <!-- WWW.ARNAUD-TESSIER.FR -->
      <div
        class="col-xs-12 col-sm-6 col-lg-4 project-tile animate__animated animate__zoomIn"
      >
        <div class="thumbnail shadow">
          <img
            src="@/assets/img/arnaud-tessier-cover.jpg"
            alt="Arnaud Tessier"
          />
          <div class="caption">
            <h4>Arnaud Tessier</h4>
            <p class="description">Développeur web, Bordeaux</p>
            <div
              class="d-flex flex-row justify-content-around align-item-center py-2"
            >
              <a
                class="btn btn-default btn-proj"
                href="http://www.arnaud-tessier.fr"
                target="_blank"
                data-cursor-hidden
                ><i class="fas fa-globe"></i>Site Web</a
              >
              <a
                class="btn btn-default btn-code"
                href="https://github.com/LemonW00D/arnaud-tessier.fr"
                target="_blank"
                data-cursor-hidden
                ><i class="fab fa-github"></i>Code Source</a
              >
            </div>
            <div>
              <b-button
                v-b-toggle.sidebar-right-1
                id="bouton-sidebar"
                class="hvr-border-fade"
                data-cursor-hover
                >Plus d'informations</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <b-sidebar id="sidebar-right-1" title="Sidebar" right shadow lazy>
        <div class="px-3">
          <h4>Arnaud Tessier</h4>
          <a
            href="http://www.arnaud-tessier.fr"
            target="_blank"
            data-cursor-hidden
            >www.arnaud-tessier.fr</a
          >
          <img
            src="@/assets/img/arnaud-tessier-sidebar.jpg"
            alt="Arnaud Tessier"
            fluid
            thumbnail
            style="border: none; margin: 2rem 0 0;"
          />
          <hr />
          <h5>Description du projet</h5>
          <div class="projectPills pt-4">
            <p class="head-desc">
              Site web professionnel. Arnaud Tessier est un développeur web à
              Bordeaux (33).
            </p>
            <div class="desc">
              <p>
                <i class="fas fa-check"></i>
                <b>Site vitrine personnalisé (Vue.js)</b>
              </p>
              <p>
                <i class="fas fa-check"></i> Conception graphique & Webdesign
              </p>
              <p><i class="fas fa-check"></i> Développement sous JS - Vue.js</p>
              <p>
                <i class="fas fa-check"></i> Site Responsive (compatible tous
                supports)
              </p>
            </div>
          </div>
          <div class="projectPills timing pt-4">
            <p>
              <i class="far fa-calendar-alt"></i> Date: <span>Août 2020</span>
            </p>
            <p><i class="fas fa-stopwatch"></i> Durée: <span>20 jours</span></p>
          </div>
          <hr />
          <h5>Technologies utilisées</h5>
          <div class="projectPills pt-4">
            <span class="label html">HTML</span>
            <span class="label css">CSS</span>
            <span class="label sass">SASS</span>
            <span class="label bootstrap">Bootstrap</span>
          </div>
          <div class="projectPills py-2">
            <span class="label javascript">JS ES6</span>
            <span class="label vue">Vue.js</span>
            <span class="label bootstrap-vue">Bootstrap-Vue</span>
            <span class="label jquery">jQuery</span>
          </div>
          <hr />
          <h5>Scores performance/sécurité</h5>
          <div class="projectPills pt-4">
            <ul>
              <li>
                <a
                  href="https://gtmetrix.com/reports/www.arnaud-tessier.fr/eOfcG1sj"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Performance:</b
                    ><span class="metrix"> GTmetrix = A (94%)</span>
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://www.ssllabs.com/ssltest/analyze.html?d=www.arnaud-tessier.fr"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Sécurité:</b
                    ><span class="ssl"> SSL Labs = A+</span>
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?hl=fr&url=https%3A%2F%2Fwww.arnaud-tessier.fr&tab=desktop"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Vitesse:</b
                    ><span class="speed"> PageSpeed = 92%</span>
                  </p></a
                >
              </li>
            </ul>
          </div>
        </div>
      </b-sidebar>

      <!-- WWW.RAPHAELVINCENOT.COM -->
      <div
        class="col-xs-12 col-sm-6 col-lg-4 project-tile animate__animated animate__zoomIn animate__delay-1s"
      >
        <div class="thumbnail shadow">
          <img
            src="@/assets/img/raphael-vincenot-cover.jpg"
            alt="Raphael Vincenot"
          />
          <div class="caption">
            <h4>Raphaël Vincenot</h4>
            <p class="description">Artiste peintre, Paris</p>
            <div
              class="d-flex flex-row justify-content-around align-item-center py-2"
            >
              <a
                class="btn btn-default btn-proj"
                href="http://www.raphaelvincenot.com"
                target="_blank"
                data-cursor-hidden
                ><i class="fas fa-globe"></i>Site Web</a
              >
              <a
                class="btn btn-default btn-code"
                href="https://github.com/LemonW00D/Raphael-Vincenot"
                target="_blank"
                data-cursor-hidden
                ><i class="fab fa-github"></i>Code Source</a
              >
            </div>
            <div>
              <b-button
                v-b-toggle.sidebar-right-2
                id="bouton-sidebar"
                class="hvr-border-fade"
                data-cursor-hover
                >Plus d'informations</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <b-sidebar id="sidebar-right-2" title="Sidebar" right shadow lazy>
        <div class="px-3">
          <h4>Raphaël Vincenot</h4>
          <a
            href="http://www.raphaelvincenot.com"
            target="_blank"
            data-cursor-hidden
            >www.raphaelvincenot.com</a
          >
          <img
            src="@/assets/img/raphael-vincenot-sidebar.jpg"
            alt="Raphael Vincenot"
            fluid
            thumbnail
            style="border: none; margin: 2rem 0 0;"
          />
          <hr />
          <h5>Description du projet</h5>
          <div class="projectPills pt-4">
            <p class="head-desc">
              Site web type portfolio. Raphaël Vincenot est un artiste peintre à
              Paris (75).
            </p>
            <div class="desc">
              <p>
                <i class="fas fa-check"></i>
                <b>Site vitrine personnalisé (Vue.js)</b>
              </p>
              <p>
                <i class="fas fa-check"></i> Conception graphique & Webdesign
              </p>
              <p><i class="fas fa-check"></i> Développement sous JS - Vue.js</p>
              <p>
                <i class="fas fa-check"></i> Site Responsive (compatible tous
                supports)
              </p>
            </div>
          </div>
          <div class="projectPills timing pt-4">
            <p>
              <i class="far fa-calendar-alt"></i> Date: <span>Août 2020</span>
            </p>
            <p><i class="fas fa-stopwatch"></i> Durée: <span>7 jours</span></p>
          </div>
          <hr />
          <h5>Technologies utilisées</h5>
          <div class="projectPills pt-4">
            <span class="label html">HTML</span>
            <span class="label css">CSS</span>
            <span class="label sass">SASS</span>
            <span class="label bootstrap">Bootstrap</span>
          </div>
          <div class="projectPills py-2">
            <span class="label javascript">JS ES6</span>
            <span class="label vue">Vue.js</span>
            <span class="label bootstrap-vue">Bootstrap-Vue</span>
          </div>
          <hr />
          <h5>Scores performance/sécurité</h5>
          <div class="projectPills pt-4">
            <ul>
              <li>
                <a
                  href="https://gtmetrix.com/?url=http://www.raphaelvincenot.com"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Performance:</b
                    ><span class="metrix"> GTmetrix = A (95%)</span>
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://www.ssllabs.com/ssltest/analyze.html?d=www.raphaelvincenot.com"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Sécurité:</b
                    ><span class="ssl">
                      SSL Labs = B<br />(serveur OVH TLS 1.0)</span
                    >
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.raphaelvincenot.com%2F&hl=fr&tab=desktop"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Vitesse:</b
                    ><span class="speed">
                      PageSpeed = 75%<br />(nombre et poids des images)</span
                    >
                  </p></a
                >
              </li>
            </ul>
          </div>
        </div>
      </b-sidebar>

      <!-- WWW.KIROLASANTE.FR -->
      <div
        class="col-xs-12 col-sm-6 col-lg-4 project-tile animate__animated animate__zoomIn animate__delay-2s"
      >
        <div class="thumbnail shadow">
          <img src="@/assets/img/kirola-sante-cover.jpg" alt="Kirola Santé" />
          <div class="caption">
            <h4>Kirola Santé</h4>
            <p class="description">Coach sportif, Biarritz</p>
            <div
              class="d-flex flex-row justify-content-around align-item-center py-2"
            >
              <a
                class="btn btn-default btn-proj"
                href="http://www.kirolasante.fr"
                target="_blank"
                data-cursor-hidden
                ><i class="fas fa-globe"></i>Site Web</a
              >
              <a
                class="btn btn-default btn-code"
                href="https://github.com/LemonW00D/kirola_sante"
                target="_blank"
                data-cursor-hidden
                ><i class="fab fa-github"></i>Code Source</a
              >
            </div>
            <div>
              <b-button
                v-b-toggle.sidebar-right-3
                id="bouton-sidebar"
                class="hvr-border-fade"
                data-cursor-hover
                >Plus d'informations</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <b-sidebar id="sidebar-right-3" title="Sidebar" right shadow lazy>
        <div class="px-3">
          <h4>Kirola Santé</h4>
          <a href="http://www.kirolasante.fr" target="_blank" data-cursor-hidden
            >www.kirolasante.fr</a
          >
          <img
            src="@/assets/img/kirola-sante-sidebar.jpg"
            alt="Kirola Santé"
            fluid
            thumbnail
            style="border: none; margin: 2rem 0 0;"
          />
          <hr />
          <h5>Description du projet</h5>
          <div class="projectPills pt-4">
            <p class="head-desc">
              Site web type portfolio. Kirola Santé est une société de coaching
              sportif à Biarritz (64).
            </p>
            <div class="desc">
              <p>
                <i class="fas fa-check"></i>
                <b>Site vitrine personnalisé (JS)</b>
              </p>
              <p>
                <i class="fas fa-check"></i> Conception graphique & Webdesign
                (sauf logo)
              </p>
              <p><i class="fas fa-check"></i> Développement sous HTML-CSS-JS</p>
              <p>
                <i class="fas fa-check"></i> Site Responsive (compatible tous
                supports)
              </p>
            </div>
          </div>
          <div class="projectPills timing pt-4">
            <p>
              <i class="far fa-calendar-alt"></i> Date:
              <span>Septembre 2020</span>
            </p>
            <p><i class="fas fa-stopwatch"></i> Durée: <span>10 jours</span></p>
          </div>
          <hr />
          <h5>Technologies utilisées</h5>
          <div class="projectPills pt-4">
            <span class="label html">HTML</span>
            <span class="label css">CSS</span>
            <span class="label sass">SASS</span>
            <span class="label bootstrap">Bootstrap</span>
          </div>
          <div class="projectPills py-2">
            <span class="label javascript">JS ES6</span>
            <span class="label jquery">jQuery</span>
          </div>
          <hr />
          <h5>Scores performance/sécurité</h5>
          <div class="projectPills pt-4">
            <ul>
              <li>
                <a
                  href="https://gtmetrix.com/?url=http://www.kirolasante.fr"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Performance:</b
                    ><span class="metrix"> GTmetrix = A (96%)</span>
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://www.ssllabs.com/ssltest/analyze.html?d=www.kirolasante.fr"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Sécurité:</b
                    ><span class="ssl">
                      SSL Labs = B<br />(serveur OVH TLS 1.0)</span
                    >
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.kirolasante.fr%2F&tab=desktop&hl=fr"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Vitesse:</b
                    ><span class="speed"> PageSpeed = 94%</span>
                  </p></a
                >
              </li>
            </ul>
          </div>
        </div>
      </b-sidebar>

      <!-- WWW.GUILLAUMELAVRILLEUX.COM -->
      <div
        class="col-xs-12 col-sm-6 col-lg-4 project-tile animate__animated animate__zoomIn animate__delay-3s"
      >
        <div class="thumbnail shadow">
          <img
            src="@/assets/img/guillaume-lavrilleux-cover.jpg"
            alt="Guillaume Lavrilleux"
          />
          <div class="caption">
            <h4>Guillaume Lavrilleux</h4>
            <p class="description">Sound designer, Bordeaux</p>
            <div
              class="d-flex flex-row justify-content-around align-item-center py-2"
            >
              <a
                class="btn btn-default btn-proj"
                href="https://www.guillaumelavrilleux.com"
                target="_blank"
                data-cursor-hidden
                ><i class="fas fa-globe"></i>Site Web</a
              >
              <a
                class="btn btn-default btn-code"
                href="https://github.com/LemonW00D/Guillaume-Lavrilleux"
                target="_blank"
                data-cursor-hidden
                ><i class="fab fa-github"></i>Code Source</a
              >
            </div>
            <div>
              <b-button
                v-b-toggle.sidebar-right-4
                id="bouton-sidebar"
                class="hvr-border-fade"
                data-cursor-hover
                >Plus d'informations</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <b-sidebar id="sidebar-right-4" title="Sidebar" right shadow lazy>
        <div class="px-3">
          <h4>Guillaume Lavrilleux</h4>
          <a
            href="https://www.guillaumelavrilleux.com"
            target="_blank"
            data-cursor-hidden
            >www.guillaumelavrilleux.com</a
          >
          <img
            src="@/assets/img/guillaume-lavrilleux-sidebar.jpg"
            alt="Guillaume Lavrilleux"
            fluid
            thumbnail
            style="border: none; margin: 2rem 0 0;"
          />
          <hr />
          <h5>Description du projet</h5>
          <div class="projectPills pt-4">
            <p class="head-desc">
              Site web type CV/portfolio. Guillaume Lavrilleux est sound
              designer pour les jeux vidéo et les expériences interactives à
              Bordeaux (33).
            </p>
            <div class="desc">
              <p>
                <i class="fas fa-check"></i>
                <b>Site vitrine personnalisé (JS)</b>
              </p>
              <p>
                <i class="fas fa-check"></i> Conception graphique & Webdesign
              </p>
              <p><i class="fas fa-check"></i> Développement sous HTML-CSS-JS</p>
              <p>
                <i class="fas fa-check"></i> Site Responsive (compatible tous
                supports)
              </p>
            </div>
          </div>
          <div class="projectPills timing pt-4">
            <p>
              <i class="far fa-calendar-alt"></i> Date:
              <span>Novembre 2020</span>
            </p>
            <p><i class="fas fa-stopwatch"></i> Durée: <span>10 jours</span></p>
          </div>
          <hr />
          <h5>Technologies utilisées</h5>
          <div class="projectPills pt-4">
            <span class="label html">HTML</span>
            <span class="label css">CSS</span>
            <span class="label sass">SASS</span>
            <span class="label bootstrap">Bootstrap</span>
          </div>
          <div class="projectPills py-2">
            <span class="label javascript">JS ES6</span>
            <span class="label jquery">jQuery</span>
          </div>
          <hr />
          <h5>Scores performance/sécurité</h5>
          <div class="projectPills pt-4">
            <ul>
              <li>
                <a
                  href="https://gtmetrix.com/?url=https://www.guillaumelavrilleux.com"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Performance:</b
                    ><span class="metrix"> GTmetrix = A (98%)</span>
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://www.ssllabs.com/ssltest/analyze.html?d=www.guillaumelavrilleux.com"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Sécurité:</b
                    ><span class="ssl"> SSL Labs = A+</span>
                  </p></a
                >
              </li>
              <li>
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.guillaumelavrilleux.com%2F&tab=desktop&hl=fr"
                  target="_blank"
                  data-cursor-hidden
                  ><p>
                    <i class="far fa-plus-square"></i><b>Vitesse:</b
                    ><span class="speed"> PageSpeed = 86%</span>
                  </p></a
                >
              </li>
            </ul>
          </div>
        </div>
      </b-sidebar>

      <!-- WWW.BLOOM-ATELIERS.FR -->
      <div
        class="col-xs-12 col-sm-6 col-lg-4 project-tile animate__animated animate__zoomIn animate__delay-4s"
      >
        <div class="thumbnail shadow">
          <img
            src="@/assets/img/bloom-ateliers-cover.jpg"
            alt="Bloom Ateliers"
          />
          <div class="caption">
            <h4>Bloom Ateliers</h4>
            <p class="description">Créations textiles, Bordeaux</p>
            <div
              class="d-flex flex-row justify-content-around align-item-center py-2"
            >
              <a
                class="btn btn-default btn-proj"
                href="https://www.bloom-ateliers.fr"
                target="_blank"
                data-cursor-hidden
              >
                <i class="fas fa-globe"></i>Site Web
              </a>
            </div>
            <div>
              <b-button
                v-b-toggle.sidebar-right-5
                id="bouton-sidebar"
                class="hvr-border-fade"
                data-cursor-hover
                >Plus d'informations</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <b-sidebar id="sidebar-right-5" title="Sidebar" right shadow lazy>
        <div class="px-3">
          <h4>Bloom Ateliers</h4>
          <a
            href="https://www.bloom-ateliers.fr"
            target="_blank"
            data-cursor-hidden
            >www.bloom-ateliers.fr</a
          >
          <img
            src="@/assets/img/bloom-ateliers-sidebar.jpg"
            alt="Bloom Ateliers"
            fluid
            thumbnail
            style="border: none; margin: 2rem 0 0;"
          />
          <hr />
          <h5>Description du projet</h5>
          <div class="projectPills pt-4">
            <p class="head-desc">
              Site web e-commerce. Bloom propose des créations textiles
              originales et sur-mesure à Bordeaux (33).
            </p>
            <div class="desc">
              <p>
                <i class="fas fa-check"></i>
                <b>Plateforme e-commerce (WordPress)</b>
              </p>
              <p>
                <i class="fas fa-check"></i> Conception graphique & Webdesign
              </p>
              <p><i class="fas fa-check"></i> Développement sous WordPress</p>
              <p>
                <i class="fas fa-check"></i> Personnalisation avec CSS-JS-JQuery
              </p>
              <p>
                <i class="fas fa-check"></i> Site Responsive (compatible tous
                supports)
              </p>
            </div>
          </div>
          <div class="projectPills timing pt-4">
            <p>
              <i class="far fa-calendar-alt"></i> Date:
              <span>Juin 2021</span>
            </p>
            <p><i class="fas fa-stopwatch"></i> Durée: <span>3 mois</span></p>
          </div>
          <hr />
          <h5>Technologies utilisées</h5>
          <div class="projectPills pt-4">
            <span class="label wordpress">WordPress</span>
            <span class="label css">CSS</span>
            <span class="label sass">SASS</span>
          </div>
          <div class="projectPills py-2">
            <span class="label javascript">JS ES6</span>
            <span class="label jquery">jQuery</span>
          </div>
          <!--
          <hr>
          <h5>Scores performance/sécurité</h5>
          <div class="projectPills pt-4">
            <ul>
              <li><a href="https://gtmetrix.com/?url=https://www.bloom-ateliers.fr" target="_blank" data-cursor-hidden><p><i class="far fa-plus-square"></i><b>Performance:</b><span class="metrix"> GTmetrix = A (98%)</span></p></a></li>
              <li><a href="https://www.ssllabs.com/ssltest/analyze.html?d=www.bloom-ateliers.fr" target="_blank" data-cursor-hidden><p><i class="far fa-plus-square"></i><b>Sécurité:</b><span class="ssl"> SSL Labs = A+</span></p></a></li>
              <li><a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.bloom-ateliers.fr%2F&tab=desktop&hl=fr" target="_blank" data-cursor-hidden><p><i class="far fa-plus-square"></i><b>Vitesse:</b><span class="speed"> PageSpeed = 86%</span></p></a></li>
            </ul>
          </div>
          -->
        </div>
      </b-sidebar>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "@/assets/scss/bootstrap-vue.css";
Vue.use(BootstrapVue);

export default {
  name: "Works",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.leftside {
  width: 82.5%;
  min-height: 90vh;
}

section {
  padding: 0;
  width: 100%;
  height: 100%;
}

.projects {
  background: transparent;
  text-align: center;
  box-shadow: none;
}

#sidebar-right-1,
#sidebar-right-2,
#sidebar-right-3,
#sidebar-right-4,
#sidebar-right-5 {
  img {
    width: 100%;
    height: auto;
    border: 0.5px solid $dark-blue;
    margin-bottom: 1rem;
  }

  h4 {
    color: black;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }

  .head-desc {
    text-align: center;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .desc {
    font-weight: 500;
    p {
      font-size: 1.3rem;
    }
  }

  .timing {
    p {
      i {
        font-size: 1.4rem;
        width: 1.2rem;
        margin-right: 1rem;
        color: red;
      }
    }
    span {
      font-weight: 500;
    }
  }

  .projectPills {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 5px;
    display: block;

    ul {
      li {
        padding-bottom: 0.5rem;

        span {
          font-weight: 500;
          font-size: 1.3rem;
        }

        .metrix {
          margin-left: 0.25rem;
          font-size: 1.3rem;
        }
        .ssl {
          margin-left: 4.25rem;
          font-size: 1.3rem;
        }
        .speed {
          margin-left: 5rem;
          font-size: 1.3rem;
        }
      }
    }

    .label {
      margin: 1.5rem 0.5rem;
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
    }

    .html {
      color: white;
      background: linear-gradient(90deg, #e65100, #ff6d00);
    }
    .css {
      color: white;
      background: linear-gradient(90deg, #0277bd, #039be5);
    }
    .bootstrap {
      color: white;
      background-color: #673ab7;
    }
    .sass {
      color: white;
      background-color: #f06292;
    }
    .javascript {
      background-color: #f7e018;
      color: black;
    }
    .jquery {
      color: white;
      background-color: #1169ae;
    }
    .vue {
      color: white;
      background: linear-gradient(90deg, #43b381, #34495d);
    }
    .bootstrap-vue {
      color: white;
      background: linear-gradient(90deg, #43b381, #34495d, #673ab7);
    }
    .wordpress {
      color: white;
      background-color: #32373c;
    }
  }

  .description {
    text-align: center;
  }

  a {
    font-size: 1.3rem;
  }

  i {
    font-size: 1.2rem;
    width: 1.2rem;
    margin-right: 1rem;
    color: $dark-blue;
  }
}

.project-tile {
  padding: 0rem 5% 3rem;

  .thumbnail {
    background: #fff;
    border: 3px solid $yellow-10;
    border-radius: 5px;
    padding: 5px;

    img {
      width: 100%;
      height: auto;
      border: 0.5px solid $dark-blue;
      margin-bottom: 1rem;
    }

    h4 {
      color: black;
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
    }

    .head-desc {
      text-align: center;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    .desc {
      font-weight: 500;
      p {
        font-size: 1.3rem;
      }
    }

    .timing {
      p {
        i {
          font-size: 1.4rem;
          width: 1.2rem;
          margin-right: 1rem;
          color: red;
        }
      }
      span {
        font-weight: 500;
      }
    }

    .projectPills {
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 5px;
      display: block;
    }

    .description {
      text-align: center;
    }

    a {
      font-size: 1.3rem;
    }

    i {
      font-size: 1.2rem;
      width: 1.2rem;
      margin-right: 1rem;
      color: $dark-blue;
    }
  }
}

/* Border Fade */
.hvr-border-fade {
  background-color: $red;
  font-size: 1.2rem;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: all;
  transition-property: all;
  box-shadow: inset 0 0 0 4px $red, 0 0 1px rgba(0, 0, 0, 0);
  margin: 0 0 1rem 0;
  /* Hack to improve aliasing on mobile/tablet devices */
}
.hvr-border-fade:hover,
.hvr-border-fade:active {
  box-shadow: inset 0 0 0 4px $yellow, 0 0 1px rgba(0, 0, 0, 0);
  background-color: $yellow;
  border: 2px solid $dark-blue;
  font-weight: 500;
  margin: 0 0 0.8rem 0;
}

hr {
  margin: 2rem;
}

h5 {
  margin-bottom: 0;
}

@include xl {
}

@include md {
}

@include sm {
}

@include xs {
  .leftside {
    width: 100%;
  }
}
</style>
