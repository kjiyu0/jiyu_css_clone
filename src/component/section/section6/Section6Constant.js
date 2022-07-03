function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("../../../utils/img", false, /\.(png|jpe?g|svg)$/));
const sliderObj = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }, { name: "" }];

const arr = new Object([...sliderObj]);
sliderObj.map((v, i) => {
  arr[i].key = i;
  arr[i].image_url = images[`slide_${i}.jpg`];
});
export const sliderList = arr;
