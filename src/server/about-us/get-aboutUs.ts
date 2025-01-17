"use server";

import { axiosInstance } from "@/lib/server-axios-instance";
import {
    APIResponse
} from "@/types/types";
import axios, { AxiosError, AxiosResponse } from "axios";

export const getAboutUs = async () => {
  try {
    const res: AxiosResponse<APIResponse<"api::about-us.about-us">> =
      await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}api/about-us?populate=*`);

    return {
      data: res.data.data,
      status: res.status,
    };
  } catch (error: AxiosError | any) {
    return {
      error: error?.response?.data || { message: "An error occurred!" },
      status: error?.response?.status || 500,
    };
  }
};