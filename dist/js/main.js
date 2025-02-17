//actions accordion
const toggleAcordeon = (accordeonItems, headerAccordeon) => {
   const accordeon = document.querySelectorAll(accordeonItems)

   accordeon.forEach((el) => {
      const accordeonItemHeader = el.querySelector(headerAccordeon)

      accordeonItemHeader.addEventListener('click', (e) => {
         const trigger = e.currentTarget.parentElement

         if (trigger.classList.contains('active')) {
            trigger.classList.remove('active')
         } else {
            accordeon.forEach((item) => {
               item.classList.remove('active')
            })
            trigger.classList.add('active')
         }
      })
   })
}

toggleAcordeon('.accordion-item', '.accordion-item__header')

//акордеон со сменой картинок

const imagesArr1 = {
   0: 'assets/img/meet-calendar.png',
   1: 'assets/img/meet-calendar.png',
   2: 'assets/img/meet-calendar.png',
   3: 'assets/img/meet-calendar.png',
   4: 'assets/img/meet-calendar.png',
}

const imagesArr2 = {
   0: 'assets/img/sec3-img.png',
   1: 'assets/img/sec3-img.png',
   2: 'assets/img/sec3-img.png',
}

const toggleTabAndIng = (
   classAcordeonItem,
   classAcordeonItemsHeader,
   classImg,
   arrayImg,
) => {
   document.querySelectorAll(classAcordeonItem).forEach((el, index) => {
      const header = el.querySelector(classAcordeonItemsHeader)

      header.addEventListener('click', () => {
         document.querySelectorAll(classAcordeonItem).forEach((item) => {
            item.classList.remove('active')
         })

         el.classList.add('active')

         document.querySelector(classImg).src = arrayImg[index]
      })
   })
}

toggleTabAndIng(
   '.meet-accordeon__item',
   '.meet-accordeon__header',
   '.meet__img img',
   imagesArr1,
)

toggleTabAndIng(
   '.smart-accordeon__item',
   '.smart-accordeon__header',
   '.smart__img img',
   imagesArr2,
)
// document.querySelectorAll('.meet-accordeon__item').forEach((el, index) => {
//    const header = el.querySelector('.meet-accordeon__header')

//    header.addEventListener('click', () => {
//       document.querySelectorAll('.meet-accordeon__item').forEach((item) => {
//          item.classList.remove('active')
//       })

//       el.classList.add('active')

//       document.querySelector('.meet__img img').src = imagesArr1[index]
//    })
// })

// document.querySelectorAll('.smart-accordeon__item').forEach((el, index) => {
//    const header = el.querySelector('.smart-accordeon__header')

//    header.addEventListener('click', () => {
//       document.querySelectorAll('.smart-accordeon__item').forEach((item) => {
//          item.classList.remove('active')
//       })

//       el.classList.add('active')

//       document.querySelector('.smart__img img').src = imagesArr2[index]
//    })
// })

//# sourceMappingURL=main.js.map
