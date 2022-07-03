function importAllImage(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAllImage(require.context("../../../utils/img", false, /\.(png|jpe?g|svg)$/));
const characterObj = [{ name: "Gio Kim" }, { name: "Chris Jeon" }, { name: "Jack Kang" }, { name: "Jessica Yoo" }, { name: "Jinny oh" }];

const arr = new Object([...characterObj]);
characterObj.map((v, i) => {
  arr[i].key = i;
  arr[i].image_url = images[`section07_img${i + 1}.png`];
});
export const profileList = arr;
