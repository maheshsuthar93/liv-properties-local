'use client';

import { Fragment, useEffect, useState } from 'react';
import { useAPI } from '@/app/context/APIContext';
import { Property, SearchProperty } from '@/app/types';
import { PropertyCard, Loading } from '@/app/components';

export const ListProperties = () => {
  const { searchProperty } = useAPI();
  const [pageIndex, setPageIndex] = useState(1);
  const { setSearchParameters } = useAPI();
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (searchProperty.data?.current_page == 1) {
      setProperties(searchProperty.data.data);
    } else if (searchProperty?.data?.data) {
      setProperties((preProperties) => [
        ...preProperties,
        ...searchProperty.data!.data!,
      ]);
    }
  }, [searchProperty]);

  if (!searchProperty) {
    return <div>Nothing searched</div>;
  } else {
    return (
      <div className="mt-[9px] flex flex-col ">
        {searchProperty.isLoading && (
          <div className="mx-auto inline-block">
            <div className="mt-[20px] w-full md:mt-[43px]">
              <Loading />
            </div>
          </div>
        )}

        {searchProperty.error && (
          <div className="mt-[20px] w-full md:mt-[43px]">
            Error loading featured properties: {searchProperty.error.message}
          </div>
        )}

        {searchProperty.data &&
          !searchProperty.isLoading &&
          searchProperty.data.total <= 0 && (
            <div className="mx-auto inline-block">
              <div className="mt-[43px] w-full">
                <p>No results found</p>
              </div>
            </div>
          )}
        <div className="featured-properties_grid flex flex-wrap">
          {/* <div className="featured-properties_grid"> */}
          {properties.length > 0 &&
            !searchProperty.isLoading &&
            Array.isArray(properties) &&
            properties.map((p: Property) => (
              <Fragment key={p.id}>
                <PropertyCard
                  id={p.id}
                  uniqueId={p.unique_id ?? ''}
                  imageUrl={p.main_image}
                  altText={`Photo of ${p.property_name}`}
                  title={p.property_name}
                  location={p.location}
                  bedrooms={p.number_of_bedroom}
                  bathrooms={p.number_of_bathroom}
                  area={p.area_in_sqft}
                  price={p.price}
                />
              </Fragment>
            ))}
        </div>
        <button
          type="submit"
          className="mx-auto mt-[39px] block rounded-3xl border border-solid border-[#EDDFD0] px-[50px] py-[15px] text-sm transition
                        duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black"
          onClick={() => {
            //setPageIndex((prevIndex) => prevIndex + 1);
            console.log(searchProperty.data);

            const params = new URLSearchParams(window.location.search);
            if (params.toString())
              setSearchParameters(
                `?page=${searchProperty.data?.current_page! + 1}&${params.toString()}`,
              );
            else setSearchParameters(`?page=1}`);
          }}
        >
          Load More
        </button>
      </div>
    );
  }
};
