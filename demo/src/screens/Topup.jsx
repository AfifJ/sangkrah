import { CheckCircleIcon } from "@heroicons/react/24/solid";
import BackNavbar from "../components/BackNavbar";
import { useState } from "react";

const Topup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <BackNavbar>Topup Saldo Sangkrah</BackNavbar>
      <div className="mx-5">
        <h2 className="font-semibold mt-2">Pilih metode pembayaran</h2>
        <div className="mt-4 space-y-2">
          <label htmlFor="alfamart" className="cursor-pointer block">
            <input
              className="peer sr-only"
              type="radio"
              name="metode"
              id="alfamart"
              checked={selectedOption === "alfamart"}
              onChange={() => handleOptionChange("alfamart")}
            />
            <div className="bg-white rounded-xl flex items-center px-4 py-4">
              <div className="mr-3 h-6 w-10 flex justify-center items-center">
                <div className="bg-blue-700 w-full h-full rounded-md"></div>
              </div>
              <p>Alfamaret</p>
              {selectedOption === "alfamart" && (
                <CheckCircleIcon className="ml-auto w-6 h-6" />
              )}
            </div>
          </label>
          <label htmlFor="lawran" className="cursor-pointer block">
            <input
              className="peer sr-only"
              type="radio"
              name="metode"
              id="lawran"
              checked={selectedOption === "lawran"}
              onChange={() => handleOptionChange("lawran")}
            />
            <div className="bg-white rounded-xl flex items-center px-4 py-4">
              <div className="mr-3 h-6 w-10 flex justify-center items-center">
                <div className="bg-blue-400 w-full h-full rounded-md text-center overflow-hidden">
                  LAWRAN
                </div>
              </div>
              <p>Lawran</p>
              {selectedOption === "lawran" && (
                <CheckCircleIcon className="ml-auto w-6 h-6" />
              )}
            </div>
          </label>
          <label htmlFor="circleM" className="cursor-pointer block">
            <input
              className="peer sr-only"
              type="radio"
              name="metode"
              id="circleM"
              checked={selectedOption === "circleM"}
              onChange={() => handleOptionChange("circleM")}
            />
            <div className="bg-white rounded-xl flex items-center px-4 py-4">
              <div className="mr-3 h-6 w-10 flex justify-center items-center">
                <div className="bg-red-700 w-full h-full rounded-md text-center text-white">
                  m
                </div>
              </div>
              <p>Circel M</p>
              {selectedOption === "circleM" && (
                <CheckCircleIcon className="ml-auto w-6 h-6" />
              )}
            </div>
          </label>
        </div>
      </div>

      <div>
        Konfirmasi
      </div>
    </>
  );
};

export default Topup;