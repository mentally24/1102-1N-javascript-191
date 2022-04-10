const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const testinomials=[
  {
    id:1,
    img:"./img/customers/dave.jpg",
    alt:"Photo of customer Dave Bryson",
    desc:`Inexpensive, healthy and great-tasting meals, without even
    having to order manually! It feels truly magical.`,
    name:"Dave Bryson",
  },
  {
    id:2,
    img:"./img/customers/ben.jpg",
    alt:"Photo of customer Ben Hadley",
    desc:`The AI algorithm is crazy good, it chooses the right meals for
    me every time. It's amazing not to worry about food anymore!`,
    name:"Ben Hadley",
  },
  {
    id:3,
    img:"./img/customers/steve.jpg",
    alt:"Photo of customer Steve Miller",
    desc:`Omnifood is a life saver! I just started a company, so there's
    no time for cooking. I couldn't live without my daily meals now!`,
    name:"Steve Miller",
  },
  {
    id:4,
    img:"./img/customers/hannah.jpg",
    alt:"Photo of customer Hannah Smith",
    desc:`I got Omnifood for the whole family, and it frees up so much
    time! Plus, everything is organic and vegan and without plastic.`,
    name:"Hannah Smith",
  },
  
  

]

const gallery=[
  {
  
   img1:"./img/gallery/gallery-1.jpg"
  },
  {
    img1:"./img/gallery/gallery-2.jpg"
   },
   {

    img1:"./img/gallery/gallery-3.jpg"
   },
   {

     img1:"./img/gallery/gallery-4.jpg"
    },
    {

      img1:"./img/gallery/gallery-5.jpg"
     },
     {
      img1:"./img/gallery/gallery-6.jpg"
      },
      {
    
        img1:"./img/gallery/gallery-7.jpg"
       },
       {
     
         img1:"./img/gallery/gallery-8.jpg"
        },
        {
  
          img1:"./img/gallery/gallery-9.jpg"
         },
         {

           img1:"./img/gallery/gallery-10.jpg"
          },
          {

            img1:"./img/gallery/gallery-11.jpg"
           },
           {

             img1:"./img/gallery/gallery-12.jpg"
            },

]

const title=[
  {
  title:"Testimonial",
  dec:"Once you try it, you can't go back",
  },

]

const sectiontestimonials = document.querySelector('.testimonials');
const divgallery = document.querySelector('.gallery');
// const sectitle = document.querySelector('.testimonials-container')



window.addEventListener("DOMContentLoaded",()=>{
  //displaytitle(title);
  displaytestiItems(testinomials);
  displaygalleryItems(gallery);

  
});


// const displaytitle = (titleItems)=>{
//   let displaytitle = titleItems.map((item)=>{

//     return `
//     <span class="subheading">${item.title}</span>
//     <h2 class="heading-secondary">${item.dec}</h2>
   
  
//     `

// })
// displaytitle = displaytitle.join("");
// sectitle.innerHTML = displaytitle;

// }


const displaytestiItems = (testiItems)=>{
  let displaytesti = testiItems.map((item)=>{

    return `
    <div>
    <figure class="testimonial">
              <img
                class="testimonial-img"
                alt=${item.alt}
                src=${item.img}
              />
              <blockquote class="testimonial-text">
                ${item.desc}
              </blockquote>
              <p class="testimonial-name">&mdash; ${item.name}</p>
            </figure>

    </div>
   
  
    `

})

displaytesti = displaytesti.join("");
sectiontestimonials.innerHTML = displaytesti;

}

const displaygalleryItems = (galleryItems)=>{
  let displaygallery = galleryItems.map((item)=>{

    return `
  
    <figure class="gallery-item">
    <img
      src=${item.img1}
      alt="Photo of beautifully
    arranged food"
    />
  
   
    `

})
displaygallery = displaygallery.join("");
divgallery.innerHTML = displaygallery;
}

