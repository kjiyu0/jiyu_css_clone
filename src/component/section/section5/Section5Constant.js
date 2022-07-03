function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("../../../utils/img", false, /\.(png|jpe?g|svg)$/));
const characterObj = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }, { name: "" }];

const arr = new Object([...characterObj]);
characterObj.map((v, i) => {
  arr[i].key = i;
  arr[i].image_url = images[`story_img0${i + 1}.png`];
});
export const characterList = arr;
