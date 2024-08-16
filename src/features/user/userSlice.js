import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAddress from '../../services/apiGeocoding';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// async function fetchAddress() {}

// this is thunk and action creator funtion  ,,this teqniqe for the redux-toolkit,first armunet is action type name and second argument is the actual thunk function...i didn't like this way becasue we need to write ass code in userslice ,,we need wrtie extraReducer and etc...
export const fetchAddress = createAsyncThunk(
  'user/fetchAdress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // when the position is FULLFILED
    return { position, address };
  }
);

//redux-toolkit

const initialState = {
  username: '',
  // these are for thunk
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },

  // for thunk...it's so bad codes, I like classic thunk.....we need write of the 3 status : loading | idle | rejected....This 3 status check is keep in mind and use in all of the project that need thunk like this.
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle';
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address , make sure to fill this field';
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
