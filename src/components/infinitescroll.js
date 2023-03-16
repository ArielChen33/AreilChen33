// import React from 'react';
// import { useState, useState } from 'react';
// import photo from './photo';



// export default function Infinitescroll() {
//     const [images, setImages] = useState([1]);
//     const [images, setImages, errors, isLanding] = useState([page]);

//     function handleRemove(index){
//         setImages([
//             ...images.slice(0, index),
//             ...images.slice(index + 1, images.length)
//         ])
//     }

//     function ShowImage(){
//         return(
//             <Infinitescroll datalength={images.length} next={()=> setPage(page+1)}>
//                 <Infinitescroll
//                 datalength={images.length}
//                 next={()=> setPage(page+1)}
//                 hasMore={true}
//                 ></Infinitescroll>
//                 {images.map((image, index) => {
//                     <Image>
//                         image={image.urls.regular}
//                         handleRemove={handleRemove}
//                         index={index}
//                         key={index}
//                     </Image>
//                 }
//             </Infinitescroll>
//         )
//     }




// }

