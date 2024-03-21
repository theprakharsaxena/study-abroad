"use client";
import { ChangeEvent, useState } from "react";
import { GlobeDemo } from "./GlobeDemo";
import axios from "axios";

interface FormData {
  name: string;
  mobile: string;
  emailId: string;
  gender: string;
  countryCode: string;
  previousEducation: string;
}

const initialFormData: FormData = {
  name: "",
  mobile: "",
  emailId: "",
  gender: "",
  countryCode: "91",
  previousEducation: "",
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.emailId || !formData.mobile) {
      alert("Please enter the mandatory fields");
      return;
    }
    console.log(formData);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://horizonwings-production.up.railway.app/api/v1/registerStudent",
        formData,
        config
      );
      console.log("response", response);

      alert("Response submitted successfully !");
      setFormData({
        name: "",
        mobile: "",
        emailId: "",
        gender: "",
        countryCode: "91",
        previousEducation: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" id="contact">
      <div className="w-full h-full flex justify-center items-center bg-white">
        <GlobeDemo />
      </div>
      <div>
        <section className=" ">
          <div className="py-8 lg:py-16 px-4 max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Register Now
            </h2>
            <p className="mb-8 font-light text-gray-500  sm:text-xl">
              Make your dreams come true today!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 mb-8">
              <div className="flex flex-col">
                <h5 className="font-bold text-lg">Email:</h5>
                <p className="text-xl">info.horizonwings@gmail.com</p>
              </div>
              <div className="flex flex-col">
                <h5 className="font-bold text-lg">Phone:</h5>
                <p className="text-xl">+91 9953102105</p>
                <p className="text-xl">+91 8920338680</p>
                <p className="text-xl">+91 9695033798</p>
              </div>
            </div>
            <form action="#">
              <div className="space-y-3 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8">
                  <div>
                    <label className="block mb-2 text-sm font-lg font-semibold text-gray-900">
                      Your name*
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleChange("name")}
                      id="name"
                      className="border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#8ec442] focus:ring-[#8ec442] bg-gray-50 shadow-sm text-gray-900 text-sm block w-full"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-lg font-semibold text-gray-900">
                      Contact No.*
                    </label>
                    <input
                      type="text"
                      value={formData.mobile}
                      onChange={handleChange("mobile")}
                      id="contact_no"
                      className="border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#8ec442] focus:ring-[#8ec442] bg-gray-50 shadow-sm text-gray-900 text-sm block w-full"
                      placeholder="0123456789"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-lg font-semibold text-gray-900">
                    Your email*
                  </label>
                  <input
                    type="email"
                    value={formData.emailId}
                    onChange={handleChange("emailId")}
                    id="email"
                    className="border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#8ec442] focus:ring-[#8ec442] bg-gray-50 shadow-sm text-gray-900 text-sm block w-full"
                    placeholder="name@horizonwings.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-8">
                  <div className="">
                    <label className="block mb-2 text-sm font-lg font-semibold text-gray-900">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={handleChange("gender")}
                      id="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8ec442] focus:border-[#8ec442] block w-full p-2.5"
                    >
                      <option selected value="">
                        Select Gender
                      </option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHERS">Other</option>
                    </select>
                  </div>
                  <div className="">
                    <label className="block mb-2 text-sm font-lg font-semibold text-gray-900">
                      Previous Education
                    </label>
                    <select
                      value={formData.previousEducation}
                      onChange={handleChange("previousEducation")}
                      id="education"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8ec442] focus:border-[#8ec442] block w-full p-2.5"
                    >
                      <option selected value="">
                        Select Previous Education
                      </option>
                      <option value="HIGH_SCHOOL">High School</option>
                      <option selected value="SECONDARY_EDUCATION">
                        Secondary Education
                      </option>
                      <option value="UNDER_GRADUATE">Under Graduate</option>
                      <option value="POST_GRADUATE">Post Graduate</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => handleRegister(e)}
                className="py-3 px-5 mt-5 sm:mt-8 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#8ec442]"
              >
                Register
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegistrationForm;
