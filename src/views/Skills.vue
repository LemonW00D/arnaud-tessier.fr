<template>
  <div class="skills-page">
    <div class="skills">
        <ul class="lines">
          <li class="line l--0">
            <span class="line__label title">
              Connaissance:
            </span>
          </li>
          <li class="line l--25">
            <span class="line__label l1">
              Base
            </span>
          </li>
          <li class="line l--50">
            <span class="line__label l2">
              Intermédiaire
            </span>
          </li>
          <li class="line l--75">
            <span class="line__label l1">
              Maitrise
            </span>
          </li>
          <li class="line l--100">
            <span class="line__label l2">
              Expert
            </span>
          </li>
        </ul>
        
        <div class="charts">
          <div class="chart chart--dev">
            <span class="chart__title">Développement</span>
            <ul class="chart--horiz">
              <li class="chart__bar" style="width: 95%;" id="html">
                <span class="chart__label">
                  HTML5
                  <img src="@/assets/img/html5.png" alt="html">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="html" triggers="hover" placement="left">
                 Langage de balisage conçu pour représenter les pages web.
              </b-tooltip>
              <li class="chart__bar" style="width: 85%;" id="css">
                <span class="chart__label">
                  CSS3
                  <img src="@/assets/img/css3.png" alt="css">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="css" triggers="hover" placement="left">
                 Langage de stylisation conçu pour présenter des documents HTML.
              </b-tooltip>
              <li class="chart__bar" style="width: 70%;" id="sass">
                <span class="chart__label">
                  Sass
                  <img src="@/assets/img/sass.png" alt="sass" style="background-color: #eee">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="sass" triggers="hover" placement="left">
                 Préprocesseur CSS.
              </b-tooltip>
              <li class="chart__bar" style="width: 70%;" id="bootstrap">
                <span class="chart__label">
                  Bootstrap
                  <img src="@/assets/img/bootstrap.png" alt="bootstrap">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="bootstrap" triggers="hover" placement="left">
                 Framework HTML - CSS.
              </b-tooltip>
              <li class="chart__bar" style="width: 50%;" id="javascript">
                <span class="chart__label">
                  JavaScript ES6
                  <img src="@/assets/img/javascript.png" alt="javascript">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="javascript" triggers="hover" placement="left">
                  Langage de programmation de scripts pour des pages web interactives.
              </b-tooltip>
              <li class="chart__bar" style="width: 50%;" id="webpack">
                <span class="chart__label">
                  Webpack + Babel
                  <img src="@/assets/img/webpack.png" alt="webpack">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="webpack" triggers="hover" placement="left">
                  Bundler de modules JavaScript et (rétro-)compatibilité.
              </b-tooltip>
              <li class="chart__bar" style="width: 65%;" id="jquery">
                <span class="chart__label">
                  jQuery
                  <img src="@/assets/img/jquery.png" alt="jquery" style="width: 18px; height: 18px">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="jquery" triggers="hover" placement="left">
                   Bibliothèque JavaScript pour les animations.
              </b-tooltip>
              <li class="chart__bar" style="width: 75%;" id="vuejs">
                <span class="chart__label">
                  Vue.js
                  <img src="@/assets/img/vuejs.png" alt="vuejs">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="vuejs" triggers="hover" placement="left">
                Framework JavaScript pour construire des interfaces utilisateur et des applications web monopages.
              </b-tooltip>
              <li class="chart__bar" style="width: 75%;" id="bootstrap-vue">
                <span class="chart__label">
                  Bootstrap-vue
                  <img src="@/assets/img/bootstrap-vue.png" alt="bootstrap-vue">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="bootstrap-vue" triggers="hover" placement="left">
                Framework Vue.js.
              </b-tooltip>
              <li class="chart__bar" style="width: 60%;" id="wordpress">
                <span class="chart__label">
                  Wordpress
                  <img src="@/assets/img/wordpress.png" alt="wordpress">
                </span>
              </li>
              <b-tooltip custom-class="custom-tooltip" target="wordpress" triggers="hover" placement="left">
                Système de gestion de contenu permettant de créer et gérer différents types de sites Web (vitrine, e-commerce...).
              </b-tooltip>
            </ul>
          </div>
          
          <div class="chart chart--prod">
            <span class="chart__title">Productivité</span>
            <ul class="chart--horiz">
            <li class="chart__bar" style="width: 60%;" id="git">
              <span class="chart__label">
                Git + Github
                <img src="@/assets/img/github.png" alt="github">
              </span>
            </li>
            <b-tooltip custom-class="custom-tooltip" target="git" triggers="hover" placement="left">
                Logiciel de gestion de versions décentralisé et service d'hébergement.
              </b-tooltip>
            <li class="chart__bar" style="width: 90%;" id="microsoft">
              <span class="chart__label">
                Microsoft Office
                <img src="@/assets/img/microsoft.png" alt="microsoft">
              </span>
            </li>
            <b-tooltip custom-class="custom-tooltip" target="microsoft" triggers="hover" placement="left">
                Suite bureautique.
              </b-tooltip>
          </ul>
          </div>
          
          <div class="chart chart--design">
            <span class="chart__title">Design</span>
            <ul class="chart--horiz">
            <li class="chart__bar" style="width: 40%;" id="lunacy">
              <span class="chart__label">
                Lunacy
                <img src="@/assets/img/lunacy.png" alt="lunacy">
              </span>
            </li>
            <b-tooltip custom-class="custom-tooltip" target="lunacy" triggers="hover" placement="left">
                Logiciel de conception graphique avec actifs intégrés.
              </b-tooltip>
            <li class="chart__bar" style="width: 75%;" id="ux">
              <span class="chart__label">
                User Experience
                <img src="@/assets/img/ux.png" alt="ux">
              </span>
            </li>
            <b-tooltip custom-class="custom-tooltip" target="ux" triggers="hover" placement="left">
                Qualité du vécu de l'utilisateur face à des environnements numériques (ergonomie et utilisabilité).
              </b-tooltip>
          </ul>
          </div>
        </div>
      </div>
    
    <div class="d-flex flex-column justify-content-center" style="margin: auto 3rem;">
      <div class="cv-download" style="margin: auto">
        <a
          download="Arnaud_TESSIER_CV.pdf"
          href="Arnaud_TESSIER_CV.pdf"
          target="_blank"
          rel="external nofollow noreferrer noopener"
          title="Mon CV en pdf"
          role="link"
          aria-pressed="false"
          >télécharger mon cv</a>
        <br>
      </div>
      <div class="formations-links">
        <h5>Certifications</h5>  
        <div><i class="fas fa-external-link-alt"></i><a href="https://www.codecademy.com/profiles/LemonW00D" target="_blank">Codecademy</a></div>
        <div><i class="fas fa-external-link-alt"></i><a href="https://dyma.fr/developer/5e4cfe9660a2e83ad0ddd6b2" target="_blank">Dyma</a></div>
        <div><i class="fas fa-external-link-alt"></i><a href="https://www.linkedin.com/in/arnaud-tessier-a9732b63/" target="_blank">LinkedIn</a></div>
      </div>
    </div>

    <div class="competences">									
				<h4>Domaines de compétences</h4>
				<ul class="list-unstyled list">
					<li>
						<i class="far fa-check-circle"></i><strong>Réalisation de projets web</strong>
						<br>
						<em>Site vitrine, évènementiel, portfolio, e-commerce.</em>
					</li>
					<li>
						<i class="far fa-check-circle"></i><strong>Conception graphique &amp; Webdesign</strong>
						<br>
						<em>Logo, couleurs, maquette Web.</em>											
					</li>
          <li>
						<i class="far fa-check-circle"></i><strong>Gestion de CMS</strong> 
						<br>
						<em>WordPress.</em>											
					</li>
					<li>
						<i class="far fa-check-circle"></i><strong>Interface d'administration (back-office)</strong>
						<br>
						<em title="Hypertext Preprocessor">Uniquement sur WordPress.</em>											
					</li>					
					<li>
						<i class="far fa-check-circle"></i><strong> Intégration HTML - CSS</strong>
						<br>
						<em>Codage à la main respectueux des standards du Web (W3C).</em>
					</li>
					<li>
						<i class="far fa-check-circle"></i><strong>Pages dynamiques par JavaScript</strong> 
						<br>
						<em>jQuery, Vue.js.</em>
					</li>
					<li>
						<i class="far fa-check-circle"></i><strong>Référencement naturel SEO</strong>
						<br>
						<em>Accessibilité &amp; ergonomie des pages web, indexation Google (htaccess et sitemap).</em>											
					</li>
					<li>
						<i class="far fa-check-circle"></i><strong>Conception multi-plateformes</strong>
						<br>
						<em>Compatible tous supports: ordinateurs, tablettes &amp; smartphones.</em>
					</li>
				</ul>
			</div>


  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
