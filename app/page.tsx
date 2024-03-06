import { fetchCars, fetchMotor } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import MotorCard from "@components/MotorCard";

export default async function Home({ searchParams }: HomeProps) {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });

  const allMotors = await fetchMotor({
    manufacturer: searchParams.manufacturer || "yamaha",
    
  })

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const isMotorEmpty = !Array.isArray(allMotors) || allMotors.length < 1 || !allMotors;
  
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Motorcycle Catalogue</h1>
          <p>Searching </p>
        </div>

        <div className='home__filters'>
          <SearchBar />

        </div>
        {!isMotorEmpty ? (
          // what is purpose of section tag ?
          <section>
            <div className='home__cars-wrapper'>
              {allMotors?.map((motor) => (
                // <CarCard car={} />
                <MotorCard motor={motor}/>
           
              ))}
            </div>

           
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{}</p>
          </div>
        )}
         
     
      </div>
    </main>
  );
}
