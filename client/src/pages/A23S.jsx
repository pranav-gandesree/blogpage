// import React from 'react'
// import Sections from '../components/Sections'
// import Responsive from '../components/mobile/Responsive';
// import { useMediaQuery } from 'react-responsive';


// const A23S = () => {
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//   return (
//     <div>
//       {isMobile ? <Responsive /> : <Sections />}
//     </div>
//   );
// }

// export default A23S




import React from 'react'
import Sections from '../components/Sections'
import Responsive from '../components/mobile/Responsive';


const A23S = () => {
 
  return (
    <div>
      <Sections />
    </div>
  );
}

export default A23S

