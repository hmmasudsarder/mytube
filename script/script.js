const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json()
    const allData = data.data;
    display(allData)
}
const display = (datas) => {
    const btnContainer = document.getElementById('all-btn');
    for(const data of datas){
        // console.log(data)
        const allBtn = document.createElement('button');
        allBtn.innerHTML = `<button class="btn btn-outline btn-secondary mx-1" onclick="handleShowId('${data.category_id}')">${data.category}</button>`;
        btnContainer.appendChild(allBtn); 
    }
};
const handleShowId = async(id= 1000) =>{
   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
   const data = await res.json();
//    console.log(data.data)
   const divContainer = document.getElementById('div-container');
   divContainer.innerHTML = '';
   data.data.forEach(data => {
    console.log(data.authors)
    const divFull = document.createElement('div');
    divFull.innerHTML = `<figure cla>
    <img class="h-full w-full"
      src=${data.thumbnail}
      alt="Shoes"
    />
  </figure>
  <div class="">
    <div class="mt-10">
      <div class="flex items-center ">
        <div>
          <div class="avatar ">
            <div class="w-14 rounded-full">
              <img
                src=${data.authors[0].profile_picture}
              />
            </div>
          </div>
        </div>
        <div>
            <h2 class="text-xl font-bold title-start">
                ${data.title}
            </h2>
            <div class="mt-2">
            <p>${data.authors[0].profile_name}</p>
            </div>
        </div>
      </div>
      
    </div>
  </div>`;
  divContainer.appendChild(divFull);
   })

     
}  
loadData();