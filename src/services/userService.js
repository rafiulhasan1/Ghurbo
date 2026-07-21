import axiosInstance from "../api/axiosInstance";

// Create User
export const createUser = async (userData) => {
    const { data } = await axiosInstance.post("/users", userData);
    return data;
};

// Get All Users
export const getUsers = async () => {
    const { data } = await axiosInstance.get("/users");
    return data;
};