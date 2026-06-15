import axios from "axios";

const api = axios.create({
  baseURL:
    "https://fedskillstest.coalitiontechnologies.workers.dev/",
  auth: {
    username: "coalition",
    password: "skills-test",
  },
});

export const getDashboardData = async () => {
  try {
    const response = await api.get("/");

    const patients = response.data;

    const selectedPatient = patients.find(
      (patient) => patient.name === "Jessica Taylor"
    );

    return {
      patients,
      selectedPatient,
    };
  } catch (error) {
    console.error("API Error:", error);

    throw new Error(
      "Unable to load dashboard data."
    );
  }
};