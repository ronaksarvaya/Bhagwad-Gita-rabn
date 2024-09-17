const ranChp = () => {
  let chapter = Math.floor(Math.random() * 18) + 1;
  
  console.log("i am chapter",chapter)
  return chapter;
}
let chapter = ranChp();

const ranShloka=(chapter)=> {
  let totalShlokaInEachChapter = [
    47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 34, 27, 20, 24, 28, 78,
  ];
  let index = chapter - 1;
  let chp_shloka = totalShlokaInEachChapter[index];
  let shloka = Math.floor(Math.random() * chp_shloka) + 1;
  console.log("i am shloka",shloka)
  return shloka;
}

let url = ` https://bhagavadgita.io/api/v1/chapters/`;

let shloka = ranShloka(chapter);
const result = (chapter, shloka) => {
  let newUrl = `https://bhagavadgita.io/chapter/${chapter}/verse/${shloka}`;
  document.getElementById('result').src = newUrl;
  console.log(newUrl);
  console.log(chapter, shloka);
};
result(chapter,shloka)