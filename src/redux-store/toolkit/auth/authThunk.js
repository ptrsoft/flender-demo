import { createAsyncThunk } from "@reduxjs/toolkit";
import secureApi from "../../../Service/FetchInterceptor";

// export const login = createAsyncThunk(
//   "auth/login",
//   async (params, thunkAPI) => {
//     const response = await secureApi
//       .post("/api/auth/login", params, {
//         "public-request": "true",
//       })
//       .catch((e) => {
//         return e;
//       });
//     if (response.data.success) {
//       const { access_token, id } = response.data.data;
//       // Save the token to local storage
//       localStorage.setItem("authToken", access_token);
//       localStorage.setItem("currentUserId", id);
//       // Display success message
//       antdMessage.success(response.data.message);
//       return response.data;
//     } else {
//       // Display error message
//       antdMessage.error(response.data.message);
//       return thunkAPI.rejectWithValue(response.data.data);
//     }
//   }
// );
