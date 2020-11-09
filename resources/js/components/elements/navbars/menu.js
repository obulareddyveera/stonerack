import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { sideNavMetadataSelector, doLiItemSelect, doToggleSubmenu } from "./sideNavSlice";

/**
 * Source URL -- https://bootsnipp.com/snippets/prnvG
 */

export default function AppNavigationMenu() {
    const dispatch = useDispatch();
    const metadata = useSelector(sideNavMetadataSelector);

    const onLiClick = (event, item) => {
      if (item.subMenu) {
        event.preventDefault();
        event.stopPropagation();
        console.log("--== This Item has SubMenu ==--");
        dispatch(doToggleSubmenu(metadata, item));
      } else {
        dispatch(doLiItemSelect(metadata, item));
      }
    };

    console.log('--== Menu Metadata ', metadata);

    const getLinkTag = item => {
        const randomUniqueId = `submenuId${new Date().getTime()}_${item.id}`;

        return (
            <li
                className={item.className}
                key={item.id}
                onClick={event => onLiClick(event, item)}
            >
                <React.Fragment>
                    {item.type === "link" && (
                        <React.Fragment>
                            <a
                                href={item.url}
                                className="d-flex justify-content-start"
                            >
                                <div>
                                    {item.iconComponent &&
                                        React.createElement(
                                            item.iconComponent,
                                            {
                                                size: "20",
                                                color: "#fff"
                                            }
                                        )}
                                </div>
                                <div className="ml-3">
                                    {item.displayName}
                                </div>
                                <div>
                                    {item.subMenu && (
                                        <button className="btn text-white submenu-indicator shadow-0">
                                            {item.showSubmenu ? "-" : "+"}
                                        </button>
                                    )}
                                </div>
                            </a>
                        </React.Fragment>
                    )}
                    {item.type === "info" && (
                        <a href="#" onClick={event => event.preventDefault()}>
                            {item.displayName}
                        </a>
                    )}
                    {item.subMenu && (
                        <ul
                            className={`submenu ${
                                item.showSubmenu ? "d-block" : "d-none"
                            }`}
                            key={randomUniqueId}
                            id={randomUniqueId}
                        >
                            {item.subMenu.map(entity => {
                                return getLinkTag(entity);
                            })}
                        </ul>
                    )}
                </React.Fragment>
            </li>
        );
    };

    return (
        <React.Fragment>
            {metadata && metadata.length > 0 && (
                <div
                    id="jquery-accordion-menu"
                    className="jquery-accordion-menu"
                >
                    <ul>
                        {metadata.map(item => {
                            return getLinkTag(item);
                        })}
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
}
