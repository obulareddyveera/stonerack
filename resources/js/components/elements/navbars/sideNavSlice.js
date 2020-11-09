import { createSlice } from "@reduxjs/toolkit";
import _ from "underscore";

import sideNavMetadata from "./sideNavMetadata";

export const sideNavMetadataSlice = createSlice({
    name: "sidenav",
    initialState: sideNavMetadata,
    reducers: {
        bindToggleSubmenu: (state, action) => {
            console.log('--== bindToggleSubmenu ', action);
            return action.payload;
        },
        bindLiItemSelect: (state, action) => {
            console.log('--== bindLiItemSelect ', action);
            return action.payload;
        },
    }
});

export const { bindToggleSubmenu, bindLiItemSelect } = sideNavMetadataSlice.actions;

export const doLiItemSelect = (itemList, item) => async (dispatch) => {
    try {
      const clonedItemList = _.map(itemList, _.clone);
      console.log('--== doLiItemSelect ', clonedItemList, item);
      const response = [];
      clonedItemList.forEach((entity) => {
        if (entity.subMenu && entity.subMenu.length > 0) {
          entity.subMenu.forEach((subEntity) => {
            if (subEntity.id === item.id) {
                debugger;
              subEntity.className = "active";
              entity.className = "active";
            } else {
              subEntity.className = null;
              entity.className = null;
            }
          });
        } else {
          if (entity.id === item.id) {
            debugger;
            entity.className = "active";
          } else {
            entity.className = null;
          }
        }
        response.push(Object.create(entity));
      });
  
      dispatch(bindLiItemSelect(response));
    } catch (err) {
      console.log(err);
    }
  };
  
  export const doToggleSubmenu = (itemList, item) => async (dispatch) => {
    console.log('--== I came to action of bindToggleSubmenu ==--', itemList);
    try {
      const clonedItemList = _.map(itemList, _.clone);
      const response = [];
      clonedItemList.forEach((entity) => {
        const newEntity = Object.create(entity);
        if (newEntity.id === item.id) {
            newEntity.showSubmenu = !newEntity.showSubmenu;
        }
        response.push(newEntity)
      });

      dispatch(bindToggleSubmenu(response));
    } catch (err) {
      console.log(err);
    }
  };

export const sideNavMetadataSelector = state => {
    console.log('--== sideNavMetadataSelector ', state);
    return state.sideNav;
};

export default sideNavMetadataSlice.reducer;
