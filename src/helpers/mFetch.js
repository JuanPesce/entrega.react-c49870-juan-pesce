const products =[
    {id:'1', name:'Yerba Mate Playadito 500 gr',stock:40 , gramos:500, precio:900, categoria:"comun", descripcion:'Yerba comun de mesa', imagen: 'https://cdn11.bigcommerce.com/s-abmjjefojj/images/stencil/1280x1280/products/1495/16826/Diapositiva103__03287.1680721684.JPG?c=1'},
    {id:'2', name:'Yerba Mate Playadito 1000 gr',stock:50 , gramos:1000, precio:1800, categoria:"comun", descripcion:'Yerba comun de mesa', imagen:'https://jumboargentina.vtexassets.com/arquivos/ids/711224/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637938633804770000'},
    {id:'3', name:'Yerba Organica Mate&CO 500 gr',stock:60 , gramos:500, precio:1200, categoria:"organica", descripcion:'Yerba organica de plantacion y cosecha natural', imagen:'https://acdn.mitiendanube.com/stores/001/176/840/products/ym-mate-co-organica-despalada-500gr-001-d861c6aad956183bde16467465818309-640-0.webp'},
    {id:'4', name:'Yerba Oasis Organica con Palo 500 gr',stock:10 , gramos:500, precio:1300, categoria:"organica", descripcion:'Yerba organica de plantacion y cosecha natural', imagen:'https://acdn.mitiendanube.com/stores/001/176/840/products/ym-hierbas-del-oasis-organica-500gr1-c5413ada2ac8ed671e16454683696316-640-0.webp'},
    {id:'5', name:'Yerba Playadito 500 gr Despalada',stock:23 , gramos:500, precio:1000, categoria:"comun", descripcion:'Yerba comun despalada para mejor sabor', imagen:'https://www.lacoopeencasa.coop/media/lcec/publico/articulos/3/8/c/38c8467c35eb48fd65c2b6d015dcd3b7'},
    {id:'6', name:'Yerba Origen Barbacua 500 gr', stock:45, gramos:500, precio:1400, categoria:"barbacua", descripcion:'Yerba barbacua', imagen:'https://acdn.mitiendanube.com/stores/001/176/840/products/ym-origen-barbacua-500gr1-e1187c17e5cc12d35116210101424505-640-0.webp'},
    {id:'7', name:'Yerba Picada Vieja Barbacua 500 gr', stock:65, gramos:500, precio:1450, categoria:"barbacua", descripcion:'Yerba barbacua', imagen:'ttps://acdn.mitiendanube.com/stores/001/176/840/products/ym-picada-vieja-barbacua-500gr1-cfe0c68766bc4d138a16377059880090-640-0.webp'},
    {id:'8', name:'Yerba Mate Baldo Despalada 500 gr' , stock:12, gramos:500, precio:2700, categoria:"comun", descripcion:'Yerba comun despalada para mejor sabor', imagen:'https://acdn.mitiendanube.com/stores/001/176/840/products/ym-baldo-despalada-500gr-001-a75a5cd8101211023016916120618139-640-0.webp'   },
    {id:'9', name:'Yerba Mate Kraus Orgánica Gourmet Estuche 500 gr', stock:9, gramos:500, precio:3200, categoria:"organica", descripcion:'Yerba organica de plantacion y cosecha natural', imagen:'https://acdn.mitiendanube.com/stores/001/176/840/products/ym-kraus-organica-gourmet-estuche-500gr-001-a6e9cdc45e8dc12b0716795220225773-640-0.webp'}

]

export const mFetch = (id) => new Promise((res,rej)=>{
    setTimeout(()=>{
        res(products)
    }, 3000)
})