import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaComponent = ({ title = "Dr Jeep | Used  Dealership in Salem, UT", description ="Dr Jeep sells and services  vehicles in the greater Salem UT area." }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
                <meta name="description" content={description} />

           </Helmet>
       </HelmetProvider> 
    )
 }

 export default MetaComponent