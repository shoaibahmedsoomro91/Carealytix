import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ILogBook from "./src/types/LogBook";
import ILogBookTypes from "./src/types/LogBookTypes";
/**
 * TODO:
 * Manage redux reducers here and add them to the logbookSlice
 * The reducer is already added to the store.ts file
 */

 export interface LogBookState {
  types: Array<ILogBookTypes>
  value: Array<ILogBook>
}

const initialState: LogBookState = {
  types : [
    {
      type: "NUMERIC",
      name: "POTASSIUM",
      heading : "POTASSIUM",
      latest_entry: {
        type: "INTEGER",
        name: "WELLBEING",
        minValue: 1,
        maxValue: 6,
        metadataFields: [
          
        ]
      }
    },
    {
      type: "NUMERIC",
      name: "PHOSPHATE",
      heading : "PHOSPHATE",
      latest_entry: {
        type: "INTEGER",
        name: "WELLBEING",
        minValue: 1,
        maxValue: 6,
        metadataFields: [
          
        ]
      }
    },
    {
      type: "NUMERIC",
      name: "WEIGHT",
      heading : "WEIGHT",
      latest_entry: {
        type: "INTEGER",
        name: "WELLBEING",
        minValue: 1,
        maxValue: 6,
        metadataFields: [
          
        ]
      }
    },
    {
      type: "INTEGER",
      name: "WELLBEING",
      heading : "WELLBEING",
      latest_entry: {
        type: "INTEGER",
        name: "WELLBEING",
        minValue: 1,
        maxValue: 6,
        metadataFields: [
          
        ]
      }
    },
    {
      type: "INTEGER",
      name: "ITCH_INTENSITY",
      heading : "ITCH INTENSITY",
      latest_entry: {
        type: "INTEGER",
        name: "WELLBEING",
        minValue: 1,
        maxValue: 6,
        metadataFields: [
          
        ]
      }
    }
  ],
  value: []
}



const logbookSlice = createSlice({
  name: "logbook",
  initialState: initialState,
  reducers: {    
    addValue : (state, action) => {      
      state.value.push(action.payload);
    }
  },
});

export const { addValue } = logbookSlice.actions
export const logbookReducer = logbookSlice.reducer;