import { BTooltip } from 'bootstrap-vue';

export default {
  name: "Skills",
  components: {
    BTooltip,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.skills-page{
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  overflow-x: hidden;
}

@mixin stagger-anim-delay($i, $initial-delay, $stagger-delay) {
  @while $i > 0 {
    &:nth-of-type(#{$i}) {
      animation-delay: $initial-delay + $stagger-delay * $i;
    }
    $i: $i - 1;
  }
}

$baseFontSize: 16px;
$baseLineHeight: 1;

$chartGap: 20px;
$chartCount: 3;
$chartOneCount: 10;
$chartTwoCount: 2;
$chartThreeCount: 2;
$totalChartCount: $chartOneCount + $chartTwoCount + $chartThreeCount;

$titleGap: 20px;
$titleHeight: $baseFontSize * $baseLineHeight + $titleGap;

$chartBarHeight: 30px;
$chartBarGap: 10px;

.skills {
  width: 60%;
  max-width: 625px;
  height: 780px;
  height: $totalChartCount * ($chartBarHeight + $chartBarGap) + ($chartCount * ($chartGap + $titleHeight));
  margin: auto auto auto 22rem;
  position: relative;
}

.lines {
  height: 100%;
  position: relative;
}
.line {
  height: inherit;
  width: 2px;
  position: absolute;
  background: rgba(#ddd, 0.6);

  &.l--0 {
    left: 0;
  }
  &.l--25 {
    left: 25%;
  }
  &.l--50 {
    left: 50%;
  }
  &.l--75 {
    left: 75%;
  }
  &.l--100 {
    left: calc(100% - 1px);
  }
}
.line__label {
  display: block;
  width: 100px;
  text-align: center;
  position: absolute;
  bottom: -20px;
  right: -50px;

  &.title {
    text-transform: uppercase;
    font-weight: bold;
  }
}

.charts {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.chart {
  &:not(:first-child) {
    margin-top: $chartGap;
  }
}

.chart__title {
  display: block;
  margin: 0 0 10px;
  font-weight: bold;
  opacity: 0;
  animation: 1s anim-lightspeed-in ease forwards;

  .chart--prod & {
    animation-delay: 3.3s;
  }
  .chart--design & {
    animation-delay: 4.5s;
  }
}

.chart--horiz {
  overflow: hidden;
}

.custom-tooltip{
  font-size: 1.4rem;
}

.chart__bar {
  $border-rad: 4px;
  height: $chartBarHeight;
  margin-bottom: $chartBarGap;
  background: linear-gradient(to left, $red, $yellow);
  border-top-right-radius: $border-rad;
  border-bottom-right-radius: $border-rad;
  opacity: 0;
  animation: 1s anim-lightspeed-in ease forwards;

  .chart--dev & {
    @include stagger-anim-delay($chartOneCount, 0.5s, 0.2s);
  }
  .chart--prod & {
    @include stagger-anim-delay($chartTwoCount, 3.8s, 0.2s);
  }
  .chart--design & {
    @include stagger-anim-delay($chartThreeCount, 5s, 0.2s);
  }
}

.chart__label {
  padding-left: 10px;
  line-height: 30px;
  color: white;

  img{
    height: 23px;
    width: 23px;
    margin-left: 0.5rem;
  }
}

//Keyframes
@keyframes anim-lightspeed-in {
  0% {
    transform: translateX(-200%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.cv-download {
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

.formations-links{
  margin: 4.5rem auto auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    align-self: start;
    align-content: flex-start;
  }

  i{
    width: 10px;
    font-size: 1rem;
    margin-right: 1rem;
  }
}

.competences{
  margin: auto;

  h4{
    margin-bottom: 3rem;
  }

  i{
    margin-right: 1.5rem;
  }

  strong{
    color: $dark-blue;
  }

  ul > li > em{
    margin-left: 3rem;

    &:after{
      bottom: -2px;
      left: 0;
      display: block;
      height: 4px;
      background: $yellow;
      width: 40px;
      margin: 1rem 0 2rem 3rem;
      content: "";
    }
  }
}

@include xxl {
}
@include xl {
  .skills-page{
    flex-direction: column;
  }
  
  .skills{
    margin: 0 1rem;
    width: 90%;
  }

  .cv-download{
    margin-top: 8rem !important;
  }

  .formations-links{
    margin-bottom: 8rem !important;
  }
}

@include md {
}
@include sm {
  .lines{
    .title, .l1, .l2{
      font-size: 1.3rem;
    }
  }
}
@include xs {
  .custom-tooltip{
    font-size: 1.1rem;
  }
  .competences{
    margin: auto 1.5rem;
  }
  .lines{
    .title{
      display: none;
    }
    .l2{
      bottom: 1rem;
      text-align: start;
      right: -7rem;
    }
  }
}
</style>
