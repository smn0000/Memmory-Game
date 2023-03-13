
const svgs = [
    {id:0, image : new URL('../../svgs/bat.svg',import.meta.url).href},
    {id:1, image : new URL('../../svgs/beetle.svg',import.meta.url).href},
    {id:2, image : new URL('../../svgs/butterfly.svg',import.meta.url).href},
    {id:3, image : new URL('../../svgs/camel.svg',import.meta.url).href},
    {id:4, image : new URL('../../svgs/cat.svg',import.meta.url).href},
    {id:5, image : new URL('../../svgs/chameleon.svg',import.meta.url).href},
    {id:6, image : new URL('../../svgs/cow.svg',import.meta.url).href},
    {id:7, image : new URL('../../svgs/crab.svg',import.meta.url).href},
    {id:8, image : new URL('../../svgs/crocodile.svg',import.meta.url).href},
    {id:9, image : new URL('../../svgs/dog.svg',import.meta.url).href},
    {id:10, image : new URL('../../svgs/duck.svg',import.meta.url).href},
    {id:11, image : new URL('../../svgs/elk.svg',import.meta.url).href},
    {id:12, image : new URL('../../svgs/frog.svg',import.meta.url).href},
    {id:13, image : new URL('../../svgs/giraffe.svg',import.meta.url).href},
    {id:14, image : new URL('../../svgs/hippo.svg',import.meta.url).href},
    {id:15, image : new URL('../../svgs/husky.svg',import.meta.url).href},
    {id:16, image : new URL('../../svgs/kangaroo.svg',import.meta.url).href},
    {id:17, image : new URL('../../svgs/lion.svg',import.meta.url).href},
    {id:18, image : new URL('../../svgs/mancaw.svg',import.meta.url).href},
    {id:19, image : new URL('../../svgs/mantee.svg',import.meta.url).href},
    {id:20, image : new URL('../../svgs/mianyag.svg',import.meta.url).href},
    {id:21, image : new URL('../../svgs/mouse.svg',import.meta.url).href},
    {id:22, image : new URL('../../svgs/ostrich.svg',import.meta.url).href},
    {id:23, image : new URL('../../svgs/owl.svg',import.meta.url).href},
    {id:24, image : new URL('../../svgs/penguin.svg',import.meta.url).href},
    {id:25, image : new URL('../../svgs/racoon.svg',import.meta.url).href},
    {id:26, image : new URL('../../svgs/rooster.svg',import.meta.url).href},
    {id:27, image : new URL('../../svgs/searay.svg',import.meta.url).href},
    {id:28, image : new URL('../../svgs/shark.svg',import.meta.url).href},
    {id:29, image : new URL('../../svgs/tiger.svg',import.meta.url).href},
    {id:30, image : new URL('../../svgs/toucan.svg',import.meta.url).href},
    {id:31, image : new URL('../../svgs/whale.svg',import.meta.url).href},
]

const getBackground = (index)=> {
    const image = svgs.filter(element => element.id===index)
    console.log(image[0].image)
    return image[0].image
}

export default getBackground