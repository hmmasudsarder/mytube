const loadData = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json()
  const allData = data.data;
  display(allData)
}
const display = (datas) => {
  const btnContainer = document.getElementById('all-btn');
  for (const data of datas) {
    // console.log(data)
    const allBtn = document.createElement('button');
    allBtn.innerHTML = `<button class="btn btn-outline btn-secondary mx-1" onclick="handleShowId('${data.category_id}')">${data.category}</button>`;
    btnContainer.appendChild(allBtn);
  }
};
const handleShowId = async (id) => {
  const Id = id;
  
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
  const data = await res.json();
  //    console.log(data.data)
  const divContainer = document.getElementById('div-container');
  const trueContainer = document.getElementById('true-container');
  divContainer.innerHTML = '';
  if(Id === '1005'){
    divContainer.innerHTML = `<div class="container mx-auto ">
          <img class=" mx-auto" src="./../img/Icon.png" alt="" />
          <p class="text-4xl">Opp's Your Content Not Available</p>
      </div>`;
  }
  data.data.forEach(data => {
    const isTrue = data.authors[0].verified;
    
    const divFull = document.createElement('div');
    divFull.innerHTML = `
    <div class="">
      <figure id="img" class=w-100>
         <img class="rounded-lg"
          src=${data.thumbnail}
          alt="Shoes"
                />
      </figure>
    </div>
    <div class="">
      <div class="">
        <div class="flex items-center ">
          <div>
          <div class="avatar ">
            <div class="w-14 rounded-full mt-1">
              <img
                src=${data.authors[0].profile_picture}
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
            <h2 class="text-xl font-bold ml-3">
                ${data.title}
            </h2>
            <div id="true-container" class="mt-2 text-start ml-3 text-slate-400 flex gap-2">
            <p>${data.authors[0].profile_name}</p>
            
            <p></p>
            </div>
            <div class="mt-2 text-start ml-3 text-slate-400">
            <p class="text-xl">${data.others.views} views</p>
            </div>
        </div>
      </div>
      
    </div>
  </div>`;
    divContainer.appendChild(divFull);
  });


}
loadData();
handleShowId(1000);