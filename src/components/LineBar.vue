<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "LineBarView",
  data() {
    return {
      usuarios: [
        { id: 1, username: "eharcase0", email: "vasken0@sakura.ne.jp" },
        { id: 2, username: "bnolleau1", email: "lseggie1@fc2.com" },
        { id: 3, username: "tconnerry2", email: "tplaide2@nytimes.com" },
        { id: 4, username: "mhawick3", email: "lfowlston3@epa.gov" },
        { id: 5, username: "acamings4", email: "lcaveill4@instagram.com" },
        { id: 6, username: "jkingsbury5", email: "hbeyer5@narod.ru" },
        { id: 7, username: "gwhimper6", email: "begdale6@cbsnews.com" },
        { id: 8, username: "ccawdron7", email: "mmattisson7@xinhuanet.com" },
        { id: 9, username: "kfreyne8", email: "djay8@issuu.com" },
        { id: 10, username: "bdobby9", email: "ghefford9@ow.ly" },
        { id: 11, username: "ljoshama", email: "phorsleya@ox.ac.uk" },
        { id: 12, username: "ablooreb", email: "jbenckb@cbc.ca" },
        { id: 13, username: "mbazleyc", email: "mfrainec@alibaba.com" },
        { id: 14, username: "battardd", email: "sweyd@indiegogo.com" },
        { id: 15, username: "fgiraldone", email: "lcromartye@hud.gov" },
        { id: 16, username: "sdelmontif", email: "lhallgarthf@vimeo.com" },
        { id: 17, username: "ymackeagueg", email: "mrabidgeg@virginia.edu" },
        { id: 18, username: "caronsteinh", email: "hbooneh@economist.com" },
        { id: 19, username: "dferrarii", email: "kfloodgatei@noaa.gov" },
        { id: 20, username: "cwoodcraftj", email: "jrebouletj@engadget.com" },
        { id: 21, username: "fpacek", email: "caustinsk@behance.net" },
        {
          id: 22,
          username: "rfrancecionel",
          email: "vmacgiollapheadairl@reference.com",
        },
        { id: 23, username: "fflurym", email: "ablivenm@npr.org" },
        { id: 24, username: "dfidoen", email: "ewalleyn@chicagotribune.com" },
        { id: 25, username: "bbenito", email: "ggillivrieo@surveymonkey.com" },
        { id: 26, username: "btyersp", email: "gjacobsp@bbc.co.uk" },
        { id: 27, username: "ekreberq", email: "rkildeaq@ow.ly" },
        { id: 28, username: "ahenningtonr", email: "cangrover@about.me" },
        { id: 29, username: "tstellins", email: "cbulloughs@chronoengine.com" },
        { id: 30, username: "ekirtlant", email: "cbiancot@google.cn" },
        {
          id: 31,
          username: "pmccliffertyu",
          email: "gexeru@networkadvertising.org",
        },
        { id: 32, username: "adarguev", email: "sshieldonv@shop-pro.jp" },
        {
          id: 33,
          username: "eshillitoew",
          email: "agoodissonw@squarespace.com",
        },
        { id: 34, username: "wwinterbornex", email: "bcheshirx@google.fr" },
        { id: 35, username: "owrightimy", email: "wbellardy@nature.com" },
        { id: 36, username: "cragsdallz", email: "crossettiz@blogs.com" },
        { id: 37, username: "hpercival10", email: "vcawthorne10@elpais.com" },
        { id: 38, username: "rpurrington11", email: "gklulicek11@uol.com.br" },
        { id: 39, username: "cpeddersen12", email: "rmickan12@vk.com" },
        { id: 40, username: "jrugiero13", email: "aconnors13@histats.com" },
        { id: 41, username: "jwillimott14", email: "kerett14@nyu.edu" },
        { id: 42, username: "fmickleborough15", email: "wruddock15@va.gov" },
        { id: 43, username: "htompkinson16", email: "gochterlonie16@yelp.com" },
        {
          id: 44,
          username: "iwoolward17",
          email: "vhagwood17@sourceforge.net",
        },
        { id: 45, username: "cchatan18", email: "apahler18@ning.com" },
        { id: 46, username: "acreggan19", email: "shrycek19@spotify.com" },
        { id: 47, username: "mcouronne1a", email: "vcamacke1a@vk.com" },
        { id: 48, username: "eyankov1b", email: "twillder1b@ed.gov" },
        { id: 49, username: "mmarkson1c", email: "odiclaudio1c@bloomberg.com" },
        { id: 50, username: "psimonin1d", email: "rbungey1d@blogspot.com" },
      ],
      chartData: {
        labels: ["September", "October", "November", "December"],
        datasets: [
          {
            backgroundColor: ["#4b8d8f", "#4b8d5f", "#4b2d8f", "#4b6d8f"],
            data: [115, 180, 300, 232],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  components: { Line },
  methods: {},
};
</script>

<style></style>
