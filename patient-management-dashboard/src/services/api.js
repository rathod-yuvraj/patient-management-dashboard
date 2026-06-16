import axios from "axios";

const api = axios.create({
  baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev/",
  headers: {
    Authorization: "Basic " + btoa("coalition:skills-test"),
  },
});

export const getDashboardData = async () => {
  try {
    const response = await api.get("/");

    const patients = response.data;

    // default: first patient (better than hardcoding name)
    const selectedPatient = patients?.[0] || null;

    return {
      patients,
      selectedPatient,
    };
  } catch (error) {
    console.error("API Error:", error);

    throw new Error("Unable to load dashboard data.");
  }
};