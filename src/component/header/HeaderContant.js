export const menuListObj = [
  {
    name: "Main",
  },
  {
    name: "Story",
  },
  {
    name: "Video",
  },
  {
    name: "Celpi NFT",
  },
  {
    name: "RoadMap",
  },
  {
    name: "Team",
  },
  {
    name: "Partner",
  },
  {
    name: "FAQ",
  },
  {
    name: "Bunker",
  },
  {
    name: "Token",
  },
  {
    name: "Guide for mint",
  },
];

// eslint-disable-next-line no-new-object
const arr = new Object([...menuListObj]);
menuListObj.map((v, i) => {
  arr[i].key = i;
  arr[i].path = `/${v.name.toLocaleLowerCase()}`;
});

export const menuList = arr;
