var links = {
  user: {
    default: "",
    1: "?pli=1&authuser=1",
    2: "?pli=2&authuser=2",
    3: "?pli=3&authuser=3",
  },
  monday: {
    dcan_lab: "http://meet.google.com/zph-jcux-xvu",
    ds_lab: "https://meet.google.com/ybn-jcem-snd",
    caos_lab: "https://meet.google.com/fzz-khqe-ref",
  },
  wednesday: {
    ds_theory: "https://meet.google.com/jvf-vidj-hou",
    caos_theory: "https://meet.google.com/fzz-khqe-ref",
    dcan_theory: "https://meet.google.com/gey-kowe-tau",
  },
  thursday: {
    ds_theory: "https://meet.google.com/jvf-vidj-hou",
    caos_theory: "https://meet.google.com/fzz-khqe-ref",
    dcan_theory: "https://meet.google.com/avm-kfwf-ood",
    edai: "",
  },
  friday: {
    ds_theory: "https://meet.google.com/jvf-vidj-hou",
    caos_theory: "https://meet.google.com/fzz-khqe-ref",
    dcan_theory: "https://meet.google.com/oer-dktd-osu",
  },
  saturday: {
    dcan_tutorial: "https://meet.google.com/dxf-muna-ayx",
    ds_tutorial: "https://meet.google.com/rvb-mrmi-jxr",
    caos_tutorial: "https://meet.google.com/fzz-khqe-ref",
    sdp: "https://meet.google.com/sik-eehw-kkc",
  },
};
window.localStorage.setItem("linkData", JSON.stringify(links)); //Run index.html one to save the json data.
//After you are done, comment the line above and uncomment the line below.
//var links = JSON.parse(localStorage.getItem("linkData"));
var user_num = 3;

var dcan_lab = document.getElementsByClassName("dcan_lab");
var ds_lab = document.getElementsByClassName("ds_lab");
var caos_lab = document.getElementsByClassName("caos_lab");
var dcan_theory = document.getElementsByClassName("dcan_theory");
var ds_theory = document.getElementsByClassName("ds_theory");
var caos_theory = document.getElementsByClassName("caos_theory");
var dcan_tutorial = document.getElementsByClassName("dcan_tutorial");
var ds_tutorial = document.getElementsByClassName("ds_tutorial");
var caos_tutorial = document.getElementsByClassName("caos_tutorial");
var sdp = document.getElementsByClassName("sdp");
var edai = document.getElementsByClassName("edai");

dcan_lab[0].setAttribute("href", links.monday.dcan_lab + links.user[user_num]);
ds_lab[0].setAttribute("href", links.monday.ds_lab + links.user[user_num]);
caos_lab[0].setAttribute("href", links.monday.caos_lab + links.user[user_num]);

dcan_theory[0].setAttribute(
  "href",
  links.wednesday.dcan_theory + links.user[user_num]
);
ds_theory[0].setAttribute(
  "href",
  links.wednesday.ds_theory + links.user[user_num]
);
caos_theory[0].setAttribute(
  "href",
  links.wednesday.caos_theory + links.user[user_num]
);

dcan_theory[1].setAttribute(
  "href",
  links.thursday.dcan_theory + links.user[user_num]
);
ds_theory[1].setAttribute(
  "href",
  links.thursday.ds_theory + links.user[user_num]
);
caos_theory[1].setAttribute(
  "href",
  links.thursday.caos_theory + links.user[user_num]
);
edai[0].setAttribute("href", links.thursday.edai + links.user[user_num]);

dcan_theory[2].setAttribute(
  "href",
  links.friday.dcan_theory + links.user[user_num]
);
ds_theory[2].setAttribute(
  "href",
  links.friday.ds_theory + links.user[user_num]
);
caos_theory[2].setAttribute(
  "href",
  links.friday.caos_theory + links.user[user_num]
);

dcan_tutorial[0].setAttribute(
  "href",
  links.saturday.dcan_tutorial + links.user[user_num]
);
ds_tutorial[0].setAttribute(
  "href",
  links.saturday.ds_tutorial + links.user[user_num]
);
caos_tutorial[0].setAttribute(
  "href",
  links.saturday.caos_tutorial + links.user[user_num]
);
sdp[0].setAttribute("href", links.saturday.sdp + links.user[user_num]);
