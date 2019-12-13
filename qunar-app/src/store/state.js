import {preventDefaultException} from "better-scroll/src/util/dom";

let defaultCity = '上海';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch(e) {
}

export default {
  city: defaultCity,
}