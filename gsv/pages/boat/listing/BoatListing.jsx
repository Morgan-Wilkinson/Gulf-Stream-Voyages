import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { BoatListContext } from "../../_app";
import ReactPaginate from "react-paginate";

const BoatListing = () => {
  const router = useRouter();
  const delayAnimation = 100;
  const boatListingContext = useContext(BoatListContext);

  if (
    boatListingContext == null ||
    boatListingContext.obj == null ||
    boatListingContext.boatList == null ||
    boatListingContext.boatList.length == 0
  ) {
    router.push("/404");
  }

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((element, index) => (
            <div
              className="col-12"
              key={index}
              data-aos="fade"
              data-aos-delay={delayAnimation * index}
            >
              <div className="border-top-light pt-30">
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-md-auto">
                    <div className="w-250 md:w-1/1 rounded-4">
                      <div className="cardImage ">
                        <div className="custom_inside-slider">
                          <Swiper
                            className="mySwiper"
                            modules={[Pagination, Navigation]}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                          >
                            {element?.featuredImages?.map((slide, i) => (
                              <SwiperSlide key={i}>
                                <div className="ratio ratio-1:1">
                                  <div className="cardImage__content">
                                    <Image
                                      width={300}
                                      height={300}
                                      className="rounded-4 col-12 js-lazy"
                                      src={slide}
                                      alt="image"
                                    />
                                  </div>

                                  <div className="cardImage__wishlist">
                                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                      <i className="icon-heart text-12" />
                                    </button>
                                  </div>
                                  {/* End .cardImage__wishlist */}
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                      {/* End .cardImage__content */}
                    </div>
                    {/* End cartImage */}
                  </div>
                  {/* End .col-auto */}

                  <div className="col-md">
                    <div className="text-14 text-light-1">
                      <i className="icon-star text-yellow-1 text-10" />{" "}
                      <span className="text-15 fw-500 text-dark-1">
                        {element?.ratings}
                      </span>
                    </div>
                    <h3 className="text-18 lh-16 fw-500 mt-5">
                      {element?.name}
                    </h3>
                    <div className="row y-gap-15 pt-30">
                      <div className="col-auto">
                        <div className="text-14">Boat Type</div>
                        <div className="text-14 text-light-1">
                          {element?.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End col-md */}

                  <div className="col-md-auto text-right md:text-left">
                    <div className="col-auto">
                      <div className="text-14 lh-13 text-light-1">
                        {element?.numberOfReviews} reviews
                      </div>
                    </div>
                    <Link
                      href={`/boat/detailView/${element.name}`}
                      className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-24"
                    >
                      View Detail <div className="icon-arrow-top-right ml-15" />
                    </Link>
                  </div>
                  {/* End .col-md-auto */}
                </div>
                {/* End .row */}
              </div>
              {/* End border-top */}
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = boatListingContext.boatList.slice(
      itemOffset,
      endOffset
    );
    const pageCount = Math.ceil(
      boatListingContext.boatList.length / itemsPerPage
    );
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset =
        (event.selected * itemsPerPage) % boatListingContext.boatList.length;

      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <div className="border-top-light mt-30 pt-30">
          <div className="col-12">
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <div className="col-auto md:order-2">
                  <button className="button -blue-1 size-40 rounded-full border-light">
                    <i className="icon-chevron-right text-12" />
                  </button>
                </div>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={
                <span>
                  <div className="col-auto md:order-1">
                    <button className="button -blue-1 size-40 rounded-full border-light">
                      <i className="icon-chevron-left text-12" />
                    </button>
                  </div>
                </span>
              }
              renderOnZeroPageCount={null}
              containerClassName="pagination flex-center justify-center x-gap-40"
              pageClassName="size-40 flex-center rounded-full cursor-pointer"
              activeClassName="size-40 flex-center rounded-full cursor-pointer bg-dark-1 text-white"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PaginatedItems itemsPerPage={4}></PaginatedItems>
    </>
  );
};

export default BoatListing;
