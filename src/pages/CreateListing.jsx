// eslint-disable-next-line no-unused-vars
import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            maxLength={62}
            minLength={10}
            required
            id="name"
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            required
            id="description"
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            maxLength={62}
            minLength={10}
            required
            id="address"
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-8 flex-wrap">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="border-gray-300 p-3 rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="border-gray-300 p-3 rounded-lg"
              />
              <p>Baths</p>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                id="regularPrice"
                required
                className="border-gray-300 p-3 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span>($ / month)</span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                id="discountedPrice"
                required
                className="border-gray-300 p-3 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Discounted Price</p>
                <span>($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-700 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-3">
            <input
              className="border p-3 border-gray-300 rounded-lg w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-md disabled:opacity-80">
              upload
            </button>
          </div>
        <button className="uppercase p-3 bg-slate-700 text-white rounded hover:opacity-95">Create listing</button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
